// Server entry for real SSR — CompressMyPic speed fix.
//
// Renders <App/> in Node for one route path and returns the #root HTML with
// the <!-- --> text separators React 19 hydration requires. Used ONLY by the
// SSR prerender (scripts/prerender-ssr.cjs); never shipped to the browser.
// The client entry stays src/main.tsx.
//
// Why TWO renders per route (diagnosed 2026-11-19):
// - renderToPipeableStream ALWAYS emits Suspense fallback + hidden div +
//   $RC scripts for lazy page/section boundaries, on every render, even
//   when the chunks are already loaded. The fallback ("Loading…") would be
//   the visible main content for no-JS readers/crawlers.
// - renderToString emits CLEAN HTML (no fallback, no $RC, separators
//   present) — but only for lazy components whose module is ALREADY loaded;
//   an unwarmed lazy boundary renders its fallback instead (and warns).
// So renderRoute does: (1) a renderToPipeableStream pass whose onAllReady
// fires only after every lazy chunk for this route has loaded (output
// discarded — this is the warm-up), then (2) renderToString, which now
// resolves every lazy component synchronously and returns clean HTML.
// The lazy payloads persist per-process, so later routes sharing a page
// type are already warm; the pipeable pass still runs per route because it
// is also the await that guarantees the warm-up for that route's own types.
//
// Flow per route (mirrors main.tsx's boot preload, but with the path passed
// in instead of window.location): parse the path -> preload the locale
// dictionary into the locale cache (so App's useState initializers read it
// synchronously) -> preload the article body for article routes -> warm-up
// -> renderToString -> verify the output has no Suspense fallback.
import React from 'react';
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import { Writable } from 'node:stream';
import App, { parsePath, toLocalizedPath } from './App.tsx';
import { loadLocaleData } from './locales/loadLocaleData';
import { getCachedLocale, setCachedLocale } from './locales/localeCache';
import { getBlogBody, loadBlogBody } from './data/blogBody';
import {
  BLOG_ARTICLES,
  getBlogArticleVersion,
  isBlogArticlePublishedIn,
  isBlogEnPath,
  resolveBlogRoute,
} from './data/blogArticles';
import { EN_BLOG_STRINGS } from './components/blog/blogStrings';
import { withTrailingSlash } from './locales/alternates';
import { buildFaqPageNode } from './utils/faqJsonLd';
import { TOOL_BY_SLUG } from './data/tools';
import type { ToolDefinition } from './data/tools';
import { EN_STRINGS } from './components/ToolPageLayout';
import type { ToolPageLayoutStrings } from './components/ToolPageLayout';
import type { BlogArticleLocaleOverride } from './types/blog';

async function preloadRoute(urlPath: string): Promise<void> {
  const parsed = parsePath(urlPath);
  const lang = parsed.lang;
  const blogRoute = isBlogEnPath(parsed.path) ? resolveBlogRoute(parsed.path) : null;
  const preloads: Promise<unknown>[] = [];
  if (lang !== 'en') {
    preloads.push(
      loadLocaleData(lang, { withBlog: blogRoute !== null }).then((data) => {
        setCachedLocale(lang, data);
      }),
    );
  }
  if (blogRoute?.kind === 'article') {
    preloads.push(loadBlogBody(blogRoute.articleId));
  }
  await Promise.all(preloads);
}

// FAQPage JSON-LD node for one article route, computed from the real data
// (registry + loaded body + locale strings) — the SSR-side counterpart of
// the App.tsx head effect. The effect is client-only (useEffect), so the
// SSR prerender cannot reuse it; this helper lets scripts/prerender-ssr.cjs
// regenerate the FAQPage node that the old Chromium-captured heads are
// missing for EN articles (0/145) instead of carrying the stale head
// forward. Returns null for non-article routes, unpublished-in-language
// articles (noindex — App emits no page JSON-LD for those), and articles
// with no FAQs.
export async function getArticleFaqPage(
  urlPath: string,
): Promise<Record<string, unknown> | null> {
  await preloadRoute(urlPath);
  const parsed = parsePath(urlPath);
  const lang = parsed.lang;
  const blogRoute = isBlogEnPath(parsed.path) ? resolveBlogRoute(parsed.path) : null;
  if (blogRoute?.kind !== 'article') return null;
  const article = BLOG_ARTICLES.find((a) => a.id === blogRoute.articleId);
  if (!article) return null;
  if (!isBlogArticlePublishedIn(article, lang)) return null;
  const body = getBlogBody(article.id);
  const localeData =
    lang === 'en'
      ? null
      : getCachedLocale<{
          ui?: { blog?: { faqHeading?: string } };
          blog?: Record<string, BlogArticleLocaleOverride>;
        }>(lang);
  const overrides = localeData?.blog ?? {};
  const version = getBlogArticleVersion(article, lang, overrides, body);
  if (!version.faqs || version.faqs.length === 0) return null;
  const heading =
    localeData?.ui?.blog?.faqHeading ?? EN_BLOG_STRINGS.faqHeading;
  // Same canonical the App head effect computes (its baseDomain is a local
  // const inside that effect; the literal is the site's canonical domain).
  const canonical = `https://compressmypic.online${withTrailingSlash(toLocalizedPath(parsed.path, lang))}`;
  return buildFaqPageNode({ faqs: version.faqs, heading, url: canonical });
}

// Tool-page head data for one tool route, computed from the real data
// (registry + locale strings) — the SSR-side counterpart of the
// ToolPageLayout head effects (title, meta, og/twitter, HowTo + FAQPage
// JSON-LD). Those effects are client-only (useEffect), so the SSR
// prerender carries heads from old Chromium-captured snapshots; when tool
// copy changes (title, description, subtitle, steps, FAQs), the carried
// head goes stale even though the SSR body re-renders with the new copy.
// This helper lets scripts/prerender-ssr.cjs refresh the carried head
// from current data. Returns null for non-tool routes and the homepage
// (no FAQs/steps of its own). The node shapes mirror the client effect
// exactly (ToolPageLayout.tsx), so a refresh is byte-identical on
// unchanged pages and only the changed values differ.
export async function getToolPageHead(urlPath: string): Promise<{
  seoTitle: string;
  seoDescription: string;
  faqNode: Record<string, unknown> | null;
  howToNode: Record<string, unknown> | null;
} | null> {
  await preloadRoute(urlPath);
  const parsed = parsePath(urlPath);
  const lang = parsed.lang;
  const enSlug = parsed.path;
  if (enSlug === '/' || !TOOL_BY_SLUG[enSlug]) return null;
  const localeData =
    lang === 'en'
      ? null
      : getCachedLocale<{
          ui?: { toolPageLayout?: ToolPageLayoutStrings };
          tools?: Record<string, ToolDefinition>;
        }>(lang);
  const tool: ToolDefinition | undefined =
    lang === 'en'
      ? TOOL_BY_SLUG[enSlug]
      : (localeData?.tools?.[enSlug] ?? TOOL_BY_SLUG[enSlug]);
  if (!tool) return null;
  const ui: ToolPageLayoutStrings =
    lang === 'en'
      ? EN_STRINGS
      : (localeData?.ui?.toolPageLayout ?? EN_STRINGS);
  // Same canonical the ToolPageLayout effect computes.
  const canonicalUrl = `https://compressmypic.online${withTrailingSlash(toLocalizedPath(parsed.path, lang))}`;
  const faqNode =
    tool.faqs.length > 0
      ? {
          '@type': 'FAQPage',
          name: ui.faqTitle.replace('{name}', tool.name),
          url: canonicalUrl,
          mainEntity: tool.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;
  const howToNode =
    tool.howToSteps.length > 0
      ? {
          '@type': 'HowTo',
          name: ui.howToTitle.replace('{name}', tool.name),
          description: tool.subtitle || tool.seoDescription,
          url: canonicalUrl,
          step: tool.howToSteps.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.title,
            text: s.description,
          })),
        }
      : null;
  return {
    seoTitle: tool.seoTitle,
    seoDescription: tool.seoDescription,
    faqNode,
    howToNode,
  };
}

// Warm-up pass: render with renderToPipeableStream and wait for onAllReady,
// which fires only after every lazy page/section chunk for this route has
// loaded. The stream MUST be piped and consumed: without a consumer, Fizz
// never retries the suspended boundaries and the lazy modules stay pending
// (verified 2026-11-19 — an unpiped warm-up leaves renderToString with a
// fallback). Output is discarded into a null sink.
function warmUpRoute(urlPath: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const errors: Error[] = [];
    const sink = new Writable({
      write(_chunk, _encoding, callback) {
        callback();
      },
    });
    sink.on('finish', () => {
      if (errors.length > 0) {
        reject(errors[0]);
        return;
      }
      resolve();
    });
    sink.on('error', reject);
    let stream: ReturnType<typeof renderToPipeableStream>;
    try {
      stream = renderToPipeableStream(<App initialPath={urlPath} />, {
        onShellReady() {
          // Not piping yet — onAllReady is the signal we wait for.
        },
        onAllReady() {
          stream.pipe(sink);
        },
        onShellError(error) {
          reject(error as Error);
        },
        onError(error) {
          errors.push(error as Error);
        },
      });
    } catch (error) {
      reject(error as Error);
    }
  });
}

export async function renderRoute(urlPath: string): Promise<string> {
  await preloadRoute(urlPath);
  await warmUpRoute(urlPath);
  const html = renderToString(<App initialPath={urlPath} />);
  // Fail only on a real fallback: the "Loading…" fallback text, or the
  // <!--$?--> marker of a boundary that was still pending. Plain <!--$--> /
  // <!--/$--> markers are the normal Suspense delimiters renderToString
  // emits around RESOLVED boundaries — they are expected and harmless.
  if (html.includes('Loading…') || html.includes('<!--$?-->')) {
    throw new Error(
      `SSR output still contains a Suspense fallback for ${urlPath} after warm-up`,
    );
  }
  return html;
}
