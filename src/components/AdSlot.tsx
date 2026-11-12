import React from 'react';

interface AdSlotProps {
  slotId: string;
  adClient?: string;
  adSlot?: string;
  className?: string;
  format?: 'horizontal' | 'rectangle';
}

/**
 * Reserved Google AdSense Placement Slot
 * Cleanly demarcated to prevent deception and comply strictly with Google AdSense policies.
 * When real AdSense client & slot IDs are configured, will render standard Google AdSense tags.
 */
export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  adClient,
  adSlot,
  className = '',
  format = 'horizontal',
}) => {
  // No real AdSense IDs configured yet — render nothing so the page stays clean
  // (no fake "Reserved Ad Placement" boxes) until AdSense is approved and wired in.
  if (!adClient || !adSlot) {
    return null;
  }

  return (
    <aside
      aria-label="Advertisement Container"
      className={`w-full max-w-4xl mx-auto my-6 text-center select-none ${className}`}
    >
      <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1">
        Advertisement
      </div>
      <div
        id={`ad-slot-${slotId}`}
        className={`w-full rounded-xl border border-slate-200/80 bg-slate-50/70 flex flex-col items-center justify-center p-4 text-xs text-slate-400 transition-colors ${
          format === 'horizontal' ? 'min-h-[90px] sm:min-h-[100px]' : 'min-h-[250px]'
        }`}
      >
        <span className="font-medium text-slate-500">Reserved Ad Placement</span>
        <span className="text-[11px] text-slate-400 mt-0.5">
          Configurable for Google AdSense ({slotId})
        </span>
      </div>
    </aside>
  );
};
