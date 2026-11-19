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
import App, { parsePath } from './App.tsx';
import { loadLocaleData } from './locales/loadLocaleData';
import { setCachedLocale } from './locales/localeCache';
import { loadBlogBody } from './data/blogBody';
import { isBlogEnPath, resolveBlogRoute } from './data/blogArticles';

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
