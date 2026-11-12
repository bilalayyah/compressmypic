import React from 'react';

interface AdSlotProps {
  slotId: string;
  adClient?: string;
  adSlot?: string;
  className?: string;
  format?: 'horizontal' | 'rectangle';
}

/**
 * AdSlot component:
 * Stays empty/invisible until real AdSense IDs are provided.
 */
export const AdSlot: React.FC<AdSlotProps> = ({
  adClient,
  adSlot,
  className = '',
  format = 'horizontal',
}) => {
  if (!adClient || !adSlot) {
    return null;
  }

  return (
    <aside
      aria-label="Advertisement"
      className={`w-full max-w-4xl mx-auto my-6 text-center select-none ${className}`}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={format === 'horizontal' ? 'horizontal' : 'auto'}
        data-full-width-responsive="true"
      />
    </aside>
  );
};
