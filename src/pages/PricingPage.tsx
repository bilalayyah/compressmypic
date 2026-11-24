import React, { useEffect } from 'react';
import { ArrowLeft, Tag } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Pricing | CompressMyPic – Free vs Lifetime Premium';
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
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>Back to Image Compressor</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Tag className="w-6 h-6 text-[#dc2626] dark:text-[#fca5a5]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Pricing
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Last updated: 24 Nov 2026
          </p>
          <p className="mt-4 text-base text-[var(--ink-2)] leading-relaxed">
            CompressMyPic is free to use. Lifetime Premium is a single one-time payment — no
            subscription, no recurring fees.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--line)] p-6 sm:p-8 shadow-[var(--shadow)]">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">Free</h2>
            <p className="mt-2 text-3xl font-extrabold text-[var(--ink-navy)]">$0</p>
            <p className="mt-1 text-sm text-[var(--ink-3)]">Free forever</p>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-[var(--ink-2)]">
              <li>All 47 image tools</li>
              <li>Free forever</li>
              <li>Standard file-size limits apply</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-[#dc2626] bg-[var(--surface)] p-6 sm:p-8 shadow-[var(--shadow)]">
            <p className="inline-flex rounded-full bg-[#dc2626] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Lifetime Access
            </p>
            <h2 className="mt-3 text-xl font-sans font-bold text-[var(--ink-navy)]">Lifetime Premium</h2>
            <p className="mt-2 text-3xl font-extrabold text-[var(--ink-navy)]">$11.99</p>
            <p className="mt-1 text-sm text-[var(--ink-3)]">One-time payment · No subscription</p>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-[var(--ink-2)]">
              <li>All current tools, plus future tools</li>
              <li>Unlimited standard usage</li>
              <li>No daily caps</li>
              <li>No watermarks on exported files</li>
            </ul>
            <p className="mt-6 text-sm font-semibold text-[var(--ink-navy)]">Secure checkout is coming soon.</p>
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--ink-2)]">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              Refunds
            </h2>
            <p>
              Lifetime Premium comes with a 14-day refund window. Read the full{' '}
              <a
                href="/refund-policy/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/refund-policy');
                }}
                className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline cursor-pointer"
              >
                Refund Policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              Questions?
            </h2>
            <p>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline cursor-pointer"
              >
                Contact us
              </a>{' '}
              or email{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                bilalayyah@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
