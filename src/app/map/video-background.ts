import { Component, ElementRef, afterNextRender, effect, inject, signal, untracked, viewChildren } from '@angular/core';
import { MapStage } from './map-stage';
import { BackgroundManifest, Poi } from './map-types';

/**
 * デスクトップの壁紙。BlueMap を GPU で描画して書き出した名所ごとの動画 (scripts/render-background.mjs) を、
 * 2 つの <video> で交互にクロスフェードしながら流す。動画がまだない間は、XP の青い単色の壁紙。
 */
@Component({
  selector: 'app-video-background',
  template: `
    @for (slot of slots; track $index) {
      <video
        #video
        muted
        playsinline
        preload="auto"
        disablepictureinpicture
        aria-hidden="true"
        [class.on]="front() === $index && ready()"
        (ended)="onEnded($index)"
      ></video>
    }
    @if (still(); as poster) {
      <img class="still on" [src]="poster" alt="" aria-hidden="true" />
    }
    <div class="veil"></div>
  `,
  styleUrl: './video-background.scss',
  host: { '[attr.data-mode]': 'stage.mode()' },
})
export class VideoBackground {
  protected readonly stage = inject(MapStage);
  protected readonly slots = [0, 1];
  private readonly videos = viewChildren<ElementRef<HTMLVideoElement>>('video');

  protected readonly front = signal(0);
  protected readonly ready = signal(false);
  /** 動画を流さないとき (動きを減らす設定・省データ) の一枚絵 */
  protected readonly still = signal<string | null>(null);
  private motion = true;
  private shownIndex = -1;

  constructor() {
    afterNextRender(() => void this.start());

    // UI から名所が変えられたら、その動画へ切り替える
    effect(() => {
      const i = this.stage.index();
      const poi = this.stage.current();
      untracked(() => {
        if (poi && i !== this.shownIndex) this.show(poi, i);
      });
    });
  }

  private async start() {
    const manifest = (await fetch('/background/background.json')
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)) as BackgroundManifest | null;
    if (!manifest?.pois.length) return;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    this.motion = !matchMedia('(prefers-reduced-motion: reduce)').matches && !nav.connection?.saveData;
    this.stage.manifest.set(manifest);
    this.show(manifest.pois[0], 0);
  }

  private src(poi: Poi) {
    // AV1 を再生できるなら 1080p の AV1、だめなら 720p の H.264
    const probe = document.createElement('video');
    const av1 = probe.canPlayType('video/mp4; codecs="av01.0.08M.08"') === 'probably';
    return `/background/${av1 ? poi.av1 : poi.h264}`;
  }

  private show(poi: Poi, i: number) {
    this.shownIndex = i;
    if (!this.motion) {
      this.still.set(`/background/${poi.poster}`);
      return;
    }
    const videos = this.videos();
    if (videos.length < 2) return;
    const back = 1 - this.front();
    const v = videos[back].nativeElement;
    v.poster = `/background/${poi.poster}`;
    v.src = this.src(poi);
    v.currentTime = 0;
    const play = () => {
      v.play()
        .then(() => {
          this.front.set(back);
          this.ready.set(true);
          // 後ろに回った動画は、フェードが終わってから止める
          setTimeout(() => videos[1 - back].nativeElement.pause(), 1500);
        })
        .catch(() => {
          // 自動再生できない環境では、一枚絵にする
          this.motion = false;
          this.still.set(`/background/${poi.poster}`);
        });
    };
    if (v.readyState >= 3) play();
    else v.addEventListener('canplay', play, { once: true });
  }

  protected onEnded(slot: number) {
    if (slot === this.front()) this.stage.next(1);
  }
}
