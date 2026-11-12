import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center px-4 max-w-4xl mx-auto">
      {/* Primary Trust Callout */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-6">
        <Lock className="w-3.5 h-3.5 text-blue-600" />
        <span>100% Private Client-Side Compression · No Server Uploads</span>
      </div>
      <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight sm:leading-tight">
        Free Image Compressor – Compress Images Online &amp; Reduce Size Without Losing Quality
      </h1>
      <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
        Reduce image file sizes without sacrificing noticeable quality. Compress image online free with our free image compressor and photo compressor — an online image optimizer for JPG, PNG and WebP. Fast, secure, no signup, no watermark, and easy image compression directly in your browser.
      </p>
      {/* Trust Badges Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Your images never leave your device</span>
        </div>
        <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-blue-600" />
          <span>Instant browser processing</span>
        </div>
        <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
        <div className="flex items-center gap-1.5">
          <span>JPG, PNG &amp; WebP supported</span>
        </div>
      </div>
    </section>
  );
};
