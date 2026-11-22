import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageUrProps {
  onNavigate: (path: string) => void;
}

export const AboutPageUr: React.FC<AboutPageUrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'CompressMyPic کے بارے میں – مفت آن لائن تصویر کمپریسر';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'CompressMyPic کے بارے میں – JPG، PNG اور WebP کے لیے ایک مفت آن لائن تصویر کمپریسر۔ بغیر سائن اپ، بغیر واٹر مارک اور بغیر سرور پر اپ لوڈ کے، آن لائن مفت تصویریں کمپریس کریں۔');
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
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            CompressMyPic کے بارے میں
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic ایک مفت، نجی تصویر کمپریسر ہے۔ JPG، PNG اور WebP تصویریں براہِ راست اپنے براؤزر میں کمپریس کریں — تیز، محفوظ، اور اپنی فائلیں کہیں اپ لوڈ کیے بغیر۔
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic کیا ہے؟</span>
            </h2>
            <p>
              CompressMyPic ایک مفت آن لائن تصویر کمپریسر اور امیج آپٹیمائزر ہے جو معیار کھوئے بغیر تصویر کا سائز کم کرنے میں آپ کی مدد کرتا ہے۔ یہ روزمرہ استعمال ہونے والے فارمیٹس — JPG، PNG اور WebP — کے لیے ایک فوٹو کمپریسر اور فوٹو سائز کم کرنے والا ٹول ہے۔ اسے JPG کو 100KB تک کمپریس کرنے، PNG کو آن لائن مفت کمپریس کرنے، WebP تصویریں کمپریس کرنے، یا WhatsApp، Instagram، Facebook یا ای میل پر شیئر کرنے سے پہلے کسی تصویر کا فائل سائز کم کرنے کے لیے استعمال کریں۔
            </p>
            <p>
              روایتی تصویر کمپریشن ویب سائٹس آپ کی حساس ذاتی تصویریں یا کمپنی کے گرافکس کسی اور کے سرور پر اپ لوڈ کر دیتی ہیں۔ اس طریقے سے جائز خدشات پیدا ہوتے ہیں، اور یہی وجہ ہے کہ ہم نے CompressMyPic اس کے بالکل برعکس بنایا ہے — ایک ایسا ٹول جو سب کچھ آپ کے اپنے آلے پر کرتا ہے۔
            </p>
            <p>
              جب آپ کوئی تصویر منتخب کرتے یا ڈریگ کر کے چھوڑتے ہیں، تو آپ کا براؤزر عارضی میموری بفر مختص کرتا ہے، تصویر کو HTML Canvas عنصر پر کھینچتا ہے، کمپریشن الگورتھم لاگو کرتا ہے، اور پھر نئی فائل ایکسپورٹ کرتا ہے — یہ سب آپ کے اپنے براؤزر ٹیب کے اندر ہوتا ہے۔ آپ کی تصویریں کمپریس کرنے کے عمل میں کوئی نیٹ ورک انفراسٹرکچر، ڈیٹا بیس یا کلاؤڈ سرور شامل نہیں ہوتا۔
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>معاون فارمیٹس: JPG، PNG اور WebP</span>
            </h2>
            <p>
              JPG کمپریسر کے طور پر، CompressMyPic آپ کو JPG آن لائن مفت کمپریس کرنے اور اپنی تصویروں کو تیز رکھتے ہوئے JPEG فائل کا سائز کم کرنے دیتا ہے — متوازن پری سیٹ آزمائیں یا کوالٹی سلائیڈر کو نیچے کریں اور 100KB یا 200KB جیسے اہداف تک پہنچنے کے لیے لائیو پہلے اور بعد کا سائز دیکھیں۔ PNG کمپریسر کے طور پر، یہ آپ کو PNG آن لائن مفت کمپریس کرنے دیتا ہے اور لوگو اور گرافکس کے لیے شفافیت برقرار رکھتا ہے۔ اور جب آپ WebP تصویریں کمپریس کرتے ہیں، تو آپ کو سب سے چھوٹی فائلیں ملتی ہیں: WebP عام طور پر اسی معیار پر JPEG سے 25-35% چھوٹا ہوتا ہے، جس کی وجہ سے یہ ویب صفحات کے لیے تصویریں بہتر بنانے کا بہترین انتخاب ہے۔
            </p>
            <p>
              آپ ہر تصویر کا اصل فارمیٹ برقرار رکھ سکتے ہیں، یا JPG، PNG اور WebP کے درمیان تبدیل کر سکتے ہیں۔ کوالٹی سلائیڈر (10% سے 100%)، Low، Balanced اور High پری سیٹس، اور لائیو پہلے اور بعد کا سائز آپ کو فائل سائز اور تصویر کے معیار کے درمیان توازن پر مکمل کنٹرول دیتے ہیں — اور ہم کبھی کسی ایسے درست ہدف-KB ان پٹ باکس کا دعویٰ نہیں کرتے جو ٹول میں موجود ہی نہیں۔
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>ہمارے بنیادی اصول</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">مکمل رازداری</div>
                <p className="text-xs text-[var(--ink-2)]">
                  کوئی بھی فائل کبھی کسی بیرونی سرور یا ڈیٹا بیس کو نہیں چھوتی۔ آپ کی تصویریں اور حساس گرافکس سختی سے آپ کے اپنے آلے پر رہتے ہیں۔ چونکہ کمپریشن آپ کے براؤزر میں ہوتا ہے، اس لیے آپ کا کام کوئی اور کبھی نہیں دیکھتا۔
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">سادہ اور مفت</div>
                <p className="text-xs text-[var(--ink-2)]">
                  نہ سافٹ ویئر انسٹال کرنا، نہ پیڈ پلان، نہ پوشیدہ فیس، نہ اکاؤنٹ بنانا، نہ ای میل کی تصدیق، اور نہ ٹرائل کی حد۔ تصویر آن لائن مفت کمپریس کریں — یہ واقعی مفت ہے، بغیر سائن اپ اور آپ کی کمپریس شدہ تصویروں پر بغیر واٹر مارک کے۔
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">معیار آپ کے کنٹرول میں</div>
                <p className="text-xs text-[var(--ink-2)]">
                  ہم باریک کنٹرول دیتے ہیں: کوالٹی سلائیڈر کو لائیو گھسیٹیں، Low، Balanced یا High پری سیٹس میں سے کوئی بھی منتخب کریں، آؤٹ پٹ فائل فارمیٹ چنیں، اور فرق فوراً دیکھنے کے لیے ہر تصویر کو ساتھ ساتھ موازنہ کریں۔ معیار کھوئے بغیر تصویر کا سائز کم کریں، اپنی شرائط پر۔
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">بلک امیج کمپریسر</div>
                <p className="text-xs text-[var(--ink-2)]">
                  ایک ہی سیٹنگز سے کئی تصویریں ایک ساتھ کمپریس کریں اور انہیں «سب کچھ ڈاؤن لوڈ کریں (ZIP)» بٹن سے ایک ساتھ ڈاؤن لوڈ کریں — فوٹو لائبریریوں، پروڈکٹ کیٹلاگز اور ویب سائٹ کی تصویر فولڈرز کے لیے ایک بیچ امیج کمپریسر۔
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">خودکار حفاظتی جانچ</div>
                <p className="text-xs text-[var(--ink-2)]">
                  کمپریسر آپ کی تصویروں میں شفافیت کا پتہ لگاتا ہے۔ اگر آپ شفاف PNG کے لیے JPEG آؤٹ پٹ منتخب کرتے ہیں، تو ہم انتباہ دکھاتے ہیں کیونکہ JPEG شفافیت کو سپورٹ نہیں کرتا — اس لیے آپ غلطی سے اپنا الفا چینل کبھی نہیں کھوتے۔
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">تیز کارکردگی</div>
                <p className="text-xs text-[var(--ink-2)]">
                  چونکہ تمام پروسیسنگ آپ کے آلے پر مقامی طور پر ہوتی ہے، اس لیے فائلوں کے سرور پر جانے اور واپس آنے کا انتظار نہیں کرنا پڑتا۔ آپ ڈیسک ٹاپ یا موبائل پر، فی تصویر 20 MB تک کی بڑی فائلیں بھی تیزی سے کمپریس کر سکتے ہیں۔
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic کس کے لیے ہے؟</span>
            </h2>
            <p>
              CompressMyPic ہر اس شخص کے لیے ہے جسے چھوٹی تصویریں چاہیے: بلاگرز اور ویب سائٹ مالکان جو ویب کے لیے تصویریں بہتر بنانا اور ویب سائٹ کے صفحات کے لیے تصویر کا سائز کم کرنا چاہتے ہیں؛ فوٹوگرافرز جنہیں شیئر کرنے یا پروف دینے سے پہلے فوٹو فائل کا سائز کم کرنا ہوتا ہے؛ آن لائن بیچنے والے جو کسی ویب سائٹ یا اسٹور لسٹنگ کے لیے تصویر کمپریس کرتے ہیں؛ طلبہ اور دفتری ملازمین جو ای میل اٹیچمنٹ کے لیے تصویریں کمپریس کرتے ہیں؛ اور ہر وہ شخص جو WhatsApp، Instagram یا Facebook کے لیے تصویر کمپریس کرنا چاہتا ہے تاکہ وہ تیزی سے بھیجی جائے اور کم موبائل ڈیٹا استعمال ہو۔
            </p>
            <p>
              یہ ڈیسک ٹاپ اور موبائل براؤزرز پر کام کرتا ہے، اسے انسٹال کرنے کی ضرورت نہیں، اور یہ آپ سے کبھی سائن اپ نہیں مانگتا — بس سائٹ کھولیں، اپنی تصویریں اپ لوڈ کریں، اور چھوٹی فائلیں ڈاؤن لوڈ کریں۔
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>بنانے والے سے ملیں: بلال</span>
            </h2>
            <p>
              CompressMyPic بلال نے بنایا ہے، جو ویب کے لیے مفت، رازداری کو ترجیح دینے والے ٹولز بنانے والا ایک آزاد میکر ہے۔ اس نے CompressMyPic اس وقت شروع کیا جب وہ ان امیج کمپریسرز سے تنگ آ گیا جو فائل چھوٹی کرنے کے لیے لوگوں کو اپنی ذاتی تصویریں کسی اجنبی کے سرور پر اپ لوڈ کرنے پر مجبور کرتے تھے۔ اس کا جواب ایک ایسا ٹول تھا جو سارا کام وزیٹر کے اپنے براؤزر کے اندر کرتا ہے — نہ اپ لوڈ، نہ اکاؤنٹ، نہ واٹر مارک، اور نہ آخر میں کوئی غیر متوقع بل۔
            </p>
            <p>
              بلال سائٹ کے تمام 47 ٹولز خود ڈیزائن، بنا اور برقرار رکھتا ہے — کمپریسر اور کنورٹرز سے لے کر فیویکون جنریٹر تک۔ وہ سپورٹ پیغامات کا جواب خود دیتا ہے، ہر فیڈ بیک پڑھتا ہے، اور ٹولز کو سب کے لیے مفت رکھتا ہے، چاہے کوئی ایک تصویر کمپریس کرے یا ہزار۔ سائٹ کے فوٹر میں شاہین کے لیے ایک چھوٹا سا شکریہ درج ہے، جن کی حوصلہ افزائی نے بلال کو بناتے رہنے اور ٹولز کو صرف مقبول نہیں بلکہ واقعی مفید بنانے کی ترغیب دی۔
            </p>
            <p>
              اگر آپ کام کو فالو کرنا چاہتے ہیں، تو آپ پروجیکٹ کو{' '}
              <a
                href="https://github.com/bilalayyah/compressmypic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                GitHub
              </a>
              {' '}پر تلاش کر سکتے ہیں، بلال کی گائیڈز{' '}
              <a
                href="https://dev.to/bilalayyah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                Dev.to
              </a>
              {' '}پر پڑھ سکتے ہیں، یا{' '}
              <button
                type="button"
                onClick={() => onNavigate('/ur/rabta-karein/')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                رابطہ صفحہ
              </button>
              {' '}کے ذریعے سلام کہہ سکتے ہیں۔
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>رازداری اور سیکیورٹی</span>
            </h2>
            <p>
              CompressMyPic میں ہم مانتے ہیں کہ رازداری ایک اہم حق ہے، نہ کہ کوئی اختیاری فیچر۔ آج کے دور میں بہت سی ویب سائٹس بطورِ ڈیفالٹ ڈیٹا جمع کرتی ہیں، یہاں تک کہ ایک امیج کمپریشن ٹول بھی۔ ہم رازداری کو ترجیح دینے والا طریقہ اپناتے ہیں اور آپ کے میڈیا کو آپ کے کمپیوٹر پر مقامی طور پر پروسیس کرنے کے لیے جدید براؤزر ٹیکنالوجی پر انحصار کرتے ہیں۔
            </p>
            <p>
              آپ کی فائلیں آپ کے براؤزر کی میموری میں رہتی ہیں اور ٹیب بند کرتے یا صفحہ ریفریش کرتے ہی فوراً صاف ہو جاتی ہیں۔ چونکہ تصویر کی کوئی پروسیسنگ ریموٹ سرورز پر نہیں ہوتی، اس لیے ہم آپ کی تصویروں کا ڈیٹا جمع نہیں کر سکتے، چاہے ہم چاہیں بھی۔ یہی اس ٹول کا ڈیزائن اور وعدہ ہے۔
            </p>
            <p>
              ہم رازداری کو کیسے سنبھالتے ہیں، یہ بالکل جاننے کے لیے براہِ کرم ہماری{' '}
              <button
                type="button"
                onClick={() => onNavigate('/ur/razdari-ki-policy/')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                رازداری کی پالیسی
              </button>
              {' '}دیکھیں۔
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>ہمارا مشن</span>
            </h2>
            <p>
              ہم مانتے ہیں کہ بہترین ٹولز سب سے سادہ، تیز اور شفاف ہوتے ہیں۔ ہمارا مشن ہر کسی کو ایک تیز، قابلِ اعتماد اور مکمل طور پر مفت امیج کمپریسر فراہم کرنا ہے — بغیر کسی پوشیدہ سمجھوتے کے، بغیر آپ کو ٹریک کرنے والے اشتہارات کے، بغیر سرور اپ لوڈ کے، اور آپ کی رازداری پر کوئی سمجھوتا کیے بغیر۔ چاہے آپ ایک JPG کمپریس کریں یا WebP تصویروں کا پورا بیچ، ٹول کو بس کام کرنا چاہیے۔
            </p>
            <p>
              کوئی سوال، خیال، یا کچھ ملا جسے ہم بہتر کر سکتے ہیں؟ ہم آپ سے سننا چاہیں گے۔ آپ سائٹ کے ذریعے براہِ راست ہم تک پہنچ سکتے ہیں۔
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ur/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              تصویریں کمپریس کرنا شروع کریں
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ur/rabta-karein/')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              ہم سے رابطہ کریں
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
