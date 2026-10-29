import { Component, computed, inject, input, resource, signal, effect } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContentService, SearchEntry } from '../../core/content';
import { Icon } from '../../core/icons';
import { Seo } from '../../core/seo';

const norm = (s: string) => s.normalize('NFKC').toLowerCase();
const escapeHtml = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

interface Hit {
  entry: SearchEntry;
  score: number;
  snippet: string;
}

/** 本文も含めた全文検索。データ (search.json) はこのページを開いたときに読む */
@Component({
  selector: 'app-search',
  imports: [RouterLink, Icon],
  template: `
    <div class="container narrow">
      <form class="sheet box" role="search" (submit)="submit($event)">
        <app-icon name="search" />
        <label class="visually-hidden" for="q">検索する言葉</label>
        <input id="q" type="search" name="q" placeholder="ページ名や本文を検索" [value]="text()" (input)="text.set($any($event.target).value)" autofocus />
        <button class="btn primary" type="submit">検索</button>
      </form>

      @if (!data.value()) {
        <p class="sheet note">検索の準備をしています…</p>
      } @else if (terms().length) {
        <p class="count">「{{ text().trim() }}」の検索結果: {{ hits().length }} 件</p>
        <ol class="hits">
          @for (h of hits(); track h.entry.s) {
            <li class="sheet">
              <a [routerLink]="['/wiki', h.entry.s]">{{ h.entry.t }}</a>
              <p [innerHTML]="h.snippet"></p>
            </li>
          } @empty {
            <li class="sheet note">見つかりませんでした。言葉を短くするか、<a routerLink="/wiki">ページ一覧</a>から探してみてください。</li>
          }
        </ol>
      }
    </div>
  `,
  styles: `
    :host { display: block; }
    .narrow { max-width: 860px; display: grid; gap: 14px; }
    .box { display: flex; align-items: center; gap: 10px; padding: 10px 10px 10px 18px; font-size: 1.1rem; color: var(--ink-3); }
    .box input { flex: 1; min-width: 0; border: 0; background: none; color: var(--ink); font: inherit; outline: none; }
    .count { margin: 4px 4px 0; color: var(--ink-2); font-size: 0.9rem; text-shadow: 0 0 10px rgb(var(--veil-rgb)); }
    .hits { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
    .hits li { padding: 16px 20px; }
    .hits a { font-weight: 700; font-size: 1.05rem; }
    .hits p { margin: 4px 0 0; color: var(--ink-2); font-size: 0.9rem; line-height: 1.7; }
    .note { padding: 16px 20px; color: var(--ink-2); margin: 0; }
  `,
})
export class Search {
  /** ?q= */
  readonly q = input<string>('');
  private readonly content = inject(ContentService);
  private readonly router = inject(Router);
  protected readonly text = signal('');
  protected readonly data = resource({ loader: () => this.content.search() });

  protected readonly terms = computed(() => norm(this.text()).split(/\s+/).filter(Boolean));

  protected readonly hits = computed<Hit[]>(() => {
    const terms = this.terms();
    const data = this.data.value();
    if (!terms.length || !data) return [];
    const out: Hit[] = [];
    for (const entry of data) {
      const t = norm(entry.t);
      const x = norm(entry.x);
      let score = 0;
      let ok = true;
      for (const term of terms) {
        const inTitle = t.includes(term);
        const at = x.indexOf(term);
        if (!inTitle && at < 0) {
          ok = false;
          break;
        }
        score += (inTitle ? 20 : 0) + (t === term ? 50 : 0) + (at >= 0 ? 1 + Math.min(10, x.split(term).length - 1) : 0);
      }
      if (ok) out.push({ entry, score, snippet: this.snippet(entry.x, x, terms) });
    }
    return out.sort((a, b) => b.score - a.score).slice(0, 100);
  });

  constructor() {
    effect(() => this.text.set(this.q() ?? ''));
    inject(Seo).set({ title: '検索', path: '/search' });
  }

  protected submit(e: Event) {
    e.preventDefault();
    void this.router.navigate([], { queryParams: { q: this.text().trim() || null }, replaceUrl: true });
  }

  /** 最初に見つかった所の前後を切り出して、言葉を <mark> で囲む */
  private snippet(raw: string, normalized: string, terms: string[]) {
    // NFKC で長さが変わる文字は少ないので、正規化後の位置をそのまま使う
    const at = terms.map((t) => normalized.indexOf(t)).find((i) => i >= 0) ?? 0;
    const start = Math.max(0, at - 50);
    let s = escapeHtml(raw.slice(start, start + 160));
    for (const t of terms) {
      const re = new RegExp(escapeHtml(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      s = s.replace(re, (m) => `<mark>${m}</mark>`);
    }
    return (start > 0 ? '…' : '') + s + (start + 160 < raw.length ? '…' : '');
  }
}
