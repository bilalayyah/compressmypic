import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageRuProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageRu: React.FC<PrivacyPageRuProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Политика конфиденциальности — CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Политика конфиденциальности CompressMyPic: изображения обрабатываются локально в вашем браузере и никогда не загружаются. Никаких аккаунтов и хранения изображений — только самое важное о рекламе и связи с нами.');
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад к компрессору изображений</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Политика конфиденциальности
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Последнее обновление: 12 ноя 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Обработка изображений на стороне клиента
            </h2>
            <p>
              CompressMyPic — это бесплатный online-компрессор изображений. Изображения обрабатываются локально в вашем браузере с помощью HTML5 Canvas — они никогда не загружаются на наши серверы, и мы не собираем, не храним и не передаём ваши изображения. Когда вы закрываете или обновляете вкладку браузера, все временные объекты в памяти удаляются.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Мы не собираем персональные данные
            </h2>
            <p>
              Для использования инструмента сжатия нам не нужны аккаунт, пароль, адрес электронной почты или номер телефона. Любая контактная информация, которую вы добровольно отправляете через нашу форму обратной связи, используется исключительно для ответа на ваше конкретное обращение.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Реклама (Google AdSense)
            </h2>
            <p>
              После включения мы используем Google AdSense для показа рекламы. Сторонние поставщики, включая Google, используют файлы cookie для показа рекламы на основе ваших предыдущих посещений этого сайта или других сайтов. Использование Google рекламных файлов cookie позволяет Google и её партнёрам показывать вам рекламу на основе вашего посещения этого сайта и/или других сайтов в интернете. Вы можете отказаться от персонализированной рекламы, посетив настройки рекламы Google (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) или{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Аналитика
            </h2>
            <p>
              В настоящее время мы не используем аналитические файлы cookie. Если это изменится, данная политика будет обновлена.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Ссылки на сторонние сайты
            </h2>
            <p>
              Наш сайт может содержать ссылки на внешние сайты. Мы не несём ответственности за политику конфиденциальности и контент сторонних платформ.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Контакты
            </h2>
            <p>
              Если у вас есть вопросы по поводу этой политики, свяжитесь с нами по адресу{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
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
