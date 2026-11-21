import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageRuProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageRu: React.FC<CookiePolicyPageRuProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Политика использования файлов cookie | CompressMyPic – Как используются cookie';
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
            <ArrowLeft className="w-4 h-4" />
            <span>Вернуться к компрессору изображений</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Политика использования файлов cookie
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Последнее обновление: 18 ноября 2026 г.
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Что такое файлы cookie?
            </h2>
            <p>
              Файлы cookie — это небольшие текстовые файлы, которые сайт просит ваш браузер сохранить на вашем устройстве. Они могут запоминать информацию о вашем посещении — например, видели ли вы уже какое-то сообщение — чтобы сайт или сервис мог распознать ваш браузер при следующем посещении. Эта политика объясняет, какие cookie используются на CompressMyPic, зачем они используются и как вы можете ими управлять.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookie, которые мы не устанавливаем
            </h2>
            <p>
              Сам CompressMyPic не устанавливает никаких cookie. Наши инструменты для изображений работают полностью в вашем браузере: для сжатия не нужны ни учётная запись, ни вход в систему, ни cookie. Мы не устанавливаем cookie, чтобы запомнить вас, отслеживать вас или сохранять ваши настройки. Ваши изображения никогда не покидают ваш браузер, и никакая информация о них не хранится в cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Рекламные cookie
            </h2>
            <p>
              CompressMyPic в настоящее время не показывает рекламу и не устанавливает рекламные файлы cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Cookie Google Analytics 4
            </h2>
            <p>
              Мы используем Google Analytics 4 (GA4), чтобы в обобщённом виде понимать, как используется сайт — например, какие инструменты популярны и какие страницы посещаются. GA4 может устанавливать cookie на вашем устройстве, например _ga, чтобы отличать одно посещение от другого. Данные анонимизированы и используются только в обобщённом виде; мы не используем GA4 для вашей личной идентификации. Вы можете отказаться от Google Analytics в любое время, установив дополнение для отключения Google Analytics (https://tools.google.com/dlpage/gaoptout) или отключив cookie в настройках браузера.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Согласие (ЕЭЗ, Великобритания и Швейцария)
            </h2>
            <p>
              Поскольку этот сайт в настоящее время не показывает рекламу, сообщение о согласии на рекламу не отображается и согласие на рекламу не запрашивается. Статистика использования собирается с помощью Google Analytics; вы можете заблокировать аналитические cookie в настройках браузера (см. раздел 8).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Другие сторонние сервисы
            </h2>
            <p>
              Некоторые другие сервисы на этом сайте могут использовать собственные cookie или похожее хранилище. Google reCAPTCHA, защищающая нашу форму обратной связи от спама, может устанавливать cookie, чтобы отличать людей от ботов; её использование регулируется 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">Политика конфиденциальности Google</a>
               и 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">Условия использования Google</a>
               Google. Cloudflare, на котором размещён этот сайт, может устанавливать cookie безопасности для защиты сайта от злоупотреблений. Анонимные комментарии под нашими инструментами запрашивают только имя, которое хранится сервисом комментариев — а не в cookie этого сайта.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Хранилище браузера, которое не является cookie
            </h2>
            <p>
              Ваш браузер также хранит небольшой объём локальной информации, которая не является cookie. Если вы публикуете комментарий, браузер может запомнить введённое вами имя, чтобы не вводить его снова, а если вы меняете язык сайта, браузер может запомнить этот выбор для следующего посещения. Эта информация остаётся на вашем устройстве, никогда не отправляется на наши серверы, и вы можете удалить её в любое время, очистив данные сайта в браузере.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Как управлять cookie
            </h2>
            <p>
              Вы можете удалить cookie, уже сохранённые на вашем устройстве, и запретить установку cookie в будущем в настройках браузера — все основные браузеры (Chrome, Firefox, Safari, Edge) предлагают это в настройках конфиденциальности или безопасности. Блокировка всех cookie не повредит нашим инструментам для изображений, которые не зависят от cookie, но может повлиять на функции сторонних сервисов, таких как аналитика. Вы также можете использовать приватный режим или режим инкогнито браузера, который удаляет cookie при закрытии окна.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Изменения этой политики
            </h2>
            <p>
              Мы можем обновлять эту политику при изменении сайта — например, если добавим нового рекламного партнёра или сервис аналитики. В этом случае мы изменим дату «Последнее обновление» вверху этой страницы. Продолжение использования сайта после изменения означает, что вы принимаете обновлённую политику.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Контакты
            </h2>
            <p>
              Если у вас есть вопросы об этой политике, свяжитесь с нами по адресу 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
               или прочитайте нашу 
              <a href="/ru/konfidentsialnost" onClick={(e) => { e.preventDefault(); onNavigate('/ru/konfidentsialnost'); }} className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Политика конфиденциальности</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
