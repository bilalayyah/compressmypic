import React, { useEffect, useRef } from 'react';
import { ADSENSE_CLIENT_ID, resolveAdSlotId } from '../config/ads';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

interface AdSlotProps {
  /** Call-site slot name, e.g. `mid-content-banner` or `tool-<slug>-mid`. */
  slotId: string;
  className?: string;
  format?: 'horizontal' | 'rectangle';
}

/**
 * AdSlot — rewired (SEO audit 2026-11-14, issue 9).
 *
 * BEFORE: the component required `adClient` + `adSlot` props, but every call
 * site passes only `slotId`, so no ad could ever render — and there was no
 * `adsbygoogle.push()` call at all.
 *
 * NOW: the component accepts the call-site `slotId`, maps it through
 * `src/config/ads.ts` to a real numeric AdSense ad-unit ID, and — only when a
 * real numeric ID is configured — renders the `<ins class="adsbygoogle">`
 * unit and calls `(window.adsbygoogle = window.adsbygoogle || []).push({})`
 * once on mount.
 *
 * TODAY no ad unit exists yet in the AdSense account (application under
 * review), so every slot resolves to `null` and this component renders
 * nothing — exactly as before. Fill in real numeric IDs in `src/config/ads.ts`
 * after they are created in the AdSense account; no component change is
 * needed then.
 *
 * CLS: when an ad does render, the container reserves a min-height
 * (90px for horizontal banners, 250px for rectangles) so the ad loading
 * does not shift the page.
 */
export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  className = '',
  format = 'horizontal',
}) => {
  const adUnitId = resolveAdSlotId(slotId);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!adUnitId || pushedRef.current) {
      return;
    }
    pushedRef.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense failed to load (e.g. ad blocker): leave the reserved space
      // empty rather than crashing the page.
      pushedRef.current = false;
    }
    // Run once per mount, for this slot's resolved unit only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adUnitId]);

  if (!adUnitId) {
    return null;
  }

  return (
    <aside
      aria-label="Advertisement"
      className={`w-full max-w-4xl mx-auto my-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:p-4 shadow-[var(--shadow)] overflow-hidden text-center select-none ${className}`}
      style={{ minHeight: format === 'horizontal' ? 90 : 250 }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: format === 'horizontal' ? 90 : 250 }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={adUnitId}
        data-ad-format={format === 'horizontal' ? 'horizontal' : 'auto'}
        data-full-width-responsive="true"
      />
    </aside>
  );
};
