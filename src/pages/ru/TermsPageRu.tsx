import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageRuProps {
  onNavigate: (path: string) => void;
}

export const TermsPageRu: React.FC<TermsPageRuProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Условия использования — CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Условия использования CompressMyPic: разрешённое использование, права на ваши изображения и отказ от гарантий для бесплатного online-компрессора изображений.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/ru/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад к компрессору изображений</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Условия использования
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Последнее обновление: 12 ноя 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Принятие условий
            </h2>
            <p>
              Получая доступ к CompressMyPic и используя его, вы соглашаетесь соблюдать настоящие Условия использования и обязуетесь их выполнять. Если вы не согласны с какой-либо частью этих условий, пожалуйста, прекратите использование сервиса.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Разрешённое использование
            </h2>
            <p>
              Вы можете использовать CompressMyPic как для личной, так и для коммерческой оптимизации изображений. Вы обязуетесь не использовать сервис для незаконной деятельности и таким образом, который может нарушить работу, безопасность или доступность сайта.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Права интеллектуальной собственности
            </h2>
            <p>
              Вы сохраняете 100% авторских прав, права собственности и прав интеллектуальной собственности на все изображения, фотографии и графику, которые вы сжимаете с помощью нашего инструмента. CompressMyPic не претендует ни на какое право собственности, лицензию или какие-либо права на ваши творческие работы. Вся обработка происходит локально на вашем устройстве.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Отказ от гарантий
            </h2>
            <p>
              CompressMyPic предоставляется «как есть» и «по мере доступности» без каких-либо гарантий, явных или подразумеваемых. Хотя мы стремимся к максимальной совместимости и производительности во всех браузерах, мы не гарантируем, что сервис будет работать бесперебойно, без ошибок или соответствовать конкретным техническим требованиям.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              5. Контакты
            </h2>
            <p>
              Если у вас есть вопросы по поводу этих условий, пожалуйста, свяжитесь с нами по адресу{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
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
