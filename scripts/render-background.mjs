// BlueMap (3d-map.torosaba.net) を GPU で描画したまま一コマずつ撮影して、背景の動画を作る。
// 細かいブロック (hires タイル) まで読み込み終わってから撮るので、ブラウザーで直接動かすより綺麗になる。
//
//   node scripts/render-background.mjs                 すべての名所を撮って public/background に書き出す
//   node scripts/render-background.mjs spawn wayama    指定した名所だけ
//   node scripts/render-background.mjs --frames 30     試し撮り (先頭の 30 コマだけ)
//
// 必要なもの: Google Chrome, ffmpeg (libx264, libsvtav1。あれば h264_nvenc で中間ファイルを速く作る)
import { spawn } from 'node:child_process';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { BLUEMAP_URL, BLUEMAP_MAP, VIDEO, POIS } from './background.config.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public', 'background');
const WORK = join(ROOT, '.cache', 'background');
const CHROME =
  process.env.CHROME_PATH ??
  ['C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(existsSync);

const args = process.argv.slice(2);
const frameLimit = args.includes('--frames') ? Number(args[args.indexOf('--frames') + 1]) : Infinity;
const only = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--frames');
const targets = only.length ? POIS.filter((p) => only.includes(p.id)) : POIS;

function run(cmd, argv, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, argv, { stdio: ['ignore', 'inherit', 'inherit'], ...opts });
    p.on('error', reject);
    p.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))));
  });
}

async function hasEncoder(name) {
  return new Promise((resolve) => {
    const p = spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-f', 'lavfi', '-i', 'color=black:s=256x256:d=0.1', '-c:v', name, '-f', 'null', '-']);
    p.on('exit', (code) => resolve(code === 0));
    p.on('error', () => resolve(false));
  });
}

/** ページの中で動かす: UI を隠し、カメラの操作を自分で持つ */
function setup({ hires, lowres }) {
  const style = document.createElement('style');
  style.textContent = `
    body > :not(#map-container) { display: none !important; }
    #map-container > div > div { display: none !important; }
  `;
  document.head.appendChild(style);
  const app = window.bluemap;
  // アプリがカメラの移動に合わせて読み込み範囲を戻さないようにする
  app.cameraMoved = () => {};
  app.updatePageAddress = () => {};
  app.mapViewer.superSampling = 1;
  app.mapViewer.data.loadedHiresViewDistance = hires;
  app.mapViewer.data.loadedLowresViewDistance = lowres;
}

function setCamera({ x, y, z, distance, rotation, angle, hires, lowres }) {
  const mv = window.bluemap.mapViewer;
  const cm = mv.controlsManager;
  cm.position.set(x, y, z);
  cm.distance = distance;
  cm.rotation = rotation;
  cm.angle = angle;
  cm.tilt = 0;
  cm.ortho = 0;
  mv.loadMapArea(x, z, hires, lowres);
}

/** タイルの読み込みが落ち着いたか */
function tilesIdle() {
  const m = window.bluemap.mapViewer.map;
  if (!m) return false;
  const managers = [m.hiresTileManager, ...m.lowresTileManager];
  return managers.every((t) => !t || t.currentlyLoading === 0);
}

async function waitIdle(page, stableMs, timeoutMs) {
  const start = Date.now();
  let since = 0;
  while (Date.now() - start < timeoutMs) {
    const idle = await page.evaluate(tilesIdle);
    if (idle) {
      since ||= Date.now();
      if (Date.now() - since >= stableMs) return true;
    } else {
      since = 0;
    }
    await new Promise((r) => setTimeout(r, 40));
  }
  return false;
}

async function renderPoi(browser, poi, intermediateCodec) {
  const page = await browser.newPage();
  if (!VIDEO.marumasign) {
    // MarumaSign の看板画像 (外部サイトの画像) を映さない
    await page.setRequestInterception(true);
    page.on('request', (req) => (/marumasign/i.test(req.url()) ? req.abort() : req.continue()));
  }
  await page.setViewport({ width: VIDEO.width, height: VIDEO.height, deviceScaleFactor: 1 });
  const hash = `#${BLUEMAP_MAP}:${poi.x}:${poi.y}:${poi.z}:${VIDEO.distance}:${poi.rotation}:${VIDEO.angle}:0:0:perspective`;
  await page.goto(BLUEMAP_URL + '/' + hash, { waitUntil: 'networkidle2', timeout: 120_000 });
  await page.waitForFunction(() => window.bluemap?.mapViewer?.map?.hiresTileManager, { timeout: 120_000 });
  const gpu = await page.evaluate(() => {
    const gl = document.createElement('canvas').getContext('webgl2');
    const ext = gl?.getExtension('WEBGL_debug_renderer_info');
    return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'unknown';
  });
  console.log(`[${poi.id}] GPU: ${gpu}`);
  await page.evaluate(setup, { hires: VIDEO.hiresViewDistance, lowres: VIDEO.lowresViewDistance });

  const total = Math.min(frameLimit, VIDEO.fps * VIDEO.seconds);
  const file = join(WORK, `${poi.id}.mp4`);
  const enc = intermediateCodec === 'h264_nvenc'
    ? ['-c:v', 'h264_nvenc', '-preset', 'p7', '-rc', 'vbr', '-cq', '14', '-b:v', '0']
    : ['-c:v', 'libx264', '-preset', 'fast', '-crf', '12'];
  const ff = spawn('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(VIDEO.fps), '-c:v', 'mjpeg', '-i', '-', ...enc, '-pix_fmt', 'yuv420p', file], {
    stdio: ['pipe', 'inherit', 'inherit'],
  });
  const done = new Promise((resolve, reject) => {
    ff.on('exit', (c) => (c === 0 ? resolve() : reject(new Error(`ffmpeg exited ${c}`))));
  });

  const cdp = await page.createCDPSession();
  const started = Date.now();
  for (let f = 0; f < total; f++) {
    const t = f / (VIDEO.fps * VIDEO.seconds);
    // ゆっくり回りながら、少しだけ近づく
    await page.evaluate(setCamera, {
      x: poi.x,
      y: poi.y,
      z: poi.z,
      distance: VIDEO.distance * (1.06 - 0.06 * t),
      rotation: poi.rotation + VIDEO.turn * t,
      angle: VIDEO.angle,
      hires: VIDEO.hiresViewDistance,
      lowres: VIDEO.lowresViewDistance,
    });
    // 最初のコマは全部読み込むまで長めに待つ
    const ok = await waitIdle(page, f === 0 ? 1500 : 120, f === 0 ? 300_000 : 20_000);
    if (!ok) console.warn(`[${poi.id}] frame ${f}: タイルの読み込みを待ちきれませんでした`);
    // 読み込んだタイルが描画に反映されるまで 2 フレーム待つ
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 95, optimizeForSpeed: true });
    if (!ff.stdin.write(Buffer.from(data, 'base64'))) await new Promise((r) => ff.stdin.once('drain', r));
    if (f % 30 === 0) console.log(`[${poi.id}] ${f}/${total} (${((Date.now() - started) / 1000).toFixed(0)}s)`);
  }
  ff.stdin.end();
  await done;
  await page.close();
  return file;
}

/** 中間ファイルから、Web 用の動画 (AV1 1080p と H.264 720p) とポスター画像を作る */
async function encodeForWeb(id, src) {
  await run('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-i', src, '-an',
    '-c:v', 'libsvtav1', '-preset', '5', '-crf', '40', '-g', '120', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    join(OUT, `${id}.av1.mp4`)]);
  await run('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-i', src, '-an',
    '-vf', 'scale=1280:-2', '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    join(OUT, `${id}.h264.mp4`)]);
  await run('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-i', src, '-frames:v', '1',
    '-vf', 'scale=1280:-2', '-q:v', '4', join(OUT, `${id}.jpg`)]);
}

async function main() {
  if (!CHROME) throw new Error('Chrome が見つかりません (CHROME_PATH で指定できます)');
  await mkdir(OUT, { recursive: true });
  await mkdir(WORK, { recursive: true });
  const intermediate = (await hasEncoder('h264_nvenc')) ? 'h264_nvenc' : 'libx264';
  console.log('intermediate encoder:', intermediate);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    // ヘッドレスでも GPU (ANGLE / D3D11 など) で描画させる
    args: ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--use-angle=d3d11', '--enable-unsafe-webgpu', '--disable-background-timer-throttling', '--disable-renderer-backgrounding'],
  });
  try {
    for (const poi of targets) {
      const file = await renderPoi(browser, poi, intermediate);
      if (Number.isFinite(frameLimit)) {
        console.log(`[${poi.id}] 試し撮り: ${file}`);
        continue;
      }
      await encodeForWeb(poi.id, file);
      console.log(`[${poi.id}] done`);
    }
  } finally {
    await browser.close();
  }

  if (!Number.isFinite(frameLimit)) {
    const manifest = {
      generatedAt: new Date().toISOString(),
      bluemap: { url: BLUEMAP_URL, map: BLUEMAP_MAP },
      seconds: VIDEO.seconds,
      pois: POIS.filter((p) => existsSync(join(OUT, `${p.id}.av1.mp4`))).map(({ rotation, ...p }) => ({
        ...p,
        av1: `${p.id}.av1.mp4`,
        h264: `${p.id}.h264.mp4`,
        poster: `${p.id}.jpg`,
      })),
    };
    await writeFile(join(OUT, 'background.json'), JSON.stringify(manifest, null, 2) + '\n');
    console.log('wrote', join(OUT, 'background.json'));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
