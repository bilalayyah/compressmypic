import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Contact Us - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bilalayyah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject || 'CompressMyPic Contact Inquiry',
          message: contactMessage,
          _subject: `New inquiry from ${contactName}: ${contactSubject || 'CompressMyPic'}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setContactName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Could not send message. Please try again.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Network error. Please try sending directly to bilalayyah@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            Have questions, feedback, or need assistance? Reach out to our team using the form below, or contact us directly by email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#7c3aed] dark:text-[#a78bfa]" />
                <span>Direct Inquiries</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>Response Time</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                We typically respond within 24–48 business hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>Privacy Commitment</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Your email and message details are only used to respond to your inquiry and are never shared.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">Message Delivered Successfully</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  Thank you for reaching out! Your message was transmitted via FormSubmit to bilalayyah@gmail.com. We will get back to you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
                {errorMessage && (
                  <div className="p-3 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-xs rounded-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Your Name <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Email Address <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Subject <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Feedback, Bug Report, or General Question"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Message <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="How can we help you? Describe your issue or suggestion in detail..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 btn-purple-pill disabled:opacity-50 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Extra Information Sections */}
        <div className="mt-12 space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Who Runs CompressMyPic</span>
            </h2>
            <p>
              CompressMyPic is built and maintained by Bilal, an independent maker who wanted a truly free image compressor that respects your privacy. Unlike most online tools, CompressMyPic never uploads your photos to a server: every image is compressed right inside your own browser. Bilal reads every message personally and uses your feedback to fix bugs, improve quality, and decide which new tools to build next.
            </p>
            <p>
              Because this is a small, independent project rather than a large company, you will always get a direct, honest answer — even when the answer is that a particular feature is not possible yet. There is no support desk queue and no automated chatbot standing between you and the person who built the tool.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>What Can You Write to Us About?</span>
            </h2>
            <p>
              The fastest way to get help is to tell us exactly what happened. For a bug report, please include the name of the tool you were using, your browser, and the type of image file — for example, a HEIC photo from an iPhone or a transparent PNG. For a feature request, describe what you were trying to do and why the current tools did not cover it. We also welcome reports of wrong results, such as a compressed image that looks worse than expected, and corrections to our guides or to any translated page.
            </p>
            <p>
              You can also write about partnerships, press enquiries, and suggestions for new tools. If you run a website, a blog, or a classroom and want to recommend CompressMyPic to your readers or students, we would love to hear from you — just use the form above and choose a clear subject line so your message reaches the right place quickly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Other Ways to Reach Bilal</span>
            </h2>
            <p>
              If you prefer a public channel, you can find Bilal and the CompressMyPic project on the web. The source code lives on GitHub, where you can also report technical issues and follow development. Longer guides about image compression are published on Dev.to, and the product is listed on Indie Hackers, where you can follow its progress and leave feedback.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— source code, issue reports, and development updates.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— guides on JPG, PNG, and WebP compression.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— product page, milestones, and community feedback.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Before You Write</span>
            </h2>
            <p>
              A few quick checks solve most problems without waiting for a reply. The main compressor accepts images up to 20 MB each, while the format converters accept up to 25 MB per file — a file larger than that will be rejected before it starts. Very old browsers may not support newer formats such as AVIF or HEIC, so trying a recent version of Chrome, Edge, Firefox, or Safari often fixes a tool that seems broken. And because your images never leave your device, a problem with one particular photo is usually caused by the file itself, not by the website.
            </p>
            <p>
              When you do write, please include your browser name and version, the tool you were using, and the size and format of the image. We reply in English and usually answer within 24–48 business hours. If your question is about how your data is handled, you can also read our{' '}
              <button
                type="button"
                onClick={() => onNavigate('/privacy')}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold cursor-pointer"
              >
                Privacy Policy
              </button>
              {' '}first — it explains in plain language that your images are never uploaded or stored.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Report a Problem</span>
            </h2>
            <p>
              Found something broken? Tell us which page it happened on, what you clicked, and what you expected to see instead. Screenshots help a great deal, and if the problem involves a specific image, let us know its format and size — but please never send us private or sensitive photos. We fix reported bugs as quickly as we can, and we will let you know by email once the fix is live.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
