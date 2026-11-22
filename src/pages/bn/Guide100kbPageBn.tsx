import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageBnProps {
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
    text: 'আপনার ব্রাউজারে compressmypic.online-এ যান। কিছু ইনস্টল করতে হয় না এবং কোনো অ্যাকাউন্ট বানাতে হয় না: টুলটি বিনামূল্যে, রেজিস্ট্রেশন ছাড়া ও ওয়াটারমার্ক ছাড়া।',
  },
  {
    title: 'আপনার ইমেজ আপলোড করুন',
    text: 'আপনার ইমেজ টেনে পেজে ছাড়ুন, অথবা আপনার ডিভাইস থেকে বেছে নিতে «ফাইল ব্রাউজ করুন»-এ ট্যাপ করুন। JPG, PNG ও WebP সমর্থিত, প্রতি ইমেজে 20 MB পর্যন্ত। আপনি একসঙ্গে অনেক ইমেজ আপলোড করতে পারেন।',
  },
  {
    title: 'সুষম প্রিসেট দিয়ে শুরু করুন',
    text: 'সুষম প্রিসেট কোয়ালিটি প্রায় 70%-এ সেট করে। বেশিরভাগ ছবির জন্য এটি প্রথমেই ফাইলটিকে তার মূল সাইজের ছোট একটি অংশে নামিয়ে আনে; আপনার ইমেজের পাশে দেখানো লাইভ সাইজ দেখে বুঝুন আপনি কোথায় আছেন।',
  },
  {
    title: 'কোয়ালিটি স্লাইডার ধীরে ধীরে নিচে নামান',
    text: 'এমন কোনো বক্স নেই যেখানে আপনি «100 KB» লিখবেন: বরং কোয়ালিটি স্লাইডার ধীরে ধীরে নিচে টানুন এবং প্রতিটি পরিবর্তনের পর আগে ও পরের সাইজ লাইভ আপডেট হতে দেখুন। ছোট ছোট ধাপে এগোন (যেমন 70% থেকে 60%, তারপর 50%) যাতে আপনি প্রয়োজনের চেয়ে বেশি এগিয়ে না যান এবং প্রয়োজনের চেয়ে বেশি কোয়ালিটি না হারান।',
  },
  {
    title: 'এখনো 100 KB-এর ওপরে থাকলে WebP-এ যান',
    text: 'উপযুক্ত কোয়ালিটিতেও ফাইল 100 KB-এর ওপরে থাকলে, আউটপুট ফরম্যাট WebP-তে বদলান। একই রকম দেখতে কোয়ালিটিতে WebP সাধারণত JPG-এর চেয়ে 25 থেকে 35% ছোট হয়, এবং প্রায়ই কোয়ালিটি আরও না কমিয়েই 100 KB-এর ব্যবধান পূরণ করে দেয়।',
  },
  {
    title: 'আগে ও পরে তুলনা করুন',
    text: 'আগে ও পরের তুলনা খুলুন এবং মুখ, টেক্সট ও সূক্ষ্ম বিবরণে জুম করুন। ছবিটি এখনো ভালো দেখালে কাজ শেষ। যদি তা ব্লকের মতো বা ফ্যাকাশে দেখায়, কোয়ালিটি একটু বাড়ান এবং 100 KB-এর চেয়ে একটু বড় ফাইল মেনে নিন: 120 KB-এর স্পষ্ট ছবি 100 KB-এর ঝাপসা ছবির চেয়ে ভালো।',
  },
  {
    title: 'আপনার ইমেজ ডাউনলোড করুন',
    text: 'ছোট ফাইল সংরক্ষণ করতে ডাউনলোডে ট্যাপ করুন, অথবা একসঙ্গে অনেক ইমেজ ছোট করে থাকলে «সব ডাউনলোড করুন (ZIP)» ব্যবহার করুন। আপনার মূল ইমেজ কখনো বদলানো হয় না: আপনি সবসময় একটি নতুন, ছোট কপি পান।',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'আমার ছবির সাইজ প্রায় 100 KB-তে কীভাবে কমাব?',
    answer: 'CompressMyPic-এ আপলোড করুন, সুষম প্রিসেট দিয়ে শুরু করুন এবং তারপর আগে ও পরের লাইভ সাইজ দেখতে দেখতে কোয়ালিটি স্লাইডার ধীরে ধীরে নিচে নামান। কম্প্রেস করা সাইজ 100 KB-এর কাছাকাছি পৌঁছালেই থামুন। এখনো ওপরে থাকলে, আউটপুট ফরম্যাট WebP-তে বদলান।',
  },
  {
    id: 'kb-faq-2',
    question: 'ঠিক 100 KB লেখার জন্য কোনো বক্স কেন নেই?',
    answer: 'কারণ প্রতিটি ছবি আলাদাভাবে কম্প্রেস হয়: একটি পরিষ্কার আকাশ একই কোয়ালিটিতে ভিড়ভাট্টা দৃশ্যের চেয়ে অনেক বেশি ছোট হয়ে যায়। «100 KB»-এর একটি নির্দিষ্ট বক্স অনুমান করত। বরং CompressMyPic প্রতিটি পরিবর্তনের পর কম্প্রেস করা সাইজ লাইভ দেখায়, যাতে আপনি কোয়ালিটির ওপর সম্পূর্ণ নিয়ন্ত্রণ রেখে নিজেই ফাইলটিকে 100 KB-তে নিয়ে যেতে পারেন।',
  },
  {
    id: 'kb-faq-3',
    question: 'কোন কোয়ালিটি সেটিং আমাকে প্রায় 100 KB দেবে?',
    answer: 'এটি ছবির ওপর নির্ভর করে, তবে একটি সাধারণ মোবাইল ছবির জন্য 50 থেকে 70% কোয়ালিটি সাধারণত 100 KB-এর কাছাকাছি থাকে। সমতল রঙের একটি সাধারণ ছবি 70%-এ 100 KB-তে পৌঁছাতে পারে, আর খুব বিস্তারিত ল্যান্ডস্কেপের 40 থেকে 50% দরকার হতে পারে। লাইভ সাইজ দেখুন: সেই সংখ্যাটাই সত্যি, কোনো নির্দিষ্ট শতাংশ নয়।',
  },
  {
    id: 'kb-faq-4',
    question: 'কম কোয়ালিটিতেও আমার ছবি 100 KB-এর ওপরে আছে, এখন কী করব?',
    answer: 'প্রথমে আউটপুট ফরম্যাট WebP-তে বদলান, যা সাধারণত JPG-এর চেয়ে 25 থেকে 35% ছোট হয়। তাতেও ওপরে থাকলে, কোয়ালিটি আরেকটু কমান এবং তুলনা দেখুন: প্রায়ই আরেকটু কমালেও চোখে পড়ে না। শেষ উপায় হিসেবে, খুব বড় মাত্রার ছবির প্রত্যাশার চেয়ে কম কোয়ালিটি সেটিং দরকার হতে পারে, কারণ বেশি পিক্সেল মানে বেশি ডেটা।',
  },
  {
    id: 'kb-faq-5',
    question: '100 KB-তে পৌঁছাতে কি আমার WebP ব্যবহার করা উচিত?',
    answer: 'হ্যাঁ, যখনই সম্ভব। WebP কোয়ালিটি বেশি না কমিয়ে 100 KB-তে পৌঁছানোর সবচেয়ে সহজ উপায়, কারণ এটি JPG-এর মতো দেখতে কোয়ালিটিতে ছোট ফাইল বানায়। ওয়েবসাইটের ইমেজের জন্য এবং সব জায়গায় যেখানে আধুনিক ব্রাউজার ব্যবহার হয়, WebP ব্যবহার করুন; JPG শুধু তখন ব্যবহার করুন যখন ইমেজ পুরনো প্রোগ্রামে খুলতে হবে অথবা WhatsApp-এ শেয়ার করতে হবে।',
  },
  {
    id: 'kb-faq-6',
    question: '100 KB-তে কমালে কি ছবি ঝাপসা দেখায়?',
    answer: 'না, যদি আপনি সাবধানে করেন। 100 KB-তে একটি সাধারণ মোবাইল ছবি স্ক্রিনে এখনো স্পষ্ট দেখায়, কারণ স্ক্রিন ক্যামেরায় ধরা পিক্সেলের চেয়ে অনেক কম পিক্সেল দেখায়। এটি শুধু তখনই ঝাপসা দেখায় যখন আপনি কোয়ালিটি খুব কমিয়ে দেন (প্রায় 40%-এর নিচে) অথবা ছবিটি বড় সাইজে প্রিন্ট করা হয়। ডাউনলোডের আগে সবসময় আগে ও পরের তুলনা দেখুন।',
  },
  {
    id: 'kb-faq-7',
    question: 'আমি কি PNG 100 KB-তে কমাতে পারি?',
    answer: 'হ্যাঁ, তবে PNG ছবি শুরু থেকেই বড় হয়, তাই এতে বেশি পরিশ্রম লাগে। PNG আপলোড করুন, কোয়ালিটি স্লাইডার নিচে নামান এবং আউটপুট WebP বা JPG-তে বদলান: শুধু এতেই প্রায়ই সাইজ অর্ধেকের বেশি কমে যায়। PNG আউটপুট শুধু তখনই রাখুন যখন ইমেজের স্বচ্ছতা দরকার, এবং মেনে নিন যে স্বচ্ছ PNG 100 KB-তে পৌঁছাতে নাও পারে।',
  },
  {
    id: 'kb-faq-8',
    question: 'ইমেজ 200 KB-তে কীভাবে আনব?',
    answer: 'একই পদ্ধতি ব্যবহার করুন: ইমেজ আপলোড করুন, সুষম প্রিসেট দিয়ে শুরু করুন এবং লাইভ সাইজ দেখতে দেখতে কোয়ালিটি স্লাইডার নিচে নামান, যতক্ষণ তা 200 KB-এর কাছাকাছি না পৌঁছায়। বেশিরভাগ ছবি 70 থেকে 80% কোয়ালিটিতে সহজেই 200 KB-তে পৌঁছে যায়, তাই সাধারণত আপনাকে বেশি নিচে যেতে হয় না।',
  },
  {
    id: 'kb-faq-9',
    question: 'ইমেজ 50 KB করার জন্য আমাকে কী করতে হবে?',
    answer: 'ইমেজ আপলোড করুন, আউটপুট ফরম্যাট WebP-তে বদলান এবং কোয়ালিটি স্লাইডার ধীরে ধীরে নিচে নামান, যতক্ষণ লাইভ সাইজ 50 KB-এর কাছাকাছি না পৌঁছায় — ছবির জন্য সাধারণত প্রায় 40 থেকে 55% কোয়ালিটি। তুলনাটি মনোযোগ দিয়ে দেখুন, কারণ 50 KB-তে সূক্ষ্ম বিবরণ প্রভাবিত হতে শুরু করে; থাম্বনেইল ও চ্যাটের জন্য এটি ঠিক আছে, যেসব ছবি আপনি সংরক্ষণ করে রাখতে চান সেগুলোর জন্য কম।',
  },
  {
    id: 'kb-faq-10',
    question: 'ইমেজ 20 KB-তে কমানো কি সম্ভব?',
    answer: 'WebP আউটপুট ও কম কোয়ালিটি সেটিং ব্যবহার করুন, সাধারণত 25 থেকে 40%, এবং লাইভ সাইজ দেখুন। 20 KB খুবই কম, তাই চোখে পড়ার মতো নরম ভাবের প্রত্যাশা করুন: এটি আইকন, থাম্বনেইল ও ছোট প্রিভিউ ইমেজের জন্য কাজ করে, মুখের ছবির জন্য নয়। ইমেজ এখনো 20 KB-তে না পৌঁছালে, সম্ভবত এতে এত ছোট ফাইলের জন্য বেশি বিবরণ আছে।',
  },
  {
    id: 'kb-faq-11',
    question: 'ওয়েবসাইটের ইমেজের জন্য ভালো ফাইল সাইজ কী?',
    answer: 'সাধারণ কনটেন্ট ছবির জন্য প্রতি ইমেজে 100 KB-এর কম, এবং বড় হিরো ইমেজের জন্য 200 KB-এর কম লক্ষ্য রাখুন। ছোট ফাইল পেজ দ্রুত লোড করে, যা ভিজিটররা লক্ষ করেন এবং Google পুরস্কৃত করে। ওয়েবসাইটের ইমেজের জন্য WebP ও সুষম প্রিসেট শুরুর বিন্দু হিসেবে ব্যবহার করুন।',
  },
  {
    id: 'kb-faq-12',
    question: 'ইমেইল অ্যাটাচমেন্টের সাইজ সীমা কী?',
    answer: 'বেশিরভাগ ইমেইল প্রদানকারী প্রতি বার্তায় সব অ্যাটাচমেন্টসহ মোট 20 থেকে 25 MB অনুমোদন করে; Gmail 25 MB অনুমোদন করে। 100 KB-তে কমানো একটি ছবি কখনো সমস্যা হয় না; দশটি 100 KB ছবিও মোট মাত্র 1 MB হয়। আগে কম্প্রেস করাই অনেক ছবি ইমেইলে পাঠানো সহজ করে দেয়।',
  },
  {
    id: 'kb-faq-13',
    question: 'আমি কি একসঙ্গে অনেক ইমেজ 100 KB-তে কমাতে পারি?',
    answer: 'হ্যাঁ। সব ইমেজ একসঙ্গে আপলোড করুন, সবগুলোতে একই প্রিসেট ও একই কোয়ালিটি প্রয়োগ করুন এবং প্রতিটির লাইভ সাইজ দেখুন। কোনো ইমেজ এখনো 100 KB-এর ওপরে থাকলে, তা আলাদাভাবে সমন্বয় করুন এবং তারপর «সব ডাউনলোড করুন (ZIP)» বোতাম দিয়ে সবকিছু একসঙ্গে ডাউনলোড করুন।',
  },
  {
    id: 'kb-faq-14',
    question: 'এই টুল কি আমার ইমেজের মাত্রা বদলায়?',
    answer: 'না। CompressMyPic আপনার ইমেজের মাত্রা ঠিক যেমন আছে তেমনই রাখে: শুধু ফাইলের সাইজ ছোট হয়। আপনার ছবির প্রস্থ, উচ্চতা ও অনুপাত মূলের মতোই থাকে, তাই 4000×3000 ছবি 4000×3000-ই থাকে, শুধু তার ফাইল অনেক ছোট হয়ে যায়।',
  },
  {
    id: 'kb-faq-15',
    question: 'আমার কম্প্রেস করা ইমেজের সাইজ কীভাবে পরীক্ষা করব?',
    answer: 'CompressMyPic প্রতিটি ইমেজের মূল সাইজ ও কম্প্রেস করা সাইজ লাইভ দেখায়, ঠিক প্রতিটি ছবির নিচে; যেমন «4.2 MB → 98 KB»। আপনি আপনার ডিভাইসে ডাউনলোড করা ফাইলও পরীক্ষা করতে পারেন: মোবাইলে আপনার গ্যালারি বা ফাইল ম্যানেজারে ফাইলের বিবরণ দেখুন।',
  },
  {
    id: 'kb-faq-16',
    question: 'ওয়েবসাইটের জন্য 100 KB কি যথেষ্ট কোয়ালিটি?',
    answer: 'হ্যাঁ, প্রায় সব ওয়েব ব্যবহারের জন্য। ওয়েবসাইটের ছবি কয়েকশো পিক্সেল প্রস্থে দেখানো হয়, তাই 100 KB-এর ইমেজ স্ক্রিনে স্পষ্ট দেখায়। শুধু পুরো স্ক্রিনের হিরো ইমেজ বা প্রিন্টের জন্য তৈরি ছবির বড় ফাইল দরকার হয়। 100 KB-তে কম্প্রেস করুন, তুলনা দেখুন এবং আপনি দেখবেন কোয়ালিটি বজায় আছে।',
  },
  {
    id: 'kb-faq-17',
    question: 'আমি কি স্ক্রিনশট 100 KB-তে কমাতে পারি?',
    answer: 'হ্যাঁ, এবং স্ক্রিনশট সবচেয়ে সহজ ক্ষেত্র। এতে সমতল রঙের বড় এলাকা থাকে, তাই এগুলো খুব ভালোভাবে কম্প্রেস হয়: 1 MB থেকে শুরু হওয়া স্ক্রিনশট প্রায়ই সুষম প্রিসেটে 100 KB-এর নিচে চলে যায়। সবচেয়ে ছোট ফলাফল পেতে WebP আউটপুট চেষ্টা করুন।',
  },
  {
    id: 'kb-faq-18',
    question: 'কম্প্রেস করার সময় কি আমার ইমেজ আমার ডিভাইসের বাইরে যায়?',
    answer: 'না। সব কম্প্রেশন আপনার নিজের ডিভাইসে আপনার নিজের ব্রাউজারের ভেতরে হয়, তাই আপনার ইমেজ কখনো কোনো সার্ভারে আপলোড হয় না, সংরক্ষণ হয় না এবং আর কেউ সেগুলো দেখে না। সেগুলো আপনার ব্রাউজারের মেমোরিতে থাকে এবং ট্যাব বন্ধ করলে বা রিফ্রেশ করলে মুছে যায়।',
  },
  {
    id: 'kb-faq-19',
    question: 'আমি কতগুলো ইমেজ কমাতে পারি, তার কোনো সীমা আছে?',
    answer: 'না। আপনি কতগুলো ইমেজ কম্প্রেস করতে পারেন তার কোনো সীমা নেই, এবং আপনার কোনো অ্যাকাউন্ট বা রেজিস্ট্রেশন দরকার নেই। একমাত্র সীমা প্রতি ইমেজে 20 MB, যা হাই-রেজোলিউশন ক্যামেরা ছবি ও বড় স্ক্রিনশটের জন্য যথেষ্ট।',
  },
  {
    id: 'kb-faq-20',
    question: 'ইমেজ 100 KB-তে কমানো কি বিনামূল্যে?',
    answer: 'হ্যাঁ, সম্পূর্ণ বিনামূল্যে। কোনো চার্জ নেই, কোনো পেইড প্ল্যান নেই, কোনো ক্রেডিট নেই এবং আপনার কম্প্রেস করা ইমেজে কোনো ওয়াটারমার্ক নেই। সাইটটি খুলুন, আপনার ইমেজ 100 KB-তে কমান এবং যতবার চান ডাউনলোড করুন।',
  },
];

export const Guide100kbPageBn: React.FC<Guide100kbPageBnProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'ওয়েব ও ইমেলের জন্য ইমেজ 100 KB-তে কীভাবে ছোট করবেন';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'বিনামূল্যের অনলাইন কম্প্রেসর দিয়ে ওয়েবসাইট ও ইমেলের জন্য ইমেজের সাইজ 100 KB-তে ছোট করুন। ধাপে ধাপে গাইড, রেজিস্ট্রেশন ছাড়া ও ওয়াটারমার্ক ছাড়া।');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/bn/guides/image-100kb-te-chhoto-kivabe-korben/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'ওয়েবসাইট ও ইমেলের জন্য ইমেজের সাইজ 100 KB-তে কীভাবে কমাবেন',
          description: 'CompressMyPic-এ কোয়ালিটি স্লাইডার ও WebP আউটপুট ব্যবহার করে ইমেজ প্রায় 100 KB-তে কমান।',
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
          headline: "ওয়েব ও ইমেলের জন্য ইমেজ 100 KB-তে কীভাবে ছোট করবেন",
          description: "বিনামূল্যের অনলাইন কম্প্রেসর দিয়ে ওয়েবসাইট ও ইমেলের জন্য ইমেজের সাইজ 100 KB-তে ছোট করুন। ধাপে ধাপে গাইড, রেজিস্ট্রেশন ছাড়া ও ওয়াটারমার্ক ছাড়া।",
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
          mainEntityOfPage: "https://compressmypic.online/bn/guides/image-100kb-te-chhoto-kivabe-korben/",
          inLanguage: 'bn',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "হোম", item: "https://compressmypic.online/bn/" },
            { '@type': 'ListItem', position: 2, name: "গাইড", item: "https://compressmypic.online/bn/" },
            { '@type': 'ListItem', position: 3, name: "ওয়েব ও ইমেলের জন্য ইমেজ 100 KB-তে কীভাবে ছোট করবেন", item: "https://compressmypic.online/bn/guides/image-100kb-te-chhoto-kivabe-korben/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-100kb-jsonld');
    if (prev) prev.remove();
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
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
            ওয়েবসাইট ও ইমেলের জন্য ইমেজের সাইজ 100 KB-তে কীভাবে কমাবেন
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            দ্বারা <a href="/bn/amader-somporke" onClick={(e) => { e.preventDefault(); onNavigate('/bn/amader-somporke'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            4 MB-এর ছবি আপনার ওয়েবসাইট ধীরে লোড করায় এবং ইমেইল আটকে দেয়। তাকে প্রায় 100 KB-তে কমালে পেজ দ্রুত লোড হয় এবং ইমেইল সঙ্গে সঙ্গে পাঠানো যায়, আর আপনি যদি সঠিকভাবে করেন, কেউ পার্থক্য বুঝতে পারবে না।
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>100 KB কেন জাদুকরী সংখ্যা</span>
            </h2>
            <p>
              100 KB সেই সাইজ যা বেশিরভাগ মানুষ খোঁজে, কারণ এটি একদম সঠিক ভারসাম্য: ওয়েবসাইটে সঙ্গে সঙ্গে লোড হওয়া বা যেকোনো ইমেইলে ঢোকার জন্য যথেষ্ট ছোট, কিন্তু স্ক্রিনে স্পষ্ট দেখানোর জন্য যথেষ্ট বড়। একটি সাধারণ মোবাইল ছবি 3 থেকে 5 MB থেকে শুরু হয়, তাই 100 KB-তে পৌঁছানো মানে ফাইলের প্রায় 97% সরিয়ে ফেলা, এবং আধুনিক কম্প্রেশন এটি মূলত সেই ডেটা সরিয়ে করে যা আপনার চোখ দেখতেই পায় না।
            </p>
            <p>
              শুরু করার আগে একটি সৎ কথা: CompressMyPic-এ এমন কোনো বক্স নেই যেখানে আপনি «100 KB» লিখবেন এবং ঠিক সেই সাইজ পাবেন। কোনো সৎ টুলই সঠিক সংখ্যার প্রতিশ্রুতি দিতে পারে না, কারণ প্রতিটি ছবি আলাদাভাবে কম্প্রেস হয়। বরং এই টুল প্রতিটি পরিবর্তনের পর কম্প্রেস করা সাইজ লাইভ দেখায়, এবং আপনি কোয়ালিটি স্লাইডার দিয়ে নিজেই তাকে 100 KB-তে নিয়ে যান। এই গাইড আপনাকে ঠিক কীভাবে করবেন তা জানায়।
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>ধাপে ধাপে: ইমেজ 100 KB-তে কমান</span>
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
              src="/guides/reduce-image-size-to-100kb-1.webp"
              alt="CompressMyPic-এ বড় ছবি আপলোড করে তা 100 KB-তে কমানোর স্ক্রিনশট"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              আপনার ছবি আপলোড করুন: মূল সাইজ সঙ্গে সঙ্গে দেখা যায়, যাতে আপনি জানেন কতটা কমাতে হবে।
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>সাধারণ লক্ষ্য এক নজরে</span>
            </h2>
            <p>
              100 KB একমাত্র লক্ষ্য নয় যা মানুষের দরকার হয়। একই পদ্ধতি যেকোনো সাইজের জন্য কাজ করে; প্রতিটি থেকে আপনি যা আশা করতে পারেন:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">লক্ষ্য</th>
                    <th className="px-4 py-3 font-semibold">সাধারণ কোয়ালিটি</th>
                    <th className="px-4 py-3 font-semibold">কিসের জন্য ভালো</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">200 KB</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">ব্লগ ছবি, বড় ওয়েব ইমেজ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">100 KB</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">ওয়েবসাইট ছবি, ইমেইল অ্যাটাচমেন্ট</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">50 KB</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">থাম্বনেইল, চ্যাট, দ্রুত পেজ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">20 KB</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">আইকন, ছোট প্রিভিউ ইমেজ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              এগুলো শুরুর বিন্দু, প্রতিশ্রুতি নয়। একটি সাধারণ ছবি সহজেই 100 KB-তে পৌঁছে যায়; খুব বিস্তারিত ছবির কম কোয়ালিটি সেটিং দরকার হয়। শতাংশের ওপর নয়, লাইভ সাইজের সংখ্যার ওপর ভরসা করুন।
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>ওয়েবসাইট ও ইমেলের জন্য টিপস</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>ওয়েবসাইটের জন্য WebP আউটপুট ব্যবহার করুন: এটি 100 KB-তে পৌঁছানোর দ্রুততম উপায় এবং সব আধুনিক ব্রাউজার এটি সমর্থন করে।</li>
              <li>ইমেইলের জন্য JPG সবচেয়ে নিরাপদ ফরম্যাট কারণ সব ইমেইল অ্যাপ এটি খোলে। 100 KB-এর JPG সঙ্গে সঙ্গে সংযুক্ত হয় এবং সাইজের কারণে কখনো ফিরে আসে না।</li>
              <li>কোনো পেজ বা ইমেইলের সব ছবি একসঙ্গে কম্প্রেস করুন এবং তারপর «সব ডাউনলোড করুন (ZIP)» বোতাম দিয়ে সব ডাউনলোড করুন।</li>
              <li>ঠিক 100 KB-এর পেছনে ছুটবেন না। 115 KB-এর স্পষ্ট ছবি ঠিক 100 KB-এর ঝাপসা ছবির চেয়ে ভালো: লোড হওয়ার সময়ে কোনো পার্থক্য পড়ে না।</li>
              <li>ছবি প্রকাশ বা পাঠানোর আগে সবসময় আগে ও পরের তুলনা সর্বোচ্চ জুম করে দেখুন।</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.webp"
              alt="আগে ও পরের লাইভ ফাইল সাইজ দেখানো স্ক্রিনশট, যেখানে ইমেজ প্রায় 100 KB-তে কমানো হয়েছে"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              আগে ও পরের লাইভ সাইজ আপনার অগ্রগতি দেখায়: স্লাইডার নিচে নামান যতক্ষণ কম্প্রেস করা সাইজ 100 KB-এর কাছাকাছি না পৌঁছায়।
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>যখন 100 KB সম্ভব নয়</span>
            </h2>
            <p className="text-sm sm:text-base">
              কিছু ইমেজ খারাপ না দেখিয়ে 100 KB-তে পৌঁছাতে পারে না: খুব বড় ও খুব বিস্তারিত ছবি, অথবা স্বচ্ছতাসহ PNG যাকে PNG-ই থাকতে হবে। এমন ক্ষেত্রে জোর করবেন না। 180 KB-এর স্পষ্ট ছবি সব ক্ষেত্রে 100 KB-এর খারাপ ছবির চেয়ে ভালো: ওয়েবসাইটে তা এখনো দ্রুত লোড হয় এবং ইমেইলের জন্য তা এখনো যেকোনো অ্যাটাচমেন্ট সীমার অনেক নিচে থাকে। লক্ষ্য একটি ছোট ফাইল যা এখনো ভালো দেখায়, কোনো জাদুকরী সংখ্যা নয়।
            </p>
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
              <button
                type="button"
                onClick={() => onNavigate('/bn/guides/whatsapp-er-jonno-image-compress-korun')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">কোয়ালিটি না হারিয়ে WhatsApp-এর জন্য ইমেজ কীভাবে কম্প্রেস করবেন</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">প্রথমে নিজে ছবি কমান এবং তারপর ডকুমেন্ট হিসেবে পাঠান যাতে WhatsApp সেগুলো ঝাপসা না করতে পারে।</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/bn/guides/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP: কোন ফরম্যাটটি ব্যবহার করা উচিত?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">ফাইল সাইজ, কোয়ালিটি ও স্বচ্ছতার তুলনা, যাতে আপনি প্রতিবার সঠিক ফরম্যাট বেছে নিতে পারেন।</p>
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
              onClick={() => onNavigate('/bn/guides/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
