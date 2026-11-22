// Shared hreflang alternates for CompressMyPic — all language versions of a page.
// Single module so every page (in any language) lists the FULL reciprocal set:
// en + es + pt + fr + de + it + id + ru + ja + ko + zh + hi + ar + tr + vi + bn + x-default. The per-language helpers
// (getEsAlternates, getPtAlternates, getFrAlternates, getDeAlternates,
// getItAlternates, getIdAlternates, getRuAlternates, getJaAlternates, getKoAlternates, getZhAlternates, getHiAlternates, getArAlternates, getTrAlternates, getViAlternates, getBnAlternates) return only their own pair and must NOT be used for tool
// pages anymore — a page listing only its own pair makes Google treat the
// other versions' annotations as non-reciprocal.
// One-way imports only (this module imports the eleven slug maps; no slug map
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
import { HI_PATH_BY_EN } from './hi/slugs';
import { AR_PATH_BY_EN } from './ar/slugs';
import { TR_PATH_BY_EN } from './tr/slugs';
import { VI_PATH_BY_EN } from './vi/slugs';
import { BN_PATH_BY_EN } from './bn/slugs';

const BASE = 'https://compressmypic.online';

export interface HreflangAlternate {
  lang: string;
  href: string;
}

/**
 * Append a trailing slash to a page path (root '/' is already slashed).
 * Used for every URL Google sees: canonicals, hreflang hrefs, JSON-LD
 * `url`/`item` values. Pages serve at the trailing-slash URL (Cloudflare
 * Pages 308-redirects the slash-less form to the directory index), so the
 * slash-less canonicals pointed at a 308 — re-audit issue M1 (2026-11-15).
 * Asset URLs (og-*.png, favicon.svg) must NEVER go through this.
 */
export function withTrailingSlash(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

/** English path -> localized path maps, one per language (same maps the
 *  header already uses for its nav URLs). */
const PATH_BY_EN_BY_LANG: Record<string, Record<string, string>> = {
  es: ES_PATH_BY_EN,
  pt: PT_PATH_BY_EN,
  fr: FR_PATH_BY_EN,
  de: DE_PATH_BY_EN,
  it: IT_PATH_BY_EN,
  id: ID_PATH_BY_EN,
  ru: RU_PATH_BY_EN,
  ja: JA_PATH_BY_EN,
  ko: KO_PATH_BY_EN,
  zh: ZH_PATH_BY_EN,
  hi: HI_PATH_BY_EN,
  ar: AR_PATH_BY_EN,
  tr: TR_PATH_BY_EN,
  vi: VI_PATH_BY_EN,
  bn: BN_PATH_BY_EN,
};

/**
 * Localized path for an English tool/static path in `lang` (falls back to
 * the English path when no equivalent exists). Re-audit issue M2
 * (2026-11-15): directory cards, related-tool links and header tool links
 * rendered EN slugs on non-EN pages even though same-language equivalents
 * exist. Home is NOT handled here — use localizedHomePath() for it.
 */
export function localizePath(enPath: string, lang: string): string {
  if (!lang || lang === 'en') return enPath;
  return PATH_BY_EN_BY_LANG[lang]?.[enPath] ?? enPath;
}

/** Localized home URL for a language: '/' for EN, '/<lang>/' otherwise. */
export function localizedHomePath(lang: string): string {
  return !lang || lang === 'en' ? '/' : `/${lang}/`;
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
  const hi = HI_PATH_BY_EN[enPath];
  const ar = AR_PATH_BY_EN[enPath];
  const tr = TR_PATH_BY_EN[enPath];
  const vi = VI_PATH_BY_EN[enPath];
  const bn = BN_PATH_BY_EN[enPath];
  const items: HreflangAlternate[] = [{ lang: 'en', href: `${BASE}${withTrailingSlash(enPath)}` }];
  if (es) items.push({ lang: 'es', href: `${BASE}${withTrailingSlash(es)}` });
  if (pt) items.push({ lang: 'pt', href: `${BASE}${withTrailingSlash(pt)}` });
  if (fr) items.push({ lang: 'fr', href: `${BASE}${withTrailingSlash(fr)}` });
  if (de) items.push({ lang: 'de', href: `${BASE}${withTrailingSlash(de)}` });
  if (it) items.push({ lang: 'it', href: `${BASE}${withTrailingSlash(it)}` });
  if (id) items.push({ lang: 'id', href: `${BASE}${withTrailingSlash(id)}` });
  if (ru) items.push({ lang: 'ru', href: `${BASE}${withTrailingSlash(ru)}` });
  if (ja) items.push({ lang: 'ja', href: `${BASE}${withTrailingSlash(ja)}` });
  if (ko) items.push({ lang: 'ko', href: `${BASE}${withTrailingSlash(ko)}` });
  if (zh) items.push({ lang: 'zh', href: `${BASE}${withTrailingSlash(zh)}` });
  if (hi) items.push({ lang: 'hi', href: `${BASE}${withTrailingSlash(hi)}` });
  if (ar) items.push({ lang: 'ar', href: `${BASE}${withTrailingSlash(ar)}` });
  if (tr) items.push({ lang: 'tr', href: `${BASE}${withTrailingSlash(tr)}` });
  if (vi) items.push({ lang: 'vi', href: `${BASE}${withTrailingSlash(vi)}` });
  if (bn) items.push({ lang: 'bn', href: `${BASE}${withTrailingSlash(bn)}` });
  items.push({ lang: 'x-default', href: `${BASE}${withTrailingSlash(enPath)}` });
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
  hi: 'hi_IN',
  ar: 'ar_SA',
  tr: 'tr_TR',
  vi: 'vi_VN',
  bn: 'bn_BD',
};

/** og:locale value for a language code (falls back to en_US). */
export function getOgLocale(lang: string): string {
  return OG_LOCALE_BY_LANG[lang] ?? 'en_US';
}

/** The 11 og:locale:alternate values for a page in `lang` (every locale except its own). */
export function getOgLocaleAlternates(lang: string): string[] {
  return Object.entries(OG_LOCALE_BY_LANG)
    .filter(([code]) => code !== lang)
    .map(([, locale]) => locale);
}
