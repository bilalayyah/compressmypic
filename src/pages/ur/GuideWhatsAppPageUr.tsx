import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideWhatsAppPageUrProps {
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
    text: 'اپنے فون یا کمپیوٹر کے براؤزر میں compressmypic.online پر جائیں۔ انسٹال کرنے کو کچھ نہیں اور اکاؤنٹ بنانے کی ضرورت نہیں — ٹول فوراً کھل جاتا ہے۔',
  },
  {
    title: 'اپنی تصویر اپ لوڈ کریں',
    text: '«فائلیں منتخب کریں» پر ٹیپ کریں اور اپنی گیلری سے تصویر چنیں، یا اسے صفحے پر ڈریگ کر کے چھوڑیں۔ آپ ایک ساتھ کئی تصویریں اپ لوڈ کر سکتے ہیں۔ ہر تصویر 20 MB تک ہو سکتی ہے۔',
  },
  {
    title: 'متوازن پری سیٹ سے شروع کریں',
    text: 'متوازن پری سیٹ (تقریباً 70% کوالٹی) WhatsApp تصویروں کے لیے اچھی شروعات ہے۔ یہ فائل کو بہت کم کر دیتا ہے جبکہ تصویر فون اسکرین پر ابھی بھی تیز نظر آتی ہے۔',
  },
  {
    title: 'لائیو پہلے اور بعد کا سائز دیکھیں',
    text: 'ہر تصویر اپنا اصل سائز اور نیا کمپریس شدہ سائز ساتھ ساتھ دکھاتی ہے۔ اگر فائل ابھی بھی آپ کی مرضی سے بڑی ہے، تو کوالٹی سلائیڈر کو تھوڑا نیچے گھسیٹیں اور سائز کو فوراً اپ ڈیٹ ہوتے دیکھیں۔',
  },
  {
    title: 'تصویروں کے لیے JPG رکھیں',
    text: 'عام تصویروں کے لیے، آؤٹ پٹ فارمیٹ JPG ہی رکھیں۔ یہ وہ فارمیٹ ہے جسے WhatsApp بہترین طریقے سے سنبھالتا ہے، اور یہ تصویروں کے لیے سب سے چھوٹی فائلیں دیتا ہے۔ PNG صرف اس وقت استعمال کریں جب آپ کی تصویر کو شفافیت کی ضرورت ہو، جیسے لوگو۔',
  },
  {
    title: 'پہلے اور بعد کا موازنہ کریں',
    text: 'پہلے اور بعد کا موازنہ کھولیں تاکہ دیکھ سکیں کہ تصویر ابھی بھی اچھی لگ رہی ہے۔ چہروں اور متن پر زوم کریں — اگر آپ کو کوئی حقیقی فرق نظر نہیں آتا، تو کوالٹی سیٹنگ درست ہے۔',
  },
  {
    title: 'چھوٹی تصویر ڈاؤن لوڈ کریں',
    text: 'تصویر پر ڈاؤن لوڈ پر ٹیپ کریں، یا اگر آپ نے ایک ساتھ کئی تصویریں کمپریس کی ہیں تو «سب کچھ ڈاؤن لوڈ کریں (ZIP)» استعمال کریں۔ چھوٹی فائل آپ کے آلے پر محفوظ ہو جاتی ہے — آپ کی اصل تصویر کبھی تبدیل نہیں ہوتی۔',
  },
  {
    title: 'WhatsApp پر اسے سمجھداری سے بھیجیں',
    text: 'اگر آپ بہترین ممکنہ معیار چاہتے ہیں، تو کمپریس شدہ تصویر کو دستاویز کے طور پر بھیجیں: WhatsApp میں Attach پر ٹیپ کریں، پھر Document، اور فائل چنیں۔ WhatsApp دستاویزات کو بغیر چھیڑے بھیجتا ہے، اس لیے آپ کی تصویر بالکل ویسے ہی پہنچتی ہے جیسے آپ نے اسے کمپریس کیا تھا۔ اگر آپ اسے تصویر کے طور پر بھیجیں گے، تو WhatsApp اسے دوسری بار کمپریس کر دے گا۔',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'WhatsApp تصویر کا معیار کیوں کم کر دیتا ہے؟',
    answer: 'جب آپ عام طریقے سے تصویر بھیجتے ہیں، تو WhatsApp ڈیٹا اور اسٹوریج بچانے کے لیے اسے دوبارہ کمپریس کر دیتا ہے، اکثر اسے بہت چھوٹے سائز اور کم معیار تک کم کر دیتا ہے۔ یہی وجہ ہے کہ ایک تیز کیمرہ تصویر بھیجنے کے بعد نرم یا دھندلی لگ سکتی ہے۔',
  },
  {
    id: 'wa-faq-2',
    question: 'کیا WhatsApp دستاویزات کے طور پر بھیجی گئی تصویریں کمپریس کرتا ہے؟',
    answer: 'نہیں۔ جب آپ تصویر کو دستاویز کے طور پر بھیجتے ہیں (Attach، پھر Document)، تو WhatsApp فائل کو بالکل ویسے ہی بھیجتا ہے، بغیر کسی اضافی کمپریشن کے۔ یہی تصویر کو مکمل معیار پر شیئر کرنے کا بہترین طریقہ ہے۔',
  },
  {
    id: 'wa-faq-3',
    question: 'WhatsApp پر میں زیادہ سے زیادہ کتنی بڑی تصویر بھیج سکتا ہوں؟',
    answer: 'WhatsApp 2 GB تک کی دستاویزات کی اجازت دیتا ہے، اس لیے چند سو KB کی کمپریس شدہ تصویر کبھی مسئلہ نہیں ہوتی۔ عام طریقے سے بھیجی گئی تصویریں WhatsApp خود دوبارہ کمپریس کر دیتا ہے، اس لیے عملی طور پر جو حد اہم ہے وہ معیار ہے، سائز نہیں۔',
  },
  {
    id: 'wa-faq-4',
    question: 'میں WhatsApp پر مکمل معیار کی تصویر کیسے بھیجوں؟',
    answer: 'پہلے CompressMyPic سے تصویر کو خود کمپریس کریں تاکہ وہ مناسب سائز کی ہو جائے، پھر اسے WhatsApp میں تصویر کے بجائے دستاویز کے طور پر بھیجیں۔ Attach پر ٹیپ کریں، Document چنیں، اور فائل منتخب کریں۔ یہ WhatsApp کے دوبارہ کمپریس کیے بغیر پہنچ جائے گی۔',
  },
  {
    id: 'wa-faq-5',
    question: 'کیا مجھے بھیجنے سے پہلے خود کمپریس کرنا چاہیے یا WhatsApp کو کرنے دوں؟',
    answer: 'پہلے خود کمپریس کریں۔ WhatsApp جارحانہ طریقے سے کمپریس کرتا ہے اور آپ کا اس پر کوئی کنٹرول نہیں ہوتا۔ جب آپ پہلے CompressMyPic سے کمپریس کرتے ہیں، تو آپ معیار چنتے ہیں، نتیجہ دیکھتے ہیں، اور پھر فائل کو دستاویز کے طور پر بھیجتے ہیں تاکہ WhatsApp اسے دوبارہ نہ چھیڑے۔',
  },
  {
    id: 'wa-faq-6',
    question: 'WhatsApp تصویروں کے لیے مجھے کون سی کوالٹی سیٹنگ استعمال کرنی چاہیے؟',
    answer: 'تقریباً 70% پر متوازن پری سیٹ سے شروع کریں۔ کسی اہم تصویر کے لیے 80–85% استعمال کریں اور پہلے اور بعد کا موازنہ دیکھیں۔ روزمرہ کی فوری تصویر کے لیے جہاں رفتار اہم ہو، 50–60% بھی فون اسکرین پر ٹھیک لگتی ہے اور بہت چھوٹی فائل بناتی ہے۔',
  },
  {
    id: 'wa-faq-7',
    question: 'کیا دو بار کمپریس کرنے سے تصویریں خراب ہو جاتی ہیں؟',
    answer: 'جی ہاں۔ JPEG کمپریشن کا ہر دور تھوڑی اور تفصیل پھینک دیتا ہے۔ یہی وجہ ہے کہ آپ کو CompressMyPic سے ایک بار کمپریس کرنا چاہیے اور پھر نتیجہ کو دستاویز کے طور پر بھیجنا چاہیے، بجائے اس کے کہ WhatsApp پہلے سے کمپریس شدہ تصویر کو دوسری بار کمپریس کرے۔',
  },
  {
    id: 'wa-faq-8',
    question: 'کیا میں اپنے فون پر WhatsApp تصویریں کمپریس کر سکتا ہوں؟',
    answer: 'جی ہاں۔ CompressMyPic Android اور iPhone کے براؤزر میں کام کرتا ہے۔ سائٹ کھولیں، اپنے کیمرہ رول سے تصویر چنیں، اسے کمپریس کریں، چھوٹی فائل ڈاؤن لوڈ کریں، اور پھر اسے WhatsApp سے شیئر کریں۔ انسٹال کرنے کے لیے کوئی ایپ نہیں۔',
  },
  {
    id: 'wa-faq-9',
    question: 'کیا کمپریس شدہ تصویریں WhatsApp اسٹیٹس پر ابھی بھی اچھی لگتی ہیں؟',
    answer: 'جی ہاں، اگر آپ حد سے زیادہ نہ کریں۔ WhatsApp اسٹیٹس تصویریں معمولی ریزولوشن پر دکھاتا ہے، اس لیے متوازن پری سیٹ (تقریباً 70%) پر کمپریس شدہ تصویر فون اسکرین پر اصل جیسی ہی لگتی ہے۔ چہروں یا متن والی اسٹیٹس تصویروں کے لیے 50% سے نیچے جانے سے بچیں۔',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp کہتا ہے کہ میری تصویر بہت بڑی ہے — میں کیا کروں؟',
    answer: 'تصویر کو CompressMyPic پر اپ لوڈ کریں اور کوالٹی سلائیڈر نیچے کریں جب تک کہ فائل چند سو KB نہ ہو جائے، پھر اسے ڈاؤن لوڈ کریں اور دوبارہ بھیجیں۔ اگر یہ ابھی بھی تصویر کے طور پر نہیں بھیجی جا رہی، تو اسے دستاویز کے طور پر بھیجیں، جو بہت بڑی فائلیں قبول کرتا ہے۔',
  },
  {
    id: 'wa-faq-11',
    question: 'کیا مجھے WhatsApp کے لیے JPG یا PNG استعمال کرنا چاہیے؟',
    answer: 'تصویروں کے لیے JPG استعمال کریں۔ JPG کیمرہ تصویروں کے لیے کہیں چھوٹی فائلیں بناتا ہے اور WhatsApp اسے بہترین طریقے سے سنبھالتا ہے۔ PNG صرف ان تصویروں کے لیے استعمال کریں جنہیں شفافیت کی ضرورت ہو، جیسے لوگو، کیونکہ PNG فائلیں بہت بڑی ہوتی ہیں۔',
  },
  {
    id: 'wa-faq-12',
    question: 'کیا میں WhatsApp پر WebP تصویریں بھیج سکتا ہوں؟',
    answer: 'WhatsApp WebP فائلیں وصول کر سکتا ہے، لیکن وہ عام تصویر کے طور پر پری ویو نہیں ہو سکتیں، اور کچھ فون انہیں عجیب طریقے سے سنبھالتے ہیں۔ ان تصویروں کے لیے جنہیں آپ چاہتے ہیں کہ لوگ ان لائن دیکھیں، JPG محفوظ انتخاب ہے۔ WebP WhatsApp کے مقابلے میں ویب سائٹس کے لیے بہتر ہے۔',
  },
  {
    id: 'wa-faq-13',
    question: 'میں ایک ساتھ کئی WhatsApp تصویریں کیسے کمپریس کروں؟',
    answer: 'تمام تصویریں ایک ساتھ CompressMyPic پر اپ لوڈ کریں، ان سب پر ایک ہی پری سیٹ لگائیں، اور «سب کچھ ڈاؤن لوڈ کریں (ZIP)» بٹن سے سب کچھ ایک ساتھ ڈاؤن لوڈ کریں۔ پھر فائلیں WhatsApp سے ایک ایک کر کے یا دستاویزات کے طور پر بھیجیں۔',
  },
  {
    id: 'wa-faq-14',
    question: 'کیا WhatsApp ویڈیوز کو بھی اسی طرح کمپریس کرتا ہے؟',
    answer: 'جی ہاں، WhatsApp عام طریقے سے بھیجی گئی ویڈیوز کو بھی کمپریس کرتا ہے، اور انہیں بہت کم کر سکتا ہے۔ CompressMyPic صرف تصویروں (JPG، PNG، WebP) کے ساتھ کام کرتا ہے، ویڈیو کے ساتھ نہیں۔ ویڈیوز کے لیے، اصل معیار برقرار رکھنے کے لیے انہیں دستاویزات کے طور پر بھیجیں۔',
  },
  {
    id: 'wa-faq-15',
    question: 'کیا تصویر کمپریس کرنے سے اصل تصویر میرے فون سے حذف ہو جائے گی؟',
    answer: 'نہیں۔ CompressMyPic ایک نئی، چھوٹی کاپی بناتا ہے اور اسے آپ کے آلے پر ڈاؤن لوڈ کرتا ہے۔ آپ کی اصل تصویر آپ کی گیلری میں بالکل ویسے ہی رہتی ہے، بغیر چھیڑے۔',
  },
  {
    id: 'wa-faq-16',
    question: 'کیا میری تصویریں کمپریس کرتے وقت کسی سرور پر اپ لوڈ ہوتی ہیں؟',
    answer: 'نہیں۔ تمام کمپریشن آپ کے اپنے براؤزر میں آپ کے آلے پر ہوتی ہے، اس لیے آپ کی تصویریں کبھی اپ لوڈ نہیں ہوتیں، نہ محفوظ ہوتی ہیں اور نہ کسی اور کو نظر آتی ہیں۔ وہ آپ کے براؤزر کی میموری میں رہتی ہیں اور ٹیب بند یا ریفریش کرتے ہی صاف ہو جاتی ہیں۔',
  },
  {
    id: 'wa-faq-17',
    question: 'WhatsApp کے لیے تصویر کتنی چھوٹی ہونی چاہیے؟',
    answer: 'روزمرہ شیئرنگ کے لیے، فی تصویر 100–300 KB اچھا ہدف ہے: یہ تیزی سے بھیجی جاتی ہے، کم موبائل ڈیٹا استعمال کرتی ہے، اور فون پر ابھی بھی تیز نظر آتی ہے۔ ایسی تصویر کے لیے جسے آپ پرنٹ کرنا یا رکھنا چاہتے ہیں، زیادہ کوالٹی سیٹنگ پر 500 KB–1 MB کے قریب رہیں۔',
  },
  {
    id: 'wa-faq-18',
    question: 'بھیجنے کے بعد میری WhatsApp تصویریں دھندلی کیوں لگتی ہیں؟',
    answer: 'کیونکہ WhatsApp نے انہیں دوبارہ کمپریس کر دیا جب آپ نے انہیں تصویروں کے طور پر بھیجا تھا۔ حل یہ ہے کہ پہلے خود تصویر کو اپنے کنٹرول والے معیار پر کمپریس کریں، اور پھر اسے دستاویز کے طور پر بھیجیں تاکہ WhatsApp اسے دوبارہ کمپریس نہ کرے۔',
  },
  {
    id: 'wa-faq-19',
    question: 'کیا میں WhatsApp کے لیے اسکرین شاٹ کمپریس کر سکتا ہوں؟',
    answer: 'جی ہاں۔ اسکرین شاٹ کو تصویر کی طرح CompressMyPic پر اپ لوڈ کریں۔ اسکرین شاٹس بہت اچھی طرح کمپریس ہوتے ہیں کیونکہ ان میں چپٹے رنگ کے بڑے حصے ہوتے ہیں — پہلے متوازن پری سیٹ آزمائیں، اور اگر آپ سب سے چھوٹی فائل چاہتے ہیں تو WebP آؤٹ پٹ پر تبدیل کریں۔',
  },
  {
    id: 'wa-faq-20',
    question: 'کیا CompressMyPic WhatsApp تصویروں کے لیے مفت ہے؟',
    answer: 'جی ہاں، مکمل طور پر مفت۔ نہ سائن اپ، نہ واٹر مارک، نہ اس بات کی حد کہ آپ کتنی تصویریں کمپریس کرتے ہیں، اور نہ اکاؤنٹ کی ضرورت۔ بس سائٹ کھولیں، کمپریس کریں، اور ڈاؤن لوڈ کریں۔',
  },
];

export const GuideWhatsAppPageUr: React.FC<GuideWhatsAppPageUrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'معیار کھوئے بغیر WhatsApp کے لیے تصویریں کمپریس کریں';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'سیکھیں کہ معیار کھوئے بغیر WhatsApp کے لیے تصویریں کیسے کمپریس کریں۔ مفت، نجی، بغیر سائن اپ — بھیجنے سے پہلے تصویریں چھوٹی کریں تاکہ وہ تیز رہیں اور تیزی سے بھیجی جائیں۔');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ur/rehnumai/whatsapp-ke-liye-tasaveer-compress-karein/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'معیار کھوئے بغیر WhatsApp کے لیے تصویریں کیسے کمپریس کریں',
          description: 'CompressMyPic سے تصویر کمپریس کریں اور اسے WhatsApp پر دستاویز کے طور پر بھیجیں تاکہ وہ تیز رہے۔',
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
          headline: "معیار کھوئے بغیر WhatsApp کے لیے تصویریں کمپریس کریں",
          description: "سیکھیں کہ معیار کھوئے بغیر WhatsApp کے لیے تصویریں کیسے کمپریس کریں۔ مفت، نجی، بغیر سائن اپ — بھیجنے سے پہلے تصویریں چھوٹی کریں تاکہ وہ تیز رہیں اور تیزی سے بھیجی جائیں۔",
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
          mainEntityOfPage: "https://compressmypic.online/ur/rehnumai/whatsapp-ke-liye-tasaveer-compress-karein/",
          inLanguage: 'ur',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "ہوم", item: "https://compressmypic.online/ur/" },
            { '@type': 'ListItem', position: 2, name: "رہنمائیاں", item: "https://compressmypic.online/ur/" },
            { '@type': 'ListItem', position: 3, name: "معیار کھوئے بغیر WhatsApp کے لیے تصویریں کمپریس کریں", item: "https://compressmypic.online/ur/rehnumai/whatsapp-ke-liye-tasaveer-compress-karein/" },
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
            معیار کھوئے بغیر WhatsApp کے لیے تصویریں کیسے کمپریس کریں
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            تحریر: <a href="/ur/hamare-bare-mein/" onClick={(e) => { e.preventDefault(); onNavigate('/ur/hamare-bare-mein/'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            WhatsApp آپ کی بھیجی گئی ہر تصویر کو چھوٹا کر دیتا ہے — اکثر ضرورت سے کہیں زیادہ۔ پہلے خود اپنی تصویریں کمپریس کریں، پھر انہیں صحیح طریقے سے بھیجیں، اور وہ تیز پہنچیں گی، تیزی سے بھیجی جائیں گی، اور کم موبائل ڈیٹا استعمال کریں گی۔
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>WhatsApp آپ کی تصویریں دھندلی کیوں کر دیتا ہے؟</span>
            </h2>
            <p>
              جب آپ WhatsApp پر عام طریقے سے تصویر بھیجتے ہیں، تو WhatsApp اسے پہنچانے سے پہلے دوبارہ کمپریس کر دیتا ہے۔ 3 MB کیمرہ تصویر نرم تفصیل اور بلاکی رنگوں کے ساتھ 100 KB فائل کے طور پر پہنچ سکتی ہے۔ WhatsApp یہ ڈیٹا اور اسٹوریج بچانے کے لیے کرتا ہے، لیکن آپ کو یہ فیصلہ کرنے کا موقع نہیں ملتا کہ کتنا معیار ضائع ہو۔
            </p>
            <p>
              تصویر بھیجنے کا ایک دوسرا طریقہ ہے جسے زیادہ تر لوگ کبھی استعمال نہیں کرتے: اسے دستاویز کے طور پر بھیجنا۔ دستاویزات بالکل ویسے ہی پہنچائی جاتی ہیں، بغیر کسی اضافی کمپریشن کے۔ چال یہ ہے کہ پہلے خود تصویر کو چھوٹا کریں — ایسی کوالٹی سیٹنگ سے جسے آپ کنٹرول کریں — اور پھر اسے دستاویز کے طور پر بھیجیں۔ آپ کو ایک چھوٹی فائل اور ایک تیز تصویر ایک ساتھ ملتی ہے۔
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>مرحلہ بہ مرحلہ: WhatsApp کے لیے تصویر کمپریس کریں</span>
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
              alt="WhatsApp پر بھیجنے سے پہلے CompressMyPic پر تصویر اپ لوڈ کرنے کا اسکرین شاٹ"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              اپنی تصویر CompressMyPic پر اپ لوڈ کریں — ڈریگ کر کے چھوڑیں، یا اپنی گیلری سے چنیں۔
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>آپ کو کون سی کوالٹی سیٹنگ استعمال کرنی چاہیے؟</span>
            </h2>
            <p>
              کوئی ایک بہترین نمبر نہیں ہے — یہ تصویر اور اس کے مقصد پر منحصر ہے۔ اسے شروعاتی نقطہ بنائیں اور ہر بار پہلے اور بعد کا موازنہ دیکھیں:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">روزمرہ تصویریں: 70%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  متوازن پری سیٹ۔ سائز میں بڑی بچت، اور تصویر کسی بھی فون اسکرین پر ابھی بھی تیز نظر آتی ہے۔ WhatsApp کے لیے بہترین ڈیفالٹ۔
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">اہم تصویریں: 80–85%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  خاندان کی تصویریں، سفر کی تصویریں، ہر وہ چیز جسے آپ رکھنا چاہتے ہیں۔ فائل بڑی ہوتی ہے، لیکن چہروں اور مناظر کی باریک تفصیل بچ جاتی ہے۔
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">فوری شیئرز: 50–60%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  میمز، فوری اپ ڈیٹس، سست موبائل ڈیٹا پر تصویریں۔ بہت چھوٹی فائلیں جو فون اسکرین کے سائز پر ابھی بھی ٹھیک لگتی ہیں۔
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>بہترین نتائج کے لیے تجاویز</span>
            </h2>
            <ul className="space-y-2 list-disc ps-5 text-sm sm:text-base">
              <li>ایک بار کمپریس کریں، اور صرف ایک بار۔ پہلے سے کمپریس شدہ تصویر کو دوسری بار کمپریس کرنے سے تقریباً کوئی اضافی بچت نہیں ہوتی اور تفصیل ضائع ہو جاتی ہے۔</li>
              <li>اگر معیار اہم ہے تو کمپریس شدہ فائل کو ہمیشہ دستاویز کے طور پر بھیجیں — یہی واحد طریقہ ہے کہ WhatsApp اسے دوبارہ کمپریس نہ کرے۔</li>
              <li>کئی تصویریں ایک ہی سیٹنگز سے ایک ساتھ کمپریس کریں اور انہیں «سب کچھ ڈاؤن لوڈ کریں (ZIP)» بٹن سے ایک ساتھ ڈاؤن لوڈ کریں۔</li>
              <li>متن والے اسکرین شاٹس اور گرافکس کے لیے WebP آؤٹ پٹ آزمائیں — یہ تیز کنارے برقرار رکھتا ہے اور JPG سے چھوٹی فائل بناتا ہے۔</li>
              <li>آپ کی اصل تصویر کبھی تبدیل نہیں ہوتی۔ CompressMyPic ایک نئی، چھوٹی کاپی محفوظ کرتا ہے، اس لیے آپ ہمیشہ واپس جا کر کوئی مختلف کوالٹی آزما سکتے ہیں۔</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.webp"
              alt="CompressMyPic میں کوالٹی سلائیڈر اور لائیو پہلے اور بعد کے فائل سائز کا اسکرین شاٹ"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              کوالٹی سلائیڈر کو حرکت دیں اور پہلے اور بعد کا سائز لائیو اپ ڈیٹ ہوتے دیکھیں جب تک کہ فائل آپ کی مرضی کے سائز کی نہ ہو جائے۔
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>عام غلطیاں جن سے بچیں</span>
            </h2>
            <ul className="space-y-2 list-disc ps-5 text-sm sm:text-base">
              <li>کمپریس کرنے کے بعد تصویر کو تصویر کے طور پر بھیجنا — WhatsApp اسے دوسری بار کمپریس کر دے گا اور آپ کی محنت ضائع کر دے گا۔</li>
              <li>چہروں والی تصویروں کے لیے کوالٹی 40% سے نیچے لے جانا — جلد اور باریک تفصیل کم کوالٹی پر بہت جلد بلاکی ہو جاتی ہے۔</li>
              <li>کیمرہ تصویروں کے لیے PNG استعمال کرنا — PNG فائلیں تصویروں کے لیے JPG سے بہت بڑی ہوتی ہیں اور WhatsApp پر آپ کو کچھ نہیں دیتیں۔</li>
              <li>نتیجہ دیکھنا بھول جانا — بھیجنے سے پہلے ہمیشہ پہلے اور بعد کا موازنہ دیکھیں، خاص طور پر متن والی تصویروں کے لیے۔</li>
            </ul>
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
                onClick={() => onNavigate('/ur/rehnumai/jpg-vs-png-vs-webp/')}
                className={`text-start p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG بمقابلہ PNG بمقابلہ WebP — آپ کو کون سا فارمیٹ استعمال کرنا چاہیے؟</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">فائل سائز، معیار اور شفافیت کا موازنہ، تاکہ آپ ہر بار صحیح فارمیٹ چنیں۔</p>
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
              onClick={() => onNavigate('/ur/rehnumai/tasveer-ka-size-100kb-tak-kam-karein/')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              تصویر کو 100KB تک کم کریں
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
