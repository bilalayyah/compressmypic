import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideWhatsAppPageRuProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Откройте CompressMyPic',
    text: 'Зайдите на compressmypic.online в браузере телефона или компьютера. Ничего устанавливать не нужно, аккаунт создавать не нужно — инструмент открывается сразу.',
  },
  {
    title: 'Загрузите фотографию',
    text: 'Нажмите «Выбрать файлы» и выберите фото из галереи или перетащите его на страницу. Можно загрузить несколько фотографий сразу. Каждое изображение может быть до 20 МБ.',
  },
  {
    title: 'Начните с пресета «Сбалансированный»',
    text: 'Пресет «Сбалансированный» (качество около 70%) — хорошая отправная точка для фотографий в WhatsApp. Он сильно уменьшает файл, а картинка на экране телефона по-прежнему выглядит чёткой.',
  },
  {
    title: 'Проверьте живой размер до и после',
    text: 'У каждой фотографии рядом показаны исходный размер и новый сжатый размер. Если файл всё ещё больше, чем нужно, опустите ползунок качества чуть ниже и следите, как размер обновляется мгновенно.',
  },
  {
    title: 'Оставьте JPG для фотографий',
    text: 'Для обычных фотографий оставьте выходной формат JPG. Это формат, с которым WhatsApp работает лучше всего, и он даёт самые маленькие файлы для фото. Используйте PNG только если изображению нужна прозрачность, например для логотипа.',
  },
  {
    title: 'Сравните до и после',
    text: 'Откройте сравнение до и после, чтобы проверить, что картинка по-прежнему выглядит хорошо. Приблизьте лица и текст — если вы не видите реальной разницы, настройка качества выбрана правильно.',
  },
  {
    title: 'Скачайте уменьшенную фотографию',
    text: 'Нажмите «Скачать» у фотографии или используйте «Скачать все (ZIP)», если сжали несколько фотографий сразу. Файл меньшего размера сохраняется на вашем устройстве — исходная фотография никогда не изменяется.',
  },
  {
    title: 'Отправьте её в WhatsApp правильно',
    text: 'Если хотите максимально возможное качество, отправьте сжатую фотографию как документ: в WhatsApp нажмите «Прикрепить», затем «Документ» и выберите файл. WhatsApp отправляет документы без изменений, поэтому фотография дойдёт ровно такой, какой вы её сжали. Если отправить её как фото, WhatsApp сожмёт её второй раз.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'Почему WhatsApp снижает качество фотографий?',
    answer: 'Когда вы отправляете фото обычным способом, WhatsApp повторно сжимает его, чтобы сэкономить трафик и место, часто уменьшая его до гораздо меньшего размера и более низкого качества. Именно поэтому чёткое фото с камеры после отправки может выглядеть мягким или размытым.',
  },
  {
    id: 'wa-faq-2',
    question: 'Сжимает ли WhatsApp изображения, отправленные как документы?',
    answer: 'Нет. Когда вы отправляете изображение как документ («Прикрепить», затем «Документ»), WhatsApp отправляет файл ровно таким, какой он есть, без дополнительного сжатия. Это лучший способ поделиться фото в полном качестве.',
  },
  {
    id: 'wa-faq-3',
    question: 'Какой максимальный размер изображения можно отправить в WhatsApp?',
    answer: 'WhatsApp разрешает документы до 2 ГБ, поэтому сжатая фотография в несколько сотен килобайт никогда не станет проблемой. Фото, отправленные обычным способом, повторно сжимаются самим WhatsApp, поэтому на практике значение имеет качество, а не размер.',
  },
  {
    id: 'wa-faq-4',
    question: 'Как отправить фото в WhatsApp в полном качестве?',
    answer: 'Сначала сожмите фото сами с помощью CompressMyPic, чтобы оно было разумного размера, а затем отправьте его в WhatsApp как документ, а не как фото. Нажмите «Прикрепить», выберите «Документ» и укажите файл. Он дойдёт без повторного сжатия со стороны WhatsApp.',
  },
  {
    id: 'wa-faq-5',
    question: 'Сжимать перед отправкой или позволить это сделать WhatsApp?',
    answer: 'Сожмите сами заранее. WhatsApp сжимает агрессивно, и вы никак не можете это контролировать. Когда вы сначала сжимаете фото в CompressMyPic, вы сами выбираете качество, проверяете результат, а затем отправляете файл как документ, чтобы WhatsApp больше его не трогал.',
  },
  {
    id: 'wa-faq-6',
    question: 'Какое качество выбрать для фотографий в WhatsApp?',
    answer: 'Начните с пресета «Сбалансированный» — около 70%. Для важной фотографии используйте 80–85% и проверьте сравнение до и после. Для быстрой повседневной фотографии, где важна скорость, 50–60% на экране телефона всё равно выглядят хорошо и дают файл гораздо меньшего размера.',
  },
  {
    id: 'wa-faq-7',
    question: 'Двойное сжатие ухудшает фотографии?',
    answer: 'Да. Каждый раунд JPEG-сжатия отбрасывает ещё немного деталей. Поэтому сожмите один раз с помощью CompressMyPic, а затем отправьте результат как документ, вместо того чтобы позволять WhatsApp сжать уже сжатую фотографию второй раз.',
  },
  {
    id: 'wa-faq-8',
    question: 'Можно ли сжимать фотографии для WhatsApp на телефоне?',
    answer: 'Да. CompressMyPic работает в браузере на Android и iPhone. Откройте сайт, выберите фото из фотоплёнки, сожмите его, скачайте файл меньшего размера, а затем поделитесь им из WhatsApp. Приложение устанавливать не нужно.',
  },
  {
    id: 'wa-faq-9',
    question: 'Сжатые фотографии по-прежнему хорошо выглядят в статусе WhatsApp?',
    answer: 'Да, если не переборщить. Статус WhatsApp показывает фотографии в скромном разрешении, поэтому фото, сжатое с пресетом «Сбалансированный» (около 70%), на экране телефона выглядит так же, как оригинал. Не опускайтесь ниже 50% для фото статуса с лицами или текстом.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp пишет, что изображение слишком большое, — что делать?',
    answer: 'Загрузите изображение в CompressMyPic и опускайте ползунок качества, пока файл не станет в несколько сотен килобайт, затем скачайте его и отправьте снова. Если оно всё равно не отправляется как фото, отправьте его как документ — документы принимают файлы гораздо большего размера.',
  },
  {
    id: 'wa-faq-11',
    question: 'Использовать JPG или PNG для WhatsApp?',
    answer: 'Используйте JPG для фотографий. JPG даёт гораздо меньшие файлы для фото с камеры, и WhatsApp работает с ним лучше всего. Используйте PNG только для изображений, которым нужна прозрачность, например для логотипа, потому что файлы PNG гораздо больше.',
  },
  {
    id: 'wa-faq-12',
    question: 'Можно ли отправлять изображения WebP в WhatsApp?',
    answer: 'WhatsApp может получать файлы WebP, но они могут не отображаться как обычное фото, а некоторые телефоны обрабатывают их странно. Для фотографий, которые люди должны видеть прямо в чате, JPG — более безопасный выбор. WebP лучше подходит для сайтов, чем для WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: 'Как сжать несколько фотографий для WhatsApp сразу?',
    answer: 'Загрузите все фотографии в CompressMyPic за один раз, примените ко всем одинаковый пресет и скачайте всё вместе с помощью кнопки «Скачать все (ZIP)». Затем отправляйте файлы из WhatsApp по одному или как документы.',
  },
  {
    id: 'wa-faq-14',
    question: 'Сжимает ли WhatsApp видео так же?',
    answer: 'Да, WhatsApp также сжимает видео, отправленные обычным способом, и может уменьшить их очень сильно. CompressMyPic работает только с изображениями (JPG, PNG, WebP), а не с видео. Для видео отправляйте их как документы, чтобы сохранить исходное качество.',
  },
  {
    id: 'wa-faq-15',
    question: 'Удалит ли сжатие оригинал фотографии с моего телефона?',
    answer: 'Нет. CompressMyPic создаёт новую, уменьшенную копию и скачивает её на ваше устройство. Ваша исходная фотография остаётся в галерее ровно такой, какой была, нетронутой.',
  },
  {
    id: 'wa-faq-16',
    question: 'Загружаются ли мои фотографии на сервер при сжатии?',
    answer: 'Нет. Всё сжатие происходит внутри вашего браузера на вашем устройстве, поэтому ваши фотографии никогда не загружаются, не хранятся и не видны никому другому. Они остаются в памяти браузера и удаляются при закрытии или обновлении вкладки.',
  },
  {
    id: 'wa-faq-17',
    question: 'Насколько маленькой должна быть фотография для WhatsApp?',
    answer: 'Для повседневной отправки хороший ориентир — 100–300 КБ на фото: отправляется быстро, расходует мало мобильного трафика и по-прежнему выглядит чётко на телефоне. Для фотографии, которую хотите распечатать или сохранить, держитесь ближе к 500 КБ–1 МБ при более высоком качестве.',
  },
  {
    id: 'wa-faq-18',
    question: 'Почему мои фотографии в WhatsApp выглядят размытыми после отправки?',
    answer: 'Потому что WhatsApp повторно сжал их, когда вы отправили их как фото. Решение — сначала сжать фото самостоятельно при качестве, которое контролируете вы, а затем отправить его как документ, чтобы WhatsApp не сжимал его снова.',
  },
  {
    id: 'wa-faq-19',
    question: 'Можно ли сжать скриншот для WhatsApp?',
    answer: 'Да. Загрузите скриншот в CompressMyPic так же, как фотографию. Скриншоты сжимаются очень хорошо, потому что в них много больших областей ровного цвета, — сначала попробуйте пресет «Сбалансированный», а если хотите самый маленький файл, переключитесь на выходной формат WebP.',
  },
  {
    id: 'wa-faq-20',
    question: 'Бесплатен ли CompressMyPic для фотографий в WhatsApp?',
    answer: 'Да, полностью бесплатно. Нет регистрации, нет водяных знаков, нет ограничения на количество сжимаемых фотографий и не нужен аккаунт. Просто откройте сайт, сожмите и скачайте.',
  },
];

export const GuideWhatsAppPageRu: React.FC<GuideWhatsAppPageRuProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Как сжать изображения для WhatsApp без потери качества';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Узнайте, как сжать изображения для WhatsApp без потери качества. Бесплатно, приватно, без регистрации — уменьшайте фото перед отправкой, чтобы они оставались чёткими и отправлялись быстро.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ru/rukovodstva/szhat-izobrazheniya-dlya-whatsapp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Как сжать изображения для WhatsApp без потери качества',
          description: 'Сожмите фото с помощью CompressMyPic и отправьте его в WhatsApp как документ, чтобы оно осталось чётким.',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/ru/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад к компрессору изображений</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            Как сжать изображения для WhatsApp без потери качества
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            WhatsApp уменьшает каждую фотографию, которую вы отправляете, — зачастую гораздо сильнее, чем нужно. Сожмите фотографии сами заранее, а затем отправьте их правильным способом, и они дойдут чёткими, отправятся быстро и израсходуют меньше мобильного трафика.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>Почему WhatsApp делает ваши фотографии размытыми</span>
            </h2>
            <p>
              Когда вы отправляете фото в WhatsApp обычным способом, WhatsApp повторно сжимает его перед доставкой. Фото с камеры размером 3 МБ может дойти как файл на 100 КБ с мягкими деталями и блочными цветами. WhatsApp делает это, чтобы сэкономить трафик и место, но вы никак не можете повлиять на то, сколько качества потеряется.
            </p>
            <p>
              Есть и второй способ отправить фото, которым большинство людей никогда не пользуется: отправить его как документ. Документы доставляются ровно такими, какие они есть, без всякого дополнительного сжатия. Хитрость в том, чтобы сначала уменьшить фото самостоятельно — с настройкой качества, которую контролируете вы, — а затем отправить его как документ. Так вы получаете одновременно и маленький файл, и чёткое фото.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>Пошагово: сожмите фото для WhatsApp</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="Скриншот загрузки фотографии в CompressMyPic перед отправкой в WhatsApp"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Загрузите фотографию в CompressMyPic — перетащите её или выберите из галереи.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>Какое качество выбрать?</span>
            </h2>
            <p>
              Единого идеального значения не существует — всё зависит от фотографии и от того, для чего она нужна. Используйте это как отправную точку и каждый раз проверяйте сравнение до и после:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Повседневные фото: 70%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Пресет «Сбалансированный». Большая экономия размера, а фото по-прежнему выглядит чётким на любом экране телефона. Лучший выбор по умолчанию для WhatsApp.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Важные фото: 80–85%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Семейные снимки, фотографии из путешествий, всё, что хочется сохранить. Файл больше, но мелкие детали лиц и пейзажей сохраняются.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Быстрая отправка: 50–60%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Мемы, быстрые обновления, фото при медленном мобильном интернете. Намного меньшие файлы, которые на размере экрана телефона всё равно выглядят хорошо.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Советы для лучших результатов</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Сжимайте один раз и только один раз. Повторное сжатие уже сжатого фото второй раз отбрасывает детали почти без дополнительной экономии.</li>
              <li>Всегда отправляйте сжатый файл как документ, если важно качество, — это единственный способ не дать WhatsApp сжать его снова.</li>
              <li>Сожмите несколько фотографий сразу с одинаковыми настройками и скачайте их все кнопкой «Скачать все (ZIP)».</li>
              <li>Для скриншотов и графики с текстом попробуйте выходной формат WebP — он сохраняет чёткие края и даёт файл меньше, чем JPG.</li>
              <li>Ваша исходная фотография никогда не изменяется. CompressMyPic сохраняет новую, уменьшенную копию, поэтому вы всегда можете вернуться и попробовать другое качество.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="Скриншот ползунка качества и живого размера файла до и после в CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Двигайте ползунок качества и следите, как размер до и после обновляется в реальном времени, пока файл не станет нужного размера.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>Распространённые ошибки</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Отправка фото как фото после сжатия — WhatsApp сожмёт его второй раз и сведёт вашу работу на нет.</li>
              <li>Снижение качества ниже 40% для фото с лицами — кожа и мелкие детали очень быстро становятся блочными при низком качестве.</li>
              <li>Использование PNG для фото с камеры — файлы PNG для фотографий намного больше, чем JPG, и в WhatsApp это ничего не даёт.</li>
              <li>Отсутствие проверки результата — всегда смотрите сравнение до и после перед отправкой, особенно для фото с текстом.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Часто задаваемые вопросы</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">Похожие руководства</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/ru/rukovodstva/jpg-protiv-png-protiv-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG против PNG против WebP — какой формат выбрать?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Размер файла, качество и прозрачность в сравнении, чтобы каждый раз выбирать правильный формат.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/ru/rukovodstva/umenshit-razmer-izobrazheniya-do-100-kb')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Как уменьшить размер изображения до 100 КБ для сайтов и электронной почты</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Пошаговое руководство, как достичь 100 КБ, не испортив фотографию.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ru/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Сжать изображения бесплатно
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ru/rukovodstva/umenshit-razmer-izobrazheniya-do-100-kb')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              Уменьшить изображение до 100 КБ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
