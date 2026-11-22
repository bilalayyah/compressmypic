import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageBnProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageBn: React.FC<DisclaimerPageBnProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'দায়িত্ব ত্যাগ | CompressMyPic – বিনামূল্যে ইমেজ টুলস';
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
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              দায়িত্ব ত্যাগ
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            সর্বশেষ আপডেট: 18 নভেম্বর 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. সাধারণ তথ্য
            </h2>
            <p>
              CompressMyPic একটি বিনামূল্যের অনলাইন ইমেজ কম্প্রেশন ও এডিটিং পরিষেবা৤ এই ওয়েবসাইটের টুল, গাইড ও নিবন্ধ শুধু সাধারণ তথ্য ও ব্যবহারিক কাজের জন্য দেওয়া হয়েছে৤ এগুলো কোনো ধরনের পেশাদার পরামর্শ নয় — আইনি নয়, চিকিৎসা সংক্রান্ত নয়, আর্থিক নয়, প্রযুক্তিগতও নয় — এবং এগুলো আপনার ও CompressMyPic-এর মধ্যে কোনো পেশাদার সম্পর্ক তৈরি করে না৤
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. কোনো ওয়ারেন্টি নেই
            </h2>
            <p>
              পরিষেবাটি «যেমন আছে» এবং «যেমন পাওয়া যায়» ভিত্তিতে দেওয়া হয়, কোনো ধরনের ওয়ারেন্টি ছাড়া, স্পষ্ট বা অন্তর্নিহিত যাই হোক না কেন৤ আমরা গ্যারান্টি দিই না যে টুলগুলো সবসময় চালু থাকবে, কোনো বাধা ছাড়া চলবে, ত্রুটিমুক্ত থাকবে বা ক্ষতিকর উপাদান থেকে মুক্ত থাকবে, অথবা কোনো নির্দিষ্ট ইমেজ কোনো নির্দিষ্ট সাইজ বা কোয়ালিটিতে কম্প্রেস হবে৤ ফলাফল মূল ইমেজ, তার ফরম্যাট ও আপনার ব্রাউজারের ওপর নির্ভর করে, তাই কোনো টুল ব্যবহারের আগে আপনার মূল ফাইলের কপি সবসময় সংরক্ষণ করে রাখুন৤
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. বিষয়বস্তুর নির্ভুলতা
            </h2>
            <p>
              আমরা আমাদের গাইড, নিবন্ধ ও বিবরণ নির্ভুল ও হালনাগাদ রাখার চেষ্টা করি, তবে ইমেজ ফরম্যাট, ব্রাউজার ও ওয়েব মান সময়ের সঙ্গে বদলাতে থাকে৤ আমাদের চেষ্টা সত্ত্বেও এই সাইটের তথ্য পুরনো হতে পারে বা এতে ভুল থাকতে পারে৤ গুরুত্বপূর্ণ তথ্য — যেমন কোনো প্ল্যাটফর্মের সাইজ সীমা — তার ওপর নির্ভর করার আগে সবসময় সেই প্ল্যাটফর্মের অফিসিয়াল ডকুমেন্টেশনে যাচাই করে নিন৤
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. আপনার ফাইল আপনার দায়িত্ব
            </h2>
            <p>
              ইমেজ আপনার ব্রাউজারে স্থানীয়ভাবে প্রসেস হয় এবং কখনো আমাদের সার্ভারে আপলোড হয় না৤ এর মানে এটাও যে আমরা আপনার জন্য কোনো ফাইল ফিরিয়ে আনতে পারব না: আমাদের টুল ব্যবহার করার সময় আপনি যদি কোনো মূল ইমেজ ওভাররাইট করে ফেলেন, মুছে ফেলেন বা হারিয়ে ফেলেন, আমরা তা পুনরুদ্ধার করতে পারব না৤ যেকোনো গুরুত্বপূর্ণ ইমেজের ব্যাকআপ সংরক্ষণ করে রাখুন এবং শুধু সেই ফাইলগুলোর কপি প্রসেস করুন যেগুলো আপনার, অথবা যেগুলো এডিট করার অনুমতি আপনার আছে৤
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. তৃতীয় পক্ষের পরিষেবা ও লিংক
            </h2>
            <p>
              এই সাইট তৃতীয় পক্ষের পরিষেবা ব্যবহার করে — ব্যবহারের পরিসংখ্যানের জন্য Google Analytics 4, যোগাযোগ ফর্মের জন্য FormSubmit, এবং বেনামে মন্তব্যের জন্য একটি Cloudflare Worker — এবং বাইরের ওয়েবসাইটের লিংক দেয়৤ আমরা সেসব পরিষেবা বা সাইট নিয়ন্ত্রণ করি না, এবং তাদের বিষয়বস্তু, প্রাপ্যতা, গোপনীয়তা চর্চা বা নির্ভুলতার জন্য দায়ী নই৤ সেগুলো ব্যবহারের সময় তাদের নিজস্ব শর্ত ও গোপনীয়তা নীতি প্রযোজ্য হয়৤
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. বিজ্ঞাপন
            </h2>
            <p>
              এই সাইট বর্তমানে কোনো বিজ্ঞাপন দেখায় না৤
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. দায়ের সীমা
            </h2>
            <p>
              আইন অনুমোদিত সর্বোচ্চ সীমা পর্যন্ত, CompressMyPic ও এর পরিচালক এই ওয়েবসাইট বা এর টুল ব্যবহার — অথবা ব্যবহার করতে না পারা — থেকে উদ্ভূত কোনো প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক বা পরিণতিমূলক ক্ষতি বা লোকসানের জন্য দায়ী থাকবেন না, যার মধ্যে ফাইল, ডেটা বা লাভের ক্ষতিও রয়েছে, তবে এগুলোতেই সীমাবদ্ধ নয়৤ পরিষেবা নিয়ে কোনো অসন্তোষ থাকলে আপনার একমাত্র প্রতিকার হলো এর ব্যবহার বন্ধ করা৤
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. ব্যবহারকারীর মন্তব্য
            </h2>
            <p>
              আমাদের টুলের নিচে পোস্ট করা মন্তব্য ভিজিটররা লেখেন এবং সেগুলো তাদের নিজস্ব মতামত প্রকাশ করে, আমাদের নয়৤ আমরা মন্তব্য পরিচালনা করি এবং স্প্যাম, অপমানজনক বা বিষয়ের বাইরের যেকোনো বিষয়বস্তু মুছে ফেলতে পারি, তবে আমরা ব্যবহারকারীর মন্তব্যের বিষয়বস্তু সমর্থন করি না এবং তার জন্য দায়িত্ব নিই না৤ কোনো মন্তব্যে কখনো পাসওয়ার্ড, পেমেন্ট ডেটা বা সংবেদনশীল ব্যক্তিগত তথ্য শেয়ার করবেন না৤
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. যোগাযোগ
            </h2>
            <p>
              এই দায়িত্ব ত্যাগ সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, আমাদের{' '}
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
              {' '}ঠিকানায় যোগাযোগ করুন৤
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
