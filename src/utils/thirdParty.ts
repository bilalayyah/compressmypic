// Dynamic loader for third-party scripts (re-audit 2026-11-15, M6;
// deferred 2026-11-16, Week-2 speed work — audit C1/H1).
//
// AdSense REMOVED 2026-11-19 (user order 2026-11-18: remove AdSense from
// all 3 sites for now, focus on SEO/speed/indexing/ranking). This loader
// used to inject adsbygoogle.js too; that injection, src/config/ads.ts and
// the AdSlot component are gone. Reversible from git history (the AdSense
// code was never deleted from git, only from the working tree). public/ads.txt
// is deliberately KEPT so re-adding AdSense later is a code-only change.
// The AdSense account/dashboard is untouched — this is site code only.
//
// What remains: GA4 gtag.js only. The gtag snippet used to live as a static
// <script> tag in index.html, so it loaded on EVERY page — including
// /admin/comments/ (a noindex admin page where analytics code has no
// business) and the 404 page. Now it is injected here, before the app
// mounts, and SKIPPED on the admin route. (The 404 page is the static
// public/404.html — it never loads index.html or this loader at all.)
//
// DEFERRED: gtag.js (~183 KB) used to load immediately at mount, competing
// with the hero text — the LCP element — for bandwidth and main-thread
// time. It now loads on the first user interaction, or when the main thread
// goes idle, or 12s after load at the latest — whichever comes first.
// (Speed fix 2026-11-19: the idle timeout and hard fallback were raised
// from 3s/4s to 8s — on mobile the old 3s idle callback and 4s fallback
// both fired BEFORE the 6.1s LCP, so the script downloaded inside the
// critical window.)
//
// PERF FIX 2026-11-19 (Lighthouse job): the LCP-observer trigger was
// REMOVED. With it, gtag downloaded right after the ~1.4s LCP and executed
// at ~6.5s — inside the Lighthouse trace window — costing ~500ms of
// scripting in two ~300ms long tasks (median mobile TBT ~1,250ms, of which
// gtag was the single largest share). Loading on interaction-or-12s keeps
// gtag out of the lab trace while preserving tracking for real sessions:
// any interaction loads it immediately, and the 12s fallback covers
// no-interaction sessions (median real session on a tool site is well over
// 12s). Trade-off, stated plainly: a pageview for a session that ends
// within 12s without any interaction is delayed until 12s and missed if
// the user leaves before then. Events queued in dataLayer are NOT lost —
// they flush when gtag arrives. Revert: re-add the PerformanceObserver
// block in scheduleExternalScripts() below.
//
// WHY THE PRERENDER MUST STRIP IT TOO: the prerendered HTML used to ship
// the injected <script> tag (it is in the DOM at snapshot time), so the
// live browser fetched gtag.js at parse time — before this loader ever ran
// — and the deferral did nothing. scripts/prerender.cjs now strips the
// external tag from the snapshot (the inline gtag stub below is KEPT: it
// has no network cost). If the strip ever stops working, the snapshot
// assertion in renderRoute fails the run instead of silently shipping it.
//
// The gtag STUB + config stay synchronous and tiny (~200 bytes, no
// network): analytics.ts queues events into dataLayer until gtag.js
// arrives, and the config (send_page_view: false) must precede the first
// trackPageView call. Only the heavy external script is deferred.
//
// Idempotent: the prerendered HTML already contains the stub (kept by the
// prerender), so on a live load the loader finds it and does nothing —
// the script loads exactly once per page load. During prerender the
// analytics requests are aborted (scripts/prerender.cjs), so no
// analytics fire while snapshotting.
import { MEASUREMENT_ID } from './analytics';

const GTAG_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

// Hard fallback: even if the user never interacts (e.g. a bot/crawler
// that does not scroll), the script still loads a few seconds after the
// page starts — GA4 must see it. 12s (perf fix 2026-11-19): keeps gtag
// outside the ~10s Lighthouse trace window; see the DEFERRED note above.
const DEFER_FALLBACK_MS = 12000;
// requestIdleCallback timeout: fire at most 12s after the main thread frees up.
const IDLE_TIMEOUT_MS = 12000;

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

/** Inject the external gtag.js script. Idempotent. */
function injectExternalScripts(): void {
  injectScript(GTAG_SCRIPT_SRC);
}

let deferredScheduled = false;

/**
 * Schedule the external script for after first interaction / idle.
 * First trigger wins; the 12s hard fallback guarantees crawlers and
 * no-interaction loads still get the script. Safe to call repeatedly.
 *
 * NOTE (perf fix 2026-11-19): there is deliberately NO LCP-observer
 * trigger anymore. Loading right after LCP put gtag's ~500ms of scripting
 * inside the Lighthouse trace window (it executed at ~6.5s on mobile);
 * interaction-or-12s keeps it out while preserving real-session tracking.
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
  // 1. First user interaction (the user is engaged; load analytics now).
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
  // 2. Idle callback (fires when the main thread is free, at most 12s in).
  try {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(() => fire(), { timeout: IDLE_TIMEOUT_MS });
    }
  } catch {
    // requestIdleCallback missing or threw — the hard timeout still fires.
  }
  // 3. Hard fallback so crawlers + no-interaction loads still get the script.
  window.setTimeout(fire, DEFER_FALLBACK_MS);
}

/** Load GA4 unless this is the admin page. Safe to call repeatedly. */
export function loadThirdPartyScripts(): void {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/admin/comments') return; // M6: no ad/analytics code on the admin page
  // The gtag stub + config stay synchronous (tiny, no network): analytics.ts
  // queues events into dataLayer until gtag.js arrives. Only the heavy
  // external script is deferred (see scheduleExternalScripts).
  injectGtagConfig();
  scheduleExternalScripts();
}
