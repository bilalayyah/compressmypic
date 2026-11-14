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
            Last updated: 14 Nov 2026
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

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Service Availability and Changes
            </h2>
            <p>
              CompressMyPic is a free service and we do not guarantee that it will be available at all times. We may change, suspend, or discontinue any tool, feature, or the entire website at any time, with or without notice — for example, to fix a bug, to replace a technology that no longer works in modern browsers, or to keep the service free. We may also set reasonable limits, such as a maximum file size per image (currently 20 MB for the main compressor and 25 MB for the format converters), and we may change those limits as browsers and devices improve. Because all processing happens in your browser, an interruption to the website never puts your original images at risk: your files stay on your device.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Acceptable Use
            </h2>
            <p>
              You agree to use CompressMyPic only for lawful purposes and in a way that does not harm the service or other people. In particular, you must not attempt to overload, damage, or reverse-engineer the website, probe it for security weaknesses, use automated scripts to submit large numbers of requests, or use the service to process images that infringe someone else's copyright, contain illegal material, or are intended to deceive or harass. You are responsible for making sure you have the right to use every image you process, and for keeping a backup of any image that matters to you before compressing or converting it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, CompressMyPic and its owner will not be liable for any indirect, incidental, or consequential loss arising from your use of the service — including, but not limited to, loss of data, loss of profits, or the cost of re-creating an image. Because the service is free, our total liability for any claim connected with the service is limited to the amount you paid to use it, which is zero. This does not limit any liability that cannot be limited by law, such as liability for fraud or for death or personal injury caused by negligence.
            </p>
            <p>
              Compression is a lossy process by nature: reducing a file's size can reduce its quality, and some formats, such as JPEG, cannot preserve transparency. You are responsible for checking the compressed result before you delete or overwrite an original file, and we are not responsible for quality loss, missing transparency, or any other change that compression makes to an image you chose to process.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Third-Party Services
            </h2>
            <p>
              The site uses third-party services to operate, including hosting and content delivery through Cloudflare, advertising through Google AdSense, and message delivery through FormSubmit. Those services have their own terms and privacy policies, and your use of them is governed by those documents as well as by these terms. We are not responsible for the availability, content, or practices of third-party websites or services linked from CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates, where the site is operated from, without regard to its conflict-of-law rules. Any dispute arising from or connected with these terms or your use of the service will be resolved by the courts of the United Arab Emirates. If any part of these terms is found to be unenforceable, the remaining parts will continue to apply in full.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these terms when the service changes — for example, when we add new tools, change file-size limits, or start using a new third-party service. When we do, we will update the "Last updated" date at the top of this page. If you continue to use CompressMyPic after the terms have changed, you accept the updated terms. If you do not agree with a change, please stop using the service.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Contact
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
