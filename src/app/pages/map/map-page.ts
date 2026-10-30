import { Component, computed, inject, resource, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/content';
import { Icon } from '../../core/icons';
import { Seo } from '../../core/seo';
import { SITE } from '../../core/site';
import { blueMapUrl } from '../../map/map-types';
import PLACES from '../../map/places.json';

type Place = (typeof PLACES)[number];

/** BlueMap をそのまま埋め込み、名所へすぐ飛べるようにしたページ */
@Component({
  selector: 'app-map-page',
  imports: [RouterLink, Icon],
  template: `
    <div class="layout">
      <aside class="explorer-bar" aria-label="名所">
        <section class="xp-pane">
          <h2><app-icon name="map" /> 名所へ移動</h2>
          <div class="pane-body">
            <ul class="places">
              @for (p of places; track p.id) {
                <li>
                  <button type="button" (click)="go(p)" [class.current]="p.id === current()?.id" [attr.aria-pressed]="p.id === current()?.id">
                    <strong>{{ p.name }}</strong>
                    <span>{{ p.note }}</span>
                  </button>
                </li>
              }
            </ul>
          </div>
        </section>
        <section class="xp-pane">
          <h2>このページについて</h2>
          <div class="pane-body">
            <p>
              右の地図は <a [href]="site.map3d" target="_blank" rel="noopener">BlueMap</a> です。ドラッグで回転、右ドラッグで移動、ホイールで拡大します。
            </p>
            @if (wikiSlug(); as slug) {
              <p><a class="standalone" [routerLink]="['/wiki', slug]">「{{ current()?.name }}」に関する Wiki</a></p>
            }
            <p><a class="standalone" [href]="src()" target="_blank" rel="noopener">新しいタブで開く <app-icon name="external" /></a></p>
          </div>
        </section>
      </aside>
      <div class="frame xp-inset">
        <iframe [src]="safeSrc()" title="TORO Server の 3D マップ (BlueMap)" allow="fullscreen"></iframe>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; height: calc(100svh - var(--header-h) - 2 * var(--gutter) - 40px); min-height: 480px; }
    .layout { display: grid; grid-template-columns: 250px minmax(0, 1fr); height: 100%; }
    .explorer-bar { padding: 12px 10px; background: var(--xp-explorer); overflow-y: auto; }
    .places { display: grid; gap: 4px; margin: 0; padding: 0; list-style: none; }
    .places button { display: grid; width: 100%; padding: 4px 8px; border: 1px solid transparent; background: none; color: var(--ink); text-align: left; cursor: pointer; line-height: 1.45; }
    .places button:hover { background: #fff; border-color: var(--xp-inset); }
    .places button.current { background: var(--xp-select); border-color: var(--xp-select); color: #fff; }
    .places span { font-size: 0.76rem; opacity: 0.8; }
    .pane-body p { margin: 0 0 6px; }
    .frame { margin: 6px; display: flex; }
    iframe { flex: 1; width: 100%; height: 100%; border: 0; }
    @media (max-width: 996px) {
      :host { height: auto; }
      .layout { grid-template-columns: 1fr; }
      .frame { height: 70svh; order: -1; }
      .places { grid-auto-flow: column; grid-auto-columns: 70%; overflow-x: auto; }
      .standalone { display: inline-flex; align-items: center; gap: 4px; min-height: 40px; }
    }
  `,
})
export class MapPage {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly content = inject(ContentService);
  protected readonly site = SITE;
  protected readonly places = PLACES;
  /** 選ぶまでは BlueMap の初期表示のまま (読み込み直後の # は BlueMap に上書きされるため) */
  protected readonly current = signal<Place | null>(null);
  private readonly index = resource({ loader: () => this.content.index() });

  protected readonly src = computed(() => {
    const p = this.current();
    return p ? blueMapUrl(p, 600) : SITE.map3d;
  });
  /** 同じ URL で # 以降だけ変えると、BlueMap は読み直さずにカメラを動かす */
  protected readonly safeSrc = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl(this.src()));

  protected readonly wikiSlug = computed(() => {
    const page = this.current()?.page;
    if (!page) return null;
    const slug = page.split('/').pop()!.replace(/\s+/g, '_');
    return this.index.value()?.pages.some((p) => p.slug === slug) ? slug : null;
  });

  constructor() {
    inject(Seo).set({
      title: '3D マップ',
      path: '/map',
      description: 'TORO Server のワールドを BlueMap の 3D マップで見られます。街や空港などの名所へすぐ移動できます。',
    });
  }

  protected go(p: Place) {
    this.current.set(p);
  }
}
