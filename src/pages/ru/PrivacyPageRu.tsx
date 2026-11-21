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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
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
            Последнее обновление: 15 ноя 2026
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
              3. Реклама
            </h2>
            <p>
              CompressMyPic в настоящее время не показывает рекламу. Этот сайт не устанавливает рекламные файлы cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Аналитика
            </h2>
            <p>
              Мы используем Google Analytics 4 (GA4), чтобы в обобщённом виде понимать, как используется сайт — например, какие инструменты популярны и какие страницы посещаются. GA4 собирает анонимизированные данные об использовании: какие страницы вы посещаете, как долго остаётесь на них, а также общую информацию о вашем устройстве и браузере. GA4 может устанавливать файлы cookie на вашем устройстве (например, _ga), чтобы отличать одно посещение от другого. Мы не используем GA4 для вашей личной идентификации. Вы можете отказаться от Google Analytics в любой момент, установив дополнение для отключения Google Analytics (https://tools.google.com/dlpage/gaoptout) или отключив файлы cookie в настройках браузера.
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

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Файлы cookie и согласие
            </h2>
            <p>
              Сам CompressMyPic не устанавливает никаких файлов cookie для своих инструментов обработки изображений: сжатие полностью выполняется в вашем браузере и не требует ни cookie, ни учётной записи, ни сохранённых настроек с нашей стороны. Файлы cookie на этом сайте поступают от сторонних сервисов. Например, Google Analytics может устанавливать cookie для статистики использования. Ваш браузер сохраняет эти cookie на вашем устройстве, и вы можете удалить их в любое время в настройках браузера.
            </p>
            <p>
              CompressMyPic в настоящее время не показывает рекламу, поэтому согласие на рекламу не запрашивается у посетителей ни из одного региона.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Ваши права по GDPR
            </h2>
            <p>
              Если вы находитесь в Европейской экономической зоне или Великобритании, Общий регламент по защите данных (GDPR) предоставляет вам права в отношении ваших персональных данных. Вы можете запросить у нас копию персональных данных, которые мы храним о вас, попросить исправить их, если они неверны, попросить удалить их, попросить ограничить их использование и возразить против их обработки. Если обработка основана на вашем согласии, вы можете отозвать его в любое время; отзыв не влияет на то, что мы законно сделали раньше.
            </p>
            <p>
              Поскольку наши инструменты обрабатывают изображения локально и у нас нет учётных записей пользователей, единственные персональные данные, которые мы обычно храним, — это имя, адрес электронной почты и сообщение, которые вы отправляете через форму обратной связи. Чтобы воспользоваться любым из этих прав, напишите нам на <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>, и мы ответим в течение 30 дней. Вы также имеете право подать жалобу в местный орган по защите данных, если считаете, что мы обрабатывали ваши данные несправедливо.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Хранение данных
            </h2>
            <p>
              Мы храним персональные данные только столько, сколько необходимо для цели, ради которой они были собраны. Сообщения из формы обратной связи хранятся только до тех пор, пока на ваш запрос не будет дан ответ и беседа не завершится, а также в течение короткого периода после этого на случай дополнительных вопросов; они никогда не используются для маркетинга и никогда не передаются третьим лицам. Ваши изображения вообще не сохраняются: они существуют только в памяти вашего браузера, пока вы используете инструмент, и удаляются в тот момент, когда вы закрываете или обновляете вкладку. Обобщённые аналитические данные не содержат личной информации и хранятся только в сводной форме.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Безопасность и reCAPTCHA
            </h2>
            <p>
              Сайт работает по протоколу HTTPS, поэтому соединение между вашим браузером и сайтом зашифровано. Наша форма обратной связи предоставляется через FormSubmit, который пересылает ваше сообщение на наш адрес электронной почты, а форма защищена Google reCAPTCHA для блокировки спама и автоматизированных злоупотреблений. Когда вы отправляете форму, reCAPTCHA может собирать сведения об оборудовании и программном обеспечении, например данные о вашем браузере и устройстве, чтобы отличать людей от ботов; это регулируется <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Политикой конфиденциальности
              </a> и <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Условиями использования
              </a> Google. Мы никогда не просим вас отправлять пароли, платёжные данные или конфиденциальные личные документы через форму обратной связи, и вам не следует включать их в сообщение.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Конфиденциальность детей
            </h2>
            <p>
              CompressMyPic — это инструмент для широкой аудитории, он не предназначен для детей младше 13 лет. Мы сознательно не собираем личную информацию детей. Если вы родитель или опекун и считаете, что ваш ребёнок отправил нам личную информацию через форму обратной связи, напишите нам по электронной почте, и мы незамедлительно её удалим.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Изменения в этой политике
            </h2>
            <p>
              Мы можем обновлять эту политику при изменении сайта — например, если добавим новый аналитический сервис, нового рекламного партнёра или новый способ связи с нами. В этом случае мы изменим дату «Последнее обновление» в верхней части этой страницы, а существенные изменения будут описаны здесь простым языком. Продолжение использования сайта после изменения означает, что вы принимаете обновлённую политику.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Контакты
            </h2>
            <p>
              Если у вас есть вопросы по поводу этой политики, свяжитесь с нами по адресу{' '}
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
