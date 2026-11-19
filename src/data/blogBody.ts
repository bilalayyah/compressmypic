// Per-article blog bodies — Tier B of the speed fix (2026-11-19).
//
// The EN article bodies + FAQs used to live in src/data/blogArticles.ts
// and were statically imported by App.tsx, so all 144 articles' bodies
// (~639 KiB gzip) shipped in the entry bundle on EVERY page. Now the
// registry (blogArticles.ts) carries metadata only; each article's body
// lives in one small module (src/data/blog-bodies/<id>.ts) and loads on
// demand through the cache below:
//
//   - main.tsx preloads the current article's body before first render
//     (article routes), so hydration sees the full content and the
//     prerender snapshots stay complete;
//   - ArticlePage loads it on client-side navigation if it is not cached;
//   - BlogSearch loads all bodies in the background (idle) so full-text
//     search keeps working without blocking LCP.
//
// A body module exports BODY (trusted HTML) + FAQS. The cache is the
// single source of truth for synchronously-rendered bodies: components
// read it with getBlogBody() during render and never await inside render.
//
// LOCALE BODIES (perf split 2026-11-19): the same split for the 10
// non-EN locales. Each locale's overrides file
// (src/locales/<lang>/blog.ts) used to hold all 144 articles' bodies +
// FAQs (2.1-4.5 MB source, 660-954 KiB gzip per locale) and was imported
// whole on every blog route in that language — the root cause of the
// German article's mobile LCP instability (1.4s vs 3.6s) and of the ~11s
// TTI on non-EN article pages. Now each locale has per-article modules
// (src/locales/<lang>/blog-bodies/<id>.ts) with the same BODY + FAQS
// shape, loaded through loadBlogBodyLocale() below. The locale registry
// keeps metadata only (title, description, readingMinutes).
import type { BlogArticleFaq } from '../types/blog';
import type { SupportedLang } from '../locales/config';

export interface BlogBodyData {
  body: string;
  faqs: BlogArticleFaq[];
}

const cache = new Map<string, BlogBodyData>();

export function getBlogBody(id: string): BlogBodyData | undefined {
  return cache.get(id);
}

export function setBlogBody(id: string, data: BlogBodyData): void {
  cache.set(id, data);
}

/** Load one article's body (cached after the first load). */
export async function loadBlogBody(id: string): Promise<BlogBodyData> {
  const cached = cache.get(id);
  if (cached) return cached;
  const mod = (await import(`./blog-bodies/${id}.ts`)) as {
    BODY: string;
    FAQS: BlogArticleFaq[];
  };
  const data: BlogBodyData = { body: mod.BODY, faqs: mod.FAQS };
  cache.set(id, data);
  return data;
}

let allLoading: Promise<void> | null = null;

/**
 * Load every listed body in the background, in registry order, calling
 * onEach as each one lands (so search results can refresh progressively).
 * Safe to call repeatedly — the load only ever runs once per page load.
 * A single failed body must not block the rest.
 */
export function preloadAllBlogBodies(ids: string[], onEach?: () => void): void {
  if (allLoading) return;
  allLoading = (async () => {
    for (const id of ids) {
      try {
        await loadBlogBody(id);
      } catch {
        // One bad body must not block the rest.
      }
      onEach?.();
    }
  })();
}

// --- Locale bodies (perf split 2026-11-19) ---
// Same cache contract as the EN bodies above, keyed by `${lang}/${id}`.
// Vite resolves the two-variable dynamic import by globbing
// src/locales/*/blog-bodies/*.ts into one chunk per article module.

const localeCache = new Map<string, BlogBodyData>();

export function getBlogBodyLocale(lang: SupportedLang, id: string): BlogBodyData | undefined {
  if (lang === 'en') return getBlogBody(id);
  return localeCache.get(`${lang}/${id}`);
}

/** Load one article's body in `lang` (cached after the first load). */
export async function loadBlogBodyLocale(lang: SupportedLang, id: string): Promise<BlogBodyData> {
  if (lang === 'en') return loadBlogBody(id);
  const key = `${lang}/${id}`;
  const cached = localeCache.get(key);
  if (cached) return cached;
  const mod = (await import(`../locales/${lang}/blog-bodies/${id}.ts`)) as {
    BODY: string;
    FAQS: BlogArticleFaq[];
  };
  const data: BlogBodyData = { body: mod.BODY, faqs: mod.FAQS };
  localeCache.set(key, data);
  return data;
}

let allLocaleLoading: string | null = null;

/**
 * Load every listed locale body in the background (BlogSearch full-text
 * search in that language). Same contract as preloadAllBlogBodies.
 */
export function preloadAllBlogBodiesLocale(
  lang: SupportedLang,
  ids: string[],
  onEach?: () => void,
): void {
  if (lang === 'en') {
    preloadAllBlogBodies(ids, onEach);
    return;
  }
  if (allLocaleLoading === lang) return;
  allLocaleLoading = lang;
  void (async () => {
    for (const id of ids) {
      try {
        await loadBlogBodyLocale(lang, id);
      } catch {
        // One bad body must not block the rest.
      }
      onEach?.();
    }
  })();
}
