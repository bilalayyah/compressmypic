import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageArProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageAr: React.FC<DisclaimerPageArProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'إخلاء المسؤولية | CompressMyPic – أدوات صور مجانية';
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
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>العودة إلى ضاغط الصور</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              إخلاء المسؤولية
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            آخر تحديث: 18 نوفمبر 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. معلومات عامة
            </h2>
            <p>
              CompressMyPic خدمة مجانية عبر الإنترنت لضغط الصور وتحريرها. وتُقدم الأدوات والأدلة والمقالات في هذا الموقع لأغراض المعلومات العامة والاستخدام العملي فقط. وهي ليست استشارة مهنية من أي نوع — لا قانونية ولا طبية ولا مالية ولا تقنية — ولا تنشئ أي علاقة مهنية بينك وبين CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. دون ضمان
            </h2>
            <p>
              تُقدم الخدمة «كما هي» و«حسب التوفر»، دون ضمانات من أي نوع، صريحة أو ضمنية. ولا نضمن أن تكون الأدوات متاحة دائمًا أو دون انقطاع أو دون أخطاء أو خالية من المكونات الضارة، أو أن تُضغط صورة معينة إلى حجم أو جودة محددين. وتعتمد النتائج على الصورة الأصلية وصيغتها ومتصفحك، لذا احتفظ دائمًا بنسخة من ملفاتك الأصلية قبل استخدام أي أداة.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. دقة المحتوى
            </h2>
            <p>
              نعمل على إبقاء أدلةنا ومقالاتنا وأوصافنا دقيقة ومحدّثة، لكن صيغ الصور والمتصفحات ومعايير الويب تتغير مع مرور الوقت. وقد تصبح المعلومات في هذا الموقع قديمة أو تحتوي على أخطاء رغم جهودنا. تحقق دائمًا من البيانات المهمة — مثل حدود حجم منصة ما — في الوثائق الرسمية لتلك المنصة قبل الاعتماد عليها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. ملفاتك مسؤوليتك
            </h2>
            <p>
              تتم معالجة الصور محليًا في متصفحك ولا تُرفع أبدًا إلى خوادمنا. وهذا يعني أيضًا أننا لا نستطيع استعادة أي ملف لك: فإذا قمت بالكتابة فوق صورة أصلية أو حذفتها أو فقدتها أثناء استخدام أدواتنا، فلا يمكننا استعادتها. احفظ نسخًا احتياطية من أي صورة مهمة وعالج فقط نسخًا من ملفات تملكها أو لديك إذن بتحريرها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. خدمات وروابط الطرف الثالث
            </h2>
            <p>
              يستخدم هذا الموقع خدمات طرف ثالث — Google Analytics 4 لإحصاءات الاستخدام، وFormSubmit لنموذج التواصل، وCloudflare Worker للتعليقات المجهولة — ويرتبط بمواقع خارجية. ولا نتحكم في هذه الخدمات أو تلك المواقع، ولسنا مسؤولين عن محتواها أو توفرها أو ممارسات الخصوصية الخاصة بها أو دقتها. وتسري عليها شروطها وسياسات الخصوصية الخاصة بها عند استخدامها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. الإعلانات
            </h2>
            <p>
              لا يعرض هذا الموقع حاليًا أي إعلانات.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. تحديد المسؤولية
            </h2>
            <p>
              إلى أقصى حد يسمح به القانون، لن يكون CompressMyPic ومشغّله مسؤولين عن أي خسارة أو ضرر مباشر أو غير مباشر أو عرضي أو تبعي ينشأ عن استخدام هذا الموقع أو أدواته — أو عن تعذر استخدامهما — بما في ذلك على سبيل المثال لا الحصر فقدان الملفات أو البيانات أو الأرباح. وسبيلك الوحيد للانتصاف عند أي عدم رضا عن الخدمة هو التوقف عن استخدامها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. تعليقات المستخدمين
            </h2>
            <p>
              التعليقات المنشورة أسفل أدواتنا يكتبها الزوار وتعبر عن آرائهم الخاصة، لا عن آرائنا. ونراجع التعليقات ويجوز لنا حذف أي محتوى يكون بريدًا عشوائيًا أو مسيئًا أو خارج الموضوع، لكننا لا نؤيد محتوى تعليقات المستخدمين ولا نتحمل المسؤولية عنه. ولا تشارك أبدًا كلمات مرور أو بيانات دفع أو معلومات شخصية حساسة في أي تعليق.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. التواصل
            </h2>
            <p>
              إذا كانت لديك أسئلة حول إخلاء المسؤولية هذا، فتواصل معنا على 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
