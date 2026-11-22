// Arabic (ar) UI strings for CompressMyPic — Modern Standard Arabic, natural phrasing
// as used by Arabic speakers.
// Source: ~/workspace/compressmypic/spanish/source/ (Hero, FaqSection, EducationalContent,
// ToolsDirectorySection, ShareSection, Header, Footer, ToolPageLayout, UploadZone,
// ComparisonModal, home-entry.txt, index.html, App.tsx guides section, tools.ts categories).
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. Placeholders: {name} = tool/file name, {max} = max size in MB,
// {year} = current year, {count} = number of extra errors.
// Note on uploadZone: hint and errorTooBig interpolate the max size — kept as {max}.

export const AR = {
  header: {
    home: 'الرئيسية',
    tools: 'الأدوات',
    howItWorks: 'كيف يعمل',
    faq: 'الأسئلة الشائعة',
    about: 'من نحن',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    compressImages: 'ضغط الصور',
    themeLight: 'الوضع الفاتح',
    themeDark: 'الوضع الداكن',
    themeSystem: 'وضع النظام',
    languageLabel: 'اللغة',
    homeAriaLabel: 'CompressMyPic – ضاغط صور مجاني عبر الإنترنت',
    themeLightShort: 'فاتح', // 'Light'
    themeDarkShort: 'داكن', // 'Dark'
    themeSystemShort: 'النظام', // 'System'
    themeHeading: 'السمة', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'إظهار قائمة التنقل أو إخفاؤها', // 'Toggle navigation menu'
    themeAriaLabel: 'تغيير سمة الألوان (الحالية: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'السمة: {current}', // 'Theme: {current}'
    aboutUs: 'من نحن', // 'About Us' (mobile drawer)
    contactUs: 'اتصل بنا', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'ضغط صور سريع وآمن وخاص، مباشرة في متصفحك. حسّن صور JPG وPNG وWebP دون رفع بياناتك إلى أي خادم خارجي.',
    privacyNote: 'خصوصية 100% على جهازك',
    toolsHeading: 'أدوات الصور',
    legalHeading: 'الثقة والقانون',
    guidesHeading: 'الأدلة',
    blogLabel: 'المدونة',
    moreHeading: 'أدوات إضافية',
    directoryHeading: 'أدوات متقدمة للضغط والتعديل والتطوير',
    processedLocally: 'تتم المعالجة محليًا باستخدام HTML5 Canvas',
    bottomRights:
      '© {year} CompressMyPic. جميع الحقوق محفوظة. أداة مجانية لضغط الصور في المتصفح.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: 'للتواصل: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'ضغط الصور' },
      { slug: '/image-resizer', label: 'تغيير حجم الصورة' },
      { slug: '/image-converter', label: 'تحويل الصور' },
      { slug: '/rotate-flip-image', label: 'تدوير الصورة وقلبها' },
      { slug: '/image-to-pdf', label: 'تحويل الصورة إلى PDF' },
      { slug: '/remove-image-metadata', label: 'إزالة البيانات الوصفية' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'سياسة الخصوصية' },
      { slug: '/terms', label: 'شروط الخدمة' },
      { slug: '/about', label: 'من نحن' },
      { slug: '/contact', label: 'التواصل مع الدعم' },
      { slug: '/disclaimer', label: 'إخلاء المسؤولية' },
      { slug: '/cookie-policy', label: 'سياسة ملفات تعريف الارتباط' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'كيفية ضغط الصور لواتساب دون فقدان الجودة',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG مقابل PNG مقابل WebP: أي صيغة تختار؟',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'كيفية تقليل حجم الصورة إلى 100 كيلوبايت للويب والبريد',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'عارض البيانات الوصفية وEXIF' },
      { slug: '/favicon-generator', label: 'مولّد الأيقونة المفضلة (فافيكون)' },
      { slug: '/image-color-picker', label: 'منتقي ألوان الصور' },
      { slug: '/image-dimensions-checker', label: 'مدقق أبعاد الصور' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: 'ضغط الصورة إلى 50 كيلوبايت' },
      { slug: '/compress-image-to-100kb', label: 'ضغط الصورة إلى 100 كيلوبايت' },
      { slug: '/compress-image-to-200kb', label: 'ضغط الصورة إلى 200 كيلوبايت' },
      { slug: '/compress-image-to-500kb', label: 'ضغط الصورة إلى 500 كيلوبايت' },
      { slug: '/target-file-size-compressor', label: 'ضاغط حسب حجم الملف المستهدف' },
      { slug: '/bulk-image-compressor', label: 'ضاغط الصور الجماعي' },
      { slug: '/bulk-image-resizer', label: 'تغيير حجم الصور جماعيًا' },
      { slug: '/bulk-image-converter', label: 'تحويل الصور جماعيًا' },
      { slug: '/web-image-optimizer', label: 'محسّن صور الويب' },
      { slug: '/gif-compressor', label: 'ضاغط GIF' },
      { slug: '/image-cropper', label: 'قص الصور' },
      { slug: '/image-watermark', label: 'علامة مائية على الصورة' },
      { slug: '/blur-pixelate-image', label: 'تعتيم الصورة وبكسلتها' },
      { slug: '/add-text-to-image', label: 'إضافة نص إلى الصورة' },
      { slug: '/image-border-generator', label: 'مولّد حدود الصور' },
      { slug: '/round-image-corners', label: 'تدوير زوايا الصورة' },
      { slug: '/image-brightness-editor', label: 'محرر السطوع' },
      { slug: '/image-contrast-editor', label: 'محرر التباين' },
      { slug: '/image-saturation-editor', label: 'محرر التشبع' },
      { slug: '/image-filters', label: 'فلاتر الصور' },
      { slug: '/add-background-to-image', label: 'إضافة خلفية إلى الصورة' },
      { slug: '/image-splitter', label: 'مقسّم الصور' },
      { slug: '/image-dpi-changer', label: 'تغيير DPI للصورة' },
      { slug: '/image-to-base64', label: 'تحويل الصورة إلى Base64' },
      { slug: '/base64-to-image', label: 'تحويل Base64 إلى صورة' },
      { slug: '/image-color-palette-extractor', label: 'استخراج لوحة الألوان' },
      { slug: '/gif-maker', label: 'صانع GIF' },
      { slug: '/image-collage-maker', label: 'صانع الكولاج' },
      { slug: '/heic-to-jpg', label: 'HEIC إلى JPG' },
      { slug: '/jpg-to-png', label: 'JPG إلى PNG' },
      { slug: '/png-to-jpg', label: 'PNG إلى JPG' },
      { slug: '/jpg-to-webp', label: 'JPG إلى WebP' },
      { slug: '/webp-to-jpg', label: 'WebP إلى JPG' },
      { slug: '/png-to-webp', label: 'PNG إلى WebP' },
      { slug: '/webp-to-png', label: 'WebP إلى PNG' },
      { slug: '/svg-to-png', label: 'SVG إلى PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF إلى JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP إلى JPG' },
    ],
  },
  hero: {
    pill: 'ضغط خاص 100% على جهازك · دون رفع إلى الخوادم',
    h1: 'ضاغط صور مجاني – اضغط الصور عبر الإنترنت',
    sub: 'قلّل حجم ملفات الصور دون التضحية بالجودة الظاهرة. اضغط الصور مجانًا عبر الإنترنت مع ضاغط الصور والصور الفوتوغرافية: محسّن صور عبر الإنترنت لصيغ JPG وPNG وWebP وHEIC. سريع وآمن، دون تسجيل ودون علامة مائية، مع ضغط سهل مباشرة في متصفحك.',
    badge1: 'صورك لا تغادر جهازك أبدًا',
    badge2: 'معالجة فورية في المتصفح',
    badge3: 'يدعم JPG وPNG وWebP وHEIC',
  },
  toolsDirectory: {
    heading: 'المزيد من الأدوات المجانية لمعالجة الصور',
    subheading:
      'كل أداة تعمل 100% في متصفحك: دون رفع إلى الخوادم، ودون تسجيل، ودون علامات مائية.',
    eyebrow: 'جميع الأدوات تعمل في المتصفح', // 'All Browser-Native Tools'
    allTools: 'جميع الأدوات', // 'All Tools'
    openTool: 'فتح الأداة', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'ما هو ضغط الصور؟',
        body: 'ضغط الصور هو عملية تقليل حجم ملف الصورة بالبايت دون تدهور جودة الصورة المرئية إلى ما دون حد مقبول. عندما تحفظ الكاميرا أو الهاتف صورة، فإنها تخزن كمية هائلة من البيانات، وكثير من هذه المعلومات لا يمكن تمييزه بالعين المجردة عند إزالته أو تبسيطه. CompressMyPic هو محسّن صور مجاني عبر الإنترنت ومقلّل لحجم الصور، يعمل كضاغط للصور ومقلّل لحجم الصور الفوتوغرافية لملفات JPG وPNG وWebP.\n\nمن خلال تحليل هذه الأنماط، تعيد خوارزميات ضغط الصور ترتيب المعلومات المكررة أو تتخلص منها بشكل انتقائي. ويحتاج الملف الناتج إلى مساحة تخزين أقل بكثير ويُنقل عبر الإنترنت بسرعة أكبر بكثير. يوضح لك هذا الدليل كيفية ضغط صورة دون فقدان الجودة، باستخدام شريط تمرير الجودة والإعدادات المسبقة واختيار الصيغة في CompressMyPic.',
      },
      {
        heading: 'لماذا يجب أن تضغط صورك؟',
        body: 'الصور غير المحسّنة من أكبر العوائق أمام أداء الموقع ومساحة التخزين واستهلاك بيانات الجوال. وضغط صورك يجلب فوائد فورية وملموسة:',
        bullets: [
          'تحميل أسرع للموقع: الصفحات التي تحتوي على صور مضغوطة تُحمَّل أسرع بنسبة تصل إلى 70%، مما يحسّن مؤشرات Core Web Vitals (أكبر محتوى مرئي LCP) وترتيبك في محركات البحث. وعندما تقلّل حجم صور موقعك، يبقى الزوار وقتًا أطول ويغادرون الصفحة أقل.',
          'مساحة تخزين أقل: قلّل تكاليف الاستضافة السحابية ومساحة القرص على الخادم والنسخ الاحتياطية بحفظ ملفات صور محسّنة بدلًا من النسخ الأصلية الثقيلة.',
          'مشاركة الصور أسهل: لن تعيقك بعد اليوم حدود المرفقات الصارمة في البريد أو حصص الرفع في الرسائل. الصور المضغوطة تُرفق وتُرسل فورًا، حتى مع الاتصالات البطيئة أو باقات البيانات المحدودة.',
          'استهلاك أقل للنطاق الترددي: وفّر المال على مستخدميك في باقات بيانات الجوال وتجنّب مغادرة الزوار لموقعك. الملفات الأصغر تُنزَّل أسرع، خاصة على اتصالات الجوال البطيئة.',
        ],
      },
      {
        heading: 'كيف يعمل',
        body: 'ضغط صورك يستغرق ثوانٍ معدودة فقط: دون حساب ودون برامج ودون رفع. إليك كيفية ضغط صورة دون فقدان الجودة في ثلاث خطوات بسيطة.',
        bullets: [
          'الخطوة 1 — ارفع صورك: اسحب صور JPG أو PNG أو WebP أو HEIC وأفلتها في منطقة الرفع، أو انقر على «استعراض الملفات» لاختيارها، أو الصق صورة باستخدام Ctrl+V. يمكنك رفع عدة صور دفعة واحدة، حتى 20 ميغابايت لكل صورة.',
          'الخطوة 2 — اضبط الجودة واختر الصيغة: اختر إعدادًا مسبقًا منخفضًا أو متوازنًا أو عاليًا، أو حرّك شريط تمرير الجودة من 10% إلى 100%، وقرر ما إذا كنت تريد الاحتفاظ بالصيغة الأصلية أو التحويل إلى JPG أو PNG أو WebP. شاهد الحجم قبل الضغط وبعده مباشرة لكل صورة، واستخدم شريط المقارنة التفاعلي لمراجعة النتيجة بصريًا.',
          'الخطوة 3 — نزّل صورك المضغوطة: نزّل كل صورة مضغوطة على حدة أو انقر على «تنزيل الكل (ZIP)» لتنزيل الدفعة كاملة في ملف واحد. تُضغط صورك مباشرة في متصفحك، فلا شيء تنتظره ولا شيء ترفعه.',
        ],
      },
      {
        heading: 'لماذا تستخدم ضاغط الصور المجاني هذا؟',
        body: 'CompressMyPic هو ضاغط صور مجاني، دون تسجيل ودون علامة مائية، مصمم للصور اليومية وصور المواقع ومنشورات التواصل الاجتماعي.',
        bullets: [
          'اضغط JPG وPNG وWebP وHEIC: ضاغط صور واحد للصيغ التي تستخدمها فعلًا. اضغط صور JPG وJPEG، واضغط رسومات PNG مع الحفاظ على الشفافية، واضغط صور WebP للحصول على أصغر الملفات.',
          'قلّل حجم الصورة دون فقدان الجودة: الضغط الذكي يزيل البيانات المكررة والبيانات الوصفية، وتبقى الصورة شبه مطابقة للأصل. الإعداد المسبق المتوازن هو أفضل نقطة بداية، والمقارنة بين قبل الضغط وبعده تتيح لك التحقق من الجودة بنفسك.',
          'ضاغط صور جماعي: اضغط عدة صور دفعة واحدة: يتيح لك ضاغط الصور الجماعي هذا ضغط عدة صور دفعة واحدة بنفس الإعدادات وتنزيلها كلها معًا بزر «تنزيل الكل (ZIP)»، بدلًا من حفظ الملفات واحدًا تلو الآخر.',
          'اضغط الصور لواتساب وإنستغرام وفيسبوك: قلّل حجم الصور لتُرسل بسرعة عبر واتساب وتُرفع بسهولة إلى إنستغرام وفيسبوك. الملفات الأصغر تستهلك بيانات جوال أقل ويقل احتمال رفضها لكبر حجمها.',
          'قلّل حجم الصورة إلى 20 أو 50 أو 100 أو 200 كيلوبايت: أنزل شريط تمرير الجودة خطوة بخطوة وراقب الحجم قبل الضغط وبعده مباشرة حتى تصل إلى هدفك: 200 أو 100 أو 50 كيلوبايت، أو حتى 20 كيلوبايت. تغيير صيغة الإخراج إلى WebP يساعدك عادة على الوصول إلى هناك بفقدان أقل وضوحًا للجودة.',
        ],
      },
      {
        heading: 'ضغط JPG وPNG وWebP: أي صيغة تختار؟',
        body: 'لكل من JPG وPNG وWebP وظيفة مختلفة. ومعرفة نقاط قوتها تساعدك على اختيار الأفضل لمشروعك.\n\nقارن الفرق بصريًا: لا تعرف مقدار الضغط المقبول؟ استخدم خيار المقارنة بين قبل الضغط وبعده في الأداة. يتيح لك شريط التمرير التفاعلي رؤية الصورة الأصلية والنسخة المضغوطة جنبًا إلى جنب لاكتشاف أي تشوهات بصرية أو فقدان للجودة قبل التنزيل.',
        bullets: [
          'ضاغط JPG — اضغط JPG مجانًا عبر الإنترنت: مثالي لصور موقعك أو مدونتك أو معرض أعمالك. اضغط JPG مجانًا عبر الإنترنت واضغط JPEG إلى 100 كيلوبايت بخفض شريط تمرير الجودة مع مراقبة الحجم مباشرة. ضغط JPEG ضغط فاقد: يزيل نهائيًا بعض البيانات البصرية التي تكاد العين البشرية لا تلاحظها. ولهذا يمكنك تقليل صورة من ميغابايتات إلى كيلوبايتات دون فقدان ظاهر للجودة.',
          'ضاغط PNG — اضغط PNG مجانًا عبر الإنترنت: مثالي للرسومات ولقطات الشاشة والشعارات والصور التي تحتاج إلى الشفافية، مثل الشعارات والأيقونات والرسوم التوضيحية. اضغط PNG مجانًا عبر الإنترنت هنا مع الحفاظ على الشفافية كاملة، لرسومات حادة ودقيقة في كل بكسل. وتحويل PNG إلى WebP يجعله غالبًا أصغر بكثير.',
          'اضغط صور WebP — الصيغة الحديثة: مثالية لتحسين الويب. يوفر WebP ضغطًا ممتازًا فاقدًا وغير فاقد، غالبًا أصغر بنسبة 25% إلى 35% من JPEG أو PNG. اضغط ملفات صور WebP للحصول على أصغر حجم بجودة مماثلة، واستخدم WebP عندما تريد تحسين الصور لصفحات الويب دون فقدان ظاهر للجودة. إنه الخيار الأفضل لمعظم المواقع.',
        ],
      },
      {
        heading: 'ما الذي يمكنك استخدام ضاغط الصور هذا فيه؟',
        body: 'ضاغط صور مجاني واحد يغطي الأسباب الأكثر شيوعًا التي تجعل الناس يحتاجون إلى تقليل حجم الصورة.',
        bullets: [
          'حسّن الصور للويب: حسّن صور صفحات موقعك لتُحمَّل أسرع، وتحسّن مؤشرات Core Web Vitals، وتتصدر نتائج البحث. الصور الأصغر تعني صفحات أسرع وزوارًا أسعد ونطاقًا تردديًا أقل للاستضافة.',
          'اضغط الصور لإرفاقها بالبريد: اضغط الصور لإرفاقها بالبريد بحيث تتناسب صورك مع حدود حجم مرفقات البريد. أرفق النسخ الأصغر التي نزّلتها بدلًا من النسخ الأصلية الكبيرة، وستُرسل رسائلك دون ارتداد.',
          'اضغط صورة لموقعك: اضغط صورة لموقعك أو مدونتك أو معرض أعمالك أو متجرك الإلكتروني قبل رفعها. تبقى صور المنتجات واللافتات وصور المدونة حادة وتشغل مساحة أقل بكثير على خادمك.',
          'قلّل حجم ملف صورة: قلّل حجم ملف صورة من هاتفك أو كاميرتك قبل مشاركتها أو حفظها أو طباعتها. الصور الكبيرة تُرسل بسرعة وتُحفظ بسهولة وتُدار دون عناء.',
        ],
      },
      {
        heading: 'لماذا يهم حجم الصورة',
        body: 'ملفات الصور الكبيرة عالية الدقة نتيجة للتطور السريع في تقنية الكاميرات: أصبحت الصور الآن أكبر بمقدار مرتين إلى ثلاث مرات مما كانت عليه قبل سنوات قليلة فقط. وعندما تقلّل حجم صور صفحات موقعك وتُحسّن الصور للويب، يُحمَّل موقعك أسرع، ويستهلك نطاقًا تردديًا أقل، ويتصدر نتائج البحث بشكل أفضل.\n\nعند البحث عن ضاغط جيد، تأكد من أنه: 1) لا يضحي بالجودة، 2) يحافظ على خصوصية بياناتك (المعالجة على جهازك)، 3) يعالج الصور بسرعة دون إرسال ملفاتك إلى خادم بعيد. وهذا بالضبط ما صُمم من أجله CompressMyPic.',
      },
      {
        heading: 'نصائح للتحسين: قلّل حجم الصورة دون فقدان الجودة',
        body: '',
        bullets: [
          'ابدأ بالإعداد المسبق المتوازن: الإعداد المتوازن (جودة 70%) يوفر أفضل توازن لمعظم الصور: ملفات أصغر بكثير وتشابه بصري كبير مع الأصل.',
          'اختر الصيغة المناسبة: للصور الفوتوغرافية، JPG أو WebP يمنحانك دائمًا ملفات أصغر من PNG. أما للشعارات والرسومات الخطية ذات الشفافية، فاستخدم PNG.',
          'استهدف حجمًا معينًا: للاستخدام على المواقع، استهدف صورًا أقل من 200 كيلوبايت. وللبريد والرسائل، ابقَ دون 1 ميغابايت لتُسلَّم بسرعة. استخدم شريط تمرير الجودة والحجم المباشر للوصول إلى حجمك المستهدف.',
          'اعثر على النقطة المثالية: ضع شريط تمرير الجودة على 85–90% للصور الرئيسية حيث تهم الجودة؛ و70–80% عادة ما يكون التوازن المثالي للاستخدام العام على المواقع؛ و50–60% أفضل للصور المصغرة أو عندما يكون الحجم هو الأهم.',
          'جرّب WebP لأصغر الملفات: تغيير صيغة الإخراج إلى WebP يقلّل عادة حجم JPG أو PNG بنسبة 25% إلى 35% إضافية بجودة مماثلة: طريقة سهلة لتقليل حجم الصورة دون فقدان الجودة.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'الأسئلة الشائعة',
    subheading:
      'كل ما تحتاج إلى معرفته حول ضغط الصور مجانًا عبر الإنترنت مع CompressMyPic.',
    faqs: [
      {
        id: 'faq-1',
        question: 'كيف أضغط صورة مجانًا عبر الإنترنت؟',
        answer:
          'ما عليك سوى سحب ملفات الصور وإفلاتها في CompressMyPic أو النقر على «استعراض الملفات». اختر إعدادًا مسبقًا للضغط (منخفض أو متوازن أو عالٍ) أو اضبط شريط تمرير الجودة، ثم نزّل صورك المحسّنة فورًا. الأداة مجانية 100%، دون تسجيل أو تثبيت برامج.',
      },
      {
        id: 'faq-2',
        question: 'كيف أضغط صورة إلى 100 كيلوبايت؟',
        answer:
          'لا يحتوي CompressMyPic على خانة لكتابة حجم دقيق بالكيلوبايت، لذا لا يمكنك كتابة 100 كيلوبايت مباشرة. بدلًا من ذلك، ارفع صورتك واختر إعدادًا مسبقًا أو أنزل شريط تمرير الجودة، وراقب الحجم قبل الضغط وبعده المعروض مباشرة لكل صورة. اضبط الجودة أو غيّر صيغة الإخراج إلى WebP حتى يقترب الحجم المضغوط من 100 كيلوبايت، ثم نزّلها.',
      },
      {
        id: 'faq-3',
        question: 'كيف أقلّل حجم صورة دون فقدان الجودة؟',
        answer:
          'اختر الإعداد المسبق المتوازن (جودة حوالي 70%) أو جودة عالية 85–90%، مما يزيل البيانات المكررة والبيانات الوصفية مع بقاء الصورة شبه مطابقة للأصل. استخدم المقارنة التفاعلية بين قبل الضغط وبعده لمراجعة النتيجة، واحتفظ بالصيغة الأصلية أو اختر WebP لأفضل توازن بين الجودة والحجم.',
      },
      {
        id: 'faq-4',
        question: 'كيف أضغط ملف JPEG إلى 100 كيلوبايت؟',
        answer:
          'لتقليل حجم ملف JPEG، ارفع ملف JPEG واختر JPEG كصيغة إخراج، وأنزل شريط تمرير الجودة خطوة بخطوة مع مراقبة الحجم المضغوط مباشرة. وبما أنه لا توجد خانة لحجم دقيق بالكيلوبايت، استخدم عرض الحجم قبل الضغط وبعده للتوقف عندما يقترب الملف من 100 كيلوبايت.',
      },
      {
        id: 'faq-5',
        question: 'كيف أقلّل حجم صورة إلى 20 أو 50 أو 200 كيلوبايت؟',
        answer:
          'ارفع صورتك وأنزل شريط تمرير الجودة تدريجيًا، مع مراجعة الحجم قبل الضغط وبعده مباشرة بعد كل تغيير، حتى تصل إلى هدفك: 200 أو 50 أو 20 كيلوبايت. الأهداف الأصغر مثل 20 كيلوبايت تتطلب عادة جودة أقل وإخراجًا بصيغة WebP. وتنطبق الطريقة نفسها على أي هدف، بما في ذلك 500 كيلوبايت، ويُعرض الحجم دائمًا بالكيلوبايت لترى بالضبط كم قلّلت حجم الصورة بالكيلوبايت.',
      },
      {
        id: 'faq-6',
        question: 'كيف أضغط ملف PNG مجانًا عبر الإنترنت؟',
        answer:
          'ارفع ملف PNG إلى CompressMyPic واختر إعدادًا مسبقًا أو اضبط شريط تمرير الجودة: ضغط PNG عبر الإنترنت مجاني هنا، دون تسجيل. تُحفظ الشفافية في مخرجات PNG وWebP، وتحويل PNG إلى WebP يجعله غالبًا أصغر بكثير.',
      },
      {
        id: 'faq-7',
        question: 'ما صيغ الصور المدعومة؟',
        answer:
          'يدعم CompressMyPic صيغ JPG (JPEG) وPNG وWebP وHEIC، بما في ذلك الصور الملتقطة بآيفون، التي تُحفظ بصيغة HEIC افتراضيًا. يمكنك الاحتفاظ بالصيغة الأصلية أو التحويل بينها؛ على سبيل المثال، اضغط ملفات JPG بصيغة JPEG، أو اضغط ملفات PNG مع الحفاظ على الشفافية، أو حوّل إلى WebP للحصول على أصغر الملفات.',
      },
      {
        id: 'faq-8',
        question: 'هل يمكنني ضغط عدة صور دفعة واحدة؟',
        answer:
          'نعم. يتيح لك ضاغط الصور الجماعي هذا رفع عشرات الصور دفعة واحدة، وضغط عدة صور دفعة واحدة بنفس الإعدادات، وتنزيلها كلها معًا بزر «تنزيل الكل (ZIP)»، أو تنزيل كل واحدة على حدة.',
      },
      {
        id: 'faq-9',
        question: 'كيف أضغط صورة لواتساب؟',
        answer:
          'ارفع صورتك واختر إعدادًا مسبقًا بجودة أقل أو إخراجًا بصيغة WebP، ثم نزّل الملف الأصغر قبل مشاركته على واتساب. الصور الأصغر تُرسل أسرع وتستهلك بيانات جوال أقل ويقل احتمال رفضها لكبر حجمها.',
      },
      {
        id: 'faq-10',
        question: 'كيف أضغط صورة لإنستغرام أو فيسبوك؟',
        answer:
          'اضغط صورتك لإنستغرام أو فيسبوك برفعها هنا، واختيار الإعداد المسبق المتوازن، وتنزيل ملف JPG أو WebP الأصغر. يُرفع الملف الأصغر بسرعة أكبر ويحافظ على جودة كافية للمنشورات والقصص وصور الملف الشخصي.',
      },
      {
        id: 'faq-11',
        question: 'هل يمكنني ضغط الصور لإرفاقها بالبريد؟',
        answer:
          'نعم. اضغط الصور لإرفاقها بالبريد بتقليلها باستخدام شريط تمرير الجودة حتى يصبح كل ملف صغيرًا بما يكفي لحد مرفقات مزود بريدك، وأرفق الملفات المنزّلة في رسالتك بدلًا من النسخ الأصلية الكبيرة.',
      },
      {
        id: 'faq-12',
        question: 'هل CompressMyPic مجاني حقًا؟',
        answer:
          'نعم، CompressMyPic مجاني تمامًا. لا توجد رسوم ولا خطط مدفوعة ولا أرصدة ولا حدود لعدد الصور التي يمكنك ضغطها.',
      },
      {
        id: 'faq-13',
        question: 'هل يضيف CompressMyPic علامة مائية؟',
        answer:
          'لا. CompressMyPic هو ضاغط صور مجاني دون علامة مائية: تبقى صورك المضغوطة نظيفة، دون شعار أو نص أو علامة مضافة.',
      },
      {
        id: 'faq-14',
        question: 'هل أحتاج إلى التسجيل لاستخدام CompressMyPic؟',
        answer:
          'لا. هذا ضاغط صور مجاني دون تسجيل: لا تحتاج إلى حساب أو بريد إلكتروني أو كلمة مرور. فقط افتح الموقع وابدأ الضغط.',
      },
      {
        id: 'faq-15',
        question: 'هل تُرفع صوري إلى خادم؟',
        answer:
          'لا. تتم كل عملية الضغط بالكامل على جهازك، داخل متصفح الويب الخاص بك، لذا لا تُرفع صورك إلى خادم أبدًا ولا يخزنها أو يراها أي شخص آخر. تبقى في ذاكرة متصفحك وتُحذف عند تحديث الصفحة أو إغلاق التبويب.',
      },
      {
        id: 'faq-16',
        question: 'هل يوجد حد لحجم الملف؟',
        answer:
          'نعم، الحد هو 20 ميغابايت لكل صورة، وهو ما يغطي صور الكاميرات عالية الدقة ولقطات الشاشة الكبيرة. وبما أن المعالجة تتم على جهازك، يبقى الضغط سريعًا حتى مع الملفات الكبيرة.',
      },
      {
        id: 'faq-17',
        question: 'هل يغيّر ضغط الصورة أبعادها؟',
        answer:
          'لا. يحافظ CompressMyPic على أبعاد صورتك دون تغيير: يقلّ حجم الملف فقط. وتبقى صورتك بنفس العرض والارتفاع والنسبة كما في الأصل.',
      },
      {
        id: 'faq-18',
        question: 'هل يمكنني ضغط الصور على الهاتف؟',
        answer:
          'نعم. يعمل CompressMyPic في متصفحات الجوال على iOS وأندرويد، لذا يمكنك ضغط صورة على هاتفك باختيارها من معرض الصور أو التقاط صورة جديدة ورفعها هنا.',
      },
      {
        id: 'faq-19',
        question: 'كيف يعمل شريط تمرير الجودة؟',
        answer:
          'يتيح لك شريط تمرير الجودة تحديد جودة الضغط من 10% إلى 100%. القيم الأعلى تحافظ على تفاصيل أكثر وتنتج ملفات أكبر، بينما القيم الأدنى تجعل الملفات أصغر بكثير. وتضبط الإعدادات المسبقة المنخفض والمتوازن والعالي الشريط نيابة عنك، ويُظهر الحجم قبل الضغط وبعده مباشرة نتيجة كل تغيير.',
      },
      {
        id: 'faq-20',
        question: 'كيف أختار صيغة الإخراج؟',
        answer:
          'بعد رفع صورة، اختر ما إذا كنت تريد الاحتفاظ بالصيغة الأصلية أو التحويل إلى JPG أو PNG أو WebP. وعادة ما يكون WebP الخيار الأفضل لتحسين الصور لصفحات الويب، لأنه أصغر بنسبة 25% إلى 35% من JPEG بجودة مماثلة، بينما يكون PNG أفضل عندما تحتاج إلى الشفافية.',
      },
    ],
  },
  guidesSection: {
    heading: 'الأدلة',
    subheading:
      'أدلة خطوة بخطوة للحصول على ملفات أصغر دون فقدان الجودة الظاهرة.',
    cards: [
      {
        title: 'كيفية ضغط الصور لواتساب دون فقدان الجودة',
        desc: 'قلّل حجم الصور قبل إرسالها لتبقى حادة وتُرسل بسرعة.',
        cta: 'اقرأ الدليل ←',
      },
      {
        title: 'JPG مقابل PNG مقابل WebP: أي صيغة تختار؟',
        desc: 'حجم الملف والجودة والشفافية مقارنة، لتختار الصيغة المناسبة.',
        cta: 'اقرأ الدليل ←',
      },
      {
        title: 'كيفية تقليل حجم الصورة إلى 100 كيلوبايت للويب والبريد',
        desc: 'خطوة بخطوة: وصّل إلى 100 كيلوبايت دون فقدان الجودة الظاهرة.',
        cta: 'اقرأ الدليل ←',
      },
    ],
  },
  blog: {
    blog: 'المدونة',
    homeHeading: 'أدلة ودروس وموارد الصور',
    homeSubheading:
      'أدلة عملية لضغط الصور وتغيير حجمها وتحويلها وتعديلها — مكتوبة لمهام حقيقية، وليس لمحركات البحث.',
    searchPlaceholder: 'ابحث في الأدلة…',
    searchNoResults: 'لم يتم العثور على أدلة تطابق «{query}».',
    featuredHeading: 'أدلة مميزة',
    latestHeading: 'أحدث الأدلة ({count})',
    categoriesHeading: 'تصفح حسب الفئة',
    emptyHeading: 'لا توجد أدلة بعد',
    emptyText:
      'نحن نكتب الأدلة الأولى في هذا القسم. عُد قريبًا — أو جرّب إحدى الأدوات المجانية.',
    readArticle: 'اقرأ الدليل ←',
    minRead: '{minutes} دقائق قراءة',
    publishedOn: 'نُشر في {date}',
    updatedOn: 'حُدّث في {date}',
    bylineAuthor: 'فريق تحرير CompressMyPic',
    tableOfContents: 'في هذه الصفحة',
    faqHeading: 'الأسئلة الشائعة',
    relatedArticlesHeading: 'أدلة ذات صلة',
    relatedToolsHeading: 'جرّب الأداة',
    tryToolCta: 'جرّب {tool} — مجانًا، دون تسجيل',
    prevArticle: 'الدليل السابق →',
    nextArticle: 'الدليل التالي ←',
    backToBlog: '→ العودة إلى المدونة',
    shareHeading: 'شارك هذا الدليل',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ!',
    shareOnX: 'شارك على X',
    shareOnFacebook: 'شارك على فيسبوك',
    shareOnWhatsApp: 'شارك على واتساب',
    notAvailableHeading: 'هذا الدليل غير متاح بلغتك بعد',
    notAvailableText:
      'ما زلنا نترجم هذا الدليل. يمكنك قراءته بالإنجليزية أو تصفح الأدلة المتاحة بلغتك.',
    viewBlogHome: 'تصفح المدونة',
    guidesHeading: 'أدلتنا خطوة بخطوة',
    categoryGuidesHeading: 'أدلة: {category}',
    relatedArticlesForTool: 'أدلة ذات صلة: {tool}',
  },
  shareSection: {
    heading: 'شارك CompressMyPic مع أصدقائك',
    text: 'هل كانت هذه الأداة مفيدة لك؟ ساعد صديقًا على ضغط صوره أيضًا: الأمر يستغرق نقرة واحدة فقط.',
    shareText:
      'اضغط الصور مجانًا عبر الإنترنت — دون تسجيل ودون علامة مائية. جرّب CompressMyPic:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: 'شارك على {name}',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ!',
    share: 'مشاركة',
    emailSubject: 'ضاغط صور مجاني – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – ضاغط صور مجاني', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'الرئيسية',
    privacyPill: 'معالجة خاصة 100% في المتصفح · الملفات لا تغادر جهازك أبدًا',
    noUploads: 'دون رفع إلى الخوادم',
    freeNote: 'مجاني · دون تسجيل · دون علامة مائية',
    howToTitle: 'كيفية استخدام {name}',
    howToIntro:
      'اتبع هذه الخطوات البسيطة لإنجاز مهمتك، مباشرة في متصفحك.',
    featuresTitle: 'لماذا تستخدم {name} من CompressMyPic؟',
    faqTitle: '{name} — الأسئلة الشائعة',
    relatedTitle: 'أدوات صور مجانية ذات صلة',
    relatedLinksIntro: 'قد تحتاج أيضًا إلى:',
    shareHeading: 'شارك هذه الأداة',
    shareCopyLink: 'نسخ الرابط',
    shareCopied: 'تم النسخ!',
    shareOnX: 'شارك على X',
    shareOnFacebook: 'شارك على فيسبوك',
    shareOnWhatsApp: 'شارك على واتساب',
    commentsTitle: 'التعليقات',
    commentsNote: 'شارك رأيك في هذه الأداة: اكتب اسمك فقط وانشر. لا تحتاج إلى حساب.',
    commentsNamePlaceholder: 'اسمك',
    commentsTextPlaceholder: 'اكتب تعليقك…',
    commentsSubmit: 'نشر التعليق',
    commentsPosting: 'جارٍ النشر…',
    commentsEmpty: 'كن أول من يعلّق.',
    commentsPosted: 'شكرًا لك! تم نشر تعليقك.',
    commentsLoadError: 'تعذر تحميل التعليقات. حاول مرة أخرى.',
    commentsPostError: 'تعذر نشر تعليقك. حاول مرة أخرى.',
    commentsRetry: 'إعادة المحاولة',
    commentsLoading: 'جارٍ تحميل التعليقات…',
  },
  uploadZone: {
    dropText: 'اسحب صورك وأفلتها هنا',
    browseButton: 'استعراض الملفات',
    browsePrefix: 'أو',
    browseSuffix: 'من جهاز الكمبيوتر أو هاتفك',
    orPaste: 'اللصق (Ctrl+V) مدعوم',
    hint: 'بحد أقصى {max} ميغابايت لكل صورة',
    errorTooBig: '«{name}» يتجاوز الحد الأقصى البالغ {max} ميغابايت.',
    errorBadType: '«{name}» ليس بصيغة مدعومة ({formats}).',
    errorUnreadable: '«{name}» ملف فارغ (0 بايت).',
    errorMore: '(+{count} أخطاء أخرى)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'منطقة رفع الصور. اسحب وأفلت أو انقر لاستعراض الملفات.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'ملف تالف أو غير قابل للقراءة.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'مقارنة بصرية للجودة',
    beforeLabel: 'الأصل (قبل)',
    afterLabel: 'المضغوطة (بعد)',
    closeLabel: 'إغلاق عرض المقارنة',
    instruction: 'اسحب شريط التمرير يمينًا أو يسارًا لمراجعة جودة كل بكسل.',
    sliderLabel: 'شريط التمرير',
    sideBySideLabel: 'جنبًا إلى جنب',
    zoomInLabel: 'تكبير',
    zoomOutLabel: 'تصغير',
    originalLabel: 'الأصل:',
    outputLabel: 'الناتج:',
    reductionLabel: 'التقليل:',
    sizeChangeLabel: 'تغير الحجم:',
    qualityLabel: 'إعداد الجودة:',
    formatLabel: 'الصيغة:',
    modalAriaLabel: 'نافذة مقارنة الصور', // 'Image comparison modal'
    altCompressed: 'النسخة المضغوطة من {name}', // 'Compressed version of {name}'
    altOriginal: 'النسخة الأصلية من {name}', // 'Original version of {name}'
    altProcessed: 'النسخة المعالجة من {name}', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'ضاغط صور مجاني – اضغط الصور عبر الإنترنت',
    seoDescription: 'اضغط الصور مجانًا عبر الإنترنت وقلّل حجم JPG وPNG وWebP دون فقدان الجودة. دون تسجيل أو علامة مائية: صورك لا تغادر المتصفح أبدًا.',
    h1: 'ضاغط صور مجاني – اضغط الصور عبر الإنترنت',
    subtitle: 'قلّل حجم ملفات JPG وPNG وWebP وHEIC مباشرة في متصفحك.',
  },
  categories: {
    compress: 'ضغط',
    resize: 'تغيير الحجم',
    convert: 'تحويل',
    'crop-edit': 'قص وتعديل',
    create: 'إنشاء',
    privacy: 'أدوات الخصوصية',
    developer: 'أدوات المطورين',
  },
  compressionControls: {
    modeLabel: 'وضع الضغط', // 'Compression Mode'
    presetLow: 'ضغط منخفض (85%)', // 'Low Compression (85%)'
    presetBalanced: 'متوازن (70%)', // 'Balanced (70%)'
    presetHigh: 'ضغط عالٍ (50%)', // 'High Compression (50%)'
    presetCustom: 'مخصص', // 'Custom'
    formatLabel: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    qualityLabel: 'الجودة المستهدفة:', // 'Quality Target:'
    qualityHigh: 'دقة عالية', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'التوازن المثالي للويب', // 'Optimal Web Balance' (60–79)
    qualityMax: 'أقصى توفير للمساحة', // 'Max Space Savings' (< 60)
    qualityAriaLabel: 'شريط تمرير الجودة من 10 إلى 100 بالمئة', // 'Quality slider from 10 to 100 percent'
    compressAll: 'إعادة ضغط الكل', // 'Re-compress All'
    compressing: 'جارٍ الضغط…', // 'Compressing...'
    clearAll: 'مسح الكل', // 'Clear All'
    clearAllTitle: 'مسح جميع الصور', // 'Clear all images'
    transparencyTitle: 'تنبيه الشفافية عند التحويل إلى JPEG', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'لا تدعم صيغة JPEG الشفافية (قنوات ألفا). وستُستبدل الخلفيات الشفافة بخلفية صلبة (الأبيض افتراضيًا). اختر PNG أو WebP إذا أردت الحفاظ على الخلفيات الشفافة.',
    pngTip:
      'صيغة PNG غير فاقدة وتتجاهل شريط تمرير الجودة، لذا قد تطابق إعادة ترميز PNG الحجم الأصلي أو تتجاوزه أحيانًا. وبالنسبة لملفات PNG التي تشبه الصور، فإن اختيار WebP أو JPG ينتج غالبًا ملفات أصغر بنسبة 50% إلى 80%.',
  },
  resultsList: {
    summary: 'ملخص الضغط', // 'Compression Summary'
    image: 'صورة', // 'Image' (count === 1)
    images: 'صور', // 'Images' (count !== 1)
    totalOriginal: 'المجموع الأصلي:', // 'Total Original:'
    totalCompressed: 'المجموع المضغوط:', // 'Total Compressed:'
    totalSaved: 'المجموع الموفَّر:', // 'Total Saved:'
    processing: 'جارٍ المعالجة…', // 'Processing...'
    grewBy: '(زاد بمقدار {bytes})', // '(grew by {bytes})'
    reduction: 'التقليل:', // 'Reduction:'
    sizeChange: 'تغير الحجم:', // 'Size Change:'
    downloadAll: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'جارٍ إنشاء ZIP ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'قارن', // 'Compare'
    compareTitle: 'انقر لمراجعة المقارنة البصرية للجودة', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'قارن قبل الضغط وبعده بصريًا', // 'Compare visual before/after'
    download: 'تنزيل', // 'Download'
    retry: 'إعادة المحاولة', // 'Retry'
    removeTitle: 'إزالة الصورة', // 'Remove image'
    removeAriaLabel: 'إزالة {name}', // 'Remove {name}'
    keptOriginal: 'تم الاحتفاظ بالأصل (إعادة الترميز كانت أكبر)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'زاد بمقدار {bytes}: إعادة الترميز أكبر من الأصل', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'تم الضغط بنجاح', // 'Compressed successfully'
    optimizing: 'جارٍ تحسين البكسلات…', // 'Optimizing pixels...'
    compressionError: 'خطأ في الضغط', // 'Compression error'
    original: 'الأصل', // 'Original' (metric label)
    compressed: 'المضغوط', // 'Compressed' (metric label)
    output: 'الناتج', // 'Output' (metric label when original kept)
    spaceSaved: 'المساحة الموفَّرة', // 'Space Saved'
    formatLabel: 'الصيغة:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'ألفا', // 'Alpha' badge
    largerTitle: 'الناتج أكبر من الأصل بمقدار {bytes}.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'إعادة ترميز PNG غير الفاقدة تتجاهل شريط تمرير الجودة؛ وعادة ما يكون WebP أو JPG أصغر بكثير لملفات PNG التي تشبه الصور.',
    largerNote:
      'كانت هذه الصورة مضغوطة بشدة أصلًا بالنسبة للجودة المحددة.',
    keepOriginal: 'الاحتفاظ بالأصل', // 'Keep original'
  },
} as const;

export const TOOL_UI_AR = {
  '/image-resizer': {
    comparisonTitlePrefix: 'مقارنة تغيير الحجم', // 'Resize Comparison'
    comparisonAfterLabel: 'بعد تغيير الحجم (بعد)', // 'Resized (After)'
    presetInstagramPost: 'منشور إنستغرام (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'قصة إنستغرام (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'صورة مصغرة ليوتيوب (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'غلاف فيسبوك (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'ترويسة X (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'تعذر تغيير حجم الصورة.', // 'Resize failed.'
    errorCorruptedFile: 'ملف صورة تالف أو غير قابل للقراءة.', // 'Corrupted or unreadable image file.'
    resizeMode: 'وضع تغيير الحجم', // 'Resize Mode'
    modeByPixels: 'بالبكسل (العرض × الارتفاع)', // 'By Pixels (W × H)'
    modeByPercentage: 'بالنسبة المئوية (%)', // 'By Percentage (%)'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'العرض (بكسل)', // 'Width (px)'
    heightLabel: 'الارتفاع (بكسل)', // 'Height (px)'
    placeholderAuto: 'تلقائي', // placeholder 'Auto'
    aspectRatioLocked: 'نسبة الأبعاد مقفلة', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'مفتوحة (مخصصة)', // 'Unlocked (Custom)'
    fitModeLabel: 'وضع الملاءمة:', // 'Fit Mode:'
    fitContain: 'احتواء (دون قص)', // 'Contain (No Crop)'
    fitCover: 'تغطية (قص من المنتصف)', // 'Cover (Center Crop)'
    fitStretchExact: 'تمديد دقيق', // 'Stretch Exact'
    quickPresets: 'إعدادات سريعة للتواصل الاجتماعي والويب', // 'Quick Social & Web Presets'
    scalePercentage: 'نسبة القياس:', // 'Scale Percentage:'
    outputQuality: 'جودة الإخراج:', // 'Output Quality:'
    matteBg: 'خلفية مطفية:', // 'Matte BG:'
    resizing: 'جارٍ تغيير الحجم…', // 'Resizing...'
    resizeAll: 'تغيير حجم الكل ({count})', // 'Resize All ({count})'
    clear: 'مسح', // 'Clear'
    batchReady: 'الدفعة جاهزة', // 'Batch Ready'
    batchReadySingular: '{count} صورة جاهزة للتنزيل بعد تغيير حجمها', // '{count} resized image ready to download'
    batchReadyPlural: '{count} صور جاهزة للتنزيل بعد تغيير حجمها', // '{count} resized images ready to download'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'تم تغيير الحجم ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'مقارنة تحويل الصيغة', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'بعد التحويل (بعد)', // 'Converted (After)'
    errorConversionFailed: 'تعذر تحويل الصورة.', // 'Conversion failed.'
    errorUnsupportedFile: 'ملف صورة غير مدعوم أو تالف.', // 'Unsupported or corrupted image file.'
    convertToFormat: 'التحويل إلى صيغة', // 'Convert To Format'
    formatWebp: 'WebP (الأخف للويب)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (شاملة)', // 'JPG (Universal)'
    formatPng: 'PNG (غير فاقدة مع شفافية)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'لون تعبئة الشفافية', // 'Transparency Fill Color'
    quality: 'الجودة', // 'Quality'
    qualityLosslessPng: 'PNG غير فاقدة', // 'Lossless PNG'
    converting: 'جارٍ التحويل…', // 'Converting...'
    convertAll: 'تحويل الكل ({count})', // 'Convert All ({count})'
    clear: 'مسح', // 'Clear'
    conversionComplete: 'اكتمل التحويل', // 'Conversion Complete'
    filesConverted: 'تم تحويل {count} ملفات إلى {format}', // '{count} files converted to {format}'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    convertedStatus: 'تم التحويل إلى {ext}', // 'Converted to {ext}'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
  },
  '/image-cropper': {
    uploadTitle: 'أسقط صورة لقصها بشكل تفاعلي', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorCanvasContext: 'تعذر تهيئة سياق اللوحة.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'تعذر تصدير القص.', // 'Crop export failed.'
    aspectFree: 'حر', // aspect preset 'Free'
    selection: 'التحديد:', // 'Selection:'
    zoomOut: 'تصغير', // aria-label 'Zoom out'
    zoomIn: 'تكبير', // aria-label 'Zoom in'
    removeImage: 'إزالة الصورة', // aria-label 'Remove image'
    cropSourceAlt: 'صورة المصدر للقص', // alt 'Crop source'
    originalLabel: 'الأصل:', // 'Original:'
    cropOptions: 'خيارات القص', // 'Crop Options'
    selectFull: 'تحديد الكل', // 'Select Full'
    aspectRatioPreset: 'نسبة الأبعاد المسبقة', // 'Aspect Ratio Preset'
    cropWidth: 'عرض القص', // 'Crop Width'
    cropHeight: 'ارتفاع القص', // 'Crop Height'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'الجودة', // 'Quality'
    cropping: 'جارٍ القص…', // 'Cropping...'
    cropAndDownload: 'قص وتنزيل', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'أسقط صورة لإضافة علامة مائية نصية أو شعار', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorUnableToLoadLogo: 'تعذر تحميل صورة الشعار.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'تعذر تصدير الصورة ذات العلامة المائية.', // 'Watermark export failed.'
    fallbackWatermarkText: 'علامة مائية', // canvas fallback text 'Watermark'
    tiledPreview: 'معاينة مبلّطة', // 'Tiled Preview'
    dragToPosition: 'اسحب على الصورة للوضع', // 'Drag on Image to Position'
    changeImage: 'تغيير الصورة', // 'Change Image'
    watermarkType: 'نوع العلامة المائية', // 'Watermark Type'
    modeText: 'علامة مائية نصية', // 'Text Watermark'
    modeLogo: 'صورة شعار', // 'Logo Image'
    watermarkTextLabel: 'نص العلامة المائية', // 'Watermark Text'
    placeholderBrand: '© علامتك التجارية', // placeholder '© Your Brand'
    textColor: 'لون النص', // 'Text Color'
    size: 'الحجم', // 'Size'
    uploadLogo: 'رفع الشعار (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'تغيير صورة الشعار', // 'Change Logo Image'
    logoWidth: 'عرض الشعار', // 'Logo Width'
    opacity: 'الشفافية', // 'Opacity'
    rotation: 'التدوير', // 'Rotation'
    tiledRepeatPattern: 'نمط مكرر مبلّط', // 'Tiled Repeat Pattern'
    tileSpacing: 'تباعد البلاطات', // 'Tile Spacing'
    anchorPresets: 'مواضع محددة مسبقًا (أو اسحب على الصورة)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'الأصل', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'الجودة', // 'Quality'
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadWatermarked: 'تنزيل الصورة ذات العلامة المائية', // 'Download Watermarked Image'
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'تدوير وقلب سريع', // 'Quick Rotate & Flip'
    rotate90Left: 'تدوير 90° لليسار', // 'Rotate 90° Left'
    rotate90Right: 'تدوير 90° لليمين', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'قلب أفقي', // 'Flip Horizontal'
    flipVertical: 'قلب عمودي', // 'Flip Vertical'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'زاوية التدوير:', // 'Rotation Angle:'
    resetTo0: 'إعادة التعيين إلى 0°', // 'Reset to 0°'
    applyAngle: 'تطبيق الزاوية', // 'Apply Angle'
    clear: 'مسح', // 'Clear'
    batchReady: 'الدفعة جاهزة', // 'Batch Ready'
    transformedImagesReady: '{count} صور محوّلة جاهزة', // '{count} transformed images ready'
    creatingZip: 'جارٍ إنشاء ZIP...', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: 'مُدوَّرة {angle}°', // 'Rotated {angle}°'
    flippedH: ' · مقلوبة أفقيًا', // ' · Flipped H'
    flippedV: ' · مقلوبة عموديًا', // ' · Flipped V'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeItem: 'إزالة {name}', // 'Remove {name}' (aria-label)
    transformFailed: 'فشل تحويل الصورة.', // 'Transform failed.'
    corruptedImage: 'صورة تالفة أو غير قابلة للقراءة.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'مقارنة التدوير والقلب', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'بعد التعديل (بعد)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'أسقط الصور لدمجها في ملف PDF', // 'Drop images to combine into PDF'
    couldNotRead: 'تعذر قراءة «{filename}». تأكد من أنها صورة صالحة.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'فشل إنشاء ملف PDF.', // 'PDF generation failed.'
    encodingPage: 'جارٍ ترميز الصفحة {current} من {total}...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'جارٍ إنشاء PDF...', // 'Generating PDF...'
    pageSize: 'حجم الصفحة', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 مم)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'رسالة أمريكية (8.5 × 11 بوصة)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'ملاءمة حجم الصورة', // 'Fit to Image Size'
    orientation: 'الاتجاه', // 'Orientation'
    orientationAuto: 'تلقائي (حسب الصورة)', // 'Auto (Match Photo)'
    orientationPortrait: 'عمودي', // 'Portrait'
    orientationLandscape: 'أفقي', // 'Landscape'
    margin: 'الهامش', // 'Margin'
    marginNone: 'دون هامش (ملء كامل)', // 'No Margin (Full Bleed)'
    marginSmall: 'هامش صغير', // 'Small Margin'
    marginMedium: 'هامش متوسط', // 'Medium Margin'
    imagePlacement: 'موضع الصورة', // 'Image Placement'
    placementContain: 'احتواء (الصورة كاملة)', // 'Contain (Full Image)'
    placementCover: 'تغطية (ملء الصفحة)', // 'Cover (Fill Page)'
    pdfFilename: 'اسم ملف PDF', // 'PDF Filename'
    pdfImageQuality: 'جودة صور PDF:', // 'PDF Image Quality:'
    createDownloadPdf: 'إنشاء وتنزيل PDF ({count} ص.)', // 'Create & Download PDF ({count}p)'
    clear: 'مسح', // 'Clear'
    pdfReady: 'PDF جاهز ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'صفحة', // 'page'
    pagePlural: 'صفحات', // 'pages'
    downloadPdfAgain: 'تنزيل PDF مرة أخرى', // 'Download PDF Again'
    pageOrder: 'ترتيب الصفحات ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'صفحة', // 'Page' (in Page Order heading)
    pageOrderPlural: 'صفحات', // 'Pages' (in Page Order heading)
    movePageUp: 'نقل الصفحة لأعلى', // 'Move page up' (title)
    movePageDown: 'نقل الصفحة لأسفل', // 'Move page down' (title)
    removePage: 'إزالة الصفحة', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'أسقط صورة لفحص بيانات EXIF والبيانات الوصفية', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'تعذر تحليل البيانات الوصفية للصورة.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'تم العثور على بيانات وصفية مضمّنة ({count} أنواع من الوسوم)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'لم يتم اكتشاف وسوم EXIF أو GPS أو كاميرا مخفية', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'إزالة البيانات الوصفية', // 'Strip Metadata'
    copyJson: 'نسخ JSON', // 'Copy JSON'
    copiedJson: 'تم نسخ JSON', // 'Copied JSON'
    exportJson: 'تصدير JSON', // 'Export JSON'
    clear: 'مسح', // 'Clear' (title)
    gpsDetected: 'تم اكتشاف إحداثيات موقع GPS', // 'GPS Location Coordinates Detected'
    latitude: 'خط العرض:', // 'Latitude:'
    longitude: 'خط الطول:', // 'Longitude:'
    gpsWarning:
      'مشاركة هذه الصورة كما هي قد تكشف مكان التقاط الصورة. استخدم «إزالة البيانات الوصفية» قبل نشرها عبر الإنترنت.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
    extractedMetadata: 'البيانات الوصفية المستخرجة ({count} خاصية)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'وسم الخصوصية', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'أسقط الصور لإزالة بيانات EXIF وGPS والبيانات الوصفية', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'تعذر إزالة البيانات الوصفية.', // 'Failed to strip metadata.'
    strippingMethod: 'طريقة الإزالة', // 'Stripping Method'
    losslessStrip: 'إزالة ثنائية غير فاقدة (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'إعادة ترميز كاملة على اللوحة', // 'Full Canvas Re-encode'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'جودة إعادة الترميز (تُستخدم لـ WebP/HEIC أو إعادة الترميز الكاملة):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'جارٍ التنظيف...', // 'Cleaning...'
    recleanAll: 'إعادة تنظيف الكل', // 'Re-clean All'
    clear: 'مسح', // 'Clear'
    privacyVerified: 'تم التحقق من الخصوصية', // 'Privacy Verified'
    cleanImagesReady: '{count} صور نظيفة جاهزة، بعد إزالة البيانات الوصفية', // '{count} clean images ready with metadata stripped'
    creatingZip: 'جارٍ إنشاء ZIP...', // 'Creating ZIP...'
    downloadAllCleanZip: 'تنزيل الكل نظيفًا (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: 'تمت إزالة {before} وسمًا من البيانات الوصفية ← بقي {after}', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'نظيفة ومُتحقق منها (0 وسوم EXIF/GPS)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'إزالة ثنائية غير فاقدة', // 'Lossless binary strip'
    cleanCanvasExport: 'تصدير نظيف على اللوحة', // 'Clean Canvas export'
    scrubbing: 'جارٍ إزالة ترويسات EXIF وGPS...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'تنزيل النظيفة', // 'Download Clean'
    removeItem: 'إزالة {name}', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'أسقط شعارك أو أيقونتك هنا', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'يُفضل PNG أو SVG مربع · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'استعراض ملف', // 'browse file'
    errorGenerateFailed: 'تعذر إنشاء حزمة الأيقونة المفضلة.', // 'Failed to generate favicon package.'
    backgroundFill: 'تعبئة الخلفية', // 'Background Fill'
    transparent: 'شفاف', // 'Transparent'
    padding: 'الحشو', // 'Padding'
    cornerRadius: 'نصف قطر الزاوية', // 'Corner Radius'
    tabPreviewAlt: 'معاينة التبويب', // alt 'Tab preview'
    myWebsite: 'موقعي', // 'My Website'
    darkTabPreviewAlt: 'معاينة التبويب الداكن', // alt 'Dark tab preview'
    darkModeTab: 'تبويب الوضع الداكن', // 'Dark Mode Tab'
    packingZip: 'جارٍ تجهيز ZIP…', // 'Packing ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    clear: 'مسح', // title 'Clear'
    downloadFaviconIco: 'تنزيل favicon.ico', // title 'Download favicon.ico'
    downloadFile: 'تنزيل {filename}', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'مقتطف HTML <head>', // 'HTML <head> Snippet'
    copied: 'تم النسخ!', // 'Copied!'
    copyHtml: 'نسخ HTML', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'أسقط صورة أو الصق لقطة شاشة (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    clickAnywhereToPin: 'انقر في أي مكان لتثبيت لون', // 'Click anywhere to pin a color'
    newImage: 'صورة جديدة', // 'New Image'
    pixelInspector: 'فاحص البكسلات', // 'Pixel Inspector'
    copyLabel: 'نسخ {label}', // title `Copy ${row.label}`
    pickedSwatches: 'عينات محفوظة ({count})', // 'Picked Swatches ({palette.length})'
    exportCss: 'تصدير CSS', // 'Export CSS'
    clickPixelsHint: 'انقر على بكسلات الصورة لحفظ الألوان في لوحتك.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'انقر للتحديد ونسخ {hex}', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'أسقط الصور لفحص الأبعاد والنسب الدقيقة', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'فحص الحد الأدنى للعرض (بكسل)', // 'Min Width Check (px)'
    minHeightCheck: 'فحص الحد الأدنى للارتفاع (بكسل)', // 'Min Height Check (px)'
    placeholderMinWidth: 'مثال: 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'مثال: 630', // placeholder 'e.g. 630'
    exportCsv: 'تصدير CSV', // 'Export CSV'
    exportJson: 'تصدير JSON', // 'Export JSON'
    clear: 'مسح', // 'Clear'
    headerImage: 'الصورة', // table header 'Image'
    headerDimensions: 'الأبعاد', // table header 'Dimensions'
    headerAspectRatio: 'النسبة', // table header 'Aspect Ratio'
    headerOrientation: 'الاتجاه', // table header 'Orientation'
    headerSizeFormat: 'الحجم / الصيغة', // table header 'Size / Format'
    headerPrint300Dpi: 'الطباعة بدقة 300 DPI', // table header 'Print @300 DPI'
    headerSpecCheck: 'فحص المواصفات', // table header 'Spec Check'
    orientationLandscape: 'أفقي', // 'Landscape'
    orientationPortrait: 'عمودي', // 'Portrait'
    orientationSquare: 'مربع', // 'Square'
    alphaTag: ' · ألفا', // ' · Alpha'
    specPass: 'ناجح', // 'Pass'
    specBelowMin: 'دون الحد الأدنى', // 'Below Min'
    csvYes: 'نعم', // CSV value 'Yes'
    csvNo: 'لا', // CSV value 'No'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'أسقط صورة لتعتيم مناطق أو بكسلتها', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'فشل التصدير.', // 'Export failed.'
    paintOverAreasBlur: 'ارسم فوق المناطق لتعتيمها', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'ارسم فوق المناطق لبكسلتها', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'معاينة الصورة كاملة', // 'Whole-Image Preview'
    undo: 'تراجع', // 'Undo'
    resetBrush: 'إعادة تعيين الفرشاة', // 'Reset Brush'
    removeImage: 'إزالة الصورة', // aria-label 'Remove image'
    targetArea: 'المنطقة المستهدفة', // 'Target Area'
    brushArea: 'منطقة الفرشاة', // 'Brush Area'
    wholeImage: 'الصورة كاملة', // 'Whole Image'
    effectStyle: 'نمط التأثير', // 'Effect Style'
    pixelateMosaic: 'فسيفساء مبكسلة', // 'Pixelate Mosaic'
    smoothBlur: 'تعتيم ناعم', // 'Smooth Blur'
    blurRadius: 'نصف قطر التعتيم', // 'Blur Radius'
    mosaicBlockSize: 'حجم كتلة الفسيفساء', // 'Mosaic Block Size'
    brushSize: 'حجم الفرشاة', // 'Brush Size'
    brushHint: 'انقر واسحب مباشرة على الصورة لإخفاء الوجوه أو النص أو لوحات السيارات.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'الأصل', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'الجودة', // 'Quality'
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadImage: 'تنزيل الصورة', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'أسقط صورة لإضافة نصوص متراكبة مخصصة', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'فشل التصدير.', // 'Export failed.'
    dragAnyText: 'اسحب أي نص مباشرة على الصورة', // 'Drag Any Text Directly on Image'
    changeImage: 'تغيير الصورة', // 'Change Image'
    textLayer: 'النص {index}', // tab `Text ${idx + 1}`
    add: 'إضافة', // 'Add'
    deleteActiveTextLayer: 'حذف طبقة النص النشطة', // aria-label 'Delete active text layer'
    textContent: 'محتوى النص (يدعم أسطرًا متعددة)', // 'Text Content (multi-line supported)'
    font: 'الخط', // 'Font'
    fontInter: 'Inter / خط سان نظيف', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / خط عرض الميم', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / خط سيريف كلاسيكي', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / خط أحادي المسافة', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / خط سان مستدير', // font option 'Trebuchet / Rounded Sans'
    fill: 'التعبئة', // 'Fill'
    toggleBold: 'تبديل العريض', // aria-label 'Toggle Bold'
    toggleItalic: 'تبديل المائل', // aria-label 'Toggle Italic'
    size: 'الحجم', // 'Size'
    rotation: 'التدوير', // 'Rotation'
    textOutline: 'حد النص', // 'Text Outline'
    dropShadow: 'الظل المنسدل', // 'Drop Shadow'
    defaultLayerText: 'انقر مرتين أو حرّر النص', // default layer text 'Double-tap or edit text'
    defaultCaption: 'التسمية التوضيحية {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'الأصل', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'الجودة', // 'Quality'
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadImageWithText: 'تنزيل الصورة مع النص', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'أسقط صورة لإضافة حد أو إطار مخصص', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'فشل التصدير.', // 'Export failed.'
    framedPreview: 'معاينة مؤطرة', // 'Framed Preview'
    changeImage: 'تغيير الصورة', // 'Change Image'
    quickFramePresets: 'إعدادات إطار سريعة', // 'Quick Frame Presets'
    presetClassicWhite: 'أبيض كلاسيكي', // preset 'Classic White'
    presetPolaroidFrame: 'إطار بولارويد', // preset 'Polaroid Frame'
    presetDarkStudio: 'استوديو داكن', // preset 'Dark Studio'
    presetGradientGlow: 'توهج متدرج', // preset 'Gradient Glow'
    borderStyle: 'نمط الحد', // 'Border Style'
    borderStyleSolid: 'صلب', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'متدرج', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'بولارويد', // border type 'polaroid' (rendered capitalized)
    borderColor: 'لون الحد', // 'Border Color'
    startColor: 'لون البداية', // 'Start Color'
    endColor: 'لون النهاية', // 'End Color'
    gradientAngle: 'زاوية التدرج', // 'Gradient Angle'
    borderSize: 'حجم الحد', // 'Border Size'
    frameRadius: 'نصف قطر الإطار', // 'Frame Radius'
    photoRadius: 'نصف قطر الصورة', // 'Photo Radius'
    dropShadow: 'الظل المنسدل', // 'Drop Shadow'
    shadowNone: 'بلا', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'ناعم', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'متوسط', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'عميق', // shadow level 'deep' (rendered capitalized)
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadFramedImage: 'تنزيل الصورة المؤطرة', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'أسقط صورة لتدوير زواياها', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'تعذر تصدير الصورة المستديرة.', // 'Failed to export rounded image.'
    liveCornerPreview: 'معاينة حية للزوايا', // 'Live Corner Preview'
    changeImage: 'تغيير الصورة', // 'Change Image'
    cornerSettings: 'إعدادات الزوايا', // 'Corner Settings'
    fullCirclePill: 'دائرة كاملة / كبسولة', // 'Full Circle / Pill'
    individualPerCorner: 'تحكم فردي لكل زاوية', // 'Individual Per-Corner Control'
    allCornersRadius: 'نصف قطر جميع الزوايا', // 'All Corners Radius'
    cornerTopLeft: 'أعلى اليسار', // per-corner label 'Top Left'
    cornerTopRight: 'أعلى اليمين', // per-corner label 'Top Right'
    cornerBottomLeft: 'أسفل اليسار', // per-corner label 'Bottom Left'
    cornerBottomRight: 'أسفل اليمين', // per-corner label 'Bottom Right'
    outerCornerFill: 'تعبئة الزاوية الخارجية', // 'Outer Corner Fill'
    transparentPngWebp: 'شفاف (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'لون صلب', // 'Solid Color'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadRoundedImage: 'تنزيل الصورة المستديرة', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'أسقط صورة لضبط السطوع', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'تعذر تصدير الصورة المعدلة.', // 'Failed to export adjusted image.'
    viewAfter: 'بعد', // view tab 'after' (rendered capitalized)
    viewBefore: 'قبل', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'مقارنة مقسومة', // view tab 'Split Compare'
    fullscreenCompare: 'مقارنة بملء الشاشة', // 'Fullscreen Compare'
    removeImage: 'إزالة الصورة', // title/aria-label 'Remove image'
    beforeLabel: 'قبل', // split slider label 'Before'
    afterLabel: 'بعد', // split slider label 'After'
    originalPreviewAlt: 'معاينة أصلية', // alt 'Original preview'
    originalComparisonAlt: 'مقارنة أصلية', // alt 'Original comparison'
    brightnessControls: 'عناصر التحكم في السطوع', // 'Brightness Controls'
    reset: 'إعادة تعيين', // 'Reset'
    brightnessLevel: 'مستوى السطوع', // 'Brightness Level'
    minLabel: '-100% أغمق', // min label '-100% Darker'
    maxLabel: '+100% أفتح', // max label '+100% Brighter'
    quickPresets: 'إعدادات سريعة', // 'Quick Presets'
    presetDark: 'داكن (-30%)', // preset 'Dark (-30%)'
    presetDim: 'خافت (-15%)', // preset 'Dim (-15%)'
    presetOriginal: 'الأصل (0%)', // preset 'Original (0%)'
    presetBright: 'ساطع (+15%)', // preset 'Bright (+15%)'
    presetVibrant: 'نابض (+30%)', // preset 'Vibrant (+30%)'
    presetHighKey: 'مفتاح عالٍ (+50%)', // preset 'High Key (+50%)'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'الجودة', // 'Quality'
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadEditedImage: 'تنزيل الصورة المعدلة', // 'Download Edited Image'
    comparisonTitlePrefix: 'مقارنة السطوع', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'بعد التعديل (بعد)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'أسقط صورة لضبط التباين', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'مقارنة التباين', // 'Contrast Comparison'
    comparisonAfterLabel: 'بعد التعديل (بعد)', // 'Edited (After)'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'تعذر تصدير الصورة المعدلة.', // 'Failed to export adjusted image.'
    tabAfter: 'بعد', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'قبل', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'مقارنة مقسومة', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'مقارنة بملء الشاشة', // 'Fullscreen Compare'
    removeImage: 'إزالة الصورة', // title + aria-label 'Remove image'
    originalPreviewAlt: 'معاينة أصلية', // alt 'Original preview'
    originalComparisonAlt: 'مقارنة أصلية', // alt 'Original comparison'
    splitBeforeLabel: 'قبل', // split slider left label 'Before'
    splitAfterLabel: 'بعد', // split slider right label 'After'
    controlsHeading: 'عناصر التحكم في التباين', // '{label} Controls' (contrast mode)
    reset: 'إعادة تعيين', // 'Reset'
    levelLabel: 'مستوى التباين', // '{label} Level' (contrast mode)
    minLabel: '-100% مسطّح', // minLabel '-100% Flat'
    maxLabel: '+100% تباين عالٍ', // maxLabel '+100% High Contrast'
    quickPresets: 'إعدادات سريعة', // 'Quick Presets'
    presetSoft: 'ناعم (-25%)', // 'Soft (-25%)'
    presetMuted: 'خافت (-10%)', // 'Muted (-10%)'
    presetOriginal: 'الأصل (0%)', // 'Original (0%)'
    presetCrisp: 'حاد (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'قوي (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'درامي (+70%)', // 'Dramatic (+70%)'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'الجودة', // 'Quality'
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadEditedImage: 'تنزيل الصورة المعدلة', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'أسقط صورة لضبط التشبع', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'مقارنة التشبع', // 'Saturation Comparison'
    comparisonAfterLabel: 'بعد التعديل (بعد)', // 'Edited (After)'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'تعذر تصدير الصورة المعدلة.', // 'Failed to export adjusted image.'
    tabAfter: 'بعد', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'قبل', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'مقارنة مقسومة', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'مقارنة بملء الشاشة', // 'Fullscreen Compare'
    removeImage: 'إزالة الصورة', // title + aria-label 'Remove image'
    originalPreviewAlt: 'معاينة أصلية', // alt 'Original preview'
    originalComparisonAlt: 'مقارنة أصلية', // alt 'Original comparison'
    splitBeforeLabel: 'قبل', // split slider left label 'Before'
    splitAfterLabel: 'بعد', // split slider right label 'After'
    controlsHeading: 'عناصر التحكم في التشبع', // '{label} Controls' (saturation mode)
    reset: 'إعادة تعيين', // 'Reset'
    levelLabel: 'مستوى التشبع', // '{label} Level' (saturation mode)
    minLabel: '-100% رمادي', // minLabel '-100% Grayscale'
    maxLabel: '+100% زاهٍ', // maxLabel '+100% Vivid'
    quickPresets: 'إعدادات سريعة', // 'Quick Presets'
    presetGrayscale: 'رمادي (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'خافت (-40%)', // 'Muted (-40%)'
    presetOriginal: 'الأصل (0%)', // 'Original (0%)'
    presetRich: 'غني (+30%)', // 'Rich (+30%)'
    presetVivid: 'زاهٍ (+60%)', // 'Vivid (+60%)'
    presetHyper: 'مفرط (+90%)', // 'Hyper (+90%)'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'الجودة', // 'Quality'
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadEditedImage: 'تنزيل الصورة المعدلة', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'أسقط صورة لتطبيق الفلاتر', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'مقارنة الفلاتر', // 'Filter Comparison'
    comparisonAfterLabel: 'بعد الفلتر', // 'Filtered'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'فشل التصدير.', // 'Export failed.'
    filterPreview: 'معاينة الفلتر', // 'Filter Preview'
    holdToViewOriginal: 'اضغط مطولًا لعرض الأصل', // 'Hold to View Original'
    compare: 'قارن', // 'Compare'
    removeImage: 'إزالة الصورة', // aria-label 'Remove image'
    originalBadge: 'الأصل', // 'Original' badge
    filterPresets: 'إعدادات الفلاتر المسبقة', // 'Filter Presets'
    reset: 'إعادة تعيين', // 'Reset'
    presetOriginal: 'الأصل', // preset 'Original'
    presetGrayscale: 'رمادي', // preset 'Grayscale'
    presetSepia: 'بني دافئ (سيبيا)', // preset 'Sepia'
    presetVintage: 'قديم', // preset 'Vintage'
    presetWarm: 'دافئ', // preset 'Warm'
    presetCool: 'بارد', // preset 'Cool'
    presetHighContrast: 'تباين عالٍ', // preset 'High Contrast'
    presetMatteFade: 'بهتان مطفي', // preset 'Matte Fade'
    presetDramatic: 'درامي', // preset 'Dramatic'
    presetNoir: 'نوار أبيض وأسود', // preset 'B&W Noir'
    presetGoldenHour: 'الساعة الذهبية', // preset 'Golden Hour'
    presetInvert: 'عكس', // preset 'Invert'
    filterIntensity: 'شدة الفلتر', // 'Filter Intensity'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'الجودة', // 'Quality'
    rendering: 'جارٍ المعالجة…', // 'Rendering...'
    downloadFilteredImage: 'تنزيل الصورة المفلترة', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'أسقط صورة أو PNG شفافًا لإضافة خلفية', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorExportFailed: 'فشل التصدير.', // 'Export failed.'
    backgroundPreview: 'معاينة الخلفية', // 'Background Preview'
    changeImage: 'تغيير الصورة', // 'Change Image'
    outputDimensionsPrefix: 'الإخراج:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'نوع الخلفية', // 'Background Type'
    modeSolidColor: 'لون صلب', // 'Solid Color'
    modeGradient: 'متدرج', // 'Gradient'
    modeBlurredPhoto: 'صورة ضبابية', // 'Blurred Photo'
    selectColor: 'اختيار اللون {color}', // aria-label `Select color ${c}`
    color1: 'اللون 1', // 'Color 1'
    color2: 'اللون 2', // 'Color 2'
    angle: 'الزاوية', // 'Angle'
    backdropBlurRadius: 'نصف قطر تعتيم الخلفية', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'نسبة أبعاد اللوحة', // 'Canvas Aspect Ratio'
    aspectOriginal: 'الأصل', // 'Orig'
    imageScale: 'مقياس الصورة', // 'Image Scale'
    roundness: 'الاستدارة', // 'Roundness'
    dropShadowBehindImage: 'ظل منسدل خلف الصورة', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'جارٍ التصدير…', // 'Exporting...'
    downloadImage: 'تنزيل الصورة', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'أسقط صورة لتقسيمها إلى بلاطات شبكية أو شرائط', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorSplitFailed: 'تعذر تقسيم الصورة.', // 'Failed to split image.'
    errorCanvasContext: 'تعذر تهيئة سياق اللوحة.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'معاينة خطوط القطع ({rows} × {cols} = {tiles} قطعة)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'تغيير الصورة', // 'Change Image'
    splitGuideAlt: 'دليل التقسيم', // alt 'Split guide'
    splitLayout: 'تخطيط التقسيم', // 'Split Layout'
    modeGrid: 'شبكة (صف × عمود)', // 'Grid (N×M)'
    modeHorizontalStrips: 'شرائط أفقية', // 'Horiz. Strips'
    modeVerticalStrips: 'شرائط عمودية', // 'Vert. Strips'
    rowsLabel: 'الصفوف (قطوع أفقية)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'الأعمدة (قطوع عمودية)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 إنستغرام', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 دوّار', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 شرائط', // preset '4×1 Strips'
    formatOriginal: 'الأصل', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'جودة البلاطة', // 'Tile Quality'
    splittingImage: 'جارٍ تقسيم الصورة…', // 'Splitting Image...'
    splitIntoTiles: 'تقسيم إلى {count} بلاطات', // `Split into ${n} Tiles`
    splitComplete: 'اكتمل التقسيم', // 'Split Complete'
    tilesGenerated: 'تم إنشاء {count} بلاطات صور بدقة كاملة', // '{n} image tiles generated at full resolution'
    packagingZip: 'جارٍ تجهيز ZIP…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'تنزيل كل البلاطات (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'تنزيل', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'أسقط صور JPG أو PNG لتحديث بيانات DPI', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'تعذر تحديث DPI.', // 'Failed to update DPI.'
    targetDpiPresets: 'إعدادات DPI المستهدفة المسبقة', // 'Target DPI Presets'
    preset72Screen: '72 DPI (شاشة)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (ويندوز)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (طباعة مسودة)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (طباعة عالية الجودة)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (أرشيف)', // '600 DPI (Archival)'
    customDpi: 'DPI مخصص', // 'Custom DPI'
    applyDpi: 'تطبيق {dpi} DPI', // 'Apply {dpi} DPI'
    clear: 'مسح', // 'Clear'
    batchReady: 'الدفعة جاهزة', // 'Batch Ready'
    filesUpdatedToDpi: 'تم تحديث {count} ملفات إلى {dpi} DPI', // '{n} files updated to {dpi} DPI'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'قبل: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'قبل: غير مضبوط', // 'Before: Not set'
    verifiedDpi: 'تم التحقق: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'تحديث ترويسة JPEG غير فاقد', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'تحديث pHYs لـ PNG غير فاقد', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'تم التحويل إلى PNG مع DPI pHYs', // 'Converted to PNG with pHYs DPI'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'أسقط صورة لترميزها بصيغة Base64', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'تعذر ترميز الملف.', // 'Could not encode file.'
    errorFailedToRead: 'تعذر قراءة ملف الصورة.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'تعذرت الكتابة إلى الحافظة: حدد وانسخ من مربع النص.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'الملف:', // 'File:' (summary card)
    outputLabel: 'الإخراج:', // 'Output:' (summary card)
    charsLabel: 'حرف', // 'chars' (summary card)
    encodeAnother: 'ترميز أخرى', // 'Encode Another'
    tabDataUrl: 'رابط البيانات', // tab 'Data URL'
    tabRawBase64: 'Base64 خام', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'تم النسخ!', // 'Copied!'
    copyOutput: 'نسخ الإخراج', // 'Copy Output'
    saveTxt: 'حفظ .TXT', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'الصق سلسلة Base64 أو رابط بيانات', // 'Paste Base64 String or Data URL'
    clear: 'مسح', // 'Clear'
    inputPlaceholder: 'الصق data:image/png;base64,iVBORw0KGgo... أو بايتات Base64 خام هنا', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'يدعم حمولات Base64 لصيغ PNG وJPG وWebP وGIF وSVG وBMP وICO', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'جارٍ فك الترميز…', // 'Decoding...'
    decodeImage: 'فك ترميز الصورة', // 'Decode Image'
    decodingBytes: 'جارٍ فك ترميز بايتات Base64…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'ترميز رابط بيانات غير مدعوم. كان المتوقع حمولة Base64 (;base64,).', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'يحتوي الإدخال على أحرف Base64 غير صالحة.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'البايتات المفكوكة لا تشكّل صورة صالحة يمكن للمتصفح قراءتها.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'تعذر فك ترميز سلسلة Base64.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'معاينة Base64 المفكوكة', // alt 'Decoded Base64 preview'
    validImageDecoded: 'تم فك ترميز صورة صالحة', // 'Valid Image Decoded'
    detectedFormat: 'الصيغة المكتشفة', // 'Detected Format'
    binarySize: 'الحجم الثنائي', // 'Binary Size'
    dimensions: 'الأبعاد', // 'Dimensions'
    downloadFormat: 'صيغة التنزيل', // 'Download Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'تنزيل ملف الصورة', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'أسقط صورة لاستخراج لوحة ألوانها السائدة', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'تعذر تحميل الصورة.', // 'Unable to load image.'
    errorClipboardDenied: 'تم رفض إذن الحافظة.', // 'Clipboard permission denied.'
    extractedPalette: 'اللوحة المستخرجة ({count} ألوان)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'المصدر', // alt 'Source'
    changeImage: 'تغيير', // 'Change'
    numberOfColors: 'عدد الألوان', // 'Number of Colors'
    colorsCount: '{count} ألوان', // '{count} colors'
    copyCssVariables: 'نسخ متغيرات CSS', // 'Copy CSS Variables'
    copiedCss: 'تم نسخ CSS!', // 'Copied CSS!'
    copyJson: 'نسخ JSON', // 'Copy JSON'
    copiedJson: 'تم نسخ JSON!', // 'Copied JSON!'
    downloadPalettePng: 'تنزيل لوحة PNG', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'أسقط صورتين أو أكثر لإنشاء GIF متحرك', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'تعذر ترميز GIF المتحرك.', // 'Failed to encode animated GIF.'
    skippedFile: 'تم تخطي «{name}»: {error}', // 'Skipped "{file.name}": {err.message}'
    skippedFileNoError: 'تم تخطي «{name}».', // 'Skipped "{file.name}".'
    generatedGif: 'GIF مُنشأ ({width}×{height} بكسل · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'معاينة حية للتوقيت · الإطار {current}/{total}', // 'Live Timing Preview · Frame {n}/{total}'
    generatedGifAlt: 'GIF متحرك مُنشأ', // alt 'Generated animated GIF'
    pause: 'إيقاف مؤقت', // 'Pause'
    play: 'تشغيل', // 'Play'
    backToFrameEditor: 'العودة إلى محرر الإطارات', // 'Back to Frame Editor'
    clearAllFrames: 'مسح جميع الإطارات', // aria-label 'Clear all frames'
    largeGifWarning: 'تحذير GIF كبير ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      'قد تُرفع ملفات GIF الأكبر من 5–15 ميغابايت ببطء في تطبيقات المراسلة أو لا تستوفي حدود المنصات الصارمة. جرّب تقليل عرض/ارتفاع الإخراج (مثلًا 480 بكسل)، أو خفض الجودة، أو إزالة إطارات.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'تنزيل GIF المتحرك ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'إعدادات الحركة', // 'Animation Settings'
    defaultFrameDuration: 'مدة الإطار الافتراضية', // 'Default Frame Duration'
    frameDurationValue: '{ms} م.ث. ({fps} إطار/ثانية)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 إطار/ثانية (1000 م.ث.)', // '1 FPS (1000ms)'
    fpsPreset2: '2 إطار/ثانية (500 م.ث.)', // '2 FPS (500ms)'
    fpsPreset5: '5 إطارات/ثانية (200 م.ث.)', // '5 FPS (200ms)'
    fpsPreset10: '10 إطارات/ثانية (100 م.ث.)', // '10 FPS (100ms)'
    loopBehavior: 'سلوك التكرار', // 'Loop Behavior'
    loopForever: 'دائمًا', // 'Forever'
    loopSetLoops: 'تحديد التكرارات', // 'Set Loops'
    loopPlayOnce: 'تشغيل مرة واحدة', // 'Play Once'
    totalPlays: 'إجمالي مرات التشغيل', // 'Total Plays'
    outputDimensions: 'أبعاد الإخراج (بكسل)', // 'Output Dimensions (px)'
    ratioLocked: 'النسبة مقفلة', // 'Ratio Locked'
    ratioUnlocked: 'مفتوحة', // 'Unlocked'
    widthLabel: 'العرض', // 'Width'
    heightLabel: 'الارتفاع', // 'Height'
    sizePreset480: '480 بكسل', // '480px'
    sizePreset640: '640 بكسل', // '640px'
    sizePreset800: '800 بكسل', // '800px'
    sizePresetOriginal: 'الأصل', // 'Original'
    frameFit: 'ملاءمة الإطارات', // 'Frame Fit'
    fitContain: 'احتواء', // 'contain'
    fitCover: 'تغطية', // 'cover'
    backgroundMatte: 'خلفية مطفية', // 'Background Matte'
    colorPaletteQuality: 'جودة لوحة الألوان', // 'Color Palette Quality'
    encodingGif: 'جارٍ ترميز GIF ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'إنشاء GIF متحرك', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'إعادة ترميز GIF المتحرك', // 'Re-Encode Animated GIF'
    framesHeading: 'الإطارات ({count}) — اسحب أو استخدم الأسهم لإعادة الترتيب', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'اترك مدة كل إطار فارغة لوراثة مدة الإطار العامة البالغة {ms} م.ث.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'إضافة إطارات', // 'Add Frames'
    delayMsLabel: 'المدة (م.ث.):', // 'Delay (ms):'
    moveEarlier: 'نقل للأمام', // title 'Move earlier'
    moveLater: 'نقل للخلف', // title 'Move later'
    duplicateFrame: 'تكرار الإطار', // title 'Duplicate frame'
    removeFrame: 'إزالة الإطار', // title 'Remove frame'
    moveFrameEarlierAria: 'نقل الإطار {n} للأمام', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'نقل الإطار {n} للخلف', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'تكرار الإطار {n}', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'إزالة الإطار {n}', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'أسقط من 2 إلى 9 صور لإنشاء كولاج صور', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'تعذر تصدير الكولاج.', // 'Failed to export collage.'
    couldNotLoadFile: 'تعذر تحميل «{name}»: {error}', // 'Could not load "{file.name}": {err.message}'
    couldNotLoadFileNoError: 'تعذر تحميل «{name}».', // 'Could not load "{file.name}".'
    collagePreview: 'معاينة الكولاج ({width}×{height} بكسل)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'مسح الكل', // 'Clear All'
    rearrangeCells: 'إعادة ترتيب الخلايا (اسحب أو انقر خليتين للتبديل)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'اسحب أي بطاقة خلية فوق خانة أخرى لإعادة ترتيب الصور فورًا.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'إضافة صور', // 'Add Photos'
    cellLabel: 'الخلية {n}', // 'Cell {n}'
    slotLabel: 'الخانة {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'نقل الخلية {n} للخلف', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'نقل الخلية {n} للأمام', // aria-label `Move cell ${n} forward`
    clearCellAria: 'مسح الخلية {n}', // aria-label `Clear cell ${n}`
    addPhoto: 'إضافة صورة', // 'Add Photo'
    collageLayout: 'تخطيط الكولاج', // 'Collage Layout'
    layout2x2: 'شبكة 2×2', // '2×2 Grid'
    layout3x3: 'شبكة 3×3', // '3×3 Grid'
    layoutVertical: 'شريط عمودي', // 'Vertical Strip'
    layoutHorizontal: 'شريط أفقي', // 'Horizontal Strip'
    cellProportionsSpacing: 'نِسَب الخلايا والتباعد', // 'Cell Proportions & Spacing'
    equalCells: 'خلايا متساوية', // 'Equal Cells'
    colSplit: 'تقسيم الأعمدة', // 'Col Split'
    centerCol: 'العمود الأوسط', // 'Center Col'
    rowSplit: 'تقسيم الصفوف', // 'Row Split'
    centerRow: 'الصف الأوسط', // 'Center Row'
    leadCellEmphasis: 'إبراز الخلية الرئيسية', // 'Lead Cell Emphasis'
    gapSpacing: 'التباعد', // 'Gap Spacing'
    cellRadius: 'نصف قطر الخلية', // 'Cell Radius'
    backgroundColor: 'لون الخلفية', // 'Background Color'
    backgroundSwatchAria: 'خلفية {color}', // aria-label `Background ${c}`
    imageFit: 'ملاءمة الصورة', // 'Image Fit'
    fitCover: 'تغطية', // 'cover'
    fitContain: 'احتواء', // 'contain'
    outputSize: 'حجم الإخراج (بكسل)', // 'Output Size (px)'
    widthLabel: 'العرض', // 'Width'
    heightLabel: 'الارتفاع', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (غير فاقدة)', // 'PNG (Lossless)'
    jpgQuality: 'جودة JPG', // 'JPG Quality'
    exportingCollage: 'جارٍ تصدير الكولاج…', // 'Exporting Collage...'
    downloadCollage: 'تنزيل الكولاج ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'أسقط الصور لضغطها إلى أقل من {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'فشل الضغط إلى الحجم المستهدف.', // 'Target compression failed.'
    errorCorruptedFile: 'ملف صورة تالف أو غير قابل للقراءة.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'الحد الأقصى لحجم الملف المستهدف', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} كحد أقصى)', // '({bytes} max)'
    needDifferentTarget: 'هل تحتاج إلى هدف مختلف بالكيلوبايت؟', // 'Need a different target KB?'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'السماح بتقليص الأبعاد بذكاء إذا لم يكفِ خفض الجودة وحده للوصول إلى أقل من {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'تحويل ملفات PNG الكبيرة تلقائيًا إلى WebP/JPG عندما لا يستطيع PNG غير الفاقد الوصول إلى {target} بسهولة', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'لون مطفي لـ PNG الشفاف:', // 'Transparent PNG matte color:'
    compressToTarget: 'ضغط إلى {target}', // 'Compress to {target}'
    optimizing: 'جارٍ التحسين…', // 'Optimizing...'
    clear: 'مسح', // 'Clear'
    losslessPngSelected: 'تم تحديد PNG غير فاقد:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'يتجاهل PNG منزلقات الجودة، لذا يعتمد تقليل الحجم حصرًا على تصغير أبعاد البكسل. وبالنسبة للصور الكبيرة، اختر JPG أو WebP للوصول إلى حدود صارمة بالكيلوبايت مع الحفاظ على الحدة.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'ملخص الضغط المستهدف · الهدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: 'حقق {achieved} من {total} {images} هدف {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'صورة', // 'image'
    imagePlural: 'صور', // 'images'
    summaryMissed: ' · تعذر أن تتناسب {missed} بصدق (التفاصيل أدناه)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'المجموع الموفَّر: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'المجموع الموفَّر: {bytes} (زاد بمقدار {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    metricOriginal: 'الأصل', // 'Original' (metric label)
    metricOutput: 'الناتج', // 'Output' (metric label)
    metricSpaceSaved: 'المساحة الموفَّرة', // 'Space Saved' (metric label)
    metricReduction: 'التقليل', // 'Reduction' (metric label)
    metricSizeChange: 'تغير الحجم', // 'Size Change' (metric label)
    underTarget: 'أقل من {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'لم يتحقق الهدف — {bytes}', // 'Target missed — {bytes}'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    grewBy: 'زاد بمقدار {bytes}: إعادة الترميز أكبر من الأصل', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'عادة ما يكون WebP أو JPG أصغر لملفات PNG التي تشبه الصور.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'الاحتفاظ بالأصل', // 'Keep original'
    keptOriginalNote: 'تم الاحتفاظ بالملف الأصلي لأن إعادة الترميز جعلته أكبر.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'تم تحويل PNG غير الفاقد تلقائيًا إلى {format} للحفاظ على دقة أعلى دون {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (مع الحفاظ على الشفافية)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'كان الملف الأصلي أقل من {target} أصلًا، وأدت إعادة الترميز إلى زيادته بمقدار {bytes}. استخدم «الاحتفاظ بالأصل» أو بدّل إلى WebP/JPG للحصول على ناتج أصغر.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'كان الملف الأصلي أقل من {target} أصلًا؛ وتم تصديره بشكل نظيف بجودة {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'تحقق الهدف بالدقة الكاملة {width}×{height} بكسل ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'تحقق الهدف بالتقليص إلى {width}×{height} بكسل ({percent}%) بجودة {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG غير فاقد', // 'lossless PNG'
    qualityPercent: 'جودة {quality}%', // '{quality}% quality'
    statusCannotPng:
      'تعذر الوصول إلى {target} باستخدام PNG غير فاقد (أصغر ما يمكن تحقيقه: {bytes} بدقة {width}×{height} بكسل). بدّل صيغة الإخراج إلى JPG أو WebP للوصول إلى أحجام أصغر.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'تعذر الوصول إلى {target} بالأبعاد الكاملة {width}×{height} بكسل (الحد الأدنى لحجم الجودة هو {bytes}). فعّل «السماح بتقليص الأبعاد» لتقليل الأبعاد أكثر.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'تعذر الوصول إلى الهدف المطلوب {target} بشكل نظيف. وأصغر ناتج مرمّز صادق هو {bytes} ({width}×{height} بكسل، جودة {quality}%). جرّب حجمًا مستهدفًا أكبر.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'الضغط المستهدف ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'مضغوطة ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'أسقط الصور لضغطها إلى أقل من {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'فشل الضغط إلى الحجم المستهدف.', // 'Target compression failed.'
    errorCorruptedFile: 'ملف صورة تالف أو غير قابل للقراءة.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'الحد الأقصى لحجم الملف المستهدف', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} كحد أقصى)', // '({bytes} max)'
    needDifferentTarget: 'هل تحتاج إلى هدف مختلف بالكيلوبايت؟', // 'Need a different target KB?'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'السماح بتقليص الأبعاد بذكاء إذا لم يكفِ خفض الجودة وحده للوصول إلى أقل من {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'تحويل ملفات PNG الكبيرة تلقائيًا إلى WebP/JPG عندما لا يستطيع PNG غير الفاقد الوصول إلى {target} بسهولة', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'لون مطفي لـ PNG الشفاف:', // 'Transparent PNG matte color:'
    compressToTarget: 'ضغط إلى {target}', // 'Compress to {target}'
    optimizing: 'جارٍ التحسين…', // 'Optimizing...'
    clear: 'مسح', // 'Clear'
    losslessPngSelected: 'تم تحديد PNG غير فاقد:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'يتجاهل PNG منزلقات الجودة، لذا يعتمد تقليل الحجم حصرًا على تصغير أبعاد البكسل. وبالنسبة للصور الكبيرة، اختر JPG أو WebP للوصول إلى حدود صارمة بالكيلوبايت مع الحفاظ على الحدة.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'ملخص الضغط المستهدف · الهدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: 'حقق {achieved} من {total} {images} هدف {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'صورة', // 'image'
    imagePlural: 'صور', // 'images'
    summaryMissed: ' · تعذر أن تتناسب {missed} بصدق (التفاصيل أدناه)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'المجموع الموفَّر: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'المجموع الموفَّر: {bytes} (زاد بمقدار {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    metricOriginal: 'الأصل', // 'Original' (metric label)
    metricOutput: 'الناتج', // 'Output' (metric label)
    metricSpaceSaved: 'المساحة الموفَّرة', // 'Space Saved' (metric label)
    metricReduction: 'التقليل', // 'Reduction' (metric label)
    metricSizeChange: 'تغير الحجم', // 'Size Change' (metric label)
    underTarget: 'أقل من {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'لم يتحقق الهدف — {bytes}', // 'Target missed — {bytes}'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    grewBy: 'زاد بمقدار {bytes}: إعادة الترميز أكبر من الأصل', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'عادة ما يكون WebP أو JPG أصغر لملفات PNG التي تشبه الصور.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'الاحتفاظ بالأصل', // 'Keep original'
    keptOriginalNote: 'تم الاحتفاظ بالملف الأصلي لأن إعادة الترميز جعلته أكبر.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'تم تحويل PNG غير الفاقد تلقائيًا إلى {format} للحفاظ على دقة أعلى دون {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (مع الحفاظ على الشفافية)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'كان الملف الأصلي أقل من {target} أصلًا، وأدت إعادة الترميز إلى زيادته بمقدار {bytes}. استخدم «الاحتفاظ بالأصل» أو بدّل إلى WebP/JPG للحصول على ناتج أصغر.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'كان الملف الأصلي أقل من {target} أصلًا؛ وتم تصديره بشكل نظيف بجودة {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'تحقق الهدف بالدقة الكاملة {width}×{height} بكسل ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'تحقق الهدف بالتقليص إلى {width}×{height} بكسل ({percent}%) بجودة {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG غير فاقد', // 'lossless PNG'
    qualityPercent: 'جودة {quality}%', // '{quality}% quality'
    statusCannotPng:
      'تعذر الوصول إلى {target} باستخدام PNG غير فاقد (أصغر ما يمكن تحقيقه: {bytes} بدقة {width}×{height} بكسل). بدّل صيغة الإخراج إلى JPG أو WebP للوصول إلى أحجام أصغر.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'تعذر الوصول إلى {target} بالأبعاد الكاملة {width}×{height} بكسل (الحد الأدنى لحجم الجودة هو {bytes}). فعّل «السماح بتقليص الأبعاد» لتقليل الأبعاد أكثر.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'تعذر الوصول إلى الهدف المطلوب {target} بشكل نظيف. وأصغر ناتج مرمّز صادق هو {bytes} ({width}×{height} بكسل، جودة {quality}%). جرّب حجمًا مستهدفًا أكبر.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'الضغط المستهدف ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'مضغوطة ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'أسقط الصور لضغطها إلى أقل من {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'فشل الضغط إلى الحجم المستهدف.', // 'Target compression failed.'
    errorCorruptedFile: 'ملف صورة تالف أو غير قابل للقراءة.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'الحد الأقصى لحجم الملف المستهدف', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} كحد أقصى)', // '({bytes} max)'
    needDifferentTarget: 'هل تحتاج إلى هدف مختلف بالكيلوبايت؟', // 'Need a different target KB?'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'السماح بتقليص الأبعاد بذكاء إذا لم يكفِ خفض الجودة وحده للوصول إلى أقل من {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'تحويل ملفات PNG الكبيرة تلقائيًا إلى WebP/JPG عندما لا يستطيع PNG غير الفاقد الوصول إلى {target} بسهولة', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'لون مطفي لـ PNG الشفاف:', // 'Transparent PNG matte color:'
    compressToTarget: 'ضغط إلى {target}', // 'Compress to {target}'
    optimizing: 'جارٍ التحسين…', // 'Optimizing...'
    clear: 'مسح', // 'Clear'
    losslessPngSelected: 'تم تحديد PNG غير فاقد:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'يتجاهل PNG منزلقات الجودة، لذا يعتمد تقليل الحجم حصرًا على تصغير أبعاد البكسل. وبالنسبة للصور الكبيرة، اختر JPG أو WebP للوصول إلى حدود صارمة بالكيلوبايت مع الحفاظ على الحدة.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'ملخص الضغط المستهدف · الهدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: 'حقق {achieved} من {total} {images} هدف {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'صورة', // 'image'
    imagePlural: 'صور', // 'images'
    summaryMissed: ' · تعذر أن تتناسب {missed} بصدق (التفاصيل أدناه)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'المجموع الموفَّر: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'المجموع الموفَّر: {bytes} (زاد بمقدار {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    metricOriginal: 'الأصل', // 'Original' (metric label)
    metricOutput: 'الناتج', // 'Output' (metric label)
    metricSpaceSaved: 'المساحة الموفَّرة', // 'Space Saved' (metric label)
    metricReduction: 'التقليل', // 'Reduction' (metric label)
    metricSizeChange: 'تغير الحجم', // 'Size Change' (metric label)
    underTarget: 'أقل من {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'لم يتحقق الهدف — {bytes}', // 'Target missed — {bytes}'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    grewBy: 'زاد بمقدار {bytes}: إعادة الترميز أكبر من الأصل', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'عادة ما يكون WebP أو JPG أصغر لملفات PNG التي تشبه الصور.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'الاحتفاظ بالأصل', // 'Keep original'
    keptOriginalNote: 'تم الاحتفاظ بالملف الأصلي لأن إعادة الترميز جعلته أكبر.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'تم تحويل PNG غير الفاقد تلقائيًا إلى {format} للحفاظ على دقة أعلى دون {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (مع الحفاظ على الشفافية)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'كان الملف الأصلي أقل من {target} أصلًا، وأدت إعادة الترميز إلى زيادته بمقدار {bytes}. استخدم «الاحتفاظ بالأصل» أو بدّل إلى WebP/JPG للحصول على ناتج أصغر.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'كان الملف الأصلي أقل من {target} أصلًا؛ وتم تصديره بشكل نظيف بجودة {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'تحقق الهدف بالدقة الكاملة {width}×{height} بكسل ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'تحقق الهدف بالتقليص إلى {width}×{height} بكسل ({percent}%) بجودة {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG غير فاقد', // 'lossless PNG'
    qualityPercent: 'جودة {quality}%', // '{quality}% quality'
    statusCannotPng:
      'تعذر الوصول إلى {target} باستخدام PNG غير فاقد (أصغر ما يمكن تحقيقه: {bytes} بدقة {width}×{height} بكسل). بدّل صيغة الإخراج إلى JPG أو WebP للوصول إلى أحجام أصغر.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'تعذر الوصول إلى {target} بالأبعاد الكاملة {width}×{height} بكسل (الحد الأدنى لحجم الجودة هو {bytes}). فعّل «السماح بتقليص الأبعاد» لتقليل الأبعاد أكثر.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'تعذر الوصول إلى الهدف المطلوب {target} بشكل نظيف. وأصغر ناتج مرمّز صادق هو {bytes} ({width}×{height} بكسل، جودة {quality}%). جرّب حجمًا مستهدفًا أكبر.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'الضغط المستهدف ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'مضغوطة ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'أسقط الصور لضغطها إلى أقل من {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'فشل الضغط إلى الحجم المستهدف.', // 'Target compression failed.'
    errorCorruptedFile: 'ملف صورة تالف أو غير قابل للقراءة.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'الحد الأقصى لحجم الملف المستهدف', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} كحد أقصى)', // '({bytes} max)'
    needDifferentTarget: 'هل تحتاج إلى هدف مختلف بالكيلوبايت؟', // 'Need a different target KB?'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'السماح بتقليص الأبعاد بذكاء إذا لم يكفِ خفض الجودة وحده للوصول إلى أقل من {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'تحويل ملفات PNG الكبيرة تلقائيًا إلى WebP/JPG عندما لا يستطيع PNG غير الفاقد الوصول إلى {target} بسهولة', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'لون مطفي لـ PNG الشفاف:', // 'Transparent PNG matte color:'
    compressToTarget: 'ضغط إلى {target}', // 'Compress to {target}'
    optimizing: 'جارٍ التحسين…', // 'Optimizing...'
    clear: 'مسح', // 'Clear'
    losslessPngSelected: 'تم تحديد PNG غير فاقد:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'يتجاهل PNG منزلقات الجودة، لذا يعتمد تقليل الحجم حصرًا على تصغير أبعاد البكسل. وبالنسبة للصور الكبيرة، اختر JPG أو WebP للوصول إلى حدود صارمة بالكيلوبايت مع الحفاظ على الحدة.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'ملخص الضغط المستهدف · الهدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: 'حقق {achieved} من {total} {images} هدف {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'صورة', // 'image'
    imagePlural: 'صور', // 'images'
    summaryMissed: ' · تعذر أن تتناسب {missed} بصدق (التفاصيل أدناه)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'المجموع الموفَّر: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'المجموع الموفَّر: {bytes} (زاد بمقدار {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    metricOriginal: 'الأصل', // 'Original' (metric label)
    metricOutput: 'الناتج', // 'Output' (metric label)
    metricSpaceSaved: 'المساحة الموفَّرة', // 'Space Saved' (metric label)
    metricReduction: 'التقليل', // 'Reduction' (metric label)
    metricSizeChange: 'تغير الحجم', // 'Size Change' (metric label)
    underTarget: 'أقل من {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'لم يتحقق الهدف — {bytes}', // 'Target missed — {bytes}'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    grewBy: 'زاد بمقدار {bytes}: إعادة الترميز أكبر من الأصل', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'عادة ما يكون WebP أو JPG أصغر لملفات PNG التي تشبه الصور.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'الاحتفاظ بالأصل', // 'Keep original'
    keptOriginalNote: 'تم الاحتفاظ بالملف الأصلي لأن إعادة الترميز جعلته أكبر.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'تم تحويل PNG غير الفاقد تلقائيًا إلى {format} للحفاظ على دقة أعلى دون {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (مع الحفاظ على الشفافية)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'كان الملف الأصلي أقل من {target} أصلًا، وأدت إعادة الترميز إلى زيادته بمقدار {bytes}. استخدم «الاحتفاظ بالأصل» أو بدّل إلى WebP/JPG للحصول على ناتج أصغر.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'كان الملف الأصلي أقل من {target} أصلًا؛ وتم تصديره بشكل نظيف بجودة {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'تحقق الهدف بالدقة الكاملة {width}×{height} بكسل ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'تحقق الهدف بالتقليص إلى {width}×{height} بكسل ({percent}%) بجودة {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG غير فاقد', // 'lossless PNG'
    qualityPercent: 'جودة {quality}%', // '{quality}% quality'
    statusCannotPng:
      'تعذر الوصول إلى {target} باستخدام PNG غير فاقد (أصغر ما يمكن تحقيقه: {bytes} بدقة {width}×{height} بكسل). بدّل صيغة الإخراج إلى JPG أو WebP للوصول إلى أحجام أصغر.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'تعذر الوصول إلى {target} بالأبعاد الكاملة {width}×{height} بكسل (الحد الأدنى لحجم الجودة هو {bytes}). فعّل «السماح بتقليص الأبعاد» لتقليل الأبعاد أكثر.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'تعذر الوصول إلى الهدف المطلوب {target} بشكل نظيف. وأصغر ناتج مرمّز صادق هو {bytes} ({width}×{height} بكسل، جودة {quality}%). جرّب حجمًا مستهدفًا أكبر.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'الضغط المستهدف ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'مضغوطة ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'أسقط عشرات الصور للضغط الجماعي', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'فشل الضغط.', // 'Compression failed.'
    errorCorruptedFile: 'ملف صورة تالف أو غير قابل للقراءة.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'ملفات تعريف الدفعات السريعة:', // 'Quick Batch Profiles:'
    profileWebFast: 'ويب سريع (WebP 75%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'بريد / مشاركة (JPG 65%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'دقة عالية (85%)', // 'High Fidelity (85%)'
    compressingBatch: 'جارٍ ضغط الدفعة محليًا…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated above.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: 'أسقط الصور لضغطها إلى أقل من {target}', // `Drop images to compress under ${targetLabel}`
    targetMaxFileSize: 'الحد الأقصى لحجم الملف المستهدف', // 'Target Maximum File Size'
    targetNumberAria: 'رقم حجم الملف المستهدف', // aria-label 'Target file size number'
    maxSuffix: '({size} كحد أقصى)', // '({formatBytes(effectiveTargetBytes)} max)'
    needDifferentTarget: 'هل تحتاج إلى هدف آخر بالكيلوبايت؟', // 'Need a different target KB?'
    preset20kb: '20 كيلوبايت', // '20 KB' — unchanged
    preset50kb: '50 كيلوبايت', // '50 KB' — unchanged
    preset100kb: '100 كيلوبايت', // '100 KB' — unchanged
    preset200kb: '200 كيلوبايت', // '200 KB' — unchanged
    preset500kb: '500 كيلوبايت', // '500 KB' — unchanged
    preset1mb: '1 ميغابايت', // '1 MB' — unchanged
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    allowDownscale: 'السماح بتقليص الأبعاد بذكاء إذا لم يكفِ خفض الجودة وحده للوصول إلى أقل من {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'تحويل ملفات PNG الكبيرة تلقائيًا إلى WebP/JPG عندما لا يستطيع PNG غير الفاقد الوصول إلى {target} بسهولة', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'لون مطفي لـ PNG الشفاف:', // 'Transparent PNG matte color:'
    losslessPngTitle: 'تم تحديد PNG غير فاقد:', // 'Lossless PNG selected:'
    losslessPngNote: 'يتجاهل PNG منزلقات الجودة، لذا يعتمد تقليل الحجم حصرًا على تصغير أبعاد البكسل. وبالنسبة للصور الكبيرة، اختر JPG أو WebP للوصول إلى حدود صارمة بالكيلوبايت مع الحفاظ على الحدة.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: 'ضغط إلى {target}', // 'Compress to {targetLabel}'
    optimizing: 'جارٍ التحسين…', // 'Optimizing...'
    clear: 'مسح', // 'Clear'
    targetSummary: 'ملخص الضغط المستهدف · الهدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: 'حقق {achieved} من {total} {images} هدف {target}', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'صورة', // 'image'
    imagePlural: 'صور', // 'images'
    summaryMissed: '· تعذرت {missed} في التناسب بصدق (التفاصيل أدناه)', // '· {missed} could not honestly fit (details below)'
    totalSaved: 'المجموع الموفَّر: {saved}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(زاد بمقدار {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    underTarget: 'أقل من {target} ({size})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'لم يتحقق الهدف — {size}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'الأصل', // 'Original'
    columnOutput: 'الناتج', // 'Output'
    columnSpaceSaved: 'المساحة الموفَّرة', // 'Space Saved'
    columnReduction: 'التقليل', // 'Reduction'
    columnSizeChange: 'تغير الحجم', // 'Size Change'
    grewBy: 'زاد بمقدار {amount}: إعادة الترميز أكبر من الأصل.', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'عادة ما يكون WebP أو JPG أصغر لملفات PNG الفوتوغرافية.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'الاحتفاظ بالأصل', // 'Keep original'
    keptOriginalNote: 'تم الاحتفاظ بالملف الأصلي لأن إعادة الترميز جعلته أكبر.', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'كان الملف الأصلي أقل من {target} أصلًا؛ وتم تصديره بشكل نظيف بجودة {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'تحقق الهدف بالدقة الكاملة {width}×{height} بكسل ({quality}).', // 'Target met at full {width}×{height}px resolution ({quality}% quality / lossless PNG).'
    statusMetScaled: 'تحقق الهدف بالتقليص إلى {width}×{height} بكسل (مقياس {scale}%).', // 'Target met by scaling to {width}×{height}px ({scale}% scale).'
    statusCannotPng: 'تعذر الوصول إلى {target} باستخدام PNG غير فاقد (أصغر ما يمكن تحقيقه: {size}).', // 'Cannot reach {target} with lossless PNG (smallest achievable: {size}).'
    statusCannotFull: 'تعذر الوصول إلى {target} بالأبعاد الكاملة {width}×{height} بكسل (الحد الأدنى لحجم الجودة هو {size}).', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {size}).'
    statusCannotCleanly: 'تعذر الوصول إلى هدف {target} بشكل نظيف. وأصغر ناتج مرمّز صادق هو {size}.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {size}.'
    switchedFormatNote: 'تم تحويل PNG غير الفاقد تلقائيًا إلى {format}.', // 'Auto-converted lossless PNG to {format}.'
    errorTargetFailed: 'فشل الضغط المستهدف.', // 'Target compression failed.'
    errorCorruptedFile: 'ملف صورة تالف أو غير قابل للقراءة.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'الضغط المستهدف ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'مضغوطة ({size})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'أسقط عدة صور لتغيير حجمها جماعيًا', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'استراتيجية تغيير الحجم الجماعي', // 'Batch Resize Strategy'
    strategyBounding: 'ملاءمة الحد الأقصى للعرض × الارتفاع', // 'Fit Max W × H'
    strategyWidth: 'عرض موحد', // 'Uniform Width'
    strategyExact: 'عرض × ارتفاع دقيق', // 'Exact W × H'
    strategyPercentage: 'نسبة مئوية (%)', // 'Percentage (%)'
    outputFormat: 'صيغة الإخراج', // 'Output Format'
    formatOriginal: 'الأصلية', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'قياس جميع الصور:', // 'Scale All Images:'
    maxWidth: 'الحد الأقصى للعرض (بكسل)', // 'Max Width (px)'
    targetWidth: 'العرض المستهدف (بكسل)', // 'Target Width (px)'
    exactWidth: 'العرض الدقيق (بكسل)', // 'Exact Width (px)'
    maxHeight: 'الحد الأقصى للارتفاع (بكسل)', // 'Max Height (px)'
    exactHeight: 'الارتفاع الدقيق (بكسل)', // 'Exact Height (px)'
    doNotEnlarge: 'عدم تكبير الصور الأصغر', // 'Do not enlarge smaller images'
    fitMode: 'وضع الملاءمة', // 'Fit Mode'
    fitContain: 'احتواء', // 'Contain'
    fitCover: 'تغطية', // 'Cover'
    fitStretch: 'تمديد', // 'Stretch'
    presetFullHd: 'Full HD 1920 بكسل', // 'Full HD 1920px' — unchanged
    presetBlog: 'مدونة 1200 بكسل', // 'Blog 1200px' — unchanged
    presetEcommerce: 'تجارة إلكترونية 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'مصغرة 600 بكسل', // 'Thumbnail 600px'
    quality: 'الجودة:', // 'Quality:'
    matteBg: 'خلفية مطفية:', // 'Matte BG:'
    resizingProgress: 'جارٍ تغيير الحجم ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'تغيير حجم جماعي ({count})', // 'Bulk Resize ({items.length})'
    clear: 'مسح', // 'Clear'
    bulkResizeComplete: 'اكتمل تغيير الحجم الجماعي', // 'Bulk Resize Complete'
    imagesResizedReadySingular: 'تم تغيير حجم {count} صورة وهي جاهزة', // '{count} image resized and ready'
    imagesResizedReadyPlural: 'تم تغيير حجم {count} صور وهي جاهزة', // '{count} images resized and ready'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'فشل تغيير الحجم الجماعي.', // 'Batch resize failed.'
    errorCorruptedFile: 'ملف صورة تالف أو غير قابل للقراءة.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'مقارنة تغيير الحجم الجماعي', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'بعد تغيير الحجم (بعد)', // 'Resized (After)'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'أسقط عدة صور لتحويل صيغها جماعيًا', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'تحويل الدفعة إلى صيغة', // 'Convert Batch To Format'
    formatWebp: 'WebP (الأخف للويب)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (شاملة)', // 'JPG (Universal)'
    formatPng: 'PNG (غير فاقدة مع شفافية)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'لاحقة اسم ملف اختيارية', // 'Optional Filename Suffix'
    placeholderSuffix: 'مثال: _web', // placeholder 'e.g. _web'
    transparentFill: 'تعبئة شفافة', // 'Transparent Fill'
    qualityLosslessPng: 'الجودة (PNG غير فاقدة)', // 'Quality (Lossless PNG)'
    qualityPercent: 'الجودة ({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: 'جارٍ التحويل ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'تحويل الكل ({count})', // 'Convert All ({items.length})'
    clear: 'مسح', // 'Clear'
    bulkConversionSummary: 'ملخص التحويل الجماعي', // 'Bulk Conversion Summary'
    filesConvertedSummary: 'تم تحويل {count} ملفات إلى {format} · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    convertedTo: 'تم التحويل إلى {ext}', // 'Converted to {ext}'
    errorConversionFailed: 'فشل التحويل الجماعي.', // 'Batch conversion failed.'
    errorUnsupportedFile: 'ملف صورة غير مدعوم أو تالف.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'تحويل الصيغة جماعيًا', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'بعد التحويل (بعد)', // 'Converted (After)'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'أسقط أصول الموقع لتحسينها لمؤشرات Core Web Vitals', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'إعدادات أداء الويب المسبقة', // 'Web Performance Presets'
    presetHero: 'ترويسة / لافتة', // 'Hero / Banner'
    presetHeroDesc: 'بحد أقصى 1600 بكسل · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: 'منتج تجارة إلكترونية', // 'E-Commerce Product'
    presetProductDesc: 'بحد أقصى 1200 بكسل · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: 'بطاقة / مصغرة', // 'Card / Thumbnail'
    presetThumbDesc: 'بحد أقصى 640 بكسل · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: 'OG اجتماعي / بريد', // 'Social OG / Email'
    presetOgDesc: 'بحد أقصى 1200 بكسل · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'رسم Retina 2×', // 'Retina 2× Graphic'
    presetRetinaDesc: 'بحد أقصى 1920 بكسل · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: 'صيغة الويب', // 'Web Format'
    maxDimension: 'البعد الأقصى (الحافة الطويلة)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'الاحتفاظ بالأبعاد الأصلية', // 'Keep Original Dimensions'
    max1920: 'بحد أقصى 1920 بكسل (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'بحد أقصى 1600 بكسل (ترويسة / لافتة)', // 'Max 1600px (Hero / Banner)'
    max1200: 'بحد أقصى 1200 بكسل (مدونة / منتج)', // 'Max 1200px (Blog / Product)'
    max800: 'بحد أقصى 800 بكسل (داخل المحتوى)', // 'Max 800px (In-Content)'
    max640: 'بحد أقصى 640 بكسل (مصغرات)', // 'Max 640px (Thumbnails)'
    quality: 'الجودة:', // 'Quality:'
    onlyDownscale: 'تقليص الصور الأكبر فقط (تُزال بيانات EXIF وGPS الوصفية تلقائيًا)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'جارٍ التحسين…', // 'Optimizing...'
    optimizeForWeb: 'تحسين للويب ({count})', // 'Optimize for Web ({items.length})'
    clear: 'مسح', // 'Clear'
    webPerformanceSummary: 'ملخص أداء الويب', // 'Web Performance Summary'
    pageWeightSaved: '(أخف بنسبة {percent}% · تم توفير {saved} من وزن الصفحة)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · زاد بمقدار {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    webReady: 'جاهز للويب ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: 'زاد بمقدار {amount} ({percent})', // 'Grew by {amount} ({formatPercent})'
    copyImg: 'نسخ <img>', // 'Copy <img>'
    copiedHtml: 'تم نسخ HTML', // 'Copied HTML'
    copyImgTitle: 'نسخ وسم HTML img متجاوب بعرض وارتفاع صريحين', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'فشل تحسين الويب.', // 'Web optimization failed.'
    errorCorruptedFile: 'صورة تالفة أو غير مدعومة.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'مقارنة تحسين الويب', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'جاهز للويب (بعد)', // 'Web-Ready (After)'
    compare: 'قارن', // 'Compare'
    download: 'تنزيل', // 'Download'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'أسقط GIF متحركًا لضغطه', // 'Drop an animated GIF to compress'
    decodingGif: 'جارٍ فك ترميز إطارات GIF المتحرك محليًا في متصفحك…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'إطار', // 'frame'
    framePlural: 'إطارات', // 'frames'
    presetLight: 'خفيف', // 'Light'
    presetBalanced: 'متوازن', // 'Balanced'
    presetMaxShrink: 'أقصى تقليص', // 'Max Shrink'
    colorPaletteLimit: 'حد ألوان اللوحة', // 'Color Palette Limit'
    colorsCount: '{count} ألوان', // '{maxColors} colors'
    outputScale: 'مقياس الإخراج', // 'Output Scale'
    scaleWithDims: '{percent}% ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'تحسين معدل الإطارات', // 'Frame Rate Optimization'
    keepAllFrames: 'الاحتفاظ بجميع الإطارات', // 'Keep All Frames'
    dropEvery2nd: 'حذف كل إطار ثانٍ (أصغر بنحو 50%)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'الاحتفاظ بإطار واحد من كل 3 إطارات', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'جارٍ ضغط GIF ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'ضغط GIF', // 'Compress GIF'
    reset: 'إعادة تعيين', // 'Reset'
    originalGif: 'GIF الأصلي', // 'Original GIF'
    compressedGif: 'GIF المضغوط', // 'Compressed GIF'
    sizeChange: 'تغير الحجم', // 'Size Change'
    sizeAndFrames: '{size} · {frames} إطار', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'تنزيل GIF المضغوط', // 'Download Compressed GIF'
    notSmallerNotice: 'كان GIF الأصلي هذا محسّنًا بشدة أصلًا أو يستخدم لوحة إطار كامل أكبر من المدخل. ولتصغيره إلى أقل من {size}، قلّل لون اللوحة إلى 32–64 لونًا، أو اخفض مقياس الإخراج إلى 75% أو 50%، أو احذف كل إطار ثانٍ.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'تم الضغط بنسبة {percent}% (تم توفير {saved}) بشكل نظيف في متصفحك.', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'الأصل ({width}×{height} بكسل)', // 'Original ({width}×{height}px)'
    compressedLabel: 'المضغوط ({width}×{height} بكسل)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'GIF الأصلي', // alt 'Original GIF'
    altCompressedGif: 'GIF المضغوط', // alt 'Compressed GIF'
    errorGifFailed: 'فشل ضغط GIF.', // 'GIF compression failed.'
    errorDecodeFrames: 'تعذر فك ترميز إطارات GIF.', // 'Could not decode GIF frames.'
    errorTooSmall: 'الملف صغير جدًا ليكون GIF صالحًا.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'الملف المحدد ليس رسمًا متحركًا GIF87a أو GIF89a صالحًا.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'يحتوي GIF على أبعاد لوحة غير صالحة 0×0.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'جدول ألوان GIF العام مبتور.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'تعذر فك ترميز أي إطارات صور من ملف GIF هذا.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: 'تعذر تهيئة سياق اللوحة ثنائي الأبعاد.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'أسقط صور HEIC أو HEIF من آيفون لتحويلها إلى JPG', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'يفك ترميز صور HEIC وHEIF من آبل محليًا داخل متصفحك باستخدام WebAssembly من جانب العميل (heic2any): صورك لا تغادر جهازك أبدًا.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    outputQuality: 'جودة إخراج JPG', // 'JPG Output Quality'
    smallerFile: 'ملف أصغر (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'أقصى تفصيل (100%)', // 'Max detail (100%)'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    converting: 'جارٍ التحويل…', // 'Converting...'
    clear: 'مسح', // 'Clear'
    batchSummary: 'ملخص دفعة HEIC → JPG', // 'HEIC → JPG Batch Summary'
    filesConverted: 'تم تحويل {count} {files} · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    columnChange: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل JPG', // 'Download JPG'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'تعذر فك ترميز ملف HEIC/HEIF هذا. تأكد من أنها صورة HEIC صالحة من آيفون أو آبل.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: 'تعذر فك ترميز «{filename}». تحقق من أنها صورة HEIC صالحة.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: 'تعذر تحويل {name} إلى JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'أسقط صور JPG أو JPEG لتحويلها إلى PNG غير فاقد', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    losslessPngOutput: 'إخراج PNG غير فاقد', // 'Lossless PNG Output'
    losslessPngEncoding: 'ترميز PNG غير فاقد', // 'Lossless PNG Encoding'
    losslessPngNote: 'يحافظ PNG على الحواف الحادة والنص وشفافية ألفا دون أي تشوهات ضغط فاقد.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    converting: 'جارٍ التحويل…', // 'Converting...'
    clear: 'مسح', // 'Clear'
    batchSummary: 'ملخص دفعة JPG → PNG', // 'JPG → PNG Batch Summary'
    filesConverted: 'تم تحويل {count} {files} · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    columnChange: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل PNG', // 'Download PNG'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'تعذر فك ترميز «{filename}». تحقق من أنها صورة JPG صالحة.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: 'تعذر تحويل {name} إلى PNG.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'أسقط ملفات PNG لتحويلها إلى JPG أصغر', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    outputQuality: 'جودة إخراج JPG', // 'JPG Output Quality'
    smallerFile: 'ملف أصغر (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'أقصى تفصيل (100%)', // 'Max detail (100%)'
    transparentMatteColor: 'لون مطفي للخلفية الشفافة', // 'Transparent Background Matte Color'
    matteWhite: 'أبيض', // 'White'
    matteBlack: 'أسود', // 'Black'
    matteLightGray: 'رمادي فاتح', // 'Light Gray'
    matteNote: 'لا يدعم JPG الشفافية؛ وتُملأ المناطق الشفافة بهذا اللون بشكل نظيف.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    converting: 'جارٍ التحويل…', // 'Converting...'
    clear: 'مسح', // 'Clear'
    batchSummary: 'ملخص دفعة PNG → JPG', // 'PNG → JPG Batch Summary'
    filesConverted: 'تم تحويل {count} {files} · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    columnChange: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل JPG', // 'Download JPG'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'تعذر فك ترميز «{filename}». تحقق من أنها صورة PNG صالحة.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: 'تعذر تحويل {name} إلى JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'أسقط صور JPG لتحويلها إلى WebP خفيف', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'جودة إخراج WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'جودة إخراج WebP', // aria-label 'WebP output quality'
    smallerFile: 'ملف أصغر (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'أقصى تفصيل (100%)', // 'Max detail (100%)'
    batchSummary: 'ملخص دفعة {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    filesConvertedSuffix: 'تم تحويلها', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل WebP', // 'Download WebP'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    converting: 'جارٍ التحويل…', // 'Converting...'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    clear: 'مسح', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'تعذر تحويل {name} إلى WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'تعذر فك ترميز «{name}». تحقق من أنها صورة JPG صالحة.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'أسقط صور WebP لتحويلها إلى JPG شامل', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'جودة إخراج JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'جودة إخراج JPG', // aria-label 'JPG output quality'
    smallerFile: 'ملف أصغر (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'أقصى تفصيل (100%)', // 'Max detail (100%)'
    matteColorLabel: 'لون مطفي للخلفية الشفافة', // 'Transparent Background Matte Color'
    matteAriaLabel: 'لون الخلفية المطفي', // aria-label 'Matte background color'
    matteWhite: 'أبيض', // 'White'
    matteBlack: 'أسود', // 'Black'
    matteLightGray: 'رمادي فاتح', // 'Light Gray'
    matteHint: 'لا يدعم JPG الشفافية؛ وتُملأ المناطق الشفافة بهذا اللون بشكل نظيف.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'ملخص دفعة {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    filesConvertedSuffix: 'تم تحويلها', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل JPG', // 'Download JPG'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    converting: 'جارٍ التحويل…', // 'Converting...'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    clear: 'مسح', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'تعذر تحويل {name} إلى JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'تعذر فك ترميز «{name}». تحقق من أنها صورة WebP صالحة.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'أسقط ملفات PNG لتحويلها إلى WebP شفاف', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'جودة إخراج WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'جودة إخراج WebP', // aria-label 'WebP output quality'
    smallerFile: 'ملف أصغر (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'أقصى تفصيل (100%)', // 'Max detail (100%)'
    batchSummary: 'ملخص دفعة {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    filesConvertedSuffix: 'تم تحويلها', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل WebP', // 'Download WebP'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    converting: 'جارٍ التحويل…', // 'Converting...'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    clear: 'مسح', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'تعذر تحويل {name} إلى WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'تعذر فك ترميز «{name}». تحقق من أنها صورة PNG صالحة.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'أسقط ملفات WebP لتحويلها إلى PNG غير فاقد', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    losslessPngOutput: 'إخراج PNG غير فاقد', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'ترميز PNG غير فاقد', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'يحافظ PNG على الحواف الحادة والنص وشفافية ألفا دون أي تشوهات ضغط فاقد.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: 'ملخص دفعة {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    filesConvertedSuffix: 'تم تحويلها', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل PNG', // 'Download PNG'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    converting: 'جارٍ التحويل…', // 'Converting...'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    clear: 'مسح', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'تعذر تحويل {name} إلى PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'تعذر فك ترميز «{name}». تحقق من أنها صورة WebP صالحة.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'أسقط ملفات SVG المتجهة لتحويلها إلى PNG نقطي', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'يحوّل رسومات SVG المضمّنة محليًا عبر HTML5 Canvas مع الحفاظ على الخلفيات الشفافة. القيد: روابط <image> الخارجية، أو أوراق أنماط CSS الخارجية / خطوط الويب، أو البرامج النصية المشار إليها داخل SVG قد لا تُعرض في التصدير المستقل عبر Canvas.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    losslessPngOutput: 'إخراج PNG غير فاقد', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'ترميز PNG غير فاقد', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'يحافظ PNG على الحواف الحادة والنص وشفافية ألفا دون أي تشوهات ضغط فاقد.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'مقياس تصدير التحويل النقطي', // 'Raster Export Scale'
    rasterExportScaleHint: 'مضاعف يُطبق على الأبعاد الجوهرية لـ SVG (بحد أقصى 8000 بكسل). انقر على «إعادة تحويل الكل» بعد تغيير المقياس.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: 'ملخص دفعة {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    filesConvertedSuffix: 'تم تحويلها', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل PNG', // 'Download PNG'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    converting: 'جارٍ التحويل…', // 'Converting...'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    clear: 'مسح', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'تعذر تحويل {name} إلى PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'تعذر تحويل SVG هذا إلى صورة نقطية. تأكد من أن الملف ترميز SVG XML صالح دون أخطاء في الصياغة.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'أسقط صور AVIF لتحويلها إلى JPG شامل', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'يفك ترميز صور AVIF محليًا باستخدام مفكك AVIF الأصلي في متصفحك (مدعوم في إصدارات كروم وإيدج وفايرفوكس وسفاري الحديثة) ويصدّر ملفات JPG قياسية.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'جودة إخراج JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'جودة إخراج JPG', // aria-label 'JPG output quality'
    smallerFile: 'ملف أصغر (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'أقصى تفصيل (100%)', // 'Max detail (100%)'
    matteColorLabel: 'لون مطفي للخلفية الشفافة', // 'Transparent Background Matte Color'
    matteAriaLabel: 'لون الخلفية المطفي', // aria-label 'Matte background color'
    matteWhite: 'أبيض', // 'White'
    matteBlack: 'أسود', // 'Black'
    matteLightGray: 'رمادي فاتح', // 'Light Gray'
    matteHint: 'لا يدعم JPG الشفافية؛ وتُملأ المناطق الشفافة بهذا اللون بشكل نظيف.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'ملخص دفعة {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    filesConvertedSuffix: 'تم تحويلها', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل JPG', // 'Download JPG'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    converting: 'جارٍ التحويل…', // 'Converting...'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    clear: 'مسح', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'تعذر تحويل {name} إلى JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'تعذر على متصفحك فك ترميز صورة AVIF هذه. تحقق من أن الملف صورة .avif صالحة وجرّب متصفحًا حديثًا من كروم أو فايرفوكس أو إيدج أو سفاري.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'أسقط صور BMP النقطية غير المضغوطة لتحويلها إلى JPG مدمج', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'مسار التحويل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'جودة إخراج JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'جودة إخراج JPG', // aria-label 'JPG output quality'
    smallerFile: 'ملف أصغر (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'أقصى تفصيل (100%)', // 'Max detail (100%)'
    batchSummary: 'ملخص دفعة {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'ملف', // 'file'
    filePlural: 'ملفات', // 'files'
    filesConvertedSuffix: 'تم تحويلها', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'جارٍ إنشاء ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'تنزيل الكل (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'التغير', // 'Change'
    compare: 'قارن', // 'Compare'
    downloadTarget: 'تنزيل JPG', // 'Download JPG'
    removeImage: 'إزالة {name}', // aria-label `Remove ${item.name}`
    converting: 'جارٍ التحويل…', // 'Converting...'
    reconvertAll: 'إعادة تحويل الكل', // 'Re-convert All'
    clear: 'مسح', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'تعذر تحويل {name} إلى JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'تعذر فك ترميز «{name}». تحقق من أنها صورة BMP صالحة.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
} as const;
