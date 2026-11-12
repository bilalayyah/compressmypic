import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'About Us - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Image Compressor</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            CompressMyPic is a free, private image compressor. Compress JPG, PNG and WebP images right in your browser — fast, secure, and without uploading your files anywhere.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span>How the Tool Works</span>
            </h2>
            <p>
              Traditional image compression websites upload your sensitive personal photos or company graphics to remote servers, process them remotely, and send them back down. In contrast, <strong>CompressMyPic operates 100% inside your web browser</strong> using modern HTML5 Canvas, OffscreenCanvas, and native browser encoding APIs.
            </p>
            <p>
              When you select or drag and drop an image, your browser allocates a temporary memory buffer, draws the picture onto an invisible canvas, re-encodes the pixel array at your chosen quality level, and delivers the compressed blob back into your hands. Nothing is ever sent across the wire.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Our Core Principles</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Absolute Privacy</div>
                <p className="text-xs text-slate-600">
                  Zero files ever touch an external server or database. Your photos and sensitive graphics stay strictly on your local device.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">No Registration</div>
                <p className="text-xs text-slate-600">
                  No accounts, passwords, email verification, or credit card requirements. Jump straight to compressing immediately.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Honest Metrics</div>
                <p className="text-xs text-slate-600">
                  Real before-and-after calculations generated from actual in-memory file blobs, not estimated or exaggerated figures.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Sustainable &amp; Lightweight</div>
                <p className="text-xs text-slate-600">
                  Eliminates server compute overhead by using your client device's GPU/CPU, drastically reducing server energy waste.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              <span>Browser Compatibility</span>
            </h2>
            <p>
              CompressMyPic is fully compatible with all modern standards-compliant web browsers, including Google Chrome, Mozilla Firefox, Apple Safari (desktop and iOS), Microsoft Edge, and mobile browsers on Android and iOS.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Have questions or feedback? Feel free to visit our{' '}
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="text-blue-600 hover:underline font-semibold"
              >
                Contact Page
              </a>{' '}
              or reach us directly at <span className="font-mono text-slate-700">bilalayyah@gmail.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
