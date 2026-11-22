import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideFormatsPageBnProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'CompressMyPic খুলুন',
    text: 'আপনার ব্রাউজারে compressmypic.online-এ যান৤ কিছু ইনস্টল করতে হয় না, কোনো অ্যাকাউন্ট বানাতে হয় না, এবং কোনো ফাইল কখনো কোনো সার্ভারে আপলোড হয় না৤',
  },
  {
    title: 'আপনার ইমেজ আপলোড করুন',
    text: 'আপনার ইমেজ টেনে ছাড়ুন, অথবা বেছে নিতে «ফাইল ব্রাউজ করুন»-এ ট্যাপ করুন৤ JPG, PNG ও WebP ফাইল সমর্থিত, প্রতি ইমেজে 20 MB পর্যন্ত৤',
  },
  {
    title: 'সিদ্ধান্ত নিন: ফরম্যাট রাখবেন নাকি বদলাবেন',
    text: 'আপনার ইমেজের বর্তমান ফরম্যাট বজায় রাখতে «মূল» বেছে নিন, অথবা আউটপুট হিসেবে JPG, PNG বা WebP বেছে নিন৤ সিদ্ধান্ত নিতে নিচের গাইড ব্যবহার করুন: ছবির জন্য JPG, স্বচ্ছতা দরকার হলে PNG, ওয়েবসাইটের জন্য সবচেয়ে ছোট ফাইল দরকার হলে WebP৤',
  },
  {
    title: 'কোয়ালিটি প্রিসেট বেছে নিন',
    text: 'সুষম প্রিসেট (প্রায় 70%) দিয়ে শুরু করুন৤ এমন ছবির জন্য যা নিখুঁত দেখাতে হবে, উচ্চ প্রিসেট বা 85 থেকে 90% কোয়ালিটি ব্যবহার করুন৤ ছোট ওয়েব ইমেজের জন্য কম সেটিং ঠিক আছে৤',
  },
  {
    title: 'লাইভ সাইজ দেখুন ও তুলনা করুন',
    text: 'প্রতিটি ইমেজ তার মূল সাইজ ও নতুন কম্প্রেস করা সাইজ দেখায়৤ আগে ও পরের তুলনা খুলুন এবং জুম করুন: কোনো পার্থক্য না দেখলে সেটিং ঠিক আছে৤ আউটপুট ফরম্যাট WebP-তে বদলে দেখুন ফাইল কতটা ছোট হয়ে যায়৤',
  },
  {
    title: 'আপনার ইমেজ ডাউনলোড করুন',
    text: 'একটিমাত্র ইমেজ ডাউনলোড করুন, অথবা একসঙ্গে অনেক ইমেজ কনভার্ট করে থাকলে «সব ডাউনলোড করুন (ZIP)» ব্যবহার করুন৤ আপনার মূল ফাইল কখনো বদলানো হয় না: আপনি একটি নতুন, ছোট কপি পান৤',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'JPG ও PNG-এর মধ্যে পার্থক্য কী?',
    answer: 'JPG ছবির জন্য তৈরি লসি ফরম্যাট: এটি কিছু বিবরণ সরিয়ে অনেক ছোট ফাইল বানায় এবং স্বচ্ছতা সমর্থন করে না৤ PNG লসলেস এবং স্বচ্ছতা সমর্থন করে, তাই এটি লোগো ও গ্রাফিক্সের জন্য নিখুঁত, কিন্তু PNG-তে ছবি একই ছবি JPG-তে সংরক্ষণের তুলনায় কয়েক গুণ বড় হয়৤',
  },
  {
    id: 'fmt-faq-2',
    question: 'WebP কি JPG-এর চেয়ে ভালো?',
    answer: 'ফাইল সাইজের ক্ষেত্রে, হ্যাঁ: একই কোয়ালিটিতে WebP সাধারণত JPG-এর চেয়ে 25 থেকে 35% ছোট হয়, এবং এটি স্বচ্ছতাও সমর্থন করে৤ WebP-এর বদলে JPG বেছে নেওয়ার একমাত্র কারণ সামঞ্জস্য: কিছু পুরনো প্রোগ্রাম ও কিছু অ্যাপ এখনো JPG ভালোভাবে সামলায়, এবং WhatsApp JPG ছবি বেশি নির্ভরযোগ্যভাবে দেখায়৤',
  },
  {
    id: 'fmt-faq-3',
    question: 'WebP কি PNG-এর চেয়ে ভালো?',
    answer: 'সাধারণত, হ্যাঁ৤ WebP PNG-এর মতো স্বচ্ছতা সমর্থন করে, তবে অনেক ছোট ফাইল বানায়, এবং JPG-এর মতো লসি কম্প্রেশনও করতে পারে৤ PNG তখনো সবচেয়ে নিরাপদ বিকল্প যখন লোগো বা গ্রাফিকের জন্য নিখুঁত, লসলেস কোয়ালিটি দরকার যা পরে আবার এডিট করা হবে৤',
  },
  {
    id: 'fmt-faq-4',
    question: 'PNG কি স্বচ্ছতা সমর্থন করে আর JPG করে না?',
    answer: 'ঠিক তাই৤ PNG স্বচ্ছ পটভূমি (আলফা চ্যানেল) সমর্থন করে, সেজন্য লোগো ও আইকন সাধারণত PNG হয়৤ JPG-তে একদম স্বচ্ছতা নেই: JPG-তে কোনো স্বচ্ছ এলাকা কঠিন রঙ হয়ে যায়, সাধারণত সাদা, তাই স্বচ্ছ পটভূমিসহ লোগো কখনো JPG হিসেবে সংরক্ষণ করবেন না৤',
  },
  {
    id: 'fmt-faq-5',
    question: 'PNG ফাইল JPG-এর চেয়ে এত বড় হয় কেন?',
    answer: 'কারণ PNG লসলেস: এটি প্রতিটি পিক্সেলের বিবরণ ঠিকঠাক সংরক্ষণ করে, আর JPG সেই বিবরণ সরিয়ে দেয় যা চোখ খুব কমই দেখে৤ ক্যামেরার ছবি PNG হিসেবে সংরক্ষণ করলে একই ছবি JPG হিসেবে সংরক্ষণের তুলনায় 5 থেকে 10 গুণ বড় হতে পারে৤ সেজন্যই ছবি প্রায় কখনো PNG হওয়া উচিত নয়৤',
  },
  {
    id: 'fmt-faq-6',
    question: 'WebP-এর বদলে JPG কখন ব্যবহার করা উচিত?',
    answer: 'JPG তখন ব্যবহার করুন যখন ইমেজ পুরনো প্রোগ্রামে খুলবে, WhatsApp বা ইমেইলে পাঠানো হবে এবং আপনি নিশ্চিত প্রিভিউ চান, অথবা প্রিন্ট করা হবে৤ ওয়েবসাইটের জন্য WebP ভালো, তবে কারো সঙ্গে ছবি শেয়ার করার জন্য JPG এখনো সবচেয়ে সর্বজনীন ফরম্যাট৤',
  },
  {
    id: 'fmt-faq-7',
    question: 'আমি কি PNG JPG-তে বদলাতে পারি?',
    answer: 'হ্যাঁ৤ CompressMyPic-এ PNG আপলোড করুন, আউটপুট ফরম্যাট হিসেবে JPG বেছে নিন এবং ডাউনলোড করুন৤ শুধু মনে রাখবেন JPG-তে স্বচ্ছতা নেই: আপনার PNG-এর পটভূমি স্বচ্ছ হলে, প্রথমে পটভূমির রঙ বেছে নিন, কারণ স্বচ্ছ এলাকা নইলে সাদা ও কঠিন হয়ে যাবে৤',
  },
  {
    id: 'fmt-faq-8',
    question: 'আমি কি JPG WebP-তে বদলাতে পারি?',
    answer: 'হ্যাঁ৤ JPG আপলোড করুন, আউটপুট হিসেবে WebP বেছে নিন এবং ডাউনলোড করুন: একই রকম দেখতে কোয়ালিটিতে ফাইল সাধারণত 25 থেকে 35% ছোট হয়৤ আপনি একসঙ্গে অনেক JPG WebP-তে বদলাতে পারেন এবং সবগুলো ZIP হিসেবে ডাউনলোড করতে পারেন৤',
  },
  {
    id: 'fmt-faq-9',
    question: 'JPG PNG-তে বদলালে কি কোয়ালিটি ভালো হয়?',
    answer: 'না৤ JPG PNG-তে বদলালে সেই বিবরণ ফিরে আসতে পারে না যা JPG কম্প্রেশন আগেই সরিয়ে দিয়েছে; এতে শুধু ফাইল অনেক বড় হয়ে যায়৤ JPG PNG-তে বদলানোর একমাত্র ভালো কারণ হলো যদি আপনাকে ইমেজটি আরও কোয়ালিটি না হারিয়ে আবার এডিট করতে হয়৤',
  },
  {
    id: 'fmt-faq-10',
    question: 'ওয়েবসাইটের জন্য কোন ফরম্যাট ব্যবহার করা উচিত?',
    answer: 'প্রথমে WebP, আর বিকল্প হিসেবে JPG৤ WebP সবচেয়ে ছোট ফাইল দেয়, যাতে পেজ দ্রুত লোড হয়, এবং পেজের গতি ভিজিটর ও Google — দুজনের কাছেই গুরুত্বপূর্ণ৤ PNG শুধু সেইসব ইমেজের জন্য ব্যবহার করুন যেগুলোর স্বচ্ছতা দরকার, যেমন লোগো, এবং ছবির জন্য JPG, যদি আপনি WebP ব্যবহার করতে না পারেন৤',
  },
  {
    id: 'fmt-faq-11',
    question: 'লোগোর জন্য কোন ফরম্যাট সেরা?',
    answer: 'লোগোর পটভূমি স্বচ্ছ হতে হলে PNG, কারণ JPG স্বচ্ছতা সমর্থন করে না৤ WebP-ও স্বচ্ছতা সমর্থন করে এবং ছোট ফাইল বানায়, তাই এটি ওয়েবসাইটে লোগোর জন্য ভালো বিকল্প৤ পটভূমি স্বচ্ছ থাকতে হলে লোগো কখনো JPG হিসেবে সংরক্ষণ করবেন না৤',
  },
  {
    id: 'fmt-faq-12',
    question: 'স্ক্রিনশটের জন্য কোন ফরম্যাট সেরা?',
    answer: 'PNG বা WebP৤ স্ক্রিনশটে তীক্ষ্ণ কিনারা ও সমতল রঙ থাকে, যা PNG ও WebP ভালোভাবে সামলায়৤ JPG টেক্সটের তীক্ষ্ণ কিনারা ঝাপসা করে৤ সবচেয়ে ছোট স্ক্রিনশট ফাইল পেতে CompressMyPic-এ WebP আউটপুট চেষ্টা করুন: এটি সাধারণত কোনো চোখে পড়ার পার্থক্য ছাড়া PNG-এর চেয়ে অনেক ছোট হয়৤',
  },
  {
    id: 'fmt-faq-13',
    question: 'সব ব্রাউজার কি এখন WebP সমর্থন করে?',
    answer: 'হ্যাঁ, প্রায় সব৤ Chrome, Edge, Firefox, Safari ও সব আধুনিক মোবাইল ব্রাউজার বছরের পর বছর ধরে WebP সমর্থন করে৤ শুধু খুব পুরনো ব্রাউজার ও কিছু পুরনো অ্যাপ WebP খুলতে পারে না, এবং সেটাই একমাত্র কারণ যে JPG এখনো কাজের৤',
  },
  {
    id: 'fmt-faq-14',
    question: 'WhatsApp বা Instagram কি WebP নেয়?',
    answer: 'WhatsApp WebP ফাইল নিতে পারে, তবে সেগুলো সাধারণ ছবির মতো নাও দেখাতে পারে, তাই ছবি শেয়ার করার জন্য JPG বেশি নিরাপদ৤ Instagram পোস্টের জন্য JPG ও PNG নেয় এবং আপলোড নিজেই কনভার্ট করে৤ সোশ্যাল মিডিয়ায় শেয়ার করার জন্য ছবির ক্ষেত্রে JPG-তেই থাকুন৤',
  },
  {
    id: 'fmt-faq-15',
    question: 'ছবি WebP-তে বদলালে কি কোয়ালিটি কমে?',
    answer: 'শুধু ততটুকু যতটুকু আপনি বেছে নেন৤ WebP JPG-এর মতো একই নীতি ব্যবহার করে: একটি কোয়ালিটি সেটিং যা অল্প বিবরণ ছোট ফাইলের বিনিময়ে বদলায়৤ 80 থেকে 90% কোয়ালিটিতে WebP ছবি মূল JPG-এর মতোই দেখায় এবং ফাইল প্রায় এক-তৃতীয়াংশ ছোট হয়৤',
  },
  {
    id: 'fmt-faq-16',
    question: 'JPG ও JPEG কি একই ফরম্যাট?',
    answer: 'কোনো পার্থক্য নেই: JPG ও JPEG একই ফরম্যাট৤ JPEG পুরো নাম (Joint Photographic Experts Group) এবং JPG ফাইল এক্সটেনশনের ছোট রূপ৤ photo.jpg নামের ফাইল ও photo.jpeg নামের ফাইল একই ধরনের ইমেজ৤',
  },
  {
    id: 'fmt-faq-17',
    question: 'মূল ফরম্যাট রাখা উচিত নাকি বদলানো উচিত?',
    answer: 'সাইজে খুশি থাকলে মূল রাখুন: এটি সবচেয়ে সহজ বিকল্প এবং কিছুই হারায় না৤ তখনই বদলান যখন কোনো কারণ আছে: ওয়েবসাইটের ছবি ছোট করতে JPG থেকে WebP, স্বচ্ছতা দরকার নেই এমন ছবি ছোট করতে PNG থেকে JPG, অথবা লোগো ছোট করতে PNG থেকে WebP৤',
  },
  {
    id: 'fmt-faq-18',
    question: 'কোন ফরম্যাট সবচেয়ে ছোট ফাইল দেয়?',
    answer: 'প্রায় সব ক্ষেত্রে WebP৤ ছবির জন্য, একই রকম দেখতে কোয়ালিটিতে WebP সাধারণত JPG-এর চেয়ে 25 থেকে 35% ছোট হয়৤ স্বচ্ছতাসহ গ্রাফিক্সের জন্য, WebP সাধারণত PNG-এর চেয়ে অনেক ছোট হয়৤ সেজন্যই WebP ওয়েবসাইটের জন্য সেরা ফরম্যাট৤',
  },
  {
    id: 'fmt-faq-19',
    question: 'CompressMyPic কি JPG, PNG ও WebP-এর মধ্যে কনভার্ট করে?',
    answer: 'হ্যাঁ৤ JPG, PNG বা WebP ইমেজ আপলোড করুন, পছন্দের আউটপুট ফরম্যাট বেছে নিন — মূল, JPG, PNG বা WebP — এবং কনভার্ট করা ফাইল ডাউনলোড করুন৤ আপনি একই সেটিংসে একসঙ্গে অনেক ইমেজ কনভার্ট করতে পারেন এবং সবগুলো ZIP হিসেবে ডাউনলোড করতে পারেন৤',
  },
  {
    id: 'fmt-faq-20',
    question: 'PNG JPG-তে বদলালে স্বচ্ছতার কী হয়?',
    answer: 'তা হারিয়ে যায়৤ JPG স্বচ্ছতা সংরক্ষণ করতে পারে না, তাই আপনার PNG-এর স্বচ্ছ অংশ কঠিন রঙ হয়ে যায়৤ CompressMyPic আপনাকে সেই এলাকাগুলো ভরতে পটভূমির রঙ বেছে নিতে দেয়, তাই এমন রঙ বেছে নিন যা ইমেজটি যেখানে ব্যবহার হবে তার সঙ্গে মেলে; সাদা সাধারণ বিকল্প৤',
  },
];

export const GuideFormatsPageBn: React.FC<GuideFormatsPageBnProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: কোন ফরম্যাটটি ব্যবহার করা উচিত?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP সহজ ভাষায় ব্যাখ্যা করা হয়েছে: আপনার ছবি, লোগো ও ওয়েবসাইটের জন্য সঠিক ফরম্যাট বেছে নিতে সাইজ, কোয়ালিটি ও স্বচ্ছতার তুলনা করুন৤');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/bn/guides/jpg-vs-png-vs-webp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'JPG, PNG ও WebP-এর মধ্যে কীভাবে বেছে নেবেন এবং ইমেজ কীভাবে কনভার্ট করবেন',
          description: 'JPG, PNG ও WebP-এর তুলনা করুন এবং তারপর CompressMyPic দিয়ে আপনার ইমেজ কম্প্রেস বা কনভার্ট করুন৤',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
        {
          '@type': 'Article',
          headline: "JPG vs PNG vs WebP: কোন ফরম্যাটটি ব্যবহার করা উচিত?",
          description: "JPG vs PNG vs WebP সহজ ভাষায় ব্যাখ্যা করা হয়েছে: আপনার ছবি, লোগো ও ওয়েবসাইটের জন্য সঠিক ফরম্যাট বেছে নিতে সাইজ, কোয়ালিটি ও স্বচ্ছতার তুলনা করুন৤",
          image: 'https://compressmypic.online/og-image.png',
          author: { '@type': 'Person', name: 'Bilal' },
          publisher: {
            '@type': 'Organization',
            name: 'CompressMyPic',
            url: 'https://compressmypic.online/',
            logo: { '@type': 'ImageObject', url: 'https://compressmypic.online/favicon.svg' },
          },
          datePublished: '2026-11-14',
          dateModified: '2026-11-14',
          mainEntityOfPage: "https://compressmypic.online/bn/guides/jpg-vs-png-vs-webp/",
          inLanguage: 'bn',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "হোম", item: "https://compressmypic.online/bn/" },
            { '@type': 'ListItem', position: 2, name: "গাইড", item: "https://compressmypic.online/bn/" },
            { '@type': 'ListItem', position: 3, name: "JPG vs PNG vs WebP: কোন ফরম্যাটটি ব্যবহার করা উচিত?", item: "https://compressmypic.online/bn/guides/jpg-vs-png-vs-webp/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-formats-jsonld');
    if (prev) prev.remove();
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/bn/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ইমেজ কম্প্রেসরে ফিরে যান</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            JPG vs PNG vs WebP: কোন ফরম্যাটটি ব্যবহার করা উচিত?
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            দ্বারা <a href="/bn/amader-somporke" onClick={(e) => { e.preventDefault(); onNavigate('/bn/amader-somporke'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            ভুল ফরম্যাট বেছে নিলে আপনার ইমেজ প্রয়োজনের চেয়ে দশ গুণ বড় হতে পারে, অথবা স্বচ্ছ লোগো নষ্ট হতে পারে৤ এখানে সহজ ও সৎ তুলনা আছে, এবং কয়েক সেকেন্ডে ফরম্যাটের মধ্যে কনভার্ট করার উপায়ও৤
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>সংক্ষেপে উত্তর</span>
            </h2>
            <p>
              শুধু একটি কথা মনে রাখলে, এটি মনে রাখুন: ছবির জন্য JPG, লোগো ও স্বচ্ছতা দরকার এমন সবকিছুর জন্য PNG, এবং সবচেয়ে ছোট ফাইল দরকার হলে WebP, বিশেষ করে ওয়েবসাইটে৤ নিচের টেবিলে বলা হয়েছে কেন৤
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">ফরম্যাট</th>
                    <th className="px-4 py-3 font-semibold">ফাইল সাইজ</th>
                    <th className="px-4 py-3 font-semibold">স্বচ্ছতা</th>
                    <th className="px-4 py-3 font-semibold">কিসের জন্য ভালো</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">JPG</td>
                    <td className="px-4 py-3">ছোট</td>
                    <td className="px-4 py-3">না</td>
                    <td className="px-4 py-3">ছবি, শেয়ার করা, প্রিন্ট করা</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">PNG</td>
                    <td className="px-4 py-3">বড়</td>
                    <td className="px-4 py-3">হ্যাঁ</td>
                    <td className="px-4 py-3">লোগো, আইকন, স্ক্রিনশট</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">WebP</td>
                    <td className="px-4 py-3">সবচেয়ে ছোট</td>
                    <td className="px-4 py-3">হ্যাঁ</td>
                    <td className="px-4 py-3">ওয়েবসাইট, ওয়েব ছবি</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Camera className="w-4 h-4" />
              </span>
              <span>JPG: ছবির জন্য সেরা</span>
            </h2>
            <p className="text-sm sm:text-base">
              JPG (যাকে JPEG-ও লেখা হয়) ছবির জন্য ক্লাসিক ফরম্যাট৤ এটি লসি কম্প্রেশন ব্যবহার করে: সূক্ষ্ম বিবরণ সরায় যা আপনার চোখ খুব কমই দেখে, যাতে ফাইল অনেক ছোট হয়ে যায়৤ 5 MB-এর ক্যামেরা ছবি JPG হিসেবে 500 KB হতে পারে এবং এখনো খুব ভালো দেখায়৤ JPG স্বচ্ছতা সমর্থন করে না, তাই এটি লোগোর জন্য ভুল বিকল্প, তবে যেকোনো সাধারণ ছবির জন্য এটি নিরাপদ ও সর্বজনীন বিকল্প যা প্রতিটি ডিভাইস ও অ্যাপ খুলতে পারে৤
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: লোগো ও স্বচ্ছতার জন্য সেরা</span>
            </h2>
            <p className="text-sm sm:text-base">
              PNG লসলেস: এটি প্রতিটি পিক্সেল ঠিকঠাক সংরক্ষণ করে এবং স্বচ্ছ পটভূমি সমর্থন করে৤ তাই এটি লোগো, আইকন ও টেক্সটসহ গ্রাফিক্সের জন্য সঠিক ফরম্যাট৤ এর মূল্য ফাইলের সাইজ: PNG হিসেবে সংরক্ষিত ছবি একই ছবি JPG হিসেবে সংরক্ষণের তুলনায় 5 থেকে 10 গুণ বড় হতে পারে৤ কোনো নির্দিষ্ট কারণ ছাড়া ক্যামেরার ছবি কখনো PNG হিসেবে সংরক্ষণ করবেন না৤
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: ওয়েবসাইটের জন্য সেরা</span>
            </h2>
            <p className="text-sm sm:text-base">
              WebP Google-এর তৈরি আধুনিক ফরম্যাট৤ এটি সবকিছু করে: JPG-এর মতো লসি কম্প্রেশন, PNG-এর মতো স্বচ্ছতা, এবং একই রকম দেখতে কোয়ালিটিতে JPG-এর চেয়ে সাধারণত 25 থেকে 35% ছোট ফাইল৤ সব আধুনিক ব্রাউজার এটি সমর্থন করে, সেজন্যই এটি ওয়েবসাইটের ইমেজের জন্য সেরা ফরম্যাট৤ এর একমাত্র দুর্বলতা পুরনো প্রোগ্রামের সঙ্গে সামঞ্জস্য, এবং WhatsApp প্রিভিউয়ের সঙ্গে, যেখানে JPG এখনো বেশি নিরাপদ৤
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.webp"
              alt="JPG, PNG ও WebP হিসেবে সংরক্ষিত একই ছবির তুলনা, তাদের ফাইল সাইজসহ"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              তিন ফরম্যাটে একই ছবি: WebP সবচেয়ে ছোট, PNG সবচেয়ে বড় এবং JPG মাঝখানে৤
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>ধাপে ধাপে: আপনার ইমেজ কম্প্রেস বা কনভার্ট করুন</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>প্রতিটি কাজের জন্য কোন ফরম্যাট?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">ক্যামেরা ছবি: JPG বা WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  শেয়ার ও প্রিন্টের জন্য JPG, আপনার ওয়েবসাইটের জন্য WebP৤ দুটোই ছবিকে মূল সাইজের ছোট একটি অংশে খুব ভালো দেখাতে দেয়৤
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">লোগো ও আইকন: PNG বা WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  স্বচ্ছতা দরকার, তাই JPG বাইরে৤ PNG ক্লাসিক নিরাপদ বিকল্প; WebP ছোট এবং সব আধুনিক জায়গায় কাজ করে৤
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">স্ক্রিনশট: WebP বা PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  তীক্ষ্ণ টেক্সট ও সমতল রঙ WebP ও PNG-এর সঙ্গে ভালো থাকে৤ JPG টেক্সটের কিনারা ঝাপসা করে, তাই স্ক্রিনশটে এড়িয়ে চলুন৤
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">ওয়েবসাইট ইমেজ: WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  ছোট ফাইল মানে দ্রুত পেজ৤ আপনার ওয়েবসাইটের ছবি WebP-তে বদলান এবং খুব পুরনো ব্রাউজারের জন্য JPG বিকল্প হিসেবে রাখুন৤
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.webp"
              alt="CompressMyPic-এ JPG, PNG বা WebP আউটপুট ফরম্যাট বেছে নেওয়ার স্ক্রিনশট"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              CompressMyPic-এ আপনার আউটপুট ফরম্যাট বেছে নিন: মূল রাখুন অথবা JPG, PNG বা WebP-তে বদলান৤
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>প্রায়শই জিজ্ঞাসিত প্রশ্ন</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#dc2626] dark:text-[#fca5a5]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">সম্পর্কিত গাইড</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/bn/guides/whatsapp-er-jonno-image-compress-korun')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কীভাবে কম্প্রেস করবেন</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">প্রথমে নিজে ছবি কমান এবং তারপর ডকুমেন্ট হিসেবে পাঠান যাতে WhatsApp সেগুলো ঝাপসা না করতে পারে৤</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/bn/guides/image-100kb-te-chhoto-kivabe-korben')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">ওয়েবসাইট ও ইমেলের জন্য ইমেজের সাইজ 100 KB-তে কীভাবে কমাবেন</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">আপনার ছবি নষ্ট না করে 100 KB-তে পৌঁছানোর ধাপে ধাপে গাইড৤</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/bn/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              বিনামূল্যে ইমেজ কম্প্রেস করুন
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/bn/guides/whatsapp-er-jonno-image-compress-korun')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              WhatsApp-এর জন্য কম্প্রেস করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
