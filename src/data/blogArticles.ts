// Blog article registry for the CompressMyPic multilingual SEO blog
// (Batch 2 — infrastructure only; the registry is EMPTY, no articles yet).
//
// Mirrors TOOLS_REGISTRY: Batch 3 adds articles here without touching
// routing or SEO — the pages, head effect and sitemap all read this module.
//
// SOURCES OF TRUTH (do not duplicate):
// - EN slug: article.en.slug (here).
// - Localized slug: that locale's slugs.ts ('/blog/<en-slug>' ->
//   '/<lang>/blog/<slug>'). Routing, hreflang, toLocalizedPath and the
//   language switcher all resolve through the slug maps, so an article is
//   "published in a language" exactly when its slugs.ts entry exists.
// - Localized content: src/locales/<lang>/blog.ts overrides (loaded lazily
//   with the locale; never statically imported here, or the bodies would
//   bloat the main bundle). Overrides carry NO slug — see types/blog.ts.
// - Category hub slugs: BLOG_CATEGORY_SLUGS below (the site has no
//   per-category localized slug system, so the blog defines its own).

import { TOOL_CATEGORIES, type ToolCategoryId } from './tools';
import type { SupportedLang } from '../locales/config';
import {
  getAlternates,
  withTrailingSlash,
  type HreflangAlternate,
} from '../locales/alternates';
import { ES_PATH_BY_EN } from '../locales/es/slugs';
import { PT_PATH_BY_EN } from '../locales/pt/slugs';
import { FR_PATH_BY_EN } from '../locales/fr/slugs';
import { DE_PATH_BY_EN } from '../locales/de/slugs';
import { IT_PATH_BY_EN } from '../locales/it/slugs';
import { ID_PATH_BY_EN } from '../locales/id/slugs';
import { RU_PATH_BY_EN } from '../locales/ru/slugs';
import { JA_PATH_BY_EN } from '../locales/ja/slugs';
import { KO_PATH_BY_EN } from '../locales/ko/slugs';
import { ZH_PATH_BY_EN } from '../locales/zh/slugs';
import type {
  BlogArticle,
  BlogArticleLocaleOverride,
  BlogArticleLocaleVersion,
  BlogRoute,
} from '../types/blog';

/** EN path -> localized path maps, one per language (same maps the header
 *  and getAlternates() already use for tools). */
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
};

/** Localized category-hub slugs. EN uses the category id itself. Slugs are
 *  romanized where the language has no Latin script (JA romaji, KO
 *  romanized, ZH pinyin), matching the site's existing localized slugs
 *  (e.g. '/ja/gazo-asshuku', '/ko/imiji-apchuk', '/zh/yasuo-tupian'). */
export const BLOG_CATEGORY_SLUGS: Record<SupportedLang, Record<ToolCategoryId, string>> = {
  en: {
    compress: 'compress',
    resize: 'resize',
    convert: 'convert',
    'crop-edit': 'crop-edit',
    'ai-tools': 'ai-tools',
    create: 'create',
    privacy: 'privacy',
    developer: 'developer',
  },
  es: {
    compress: 'comprimir',
    resize: 'cambiar-tamano',
    convert: 'convertir',
    'crop-edit': 'recortar-y-editar',
    'ai-tools': 'herramientas-de-ia',
    create: 'crear',
    privacy: 'privacidad',
    developer: 'desarrolladores',
  },
  pt: {
    compress: 'comprimir',
    resize: 'redimensionar',
    convert: 'converter',
    'crop-edit': 'recortar-e-editar',
    'ai-tools': 'ferramentas-de-ia',
    create: 'criar',
    privacy: 'privacidade',
    developer: 'desenvolvedores',
  },
  fr: {
    compress: 'compresser',
    resize: 'redimensionner',
    convert: 'convertir',
    'crop-edit': 'recadrer-et-modifier',
    'ai-tools': 'outils-ia',
    create: 'creer',
    privacy: 'confidentialite',
    developer: 'developpeur',
  },
  de: {
    compress: 'komprimieren',
    resize: 'groesse-aendern',
    convert: 'konvertieren',
    'crop-edit': 'zuschneiden-und-bearbeiten',
    'ai-tools': 'ki-tools',
    create: 'erstellen',
    privacy: 'datenschutz',
    developer: 'entwickler',
  },
  it: {
    compress: 'comprimere',
    resize: 'ridimensionare',
    convert: 'convertire',
    'crop-edit': 'ritagliare-e-modificare',
    'ai-tools': 'strumenti-ia',
    create: 'creare',
    privacy: 'privacy',
    developer: 'sviluppatori',
  },
  id: {
    compress: 'kompres',
    resize: 'ubah-ukuran',
    convert: 'konversi',
    'crop-edit': 'potong-dan-edit',
    'ai-tools': 'alat-ai',
    create: 'buat',
    privacy: 'privasi',
    developer: 'pengembang',
  },
  ru: {
    compress: 'szhatie',
    resize: 'izmenenie-razmera',
    convert: 'konvertatsiya',
    'crop-edit': 'obrezka-i-redaktirovanie',
    'ai-tools': 'ii-instrumenty',
    create: 'sozdanie',
    privacy: 'privatnost',
    developer: 'instrumenty-razrabotchika',
  },
  ja: {
    compress: 'asshuku',
    resize: 'saizu-henko',
    convert: 'henkan',
    'crop-edit': 'torimingu-to-henshu',
    'ai-tools': 'ai-tsuru',
    create: 'sakusei',
    privacy: 'puraibashi',
    developer: 'kaihatsusha-tsuru',
  },
  ko: {
    compress: 'apchuk',
    resize: 'keugi-jojeong',
    convert: 'byeonhwan',
    'crop-edit': 'jareugi-pyeonjip',
    'ai-tools': 'ai-dogu',
    create: 'mandeulgi',
    privacy: 'gaeinjeongbo-dogu',
    developer: 'gaebalja-dogu',
  },
  zh: {
    compress: 'yasuo',
    resize: 'tiaozheng-chicun',
    convert: 'zhuanhuan',
    'crop-edit': 'caijian-bianji',
    'ai-tools': 'ai-gongju',
    create: 'chuangzuo',
    privacy: 'yinsi',
    developer: 'kaifazhe-gongju',
  },
};

/** Blog categories, in the same order as TOOL_CATEGORIES (8 hubs). */
export function getBlogCategories(): Array<{ id: ToolCategoryId; label: string }> {
  return TOOL_CATEGORIES;
}

/** Category label in the active language (pass the locale's categories). */
export function getBlogCategoryLabel(
  categoryId: ToolCategoryId,
  labels: Array<{ id: string; label: string }> = TOOL_CATEGORIES,
): string {
  return labels.find((c) => c.id === categoryId)?.label ?? categoryId;
}

// --- Registry (Batch 2: EMPTY — Batch 3 adds the 144 English articles) ---
export const BLOG_ARTICLES: BlogArticle[] = [];

// --- Route resolution (EN paths only; parsePath normalizes first) ---

/** Localized category slug -> category id (also accepts the EN id). */
export function resolveBlogCategorySlug(lang: SupportedLang, slug: string): ToolCategoryId | null {
  const map = BLOG_CATEGORY_SLUGS[lang] ?? BLOG_CATEGORY_SLUGS.en;
  for (const [id, localized] of Object.entries(map)) {
    if (localized === slug) return id as ToolCategoryId;
  }
  if (slug === 'compress' || slug === 'resize' || slug === 'convert' || slug === 'crop-edit' || slug === 'ai-tools' || slug === 'create' || slug === 'privacy' || slug === 'developer') {
    return slug as ToolCategoryId;
  }
  return null;
}

/** True for any EN blog path (home, category hub, article). */
export function isBlogEnPath(enPath: string): boolean {
  return enPath === '/blog' || enPath.startsWith('/blog/');
}

/**
 * Resolve an EN blog path to its route. Articles resolve ONLY when
 * published (drafts and unknown slugs return null -> 404). Category hubs
 * resolve only for the 8 known categories.
 */
export function resolveBlogRoute(enPath: string): BlogRoute | null {
  if (enPath === '/blog') return { kind: 'home' };
  if (enPath.startsWith('/blog/category/')) {
    const slug = enPath.slice('/blog/category/'.length);
    if (!slug || slug.includes('/')) return null;
    const categoryId = resolveBlogCategorySlug('en', slug);
    return categoryId ? { kind: 'category', categoryId } : null;
  }
  if (enPath.startsWith('/blog/')) {
    const slug = enPath.slice('/blog/'.length);
    if (!slug || slug.includes('/')) return null;
    const article = BLOG_ARTICLES.find(
      (a) => a.status === 'published' && a.en.slug === slug,
    );
    return article ? { kind: 'article', articleId: article.id } : null;
  }
  return null;
}

// --- URLs (trailing slash, same-language) ---

export function getBlogHomeUrl(lang: SupportedLang): string {
  return lang === 'en' ? '/blog/' : `/${lang}/blog/`;
}

export function getBlogCategoryUrl(categoryId: ToolCategoryId, lang: SupportedLang): string {
  const slug = BLOG_CATEGORY_SLUGS[lang]?.[categoryId] ?? categoryId;
  return lang === 'en' ? `/blog/category/${slug}/` : `/${lang}/blog/category/${slug}/`;
}

/** Localized article URL. Falls back to the EN URL when the article has no
 *  slugs.ts entry in that language (i.e. not published there yet) — callers
 *  must check isBlogArticlePublishedIn() first and link to the blog home
 *  instead when it returns false. */
export function getBlogArticleUrl(article: BlogArticle, lang: SupportedLang): string {
  if (lang === 'en') return `/blog/${article.en.slug}/`;
  const localizedPath = PATH_BY_EN_BY_LANG[lang]?.[`/blog/${article.en.slug}`];
  return localizedPath ? withTrailingSlash(localizedPath) : `/blog/${article.en.slug}/`;
}

/** Published in this language = status published AND a slugs.ts entry
 *  exists for it (the slug map is the single source of truth). */
export function isBlogArticlePublishedIn(article: BlogArticle, lang: SupportedLang): boolean {
  if (article.status !== 'published') return false;
  if (lang === 'en') return true;
  return Boolean(PATH_BY_EN_BY_LANG[lang]?.[`/blog/${article.en.slug}`]);
}

// --- Version resolution (EN + locale override) ---

/** Localized slug for an article (EN slug when no translation exists). */
export function getBlogArticleSlug(article: BlogArticle, lang: SupportedLang): string {
  if (lang === 'en') return article.en.slug;
  const localizedPath = PATH_BY_EN_BY_LANG[lang]?.[`/blog/${article.en.slug}`];
  if (!localizedPath) return article.en.slug;
  const parts = localizedPath.split('/').filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1] : article.en.slug;
}

/** The version to render in `lang`: the locale override layered over EN
 *  (missing override -> EN content with the localized slug). */
export function getBlogArticleVersion(
  article: BlogArticle,
  lang: SupportedLang,
  overrides: Record<string, BlogArticleLocaleOverride> = {},
): BlogArticleLocaleVersion {
  const base = article.en;
  const slug = getBlogArticleSlug(article, lang);
  if (lang === 'en') return base;
  const o = overrides[article.id];
  if (!o) return { ...base, slug };
  return {
    slug,
    title: o.title,
    description: o.description,
    body: o.body,
    faqs: o.faqs ?? base.faqs,
    readingMinutes: o.readingMinutes,
  };
}

// --- Queries ---

export function getAllBlogArticles(): BlogArticle[] {
  return [...BLOG_ARTICLES];
}

export function getPublishedBlogArticles(lang: SupportedLang = 'en'): BlogArticle[] {
  return BLOG_ARTICLES.filter((a) => isBlogArticlePublishedIn(a, lang));
}

export function getBlogArticleById(id: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.id === id);
}

export function getBlogArticleBySlug(enSlug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.en.slug === enSlug);
}

const TYPE_ORDER: Record<BlogArticle['type'], number> = { guide: 0, howto: 1, advanced: 2 };

/** A tool's articles in type order (guide -> how-to -> advanced). */
export function getBlogArticlesForTool(toolSlug: string, lang: SupportedLang = 'en'): BlogArticle[] {
  return BLOG_ARTICLES.filter(
    (a) => a.toolSlug === toolSlug && isBlogArticlePublishedIn(a, lang),
  ).sort((a, b) => TYPE_ORDER[a.type] - TYPE_ORDER[b.type]);
}

/** A category's articles, newest first. */
export function getBlogArticlesForCategory(
  categoryId: ToolCategoryId,
  lang: SupportedLang = 'en',
): BlogArticle[] {
  return BLOG_ARTICLES.filter(
    (a) => a.categoryId === categoryId && isBlogArticlePublishedIn(a, lang),
  ).sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

/** Related articles: same-tool siblings first, then same-category fallback. */
export function getRelatedBlogArticles(
  article: BlogArticle,
  lang: SupportedLang = 'en',
  limit = 4,
): BlogArticle[] {
  const siblings = getBlogArticlesForTool(article.toolSlug, lang).filter(
    (a) => a.id !== article.id,
  );
  const out: BlogArticle[] = [...siblings];
  if (out.length < limit) {
    const sameCategory = getBlogArticlesForCategory(article.categoryId, lang).filter(
      (a) => a.id !== article.id && !out.some((o) => o.id === a.id),
    );
    out.push(...sameCategory);
  }
  return out.slice(0, limit);
}

/** Previous / next article within the same tool (type order), same language. */
export function getBlogArticlePrevNext(
  article: BlogArticle,
  lang: SupportedLang = 'en',
): { prev: BlogArticle | null; next: BlogArticle | null } {
  const list = getBlogArticlesForTool(article.toolSlug, lang);
  const idx = list.findIndex((a) => a.id === article.id);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx < list.length - 1 ? list[idx + 1] : null,
  };
}

/** Reading time at 200 wpm, minimum 1 minute. */
export function readingMinutesForBody(body: string): number {
  const text = body.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  return Math.max(1, Math.round(words / 200));
}

// --- Hreflang (published locales only, via the slug maps) ---

export function getBlogHomeAlternates(): HreflangAlternate[] {
  return getAlternates('/blog');
}

export function getBlogCategoryAlternates(categoryId: ToolCategoryId): HreflangAlternate[] {
  return getAlternates(`/blog/category/${categoryId}`);
}

export function getBlogArticleAlternates(article: BlogArticle): HreflangAlternate[] {
  return getAlternates(`/blog/${article.en.slug}`);
}
