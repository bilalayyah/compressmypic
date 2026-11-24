import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onNavigate: (path: string) => void;
}

/**
 * Homepage pricing section (EN, like UtilityFlow's): Free vs Lifetime
 * Premium $11.99 one-time. Honest "Secure checkout is coming soon" — no
 * purchase button, no fake checkout. Rendered on every locale homepage
 * with English copy, same as UtilityFlow.
 */
export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate }) => {
  return (
    <section aria-labelledby="pricing-heading" className="py-16 sm:py-20 bg-[var(--bg-soft)] border-t border-[var(--line)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-sans font-bold text-[var(--ink-navy)] tracking-tight">
          Pricing
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">
          Free forever. Upgrade once for lifetime access — no subscription.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--line)] p-6 shadow-[var(--shadow)]">
            <h3 className="text-lg font-sans font-bold text-[var(--ink-navy)]">Free</h3>
            <p className="mt-2 text-3xl font-extrabold text-[var(--ink-navy)]">$0</p>
            <p className="mt-1 text-sm text-[var(--ink-3)]">Free forever</p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--ink-2)]">
              <li>All 47 image tools</li>
              <li>Free forever</li>
              <li>Standard file-size limits apply</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-[#dc2626] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
            <p className="inline-flex rounded-full bg-[#dc2626] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Lifetime Access
            </p>
            <h3 className="mt-3 text-lg font-sans font-bold text-[var(--ink-navy)]">Lifetime Premium</h3>
            <p className="mt-2 text-3xl font-extrabold text-[var(--ink-navy)]">$11.99</p>
            <p className="mt-1 text-sm text-[var(--ink-3)]">One-time payment · No subscription</p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--ink-2)]">
              <li>All current tools, plus future tools</li>
              <li>Unlimited standard usage</li>
              <li>No daily caps</li>
              <li>No watermarks on exported files</li>
            </ul>
            <p className="mt-5 text-sm font-semibold text-[var(--ink-navy)]">Secure checkout is coming soon.</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/pricing/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/pricing');
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#dc2626] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#b91c1c] whitespace-nowrap cursor-pointer"
          >
            See full pricing
            <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
