import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageBnProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageBn: React.FC<CookiePolicyPageBnProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'কুকি নীতি | CompressMyPic – কুকি কীভাবে ব্যবহার হয়';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/bn/')}
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ইমেজ কম্প্রেসরে ফিরে যান</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              কুকি নীতি
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            সর্বশেষ আপডেট: 18 নভেম্বর 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. কুকি কী?
            </h2>
            <p>
              কুকি হলো ছোট টেক্সট ফাইল, যা কোনো ওয়েবসাইট আপনার ব্রাউজারকে আপনার ডিভাইসে সংরক্ষণ করতে বলে। এগুলো আপনার ভিজিট সম্পর্কে তথ্য মনে রাখতে পারে — যেমন আপনি আগে কোনো বার্তা দেখেছেন কি না — যাতে সাইট বা তার কোনো পরিষেবা পরের ভিজিটে আপনার ব্রাউজারকে চিনতে পারে। এই নীতিতে বলা হয়েছে CompressMyPic-এ কোন কুকি ব্যবহার হয়, কেন ব্যবহার হয়, এবং আপনি সেগুলো কীভাবে নিয়ন্ত্রণ করতে পারেন।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. যেসব কুকি আমরা বসাই না
            </h2>
            <p>
              CompressMyPic নিজে কোনো কুকি বসায় না। আমাদের ইমেজ টুল সম্পূর্ণ আপনার ব্রাউজারে চলে: কম্প্রেশনের জন্য অ্যাকাউন্ট, লগইন বা কুকি — কিছুই লাগে না। আপনাকে মনে রাখতে, আপনাকে ট্র্যাক করতে বা আপনার পছন্দ সংরক্ষণ করতে আমরা কুকি বসাই না। আপনার ইমেজ কখনো আপনার ব্রাউজারের বাইরে যায় না, এবং সেগুলো সম্পর্কে কিছুই কোনো কুকিতে সংরক্ষণ করা হয় না।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. বিজ্ঞাপনের কুকি
            </h2>
            <p>
              CompressMyPic বর্তমানে কোনো বিজ্ঞাপন দেখায় না এবং বিজ্ঞাপনের কুকি বসায় না।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Google Analytics 4 কুকি
            </h2>
            <p>
              সাইটটি সামগ্রিকভাবে কীভাবে ব্যবহার হয় তা বুঝতে আমরা Google Analytics 4 (GA4) ব্যবহার করি — যেমন কোন টুল জনপ্রিয় এবং কোন পেজে ভিজিট আসে। GA4 আপনার ডিভাইসে কুকি বসাতে পারে, যেমন _ga, যাতে এক ভিজিটকে আরেক ভিজিট থেকে আলাদা করে চেনা যায়। ডেটা বেনামে থাকে এবং শুধু সারসংক্ষেপ আকারে ব্যবহার হয়; আপনাকে ব্যক্তিগতভাবে শনাক্ত করতে আমরা GA4 ব্যবহার করি না। আপনি Google Analytics অপ্ট-আউট অ্যাড-অন ইনস্টল করে (https://tools.google.com/dlpage/gaoptout) অথবা আপনার ব্রাউজারের সেটিংসে কুকি বন্ধ করে, যেকোনো সময় Google Analytics থেকে বেরিয়ে যেতে পারেন।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. সম্মতি (EEA, UK ও সুইজারল্যান্ড)
            </h2>
            <p>
              যেহেতু এই সাইট বর্তমানে কোনো বিজ্ঞাপন দেখায় না, তাই কোনো বিজ্ঞাপন সম্মতি বার্তা দেখানো হয় না এবং বিজ্ঞাপনের জন্য কোনো সম্মতি চাওয়া হয় না। ব্যবহারের পরিসংখ্যান Google Analytics থেকে সংগ্রহ করা হয়; আপনি আপনার ব্রাউজারের সেটিংস থেকে অ্যানালিটিকস কুকি ব্লক করতে পারেন (ধারা 8 দেখুন)।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. অন্যান্য তৃতীয় পক্ষের পরিষেবা
            </h2>
            <p>
              এই সাইটের কিছু অন্যান্য পরিষেবা নিজস্ব কুকি বা একই ধরনের স্টোরেজ ব্যবহার করতে পারে। Google reCAPTCHA, যা আমাদের যোগাযোগ ফর্মকে স্প্যাম থেকে রক্ষা করে, মানুষকে বট থেকে আলাদা করতে কুকি বসাতে পারে; এর ব্যবহার{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">Google-এর গোপনীয়তা নীতি</a>
              {' '}এবং{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">Google-এর পরিষেবার শর্তাবলী</a>
              {' '}-এর অধীন। Cloudflare, যা এই সাইট হোস্ট করে, সাইটকে অপব্যবহার থেকে রক্ষা করতে নিরাপত্তা কুকি বসাতে পারে। আমাদের টুলের নিচে বেনামে মন্তব্যে শুধু একটি নাম চাওয়া হয়, যা মন্তব্য পরিষেবা সংরক্ষণ করে — এই সাইটের কোনো কুকিতে নয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. ব্রাউজার স্টোরেজ যা কুকি নয়
            </h2>
            <p>
              আপনার ব্রাউজার অল্প কিছু স্থানীয় তথ্যও সংরক্ষণ করে যা কুকি নয়। আপনি যদি কোনো মন্তব্য পোস্ট করেন, আপনার ব্রাউজার আপনার লেখা নামটি মনে রাখতে পারে যাতে আপনাকে আবার লিখতে না হয়, এবং আপনি যদি সাইটের ভাষা বদলান, আপনার ব্রাউজার পরের ভিজিটের জন্য সেই পছন্দ মনে রাখতে পারে। এই তথ্য আপনার নিজের ডিভাইসে থাকে, কখনো আমাদের সার্ভারে পাঠানো হয় না, এবং আপনি ব্রাউজারে সাইট ডেটা মুছে যেকোনো সময় তা মুছে ফেলতে পারেন।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. কুকি কীভাবে নিয়ন্ত্রণ করবেন
            </h2>
            <p>
              আপনি আপনার ডিভাইসে ইতিমধ্যে সংরক্ষিত কুকি মুছে ফেলতে পারেন এবং আপনার ব্রাউজারের সেটিংস থেকে ভবিষ্যতে কুকি বসা বন্ধ করতে পারেন — সব প্রধান ব্রাউজার (Chrome, Firefox, Safari, Edge) তাদের গোপনীয়তা বা নিরাপত্তা সেটিংসে এই বিকল্প দেয়। সব কুকি ব্লক করলে আমাদের ইমেজ টুলে কোনো প্রভাব পড়বে না, কারণ সেগুলো কুকির ওপর নির্ভর করে না, তবে এতে পরিসংখ্যানের মতো তৃতীয় পক্ষের পরিষেবার সুবিধা ক্ষতিগ্রস্ত হতে পারে। আপনি আপনার ব্রাউজারের প্রাইভেট বা ইনকগনিটো মোডও ব্যবহার করতে পারেন, যা উইন্ডো বন্ধ করলেই কুকি মুছে দেয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. এই নীতিতে পরিবর্তন
            </h2>
            <p>
              সাইট বদলালে আমরা এই নীতি আপডেট করতে পারি — যেমন আমরা যদি কোনো নতুন বিজ্ঞাপন অংশীদার বা কোনো নতুন পরিসংখ্যান পরিষেবা যোগ করি। যখন আমরা তা করব, এই পেজের ওপরে «সর্বশেষ আপডেট»-এর তারিখ বদলে দেব। পরিবর্তনের পর সাইট ব্যবহার চালিয়ে যাওয়ার মানে হলো আপনি আপডেট করা নীতিটি মেনে নিচ্ছেন।
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. যোগাযোগ
            </h2>
            <p>
              এই নীতি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, আমাদের{' '}
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
              {' '}ঠিকানায় যোগাযোগ করুন অথবা আমাদের{' '}
              <a href="/bn/goponiyota-niti" onClick={(e) => { e.preventDefault(); onNavigate('/bn/goponiyota-niti'); }} className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">গোপনীয়তা নীতি</a>
              {' '}পড়ুন।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
