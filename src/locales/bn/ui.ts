// Bengali (bn) UI strings for CompressMyPic — natural, native Bengali (Bengali script).
// Source: src/locales/es/ui.ts structure, with English source meaning from
// src/data/tools.ts and the EN defaults in components.
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. English tech words kept where Bengali speakers naturally use them
// (টুল, ডাউনলোড, কমপ্রেস, ব্লগ, ZIP, JPG, PNG, WebP).
// Placeholders: {name} = tool/file name, {max} = max size in MB,
// {year} = current year, {count} = number of extra errors.

export const BN = {
  header: {
    home: 'হোম',
    tools: 'টুলস',
    howItWorks: 'কীভাবে কাজ করে',
    faq: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    about: 'আমাদের সম্পর্কে',
    blog: 'ব্লগ',
    contact: 'যোগাযোগ',
    compressImages: 'ছবি কমপ্রেস করুন',
    themeLight: 'হালকা মোড',
    themeDark: 'গাঢ় মোড',
    themeSystem: 'সিস্টেম ডিফল্ট',
    languageLabel: 'ভাষা',
    homeAriaLabel: 'CompressMyPic – ফ্রি অনলাইন ইমেজ কমপ্রেসর',
    themeLightShort: 'হালকা', // 'Light'
    themeDarkShort: 'গাঢ়', // 'Dark'
    themeSystemShort: 'সিস্টেম', // 'System'
    themeHeading: 'থিম', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'নেভিগেশন মেনু দেখান বা লুকান', // 'Toggle navigation menu'
    themeAriaLabel: 'কালার থিম বদলান (বর্তমান: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'থিম: {current}', // 'Theme: {current}'
    aboutUs: 'আমাদের সম্পর্কে', // 'About Us' (mobile drawer)
    contactUs: 'যোগাযোগ করুন', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'দ্রুত, নিরাপদ ও সম্পূর্ণ প্রাইভেট ইমেজ কমপ্রেশন — সরাসরি আপনার ব্রাউজারেই৤ JPG, PNG ও WebP ছবি অপটিমাইজ করুন, আপনার ডেটা কোনো বাইরের সার্ভারে না পাঠিয়েই৤',
    privacyNote: 'আপনার ডিভাইসে ১০০% গোপনীয়তা',
    toolsHeading: 'ইমেজ টুলস',
    legalHeading: 'আস্থা ও আইনি',
    guidesHeading: 'গাইড',
    blogLabel: 'ব্লগ',
    moreHeading: 'আরও ইউটিলিটি',
    directoryHeading: 'অ্যাডভান্সড কমপ্রেশন, এডিটিং ও ডেভেলপার টুলস',
    processedLocally: 'HTML5 Canvas দিয়ে লোকালি প্রসেস করা',
    bottomRights:
      '© {year} CompressMyPic৤ সর্বস্বত্ব সংরক্ষিত৤ ব্রাউজারে চলা ফ্রি ইমেজ কমপ্রেশন ইউটিলিটি৤',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: 'যোগাযোগ: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'ছবি কমপ্রেস করুন' },
      { slug: '/image-resizer', label: 'ছবির আকার বদলান' },
      { slug: '/image-converter', label: 'ইমেজ কনভার্টার' },
      { slug: '/rotate-flip-image', label: 'ছবি ঘোরান ও উল্টান' },
      { slug: '/image-to-pdf', label: 'ছবি থেকে PDF' },
      { slug: '/remove-image-metadata', label: 'মেটাডেটা মুছে ফেলুন' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'গোপনীয়তা নীতি' },
      { slug: '/terms', label: 'সেবার শর্তাবলি' },
      { slug: '/about', label: 'আমাদের সম্পর্কে' },
      { slug: '/contact', label: 'সাপোর্টে যোগাযোগ করুন' },
      { slug: '/disclaimer', label: 'দায়বদ্ধতার অস্বীকৃতি' },
      { slug: '/cookie-policy', label: 'কুকি নীতি' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'মান না কমিয়ে WhatsApp-এর জন্য ছবি কমপ্রেস করবেন কীভাবে',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG বনাম PNG বনাম WebP: কোন ফরম্যাটটি ব্যবহার করবেন?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'ওয়েব ও ইমেইলের জন্য ছবির সাইজ 100KB-এ নামাবেন কীভাবে',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'মেটাডেটা ও EXIF ভিউয়ার' },
      { slug: '/favicon-generator', label: 'ফ্যাভিকন জেনারেটর' },
      { slug: '/image-color-picker', label: 'ইমেজ কালার পিকার' },
      { slug: '/image-dimensions-checker', label: 'ডাইমেনশন চেকার' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: '50KB-এ কমপ্রেস করুন' },
      { slug: '/compress-image-to-100kb', label: '100KB-এ কমপ্রেস করুন' },
      { slug: '/compress-image-to-200kb', label: '200KB-এ কমপ্রেস করুন' },
      { slug: '/compress-image-to-500kb', label: '500KB-এ কমপ্রেস করুন' },
      { slug: '/target-file-size-compressor', label: 'টার্গেট ফাইল সাইজ কমপ্রেসর' },
      { slug: '/bulk-image-compressor', label: 'বাল্ক ইমেজ কমপ্রেসর' },
      { slug: '/bulk-image-resizer', label: 'বাল্ক ইমেজ রিসাইজার' },
      { slug: '/bulk-image-converter', label: 'বাল্ক ইমেজ কনভার্টার' },
      { slug: '/web-image-optimizer', label: 'ওয়েব ইমেজ অপটিমাইজার' },
      { slug: '/gif-compressor', label: 'GIF কমপ্রেসর' },
      { slug: '/image-cropper', label: 'ইমেজ ক্রপার' },
      { slug: '/image-watermark', label: 'ছবিতে ওয়াটারমার্ক' },
      { slug: '/blur-pixelate-image', label: 'ব্লার ও পিক্সেলেট করুন' },
      { slug: '/add-text-to-image', label: 'ছবিতে টেক্সট যোগ করুন' },
      { slug: '/image-border-generator', label: 'বর্ডার জেনারেটর' },
      { slug: '/round-image-corners', label: 'ছবির কোণ গোল করুন' },
      { slug: '/image-brightness-editor', label: 'উজ্জ্বলতা এডিটর' },
      { slug: '/image-contrast-editor', label: 'কনট্রাস্ট এডিটর' },
      { slug: '/image-saturation-editor', label: 'স্যাচুরেশন এডিটর' },
      { slug: '/image-filters', label: 'ইমেজ ফিল্টার' },
      { slug: '/add-background-to-image', label: 'ছবিতে ব্যাকগ্রাউন্ড যোগ করুন' },
      { slug: '/image-splitter', label: 'ইমেজ স্প্লিটার' },
      { slug: '/image-dpi-changer', label: 'DPI চেঞ্জার' },
      { slug: '/image-to-base64', label: 'ছবি থেকে Base64' },
      { slug: '/base64-to-image', label: 'Base64 থেকে ছবি' },
      { slug: '/image-color-palette-extractor', label: 'কালার প্যালেট এক্সট্রাক্টর' },
      { slug: '/gif-maker', label: 'GIF মেকার' },
      { slug: '/image-collage-maker', label: 'কোলাজ মেকার' },
      { slug: '/heic-to-jpg', label: 'HEIC থেকে JPG' },
      { slug: '/jpg-to-png', label: 'JPG থেকে PNG' },
      { slug: '/png-to-jpg', label: 'PNG থেকে JPG' },
      { slug: '/jpg-to-webp', label: 'JPG থেকে WebP' },
      { slug: '/webp-to-jpg', label: 'WebP থেকে JPG' },
      { slug: '/png-to-webp', label: 'PNG থেকে WebP' },
      { slug: '/webp-to-png', label: 'WebP থেকে PNG' },
      { slug: '/svg-to-png', label: 'SVG থেকে PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF থেকে JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP থেকে JPG' },
    ],
  },
  hero: {
    pill: 'আপনার ডিভাইসে ১০০% প্রাইভেট কমপ্রেশন · সার্ভারে কোনো আপলোড নয়',
    h1: 'ফ্রি ইমেজ কমপ্রেসর – অনলাইনে ছবি কমপ্রেস করুন',
    sub: 'চোখে দেখা মান না কমিয়ে আপনার ছবির ফাইলের সাইজ ছোট করুন৤ আমাদের ফ্রি অনলাইন ইমেজ কমপ্রেসর দিয়ে অনলাইনে ছবি কমপ্রেস করুন — JPG, PNG, WebP ও HEIC-এর জন্য অনলাইন ইমেজ অপটিমাইজার৤ দ্রুত, নিরাপদ, রেজিস্ট্রেশন ছাড়া, ওয়াটারমার্ক ছাড়া, সরাসরি আপনার ব্রাউজারেই সহজ কমপ্রেশন৤',
    badge1: 'আপনার ছবি কখনোই আপনার ডিভাইস ছাড়ে না',
    badge2: 'ব্রাউজারেই তাৎক্ষণিক প্রসেসিং',
    badge3: 'JPG, PNG, WebP ও HEIC সাপোর্ট করে',
  },
  toolsDirectory: {
    heading: 'ছবি প্রসেস করার আরও ফ্রি টুলস',
    subheading:
      'প্রতিটি টুল ১০০% আপনার ব্রাউজারে চলে: সার্ভারে আপলোড নয়, রেজিস্ট্রেশন নয়, ওয়াটারমার্ক নয়৤',
    eyebrow: 'সব টুলই ব্রাউজারে চলে', // 'All Browser-Native Tools'
    allTools: 'সব টুলস', // 'All Tools'
    openTool: 'টুল খুলুন', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'ইমেজ কমপ্রেশন কী?',
        body: 'ইমেজ কমপ্রেশন হলো ছবির চোখে দেখা মান গ্রহণযোগ্য সীমার মধ্যে রেখে গ্রাফিক ফাইলের বাইট সাইজ কমানোর প্রক্রিয়া৤ ক্যামেরা বা ফোন যখন কোনো ছবি সংরক্ষণ করে, তখন বিপুল পরিমাণ ডেটা জমা হয়, আর সেই তথ্যের অনেকটাই খালি চোখে বোঝা যায় না — সেটা বাদ দিলে বা সরল করলেও ছবির মান একই থাকে৤ CompressMyPic একটি ফ্রি অনলাইন ইমেজ অপটিমাইজার ও ইমেজ সাইজ রিডিউসার, যা JPG, PNG ও WebP ফাইলের জন্য ফটো কমপ্রেসর ও ফটো সাইজ রিডিউসার হিসেবে কাজ করে৤\n\nএই প্যাটার্নগুলো বিশ্লেষণ করে কমপ্রেশন অ্যালগরিদম অপ্রয়োজনীয় তথ্য নতুনভাবে সাজায় বা বেছে বেছে বাদ দেয়৤ ফলে ফাইলটি অনেক কম জায়গা নেয় এবং ইন্টারনেটে অনেক দ্রুত পাঠানো যায়৤ এই গাইডে দেখানো হয়েছে, CompressMyPic-এর কোয়ালিটি স্লাইডার, প্রিসেট ও ফরম্যাট বেছে নেওয়ার সুবিধা দিয়ে মান না কমিয়ে ছবি কমপ্রেস করবেন কীভাবে৤',
      },
      {
        heading: 'কেন আপনার ছবি কমপ্রেস করা উচিত?',
        body: 'অপটিমাইজ না করা ছবি ওয়েবসাইটের গতি, স্টোরেজ জায়গা ও মোবাইল ডেটা খরচের অন্যতম বড় বাধা৤ ছবি কমপ্রেস করলে সঙ্গে সঙ্গে বাস্তব সুবিধা পাবেন:',
        bullets: [
          'ওয়েবসাইট দ্রুত লোড হয়: কমপ্রেস করা ছবির পেজ ৭০% পর্যন্ত দ্রুত লোড হয়, যা আপনার Core Web Vitals (Largest Contentful Paint) ও সার্চ র‍্যাঙ্কিং ভালো করে৤ ওয়েবসাইটের ছবির সাইজ কমালে ভিজিটররা বেশিক্ষণ থাকে এবং পেজ ছেড়ে যাওয়ার হার কমে৤',
          'কম স্টোরেজ জায়গা: ভারী আসল ফাইলের বদলে অপটিমাইজ করা ছবি সংরক্ষণ করে ক্লাউড হোস্টিং, সার্ভার ডিস্ক ও ব্যাকআপের খরচ কমান৤',
          'ছবি শেয়ার করা সহজ: ইমেইলের কড়া অ্যাটাচমেন্ট সীমা বা মেসেজের আপলোড কোটা আর আপনাকে আটকাবে না৤ কমপ্রেস করা ছবি ধীর মোবাইল কানেকশন বা সীমিত ডেটা প্ল্যানেও সঙ্গে সঙ্গে অ্যাটাচ ও পাঠানো যায়৤',
          'কম ব্যান্ডউইথ খরচ: মোবাইল ডেটা প্ল্যানে ব্যবহারকারীদের টাকা বাঁচান এবং ভিজিটরদের সাইট ছেড়ে যাওয়া ঠেকান৤ ছোট ফাইল দ্রুত ডাউনলোড হয়, বিশেষ করে ধীর মোবাইল কানেকশনে৤',
        ],
      },
      {
        heading: 'কীভাবে কাজ করে',
        body: 'আপনার ছবি কমপ্রেস করতে মাত্র কয়েক সেকেন্ড লাগে: অ্যাকাউন্ট নয়, সফটওয়্যার নয়, আপলোড নয়৤ তিনটি সহজ ধাপে মান না কমিয়ে ছবি কমপ্রেস করবেন এভাবে৤',
        bullets: [
          'ধাপ ১ — আপনার ছবি আপলোড করুন: JPG, PNG, WebP বা HEIC ছবিগুলো আপলোড জোনে টেনে এনে ছাড়ুন, "ফাইল ব্রাউজ করুন" ক্লিক করে বেছে নিন, অথবা Ctrl+V দিয়ে ছবি পেস্ট করুন৤ একসঙ্গে অনেক ছবি আপলোড করতে পারবেন, প্রতি ছবি সর্বোচ্চ 20 MB৤',
          'ধাপ ২ — কোয়ালিটি ঠিক করুন ও ফরম্যাট বেছে নিন: নিম্ন, ভারসাম্যপূর্ণ বা উচ্চ — যেকোনো প্রিসেট বেছে নিন, অথবা কোয়ালিটি স্লাইডার ১০% থেকে ১০০%-এর মধ্যে ঘোরান, আর সিদ্ধান্ত নিন আসল ফরম্যাট রাখবেন নাকি JPG, PNG বা WebP-তে কনভার্ট করবেন৤ প্রতিটি ছবির আগের ও পরের সাইজ সরাসরি দেখতে পাবেন, আর ইন্টার‌্যাক্টিভ তুলনা স্লাইডার দিয়ে চোখে দেখে ফলাফল যাচাই করতে পারবেন৤',
          'ধাপ ৩ — কমপ্রেস করা ছবি ডাউনলোড করুন: প্রতিটি কমপ্রেস করা ছবি আলাদা করে ডাউনলোড করুন, অথবা "সব ডাউনলোড করুন (ZIP)"-এ ক্লিক করে পুরো ব্যাচ এক ফাইলে নামিয়ে নিন৤ আপনার ছবি সরাসরি আপনার ব্রাউজারেই কমপ্রেস হয়, তাই অপেক্ষা বা আপলোডের কিছুই নেই৤',
        ],
      },
      {
        heading: 'কেন এই ফ্রি ইমেজ কমপ্রেসর ব্যবহার করবেন?',
        body: 'CompressMyPic একটি ফ্রি ইমেজ কমপ্রেসর — রেজিস্ট্রেশন ছাড়া, ওয়াটারমার্ক ছাড়া — যা দৈনন্দিন ছবি, ওয়েবসাইটের ছবি ও সোশ্যাল মিডিয়া পোস্টের জন্য তৈরি৤',
        bullets: [
          'JPG, PNG, WebP ও HEIC কমপ্রেস করুন: একটাই ইমেজ কমপ্রেসর, আপনার আসলেই ব্যবহৃত ফরম্যাটগুলোর জন্য৤ JPG ও JPEG ছবি কমপ্রেস করুন, স্বচ্ছতা ধরে রেখে PNG গ্রাফিক্স কমপ্রেস করুন, আর সবচেয়ে ছোট ফাইলের জন্য WebP ছবি কমপ্রেস করুন৤',
          'মান না কমিয়ে ছবির সাইজ কমান: স্মার্ট কমপ্রেশন অপ্রয়োজনীয় ডেটা ও মেটাডেটা সরিয়ে দেয়, তবু ছবিটি আসলটির মতোই দেখায়৤ ভারসাম্যপূর্ণ প্রিসেটই শুরুর সেরা জায়গা, আর আগের-পরের তুলনা দিয়ে নিজেই মান যাচাই করতে পারবেন৤',
          'বাল্ক ইমেজ কমপ্রেসর: একসঙ্গে অনেক ছবি কমপ্রেস করুন — এই বাল্ক ইমেজ কমপ্রেসর দিয়ে একই সেটিংসে অনেক ছবি একবারে কমপ্রেস করুন, আর "সব ডাউনলোড করুন (ZIP)" বোতামে একসঙ্গে সব ডাউনলোড করুন, একটা একটা করে সংরক্ষণের বদলে৤',
          'WhatsApp, Instagram ও Facebook-এর জন্য ছবি কমপ্রেস করুন: ছবির সাইজ ছোট করুন, যাতে WhatsApp-এ দ্রুত পাঠানো যায় আর Instagram ও Facebook-এ সহজে আপলোড হয়৤ ছোট ফাইল কম মোবাইল ডেটা খায় আর সাইজ বড় হওয়ার কারণে বাতিল হওয়ার সম্ভাবনাও অনেক কম৤',
          'ছবির সাইজ 20KB, 50KB, 100KB বা 200KB-এ নামান: কোয়ালিটি স্লাইডার ধাপে ধাপে কমান আর আগের-পরের লাইভ সাইজ দেখতে দেখতে লক্ষ্যে পৌঁছান — 200KB, 100KB, 50KB, এমনকি 20KB পর্যন্ত৤ আউটপুট ফরম্যাট WebP-তে বদলালে সাধারণত কম মান হারিয়ে লক্ষ্যে পৌঁছানো যায়৤',
        ],
      },
      {
        heading: 'JPG, PNG ও WebP কমপ্রেস করুন: কোন ফরম্যাটটি বেছে নেবেন?',
        body: 'JPG, PNG ও WebP — তিনটির কাজ আলাদা৤ এদের শক্তির জায়গা জানলে আপনার প্রজেক্টের জন্য সেরা পছন্দটি করতে পারবেন৤\n\nচোখে দেখে পার্থক্য মিলিয়ে নিন: কতটা কমপ্রেশন ঠিক হবে বুঝতে পারছেন না? টুলের আগের-পরের তুলনার সুবিধাটি ব্যবহার করুন৤ আমাদের ইন্টার‌্যাক্টিভ স্লাইডার দিয়ে আসল ছবি ও কমপ্রেস করা ছবি পাশাপাশি দেখে ডাউনলোডের আগেই চোখে পড়া ত্রুটি বা মানের ক্ষতি ধরতে পারবেন৤',
        bullets: [
          'JPG কমপ্রেসর — ফ্রিতে অনলাইনে JPG কমপ্রেস করুন: আপনার ওয়েবসাইট, ব্লগ বা পোর্টফোলিওর ছবির জন্য আদর্শ৤ ফ্রিতে অনলাইনে JPG কমপ্রেস করুন, আর লাইভ সাইজ দেখতে দেখতে কোয়ালিটি স্লাইডার কমিয়ে JPEG 100KB-এ নামান৤ JPEG কমপ্রেশন লসি — এটি স্থায়ীভাবে কিছু ভিজ্যুয়াল ডেটা বাদ দেয়, যা মানুষের চোখে প্রায় ধরা পড়ে না৤ তাই চোখে দেখা মান না কমিয়েই মেগাবাইটের ছবি কিলোবাইটে নামানো যায়৤',
          'PNG কমপ্রেসর — ফ্রিতে অনলাইনে PNG কমপ্রেস করুন: গ্রাফিক্স, স্ক্রিনশট, লোগো ও স্বচ্ছতা দরকার এমন ছবি — যেমন লোগো, আইকন বা ইলাস্ট্রেশন — এর জন্য আদর্শ৤ সম্পূর্ণ স্বচ্ছতা ধরে রেখে এখানে ফ্রিতে অনলাইনে PNG কমপ্রেস করুন, যাতে গ্রাফিক্স প্রতিটি পিক্সেলে ঝকঝকে থাকে৤ PNG-কে WebP-তে কনভার্ট করলে প্রায়ই অনেক ছোট হয়ে যায়৤',
          'WebP ছবি কমপ্রেস করুন — আধুনিক ফরম্যাট: ওয়েব অপটিমাইজেশনের জন্য আদর্শ৤ WebP লসি ও লসলেস — দুই ধরনের চমৎকার কমপ্রেশন দেয়, যা সাধারণত JPEG বা PNG-এর চেয়ে ২৫% থেকে ৩৫% ছোট হয়৤ সবচেয়ে ছোট সাইজে একই মান পেতে WebP ইমেজ ফাইল কমপ্রেস করুন, আর চোখে দেখা মান না কমিয়ে ওয়েব পেজের ছবি অপটিমাইজ করতে চাইলে WebP ব্যবহার করুন৤ বেশিরভাগ ওয়েবসাইটের জন্য এটাই সেরা পছন্দ৤',
        ],
      },
      {
        heading: 'এই ইমেজ কমপ্রেসর দিয়ে কী কী করতে পারবেন?',
        body: 'একটাই ফ্রি ইমেজ কমপ্রেসর দিয়ে ছবির সাইজ ছোট করার সবচেয়ে সাধারণ কারণগুলো মেটানো যায়৤',
        bullets: [
          'ওয়েবের জন্য ছবি অপটিমাইজ করুন: আপনার ওয়েব পেজের ছবি অপটিমাইজ করুন, যাতে দ্রুত লোড হয়, Core Web Vitals ভালো হয় ও র‍্যাঙ্কিং বাড়ে৤ ছোট ছবি মানে দ্রুত পেজ, খুশি ভিজিটর আর কম হোস্টিং ব্যান্ডউইথ৤',
          'ইমেইলে পাঠানোর জন্য ছবি কমপ্রেস করুন: ইমেইলের অ্যাটাচমেন্ট সীমার মধ্যে আনার জন্য ছবি কমপ্রেস করুন৤ ভারী আসল ফাইলের বদলে ছোট ডাউনলোডগুলো অ্যাটাচ করুন, আপনার মেইল বাউন্স না করে পৌঁছে যাবে৤',
          'ওয়েবসাইটের জন্য ছবি কমপ্রেস করুন: আপলোডের আগে আপনার ওয়েবসাইট, ব্লগ, পোর্টফোলিও বা অনলাইন দোকানের ছবি কমপ্রেস করুন৤ প্রোডাক্টের ছবি, ব্যানার ও ব্লগের ছবি ঝকঝকে থাকে, আর সার্ভারে অনেক কম জায়গা নেয়৤',
          'ছবির ফাইল সাইজ কমান: শেয়ার, সংরক্ষণ বা প্রিন্টের আগে ফোন বা ক্যামেরার ছবির ফাইল সাইজ কমান৤ বড় ছবি দ্রুত পাঠানো যায়, সহজে সংরক্ষণ করা যায় আর ঝামেলা ছাড়াই সামলানো যায়৤',
        ],
      },
      {
        heading: 'ছবির সাইজ কেন গুরুত্বপূর্ণ',
        body: 'ক্যামেরা প্রযুক্তির দ্রুত উন্নতির ফলে ছবির ফাইল এখন বড় ও হাই-রেজোলিউশনের — মাত্র কয়েক বছর আগের তুলনায় ২ থেকে ৩ গুণ বড়৤ আপনার ওয়েব পেজের ছবির সাইজ কমিয়ে ওয়েবের জন্য ছবি অপটিমাইজ করলে সাইট দ্রুত লোড হয়, কম ব্যান্ডউইথ খায় আর সার্চ রেজাল্টে ভালো র‍্যাঙ্ক করে৤\n\nভালো কমপ্রেসর খুঁজতে গেলে খেয়াল রাখবেন: ১) যেন মান না কমে, ২) আপনার ডেটা যেন প্রাইভেট থাকে (আপনার ডিভাইসেই প্রসেসিং), ৩) ছবি দ্রুত প্রসেস হয়, দূরের কোনো সার্ভারে ফাইল না পাঠিয়ে৤ CompressMyPic ঠিক এই কাজের জন্যই তৈরি৤',
      },
      {
        heading: 'অপটিমাইজেশনের টিপস: মান না কমিয়ে ছবির সাইজ কমান',
        body: '',
        bullets: [
          'ভারসাম্যপূর্ণ প্রিসেট দিয়ে শুরু করুন: ভারসাম্যপূর্ণ প্রিসেট (৭০% কোয়ালিটি) বেশিরভাগ ছবির জন্য সেরা ভারসাম্য দেয় — অনেক ছোট ফাইল, আর আসলটির সঙ্গে চোখে দেখা মিল প্রায় একই৤',
          'সঠিক ফরম্যাট বেছে নিন: ফটোগ্রাফের জন্য JPG বা WebP সবসময় PNG-এর চেয়ে ছোট ফাইল দেবে৤ স্বচ্ছতাসহ লোগো ও লাইন গ্রাফিক্সের জন্য PNG ব্যবহার করুন৤',
          'টার্গেট সাইজ ঠিক করুন: ওয়েবসাইটে ব্যবহারের জন্য 200 KB-এর নিচের ছবি লক্ষ্য করুন৤ ইমেইল ও মেসেজের জন্য 1 MB-এর নিচে রাখুন, যাতে দ্রুত পৌঁছায়৤ টার্গেট সাইজে পৌঁছাতে কোয়ালিটি স্লাইডার ও লাইভ সাইজ ব্যবহার করুন৤',
          'সঠিক মাত্রাটি খুঁজে নিন: মূল ছবিগুলোর জন্য, যেখানে মান জরুরি, কোয়ালিটি স্লাইডার ৮৫–৯০%-এ রাখুন; সাধারণ ওয়েব ব্যবহারের জন্য ৭০–৮০% প্রায়ই আদর্শ ভারসাম্য; থাম্বনেইল বা সাইজই সবচেয়ে জরুরি হলে ৫০–৬০% ভালো৤',
          'সবচেয়ে ছোট ফাইলের জন্য WebP চেষ্টা করুন: আউটপুট ফরম্যাট WebP-তে বদলালে সাধারণত একই মান রেখে JPG বা PNG আরও ২৫% থেকে ৩৫% ছোট হয় — মান না কমিয়ে ছবির সাইজ কমানোর সহজ উপায়৤',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    subheading:
      'CompressMyPic দিয়ে ফ্রিতে অনলাইনে ছবি কমপ্রেস করার বিষয়ে আপনার যা যা জানা দরকার৤',
    faqs: [
      {
        id: 'faq-1',
        question: 'ফ্রিতে অনলাইনে ছবি কমপ্রেস করব কীভাবে?',
        answer:
          'শুধু আপনার ছবির ফাইলগুলো CompressMyPic-এ টেনে এনে ছাড়ুন, অথবা "ফাইল ব্রাউজ করুন"-এ ক্লিক করুন৤ কমপ্রেশনের একটি প্রিসেট বেছে নিন (নিম্ন, ভারসাম্যপূর্ণ বা উচ্চ) অথবা কোয়ালিটি স্লাইডার ঘোরান, তারপর অপটিমাইজ করা ছবিগুলো সঙ্গে সঙ্গে ডাউনলোড করুন৤ টুলটি ১০০% ফ্রি — রেজিস্ট্রেশন বা সফটওয়্যার ইনস্টলের দরকার নেই৤',
      },
      {
        id: 'faq-2',
        question: 'ছবি 100KB-এ কমপ্রেস করব কীভাবে?',
        answer:
          'CompressMyPic-এ KB-তে সঠিক সাইজ লেখার কোনো ঘর নেই, তাই সরাসরি 100KB লিখতে পারবেন না৤ বরং ছবিটি আপলোড করুন, একটি প্রিসেট বেছে নিন বা কোয়ালিটি স্লাইডার কমান, আর প্রতিটি ছবির জন্য দেখানো আগের-পরের লাইভ সাইজটি লক্ষ্য করুন৤ কমপ্রেস করা সাইজ 100KB-এর কাছাকাছি না আসা পর্যন্ত কোয়ালিটি ঘোরান বা আউটপুট ফরম্যাট WebP-তে বদলান, তারপর ডাউনলোড করুন৤',
      },
      {
        id: 'faq-3',
        question: 'মান না কমিয়ে ছবির সাইজ কমাব কীভাবে?',
        answer:
          'ভারসাম্যপূর্ণ প্রিসেট (প্রায় ৭০% কোয়ালিটি) অথবা ৮৫–৯০% উচ্চ কোয়ালিটি বেছে নিন — এতে অপ্রয়োজনীয় ডেটা ও মেটাডেটা বাদ যায়, তবু ছবিটি আসলটির মতোই দেখায়৤ ফলাফল যাচাই করতে আগের-পরের ইন্টার‌্যাক্টিভ তুলনা ব্যবহার করুন, আর আসল ফরম্যাট রাখুন অথবা মান ও সাইজের সেরা ভারসাম্যের জন্য WebP বেছে নিন৤',
      },
      {
        id: 'faq-4',
        question: 'JPEG 100KB-এ কমপ্রেস করব কীভাবে?',
        answer:
          'JPEG ফাইলের সাইজ কমাতে আপনার JPEG আপলোড করুন, আউটপুট ফরম্যাট হিসেবে JPEG বেছে নিন, আর লাইভ কমপ্রেসড সাইজ দেখতে দেখতে কোয়ালিটি স্লাইডার ধাপে ধাপে কমান৤ KB-তে সঠিক সাইজ লেখার ঘর না থাকায়, ফাইল 100KB-এর কাছাকাছি এলে থামতে আগের-পরের সাইজ ভিউটি ব্যবহার করুন৤',
      },
      {
        id: 'faq-5',
        question: 'ছবির সাইজ 20KB, 50KB বা 200KB-এ নামাব কীভাবে?',
        answer:
          'ছবিটি আপলোড করুন, আর প্রতিবার বদলের পর আগের-পরের লাইভ সাইজ দেখতে দেখতে কোয়ালিটি স্লাইডার একটু একটু করে কমান, যতক্ষণ না লক্ষ্যে পৌঁছান — 200KB, 50KB বা 20KB৤ 20KB-এর মতো ছোট লক্ষ্যে সাধারণত কম কোয়ালিটি ও WebP আউটপুট লাগে৤ একই পদ্ধতি যেকোনো লক্ষ্যের জন্য কাজ করে, 500KB-সহ, আর সাইজ সবসময় KB-তে দেখানো হয়, যাতে আপনি ঠিক বুঝতে পারেন ছবির সাইজ KB-তে কতটা কমল৤',
      },
      {
        id: 'faq-6',
        question: 'ফ্রিতে অনলাইনে PNG কমপ্রেস করব কীভাবে?',
        answer:
          'আপনার PNG CompressMyPic-এ আপলোড করুন, একটি প্রিসেট বেছে নিন বা কোয়ালিটি স্লাইডার ঘোরান — এখানে অনলাইনে PNG কমপ্রেস করা ফ্রি, রেজিস্ট্রেশন ছাড়া৤ PNG ও WebP আউটপুটে স্বচ্ছতা ধরে রাখা হয়, আর PNG-কে WebP-তে কনভার্ট করলে প্রায়ই অনেক ছোট হয়ে যায়৤',
      },
      {
        id: 'faq-7',
        question: 'কোন কোন ইমেজ ফরম্যাট সাপোর্ট করে?',
        answer:
          'CompressMyPic JPG (JPEG), PNG, WebP ও HEIC সাপোর্ট করে — iPhone-এ তোলা ছবিসহ, যেগুলো ডিফল্টভাবে HEIC-এ সংরক্ষিত হয়৤ আসল ফরম্যাট রাখতে পারেন বা এক ফরম্যাট থেকে আরেক ফরম্যাটে কনভার্ট করতে পারেন; যেমন JPG ফাইল JPEG হিসেবে কমপ্রেস করা, স্বচ্ছতা ধরে রেখে PNG ফাইল কমপ্রেস করা, অথবা সবচেয়ে ছোট ফাইলের জন্য WebP-তে কনভার্ট করা৤',
      },
      {
        id: 'faq-8',
        question: 'একসঙ্গে অনেক ছবি কমপ্রেস করতে পারব?',
        answer:
          'হ্যাঁ৤ এই বাল্ক ইমেজ কমপ্রেসর দিয়ে একসঙ্গে কয়েক ডজন ছবি আপলোড করতে পারবেন, একই সেটিংসে অনেক ছবি একবারে কমপ্রেস করতে পারবেন, আর "সব ডাউনলোড করুন (ZIP)" বোতামে সব একসঙ্গে ডাউনলোড করতে পারবেন — অথবা প্রতিটি আলাদা করেও ডাউনলোড করতে পারবেন৤',
      },
      {
        id: 'faq-9',
        question: 'WhatsApp-এর জন্য ছবি কমপ্রেস করব কীভাবে?',
        answer:
          'আপনার ছবি আপলোড করুন, কম কোয়ালিটির প্রিসেট বা WebP আউটপুট বেছে নিন, আর WhatsApp-এ শেয়ার করার আগে ছোট ফাইলটি ডাউনলোড করুন৤ ছোট ছবি দ্রুত পাঠানো যায়, কম মোবাইল ডেটা খায়, আর সাইজ বড় হওয়ার কারণে বাতিল হওয়ার সম্ভাবনাও কম৤',
      },
      {
        id: 'faq-10',
        question: 'Instagram বা Facebook-এর জন্য ছবি কমপ্রেস করব কীভাবে?',
        answer:
          'Instagram বা Facebook-এর জন্য ছবি কমপ্রেস করতে এখানে আপলোড করুন, ভারসাম্যপূর্ণ প্রিসেট বেছে নিন, আর ছোট JPG বা WebP ফাইলটি ডাউনলোড করুন৤ ছোট ফাইল দ্রুত আপলোড হয়, আর পোস্ট, স্টোরি ও প্রোফাইল ছবির জন্য যথেষ্ট মান ধরে রাখে৤',
      },
      {
        id: 'faq-11',
        question: 'ইমেইলে পাঠানোর জন্য ছবি কমপ্রেস করতে পারব?',
        answer:
          'হ্যাঁ৤ ইমেইলে পাঠানোর জন্য ছবি কমপ্রেস করতে কোয়ালিটি স্লাইডার দিয়ে সাইজ কমান, যতক্ষণ না প্রতিটি ফাইল আপনার ইমেইল সেবার অ্যাটাচমেন্ট সীমার মধ্যে আসে, তারপর ভারী আসল ফাইলের বদলে ডাউনলোড করা ফাইলগুলো মেসেজে অ্যাটাচ করুন৤',
      },
      {
        id: 'faq-12',
        question: 'CompressMyPic কি সত্যিই ফ্রি?',
        answer:
          'হ্যাঁ, CompressMyPic সম্পূর্ণ ফ্রি৤ কোনো চার্জ নেই, কোনো পেইড প্ল্যান নেই, কোনো ক্রেডিট নেই, আর কতগুলো ছবি কমপ্রেস করতে পারবেন তার কোনো সীমা নেই৤',
      },
      {
        id: 'faq-13',
        question: 'CompressMyPic কি ওয়াটারমার্ক যোগ করে?',
        answer:
          'না৤ CompressMyPic ওয়াটারমার্ক ছাড়া ফ্রি ইমেজ কমপ্রেসর — আপনার কমপ্রেস করা ছবিগুলো পরিষ্কার থাকে, কোনো লোগো, টেক্সট বা চিহ্ন যোগ করা হয় না৤',
      },
      {
        id: 'faq-14',
        question: 'CompressMyPic ব্যবহার করতে কি রেজিস্ট্রেশন লাগে?',
        answer:
          'না৤ এটি রেজিস্ট্রেশন ছাড়া ফ্রি ইমেজ কমপ্রেসর — অ্যাকাউন্ট, ইমেইল বা পাসওয়ার্ড কিছুই লাগে না৤ শুধু সাইটটি খুলুন আর কমপ্রেস শুরু করুন৤',
      },
      {
        id: 'faq-15',
        question: 'আমার ছবি কি কোনো সার্ভারে আপলোড হয়?',
        answer:
          'না৤ পুরো কমপ্রেশন আপনার নিজের ডিভাইসে, আপনার ওয়েব ব্রাউজারের ভেতরে হয়, তাই আপনার ছবি কখনো কোনো সার্ভারে আপলোড হয় না, আর অন্য কেউ সেগুলো সংরক্ষণ বা দেখতেও পারে না৤ ছবিগুলো আপনার ব্রাউজারের মেমরিতে থাকে, আর ট্যাব রিফ্রেশ বা বন্ধ করলে মুছে যায়৤',
      },
      {
        id: 'faq-16',
        question: 'ফাইল সাইজের কোনো সীমা আছে?',
        answer:
          'হ্যাঁ, প্রতি ছবি 20 MB সীমা — এতে হাই-রেজোলিউশন ক্যামেরার ছবি ও বড় স্ক্রিনশটও চলে৤ প্রসেসিং আপনার ডিভাইসেই হয় বলে বড় ফাইলেও কমপ্রেশন দ্রুত থাকে৤',
      },
      {
        id: 'faq-17',
        question: 'ছবি কমপ্রেস করলে কি এর ডাইমেনশন বদলে যায়?',
        answer:
          'না৤ CompressMyPic আপনার ছবির ডাইমেনশন একই রাখে — শুধু ফাইলের সাইজ কমে৤ আপনার ছবির প্রস্থ, উচ্চতা ও অনুপাত আসলটির মতোই থাকে৤',
      },
      {
        id: 'faq-18',
        question: 'মোবাইলে ছবি কমপ্রেস করতে পারব?',
        answer:
          'হ্যাঁ৤ CompressMyPic iOS ও Android-এর মোবাইল ব্রাউজারে চলে, তাই গ্যালারি থেকে ছবি বেছে নিয়ে বা নতুন ছবি তুলে এখানে আপলোড করে ফোনেই ছবি কমপ্রেস করতে পারবেন৤',
      },
      {
        id: 'faq-19',
        question: 'কোয়ালিটি স্লাইডার কীভাবে কাজ করে?',
        answer:
          'কোয়ালিটি স্লাইডার দিয়ে কমপ্রেশনের মান ১০% থেকে ১০০% পর্যন্ত ঠিক করতে পারবেন৤ বেশি মান বেশি ডিটেইল ধরে রাখে আর বড় ফাইল দেয়, কম মান ফাইল অনেক ছোট করে৤ নিম্ন, ভারসাম্যপূর্ণ ও উচ্চ প্রিসেট আপনার হয়ে স্লাইডার ঠিক করে দেয়, আর আগের-পরের লাইভ সাইজ প্রতিটি বদলের ফলাফল দেখায়৤',
      },
      {
        id: 'faq-20',
        question: 'আউটপুট ফরম্যাট কীভাবে বেছে নেব?',
        answer:
          'ছবি আপলোড করার পর বেছে নিন আসল ফরম্যাট রাখবেন নাকি JPG, PNG বা WebP-তে কনভার্ট করবেন৤ ওয়েব পেজের ছবি অপটিমাইজ করার জন্য WebP সাধারণত সেরা পছন্দ, কারণ একই মান রেখে এটি JPEG-এর চেয়ে ২৫% থেকে ৩৫% ছোট হয়; আর স্বচ্ছতা দরকার হলে PNG ভালো৤',
      },
    ],
  },
  guidesSection: {
    heading: 'গাইড',
    subheading:
      'চোখে দেখা মান না কমিয়ে ছোট ফাইল পাওয়ার ধাপে ধাপে গাইড৤',
    cards: [
      {
        title: 'মান না কমিয়ে WhatsApp-এর জন্য ছবি কমপ্রেস করবেন কীভাবে',
        desc: 'পাঠানোর আগে ছবির সাইজ কমান, যাতে ঝকঝকে থাকে আর দ্রুত পাঠানো যায়৤',
        cta: 'গাইডটি পড়ুন →',
      },
      {
        title: 'JPG বনাম PNG বনাম WebP: কোন ফরম্যাটটি ব্যবহার করবেন?',
        desc: 'ফাইলের সাইজ, মান ও স্বচ্ছতার তুলনা — যাতে সঠিক ফরম্যাটটি বেছে নিতে পারেন৤',
        cta: 'গাইডটি পড়ুন →',
      },
      {
        title: 'ওয়েব ও ইমেইলের জন্য ছবির সাইজ 100KB-এ নামাবেন কীভাবে',
        desc: 'ধাপে ধাপে: চোখে দেখা মান না কমিয়ে 100KB-এ পৌঁছান৤',
        cta: 'গাইডটি পড়ুন →',
      },
    ],
  },
  blog: {
    blog: 'ব্লগ',
    homeHeading: 'ইমেজ গাইড, টিউটোরিয়াল ও রিসোর্স',
    homeSubheading:
      'ছবি কমপ্রেস, রিসাইজ, কনভার্ট ও এডিট করার ব্যবহারিক গাইড — বাস্তব কাজের জন্য লেখা, সার্চ ইঞ্জিনের জন্য নয়৤',
    searchPlaceholder: 'গাইড খুঁজুন…',
    searchNoResults: '“{query}” এর জন্য কোনো গাইড পাওয়া যায়নি৤',
    featuredHeading: 'বিশেষ গাইড',
    latestHeading: 'সাম্প্রতিক গাইড ({count})',
    categoriesHeading: 'ক্যাটাগরি অনুযায়ী দেখুন',
    emptyHeading: 'এখনো কোনো গাইড নেই',
    emptyText:
      'এই বিভাগের প্রথম গাইডগুলো আমরা লিখছি৤ শীঘ্রই আবার আসুন — অথবা ফ্রি টুলগুলোর একটি চেষ্টা করুন৤',
    readArticle: 'গাইডটি পড়ুন →',
    minRead: '{minutes} মিনিটের পড়া',
    publishedOn: 'প্রকাশিত: {date}',
    updatedOn: 'আপডেট: {date}',
    bylineAuthor: 'CompressMyPic এডিটোরিয়াল টিম',
    tableOfContents: 'এই পাতায়',
    faqHeading: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    relatedArticlesHeading: 'সম্পর্কিত গাইড',
    relatedToolsHeading: 'টুলটি চেষ্টা করুন',
    tryToolCta: '{tool} চেষ্টা করুন — ফ্রি, রেজিস্ট্রেশন ছাড়া',
    prevArticle: '← আগের গাইড',
    nextArticle: 'পরের গাইড →',
    backToBlog: '← ব্লগে ফিরুন',
    shareHeading: 'এই গাইডটি শেয়ার করুন',
    copyLink: 'লিংক কপি করুন',
    copied: 'কপি হয়েছে!',
    shareOnX: 'X-এ শেয়ার করুন',
    shareOnFacebook: 'Facebook-এ শেয়ার করুন',
    shareOnWhatsApp: 'WhatsApp-এ শেয়ার করুন',
    notAvailableHeading: 'এই গাইডটি এখনো আপনার ভাষায় পাওয়া যাচ্ছে না',
    notAvailableText:
      'আমরা এখনো এই গাইডটি অনুবাদ করছি৤ আপনি ইংরেজিতে পড়তে পারেন, অথবা আপনার ভাষায় ইতিমধ্যে পাওয়া গাইডগুলো দেখতে পারেন৤',
    viewBlogHome: 'ব্লগটি দেখুন',
    guidesHeading: 'আমাদের ধাপে ধাপে গাইড',
    categoryGuidesHeading: 'গাইড: {category}',
    relatedArticlesForTool: 'সম্পর্কিত গাইড: {tool}',
  },
  shareSection: {
    heading: 'বন্ধুদের সঙ্গে CompressMyPic শেয়ার করুন',
    text: 'এই টুলটি কি আপনার কাজে লেগেছে? বন্ধুকেও ছবি কমপ্রেস করতে সাহায্য করুন — মাত্র এক ট্যাপের কাজ৤',
    shareText:
      'ফ্রিতে অনলাইনে ছবি কমপ্রেস করুন — রেজিস্ট্রেশন ছাড়া, ওয়াটারমার্ক ছাড়া৤ CompressMyPic চেষ্টা করুন:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: '{name}-এ শেয়ার করুন',
    copyLink: 'লিংক কপি করুন',
    copied: 'কপি হয়েছে!',
    share: 'শেয়ার করুন',
    emailSubject: 'ফ্রি ইমেজ কমপ্রেসর – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – ফ্রি ইমেজ কমপ্রেসর', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'হোম',
    privacyPill: 'ব্রাউজারে ১০০% প্রাইভেট প্রসেসিং · ফাইল কখনো আপনার ডিভাইস ছাড়ে না',
    noUploads: 'সার্ভারে কোনো আপলোড নয়',
    freeNote: 'ফ্রি · রেজিস্ট্রেশন ছাড়া · ওয়াটারমার্ক ছাড়া',
    howToTitle: '{name} ব্যবহার করবেন কীভাবে',
    howToIntro:
      'সরাসরি আপনার ব্রাউজারে কাজটি শেষ করতে এই সহজ ধাপগুলো অনুসরণ করুন৤',
    featuresTitle: 'CompressMyPic-এর {name} কেন ব্যবহার করবেন?',
    faqTitle: '{name} — প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    relatedTitle: 'সম্পর্কিত ফ্রি ইমেজ টুলস',
    relatedLinksIntro: 'আপনার আরও যা লাগতে পারে:',
    shareHeading: 'এই টুলটি শেয়ার করুন',
    shareCopyLink: 'লিংক কপি করুন',
    shareCopied: 'কপি হয়েছে!',
    shareOnX: 'X-এ শেয়ার করুন',
    shareOnFacebook: 'Facebook-এ শেয়ার করুন',
    shareOnWhatsApp: 'WhatsApp-এ শেয়ার করুন',
    commentsTitle: 'মন্তব্য',
    commentsNote: 'এই টুলটি সম্পর্কে আপনার মতামত জানান: শুধু নাম লিখে পোস্ট করুন৤ অ্যাকাউন্টের দরকার নেই৤',
    commentsNamePlaceholder: 'আপনার নাম',
    commentsTextPlaceholder: 'আপনার মন্তব্য লিখুন…',
    commentsSubmit: 'মন্তব্য পোস্ট করুন',
    commentsPosting: 'পোস্ট হচ্ছে…',
    commentsEmpty: 'প্রথম মন্তব্য করুন৤',
    commentsPosted: 'ধন্যবাদ! আপনার মন্তব্য প্রকাশিত হয়েছে৤',
    commentsLoadError: 'মন্তব্য লোড করা যায়নি৤ আবার চেষ্টা করুন৤',
    commentsPostError: 'আপনার মন্তব্য পোস্ট করা যায়নি৤ আবার চেষ্টা করুন৤',
    commentsRetry: 'আবার চেষ্টা করুন',
    commentsLoading: 'মন্তব্য লোড হচ্ছে…',
  },
  uploadZone: {
    dropText: 'আপনার ছবিগুলো এখানে টেনে এনে ছাড়ুন',
    browseButton: 'ফাইল ব্রাউজ করুন',
    browsePrefix: 'অথবা',
    browseSuffix: 'আপনার কম্পিউটার বা ফোন থেকে',
    orPaste: 'পেস্টও করা যায় (Ctrl+V)',
    hint: 'প্রতি ছবি সর্বোচ্চ {max} MB',
    errorTooBig: '"{name}" সর্বোচ্চ {max} MB সীমা ছাড়িয়ে গেছে৤',
    errorBadType: '"{name}" সাপোর্টেড ফরম্যাটে নেই ({formats})৤',
    errorUnreadable: '"{name}" একটি খালি ফাইল (0 বাইট)৤',
    errorMore: '(আরও {count}টি ত্রুটি)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'ছবি আপলোডের জায়গা৤ টেনে এনে ছাড়ুন অথবা ক্লিক করে ফাইল ব্রাউজ করুন৤', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'মানের চাক্ষুষ তুলনা',
    beforeLabel: 'আসল (আগে)',
    afterLabel: 'কমপ্রেস করা (পরে)',
    closeLabel: 'তুলনা ভিউ বন্ধ করুন',
    instruction: 'প্রতিটি পিক্সেলের মান যাচাই করতে স্লাইডারটি বামে বা ডানে টানুন৤',
    sliderLabel: 'স্লাইডার',
    sideBySideLabel: 'পাশাপাশি',
    zoomInLabel: 'জুম ইন',
    zoomOutLabel: 'জুম আউট',
    originalLabel: 'আসল:',
    outputLabel: 'ফলাফল:',
    reductionLabel: 'কমেছে:',
    sizeChangeLabel: 'সাইজের পরিবর্তন:',
    qualityLabel: 'কোয়ালিটি সেটিং:',
    formatLabel: 'ফরম্যাট:',
    modalAriaLabel: 'ছবি তুলনার উইন্ডো', // 'Image comparison modal'
    altCompressed: '{name}-এর কমপ্রেস করা সংস্করণ', // 'Compressed version of {name}'
    altOriginal: '{name}-এর আসল সংস্করণ', // 'Original version of {name}'
    altProcessed: '{name}-এর প্রসেস করা সংস্করণ', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'ফ্রি ইমেজ কমপ্রেসর – অনলাইনে ছবি কমপ্রেস করুন',
    seoDescription: 'ফ্রিতে অনলাইনে ছবি কমপ্রেস করুন আর মান না কমিয়ে JPG, PNG ও WebP-এর সাইজ ছোট করুন৤ রেজিস্ট্রেশন বা ওয়াটারমার্ক ছাড়া — আপনার ছবি কখনো ব্রাউজার ছাড়ে না৤',
    h1: 'ফ্রি ইমেজ কমপ্রেসর – অনলাইনে ছবি কমপ্রেস করুন',
    subtitle: 'JPG, PNG, WebP ও HEIC ফাইলের সাইজ সরাসরি আপনার ব্রাউজারেই ছোট করুন৤',
  },
  categories: {
    compress: 'কমপ্রেস',
    resize: 'রিসাইজ',
    convert: 'কনভার্ট',
    'crop-edit': 'ক্রপ ও এডিট',
    create: 'তৈরি করুন',
    privacy: 'প্রাইভেসি টুলস',
    developer: 'ডেভেলপার টুলস',
  },
  compressionControls: {
    modeLabel: 'কমপ্রেশন মোড', // 'Compression Mode'
    presetLow: 'কম কমপ্রেশন (85%)', // 'Low Compression (85%)'
    presetBalanced: 'ভারসাম্যপূর্ণ (70%)', // 'Balanced (70%)'
    presetHigh: 'বেশি কমপ্রেশন (50%)', // 'High Compression (50%)'
    presetCustom: 'কাস্টম', // 'Custom'
    formatLabel: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original'
    qualityLabel: 'কাঙ্ক্ষিত কোয়ালিটি:', // 'Quality Target:'
    qualityHigh: 'উচ্চ ফিডেলিটি', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'ওয়েবের জন্য আদর্শ ভারসাম্য', // 'Optimal Web Balance' (60–79)
    qualityMax: 'সর্বোচ্চ জায়গা সাশ্রয়', // 'Max Space Savings' (< 60)
    qualityAriaLabel: '১০ থেকে ১০০ শতাংশের কোয়ালিটি স্লাইডার', // 'Quality slider from 10 to 100 percent'
    compressAll: 'সব আবার কমপ্রেস করুন', // 'Re-compress All'
    compressing: 'কমপ্রেস হচ্ছে…', // 'Compressing...'
    clearAll: 'সব মুছুন', // 'Clear All'
    clearAllTitle: 'সব ছবি মুছুন', // 'Clear all images'
    transparencyTitle: 'JPEG-তে কনভার্ট করলে স্বচ্ছতা নিয়ে সতর্কতা', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'JPEG ফরম্যাট স্বচ্ছতা (আলফা চ্যানেল) সাপোর্ট করে না৤ স্বচ্ছ ব্যাকগ্রাউন্ডের জায়গায় শক্ত রং (ডিফল্ট সাদা) বসে যাবে৤ স্বচ্ছ ব্যাকগ্রাউন্ড ধরে রাখতে PNG বা WebP বেছে নিন৤',
    pngTip:
      'PNG লসলেস ফরম্যাট, তাই কোয়ালিটি স্লাইডারকে এটি উপেক্ষা করে — PNG আবার এনকোড করলে কখনো কখনো আসল সাইজের সমান বা বড়ও হতে পারে৤ ছবির মতো PNG-এর জন্য WebP বা JPG বেছে নিলে সাধারণত ৫০% থেকে ৮০% ছোট ফাইল পাওয়া যায়৤',
  },
  resultsList: {
    summary: 'কমপ্রেশনের সারাংশ', // 'Compression Summary'
    image: 'ছবি', // 'Image' (count === 1)
    images: 'ছবি', // 'Images' (count !== 1)
    totalOriginal: 'মোট আসল:', // 'Total Original:'
    totalCompressed: 'মোট কমপ্রেসড:', // 'Total Compressed:'
    totalSaved: 'মোট সাশ্রয়:', // 'Total Saved:'
    processing: 'প্রসেস হচ্ছে…', // 'Processing...'
    grewBy: '(বেড়েছে {bytes})', // '(grew by {bytes})'
    reduction: 'কমেছে:', // 'Reduction:'
    sizeChange: 'সাইজের পরিবর্তন:', // 'Size Change:'
    downloadAll: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP তৈরি হচ্ছে ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'তুলনা করুন', // 'Compare'
    compareTitle: 'মানের চাক্ষুষ তুলনা দেখতে ক্লিক করুন', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'আগে ও পরের তুলনা করুন', // 'Compare visual before/after'
    download: 'ডাউনলোড', // 'Download'
    retry: 'আবার চেষ্টা করুন', // 'Retry'
    removeTitle: 'ছবি সরান', // 'Remove image'
    removeAriaLabel: '{name} সরান', // 'Remove {name}'
    keptOriginal: 'আসলটি রাখা হয়েছে (আবার এনকোড করলে বড় হচ্ছিল)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'বেড়েছে {bytes}: আবার এনকোড করলে আসলটির চেয়ে বড় হয়', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'সফলভাবে কমপ্রেস হয়েছে', // 'Compressed successfully'
    optimizing: 'পিক্সেল অপটিমাইজ হচ্ছে…', // 'Optimizing pixels...'
    compressionError: 'কমপ্রেশন ত্রুটি', // 'Compression error'
    original: 'আসল', // 'Original' (metric label)
    compressed: 'কমপ্রেসড', // 'Compressed' (metric label)
    output: 'আউটপুট', // 'Output' (metric label when original kept)
    spaceSaved: 'জায়গা সাশ্রয়', // 'Space Saved'
    formatLabel: 'ফরম্যাট:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'আলফা', // 'Alpha' badge
    largerTitle: 'আউটপুট আসলটির চেয়ে {bytes} বড়৤', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'লসলেস PNG আবার এনকোড করলে কোয়ালিটি স্লাইডার উপেক্ষিত হয়; ছবির মতো PNG-এর জন্য WebP বা JPG সাধারণত অনেক ছোট হয়৤',
    largerNote:
      'এই ছবিটি বেছে নেওয়া কোয়ালিটির জন্য ইতিমধ্যেই বেশ কমপ্রেস করা ছিল৤',
    keepOriginal: 'আসলটি রাখুন', // 'Keep original'
  },
} as const;

export const TOOL_UI_BN = {
  '/image-resizer': {
    comparisonTitlePrefix: 'সাইজের তুলনা', // 'Resize Comparison'
    comparisonAfterLabel: 'রিসাইজ করা (পরে)', // 'Resized (After)'
    presetInstagramPost: 'Instagram পোস্ট (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Instagram স্টোরি (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'YouTube থাম্বনেইল (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Facebook কভার (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'X হেডার (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'ছবি রিসাইজ করা যায়নি৤', // 'Resize failed.'
    errorCorruptedFile: 'ছবির ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image file.'
    resizeMode: 'রিসাইজ মোড', // 'Resize Mode'
    modeByPixels: 'পিক্সেল দিয়ে (প্রস্থ × উচ্চতা)', // 'By Pixels (W × H)'
    modeByPercentage: 'শতাংশ দিয়ে (%)', // 'By Percentage (%)'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'প্রস্থ (px)', // 'Width (px)'
    heightLabel: 'উচ্চতা (px)', // 'Height (px)'
    placeholderAuto: 'অটো', // placeholder 'Auto'
    aspectRatioLocked: 'অনুপাত লক করা', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'আনলক (কাস্টম)', // 'Unlocked (Custom)'
    fitModeLabel: 'ফিট মোড:', // 'Fit Mode:'
    fitContain: 'কনটেইন (ক্রপ ছাড়া)', // 'Contain (No Crop)'
    fitCover: 'কভার (মাঝখান থেকে ক্রপ)', // 'Cover (Center Crop)'
    fitStretchExact: 'ঠিকমতো টেনে বসান', // 'Stretch Exact'
    quickPresets: 'সোশ্যাল ও ওয়েবের জন্য দ্রুত প্রিসেট', // 'Quick Social & Web Presets'
    scalePercentage: 'স্কেলের শতাংশ:', // 'Scale Percentage:'
    outputQuality: 'আউটপুট কোয়ালিটি:', // 'Output Quality:'
    matteBg: 'ম্যাট ব্যাকগ্রাউন্ড:', // 'Matte BG:'
    resizing: 'রিসাইজ হচ্ছে…', // 'Resizing...'
    resizeAll: 'সব রিসাইজ করুন ({count})', // 'Resize All ({count})'
    clear: 'মুছুন', // 'Clear'
    batchReady: 'ব্যাচ প্রস্তুত', // 'Batch Ready'
    batchReadySingular: '{count}টি রিসাইজ করা ছবি ডাউনলোডের জন্য প্রস্তুত', // '{count} resized image ready to download'
    batchReadyPlural: '{count}টি রিসাইজ করা ছবি ডাউনলোডের জন্য প্রস্তুত', // '{count} resized images ready to download'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'রিসাইজ হয়েছে ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} মুছুন', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'ফরম্যাট কনভার্সনের তুলনা', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'কনভার্ট করা (পরে)', // 'Converted (After)'
    errorConversionFailed: 'ছবি কনভার্ট করা যায়নি৤', // 'Conversion failed.'
    errorUnsupportedFile: 'সাপোর্টেড নয় এমন বা নষ্ট ছবির ফাইল৤', // 'Unsupported or corrupted image file.'
    convertToFormat: 'কোন ফরম্যাটে কনভার্ট করবেন', // 'Convert To Format'
    formatWebp: 'WebP (ওয়েবের জন্য সবচেয়ে হালকা)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (সর্বত্র চলে)', // 'JPG (Universal)'
    formatPng: 'PNG (লসলেস ও স্বচ্ছতাসহ)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'স্বচ্ছতার ফিল কালার', // 'Transparency Fill Color'
    quality: 'কোয়ালিটি', // 'Quality'
    qualityLosslessPng: 'লসলেস PNG', // 'Lossless PNG'
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    convertAll: 'সব কনভার্ট করুন ({count})', // 'Convert All ({count})'
    clear: 'মুছুন', // 'Clear'
    conversionComplete: 'কনভার্সন সম্পন্ন', // 'Conversion Complete'
    filesConverted: '{count}টি ফাইল {format}-এ কনভার্ট হয়েছে', // '{count} files converted to {format}'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    convertedStatus: '{ext}-এ কনভার্ট হয়েছে', // 'Converted to {ext}'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} মুছুন', // aria-label `Remove ${item.name}`
  },
  '/image-cropper': {
    uploadTitle: 'ইন্টার‌্যাক্টিভভাবে ক্রপ করতে ছবি ছাড়ুন', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorCanvasContext: 'ক্যানভাস কনটেক্সট চালু করা যায়নি৤', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'ক্রপ এক্সপোর্ট করা যায়নি৤', // 'Crop export failed.'
    aspectFree: 'মুক্ত', // aspect preset 'Free'
    selection: 'নির্বাচন:', // 'Selection:'
    zoomOut: 'জুম আউট', // aria-label 'Zoom out'
    zoomIn: 'জুম ইন', // aria-label 'Zoom in'
    removeImage: 'ছবি সরান', // aria-label 'Remove image'
    cropSourceAlt: 'ক্রপের মূল ছবি', // alt 'Crop source'
    originalLabel: 'আসল:', // 'Original:'
    cropOptions: 'ক্রপ অপশন', // 'Crop Options'
    selectFull: 'পুরোটা নির্বাচন করুন', // 'Select Full'
    aspectRatioPreset: 'অনুপাত প্রিসেট', // 'Aspect Ratio Preset'
    cropWidth: 'ক্রপের প্রস্থ', // 'Crop Width'
    cropHeight: 'ক্রপের উচ্চতা', // 'Crop Height'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'কোয়ালিটি', // 'Quality'
    cropping: 'ক্রপ হচ্ছে…', // 'Cropping...'
    cropAndDownload: 'ক্রপ করে ডাউনলোড করুন', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'টেক্সট বা লোগো ওয়াটারমার্ক দিতে ছবি ছাড়ুন', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorUnableToLoadLogo: 'লোগোর ছবিটি লোড করা যায়নি৤', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'ওয়াটারমার্কসহ ছবি এক্সপোর্ট করা যায়নি৤', // 'Watermark export failed.'
    fallbackWatermarkText: 'ওয়াটারমার্ক', // canvas fallback text 'Watermark'
    tiledPreview: 'টাইল প্রিভিউ', // 'Tiled Preview'
    dragToPosition: 'বসাতে ছবির ওপর টেনে নিন', // 'Drag on Image to Position'
    changeImage: 'ছবি বদলান', // 'Change Image'
    watermarkType: 'ওয়াটারমার্কের ধরন', // 'Watermark Type'
    modeText: 'টেক্সট ওয়াটারমার্ক', // 'Text Watermark'
    modeLogo: 'লোগো ছবি', // 'Logo Image'
    watermarkTextLabel: 'ওয়াটারমার্কের টেক্সট', // 'Watermark Text'
    placeholderBrand: '© আপনার ব্র্যান্ড', // placeholder '© Your Brand'
    textColor: 'টেক্সটের রং', // 'Text Color'
    size: 'সাইজ', // 'Size'
    uploadLogo: 'লোগো আপলোড করুন (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'লোগোর ছবি বদলান', // 'Change Logo Image'
    logoWidth: 'লোগোর প্রস্থ', // 'Logo Width'
    opacity: 'অস্বচ্ছতা', // 'Opacity'
    rotation: 'ঘূর্ণন', // 'Rotation'
    tiledRepeatPattern: 'টাইলে পুনরাবৃত্ত প্যাটার্ন', // 'Tiled Repeat Pattern'
    tileSpacing: 'টাইলের ফাঁক', // 'Tile Spacing'
    anchorPresets: 'নির্ধারিত অবস্থান (অথবা ছবির ওপর টানুন)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'আসল', // 'Orig' — same abbreviation in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'কোয়ালিটি', // 'Quality'
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadWatermarked: 'ওয়াটারমার্কসহ ছবি ডাউনলোড করুন', // 'Download Watermarked Image'
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'দ্রুত ঘোরান ও উল্টান', // 'Quick Rotate & Flip'
    rotate90Left: 'বামে ৯০° ঘোরান', // 'Rotate 90° Left'
    rotate90Right: 'ডানে ৯০° ঘোরান', // 'Rotate 90° Right'
    rotate180: '১৮০°', // '180°'
    flipHorizontal: 'আনুভূমিকভাবে উল্টান', // 'Flip Horizontal'
    flipVertical: 'উল্লম্বভাবে উল্টান', // 'Flip Vertical'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'ঘূর্ণনের কোণ:', // 'Rotation Angle:'
    resetTo0: '০°-এ ফেরত নিন', // 'Reset to 0°'
    applyAngle: 'কোণ প্রয়োগ করুন', // 'Apply Angle'
    clear: 'মুছুন', // 'Clear'
    batchReady: 'ব্যাচ প্রস্তুত', // 'Batch Ready'
    transformedImagesReady: '{count}টি রূপান্তরিত ছবি প্রস্তুত', // '{count} transformed images ready'
    creatingZip: 'ZIP তৈরি হচ্ছে...', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: '{angle}° ঘোরানো', // 'Rotated {angle}°'
    flippedH: ' · আনুভূমিকভাবে উল্টানো', // ' · Flipped H'
    flippedV: ' · উল্লম্বভাবে উল্টানো', // ' · Flipped V'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeItem: '{name} সরান', // 'Remove {name}' (aria-label)
    transformFailed: 'ছবি রূপান্তর করতে ব্যর্থ৤', // 'Transform failed.'
    corruptedImage: 'ছবিটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'ঘোরানো ও উল্টানোর তুলনা', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'এডিট করা (পরে)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'PDF-এ একত্র করতে ছবি ছাড়ুন', // 'Drop images to combine into PDF'
    couldNotRead: '"{filename}" পড়া যায়নি৤ এটি একটি বৈধ ছবি কিনা নিশ্চিত করুন৤', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'PDF তৈরি করা যায়নি৤', // 'PDF generation failed.'
    encodingPage: '{total}টির মধ্যে {current} নম্বর পেজ এনকোড হচ্ছে...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'PDF তৈরি হচ্ছে...', // 'Generating PDF...'
    pageSize: 'পেজের সাইজ', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 মিমি)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'ইউএস লেটার (৮.৫ × ১১ ইঞ্চি)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'ছবির সাইজ অনুযায়ী বসান', // 'Fit to Image Size'
    orientation: 'অভিমুখ', // 'Orientation'
    orientationAuto: 'অটো (ছবি অনুযায়ী)', // 'Auto (Match Photo)'
    orientationPortrait: 'পোর্ট্রেট', // 'Portrait'
    orientationLandscape: 'ল্যান্ডস্কেপ', // 'Landscape'
    margin: 'মার্জিন', // 'Margin'
    marginNone: 'মার্জিন নেই (পুরো পেজ)', // 'No Margin (Full Bleed)'
    marginSmall: 'ছোট মার্জিন', // 'Small Margin'
    marginMedium: 'মাঝারি মার্জিন', // 'Medium Margin'
    imagePlacement: 'ছবির অবস্থান', // 'Image Placement'
    placementContain: 'কনটেইন (পুরো ছবি)', // 'Contain (Full Image)'
    placementCover: 'কভার (পেজ ভরে)', // 'Cover (Fill Page)'
    pdfFilename: 'PDF ফাইলের নাম', // 'PDF Filename'
    pdfImageQuality: 'PDF ছবির কোয়ালিটি:', // 'PDF Image Quality:'
    createDownloadPdf: 'PDF তৈরি করে ডাউনলোড করুন ({count} পৃ.)', // 'Create & Download PDF ({count}p)'
    clear: 'মুছুন', // 'Clear'
    pdfReady: 'PDF প্রস্তুত ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'পৃষ্ঠা', // 'page'
    pagePlural: 'পৃষ্ঠা', // 'pages'
    downloadPdfAgain: 'আবার PDF ডাউনলোড করুন', // 'Download PDF Again'
    pageOrder: 'পেজের ক্রম ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'পৃষ্ঠা', // 'Page' (in Page Order heading)
    pageOrderPlural: 'পৃষ্ঠা', // 'Pages' (in Page Order heading)
    movePageUp: 'পেজ ওপরে নিন', // 'Move page up' (title)
    movePageDown: 'পেজ নিচে নিন', // 'Move page down' (title)
    removePage: 'পেজ মুছুন', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'EXIF ও মেটাডেটা দেখতে ছবি ছাড়ুন', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'ছবির মেটাডেটা পার্স করা যায়নি৤', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'এমবেডেড মেটাডেটা পাওয়া গেছে ({count} ধরনের ট্যাগ)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'কোনো লুকানো EXIF, GPS বা ক্যামেরা ট্যাগ পাওয়া যায়নি', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'মেটাডেটা মুছে ফেলুন', // 'Strip Metadata'
    copyJson: 'JSON কপি করুন', // 'Copy JSON'
    copiedJson: 'JSON কপি হয়েছে', // 'Copied JSON'
    exportJson: 'JSON এক্সপোর্ট করুন', // 'Export JSON'
    clear: 'মুছুন', // 'Clear' (title)
    gpsDetected: 'GPS লোকেশন কোঅর্ডিনেট পাওয়া গেছে', // 'GPS Location Coordinates Detected'
    latitude: 'অক্ষাংশ:', // 'Latitude:'
    longitude: 'দ্রাঘিমাংশ:', // 'Longitude:'
    gpsWarning:
      'এই ছবিটি যেমন আছে তেমন শেয়ার করলে ছবিটি কোথায় তোলা হয়েছিল তা প্রকাশ পেতে পারে৤ অনলাইনে পোস্ট করার আগে "মেটাডেটা মুছে ফেলুন" ব্যবহার করুন৤', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
    extractedMetadata: 'এক্সট্রাক্ট করা মেটাডেটা ({count}টি প্রপার্টি)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'প্রাইভেসি ট্যাগ', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'EXIF, GPS ও মেটাডেটা মুছতে ছবি ছাড়ুন', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'মেটাডেটা মুছে ফেলা যায়নি৤', // 'Failed to strip metadata.'
    strippingMethod: 'মোছার পদ্ধতি', // 'Stripping Method'
    losslessStrip: 'লসলেস বাইনারি স্ট্রিপ (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'পুরো ক্যানভাসে আবার এনকোড', // 'Full Canvas Re-encode'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'আবার এনকোডের কোয়ালিটি (WebP/HEIC বা পুরো আবার এনকোডের জন্য):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'পরিষ্কার হচ্ছে...', // 'Cleaning...'
    recleanAll: 'সব আবার পরিষ্কার করুন', // 'Re-clean All'
    clear: 'মুছুন', // 'Clear'
    privacyVerified: 'গোপনীয়তা যাচাই হয়েছে', // 'Privacy Verified'
    cleanImagesReady: '{count}টি পরিষ্কার ছবি প্রস্তুত, মেটাডেটা মোছা হয়েছে', // '{count} clean images ready with metadata stripped'
    creatingZip: 'ZIP তৈরি হচ্ছে...', // 'Creating ZIP...'
    downloadAllCleanZip: 'সব পরিষ্কার ছবি ডাউনলোড করুন (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: '{before}টি মেটাডেটা ট্যাগ মোছা হয়েছে → {after}টি বাকি', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'যাচাইকৃত পরিষ্কার (০টি EXIF/GPS ট্যাগ)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'লসলেস বাইনারি স্ট্রিপ', // 'Lossless binary strip'
    cleanCanvasExport: 'পরিষ্কার ক্যানভাস এক্সপোর্ট', // 'Clean Canvas export'
    scrubbing: 'EXIF ও GPS হেডার মোছা হচ্ছে...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'পরিষ্কার ছবি ডাউনলোড করুন', // 'Download Clean'
    removeItem: '{name} সরান', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'আপনার লোগো বা আইকন এখানে ছাড়ুন', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'বর্গাকার PNG বা SVG ভালো · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'ফাইল ব্রাউজ করুন', // 'browse file'
    errorGenerateFailed: 'ফ্যাভিকন প্যাকেজ তৈরি করা যায়নি৤', // 'Failed to generate favicon package.'
    backgroundFill: 'ব্যাকগ্রাউন্ড ফিল', // 'Background Fill'
    transparent: 'স্বচ্ছ', // 'Transparent'
    padding: 'প্যাডিং', // 'Padding'
    cornerRadius: 'কোণের ব্যাসার্ধ', // 'Corner Radius'
    tabPreviewAlt: 'ট্যাব প্রিভিউ', // alt 'Tab preview'
    myWebsite: 'আমার ওয়েবসাইট', // 'My Website'
    darkTabPreviewAlt: 'গাঢ় ট্যাব প্রিভিউ', // alt 'Dark tab preview'
    darkModeTab: 'ডার্ক মোড ট্যাব', // 'Dark Mode Tab'
    packingZip: 'ZIP প্যাক করা হচ্ছে…', // 'Packing ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    clear: 'মুছুন', // title 'Clear'
    downloadFaviconIco: 'favicon.ico ডাউনলোড করুন', // title 'Download favicon.ico'
    downloadFile: '{filename} ডাউনলোড করুন', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'HTML <head> স্নিপেট', // 'HTML <head> Snippet'
    copied: 'কপি হয়েছে!', // 'Copied!'
    copyHtml: 'HTML কপি করুন', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'ছবি ছাড়ুন অথবা স্ক্রিনশট পেস্ট করুন (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    clickAnywhereToPin: 'রং পিন করতে যেকোনো জায়গায় ক্লিক করুন', // 'Click anywhere to pin a color'
    newImage: 'নতুন ছবি', // 'New Image'
    pixelInspector: 'পিক্সেল ইনস্পেক্টর', // 'Pixel Inspector'
    copyLabel: '{label} কপি করুন', // title `Copy ${row.label}`
    pickedSwatches: 'সংরক্ষিত সোয়াচ ({count}টি)', // 'Picked Swatches ({palette.length})'
    exportCss: 'CSS এক্সপোর্ট করুন', // 'Export CSS'
    clickPixelsHint: 'আপনার প্যালেটে রং সংরক্ষণ করতে ছবির পিক্সেলে ক্লিক করুন৤', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'বেছে নিয়ে {hex} কপি করতে ক্লিক করুন', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'সঠিক ডাইমেনশন ও অনুপাত দেখতে ছবি ছাড়ুন', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'সর্বনিম্ন প্রস্থ (px)', // 'Min Width Check (px)'
    minHeightCheck: 'সর্বনিম্ন উচ্চতা (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'যেমন, 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'যেমন, 630', // placeholder 'e.g. 630'
    exportCsv: 'CSV এক্সপোর্ট করুন', // 'Export CSV'
    exportJson: 'JSON এক্সপোর্ট করুন', // 'Export JSON'
    clear: 'মুছুন', // 'Clear'
    headerImage: 'ছবি', // table header 'Image'
    headerDimensions: 'ডাইমেনশন', // table header 'Dimensions'
    headerAspectRatio: 'অনুপাত', // table header 'Aspect Ratio'
    headerOrientation: 'অভিমুখ', // table header 'Orientation'
    headerSizeFormat: 'সাইজ / ফরম্যাট', // table header 'Size / Format'
    headerPrint300Dpi: '৩০০ DPI-তে প্রিন্ট', // table header 'Print @300 DPI'
    headerSpecCheck: 'স্পেক চেক', // table header 'Spec Check'
    orientationLandscape: 'ল্যান্ডস্কেপ', // 'Landscape'
    orientationPortrait: 'পোর্ট্রেট', // 'Portrait'
    orientationSquare: 'বর্গাকার', // 'Square'
    alphaTag: ' · আলফা', // ' · Alpha'
    specPass: 'পাস', // 'Pass'
    specBelowMin: 'সর্বনিম্নের নিচে', // 'Below Min'
    csvYes: 'হ্যাঁ', // CSV value 'Yes'
    csvNo: 'না', // CSV value 'No'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'অংশ ব্লার বা পিক্সেলেট করতে ছবি ছাড়ুন', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'এক্সপোর্ট করতে ব্যর্থ৤', // 'Export failed.'
    paintOverAreasBlur: 'ব্লার করতে অংশের ওপর আঁকুন', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'পিক্সেলেট করতে অংশের ওপর আঁকুন', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'পুরো ছবির প্রিভিউ', // 'Whole-Image Preview'
    undo: 'আনডু', // 'Undo'
    resetBrush: 'ব্রাশ রিসেট করুন', // 'Reset Brush'
    removeImage: 'ছবি সরান', // aria-label 'Remove image'
    targetArea: 'টার্গেট এলাকা', // 'Target Area'
    brushArea: 'ব্রাশ এলাকা', // 'Brush Area'
    wholeImage: 'পুরো ছবি', // 'Whole Image'
    effectStyle: 'ইফেক্টের ধরন', // 'Effect Style'
    pixelateMosaic: 'পিক্সেলেট মোজাইক', // 'Pixelate Mosaic'
    smoothBlur: 'মসৃণ ব্লার', // 'Smooth Blur'
    blurRadius: 'ব্লারের ব্যাসার্ধ', // 'Blur Radius'
    mosaicBlockSize: 'মোজাইক ব্লকের সাইজ', // 'Mosaic Block Size'
    brushSize: 'ব্রাশের সাইজ', // 'Brush Size'
    brushHint: 'মুখ, টেক্সট বা নম্বর প্লেট লুকাতে সরাসরি ছবির ওপর ক্লিক করে টানুন৤', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'আসল', // 'Orig' — same abbreviation in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'কোয়ালিটি', // 'Quality'
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadImage: 'ছবি ডাউনলোড করুন', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'কাস্টম টেক্সট ওভারলে যোগ করতে ছবি ছাড়ুন', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'এক্সপোর্ট করতে ব্যর্থ৤', // 'Export failed.'
    dragAnyText: 'যেকোনো টেক্সট সরাসরি ছবির ওপর টেনে নিন', // 'Drag Any Text Directly on Image'
    changeImage: 'ছবি বদলান', // 'Change Image'
    textLayer: 'টেক্সট {index}', // tab `Text ${idx + 1}`
    add: 'যোগ করুন', // 'Add'
    deleteActiveTextLayer: 'সক্রিয় টেক্সট লেয়ার মুছুন', // aria-label 'Delete active text layer'
    textContent: 'টেক্সটের বিষয়বস্তু (একাধিক লাইন চলে)', // 'Text Content (multi-line supported)'
    font: 'ফন্ট', // 'Font'
    fontInter: 'Inter / পরিষ্কার Sans', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / মিম ডিসপ্লে', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / ক্লাসিক Serif', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / মনোস্পেস', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / গোলাকার Sans', // font option 'Trebuchet / Rounded Sans'
    fill: 'ফিল', // 'Fill'
    toggleBold: 'বোল্ড চালু/বন্ধ করুন', // aria-label 'Toggle Bold'
    toggleItalic: 'ইটালিক চালু/বন্ধ করুন', // aria-label 'Toggle Italic'
    size: 'সাইজ', // 'Size'
    rotation: 'ঘূর্ণন', // 'Rotation'
    textOutline: 'টেক্সটের আউটলাইন', // 'Text Outline'
    dropShadow: 'ড্রপ শ্যাডো', // 'Drop Shadow'
    defaultLayerText: 'ডাবল-ট্যাপ করুন বা টেক্সট এডিট করুন', // default layer text 'Double-tap or edit text'
    defaultCaption: 'ক্যাপশন {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'আসল', // 'Orig' — same abbreviation in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'কোয়ালিটি', // 'Quality'
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadImageWithText: 'টেক্সটসহ ছবি ডাউনলোড করুন', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'কাস্টম বর্ডার বা ফ্রেম যোগ করতে ছবি ছাড়ুন', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'এক্সপোর্ট করতে ব্যর্থ৤', // 'Export failed.'
    framedPreview: 'ফ্রেমসহ প্রিভিউ', // 'Framed Preview'
    changeImage: 'ছবি বদলান', // 'Change Image'
    quickFramePresets: 'দ্রুত ফ্রেম প্রিসেট', // 'Quick Frame Presets'
    presetClassicWhite: 'ক্লাসিক সাদা', // preset 'Classic White'
    presetPolaroidFrame: 'পোলারয়েড ফ্রেম', // preset 'Polaroid Frame'
    presetDarkStudio: 'ডার্ক স্টুডিও', // preset 'Dark Studio'
    presetGradientGlow: 'গ্রেডিয়েন্ট গ্লো', // preset 'Gradient Glow'
    borderStyle: 'বর্ডারের ধরন', // 'Border Style'
    borderStyleSolid: 'শক্ত', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'গ্রেডিয়েন্ট', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'পোলারয়েড', // border type 'polaroid' (rendered capitalized)
    borderColor: 'বর্ডারের রং', // 'Border Color'
    startColor: 'শুরুর রং', // 'Start Color'
    endColor: 'শেষের রং', // 'End Color'
    gradientAngle: 'গ্রেডিয়েন্টের কোণ', // 'Gradient Angle'
    borderSize: 'বর্ডারের সাইজ', // 'Border Size'
    frameRadius: 'ফ্রেমের ব্যাসার্ধ', // 'Frame Radius'
    photoRadius: 'ছবির ব্যাসার্ধ', // 'Photo Radius'
    dropShadow: 'ড্রপ শ্যাডো', // 'Drop Shadow'
    shadowNone: 'নেই', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'নরম', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'মাঝারি', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'গভীর', // shadow level 'deep' (rendered capitalized)
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadFramedImage: 'ফ্রেমসহ ছবি ডাউনলোড করুন', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'ছবির কোণ গোল করতে ছবি ছাড়ুন', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'গোল কোণের ছবি এক্সপোর্ট করা যায়নি৤', // 'Failed to export rounded image.'
    liveCornerPreview: 'কোণের লাইভ প্রিভিউ', // 'Live Corner Preview'
    changeImage: 'ছবি বদলান', // 'Change Image'
    cornerSettings: 'কোণের সেটিংস', // 'Corner Settings'
    fullCirclePill: 'পুরো বৃত্ত / পিল', // 'Full Circle / Pill'
    individualPerCorner: 'প্রতিটি কোণ আলাদাভাবে নিয়ন্ত্রণ করুন', // 'Individual Per-Corner Control'
    allCornersRadius: 'সব কোণের ব্যাসার্ধ', // 'All Corners Radius'
    cornerTopLeft: 'ওপরে বাম', // per-corner label 'Top Left'
    cornerTopRight: 'ওপরে ডান', // per-corner label 'Top Right'
    cornerBottomLeft: 'নিচে বাম', // per-corner label 'Bottom Left'
    cornerBottomRight: 'নিচে ডান', // per-corner label 'Bottom Right'
    outerCornerFill: 'বাইরের কোণের ফিল', // 'Outer Corner Fill'
    transparentPngWebp: 'স্বচ্ছ (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'শক্ত রং', // 'Solid Color'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadRoundedImage: 'গোল কোণের ছবি ডাউনলোড করুন', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'উজ্জ্বলতা ঠিক করতে ছবি ছাড়ুন', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'ঠিক করা ছবি এক্সপোর্ট করা যায়নি৤', // 'Failed to export adjusted image.'
    viewAfter: 'পরে', // view tab 'after' (rendered capitalized)
    viewBefore: 'আগে', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'ভাগ করে তুলনা', // view tab 'Split Compare'
    fullscreenCompare: 'ফুলস্ক্রিন তুলনা', // 'Fullscreen Compare'
    removeImage: 'ছবি সরান', // title/aria-label 'Remove image'
    beforeLabel: 'আগে', // split slider label 'Before'
    afterLabel: 'পরে', // split slider label 'After'
    originalPreviewAlt: 'আসল প্রিভিউ', // alt 'Original preview'
    originalComparisonAlt: 'আসল তুলনা', // alt 'Original comparison'
    brightnessControls: 'উজ্জ্বলতার নিয়ন্ত্রণ', // 'Brightness Controls'
    reset: 'রিসেট', // 'Reset'
    brightnessLevel: 'উজ্জ্বলতার মাত্রা', // 'Brightness Level'
    minLabel: '-১০০% আরও গাঢ়', // min label '-100% Darker'
    maxLabel: '+১০০% আরও উজ্জ্বল', // max label '+100% Brighter'
    quickPresets: 'দ্রুত প্রিসেট', // 'Quick Presets'
    presetDark: 'গাঢ় (-৩০%)', // preset 'Dark (-30%)'
    presetDim: 'ম্লান (-১৫%)', // preset 'Dim (-15%)'
    presetOriginal: 'আসল (০%)', // preset 'Original (0%)'
    presetBright: 'উজ্জ্বল (+১৫%)', // preset 'Bright (+15%)'
    presetVibrant: 'প্রাণবন্ত (+৩০%)', // preset 'Vibrant (+30%)'
    presetHighKey: 'হাই কি (+৫০%)', // preset 'High Key (+50%)'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'কোয়ালিটি', // 'Quality'
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadEditedImage: 'এডিট করা ছবি ডাউনলোড করুন', // 'Download Edited Image'
    comparisonTitlePrefix: 'উজ্জ্বলতার তুলনা', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'এডিট করা (পরে)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'কনট্রাস্ট ঠিক করতে ছবি ছাড়ুন', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'কনট্রাস্টের তুলনা', // 'Contrast Comparison'
    comparisonAfterLabel: 'এডিট করা (পরে)', // 'Edited (After)'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'ঠিক করা ছবি এক্সপোর্ট করা যায়নি৤', // 'Failed to export adjusted image.'
    tabAfter: 'পরে', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'আগে', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'ভাগ করে তুলনা', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'ফুলস্ক্রিনে তুলনা করুন', // 'Fullscreen Compare'
    removeImage: 'ছবি সরান', // title + aria-label 'Remove image'
    originalPreviewAlt: 'আসল প্রিভিউ', // alt 'Original preview'
    originalComparisonAlt: 'আসল তুলনা', // alt 'Original comparison'
    splitBeforeLabel: 'আগে', // split slider left label 'Before'
    splitAfterLabel: 'পরে', // split slider right label 'After'
    controlsHeading: 'কনট্রাস্টের নিয়ন্ত্রণ', // '{label} Controls' (contrast mode)
    reset: 'রিসেট', // 'Reset'
    levelLabel: 'কনট্রাস্টের মাত্রা', // '{label} Level' (contrast mode)
    minLabel: '-১০০% সমতল', // minLabel '-100% Flat'
    maxLabel: '+১০০% উচ্চ কনট্রাস্ট', // maxLabel '+100% High Contrast'
    quickPresets: 'দ্রুত প্রিসেট', // 'Quick Presets'
    presetSoft: 'নরম (-২৫%)', // 'Soft (-25%)'
    presetMuted: 'ম্লান (-১০%)', // 'Muted (-10%)'
    presetOriginal: 'আসল (০%)', // 'Original (0%)'
    presetCrisp: 'ঝকঝকে (+২০%)', // 'Crisp (+20%)'
    presetPunchy: 'তীব্র (+৪০%)', // 'Punchy (+40%)'
    presetDramatic: 'নাটকীয় (+৭০%)', // 'Dramatic (+70%)'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'কোয়ালিটি', // 'Quality'
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadEditedImage: 'এডিট করা ছবি ডাউনলোড করুন', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'স্যাচুরেশন ঠিক করতে ছবি ছাড়ুন', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'স্যাচুরেশনের তুলনা', // 'Saturation Comparison'
    comparisonAfterLabel: 'এডিট করা (পরে)', // 'Edited (After)'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'ঠিক করা ছবি এক্সপোর্ট করা যায়নি৤', // 'Failed to export adjusted image.'
    tabAfter: 'পরে', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'আগে', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'ভাগ করে তুলনা', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'ফুলস্ক্রিনে তুলনা করুন', // 'Fullscreen Compare'
    removeImage: 'ছবি সরান', // title + aria-label 'Remove image'
    originalPreviewAlt: 'আসল প্রিভিউ', // alt 'Original preview'
    originalComparisonAlt: 'আসল তুলনা', // alt 'Original comparison'
    splitBeforeLabel: 'আগে', // split slider left label 'Before'
    splitAfterLabel: 'পরে', // split slider right label 'After'
    controlsHeading: 'স্যাচুরেশনের নিয়ন্ত্রণ', // '{label} Controls' (saturation mode)
    reset: 'রিসেট', // 'Reset'
    levelLabel: 'স্যাচুরেশনের মাত্রা', // '{label} Level' (saturation mode)
    minLabel: '-১০০% গ্রেস্কেল', // minLabel '-100% Grayscale'
    maxLabel: '+১০০% প্রাণবন্ত', // maxLabel '+100% Vivid'
    quickPresets: 'দ্রুত প্রিসেট', // 'Quick Presets'
    presetGrayscale: 'গ্রেস্কেল (-১০০%)', // 'Grayscale (-100%)'
    presetMuted: 'ম্লান (-৪০%)', // 'Muted (-40%)'
    presetOriginal: 'আসল (০%)', // 'Original (0%)'
    presetRich: 'সমৃদ্ধ (+৩০%)', // 'Rich (+30%)'
    presetVivid: 'প্রাণবন্ত (+৬০%)', // 'Vivid (+60%)'
    presetHyper: 'হাইপার (+৯০%)', // 'Hyper (+90%)'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'কোয়ালিটি', // 'Quality'
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadEditedImage: 'এডিট করা ছবি ডাউনলোড করুন', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'ফিল্টার দিতে ছবি ছাড়ুন', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'ফিল্টারের তুলনা', // 'Filter Comparison'
    comparisonAfterLabel: 'ফিল্টার দেওয়া', // 'Filtered'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'এক্সপোর্ট করতে ব্যর্থ৤', // 'Export failed.'
    filterPreview: 'ফিল্টার প্রিভিউ', // 'Filter Preview'
    holdToViewOriginal: 'আসলটি দেখতে চেপে ধরুন', // 'Hold to View Original'
    compare: 'তুলনা করুন', // 'Compare'
    removeImage: 'ছবি সরান', // aria-label 'Remove image'
    originalBadge: 'আসল', // 'Original' badge — same in Bengali
    filterPresets: 'ফিল্টার প্রিসেট', // 'Filter Presets'
    reset: 'রিসেট', // 'Reset'
    presetOriginal: 'আসল', // preset 'Original' — same in Bengali
    presetGrayscale: 'গ্রেস্কেল', // preset 'Grayscale'
    presetSepia: 'সেপিয়া', // preset 'Sepia' — same in Bengali
    presetVintage: 'ভিনটেজ', // preset 'Vintage' — same in Bengali
    presetWarm: 'উষ্ণ', // preset 'Warm'
    presetCool: 'শীতল', // preset 'Cool'
    presetHighContrast: 'উচ্চ কনট্রাস্ট', // preset 'High Contrast'
    presetMatteFade: 'ম্যাট ফেড', // preset 'Matte Fade'
    presetDramatic: 'নাটকীয়', // preset 'Dramatic'
    presetNoir: 'বি/ডব্লিউ নয়ার', // preset 'B&W Noir'
    presetGoldenHour: 'গোল্ডেন আওয়ার', // preset 'Golden Hour'
    presetInvert: 'উল্টে দিন', // preset 'Invert'
    filterIntensity: 'ফিল্টারের তীব্রতা', // 'Filter Intensity'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'কোয়ালিটি', // 'Quality'
    rendering: 'প্রসেস হচ্ছে…', // 'Rendering...'
    downloadFilteredImage: 'ফিল্টার দেওয়া ছবি ডাউনলোড করুন', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'ব্যাকগ্রাউন্ড যোগ করতে ছবি বা স্বচ্ছ PNG ছাড়ুন', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorExportFailed: 'এক্সপোর্ট করা যায়নি৤', // 'Export failed.'
    backgroundPreview: 'ব্যাকগ্রাউন্ড প্রিভিউ', // 'Background Preview'
    changeImage: 'ছবি বদলান', // 'Change Image'
    outputDimensionsPrefix: 'আউটপুট:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'ব্যাকগ্রাউন্ডের ধরন', // 'Background Type'
    modeSolidColor: 'শক্ত রং', // 'Solid Color'
    modeGradient: 'গ্রেডিয়েন্ট', // 'Gradient'
    modeBlurredPhoto: 'ব্লার করা ছবি', // 'Blurred Photo'
    selectColor: '{color} রং বেছে নিন', // aria-label `Select color ${c}`
    color1: 'রং ১', // 'Color 1' — same in Bengali
    color2: 'রং ২', // 'Color 2' — same in Bengali
    angle: 'কোণ', // 'Angle'
    backdropBlurRadius: 'ব্যাকড্রপ ব্লারের ব্যাসার্ধ', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'ক্যানভাসের অনুপাত', // 'Canvas Aspect Ratio'
    aspectOriginal: 'আসল', // 'Orig' — same abbreviation in Bengali
    imageScale: 'ছবির স্কেল', // 'Image Scale'
    roundness: 'গোলাকার ভাব', // 'Roundness'
    dropShadowBehindImage: 'ছবির পেছনে ড্রপ শ্যাডো', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'এক্সপোর্ট হচ্ছে…', // 'Exporting...'
    downloadImage: 'ছবি ডাউনলোড করুন', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'গ্রিড টাইল বা স্ট্রিপে ভাগ করতে ছবি ছাড়ুন', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorSplitFailed: 'ছবি ভাগ করা যায়নি৤', // 'Failed to split image.'
    errorCanvasContext: 'ক্যানভাস কনটেক্সট চালু করা যায়নি৤', // 'Unable to initialize canvas context.'
    cutLinePreview: 'কাট লাইনের প্রিভিউ ({rows} × {cols} = {tiles}টি অংশ)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'ছবি বদলান', // 'Change Image'
    splitGuideAlt: 'ভাগের গাইড', // alt 'Split guide'
    splitLayout: 'ভাগের লেআউট', // 'Split Layout'
    modeGrid: 'গ্রিড (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'আনুভূমিক স্ট্রিপ', // 'Horiz. Strips'
    modeVerticalStrips: 'উল্লম্ব স্ট্রিপ', // 'Vert. Strips'
    rowsLabel: 'সারি (আনুভূমিক কাট)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'কলাম (উল্লম্ব কাট)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 ক্যারোসেল', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 স্ট্রিপ', // preset '4×1 Strips'
    formatOriginal: 'আসল', // 'Orig' — same abbreviation in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'টাইলের কোয়ালিটি', // 'Tile Quality'
    splittingImage: 'ছবি ভাগ হচ্ছে…', // 'Splitting Image...'
    splitIntoTiles: '{count}টি অংশে ভাগ করুন', // `Split into ${n} Tiles`
    splitComplete: 'ভাগ সম্পন্ন', // 'Split Complete'
    tilesGenerated: '{count}টি ছবির টাইল পূর্ণ রেজোলিউশনে তৈরি হয়েছে', // '{n} image tiles generated at full resolution'
    packagingZip: 'ZIP প্যাক করা হচ্ছে…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'সব টাইল ডাউনলোড করুন (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'ডাউনলোড', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'DPI মেটাডেটা আপডেট করতে JPG বা PNG ছবি ছাড়ুন', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'DPI আপডেট করা যায়নি৤', // 'Failed to update DPI.'
    targetDpiPresets: 'টার্গেট DPI প্রিসেট', // 'Target DPI Presets'
    preset72Screen: '72 DPI (স্ক্রিন)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (খসড়া প্রিন্ট)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (উচ্চমানের প্রিন্ট)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (আর্কাইভ)', // '600 DPI (Archival)'
    customDpi: 'কাস্টম DPI', // 'Custom DPI'
    applyDpi: '{dpi} DPI প্রয়োগ করুন', // 'Apply {dpi} DPI'
    clear: 'মুছুন', // 'Clear'
    batchReady: 'ব্যাচ প্রস্তুত', // 'Batch Ready'
    filesUpdatedToDpi: '{count}টি ফাইল {dpi} DPI-তে আপডেট হয়েছে', // '{n} files updated to {dpi} DPI'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'আগে: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'আগে: সেট করা হয়নি', // 'Before: Not set'
    verifiedDpi: 'যাচাই হয়েছে: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'JPEG হেডারের লসলেস আপডেট', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'PNG pHYs-এর লসলেস আপডেট', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'pHYs DPI সহ PNG-তে কনভার্ট করা', // 'Converted to PNG with pHYs DPI'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} সরান', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Base64-এ এনকোড করতে ছবি ছাড়ুন', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'ফাইলটি এনকোড করা যায়নি৤', // 'Could not encode file.'
    errorFailedToRead: 'ছবির ফাইলটি পড়া যায়নি৤', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'ক্লিপবোর্ডে লেখা যায়নি — টেক্সট বক্স থেকে বেছে নিয়ে কপি করুন৤', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'ফাইল:', // 'File:' (summary card)
    outputLabel: 'আউটপুট:', // 'Output:' (summary card)
    charsLabel: 'অক্ষর', // 'chars' (summary card)
    encodeAnother: 'আরেকটি এনকোড করুন', // 'Encode Another'
    tabDataUrl: 'ডেটা URL', // tab 'Data URL'
    tabRawBase64: 'কাঁচা Base64', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'কপি হয়েছে!', // 'Copied!'
    copyOutput: 'আউটপুট কপি করুন', // 'Copy Output'
    saveTxt: '.TXT সংরক্ষণ করুন', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'Base64 স্ট্রিং বা ডেটা URL পেস্ট করুন', // 'Paste Base64 String or Data URL'
    clear: 'মুছুন', // 'Clear'
    inputPlaceholder: 'data:image/png;base64,iVBORw0KGgo... অথবা কাঁচা Base64 বাইট এখানে পেস্ট করুন', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'PNG, JPG, WebP, GIF, SVG, BMP ও ICO Base64 পেলোড সাপোর্ট করে', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'ডিকোড হচ্ছে…', // 'Decoding...'
    decodeImage: 'ছবি ডিকোড করুন', // 'Decode Image'
    decodingBytes: 'Base64 বাইট ডিকোড হচ্ছে…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'সাপোর্টেড নয় এমন ডেটা URI এনকোডিং৤ Base64 পেলোড (`;base64,`) প্রত্যাশিত৤', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'ইনপুটে অবৈধ Base64 অক্ষর আছে৤', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'ডিকোড করা বাইট দিয়ে ব্রাউজারে পড়া যায় এমন বৈধ ছবি তৈরি হয়নি৤', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Base64 স্ট্রিং ডিকোড করা যায়নি৤', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'ডিকোড করা Base64-এর প্রিভিউ', // alt 'Decoded Base64 preview'
    validImageDecoded: 'বৈধ ছবি ডিকোড হয়েছে', // 'Valid Image Decoded'
    detectedFormat: 'শনাক্ত করা ফরম্যাট', // 'Detected Format'
    binarySize: 'বাইনারি সাইজ', // 'Binary Size'
    dimensions: 'ডাইমেনশন', // 'Dimensions'
    downloadFormat: 'ডাউনলোড ফরম্যাট', // 'Download Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'ছবির ফাইল ডাউনলোড করুন', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'প্রধান রঙের প্যালেট বের করতে ছবি ছাড়ুন', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'ছবিটি লোড করা যায়নি৤', // 'Unable to load image.'
    errorClipboardDenied: 'ক্লিপবোর্ডের অনুমতি দেওয়া হয়নি৤', // 'Clipboard permission denied.'
    extractedPalette: 'এক্সট্রাক্ট করা প্যালেট ({count}টি রং)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'উৎস', // alt 'Source'
    changeImage: 'বদলান', // 'Change'
    numberOfColors: 'রঙের সংখ্যা', // 'Number of Colors'
    colorsCount: '{count}টি রং', // '{count} colors'
    copyCssVariables: 'CSS ভেরিয়েবল কপি করুন', // 'Copy CSS Variables'
    copiedCss: 'CSS কপি হয়েছে!', // 'Copied CSS!'
    copyJson: 'JSON কপি করুন', // 'Copy JSON'
    copiedJson: 'JSON কপি হয়েছে!', // 'Copied JSON!'
    downloadPalettePng: 'প্যালেট PNG ডাউনলোড করুন', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'অ্যানিমেটেড GIF বানাতে ২ বা তার বেশি ছবি ছাড়ুন', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'অ্যানিমেটেড GIF এনকোড করা যায়নি৤', // 'Failed to encode animated GIF.'
    skippedFile: '"{name}" বাদ দেওয়া হয়েছে: {error}', // 'Skipped "{file.name}": {err.message}'
    skippedFileNoError: '"{name}" বাদ দেওয়া হয়েছে৤', // 'Skipped "{file.name}".'
    generatedGif: 'তৈরি GIF ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'লাইভ টাইমিং প্রিভিউ · ফ্রেম {current}/{total}', // 'Live Timing Preview · Frame {n}/{total}'
    generatedGifAlt: 'তৈরি অ্যানিমেটেড GIF', // alt 'Generated animated GIF'
    pause: 'থামান', // 'Pause'
    play: 'চালান', // 'Play'
    backToFrameEditor: 'ফ্রেম এডিটরে ফিরুন', // 'Back to Frame Editor'
    clearAllFrames: 'সব ফ্রেম মুছুন', // aria-label 'Clear all frames'
    largeGifWarning: 'বড় GIF সতর্কতা ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      '৫–১৫ MB-এর বেশি GIF মেসেজিং অ্যাপে ধীরে আপলোড হতে পারে বা প্ল্যাটফর্মের কড়া সীমা মানতে না পারে৤ আউটপুটের প্রস্থ/উচ্চতা কমিয়ে (যেমন, 480 px), কোয়ালিটি কমিয়ে বা ফ্রেম সরিয়ে চেষ্টা করুন৤', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'অ্যানিমেটেড GIF ডাউনলোড করুন ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'অ্যানিমেশন সেটিংস', // 'Animation Settings'
    defaultFrameDuration: 'ডিফল্ট ফ্রেমের সময়কাল', // 'Default Frame Duration'
    frameDurationValue: '{ms} মি.সে. ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 মি.সে.)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 মি.সে.)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 মি.সে.)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 মি.সে.)', // '10 FPS (100ms)'
    loopBehavior: 'লুপের আচরণ', // 'Loop Behavior'
    loopForever: 'সবসময়', // 'Forever'
    loopSetLoops: 'লুপের সংখ্যা ঠিক করুন', // 'Set Loops'
    loopPlayOnce: 'একবার চালান', // 'Play Once'
    totalPlays: 'মোট চালানো', // 'Total Plays'
    outputDimensions: 'আউটপুট ডাইমেনশন (px)', // 'Output Dimensions (px)'
    ratioLocked: 'অনুপাত লক করা', // 'Ratio Locked'
    ratioUnlocked: 'আনলক', // 'Unlocked'
    widthLabel: 'প্রস্থ', // 'Width'
    heightLabel: 'উচ্চতা', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'আসল', // 'Original' — same in Bengali
    frameFit: 'ফ্রেম ফিট', // 'Frame Fit'
    fitContain: 'কনটেইন', // 'contain'
    fitCover: 'কভার', // 'cover'
    backgroundMatte: 'ব্যাকগ্রাউন্ড ম্যাট', // 'Background Matte'
    colorPaletteQuality: 'কালার প্যালেটের কোয়ালিটি', // 'Color Palette Quality'
    encodingGif: 'GIF এনকোড হচ্ছে ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'অ্যানিমেটেড GIF তৈরি করুন', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'অ্যানিমেটেড GIF আবার এনকোড করুন', // 'Re-Encode Animated GIF'
    framesHeading: 'ফ্রেম ({count}) — টেনে বা তীর চিহ্ন দিয়ে সাজান', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'প্রতি ফ্রেমের সময়কাল খালি রাখলে {ms} মি.সে.-এর গ্লোবাল ফ্রেম সময়কাল প্রযোজ্য হবে৤', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'ফ্রেম যোগ করুন', // 'Add Frames'
    delayMsLabel: 'সময়কাল (মি.সে.):', // 'Delay (ms):'
    moveEarlier: 'আগে নিন', // title 'Move earlier'
    moveLater: 'পরে নিন', // title 'Move later'
    duplicateFrame: 'ফ্রেমের কপি করুন', // title 'Duplicate frame'
    removeFrame: 'ফ্রেম মুছুন', // title 'Remove frame'
    moveFrameEarlierAria: '{n} নম্বর ফ্রেম আগে নিন', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: '{n} নম্বর ফ্রেম পরে নিন', // aria-label `Move frame ${n} later`
    duplicateFrameAria: '{n} নম্বর ফ্রেমের কপি করুন', // aria-label `Duplicate frame ${n}`
    removeFrameAria: '{n} নম্বর ফ্রেম মুছুন', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'ফটো কোলাজ বানাতে ২ থেকে ৯টি ছবি ছাড়ুন', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'কোলাজ এক্সপোর্ট করা যায়নি৤', // 'Failed to export collage.'
    couldNotLoadFile: '"{name}" লোড করা যায়নি: {error}', // 'Could not load "{file.name}": {err.message}'
    couldNotLoadFileNoError: '"{name}" লোড করা যায়নি৤', // 'Could not load "{file.name}".'
    collagePreview: 'কোলাজ প্রিভিউ ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'সব মুছুন', // 'Clear All'
    rearrangeCells: 'সেল সাজান (টেনে বা দুটি সেলে ট্যাপ করে বদলান)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'ছবি সঙ্গে সঙ্গে সাজাতে যেকোনো সেল কার্ড অন্য স্লটের ওপর টেনে নিন৤', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'ছবি যোগ করুন', // 'Add Photos'
    cellLabel: 'সেল {n}', // 'Cell {n}'
    slotLabel: 'স্লট {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'সেল {n} পেছনে নিন', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'সেল {n} সামনে নিন', // aria-label `Move cell ${n} forward`
    clearCellAria: 'সেল {n} মুছুন', // aria-label `Clear cell ${n}`
    addPhoto: 'ছবি যোগ করুন', // 'Add Photo'
    collageLayout: 'কোলাজ লেআউট', // 'Collage Layout'
    layout2x2: '2×2 গ্রিড', // '2×2 Grid'
    layout3x3: '3×3 গ্রিড', // '3×3 Grid'
    layoutVertical: 'উল্লম্ব স্ট্রিপ', // 'Vertical Strip'
    layoutHorizontal: 'আনুভূমিক স্ট্রিপ', // 'Horizontal Strip'
    cellProportionsSpacing: 'সেলের অনুপাত ও ফাঁক', // 'Cell Proportions & Spacing'
    equalCells: 'সমান সেল', // 'Equal Cells'
    colSplit: 'কলাম ভাগ', // 'Col Split'
    centerCol: 'মাঝের কলাম', // 'Center Col'
    rowSplit: 'সারি ভাগ', // 'Row Split'
    centerRow: 'মাঝের সারি', // 'Center Row'
    leadCellEmphasis: 'প্রধান সেলের জোর', // 'Lead Cell Emphasis'
    gapSpacing: 'ফাঁক', // 'Gap Spacing'
    cellRadius: 'সেলের ব্যাসার্ধ', // 'Cell Radius'
    backgroundColor: 'ব্যাকগ্রাউন্ডের রং', // 'Background Color'
    backgroundSwatchAria: 'ব্যাকগ্রাউন্ড {color}', // aria-label `Background ${c}`
    imageFit: 'ছবির ফিট', // 'Image Fit'
    fitCover: 'কভার', // 'cover'
    fitContain: 'কনটেইন', // 'contain'
    outputSize: 'আউটপুট সাইজ (px)', // 'Output Size (px)'
    widthLabel: 'প্রস্থ', // 'Width'
    heightLabel: 'উচ্চতা', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (লসলেস)', // 'PNG (Lossless)'
    jpgQuality: 'JPG কোয়ালিটি', // 'JPG Quality'
    exportingCollage: 'কোলাজ এক্সপোর্ট হচ্ছে…', // 'Exporting Collage...'
    downloadCollage: 'কোলাজ ডাউনলোড করুন ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: '{target}-এর নিচে কমপ্রেস করতে ছবি ছাড়ুন', // 'Drop images to compress under {target}'
    errorTargetFailed: 'টার্গেট সাইজে কমপ্রেস করতে ব্যর্থ৤', // 'Target compression failed.'
    errorCorruptedFile: 'ছবির ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'টার্গেট সর্বোচ্চ ফাইল সাইজ', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} সর্বোচ্চ)', // '({bytes} max)'
    needDifferentTarget: 'KB-তে অন্য টার্গেট দরকার?', // 'Need a different target KB?'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'শুধু কোয়ালিটি কমিয়ে {target}-এর মধ্যে না ধরলে বুদ্ধিমানের মতো ডাইমেনশন ছোট করার অনুমতি দিন', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'লসলেস PNG দিয়ে {target}-এ পরিষ্কারভাবে না পৌঁছালে বড় PNG স্বয়ংক্রিয়ভাবে WebP/JPG-তে কনভার্ট করুন', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'স্বচ্ছ PNG-এর ম্যাট রং:', // 'Transparent PNG matte color:'
    compressToTarget: '{target}-এ কমপ্রেস করুন', // 'Compress to {target}'
    optimizing: 'অপটিমাইজ হচ্ছে…', // 'Optimizing...'
    clear: 'মুছুন', // 'Clear'
    losslessPngSelected: 'লসলেস PNG বেছে নেওয়া হয়েছে:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG কোয়ালিটি স্লাইডারকে উপেক্ষা করে, তাই সাইজ কমানো পুরোপুরি পিক্সেল ডাইমেনশন ছোট করার ওপর নির্ভর করে৤ বড় ছবির জন্য JPG বা WebP বেছে নিন, যাতে কড়া KB সীমায় পৌঁছানো যায় আর ঝকঝকে ভাবও থাকে৤', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'টার্গেট কমপ্রেশনের সারাংশ · লক্ষ্য ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}টি {images}-এর মধ্যে {achieved}টি {target} লক্ষ্য পূরণ করেছে', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'ছবি', // 'image'
    imagePlural: 'ছবি', // 'images'
    summaryMissed: ' · {missed}টি সত্যিকারভাবে ধরানো যায়নি (বিস্তারিত নিচে)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'মোট সাশ্রয়: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'মোট সাশ্রয়: {bytes} (বেড়েছে {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    metricOriginal: 'আসল', // 'Original' (metric label)
    metricOutput: 'আউটপুট', // 'Output' (metric label)
    metricSpaceSaved: 'জায়গা সাশ্রয়', // 'Space Saved' (metric label)
    metricReduction: 'কমেছে', // 'Reduction' (metric label)
    metricSizeChange: 'সাইজের পরিবর্তন', // 'Size Change' (metric label)
    underTarget: '{target}-এর নিচে ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'লক্ষ্য পূরণ হয়নি — {bytes}', // 'Target missed — {bytes}'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    grewBy: 'বেড়েছে {bytes}: আবার এনকোড করলে আসলটির চেয়ে বড় হয়', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'ছবির মতো PNG-এর জন্য WebP বা JPG সাধারণত ছোট হয়৤', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'আসলটি রাখুন', // 'Keep original'
    keptOriginalNote: 'আসল ফাইলটি রাখা হয়েছে, কারণ আবার এনকোড করলে বড় হয়ে যাচ্ছিল৤', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target}-এর নিচে বেশি রেজোলিউশন ধরে রাখতে লসলেস PNG স্বয়ংক্রিয়ভাবে {format}-এ কনভার্ট করা হয়েছে৤', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (স্বচ্ছতা ধরে রাখা হয়েছে)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল, আর আবার এনকোড করলে {bytes} বেড়েছে৤ ছোট আউটপুটের জন্য "আসলটি রাখুন" ব্যবহার করুন অথবা WebP/JPG-তে বদলান৤', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল; {quality}% কোয়ালিটিতে পরিষ্কারভাবে এক্সপোর্ট করা হয়েছে৤', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'পূর্ণ {width}×{height} px রেজোলিউশনে লক্ষ্য পূরণ হয়েছে ({qualityLabel})৤', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px-এ স্কেল করে ({percent}%) {qualityLabel}-সহ লক্ষ্য পূরণ হয়েছে৤', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'লসলেস PNG', // 'lossless PNG'
    qualityPercent: '{quality}% কোয়ালিটি', // '{quality}% quality'
    statusCannotPng:
      'লসলেস PNG দিয়ে {target}-এ পৌঁছানো যায় না (সবচেয়ে ছোট সম্ভব: {width}×{height} px-এ {bytes})৤ আরও ছোট সাইজ পেতে আউটপুট ফরম্যাট JPG বা WebP-তে বদলান৤', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'পূর্ণ {width}×{height} px ডাইমেনশনে {target}-এ পৌঁছানো যায় না (সর্বনিম্ন কোয়ালিটি সাইজ {bytes})৤ ডাইমেনশন আরও ছোট করতে "ডাইমেনশন স্কেলিংয়ের অনুমতি দিন" চালু করুন৤', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'অনুরোধ করা {target} লক্ষ্যে পরিষ্কারভাবে পৌঁছানো যায়নি৤ সবচেয়ে ছোট সত্যিকারের এনকোড করা আউটপুট {bytes} ({width}×{height} px, {quality}% কোয়ালিটি)৤ আরও বড় টার্গেট সাইজ চেষ্টা করুন৤', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'টার্গেট কমপ্রেশন ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'কমপ্রেস করা ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: '{target}-এর নিচে কমপ্রেস করতে ছবি ছাড়ুন', // 'Drop images to compress under {target}'
    errorTargetFailed: 'টার্গেট সাইজে কমপ্রেস করতে ব্যর্থ৤', // 'Target compression failed.'
    errorCorruptedFile: 'ছবির ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'টার্গেট সর্বোচ্চ ফাইল সাইজ', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} সর্বোচ্চ)', // '({bytes} max)'
    needDifferentTarget: 'KB-তে অন্য টার্গেট দরকার?', // 'Need a different target KB?'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'শুধু কোয়ালিটি কমিয়ে {target}-এর মধ্যে না ধরলে বুদ্ধিমানের মতো ডাইমেনশন ছোট করার অনুমতি দিন', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'লসলেস PNG দিয়ে {target}-এ পরিষ্কারভাবে না পৌঁছালে বড় PNG স্বয়ংক্রিয়ভাবে WebP/JPG-তে কনভার্ট করুন', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'স্বচ্ছ PNG-এর ম্যাট রং:', // 'Transparent PNG matte color:'
    compressToTarget: '{target}-এ কমপ্রেস করুন', // 'Compress to {target}'
    optimizing: 'অপটিমাইজ হচ্ছে…', // 'Optimizing...'
    clear: 'মুছুন', // 'Clear'
    losslessPngSelected: 'লসলেস PNG বেছে নেওয়া হয়েছে:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG কোয়ালিটি স্লাইডারকে উপেক্ষা করে, তাই সাইজ কমানো পুরোপুরি পিক্সেল ডাইমেনশন ছোট করার ওপর নির্ভর করে৤ বড় ছবির জন্য JPG বা WebP বেছে নিন, যাতে কড়া KB সীমায় পৌঁছানো যায় আর ঝকঝকে ভাবও থাকে৤', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'টার্গেট কমপ্রেশনের সারাংশ · লক্ষ্য ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}টি {images}-এর মধ্যে {achieved}টি {target} লক্ষ্য পূরণ করেছে', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'ছবি', // 'image'
    imagePlural: 'ছবি', // 'images'
    summaryMissed: ' · {missed}টি সত্যিকারভাবে ধরানো যায়নি (বিস্তারিত নিচে)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'মোট সাশ্রয়: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'মোট সাশ্রয়: {bytes} (বেড়েছে {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    metricOriginal: 'আসল', // 'Original' (metric label)
    metricOutput: 'আউটপুট', // 'Output' (metric label)
    metricSpaceSaved: 'জায়গা সাশ্রয়', // 'Space Saved' (metric label)
    metricReduction: 'কমেছে', // 'Reduction' (metric label)
    metricSizeChange: 'সাইজের পরিবর্তন', // 'Size Change' (metric label)
    underTarget: '{target}-এর নিচে ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'লক্ষ্য পূরণ হয়নি — {bytes}', // 'Target missed — {bytes}'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    grewBy: 'বেড়েছে {bytes}: আবার এনকোড করলে আসলটির চেয়ে বড় হয়', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'ছবির মতো PNG-এর জন্য WebP বা JPG সাধারণত ছোট হয়৤', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'আসলটি রাখুন', // 'Keep original'
    keptOriginalNote: 'আসল ফাইলটি রাখা হয়েছে, কারণ আবার এনকোড করলে বড় হয়ে যাচ্ছিল৤', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target}-এর নিচে বেশি রেজোলিউশন ধরে রাখতে লসলেস PNG স্বয়ংক্রিয়ভাবে {format}-এ কনভার্ট করা হয়েছে৤', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (স্বচ্ছতা ধরে রাখা হয়েছে)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল, আর আবার এনকোড করলে {bytes} বেড়েছে৤ ছোট আউটপুটের জন্য "আসলটি রাখুন" ব্যবহার করুন অথবা WebP/JPG-তে বদলান৤', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল; {quality}% কোয়ালিটিতে পরিষ্কারভাবে এক্সপোর্ট করা হয়েছে৤', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'পূর্ণ {width}×{height} px রেজোলিউশনে লক্ষ্য পূরণ হয়েছে ({qualityLabel})৤', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px-এ স্কেল করে ({percent}%) {qualityLabel}-সহ লক্ষ্য পূরণ হয়েছে৤', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'লসলেস PNG', // 'lossless PNG'
    qualityPercent: '{quality}% কোয়ালিটি', // '{quality}% quality'
    statusCannotPng:
      'লসলেস PNG দিয়ে {target}-এ পৌঁছানো যায় না (সবচেয়ে ছোট সম্ভব: {width}×{height} px-এ {bytes})৤ আরও ছোট সাইজ পেতে আউটপুট ফরম্যাট JPG বা WebP-তে বদলান৤', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'পূর্ণ {width}×{height} px ডাইমেনশনে {target}-এ পৌঁছানো যায় না (সর্বনিম্ন কোয়ালিটি সাইজ {bytes})৤ ডাইমেনশন আরও ছোট করতে "ডাইমেনশন স্কেলিংয়ের অনুমতি দিন" চালু করুন৤', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'অনুরোধ করা {target} লক্ষ্যে পরিষ্কারভাবে পৌঁছানো যায়নি৤ সবচেয়ে ছোট সত্যিকারের এনকোড করা আউটপুট {bytes} ({width}×{height} px, {quality}% কোয়ালিটি)৤ আরও বড় টার্গেট সাইজ চেষ্টা করুন৤', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'টার্গেট কমপ্রেশন ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'কমপ্রেস করা ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: '{target}-এর নিচে কমপ্রেস করতে ছবি ছাড়ুন', // 'Drop images to compress under {target}'
    errorTargetFailed: 'টার্গেট সাইজে কমপ্রেস করতে ব্যর্থ৤', // 'Target compression failed.'
    errorCorruptedFile: 'ছবির ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'টার্গেট সর্বোচ্চ ফাইল সাইজ', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} সর্বোচ্চ)', // '({bytes} max)'
    needDifferentTarget: 'KB-তে অন্য টার্গেট দরকার?', // 'Need a different target KB?'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'শুধু কোয়ালিটি কমিয়ে {target}-এর মধ্যে না ধরলে বুদ্ধিমানের মতো ডাইমেনশন ছোট করার অনুমতি দিন', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'লসলেস PNG দিয়ে {target}-এ পরিষ্কারভাবে না পৌঁছালে বড় PNG স্বয়ংক্রিয়ভাবে WebP/JPG-তে কনভার্ট করুন', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'স্বচ্ছ PNG-এর ম্যাট রং:', // 'Transparent PNG matte color:'
    compressToTarget: '{target}-এ কমপ্রেস করুন', // 'Compress to {target}'
    optimizing: 'অপটিমাইজ হচ্ছে…', // 'Optimizing...'
    clear: 'মুছুন', // 'Clear'
    losslessPngSelected: 'লসলেস PNG বেছে নেওয়া হয়েছে:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG কোয়ালিটি স্লাইডারকে উপেক্ষা করে, তাই সাইজ কমানো পুরোপুরি পিক্সেল ডাইমেনশন ছোট করার ওপর নির্ভর করে৤ বড় ছবির জন্য JPG বা WebP বেছে নিন, যাতে কড়া KB সীমায় পৌঁছানো যায় আর ঝকঝকে ভাবও থাকে৤', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'টার্গেট কমপ্রেশনের সারাংশ · লক্ষ্য ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}টি {images}-এর মধ্যে {achieved}টি {target} লক্ষ্য পূরণ করেছে', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'ছবি', // 'image'
    imagePlural: 'ছবি', // 'images'
    summaryMissed: ' · {missed}টি সত্যিকারভাবে ধরানো যায়নি (বিস্তারিত নিচে)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'মোট সাশ্রয়: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'মোট সাশ্রয়: {bytes} (বেড়েছে {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    metricOriginal: 'আসল', // 'Original' (metric label)
    metricOutput: 'আউটপুট', // 'Output' (metric label)
    metricSpaceSaved: 'জায়গা সাশ্রয়', // 'Space Saved' (metric label)
    metricReduction: 'কমেছে', // 'Reduction' (metric label)
    metricSizeChange: 'সাইজের পরিবর্তন', // 'Size Change' (metric label)
    underTarget: '{target}-এর নিচে ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'লক্ষ্য পূরণ হয়নি — {bytes}', // 'Target missed — {bytes}'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    grewBy: 'বেড়েছে {bytes}: আবার এনকোড করলে আসলটির চেয়ে বড় হয়', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'ছবির মতো PNG-এর জন্য WebP বা JPG সাধারণত ছোট হয়৤', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'আসলটি রাখুন', // 'Keep original'
    keptOriginalNote: 'আসল ফাইলটি রাখা হয়েছে, কারণ আবার এনকোড করলে বড় হয়ে যাচ্ছিল৤', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target}-এর নিচে বেশি রেজোলিউশন ধরে রাখতে লসলেস PNG স্বয়ংক্রিয়ভাবে {format}-এ কনভার্ট করা হয়েছে৤', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (স্বচ্ছতা ধরে রাখা হয়েছে)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল, আর আবার এনকোড করলে {bytes} বেড়েছে৤ ছোট আউটপুটের জন্য "আসলটি রাখুন" ব্যবহার করুন অথবা WebP/JPG-তে বদলান৤', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল; {quality}% কোয়ালিটিতে পরিষ্কারভাবে এক্সপোর্ট করা হয়েছে৤', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'পূর্ণ {width}×{height} px রেজোলিউশনে লক্ষ্য পূরণ হয়েছে ({qualityLabel})৤', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px-এ স্কেল করে ({percent}%) {qualityLabel}-সহ লক্ষ্য পূরণ হয়েছে৤', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'লসলেস PNG', // 'lossless PNG'
    qualityPercent: '{quality}% কোয়ালিটি', // '{quality}% quality'
    statusCannotPng:
      'লসলেস PNG দিয়ে {target}-এ পৌঁছানো যায় না (সবচেয়ে ছোট সম্ভব: {width}×{height} px-এ {bytes})৤ আরও ছোট সাইজ পেতে আউটপুট ফরম্যাট JPG বা WebP-তে বদলান৤', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'পূর্ণ {width}×{height} px ডাইমেনশনে {target}-এ পৌঁছানো যায় না (সর্বনিম্ন কোয়ালিটি সাইজ {bytes})৤ ডাইমেনশন আরও ছোট করতে "ডাইমেনশন স্কেলিংয়ের অনুমতি দিন" চালু করুন৤', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'অনুরোধ করা {target} লক্ষ্যে পরিষ্কারভাবে পৌঁছানো যায়নি৤ সবচেয়ে ছোট সত্যিকারের এনকোড করা আউটপুট {bytes} ({width}×{height} px, {quality}% কোয়ালিটি)৤ আরও বড় টার্গেট সাইজ চেষ্টা করুন৤', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'টার্গেট কমপ্রেশন ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'কমপ্রেস করা ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: '{target}-এর নিচে কমপ্রেস করতে ছবি ছাড়ুন', // 'Drop images to compress under {target}'
    errorTargetFailed: 'টার্গেট সাইজে কমপ্রেস করতে ব্যর্থ৤', // 'Target compression failed.'
    errorCorruptedFile: 'ছবির ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'টার্গেট সর্বোচ্চ ফাইল সাইজ', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} সর্বোচ্চ)', // '({bytes} max)'
    needDifferentTarget: 'KB-তে অন্য টার্গেট দরকার?', // 'Need a different target KB?'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'শুধু কোয়ালিটি কমিয়ে {target}-এর মধ্যে না ধরলে বুদ্ধিমানের মতো ডাইমেনশন ছোট করার অনুমতি দিন', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'লসলেস PNG দিয়ে {target}-এ পরিষ্কারভাবে না পৌঁছালে বড় PNG স্বয়ংক্রিয়ভাবে WebP/JPG-তে কনভার্ট করুন', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'স্বচ্ছ PNG-এর ম্যাট রং:', // 'Transparent PNG matte color:'
    compressToTarget: '{target}-এ কমপ্রেস করুন', // 'Compress to {target}'
    optimizing: 'অপটিমাইজ হচ্ছে…', // 'Optimizing...'
    clear: 'মুছুন', // 'Clear'
    losslessPngSelected: 'লসলেস PNG বেছে নেওয়া হয়েছে:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG কোয়ালিটি স্লাইডারকে উপেক্ষা করে, তাই সাইজ কমানো পুরোপুরি পিক্সেল ডাইমেনশন ছোট করার ওপর নির্ভর করে৤ বড় ছবির জন্য JPG বা WebP বেছে নিন, যাতে কড়া KB সীমায় পৌঁছানো যায় আর ঝকঝকে ভাবও থাকে৤', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'টার্গেট কমপ্রেশনের সারাংশ · লক্ষ্য ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}টি {images}-এর মধ্যে {achieved}টি {target} লক্ষ্য পূরণ করেছে', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'ছবি', // 'image'
    imagePlural: 'ছবি', // 'images'
    summaryMissed: ' · {missed}টি সত্যিকারভাবে ধরানো যায়নি (বিস্তারিত নিচে)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'মোট সাশ্রয়: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'মোট সাশ্রয়: {bytes} (বেড়েছে {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    metricOriginal: 'আসল', // 'Original' (metric label)
    metricOutput: 'আউটপুট', // 'Output' (metric label)
    metricSpaceSaved: 'জায়গা সাশ্রয়', // 'Space Saved' (metric label)
    metricReduction: 'কমেছে', // 'Reduction' (metric label)
    metricSizeChange: 'সাইজের পরিবর্তন', // 'Size Change' (metric label)
    underTarget: '{target}-এর নিচে ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'লক্ষ্য পূরণ হয়নি — {bytes}', // 'Target missed — {bytes}'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    grewBy: 'বেড়েছে {bytes}: আবার এনকোড করলে আসলটির চেয়ে বড় হয়', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'ছবির মতো PNG-এর জন্য WebP বা JPG সাধারণত ছোট হয়৤', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'আসলটি রাখুন', // 'Keep original'
    keptOriginalNote: 'আসল ফাইলটি রাখা হয়েছে, কারণ আবার এনকোড করলে বড় হয়ে যাচ্ছিল৤', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target}-এর নিচে বেশি রেজোলিউশন ধরে রাখতে লসলেস PNG স্বয়ংক্রিয়ভাবে {format}-এ কনভার্ট করা হয়েছে৤', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (স্বচ্ছতা ধরে রাখা হয়েছে)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল, আর আবার এনকোড করলে {bytes} বেড়েছে৤ ছোট আউটপুটের জন্য "আসলটি রাখুন" ব্যবহার করুন অথবা WebP/JPG-তে বদলান৤', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল; {quality}% কোয়ালিটিতে পরিষ্কারভাবে এক্সপোর্ট করা হয়েছে৤', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'পূর্ণ {width}×{height} px রেজোলিউশনে লক্ষ্য পূরণ হয়েছে ({qualityLabel})৤', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px-এ স্কেল করে ({percent}%) {qualityLabel}-সহ লক্ষ্য পূরণ হয়েছে৤', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'লসলেস PNG', // 'lossless PNG'
    qualityPercent: '{quality}% কোয়ালিটি', // '{quality}% quality'
    statusCannotPng:
      'লসলেস PNG দিয়ে {target}-এ পৌঁছানো যায় না (সবচেয়ে ছোট সম্ভব: {width}×{height} px-এ {bytes})৤ আরও ছোট সাইজ পেতে আউটপুট ফরম্যাট JPG বা WebP-তে বদলান৤', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'পূর্ণ {width}×{height} px ডাইমেনশনে {target}-এ পৌঁছানো যায় না (সর্বনিম্ন কোয়ালিটি সাইজ {bytes})৤ ডাইমেনশন আরও ছোট করতে "ডাইমেনশন স্কেলিংয়ের অনুমতি দিন" চালু করুন৤', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'অনুরোধ করা {target} লক্ষ্যে পরিষ্কারভাবে পৌঁছানো যায়নি৤ সবচেয়ে ছোট সত্যিকারের এনকোড করা আউটপুট {bytes} ({width}×{height} px, {quality}% কোয়ালিটি)৤ আরও বড় টার্গেট সাইজ চেষ্টা করুন৤', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'টার্গেট কমপ্রেশন ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'কমপ্রেস করা ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'বাল্ক কমপ্রেশনের জন্য কয়েক ডজন ছবি ছাড়ুন', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'কমপ্রেস করতে ব্যর্থ৤', // 'Compression failed.'
    errorCorruptedFile: 'ছবির ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'দ্রুত ব্যাচ প্রোফাইল:', // 'Quick Batch Profiles:'
    profileWebFast: 'ওয়েব ফাস্ট (WebP ৭৫%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'ইমেইল / শেয়ারিং (JPG ৬৫%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'উচ্চ ফিডেলিটি (৮৫%)', // 'High Fidelity (85%)'
    compressingBatch: 'লোকালি ব্যাচ কমপ্রেস হচ্ছে…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared i18n-bn.ts dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated in Batch 1.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: '{target}-এর নিচে কমপ্রেস করতে ছবি ছাড়ুন', // `Drop images to compress under ${targetLabel}`
    targetMaxFileSize: 'টার্গেট সর্বোচ্চ ফাইল সাইজ', // 'Target Maximum File Size'
    targetNumberAria: 'টার্গেট ফাইল সাইজের সংখ্যা', // aria-label 'Target file size number'
    maxSuffix: '({size} সর্বোচ্চ)', // '({formatBytes(effectiveTargetBytes)} max)'
    needDifferentTarget: 'KB-তে অন্য টার্গেট দরকার?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    allowDownscale: 'শুধু কোয়ালিটি কমিয়ে {target}-এর মধ্যে না ধরলে বুদ্ধিমানের মতো ডাইমেনশন ছোট করার অনুমতি দিন', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'লসলেস PNG দিয়ে {target}-এ পরিষ্কারভাবে না পৌঁছালে বড় PNG স্বয়ংক্রিয়ভাবে WebP/JPG-তে কনভার্ট করুন', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'স্বচ্ছ PNG-এর ম্যাট রং:', // 'Transparent PNG matte color:'
    losslessPngTitle: 'লসলেস PNG বেছে নেওয়া হয়েছে:', // 'Lossless PNG selected:'
    losslessPngNote: 'PNG কোয়ালিটি স্লাইডারকে উপেক্ষা করে, তাই সাইজ কমানো পুরোপুরি পিক্সেল ডাইমেনশন ছোট করার ওপর নির্ভর করে৤ বড় ছবির জন্য JPG বা WebP বেছে নিন, যাতে কড়া KB সীমায় পৌঁছানো যায় আর ঝকঝকে ভাবও থাকে৤', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: '{target}-এ কমপ্রেস করুন', // 'Compress to {targetLabel}'
    optimizing: 'অপটিমাইজ হচ্ছে…', // 'Optimizing...'
    clear: 'মুছুন', // 'Clear'
    targetSummary: 'টার্গেট কমপ্রেশনের সারাংশ · লক্ষ্য ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{total}টি {images}-এর মধ্যে {achieved}টি {target} লক্ষ্য পূরণ করেছে', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'ছবি', // 'image'
    imagePlural: 'ছবি', // 'images'
    summaryMissed: '· {missed}টি সত্যিকারভাবে ধরানো যায়নি (বিস্তারিত নিচে)', // '· {missed} could not honestly fit (details below)'
    totalSaved: 'মোট সাশ্রয়: {saved}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(বেড়েছে {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    underTarget: '{target}-এর নিচে ({size})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'লক্ষ্য পূরণ হয়নি — {size}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'আসল', // 'Original'
    columnOutput: 'আউটপুট', // 'Output'
    columnSpaceSaved: 'জায়গা সাশ্রয়', // 'Space Saved'
    columnReduction: 'কমেছে', // 'Reduction'
    columnSizeChange: 'সাইজের পরিবর্তন', // 'Size Change'
    grewBy: 'বেড়েছে {amount}: আবার এনকোড করলে আসলটির চেয়ে বড় হয়৤', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'ছবির মতো PNG-এর জন্য WebP বা JPG সাধারণত ছোট হয়৤', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'আসলটি রাখুন', // 'Keep original'
    keptOriginalNote: 'আসল ফাইলটি রাখা হয়েছে, কারণ আবার এনকোড করলে বড় হয়ে যাচ্ছিল৤', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'আসল ফাইলটি ইতিমধ্যেই {target}-এর নিচে ছিল; {quality}% কোয়ালিটিতে পরিষ্কারভাবে এক্সপোর্ট করা হয়েছে৤', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'পূর্ণ {width}×{height} px রেজোলিউশনে লক্ষ্য পূরণ হয়েছে ({quality})৤', // 'Target met at full {width}×{height}px resolution ({quality}% quality / lossless PNG).'
    statusMetScaled: '{width}×{height} px-এ স্কেল করে ({scale}% স্কেল) লক্ষ্য পূরণ হয়েছে৤', // 'Target met by scaling to {width}×{height}px ({scale}% scale).'
    statusCannotPng: 'লসলেস PNG দিয়ে {target}-এ পৌঁছানো যায় না (সবচেয়ে ছোট সম্ভব: {size})৤', // 'Cannot reach {target} with lossless PNG (smallest achievable: {size}).'
    statusCannotFull: 'পূর্ণ {width}×{height} px ডাইমেনশনে {target}-এ পৌঁছানো যায় না (সর্বনিম্ন কোয়ালিটি সাইজ {size})৤', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {size}).'
    statusCannotCleanly: '{target} লক্ষ্যে পরিষ্কারভাবে পৌঁছানো যায়নি৤ সবচেয়ে ছোট সত্যিকারের এনকোড করা আউটপুট {size}৤', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {size}.'
    switchedFormatNote: 'লসলেস PNG স্বয়ংক্রিয়ভাবে {format}-এ কনভার্ট করা হয়েছে৤', // 'Auto-converted lossless PNG to {format}.'
    errorTargetFailed: 'টার্গেট কমপ্রেশনে ত্রুটি৤', // 'Target compression failed.'
    errorCorruptedFile: 'ছবির ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'টার্গেট কমপ্রেশন ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'কমপ্রেস করা ({size})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} মুছুন', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'বাল্ক রিসাইজের জন্য অনেক ছবি ছাড়ুন', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'বাল্ক রিসাইজের কৌশল', // 'Batch Resize Strategy'
    strategyBounding: 'সর্বোচ্চ প্রস্থ × উচ্চতায় বসান', // 'Fit Max W × H'
    strategyWidth: 'একই প্রস্থ', // 'Uniform Width'
    strategyExact: 'ঠিক প্রস্থ × উচ্চতা', // 'Exact W × H'
    strategyPercentage: 'শতাংশ (%)', // 'Percentage (%)'
    outputFormat: 'আউটপুট ফরম্যাট', // 'Output Format'
    formatOriginal: 'আসল', // 'Original' — same in Bengali
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'সব ছবি স্কেল করুন:', // 'Scale All Images:'
    maxWidth: 'সর্বোচ্চ প্রস্থ (px)', // 'Max Width (px)'
    targetWidth: 'টার্গেট প্রস্থ (px)', // 'Target Width (px)'
    exactWidth: 'ঠিক প্রস্থ (px)', // 'Exact Width (px)'
    maxHeight: 'সর্বোচ্চ উচ্চতা (px)', // 'Max Height (px)'
    exactHeight: 'ঠিক উচ্চতা (px)', // 'Exact Height (px)'
    doNotEnlarge: 'ছোট ছবি বড় করবেন না', // 'Do not enlarge smaller images'
    fitMode: 'ফিট মোড', // 'Fit Mode'
    fitContain: 'কনটেইন', // 'Contain'
    fitCover: 'কভার', // 'Cover'
    fitStretch: 'টেনে বসান', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'ব্লগ 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'ই-কমার্স 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'থাম্বনেইল 600px', // 'Thumbnail 600px'
    quality: 'কোয়ালিটি:', // 'Quality:'
    matteBg: 'ম্যাট ব্যাকগ্রাউন্ড:', // 'Matte BG:'
    resizingProgress: 'রিসাইজ হচ্ছে ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'বাল্ক রিসাইজ ({count})', // 'Bulk Resize ({items.length})'
    clear: 'মুছুন', // 'Clear'
    bulkResizeComplete: 'বাল্ক রিসাইজ সম্পন্ন', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count}টি ছবি রিসাইজ হয়ে প্রস্তুত', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count}টি ছবি রিসাইজ হয়ে প্রস্তুত', // '{count} images resized and ready'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'বাল্ক রিসাইজে ত্রুটি৤', // 'Batch resize failed.'
    errorCorruptedFile: 'ছবির ফাইলটি নষ্ট বা পড়া যাচ্ছে না৤', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'বাল্ক রিসাইজের তুলনা', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'রিসাইজ করা (পরে)', // 'Resized (After)'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} মুছুন', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'বাল্কে ফরম্যাট কনভার্ট করতে অনেক ছবি ছাড়ুন', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'ব্যাচ কোন ফরম্যাটে কনভার্ট করবেন', // 'Convert Batch To Format'
    formatWebp: 'WebP (ওয়েবের জন্য সবচেয়ে হালকা)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (সর্বত্র চলে)', // 'JPG (Universal)'
    formatPng: 'PNG (লসলেস ও স্বচ্ছতাসহ)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'ঐচ্ছিক ফাইলনাম সাফিক্স', // 'Optional Filename Suffix'
    placeholderSuffix: 'যেমন _web', // placeholder 'e.g. _web'
    transparentFill: 'স্বচ্ছ ফিল', // 'Transparent Fill'
    qualityLosslessPng: 'কোয়ালিটি (লসলেস PNG)', // 'Quality (Lossless PNG)'
    qualityPercent: 'কোয়ালিটি ({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: 'কনভার্ট হচ্ছে ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'সব কনভার্ট করুন ({count})', // 'Convert All ({items.length})'
    clear: 'মুছুন', // 'Clear'
    bulkConversionSummary: 'বাল্ক কনভার্সনের সারাংশ', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count}টি ফাইল {format}-এ কনভার্ট হয়েছে · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    convertedTo: '{ext}-এ কনভার্ট হয়েছে', // 'Converted to {ext}'
    errorConversionFailed: 'বাল্ক কনভার্সনে ত্রুটি৤', // 'Batch conversion failed.'
    errorUnsupportedFile: 'সাপোর্টেড নয় এমন বা নষ্ট ছবির ফাইল৤', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'বাল্ক ফরম্যাট কনভার্সন', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'কনভার্ট করা (পরে)', // 'Converted (After)'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} মুছুন', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Core Web Vitals-এর জন্য অপটিমাইজ করতে ওয়েব অ্যাসেট ছাড়ুন', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'ওয়েব পারফরম্যান্স প্রিসেট', // 'Web Performance Presets'
    presetHero: 'হিরো / ব্যানার', // 'Hero / Banner'
    presetHeroDesc: 'সর্বোচ্চ 1600 px · WebP ৮০%', // 'Max 1600px · WebP 80%'
    presetProduct: 'ই-কমার্স প্রোডাক্ট', // 'E-Commerce Product'
    presetProductDesc: 'সর্বোচ্চ 1200 px · WebP ৮২%', // 'Max 1200px · WebP 82%'
    presetThumb: 'কার্ড / থাম্বনেইল', // 'Card / Thumbnail'
    presetThumbDesc: 'সর্বোচ্চ 640 px · WebP ৭৫%', // 'Max 640px · WebP 75%'
    presetOg: 'সোশ্যাল OG / ইমেইল', // 'Social OG / Email'
    presetOgDesc: 'সর্বোচ্চ 1200 px · JPG ৮২%', // 'Max 1200px · JPG 82%'
    presetRetina: 'Retina 2× গ্রাফিক', // 'Retina 2× Graphic'
    presetRetinaDesc: 'সর্বোচ্চ 1920 px · WebP ৮৮%', // 'Max 1920px · WebP 88%'
    webFormat: 'ওয়েব ফরম্যাট', // 'Web Format'
    maxDimension: 'সর্বোচ্চ ডাইমেনশন (দীর্ঘ দিক)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'আসল ডাইমেনশন রাখুন', // 'Keep Original Dimensions'
    max1920: 'সর্বোচ্চ 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'সর্বোচ্চ 1600 px (হিরো / ব্যানার)', // 'Max 1600px (Hero / Banner)'
    max1200: 'সর্বোচ্চ 1200 px (ব্লগ / প্রোডাক্ট)', // 'Max 1200px (Blog / Product)'
    max800: 'সর্বোচ্চ 800 px (কনটেন্টের ভেতরে)', // 'Max 800px (In-Content)'
    max640: 'সর্বোচ্চ 640 px (থাম্বনেইল)', // 'Max 640px (Thumbnails)'
    quality: 'কোয়ালিটি:', // 'Quality:'
    onlyDownscale: 'শুধু বড় ছবি ছোট করুন (EXIF ও GPS মেটাডেটা স্বয়ংক্রিয়ভাবে মোছা হয়)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'অপটিমাইজ হচ্ছে…', // 'Optimizing...'
    optimizeForWeb: 'ওয়েবের জন্য অপটিমাইজ করুন ({count})', // 'Optimize for Web ({items.length})'
    clear: 'মুছুন', // 'Clear'
    webPerformanceSummary: 'ওয়েব পারফরম্যান্সের সারাংশ', // 'Web Performance Summary'
    pageWeightSaved: '({percent}% হালকা · পেজের {saved} ওজন সাশ্রয় হয়েছে)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · বেড়েছে {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    webReady: 'ওয়েব-প্রস্তুত ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: 'বেড়েছে {amount} ({percent})', // 'Grew by {amount} ({formatPercent})'
    copyImg: '<img> কপি করুন', // 'Copy <img>'
    copiedHtml: 'HTML কপি হয়েছে', // 'Copied HTML'
    copyImgTitle: 'স্পষ্ট প্রস্থ ও উচ্চতাসহ রেসপন্সিভ HTML img ট্যাগ কপি করুন', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'ওয়েব অপটিমাইজেশনে ত্রুটি৤', // 'Web optimization failed.'
    errorCorruptedFile: 'নষ্ট বা সাপোর্টেড নয় এমন ছবি৤', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'ওয়েব অপটিমাইজেশনের তুলনা', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'ওয়েব-প্রস্তুত (পরে)', // 'Web-Ready (After)'
    compare: 'তুলনা করুন', // 'Compare'
    download: 'ডাউনলোড', // 'Download'
    removeImage: '{name} মুছুন', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'কমপ্রেস করতে অ্যানিমেটেড GIF ছাড়ুন', // 'Drop an animated GIF to compress'
    decodingGif: 'আপনার ব্রাউজারে লোকালি অ্যানিমেটেড GIF-এর ফ্রেম ডিকোড হচ্ছে…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'ফ্রেম', // 'frame'
    framePlural: 'ফ্রেম', // 'frames'
    presetLight: 'হালকা', // 'Light'
    presetBalanced: 'ভারসাম্যপূর্ণ', // 'Balanced'
    presetMaxShrink: 'সর্বোচ্চ ছোট', // 'Max Shrink'
    colorPaletteLimit: 'কালার প্যালেটের সীমা', // 'Color Palette Limit'
    colorsCount: '{count}টি রং', // '{maxColors} colors'
    outputScale: 'আউটপুট স্কেল', // 'Output Scale'
    scaleWithDims: '{percent}% ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'ফ্রেম রেট অপটিমাইজেশন', // 'Frame Rate Optimization'
    keepAllFrames: 'সব ফ্রেম রাখুন', // 'Keep All Frames'
    dropEvery2nd: 'প্রতি ২য় ফ্রেম বাদ দিন (প্রায় ৫০% ছোট)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'প্রতি ৩টির মধ্যে ১টি ফ্রেম রাখুন', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'GIF কমপ্রেস হচ্ছে ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'GIF কমপ্রেস করুন', // 'Compress GIF'
    reset: 'রিসেট', // 'Reset'
    originalGif: 'আসল GIF', // 'Original GIF'
    compressedGif: 'কমপ্রেস করা GIF', // 'Compressed GIF'
    sizeChange: 'সাইজের পরিবর্তন', // 'Size Change'
    sizeAndFrames: '{size} · {frames}f', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'কমপ্রেস করা GIF ডাউনলোড করুন', // 'Download Compressed GIF'
    notSmallerNotice: 'এই আসল GIF ইতিমধ্যেই অনেক অপটিমাইজ করা ছিল, অথবা ইনপুটের চেয়ে বড় ফুল-ফ্রেম প্যালেট ব্যবহার করে৤ {size}-এর নিচে আনতে কালার প্যালেট ৩২–৬৪ রঙে নামান, আউটপুট স্কেল ৭৫% বা ৫০%-এ নামান, অথবা প্রতি ২য় ফ্রেম বাদ দিন৤', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'আপনার ব্রাউজারেই পরিষ্কারভাবে {percent}% কমপ্রেস হয়েছে ({saved} সাশ্রয়)৤', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'আসল ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'কমপ্রেস করা ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'আসল GIF', // alt 'Original GIF'
    altCompressedGif: 'কমপ্রেস করা GIF', // alt 'Compressed GIF'
    errorGifFailed: 'GIF কমপ্রেশনে ত্রুটি৤', // 'GIF compression failed.'
    errorDecodeFrames: 'GIF-এর ফ্রেম ডিকোড করা যায়নি৤', // 'Could not decode GIF frames.'
    errorTooSmall: 'ফাইলটি বৈধ GIF হওয়ার জন্য অনেক ছোট৤', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'বেছে নেওয়া ফাইলটি বৈধ GIF87a বা GIF89a অ্যানিমেশন নয়৤', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIF-এর ক্যানভাস ডাইমেনশন 0×0 অবৈধ৤', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'GIF-এর গ্লোবাল কালার টেবিল কাটা পড়েছে৤', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'এই GIF ফাইল থেকে কোনো ছবির ফ্রেম ডিকোড করা যায়নি৤', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: '2D ক্যানভাস কনটেক্সট চালু করা যায়নি৤', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'JPG-তে কনভার্ট করতে iPhone-এর HEIC বা HEIF ছবি ছাড়ুন', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'ক্লায়েন্ট-সাইড WebAssembly (heic2any) দিয়ে আপনার ব্রাউজারের ভেতরে লোকালি Apple-এর HEIC ও HEIF ছবি ডিকোড করে — আপনার ছবি কখনো আপনার ডিভাইস ছাড়ে না৤', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    outputQuality: 'JPG আউটপুট কোয়ালিটি', // 'JPG Output Quality'
    smallerFile: 'ছোট ফাইল (২০%)', // 'Smaller file (20%)'
    balanced: 'ভারসাম্যপূর্ণ (৮৫%)', // 'Balanced (85%)'
    maxDetail: 'সর্বোচ্চ ডিটেইল (১০০%)', // 'Max detail (100%)'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    clear: 'মুছুন', // 'Clear'
    batchSummary: 'HEIC → JPG ব্যাচের সারাংশ', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count}টি {files} কনভার্ট হয়েছে · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    columnChange: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'JPG ডাউনলোড করুন', // 'Download JPG'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'এই HEIC/HEIF ফাইলটি ডিকোড করা যায়নি৤ এটি বৈধ iPhone/Apple HEIC ছবি কিনা নিশ্চিত করুন৤', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: '"{filename}" ডিকোড করা যায়নি৤ এটি বৈধ HEIC ছবি কিনা যাচাই করুন৤', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: '{name} JPG-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'লসলেস PNG-তে কনভার্ট করতে JPG বা JPEG ছবি ছাড়ুন', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    losslessPngOutput: 'লসলেস PNG আউটপুট', // 'Lossless PNG Output'
    losslessPngEncoding: 'লসলেস PNG এনকোডিং', // 'Lossless PNG Encoding'
    losslessPngNote: 'PNG ধারালো কিনারা, টেক্সট ও আলফা স্বচ্ছতা ধরে রাখে — লসি কমপ্রেশনের কোনো ত্রুটি ছাড়াই৤', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    clear: 'মুছুন', // 'Clear'
    batchSummary: 'JPG → PNG ব্যাচের সারাংশ', // 'JPG → PNG Batch Summary'
    filesConverted: '{count}টি {files} কনভার্ট হয়েছে · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    columnChange: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'PNG ডাউনলোড করুন', // 'Download PNG'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    errorDecodeFile: '"{filename}" ডিকোড করা যায়নি৤ এটি বৈধ JPG ছবি কিনা যাচাই করুন৤', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: '{name} PNG-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'ছোট JPG-তে কনভার্ট করতে PNG ফাইল ছাড়ুন', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    outputQuality: 'JPG আউটপুট কোয়ালিটি', // 'JPG Output Quality'
    smallerFile: 'ছোট ফাইল (২০%)', // 'Smaller file (20%)'
    balanced: 'ভারসাম্যপূর্ণ (৮৫%)', // 'Balanced (85%)'
    maxDetail: 'সর্বোচ্চ ডিটেইল (১০০%)', // 'Max detail (100%)'
    transparentMatteColor: 'স্বচ্ছ ব্যাকগ্রাউন্ডের ম্যাট রং', // 'Transparent Background Matte Color'
    matteWhite: 'সাদা', // 'White'
    matteBlack: 'কালো', // 'Black'
    matteLightGray: 'হালকা ধূসর', // 'Light Gray'
    matteNote: 'JPG স্বচ্ছতা সাপোর্ট করে না; স্বচ্ছ অংশগুলো এই রঙে পরিষ্কারভাবে ভরে যাবে৤', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    clear: 'মুছুন', // 'Clear'
    batchSummary: 'PNG → JPG ব্যাচের সারাংশ', // 'PNG → JPG Batch Summary'
    filesConverted: '{count}টি {files} কনভার্ট হয়েছে · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    columnChange: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'JPG ডাউনলোড করুন', // 'Download JPG'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    errorDecodeFile: '"{filename}" ডিকোড করা যায়নি৤ এটি বৈধ PNG ছবি কিনা যাচাই করুন৤', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: '{name} JPG-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'হালকা WebP-তে কনভার্ট করতে JPG ছবি ছাড়ুন', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP আউটপুট কোয়ালিটি', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP আউটপুট কোয়ালিটি', // aria-label 'WebP output quality'
    smallerFile: 'ছোট ফাইল (২০%)', // 'Smaller file (20%)'
    balanced: 'ভারসাম্যপূর্ণ (৮৫%)', // 'Balanced (85%)'
    maxDetail: 'সর্বোচ্চ ডিটেইল (১০০%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} ব্যাচের সারাংশ', // '{source} → {target} Batch Summary'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    filesConvertedSuffix: 'কনভার্ট হয়েছে', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'WebP ডাউনলোড করুন', // 'Download WebP'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    clear: 'মুছুন', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} WebP-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" ডিকোড করা যায়নি৤ এটি বৈধ JPG ছবি কিনা যাচাই করুন৤', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'সর্বত্র চলা JPG-তে কনভার্ট করতে WebP ছবি ছাড়ুন', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG আউটপুট কোয়ালিটি', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG আউটপুট কোয়ালিটি', // aria-label 'JPG output quality'
    smallerFile: 'ছোট ফাইল (২০%)', // 'Smaller file (20%)'
    balanced: 'ভারসাম্যপূর্ণ (৮৫%)', // 'Balanced (85%)'
    maxDetail: 'সর্বোচ্চ ডিটেইল (১০০%)', // 'Max detail (100%)'
    matteColorLabel: 'স্বচ্ছ ব্যাকগ্রাউন্ডের ম্যাট রং', // 'Transparent Background Matte Color'
    matteAriaLabel: 'ব্যাকগ্রাউন্ডের ম্যাট রং', // aria-label 'Matte background color'
    matteWhite: 'সাদা', // 'White'
    matteBlack: 'কালো', // 'Black'
    matteLightGray: 'হালকা ধূসর', // 'Light Gray'
    matteHint: 'JPG স্বচ্ছতা সাপোর্ট করে না; স্বচ্ছ অংশগুলো এই রঙে পরিষ্কারভাবে ভরে যাবে৤', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} ব্যাচের সারাংশ', // '{source} → {target} Batch Summary'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    filesConvertedSuffix: 'কনভার্ট হয়েছে', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'JPG ডাউনলোড করুন', // 'Download JPG'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    clear: 'মুছুন', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" ডিকোড করা যায়নি৤ এটি বৈধ WebP ছবি কিনা যাচাই করুন৤', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'স্বচ্ছ WebP-তে কনভার্ট করতে PNG ফাইল ছাড়ুন', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP আউটপুট কোয়ালিটি', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP আউটপুট কোয়ালিটি', // aria-label 'WebP output quality'
    smallerFile: 'ছোট ফাইল (২০%)', // 'Smaller file (20%)'
    balanced: 'ভারসাম্যপূর্ণ (৮৫%)', // 'Balanced (85%)'
    maxDetail: 'সর্বোচ্চ ডিটেইল (১০০%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} ব্যাচের সারাংশ', // '{source} → {target} Batch Summary'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    filesConvertedSuffix: 'কনভার্ট হয়েছে', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'WebP ডাউনলোড করুন', // 'Download WebP'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    clear: 'মুছুন', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} WebP-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" ডিকোড করা যায়নি৤ এটি বৈধ PNG ছবি কিনা যাচাই করুন৤', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'লসলেস PNG-তে কনভার্ট করতে WebP ফাইল ছাড়ুন', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    losslessPngOutput: 'লসলেস PNG আউটপুট', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'লসলেস PNG এনকোডিং', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG ধারালো কিনারা, টেক্সট ও আলফা স্বচ্ছতা ধরে রাখে — লসি কমপ্রেশনের কোনো ত্রুটি ছাড়াই৤', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: '{source} → {target} ব্যাচের সারাংশ', // '{source} → {target} Batch Summary'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    filesConvertedSuffix: 'কনভার্ট হয়েছে', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'PNG ডাউনলোড করুন', // 'Download PNG'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    clear: 'মুছুন', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} PNG-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" ডিকোড করা যায়নি৤ এটি বৈধ WebP ছবি কিনা যাচাই করুন৤', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'PNG-তে রাস্টারাইজ করতে SVG ভেক্টর ফাইল ছাড়ুন', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'HTML5 Canvas দিয়ে লোকালি ইনলাইন SVG গ্রাফিক্স রাস্টারাইজ করে, স্বচ্ছ ব্যাকগ্রাউন্ড ধরে রেখে৤ সীমাবদ্ধতা: বাইরের <image> URL, বাইরের CSS স্টাইলশিট/ওয়েবফন্ট, অথবা SVG-এর ভেতরে রেফারেন্স করা স্ক্রিপ্ট — স্বতন্ত্র Canvas এক্সপোর্টে রেন্ডার নাও হতে পারে৤', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    losslessPngOutput: 'লসলেস PNG আউটপুট', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'লসলেস PNG এনকোডিং', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG ধারালো কিনারা, টেক্সট ও আলফা স্বচ্ছতা ধরে রাখে — লসি কমপ্রেশনের কোনো ত্রুটি ছাড়াই৤', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'রাস্টার এক্সপোর্ট স্কেল', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG-এর নিজস্ব ডাইমেনশনে প্রযোজ্য গুণক (সর্বোচ্চ 8000 px)৤ স্কেল বদলের পর "সব আবার কনভার্ট করুন"-এ ক্লিক করুন৤', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: '{source} → {target} ব্যাচের সারাংশ', // '{source} → {target} Batch Summary'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    filesConvertedSuffix: 'কনভার্ট হয়েছে', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'PNG ডাউনলোড করুন', // 'Download PNG'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    clear: 'মুছুন', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} PNG-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'এই SVG রাস্টারাইজ করা যায়নি৤ ফাইলটি সিনট্যাক্স ত্রুটিহীন বৈধ XML SVG মার্কআপ কিনা নিশ্চিত করুন৤', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is a valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'সর্বত্র চলা JPG-তে কনভার্ট করতে AVIF ছবি ছাড়ুন', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'আপনার ব্রাউজারের নেটিভ AVIF ডিকোডার (আধুনিক Chrome, Edge, Firefox ও Safari-তে সাপোর্ট করে) দিয়ে লোকালি AVIF ছবি ডিকোড করে, আর স্ট্যান্ডার্ড JPG ফাইল এক্সপোর্ট করে৤', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG আউটপুট কোয়ালিটি', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG আউটপুট কোয়ালিটি', // aria-label 'JPG output quality'
    smallerFile: 'ছোট ফাইল (২০%)', // 'Smaller file (20%)'
    balanced: 'ভারসাম্যপূর্ণ (৮৫%)', // 'Balanced (85%)'
    maxDetail: 'সর্বোচ্চ ডিটেইল (১০০%)', // 'Max detail (100%)'
    matteColorLabel: 'স্বচ্ছ ব্যাকগ্রাউন্ডের ম্যাট রং', // 'Transparent Background Matte Color'
    matteAriaLabel: 'ব্যাকগ্রাউন্ডের ম্যাট রং', // aria-label 'Matte background color'
    matteWhite: 'সাদা', // 'White'
    matteBlack: 'কালো', // 'Black'
    matteLightGray: 'হালকা ধূসর', // 'Light Gray'
    matteHint: 'JPG স্বচ্ছতা সাপোর্ট করে না; স্বচ্ছ অংশগুলো এই রঙে পরিষ্কারভাবে ভরে যাবে৤', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} ব্যাচের সারাংশ', // '{source} → {target} Batch Summary'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    filesConvertedSuffix: 'কনভার্ট হয়েছে', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'JPG ডাউনলোড করুন', // 'Download JPG'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    clear: 'মুছুন', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'আপনার ব্রাউজার এই AVIF ছবিটি ডিকোড করতে পারেনি৤ ফাইলটি বৈধ .avif ছবি কিনা যাচাই করুন, আর আধুনিক Chrome, Firefox, Edge বা Safari ব্রাউজার ব্যবহার করে দেখুন৤', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'কমপ্যাক্ট JPG-তে কনভার্ট করতে আনকমপ্রেসড BMP বিটম্যাপ ছাড়ুন', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'কনভার্সন পাইপলাইন:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG আউটপুট কোয়ালিটি', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG আউটপুট কোয়ালিটি', // aria-label 'JPG output quality'
    smallerFile: 'ছোট ফাইল (২০%)', // 'Smaller file (20%)'
    balanced: 'ভারসাম্যপূর্ণ (৮৫%)', // 'Balanced (85%)'
    maxDetail: 'সর্বোচ্চ ডিটেইল (১০০%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} ব্যাচের সারাংশ', // '{source} → {target} Batch Summary'
    fileSingular: 'ফাইল', // 'file'
    filePlural: 'ফাইল', // 'files'
    filesConvertedSuffix: 'কনভার্ট হয়েছে', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP তৈরি হচ্ছে…', // 'Creating ZIP...'
    downloadAllZip: 'সব ডাউনলোড করুন (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'পরিবর্তন', // 'Change'
    compare: 'তুলনা করুন', // 'Compare'
    downloadTarget: 'JPG ডাউনলোড করুন', // 'Download JPG'
    removeImage: '{name} সরান', // aria-label `Remove ${item.name}`
    converting: 'কনভার্ট হচ্ছে…', // 'Converting...'
    reconvertAll: 'সব আবার কনভার্ট করুন', // 'Re-convert All'
    clear: 'মুছুন', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG-তে কনভার্ট করা যায়নি৤', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" ডিকোড করা যায়নি৤ এটি বৈধ BMP ছবি কিনা যাচাই করুন৤', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
} as const;
