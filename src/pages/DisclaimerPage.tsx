import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Disclaimer | CompressMyPic – Free Image Tools';
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
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Image Compressor</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Disclaimer
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Last updated: 18 Nov 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. General Information
            </h2>
            <p>
              CompressMyPic is a free online image compression and editing service. The tools, guides, and articles on this website are provided for general information and practical use only. They are not professional advice of any kind — not legal, medical, financial, or technical advice — and they do not create any professional relationship between you and CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. No Warranty
            </h2>
            <p>
              The service is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether express or implied. We do not warrant that the tools will always be available, uninterrupted, error-free, or free of harmful components, or that any particular image will compress to a particular size or quality. Results depend on the original image, its format, and your browser, so always keep a copy of your original files before using any tool.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Accuracy of Content
            </h2>
            <p>
              We work hard to keep our guides, articles, and tool descriptions accurate and up to date, but image formats, browsers, and web standards change over time. Information on this site may become outdated or contain errors despite our best efforts. Always verify important details — such as file-size limits for a platform you are uploading to — against the platform&apos;s own current documentation before relying on them.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Your Files Are Your Responsibility
            </h2>
            <p>
              Images are processed locally in your browser and are never uploaded to our servers. That also means we cannot recover a file for you: if you overwrite, delete, or lose an original image while using our tools, we cannot restore it. Please keep backups of any image that matters to you, and only process copies of files you own or have permission to edit.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Third-Party Services and Links
            </h2>
            <p>
              This site uses third-party services — Google AdSense for advertising, Google Analytics 4 for usage statistics, FormSubmit for the contact form, and a Cloudflare Worker for anonymous comments — and it links to external websites. We do not control those services or sites, and we are not responsible for their content, availability, privacy practices, or accuracy. Their own terms and privacy policies apply when you use them.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Advertising
            </h2>
            <p>
              Advertisements shown on this site are served by Google AdSense and its partners. We do not endorse, guarantee, or take responsibility for any product, service, or claim made in an advertisement. Any purchase or decision you make based on an ad is entirely at your own risk; please evaluate advertisers yourself before buying anything.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, CompressMyPic and its operator will not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of — or inability to use — this website or its tools, including but not limited to lost files, lost data, or lost profits. Your sole remedy for dissatisfaction with the service is to stop using it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. User Comments
            </h2>
            <p>
              Comments posted under our tools are written by visitors and reflect their own opinions, not ours. We moderate comments and may remove anything spammy, abusive, or off-topic, but we do not endorse or take responsibility for the content of user comments. Never share passwords, payment details, or sensitive personal information in a comment.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Contact
            </h2>
            <p>
              If you have questions about this disclaimer, contact us at{' '}
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
