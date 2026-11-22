import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageUrProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageUr: React.FC<CookiePolicyPageUrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'کوکی پالیسی | CompressMyPic – کوکیز کیسے استعمال ہوتی ہیں';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              کوکی پالیسی
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            آخری تازہ کاری: 18 نومبر 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. کوکیز کیا ہوتی ہیں؟
            </h2>
            <p>
              کوکیز چھوٹی ٹیکسٹ فائلیں ہوتی ہیں جنہیں کوئی ویب سائٹ آپ کے براؤزر سے آپ کے آلے پر محفوظ کرنے کو کہتی ہے۔ وہ آپ کے دورے کے بارے میں معلومات یاد رکھ سکتی ہیں — مثال کے طور پر، کیا آپ نے کوئی پیغام پہلے دیکھا ہے — تاکہ سائٹ یا اس پر موجود کوئی سروس بعد کے دورے پر آپ کے براؤزر کو پہچان سکے۔ یہ پالیسی بتاتی ہے کہ CompressMyPic پر کون سی کوکیز استعمال ہوتی ہیں، وہ کیوں استعمال ہوتی ہیں، اور آپ انہیں کیسے کنٹرول کر سکتے ہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. وہ کوکیز جو ہم نہیں لگاتے
            </h2>
            <p>
              CompressMyPic خود کوئی کوکی نہیں لگاتا۔ ہمارے امیج ٹولز مکمل طور پر آپ کے براؤزر میں چلتے ہیں: کمپریشن کے لیے نہ اکاؤنٹ، نہ لاگ ان، اور نہ کوکی کی ضرورت ہوتی ہے۔ ہم آپ کو یاد رکھنے، آپ کو ٹریک کرنے، یا آپ کی ترجیحات محفوظ کرنے کے لیے کوئی کوکی نہیں لگاتے۔ آپ کی تصویریں آپ کا براؤزر کبھی نہیں چھوڑتیں، اور ان کے بارے میں کچھ بھی کسی کوکی میں محفوظ نہیں ہوتا۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. اشتہاری کوکیز
            </h2>
            <p>
              CompressMyPic فی الحال کوئی اشتہار نہیں دکھاتا اور نہ کوئی اشتہاری کوکی لگاتا ہے۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Google Analytics 4 کی کوکیز
            </h2>
            <p>
              ہم Google Analytics 4 (GA4) استعمال کرتے ہیں تاکہ مجموعی طور پر سمجھ سکیں کہ سائٹ کیسے استعمال ہوتی ہے — مثال کے طور پر، کون سے ٹولز مقبول ہیں اور کن صفحات پر دورے ہوتے ہیں۔ GA4 آپ کے آلے پر کوکیز لگا سکتا ہے، جیسے _ga، تاکہ ایک دورے کو دوسرے سے الگ پہچانا جا سکے۔ ڈیٹا گمنام ہوتا ہے اور صرف خلاصے کی صورت میں استعمال ہوتا ہے؛ ہم GA4 کو آپ کی ذاتی شناخت کے لیے استعمال نہیں کرتے۔ آپ کسی بھی وقت Google Analytics Opt-out Add-on (https://tools.google.com/dlpage/gaoptout) انسٹال کر کے یا اپنے براؤزر کی سیٹنگز میں کوکیز بند کر کے Google Analytics سے آپٹ آؤٹ کر سکتے ہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. رضامندی (EEA، برطانیہ اور سوئٹزرلینڈ)
            </h2>
            <p>
              چونکہ یہ سائٹ فی الحال کوئی اشتہار نہیں دکھاتی، اس لیے کوئی اشتہاری رضامندی کا پیغام نہیں دکھایا جاتا اور نہ کوئی اشتہاری رضامندی مانگی جاتی ہے۔ استعمال کے اعداد و شمار Google Analytics سے جمع کیے جاتے ہیں؛ آپ اپنے براؤزر کی سیٹنگز سے تجزیاتی کوکیز کو بلاک کر سکتے ہیں (دفعہ 8 دیکھیں)۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. دیگر تھرڈ پارٹی سروسز
            </h2>
            <p>
              اس سائٹ پر موجود چند دیگر سروسز اپنی کوکیز یا اسی طرح کی اسٹوریج استعمال کر سکتی ہیں۔ Google reCAPTCHA، جو ہمارے رابطہ فارم کو اسپام سے بچاتا ہے، انسانوں کو بوٹس سے الگ پہچاننے کے لیے کوکیز لگا سکتا ہے؛ اس کا استعمال Google کی{' '}
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
              {' '}کے تحت ہوتا ہے۔ Cloudflare، جو اس سائٹ کو ہوسٹ کرتا ہے، سائٹ کو غلط استعمال سے بچانے کے لیے ایک سیکیورٹی کوکی لگا سکتا ہے۔ ہمارے ٹولز کے نیچے گمنام تبصرے صرف نام مانگتے ہیں، جو تبصرہ سروس محفوظ کرتی ہے — اس سائٹ کی کسی کوکی میں نہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. براؤزر اسٹوریج جو کوکی نہیں ہے
            </h2>
            <p>
              آپ کا براؤزر مقامی طور پر تھوڑی سی معلومات بھی محفوظ کرتا ہے جو کوکی نہیں ہوتی۔ اگر آپ کوئی تبصرہ پوسٹ کرتے ہیں، تو آپ کا براؤزر آپ کا ٹائپ کیا ہوا نام یاد رکھ سکتا ہے تاکہ آپ کو دوبارہ ٹائپ نہ کرنا پڑے، اور اگر آپ سائٹ کی زبان تبدیل کرتے ہیں، تو آپ کا براؤزر اگلے دورے کے لیے وہ انتخاب یاد رکھ سکتا ہے۔ یہ معلومات آپ کے اپنے آلے پر رہتی ہیں، ہمارے سرورز کو کبھی نہیں بھیجی جاتیں، اور آپ اپنے براؤزر کی سائٹ ڈیٹا صاف کر کے انہیں کسی بھی وقت صاف کر سکتے ہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. کوکیز کو کیسے کنٹرول کریں
            </h2>
            <p>
              آپ اپنے آلے پر پہلے سے محفوظ کوکیز حذف کر سکتے ہیں اور اپنے براؤزر کی سیٹنگز سے مستقبل میں کوکیز لگنے سے روک سکتے ہیں — ہر بڑا براؤزر (Chrome، Firefox، Safari، Edge) یہ اختیار اپنی پرائیویسی یا سیکیورٹی سیٹنگز میں دیتا ہے۔ تمام کوکیز بلاک کرنے سے ہمارے امیج ٹولز خراب نہیں ہوں گے، کیونکہ وہ کوکیز پر انحصار نہیں کرتے، لیکن اس سے تجزیات جیسی تھرڈ پارٹی سروسز کے فیچرز متاثر ہو سکتے ہیں۔ آپ اپنے براؤزر کا پرائیویٹ یا انکوگنٹو موڈ بھی استعمال کر سکتے ہیں، جو ونڈو بند کرتے ہی کوکیز حذف کر دیتا ہے۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. اس پالیسی میں تبدیلیاں
            </h2>
            <p>
              ہم اس پالیسی کو اس وقت اپ ڈیٹ کر سکتے ہیں جب سائٹ تبدیل ہو — مثال کے طور پر، اگر ہم کوئی نیا اشتہاری پارٹنر یا تجزیاتی سروس شامل کریں۔ جب ہم ایسا کریں گے، تو اس صفحے کے اوپر «آخری تازہ کاری» کی تاریخ بدل دیں گے۔ تبدیلی کے بعد سائٹ کا استعمال جاری رکھنے کا مطلب ہے کہ آپ اپ ڈیٹ شدہ پالیسی کو قبول کرتے ہیں۔
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. رابطہ
            </h2>
            <p>
              اگر آپ کو اس پالیسی کے بارے میں کوئی سوال ہے، تو ہم سے{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}پر رابطہ کریں یا ہماری{' '}
              <a
                href="/ur/razdari-ki-policy/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/ur/razdari-ki-policy/');
                }}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                رازداری کی پالیسی
              </a>
              {' '}پڑھیں۔
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
