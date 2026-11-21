import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageArProps {
  onNavigate: (path: string) => void;
}

export const ContactPageAr: React.FC<ContactPageArProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'تواصل معنا - CompressMyPic';
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
        throw new Error(data?.message || 'تعذر إرسال الرسالة. حاول مرة أخرى.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'خطأ في الشبكة. حاول الإرسال مباشرة إلى bilalayyah@gmail.com.'
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
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>العودة إلى ضاغط الصور</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            تواصل معنا
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            هل لديك أسئلة أو ملاحظات أو تحتاج إلى مساعدة؟ راسل فريقنا بالنموذج أدناه أو تواصل معنا مباشرة عبر البريد الإلكتروني.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>استفسارات مباشرة</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>وقت الرد</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                نرد عادة خلال 24 إلى 48 ساعة عمل.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>التزام بالخصوصية</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                يُستخدم بريدك الإلكتروني وبيانات رسالتك فقط للرد على استفسارك ولا تُشارك أبدًا.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">تم إرسال الرسالة بنجاح</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  شكرًا لمراسلتنا! تم إرسال رسالتك عبر FormSubmit إلى bilalayyah@gmail.com. وسنرد عليك قريبًا.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    إرسال رسالة أخرى
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
                      اسمك <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="أحمد محمد"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      البريد الإلكتروني <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="ahmad@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    الموضوع <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="ملاحظات أو الإبلاغ عن خطأ أو سؤال عام"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    الرسالة <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="كيف يمكننا مساعدتك؟ صف مشكلتك أو اقتراحك بالتفصيل..."
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
                      <span>جارٍ إرسال الرسالة...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>إرسال الرسالة</span>
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
              <span>من يقف وراء CompressMyPic</span>
            </h2>
            <p>
              CompressMyPic ينشئه ويحافظ عليه بلال، وهو منشئ مستقل أراد ضاغط صور مجانيًا حقًا ويحترم خصوصيتك. وعلى عكس معظم الأدوات عبر الإنترنت، لا يرفع CompressMyPic صورك إلى خادم أبدًا: إذ تُضغط كل صورة مباشرة في متصفحك. ويقرأ بلال كل رسالة شخصيًا ويستخدم ملاحظاتك لإصلاح الأخطاء وتحسين الجودة وتحديد الأدوات الجديدة التي سيبنيها.
            </p>
            <p>
              وبما أن هذا مشروع صغير ومستقل، وليس شركة كبيرة، فستتلقى دائمًا ردًا مباشرًا وصادقًا، حتى عندما تكون الإجابة أن ميزة ما ليست ممكنة بعد. فلا توجد قائمة انتظار للدعم ولا روبوت محادثة آلي بينك وبين الشخص الذي أنشأ الأداة.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>بماذا يمكنك مراسلتنا؟</span>
            </h2>
            <p>
              أسرع طريقة للحصول على المساعدة هي أن تخبرنا بالضبط بما حدث. وللإبلاغ عن خطأ، اذكر اسم الأداة التي كنت تستخدمها ومتصفحك ونوع ملف الصورة؛ مثلًا، صورة HEIC من آيفون أو صورة PNG شفافة. ولاقتراح ميزة، صف ما أردت تحقيقه ولماذا لا تغطيه الأدوات الحالية. ونرحب أيضًا بالإبلاغ عن نتائج غير صحيحة، مثل صورة مضغوطة تبدو أسوأ من المتوقع، وتصحيحات أدلةنا أو أي صفحة مترجمة.
            </p>
            <p>
              ويمكنك أيضًا مراسلتنا بشأن الشراكات واستفسارات الصحافة واقتراحات الأدوات الجديدة. وإذا كان لديك موقع أو مدونة أو فصل دراسي وتريد التوصية بـ CompressMyPic لقرائك أو طلابك، يسعدنا أن نعرف ذلك: استخدم النموذج أعلاه واختر موضوعًا واضحًا حتى تصل رسالتك بسرعة إلى المكان الصحيح.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>طرق أخرى للتواصل مع بلال</span>
            </h2>
            <p>
              إذا كنت تفضل قناة عامة، يمكنك العثور على بلال ومشروع CompressMyPic على الويب. فالشفرة المصدرية موجودة على GitHub، حيث يمكنك أيضًا الإبلاغ عن المشاكل التقنية ومتابعة التطوير. وتُنشر الأدلة الطويلة حول ضغط الصور على Dev.to، والمنتج مدرج في Indie Hackers، حيث يمكنك متابعة تقدمه وترك التعليقات.
            </p>
            <ul className="list-disc ps-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— الشفرة المصدرية، والإبلاغ عن الأخطاء، وآخر أخبار التطوير.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— أدلة حول ضغط JPG وPNG وWebP.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— صفحة المنتج والمعالم وتعليقات المجتمع.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>قبل مراسلتنا</span>
            </h2>
            <p>
              فحوصات سريعة قليلة تحل معظم المشاكل دون انتظار رد. فالضاغط الرئيسي يقبل صورًا يصل حجم كل منها إلى 20 ميغابايت، بينما تقبل محولات الصيغ ما يصل إلى 25 ميغابايت لكل ملف؛ وسيُرفض أي ملف أكبر قبل البدء. وقد لا تدعم المتصفحات القديمة جدًا الصيغ الجديدة مثل AVIF أو HEIC، لذا فإن تجربة إصدار حديث من Chrome أو Edge أو Firefox أو Safari تحل غالبًا مشكلة أداة تبدو معطلة. وبما أن صورك لا تغادر جهازك أبدًا، فإن مشكلة في صورة معينة تعود غالبًا إلى الملف نفسه، وليس إلى الموقع.
            </p>
            <p>
              وعند مراسلتنا، اذكر اسم متصفحك وإصداره والأداة التي كنت تستخدمها وحجم الصورة وصيغتها. ونرد بالإنجليزية، عادة خلال 24 إلى 48 ساعة عمل. وإذا كان سؤالك حول كيفية تعاملنا مع بياناتك، يمكنك أيضًا قراءة 
              <button
                type="button"
                onClick={() => onNavigate('/ar/khususiyya')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                سياسة الخصوصية
              </button>
              أولًا: فهي تشرح بلغة بسيطة أن صورك لا تُرفع ولا تُخزن أبدًا.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>الإبلاغ عن مشكلة</span>
            </h2>
            <p>
              هل وجدت شيئًا معطلًا؟ أخبرنا في أي صفحة حدث ذلك، وما الذي نقرت عليه، وما الذي كنت تتوقع رؤيته بدلًا منه. وتساعد لقطات الشاشة كثيرًا، وإذا كانت المشكلة تتعلق بصورة معينة، فأخبرنا بصيغتها وحجمها، لكن لا ترسل إلينا أبدًا صورًا خاصة أو حساسة. ونصلح الأخطاء المبلغ عنها في أقرب وقت ممكن وسنعلمك بالبريد الإلكتروني عند نشر الإصلاح.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
