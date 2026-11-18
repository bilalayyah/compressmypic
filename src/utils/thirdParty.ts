// Dynamic loader for third-party scripts (re-audit 2026-11-15, M6;
// deferred 2026-11-16, Week-2 speed work — audit C1/H1).
//
// The AdSense script + the GA4 gtag snippet used to live as static <script>
// tags in index.html, so they loaded on EVERY page — including
// /admin/comments/ (a noindex admin page where ad/analytics code has no
// business) and the 404 page. Now they are injected here, before the app
// mounts, and SKIPPED on the admin route. (The 404 page is the static
// public/404.html — it never loads index.html or this loader at all.)
//
// DEFERRED (Week-2, audit C1/H1): the two external scripts (adsbygoogle.js
// ~230 KB, gtag.js ~183 KB) used to load immediately at mount, competing
// with the hero text — the LCP element — for bandwidth and main-thread
// time. They now load AFTER the Largest Contentful Paint entry fires, or
// on the first user interaction, or when the main thread goes idle, or
// 4s after load at the latest — whichever comes first. They are NOT
// removed: AdSense is UNDER REVIEW and the script must stay present for
// review/crawl; deferring only delays it a few seconds.
//
// WHY THE PRERENDER MUST STRIP THEM TOO: the prerendered HTML used to
// ship the injected <script> tags (they are in the DOM at snapshot time),
// so the live browser fetched both scripts at parse time — before this
// loader ever ran — and the deferral did nothing. scripts/prerender.cjs
// now strips the two external tags from the snapshot (the inline gtag
// stub below is KEPT: it has no network cost). If the strip ever stops
// working, the snapshot assertion in renderRoute fails the run instead
// of silently shipping the tags.
//
// The gtag STUB + config stay synchronous and tiny (~200 bytes, no
// network): analytics.ts queues events into dataLayer until gtag.js
// arrives, and the config (send_page_view: false) must precede the first
// trackPageView call. Only the two heavy external scripts are deferred.
//
// Funding Choices (GDPR consent banner) is served via adsbygoogle.js, so
// deferring it also delays the EU consent banner by the same few seconds
// — the banner is geo-gated (EEA/UK/CH) and invisible from Dubai, so this
// is verified from code, not by loading it. The AdSlot component queues
// its push() on window.adsbygoogle (array pattern), so it is safe whether
// or not the script has arrived yet.
//
// Idempotent: the prerendered HTML already contains the stub (kept by the
// prerender), so on a live load the loader finds it and does nothing —
// each script loads exactly once per page load. During prerender the
// ad/analytics requests are aborted (scripts/prerender.cjs), so no
// analytics fire while snapshotting.
import { MEASUREMENT_ID } from './analytics';
import { ADSENSE_CLIENT_ID } from '../config/ads';

const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
const GTAG_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

// Hard fallback: even if LCP never fires and the user never interacts
// (e.g. a bot/crawler that does not scroll), the scripts still load a few
// seconds after the page starts — AdSense review crawl + GA4 must see them.
const DEFER_FALLBACK_MS = 4000;
// requestIdleCallback timeout: fire at most 3s after the main thread frees up.
const IDLE_TIMEOUT_MS = 3000;

function injectScript(src: string, attrs: Record<string, string> = {}): void {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const el = document.createElement('script');
  el.async = true;
  el.src = src;
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
  document.head.appendChild(el);
}

function injectGtagConfig(): void {
  if (document.getElementById('cmp-gtag-config')) return;
  const el = document.createElement('script');
  el.id = 'cmp-gtag-config';
  el.text = [
    'window.dataLayer = window.dataLayer || [];',
    'function gtag(){dataLayer.push(arguments);}',
    "gtag('js', new Date());",
    `gtag('config', '${MEASUREMENT_ID}', { 'send_page_view': false });`,
  ].join('\n');
  document.head.appendChild(el);
}

/** Inject the two external scripts (AdSense + gtag.js). Idempotent. */
function injectExternalScripts(): void {
  injectScript(ADSENSE_SCRIPT_SRC, { crossorigin: 'anonymous' });
  injectScript(GTAG_SCRIPT_SRC);
}

let deferredScheduled = false;

/**
 * Schedule the external scripts for after LCP / first interaction / idle.
 * First trigger wins; the 4s hard fallback guarantees crawlers and
 * no-interaction loads still get the scripts. Safe to call repeatedly.
 */
function scheduleExternalScripts(): void {
  if (deferredScheduled) return;
  deferredScheduled = true;
  let done = false;
  const fire = (): void => {
    if (done) return;
    done = true;
    injectExternalScripts();
  };
  // 1. Right after the Largest Contentful Paint entry fires (buffered, so
  // an already-painted hero still triggers it). This is the precise
  // "after LCP" signal: the hero text has painted, so third-party work
  // can no longer delay it.
  try {
    if (typeof PerformanceObserver !== 'undefined') {
      const po = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            po.disconnect();
            fire();
            break;
          }
        }
      });
      po.observe({ type: 'largest-contentful-paint', buffered: true });
    }
  } catch {
    // PerformanceObserver unavailable — the fallbacks below still fire.
  }
  // 2. First user interaction (the user is engaged; load analytics/ads now).
  const onInteract = (): void => {
    window.removeEventListener('pointerdown', onInteract);
    window.removeEventListener('keydown', onInteract);
    window.removeEventListener('touchstart', onInteract);
    window.removeEventListener('scroll', onInteract);
    fire();
  };
  window.addEventListener('pointerdown', onInteract, { once: true, passive: true });
  window.addEventListener('keydown', onInteract, { once: true });
  window.addEventListener('touchstart', onInteract, { once: true, passive: true });
  window.addEventListener('scroll', onInteract, { once: true, passive: true });
  // 3. Idle callback (fires when the main thread is free, at most 3s in).
  try {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(() => fire(), { timeout: IDLE_TIMEOUT_MS });
    }
  } catch {
    // requestIdleCallback missing or threw — the hard timeout still fires.
  }
  // 4. Hard fallback so crawlers + no-interaction loads still get the scripts.
  window.setTimeout(fire, DEFER_FALLBACK_MS);
}

/** Load AdSense + GA4 unless this is the admin page. Safe to call repeatedly. */
export function loadThirdPartyScripts(): void {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/admin/comments') return; // M6: no ad/analytics code on the admin page
  // The gtag stub + config stay synchronous (tiny, no network): analytics.ts
  // queues events into dataLayer until gtag.js arrives. Only the two heavy
  // external scripts are deferred (see scheduleExternalScripts).
  injectGtagConfig();
  scheduleExternalScripts();
}
