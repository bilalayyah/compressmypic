import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageUrProps {
  onNavigate: (path: string) => void;
}

export const ContactPageUr: React.FC<ContactPageUrProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'CompressMyPic سے رابطہ کریں – مدد، فیڈ بیک اور بگ رپورٹس';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bilalayyah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject || 'CompressMyPic Contact Inquiry',
          message: contactMessage,
          _subject: `New inquiry from ${contactName}: ${contactSubject || 'CompressMyPic'}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setContactName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'پیغام نہیں بھیجا جا سکا۔ براہِ کرم دوبارہ کوشش کریں۔');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'نیٹ ورک کی خرابی۔ براہِ کرم براہِ راست bilalayyah@gmail.com پر بھیجنے کی کوشش کریں۔'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            ہم سے رابطہ کریں
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            کوئی سوال، فیڈ بیک، یا مدد چاہیے؟ نیچے دیے گئے فارم سے ہماری ٹیم سے رابطہ کریں، یا براہِ راست ای میل سے رابطہ کریں۔
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>براہِ راست سوالات</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>جواب کا وقت</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                ہم عام طور پر 24 سے 48 کاروباری گھنٹوں میں جواب دیتے ہیں۔
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>رازداری کا عہد</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                آپ کا ای میل اور پیغام کی تفصیل صرف آپ کے سوال کا جواب دینے کے لیے استعمال ہوتی ہے اور کبھی شیئر نہیں کی جاتی۔
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">پیغام کامیابی سے پہنچ گیا</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  رابطہ کرنے کا شکریہ! آپ کا پیغام FormSubmit کے ذریعے bilalayyah@gmail.com پر بھیج دیا گیا ہے۔ ہم جلد آپ سے رابطہ کریں گے۔
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    ایک اور پیغام بھیجیں
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
                {errorMessage && (
                  <div className="p-3 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-xs rounded-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      آپ کا نام <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="احمد علی"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      ای میل پتہ <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="ahmed@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    موضوع <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="فیڈ بیک، بگ رپورٹ، یا عام سوال"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    پیغام <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="ہم آپ کی کیسے مدد کر سکتے ہیں؟ اپنا مسئلہ یا تجویز تفصیل سے بیان کریں..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 btn-purple-pill disabled:opacity-50 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>پیغام بھیجا جا رہا ہے...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>پیغام بھیجیں</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Extra Information Sections */}
        <div className="mt-12 space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic کون چلاتا ہے</span>
            </h2>
            <p>
              CompressMyPic بلال نے بنایا اور برقرار رکھا ہے، جو ایک آزاد میکر ہے اور ایک ایسا واقعی مفت امیج کمپریسر چاہتا تھا جو آپ کی رازداری کا احترام کرے۔ زیادہ تر آن لائن ٹولز کے برعکس، CompressMyPic آپ کی تصویریں کبھی کسی سرور پر اپ لوڈ نہیں کرتا: ہر تصویر براہِ راست آپ کے اپنے براؤزر میں کمپریس ہوتی ہے۔ بلال ہر پیغام خود پڑھتا ہے اور آپ کے فیڈ بیک کو بگز ٹھیک کرنے، معیار بہتر بنانے، اور یہ فیصلہ کرنے میں استعمال کرتا ہے کہ آگے کون سے نئے ٹولز بنائے جائیں۔
            </p>
            <p>
              چونکہ یہ ایک بڑی کمپنی کے بجائے ایک چھوٹا، آزاد پروجیکٹ ہے، اس لیے آپ کو ہمیشہ براہِ راست، ایماندارانہ جواب ملے گا — چاہے جواب یہی ہو کہ کوئی خاص فیچر ابھی ممکن نہیں۔ آپ اور ٹول بنانے والے کے درمیان نہ کوئی سپورٹ ڈیسک کی قطار ہے اور نہ کوئی خودکار چیٹ بوٹ۔
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>آپ ہمیں کن باتوں پر لکھ سکتے ہیں؟</span>
            </h2>
            <p>
              مدد حاصل کرنے کا تیز ترین طریقہ یہ ہے کہ ہمیں بالکل بتائیں کہ کیا ہوا۔ بگ رپورٹ کے لیے براہِ کرم اس ٹول کا نام، آپ کا براؤزر، اور تصویر کی فائل کی قسم شامل کریں — مثال کے طور پر، iPhone سے HEIC فوٹو یا شفاف PNG۔ فیچر کی درخواست کے لیے بتائیں کہ آپ کیا کرنے کی کوشش کر رہے تھے اور موجودہ ٹولز اسے کیوں پورا نہیں کر سکے۔ ہم غلط نتائج کی رپورٹس کا بھی خیرمقدم کرتے ہیں، جیسے کمپریس شدہ تصویر جو توقع سے زیادہ خراب لگے، اور ہماری گائیڈز یا کسی ترجمہ شدہ صفحے کی تصحیح بھی۔
            </p>
            <p>
              آپ شراکت داری، پریس کے سوالات، اور نئے ٹولز کی تجاویز کے بارے میں بھی لکھ سکتے ہیں۔ اگر آپ کوئی ویب سائٹ، بلاگ یا کلاس روم چلاتے ہیں اور اپنے قارئین یا طلبہ کو CompressMyPic تجویز کرنا چاہتے ہیں، تو ہمیں سن کر خوشی ہوگی — بس اوپر والا فارم استعمال کریں اور واضح موضوع منتخب کریں تاکہ آپ کا پیغام جلد صحیح جگہ پہنچ جائے۔
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>بلال تک پہنچنے کے دیگر طریقے</span>
            </h2>
            <p>
              اگر آپ کوئی عوامی چینل پسند کرتے ہیں، تو آپ بلال اور CompressMyPic پروجیکٹ کو ویب پر تلاش کر سکتے ہیں۔ سورس کوڈ GitHub پر موجود ہے، جہاں آپ تکنیکی مسائل کی رپورٹ بھی کر سکتے ہیں اور ڈویلپمنٹ کو فالو بھی کر سکتے ہیں۔ تصویر کمپریشن کے بارے میں طویل گائیڈز Dev.to پر شائع ہوتی ہیں، اور پروڈکٹ Indie Hackers پر درج ہے، جہاں آپ اس کی پیش رفت فالو کر سکتے ہیں اور فیڈ بیک دے سکتے ہیں۔
            </p>
            <ul className="list-disc ps-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— سورس کوڈ، مسئلے کی رپورٹس، اور ڈویلپمنٹ اپ ڈیٹس۔
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— JPG، PNG، اور WebP کمپریشن پر گائیڈز۔
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— پروڈکٹ صفحہ، سنگِ میل، اور کمیونٹی فیڈ بیک۔
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>لکھنے سے پہلے</span>
            </h2>
            <p>
              چند فوری جانچیں جواب کا انتظار کیے بغیر زیادہ تر مسائل حل کر دیتی ہیں۔ مرکزی کمپریسر فی تصویر 20 MB تک کی تصویریں قبول کرتا ہے، جبکہ فارمیٹ کنورٹرز فی فائل 25 MB تک قبول کرتے ہیں — اس سے بڑی فائل شروع ہونے سے پہلے ہی مسترد کر دی جائے گی۔ بہت پرانے براؤزرز AVIF یا HEIC جیسے نئے فارمیٹس کو سپورٹ نہیں کرتے، اس لیے Chrome، Edge، Firefox یا Safari کا حالیہ ورژن آزمانا اکثر اس ٹول کو ٹھیک کر دیتا ہے جو خراب لگ رہا ہو۔ اور چونکہ آپ کی تصویریں آپ کا آلہ کبھی نہیں چھوڑتیں، اس لیے کسی ایک خاص تصویر کا مسئلہ عام طور پر فائل کی وجہ سے ہوتا ہے، ویب سائٹ کی وجہ سے نہیں۔
            </p>
            <p>
              جب آپ لکھیں، تو براہِ کرم اپنے براؤزر کا نام اور ورژن، وہ ٹول جو آپ استعمال کر رہے تھے، اور تصویر کا سائز اور فارمیٹ شامل کریں۔ ہم انگریزی میں جواب دیتے ہیں اور عام طور پر 24 سے 48 کاروباری گھنٹوں میں جواب دیتے ہیں۔ اگر آپ کا سوال اس بارے میں ہے کہ آپ کا ڈیٹا کیسے سنبھالا جاتا ہے، تو آپ پہلے ہماری{' '}
              <button
                type="button"
                onClick={() => onNavigate('/ur/razdari-ki-policy/')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                رازداری کی پالیسی
              </button>
              {' '}بھی پڑھ سکتے ہیں — اس میں سادہ زبان میں بتایا گیا ہے کہ آپ کی تصویریں کبھی اپ لوڈ یا محفوظ نہیں کی جاتیں۔
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>مسئلے کی رپورٹ کریں</span>
            </h2>
            <p>
              کچھ خراب ملا؟ ہمیں بتائیں کہ یہ کس صفحے پر ہوا، آپ نے کیا کلک کیا، اور اس کے بجائے آپ کیا دیکھنے کی توقع رکھتے تھے۔ اسکرین شاٹس بہت مدد کرتے ہیں، اور اگر مسئلہ کسی خاص تصویر سے متعلق ہے، تو ہمیں اس کا فارمیٹ اور سائز بتائیں — لیکن براہِ کرم ہمیں کبھی اپنی نجی یا حساس تصویریں نہ بھیجیں۔ ہم رپورٹ شدہ بگز کو جتنی جلدی ہو سکے ٹھیک کرتے ہیں، اور فکس لائیو ہوتے ہی ای میل سے آپ کو بتا دیں گے۔
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
