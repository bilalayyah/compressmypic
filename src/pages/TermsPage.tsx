import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Terms of Service - CompressMyPic';
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Image Compressor</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#7c3aed] dark:text-[#a78bfa]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Terms of Service
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Last updated: 12 Nov 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using CompressMyPic, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please discontinue using the service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Permitted Use
            </h2>
            <p>
              You may use CompressMyPic for both personal and commercial image optimization purposes. You agree not to use the service for any unlawful activities or in any manner that could impair the operation, security, or availability of the website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Intellectual Property Rights
            </h2>
            <p>
              You retain 100% full copyright, ownership, and intellectual property rights over all images, photos, and graphics you compress with our tool. CompressMyPic claims no ownership, license, or rights whatsoever over your creative works. All processing occurs locally on your machine.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Disclaimer of Warranties
            </h2>
            <p>
              CompressMyPic is provided "as is" and "as available" without warranties of any kind, whether express or implied. While we strive for maximum compatibility and performance across all browsers, we do not warrant that the service will be uninterrupted, error-free, or meet specific technical requirements.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Contact
            </h2>
            <p>
              If you have any questions regarding these terms, please reach out to us at{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
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
