import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Privacy Policy - CompressMyPic';
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
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Last updated: 12 Nov 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Client-Side Image Processing
            </h2>
            <p>
              CompressMyPic is a free online image compressor. Images are processed locally in your browser using HTML5 Canvas — they are never uploaded to our servers, and we do not collect, store, or share your images. When you close or refresh your browser tab, all temporary in-memory objects are erased.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. No Personal Data Collection
            </h2>
            <p>
              We do not require an account, password, email address, or phone number to use the compression tool. Any contact information you voluntarily submit through our contact form is used solely to respond to your specific inquiry.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Advertising (Google AdSense)
            </h2>
            <p>
              We use Google AdSense to show ads once enabled. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google Ads Settings (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) or{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Analytics
            </h2>
            <p>
              We do not currently use analytics cookies. If that changes, this policy will be updated.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              5. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external sites. We are not responsible for the privacy practices or content of third-party platforms.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              6. Contact
            </h2>
            <p>
              If you have questions about this policy, contact us at{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
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
