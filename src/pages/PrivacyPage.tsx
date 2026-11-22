import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Privacy Policy | CompressMyPic – Your Images Stay Private';
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
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Last updated: 15 Nov 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Client-Side Image Processing
            </h2>
            <p>
              CompressMyPic is a free online image compressor. Images are processed locally in your browser using HTML5 Canvas — they are never uploaded to our servers, and we do not collect, store, or share your images. When you close or refresh your browser tab, all temporary in-memory objects are erased.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. No Personal Data Collection
            </h2>
            <p>
              We do not require an account, password, email address, or phone number to use the compression tool. Any contact information you voluntarily submit through our contact form is used solely to respond to your specific inquiry.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Advertising
            </h2>
            <p>
              CompressMyPic currently shows no advertisements. No advertising cookies are set by this site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analytics
            </h2>
            <p>
              We use Google Analytics 4 (GA4) to understand, in aggregate, how the site is used — for example, which tools are popular and which pages receive visits. GA4 collects anonymized usage data such as the pages you visit, how long you stay, and general information about your device and browser. It may set cookies on your device (such as _ga) to distinguish one visit from another. We do not use GA4 to identify you personally. You can opt out of Google Analytics at any time by installing the Google Analytics Opt-out Add-on (https://tools.google.com/dlpage/gaoptout) or by disabling cookies in your browser settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external sites. We are not responsible for the privacy practices or content of third-party platforms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookies and Consent
            </h2>
            <p>
              CompressMyPic itself does not set any cookies for its image tools: compression runs entirely in your browser and needs no cookie, account, or stored preference on our side. Cookies on this site come from third-party services. For example, Google Analytics may set cookies for usage statistics. Your browser stores these cookies on your device, and you can delete them at any time through your browser settings.
            </p>
            <p>
              CompressMyPic currently shows no advertisements, so no advertising consent is requested from visitors in any region.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Your Rights Under the GDPR
            </h2>
            <p>
              If you are in the European Economic Area or the United Kingdom, the General Data Protection Regulation (GDPR) gives you rights over your personal data. You may ask us for a copy of the personal data we hold about you, ask us to correct it if it is wrong, ask us to delete it, ask us to limit how we use it, and object to our processing of it. Where processing is based on your consent, you may withdraw that consent at any time, and withdrawing consent does not affect anything we did lawfully before the withdrawal.
            </p>
            <p>
              Because our tools process images locally and we keep no user accounts, the only personal data we normally hold is the name, email address, and message you send through the contact form. To exercise any of these rights, email us at{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}and we will respond within 30 days. You also have the right to complain to your local data protection authority if you believe we have handled your data unfairly.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Data Retention
            </h2>
            <p>
              We keep personal data only for as long as it is needed for the purpose it was collected. Contact-form messages are kept only until your inquiry has been answered and the conversation is finished, and for a short period afterwards in case of follow-up questions; they are never used for marketing and never shared with third parties. Your images are never retained at all: they exist only in your browser's memory while you use a tool and are erased the moment you close or refresh the tab. Aggregated analytics data contains no personal information and is kept only in summary form.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Security and reCAPTCHA
            </h2>
            <p>
              The site is served over HTTPS, so the connection between your browser and the site is encrypted. Our contact form is delivered through FormSubmit, which forwards your message to our email address, and the form is protected by Google reCAPTCHA to block spam and automated abuse. When you submit the form, reCAPTCHA may collect hardware and software information, such as your browser and device details, to tell humans apart from bots; this is governed by Google's{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Privacy Policy
              </a>
              {' '}and{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Terms of Service
              </a>
              . We never ask you to send passwords, payment details, or sensitive personal documents through the contact form, and you should never include them in a message.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Children's Privacy
            </h2>
            <p>
              CompressMyPic is a general-audience tool and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has sent us personal information through the contact form, please email us and we will delete it promptly.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this policy when the site changes — for example, if we add a new analytics service, a new advertising partner, or a new way to contact us. When we do, we will change the "Last updated" date at the top of this page, and significant changes will be described here in plain language. Continuing to use the site after a change means you accept the updated policy.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Contact
            </h2>
            <p>
              If you have questions about this policy, contact us at{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
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
