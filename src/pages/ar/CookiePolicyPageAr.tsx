import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageArProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageAr: React.FC<CookiePolicyPageArProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'سياسة ملفات تعريف الارتباط | CompressMyPic – كيف تُستخدم ملفات تعريف الارتباط';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              سياسة ملفات تعريف الارتباط
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            آخر تحديث: 18 نوفمبر 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. ما هي ملفات تعريف الارتباط؟
            </h2>
            <p>
              ملفات تعريف الارتباط هي ملفات نصية صغيرة يطلب موقع الويب من متصفحك حفظها على جهازك. ويمكنها أن تتذكر معلومات عن زيارتك — مثلًا، ما إذا كنت قد رأيت رسالة من قبل — حتى يتمكن الموقع أو الخدمة من التعرف على متصفحك في زيارة لاحقة. وتشرح هذه السياسة ملفات تعريف الارتباط المستخدمة في CompressMyPic، وسبب استخدامها، وكيف يمكنك التحكم فيها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. ملفات تعريف الارتباط التي لا نثبّتها
            </h2>
            <p>
              لا يثبّت CompressMyPic أي ملف تعريف ارتباط. فأدوات الصور لدينا تعمل بالكامل في متصفحك: ولا يحتاج الضغط إلى حساب أو تسجيل دخول أو ملف تعريف ارتباط. ولا نثبّت ملفات تعريف ارتباط لتذكرك أو تتبعك أو حفظ تفضيلاتك. وصورك لا تغادر متصفحك أبدًا ولا يُحفظ أي شيء عنها في ملف تعريف ارتباط.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. ملفات تعريف الارتباط الإعلانية
            </h2>
            <p>
              لا يعرض CompressMyPic حاليًا أي إعلانات ولا يثبّت أي ملفات تعريف ارتباط إعلانية.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. ملفات تعريف ارتباط Google Analytics 4
            </h2>
            <p>
              نستخدم Google Analytics 4 (GA4) لفهم كيفية استخدام الموقع بشكل إجمالي — مثلًا، الأدوات الأكثر شيوعًا والصفحات التي تحصل على زيارات. وقد يثبّت GA4 ملفات تعريف ارتباط على جهازك، مثل _ga، للتمييز بين زيارة وأخرى. والبيانات مجهولة المصدر وتُستخدم فقط بشكل ملخص؛ ولا نستخدم GA4 للتعرف عليك شخصيًا. ويمكنك رفض Google Analytics في أي وقت بتثبيت إضافة إلغاء الاشتراك في Google Analytics (https://tools.google.com/dlpage/gaoptout) أو تعطيل ملفات تعريف الارتباط في إعدادات متصفحك.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. الموافقة (المنطقة الاقتصادية الأوروبية والمملكة المتحدة وسويسرا)
            </h2>
            <p>
              بما أن هذا الموقع لا يعرض حاليًا أي إعلانات، فلا تظهر أي رسالة موافقة إعلانية ولا يُطلب أي موافقة على الإعلانات. وتُجمع إحصاءات الاستخدام عبر Google Analytics؛ ويمكنك حظر ملفات تعريف ارتباط التحليلات من إعدادات متصفحك (انظر القسم 8).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. خدمات الطرف الثالث الأخرى
            </h2>
            <p>
              قد تستخدم بعض الخدمات الأخرى في هذا الموقع ملفات تعريف ارتباط خاصة بها أو وسائل تخزين مشابهة. فقد يثبّت Google reCAPTCHA، الذي يحمي نموذج التواصل لدينا من البريد العشوائي، ملفات تعريف ارتباط للتمييز بين البشر والروبوتات؛ ويخضع استخدامه لـ 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">سياسة خصوصية Google</a>
               و 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">شروط خدمة Google</a>
               . وقد تثبّت Cloudflare، التي تستضيف هذا الموقع، ملف تعريف ارتباط أمنيًا لحماية الموقع من إساءة الاستخدام. أما التعليقات المجهولة أسفل أدواتنا فتطلب الاسم فقط، ويحفظه خدمة التعليقات، وليس في ملف تعريف ارتباط من هذا الموقع.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. التخزين في المتصفح الذي ليس ملف تعريف ارتباط
            </h2>
            <p>
              يحفظ متصفحك أيضًا كمية صغيرة من المعلومات المحلية التي ليست ملف تعريف ارتباط. فإذا نشرت تعليقًا، قد يتذكر متصفحك الاسم الذي كتبته حتى لا تضطر إلى كتابته مرة أخرى، وإذا غيّرت لغة الموقع، قد يتذكر متصفحك هذا الاختيار لزيارتك القادمة. وتبقى هذه المعلومات على جهازك، ولا تُرسل أبدًا إلى خوادمنا، ويمكنك حذفها في أي وقت بمسح بيانات الموقع في متصفحك.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. كيفية التحكم في ملفات تعريف الارتباط
            </h2>
            <p>
              يمكنك حذف ملفات تعريف الارتباط المحفوظة على جهازك ومنع تثبيت ملفات جديدة من إعدادات متصفحك — فجميع المتصفحات الرئيسية (Chrome وFirefox وSafari وEdge) توفر هذا الخيار في إعدادات الخصوصية أو الأمان. ولن يؤثر حظر جميع ملفات تعريف الارتباط على أدوات الصور لدينا، لأنها لا تعتمد على ملفات تعريف الارتباط، لكنه قد يؤثر على ميزات خدمات الطرف الثالث مثل الإحصاءات. ويمكنك أيضًا استخدام الوضع الخاص أو وضع التصفح المتخفي في متصفحك، الذي يحذف ملفات تعريف الارتباط عند إغلاق النافذة.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. التغييرات على هذه السياسة
            </h2>
            <p>
              قد نحدّث هذه السياسة عند تغيير الموقع — مثلًا، إذا أضفنا شريكًا إعلانيًا جديدًا أو خدمة إحصاءات جديدة. وعندما نفعل ذلك، سنغيّر تاريخ «آخر تحديث» في أعلى هذه الصفحة. ويعني استمرار استخدامك للموقع بعد أي تغيير أنك توافق على السياسة المحدثة.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. التواصل
            </h2>
            <p>
              إذا كانت لديك أسئلة حول هذه السياسة، فتواصل معنا على 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
               أو اقرأ 
              <a href="/ar/khususiyya" onClick={(e) => { e.preventDefault(); onNavigate('/ar/khususiyya'); }} className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">سياسة الخصوصية</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
