import React, { useEffect } from 'react';
import { ArrowLeft, Receipt } from 'lucide-react';

interface RefundPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const RefundPolicyPage: React.FC<RefundPolicyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Refund Policy | CompressMyPic – 14-Day Refunds';
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
            <Receipt className="w-6 h-6 text-[#dc2626] dark:text-[#fca5a5]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Refund Policy
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Last updated: 24 Nov 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              14-day refund window
            </h2>
            <p>
              You may request a refund within 14 days of purchase.
            </p>
            <p>
              This applies to Lifetime Premium, a one-time payment of $11.99 for lifetime
              access. There is no subscription and no recurring charge.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              How refunds are processed
            </h2>
            <p>
              Payments are processed by Paddle, our payment processor. Paddle also processes
              refunds.
            </p>
            <p>
              Once approved, the refund is returned to the original payment method. The time it
              takes to appear depends on your bank or card provider.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              How to request a refund
            </h2>
            <p>
              Email{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                bilalayyah@gmail.com
              </a>{' '}
              with the email address used for the purchase and your order details.
            </p>
            <p>
              We will confirm your request and pass it to Paddle for processing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              No subscription to cancel
            </h2>
            <p>
              Lifetime Premium is a one-time payment. There is no subscription, so there is
              nothing to cancel.
            </p>
            <p>
              If you have any other question,{' '}
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline cursor-pointer"
              >
                contact us
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
