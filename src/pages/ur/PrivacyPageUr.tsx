import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageUrProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageUr: React.FC<PrivacyPageUrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'رازداری کی پالیسی | CompressMyPic – آپ کی تصویریں نجی رہتی ہیں';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/ur/')}
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>تصویر کمپریسر پر واپس جائیں</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              رازداری کی پالیسی
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            آخری تازہ کاری: 15 نومبر 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. کلائنٹ سائیڈ تصویر پروسیسنگ
            </h2>
            <p>
              CompressMyPic ایک مفت آن لائن امیج کمپریسر ہے۔ تصویریں HTML5 Canvas استعمال کر کے آپ کے براؤزر میں مقامی طور پر پروسیس ہوتی ہیں — وہ کبھی ہمارے سرورز پر اپ لوڈ نہیں ہوتیں، اور ہم آپ کی تصویریں جمع، محفوظ یا شیئر نہیں کرتے۔ جب آپ اپنے براؤزر کا ٹیب بند یا ریفریش کرتے ہیں، تو میموری میں موجود تمام عارضی آبجیکٹس مٹ جاتے ہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. ذاتی ڈیٹا جمع نہیں کیا جاتا
            </h2>
            <p>
              کمپریشن ٹول استعمال کرنے کے لیے ہم اکاؤنٹ، پاس ورڈ، ای میل پتہ، یا فون نمبر نہیں مانگتے۔ رابطہ فارم کے ذریعے آپ رضاکارانہ طور پر جو بھی رابطہ معلومات بھیجتے ہیں، وہ صرف آپ کے مخصوص سوال کا جواب دینے کے لیے استعمال ہوتی ہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. اشتہارات
            </h2>
            <p>
              CompressMyPic فی الحال کوئی اشتہار نہیں دکھاتا۔ اس سائٹ سے کوئی اشتہاری کوکی نہیں لگائی جاتی۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. تجزیات
            </h2>
            <p>
              ہم Google Analytics 4 (GA4) استعمال کرتے ہیں تاکہ مجموعی طور پر سمجھ سکیں کہ سائٹ کیسے استعمال ہوتی ہے — مثال کے طور پر، کون سے ٹولز مقبول ہیں اور کن صفحات پر دورے ہوتے ہیں۔ GA4 گمنام استعمال کا ڈیٹا جمع کرتا ہے جیسے آپ کن صفحات پر جاتے ہیں، کتنی دیر رہتے ہیں، اور آپ کے آلے اور براؤزر کے بارے میں عمومی معلومات۔ یہ آپ کے آلے پر کوکیز لگا سکتا ہے (جیسے _ga) تاکہ ایک دورے کو دوسرے سے الگ پہچانا جا سکے۔ ہم GA4 کو آپ کی ذاتی شناخت کے لیے استعمال نہیں کرتے۔ آپ کسی بھی وقت Google Analytics Opt-out Add-on (https://tools.google.com/dlpage/gaoptout) انسٹال کر کے یا اپنے براؤزر کی سیٹنگز میں کوکیز بند کر کے Google Analytics سے آپٹ آؤٹ کر سکتے ہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. تھرڈ پارٹی لنکس
            </h2>
            <p>
              ہماری ویب سائٹ میں بیرونی سائٹس کے لنکس ہو سکتے ہیں۔ ہم تھرڈ پارٹی پلیٹفارمز کی رازداری کے طریقوں یا مواد کے ذمہ دار نہیں ہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. کوکیز اور رضامندی
            </h2>
            <p>
              CompressMyPic خود اپنے امیج ٹولز کے لیے کوئی کوکی نہیں لگاتا: کمپریشن مکمل طور پر آپ کے براؤزر میں چلتی ہے اور اسے ہماری طرف سے کسی کوکی، اکاؤنٹ، یا محفوظ ترجیح کی ضرورت نہیں ہوتی۔ اس سائٹ پر کوکیز تھرڈ پارٹی سروسز سے آتی ہیں۔ مثال کے طور پر، Google Analytics استعمال کے اعداد و شمار کے لیے کوکیز لگا سکتا ہے۔ آپ کا براؤزر یہ کوکیز آپ کے آلے پر محفوظ کرتا ہے، اور آپ انہیں اپنے براؤزر کی سیٹنگز سے کسی بھی وقت حذف کر سکتے ہیں۔
            </p>
            <p>
              CompressMyPic فی الحال کوئی اشتہار نہیں دکھاتا، اس لیے کسی بھی خطے میں وزیٹرز سے کوئی اشتہاری رضامندی نہیں مانگی جاتی۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. GDPR کے تحت آپ کے حقوق
            </h2>
            <p>
              اگر آپ یورپی اقتصادی علاقے یا برطانیہ میں ہیں، تو جنرل ڈیٹا پروٹیکشن ریگولیشن (GDPR) آپ کو آپ کے ذاتی ڈیٹا پر حقوق دیتا ہے۔ آپ ہم سے اپنے بارے میں ہمارے پاس موجود ذاتی ڈیٹا کی کاپی مانگ سکتے ہیں، اگر وہ غلط ہے تو اسے درست کرنے کو کہہ سکتے ہیں، اسے حذف کرنے کو کہہ سکتے ہیں، ہم سے اس کے استعمال کو محدود کرنے کو کہہ سکتے ہیں، اور اس کی پروسیسنگ پر اعتراض کر سکتے ہیں۔ جہاں پروسیسنگ آپ کی رضامندی پر مبنی ہو، آپ کسی بھی وقت وہ رضامندی واپس لے سکتے ہیں، اور رضامندی واپس لینے سے اس سے پہلے قانونی طور پر کیے گئے ہمارے کسی کام پر اثر نہیں پڑتا۔
            </p>
            <p>
              چونکہ ہمارے ٹولز تصویریں مقامی طور پر پروسیس کرتے ہیں اور ہمارے پاس کوئی صارف اکاؤنٹ نہیں ہے، اس لیے عام طور پر ہمارے پاس موجود واحد ذاتی ڈیٹا وہ نام، ای میل پتہ، اور پیغام ہے جو آپ رابطہ فارم کے ذریعے بھیجتے ہیں۔ ان میں سے کسی بھی حق کو استعمال کرنے کے لیے، ہمیں{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}پر ای میل کریں اور ہم 30 دنوں میں جواب دیں گے۔ اگر آپ سمجھتے ہیں کہ ہم نے آپ کا ڈیٹا غیر منصفانہ طریقے سے سنبھالا ہے، تو آپ کو اپنی مقامی ڈیٹا پروٹیکشن اتھارٹی سے شکایت کرنے کا حق بھی ہے۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. ڈیٹا برقرار رکھنا
            </h2>
            <p>
              ہم ذاتی ڈیٹا صرف اس وقت تک رکھتے ہیں جب تک اس مقصد کے لیے ضروری ہو جس کے لیے وہ جمع کیا گیا تھا۔ رابطہ فارم کے پیغامات صرف اس وقت تک رکھے جاتے ہیں جب تک آپ کے سوال کا جواب نہ دے دیا جائے اور گفتگو ختم نہ ہو جائے، اور اس کے بعد مختصر مدت تک اگر مزید سوالات ہوں؛ وہ کبھی مارکیٹنگ کے لیے استعمال نہیں ہوتے اور کبھی تھرڈ پارٹیز کے ساتھ شیئر نہیں کیے جاتے۔ آپ کی تصویریں بالکل بھی برقرار نہیں رکھی جاتیں: وہ صرف آپ کے براؤزر کی میموری میں اس وقت موجود ہوتی ہیں جب آپ کوئی ٹول استعمال کر رہے ہوں اور ٹیب بند یا ریفریش کرتے ہی مٹ جاتی ہیں۔ مجموعی تجزیاتی ڈیٹا میں کوئی ذاتی معلومات نہیں ہوتیں اور وہ صرف خلاصے کی صورت میں رکھا جاتا ہے۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. سیکیورٹی اور reCAPTCHA
            </h2>
            <p>
              سائٹ HTTPS پر فراہم کی جاتی ہے، اس لیے آپ کے براؤزر اور سائٹ کے درمیان کنکشن خفیہ ہوتا ہے۔ ہمارا رابطہ فارم FormSubmit کے ذریعے پہنچایا جاتا ہے، جو آپ کا پیغام ہمارے ای میل پتے پر بھیجتا ہے، اور فارم Google reCAPTCHA سے محفوظ ہے تاکہ اسپام اور خودکار غلط استعمال کو روکا جا سکے۔ جب آپ فارم جمع کرتے ہیں، تو reCAPTCHA انسانوں کو بوٹس سے الگ پہچاننے کے لیے ہارڈ ویئر اور سافٹ ویئر کی معلومات جمع کر سکتا ہے، جیسے آپ کے براؤزر اور آلے کی تفصیل؛ یہ Google کی{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                پرائیویسی پالیسی
              </a>
              {' '}اور{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                شرائطِ خدمت
              </a>
              {' '}کے تحت ہوتا ہے۔ ہم آپ سے کبھی رابطہ فارم کے ذریعے پاس ورڈ، ادائیگی کی تفصیل، یا حساس ذاتی دستاویزات بھیجنے کو نہیں کہتے، اور آپ کو انہیں کسی پیغام میں شامل نہیں کرنا چاہیے۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. بچوں کی رازداری
            </h2>
            <p>
              CompressMyPic عام سامعین کے لیے ایک ٹول ہے اور 13 سال سے کم عمر بچوں کے لیے نہیں ہے۔ ہم جان بوجھ کر بچوں سے ذاتی معلومات جمع نہیں کرتے۔ اگر آپ والدین یا سرپرست ہیں اور سمجھتے ہیں کہ آپ کے بچے نے رابطہ فارم کے ذریعے ہمیں ذاتی معلومات بھیجی ہیں، تو براہِ کرم ہمیں ای میل کریں اور ہم اسے فوراً حذف کر دیں گے۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. اس پالیسی میں تبدیلیاں
            </h2>
            <p>
              ہم اس پالیسی کو اس وقت اپ ڈیٹ کر سکتے ہیں جب سائٹ تبدیل ہو — مثال کے طور پر، اگر ہم کوئی نئی تجزیاتی سروس، نیا اشتہاری پارٹنر، یا رابطے کا نیا طریقہ شامل کریں۔ جب ہم ایسا کریں گے، تو اس صفحے کے اوپر «آخری تازہ کاری» کی تاریخ بدل دیں گے، اور اہم تبدیلیوں کو یہاں سادہ زبان میں بیان کیا جائے گا۔ تبدیلی کے بعد سائٹ کا استعمال جاری رکھنے کا مطلب ہے کہ آپ اپ ڈیٹ شدہ پالیسی کو قبول کرتے ہیں۔
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. رابطہ
            </h2>
            <p>
              اگر آپ کو اس پالیسی کے بارے میں کوئی سوال ہے، تو ہم سے{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}پر رابطہ کریں۔
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
