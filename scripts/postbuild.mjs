// ng build のあと: GitHub Pages 用に 404.html を置く
import { copyFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'dist', 'toro-website', 'browser');

// プリレンダーしていない URL (GitHub Pages では 404) も、アプリが開いて「見つかりません」を出せるようにする
const csr = join(OUT, 'index.csr.html');
const fallback = join(OUT, '404', 'index.html');
try {
  await access(fallback);
  await copyFile(fallback, join(OUT, '404.html'));
} catch {
  await copyFile(csr, join(OUT, '404.html'));
}
console.log('postbuild: 404.html');
