// Dynamic loader for third-party scripts (re-audit 2026-11-15, M6).
//
// The AdSense script + the GA4 gtag snippet used to live as static <script>
// tags in index.html, so they loaded on EVERY page — including
// /admin/comments/ (a noindex admin page where ad/analytics code has no
// business) and the 404 page. Now they are injected here, before the app
// mounts, and SKIPPED on the admin route. (The 404 page is the static
// public/404.html — it never loads index.html or this loader at all.)
//
// Idempotent: the prerendered HTML already contains the tags (injected
// during prerender), so on a live load the loader finds them and does
// nothing — each script loads exactly once per page load. During prerender
// the ad/analytics requests are aborted (scripts/prerender.cjs), so no
// analytics fire while snapshotting; the tags themselves still ship.
import { MEASUREMENT_ID } from './analytics';
import { ADSENSE_CLIENT_ID } from '../config/ads';

const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
const GTAG_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

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

/** Load AdSense + GA4 unless this is the admin page. Safe to call repeatedly. */
export function loadThirdPartyScripts(): void {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/admin/comments') return; // M6: no ad/analytics code on the admin page
  injectScript(ADSENSE_SCRIPT_SRC, { crossorigin: 'anonymous' });
  injectScript(GTAG_SCRIPT_SRC);
  injectGtagConfig();
}
