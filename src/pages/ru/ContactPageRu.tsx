import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageRuProps {
  onNavigate: (path: string) => void;
}

export const ContactPageRu: React.FC<ContactPageRuProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Связаться с нами — CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Свяжитесь с CompressMyPic: вопросы, отзывы или помощь по бесплатному online-компрессору изображений. Мы обычно отвечаем в течение 24–48 рабочих часов.');
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
        throw new Error(data?.message || 'Не удалось отправить сообщение. Пожалуйста, попробуйте ещё раз.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Ошибка сети. Пожалуйста, отправьте письмо напрямую на bilalayyah@gmail.com.'
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
            onClick={() => onNavigate('/ru/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад к компрессору изображений</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Связаться с нами
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            Есть вопросы, отзывы или нужна помощь? Обратитесь к нашей команде через форму ниже или свяжитесь с нами напрямую по электронной почте.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>Прямые обращения</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>Время ответа</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Обычно мы отвечаем в течение 24–48 рабочих часов.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>Обязательство по приватности</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Ваш адрес электронной почты и текст сообщения используются только для ответа на ваше обращение и никогда не передаются третьим лицам.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">Сообщение успешно доставлено</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  Спасибо, что написали нам! Ваше сообщение было передано через FormSubmit на bilalayyah@gmail.com. Мы скоро свяжемся с вами.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    Отправить ещё одно сообщение
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
                      Ваше имя <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Иван Иванов"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Адрес электронной почты <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="ivan@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Тема <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Отзыв, сообщение об ошибке или общий вопрос"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Сообщение <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Чем мы можем вам помочь? Опишите вашу проблему или предложение подробнее..."
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
                      <span>Отправка сообщения...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Отправить сообщение</span>
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
              <span>Кто управляет CompressMyPic</span>
            </h2>
            <p>
              CompressMyPic создан и поддерживается Билалом — независимым разработчиком, который хотел сделать по-настоящему бесплатный компрессор изображений, уважающий вашу приватность. В отличие от большинства онлайн-инструментов, CompressMyPic никогда не загружает ваши фотографии на сервер: каждое изображение сжимается прямо в вашем браузере. Билал лично читает каждое сообщение и использует ваши отзывы, чтобы исправлять ошибки, улучшать качество и решать, какие новые инструменты создавать дальше.
            </p>
            <p>
              Поскольку это небольшой независимый проект, а не крупная компания, вы всегда получите прямой и честный ответ — даже если ответ заключается в том, что та или иная функция пока невозможна. Между вами и человеком, создавшим инструмент, нет ни очереди в поддержку, ни автоматического чат-бота.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>О чём нам можно написать?</span>
            </h2>
            <p>
              Самый быстрый способ получить помощь — точно рассказать, что произошло. Сообщая об ошибке, укажите название инструмента, которым вы пользовались, ваш браузер и тип файла изображения — например, фото HEIC с iPhone или прозрачный PNG. Предлагая функцию, опишите, чего вы пытались добиться и почему существующих инструментов недостаточно. Мы также принимаем сообщения о неверных результатах — например, если сжатое изображение выглядит хуже, чем ожидалось, — и исправления к нашим руководствам или переведённым страницам.
            </p>
            <p>
              Нам можно писать о партнёрстве, запросах прессы и предложениях новых инструментов. Если вы ведёте сайт, блог или учебный класс и хотите порекомендовать CompressMyPic своим читателям или ученикам, мы будем рады узнать об этом — просто используйте форму выше и укажите понятную тему, чтобы сообщение быстро попало по назначению.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Другие способы связаться с Билалом</span>
            </h2>
            <p>
              Если вы предпочитаете публичный канал, Билала и проект CompressMyPic можно найти в интернете. Исходный код размещён на GitHub, где также можно сообщать о технических проблемах и следить за разработкой. Подробные руководства по сжатию изображений публикуются на Dev.to, а продукт представлен на Indie Hackers, где можно следить за его развитием и оставлять отзывы.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— исходный код, сообщения об ошибках и новости разработки.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— руководства по сжатию JPG, PNG и WebP.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— страница продукта, этапы и отзывы сообщества.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Прежде чем написать</span>
            </h2>
            <p>
              Несколько быстрых проверок решают большинство проблем без ожидания ответа. Основной компрессор принимает изображения до 20 МБ каждое, а конвертеры форматов — до 25 МБ на файл; файл большего размера будет отклонён ещё до начала работы. Очень старые браузеры могут не поддерживать новые форматы, такие как AVIF или HEIC, поэтому попробуйте актуальную версию Chrome, Edge, Firefox или Safari — часто это чинит инструмент, который кажется сломанным. А поскольку ваши изображения никогда не покидают ваше устройство, проблема с конкретной фотографией обычно вызвана самим файлом, а не сайтом.
            </p>
            <p>
              Когда вы пишете нам, укажите название и версию вашего браузера, инструмент, которым вы пользовались, а также размер и формат изображения. Мы отвечаем на английском языке, обычно в течение 24–48 рабочих часов. Если ваш вопрос касается того, как обрабатываются ваши данные, сначала прочитайте нашу 
              <button
                type="button"
                onClick={() => onNavigate('/ru/konfidentsialnost')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                Политику конфиденциальности
              </button>
               — там простым языком объясняется, что ваши изображения никогда не загружаются и не сохраняются.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Сообщить о проблеме</span>
            </h2>
            <p>
              Нашли что-то сломанное? Сообщите нам, на какой странице это произошло, на что вы нажали и что ожидали увидеть вместо этого. Скриншоты очень помогают, а если проблема связана с конкретным изображением, укажите его формат и размер — но никогда не отправляйте нам личные или конфиденциальные фотографии. Мы исправляем сообщённые ошибки как можно быстрее и сообщим вам по электронной почте, когда исправление будет опубликовано.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
