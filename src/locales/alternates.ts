// Shared hreflang alternates for CompressMyPic — all language versions of a page.
// Single module so every page (in any language) lists the FULL reciprocal set:
// en + es + pt + fr + x-default. The per-language helpers (getEsAlternates,
// getPtAlternates, getFrAlternates) return only their own pair and must NOT be
// used for tool pages anymore — a page listing only its own pair makes Google
// treat the other versions' annotations as non-reciprocal.
// One-way imports only (this module imports the three slug maps; no slug map
// imports this module), so there are no circular imports.

import { ES_PATH_BY_EN } from './es/slugs';
import { PT_PATH_BY_EN } from './pt/slugs';
import { FR_PATH_BY_EN } from './fr/slugs';

const BASE = 'https://compressmypic.online';

export interface HreflangAlternate {
  lang: string;
  href: string;
}

/** Full hreflang set for the English path: en + every translated version that exists + x-default (EN). */
export function getAlternates(enPath: string): HreflangAlternate[] {
  const es = ES_PATH_BY_EN[enPath];
  const pt = PT_PATH_BY_EN[enPath];
  const fr = FR_PATH_BY_EN[enPath];
  const items: HreflangAlternate[] = [{ lang: 'en', href: `${BASE}${enPath}` }];
  if (es) items.push({ lang: 'es', href: `${BASE}${es}` });
  if (pt) items.push({ lang: 'pt', href: `${BASE}${pt}` });
  if (fr) items.push({ lang: 'fr', href: `${BASE}${fr}` });
  items.push({ lang: 'x-default', href: `${BASE}${enPath}` });
  return items;
}
