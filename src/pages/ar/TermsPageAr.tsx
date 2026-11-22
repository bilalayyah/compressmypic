import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageArProps {
  onNavigate: (path: string) => void;
}

export const TermsPageAr: React.FC<TermsPageArProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'شروط الخدمة - CompressMyPic';
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
            <FileText className="w-6 h-6 text-[#dc2626] dark:text-[#f87171]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              شروط الخدمة
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            آخر تحديث: 14 نوفمبر 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. قبول الشروط
            </h2>
            <p>
              بدخولك إلى CompressMyPic واستخدامك له، فإنك توافق على الالتزام بشروط الخدمة هذه والخضوع لها. وإذا كنت لا توافق على أي جزء من هذه الشروط، فتوقف عن استخدام الخدمة.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. الاستخدام المسموح به
            </h2>
            <p>
              يمكنك استخدام CompressMyPic لتحسين الصور لأغراض شخصية وتجارية. وتوافق على عدم استخدام الخدمة لأي نشاط غير قانوني أو بأي طريقة قد تضر بعمل الموقع أو أمنه أو توفره.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. حقوق الملكية الفكرية
            </h2>
            <p>
              تحتفظ بنسبة 100% من حقوق النشر والملكية وحقوق الملكية الفكرية على جميع الصور والصور الفوتوغرافية والرسومات التي تضغطها باستخدام أداتنا. ولا يطالب CompressMyPic بأي ملكية أو ترخيص أو حق على أعمالك الإبداعية. وتتم كل المعالجة محليًا على جهازك.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. إخلاء المسؤولية عن الضمانات
            </h2>
            <p>
              يُقدم CompressMyPic «كما هو» و«حسب التوفر»، دون ضمانات من أي نوع، سواء كانت صريحة أو ضمنية. ورغم أننا نسعى لتحقيق أقصى توافق وأفضل أداء في جميع المتصفحات، فإننا لا نضمن أن تكون الخدمة دون انقطاع أو خالية من الأخطاء أو مستوفية لمتطلبات تقنية محددة.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. توفر الخدمة وتغييراتها
            </h2>
            <p>
              CompressMyPic خدمة مجانية ولا نضمن توفرها في جميع الأوقات. ويجوز لنا تغيير أي أداة أو ميزة أو الموقع بأكمله أو تعليقها أو إيقافها في أي وقت، بإشعار أو بدونه؛ مثلًا، لإصلاح خطأ أو استبدال تقنية لم تعد تعمل في المتصفحات الحديثة أو للحفاظ على الخدمة مجانية. ويجوز لنا أيضًا وضع حدود معقولة، مثل حد أقصى لحجم الملف لكل صورة (حاليًا 20 ميغابايت للضاغط الرئيسي و25 ميغابايت لمحولات الصيغ)، ويجوز لنا تغيير هذه الحدود مع تحسن المتصفحات والأجهزة. وبما أن كل المعالجة تتم في متصفحك، فإن أي انقطاع للموقع لا يعرض صورك الأصلية للخطر أبدًا: فملفاتك تبقى على جهازك.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. الاستخدام المقبول
            </h2>
            <p>
              توافق على استخدام CompressMyPic فقط لأغراض قانونية وبطريقة لا تضر بالخدمة أو بالآخرين. وعلى وجه الخصوص، يجب ألا تحاول إثقال الموقع أو إتلافه أو إجراء هندسة عكسية عليه، أو البحث عن ثغرات أمنية، أو استخدام نصوص آلية لإرسال أعداد كبيرة من الطلبات، أو استخدام الخدمة لمعالجة صور تنتهك حقوق النشر الخاصة بشخص آخر أو تحتوي على مواد غير قانونية أو تهدف إلى الخداع أو المضايقة. وأنت مسؤول عن التأكد من أن لك الحق في استخدام كل صورة تعالجها، وعن حفظ نسخة احتياطية من أي صورة مهمة قبل ضغطها أو تحويلها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. تحديد المسؤولية
            </h2>
            <p>
              إلى أقصى حد يسمح به القانون، لن يكون CompressMyPic ومالكه مسؤولين عن أي خسارة غير مباشرة أو عرضية أو تبعية تنشأ عن استخدام الخدمة، بما في ذلك على سبيل المثال لا الحصر فقدان البيانات أو فقدان الأرباح أو تكلفة إعادة إنشاء صورة. وبما أن الخدمة مجانية، فإن مسؤوليتنا الإجمالية عن أي مطالبة تتعلق بالخدمة تقتصر على المبلغ الذي دفعته مقابل استخدامها، وهو صفر. ولا يحد هذا من أي مسؤولية لا يمكن تقييدها بموجب القانون، مثل المسؤولية عن الاحتيال أو الوفاة أو الإصابة الشخصية الناتجة عن الإهمال.
            </p>
            <p>
              الضغط بطبيعته عملية فاقدة: فتقليل حجم الملف قد يقلل من جودته، وبعض الصيغ مثل JPEG لا يمكنها الحفاظ على الشفافية. وأنت مسؤول عن مراجعة النتيجة المضغوطة قبل حذف الملف الأصلي أو الكتابة فوقه، ولسنا مسؤولين عن فقدان الجودة أو غياب الشفافية أو أي تغيير آخر يحدثه الضغط في صورة اخترت معالجتها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. خدمات الطرف الثالث
            </h2>
            <p>
              يستخدم الموقع خدمات طرف ثالث ليعمل، بما في ذلك الاستضافة وتسليم المحتوى عبر Cloudflare وتسليم الرسائل عبر FormSubmit. ولهذه الخدمات شروطها وسياسات الخصوصية الخاصة بها، ويخضع استخدامك لها لتلك المستندات بالإضافة إلى هذه الشروط. ولسنا مسؤولين عن توفر مواقع أو خدمات الطرف الثالث المرتبطة من CompressMyPic أو محتواها أو ممارساتها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. القانون الواجب التطبيق
            </h2>
            <p>
              تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة، التي يُدار منها الموقع، دون اعتبار لقواعدها المتعلقة بتنازع القوانين. وأي نزاع ينشأ عن هذه الشروط أو عن استخدامك للخدمة، أو يتعلق بهما، يُحسم أمام محاكم دولة الإمارات العربية المتحدة. وإذا تبين أن أي جزء من هذه الشروط غير قابل للتنفيذ، تظل الأجزاء الأخرى سارية بالكامل.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. التغييرات على هذه الشروط
            </h2>
            <p>
              يجوز لنا تحديث هذه الشروط عند تغيير الخدمة؛ مثلًا، عند إضافة أدوات جديدة أو تغيير حدود حجم الملفات أو البدء باستخدام خدمة طرف ثالث جديدة. وعندما نفعل ذلك، سنحدّث تاريخ «آخر تحديث» في أعلى هذه الصفحة. وإذا واصلت استخدام CompressMyPic بعد تغيير الشروط، فإنك توافق على الشروط المحدثة. وإذا كنت لا توافق على أي تغيير، فتوقف عن استخدام الخدمة.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. التواصل
            </h2>
            <p>
              إذا كانت لديك أي أسئلة حول هذه الشروط، راسلنا على{' '}
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
