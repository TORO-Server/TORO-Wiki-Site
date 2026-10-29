/** scripts/render-background.mjs が書く public/background/background.json */
export interface Poi {
  id: string;
  name: string;
  note: string;
  x: number;
  y: number;
  z: number;
  page: string;
  av1: string;
  h264: string;
  poster: string;
}

export interface BackgroundManifest {
  generatedAt: string;
  bluemap: { url: string; map: string };
  seconds: number;
  pois: Poi[];
}

/** hero: トップページで大きく見せる / ambient: 読み物の後ろで静かに流す */
export type MapMode = 'hero' | 'ambient';

export const BLUEMAP = { url: 'https://3d-map.torosaba.net', map: 'overworld' };

export const blueMapUrl = (p: { x: number; y: number; z: number }, distance = 400) =>
  `${BLUEMAP.url}/#${BLUEMAP.map}:${Math.round(p.x)}:${Math.round(p.y)}:${Math.round(p.z)}:${distance}:0:0.9:0:0:perspective`;

/** Wiki のページ ("03_Transportation/空港一覧") から、サイトの URL のスラッグを作る */
export const poiPageSlug = (p: Poi) => p.page.split('/').pop()!.replace(/\s+/g, '_');
