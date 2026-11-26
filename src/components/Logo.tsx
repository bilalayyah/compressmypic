import { Layers } from 'lucide-react';

/**
 * SiteLogo — the single source of truth for the CompressMyPic brand logo.
 *
 * Both the Header and the Footer render this component, so the two logos
 * can never drift apart again: same Layers icon, same red gradient mark,
 * same wordmark (Compress dark, MyPic red).
 *
 * Do NOT duplicate this markup anywhere else — import SiteLogo instead.
 */
export function SiteLogo() {
  return (
    <>
      <span
        className="w-8 h-8 max-[359px]:w-7 max-[359px]:h-7 sm:w-9 sm:h-9 rounded-[10px] btn-purple-grad grid place-items-center shadow-xs shrink-0"
        aria-hidden="true"
      >
        <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
      </span>
      <span className="font-sans text-[1rem] max-[359px]:text-[0.92rem] sm:text-[1.22rem] font-extrabold text-[var(--ink-navy)] tracking-[-0.02em]">
        Compress<span className="text-[#dc2626] dark:text-[#f87171]">MyPic</span>
      </span>
    </>
  );
}
