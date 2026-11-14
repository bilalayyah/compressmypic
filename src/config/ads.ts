/**
 * AdSense configuration for CompressMyPic.
 *
 * Publisher: ca-pub-5754238751997058 (application UNDER REVIEW since 2026-11-12).
 *
 * HOW A REAL AD-UNIT ID GETS IN HERE (do this in the AdSense account, never
 * by guessing):
 *   1. Sign in to AdSense → Ads → By ad unit → New ad unit → Display ads.
 *   2. Give it a name that matches one of the keys below (e.g. "mid-content-banner").
 *   3. Copy the numeric "Ad unit ID" AdSense shows for it (digits only, e.g.
 *      "1234567890") and paste it as the value for that key.
 *   4. NEVER invent a numeric ID. A wrong/guessed ID serves nothing and can
 *      trigger policy problems. An entry left as `null` simply renders nothing.
 *
 * PLACEMENT POLICY (SEO audit 2026-11-14, issues 34 + 36):
 *   - `header-top-banner` is REMOVED in wave 2 (accidental-click risk directly
 *     under the nav, above the fold on every page). Do NOT fill in an ID for it.
 *   - Max 2 ad units per tool page.
 *   - NO ads on /privacy, /terms, /admin/comments, /contact — slots render only
 *     on tool / guide / home pages.
 *   - Tool pages use dynamic keys of the form `tool-<slug>-mid` (one per tool);
 *     they resolve through `resolveAdSlotId()` below, so no per-tool entry is
 *     needed here until real IDs exist.
 */

export const ADSENSE_CLIENT_ID = 'ca-pub-5754238751997058';

/** Publisher ID without the `ca-` prefix, used by the Funding Choices tag. */
export const ADSENSE_PUBLISHER_ID = 'pub-5754238751997058';

/**
 * Maps a call-site `slotId` to a real numeric AdSense ad-unit ID.
 * `null` = no real ad unit exists yet for this slot → AdSlot renders nothing.
 *
 * TODAY (2026-11-14) every value is `null`: no ad units exist yet in the
 * AdSense account (application still under review), so behaviour is identical
 * to before this rewrite — no ad ever renders.
 */
export const AD_SLOT_IDS: Record<string, string | null> = {
  // REMOVED in wave 2 (audit issue 34). Kept as an explicit `null` so that
  // even if the App.tsx call site survives, nothing can ever render here.
  'header-top-banner': null,

  // Home page, between the tool and the educational content.
  'mid-content-banner': null,

  // Home page, near the bottom of the page.
  'footer-bottom-banner': null,

  // Tool pages: one dynamic slot per tool, `tool-<slug>-mid`.
  // No per-tool entry needed here; see `resolveAdSlotId()` below.
};

/** A real AdSense ad-unit ID is digits only. Anything else is not usable. */
export function isNumericAdUnitId(value: string | null | undefined): value is string {
  return typeof value === 'string' && /^\d+$/.test(value);
}

/**
 * Resolves a call-site `slotId` to a real numeric ad-unit ID, or `null` when
 * no real ID is configured for it.
 *
 * Resolution order:
 *   1. Exact key in `AD_SLOT_IDS`.
 *   2. Dynamic tool slots (`tool-<slug>-mid`) — currently unconfigured, so
 *      they resolve to `null` until per-tool IDs are added to the map above.
 *   3. Anything else → `null` (unknown slot names never render an ad).
 */
export function resolveAdSlotId(slotId: string): string | null {
  if (Object.prototype.hasOwnProperty.call(AD_SLOT_IDS, slotId)) {
    const id = AD_SLOT_IDS[slotId];
    return isNumericAdUnitId(id) ? id : null;
  }
  if (/^tool-[a-z0-9-]+-mid$/.test(slotId)) {
    // Tool-page mid slot. No per-tool IDs exist yet; add them to AD_SLOT_IDS
    // (or a per-tool map here) once they are created in the AdSense account.
    return null;
  }
  return null;
}
