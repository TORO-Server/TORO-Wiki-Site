import { Injectable, computed, signal } from '@angular/core';
import { BackgroundManifest, MapMode, Poi } from './map-types';

/** 背景の動画と、それを操作する UI (トップのキャプション) の間で状態を共有する */
@Injectable({ providedIn: 'root' })
export class MapStage {
  readonly mode = signal<MapMode>('ambient');
  readonly manifest = signal<BackgroundManifest | null>(null);
  /** 映している名所の番号 */
  readonly index = signal(0);

  readonly pois = computed(() => this.manifest()?.pois ?? []);
  readonly current = computed<Poi | null>(() => this.pois()[this.index()] ?? null);

  go(i: number) {
    const n = this.pois().length;
    if (n) this.index.set(((i % n) + n) % n);
  }

  next(step = 1) {
    this.go(this.index() + step);
  }
}
