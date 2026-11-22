import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageUrProps {
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
    text: 'اپنے براؤزر میں compressmypic.online پر جائیں۔ انسٹال کرنے کو کچھ نہیں اور اکاؤنٹ بنانے کی ضرورت نہیں — یہ ٹول مفت ہے، بغیر سائن اپ اور بغیر واٹر مارک کے۔',
  },
  {
    title: 'اپنی تصویر اپ لوڈ کریں',
    text: 'اپنی تصویر صفحے پر ڈریگ کر کے چھوڑیں، یا اپنے آلے سے منتخب کرنے کے لیے «فائلیں منتخب کریں» پر ٹیپ کریں۔ JPG، PNG اور WebP معاون ہیں، فی تصویر 20 MB تک۔ آپ ایک ساتھ کئی تصویریں اپ لوڈ کر سکتے ہیں۔',
  },
  {
    title: 'متوازن پری سیٹ سے شروع کریں',
    text: 'متوازن پری سیٹ کوالٹی کو تقریباً 70% پر سیٹ کرتا ہے۔ زیادہ تر تصویروں کے لیے یہ فائل کو پہلے ہی اس کے اصل سائز کے ایک حصے تک کم کر دیتا ہے — اپنی تصویر کے ساتھ دکھایا گیا لائیو سائز دیکھیں کہ آپ کہاں کھڑے ہیں۔',
  },
  {
    title: 'کوالٹی سلائیڈر کو قدم بہ قدم نیچے کریں',
    text: 'کوئی باکس نہیں ہے جہاں آپ «100KB» ٹائپ کریں — اس کے بجائے، کوالٹی سلائیڈر کو آہستہ آہستہ نیچے گھسیٹیں اور ہر تبدیلی کے بعد لائیو پہلے اور بعد کا سائز اپ ڈیٹ ہوتے دیکھیں۔ چھوٹے قدموں میں آگے بڑھیں (مثال کے طور پر 70% سے 60% پھر 50%) تاکہ آپ حد سے آگے نہ بڑھیں اور ضرورت سے زیادہ معیار نہ کھوئیں۔',
  },
  {
    title: 'اگر ابھی بھی 100KB سے اوپر ہیں تو WebP پر تبدیل کریں',
    text: 'اگر مناسب کوالٹی پر بھی فائل 100KB سے اوپر ہے، تو آؤٹ پٹ فارمیٹ کو WebP میں بدل دیں۔ WebP عام طور پر اسی نظر آنے والے معیار پر JPG سے 25–35% چھوٹا ہوتا ہے، اور یہ اکثر کوالٹی مزید کم کیے بغیر 100KB تک کا فرق پورا کر دیتا ہے۔',
  },
  {
    title: 'پہلے اور بعد کا موازنہ کریں',
    text: 'پہلے اور بعد کا موازنہ کھولیں اور چہروں، متن اور باریک تفصیل پر زوم کریں۔ اگر تصویر ابھی بھی اچھی لگ رہی ہے، تو آپ کا کام ہو گیا۔ اگر وہ بلاکی یا دھندلی لگ رہی ہے، تو کوالٹی تھوڑی بڑھا دیں اور 100KB سے تھوڑی بڑی فائل قبول کر لیں — ایک تیز 120 KB تصویر دھندلی 100 KB تصویر سے بہتر ہے۔',
  },
  {
    title: 'اپنی تصویر ڈاؤن لوڈ کریں',
    text: 'چھوٹی فائل محفوظ کرنے کے لیے ڈاؤن لوڈ پر ٹیپ کریں، یا اگر آپ نے ایک ساتھ کئی تصویریں کم کی ہیں تو «سب کچھ ڈاؤن لوڈ کریں (ZIP)» استعمال کریں۔ آپ کی اصل تصویر کبھی تبدیل نہیں ہوتی — آپ کو ہمیشہ ایک نئی، چھوٹی کاپی ملتی ہے۔',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'میں اپنی تصویر کو تقریباً 100KB تک کیسے کم کروں؟',
    answer: 'اسے CompressMyPic پر اپ لوڈ کریں، متوازن پری سیٹ سے شروع کریں، پھر لائیو پہلے اور بعد کا سائز دیکھتے ہوئے کوالٹی سلائیڈر کو قدم بہ قدم نیچے کریں۔ جیسے ہی کمپریس شدہ سائز 100KB کے قریب پہنچ جائے، رک جائیں۔ اگر آپ ابھی بھی اوپر ہیں، تو آؤٹ پٹ فارمیٹ کو WebP میں تبدیل کر دیں۔',
  },
  {
    id: 'kb-faq-2',
    question: '100KB کا درست ان پٹ باکس کیوں نہیں ہے؟',
    answer: 'کیونکہ ہر تصویر مختلف طریقے سے کمپریس ہوتی ہے — ایک سادہ آسمان اسی کوالٹی پر ایک مصروف ہجوم والے منظر سے کہیں زیادہ سکڑ جاتا ہے۔ ایک مقررہ «100KB» باکس کو اندازہ لگانا پڑے گا۔ اس کے بجائے، CompressMyPic آپ کو ہر تبدیلی کے بعد لائیو کمپریس شدہ سائز دکھاتا ہے، تاکہ آپ معیار پر مکمل کنٹرول کے ساتھ فائل کو خود 100KB تک لے جا سکیں۔',
  },
  {
    id: 'kb-faq-3',
    question: 'کون سی کوالٹی سیٹنگ مجھے تقریباً 100KB دیتی ہے؟',
    answer: 'یہ تصویر پر منحصر ہے، لیکن ایک عام فون تصویر کے لیے 50–70% کوالٹی عام طور پر 100KB کے قریب پہنچ جاتی ہے۔ ایک سادہ تصویر جس میں چپٹے رنگ ہوں، 70% پر 100KB تک پہنچ سکتی ہے، جبکہ تفصیل والے منظر کو 40–50% کی ضرورت پڑ سکتی ہے۔ لائیو سائز دیکھیں — یہی نمبر سچ ہے، کوئی مقررہ فیصد نہیں۔',
  },
  {
    id: 'kb-faq-4',
    question: 'میری تصویر کم کوالٹی پر بھی 100KB سے اوپر ہے — اب کیا کروں؟',
    answer: 'پہلے آؤٹ پٹ فارمیٹ کو WebP میں تبدیل کریں، جو عام طور پر JPG سے 25–35% چھوٹا ہوتا ہے۔ اگر ابھی بھی اوپر ہے، تو کوالٹی تھوڑی اور کم کریں اور موازنہ دیکھیں — تھوڑی سی اضافی کمی اکثر نظر نہیں آتی۔ آخری حل کے طور پر، بہت بڑے ڈائمینشن والی تصویر کو آپ کی توقع سے کم کوالٹی سیٹنگ کی ضرورت پڑ سکتی ہے، کیونکہ زیادہ پکسلز کا مطلب زیادہ ڈیٹا ہوتا ہے۔',
  },
  {
    id: 'kb-faq-5',
    question: 'کیا مجھے 100KB تک پہنچنے کے لیے WebP استعمال کرنا چاہیے؟',
    answer: 'جی ہاں، جب بھی ممکن ہو۔ WebP کوالٹی زیادہ کم کیے بغیر 100KB تک پہنچنے کا سب سے آسان طریقہ ہے، کیونکہ یہ JPG کے اسی نظر آنے والے معیار پر چھوٹی فائل بناتا ہے۔ ویب سائٹ کی تصویروں اور ہر جگہ جہاں جدید براؤزر استعمال ہوتے ہیں، WebP استعمال کریں؛ JPG صرف اس وقت استعمال کریں جب تصویر پرانے سافٹ ویئر میں کھلنی ہو یا WhatsApp پر شیئر کرنی ہو۔',
  },
  {
    id: 'kb-faq-6',
    question: 'کیا 100KB تک کم کرنے سے تصویر دھندلی ہو جاتی ہے؟',
    answer: 'اگر آپ احتیاط سے کریں تو نہیں۔ 100KB پر ایک عام فون تصویر اسکرین پر ابھی بھی تیز نظر آتی ہے، کیونکہ اسکرینیں کیمرے کے مقابلے میں کہیں کم پکسلز دکھاتی ہیں۔ یہ صرف اس وقت دھندلی لگتی ہے جب آپ کوالٹی بہت کم کر دیں (تقریباً 40% سے نیچے) یا تصویر بڑے سائز میں پرنٹ کی جائے۔ ڈاؤن لوڈ کرنے سے پہلے ہمیشہ پہلے اور بعد کا موازنہ دیکھیں۔',
  },
  {
    id: 'kb-faq-7',
    question: 'کیا میں PNG کو 100KB تک کم کر سکتا ہوں؟',
    answer: 'جی ہاں، لیکن PNG تصویریں شروع سے ہی بڑی ہوتی ہیں، اس لیے اس میں زیادہ محنت لگتی ہے۔ PNG اپ لوڈ کریں، کوالٹی سلائیڈر نیچے کریں، اور آؤٹ پٹ کو WebP یا JPG میں تبدیل کریں — صرف یہی اکثر سائز کو آدھے سے زیادہ کم کر دیتا ہے۔ PNG آؤٹ پٹ صرف اس وقت رکھیں جب تصویر کو شفافیت کی ضرورت ہو، اور قبول کریں کہ شفاف PNG شاید 100KB تک نہ پہنچ سکے۔',
  },
  {
    id: 'kb-faq-8',
    question: 'میں تصویر کا سائز 200KB تک کیسے کم کروں؟',
    answer: 'وہی طریقہ استعمال کریں: تصویر اپ لوڈ کریں، متوازن پری سیٹ سے شروع کریں، اور لائیو سائز دیکھتے ہوئے کوالٹی سلائیڈر نیچے کریں جب تک کہ وہ 200KB کے قریب نہ پہنچ جائے۔ زیادہ تر تصویریں 70–80% کوالٹی پر آسانی سے 200KB تک پہنچ جاتی ہیں، اس لیے عام طور پر آپ کو بالکل کم جانے کی ضرورت نہیں پڑتی۔',
  },
  {
    id: 'kb-faq-9',
    question: 'میں تصویر کا سائز 50KB تک کیسے کم کروں؟',
    answer: 'تصویر اپ لوڈ کریں، آؤٹ پٹ فارمیٹ کو WebP میں تبدیل کریں، اور کوالٹی سلائیڈر کو آہستہ آہستہ نیچے کریں جب تک کہ لائیو سائز 50KB کے قریب نہ ہو جائے — کسی تصویر کے لیے عام طور پر تقریباً 40–55% کوالٹی۔ موازنہ کو غور سے دیکھیں، کیونکہ 50KB پر باریک تفصیل متاثر ہونے لگتی ہے؛ یہ تھمب نیلز اور چیٹ کے لیے ٹھیک ہے، ان تصویروں کے لیے کم اچھا ہے جنہیں آپ رکھنا چاہتے ہیں۔',
  },
  {
    id: 'kb-faq-10',
    question: 'میں تصویر کا سائز 20KB تک کیسے کم کروں؟',
    answer: 'WebP آؤٹ پٹ اور کم کوالٹی سیٹنگ استعمال کریں، عام طور پر 25–40%، اور لائیو سائز دیکھیں۔ 20KB بہت چھوٹا ہے، اس لیے نظر آنے والی نرمی کی توقع رکھیں — یہ آئیکنز، تھمب نیلز اور چھوٹی پری ویو تصویروں کے لیے موزوں ہے، چہروں والی تصویروں کے لیے نہیں۔ اگر تصویر ابھی بھی 20KB تک نہیں پہنچ رہی، تو شاید اس میں اتنی چھوٹی فائل کے لیے بہت زیادہ تفصیل ہے۔',
  },
  {
    id: 'kb-faq-11',
    question: 'ویب سائٹ کی تصویروں کے لیے اچھا فائل سائز کیا ہے؟',
    answer: 'عام مواد کی تصویروں کے لیے فی تصویر 100KB سے کم، اور بڑی ہیرو تصویروں کے لیے 200KB سے کم کا ہدف رکھیں۔ چھوٹی فائلیں صفحات کو تیزی سے لوڈ کرتی ہیں، جسے وزیٹرز محسوس کرتے ہیں اور Google انعام دیتا ہے۔ ویب سائٹ کی تصویروں کے لیے WebP فارمیٹ اور متوازن پری سیٹ کو اپنی شروعات بنائیں۔',
  },
  {
    id: 'kb-faq-12',
    question: 'ای میل اٹیچمنٹ کی سائز کی حد کیا ہے؟',
    answer: 'زیادہ تر ای میل فراہم کنندگان فی پیغام مجموعی طور پر 20–25 MB کی اجازت دیتے ہیں، تمام اٹیچمنٹس سمیت — Gmail 25 MB کی اجازت دیتا ہے۔ 100KB تک کم کی گئی ایک تصویر کبھی مسئلہ نہیں ہوتی؛ 100KB کی دس تصویریں بھی صرف 1 MB ہوتی ہیں۔ پہلے کمپریس کرنا ہی کئی تصویریں ای میل سے بھیجنا آسان بناتا ہے۔',
  },
  {
    id: 'kb-faq-13',
    question: 'کیا میں کئی تصویریں ایک ساتھ 100KB تک کم کر سکتا ہوں؟',
    answer: 'جی ہاں۔ تمام تصویریں ایک ساتھ اپ لوڈ کریں، ان سب پر ایک ہی پری سیٹ اور کوالٹی لگائیں، اور ہر ایک کا لائیو سائز دیکھیں۔ اگر کوئی تصویر ابھی بھی 100KB سے اوپر ہے، تو اسے الگ سے ایڈجسٹ کریں، پھر سب کچھ «سب کچھ ڈاؤن لوڈ کریں (ZIP)» بٹن سے ایک ساتھ ڈاؤن لوڈ کریں۔',
  },
  {
    id: 'kb-faq-14',
    question: 'کیا ٹول میری تصویر کے ڈائمینشن بدل دیتا ہے؟',
    answer: 'نہیں۔ CompressMyPic آپ کی تصویر کے ڈائمینشن بالکل ویسے ہی رکھتا ہے — صرف فائل کا سائز کم ہوتا ہے۔ آپ کی تصویر اصل جیسی ہی چوڑائی، اونچائی اور تناسب رکھتی ہے، اس لیے 4000×3000 تصویر 4000×3000 ہی رہتی ہے، بس بہت چھوٹی فائل کے ساتھ۔',
  },
  {
    id: 'kb-faq-15',
    question: 'میں اپنی کمپریس شدہ تصویر کا سائز کیسے دیکھوں؟',
    answer: 'CompressMyPic ہر تصویر کا اصل سائز اور کمپریس شدہ سائز لائیو، ہر تصویر کے بالکل نیچے دکھاتا ہے — مثال کے طور پر "4.2 MB → 98 KB"۔ آپ ڈاؤن لوڈ شدہ فائل کو اپنے آلے پر بھی دیکھ سکتے ہیں: فون پر، اپنی گیلری یا فائل مینیجر میں فائل کی تفصیل دیکھیں۔',
  },
  {
    id: 'kb-faq-16',
    question: 'کیا 100KB ویب سائٹ کے لیے کافی معیار ہے؟',
    answer: 'جی ہاں، تقریباً ہر ویب استعمال کے لیے۔ ویب سائٹ کی تصویریں چند سو پکسلز چوڑی دکھائی جاتی ہیں، اس لیے 100KB تصویر اسکرین پر تیز نظر آتی ہے۔ صرف مکمل اسکرین ہیرو تصویروں یا پرنٹ کے لیے بنائی گئی تصویروں کو بڑی فائلوں کی ضرورت ہوتی ہے۔ 100KB تک کمپریس کریں، موازنہ دیکھیں، اور آپ دیکھیں گے کہ معیار برقرار ہے۔',
  },
  {
    id: 'kb-faq-17',
    question: 'کیا میں اسکرین شاٹ کو 100KB تک کم کر سکتا ہوں؟',
    answer: 'جی ہاں، اور اسکرین شاٹس سب سے آسان معاملہ ہیں۔ ان میں چپٹے رنگ کے بڑے حصے ہوتے ہیں، اس لیے وہ بہت اچھی طرح کمپریس ہوتے ہیں — 1 MB سے شروع ہونے والا اسکرین شاٹ اکثر متوازن پری سیٹ پر 100KB سے نیچے آ جاتا ہے۔ سب سے چھوٹے نتیجے کے لیے WebP آؤٹ پٹ آزمائیں۔',
  },
  {
    id: 'kb-faq-18',
    question: 'کیا میری تصویریں کمپریس کرتے وقت کہیں اپ لوڈ ہوتی ہیں؟',
    answer: 'نہیں۔ تمام کمپریشن آپ کے اپنے براؤزر میں آپ کے آلے پر ہوتی ہے، اس لیے آپ کی تصویریں کبھی کسی سرور پر اپ لوڈ نہیں ہوتیں، نہ محفوظ ہوتی ہیں اور نہ کسی اور کو نظر آتی ہیں۔ وہ آپ کے براؤزر کی میموری میں رہتی ہیں اور ٹیب بند یا ریفریش کرتے ہی صاف ہو جاتی ہیں۔',
  },
  {
    id: 'kb-faq-19',
    question: 'کیا اس بات کی کوئی حد ہے کہ میں کتنی تصویریں کم کر سکتا ہوں؟',
    answer: 'نہیں۔ آپ جتنی تصویریں چاہیں کمپریس کر سکتے ہیں، اس کی کوئی حد نہیں، اور نہ اکاؤنٹ یا سائن اپ کی ضرورت ہے۔ واحد حد فی تصویر 20 MB ہے، جو ہائی ریزولوشن کیمرہ تصویروں اور بڑے اسکرین شاٹس کے لیے کافی ہے۔',
  },
  {
    id: 'kb-faq-20',
    question: 'کیا تصویریں 100KB تک کم کرنا مفت ہے؟',
    answer: 'جی ہاں، مکمل طور پر مفت۔ نہ کوئی فیس، نہ پیڈ پلان، نہ کریڈٹس اور نہ آپ کی کمپریس شدہ تصویروں پر واٹر مارک۔ سائٹ کھولیں، اپنی تصویریں 100KB تک کم کریں، اور جتنی بار چاہیں ڈاؤن لوڈ کریں۔',
  },
];

export const Guide100kbPageUr: React.FC<Guide100kbPageUrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'تصویر کا سائز 100KB تک کیسے کم کریں: مرحلہ بہ مرحلہ گائیڈ';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'مرحلہ بہ مرحلہ گائیڈ: کسی بھی تصویر کو ویب سائٹس اور ای میل کے لیے 100KB تک کم کریں — کون سا فارمیٹ، معیار اور ڈائمینشن استعمال کریں، اور عام غلطیوں سے کیسے بچیں۔');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ur/rehnumai/tasveer-ka-size-100kb-tak-kam-karein/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'ویب سائٹس اور ای میل کے لیے تصویر کا سائز 100KB تک کیسے کم کریں',
          description: 'CompressMyPic میں کوالٹی سلائیڈر اور WebP آؤٹ پٹ استعمال کر کے تصویر کو تقریباً 100KB تک کم کریں۔',
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
          headline: "تصویر کا سائز 100KB تک کیسے کم کریں: مرحلہ بہ مرحلہ گائیڈ",
          description: "مرحلہ بہ مرحلہ گائیڈ: کسی بھی تصویر کو ویب سائٹس اور ای میل کے لیے 100KB تک کم کریں — کون سا فارمیٹ، معیار اور ڈائمینشن استعمال کریں، اور عام غلطیوں سے کیسے بچیں۔",
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
          mainEntityOfPage: "https://compressmypic.online/ur/rehnumai/tasveer-ka-size-100kb-tak-kam-karein/",
          inLanguage: 'ur',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "ہوم", item: "https://compressmypic.online/ur/" },
            { '@type': 'ListItem', position: 2, name: "رہنمائیاں", item: "https://compressmypic.online/ur/" },
            { '@type': 'ListItem', position: 3, name: "تصویر کا سائز 100KB تک کیسے کم کریں: مرحلہ بہ مرحلہ گائیڈ", item: "https://compressmypic.online/ur/rehnumai/tasveer-ka-size-100kb-tak-kam-karein/" },
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
            ویب سائٹس اور ای میل کے لیے تصویر کا سائز 100KB تک کیسے کم کریں
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            تحریر: <a href="/ur/hamare-bare-mein/" onClick={(e) => { e.preventDefault(); onNavigate('/ur/hamare-bare-mein/'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            4 MB تصویر آپ کی ویب سائٹ کو سست کر دیتی ہے اور ای میل کو بھر دیتی ہے۔ اسے تقریباً 100KB تک کم کرنے سے صفحات تیزی سے لوڈ ہوتے ہیں اور ای میلز فوراً بھیجی جاتی ہیں — اور اگر آپ یہ صحیح طریقے سے کریں، تو کوئی فرق نہیں بتا سکتا۔
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>100KB جادوئی نمبر کیوں ہے؟</span>
            </h2>
            <p>
              100KB وہ سائز ہے جس کا زیادہ تر لوگ ہدف رکھتے ہیں کیونکہ یہ بہترین جگہ پر ہے: اتنا چھوٹا کہ ویب سائٹ پر فوراً لوڈ ہو جائے یا کسی بھی ای میل میں آسانی سے آ جائے، لیکن اتنا بڑا کہ اسکرین پر ابھی بھی تیز نظر آئے۔ ایک عام فون تصویر 3–5 MB سے شروع ہوتی ہے، اس لیے 100KB تک پہنچنے کا مطلب فائل کا تقریباً 97% کم کرنا ہے — اور جدید کمپریشن یہ زیادہ تر اس ڈیٹا کو ہٹا کر کرتا ہے جسے آپ کی آنکھیں دیکھ نہیں سکتیں۔
            </p>
            <p>
              شروع کرنے سے پہلے ایک ایماندارانہ بات: CompressMyPic میں کوئی باکس نہیں ہے جہاں آپ «100KB» ٹائپ کریں اور بالکل وہی سائز حاصل کریں۔ کوئی ایماندار ٹول درست نمبر کا وعدہ نہیں کر سکتا، کیونکہ ہر تصویر مختلف طریقے سے کمپریس ہوتی ہے۔ اس کے بجائے، ٹول آپ کو ہر تبدیلی کے بعد لائیو کمپریس شدہ سائز دکھاتا ہے، اور آپ کوالٹی سلائیڈر سے اسے خود 100KB تک لے جاتے ہیں۔ یہ گائیڈ آپ کو بالکل بتاتی ہے کہ کیسے۔
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>مرحلہ بہ مرحلہ: تصویر کو 100KB تک کم کریں</span>
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
              alt="CompressMyPic پر بڑی تصویر اپ لوڈ کرنے کا اسکرین شاٹ تاکہ اسے 100KB تک کم کیا جا سکے"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              اپنی تصویر اپ لوڈ کریں — اصل سائز فوراً دکھایا جاتا ہے، تاکہ آپ جان سکیں کہ آپ کو کتنا کم کرنا ہے۔
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>ایک نظر میں عام اہداف</span>
            </h2>
            <p>
              100KB واحد ہدف نہیں ہے جس کی لوگوں کو ضرورت ہوتی ہے۔ وہی طریقہ ہر سائز کے لیے کام کرتا ہے — ہر ایک کے لیے آپ کیا توقع کر سکتے ہیں، یہ رہا:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-start border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">ہدف</th>
                    <th className="px-4 py-3 font-semibold">عام کوالٹی</th>
                    <th className="px-4 py-3 font-semibold">کس کے لیے اچھا ہے</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">200KB</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">بلاگ تصویریں، بڑی ویب تصویریں</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">100KB</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">ویب سائٹ کی تصویریں، ای میل اٹیچمنٹس</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">50KB</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">تھمب نیلز، چیٹ، تیز صفحات</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">20KB</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">آئیکنز، چھوٹے پری ویوز</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              یہ شروعاتی نکات ہیں، وعدے نہیں۔ ایک سادہ تصویر آسانی سے 100KB تک پہنچ جاتی ہے؛ ایک مصروف، تفصیل والی تصویر کو کم کوالٹی سیٹنگ کی ضرورت ہوتی ہے۔ فیصد پر نہیں، لائیو سائز نمبر پر بھروسہ کریں۔
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>ویب سائٹس اور ای میل کے لیے تجاویز</span>
            </h2>
            <ul className="space-y-2 list-disc ps-5 text-sm sm:text-base">
              <li>ویب سائٹس کے لیے WebP آؤٹ پٹ استعمال کریں — یہ 100KB تک پہنچنے کا تیز ترین طریقہ ہے، اور ہر جدید براؤزر اسے سپورٹ کرتا ہے۔</li>
              <li>ای میل کے لیے JPG سب سے محفوظ فارمیٹ ہے کیونکہ ہر ای میل ایپ اسے کھولتی ہے۔ 100KB JPG فوراً اٹیچ ہو جاتا ہے اور سائز کی وجہ سے کبھی واپس نہیں آتا۔</li>
              <li>ایک صفحے یا ایک ای میل کی تمام تصویریں ایک ساتھ کمپریس کریں، پھر انہیں «سب کچھ ڈاؤن لوڈ کریں (ZIP)» بٹن سے ایک ساتھ ڈاؤن لوڈ کریں۔</li>
              <li>بالکل 100KB کے پیچھے نہ بھاگیں۔ 115KB کی تیز تصویر بالکل 100KB کی دھندلی تصویر سے بہتر ہے — لوڈنگ کے وقت میں فرق کچھ نہیں۔</li>
              <li>تصویر شائع یا بھیجنے سے پہلے ہمیشہ مکمل زوم پر پہلے اور بعد کا موازنہ دیکھیں۔</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.webp"
              alt="لائیو پہلے اور بعد کے فائل سائز کا اسکرین شاٹ جس میں تصویر تقریباً 100KB تک کم دکھائی گئی ہے"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              لائیو پہلے اور بعد کا سائز آپ کی پیش رفت دکھاتا ہے — سلائیڈر نیچے کریں جب تک کہ کمپریس شدہ سائز 100KB کے قریب نہ ہو جائے۔
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>جب 100KB ممکن نہ ہو</span>
            </h2>
            <p className="text-sm sm:text-base">
              کچھ تصویریں خراب لگے بغیر 100KB تک نہیں پہنچ سکتیں: ایک بہت بڑی، بہت تفصیل والی تصویر، یا شفافیت والی PNG جسے PNG ہی رہنا ضروری ہے۔ اس صورت میں زبردستی نہ کریں۔ ایک تیز 180KB تصویر ہر بار خراب 100KB تصویر سے بہتر ہوتی ہے — ویب سائٹ کے لیے یہ ابھی بھی تیزی سے لوڈ ہوتی ہے، اور ای میل کے لیے یہ ابھی بھی کسی بھی اٹیچمنٹ حد سے کہیں نیچے ہے۔ مقصد ایک چھوٹی فائل ہے جو ابھی بھی اچھی لگے، نہ کہ کوئی جادوئی نمبر۔
            </p>
          </section>

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
                onClick={() => onNavigate('/ur/rehnumai/jpg-vs-png-vs-webp/')}
                className={`text-start p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG بمقابلہ PNG بمقابلہ WebP — آپ کو کون سا فارمیٹ استعمال کرنا چاہیے؟</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">فائل سائز، معیار اور شفافیت کا موازنہ، تاکہ آپ ہر بار صحیح فارمیٹ چنیں۔</p>
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
              onClick={() => onNavigate('/ur/rehnumai/jpg-vs-png-vs-webp/')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG بمقابلہ PNG بمقابلہ WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
