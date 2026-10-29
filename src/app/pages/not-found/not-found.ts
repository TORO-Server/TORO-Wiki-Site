import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../core/seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="container">
      <section class="sheet box">
        <p class="eyebrow">404</p>
        <h1 class="display">ページが見つかりません</h1>
        <p>URL が変わったか、ページがなくなったのかもしれません。</p>
        <p><a class="btn primary" routerLink="/">トップへ</a> <a class="btn" routerLink="/wiki">Wiki のページ一覧</a></p>
      </section>
    </div>
  `,
  styles: `
    :host { display: block; padding-top: 12vh; }
    .box { max-width: 640px; margin: 0 auto; padding: 40px; }
    h1 { margin: 4px 0 12px; font-size: 2.2rem; }
    p { color: var(--ink-2); }
    .btn + .btn { margin-left: 8px; }
  `,
})
export class NotFound {
  constructor() {
    inject(Seo).set({ title: 'ページが見つかりません', path: '/404' });
  }
}
