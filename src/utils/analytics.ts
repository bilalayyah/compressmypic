/**
 * Google Analytics 4 (GA4) helper — SEO audit issues #10 (GA4 install) and
 * #40 (conversion / event tracking).
 *
 * SAFETY / STATUS
 * ---------------
 * No GA4 property exists yet, so there is deliberately NO real measurement ID
 * in this file. `MEASUREMENT_ID` is an empty string and every function in this
 * module is a silent no-op until the coordinator creates the GA4 property and
 * fills it in (see the comment on `MEASUREMENT_ID` below). Importing this
 * module and calling any function with an empty ID must never throw, never
 * log a console error and never make a network request.
 *
 * COORDINATOR STEPS (wave 2) — do these together, or nothing will be tracked:
 *   1. Create the GA4 property (steps are in the wave-2 handover, not here).
 *   2. Set `MEASUREMENT_ID` below to the real ID (format `G-XXXXXXXXXX`).
 *   3. Paste the matching gtag.js snippet into `index.html` <head> (same ID,
 *      in BOTH places in the snippet) — see the wave-2 handover for the exact
 *      snippet and placement.
 *   4. Apply the App.tsx / ToolPageLayout.tsx wiring from the wave-2 handover.
 *
 * The snippet in `index.html` disables GA4's automatic page_view
 * (`send_page_view: false`) because this is a client-side SPA: pageviews are
 * sent manually by `trackPageView` on every route change (see App.tsx wiring),
 * and the automatic one would double-count the first page load.
 */

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * GA4 measurement ID for compressmypic.online.
 * Live property 'CompressMyPic' (PirateWay account), wired 2026-11-15 and
 * verified in live HTML. Never invent an ID here — a made-up ID silently
 * sends data nowhere (or to someone else's property).
 */
export const MEASUREMENT_ID = 'G-NW1G6KEZZY';

/** True once a real measurement ID has been configured. */
export function isAnalyticsConfigured(): boolean {
  return MEASUREMENT_ID.trim() !== '';
}

type GtagParams = Record<string, string | number | boolean | undefined>;

/** Remove `undefined` values so GA4 never receives an undefined parameter. */
function cleanParams(params: GtagParams): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) out[key] = value;
  }
  return out;
}

/**
 * Low-level gtag call. No-ops (silently, no console output) when:
 * - no measurement ID is configured, or
 * - there is no `window` (SSR / non-browser context), or
 * - gtag.js has not loaded yet (falls back to pushing onto `dataLayer`,
 *   which the gtag.js snippet reads when it loads).
 * Never throws.
 */
function callGtag(...args: unknown[]): void {
  if (!isAnalyticsConfigured()) return;
  try {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag === 'function') {
      window.gtag(...args);
    } else {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push(args);
    }
  } catch {
    // Analytics must never break the tool. Swallow silently — no console error.
  }
}

/** Generic GA4 event sender. Prefer the typed helpers below over this. */
export function trackEvent(eventName: string, params: GtagParams = {}): void {
  if (!eventName) return;
  callGtag('event', eventName, cleanParams(params));
}

/**
 * SPA pageview. Call on the initial load AND on every client-side route
 * change (see the App.tsx wiring in the wave-2 handover).
 * `pagePath` defaults to the current pathname + search string; `pageTitle`
 * defaults to `document.title`. Sends via `gtag('config', …)` with
 * `page_path` so GA4 records the SPA URL as the page (this is the documented
 * SPA pattern; the plain `page_view` event would not update the page path).
 */
export function trackPageView(pagePath?: string, pageTitle?: string): void {
  if (!isAnalyticsConfigured()) return;
  let path = pagePath;
  let title = pageTitle;
  try {
    if (typeof window !== 'undefined') {
      path = path ?? `${window.location.pathname}${window.location.search}`;
      title = title ?? document.title;
    }
  } catch {
    // Fall through with whatever was passed in (possibly undefined).
  }
  callGtag(
    'config',
    MEASUREMENT_ID,
    cleanParams({ page_path: path, page_title: title })
  );
}

export interface ToolUsedParams {
  /** Root-level tool path, e.g. '/image-resizer' (ToolDefinition.slug). */
  tool_slug: string;
  /** Display name, e.g. 'Image Resizer' (ToolDefinition.name). */
  tool_name?: string;
  /** Active locale, e.g. 'en' | 'de' | 'es'. */
  language?: string;
}

/**
 * Fires ONCE when a tool page mounts (ToolPageLayout wiring, wave 2).
 * This is the top-of-funnel event: which tools people actually open.
 * The home compressor (`/`, App.tsx) is NOT a tool page and does not fire
 * this event — its usage is measured by `file_compressed` instead.
 */
export function trackToolUsed(params: ToolUsedParams): void {
  if (!params.tool_slug) return;
  let pagePath: string | undefined;
  try {
    if (typeof window !== 'undefined') pagePath = window.location.pathname;
  } catch {
    // Ignore — page_path is optional.
  }
  trackEvent('tool_used', {
    tool_slug: params.tool_slug,
    tool_name: params.tool_name,
    language: params.language,
    page_path: pagePath,
  });
}

export interface FileCompressedParams {
  /** Root-level tool path, e.g. '/' for the home compressor, '/image-resizer'. */
  tool_slug: string;
  /** Number of files that finished compressing in this run (default 1). */
  file_count?: number;
  /** Total original bytes across the files in this run. */
  original_size_bytes?: number;
  /** Total compressed bytes across the files in this run. */
  compressed_size_bytes?: number;
  /** Output format, e.g. 'jpeg' | 'png' | 'webp' (when known). */
  output_format?: string;
  /** Quality setting used, 0–100 (when known). */
  quality?: number;
}

/**
 * Fires when file(s) finish compressing successfully — once per completed
 * compression run, NOT once per settings change or per failed file.
 * `savings_bytes` is derived here (original − compressed) when both sizes
 * are supplied, so callers never have to compute it.
 */
export function trackFileCompressed(params: FileCompressedParams): void {
  if (!params.tool_slug) return;
  const savings =
    params.original_size_bytes !== undefined &&
    params.compressed_size_bytes !== undefined
      ? Math.max(0, params.original_size_bytes - params.compressed_size_bytes)
      : undefined;
  trackEvent('file_compressed', {
    tool_slug: params.tool_slug,
    file_count: params.file_count ?? 1,
    original_size_bytes: params.original_size_bytes,
    compressed_size_bytes: params.compressed_size_bytes,
    savings_bytes: savings,
    output_format: params.output_format,
    quality: params.quality,
  });
}

export interface FileDownloadedParams {
  /** Root-level tool path, e.g. '/' for the home compressor, '/image-resizer'. */
  tool_slug: string;
  /** Number of files in this download (1 for a single file, N for a ZIP). */
  file_count?: number;
  /** 'single' = one file downloaded; 'zip' = a ZIP archive downloaded. */
  download_type: 'single' | 'zip';
  /** File type downloaded, e.g. 'jpeg' | 'png' | 'zip' (when known). */
  file_type?: string;
}

/**
 * Fires when the user actually downloads a result — once per download
 * action (single file or ZIP), AFTER `triggerDownload` is called.
 * This is the bottom-of-funnel conversion event for every tool.
 */
export function trackFileDownloaded(params: FileDownloadedParams): void {
  if (!params.tool_slug) return;
  trackEvent('file_downloaded', {
    tool_slug: params.tool_slug,
    file_count: params.file_count ?? 1,
    download_type: params.download_type,
    file_type: params.file_type,
  });
}

export interface FormSubmitParams {
  /** Stable form id, e.g. 'contact' (ContactPage) or 'comment' (Comments). */
  form_id: string;
  /** Human-readable form name, e.g. 'Contact form'. */
  form_name?: string;
}

/**
 * Fires ONLY after a form submission succeeds (server confirms receipt) —
 * never on submit-button click and never on a failed submission.
 * Currently: ContactPage (FormSubmit returns response.ok) and Comments
 * (comment posted successfully). No PII is sent: only the form id/name.
 */
export function trackFormSubmit(params: FormSubmitParams): void {
  if (!params.form_id) return;
  trackEvent('form_submit', {
    form_id: params.form_id,
    form_name: params.form_name,
  });
}

export interface OutboundClickParams {
  /** Full external URL that was clicked, e.g. 'https://twitter.com/intent/tweet?...'. */
  link_url: string;
  /** Visible link text / aria-label (when known). Never include PII. */
  link_text?: string;
}

/**
 * Fires when the user clicks a link leaving compressmypic.online.
 * Same-origin links are ignored (they are internal navigation, already
 * covered by pageviews). `link_domain` is derived here from the URL.
 */
export function trackOutboundClick(params: OutboundClickParams): void {
  if (!params.link_url) return;
  let domain: string | undefined;
  try {
    if (typeof window !== 'undefined') {
      const url = new URL(params.link_url, window.location.href);
      if (url.hostname === window.location.hostname) return; // internal link
      domain = url.hostname;
    } else {
      domain = new URL(params.link_url).hostname;
    }
  } catch {
    return; // Unparseable URL — do not send a malformed event.
  }
  trackEvent('outbound_click', {
    link_url: params.link_url,
    link_domain: domain,
    link_text: params.link_text,
  });
}
