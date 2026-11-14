// Hero — multilingual replacement.
// Target path in the repo: src/components/Hero.tsx (REPLACE the whole file).
// Change vs the English original: new optional `strings` prop. App.tsx passes
// ES.hero (from the active locale file) when the page is localized; when omitted,
// the English strings below are used, so English behaviour is unchanged.
// No Spanish text is hardcoded here — the dictionary stays in src/locales/es/ui.ts
// (loaded lazily by App.tsx), keeping this component locale-agnostic.

import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export interface HeroStrings {
  pill: string;
  h1: string;
  sub: string;
  badge1: string;
  badge2: string;
  badge3: string;
}

const EN_STRINGS: HeroStrings = {
  pill: '100% Private Client-Side Compression · No Server Uploads',
  h1: 'Free Image Compressor – Compress Images Online & Reduce Size Without Losing Quality',
  sub: 'Reduce image file sizes without sacrificing noticeable quality. Compress image online free with our free image compressor and photo compressor — an online image optimizer for JPG, PNG, WebP and HEIC. Fast, secure, no signup, no watermark, and easy image compression directly in your browser.',
  badge1: 'Your images never leave your device',
  badge2: 'Instant browser processing',
  badge3: 'JPG, PNG, WebP & HEIC supported',
};

interface HeroProps {
  /** Localized hero strings for the active language. Defaults to English. */
  strings?: HeroStrings;
}

export const Hero: React.FC<HeroProps> = ({ strings = EN_STRINGS }) => {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16 text-center px-4 max-w-5xl mx-auto">
      {/* Primary Trust Callout */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs sm:text-sm font-semibold mb-7 shadow-[0_6px_24px_rgba(118,84,232,0.08)]">
        <Lock className="w-3.5 h-3.5 text-blue-600" />
        <span>{strings.pill}</span>
      </div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#21183d] via-[#6844d9] to-[#d45cce] bg-clip-text text-transparent tracking-[-0.045em] text-balance leading-[1.08] sm:leading-[1.06]">
        {strings.h1}
      </h1>
      <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance">
        {strings.sub}
      </p>
      {/* Trust Badges Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-y-3 gap-x-7 text-xs sm:text-sm text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{strings.badge1}</span>
        </div>
        <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-blue-600" />
          <span>{strings.badge2}</span>
        </div>
        <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
        <div className="flex items-center gap-1.5">
          <span>{strings.badge3}</span>
        </div>
      </div>
    </section>
  );
};
