import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';
import { GuideRelatedLinks } from '../../components/GuideRelatedLinks';

interface GuideWhatsAppPageBnProps {
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
    text: 'আপনার মোবাইল বা কম্পিউটারের ব্রাউজারে compressmypic.online-এ যান। কিছু ইনস্টল করতে হয় না এবং কোনো অ্যাকাউন্ট বানাতে হয় না: টুলটি সঙ্গে সঙ্গে খুলে যায়।',
  },
  {
    title: 'আপনার ছবি আপলোড করুন',
    text: '«ফাইল ব্রাউজ করুন»-এ ট্যাপ করুন এবং আপনার গ্যালারি থেকে ছবি বেছে নিন, অথবা ছবি টেনে পেজে ছাড়ুন। আপনি একসঙ্গে অনেক ছবি আপলোড করতে পারেন। প্রতিটি ইমেজ 20 MB পর্যন্ত হতে পারে।',
  },
  {
    title: 'সুষম প্রিসেট দিয়ে শুরু করুন',
    text: 'সুষম প্রিসেট (প্রায় 70% কোয়ালিটি) WhatsApp ছবির জন্য ভালো শুরুর বিন্দু। এটি ফাইলের সাইজ অনেক কমায় এবং ছবি মোবাইল স্ক্রিনে এখনো স্পষ্ট দেখায়।',
  },
  {
    title: 'আগে ও পরের লাইভ সাইজ দেখুন',
    text: 'প্রতিটি ছবি তার মূল সাইজ ও নতুন কম্প্রেস করা সাইজ পাশাপাশি দেখায়। ফাইল এখনো আপনার চাওয়ার চেয়ে বড় হলে, কোয়ালিটি স্লাইডার একটু নিচে নামান এবং দেখুন সাইজ সঙ্গে সঙ্গে আপডেট হয়।',
  },
  {
    title: 'ছবির জন্য JPG রাখুন',
    text: 'সাধারণ ছবির জন্য আউটপুট ফরম্যাট JPG রাখুন। এটি সেই ফরম্যাট যা WhatsApp সবচেয়ে ভালোভাবে সামলায় এবং যা ছবির জন্য সবচেয়ে ছোট ফাইল বানায়। PNG শুধু তখনই ব্যবহার করুন যখন আপনার ইমেজের স্বচ্ছতা দরকার, যেমন লোগো।',
  },
  {
    title: 'আগে ও পরে তুলনা করুন',
    text: 'আগে ও পরের তুলনা খুলে দেখুন ছবিটি এখনো ভালো দেখাচ্ছে কি না। মুখ ও টেক্সটে জুম করুন: কোনো আসল পার্থক্য না দেখলে, কোয়ালিটি সেটিং ঠিক আছে।',
  },
  {
    title: 'ছোট ছবি ডাউনলোড করুন',
    text: 'ছবিতে ডাউনলোডে ট্যাপ করুন, অথবা একসঙ্গে অনেক ছবি কম্প্রেস করে থাকলে «সব ডাউনলোড করুন (ZIP)» ব্যবহার করুন। ছোট ফাইল আপনার ডিভাইসে সংরক্ষণ হয়; আপনার মূল ছবি কখনো বদলানো হয় না।',
  },
  {
    title: 'WhatsApp দিয়ে বুদ্ধিমানের মতো পাঠান',
    text: 'সেরা কোয়ালিটি চাইলে, কম্প্রেস করা ছবি ডকুমেন্ট হিসেবে পাঠান: WhatsApp-এ অ্যাটাচে ট্যাপ করুন, তারপর ডকুমেন্ট বেছে নিন, এবং ফাইলটি বেছে নিন। WhatsApp ডকুমেন্ট ছোঁয়া ছাড়াই পাঠায়, তাই আপনার ছবি ঠিক যেমন কম্প্রেস করেছিলেন তেমনই পৌঁছায়। ছবি হিসেবে পাঠালে, WhatsApp তাকে দ্বিতীয়বার কম্প্রেস করবে।',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'WhatsApp ছবির কোয়ালিটি কেন কমায়?',
    answer: 'আপনি যখন সাধারণভাবে ছবি পাঠান, WhatsApp ডেটা ও জায়গা বাঁচাতে তাকে আবার কম্প্রেস করে, এবং প্রায়ই তাকে অনেক ছোট সাইজ ও কম কোয়ালিটিতে নামিয়ে আনে। সেজন্যই ক্যামেরার স্পষ্ট ছবি পাঠানোর পর নরম বা ঝাপসা দেখাতে পারে।',
  },
  {
    id: 'wa-faq-2',
    question: 'WhatsApp কি ডকুমেন্ট হিসেবে পাঠানো ইমেজ কম্প্রেস করে?',
    answer: 'না। আপনি যখন ইমেজ ডকুমেন্ট হিসেবে পাঠান (অ্যাটাচ করুন এবং তারপর ডকুমেন্ট), WhatsApp ফাইলটিকে যেমন আছে তেমনই পাঠায়, কোনো অতিরিক্ত কম্প্রেশন ছাড়া। এটি সম্পূর্ণ কোয়ালিটিসহ ছবি শেয়ার করার সেরা উপায়।',
  },
  {
    id: 'wa-faq-3',
    question: 'WhatsApp কত বড় সাইজের ইমেজ নেয়?',
    answer: 'WhatsApp 2 GB পর্যন্ত ডকুমেন্টের অনুমতি দেয়, তাই কয়েকশো KB-এর কম্প্রেস করা ছবি কখনো সমস্যা হয় না। সাধারণভাবে পাঠানো ছবি WhatsApp নিজেই আবার কম্প্রেস করে, তাই বাস্তবে সাইজ নয়, কোয়ালিটিই গুরুত্বপূর্ণ।',
  },
  {
    id: 'wa-faq-4',
    question: 'WhatsApp-এ সম্পূর্ণ কোয়ালিটিসহ ছবি কীভাবে পাঠাব?',
    answer: 'প্রথমে CompressMyPic দিয়ে নিজে ছবি কম্প্রেস করুন যাতে তার সাইজ যুক্তিসংগত হয়, এবং তারপর WhatsApp-এ ছবির বদলে ডকুমেন্ট হিসেবে পাঠান। অ্যাটাচে ট্যাপ করুন, ডকুমেন্ট বেছে নিন এবং ফাইলটি বেছে নিন। তা WhatsApp আবার কম্প্রেস না করেই পৌঁছাবে।',
  },
  {
    id: 'wa-faq-5',
    question: 'পাঠানোর আগে কি নিজে কম্প্রেস করা উচিত, নাকি WhatsApp-কে করতে দেওয়া উচিত?',
    answer: 'প্রথমে নিজে কম্প্রেস করুন। WhatsApp আক্রমণাত্মকভাবে কম্প্রেস করে এবং এতে আপনার কোনো নিয়ন্ত্রণ থাকে না। আপনি যখন প্রথমে CompressMyPic দিয়ে কম্প্রেস করেন, তখন আপনি কোয়ালিটি বেছে নেন, ফলাফল দেখেন, এবং তারপর ফাইলটি ডকুমেন্ট হিসেবে পাঠান যাতে WhatsApp তাকে আবার না ছোঁয়।',
  },
  {
    id: 'wa-faq-6',
    question: 'WhatsApp ছবির জন্য কোন কোয়ালিটি সেটিং ব্যবহার করা উচিত?',
    answer: 'সুষম প্রিসেট, প্রায় 70%, দিয়ে শুরু করুন। গুরুত্বপূর্ণ ছবির জন্য 80 থেকে 85% ব্যবহার করুন এবং আগে ও পরের তুলনা দেখুন। দৈনন্দিন দ্রুত ছবির জন্য, যখন গতি গুরুত্বপূর্ণ, 50 থেকে 60%-ও মোবাইল স্ক্রিনে ভালো দেখায় এবং অনেক ছোট ফাইল বানায়।',
  },
  {
    id: 'wa-faq-7',
    question: 'দুবার কম্প্রেস করলে কি ছবি নষ্ট হয়?',
    answer: 'হ্যাঁ। JPEG কম্প্রেশনের প্রতিটি ধাপ আরও কিছু বিবরণ সরিয়ে দেয়। সেজন্যই আপনার CompressMyPic দিয়ে শুধু একবার কম্প্রেস করা উচিত এবং তারপর ফলাফল ডকুমেন্ট হিসেবে পাঠানো উচিত, বরং WhatsApp ইতিমধ্যে কম্প্রেস করা ছবিকে দ্বিতীয়বার কম্প্রেস করুক — তা নয়।',
  },
  {
    id: 'wa-faq-8',
    question: 'আমি কি মোবাইলে WhatsApp ছবি কম্প্রেস করতে পারি?',
    answer: 'হ্যাঁ। CompressMyPic Android ও iPhone-এর ব্রাউজারে কাজ করে। সাইটটি খুলুন, আপনার গ্যালারি থেকে ছবি বেছে নিন, তাকে কম্প্রেস করুন, ছোট ফাইল ডাউনলোড করুন এবং তারপর WhatsApp দিয়ে শেয়ার করুন। কোনো অ্যাপ ইনস্টল করতে হয় না।',
  },
  {
    id: 'wa-faq-9',
    question: 'কম্প্রেস করা ছবি কি WhatsApp স্ট্যাটাসে ভালো দেখায়?',
    answer: 'হ্যাঁ, যদি আপনি বেশি এগিয়ে না যান। WhatsApp স্ট্যাটাস ছবি সাধারণ রেজোলিউশনে দেখায়, তাই সুষম প্রিসেট (প্রায় 70%) দিয়ে কম্প্রেস করা ছবি মোবাইল স্ক্রিনে মূলের মতোই দেখায়। মুখ বা টেক্সটসহ স্ট্যাটাস ছবির জন্য 50%-এর নিচে যাবেন না।',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp বলছে আমার ইমেজ খুব বড়, আমি কী করব?',
    answer: 'CompressMyPic-এ ইমেজ আপলোড করুন এবং কোয়ালিটি স্লাইডার নিচে নামান যতক্ষণ ফাইল কয়েকশো KB না হয়; তারপর তা ডাউনলোড করুন এবং আবার পাঠান। ছবি হিসেবে এখনো না পাঠানো গেলে, ডকুমেন্ট হিসেবে পাঠান, যা অনেক বড় ফাইল নেয়।',
  },
  {
    id: 'wa-faq-11',
    question: 'WhatsApp-এর জন্য JPG নাকি PNG ব্যবহার করা উচিত?',
    answer: 'ছবির জন্য JPG ব্যবহার করুন। JPG ক্যামেরা ছবির জন্য অনেক ছোট ফাইল বানায় এবং WhatsApp তাকে ভালোভাবে সামলায়। PNG শুধু সেইসব ইমেজের জন্য ব্যবহার করুন যেগুলোর স্বচ্ছতা দরকার, যেমন লোগো, কারণ PNG ফাইল অনেক বড় হয়।',
  },
  {
    id: 'wa-faq-12',
    question: 'আমি কি WhatsApp-এ WebP ইমেজ পাঠাতে পারি?',
    answer: 'WhatsApp WebP ফাইল নিতে পারে, তবে সেগুলো সাধারণ ছবির মতো নাও দেখাতে পারে এবং কিছু মোবাইল সেগুলো অদ্ভুতভাবে সামলায়। যেসব ছবি আপনি চান মানুষ চ্যাটে সরাসরি দেখুক, সেগুলোর জন্য JPG সবচেয়ে নিরাপদ বিকল্প। WebP WhatsApp-এর চেয়ে ওয়েবসাইটের জন্য ভালো।',
  },
  {
    id: 'wa-faq-13',
    question: 'আমি কি একসঙ্গে অনেক WhatsApp ছবি কম্প্রেস করতে পারি?',
    answer: 'সব ছবি একসঙ্গে CompressMyPic-এ আপলোড করুন, সবগুলোতে একই প্রিসেট প্রয়োগ করুন এবং «সব ডাউনলোড করুন (ZIP)» বোতাম দিয়ে সবগুলো একসঙ্গে ডাউনলোড করুন। তারপর ফাইলগুলো WhatsApp দিয়ে একে একে অথবা ডকুমেন্ট হিসেবে পাঠান।',
  },
  {
    id: 'wa-faq-14',
    question: 'WhatsApp কি ভিডিওও একইভাবে কম্প্রেস করে?',
    answer: 'হ্যাঁ, WhatsApp সাধারণভাবে পাঠানো ভিডিওও কম্প্রেস করে, এবং সেগুলো অনেক কমিয়ে দিতে পারে। CompressMyPic শুধু ইমেজ (JPG, PNG, WebP) নিয়ে কাজ করে, ভিডিও নিয়ে নয়। ভিডিওর জন্য, মূল কোয়ালিটি বজায় রাখতে সেগুলো ডকুমেন্ট হিসেবে পাঠান।',
  },
  {
    id: 'wa-faq-15',
    question: 'ছবি কম্প্রেস করলে কি আমার মোবাইলের মূল ছবি মুছে যায়?',
    answer: 'না। CompressMyPic একটি নতুন, ছোট কপি বানায় এবং তা আপনার ডিভাইসে ডাউনলোড করে। আপনার মূল ছবি আপনার গ্যালারিতে ঠিক যেমন আছে তেমনই থাকে, ছোঁয়া ছাড়া।',
  },
  {
    id: 'wa-faq-16',
    question: 'কম্প্রেস করার সময় কি আমার ছবি কোনো সার্ভারে পাঠানো হয়?',
    answer: 'না। সব কম্প্রেশন আপনার নিজের ডিভাইসে আপনার নিজের ব্রাউজারের ভেতরে হয়, তাই আপনার ছবি কখনো আপলোড হয় না, সংরক্ষণ হয় না এবং আর কেউ সেগুলো দেখে না। সেগুলো আপনার ব্রাউজারের মেমোরিতে থাকে এবং ট্যাব বন্ধ করলে বা রিফ্রেশ করলে মুছে যায়।',
  },
  {
    id: 'wa-faq-17',
    question: 'WhatsApp-এর জন্য ছবি কত ছোট হওয়া উচিত?',
    answer: 'দৈনন্দিন শেয়ার করার জন্য, প্রতি ছবিতে 100 থেকে 300 KB ভালো লক্ষ্য: তা দ্রুত পাঠানো যায়, কম মোবাইল ডেটা খরচ করে এবং মোবাইলে এখনো স্পষ্ট দেখায়। এমন ছবির জন্য যা আপনি প্রিন্ট করতে বা সংরক্ষণ করে রাখতে চান, উচ্চ কোয়ালিটি সেটিংসহ 500 KB থেকে 1 MB-এর কাছাকাছি থাকুন।',
  },
  {
    id: 'wa-faq-18',
    question: 'পাঠানোর পর আমার WhatsApp ছবি ঝাপসা দেখায় কেন?',
    answer: 'কারণ আপনি যখন ছবি হিসেবে পাঠিয়েছিলেন তখন WhatsApp সেগুলো আবার কম্প্রেস করে দিয়েছে। সমাধান হলো প্রথমে নিজে ছবি এমন কোয়ালিটিতে কম্প্রেস করুন যা আপনি নিয়ন্ত্রণ করেন, এবং তারপর ডকুমেন্ট হিসেবে পাঠান যাতে WhatsApp তাকে আবার কম্প্রেস না করে।',
  },
  {
    id: 'wa-faq-19',
    question: 'আমি কি WhatsApp-এর জন্য স্ক্রিনশট কম্প্রেস করতে পারি?',
    answer: 'হ্যাঁ। স্ক্রিনশট ছবির মতোই CompressMyPic-এ আপলোড করুন। স্ক্রিনশট খুব ভালোভাবে কম্প্রেস হয় কারণ এতে সমতল রঙের বড় এলাকা থাকে: প্রথমে সুষম প্রিসেট চেষ্টা করুন এবং সবচেয়ে ছোট ফাইল চাইলে WebP আউটপুটে যান।',
  },
  {
    id: 'wa-faq-20',
    question: 'WhatsApp ছবির জন্য CompressMyPic কি বিনামূল্যে?',
    answer: 'হ্যাঁ, সম্পূর্ণ বিনামূল্যে। কোনো রেজিস্ট্রেশন নেই, কোনো ওয়াটারমার্ক নেই, আপনি কতগুলো ছবি কম্প্রেস করেন তার কোনো সীমা নেই, এবং কোনো অ্যাকাউন্ট দরকার নেই। শুধু সাইটটি খুলুন, কম্প্রেস করুন এবং ডাউনলোড করুন।',
  },
];

export const GuideWhatsAppPageBn: React.FC<GuideWhatsAppPageBnProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কম্প্রেস করুন';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কম্প্রেস করা শিখুন। বিনামূল্যে ও ব্যক্তিগত, রেজিস্ট্রেশন ছাড়া: আপনার ছবি পাঠানোর আগে কমান যাতে সেগুলো স্পষ্ট পৌঁছায়।');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/bn/guides/whatsapp-er-jonno-image-compress-korun/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কীভাবে কম্প্রেস করবেন',
          description: 'CompressMyPic দিয়ে ছবি কম্প্রেস করুন এবং WhatsApp-এ ডকুমেন্ট হিসেবে পাঠান যাতে তা স্পষ্ট থাকে।',
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
          headline: "কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কম্প্রেস করুন",
          description: "কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কম্প্রেস করা শিখুন। বিনামূল্যে ও ব্যক্তিগত, রেজিস্ট্রেশন ছাড়া: আপনার ছবি পাঠানোর আগে কমান যাতে সেগুলো স্পষ্ট পৌঁছায়।",
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
          mainEntityOfPage: "https://compressmypic.online/bn/guides/whatsapp-er-jonno-image-compress-korun/",
          inLanguage: 'bn',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "হোম", item: "https://compressmypic.online/bn/" },
            { '@type': 'ListItem', position: 2, name: "গাইড", item: "https://compressmypic.online/bn/" },
            { '@type': 'ListItem', position: 3, name: "কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কম্প্রেস করুন", item: "https://compressmypic.online/bn/guides/whatsapp-er-jonno-image-compress-korun/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-whatsapp-jsonld');
    if (prev) prev.remove();
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
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
          <a
            href="/bn/"
            onClick={(e) => { e.preventDefault(); onNavigate('/bn/'); }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ইমেজ কম্প্রেসরে ফিরে যান</span>
          </a>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কীভাবে কম্প্রেস করবেন
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            দ্বারা <a href="/bn/amader-somporke" onClick={(e) => { e.preventDefault(); onNavigate('/bn/amader-somporke'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            WhatsApp আপনার পাঠানো প্রতিটি ছবি কমায়, প্রায়ই প্রয়োজনের চেয়ে অনেক বেশি। প্রথমে নিজে আপনার ছবি কম্প্রেস করুন এবং সঠিকভাবে পাঠান: সেগুলো স্পষ্ট পৌঁছাবে, দ্রুত পাঠানো যাবে এবং কম মোবাইল ডেটা খরচ করবে।
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>WhatsApp কেন আপনার ছবি ঝাপসা বানায়</span>
            </h2>
            <p>
              আপনি যখন সাধারণভাবে WhatsApp-এ ছবি পাঠান, WhatsApp তা পৌঁছে দেওয়ার আগে আবার কম্প্রেস করে। 3 MB-এর ক্যামেরা ছবি নরম বিবরণ ও ব্লকের মতো রঙসহ 100 KB-এর ফাইল হিসেবে পৌঁছাতে পারে। WhatsApp এটি ডেটা ও জায়গা বাঁচাতে করে, তবে কতটা কোয়ালিটি হারাবে তা আপনি ঠিক করতে পারেন না।
            </p>
            <p>
              ছবি পাঠানোর আরেকটি উপায় আছে যা বেশিরভাগ মানুষ কখনো ব্যবহার করে না: ডকুমেন্ট হিসেবে পাঠানো। ডকুমেন্ট যেমন আছে তেমনই পৌঁছে দেওয়া হয়, কোনো অতিরিক্ত কম্প্রেশন ছাড়া। কৌশলটি হলো প্রথমে নিজে ছবি এমন কোয়ালিটি সেটিংয়ে কমান যা আপনি নিয়ন্ত্রণ করেন, এবং তারপর ডকুমেন্ট হিসেবে পাঠান। এভাবে আপনি ছোট ফাইল ও স্পষ্ট ছবি একসঙ্গে পান।
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>ধাপে ধাপে: WhatsApp-এর জন্য ছবি কম্প্রেস করুন</span>
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

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.webp"
              alt="WhatsApp-এ পাঠানোর আগে CompressMyPic-এ ছবি আপলোড করার স্ক্রিনশট"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              আপনার ছবি CompressMyPic-এ আপলোড করুন: ছবি টেনে ছাড়ুন, অথবা আপনার গ্যালারি থেকে বেছে নিন।
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>আমার কোন কোয়ালিটি সেটিং ব্যবহার করা উচিত?</span>
            </h2>
            <p>
              কোনো একক নিখুঁত সংখ্যা নেই: এটি ছবি ও তার উদ্দেশ্যের ওপর নির্ভর করে। শুরুর বিন্দু হিসেবে এটি ব্যবহার করুন এবং প্রতিবার আগে ও পরের তুলনা দেখুন:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">দৈনন্দিন ছবি: 70%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  সুষম প্রিসেট। সাইজে বড় সাশ্রয়, এবং ছবি যেকোনো মোবাইল স্ক্রিনে এখনো স্পষ্ট দেখায়। WhatsApp-এর জন্য সেরা ডিফল্ট বিকল্প।
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">গুরুত্বপূর্ণ ছবি: 80–85%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  পরিবারের ছবি, ভ্রমণের ছবি, যা কিছু আপনি সংরক্ষণ করে রাখতে চান। ফাইল বড় হয়, তবে মুখ ও ল্যান্ডস্কেপের সূক্ষ্ম বিবরণ বজায় থাকে।
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">দ্রুত পাঠানোর জন্য: 50–60%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  মিম, দ্রুত আপডেট, ধীর মোবাইল ডেটার ছবি। অনেক ছোট ফাইল যা মোবাইল স্ক্রিনের সাইজে এখনো ভালো দেখায়।
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>সেরা ফলাফলের জন্য টিপস</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>শুধু একবার কম্প্রেস করুন, এবং শুধু একবার। ইতিমধ্যে কম্প্রেস করা ছবি দ্বিতীয়বার কম্প্রেস করলে প্রায় সাইজ না বাঁচিয়ে বিবরণ মুছে যায়।</li>
              <li>কোয়ালিটি গুরুত্বপূর্ণ হলে কম্প্রেস করা ফাইল সবসময় ডকুমেন্ট হিসেবে পাঠান: এটাই একমাত্র উপায় যাতে WhatsApp তাকে আবার কম্প্রেস না করে।</li>
              <li>একই সেটিংসে একসঙ্গে অনেক ছবি কম্প্রেস করুন এবং «সব ডাউনলোড করুন (ZIP)» বোতাম দিয়ে সব ডাউনলোড করুন।</li>
              <li>টেক্সটসহ স্ক্রিনশট ও গ্রাফিক্সের জন্য WebP আউটপুট চেষ্টা করুন: এটি কিনারা তীক্ষ্ণ রাখে এবং JPG-এর চেয়ে ছোট ফাইল বানায়।</li>
              <li>আপনার মূল ছবি কখনো বদলানো হয় না। CompressMyPic একটি নতুন, ছোট কপি সংরক্ষণ করে, তাই আপনি সবসময় ফিরে এসে অন্য কোনো কোয়ালিটি চেষ্টা করতে পারেন।</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.webp"
              alt="CompressMyPic-এ কোয়ালিটি স্লাইডার ও আগে ও পরের লাইভ ফাইল সাইজ দেখানো স্ক্রিনশট"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              কোয়ালিটি স্লাইডার ঘোরান এবং দেখুন আগে ও পরের সাইজ লাইভ আপডেট হয়, যতক্ষণ ফাইল পছন্দের সাইজের না হয়।
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>সাধারণ ভুল যা এড়িয়ে চলবেন</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>কম্প্রেস করার পর ছবি ছবি হিসেবে পাঠানো: WhatsApp তাকে দ্বিতীয়বার কম্প্রেস করবে এবং আপনার কাজ নষ্ট করে দেবে।</li>
              <li>মুখের ছবিতে কোয়ালিটি 40%-এর নিচে নামানো: কম কোয়ালিটিতে ত্বক ও সূক্ষ্ম বিবরণ খুব দ্রুত ব্লকের মতো হয়ে যায়।</li>
              <li>ক্যামেরা ছবির জন্য PNG ব্যবহার করা: PNG ফাইল ছবির জন্য JPG-এর চেয়ে অনেক বড় হয় এবং WhatsApp-এ আপনাকে কিছুই দেয় না।</li>
              <li>ফলাফল দেখতে ভুলে যাওয়া: পাঠানোর আগে সবসময় আগে ও পরের তুলনা দেখুন, বিশেষ করে টেক্সটসহ ছবিতে।</li>
            </ul>
          </section>

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
              <a
                href="/bn/guides/jpg-vs-png-vs-webp"
                onClick={(e) => { e.preventDefault(); onNavigate('/bn/guides/jpg-vs-png-vs-webp'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP: কোন ফরম্যাটটি ব্যবহার করা উচিত?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">ফাইল সাইজ, কোয়ালিটি ও স্বচ্ছতার তুলনা, যাতে আপনি প্রতিবার সঠিক ফরম্যাট বেছে নিতে পারেন।</p>
              </a>
              <a
                href="/bn/guides/image-100kb-te-chhoto-kivabe-korben"
                onClick={(e) => { e.preventDefault(); onNavigate('/bn/guides/image-100kb-te-chhoto-kivabe-korben'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">ওয়েবসাইট ও ইমেলের জন্য ইমেজের সাইজ 100 KB-তে কীভাবে কমাবেন</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">আপনার ছবি নষ্ট না করে 100 KB-তে পৌঁছানোর ধাপে ধাপে গাইড।</p>
              </a>
            </div>
          </section>

          <GuideRelatedLinks guide="whatsapp" lang="bn" onNavigate={onNavigate} />

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="/bn/"
              onClick={(e) => { e.preventDefault(); onNavigate('/bn/'); }}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              বিনামূল্যে ইমেজ কম্প্রেস করুন
            </a>
            <a
              href="/bn/guides/image-100kb-te-chhoto-kivabe-korben"
              onClick={(e) => { e.preventDefault(); onNavigate('/bn/guides/image-100kb-te-chhoto-kivabe-korben'); }}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              ইমেজ 100 KB-তে কমান
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
