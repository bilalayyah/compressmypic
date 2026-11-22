import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageUrProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageUr: React.FC<DisclaimerPageUrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'دستبرداری | CompressMyPic – مفت امیج ٹولز';
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
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>تصویر کمپریسر پر واپس جائیں</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              دستبرداری
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            آخری تازہ کاری: 18 نومبر 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. عمومی معلومات
            </h2>
            <p>
              CompressMyPic ایک مفت آن لائن تصویر کمپریشن اور ایڈیٹنگ سروس ہے۔ اس ویب سائٹ پر موجود ٹولز، گائیڈز اور مضامین صرف عمومی معلومات اور عملی استعمال کے لیے فراہم کیے گئے ہیں۔ یہ کسی بھی قسم کی پیشہ ورانہ مشورہ نہیں ہیں — نہ قانونی، نہ طبی، نہ مالی، نہ تکنیکی مشورہ — اور یہ آپ اور CompressMyPic کے درمیان کوئی پیشہ ورانہ تعلق قائم نہیں کرتے۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. کوئی وارنٹی نہیں
            </h2>
            <p>
              یہ سروس «جیسا ہے» اور «جیسا دستیاب ہے» کی بنیاد پر فراہم کی جاتی ہے، بغیر کسی قسم کی وارنٹی کے، چاہے وہ واضح ہو یا مضمر۔ ہم یہ وارنٹی نہیں دیتے کہ ٹولز ہمیشہ دستیاب، بلا تعطل، غلطی سے پاک، یا نقصان دہ اجزا سے پاک ہوں گے، یا کہ کوئی خاص تصویر کسی خاص سائز یا معیار تک کمپریس ہو جائے گی۔ نتائج اصل تصویر، اس کے فارمیٹ اور آپ کے براؤزر پر منحصر ہوتے ہیں، اس لیے کسی بھی ٹول کے استعمال سے پہلے اپنی اصل فائلوں کی کاپی ہمیشہ محفوظ رکھیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. مواد کی درستگی
            </h2>
            <p>
              ہم اپنی گائیڈز، مضامین اور ٹولز کی تفصیل کو درست اور تازہ رکھنے کی بھرپور کوشش کرتے ہیں، لیکن تصویر کے فارمیٹس، براؤزرز اور ویب معیارات وقت کے ساتھ بدلتے رہتے ہیں۔ ہماری بھرپور کوشش کے باوجود اس سائٹ کی معلومات پرانی ہو سکتی ہیں یا ان میں غلطیاں ہو سکتی ہیں۔ اہم تفصیلات — جیسے کسی پلیٹفارم پر اپ لوڈ کرنے کے لیے فائل سائز کی حد — پر انحصار کرنے سے پہلے ہمیشہ اس پلیٹفارم کی اپنی تازہ دستاویزات سے ان کی تصدیق کریں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. آپ کی فائلیں آپ کی ذمہ داری ہیں
            </h2>
            <p>
              تصویریں آپ کے براؤزر میں مقامی طور پر پروسیس ہوتی ہیں اور ہمارے سرورز پر کبھی اپ لوڈ نہیں ہوتیں۔ اس کا مطلب یہ بھی ہے کہ ہم آپ کے لیے کوئی فائل واپس نہیں لا سکتے: اگر آپ ہمارے ٹولز استعمال کرتے ہوئے کوئی اصل تصویر اوور رائٹ کر دیں، حذف کر دیں، یا کھو دیں، تو ہم اسے بحال نہیں کر سکتے۔ براہِ کرم ہر اہم تصویر کا بیک اپ رکھیں، اور صرف ان فائلوں کی کاپیاں پروسیس کریں جن کے مالک آپ ہوں یا جنہیں ایڈٹ کرنے کی آپ کو اجازت ہو۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. تھرڈ پارٹی سروسز اور لنکس
            </h2>
            <p>
              یہ سائٹ تھرڈ پارٹی سروسز استعمال کرتی ہے — استعمال کے اعداد و شمار کے لیے Google Analytics 4، رابطہ فارم کے لیے FormSubmit، اور گمنام تبصروں کے لیے Cloudflare Worker — اور یہ بیرونی ویب سائٹس سے لنک کرتی ہے۔ ہم ان سروسز یا سائٹس کو کنٹرول نہیں کرتے، اور ان کے مواد، دستیابی، رازداری کے طریقوں، یا درستگی کے ذمہ دار نہیں ہیں۔ جب آپ انہیں استعمال کرتے ہیں تو ان کی اپنی شرائط اور رازداری کی پالیسیاں لاگو ہوتی ہیں۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. اشتہارات
            </h2>
            <p>
              یہ سائٹ فی الحال کوئی اشتہار نہیں دکھاتی۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. ذمہ داری کی حد
            </h2>
            <p>
              قانون کی اجازت کی مکمل حد تک، CompressMyPic اور اس کا آپریٹر اس ویب سائٹ یا اس کے ٹولز کے استعمال — یا استعمال نہ کر سکنے — سے پیدا ہونے والے کسی بھی براہِ راست، بالواسطہ، اتفاقی، یا نتیجہ خیز نقصان یا خرابی کے ذمہ دار نہیں ہوں گے، بشمول فائلوں کا نقصان، ڈیٹا کا نقصان، یا منافع کا نقصان، مگر ان تک محدود نہیں۔ سروس سے عدم اطمینان کا آپ کا واحد حل اسے استعمال کرنا بند کر دینا ہے۔
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. صارفین کے تبصرے
            </h2>
            <p>
              ہمارے ٹولز کے نیچے پوسٹ کیے گئے تبصرے وزیٹرز لکھتے ہیں اور ان کی اپنی رائے ظاہر کرتے ہیں، ہماری نہیں۔ ہم تبصروں کی نگرانی کرتے ہیں اور اسپام، بدسلوکی والے، یا موضوع سے ہٹے ہوئے کسی بھی تبصرے کو ہٹا سکتے ہیں، لیکن ہم صارفین کے تبصروں کے مواد کی توثیق نہیں کرتے اور نہ اس کے ذمہ دار ہیں۔ کسی تبصرے میں کبھی پاس ورڈ، ادائیگی کی تفصیل، یا حساس ذاتی معلومات شیئر نہ کریں۔
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. رابطہ
            </h2>
            <p>
              اگر آپ کو اس دستبرداری کے بارے میں کوئی سوال ہے، تو ہم سے{' '}
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
