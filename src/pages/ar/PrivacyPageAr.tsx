import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageArProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageAr: React.FC<PrivacyPageArProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'سياسة الخصوصية - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>العودة إلى ضاغط الصور</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              سياسة الخصوصية
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            آخر تحديث: 15 نوفمبر 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. معالجة الصور في متصفحك
            </h2>
            <p>
              CompressMyPic هو ضاغط صور مجاني عبر الإنترنت. تتم معالجة الصور محليًا في متصفحك باستخدام HTML5 Canvas: لا تُرفع أبدًا إلى خوادمنا ولا نجمع صورك أو نخزنها أو نشاركها. وعند إغلاق تبويب المتصفح أو تحديثه، تُحذف جميع الكائنات المؤقتة من الذاكرة.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. لا نجمع بيانات شخصية
            </h2>
            <p>
              لا نطلب حسابًا أو كلمة مرور أو بريدًا إلكترونيًا أو رقم هاتف لاستخدام أداة الضغط. وأي بيانات تواصل ترسلها طوعًا عبر نموذج التواصل تُستخدم فقط للرد على استفسارك المحدد.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. الإعلانات
            </h2>
            <p>
              لا يعرض CompressMyPic حاليًا أي إعلانات. ولا يثبّت هذا الموقع أي ملفات تعريف ارتباط إعلانية.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. التحليلات
            </h2>
            <p>
              نستخدم Google Analytics 4 (GA4) لفهم كيفية استخدام الموقع بشكل إجمالي؛ مثلًا، الأدوات الأكثر شيوعًا والصفحات التي تحصل على زيارات. ويجمع GA4 بيانات استخدام مجهولة المصدر، مثل الصفحات التي تزورها والمدة التي تقضيها فيها ومعلومات عامة عن جهازك ومتصفحك. وقد يثبّت ملفات تعريف ارتباط على جهازك (مثل _ga) للتمييز بين زيارة وأخرى. ولا نستخدم GA4 للتعرف عليك شخصيًا. ويمكنك إلغاء الاشتراك في Google Analytics في أي وقت بتثبيت إضافة إلغاء الاشتراك في Google Analytics (https://tools.google.com/dlpage/gaoptout) أو تعطيل ملفات تعريف الارتباط في إعدادات متصفحك.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. روابط الطرف الثالث
            </h2>
            <p>
              قد يحتوي موقعنا على روابط لمواقع خارجية. ولسنا مسؤولين عن ممارسات الخصوصية أو محتوى منصات الطرف الثالث.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. ملفات تعريف الارتباط والموافقة
            </h2>
            <p>
              لا يثبّت CompressMyPic أي ملف تعريف ارتباط لأدوات الصور الخاصة به: تتم عملية الضغط بالكامل في متصفحك ولا تحتاج إلى أي ملف تعريف ارتباط أو حساب أو تفضيل محفوظ من جانبنا. وملفات تعريف الارتباط في هذا الموقع تأتي من خدمات الطرف الثالث. فعلى سبيل المثال، قد يثبّت Google Analytics ملفات تعريف ارتباط لإحصاءات الاستخدام. ويحفظ متصفحك هذه الملفات على جهازك ويمكنك حذفها في أي وقت من إعدادات المتصفح.
            </p>
            <p>
              لا يعرض CompressMyPic حاليًا أي إعلانات، لذا لا يُطلب من الزوار في أي منطقة الموافقة على الإعلانات.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. حقوقك بموجب اللائحة العامة لحماية البيانات (GDPR)
            </h2>
            <p>
              إذا كنت في المنطقة الاقتصادية الأوروبية أو المملكة المتحدة، فإن اللائحة العامة لحماية البيانات (GDPR) تمنحك حقوقًا على بياناتك الشخصية. ويمكنك أن تطلب منا نسخة من البيانات الشخصية التي لدينا عنك، وأن تطلب تصحيحها إن كانت غير صحيحة، وأن تطلب حذفها، وأن تطلب تقييد استخدامها، والاعتراض على معالجتها. وعندما تستند المعالجة إلى موافقتك، يمكنك سحبها في أي وقت؛ ولا يؤثر سحبها على ما قمنا به بشكل قانوني من قبل.
            </p>
            <p>
              وبما أن أدواتنا تعالج الصور محليًا ولا توجد لدينا حسابات مستخدمين، فإن البيانات الشخصية الوحيدة التي نحتفظ بها عادة هي الاسم وعنوان البريد الإلكتروني والرسالة التي ترسلها عبر نموذج التواصل. ولممارسة أي من هذه الحقوق، راسلنا على <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> وسنرد خلال 30 يومًا. كما يحق لك تقديم شكوى إلى سلطة حماية البيانات المحلية لديك إذا كنت تعتقد أننا عالجنا بياناتك بشكل غير عادل.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. الاحتفاظ بالبيانات
            </h2>
            <p>
              نحتفظ بالبيانات الشخصية فقط للمدة اللازمة للغرض الذي جُمعت من أجله. وتُحفظ رسائل نموذج التواصل فقط حتى تتم الإجابة على استفسارك وتنتهي المحادثة، ولفترة قصيرة بعد ذلك تحسبًا لأي أسئلة متابعة؛ ولا تُستخدم أبدًا للتسويق ولا تُشارك مع أطراف ثالثة. أما صورك فلا تُحفظ إطلاقًا: فهي موجودة فقط في ذاكرة متصفحك أثناء استخدامك لأداة ما وتُحذف فور إغلاق التبويب أو تحديثه. والبيانات التحليلية المجمعة لا تحتوي على معلومات شخصية وتُحفظ فقط بشكل ملخص.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. الأمان وreCAPTCHA
            </h2>
            <p>
              يُقدم الموقع عبر HTTPS، لذا فإن الاتصال بين متصفحك والموقع مشفر. ويُسلم نموذج التواصل الخاص بنا عبر FormSubmit، الذي يعيد توجيه رسالتك إلى عنوان بريدنا الإلكتروني، والنموذج محمي بواسطة Google reCAPTCHA لمنع البريد العشوائي وإساءة الاستخدام الآلي. وعند إرسال النموذج، قد يجمع reCAPTCHA معلومات عن الأجهزة والبرامج، مثل بيانات متصفحك وجهازك، للتمييز بين البشر والروبوتات؛ ويخضع ذلك لـ <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                سياسة الخصوصية
              </a> و <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                شروط الخدمة
              </a> الخاصة بـ Google. ولا نطلب منك أبدًا إرسال كلمات مرور أو بيانات دفع أو مستندات شخصية حساسة عبر نموذج التواصل، كما يجب ألا تضمّنها في أي رسالة.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. خصوصية الأطفال
            </h2>
            <p>
              CompressMyPic أداة مخصصة لعامة الجمهور وليست موجهة للأطفال دون سن 13 عامًا. ولا نجمع عن قصد أي معلومات شخصية عن الأطفال. وإذا كنت والدًا أو وصيًا وتعتقد أن طفلك أرسل إلينا معلومات شخصية عبر نموذج التواصل، فراسلنا بالبريد الإلكتروني وسنحذفها فورًا.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. التغييرات على هذه السياسة
            </h2>
            <p>
              قد نحدّث هذه السياسة عند تغيير الموقع؛ مثلًا، إذا أضفنا خدمة تحليلات جديدة أو شريكًا إعلانيًا جديدًا أو طريقة تواصل جديدة. وعندما نفعل ذلك، سنغيّر تاريخ «آخر تحديث» في أعلى هذه الصفحة وسيتم وصف التغييرات المهمة هنا بلغة بسيطة. ويعني استمرار استخدامك للموقع بعد أي تغيير أنك توافق على السياسة المحدثة.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. التواصل
            </h2>
            <p>
              إذا كانت لديك أسئلة حول هذه السياسة، راسلنا على{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
