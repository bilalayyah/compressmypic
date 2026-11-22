import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageBnProps {
  onNavigate: (path: string) => void;
}

export const AboutPageBn: React.FC<AboutPageBnProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'CompressMyPic সম্পর্কে – বিনামূল্যে অনলাইন ইমেজ কম্প্রেসর';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'CompressMyPic সম্পর্কে: JPG, PNG ও WebP-এর জন্য বিনামূল্যের অনলাইন ইমেজ কম্প্রেসর৤ রেজিস্ট্রেশন ছাড়া, ওয়াটারমার্ক ছাড়া এবং কোনো সার্ভারে কিছু আপলোড না করেই অনলাইনে বিনামূল্যে ইমেজ কম্প্রেস করুন৤');
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
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            CompressMyPic সম্পর্কে
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic একটি বিনামূল্যের ও ব্যক্তিগত ইমেজ কম্প্রেসর৤ JPG, PNG ও WebP ইমেজ সরাসরি আপনার ব্রাউজারে কম্প্রেস করুন — দ্রুত, নিরাপদ, এবং আপনার ফাইল কোথাও আপলোড না করেই৤
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic কী?</span>
            </h2>
            <p>
              CompressMyPic একটি বিনামূল্যের অনলাইন ইমেজ কম্প্রেসর ও ইমেজ অপ্টিমাইজার, যা কোয়ালিটি না হারিয়ে আপনার ইমেজের সাইজ ছোট করতে সাহায্য করে৤ এটি একটি ফটো কম্প্রেসর ও ফটো সাইজ রিডিউসার, সেই ফরম্যাটগুলোর জন্য যা আপনি প্রতিদিন ব্যবহার করেন: JPG, PNG ও WebP৤ JPG 100 KB-তে কম্প্রেস করতে, PNG অনলাইনে বিনামূল্যে কম্প্রেস করতে, WebP ইমেজ কম্প্রেস করতে, অথবা WhatsApp, Instagram, Facebook বা ইমেইলে শেয়ার করার আগে কোনো ছবির সাইজ ছোট করতে এটি ব্যবহার করুন৤
            </p>
            <p>
              প্রচলিত ইমেজ কম্প্রেশন ওয়েবসাইটগুলো আপনার ব্যক্তিগত ছবি বা আপনার কোম্পানির গ্রাফিক্স অন্য কারো সার্ভারে আপলোড করে৤ এই পদ্ধতি যুক্তিসংগত উদ্বেগ তৈরি করে, আর সেজন্যই আমরা CompressMyPic উল্টোভাবে বানিয়েছি: এমন একটি টুল যা সব কাজ আপনার নিজের ডিভাইসেই করে৤
            </p>
            <p>
              আপনি যখন কোনো ইমেজ বেছে নেন বা টেনে ছাড়েন, আপনার ব্রাউজার মেমোরিতে একটি অস্থায়ী বাফার তৈরি করে, HTML Canvas এলিমেন্টে ইমেজটি আঁকে, কম্প্রেশন অ্যালগরিদম প্রয়োগ করে এবং তারপর নতুন ফাইল এক্সপোর্ট করে — সবকিছু আপনার নিজের ব্রাউজার ট্যাবের ভেতরে৤ আপনার ইমেজ কম্প্রেস করার প্রক্রিয়ায় কোনো নেটওয়ার্ক, ডেটাবেস বা ক্লাউড সার্ভার জড়িত থাকে না৤
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>সমর্থিত ফরম্যাট: JPG, PNG ও WebP</span>
            </h2>
            <p>
              JPG কম্প্রেসর হিসেবে CompressMyPic আপনাকে JPG অনলাইনে বিনামূল্যে কম্প্রেস করতে এবং আপনার JPEG ফাইলের সাইজ ছোট করতে দেয়, আপনার ছবির স্বচ্ছতা না হারিয়ে: সুষম প্রিসেট চেষ্টা করুন অথবা কোয়ালিটি স্লাইডার নিচে নামান এবং 100 KB বা 200 KB-এর মতো লক্ষ্যে পৌঁছাতে আগে ও পরের সাইজ লাইভ দেখুন৤ PNG কম্প্রেসর হিসেবে এটি আপনাকে লোগো ও গ্রাফিক্সের স্বচ্ছতা বজায় রেখে PNG অনলাইনে বিনামূল্যে কম্প্রেস করতে দেয়৤ আর আপনি যখন WebP ইমেজ কম্প্রেস করেন, তখন সবচেয়ে ছোট ফাইল পান: একই কোয়ালিটিতে WebP সাধারণত JPEG-এর চেয়ে 25 থেকে 35% ছোট হয়, যা ওয়েবসাইটের জন্য ইমেজ অপ্টিমাইজ করার সেরা বিকল্প করে তোলে৤
            </p>
            <p>
              আপনি প্রতিটি ইমেজের মূল ফরম্যাট বজায় রাখতে পারেন অথবা JPG, PNG ও WebP-এর মধ্যে কনভার্ট করতে পারেন৤ কোয়ালিটি স্লাইডার (10% থেকে 100%), নিম্ন, সুষম ও উচ্চ প্রিসেট, এবং আগে ও পরের সাইজের লাইভ ঝলক আপনাকে ফাইল সাইজ ও ইমেজ কোয়ালিটির মধ্যে ভারসাম্যের ওপর সম্পূর্ণ নিয়ন্ত্রণ দেয় — KB-তে সঠিক লক্ষ্য সাইজের জন্য এমন কোনো ইনপুট বক্সের প্রতিশ্রুতি না দিয়ে যা টুলে আসলেই নেই৤
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>আমাদের মূল নীতি</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">সম্পূর্ণ গোপনীয়তা</div>
                <p className="text-xs text-[var(--ink-2)]">
                  কোনো ফাইল কখনো কোনো বাইরের সার্ভার বা ডেটাবেস ছোঁয় না৤ আপনার ছবি ও আপনার সংবেদনশীল গ্রাফিক্স সম্পূর্ণ আপনার ডিভাইসেই থাকে৤ যেহেতু কম্প্রেশন আপনার নিজের ব্রাউজারে হয়, তাই আর কেউ আপনার কাজ দেখে না৤
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">সহজ ও বিনামূল্যে</div>
                <p className="text-xs text-[var(--ink-2)]">
                  কোনো প্রোগ্রাম ইনস্টল করতে হয় না, কোনো পেইড প্ল্যান নেই, কোনো লুকানো চার্জ নেই, কোনো অ্যাকাউন্ট তৈরি করতে হয় না, কোনো ইমেইল ভেরিফিকেশন নেই, কোনো ট্রায়াল সীমা নেই৤ অনলাইনে বিনামূল্যে ইমেজ কম্প্রেস করুন: এটি সত্যিই বিনামূল্যে, রেজিস্ট্রেশন ছাড়া এবং আপনার কম্প্রেস করা ইমেজে ওয়াটারমার্ক ছাড়া৤
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">কোয়ালিটি আপনার নিয়ন্ত্রণে</div>
                <p className="text-xs text-[var(--ink-2)]">
                  আপনার কাছে সঠিক নিয়ন্ত্রণ আছে: কোয়ালিটি স্লাইডার রিয়েল-টাইমে ঘোরান, নিম্ন, সুষম বা উচ্চ — যেকোনো প্রিসেট বেছে নিন, আউটপুট ফাইল ফরম্যাট বেছে নিন এবং পার্থক্য সঙ্গে সঙ্গে দেখতে প্রতিটি ইমেজ পাশাপাশি তুলনা করুন৤ আপনার ইমেজের সাইজ ছোট করুন, কোয়ালিটি না হারিয়ে, আপনার মতো করে৤
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">ব্যাচ ইমেজ কম্প্রেসর</div>
                <p className="text-xs text-[var(--ink-2)]">
                  একই সেটিংসে একসঙ্গে অনেক ইমেজ কম্প্রেস করুন এবং «সব ডাউনলোড করুন (ZIP)» বোতাম দিয়ে সবগুলো একসঙ্গে ডাউনলোড করুন: ফটো লাইব্রেরি, প্রোডাক্ট ক্যাটালগ ও ওয়েবসাইটের ইমেজ ফোল্ডারের জন্য একটি ব্যাচ ইমেজ কম্প্রেসর৤
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">স্বয়ংক্রিয় নিরাপত্তা পরীক্ষা</div>
                <p className="text-xs text-[var(--ink-2)]">
                  কম্প্রেসর আপনার ইমেজের স্বচ্ছতা শনাক্ত করে৤ আপনি যদি স্বচ্ছ PNG-এর জন্য JPEG আউটপুট বেছে নেন, আমরা আপনাকে সতর্কবার্তা দেখাই, কারণ JPEG স্বচ্ছতা সমর্থন করে না — যাতে আপনার আলফা চ্যানেল ভুল করে কখনো না হারায়৤
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">দ্রুত পারফরম্যান্স</div>
                <p className="text-xs text-[var(--ink-2)]">
                  যেহেতু সব প্রসেসিং আপনার ডিভাইসে স্থানীয়ভাবে হয়, তাই ফাইল সার্ভারে আপলোড ও ডাউনলোড হওয়ার জন্য আপনাকে অপেক্ষা করতে হয় না৤ আপনি দ্রুত ছবি কম্প্রেস করতে পারেন — কম্পিউটার বা মোবাইলে, প্রতি ইমেজে 20 MB পর্যন্ত বড় ফাইলও৤
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic কাদের জন্য?</span>
            </h2>
            <p>
              CompressMyPic তাদের সবার জন্য যাদের ছোট ইমেজ দরকার: ব্লগার ও ওয়েবসাইট মালিক যারা ওয়েবের জন্য ইমেজ অপ্টিমাইজ করতে ও তাদের পেজের ইমেজের সাইজ ছোট করতে চান; ফটোগ্রাফার যাদের শেয়ার করার বা প্রুফ দেওয়ার আগে ছবির সাইজ ছোট করতে হয়; অনলাইন বিক্রেতা যারা তাদের ওয়েবসাইট বা কোনো বিজ্ঞাপনের জন্য ছবি কম্প্রেস করেন; ছাত্র ও অফিস কর্মী যারা ইমেইলে সংযুক্ত করতে ইমেজ কম্প্রেস করেন; এবং যে কেউ যিনি WhatsApp, Instagram বা Facebook-এর জন্য ইমেজ কম্প্রেস করতে চান যাতে তা দ্রুত পাঠানো যায় এবং কম মোবাইল ডেটা খরচ হয়৤
            </p>
            <p>
              এটি কম্পিউটার ও মোবাইল ব্রাউজারে কাজ করে, ইনস্টল করার দরকার নেই এবং এটি কখনো আপনাকে রেজিস্টার করতে বলে না: শুধু সাইটটি খুলুন, আপনার ইমেজ আপলোড করুন এবং ছোট ফাইল ডাউনলোড করুন৤
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>নির্মাতা: Bilal</span>
            </h2>
            <p>
              CompressMyPic বানিয়েছেন Bilal, একজন স্বাধীন নির্মাতা যিনি ওয়েবের জন্য বিনামূল্যের, গোপনীয়তাকে সম্মান করে এমন টুল বানান৤ তিনি CompressMyPic শুরু করেছিলেন যখন তিনি সেইসব ইমেজ কম্প্রেসরে হতাশ হয়ে পড়েছিলেন যেগুলো মানুষকে শুধু একটি ফাইল ছোট করার জন্য তাদের ব্যক্তিগত ছবি অচেনা কারো সার্ভারে আপলোড করতে বাধ্য করত৤ তাঁর উত্তর ছিল এমন একটি টুল যা সব কাজ ভিজিটরের নিজের ব্রাউজারের ভেতরে করে: আপলোড ছাড়া, অ্যাকাউন্ট ছাড়া, ওয়াটারমার্ক ছাড়া এবং শেষে কোনো চমকে দেওয়া বিল ছাড়া৤
            </p>
            <p>
              Bilal সাইটের 47টি টুল নিজেই ডিজাইন, নির্মাণ ও রক্ষণাবেক্ষণ করেন — কম্প্রেসর ও কনভার্টার থেকে ফ্যাভিকন জেনারেটর পর্যন্ত৤ তিনি সাপোর্ট বার্তার উত্তর নিজেই দেন, প্রতিটি মন্তব্য পড়েন এবং টুল সবার জন্য বিনামূল্যে রাখেন, কেউ একটি ছবি কম্প্রেস করুক বা হাজারটি৤ সাইটের ফুটারে Shaheen-এর জন্য একটি ছোট কৃতজ্ঞতা আছে, যাঁর উৎসাহ Bilal-কে বানিয়ে যেতে ও টুলটিকে সত্যিই কাজের করে তুলতে অনুপ্রেরণা দিয়েছে — শুধু জনপ্রিয় নয়৤
            </p>
            <p>
              আপনি যদি তাঁর কাজ দেখতে চান, তাহলে প্রজেক্টটি{' '}
              <a
                href="https://github.com/bilalayyah/compressmypic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                GitHub
              </a>
              {' '}থেকে পেতে পারেন, Bilal-এর গাইড{' '}
              <a
                href="https://dev.to/bilalayyah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                Dev.to
              </a>
              {' '}থেকে পড়তে পারেন, অথবা{' '}
              <button
                type="button"
                onClick={() => onNavigate('/bn/jogajog-korun')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                যোগাযোগ পেজ
              </button>
              {' '}থেকে হ্যালো বলতে পারেন৤
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>গোপনীয়তা ও নিরাপত্তা</span>
            </h2>
            <p>
              CompressMyPic-এ আমরা বিশ্বাস করি গোপনীয়তা একটি মৌলিক অধিকার, কোনো ঐচ্ছিক সুবিধা নয়৤ আজ অনেক ওয়েবসাইট ডিফল্টভাবে ডেটা সংগ্রহ করে, এমনকি একটি ইমেজ কম্প্রেশন টুলও৤ আমরা গোপনীয়তা-প্রথম দৃষ্টিভঙ্গি নিই এবং আপনার ফাইল আপনার কম্পিউটারে স্থানীয়ভাবে প্রসেস করতে আধুনিক ব্রাউজার প্রযুক্তি ব্যবহার করি৤
            </p>
            <p>
              আপনার ফাইল আপনার ব্রাউজারের মেমোরিতে থাকে এবং ট্যাব বন্ধ করলেই বা পেজ রিফ্রেশ করলেই সঙ্গে সঙ্গে মুছে যায়৤ যেহেতু কোনো ইমেজ প্রসেসিং দূরবর্তী সার্ভারে হয় না, তাই আমরা চাইলেও আপনার ইমেজের ডেটা সংগ্রহ করতে পারি না৤ এটাই টুলের ডিজাইন ও প্রতিশ্রুতি৤
            </p>
            <p>
              আমরা আপনার গোপনীয়তা কীভাবে দেখভাল করি তা জানতে, আমাদের{' '}
              <button
                type="button"
                onClick={() => onNavigate('/bn/goponiyota-niti')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                গোপনীয়তা নীতি
              </button>
              {' '}দেখুন৤
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>আমাদের লক্ষ্য</span>
            </h2>
            <p>
              আমরা বিশ্বাস করি সেরা টুলগুলোই সবচেয়ে সহজ, সবচেয়ে দ্রুত ও সবচেয়ে স্বচ্ছ৤ আমাদের লক্ষ্য সবাইকে একটি দ্রুত, নির্ভরযোগ্য ও সম্পূর্ণ বিনামূল্যের ইমেজ কম্প্রেসর দেওয়া — লুকানো চালাকি ছাড়া, আপনাকে ট্র্যাক করে এমন বিজ্ঞাপন ছাড়া, সার্ভার আপলোড ছাড়া এবং আপনার গোপনীয়তার সঙ্গে আপস না করে৤ আপনি একটি JPG কম্প্রেস করছেন বা WebP ইমেজের পুরো ব্যাচ, টুলটিকে শুধু কাজ করতে হবে৤
            </p>
            <p>
              আপনার কোনো প্রশ্ন, কোনো আইডিয়া আছে, অথবা এমন কিছু পেয়েছেন যা আমরা আরও ভালো করতে পারি? আমরা আপনার কাছ থেকে শুনে খুশি হব৤ আপনি সাইটের মাধ্যমে সরাসরি আমাদের লিখতে পারেন৤
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/bn/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              ইমেজ কম্প্রেস করা শুরু করুন
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/bn/jogajog-korun')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              আমাদের সঙ্গে যোগাযোগ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
