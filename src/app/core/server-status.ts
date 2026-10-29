import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SITE } from './site';

export interface ServerStatus {
  online: boolean;
  players?: number;
  max?: number;
  version?: string;
}

/** mcsrvstat.us でサーバーの状態を見る (ブラウザーでだけ) */
@Injectable({ providedIn: 'root' })
export class ServerStatusService {
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly status = signal<ServerStatus | null>(null);
  private fetchedAt = 0;

  refresh() {
    if (!this.browser || Date.now() - this.fetchedAt < 60_000) return;
    this.fetchedAt = Date.now();
    fetch(`https://api.mcsrvstat.us/3/${SITE.javaAddress}`)
      .then((r) => r.json())
      .then((d) =>
        this.status.set({
          online: !!d.online,
          players: d.players?.online,
          max: d.players?.max,
          version: d.protocol?.name ?? d.version,
        }),
      )
      .catch(() => this.status.set(null));
  }
}
