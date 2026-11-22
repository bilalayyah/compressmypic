import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideFormatsPageUrProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'CompressMyPic کھولیں',
    text: 'اپنے براؤزر میں compressmypic.online پر جائیں۔ انسٹال کرنے کو کچھ نہیں، اکاؤنٹ بنانے کی ضرورت نہیں، اور کوئی فائل کبھی کسی سرور پر اپ لوڈ نہیں ہوتی۔',
  },
  {
    title: 'اپنی تصویر اپ لوڈ کریں',
    text: 'اپنی تصویر ڈریگ کر کے چھوڑیں یا منتخب کرنے کے لیے «فائلیں منتخب کریں» پر ٹیپ کریں۔ JPG، PNG اور WebP فائلیں سب معاون ہیں، فی تصویر 20 MB تک۔',
  },
  {
    title: 'فیصلہ کریں: فارمیٹ رکھیں یا تبدیل کریں',
    text: 'اپنی تصویر کا موجودہ فارمیٹ رکھنے کے لیے «اصل» منتخب کریں، یا آؤٹ پٹ کے طور پر JPG، PNG یا WebP چنیں۔ فیصلے کے لیے نیچے دی گئی گائیڈ استعمال کریں: تصویروں کے لیے JPG، شفافیت چاہیے تو PNG، ویب سائٹ کے لیے سب سے چھوٹی فائل چاہیے تو WebP۔',
  },
  {
    title: 'کوالٹی پری سیٹ چنیں',
    text: 'متوازن پری سیٹ (تقریباً 70%) سے شروع کریں۔ ایسی تصویر کے لیے جسے آپ بالکل درست رکھنا چاہتے ہیں، High پری سیٹ یا 85–90% کوالٹی استعمال کریں۔ چھوٹی ویب تصویر کے لیے کم سیٹنگ ٹھیک ہے۔',
  },
  {
    title: 'لائیو سائز دیکھیں اور موازنہ کریں',
    text: 'ہر تصویر اپنا اصل سائز اور نیا کمپریس شدہ سائز دکھاتی ہے۔ پہلے اور بعد کا موازنہ کھولیں اور زوم کریں — اگر آپ کو کوئی فرق نظر نہیں آتا، تو سیٹنگ درست ہے۔ آؤٹ پٹ فارمیٹ کو WebP میں تبدیل کر کے آزمائیں اور دیکھیں کہ فائل کتنی چھوٹی ہو جاتی ہے۔',
  },
  {
    title: 'اپنی تصویر ڈاؤن لوڈ کریں',
    text: 'ایک تصویر ڈاؤن لوڈ کریں، یا جب آپ نے ایک ساتھ کئی تصویریں تبدیل کی ہوں تو «سب کچھ ڈاؤن لوڈ کریں (ZIP)» استعمال کریں۔ آپ کی اصل فائل کبھی تبدیل نہیں ہوتی — آپ کو ایک نئی، چھوٹی کاپی ملتی ہے۔',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'JPG اور PNG میں کیا فرق ہے؟',
    answer: 'JPG تصویروں کے لیے بنایا گیا ایک لاسی فارمیٹ ہے: یہ بہت چھوٹی فائلیں بنانے کے لیے کچھ تفصیل پھینک دیتا ہے، اور یہ شفافیت نہیں کر سکتا۔ PNG لاس لیس ہے اور شفافیت کو سپورٹ کرتا ہے، اس لیے یہ لوگو اور گرافکس کے لیے بہترین ہے — لیکن PNG تصویریں اسی تصویر کے JPG سے کئی گنا بڑی ہوتی ہیں۔',
  },
  {
    id: 'fmt-faq-2',
    question: 'کیا WebP JPG سے بہتر ہے؟',
    answer: 'فائل سائز کے لحاظ سے، جی ہاں — WebP عام طور پر اسی معیار پر JPG سے 25–35% چھوٹا ہوتا ہے، اور یہ شفافیت کو بھی سپورٹ کرتا ہے۔ WebP کے بجائے JPG چننے کی واحد وجہ مطابقت ہے: کچھ پرانے سافٹ ویئر اور ایپس ابھی بھی JPG کو بہتر سنبھالتی ہیں، اور WhatsApp JPG تصویروں کا پری ویو زیادہ قابلِ اعتماد طریقے سے دکھاتا ہے۔',
  },
  {
    id: 'fmt-faq-3',
    question: 'کیا WebP PNG سے بہتر ہے؟',
    answer: 'عام طور پر، جی ہاں۔ WebP PNG کی طرح شفافیت کو سپورٹ کرتا ہے لیکن بہت چھوٹی فائلیں بناتا ہے، اور یہ JPG کی طرح لاسی کمپریشن بھی کر سکتا ہے۔ PNG ابھی بھی محفوظ انتخاب ہے جب آپ کو کسی لوگو یا گرافک کے لیے بالکل درست، لاس لیس معیار چاہیے جسے بعد میں دوبارہ ایڈٹ کیا جائے گا۔',
  },
  {
    id: 'fmt-faq-4',
    question: 'کیا PNG شفافیت کو سپورٹ کرتا ہے اور JPG نہیں؟',
    answer: 'درست۔ PNG شفاف پس منظر (الفا چینل) کو سپورٹ کرتا ہے، یہی وجہ ہے کہ لوگو اور آئیکنز عام طور پر PNG ہوتے ہیں۔ JPG میں شفافیت بالکل نہیں ہوتی — JPG میں کوئی بھی شفاف حصہ ٹھوس رنگ بن جاتا ہے، عام طور پر سفید، اس لیے شفاف پس منظر والے لوگو کو کبھی JPG کے طور پر محفوظ نہ کریں۔',
  },
  {
    id: 'fmt-faq-5',
    question: 'PNG فائلیں JPG سے اتنی بڑی کیوں ہوتی ہیں؟',
    answer: 'کیونکہ PNG لاس لیس ہے: یہ تفصیل کے ہر ایک پکسل کو بالکل ویسے ہی رکھتا ہے، جبکہ JPG وہ تفصیل پھینک دیتا ہے جسے آنکھ مشکل سے دیکھتی ہے۔ PNG کے طور پر محفوظ کیمرہ تصویر اسی تصویر کے JPG سے 5–10 گنا بڑی ہو سکتی ہے۔ یہی وجہ ہے کہ تصویریں تقریباً کبھی PNG نہیں ہونی چاہئیں۔',
  },
  {
    id: 'fmt-faq-6',
    question: 'مجھے WebP کے بجائے JPG کب استعمال کرنا چاہیے؟',
    answer: 'JPG اس وقت استعمال کریں جب تصویر پرانے سافٹ ویئر میں کھلنی ہو، WhatsApp یا ای میل پر بھیجی جائے جہاں آپ کو یقینی پری ویو چاہیے، یا پرنٹ کرنی ہو۔ WebP ویب سائٹس کے لیے بہتر ہے، لیکن کسی کے ساتھ تصویر شیئر کرنے کے لیے JPG ابھی بھی سب سے عالمگیر فارمیٹ ہے۔',
  },
  {
    id: 'fmt-faq-7',
    question: 'کیا میں PNG کو JPG میں تبدیل کر سکتا ہوں؟',
    answer: 'جی ہاں۔ PNG کو CompressMyPic پر اپ لوڈ کریں، آؤٹ پٹ فارمیٹ کے طور پر JPG منتخب کریں، اور اسے ڈاؤن لوڈ کریں۔ بس یاد رکھیں کہ JPG میں شفافیت نہیں ہوتی: اگر آپ کے PNG کا پس منظر شفاف ہے، تو پہلے پس منظر کا رنگ چنیں، کیونکہ ورنہ شفاف حصہ ٹھوس سفید بن جائے گا۔',
  },
  {
    id: 'fmt-faq-8',
    question: 'کیا میں JPG کو WebP میں تبدیل کر سکتا ہوں؟',
    answer: 'جی ہاں۔ JPG اپ لوڈ کریں، آؤٹ پٹ کے طور پر WebP منتخب کریں، اور اسے ڈاؤن لوڈ کریں — اسی نظر آنے والے معیار پر فائل عام طور پر 25–35% چھوٹی ہو جائے گی۔ آپ کئی JPGs کو ایک ساتھ WebP میں تبدیل کر سکتے ہیں اور انہیں ZIP کے طور پر ایک ساتھ ڈاؤن لوڈ کر سکتے ہیں۔',
  },
  {
    id: 'fmt-faq-9',
    question: 'کیا JPG کو PNG میں تبدیل کرنے سے معیار بہتر ہوتا ہے؟',
    answer: 'نہیں۔ JPG کو PNG میں تبدیل کرنے سے وہ تفصیل واپس نہیں آ سکتی جو JPG کمپریشن پہلے ہی پھینک چکا ہے — یہ صرف فائل کو بہت بڑا بنا دیتا ہے۔ JPG کو PNG میں تبدیل کرنے کی واحد اچھی وجہ یہ ہے کہ اگر آپ کو تصویر کو مزید معیار کھوئے بغیر دوبارہ ایڈٹ کرنا ہو۔',
  },
  {
    id: 'fmt-faq-10',
    question: 'ویب سائٹ کے لیے مجھے کون سا فارمیٹ استعمال کرنا چاہیے؟',
    answer: 'پہلے WebP، اور متبادل کے طور پر JPG۔ WebP آپ کو سب سے چھوٹی فائلیں دیتا ہے، جس سے صفحات تیزی سے لوڈ ہوتے ہیں — اور صفحے کی رفتار وزیٹرز اور Google دونوں کے لیے اہم ہے۔ PNG صرف ان تصویروں کے لیے استعمال کریں جنہیں شفافیت کی ضرورت ہو، جیسے لوگو، اور JPG تصویروں کے لیے اگر آپ WebP استعمال نہیں کر سکتے۔',
  },
  {
    id: 'fmt-faq-11',
    question: 'لوگو کے لیے بہترین فارمیٹ کون سا ہے؟',
    answer: 'PNG اگر لوگو کو شفاف پس منظر کی ضرورت ہو، کیونکہ JPG شفافیت نہیں کر سکتا۔ WebP بھی شفافیت کو سپورٹ کرتا ہے اور چھوٹی فائل بناتا ہے، اس لیے یہ ویب سائٹ پر لوگو کے لیے اچھا انتخاب ہے۔ لوگو کو کبھی JPG کے طور پر محفوظ نہ کریں اگر پس منظر کو شفاف رہنا ضروری ہے۔',
  },
  {
    id: 'fmt-faq-12',
    question: 'اسکرین شاٹس کے لیے بہترین فارمیٹ کون سا ہے؟',
    answer: 'PNG یا WebP۔ اسکرین شاٹس میں تیز کنارے اور چپٹے رنگ ہوتے ہیں، جنہیں PNG اور WebP اچھی طرح سنبھالتے ہیں۔ JPG تیز متن کے کناروں کو دھندلا کر دیتا ہے۔ سب سے چھوٹی اسکرین شاٹ فائل کے لیے CompressMyPic میں WebP آؤٹ پٹ آزمائیں — یہ عام طور پر PNG سے بہت چھوٹا ہوتا ہے اور کوئی نظر آنے والا فرق نہیں ہوتا۔',
  },
  {
    id: 'fmt-faq-13',
    question: 'کیا اب تمام براؤزرز WebP کو سپورٹ کرتے ہیں؟',
    answer: 'جی ہاں، عملی طور پر سب۔ Chrome، Edge، Firefox، Safari اور تمام جدید موبائل براؤزرز برسوں سے WebP کو سپورٹ کرتے ہیں۔ صرف بہت پرانے براؤزرز اور کچھ پرانی ایپس WebP نہیں کھول سکتیں، اور یہی واحد وجہ ہے کہ JPG ابھی بھی مفید ہے۔',
  },
  {
    id: 'fmt-faq-14',
    question: 'کیا WhatsApp یا Instagram WebP قبول کرتے ہیں؟',
    answer: 'WhatsApp WebP فائلیں وصول کر سکتا ہے، لیکن وہ عام تصویر کے طور پر پری ویو نہیں ہو سکتیں، اس لیے وہاں تصویریں شیئر کرنے کے لیے JPG محفوظ ہے۔ Instagram پوسٹس کے لیے JPG اور PNG قبول کرتا ہے اور اپ لوڈز کو خود تبدیل کر لیتا ہے۔ سوشل میڈیا پر شیئر کرنے کے لیے، تصویروں کے لیے JPG پر قائم رہیں۔',
  },
  {
    id: 'fmt-faq-15',
    question: 'کیا کسی تصویر کو WebP میں تبدیل کرنے سے معیار کم ہو جائے گا؟',
    answer: 'صرف اتنا جتنا آپ چنیں۔ WebP JPG جیسا ہی خیال استعمال کرتا ہے — ایک کوالٹی سیٹنگ جو چھوٹی فائل کے بدلے تھوڑی تفصیل قربان کرتی ہے۔ 80–90% کوالٹی پر، WebP تصویر اصل JPG جیسی ہی نظر آتی ہے، اور فائل تقریباً ایک تہائی چھوٹی ہوتی ہے۔',
  },
  {
    id: 'fmt-faq-16',
    question: 'JPG اور JPEG میں کیا فرق ہے؟',
    answer: 'کوئی فرق نہیں — JPG اور JPEG ایک ہی فارمیٹ ہیں۔ JPEG مکمل نام ہے (Joint Photographic Experts Group) اور JPG مختصر فائل ایکسٹینشن ہے۔ photo.jpg نامی فائل اور photo.jpeg نامی فائل ایک ہی قسم کی تصویر ہیں۔',
  },
  {
    id: 'fmt-faq-17',
    question: 'کیا مجھے اصل فارمیٹ رکھنا چاہیے یا تبدیل کرنا چاہیے؟',
    answer: 'اصل رکھیں اگر آپ سائز سے خوش ہیں — یہ سب سے سادہ انتخاب ہے اور کچھ ضائع نہیں ہوتا۔ تبدیل کریں جب آپ کے پاس کوئی وجہ ہو: ویب سائٹ کی تصویر چھوٹی کرنے کے لیے JPG سے WebP، ایسی تصویر چھوٹی کرنے کے لیے PNG سے JPG جسے شفافیت کی ضرورت نہیں، یا لوگو چھوٹا کرنے کے لیے PNG سے WebP۔',
  },
  {
    id: 'fmt-faq-18',
    question: 'کون سا فارمیٹ سب سے چھوٹی فائل دیتا ہے؟',
    answer: 'تقریباً ہر صورت میں WebP۔ تصویروں کے لیے، WebP عام طور پر اسی نظر آنے والے معیار پر JPG سے 25–35% چھوٹا ہوتا ہے۔ شفافیت والے گرافکس کے لیے، WebP عام طور پر PNG سے کہیں چھوٹا ہوتا ہے۔ یہی وجہ ہے کہ WebP ویب سائٹس کے لیے بہترین فارمیٹ ہے۔',
  },
  {
    id: 'fmt-faq-19',
    question: 'کیا CompressMyPic JPG، PNG اور WebP کے درمیان تبدیل کر سکتا ہے؟',
    answer: 'جی ہاں۔ JPG، PNG یا WebP تصویر اپ لوڈ کریں، اپنی مرضی کا آؤٹ پٹ فارمیٹ چنیں — اصل، JPG، PNG یا WebP — اور تبدیل شدہ فائل ڈاؤن لوڈ کریں۔ آپ ایک ہی سیٹنگز سے کئی تصویریں ایک ساتھ تبدیل کر سکتے ہیں اور انہیں ZIP کے طور پر ایک ساتھ ڈاؤن لوڈ کر سکتے ہیں۔',
  },
  {
    id: 'fmt-faq-20',
    question: 'اگر میں PNG کو JPG میں تبدیل کروں تو شفافیت کا کیا ہوتا ہے؟',
    answer: 'وہ ضائع ہو جاتی ہے۔ JPG شفافیت محفوظ نہیں کر سکتا، اس لیے آپ کے PNG کے شفاف حصے ٹھوس رنگ بن جاتے ہیں۔ CompressMyPic آپ کو ان حصوں کو بھرنے کے لیے پس منظر کا رنگ چننے دیتا ہے، اس لیے وہ رنگ چنیں جو اس جگہ سے میل کھائے جہاں تصویر استعمال ہوگی — سفید عام انتخاب ہے۔',
  },
];

export const GuideFormatsPageUr: React.FC<GuideFormatsPageUrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG بمقابلہ PNG بمقابلہ WebP: کون سا امیج فارمیٹ بہترین ہے؟ (گائیڈ)';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG بمقابلہ PNG بمقابلہ WebP کا موازنہ: فائل سائز، معیار، شفافیت اور براؤزر سپورٹ — تصویروں، لوگو، ویب سائٹس اور سوشل میڈیا کے لیے صحیح امیج فارمیٹ چنیں۔');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ur/rehnumai/jpg-vs-png-vs-webp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'JPG، PNG اور WebP میں سے کیسے چنیں اور تصویریں کیسے تبدیل کریں',
          description: 'JPG، PNG اور WebP کا موازنہ کریں، پھر CompressMyPic سے اپنی تصویر کمپریس یا تبدیل کریں۔',
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
          headline: "JPG بمقابلہ PNG بمقابلہ WebP: کون سا امیج فارمیٹ بہترین ہے؟ (گائیڈ)",
          description: "JPG بمقابلہ PNG بمقابلہ WebP کا موازنہ: فائل سائز، معیار، شفافیت اور براؤزر سپورٹ — تصویروں، لوگو، ویب سائٹس اور سوشل میڈیا کے لیے صحیح امیج فارمیٹ چنیں۔",
          image: 'https://compressmypic.online/og-image.png',
          author: { '@type': 'Person', name: 'Bilal' },
          publisher: {
            '@type': 'Organization',
            name: 'CompressMyPic',
            url: 'https://compressmypic.online/',
            logo: { '@type': 'ImageObject', url: 'https://compressmypic.online/favicon.svg' },
          },
          datePublished: '2026-11-14',
          dateModified: '2026-11-16',
          mainEntityOfPage: "https://compressmypic.online/ur/rehnumai/jpg-vs-png-vs-webp/",
          inLanguage: 'ur',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "ہوم", item: "https://compressmypic.online/ur/" },
            { '@type': 'ListItem', position: 2, name: "رہنمائیاں", item: "https://compressmypic.online/ur/" },
            { '@type': 'ListItem', position: 3, name: "JPG بمقابلہ PNG بمقابلہ WebP: کون سا امیج فارمیٹ بہترین ہے؟ (گائیڈ)", item: "https://compressmypic.online/ur/rehnumai/jpg-vs-png-vs-webp/" },
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
            onClick={() => onNavigate('/ur/')}
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>تصویر کمپریسر پر واپس جائیں</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            JPG بمقابلہ PNG بمقابلہ WebP — آپ کو کون سا فارمیٹ استعمال کرنا چاہیے؟
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            تحریر: <a href="/ur/hamare-bare-mein/" onClick={(e) => { e.preventDefault(); onNavigate('/ur/hamare-bare-mein/'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            غلط فارمیٹ چننے سے آپ کی تصویر ضرورت سے دس گنا بڑی ہو سکتی ہے — یا شفاف لوگو خراب ہو سکتا ہے۔ یہ ہے سادہ، ایماندارانہ موازنہ، اور فارمیٹس کے درمیان سیکنڈوں میں تبدیل کرنے کا طریقہ۔
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>مختصر جواب</span>
            </h2>
            <p>
              اگر آپ صرف ایک بات یاد رکھیں، تو یہ یاد رکھیں: تصویروں کے لیے JPG، لوگو اور ہر اس چیز کے لیے PNG جسے شفافیت چاہیے، اور WebP جب بھی آپ کو سب سے چھوٹی فائل چاہیے — خاص طور پر ویب سائٹ پر۔ نیچے دی گئی جدول بتاتی ہے کہ کیوں۔
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-start border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">فارمیٹ</th>
                    <th className="px-4 py-3 font-semibold">فائل سائز</th>
                    <th className="px-4 py-3 font-semibold">شفافیت</th>
                    <th className="px-4 py-3 font-semibold">کس کے لیے بہترین ہے</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">JPG</td>
                    <td className="px-4 py-3">چھوٹا</td>
                    <td className="px-4 py-3">نہیں</td>
                    <td className="px-4 py-3">تصویریں، شیئرنگ، پرنٹنگ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">PNG</td>
                    <td className="px-4 py-3">بڑا</td>
                    <td className="px-4 py-3">جی ہاں</td>
                    <td className="px-4 py-3">لوگو، آئیکنز، اسکرین شاٹس</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">WebP</td>
                    <td className="px-4 py-3">سب سے چھوٹا</td>
                    <td className="px-4 py-3">جی ہاں</td>
                    <td className="px-4 py-3">ویب سائٹس، ویب تصویریں</td>
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
              <span>JPG: تصویروں کے لیے بہترین</span>
            </h2>
            <p className="text-sm sm:text-base">
              JPG (جسے JPEG بھی لکھا جاتا ہے) کلاسک فوٹو فارمیٹ ہے۔ یہ لاسی کمپریشن استعمال کرتا ہے: یہ باریک تفصیل پھینک دیتا ہے جسے آپ کی آنکھ مشکل سے دیکھتی ہے، جس سے فائلیں نمایاں طور پر چھوٹی ہو جاتی ہیں۔ 5 MB کیمرہ تصویر JPG کے طور پر 500 KB بن سکتی ہے اور ابھی بھی بہترین نظر آتی ہے۔ JPG شفافیت نہیں کر سکتا، اس لیے یہ لوگو کے لیے غلط انتخاب ہے — لیکن کسی بھی عام تصویر کے لیے، یہ محفوظ، عالمگیر ڈیفالٹ ہے جسے ہر آلہ اور ایپ کھول سکتی ہے۔
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: لوگو اور شفافیت کے لیے بہترین</span>
            </h2>
            <p className="text-sm sm:text-base">
              PNG لاس لیس ہے: یہ ہر پکسل کو بالکل ویسے ہی رکھتا ہے، اور یہ شفاف پس منظر کو سپورٹ کرتا ہے۔ یہی وجہ ہے کہ یہ لوگو، آئیکنز، اور متن والے گرافکس کے لیے صحیح فارمیٹ ہے۔ اس کی قیمت فائل سائز ہے — PNG کے طور پر محفوظ تصویر اسی تصویر کے JPG سے 5–10 گنا بڑی ہو سکتی ہے۔ کیمرہ تصویر کو کبھی PNG کے طور پر محفوظ نہ کریں جب تک کہ آپ کے پاس کوئی خاص وجہ نہ ہو۔
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: ویب سائٹس کے لیے بہترین</span>
            </h2>
            <p className="text-sm sm:text-base">
              WebP Google کا بنایا ہوا جدید فارمیٹ ہے۔ یہ سب کچھ کرتا ہے: JPG جیسی لاسی کمپریشن، PNG جیسی شفافیت، اور ایسی فائلیں جو عام طور پر اسی نظر آنے والے معیار پر JPG سے 25–35% چھوٹی ہوتی ہیں۔ ہر جدید براؤزر اسے سپورٹ کرتا ہے، یہی وجہ ہے کہ یہ ویب سائٹ کی تصویروں کے لیے بہترین فارمیٹ ہے۔ اس کی واحد کمزوری پرانے سافٹ ویئر کے ساتھ مطابقت ہے — اور WhatsApp پری ویوز، جہاں JPG ابھی بھی محفوظ ہے۔
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.webp"
              alt="ایک ہی تصویر کا JPG، PNG اور WebP کے طور پر ان کے فائل سائز کے ساتھ موازنہ کرنے والا اسکرین شاٹ"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              ایک ہی تصویر تین فارمیٹس میں: WebP سب سے چھوٹا ہے، PNG سب سے بڑا ہے، اور JPG درمیان میں ہے۔
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>مرحلہ بہ مرحلہ: اپنی تصویر کمپریس یا تبدیل کریں</span>
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
              <span>کس کام کے لیے کون سا فارمیٹ؟</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">کیمرہ تصویریں — JPG یا WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  شیئرنگ اور پرنٹنگ کے لیے JPG، اپنی ویب سائٹ کے لیے WebP۔ دونوں تصویروں کو اصل سائز کے ایک حصے پر بہترین رکھتے ہیں۔
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">لوگو اور آئیکنز — PNG یا WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  آپ کو شفافیت چاہیے، اس لیے JPG خارج ہے۔ PNG محفوظ کلاسک ہے؛ WebP چھوٹا ہے اور ہر جدید جگہ کام کرتا ہے۔
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">اسکرین شاٹس — WebP یا PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  تیز متن اور چپٹے رنگ WebP اور PNG کے لیے موزوں ہیں۔ JPG متن کے کناروں کو دھندلا کر دیتا ہے، اس لیے اسکرین شاٹس کے لیے اس سے بچیں۔
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">ویب سائٹ کی تصویریں — WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  سب سے چھوٹی فائلوں کا مطلب تیز صفحات۔ اپنی ویب سائٹ کی تصویروں کو WebP میں تبدیل کریں اور بہت پرانے براؤزرز کے لیے JPG کو متبادل رکھیں۔
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.webp"
              alt="CompressMyPic میں آؤٹ پٹ فارمیٹ JPG، PNG یا WebP منتخب کرنے کا اسکرین شاٹ"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              CompressMyPic میں اپنا آؤٹ پٹ فارمیٹ چنیں — اصل رکھیں، یا JPG، PNG یا WebP میں تبدیل کریں۔
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>اکثر پوچھے گئے سوالات</span>
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
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-start transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">متعلقہ گائیڈز</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/ur/rehnumai/whatsapp-ke-liye-tasaveer-compress-karein/')}
                className={`text-start p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">معیار کھوئے بغیر WhatsApp کے لیے تصویریں کیسے کمپریس کریں</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">پہلے خود تصویریں چھوٹی کریں، پھر انہیں دستاویزات کے طور پر بھیجیں تاکہ WhatsApp انہیں دھندلا نہ کر سکے۔</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/ur/rehnumai/tasveer-ka-size-100kb-tak-kam-karein/')}
                className={`text-start p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">ویب سائٹس اور ای میل کے لیے تصویر کا سائز 100KB تک کیسے کم کریں</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">اپنی تصویر خراب کیے بغیر 100KB تک پہنچنے کی مرحلہ بہ مرحلہ گائیڈ۔</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ur/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              تصویریں مفت کمپریس کریں
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ur/rehnumai/whatsapp-ke-liye-tasaveer-compress-karein/')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              WhatsApp کے لیے کمپریس کریں
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
