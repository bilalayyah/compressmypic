import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, FileText, Info, Mail } from 'lucide-react';
import { ModalType } from '../types';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!type || type === 'comparison' || type === 'settings') return null;

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSending(true);
    try {
      // Send the message via FormSubmit (free) — every submission is emailed
      // to bilalayyah@gmail.com. No backend needed.
      const formData = new FormData();
      formData.append('name', contactName);
      formData.append('email', contactEmail);
      formData.append('subject', contactSubject);
      formData.append('message', contactMessage);
      formData.append('_subject', `CompressMyPic contact: ${contactSubject}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/bilalayyah@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[88vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            {type === 'about' && <Info className="w-5 h-5 text-blue-600" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-blue-600" />}
            {type === 'privacy' && <Shield className="w-5 h-5 text-emerald-600" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-indigo-600" />}
            <h2 className="text-lg font-bold text-slate-900 capitalize">
              {type === 'about' && 'About Us'}
              {type === 'contact' && 'Contact Us'}
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms of Service'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-sm text-slate-600 leading-relaxed space-y-4">
          {/* ABOUT US */}
          {type === 'about' && (
            <div className="space-y-4">
              <p>
                <strong>CompressMyPic</strong> is a fast, free, browser-native utility designed to help creators, developers, designers, and everyday web users compress and optimize images without sacrificing privacy or visual quality.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-2">How the Tool Works</h3>
              <p>
                Traditional image compression websites upload your sensitive personal photos or company graphics to remote servers, process them remotely, and send them back down. In contrast, <strong>CompressMyPic operates 100% inside your web browser</strong> using modern HTML5 Canvas, OffscreenCanvas, and native browser encoding APIs.
              </p>
              <h3 className="text-base font-bold text-slate-900 pt-2">Our Philosophy</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Absolute Privacy:</strong> Zero files ever touch an external server or database.</li>
                <li><strong>No Registration:</strong> No accounts, passwords, or credit card requirements.</li>
                <li><strong>Honest Metrics:</strong> Real before-and-after calculations generated from actual in-memory file blobs.</li>
                <li><strong>Sustainable &amp; Lightweight:</strong> Eliminates server compute overhead by using your client device's GPU/CPU.</li>
              </ul>
              <h3 className="text-base font-bold text-slate-900 pt-2">Browser Compatibility</h3>
              <p>
                CompressMyPic is fully compatible with all modern standards-compliant web browsers, including Google Chrome, Mozilla Firefox, Apple Safari (desktop and iOS), Microsoft Edge, and mobile browsers.
              </p>
            </div>
          )}

          {/* CONTACT US */}
          {type === 'contact' && (
            <div className="space-y-4">
              <p>
                Have a question, feedback, or a feature suggestion? Reach out to our team using the form below or via our support email.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-base">Message Sent Successfully</h4>
                  <p className="text-emerald-700 text-xs">
                    Thank you for reaching out! We typically respond within 24–48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 text-xs font-semibold text-emerald-800 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      placeholder="Feedback, Bug Report, or General Question"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  {submitError && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p><strong>Direct Inquiries:</strong> support@compressmypic.example.com (Editable placeholder)</p>
                <p><strong>Support Availability:</strong> Monday – Friday, 9:00 AM – 5:00 PM UTC</p>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY */}
          {type === 'privacy' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">Last updated: November 2026</p>
              <h3 className="text-base font-bold text-slate-900">1. Client-Side Image Processing</h3>
              <p>
                At CompressMyPic, user privacy is our foundational principle. <strong>Your images are processed strictly within your own browser sandbox.</strong> We do not transmit, upload, copy, store, or inspect any image files you select or compress. When you close or refresh your browser tab, all temporary in-memory objects are erased.
              </p>
              <h3 className="text-base font-bold text-slate-900">2. No Personal Data Collection</h3>
              <p>
                We do not require user accounts, passwords, email addresses, or phone numbers to use the compression engine. Any contact information you voluntarily submit through our contact form is used solely to respond to your specific inquiry.
              </p>
              <h3 className="text-base font-bold text-slate-900">3. Analytics &amp; Advertising</h3>
              <p>
                To maintain server hosting and domain upkeep, this website may integrate standard privacy-respecting analytics (such as Google Analytics 4) and advertising partners (such as Google AdSense). These third-party services may use cookies or web beacons to gather non-personally identifiable operational metrics (such as page views and browser types). You may disable cookies at any time via your browser settings.
              </p>
              <h3 className="text-base font-bold text-slate-900">4. Third-Party Links</h3>
              <p>
                Our website may contain links to external sites. We are not responsible for the privacy practices or content of third-party platforms.
              </p>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {type === 'terms' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">Last updated: November 2026</p>
              <h3 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h3>
              <p>
                By accessing and using CompressMyPic, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please discontinue using the service.
              </p>
              <h3 className="text-base font-bold text-slate-900">2. Permitted Use</h3>
              <p>
                You may use CompressMyPic for both personal and commercial image optimization purposes. You agree not to use the service for any unlawful activities or in any manner that could impair the operation or security of the website.
              </p>
              <h3 className="text-base font-bold text-slate-900">3. Intellectual Property Rights</h3>
              <p>
                You retain 100% full copyright and ownership of all images, photos, and graphics you compress with our tool. CompressMyPic claims no ownership, license, or rights whatsoever over your creative works.
              </p>
              <h3 className="text-base font-bold text-slate-900">4. Disclaimer of Warranties</h3>
              <p>
                CompressMyPic is provided "as is" and "as available" without warranties of any kind, whether express or implied. While we strive for maximum compatibility and performance, we do not warrant that the service will be uninterrupted, error-free, or meet specific technical requirements.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
