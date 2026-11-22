import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageBnProps {
  onNavigate: (path: string) => void;
}

export const ContactPageBn: React.FC<ContactPageBnProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'যোগাযোগ করুন - CompressMyPic';
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
        throw new Error(data?.message || 'বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'নেটওয়ার্ক ত্রুটি। সরাসরি bilalayyah@gmail.com ঠিকানায় পাঠানোর চেষ্টা করুন।'
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
            onClick={() => onNavigate('/bn/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ইমেজ কম্প্রেসরে ফিরে যান</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            যোগাযোগ করুন
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            আপনার কোনো প্রশ্ন, মতামত আছে, অথবা সাহায্য দরকার? নিচের ফর্ম দিয়ে আমাদের টিমকে লিখুন অথবা সরাসরি ইমেইলে যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>সরাসরি জিজ্ঞাসা</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>উত্তরের সময়</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                আমরা সাধারণত 24 থেকে 48 কর্মঘণ্টার মধ্যে উত্তর দিই।
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>গোপনীয়তার অঙ্গীকার</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                আপনার ইমেইল ও আপনার বার্তার ডেটা শুধু আপনার জিজ্ঞাসার উত্তর দিতে ব্যবহার হয় এবং কখনো শেয়ার করা হয় না।
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">বার্তা সফলভাবে পাঠানো হয়েছে</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  লেখার জন্য ধন্যবাদ! আপনার বার্তা FormSubmit-এর মাধ্যমে bilalayyah@gmail.com ঠিকানায় পাঠানো হয়েছে। আমরা শীঘ্রই উত্তর দেব।
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    আরেকটি বার্তা পাঠান
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
                      আপনার নাম <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="আরিফ হোসেন"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      ইমেইল <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="arif@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    বিষয় <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="মতামত, বাগ রিপোর্ট অথবা সাধারণ প্রশ্ন"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    বার্তা <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="আমরা কীভাবে সাহায্য করতে পারি? আপনার সমস্যা বা পরামর্শ বিস্তারিত জানান..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
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
                      <span>বার্তা পাঠানো হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>বার্তা পাঠান</span>
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
              <Mail className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic-এর পেছনে কে আছেন</span>
            </h2>
            <p>
              CompressMyPic বানিয়েছেন ও রক্ষণাবেক্ষণ করেন Bilal — একজন স্বাধীন নির্মাতা যিনি সত্যিই বিনামূল্যের ও আপনার গোপনীয়তাকে সম্মান করে এমন একটি ইমেজ কম্প্রেসর চেয়েছিলেন। বেশিরভাগ অনলাইন টুলের বিপরীতে, CompressMyPic আপনার ছবি কখনো কোনো সার্ভারে আপলোড করে না: প্রতিটি ইমেজ সরাসরি আপনার নিজের ব্রাউজারে কম্প্রেস হয়। Bilal প্রতিটি বার্তা নিজেই পড়েন এবং আপনার মতামত ব্যবহার করেন বাগ ঠিক করতে, কোয়ালিটি উন্নত করতে এবং এরপর কোন নতুন টুল বানাবেন তা ঠিক করতে।
            </p>
            <p>
              যেহেতু এটি একটি ছোট, স্বাধীন প্রজেক্ট, কোনো বড় কোম্পানি নয়, তাই আপনি সবসময় সরাসরি ও সৎ উত্তর পাবেন — এমনকি যখন উত্তরটি হয় যে কোনো সুবিধা এখনো সম্ভব নয়। আপনার ও টুলটি বানানো মানুষটির মধ্যে কোনো সাপোর্ট লাইন নেই, কোনো স্বয়ংক্রিয় চ্যাটবট নেই।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>আপনি আমাদের কী বিষয়ে লিখতে পারেন?</span>
            </h2>
            <p>
              সাহায্য পাওয়ার সবচেয়ে দ্রুত উপায় হলো ঠিক কী ঘটেছে তা আমাদের জানানো। বাগ রিপোর্ট করতে, আপনি যে টুলটি ব্যবহার করছিলেন তার নাম, আপনার ব্রাউজার ও ইমেজ ফাইলের ধরন জানান — যেমন iPhone-এর HEIC ছবি অথবা স্বচ্ছ PNG। সুবিধার পরামর্শ দিতে, জানান আপনি কী অর্জন করতে চেয়েছিলেন এবং বর্তমান টুল কেন তা পূরণ করে না। আমরা ভুল ফলাফলের রিপোর্টও স্বাগত জানাই, যেমন কম্প্রেস করা ইমেজ যা প্রত্যাশার চেয়ে খারাপ দেখায়, এবং আমাদের গাইড বা যেকোনো অনুবাদ করা পেজে উন্নতির পরামর্শও।
            </p>
            <p>
              আপনি আমাদের অংশীদারিত্ব, প্রেস জিজ্ঞাসা ও নতুন টুলের পরামর্শ সম্পর্কেও লিখতে পারেন। আপনার যদি ওয়েবসাইট, ব্লগ বা ক্লাসরুম থাকে এবং আপনি আপনার পাঠক বা শিক্ষার্থীদের CompressMyPic সুপারিশ করতে চান, তাহলে জেনে আমরা খুশি হব: ওপরে দেওয়া ফর্মটি ব্যবহার করুন এবং একটি স্পষ্ট বিষয় বেছে নিন যাতে আপনার বার্তা দ্রুত সঠিক জায়গায় পৌঁছায়।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Bilal-এর সঙ্গে যোগাযোগের অন্যান্য উপায়</span>
            </h2>
            <p>
              আপনি যদি কোনো প্রকাশ্য চ্যানেল পছন্দ করেন, তাহলে Bilal ও CompressMyPic প্রজেক্টকে ওয়েবে পেতে পারেন। সোর্স কোড GitHub-এ আছে, যেখানে আপনি প্রযুক্তিগত সমস্যাও রিপোর্ট করতে পারেন এবং উন্নয়ন অনুসরণ করতে পারেন। ইমেজ কম্প্রেশন নিয়ে দীর্ঘ গাইড Dev.to-তে প্রকাশিত হয়, এবং প্রোডাক্টটি Indie Hackers-এ তালিকাভুক্ত আছে, যেখানে আপনি এর অগ্রগতি দেখতে পারেন এবং মন্তব্য রেখে যেতে পারেন।
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— সোর্স কোড, বাগ রিপোর্ট ও উন্নয়নের খবর।
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— JPG, PNG ও WebP কম্প্রেশন নিয়ে গাইড।
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— প্রোডাক্ট পেজ, মাইলফলক ও কমিউনিটির মন্তব্য।
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>লেখার আগে</span>
            </h2>
            <p>
              কিছু দ্রুত পরীক্ষা উত্তরের অপেক্ষা না করেই বেশিরভাগ সমস্যা সমাধান করে দেয়। মূল কম্প্রেসর প্রতি ইমেজে 20 MB পর্যন্ত ইমেজ নেয়, আর ফরম্যাট কনভার্টার প্রতি ফাইলে 25 MB পর্যন্ত নেয়; এর চেয়ে বড় ফাইল শুরুতেই প্রত্যাখ্যান করা হবে। খুব পুরনো ব্রাউজার AVIF বা HEIC-এর মতো নতুন ফরম্যাট সমর্থন নাও করতে পারে, তাই Chrome, Edge, Firefox বা Safari-এর সাম্প্রতিক সংস্করণ চেষ্টা করলে প্রায়ই ভাঙা মনে হওয়া টুল ঠিক হয়ে যায়। আর যেহেতু আপনার ইমেজ কখনো আপনার ডিভাইসের বাইরে যায় না, তাই কোনো নির্দিষ্ট ছবির সমস্যা সাধারণত ফাইলের কারণে হয়, ওয়েবসাইটের কারণে নয়।
            </p>
            <p>
              আপনি যখন আমাদের লিখবেন, আপনার ব্রাউজারের নাম ও সংস্করণ, আপনি যে টুলটি ব্যবহার করছিলেন, এবং ইমেজের সাইজ ও ফরম্যাট জানান। আমরা ইংরেজিতে উত্তর দিই, সাধারণত 24 থেকে 48 কর্মঘণ্টার মধ্যে। আপনার প্রশ্ন যদি হয় আমরা আপনার ডেটা কীভাবে দেখভাল করি, তাহলে আগে আমাদের{' '}
              <button
                type="button"
                onClick={() => onNavigate('/bn/goponiyota-niti')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                গোপনীয়তা নীতি
              </button>
              {' '}পড়তে পারেন: সেখানে সহজ ভাষায় ব্যাখ্যা করা হয়েছে যে আপনার ইমেজ কখনো আপলোড বা সংরক্ষণ করা হয় না।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>সমস্যা রিপোর্ট করুন</span>
            </h2>
            <p>
              কিছু ভাঙা পেয়েছেন? জানান এটি কোন পেজে ঘটেছে, আপনি কী ক্লিক করেছিলেন এবং তার বদলে আপনি কী দেখার আশা করেছিলেন। স্ক্রিনশট খুব সাহায্য করে, এবং সমস্যা যদি কোনো নির্দিষ্ট ইমেজের সঙ্গে জড়িত হয়, তাহলে তার ফরম্যাট ও সাইজ জানান — তবে আমাদের কখনো ব্যক্তিগত বা সংবেদনশীল ছবি পাঠাবেন না। আমরা রিপোর্ট করা সমস্যাগুলো যত দ্রুত সম্ভব ঠিক করি এবং ঠিক হলে ইমেইলে আপনাকে জানাব।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
