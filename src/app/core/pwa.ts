import { DOCUMENT, Injectable, inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs';

/** 開いたままのタブで、新しい版を探す間隔 */
const CHECK_INTERVAL = 60 * 60 * 1000;

/**
 * 新しい版を公開したら、キャッシュを消さなくても届くようにする。
 * Service Worker が新しい版を読み終えたら、次にページを移るときにページごと読み直す (読んでいる途中では入れ替えない)。
 */
@Injectable({ providedIn: 'root' })
export class PwaUpdates {
  private readonly sw = inject(SwUpdate);
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);
  private ready = false;

  start() {
    if (!this.sw.isEnabled) return;

    this.sw.versionUpdates.pipe(filter((e) => e.type === 'VERSION_READY')).subscribe(() => (this.ready = true));
    // キャッシュが壊れて、今の版を続けられないとき
    this.sw.unrecoverable.subscribe(() => this.doc.location.reload());

    this.router.events.pipe(filter((e) => e instanceof NavigationStart)).subscribe((e) => {
      if (!this.ready) return;
      // 戻る・進むでは、アドレスはもう移った先になっている
      if (e.navigationTrigger === 'popstate') this.doc.location.reload();
      else this.doc.location.assign(e.url);
    });

    const check = () => void this.sw.checkForUpdate().catch(() => undefined);
    setInterval(check, CHECK_INTERVAL);
    this.doc.addEventListener('visibilitychange', () => {
      if (this.doc.visibilityState === 'visible') check();
    });
  }
}
