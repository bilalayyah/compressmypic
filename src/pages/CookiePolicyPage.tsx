import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Cookie Policy | CompressMyPic – How Cookies Are Used';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Cookie Policy
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Last updated: 18 Nov 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that a website asks your browser to store on your device. They can remember information about your visit — for example, whether you have seen a message before — so the site or a service on it can recognise your browser on a later visit. This policy explains which cookies are used on CompressMyPic, why they are used, and how you can control them.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookies We Do Not Set
            </h2>
            <p>
              CompressMyPic itself does not set any cookies. Our image tools run entirely in your browser: compression needs no account, no login, and no cookie. We do not set a cookie to remember you, track you, or store your preferences. Your images never leave your browser, and nothing about them is stored in a cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Advertising cookies
            </h2>
            <p>
              CompressMyPic currently shows no ads and does not set advertising cookies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Google Analytics 4 Cookies
            </h2>
            <p>
              We use Google Analytics 4 (GA4) to understand, in aggregate, how the site is used — for example, which tools are popular and which pages receive visits. GA4 may set cookies on your device, such as _ga, to distinguish one visit from another. The data is anonymized and used only in summary form; we do not use GA4 to identify you personally. You can opt out of Google Analytics at any time by installing the Google Analytics Opt-out Add-on (https://tools.google.com/dlpage/gaoptout) or by disabling cookies in your browser settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Consent (EEA, UK, and Switzerland)
            </h2>
            <p>
              Because this site currently shows no advertisements, no advertising consent message is shown and no advertising consent is requested. Usage statistics are collected with Google Analytics; you can block analytics cookies through your browser settings (see section 8).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Other Third-Party Services
            </h2>
            <p>
              A few other services on this site may use cookies or similar storage of their own. Google reCAPTCHA, which protects our contact form from spam, may set cookies to tell humans apart from bots; its use is governed by Google&apos;s{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Privacy Policy
              </a>
              {' '}and{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Terms of Service
              </a>
              . Cloudflare, which hosts this site, may set a security cookie to protect the site from abuse. The anonymous comments under our tools ask only for a name, which is stored by the comments service — not in a cookie on this site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Browser Storage That Is Not a Cookie
            </h2>
            <p>
              Your browser also stores a small amount of information locally that is not a cookie. If you post a comment, your browser may remember the name you typed so you do not have to type it again, and if you switch the site&apos;s language, your browser may remember that choice for your next visit. This information stays on your own device, is never sent to our servers, and you can clear it at any time by clearing your browser&apos;s site data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. How to Control Cookies
            </h2>
            <p>
              You can delete cookies already stored on your device and block cookies from being set in the future through your browser settings — every major browser (Chrome, Firefox, Safari, Edge) offers this under its privacy or security settings. Blocking all cookies will not break our image tools, which do not depend on cookies, but it may affect features of third-party services such as analytics. You can also use your browser&apos;s private or incognito mode, which deletes cookies when you close the window.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this policy when the site changes — for example, if we add a new advertising partner or analytics service. When we do, we will change the &quot;Last updated&quot; date at the top of this page. Continuing to use the site after a change means you accept the updated policy.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Contact
            </h2>
            <p>
              If you have questions about this policy, contact us at{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}or read our{' '}
              <a
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/privacy');
                }}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
