// Shared hreflang alternates for CompressMyPic — all language versions of a page.
// Single module so every page (in any language) lists the FULL reciprocal set:
// en + es + pt + fr + de + it + id + ru + ja + ko + zh + x-default. The per-language helpers
// (getEsAlternates, getPtAlternates, getFrAlternates, getDeAlternates,
// getItAlternates, getIdAlternates, getRuAlternates, getJaAlternates, getKoAlternates, getZhAlternates) return only their own pair and must NOT be used for tool
// pages anymore — a page listing only its own pair makes Google treat the
// other versions' annotations as non-reciprocal.
// One-way imports only (this module imports the ten slug maps; no slug map
// imports this module), so there are no circular imports.

import { ES_PATH_BY_EN } from './es/slugs';
import { PT_PATH_BY_EN } from './pt/slugs';
import { FR_PATH_BY_EN } from './fr/slugs';
import { DE_PATH_BY_EN } from './de/slugs';
import { IT_PATH_BY_EN } from './it/slugs';
import { ID_PATH_BY_EN } from './id/slugs';
import { RU_PATH_BY_EN } from './ru/slugs';
import { JA_PATH_BY_EN } from './ja/slugs';
import { KO_PATH_BY_EN } from './ko/slugs';
import { ZH_PATH_BY_EN } from './zh/slugs';

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
  const de = DE_PATH_BY_EN[enPath];
  const it = IT_PATH_BY_EN[enPath];
  const id = ID_PATH_BY_EN[enPath];
  const ru = RU_PATH_BY_EN[enPath];
  const ja = JA_PATH_BY_EN[enPath];
  const ko = KO_PATH_BY_EN[enPath];
  const zh = ZH_PATH_BY_EN[enPath];
  const items: HreflangAlternate[] = [{ lang: 'en', href: `${BASE}${enPath}` }];
  if (es) items.push({ lang: 'es', href: `${BASE}${es}` });
  if (pt) items.push({ lang: 'pt', href: `${BASE}${pt}` });
  if (fr) items.push({ lang: 'fr', href: `${BASE}${fr}` });
  if (de) items.push({ lang: 'de', href: `${BASE}${de}` });
  if (it) items.push({ lang: 'it', href: `${BASE}${it}` });
  if (id) items.push({ lang: 'id', href: `${BASE}${id}` });
  if (ru) items.push({ lang: 'ru', href: `${BASE}${ru}` });
  if (ja) items.push({ lang: 'ja', href: `${BASE}${ja}` });
  if (ko) items.push({ lang: 'ko', href: `${BASE}${ko}` });
  if (zh) items.push({ lang: 'zh', href: `${BASE}${zh}` });
  items.push({ lang: 'x-default', href: `${BASE}${enPath}` });
  return items;
}

// --- Open Graph locale (Phase 7, F1) ---------------------------------------
// og:locale uses underscore + territory codes (OG spec), NOT hreflang codes:
// one variant per language, so pt is pt_BR (Brazilian) and zh is zh_CN
// (Simplified). Shared by App.tsx and ToolPageLayout.tsx so both write
// identical values; hreflang values in getAlternates() are untouched.
export const OG_LOCALE_BY_LANG: Record<string, string> = {
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  fr: 'fr_FR',
  de: 'de_DE',
  it: 'it_IT',
  id: 'id_ID',
  ru: 'ru_RU',
  ja: 'ja_JP',
  ko: 'ko_KR',
  zh: 'zh_CN',
};

/** og:locale value for a language code (falls back to en_US). */
export function getOgLocale(lang: string): string {
  return OG_LOCALE_BY_LANG[lang] ?? 'en_US';
}

/** The 10 og:locale:alternate values for a page in `lang` (every locale except its own). */
export function getOgLocaleAlternates(lang: string): string[] {
  return Object.entries(OG_LOCALE_BY_LANG)
    .filter(([code]) => code !== lang)
    .map(([, locale]) => locale);
}
