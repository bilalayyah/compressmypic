import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageRuProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageRu: React.FC<DisclaimerPageRuProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Отказ от ответственности | CompressMyPic – Бесплатные инструменты для изображений';
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
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Вернуться к компрессору изображений</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Отказ от ответственности
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Последнее обновление: 18 ноября 2026 г.
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Общая информация
            </h2>
            <p>
              CompressMyPic — это бесплатный онлайн-сервис для сжатия и редактирования изображений. Инструменты, руководства и статьи на этом сайте предоставляются только для общей информации и практического использования. Они не являются профессиональной консультацией любого рода — ни юридической, ни медицинской, ни финансовой, ни технической — и не создают профессиональных отношений между вами и CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Отсутствие гарантий
            </h2>
            <p>
              Сервис предоставляется «как есть» и «по мере доступности», без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем, что инструменты всегда будут доступны, работать без перерывов, без ошибок или без вредных компонентов, а также что конкретное изображение будет сжато до определённого размера или качества. Результаты зависят от исходного изображения, его формата и вашего браузера, поэтому всегда сохраняйте копию исходных файлов перед использованием любого инструмента.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Точность содержания
            </h2>
            <p>
              Мы стараемся поддерживать наши руководства, статьи и описания инструментов точными и актуальными, но форматы изображений, браузеры и веб-стандарты со временем меняются. Информация на этом сайте может устареть или содержать ошибки, несмотря на наши усилия. Всегда проверяйте важные детали — например, ограничения размера файла на платформе — в официальной документации этой платформы, прежде чем полагаться на них.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Ваши файлы — ваша ответственность
            </h2>
            <p>
              Изображения обрабатываются локально в вашем браузере и никогда не загружаются на наши серверы. Это также означает, что мы не сможем восстановить файл для вас: если вы перезапишете, удалите или потеряете исходное изображение при использовании наших инструментов, мы не сможем его вернуть. Делайте резервные копии всех важных изображений и обрабатывайте только копии файлов, которые вам принадлежат или которые вы имеете право редактировать.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Сторонние сервисы и ссылки
            </h2>
            <p>
              Этот сайт использует сторонние сервисы — Google AdSense для рекламы, Google Analytics 4 для статистики использования, FormSubmit для формы обратной связи и Cloudflare Worker для анонимных комментариев — а также содержит ссылки на внешние сайты. Мы не контролируем эти сервисы и сайты и не несём ответственности за их содержание, доступность, политику конфиденциальности или точность. При их использовании применяются их собственные условия и политики конфиденциальности.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Реклама
            </h2>
            <p>
              Реклама на этом сайте показывается Google AdSense и его партнёрами. Мы не одобряем, не гарантируем и не несём ответственности за какой-либо продукт, услугу или утверждение в рекламе. Любая покупка или решение, принятое на основе рекламы, — полностью на ваш риск; оценивайте рекламодателей самостоятельно, прежде чем что-либо покупать.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Ограничение ответственности
            </h2>
            <p>
              В максимальной степени, разрешённой законом, CompressMyPic и его оператор не несут ответственности за любые прямые, косвенные, случайные или последующие убытки или ущерб, возникшие в результате использования — или невозможности использования — этого сайта или его инструментов, включая, помимо прочего, потерю файлов, данных или прибыли. Единственное средство защиты при недовольстве сервисом — прекратить его использование.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Комментарии пользователей
            </h2>
            <p>
              Комментарии под нашими инструментами пишут посетители, и они отражают их собственное мнение, а не наше. Мы модерируем комментарии и можем удалять спам, оскорбительный или не относящийся к теме контент, но мы не одобряем содержание комментариев пользователей и не несём за него ответственности. Никогда не публикуйте в комментариях пароли, платёжные данные или конфиденциальную личную информацию.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Контакты
            </h2>
            <p>
              Если у вас есть вопросы об этом отказе от ответственности, свяжитесь с нами по адресу 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
