import { Component, computed, inject, resource } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/content';
import { JaDatePipe } from '../../core/format';
import { Icon } from '../../core/icons';
import { Seo } from '../../core/seo';
import { ServerStatusService } from '../../core/server-status';
import { SITE } from '../../core/site';
import { CopyButton } from '../../shared/copy-button';
import { CATEGORY_ICON } from '../../shared/categories';
import { MapStage } from '../../map/map-stage';
import { blueMapUrl, poiPageSlug } from '../../map/map-types';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, CopyButton, JaDatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly content = inject(ContentService);
  protected readonly stage = inject(MapStage);
  protected readonly server = inject(ServerStatusService);
  protected readonly site = SITE;
  protected readonly icon = CATEGORY_ICON;

  protected readonly index = resource({ loader: () => this.content.index() });

  private readonly visible = computed(() => (this.index.value()?.pages ?? []).filter((p) => !p.hidden));
  protected readonly total = computed(() => this.visible().length);

  protected readonly categories = computed(() => {
    const idx = this.index.value();
    if (!idx) return [];
    return idx.categories.map((c) => ({ ...c, count: this.visible().filter((p) => p.category === c.id).length }));
  });

  protected readonly recent = computed(() =>
    this.visible()
      .filter((p) => p.updated)
      .sort((a, b) => b.updated!.localeCompare(a.updated!))
      .slice(0, 10),
  );

  protected readonly lastUpdated = computed(() => this.recent()[0]?.updated ?? null);

  protected readonly poi = computed(() => {
    const poi = this.stage.current();
    if (!poi) return null;
    const slug = poiPageSlug(poi);
    const hasPage = this.index.value()?.pages.some((p) => p.slug === slug) ?? false;
    return { ...poi, slug: hasPage ? slug : null, bluemap: blueMapUrl(poi), index: this.stage.index() };
  });

  constructor() {
    inject(Seo).set({
      path: '/',
      description:
        'TORO Server の Wiki。マインクラフトのクリエイティブサーバー TORO Server のルール、遊び方、プラグイン、街や鉄道の情報をまとめています。',
    });
    this.server.refresh();
  }
}
