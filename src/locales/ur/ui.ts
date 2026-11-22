// Urdu (ur) UI strings for CompressMyPic — standard Urdu, natural phrasing
// as used by Urdu speakers.
// Source: ~/workspace/compressmypic/spanish/source/ (Hero, FaqSection, EducationalContent,
// ToolsDirectorySection, ShareSection, Header, Footer, ToolPageLayout, UploadZone,
// ComparisonModal, home-entry.txt, index.html, App.tsx guides section, tools.ts categories).
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. Placeholders: {name} = tool/file name, {max} = max size in MB,
// {year} = current year, {count} = number of extra errors.
// Note on uploadZone: hint and errorTooBig interpolate the max size — kept as {max}.

export const UR = {
  header: {
    home: 'ہوم',
    tools: 'ٹولز',
    howItWorks: 'یہ کیسے کام کرتا ہے',
    faq: 'عمومی سوالات',
    about: 'ہمارے بارے میں',
    blog: 'بلاگ',
    contact: 'رابطہ کریں',
    compressImages: 'تصاویر کمپریس کریں',
    themeLight: 'ہلکی تھیم',
    themeDark: 'گہری تھیم',
    themeSystem: 'سسٹم ڈیفالٹ',
    languageLabel: 'زبان',
    homeAriaLabel: 'CompressMyPic – مفت آن لائن امیج کمپریسر',
    themeLightShort: 'ہلکا', // 'Light'
    themeDarkShort: 'گہرا', // 'Dark'
    themeSystemShort: 'سسٹم', // 'System'
    themeHeading: 'تھیم', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'نیویگیشن مینیو دکھائیں یا چھپائیں', // 'Toggle navigation menu'
    themeAriaLabel: 'رنگ کی تھیم بدلیں (موجودہ: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'تھیم: {current}', // 'Theme: {current}'
    aboutUs: 'ہمارے بارے میں', // 'About Us' (mobile drawer)
    contactUs: 'رابطہ کریں', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'تیز، محفوظ اور نجی امیج کمپریشن، براہِ راست آپ کے براؤزر میں۔ JPG، PNG اور WebP تصاویر کو بہتر بنائیں، بغیر اپنا ڈیٹا کسی بیرونی سرور پر اپ لوڈ کیے۔',
    privacyNote: 'آپ کے ڈیوائس پر 100% پرائیویسی',
    toolsHeading: 'امیج ٹولز',
    legalHeading: 'اعتماد اور قانونی',
    guidesHeading: 'گائیڈز',
    blogLabel: 'بلاگ',
    moreHeading: 'مزید یوٹیلٹیز',
    directoryHeading: 'کمپریشن، ایڈیٹنگ اور ڈیولپمنٹ کے جدید ٹولز',
    processedLocally: 'HTML5 Canvas سے مقامی طور پر پروسیس کیا گیا',
    bottomRights:
      '© {year} CompressMyPic۔ جملہ حقوق محفوظ ہیں۔ براؤزر میں مفت امیج کمپریشن یوٹیلٹی۔',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: 'رابطہ: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'تصاویر کمپریس کریں' },
      { slug: '/image-resizer', label: 'امیج ری سائزر' },
      { slug: '/image-converter', label: 'امیج کنورٹر' },
      { slug: '/rotate-flip-image', label: 'تصویر گھمائیں اور پلٹیں' },
      { slug: '/image-to-pdf', label: 'امیج ٹو PDF' },
      { slug: '/remove-image-metadata', label: 'امیج میٹا ڈیٹا ہٹائیں' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'پرائیویسی پالیسی' },
      { slug: '/terms', label: 'سروس کی شرائط' },
      { slug: '/about', label: 'ہمارے بارے میں' },
      { slug: '/contact', label: 'سپورٹ سے رابطہ کریں' },
      { slug: '/disclaimer', label: 'ڈسکلیمر' },
      { slug: '/cookie-policy', label: 'کوکی پالیسی' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'کوالٹی کھوئے بغیر WhatsApp کے لیے تصاویر کمپریس کرنے کا طریقہ',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG بمقابلہ PNG بمقابلہ WebP: کون سا فارمیٹ استعمال کریں؟',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'ویب اور ای میل کے لیے امیج کا سائز 100KB تک کم کرنے کا طریقہ',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'میٹا ڈیٹا اور EXIF ویوور' },
      { slug: '/favicon-generator', label: 'فیویکون جنریٹر' },
      { slug: '/image-color-picker', label: 'امیج کلر پکر' },
      { slug: '/image-dimensions-checker', label: 'امیج ڈائمینشن چیکر' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: '50KB تک کمپریس کریں' },
      { slug: '/compress-image-to-100kb', label: '100KB تک کمپریس کریں' },
      { slug: '/compress-image-to-200kb', label: '200KB تک کمپریس کریں' },
      { slug: '/compress-image-to-500kb', label: '500KB تک کمپریس کریں' },
      { slug: '/target-file-size-compressor', label: 'ٹارگٹ فائل سائز کمپریسر' },
      { slug: '/bulk-image-compressor', label: 'بلک امیج کمپریسر' },
      { slug: '/bulk-image-resizer', label: 'بلک امیج ری سائزر' },
      { slug: '/bulk-image-converter', label: 'بلک امیج کنورٹر' },
      { slug: '/web-image-optimizer', label: 'ویب امیج آپٹیمائزر' },
      { slug: '/gif-compressor', label: 'GIF کمپریسر' },
      { slug: '/image-cropper', label: 'امیج کراپر' },
      { slug: '/image-watermark', label: 'امیج واٹر مارک' },
      { slug: '/blur-pixelate-image', label: 'بلر اور پکسلیٹ کریں' },
      { slug: '/add-text-to-image', label: 'تصویر پر ٹیکسٹ لکھیں' },
      { slug: '/image-border-generator', label: 'امیج بارڈر جنریٹر' },
      { slug: '/round-image-corners', label: 'تصویر کے کونے گول کریں' },
      { slug: '/image-brightness-editor', label: 'امیج برائٹنس ایڈیٹر' },
      { slug: '/image-contrast-editor', label: 'امیج کنٹراسٹ ایڈیٹر' },
      { slug: '/image-saturation-editor', label: 'امیج سیچوریشن ایڈیٹر' },
      { slug: '/image-filters', label: 'امیج فلٹرز' },
      { slug: '/add-background-to-image', label: 'تصویر میں بیک گراؤنڈ لگائیں' },
      { slug: '/image-splitter', label: 'امیج اسپلٹر' },
      { slug: '/image-dpi-changer', label: 'امیج DPI چینجر' },
      { slug: '/image-to-base64', label: 'امیج ٹو Base64' },
      { slug: '/base64-to-image', label: 'Base64 ٹو امیج' },
      { slug: '/image-color-palette-extractor', label: 'کلر پیلیٹ ایکسٹریکٹر' },
      { slug: '/gif-maker', label: 'GIF میکر' },
      { slug: '/image-collage-maker', label: 'امیج کولاج میکر' },
      { slug: '/heic-to-jpg', label: 'HEIC ٹو JPG' },
      { slug: '/jpg-to-png', label: 'JPG ٹو PNG' },
      { slug: '/png-to-jpg', label: 'PNG ٹو JPG' },
      { slug: '/jpg-to-webp', label: 'JPG ٹو WebP' },
      { slug: '/webp-to-jpg', label: 'WebP ٹو JPG' },
      { slug: '/png-to-webp', label: 'PNG ٹو WebP' },
      { slug: '/webp-to-png', label: 'WebP ٹو PNG' },
      { slug: '/svg-to-png', label: 'SVG ٹو PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF ٹو JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP ٹو JPG' },
    ],
  },
  hero: {
    pill: 'آپ کے ڈیوائس پر 100% نجی کمپریشن · سرور پر کوئی اپ لوڈ نہیں',
    h1: 'مفت امیج کمپریسر – آن لائن تصاویر کمپریس کریں',
    sub: 'بغیر ظاہری کوالٹی کھوئے اپنی امیج فائلوں کا سائز کم کریں۔ ہمارے مفت آن لائن امیج کمپریسر سے تصاویر کمپریس کریں: JPG، PNG، WebP اور HEIC کے لیے آن لائن امیج آپٹیمائزر۔ تیز، محفوظ، بغیر رجسٹریشن، بغیر واٹر مارک، اور براہِ راست آپ کے براؤزر میں آسان کمپریشن۔',
    badge1: 'آپ کی تصاویر کبھی آپ کے ڈیوائس سے باہر نہیں جاتیں',
    badge2: 'براؤزر میں فوری پروسیسنگ',
    badge3: 'JPG، PNG، WebP اور HEIC سپورٹ کرتا ہے',
  },
  toolsDirectory: {
    heading: 'تصاویر پروسیس کرنے کے مزید مفت ٹولز',
    subheading:
      'ہر ٹول 100% آپ کے براؤزر میں کام کرتا ہے: سرور پر کوئی اپ لوڈ نہیں، کوئی رجسٹریشن نہیں، کوئی واٹر مارک نہیں۔',
    eyebrow: 'تمام ٹولز براؤزر میں ہی چلتے ہیں', // 'All Browser-Native Tools'
    allTools: 'تمام ٹولز', // 'All Tools'
    openTool: 'ٹول کھولیں', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'امیج کمپریشن کیا ہے؟',
        body: 'امیج کمپریشن کسی گرافک فائل کا سائز کم کرنے کا عمل ہے، بغیر تصویر کی ظاہری کوالٹی کو قابلِ قبول حد سے زیادہ خراب کیے۔ جب کوئی کیمرہ یا فون تصویر محفوظ کرتا ہے تو وہ بہت زیادہ ڈیٹا ذخیرہ کرتا ہے، اور اس معلومات کا بڑا حصہ عام نظر سے دیکھنے پر الگ نہیں کیا جا سکتا، چاہے اسے ہٹا دیا جائے یا سادہ کر دیا جائے۔ CompressMyPic ایک مفت آن لائن امیج آپٹیمائزر اور امیج سائز کم کرنے والا ٹول ہے جو JPG، PNG اور WebP فائلوں کے لیے فوٹو کمپریسر اور فوٹو سائز کم کرنے والے کے طور پر کام کرتا ہے۔\n\nان پیٹرنز کا تجزیہ کر کے، کمپریشن الگورتھم اضافی معلومات کو دوبارہ ترتیب دیتے ہیں یا منتخب طور پر ہٹا دیتے ہیں۔ نتیجے میں بننے والی فائل کو بہت کم اسٹوریج کی ضرورت ہوتی ہے اور وہ انٹرنیٹ پر بہت تیزی سے منتقل ہوتی ہے۔ یہ گائیڈ آپ کو بتاتی ہے کہ CompressMyPic کے کوالٹی سلائیڈر، پہلے سے تیار سیٹنگز اور فارمیٹ کے انتخاب سے کوالٹی کھوئے بغیر تصویر کیسے کمپریس کریں۔',
      },
      {
        heading: 'آپ کو اپنی تصاویر کیوں کمپریس کرنی چاہییں؟',
        body: 'بغیر آپٹیمائز کی گئی تصاویر ویب سائٹ کی رفتار، اسٹوریج کی جگہ اور موبائل ڈیٹا کے استعمال کے لیے سب سے بڑی رکاوٹوں میں سے ایک ہیں۔ اپنی تصاویر کمپریس کرنے سے فوری اور ٹھوس فائدے ملتے ہیں:',
        bullets: [
          'ویب سائٹ تیزی سے لوڈ ہوتی ہے: کمپریس شدہ تصاویر والے صفحات 70% تک تیزی سے لوڈ ہوتے ہیں، جس سے آپ کے Core Web Vitals (Largest Contentful Paint) اور سرچ انجن میں رینکنگ بہتر ہوتی ہے۔ جب آپ اپنی ویب سائٹ کی تصاویر کا سائز کم کرتے ہیں تو وزیٹرز زیادہ دیر رکتے ہیں اور صفحہ کم چھوڑتے ہیں۔',
          'کم اسٹوریج کی جگہ: بھاری اصل فائلوں کی بجائے آپٹیمائز شدہ امیج فائلیں محفوظ کر کے کلاؤڈ ہوسٹنگ، سرور ڈسک اور بیک اپ کے اخراجات کم کریں۔',
          'تصاویر شیئر کرنا آسان ہو جاتا ہے: ای میل اٹیچمنٹ کی سخت حدیں یا میسج اپ لوڈ کی حدیں اب آپ کو نہیں روکیں گی۔ کمپریس شدہ تصاویر فوری طور پر اٹیچ اور بھیجی جاتی ہیں، چاہے موبائل کنکشن سست ہو یا ڈیٹا پلان محدود ہو۔',
          'کم بینڈوتھ کا استعمال: موبائل ڈیٹا پلانز پر اپنے صارفین کے پیسے بچائیں اور وزیٹرز کو اپنی سائٹ چھوڑنے سے روکیں۔ چھوٹی فائلیں تیزی سے ڈاؤن لوڈ ہوتی ہیں، خاص طور پر سست موبائل کنکشن پر۔',
        ],
      },
      {
        heading: 'یہ کیسے کام کرتا ہے',
        body: 'اپنی تصاویر کمپریس کرنے میں صرف چند سیکنڈ لگتے ہیں: نہ اکاؤنٹ چاہیے، نہ کوئی پروگرام، نہ کوئی اپ لوڈ۔ تین آسان مراحل میں کوالٹی کھوئے بغیر تصویر کمپریس کرنے کا طریقہ یہ ہے۔',
        bullets: [
          'مرحلہ 1 — اپنی تصاویر اپ لوڈ کریں: اپنی JPG، PNG، WebP یا HEIC تصاویر کو اپ لوڈ والے حصے میں ڈریگ کر کے چھوڑیں، انہیں منتخب کرنے کے لیے «فائلز براؤز کریں» پر کلک کریں، یا Ctrl+V سے تصویر پیسٹ کریں۔ آپ ایک ساتھ کئی تصاویر اپ لوڈ کر سکتے ہیں، فی تصویر 20 MB تک۔',
          'مرحلہ 2 — کوالٹی ایڈجسٹ کریں اور اپنا فارمیٹ منتخب کریں: کم، متوازن یا زیادہ میں سے کوئی پہلے سے تیار سیٹنگ منتخب کریں، یا کوالٹی سلائیڈر کو 10% سے 100% تک گھمائیں، اور فیصلہ کریں کہ اصل فارمیٹ رکھنا ہے یا JPG، PNG یا WebP میں تبدیل کرنا ہے۔ ہر تصویر کا پہلے اور بعد کا سائز لائیو دیکھیں اور نتیجہ دیکھنے کے لیے انٹرایکٹو موازنہ سلائیڈر استعمال کریں۔',
          'مرحلہ 3 — اپنی کمپریس شدہ تصاویر ڈاؤن لوڈ کریں: ہر کمپریس شدہ تصویر الگ سے ڈاؤن لوڈ کریں یا پورا بیچ ایک ہی فائل میں حاصل کرنے کے لیے «سب ڈاؤن لوڈ کریں (ZIP)» پر کلک کریں۔ آپ کی تصاویر براہِ راست آپ کے براؤزر میں کمپریس ہوتی ہیں، اس لیے نہ انتظار کرنا ہے نہ کچھ اپ لوڈ کرنا ہے۔',
        ],
      },
      {
        heading: 'یہ مفت امیج کمپریسر کیوں استعمال کریں؟',
        body: 'CompressMyPic ایک مفت امیج کمپریسر ہے، بغیر رجسٹریشن اور بغیر واٹر مارک کے، جو روزمرہ کی تصاویر، ویب سائٹ کی تصاویر اور سوشل میڈیا پوسٹس کے لیے بنایا گیا ہے۔',
        bullets: [
          'JPG، PNG، WebP اور HEIC کمپریس کریں: ایک ہی امیج کمپریسر ان فارمیٹس کے لیے جو آپ واقعی استعمال کرتے ہیں۔ JPG اور JPEG تصاویر کمپریس کریں، شفافیت برقرار رکھتے ہوئے PNG گرافکس کمپریس کریں، اور سب سے چھوٹی فائلیں حاصل کرنے کے لیے WebP تصاویر کمپریس کریں۔',
          'کوالٹی کھوئے بغیر امیج کا سائز کم کریں: ذہین کمپریشن اضافی ڈیٹا اور میٹا ڈیٹا ہٹا دیتی ہے، اور تصویر پھر بھی اصل جیسی ہی دکھائی دیتی ہے۔ متوازن سیٹنگ بہترین شروعات ہے، اور پہلے اور بعد کا موازنہ آپ کو کوالٹی خود جانچنے دیتا ہے۔',
          'بلک امیج کمپریسر: ایک ساتھ کئی تصاویر کمپریس کریں: یہ بلک امیج کمپریسر آپ کو ایک ہی سیٹنگز سے ایک ساتھ کئی تصاویر کمپریس کرنے اور «سب ڈاؤن لوڈ کریں (ZIP)» بٹن سے سب ایک ساتھ ڈاؤن لوڈ کرنے دیتا ہے، بجائے اس کے کہ فائلیں ایک ایک کر کے محفوظ کریں۔',
          'WhatsApp، Instagram اور Facebook کے لیے تصاویر کمپریس کریں: تصاویر کا سائز کم کریں تاکہ وہ WhatsApp پر تیزی سے بھیجی جائیں اور Instagram اور Facebook پر بغیر کسی مسئلے کے اپ لوڈ ہوں۔ چھوٹی فائلیں کم موبائل ڈیٹا استعمال کرتی ہیں اور بہت زیادہ بڑی ہونے کی وجہ سے مسترد ہونے کا امکان بہت کم ہوتا ہے۔',
          'امیج کا سائز 20KB، 50KB، 100KB یا 200KB تک کم کریں: کوالٹی سلائیڈر کو مرحلہ وار نیچے لے جائیں اور پہلے اور بعد کا لائیو سائز دیکھتے ہوئے اپنے ہدف تک پہنچیں: 200KB، 100KB، 50KB یا یہاں تک کہ 20KB۔ آؤٹ پٹ فارمیٹ کو WebP میں تبدیل کرنے سے عام طور پر کم ظاہری کوالٹی کھو کر وہاں پہنچنے میں مدد ملتی ہے۔',
        ],
      },
      {
        heading: 'JPG، PNG اور WebP کمپریس کریں: کون سا فارمیٹ منتخب کریں؟',
        body: 'JPG، PNG اور WebP کے الگ الگ استعمال ہیں۔ ان کی خوبیاں جاننے سے آپ کو اپنے پراجیکٹ کے لیے بہترین انتخاب کرنے میں مدد ملتی ہے۔\n\nبصری فرق کا موازنہ کریں: نہیں جانتے کہ کتنی کمپریشن قابلِ قبول ہے؟ ٹول کا پہلے اور بعد کا موازنہ استعمال کریں۔ ہمارا انٹرایکٹو سلائیڈر آپ کو اصل تصویر اور کمپریس شدہ ورژن ساتھ ساتھ دیکھنے دیتا ہے، تاکہ ڈاؤن لوڈ کرنے سے پہلے بصری خرابیاں یا کوالٹی کا نقصان پہچان سکیں۔',
        bullets: [
          'JPG کمپریسر — آن لائن مفت JPG کمپریس کریں: اپنی ویب سائٹ، بلاگ یا پورٹ فولیو کی تصاویر کے لیے بہترین۔ آن لائن مفت JPG کمپریس کریں اور لائیو سائز دیکھتے ہوئے کوالٹی سلائیڈر نیچے کر کے JPEG کو 100KB تک کمپریس کریں۔ JPEG کمپریشن lossy ہوتی ہے: یہ کچھ بصری ڈیٹا مستقل طور پر ہٹا دیتی ہے جو انسانی آنکھ مشکل سے پہچانتی ہے۔ اسی لیے آپ میگا بائٹس کی تصویر کو بغیر ظاہری کوالٹی کھوئے کلو بائٹس تک کم کر سکتے ہیں۔',
          'PNG کمپریسر — آن لائن مفت PNG کمپریس کریں: گرافکس، اسکرین شاٹس، لوگو اور ایسی تصاویر کے لیے بہترین جنہیں شفافیت چاہیے، جیسے لوگو، آئیکن یا السٹریشن۔ یہاں آن لائن مفت PNG کمپریس کریں اور پوری شفافیت برقرار رکھیں، تاکہ گرافکس ہر پکسل پر صاف رہیں۔ PNG کو WebP میں تبدیل کرنے سے وہ اکثر بہت چھوٹا ہو جاتا ہے۔',
          'WebP تصاویر کمپریس کریں — جدید فارمیٹ: ویب آپٹیمائزیشن کے لیے بہترین۔ WebP بہترین lossy اور lossless کمپریشن دیتا ہے جو عام طور پر JPEG یا PNG سے 25% سے 35% تک چھوٹی ہوتی ہے۔ سب سے چھوٹے سائز کے ساتھ ملتی جلتی کوالٹی کے لیے WebP امیج فائلیں کمپریس کریں، اور جب آپ بغیر ظاہری کوالٹی کھوئے ویب صفحات کے لیے تصاویر آپٹیمائز کرنا چاہیں تو WebP استعمال کریں۔ یہ زیادہ تر ویب سائٹس کے لیے بہترین انتخاب ہے۔',
        ],
      },
      {
        heading: 'یہ امیج کمپریسر کس کام آ سکتا ہے؟',
        body: 'ایک ہی مفت امیج کمپریسر ان سب سے عام وجوہات کو پورا کرتا ہے جن کی وجہ سے لوگوں کو امیج کا سائز کم کرنے کی ضرورت پڑتی ہے۔',
        bullets: [
          'ویب کے لیے تصاویر آپٹیمائز کریں: اپنے ویب صفحات کی تصاویر آپٹیمائز کریں تاکہ وہ تیزی سے لوڈ ہوں، Core Web Vitals بہتر ہوں اور رینکنگ بہتر ہو۔ چھوٹی تصاویر کا مطلب تیز صفحات، خوش وزیٹرز اور کم ہوسٹنگ بینڈوتھ ہے۔',
          'ای میل اٹیچمنٹ کے لیے تصاویر کمپریس کریں: ای میل اٹیچمنٹ کے لیے تصاویر کمپریس کریں تاکہ آپ کی تصاویر اٹیچمنٹ سائز کی حدوں میں آ جائیں۔ بڑی اصل فائلوں کی بجائے چھوٹی ڈاؤن لوڈ شدہ فائلیں اٹیچ کریں اور آپ کی ای میلز بغیر واپس آئے بھیجی جائیں گی۔',
          'اپنی ویب سائٹ کے لیے تصویر کمپریس کریں: اپ لوڈ کرنے سے پہلے اپنی ویب سائٹ، بلاگ، پورٹ فولیو یا آن لائن اسٹور کے لیے تصویر کمپریس کریں۔ پروڈکٹ کی تصاویر، بینرز اور بلاگ کی تصاویر صاف رہتی ہیں اور آپ کے سرور پر بہت کم جگہ لیتی ہیں۔',
          'تصویر کا فائل سائز کم کریں: شیئر کرنے، محفوظ کرنے یا پرنٹ کرنے سے پہلے اپنے فون یا کیمرے کی تصویر کا فائل سائز کم کریں۔ بڑی تصاویر تیزی سے بھیجی جاتی ہیں، آسانی سے محفوظ ہوتی ہیں اور بغیر کسی مشکل کے سنبھالی جاتی ہیں۔',
        ],
      },
      {
        heading: 'امیج کا سائز کیوں اہم ہے',
        body: 'بڑی اور ہائی ریزولوشن امیج فائلیں کیمرہ ٹیکنالوجی کی تیز ترقی کا نتیجہ ہیں: تصاویر اب صرف چند سال پہلے کے مقابلے میں 2 سے 3 گنا بڑی ہیں۔ جب آپ اپنی ویب سائٹ کی تصاویر کا سائز کم کرتے ہیں اور ویب کے لیے تصاویر آپٹیمائز کرتے ہیں تو آپ کی سائٹ تیزی سے لوڈ ہوتی ہے، کم بینڈوتھ استعمال کرتی ہے اور سرچ نتائج میں بہتر رینک کرتی ہے۔\n\nاچھا کمپریسر تلاش کرتے وقت ان باتوں کا خیال رکھیں: 1) کوالٹی قربان نہ کرے، 2) آپ کا ڈیٹا نجی رکھے (آپ کے ڈیوائس پر پروسیسنگ) اور 3) آپ کی فائلیں کسی دور سرور پر بھیجے بغیر تیزی سے پروسیس کرے۔ CompressMyPic بالکل اسی کے لیے بنایا گیا ہے۔',
      },
      {
        heading: 'آپٹیمائزیشن کے مشورے: کوالٹی کھوئے بغیر امیج کا سائز کم کریں',
        body: '',
        bullets: [
          'متوازن سیٹنگ سے شروع کریں: متوازن سیٹنگ (70% کوالٹی) زیادہ تر تصاویر کے لیے بہترین توازن دیتی ہے: بہت چھوٹی فائلیں اور اصل سے زبردست بصری مماثلت۔',
          'صحیح فارمیٹ منتخب کریں: تصاویر کے لیے JPG یا WebP ہمیشہ PNG سے چھوٹی فائلیں دیں گے۔ شفافیت والے لوگو اور لائن گرافکس کے لیے PNG استعمال کریں۔',
          'ٹارگٹ سائز طے کریں: ویب سائٹ کے استعمال کے لیے 200 KB سے کم کی تصاویر تلاش کریں۔ ای میل اور میسجز کے لیے 1 MB سے نیچے رہیں تاکہ وہ تیزی سے پہنچیں۔ اپنے ٹارگٹ سائز تک پہنچنے کے لیے کوالٹی سلائیڈر اور لائیو سائز استعمال کریں۔',
          'بہترین نقطہ تلاش کریں: اہم تصاویر کے لیے کوالٹی سلائیڈر 85–90% پر رکھیں، جہاں کوالٹی اہم ہے؛ عام ویب استعمال کے لیے 70–80% اکثر بہترین توازن ہوتا ہے؛ تھمب نیلز کے لیے یا جب سائز سب سے اہم ہو تو 50–60% بہتر ہے۔',
          'سب سے چھوٹی فائلوں کے لیے WebP آزمائیں: آؤٹ پٹ فارمیٹ کو WebP میں تبدیل کرنے سے JPG یا PNG عام طور پر ملتی جلتی کوالٹی کے ساتھ 25% سے 35% تک مزید کم ہو جاتا ہے: کوالٹی کھوئے بغیر امیج کا سائز کم کرنے کا آسان طریقہ۔',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'عمومی سوالات',
    subheading:
      'CompressMyPic سے آن لائن مفت تصاویر کمپریس کرنے کے بارے میں وہ سب کچھ جو آپ کو جاننے کی ضرورت ہے۔',
    faqs: [
      {
        id: 'faq-1',
        question: 'میں آن لائن مفت تصویر کیسے کمپریس کر سکتا ہوں؟',
        answer:
          'بس اپنی امیج فائلوں کو CompressMyPic میں ڈریگ کر کے چھوڑیں یا «فائلز براؤز کریں» پر کلک کریں۔ کمپریشن کی پہلے سے تیار سیٹنگ (کم، متوازن یا زیادہ) منتخب کریں یا کوالٹی سلائیڈر ایڈجسٹ کریں، اور اپنی آپٹیمائز شدہ تصاویر فوری طور پر ڈاؤن لوڈ کریں۔ یہ ٹول 100% مفت ہے، بغیر رجسٹریشن اور بغیر کوئی پروگرام انسٹال کیے۔',
      },
      {
        id: 'faq-2',
        question: 'میں تصویر کو 100KB تک کیسے کمپریس کروں؟',
        answer:
          'CompressMyPic میں KB میں درست سائز لکھنے کا کوئی خانہ نہیں ہے، اس لیے آپ 100KB براہِ راست نہیں لکھ سکتے۔ اس کے بجائے اپنی تصویر اپ لوڈ کریں، کوئی پہلے سے تیار سیٹنگ منتخب کریں یا کوالٹی سلائیڈر نیچے کریں، اور ہر تصویر کے لیے دکھایا جانے والا پہلے اور بعد کا لائیو سائز دیکھیں۔ کوالٹی ایڈجسٹ کریں یا آؤٹ پٹ فارمیٹ کو WebP میں تبدیل کریں یہاں تک کہ کمپریس شدہ سائز 100KB کے قریب آ جائے، پھر اسے ڈاؤن لوڈ کریں۔',
      },
      {
        id: 'faq-3',
        question: 'میں کوالٹی کھوئے بغیر امیج کا سائز کیسے کم کروں؟',
        answer:
          'متوازن سیٹنگ (تقریباً 70% کوالٹی) یا 85–90% کی زیادہ کوالٹی منتخب کریں، جو اضافی ڈیٹا اور میٹا ڈیٹا ہٹا دیتی ہے جبکہ تصویر پھر بھی اصل جیسی ہی دکھائی دیتی ہے۔ نتیجہ جانچنے کے لیے پہلے اور بعد کا انٹرایکٹو موازنہ استعمال کریں، اور کوالٹی اور سائز کے بہترین توازن کے لیے اصل فارمیٹ رکھیں یا WebP منتخب کریں۔',
      },
      {
        id: 'faq-4',
        question: 'میں JPEG کو 100KB تک کیسے کمپریس کروں؟',
        answer:
          'JPEG فائل کا سائز کم کرنے کے لیے اپنا JPEG اپ لوڈ کریں، آؤٹ پٹ فارمیٹ کے طور پر JPEG منتخب کریں اور لائیو کمپریس شدہ سائز دیکھتے ہوئے کوالٹی سلائیڈر مرحلہ وار نیچے کریں۔ چونکہ KB میں درست سائز کا کوئی خانہ نہیں ہے، اس لیے پہلے اور بعد کے سائز والی ویو استعمال کریں اور جب فائل 100KB کے قریب آ جائے تو رک جائیں۔',
      },
      {
        id: 'faq-5',
        question: 'میں امیج کا سائز 20KB، 50KB یا 200KB تک کیسے کم کروں؟',
        answer:
          'اپنی تصویر اپ لوڈ کریں اور کوالٹی سلائیڈر آہستہ آہستہ نیچے کریں، ہر تبدیلی کے بعد پہلے اور بعد کا لائیو سائز دیکھتے ہوئے، یہاں تک کہ اپنے ہدف تک پہنچ جائیں: 200KB، 50KB یا 20KB۔ 20KB جیسے چھوٹے اہداف کے لیے عام طور پر کم کوالٹی اور WebP آؤٹ پٹ کی ضرورت ہوتی ہے۔ یہی طریقہ کسی بھی ہدف کے لیے کام کرتا ہے، بشمول 500KB، اور سائز ہمیشہ KB میں دکھایا جاتا ہے تاکہ آپ دیکھ سکیں کہ آپ نے امیج کا سائز KB میں کتنا کم کیا۔',
      },
      {
        id: 'faq-6',
        question: 'میں آن لائن مفت PNG کیسے کمپریس کروں؟',
        answer:
          'اپنا PNG CompressMyPic پر اپ لوڈ کریں اور کوئی پہلے سے تیار سیٹنگ منتخب کریں یا کوالٹی سلائیڈر ایڈجسٹ کریں: یہاں آن لائن PNG کمپریس کرنا مفت ہے، بغیر رجسٹریشن کے۔ PNG اور WebP آؤٹ پٹ میں شفافیت برقرار رہتی ہے، اور PNG کو WebP میں تبدیل کرنے سے وہ اکثر بہت چھوٹا ہو جاتا ہے۔',
      },
      {
        id: 'faq-7',
        question: 'کون سے امیج فارمیٹس سپورٹ کیے جاتے ہیں؟',
        answer:
          'CompressMyPic JPG (JPEG)، PNG، WebP اور HEIC سپورٹ کرتا ہے، بشمول iPhone سے لی گئی تصاویر، جو بطور ڈیفالٹ HEIC میں محفوظ ہوتی ہیں۔ آپ اصل فارمیٹ رکھ سکتے ہیں یا ان کے درمیان تبدیل کر سکتے ہیں؛ مثال کے طور پر، JPG فائلوں کو JPEG کے طور پر کمپریس کریں، شفافیت برقرار رکھتے ہوئے PNG فائلیں کمپریس کریں یا سب سے چھوٹی فائلوں کے لیے WebP میں تبدیل کریں۔',
      },
      {
        id: 'faq-8',
        question: 'کیا میں ایک ساتھ کئی تصاویر کمپریس کر سکتا ہوں؟',
        answer:
          'جی ہاں۔ یہ بلک امیج کمپریسر آپ کو ایک ساتھ درجنوں تصاویر اپ لوڈ کرنے، ایک ہی سیٹنگز سے ایک ساتھ کئی تصاویر کمپریس کرنے اور «سب ڈاؤن لوڈ کریں (ZIP)» بٹن سے سب ایک ساتھ ڈاؤن لوڈ کرنے، یا ہر ایک الگ سے ڈاؤن لوڈ کرنے دیتا ہے۔',
      },
      {
        id: 'faq-9',
        question: 'میں WhatsApp کے لیے تصویر کیسے کمپریس کروں؟',
        answer:
          'اپنی تصویر اپ لوڈ کریں، کم کوالٹی والی پہلے سے تیار سیٹنگ یا WebP آؤٹ پٹ منتخب کریں، اور WhatsApp پر شیئر کرنے سے پہلے چھوٹی فائل ڈاؤن لوڈ کریں۔ چھوٹی تصاویر تیزی سے بھیجی جاتی ہیں، کم موبائل ڈیٹا استعمال کرتی ہیں اور بہت زیادہ بڑی ہونے کی وجہ سے مسترد ہونے کا امکان کم ہوتا ہے۔',
      },
      {
        id: 'faq-10',
        question: 'میں Instagram یا Facebook کے لیے تصویر کیسے کمپریس کروں؟',
        answer:
          'اپنی تصویر Instagram یا Facebook کے لیے یہاں اپ لوڈ کر کے، متوازن سیٹنگ منتخب کر کے اور چھوٹی JPG یا WebP فائل ڈاؤن لوڈ کر کے کمپریس کریں۔ کم کی گئی فائل تیزی سے اپ لوڈ ہوتی ہے اور پوسٹس، اسٹوریز اور پروفائل تصاویر کے لیے کافی کوالٹی برقرار رکھتی ہے۔',
      },
      {
        id: 'faq-11',
        question: 'کیا میں ای میل اٹیچمنٹ کے لیے تصاویر کمپریس کر سکتا ہوں؟',
        answer:
          'جی ہاں۔ ای میل اٹیچمنٹ کے لیے تصاویر کمپریس کریں: کوالٹی سلائیڈر سے انہیں اتنا کم کریں کہ ہر فائل آپ کے ای میل فراہم کنندہ کی اٹیچمنٹ سائز کی حد میں آ جائے، اور بڑی اصل فائلوں کی بجائے ڈاؤن لوڈ شدہ فائلیں اپنے پیغام سے اٹیچ کریں۔',
      },
      {
        id: 'faq-12',
        question: 'کیا CompressMyPic واقعی مفت ہے؟',
        answer:
          'جی ہاں، CompressMyPic مکمل طور پر مفت ہے۔ کوئی چارجز نہیں، کوئی پیڈ پلان نہیں، کوئی کریڈٹس نہیں اور آپ جتنی تصاویر کمپریس کر سکتے ہیں اس کی کوئی حد نہیں۔',
      },
      {
        id: 'faq-13',
        question: 'کیا CompressMyPic واٹر مارک لگاتا ہے؟',
        answer:
          'نہیں۔ CompressMyPic بغیر واٹر مارک کے مفت امیج کمپریسر ہے: آپ کی کمپریس شدہ تصاویر صاف رہتی ہیں، بغیر کسی لوگو، ٹیکسٹ یا نشان کے۔',
      },
      {
        id: 'faq-14',
        question: 'کیا CompressMyPic استعمال کرنے کے لیے مجھے رجسٹر کرنا ضروری ہے؟',
        answer:
          'نہیں۔ یہ بغیر رجسٹریشن کے مفت امیج کمپریسر ہے: آپ کو اکاؤنٹ، ای میل یا پاس ورڈ کی ضرورت نہیں۔ بس سائٹ کھولیں اور کمپریس کرنا شروع کریں۔',
      },
      {
        id: 'faq-15',
        question: 'کیا میری تصاویر کسی سرور پر اپ لوڈ ہوتی ہیں؟',
        answer:
          'نہیں۔ پوری کمپریشن مکمل طور پر آپ کے اپنے ڈیوائس پر، آپ کے ویب براؤزر کے اندر ہوتی ہے، اس لیے آپ کی تصاویر کبھی کسی سرور پر اپ لوڈ نہیں ہوتیں اور نہ کوئی اور انہیں ذخیرہ کرتا ہے یا دیکھتا ہے۔ وہ آپ کے براؤزر کی میموری میں رہتی ہیں اور ٹیب ریفریش یا بند کرنے پر مٹ جاتی ہیں۔',
      },
      {
        id: 'faq-16',
        question: 'کیا فائل سائز کی کوئی حد ہے؟',
        answer:
          'جی ہاں، حد فی تصویر 20 MB ہے، جو ہائی ریزولوشن کیمرہ تصاویر اور بڑے اسکرین شاٹس کو کور کرتی ہے۔ چونکہ پروسیسنگ آپ کے ڈیوائس پر ہوتی ہے، اس لیے بڑی فائلوں کے ساتھ بھی کمپریشن تیز رہتی ہے۔',
      },
      {
        id: 'faq-17',
        question: 'کیا تصویر کمپریس کرنے سے اس کے ڈائمینشن بدل جاتے ہیں؟',
        answer:
          'نہیں۔ CompressMyPic آپ کی تصویر کے ڈائمینشن بغیر تبدیلی کے رکھتا ہے: صرف فائل کا سائز کم ہوتا ہے۔ آپ کی تصویر اصل جیسی ہی چوڑائی، اونچائی اور تناسب برقرار رکھتی ہے۔',
      },
      {
        id: 'faq-18',
        question: 'کیا میں موبائل پر تصاویر کمپریس کر سکتا ہوں؟',
        answer:
          'جی ہاں۔ CompressMyPic iOS اور Android کے موبائل براؤزرز میں کام کرتا ہے، اس لیے آپ اپنے فون پر اپنی گیلری سے تصویر منتخب کر کے یا نئی تصویر لے کر یہاں اپ لوڈ کر کے کمپریس کر سکتے ہیں۔',
      },
      {
        id: 'faq-19',
        question: 'کوالٹی سلائیڈر کیسے کام کرتا ہے؟',
        answer:
          'کوالٹی سلائیڈر آپ کو 10% سے 100% تک کمپریشن کوالٹی طے کرنے دیتا ہے۔ زیادہ ویلیوز زیادہ تفصیل برقرار رکھتی ہیں اور بڑی فائلیں بناتی ہیں، جبکہ کم ویلیوز فائلوں کو بہت چھوٹا کر دیتی ہیں۔ کم، متوازن اور زیادہ سیٹنگز سلائیڈر آپ کے لیے طے کر دیتی ہیں، اور پہلے اور بعد کا لائیو سائز ہر تبدیلی کا نتیجہ دکھاتا ہے۔',
      },
      {
        id: 'faq-20',
        question: 'میں آؤٹ پٹ فارمیٹ کیسے منتخب کروں؟',
        answer:
          'تصویر اپ لوڈ کرنے کے بعد منتخب کریں کہ آپ اصل فارمیٹ رکھنا چاہتے ہیں یا JPG، PNG یا WebP میں تبدیل کرنا چاہتے ہیں۔ WebP عام طور پر ویب صفحات کے لیے تصاویر آپٹیمائز کرنے کا بہترین انتخاب ہے، کیونکہ یہ ملتی جلتی کوالٹی کے ساتھ JPEG سے 25% سے 35% تک چھوٹا ہوتا ہے، جبکہ PNG بہتر ہے جب آپ کو شفافیت چاہیے۔',
      },
    ],
  },
  guidesSection: {
    heading: 'گائیڈز',
    subheading:
      'ظاہری کوالٹی کھوئے بغیر چھوٹی فائلیں حاصل کرنے کے لیے مرحلہ وار گائیڈز۔',
    cards: [
      {
        title: 'کوالٹی کھوئے بغیر WhatsApp کے لیے تصاویر کمپریس کرنے کا طریقہ',
        desc: 'بھیجنے سے پہلے تصاویر کا سائز کم کریں تاکہ وہ صاف رہیں اور تیزی سے بھیجی جائیں۔',
        cta: 'گائیڈ پڑھیں →',
      },
      {
        title: 'JPG بمقابلہ PNG بمقابلہ WebP: کون سا فارمیٹ استعمال کریں؟',
        desc: 'فائل سائز، کوالٹی اور شفافیت کا موازنہ، تاکہ آپ صحیح فارمیٹ منتخب کر سکیں۔',
        cta: 'گائیڈ پڑھیں →',
      },
      {
        title: 'ویب اور ای میل کے لیے امیج کا سائز 100KB تک کم کرنے کا طریقہ',
        desc: 'مرحلہ وار: کوالٹی کھوئے بغیر 100KB تک پہنچیں۔',
        cta: 'گائیڈ پڑھیں →',
      },
    ],
  },
  blog: {
    blog: 'بلاگ',
    homeHeading: 'امیج گائیڈز، ٹیوٹوریلز اور وسائل',
    homeSubheading:
      'تصاویر کمپریس کرنے، ری سائز کرنے، تبدیل کرنے اور ایڈٹ کرنے کے لیے عملی گائیڈز — حقیقی کاموں کے لیے لکھی گئی ہیں، سرچ انجنوں کے لیے نہیں۔',
    searchPlaceholder: 'گائیڈز تلاش کریں…',
    searchNoResults: '”{query}“ کے لیے کوئی گائیڈ نہیں ملی۔',
    featuredHeading: 'نمایاں گائیڈز',
    latestHeading: 'تازہ ترین گائیڈز ({count})',
    categoriesHeading: 'کیٹیگری کے لحاظ سے دیکھیں',
    emptyHeading: 'ابھی کوئی گائیڈ نہیں ہے',
    emptyText:
      'ہم اس سیکشن کی پہلی گائیڈز لکھ رہے ہیں۔ جلد دوبارہ آئیں — یا مفت ٹولز میں سے کوئی آزمائیں۔',
    readArticle: 'گائیڈ پڑھیں →',
    minRead: '{minutes} منٹ پڑھنے کا وقت',
    publishedOn: 'اشاعت: {date}',
    updatedOn: 'اپ ڈیٹ: {date}',
    bylineAuthor: 'CompressMyPic کی ادارتی ٹیم',
    tableOfContents: 'اس صفحے پر',
    faqHeading: 'عمومی سوالات',
    relatedArticlesHeading: 'متعلقہ گائیڈز',
    relatedToolsHeading: 'ٹول آزمائیں',
    tryToolCta: '{tool} آزمائیں — مفت، بغیر رجسٹریشن',
    prevArticle: '← پچھلی گائیڈ',
    nextArticle: 'اگلی گائیڈ →',
    backToBlog: '← بلاگ پر واپس جائیں',
    shareHeading: 'یہ گائیڈ شیئر کریں',
    copyLink: 'لنک کاپی کریں',
    copied: 'کاپی ہو گیا!',
    shareOnX: 'X پر شیئر کریں',
    shareOnFacebook: 'Facebook پر شیئر کریں',
    shareOnWhatsApp: 'WhatsApp پر شیئر کریں',
    notAvailableHeading: 'یہ گائیڈ ابھی آپ کی زبان میں دستیاب نہیں ہے',
    notAvailableText:
      'ہم ابھی اس گائیڈ کا ترجمہ کر رہے ہیں۔ آپ اسے انگریزی میں پڑھ سکتے ہیں یا اپنی زبان میں دستیاب گائیڈز دیکھ سکتے ہیں۔',
    viewBlogHome: 'بلاگ دیکھیں',
    guidesHeading: 'ہماری مرحلہ وار گائیڈز',
    categoryGuidesHeading: 'گائیڈز: {category}',
    relatedArticlesForTool: 'متعلقہ گائیڈز: {tool}',
  },
  shareSection: {
    heading: 'CompressMyPic اپنے دوستوں کے ساتھ شیئر کریں',
    text: 'کیا یہ ٹول آپ کے لیے مفید رہا؟ کسی دوست کی بھی تصاویر کمپریس کرنے میں مدد کریں: صرف ایک ٹیپ کی بات ہے۔',
    shareText:
      'آن لائن مفت تصاویر کمپریس کریں — بغیر رجسٹریشن، بغیر واٹر مارک۔ CompressMyPic آزمائیں:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: '{name} پر شیئر کریں',
    copyLink: 'لنک کاپی کریں',
    copied: 'کاپی ہو گیا!',
    share: 'شیئر کریں',
    emailSubject: 'مفت امیج کمپریسر – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – مفت امیج کمپریسر', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'ہوم',
    privacyPill: 'براؤزر میں 100% نجی پروسیسنگ · فائلیں کبھی آپ کے ڈیوائس سے باہر نہیں جاتیں',
    noUploads: 'سرور پر کوئی اپ لوڈ نہیں',
    freeNote: 'مفت · بغیر رجسٹریشن · بغیر واٹر مارک',
    howToTitle: '{name} کیسے استعمال کریں',
    howToIntro:
      'اپنا کام براہِ راست اپنے براؤزر میں مکمل کرنے کے لیے ان آسان مراحل پر عمل کریں۔',
    featuresTitle: 'CompressMyPic کا {name} کیوں استعمال کریں؟',
    faqTitle: '{name} — عمومی سوالات',
    relatedTitle: 'متعلقہ مفت امیج ٹولز',
    relatedLinksIntro: 'آپ کو یہ بھی چاہیے ہو سکتا ہے:',
    shareHeading: 'یہ ٹول شیئر کریں',
    shareCopyLink: 'لنک کاپی کریں',
    shareCopied: 'کاپی ہو گیا!',
    shareOnX: 'X پر شیئر کریں',
    shareOnFacebook: 'Facebook پر شیئر کریں',
    shareOnWhatsApp: 'WhatsApp پر شیئر کریں',
    commentsTitle: 'تبصرے',
    commentsNote: 'اس ٹول کے بارے میں اپنی رائے شیئر کریں: بس اپنا نام لکھیں اور پوسٹ کریں۔ اکاؤنٹ کی ضرورت نہیں۔',
    commentsNamePlaceholder: 'آپ کا نام',
    commentsTextPlaceholder: 'اپنا تبصرہ لکھیں…',
    commentsSubmit: 'تبصرہ پوسٹ کریں',
    commentsPosting: 'پوسٹ ہو رہا ہے…',
    commentsEmpty: 'پہلا تبصرہ کرنے والے بنیں۔',
    commentsPosted: 'شکریہ! آپ کا تبصرہ پوسٹ ہو گیا۔',
    commentsLoadError: 'تبصرے لوڈ نہیں ہو سکے۔ دوبارہ کوشش کریں۔',
    commentsPostError: 'تبصرہ پوسٹ نہیں ہو سکا۔ دوبارہ کوشش کریں۔',
    commentsRetry: 'دوبارہ کوشش کریں',
    commentsLoading: 'تبصرے لوڈ ہو رہے ہیں…',
  },
  uploadZone: {
    dropText: 'اپنی تصاویر یہاں ڈریگ کر کے چھوڑیں',
    browseButton: 'فائلز براؤز کریں',
    browsePrefix: 'یا',
    browseSuffix: 'اپنے کمپیوٹر یا فون سے',
    orPaste: 'پیسٹ کرنا (Ctrl+V) سپورٹ کرتا ہے',
    hint: 'فی تصویر زیادہ سے زیادہ {max} MB',
    errorTooBig: '”{name}“ زیادہ سے زیادہ {max} MB کی حد سے بڑی ہے۔',
    errorBadType: '”{name}“ کا فارمیٹ سپورٹ نہیں کیا جاتا ({formats})۔',
    errorUnreadable: '”{name}“ خالی فائل ہے (0 بائٹس)۔',
    errorMore: '(+{count} مزید غلطیاں)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'تصاویر اپ لوڈ کرنے کا حصہ۔ ڈریگ کر کے چھوڑیں یا فائلز براؤز کرنے کے لیے کلک کریں۔', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'خراب یا ناقابلِ خواندگی فائل۔', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'کوالٹی کا بصری موازنہ',
    beforeLabel: 'اصل (پہلے)',
    afterLabel: 'کمپریس شدہ (بعد میں)',
    closeLabel: 'موازنہ ویو بند کریں',
    instruction: 'ہر پکسل کی کوالٹی جانچنے کے لیے سلائیڈر کو بائیں یا دائیں گھسیٹیں۔',
    sliderLabel: 'سلائیڈر',
    sideBySideLabel: 'ساتھ ساتھ',
    zoomInLabel: 'زوم ان کریں',
    zoomOutLabel: 'زوم آؤٹ کریں',
    originalLabel: 'اصل:',
    outputLabel: 'نتیجہ:',
    reductionLabel: 'کمی:',
    sizeChangeLabel: 'سائز میں تبدیلی:',
    qualityLabel: 'کوالٹی سیٹنگ:',
    formatLabel: 'فارمیٹ:',
    modalAriaLabel: 'امیج موازنہ ونڈو', // 'Image comparison modal'
    altCompressed: '{name} کا کمپریس شدہ ورژن', // 'Compressed version of {name}'
    altOriginal: '{name} کا اصل ورژن', // 'Original version of {name}'
    altProcessed: '{name} کا پروسیس شدہ ورژن', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'مفت امیج کمپریسر – آن لائن تصاویر کمپریس کریں',
    seoDescription: 'آن لائن مفت تصاویر کمپریس کریں اور کوالٹی کھوئے بغیر JPG، PNG اور WebP کا سائز کم کریں۔ بغیر رجسٹریشن اور بغیر واٹر مارک: آپ کی تصاویر کبھی براؤزر سے باہر نہیں جاتیں۔',
    h1: 'مفت امیج کمپریسر – آن لائن تصاویر کمپریس کریں',
    subtitle: 'JPG، PNG، WebP اور HEIC فائلوں کا سائز براہِ راست اپنے براؤزر میں کم کریں۔',
  },
  categories: {
    compress: 'کمپریس کریں',
    resize: 'ری سائز کریں',
    convert: 'تبدیل کریں',
    'crop-edit': 'کراپ اور ایڈٹ کریں',
    create: 'بنائیں',
    privacy: 'پرائیویسی ٹولز',
    developer: 'ڈیولپر ٹولز',
  },
  compressionControls: {
    modeLabel: 'کمپریشن موڈ', // 'Compression Mode'
    presetLow: 'کم کمپریشن (85%)', // 'Low Compression (85%)'
    presetBalanced: 'متوازن (70%)', // 'Balanced (70%)'
    presetHigh: 'زیادہ کمپریشن (50%)', // 'High Compression (50%)'
    presetCustom: 'اپنی مرضی', // 'Custom'
    formatLabel: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original'
    qualityLabel: 'مطلوبہ کوالٹی:', // 'Quality Target:'
    qualityHigh: 'اعلیٰ معیار', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'ویب کے لیے بہترین توازن', // 'Optimal Web Balance' (60–79)
    qualityMax: 'زیادہ سے زیادہ جگہ کی بچت', // 'Max Space Savings' (< 60)
    qualityAriaLabel: '10 سے 100 فیصد تک کوالٹی سلائیڈر', // 'Quality slider from 10 to 100 percent'
    compressAll: 'سب دوبارہ کمپریس کریں', // 'Re-compress All'
    compressing: 'کمپریس ہو رہا ہے…', // 'Compressing...'
    clearAll: 'سب صاف کریں', // 'Clear All'
    clearAllTitle: 'تمام تصاویر صاف کریں', // 'Clear all images'
    transparencyTitle: 'JPEG میں تبدیل کرنے پر شفافیت کا نوٹس', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'JPEG فارمیٹ شفافیت (الفا چینلز) سپورٹ نہیں کرتا۔ شفاف بیک گراؤنڈ کی جگہ ٹھوس بیک گراؤنڈ (بطور ڈیفالٹ سفید) آ جائے گا۔ شفاف بیک گراؤنڈ برقرار رکھنے کے لیے PNG یا WebP منتخب کریں۔',
    pngTip:
      'PNG ایک lossless فارمیٹ ہے اور کوالٹی سلائیڈر کو نظر انداز کرتا ہے، اس لیے PNG کو دوبارہ انکوڈ کرنے سے کبھی کبھی اصل جتنا یا اس سے بڑا سائز بن سکتا ہے۔ تصویر جیسے PNG کے لیے WebP یا JPG منتخب کرنے سے عام طور پر 50% سے 80% تک چھوٹی فائلیں بنتی ہیں۔',
  },
  resultsList: {
    summary: 'کمپریشن کا خلاصہ', // 'Compression Summary'
    image: 'تصویر', // 'Image' (count === 1)
    images: 'تصاویر', // 'Images' (count !== 1)
    totalOriginal: 'کل اصل:', // 'Total Original:'
    totalCompressed: 'کل کمپریس شدہ:', // 'Total Compressed:'
    totalSaved: 'کل بچت:', // 'Total Saved:'
    processing: 'پروسیس ہو رہا ہے…', // 'Processing...'
    grewBy: '(بڑھ گیا {bytes})', // '(grew by {bytes})'
    reduction: 'کمی:', // 'Reduction:'
    sizeChange: 'سائز میں تبدیلی:', // 'Size Change:'
    downloadAll: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP بن رہا ہے ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'موازنہ کریں', // 'Compare'
    compareTitle: 'کوالٹی کا بصری موازنہ دیکھنے کے لیے کلک کریں', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'پہلے اور بعد کا موازنہ کریں', // 'Compare visual before/after'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    retry: 'دوبارہ کوشش کریں', // 'Retry'
    removeTitle: 'تصویر ہٹائیں', // 'Remove image'
    removeAriaLabel: '{name} ہٹائیں', // 'Remove {name}'
    keptOriginal: 'اصل رکھا گیا (دوبارہ انکوڈنگ بڑی تھی)', // 'Kept original (re-encode was larger)'
    grewByStatus: '{bytes} بڑھ گیا: دوبارہ انکوڈنگ اصل سے بڑی ہے', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'کامیابی سے کمپریس ہو گیا', // 'Compressed successfully'
    optimizing: 'پکسلز آپٹیمائز ہو رہے ہیں…', // 'Optimizing pixels...'
    compressionError: 'کمپریشن میں خرابی', // 'Compression error'
    original: 'اصل', // 'Original' (metric label)
    compressed: 'کمپریس شدہ', // 'Compressed' (metric label)
    output: 'آؤٹ پٹ', // 'Output' (metric label when original kept)
    spaceSaved: 'بچائی گئی جگہ', // 'Space Saved'
    formatLabel: 'فارمیٹ:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'الفا', // 'Alpha' badge
    largerTitle: 'آؤٹ پٹ اصل سے {bytes} بڑا ہے۔', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'Lossless PNG دوبارہ انکوڈنگ کوالٹی سلائیڈر کو نظر انداز کرتی ہے؛ تصویر جیسے PNG کے لیے WebP یا JPG عام طور پر بہت چھوٹا ہوتا ہے۔',
    largerNote:
      'یہ تصویر منتخب کوالٹی کے لیے پہلے ہی بہت کمپریس شدہ تھی۔',
    keepOriginal: 'اصل رکھیں', // 'Keep original'
  },
} as const;

export const TOOL_UI_UR = {
  '/image-resizer': {
    comparisonTitlePrefix: 'سائز کا موازنہ', // 'Resize Comparison'
    comparisonAfterLabel: 'ری سائز شدہ (بعد میں)', // 'Resized (After)'
    presetInstagramPost: 'Instagram پوسٹ (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Instagram اسٹوری (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'YouTube تھمب نیل (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Facebook کور (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'X ہیڈر (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'تصویر ری سائز نہیں ہو سکی۔', // 'Resize failed.'
    errorCorruptedFile: 'خراب یا ناقابلِ خواندگی امیج فائل۔', // 'Corrupted or unreadable image file.'
    resizeMode: 'ری سائز موڈ', // 'Resize Mode'
    modeByPixels: 'پکسلز سے (چوڑائی × اونچائی)', // 'By Pixels (W × H)'
    modeByPercentage: 'فیصد سے (%)', // 'By Percentage (%)'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'چوڑائی (px)', // 'Width (px)'
    heightLabel: 'اونچائی (px)', // 'Height (px)'
    placeholderAuto: 'خودکار', // placeholder 'Auto'
    aspectRatioLocked: 'تناسب لاک ہے', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'ان لاک (اپنی مرضی)', // 'Unlocked (Custom)'
    fitModeLabel: 'فٹ موڈ:', // 'Fit Mode:'
    fitContain: 'کنٹین (بغیر کراپ)', // 'Contain (No Crop)'
    fitCover: 'کور (سینٹر کراپ)', // 'Cover (Center Crop)'
    fitStretchExact: 'بالکل کھینچیں', // 'Stretch Exact'
    quickPresets: 'سوشل میڈیا اور ویب کے لیے فوری پری سیٹس', // 'Quick Social & Web Presets'
    scalePercentage: 'اسکیل فیصد:', // 'Scale Percentage:'
    outputQuality: 'آؤٹ پٹ کوالٹی:', // 'Output Quality:'
    matteBg: 'میٹ بی جی:', // 'Matte BG:'
    resizing: 'ری سائز ہو رہا ہے…', // 'Resizing...'
    resizeAll: 'سب ری سائز کریں ({count})', // 'Resize All ({count})'
    clear: 'صاف کریں', // 'Clear'
    batchReady: 'بیچ تیار ہے', // 'Batch Ready'
    batchReadySingular: '{count} ری سائز شدہ تصویر ڈاؤن لوڈ کے لیے تیار ہے', // '{count} resized image ready to download'
    batchReadyPlural: '{count} ری سائز شدہ تصاویر ڈاؤن لوڈ کے لیے تیار ہیں', // '{count} resized images ready to download'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'ری سائز ہو گئی ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'فارمیٹ تبدیلی کا موازنہ', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'تبدیل شدہ (بعد میں)', // 'Converted (After)'
    errorConversionFailed: 'تصویر تبدیل نہیں ہو سکی۔', // 'Conversion failed.'
    errorUnsupportedFile: 'سپورٹ نہ ہونے والی یا خراب امیج فائل۔', // 'Unsupported or corrupted image file.'
    convertToFormat: 'اس فارمیٹ میں تبدیل کریں', // 'Convert To Format'
    formatWebp: 'WebP (ویب کے لیے سب سے ہلکا)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (ہر جگہ چلتا ہے)', // 'JPG (Universal)'
    formatPng: 'PNG (lossless اور شفافیت کے ساتھ)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'شفافیت بھرنے کا رنگ', // 'Transparency Fill Color'
    quality: 'کوالٹی', // 'Quality'
    qualityLosslessPng: 'Lossless PNG', // 'Lossless PNG'
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    convertAll: 'سب تبدیل کریں ({count})', // 'Convert All ({count})'
    clear: 'صاف کریں', // 'Clear'
    conversionComplete: 'تبدیلی مکمل', // 'Conversion Complete'
    filesConverted: '{count} فائلیں {format} میں تبدیل ہو گئیں', // '{count} files converted to {format}'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    convertedStatus: '{ext} میں تبدیل ہو گئی', // 'Converted to {ext}'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
  },
  '/image-cropper': {
    uploadTitle: 'انٹرایکٹو کراپ کے لیے تصویر چھوڑیں', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorCanvasContext: 'کینوس کانٹیکسٹ شروع نہیں ہو سکا۔', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'کراپ ایکسپورٹ نہیں ہو سکا۔', // 'Crop export failed.'
    aspectFree: 'آزاد', // aspect preset 'Free'
    selection: 'سلیکشن:', // 'Selection:'
    zoomOut: 'زوم آؤٹ کریں', // aria-label 'Zoom out'
    zoomIn: 'زوم ان کریں', // aria-label 'Zoom in'
    removeImage: 'تصویر ہٹائیں', // aria-label 'Remove image'
    cropSourceAlt: 'کراپ کے لیے اصل تصویر', // alt 'Crop source'
    originalLabel: 'اصل:', // 'Original:'
    cropOptions: 'کراپ آپشنز', // 'Crop Options'
    selectFull: 'سب منتخب کریں', // 'Select Full'
    aspectRatioPreset: 'تناسب پری سیٹ', // 'Aspect Ratio Preset'
    cropWidth: 'کراپ کی چوڑائی', // 'Crop Width'
    cropHeight: 'کراپ کی اونچائی', // 'Crop Height'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'کوالٹی', // 'Quality'
    cropping: 'کراپ ہو رہا ہے…', // 'Cropping...'
    cropAndDownload: 'کراپ کریں اور ڈاؤن لوڈ کریں', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'ٹیکسٹ یا لوگو واٹر مارک لگانے کے لیے تصویر چھوڑیں', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorUnableToLoadLogo: 'لوگو کی تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'واٹر مارک والی تصویر ایکسپورٹ نہیں ہو سکی۔', // 'Watermark export failed.'
    fallbackWatermarkText: 'واٹر مارک', // canvas fallback text 'Watermark'
    tiledPreview: 'ٹائلڈ پری ویو', // 'Tiled Preview'
    dragToPosition: 'جگہ طے کرنے کے لیے تصویر پر ڈریگ کریں', // 'Drag on Image to Position'
    changeImage: 'تصویر بدلیں', // 'Change Image'
    watermarkType: 'واٹر مارک کی قسم', // 'Watermark Type'
    modeText: 'ٹیکسٹ واٹر مارک', // 'Text Watermark'
    modeLogo: 'لوگو امیج', // 'Logo Image'
    watermarkTextLabel: 'واٹر مارک ٹیکسٹ', // 'Watermark Text'
    placeholderBrand: '© آپ کا برانڈ', // placeholder '© Your Brand'
    textColor: 'ٹیکسٹ کا رنگ', // 'Text Color'
    size: 'سائز', // 'Size'
    uploadLogo: 'لوگو اپ لوڈ کریں (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'لوگو امیج بدلیں', // 'Change Logo Image'
    logoWidth: 'لوگو کی چوڑائی', // 'Logo Width'
    opacity: 'اوپیسٹی', // 'Opacity'
    rotation: 'گھماؤ', // 'Rotation'
    tiledRepeatPattern: 'ٹائلڈ دہرانے والا پیٹرن', // 'Tiled Repeat Pattern'
    tileSpacing: 'ٹائل کا فاصلہ', // 'Tile Spacing'
    anchorPresets: 'پہلے سے طے شدہ جگہیں (یا تصویر پر ڈریگ کریں)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'اصل', // 'Orig' — same abbreviation in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'کوالٹی', // 'Quality'
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadWatermarked: 'واٹر مارک والی تصویر ڈاؤن لوڈ کریں', // 'Download Watermarked Image'
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'فوری گھماؤ اور پلٹاؤ', // 'Quick Rotate & Flip'
    rotate90Left: '90° بائیں گھمائیں', // 'Rotate 90° Left'
    rotate90Right: '90° دائیں گھمائیں', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'افقی طور پر پلٹیں', // 'Flip Horizontal'
    flipVertical: 'عمودی طور پر پلٹیں', // 'Flip Vertical'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'گھماؤ کا زاویہ:', // 'Rotation Angle:'
    resetTo0: '0° پر ری سیٹ کریں', // 'Reset to 0°'
    applyAngle: 'زاویہ لگائیں', // 'Apply Angle'
    clear: 'صاف کریں', // 'Clear'
    batchReady: 'بیچ تیار ہے', // 'Batch Ready'
    transformedImagesReady: '{count} تبدیل شدہ تصاویر تیار ہیں', // '{count} transformed images ready'
    creatingZip: 'ZIP بن رہا ہے...', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: '{angle}° گھمائی گئی', // 'Rotated {angle}°'
    flippedH: ' · افقی پلٹی ہوئی', // ' · Flipped H'
    flippedV: ' · عمودی پلٹی ہوئی', // ' · Flipped V'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeItem: '{name} ہٹائیں', // 'Remove {name}' (aria-label)
    transformFailed: 'تصویر تبدیل کرنے میں خرابی۔', // 'Transform failed.'
    corruptedImage: 'خراب یا ناقابلِ خواندگی تصویر۔', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'گھماؤ اور پلٹاؤ کا موازنہ', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'ایڈٹ شدہ (بعد میں)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'PDF میں جوڑنے کے لیے تصاویر چھوڑیں', // 'Drop images to combine into PDF'
    couldNotRead: '”{filename}“ پڑھی نہیں جا سکی۔ یقینی بنائیں کہ یہ درست تصویر ہے۔', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'PDF بنانے میں خرابی۔', // 'PDF generation failed.'
    encodingPage: 'صفحہ {current} از {total} انکوڈ ہو رہا ہے...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'PDF بن رہا ہے...', // 'Generating PDF...'
    pageSize: 'صفحے کا سائز', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'US Letter (8.5 × 11 in)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'تصویر کے سائز کے مطابق', // 'Fit to Image Size'
    orientation: 'سمت', // 'Orientation'
    orientationAuto: 'خودکار (تصویر کے مطابق)', // 'Auto (Match Photo)'
    orientationPortrait: 'عمودی', // 'Portrait'
    orientationLandscape: 'افقی', // 'Landscape'
    margin: 'حاشیہ', // 'Margin'
    marginNone: 'بغیر حاشیے (مکمل بلیڈ)', // 'No Margin (Full Bleed)'
    marginSmall: 'چھوٹا حاشیہ', // 'Small Margin'
    marginMedium: 'درمیانہ حاشیہ', // 'Medium Margin'
    imagePlacement: 'تصویر کی جگہ', // 'Image Placement'
    placementContain: 'کنٹین (پوری تصویر)', // 'Contain (Full Image)'
    placementCover: 'کور (صفحہ بھریں)', // 'Cover (Fill Page)'
    pdfFilename: 'PDF فائل کا نام', // 'PDF Filename'
    pdfImageQuality: 'PDF امیج کوالٹی:', // 'PDF Image Quality:'
    createDownloadPdf: 'PDF بنائیں اور ڈاؤن لوڈ کریں ({count} صفحہ)', // 'Create & Download PDF ({count}p)'
    clear: 'صاف کریں', // 'Clear'
    pdfReady: 'PDF تیار ہے ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'صفحہ', // 'page'
    pagePlural: 'صفحات', // 'pages'
    downloadPdfAgain: 'PDF دوبارہ ڈاؤن لوڈ کریں', // 'Download PDF Again'
    pageOrder: 'صفحات کی ترتیب ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'صفحہ', // 'Page' (in Page Order heading)
    pageOrderPlural: 'صفحات', // 'Pages' (in Page Order heading)
    movePageUp: 'صفحہ اوپر لے جائیں', // 'Move page up' (title)
    movePageDown: 'صفحہ نیچے لے جائیں', // 'Move page down' (title)
    removePage: 'صفحہ ہٹائیں', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'EXIF اور میٹا ڈیٹا دیکھنے کے لیے تصویر چھوڑیں', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'امیج میٹا ڈیٹا پڑھا نہیں جا سکا۔', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'ایمبیڈڈ میٹا ڈیٹا ملا ({count} ٹیگ اقسام)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'کوئی چھپا ہوا EXIF، GPS یا کیمرہ ٹیگ نہیں ملا', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'میٹا ڈیٹا ہٹائیں', // 'Strip Metadata'
    copyJson: 'JSON کاپی کریں', // 'Copy JSON'
    copiedJson: 'JSON کاپی ہو گیا', // 'Copied JSON'
    exportJson: 'JSON ایکسپورٹ کریں', // 'Export JSON'
    clear: 'صاف کریں', // 'Clear' (title)
    gpsDetected: 'GPS لوکیشن کوآرڈینیٹس ملے', // 'GPS Location Coordinates Detected'
    latitude: 'عرض بلد:', // 'Latitude:'
    longitude: 'طول بلد:', // 'Longitude:'
    gpsWarning:
      'اس تصویر کو ایسے ہی شیئر کرنے سے پتا چل سکتا ہے کہ تصویر کہاں لی گئی تھی۔ آن لائن پوسٹ کرنے سے پہلے میٹا ڈیٹا ہٹائیں استعمال کریں۔', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
    extractedMetadata: 'نکالا گیا میٹا ڈیٹا ({count} خصوصیات)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'پرائیویسی ٹیگ', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'EXIF، GPS اور میٹا ڈیٹا ہٹانے کے لیے تصاویر چھوڑیں', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'میٹا ڈیٹا ہٹایا نہیں جا سکا۔', // 'Failed to strip metadata.'
    strippingMethod: 'ہٹانے کا طریقہ', // 'Stripping Method'
    losslessStrip: 'Lossless بائنری اسٹرپ (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'مکمل کینوس دوبارہ انکوڈنگ', // 'Full Canvas Re-encode'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'دوبارہ انکوڈنگ کوالٹی (WebP/HEIC یا مکمل دوبارہ انکوڈنگ کے لیے):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'صاف ہو رہا ہے...', // 'Cleaning...'
    recleanAll: 'سب دوبارہ صاف کریں', // 'Re-clean All'
    clear: 'صاف کریں', // 'Clear'
    privacyVerified: 'پرائیویسی تصدیق شدہ', // 'Privacy Verified'
    cleanImagesReady: '{count} صاف تصاویر تیار ہیں، میٹا ڈیٹا ہٹا دیا گیا', // '{count} clean images ready with metadata stripped'
    creatingZip: 'ZIP بن رہا ہے...', // 'Creating ZIP...'
    downloadAllCleanZip: 'تمام صاف ڈاؤن لوڈ کریں (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: '{before} میٹا ڈیٹا ٹیگز ہٹا دیے گئے → {after} باقی ہیں', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'تصدیق شدہ صاف (0 EXIF/GPS ٹیگز)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'Lossless بائنری اسٹرپ', // 'Lossless binary strip'
    cleanCanvasExport: 'صاف کینوس ایکسپورٹ', // 'Clean Canvas export'
    scrubbing: 'EXIF اور GPS ہیڈرز ہٹائے جا رہے ہیں...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'صاف ڈاؤن لوڈ کریں', // 'Download Clean'
    removeItem: '{name} ہٹائیں', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'اپنا لوگو یا آئیکن یہاں چھوڑیں', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'مربع PNG یا SVG تجویز کیا جاتا ہے · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'فائل براؤز کریں', // 'browse file'
    errorGenerateFailed: 'فیویکون پیکج بنایا نہیں جا سکا۔', // 'Failed to generate favicon package.'
    backgroundFill: 'بیک گراؤنڈ بھرائی', // 'Background Fill'
    transparent: 'شفاف', // 'Transparent'
    padding: 'پیڈنگ', // 'Padding'
    cornerRadius: 'کونے کا رداس', // 'Corner Radius'
    tabPreviewAlt: 'ٹیب پری ویو', // alt 'Tab preview'
    myWebsite: 'میری ویب سائٹ', // 'My Website'
    darkTabPreviewAlt: 'ڈارک ٹیب پری ویو', // alt 'Dark tab preview'
    darkModeTab: 'ڈارک موڈ ٹیب', // 'Dark Mode Tab'
    packingZip: 'ZIP پیک ہو رہا ہے…', // 'Packing ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    clear: 'صاف کریں', // title 'Clear'
    downloadFaviconIco: 'favicon.ico ڈاؤن لوڈ کریں', // title 'Download favicon.ico'
    downloadFile: '{filename} ڈاؤن لوڈ کریں', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'HTML <head> اسنیپٹ', // 'HTML <head> Snippet'
    copied: 'کاپی ہو گیا!', // 'Copied!'
    copyHtml: 'HTML کاپی کریں', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'تصویر چھوڑیں یا اسکرین شاٹ پیسٹ کریں (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    clickAnywhereToPin: 'رنگ پن کرنے کے لیے کہیں بھی کلک کریں', // 'Click anywhere to pin a color'
    newImage: 'نئی تصویر', // 'New Image'
    pixelInspector: 'پکسل انسپکٹر', // 'Pixel Inspector'
    copyLabel: '{label} کاپی کریں', // title `Copy ${row.label}`
    pickedSwatches: 'محفوظ شدہ نمونے ({count})', // 'Picked Swatches ({palette.length})'
    exportCss: 'CSS ایکسپورٹ کریں', // 'Export CSS'
    clickPixelsHint: 'رنگ اپنی پیلیٹ میں محفوظ کرنے کے لیے تصویر کے پکسلز پر کلک کریں۔', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: '{hex} منتخب اور کاپی کرنے کے لیے کلک کریں', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'درست ڈائمینشن اور تناسب دیکھنے کے لیے تصاویر چھوڑیں', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'کم از کم چوڑائی چیک (px)', // 'Min Width Check (px)'
    minHeightCheck: 'کم از کم اونچائی چیک (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'مثلاً 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'مثلاً 630', // placeholder 'e.g. 630'
    exportCsv: 'CSV ایکسپورٹ کریں', // 'Export CSV'
    exportJson: 'JSON ایکسپورٹ کریں', // 'Export JSON'
    clear: 'صاف کریں', // 'Clear'
    headerImage: 'تصویر', // table header 'Image'
    headerDimensions: 'ڈائمینشن', // table header 'Dimensions'
    headerAspectRatio: 'تناسب', // table header 'Aspect Ratio'
    headerOrientation: 'سمت', // table header 'Orientation'
    headerSizeFormat: 'سائز / فارمیٹ', // table header 'Size / Format'
    headerPrint300Dpi: '300 DPI پر پرنٹ', // table header 'Print @300 DPI'
    headerSpecCheck: 'اسپیک چیک', // table header 'Spec Check'
    orientationLandscape: 'افقی', // 'Landscape'
    orientationPortrait: 'عمودی', // 'Portrait'
    orientationSquare: 'مربع', // 'Square'
    alphaTag: ' · الفا', // ' · Alpha'
    specPass: 'پاس', // 'Pass'
    specBelowMin: 'کم از کم سے کم', // 'Below Min'
    csvYes: 'جی ہاں', // CSV value 'Yes'
    csvNo: 'نہیں', // CSV value 'No'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'علاقے بلر یا پکسلیٹ کرنے کے لیے تصویر چھوڑیں', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'ایکسپورٹ میں خرابی۔', // 'Export failed.'
    paintOverAreasBlur: 'بلر کرنے کے لیے علاقوں پر پینٹ کریں', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'پکسلیٹ کرنے کے لیے علاقوں پر پینٹ کریں', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'پوری تصویر کا پری ویو', // 'Whole-Image Preview'
    undo: 'واپس کریں', // 'Undo'
    resetBrush: 'برش ری سیٹ کریں', // 'Reset Brush'
    removeImage: 'تصویر ہٹائیں', // aria-label 'Remove image'
    targetArea: 'ٹارگٹ علاقہ', // 'Target Area'
    brushArea: 'برش کا علاقہ', // 'Brush Area'
    wholeImage: 'پوری تصویر', // 'Whole Image'
    effectStyle: 'ایفیکٹ کا انداز', // 'Effect Style'
    pixelateMosaic: 'پکسلیٹڈ موزیک', // 'Pixelate Mosaic'
    smoothBlur: 'ہموار بلر', // 'Smooth Blur'
    blurRadius: 'بلر رداس', // 'Blur Radius'
    mosaicBlockSize: 'موزیک بلاک سائز', // 'Mosaic Block Size'
    brushSize: 'برش سائز', // 'Brush Size'
    brushHint: 'چہرے، ٹیکسٹ یا نمبر پلیٹس چھپانے کے لیے تصویر پر براہِ راست کلک کریں اور ڈریگ کریں۔', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'اصل', // 'Orig' — same abbreviation in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'کوالٹی', // 'Quality'
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadImage: 'تصویر ڈاؤن لوڈ کریں', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'اپنی مرضی کا ٹیکسٹ لگانے کے لیے تصویر چھوڑیں', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'ایکسپورٹ میں خرابی۔', // 'Export failed.'
    dragAnyText: 'کسی بھی ٹیکسٹ کو تصویر پر براہِ راست ڈریگ کریں', // 'Drag Any Text Directly on Image'
    changeImage: 'تصویر بدلیں', // 'Change Image'
    textLayer: 'ٹیکسٹ {index}', // tab `Text ${idx + 1}`
    add: 'شامل کریں', // 'Add'
    deleteActiveTextLayer: 'فعال ٹیکسٹ لیئر حذف کریں', // aria-label 'Delete active text layer'
    textContent: 'ٹیکسٹ مواد (کئی لائنیں سپورٹ کرتا ہے)', // 'Text Content (multi-line supported)'
    font: 'فونٹ', // 'Font'
    fontInter: 'Inter / صاف Sans', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / میم ڈسپلے', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / کلاسک Serif', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / مونو اسپیس', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / گول Sans', // font option 'Trebuchet / Rounded Sans'
    fill: 'بھرائی', // 'Fill'
    toggleBold: 'بولڈ آن/آف کریں', // aria-label 'Toggle Bold'
    toggleItalic: 'ترچھا آن/آف کریں', // aria-label 'Toggle Italic'
    size: 'سائز', // 'Size'
    rotation: 'گھماؤ', // 'Rotation'
    textOutline: 'ٹیکسٹ آؤٹ لائن', // 'Text Outline'
    dropShadow: 'ڈراپ شیڈو', // 'Drop Shadow'
    defaultLayerText: 'دو بار ٹیپ کریں یا ٹیکسٹ ایڈٹ کریں', // default layer text 'Double-tap or edit text'
    defaultCaption: 'کیپشن {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'اصل', // 'Orig' — same abbreviation in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'کوالٹی', // 'Quality'
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadImageWithText: 'ٹیکسٹ والی تصویر ڈاؤن لوڈ کریں', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'اپنی مرضی کا بارڈر یا فریم لگانے کے لیے تصویر چھوڑیں', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'ایکسپورٹ میں خرابی۔', // 'Export failed.'
    framedPreview: 'فریم شدہ پری ویو', // 'Framed Preview'
    changeImage: 'تصویر بدلیں', // 'Change Image'
    quickFramePresets: 'فوری فریم پری سیٹس', // 'Quick Frame Presets'
    presetClassicWhite: 'کلاسک سفید', // preset 'Classic White'
    presetPolaroidFrame: 'پولارائیڈ فریم', // preset 'Polaroid Frame'
    presetDarkStudio: 'ڈارک اسٹوڈیو', // preset 'Dark Studio'
    presetGradientGlow: 'گریڈینٹ گلو', // preset 'Gradient Glow'
    borderStyle: 'بارڈر اسٹائل', // 'Border Style'
    borderStyleSolid: 'ٹھوس', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'گریڈینٹ', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'پولارائیڈ', // border type 'polaroid' (rendered capitalized)
    borderColor: 'بارڈر کا رنگ', // 'Border Color'
    startColor: 'شروعاتی رنگ', // 'Start Color'
    endColor: 'آخری رنگ', // 'End Color'
    gradientAngle: 'گریڈینٹ زاویہ', // 'Gradient Angle'
    borderSize: 'بارڈر سائز', // 'Border Size'
    frameRadius: 'فریم رداس', // 'Frame Radius'
    photoRadius: 'تصویر کا رداس', // 'Photo Radius'
    dropShadow: 'ڈراپ شیڈو', // 'Drop Shadow'
    shadowNone: 'کوئی نہیں', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'ہلکا', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'درمیانہ', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'گہرا', // shadow level 'deep' (rendered capitalized)
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadFramedImage: 'فریم شدہ تصویر ڈاؤن لوڈ کریں', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'تصویر کے کونے گول کرنے کے لیے تصویر چھوڑیں', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'گول کونوں والی تصویر ایکسپورٹ نہیں ہو سکی۔', // 'Failed to export rounded image.'
    liveCornerPreview: 'کونوں کا لائیو پری ویو', // 'Live Corner Preview'
    changeImage: 'تصویر بدلیں', // 'Change Image'
    cornerSettings: 'کونے کی سیٹنگز', // 'Corner Settings'
    fullCirclePill: 'مکمل دائرہ / پل', // 'Full Circle / Pill'
    individualPerCorner: 'ہر کونے کا الگ کنٹرول', // 'Individual Per-Corner Control'
    allCornersRadius: 'تمام کونوں کا رداس', // 'All Corners Radius'
    cornerTopLeft: 'اوپر بائیں', // per-corner label 'Top Left'
    cornerTopRight: 'اوپر دائیں', // per-corner label 'Top Right'
    cornerBottomLeft: 'نیچے بائیں', // per-corner label 'Bottom Left'
    cornerBottomRight: 'نیچے دائیں', // per-corner label 'Bottom Right'
    outerCornerFill: 'بیرونی کونے کی بھرائی', // 'Outer Corner Fill'
    transparentPngWebp: 'شفاف (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'ٹھوس رنگ', // 'Solid Color'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadRoundedImage: 'گول کونوں والی تصویر ڈاؤن لوڈ کریں', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'برائٹنس ایڈجسٹ کرنے کے لیے تصویر چھوڑیں', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'ایڈجسٹ شدہ تصویر ایکسپورٹ نہیں ہو سکی۔', // 'Failed to export adjusted image.'
    viewAfter: 'بعد میں', // view tab 'after' (rendered capitalized)
    viewBefore: 'پہلے', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'تقسیم شدہ موازنہ', // view tab 'Split Compare'
    fullscreenCompare: 'فل اسکرین موازنہ', // 'Fullscreen Compare'
    removeImage: 'تصویر ہٹائیں', // title/aria-label 'Remove image'
    beforeLabel: 'پہلے', // split slider label 'Before'
    afterLabel: 'بعد میں', // split slider label 'After'
    originalPreviewAlt: 'اصل پری ویو', // alt 'Original preview'
    originalComparisonAlt: 'اصل موازنہ', // alt 'Original comparison'
    brightnessControls: 'برائٹنس کنٹرولز', // 'Brightness Controls'
    reset: 'ری سیٹ کریں', // 'Reset'
    brightnessLevel: 'برائٹنس لیول', // 'Brightness Level'
    minLabel: '-100% زیادہ گہرا', // min label '-100% Darker'
    maxLabel: '+100% زیادہ روشن', // max label '+100% Brighter'
    quickPresets: 'فوری پری سیٹس', // 'Quick Presets'
    presetDark: 'گہرا (-30%)', // preset 'Dark (-30%)'
    presetDim: 'مدھم (-15%)', // preset 'Dim (-15%)'
    presetOriginal: 'اصل (0%)', // preset 'Original (0%)'
    presetBright: 'روشن (+15%)', // preset 'Bright (+15%)'
    presetVibrant: 'جاندار (+30%)', // preset 'Vibrant (+30%)'
    presetHighKey: 'ہائی کی (+50%)', // preset 'High Key (+50%)'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'کوالٹی', // 'Quality'
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadEditedImage: 'ایڈٹ شدہ تصویر ڈاؤن لوڈ کریں', // 'Download Edited Image'
    comparisonTitlePrefix: 'برائٹنس کا موازنہ', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'ایڈٹ شدہ (بعد میں)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'کنٹراسٹ ایڈجسٹ کرنے کے لیے تصویر چھوڑیں', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'کنٹراسٹ کا موازنہ', // 'Contrast Comparison'
    comparisonAfterLabel: 'ایڈٹ شدہ (بعد میں)', // 'Edited (After)'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'ایڈجسٹ شدہ تصویر ایکسپورٹ نہیں ہو سکی۔', // 'Failed to export adjusted image.'
    tabAfter: 'بعد میں', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'پہلے', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'تقسیم شدہ موازنہ', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'فل اسکرین موازنہ کریں', // 'Fullscreen Compare'
    removeImage: 'تصویر ہٹائیں', // title + aria-label 'Remove image'
    originalPreviewAlt: 'اصل پری ویو', // alt 'Original preview'
    originalComparisonAlt: 'اصل موازنہ', // alt 'Original comparison'
    splitBeforeLabel: 'پہلے', // split slider left label 'Before'
    splitAfterLabel: 'بعد میں', // split slider right label 'After'
    controlsHeading: 'کنٹراسٹ کنٹرولز', // '{label} Controls' (contrast mode)
    reset: 'ری سیٹ کریں', // 'Reset'
    levelLabel: 'کنٹراسٹ لیول', // '{label} Level' (contrast mode)
    minLabel: '-100% فلیٹ', // minLabel '-100% Flat'
    maxLabel: '+100% ہائی کنٹراسٹ', // maxLabel '+100% High Contrast'
    quickPresets: 'فوری پری سیٹس', // 'Quick Presets'
    presetSoft: 'نرم (-25%)', // 'Soft (-25%)'
    presetMuted: 'مدھم (-10%)', // 'Muted (-10%)'
    presetOriginal: 'اصل (0%)', // 'Original (0%)'
    presetCrisp: 'تیز (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'زبردست (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'ڈرامائی (+70%)', // 'Dramatic (+70%)'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'کوالٹی', // 'Quality'
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadEditedImage: 'ایڈٹ شدہ تصویر ڈاؤن لوڈ کریں', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'سیچوریشن ایڈجسٹ کرنے کے لیے تصویر چھوڑیں', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'سیچوریشن کا موازنہ', // 'Saturation Comparison'
    comparisonAfterLabel: 'ایڈٹ شدہ (بعد میں)', // 'Edited (After)'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'ایڈجسٹ شدہ تصویر ایکسپورٹ نہیں ہو سکی۔', // 'Failed to export adjusted image.'
    tabAfter: 'بعد میں', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'پہلے', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'تقسیم شدہ موازنہ', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'فل اسکرین موازنہ کریں', // 'Fullscreen Compare'
    removeImage: 'تصویر ہٹائیں', // title + aria-label 'Remove image'
    originalPreviewAlt: 'اصل پری ویو', // alt 'Original preview'
    originalComparisonAlt: 'اصل موازنہ', // alt 'Original comparison'
    splitBeforeLabel: 'پہلے', // split slider left label 'Before'
    splitAfterLabel: 'بعد میں', // split slider right label 'After'
    controlsHeading: 'سیچوریشن کنٹرولز', // '{label} Controls' (saturation mode)
    reset: 'ری سیٹ کریں', // 'Reset'
    levelLabel: 'سیچوریشن لیول', // '{label} Level' (saturation mode)
    minLabel: '-100% گرے اسکیل', // minLabel '-100% Grayscale'
    maxLabel: '+100% جاندار', // maxLabel '+100% Vivid'
    quickPresets: 'فوری پری سیٹس', // 'Quick Presets'
    presetGrayscale: 'گرے اسکیل (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'مدھم (-40%)', // 'Muted (-40%)'
    presetOriginal: 'اصل (0%)', // 'Original (0%)'
    presetRich: 'بھرپور (+30%)', // 'Rich (+30%)'
    presetVivid: 'جاندار (+60%)', // 'Vivid (+60%)'
    presetHyper: 'ہائپر (+90%)', // 'Hyper (+90%)'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'کوالٹی', // 'Quality'
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadEditedImage: 'ایڈٹ شدہ تصویر ڈاؤن لوڈ کریں', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'فلٹر لگانے کے لیے تصویر چھوڑیں', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'فلٹرز کا موازنہ', // 'Filter Comparison'
    comparisonAfterLabel: 'فلٹر شدہ', // 'Filtered'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'ایکسپورٹ میں خرابی۔', // 'Export failed.'
    filterPreview: 'فلٹر پری ویو', // 'Filter Preview'
    holdToViewOriginal: 'اصل دیکھنے کے لیے دبائے رکھیں', // 'Hold to View Original'
    compare: 'موازنہ کریں', // 'Compare'
    removeImage: 'تصویر ہٹائیں', // aria-label 'Remove image'
    originalBadge: 'اصل', // 'Original' badge — same in Spanish
    filterPresets: 'فلٹر پری سیٹس', // 'Filter Presets'
    reset: 'ری سیٹ کریں', // 'Reset'
    presetOriginal: 'اصل', // preset 'Original' — same in Spanish
    presetGrayscale: 'گرے اسکیل', // preset 'Grayscale'
    presetSepia: 'سیپیا', // preset 'Sepia' — same in Spanish
    presetVintage: 'ونٹیج', // preset 'Vintage' — same in Spanish
    presetWarm: 'گرم', // preset 'Warm'
    presetCool: 'ٹھنڈا', // preset 'Cool'
    presetHighContrast: 'ہائی کنٹراسٹ', // preset 'High Contrast'
    presetMatteFade: 'میٹ فیڈ', // preset 'Matte Fade'
    presetDramatic: 'ڈرامائی', // preset 'Dramatic'
    presetNoir: 'بلیک اینڈ وائٹ Noir', // preset 'B&W Noir'
    presetGoldenHour: 'گولڈن آور', // preset 'Golden Hour'
    presetInvert: 'الٹ دیں', // preset 'Invert'
    filterIntensity: 'فلٹر کی شدت', // 'Filter Intensity'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'کوالٹی', // 'Quality'
    rendering: 'پروسیس ہو رہا ہے…', // 'Rendering...'
    downloadFilteredImage: 'فلٹر شدہ تصویر ڈاؤن لوڈ کریں', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'بیک گراؤنڈ لگانے کے لیے تصویر یا شفاف PNG چھوڑیں', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorExportFailed: 'ایکسپورٹ میں خرابی۔', // 'Export failed.'
    backgroundPreview: 'بیک گراؤنڈ پری ویو', // 'Background Preview'
    changeImage: 'تصویر بدلیں', // 'Change Image'
    outputDimensionsPrefix: 'آؤٹ پٹ:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'بیک گراؤنڈ کی قسم', // 'Background Type'
    modeSolidColor: 'ٹھوس رنگ', // 'Solid Color'
    modeGradient: 'گریڈینٹ', // 'Gradient'
    modeBlurredPhoto: 'بلر شدہ تصویر', // 'Blurred Photo'
    selectColor: 'رنگ منتخب کریں {color}', // aria-label `Select color ${c}`
    color1: 'رنگ 1', // 'Color 1' — same in Spanish
    color2: 'رنگ 2', // 'Color 2' — same in Spanish
    angle: 'زاویہ', // 'Angle'
    backdropBlurRadius: 'بیک ڈراپ بلر رداس', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'کینوس تناسب', // 'Canvas Aspect Ratio'
    aspectOriginal: 'اصل', // 'Orig' — same abbreviation in Spanish
    imageScale: 'امیج اسکیل', // 'Image Scale'
    roundness: 'گولائی', // 'Roundness'
    dropShadowBehindImage: 'تصویر کے پیچھے ڈراپ شیڈو', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'ایکسپورٹ ہو رہا ہے…', // 'Exporting...'
    downloadImage: 'تصویر ڈاؤن لوڈ کریں', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'گرڈ ٹائلز یا پٹیوں میں تقسیم کرنے کے لیے تصویر چھوڑیں', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorSplitFailed: 'تصویر تقسیم نہیں ہو سکی۔', // 'Failed to split image.'
    errorCanvasContext: 'کینوس کانٹیکسٹ شروع نہیں ہو سکا۔', // 'Unable to initialize canvas context.'
    cutLinePreview: 'کٹ لائن پری ویو ({rows} × {cols} = {tiles} حصے)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'تصویر بدلیں', // 'Change Image'
    splitGuideAlt: 'تقسیم گائیڈ', // alt 'Split guide'
    splitLayout: 'تقسیم کی ترتیب', // 'Split Layout'
    modeGrid: 'گرڈ (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'افقی پٹیاں', // 'Horiz. Strips'
    modeVerticalStrips: 'عمودی پٹیاں', // 'Vert. Strips'
    rowsLabel: 'قطاریں (افقی کٹ)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'کالم (عمودی کٹ)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 کیروسل', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 پٹیاں', // preset '4×1 Strips'
    formatOriginal: 'اصل', // 'Orig' — same abbreviation in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'ٹائل کوالٹی', // 'Tile Quality'
    splittingImage: 'تصویر تقسیم ہو رہی ہے…', // 'Splitting Image...'
    splitIntoTiles: '{count} حصوں میں تقسیم کریں', // `Split into ${n} Tiles`
    splitComplete: 'تقسیم مکمل', // 'Split Complete'
    tilesGenerated: '{count} امیج ٹائلز مکمل ریزولوشن میں بنائی گئیں', // '{n} image tiles generated at full resolution'
    packagingZip: 'ZIP پیک ہو رہا ہے…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'تمام ٹائلز ڈاؤن لوڈ کریں (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'DPI میٹا ڈیٹا اپ ڈیٹ کرنے کے لیے JPG یا PNG تصاویر چھوڑیں', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'DPI اپ ڈیٹ نہیں ہو سکا۔', // 'Failed to update DPI.'
    targetDpiPresets: 'ٹارگٹ DPI پری سیٹس', // 'Target DPI Presets'
    preset72Screen: '72 DPI (اسکرین)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (ڈرافٹ پرنٹ)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (اعلیٰ معیار کا پرنٹ)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (محفوظ شدہ)', // '600 DPI (Archival)'
    customDpi: 'اپنی مرضی کا DPI', // 'Custom DPI'
    applyDpi: '{dpi} DPI لگائیں', // 'Apply {dpi} DPI'
    clear: 'صاف کریں', // 'Clear'
    batchReady: 'بیچ تیار ہے', // 'Batch Ready'
    filesUpdatedToDpi: '{count} فائلیں {dpi} DPI پر اپ ڈیٹ ہو گئیں', // '{n} files updated to {dpi} DPI'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'پہلے: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'پہلے: طے نہیں تھا', // 'Before: Not set'
    verifiedDpi: 'تصدیق شدہ: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Lossless JPEG ہیڈر اپ ڈیٹ', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Lossless PNG pHYs اپ ڈیٹ', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'pHYs DPI کے ساتھ PNG میں تبدیل کر دیا گیا', // 'Converted to PNG with pHYs DPI'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Base64 کے طور پر انکوڈ کرنے کے لیے تصویر چھوڑیں', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'فائل انکوڈ نہیں ہو سکی۔', // 'Could not encode file.'
    errorFailedToRead: 'امیج فائل پڑھی نہیں جا سکی۔', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'کلپ بورڈ پر نہیں لکھا جا سکا: ٹیکسٹ باکس سے منتخب کر کے کاپی کریں۔', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'فائل:', // 'File:' (summary card)
    outputLabel: 'آؤٹ پٹ:', // 'Output:' (summary card)
    charsLabel: 'حروف', // 'chars' (summary card)
    encodeAnother: 'دوسری انکوڈ کریں', // 'Encode Another'
    tabDataUrl: 'ڈیٹا URL', // tab 'Data URL'
    tabRawBase64: 'خالص Base64', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'کاپی ہو گیا!', // 'Copied!'
    copyOutput: 'آؤٹ پٹ کاپی کریں', // 'Copy Output'
    saveTxt: '.TXT محفوظ کریں', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'Base64 اسٹرنگ یا ڈیٹا URL پیسٹ کریں', // 'Paste Base64 String or Data URL'
    clear: 'صاف کریں', // 'Clear'
    inputPlaceholder: 'data:image/png;base64,iVBORw0KGgo... یا خالص Base64 بائٹس یہاں پیسٹ کریں', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'PNG، JPG، WebP، GIF، SVG، BMP اور ICO کے Base64 پے لوڈز سپورٹ کرتا ہے', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'ڈی کوڈ ہو رہا ہے…', // 'Decoding...'
    decodeImage: 'تصویر ڈی کوڈ کریں', // 'Decode Image'
    decodingBytes: 'Base64 بائٹس ڈی کوڈ ہو رہے ہیں…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'ڈیٹا URI انکوڈنگ سپورٹ نہیں کی جاتی۔ Base64 پے لوڈ (`;base64,`) درکار ہے۔', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'ان پٹ میں غلط Base64 حروف ہیں۔', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'ڈی کوڈ شدہ بائٹس براؤزر کے پڑھنے کے قابل درست تصویر نہیں بناتے۔', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Base64 اسٹرنگ ڈی کوڈ نہیں ہو سکی۔', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'ڈی کوڈ شدہ Base64 کا پری ویو', // alt 'Decoded Base64 preview'
    validImageDecoded: 'درست تصویر ڈی کوڈ ہو گئی', // 'Valid Image Decoded'
    detectedFormat: 'پہچانا گیا فارمیٹ', // 'Detected Format'
    binarySize: 'بائنری سائز', // 'Binary Size'
    dimensions: 'ڈائمینشن', // 'Dimensions'
    downloadFormat: 'ڈاؤن لوڈ فارمیٹ', // 'Download Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'امیج فائل ڈاؤن لوڈ کریں', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'اہم رنگوں کی پیلیٹ نکالنے کے لیے تصویر چھوڑیں', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'تصویر لوڈ نہیں ہو سکی۔', // 'Unable to load image.'
    errorClipboardDenied: 'کلپ بورڈ کی اجازت مسترد ہو گئی۔', // 'Clipboard permission denied.'
    extractedPalette: 'نکالی گئی پیلیٹ ({count} رنگ)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'ماخذ', // alt 'Source'
    changeImage: 'بدلیں', // 'Change'
    numberOfColors: 'رنگوں کی تعداد', // 'Number of Colors'
    colorsCount: '{count} رنگ', // '{count} colors'
    copyCssVariables: 'CSS ویری ایبلز کاپی کریں', // 'Copy CSS Variables'
    copiedCss: 'CSS کاپی ہو گیا!', // 'Copied CSS!'
    copyJson: 'JSON کاپی کریں', // 'Copy JSON'
    copiedJson: 'JSON کاپی ہو گیا!', // 'Copied JSON!'
    downloadPalettePng: 'پیلیٹ PNG ڈاؤن لوڈ کریں', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'اینیمیٹڈ GIF بنانے کے لیے 2 یا زیادہ تصاویر چھوڑیں', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'اینیمیٹڈ GIF انکوڈ نہیں ہو سکا۔', // 'Failed to encode animated GIF.'
    skippedFile: '”{name}“ چھوڑ دی گئی: {error}', // 'Skipped "{file.name}": {err.message}'
    skippedFileNoError: '”{name}“ چھوڑ دی گئی۔', // 'Skipped "{file.name}".'
    generatedGif: 'بنایا گیا GIF ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'لائیو ٹائمنگ پری ویو · فریم {current}/{total}', // 'Live Timing Preview · Frame {n}/{total}'
    generatedGifAlt: 'بنایا گیا اینیمیٹڈ GIF', // alt 'Generated animated GIF'
    pause: 'روکیں', // 'Pause'
    play: 'چلائیں', // 'Play'
    backToFrameEditor: 'فریم ایڈیٹر پر واپس جائیں', // 'Back to Frame Editor'
    clearAllFrames: 'تمام فریم صاف کریں', // aria-label 'Clear all frames'
    largeGifWarning: 'بڑے GIF کی وارننگ ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      '5–15 MB سے بڑے GIF میسجنگ ایپس پر آہستہ اپ لوڈ ہو سکتے ہیں یا پلیٹ فارم کی سخت حدوں پر پورا نہیں اتر سکتے۔ آؤٹ پٹ چوڑائی/اونچائی کم کرنے (مثلاً 480 px)، کوالٹی کم کرنے یا فریم ہٹانے کی کوشش کریں۔', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'اینیمیٹڈ GIF ڈاؤن لوڈ کریں ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'اینیمیشن سیٹنگز', // 'Animation Settings'
    defaultFrameDuration: 'ڈیفالٹ فریم دورانیہ', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'لوپ کا رویہ', // 'Loop Behavior'
    loopForever: 'ہمیشہ', // 'Forever'
    loopSetLoops: 'لوپس طے کریں', // 'Set Loops'
    loopPlayOnce: 'ایک بار چلائیں', // 'Play Once'
    totalPlays: 'کل پلے', // 'Total Plays'
    outputDimensions: 'آؤٹ پٹ ڈائمینشن (px)', // 'Output Dimensions (px)'
    ratioLocked: 'تناسب لاک ہے', // 'Ratio Locked'
    ratioUnlocked: 'ان لاک ہے', // 'Unlocked'
    widthLabel: 'چوڑائی', // 'Width'
    heightLabel: 'اونچائی', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'اصل', // 'Original' — same in Spanish
    frameFit: 'فریم فٹ', // 'Frame Fit'
    fitContain: 'کنٹین', // 'contain'
    fitCover: 'کور', // 'cover'
    backgroundMatte: 'بیک گراؤنڈ میٹ', // 'Background Matte'
    colorPaletteQuality: 'کلر پیلیٹ کوالٹی', // 'Color Palette Quality'
    encodingGif: 'GIF انکوڈ ہو رہا ہے ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'اینیمیٹڈ GIF بنائیں', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'اینیمیٹڈ GIF دوبارہ انکوڈ کریں', // 'Re-Encode Animated GIF'
    framesHeading: 'فریمز ({count}) — دوبارہ ترتیب دینے کے لیے ڈریگ کریں یا تیر استعمال کریں', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'فی فریم دورانیہ خالی چھوڑیں تاکہ {ms} ms کا عالمی فریم دورانیہ وراثت میں ملے۔', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'فریم شامل کریں', // 'Add Frames'
    delayMsLabel: 'دورانیہ (ms):', // 'Delay (ms):'
    moveEarlier: 'پہلے لے جائیں', // title 'Move earlier'
    moveLater: 'بعد میں لے جائیں', // title 'Move later'
    duplicateFrame: 'فریم کی نقل بنائیں', // title 'Duplicate frame'
    removeFrame: 'فریم ہٹائیں', // title 'Remove frame'
    moveFrameEarlierAria: 'فریم {n} پہلے لے جائیں', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'فریم {n} بعد میں لے جائیں', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'فریم {n} کی نقل بنائیں', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'فریم {n} ہٹائیں', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'فوٹو کولاج بنانے کے لیے 2 سے 9 تصاویر چھوڑیں', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'کولاج ایکسپورٹ نہیں ہو سکا۔', // 'Failed to export collage.'
    couldNotLoadFile: '”{name}“ لوڈ نہیں ہو سکی: {error}', // 'Could not load "{file.name}": {err.message}'
    couldNotLoadFileNoError: '”{name}“ لوڈ نہیں ہو سکی۔', // 'Could not load "{file.name}".'
    collagePreview: 'کولاج پری ویو ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'سب صاف کریں', // 'Clear All'
    rearrangeCells: 'سیلز دوبارہ ترتیب دیں (تبدیل کرنے کے لیے ڈریگ کریں یا دو سیلز پر ٹیپ کریں)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'تصاویر فوری طور پر دوبارہ ترتیب دینے کے لیے کسی بھی سیل کارڈ کو دوسری سلاٹ پر ڈریگ کریں۔', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'تصاویر شامل کریں', // 'Add Photos'
    cellLabel: 'سیل {n}', // 'Cell {n}'
    slotLabel: 'سلاٹ {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'سیل {n} پیچھے لے جائیں', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'سیل {n} آگے لے جائیں', // aria-label `Move cell ${n} forward`
    clearCellAria: 'سیل {n} صاف کریں', // aria-label `Clear cell ${n}`
    addPhoto: 'تصویر شامل کریں', // 'Add Photo'
    collageLayout: 'کولاج لے آؤٹ', // 'Collage Layout'
    layout2x2: '2×2 گرڈ', // '2×2 Grid'
    layout3x3: '3×3 گرڈ', // '3×3 Grid'
    layoutVertical: 'عمودی پٹی', // 'Vertical Strip'
    layoutHorizontal: 'افقی پٹی', // 'Horizontal Strip'
    cellProportionsSpacing: 'سیل تناسب اور فاصلہ', // 'Cell Proportions & Spacing'
    equalCells: 'برابر سیلز', // 'Equal Cells'
    colSplit: 'کالم تقسیم', // 'Col Split'
    centerCol: 'درمیانی کالم', // 'Center Col'
    rowSplit: 'قطار تقسیم', // 'Row Split'
    centerRow: 'درمیانی قطار', // 'Center Row'
    leadCellEmphasis: 'لیڈ سیل کی نمایاں کاری', // 'Lead Cell Emphasis'
    gapSpacing: 'فاصلہ', // 'Gap Spacing'
    cellRadius: 'سیل رداس', // 'Cell Radius'
    backgroundColor: 'بیک گراؤنڈ کا رنگ', // 'Background Color'
    backgroundSwatchAria: 'بیک گراؤنڈ {color}', // aria-label `Background ${c}`
    imageFit: 'امیج فٹ', // 'Image Fit'
    fitCover: 'کور', // 'cover'
    fitContain: 'کنٹین', // 'contain'
    outputSize: 'آؤٹ پٹ سائز (px)', // 'Output Size (px)'
    widthLabel: 'چوڑائی', // 'Width'
    heightLabel: 'اونچائی', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (lossless)', // 'PNG (Lossless)'
    jpgQuality: 'JPG کوالٹی', // 'JPG Quality'
    exportingCollage: 'کولاج ایکسپورٹ ہو رہا ہے…', // 'Exporting Collage...'
    downloadCollage: 'کولاج ڈاؤن لوڈ کریں ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: '{target} سے نیچے کمپریس کرنے کے لیے تصاویر چھوڑیں', // 'Drop images to compress under {target}'
    errorTargetFailed: 'ٹارگٹ کمپریشن میں خرابی۔', // 'Target compression failed.'
    errorCorruptedFile: 'خراب یا ناقابلِ خواندگی امیج فائل۔', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'ٹارگٹ زیادہ سے زیادہ فائل سائز', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} زیادہ سے زیادہ)', // '({bytes} max)'
    needDifferentTarget: 'KB میں مختلف ٹارگٹ چاہیے؟', // 'Need a different target KB?'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'اگر صرف کوالٹی کم کرنے سے {target} میں نہیں آتا تو ذہین ڈائمینشن اسکیلنگ کی اجازت دیں', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'بڑے PNG کو خودکار طور پر WebP/JPG میں تبدیل کریں جب lossless PNG صاف طور پر {target} تک نہ پہنچ سکے', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'شفاف PNG کے لیے میٹ رنگ:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} تک کمپریس کریں', // 'Compress to {target}'
    optimizing: 'آپٹیمائز ہو رہا ہے…', // 'Optimizing...'
    clear: 'صاف کریں', // 'Clear'
    losslessPngSelected: 'Lossless PNG منتخب کیا گیا:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG کوالٹی سلائیڈرز کو نظر انداز کرتا ہے، اس لیے سائز کم کرنا صرف پکسل ڈائمینشن چھوٹے کرنے پر منحصر ہے۔ بڑی تصاویر کے لیے JPG یا WebP منتخب کریں تاکہ صاف رہتے ہوئے KB کی سخت حدوں تک پہنچ سکیں۔', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'ٹارگٹ کمپریشن کا خلاصہ · ہدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total} {images} میں سے {achieved} نے {target} کا ہدف پورا کیا', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'تصویر', // 'image'
    imagePlural: 'تصاویر', // 'images'
    summaryMissed: ' · {missed} ایمانداری سے نہیں آ سکیں (تفصیل نیچے)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'کل بچت: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'کل بچت: {bytes} (بڑھ گیا {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    metricOriginal: 'اصل', // 'Original' (metric label)
    metricOutput: 'آؤٹ پٹ', // 'Output' (metric label)
    metricSpaceSaved: 'بچائی گئی جگہ', // 'Space Saved' (metric label)
    metricReduction: 'کمی', // 'Reduction' (metric label)
    metricSizeChange: 'سائز میں تبدیلی', // 'Size Change' (metric label)
    underTarget: '{target} سے نیچے ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'ہدف پورا نہیں ہوا — {bytes}', // 'Target missed — {bytes}'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} بڑھ گیا: دوبارہ انکوڈنگ اصل سے بڑی ہے', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'تصویر جیسے PNG کے لیے WebP یا JPG عام طور پر چھوٹا ہوتا ہے۔', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'اصل رکھیں', // 'Keep original'
    keptOriginalNote: 'اصل فائل رکھی گئی کیونکہ دوبارہ انکوڈنگ نے اسے بڑا کر دیا تھا۔', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Lossless PNG خودکار طور پر {format} میں تبدیل کر دیا گیا تاکہ {target} سے نیچے زیادہ ریزولوشن برقرار رہے۔', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (شفافیت برقرار ہے)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'اصل فائل پہلے ہی {target} سے نیچے تھی، اور دوبارہ انکوڈنگ نے اسے {bytes} بڑا کر دیا۔ چھوٹے آؤٹ پٹ کے لیے «اصل رکھیں» استعمال کریں یا WebP/JPG پر تبدیل کریں۔', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'اصل فائل پہلے ہی {target} سے نیچے تھی؛ {quality}% کوالٹی پر صاف ایکسپورٹ ہو گئی۔', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'مکمل {width}×{height} px ریزولوشن پر ہدف پورا ہو گیا ({qualityLabel})۔', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px ({percent}%) پر اسکیل کر کے {qualityLabel} کے ساتھ ہدف پورا ہو گیا۔', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'lossless PNG', // 'lossless PNG'
    qualityPercent: '{quality}% کوالٹی', // '{quality}% quality'
    statusCannotPng:
      'Lossless PNG سے {target} تک نہیں پہنچا جا سکتا (کم از کم ممکن: {width}×{height} px پر {bytes})۔ چھوٹے سائز تک پہنچنے کے لیے آؤٹ پٹ فارمیٹ JPG یا WebP پر تبدیل کریں۔', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'مکمل {width}×{height} px ڈائمینشن پر {target} تک نہیں پہنچا جا سکتا (کم از کم کوالٹی سائز {bytes} ہے)۔ ڈائمینشن مزید کم کرنے کے لیے «ڈائمینشن اسکیلنگ کی اجازت دیں» آن کریں۔', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'مطلوبہ {target} کا ہدف صاف طور پر پورا نہیں ہو سکا۔ سب سے چھوٹا ایماندارانہ انکوڈ شدہ آؤٹ پٹ {bytes} ہے ({width}×{height} px، {quality}% کوالٹی)۔ بڑا ٹارگٹ آزمائیں۔', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'ٹارگٹ کمپریشن ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'کمپریس شدہ ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: '{target} سے نیچے کمپریس کرنے کے لیے تصاویر چھوڑیں', // 'Drop images to compress under {target}'
    errorTargetFailed: 'ٹارگٹ کمپریشن میں خرابی۔', // 'Target compression failed.'
    errorCorruptedFile: 'خراب یا ناقابلِ خواندگی امیج فائل۔', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'ٹارگٹ زیادہ سے زیادہ فائل سائز', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} زیادہ سے زیادہ)', // '({bytes} max)'
    needDifferentTarget: 'KB میں مختلف ٹارگٹ چاہیے؟', // 'Need a different target KB?'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'اگر صرف کوالٹی کم کرنے سے {target} میں نہیں آتا تو ذہین ڈائمینشن اسکیلنگ کی اجازت دیں', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'بڑے PNG کو خودکار طور پر WebP/JPG میں تبدیل کریں جب lossless PNG صاف طور پر {target} تک نہ پہنچ سکے', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'شفاف PNG کے لیے میٹ رنگ:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} تک کمپریس کریں', // 'Compress to {target}'
    optimizing: 'آپٹیمائز ہو رہا ہے…', // 'Optimizing...'
    clear: 'صاف کریں', // 'Clear'
    losslessPngSelected: 'Lossless PNG منتخب کیا گیا:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG کوالٹی سلائیڈرز کو نظر انداز کرتا ہے، اس لیے سائز کم کرنا صرف پکسل ڈائمینشن چھوٹے کرنے پر منحصر ہے۔ بڑی تصاویر کے لیے JPG یا WebP منتخب کریں تاکہ صاف رہتے ہوئے KB کی سخت حدوں تک پہنچ سکیں۔', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'ٹارگٹ کمپریشن کا خلاصہ · ہدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total} {images} میں سے {achieved} نے {target} کا ہدف پورا کیا', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'تصویر', // 'image'
    imagePlural: 'تصاویر', // 'images'
    summaryMissed: ' · {missed} ایمانداری سے نہیں آ سکیں (تفصیل نیچے)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'کل بچت: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'کل بچت: {bytes} (بڑھ گیا {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    metricOriginal: 'اصل', // 'Original' (metric label)
    metricOutput: 'آؤٹ پٹ', // 'Output' (metric label)
    metricSpaceSaved: 'بچائی گئی جگہ', // 'Space Saved' (metric label)
    metricReduction: 'کمی', // 'Reduction' (metric label)
    metricSizeChange: 'سائز میں تبدیلی', // 'Size Change' (metric label)
    underTarget: '{target} سے نیچے ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'ہدف پورا نہیں ہوا — {bytes}', // 'Target missed — {bytes}'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} بڑھ گیا: دوبارہ انکوڈنگ اصل سے بڑی ہے', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'تصویر جیسے PNG کے لیے WebP یا JPG عام طور پر چھوٹا ہوتا ہے۔', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'اصل رکھیں', // 'Keep original'
    keptOriginalNote: 'اصل فائل رکھی گئی کیونکہ دوبارہ انکوڈنگ نے اسے بڑا کر دیا تھا۔', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Lossless PNG خودکار طور پر {format} میں تبدیل کر دیا گیا تاکہ {target} سے نیچے زیادہ ریزولوشن برقرار رہے۔', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (شفافیت برقرار ہے)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'اصل فائل پہلے ہی {target} سے نیچے تھی، اور دوبارہ انکوڈنگ نے اسے {bytes} بڑا کر دیا۔ چھوٹے آؤٹ پٹ کے لیے «اصل رکھیں» استعمال کریں یا WebP/JPG پر تبدیل کریں۔', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'اصل فائل پہلے ہی {target} سے نیچے تھی؛ {quality}% کوالٹی پر صاف ایکسپورٹ ہو گئی۔', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'مکمل {width}×{height} px ریزولوشن پر ہدف پورا ہو گیا ({qualityLabel})۔', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px ({percent}%) پر اسکیل کر کے {qualityLabel} کے ساتھ ہدف پورا ہو گیا۔', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'lossless PNG', // 'lossless PNG'
    qualityPercent: '{quality}% کوالٹی', // '{quality}% quality'
    statusCannotPng:
      'Lossless PNG سے {target} تک نہیں پہنچا جا سکتا (کم از کم ممکن: {width}×{height} px پر {bytes})۔ چھوٹے سائز تک پہنچنے کے لیے آؤٹ پٹ فارمیٹ JPG یا WebP پر تبدیل کریں۔', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'مکمل {width}×{height} px ڈائمینشن پر {target} تک نہیں پہنچا جا سکتا (کم از کم کوالٹی سائز {bytes} ہے)۔ ڈائمینشن مزید کم کرنے کے لیے «ڈائمینشن اسکیلنگ کی اجازت دیں» آن کریں۔', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'مطلوبہ {target} کا ہدف صاف طور پر پورا نہیں ہو سکا۔ سب سے چھوٹا ایماندارانہ انکوڈ شدہ آؤٹ پٹ {bytes} ہے ({width}×{height} px، {quality}% کوالٹی)۔ بڑا ٹارگٹ آزمائیں۔', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'ٹارگٹ کمپریشن ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'کمپریس شدہ ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: '{target} سے نیچے کمپریس کرنے کے لیے تصاویر چھوڑیں', // 'Drop images to compress under {target}'
    errorTargetFailed: 'ٹارگٹ کمپریشن میں خرابی۔', // 'Target compression failed.'
    errorCorruptedFile: 'خراب یا ناقابلِ خواندگی امیج فائل۔', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'ٹارگٹ زیادہ سے زیادہ فائل سائز', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} زیادہ سے زیادہ)', // '({bytes} max)'
    needDifferentTarget: 'KB میں مختلف ٹارگٹ چاہیے؟', // 'Need a different target KB?'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'اگر صرف کوالٹی کم کرنے سے {target} میں نہیں آتا تو ذہین ڈائمینشن اسکیلنگ کی اجازت دیں', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'بڑے PNG کو خودکار طور پر WebP/JPG میں تبدیل کریں جب lossless PNG صاف طور پر {target} تک نہ پہنچ سکے', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'شفاف PNG کے لیے میٹ رنگ:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} تک کمپریس کریں', // 'Compress to {target}'
    optimizing: 'آپٹیمائز ہو رہا ہے…', // 'Optimizing...'
    clear: 'صاف کریں', // 'Clear'
    losslessPngSelected: 'Lossless PNG منتخب کیا گیا:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG کوالٹی سلائیڈرز کو نظر انداز کرتا ہے، اس لیے سائز کم کرنا صرف پکسل ڈائمینشن چھوٹے کرنے پر منحصر ہے۔ بڑی تصاویر کے لیے JPG یا WebP منتخب کریں تاکہ صاف رہتے ہوئے KB کی سخت حدوں تک پہنچ سکیں۔', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'ٹارگٹ کمپریشن کا خلاصہ · ہدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total} {images} میں سے {achieved} نے {target} کا ہدف پورا کیا', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'تصویر', // 'image'
    imagePlural: 'تصاویر', // 'images'
    summaryMissed: ' · {missed} ایمانداری سے نہیں آ سکیں (تفصیل نیچے)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'کل بچت: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'کل بچت: {bytes} (بڑھ گیا {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    metricOriginal: 'اصل', // 'Original' (metric label)
    metricOutput: 'آؤٹ پٹ', // 'Output' (metric label)
    metricSpaceSaved: 'بچائی گئی جگہ', // 'Space Saved' (metric label)
    metricReduction: 'کمی', // 'Reduction' (metric label)
    metricSizeChange: 'سائز میں تبدیلی', // 'Size Change' (metric label)
    underTarget: '{target} سے نیچے ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'ہدف پورا نہیں ہوا — {bytes}', // 'Target missed — {bytes}'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} بڑھ گیا: دوبارہ انکوڈنگ اصل سے بڑی ہے', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'تصویر جیسے PNG کے لیے WebP یا JPG عام طور پر چھوٹا ہوتا ہے۔', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'اصل رکھیں', // 'Keep original'
    keptOriginalNote: 'اصل فائل رکھی گئی کیونکہ دوبارہ انکوڈنگ نے اسے بڑا کر دیا تھا۔', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Lossless PNG خودکار طور پر {format} میں تبدیل کر دیا گیا تاکہ {target} سے نیچے زیادہ ریزولوشن برقرار رہے۔', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (شفافیت برقرار ہے)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'اصل فائل پہلے ہی {target} سے نیچے تھی، اور دوبارہ انکوڈنگ نے اسے {bytes} بڑا کر دیا۔ چھوٹے آؤٹ پٹ کے لیے «اصل رکھیں» استعمال کریں یا WebP/JPG پر تبدیل کریں۔', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'اصل فائل پہلے ہی {target} سے نیچے تھی؛ {quality}% کوالٹی پر صاف ایکسپورٹ ہو گئی۔', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'مکمل {width}×{height} px ریزولوشن پر ہدف پورا ہو گیا ({qualityLabel})۔', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px ({percent}%) پر اسکیل کر کے {qualityLabel} کے ساتھ ہدف پورا ہو گیا۔', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'lossless PNG', // 'lossless PNG'
    qualityPercent: '{quality}% کوالٹی', // '{quality}% quality'
    statusCannotPng:
      'Lossless PNG سے {target} تک نہیں پہنچا جا سکتا (کم از کم ممکن: {width}×{height} px پر {bytes})۔ چھوٹے سائز تک پہنچنے کے لیے آؤٹ پٹ فارمیٹ JPG یا WebP پر تبدیل کریں۔', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'مکمل {width}×{height} px ڈائمینشن پر {target} تک نہیں پہنچا جا سکتا (کم از کم کوالٹی سائز {bytes} ہے)۔ ڈائمینشن مزید کم کرنے کے لیے «ڈائمینشن اسکیلنگ کی اجازت دیں» آن کریں۔', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'مطلوبہ {target} کا ہدف صاف طور پر پورا نہیں ہو سکا۔ سب سے چھوٹا ایماندارانہ انکوڈ شدہ آؤٹ پٹ {bytes} ہے ({width}×{height} px، {quality}% کوالٹی)۔ بڑا ٹارگٹ آزمائیں۔', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'ٹارگٹ کمپریشن ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'کمپریس شدہ ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: '{target} سے نیچے کمپریس کرنے کے لیے تصاویر چھوڑیں', // 'Drop images to compress under {target}'
    errorTargetFailed: 'ٹارگٹ کمپریشن میں خرابی۔', // 'Target compression failed.'
    errorCorruptedFile: 'خراب یا ناقابلِ خواندگی امیج فائل۔', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'ٹارگٹ زیادہ سے زیادہ فائل سائز', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} زیادہ سے زیادہ)', // '({bytes} max)'
    needDifferentTarget: 'KB میں مختلف ٹارگٹ چاہیے؟', // 'Need a different target KB?'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'اگر صرف کوالٹی کم کرنے سے {target} میں نہیں آتا تو ذہین ڈائمینشن اسکیلنگ کی اجازت دیں', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'بڑے PNG کو خودکار طور پر WebP/JPG میں تبدیل کریں جب lossless PNG صاف طور پر {target} تک نہ پہنچ سکے', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'شفاف PNG کے لیے میٹ رنگ:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} تک کمپریس کریں', // 'Compress to {target}'
    optimizing: 'آپٹیمائز ہو رہا ہے…', // 'Optimizing...'
    clear: 'صاف کریں', // 'Clear'
    losslessPngSelected: 'Lossless PNG منتخب کیا گیا:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG کوالٹی سلائیڈرز کو نظر انداز کرتا ہے، اس لیے سائز کم کرنا صرف پکسل ڈائمینشن چھوٹے کرنے پر منحصر ہے۔ بڑی تصاویر کے لیے JPG یا WebP منتخب کریں تاکہ صاف رہتے ہوئے KB کی سخت حدوں تک پہنچ سکیں۔', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'ٹارگٹ کمپریشن کا خلاصہ · ہدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total} {images} میں سے {achieved} نے {target} کا ہدف پورا کیا', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'تصویر', // 'image'
    imagePlural: 'تصاویر', // 'images'
    summaryMissed: ' · {missed} ایمانداری سے نہیں آ سکیں (تفصیل نیچے)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'کل بچت: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'کل بچت: {bytes} (بڑھ گیا {grew})', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    metricOriginal: 'اصل', // 'Original' (metric label)
    metricOutput: 'آؤٹ پٹ', // 'Output' (metric label)
    metricSpaceSaved: 'بچائی گئی جگہ', // 'Space Saved' (metric label)
    metricReduction: 'کمی', // 'Reduction' (metric label)
    metricSizeChange: 'سائز میں تبدیلی', // 'Size Change' (metric label)
    underTarget: '{target} سے نیچے ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'ہدف پورا نہیں ہوا — {bytes}', // 'Target missed — {bytes}'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} بڑھ گیا: دوبارہ انکوڈنگ اصل سے بڑی ہے', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'تصویر جیسے PNG کے لیے WebP یا JPG عام طور پر چھوٹا ہوتا ہے۔', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'اصل رکھیں', // 'Keep original'
    keptOriginalNote: 'اصل فائل رکھی گئی کیونکہ دوبارہ انکوڈنگ نے اسے بڑا کر دیا تھا۔', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Lossless PNG خودکار طور پر {format} میں تبدیل کر دیا گیا تاکہ {target} سے نیچے زیادہ ریزولوشن برقرار رہے۔', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (شفافیت برقرار ہے)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'اصل فائل پہلے ہی {target} سے نیچے تھی، اور دوبارہ انکوڈنگ نے اسے {bytes} بڑا کر دیا۔ چھوٹے آؤٹ پٹ کے لیے «اصل رکھیں» استعمال کریں یا WebP/JPG پر تبدیل کریں۔', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'اصل فائل پہلے ہی {target} سے نیچے تھی؛ {quality}% کوالٹی پر صاف ایکسپورٹ ہو گئی۔', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'مکمل {width}×{height} px ریزولوشن پر ہدف پورا ہو گیا ({qualityLabel})۔', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px ({percent}%) پر اسکیل کر کے {qualityLabel} کے ساتھ ہدف پورا ہو گیا۔', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'lossless PNG', // 'lossless PNG'
    qualityPercent: '{quality}% کوالٹی', // '{quality}% quality'
    statusCannotPng:
      'Lossless PNG سے {target} تک نہیں پہنچا جا سکتا (کم از کم ممکن: {width}×{height} px پر {bytes})۔ چھوٹے سائز تک پہنچنے کے لیے آؤٹ پٹ فارمیٹ JPG یا WebP پر تبدیل کریں۔', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'مکمل {width}×{height} px ڈائمینشن پر {target} تک نہیں پہنچا جا سکتا (کم از کم کوالٹی سائز {bytes} ہے)۔ ڈائمینشن مزید کم کرنے کے لیے «ڈائمینشن اسکیلنگ کی اجازت دیں» آن کریں۔', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'مطلوبہ {target} کا ہدف صاف طور پر پورا نہیں ہو سکا۔ سب سے چھوٹا ایماندارانہ انکوڈ شدہ آؤٹ پٹ {bytes} ہے ({width}×{height} px، {quality}% کوالٹی)۔ بڑا ٹارگٹ آزمائیں۔', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'ٹارگٹ کمپریشن ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'کمپریس شدہ ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'بلک کمپریشن کے لیے درجنوں تصاویر چھوڑیں', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'کمپریشن میں خرابی۔', // 'Compression failed.'
    errorCorruptedFile: 'خراب یا ناقابلِ خواندگی امیج فائل۔', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'فوری بیچ پروفائلز:', // 'Quick Batch Profiles:'
    profileWebFast: 'ویب فاسٹ (WebP 75%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'ای میل / شیئرنگ (JPG 65%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'اعلیٰ معیار (85%)', // 'High Fidelity (85%)'
    compressingBatch: 'بیچ مقامی طور پر کمپریس ہو رہا ہے…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared i18n-es.ts dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated in Batch 1.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: '{target} سے نیچے کمپریس کرنے کے لیے تصاویر چھوڑیں', // `Drop images to compress under ${targetLabel}`
    targetMaxFileSize: 'ٹارگٹ زیادہ سے زیادہ فائل سائز', // 'Target Maximum File Size'
    targetNumberAria: 'ٹارگٹ فائل سائز نمبر', // aria-label 'Target file size number'
    maxSuffix: '({size} زیادہ سے زیادہ)', // '({formatBytes(effectiveTargetBytes)} max)'
    needDifferentTarget: 'KB میں دوسرا ٹارگٹ چاہیے؟', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    allowDownscale: 'اگر صرف کوالٹی کم کرنے سے {target} میں نہیں آتا تو ذہین ڈائمینشن اسکیلنگ کی اجازت دیں', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'بڑے PNG کو خودکار طور پر WebP/JPG میں تبدیل کریں جب lossless PNG صاف طور پر {target} تک نہ پہنچ سکے', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'شفاف PNG کے لیے میٹ رنگ:', // 'Transparent PNG matte color:'
    losslessPngTitle: 'Lossless PNG منتخب کیا گیا:', // 'Lossless PNG selected:'
    losslessPngNote: 'PNG کوالٹی سلائیڈرز کو نظر انداز کرتا ہے، اس لیے سائز کم کرنا صرف پکسل ڈائمینشن چھوٹے کرنے پر منحصر ہے۔ بڑی تصاویر کے لیے JPG یا WebP منتخب کریں تاکہ صاف رہتے ہوئے KB کی سخت حدوں تک پہنچ سکیں۔', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: '{target} تک کمپریس کریں', // 'Compress to {targetLabel}'
    optimizing: 'آپٹیمائز ہو رہا ہے…', // 'Optimizing...'
    clear: 'صاف کریں', // 'Clear'
    targetSummary: 'ٹارگٹ کمپریشن کا خلاصہ · ہدف ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{total} {images} میں سے {achieved} نے {target} کا ہدف پورا کیا', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'تصویر', // 'image'
    imagePlural: 'تصاویر', // 'images'
    summaryMissed: '· {missed} ایمانداری سے نہیں آ سکیں (تفصیل نیچے)', // '· {missed} could not honestly fit (details below)'
    totalSaved: 'کل بچت: {saved}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(بڑھ گیا {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    underTarget: '{target} سے نیچے ({size})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'ہدف پورا نہیں ہوا — {size}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'اصل', // 'Original'
    columnOutput: 'آؤٹ پٹ', // 'Output'
    columnSpaceSaved: 'بچائی گئی جگہ', // 'Space Saved'
    columnReduction: 'کمی', // 'Reduction'
    columnSizeChange: 'سائز میں تبدیلی', // 'Size Change'
    grewBy: '{amount} بڑھ گیا: دوبارہ انکوڈنگ اصل سے بڑی ہے۔', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'تصویر جیسے PNG کے لیے WebP یا JPG عام طور پر چھوٹا ہوتا ہے۔', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'اصل رکھیں', // 'Keep original'
    keptOriginalNote: 'اصل فائل رکھی گئی کیونکہ دوبارہ انکوڈنگ نے اسے بڑا کر دیا تھا۔', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'اصل فائل پہلے ہی {target} سے نیچے تھی؛ {quality}% کوالٹی پر صاف ایکسپورٹ ہو گئی۔', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'مکمل {width}×{height} px ریزولوشن پر ہدف پورا ہو گیا ({quality})۔', // 'Target met at full {width}×{height}px resolution ({quality}% quality / lossless PNG).'
    statusMetScaled: '{width}×{height} px ({scale}% اسکیل) پر اسکیل کر کے ہدف پورا ہو گیا۔', // 'Target met by scaling to {width}×{height}px ({scale}% scale).'
    statusCannotPng: 'Lossless PNG سے {target} تک نہیں پہنچا جا سکتا (کم از کم ممکن: {size})۔', // 'Cannot reach {target} with lossless PNG (smallest achievable: {size}).'
    statusCannotFull: 'مکمل {width}×{height} px ڈائمینشن پر {target} تک نہیں پہنچا جا سکتا (کم از کم کوالٹی سائز {size} ہے)۔', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {size}).'
    statusCannotCleanly: '{target} کا ہدف صاف طور پر پورا نہیں ہو سکا۔ سب سے چھوٹا ایماندارانہ انکوڈ شدہ آؤٹ پٹ {size} ہے۔', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {size}.'
    switchedFormatNote: 'Lossless PNG خودکار طور پر {format} میں تبدیل کر دیا گیا۔', // 'Auto-converted lossless PNG to {format}.'
    errorTargetFailed: 'ٹارگٹ کمپریشن میں خرابی۔', // 'Target compression failed.'
    errorCorruptedFile: 'خراب یا ناقابلِ خواندگی امیج فائل۔', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'ٹارگٹ کمپریشن ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'کمپریس شدہ ({size})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'بلک ری سائز کے لیے کئی تصاویر چھوڑیں', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'بلک ری سائز حکمتِ عملی', // 'Batch Resize Strategy'
    strategyBounding: 'زیادہ سے زیادہ چوڑائی × اونچائی میں فٹ کریں', // 'Fit Max W × H'
    strategyWidth: 'یکساں چوڑائی', // 'Uniform Width'
    strategyExact: 'بالکل چوڑائی × اونچائی', // 'Exact W × H'
    strategyPercentage: 'فیصد (%)', // 'Percentage (%)'
    outputFormat: 'آؤٹ پٹ فارمیٹ', // 'Output Format'
    formatOriginal: 'اصل', // 'Original' — same in Spanish
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'تمام تصاویر اسکیل کریں:', // 'Scale All Images:'
    maxWidth: 'زیادہ سے زیادہ چوڑائی (px)', // 'Max Width (px)'
    targetWidth: 'ٹارگٹ چوڑائی (px)', // 'Target Width (px)'
    exactWidth: 'بالکل چوڑائی (px)', // 'Exact Width (px)'
    maxHeight: 'زیادہ سے زیادہ اونچائی (px)', // 'Max Height (px)'
    exactHeight: 'بالکل اونچائی (px)', // 'Exact Height (px)'
    doNotEnlarge: 'چھوٹی تصاویر بڑی نہ کریں', // 'Do not enlarge smaller images'
    fitMode: 'فٹ موڈ', // 'Fit Mode'
    fitContain: 'کنٹین', // 'Contain'
    fitCover: 'کور', // 'Cover'
    fitStretch: 'کھینچیں', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'بلاگ 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'ای کامرس 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'تھمب نیل 600px', // 'Thumbnail 600px'
    quality: 'کوالٹی:', // 'Quality:'
    matteBg: 'میٹ بی جی:', // 'Matte BG:'
    resizingProgress: 'ری سائز ہو رہا ہے ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'بلک ری سائز ({count})', // 'Bulk Resize ({items.length})'
    clear: 'صاف کریں', // 'Clear'
    bulkResizeComplete: 'بلک ری سائز مکمل', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} تصویر ری سائز ہو کر تیار ہے', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} تصاویر ری سائز ہو کر تیار ہیں', // '{count} images resized and ready'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'بلک ری سائز میں خرابی۔', // 'Batch resize failed.'
    errorCorruptedFile: 'خراب یا ناقابلِ خواندگی امیج فائل۔', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'بلک ری سائز کا موازنہ', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'ری سائز شدہ (بعد میں)', // 'Resized (After)'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'بلک فارمیٹ تبدیلی کے لیے کئی تصاویر چھوڑیں', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'بیچ کو اس فارمیٹ میں تبدیل کریں', // 'Convert Batch To Format'
    formatWebp: 'WebP (ویب کے لیے سب سے ہلکا)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (ہر جگہ چلتا ہے)', // 'JPG (Universal)'
    formatPng: 'PNG (lossless اور شفافیت کے ساتھ)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'اختیاری فائل نام لاحقہ', // 'Optional Filename Suffix'
    placeholderSuffix: 'مثلاً _web', // placeholder 'e.g. _web'
    transparentFill: 'شفاف بھرائی', // 'Transparent Fill'
    qualityLosslessPng: 'کوالٹی (Lossless PNG)', // 'Quality (Lossless PNG)'
    qualityPercent: 'کوالٹی ({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: 'تبدیل ہو رہا ہے ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'سب تبدیل کریں ({count})', // 'Convert All ({items.length})'
    clear: 'صاف کریں', // 'Clear'
    bulkConversionSummary: 'بلک تبدیلی کا خلاصہ', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} فائلیں {format} میں تبدیل ہو گئیں · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    convertedTo: '{ext} میں تبدیل ہو گئی', // 'Converted to {ext}'
    errorConversionFailed: 'بلک تبدیلی میں خرابی۔', // 'Batch conversion failed.'
    errorUnsupportedFile: 'سپورٹ نہ ہونے والی یا خراب امیج فائل۔', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'بلک فارمیٹ تبدیلی', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'تبدیل شدہ (بعد میں)', // 'Converted (After)'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Core Web Vitals کے لیے آپٹیمائز کرنے کے لیے ویب اثاثے چھوڑیں', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'ویب پرفارمنس پری سیٹس', // 'Web Performance Presets'
    presetHero: 'ہیرو / بینر', // 'Hero / Banner'
    presetHeroDesc: 'زیادہ سے زیادہ 1600 px · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: 'ای کامرس پروڈکٹ', // 'E-Commerce Product'
    presetProductDesc: 'زیادہ سے زیادہ 1200 px · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: 'کارڈ / تھمب نیل', // 'Card / Thumbnail'
    presetThumbDesc: 'زیادہ سے زیادہ 640 px · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: 'سوشل OG / ای میل', // 'Social OG / Email'
    presetOgDesc: 'زیادہ سے زیادہ 1200 px · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'Retina 2× گرافک', // 'Retina 2× Graphic'
    presetRetinaDesc: 'زیادہ سے زیادہ 1920 px · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: 'ویب فارمیٹ', // 'Web Format'
    maxDimension: 'زیادہ سے زیادہ ڈائمینشن (لمبا کنارہ)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'اصل ڈائمینشن برقرار رکھیں', // 'Keep Original Dimensions'
    max1920: 'زیادہ سے زیادہ 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'زیادہ سے زیادہ 1600 px (ہیرو / بینر)', // 'Max 1600px (Hero / Banner)'
    max1200: 'زیادہ سے زیادہ 1200 px (بلاگ / پروڈکٹ)', // 'Max 1200px (Blog / Product)'
    max800: 'زیادہ سے زیادہ 800 px (مواد کے اندر)', // 'Max 800px (In-Content)'
    max640: 'زیادہ سے زیادہ 640 px (تھمب نیلز)', // 'Max 640px (Thumbnails)'
    quality: 'کوالٹی:', // 'Quality:'
    onlyDownscale: 'صرف بڑی تصاویر چھوٹی کریں (EXIF اور GPS میٹا ڈیٹا خودکار طور پر ہٹا دیا جاتا ہے)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'آپٹیمائز ہو رہا ہے…', // 'Optimizing...'
    optimizeForWeb: 'ویب کے لیے آپٹیمائز کریں ({count})', // 'Optimize for Web ({items.length})'
    clear: 'صاف کریں', // 'Clear'
    webPerformanceSummary: 'ویب پرفارمنس کا خلاصہ', // 'Web Performance Summary'
    pageWeightSaved: '({percent}% ہلکا · {saved} صفحہ وزن بچا)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · بڑھ گیا {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    webReady: 'ویب کے لیے تیار ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: '{amount} بڑھ گیا ({percent})', // 'Grew by {amount} ({formatPercent})'
    copyImg: '<img> کاپی کریں', // 'Copy <img>'
    copiedHtml: 'HTML کاپی ہو گیا', // 'Copied HTML'
    copyImgTitle: 'چوڑائی اور اونچائی کے ساتھ ریسپانسیو HTML img ٹیگ کاپی کریں', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'ویب آپٹیمائزیشن میں خرابی۔', // 'Web optimization failed.'
    errorCorruptedFile: 'خراب یا سپورٹ نہ ہونے والی تصویر۔', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'ویب آپٹیمائزیشن کا موازنہ', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'ویب کے لیے تیار (بعد میں)', // 'Web-Ready (After)'
    compare: 'موازنہ کریں', // 'Compare'
    download: 'ڈاؤن لوڈ کریں', // 'Download'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'کمپریس کرنے کے لیے اینیمیٹڈ GIF چھوڑیں', // 'Drop an animated GIF to compress'
    decodingGif: 'آپ کے براؤزر میں مقامی طور پر اینیمیٹڈ GIF کے فریم ڈی کوڈ ہو رہے ہیں…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'فریم', // 'frame'
    framePlural: 'فریمز', // 'frames'
    presetLight: 'ہلکا', // 'Light'
    presetBalanced: 'متوازن', // 'Balanced'
    presetMaxShrink: 'زیادہ سے زیادہ کمی', // 'Max Shrink'
    colorPaletteLimit: 'کلر پیلیٹ کی حد', // 'Color Palette Limit'
    colorsCount: '{count} رنگ', // '{maxColors} colors'
    outputScale: 'آؤٹ پٹ اسکیل', // 'Output Scale'
    scaleWithDims: '{percent}% ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'فریم ریٹ آپٹیمائزیشن', // 'Frame Rate Optimization'
    keepAllFrames: 'تمام فریم رکھیں', // 'Keep All Frames'
    dropEvery2nd: 'ہر دوسرا فریم ہٹائیں (~50% چھوٹا)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'ہر 3 میں سے 1 فریم رکھیں', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'GIF کمپریس ہو رہا ہے ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'GIF کمپریس کریں', // 'Compress GIF'
    reset: 'ری سیٹ کریں', // 'Reset'
    originalGif: 'اصل GIF', // 'Original GIF'
    compressedGif: 'کمپریس شدہ GIF', // 'Compressed GIF'
    sizeChange: 'سائز میں تبدیلی', // 'Size Change'
    sizeAndFrames: '{size} · {frames}f', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'کمپریس شدہ GIF ڈاؤن لوڈ کریں', // 'Download Compressed GIF'
    notSmallerNotice: 'یہ اصل GIF پہلے ہی بہت آپٹیمائز تھا یا ان پٹ سے بڑی مکمل فریم پیلیٹ استعمال کرتا ہے۔ اسے {size} سے نیچے لانے کے لیے کلر پیلیٹ 32–64 رنگوں تک کم کریں، آؤٹ پٹ اسکیل 75% یا 50% تک کم کریں، یا ہر دوسرا فریم ہٹائیں۔', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'آپ کے براؤزر میں صاف طور پر {percent}% ({saved} بچائے گئے) کمپریس ہو گیا۔', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'اصل ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'کمپریس شدہ ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'اصل GIF', // alt 'Original GIF'
    altCompressedGif: 'کمپریس شدہ GIF', // alt 'Compressed GIF'
    errorGifFailed: 'GIF کمپریشن میں خرابی۔', // 'GIF compression failed.'
    errorDecodeFrames: 'GIF کے فریم ڈی کوڈ نہیں ہو سکے۔', // 'Could not decode GIF frames.'
    errorTooSmall: 'فائل درست GIF ہونے کے لیے بہت چھوٹی ہے۔', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'منتخب فائل درست GIF87a یا GIF89a اینیمیشن نہیں ہے۔', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIF کے کینوس ڈائمینشن 0×0 غلط ہیں۔', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'GIF کی گلوبل کلر ٹیبل کٹی ہوئی ہے۔', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'اس GIF فائل سے کوئی امیج فریم ڈی کوڈ نہیں ہو سکا۔', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: '2D کینوس کانٹیکسٹ شروع نہیں ہو سکا۔', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'JPG میں تبدیل کرنے کے لیے iPhone کی HEIC یا HEIF تصاویر چھوڑیں', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Apple کی HEIC اور HEIF تصاویر آپ کے براؤزر کے اندر مقامی طور پر کلائنٹ سائیڈ WebAssembly (heic2any) سے ڈی کوڈ کرتا ہے — آپ کی تصاویر کبھی آپ کے ڈیوائس سے باہر نہیں جاتیں۔', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    outputQuality: 'JPG آؤٹ پٹ کوالٹی', // 'JPG Output Quality'
    smallerFile: 'چھوٹی فائل (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'زیادہ سے زیادہ تفصیل (100%)', // 'Max detail (100%)'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    clear: 'صاف کریں', // 'Clear'
    batchSummary: 'HEIC → JPG بیچ کا خلاصہ', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} تبدیل ہو گئیں · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    columnChange: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'JPG ڈاؤن لوڈ کریں', // 'Download JPG'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'یہ HEIC/HEIF فائل ڈی کوڈ نہیں ہو سکی۔ یقینی بنائیں کہ یہ iPhone یا Apple کی درست HEIC تصویر ہے۔', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: '”{filename}“ ڈی کوڈ نہیں ہو سکی۔ تصدیق کریں کہ یہ درست HEIC تصویر ہے۔', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: '{name} JPG میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'Lossless PNG میں تبدیل کرنے کے لیے JPG یا JPEG تصاویر چھوڑیں', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Lossless PNG آؤٹ پٹ', // 'Lossless PNG Output'
    losslessPngEncoding: 'Lossless PNG انکوڈنگ', // 'Lossless PNG Encoding'
    losslessPngNote: 'PNG تیز کناروں، ٹیکسٹ اور الفا شفافیت کو بغیر کسی lossy کمپریشن خرابی کے محفوظ رکھتا ہے۔', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    clear: 'صاف کریں', // 'Clear'
    batchSummary: 'JPG → PNG بیچ کا خلاصہ', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} تبدیل ہو گئیں · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    columnChange: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'PNG ڈاؤن لوڈ کریں', // 'Download PNG'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    errorDecodeFile: '”{filename}“ ڈی کوڈ نہیں ہو سکی۔ تصدیق کریں کہ یہ درست JPG تصویر ہے۔', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: '{name} PNG میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'چھوٹے JPG میں تبدیل کرنے کے لیے PNG فائلیں چھوڑیں', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    outputQuality: 'JPG آؤٹ پٹ کوالٹی', // 'JPG Output Quality'
    smallerFile: 'چھوٹی فائل (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'زیادہ سے زیادہ تفصیل (100%)', // 'Max detail (100%)'
    transparentMatteColor: 'شفاف بیک گراؤنڈ کے لیے میٹ رنگ', // 'Transparent Background Matte Color'
    matteWhite: 'سفید', // 'White'
    matteBlack: 'سیاہ', // 'Black'
    matteLightGray: 'ہلکا سرمئی', // 'Light Gray'
    matteNote: 'JPG شفافیت سپورٹ نہیں کرتا؛ شفاف علاقے اس رنگ سے صاف بھر دیے جاتے ہیں۔', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    clear: 'صاف کریں', // 'Clear'
    batchSummary: 'PNG → JPG بیچ کا خلاصہ', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} تبدیل ہو گئیں · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    columnChange: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'JPG ڈاؤن لوڈ کریں', // 'Download JPG'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    errorDecodeFile: '”{filename}“ ڈی کوڈ نہیں ہو سکی۔ تصدیق کریں کہ یہ درست PNG تصویر ہے۔', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: '{name} JPG میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'ہلکے WebP میں تبدیل کرنے کے لیے JPG تصاویر چھوڑیں', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP آؤٹ پٹ کوالٹی', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP آؤٹ پٹ کوالٹی', // aria-label 'WebP output quality'
    smallerFile: 'چھوٹی فائل (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'زیادہ سے زیادہ تفصیل (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} بیچ کا خلاصہ', // '{source} → {target} Batch Summary'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    filesConvertedSuffix: 'تبدیل ہو گئیں', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'WebP ڈاؤن لوڈ کریں', // 'Download WebP'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    clear: 'صاف کریں', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} WebP میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '”{name}“ ڈی کوڈ نہیں ہو سکی۔ تصدیق کریں کہ یہ درست JPG تصویر ہے۔', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'ہر جگہ چلنے والے JPG میں تبدیل کرنے کے لیے WebP تصاویر چھوڑیں', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG آؤٹ پٹ کوالٹی', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG آؤٹ پٹ کوالٹی', // aria-label 'JPG output quality'
    smallerFile: 'چھوٹی فائل (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'زیادہ سے زیادہ تفصیل (100%)', // 'Max detail (100%)'
    matteColorLabel: 'شفاف بیک گراؤنڈ کے لیے میٹ رنگ', // 'Transparent Background Matte Color'
    matteAriaLabel: 'میٹ بیک گراؤنڈ رنگ', // aria-label 'Matte background color'
    matteWhite: 'سفید', // 'White'
    matteBlack: 'سیاہ', // 'Black'
    matteLightGray: 'ہلکا سرمئی', // 'Light Gray'
    matteHint: 'JPG شفافیت سپورٹ نہیں کرتا؛ شفاف علاقے اس رنگ سے صاف بھر دیے جاتے ہیں۔', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} بیچ کا خلاصہ', // '{source} → {target} Batch Summary'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    filesConvertedSuffix: 'تبدیل ہو گئیں', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'JPG ڈاؤن لوڈ کریں', // 'Download JPG'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    clear: 'صاف کریں', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '”{name}“ ڈی کوڈ نہیں ہو سکی۔ تصدیق کریں کہ یہ درست WebP تصویر ہے۔', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'شفاف WebP میں تبدیل کرنے کے لیے PNG فائلیں چھوڑیں', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP آؤٹ پٹ کوالٹی', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP آؤٹ پٹ کوالٹی', // aria-label 'WebP output quality'
    smallerFile: 'چھوٹی فائل (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'زیادہ سے زیادہ تفصیل (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} بیچ کا خلاصہ', // '{source} → {target} Batch Summary'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    filesConvertedSuffix: 'تبدیل ہو گئیں', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'WebP ڈاؤن لوڈ کریں', // 'Download WebP'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    clear: 'صاف کریں', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} WebP میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '”{name}“ ڈی کوڈ نہیں ہو سکی۔ تصدیق کریں کہ یہ درست PNG تصویر ہے۔', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'Lossless PNG میں تبدیل کرنے کے لیے WebP فائلیں چھوڑیں', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Lossless PNG آؤٹ پٹ', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Lossless PNG انکوڈنگ', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG تیز کناروں، ٹیکسٹ اور الفا شفافیت کو بغیر کسی lossy کمپریشن خرابی کے محفوظ رکھتا ہے۔', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: '{source} → {target} بیچ کا خلاصہ', // '{source} → {target} Batch Summary'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    filesConvertedSuffix: 'تبدیل ہو گئیں', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'PNG ڈاؤن لوڈ کریں', // 'Download PNG'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    clear: 'صاف کریں', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} PNG میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '”{name}“ ڈی کوڈ نہیں ہو سکی۔ تصدیق کریں کہ یہ درست WebP تصویر ہے۔', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'PNG میں تبدیل کرنے کے لیے SVG ویکٹر فائلیں چھوڑیں', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'HTML5 Canvas سے ان لائن SVG گرافکس مقامی طور پر راسٹرائز کرتا ہے اور شفاف بیک گراؤنڈ برقرار رکھتا ہے۔ حد: SVG کے اندر موجود بیرونی <image> URLs، بیرونی CSS اسٹائل شیٹس/ویب فونٹس، یا اسکرپٹس اسٹینڈ الون Canvas ایکسپورٹ میں نہیں دکھائی دے سکتے۔', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Lossless PNG آؤٹ پٹ', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Lossless PNG انکوڈنگ', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG تیز کناروں، ٹیکسٹ اور الفا شفافیت کو بغیر کسی lossy کمپریشن خرابی کے محفوظ رکھتا ہے۔', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'راسٹر ایکسپورٹ اسکیل', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG کے اندرونی ڈائمینشن پر لگایا جانے والا ضرب (زیادہ سے زیادہ 8000 px)۔ اسکیل بدلنے کے بعد سب دوبارہ تبدیل کریں پر کلک کریں۔', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: '{source} → {target} بیچ کا خلاصہ', // '{source} → {target} Batch Summary'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    filesConvertedSuffix: 'تبدیل ہو گئیں', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'PNG ڈاؤن لوڈ کریں', // 'Download PNG'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    clear: 'صاف کریں', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} PNG میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'یہ SVG راسٹرائز نہیں ہو سکا۔ یقینی بنائیں کہ فائل بغیر کسی نحو کی غلطی کے درست XML SVG مارک اپ ہے۔', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'ہر جگہ چلنے والے JPG میں تبدیل کرنے کے لیے AVIF تصاویر چھوڑیں', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'آپ کے براؤزر کے نیٹو AVIF ڈی کوڈر سے AVIF تصاویر مقامی طور پر ڈی کوڈ کرتا ہے (جدید Chrome، Edge، Firefox اور Safari میں سپورٹ ہے) اور معیاری JPG فائلیں ایکسپورٹ کرتا ہے۔', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG آؤٹ پٹ کوالٹی', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG آؤٹ پٹ کوالٹی', // aria-label 'JPG output quality'
    smallerFile: 'چھوٹی فائل (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'زیادہ سے زیادہ تفصیل (100%)', // 'Max detail (100%)'
    matteColorLabel: 'شفاف بیک گراؤنڈ کے لیے میٹ رنگ', // 'Transparent Background Matte Color'
    matteAriaLabel: 'میٹ بیک گراؤنڈ رنگ', // aria-label 'Matte background color'
    matteWhite: 'سفید', // 'White'
    matteBlack: 'سیاہ', // 'Black'
    matteLightGray: 'ہلکا سرمئی', // 'Light Gray'
    matteHint: 'JPG شفافیت سپورٹ نہیں کرتا؛ شفاف علاقے اس رنگ سے صاف بھر دیے جاتے ہیں۔', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} بیچ کا خلاصہ', // '{source} → {target} Batch Summary'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    filesConvertedSuffix: 'تبدیل ہو گئیں', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'JPG ڈاؤن لوڈ کریں', // 'Download JPG'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    clear: 'صاف کریں', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'آپ کا براؤزر یہ AVIF تصویر ڈی کوڈ نہیں کر سکا۔ تصدیق کریں کہ فائل درست .avif تصویر ہے اور جدید Chrome، Firefox، Edge یا Safari براؤزر آزمائیں۔', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'کمپیکٹ JPG میں تبدیل کرنے کے لیے بغیر کمپریشن والے BMP بٹ میپس چھوڑیں', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'تبدیلی کا عمل:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG آؤٹ پٹ کوالٹی', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG آؤٹ پٹ کوالٹی', // aria-label 'JPG output quality'
    smallerFile: 'چھوٹی فائل (20%)', // 'Smaller file (20%)'
    balanced: 'متوازن (85%)', // 'Balanced (85%)'
    maxDetail: 'زیادہ سے زیادہ تفصیل (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} بیچ کا خلاصہ', // '{source} → {target} Batch Summary'
    fileSingular: 'فائل', // 'file'
    filePlural: 'فائلیں', // 'files'
    filesConvertedSuffix: 'تبدیل ہو گئیں', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP بن رہا ہے…', // 'Creating ZIP...'
    downloadAllZip: 'سب ڈاؤن لوڈ کریں (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'تبدیلی', // 'Change'
    compare: 'موازنہ کریں', // 'Compare'
    downloadTarget: 'JPG ڈاؤن لوڈ کریں', // 'Download JPG'
    removeImage: '{name} ہٹائیں', // aria-label `Remove ${item.name}`
    converting: 'تبدیل ہو رہا ہے…', // 'Converting...'
    reconvertAll: 'سب دوبارہ تبدیل کریں', // 'Re-convert All'
    clear: 'صاف کریں', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG میں تبدیل نہیں ہو سکی۔', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '”{name}“ ڈی کوڈ نہیں ہو سکی۔ تصدیق کریں کہ یہ درست BMP تصویر ہے۔', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
} as const;
