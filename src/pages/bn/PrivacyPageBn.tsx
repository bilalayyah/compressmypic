import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageBnProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageBn: React.FC<PrivacyPageBnProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'গোপনীয়তা নীতি - CompressMyPic';
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ইমেজ কম্প্রেসরে ফিরে যান</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              গোপনীয়তা নীতি
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            সর্বশেষ আপডেট: 15 নভেম্বর 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. আপনার ব্রাউজারে ইমেজ প্রসেসিং
            </h2>
            <p>
              CompressMyPic একটি বিনামূল্যের অনলাইন ইমেজ কম্প্রেসর। HTML5 Canvas দিয়ে ইমেজ আপনার ব্রাউজারে স্থানীয়ভাবে প্রসেস হয়: সেগুলো কখনো আমাদের সার্ভারে আপলোড হয় না এবং আমরা আপনার ইমেজ সংগ্রহ, সংরক্ষণ বা শেয়ার করি না। আপনি যখন ব্রাউজার ট্যাব বন্ধ করেন বা রিফ্রেশ করেন, মেমোরিতে থাকা সব অস্থায়ী অবজেক্ট মুছে যায়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. আমরা ব্যক্তিগত ডেটা সংগ্রহ করি না
            </h2>
            <p>
              কম্প্রেশন টুল ব্যবহার করতে আমরা আপনার কাছে অ্যাকাউন্ট, পাসওয়ার্ড, ইমেইল বা ফোন নম্বর চাই না। যোগাযোগ ফর্মের মাধ্যমে আপনি স্বেচ্ছায় যে যোগাযোগ ডেটা পাঠান, তা শুধু আপনার নির্দিষ্ট জিজ্ঞাসার উত্তর দিতে ব্যবহার হয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. বিজ্ঞাপন
            </h2>
            <p>
              CompressMyPic বর্তমানে কোনো বিজ্ঞাপন দেখায় না। এই সাইট বিজ্ঞাপনের কুকি বসায় না।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. অ্যানালিটিকস
            </h2>
            <p>
              সাইটটি সামগ্রিকভাবে কীভাবে ব্যবহার হয় তা বুঝতে আমরা Google Analytics 4 (GA4) ব্যবহার করি; যেমন কোন টুল জনপ্রিয় এবং কোন পেজে ভিজিট আসে। GA4 বেনামে ব্যবহারের ডেটা সংগ্রহ করে, যেমন আপনি কোন পেজে যান, সেখানে কতক্ষণ থাকেন, এবং আপনার ডিভাইস ও ব্রাউজার সম্পর্কে সাধারণ তথ্য। এটি এক ভিজিটকে আরেক ভিজিট থেকে আলাদা করে চিনতে আপনার ডিভাইসে কুকি বসাতে পারে (যেমন _ga)। আপনাকে ব্যক্তিগতভাবে শনাক্ত করতে আমরা GA4 ব্যবহার করি না। আপনি Google Analytics অপ্ট-আউট অ্যাড-অন ইনস্টল করে (https://tools.google.com/dlpage/gaoptout) অথবা আপনার ব্রাউজারের সেটিংসে কুকি বন্ধ করে, যেকোনো সময় Google Analytics থেকে বেরিয়ে যেতে পারেন।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. তৃতীয় পক্ষের লিংক
            </h2>
            <p>
              আমাদের ওয়েবসাইটে বাইরের সাইটের লিংক থাকতে পারে। তৃতীয় পক্ষের প্ল্যাটফর্মের গোপনীয়তা চর্চা বা বিষয়বস্তুর জন্য আমরা দায়ী নই।
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. কুকি ও সম্মতি
            </h2>
            <p>
              CompressMyPic তার ইমেজ টুলের জন্য কোনো কুকি বসায় না: কম্প্রেশন সম্পূর্ণ আপনার ব্রাউজারে হয় এবং এর জন্য আমাদের পক্ষ থেকে কোনো কুকি, অ্যাকাউন্ট বা সংরক্ষিত পছন্দের দরকার নেই। এই সাইটের কুকি তৃতীয় পক্ষের পরিষেবা থেকে আসে। যেমন, Google Analytics ব্যবহারের পরিসংখ্যানের জন্য কুকি বসাতে পারে। আপনার ব্রাউজার এসব কুকি আপনার ডিভাইসে সংরক্ষণ করে এবং আপনি ব্রাউজারের সেটিংস থেকে যেকোনো সময় সেগুলো মুছে ফেলতে পারেন।
            </p>
            <p>
              CompressMyPic বর্তমানে কোনো বিজ্ঞাপন দেখায় না, তাই কোনো অঞ্চলের ভিজিটরের কাছ থেকে বিজ্ঞাপনের জন্য সম্মতি চাওয়া হয় না।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. GDPR-এর অধীনে আপনার অধিকার
            </h2>
            <p>
              আপনি যদি ইউরোপীয় অর্থনৈতিক অঞ্চল বা যুক্তরাজ্যে থাকেন, তাহলে সাধারণ ডেটা সুরক্ষা বিধিমালা (GDPR) আপনাকে আপনার ব্যক্তিগত ডেটার ওপর অধিকার দেয়। আপনি আমাদের কাছে আপনার সম্পর্কে থাকা ব্যক্তিগত ডেটার কপি চাইতে পারেন, তা ভুল হলে ঠিক করতে বলতে পারেন, তা মুছে ফেলতে বলতে পারেন, তার ব্যবহার সীমিত করতে বলতে পারেন, এবং তার প্রসেসিংয়ের বিরোধিতা করতে পারেন। প্রসেসিং যখন আপনার সম্মতির ওপর ভিত্তি করে হয়, তখন আপনি যেকোনো সময় তা প্রত্যাহার করতে পারেন; সম্মতি প্রত্যাহার করলে তার আগে আমরা আইনসম্মতভাবে যা করেছি, তার ওপর কোনো প্রভাব পড়ে না।
            </p>
            <p>
              যেহেতু আমাদের টুল ইমেজ স্থানীয়ভাবে প্রসেস করে এবং আমাদের ব্যবহারকারী অ্যাকাউন্ট নেই, তাই আমাদের কাছে সাধারণত একমাত্র ব্যক্তিগত ডেটা থাকে যোগাযোগ ফর্মের মাধ্যমে আপনি যে নাম, ইমেইল ঠিকানা ও বার্তা পাঠান। এসব অধিকারের যেকোনোটি ব্যবহার করতে, আমাদের <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> ঠিকানায় লিখুন এবং আমরা 30 দিনের মধ্যে উত্তর দেব। আপনার মনে হলে আমরা আপনার ডেটা নিয়ে অনুচিত আচরণ করেছি, তাহলে আপনার স্থানীয় ডেটা সুরক্ষা কর্তৃপক্ষের কাছে অভিযোগ জানানোর অধিকারও আপনার আছে।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. ডেটা সংরক্ষণ
            </h2>
            <p>
              আমরা ব্যক্তিগত ডেটা শুধু ততক্ষণই রাখি যতক্ষণ যে উদ্দেশ্যে তা সংগ্রহ করা হয়েছিল তার জন্য দরকার। যোগাযোগ ফর্মের বার্তা শুধু ততক্ষণ রাখা হয় যতক্ষণ আপনার জিজ্ঞাসার উত্তর না দেওয়া হয় এবং কথোপকথন শেষ না হয়, এবং তার পর অল্প কিছুদিন, যদি কোনো ফলো-আপ প্রশ্ন থাকে; সেগুলো কখনো মার্কেটিংয়ের জন্য ব্যবহার হয় না এবং তৃতীয় পক্ষের সঙ্গে শেয়ার করা হয় না। আপনার ইমেজ একদমই রাখা হয় না: সেগুলো শুধু ততক্ষণ আপনার ব্রাউজারের মেমোরিতে থাকে যতক্ষণ আপনি কোনো টুল ব্যবহার করছেন, এবং ট্যাব বন্ধ করলে বা রিফ্রেশ করলে মুছে যায়। সামগ্রিকভাবে রাখা অ্যানালিটিকস ডেটায় কোনো ব্যক্তিগত তথ্য থাকে না এবং তা শুধু সারসংক্ষেপ আকারে রাখা হয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. নিরাপত্তা ও reCAPTCHA
            </h2>
            <p>
              সাইটটি HTTPS-এ দেওয়া হয়, তাই আপনার ব্রাউজার ও সাইটের মধ্যে সংযোগ এনক্রিপ্ট করা থাকে। আমাদের যোগাযোগ ফর্ম FormSubmit-এর মাধ্যমে পাঠানো হয়, যা আপনার বার্তা আমাদের ইমেইল ঠিকানায় ফরওয়ার্ড করে, এবং ফর্মটি স্প্যাম ও স্বয়ংক্রিয় অপব্যবহার ঠেকাতে Google reCAPTCHA দিয়ে সুরক্ষিত। আপনি যখন ফর্ম পাঠান, reCAPTCHA মানুষকে বট থেকে আলাদা করতে হার্ডওয়্যার ও সফটওয়্যারের তথ্য সংগ্রহ করতে পারে, যেমন আপনার ব্রাউজার ও ডিভাইসের ডেটা; এটি Google-এর <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                গোপনীয়তা নীতি
              </a> এবং <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                পরিষেবার শর্তাবলী
              </a>-এর অধীন। আমরা আপনার কাছে কখনো যোগাযোগ ফর্মের মাধ্যমে পাসওয়ার্ড, পেমেন্ট ডেটা বা সংবেদনশীল ব্যক্তিগত নথি পাঠাতে বলি না, এবং আপনারও সেগুলো কোনো বার্তায় অন্তর্ভুক্ত করা উচিত নয়।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. শিশুদের গোপনীয়তা
            </h2>
            <p>
              CompressMyPic সাধারণ মানুষের জন্য একটি টুল এবং এটি 13 বছরের কম বয়সী শিশুদের জন্য নয়। আমরা জেনে-বুঝে শিশুদের ব্যক্তিগত তথ্য সংগ্রহ করি না। আপনি যদি বাবা-মা বা অভিভাবক হন এবং মনে করেন আপনার সন্তান যোগাযোগ ফর্মের মাধ্যমে আমাদের ব্যক্তিগত তথ্য পাঠিয়েছে, তাহলে আমাদের ইমেইল লিখুন এবং আমরা তা সঙ্গে সঙ্গে মুছে ফেলব।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. এই নীতিতে পরিবর্তন
            </h2>
            <p>
              সাইট বদলালে আমরা এই নীতি আপডেট করতে পারি; যেমন আমরা যদি কোনো নতুন অ্যানালিটিকস পরিষেবা, কোনো নতুন বিজ্ঞাপন অংশীদার, বা আমাদের সঙ্গে যোগাযোগের কোনো নতুন উপায় যোগ করি। যখন আমরা তা করব, এই পেজের ওপরে «সর্বশেষ আপডেট»-এর তারিখ বদলে দেব এবং গুরুত্বপূর্ণ পরিবর্তনগুলো এখানে সহজ ভাষায় বুঝিয়ে দেব। পরিবর্তনের পর সাইট ব্যবহার চালিয়ে যাওয়ার মানে হলো আপনি আপডেট করা নীতিটি মেনে নিচ্ছেন।
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. যোগাযোগ
            </h2>
            <p>
              এই নীতি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, আমাদের{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}ঠিকানায় লিখুন।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
