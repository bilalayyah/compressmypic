import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';

interface GuideFormatsPageRuProps {
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
    text: 'Зайдите на compressmypic.online в вашем браузере. Ничего устанавливать не нужно, аккаунт создавать не нужно, и ни один файл никогда не загружается на сервер.',
  },
  {
    title: 'Загрузите изображение',
    text: 'Перетащите изображение на страницу или нажмите «Выбрать файлы», чтобы выбрать его. Поддерживаются файлы JPG, PNG и WebP, до 20 МБ на изображение.',
  },
  {
    title: 'Решите: сохранить формат или конвертировать',
    text: 'Выберите «Исходный», чтобы сохранить формат, который у изображения уже есть, или выберите JPG, PNG или WebP в качестве выходного. Воспользуйтесь руководством ниже: JPG для фотографий, PNG, когда нужна прозрачность, WebP, когда нужен самый маленький файл для сайта.',
  },
  {
    title: 'Выберите пресет качества',
    text: 'Начните с пресета «Сбалансированный» (около 70%). Для фотографии, которая должна выглядеть идеально, используйте пресет «Высокое» или качество 85–90%. Для маленького изображения на сайте подойдёт и более низкая настройка.',
  },
  {
    title: 'Проверьте живой размер и сравните',
    text: 'У каждого изображения показаны исходный размер и новый сжатый размер. Откройте сравнение до и после и приблизьте картинку — если вы не видите разницы, настройка выбрана правильно. Попробуйте переключить выходной формат на WebP и посмотрите, насколько меньше станет файл.',
  },
  {
    title: 'Скачайте изображение',
    text: 'Скачайте одно изображение или используйте «Скачать все (ZIP)», если конвертировали несколько изображений сразу. Ваш исходный файл никогда не изменяется — вы получаете новую, уменьшенную копию.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'Чем JPG отличается от PNG?',
    answer: 'JPG — формат с потерями, созданный для фотографий: он отбрасывает часть деталей, чтобы файлы были намного меньше, и не умеет делать прозрачность. PNG — формат без потерь с поддержкой прозрачности, поэтому он идеален для логотипов и графики, — но фотографии в PNG в несколько раз больше, чем та же фотография в JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'WebP лучше, чем JPG?',
    answer: 'По размеру файла — да: WebP обычно на 25–35% меньше JPG при схожем качестве, и он тоже поддерживает прозрачность. Единственная причина выбрать JPG вместо WebP — совместимость: некоторые старые программы и приложения по-прежнему лучше работают с JPG, а WhatsApp надёжнее показывает превью фотографий JPG.',
  },
  {
    id: 'fmt-faq-3',
    question: 'WebP лучше, чем PNG?',
    answer: 'Обычно да. WebP поддерживает прозрачность, как PNG, но даёт гораздо меньшие файлы, а также умеет сжимать с потерями, как JPG. PNG всё же остаётся более безопасным выбором, когда нужно идеальное качество без потерь для логотипа или графики, которую позже будут редактировать снова.',
  },
  {
    id: 'fmt-faq-4',
    question: 'Поддерживает ли PNG прозрачность, а JPG — нет?',
    answer: 'Верно. PNG поддерживает прозрачный фон (альфа-канал), поэтому логотипы и значки обычно сохраняют в PNG. У JPG прозрачности нет вообще — любая прозрачная область в JPG станет сплошным цветом, обычно белым, поэтому никогда не сохраняйте логотип с прозрачным фоном в JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'Почему файлы PNG намного больше, чем JPG?',
    answer: 'Потому что PNG — формат без потерь: он сохраняет каждую деталь каждого пикселя в точности, а JPG отбрасывает детали, которые глаз почти не замечает. Фото с камеры, сохранённое в PNG, может быть в 5–10 раз больше, чем то же фото в JPG. Поэтому фотографии почти никогда не следует сохранять в PNG.',
  },
  {
    id: 'fmt-faq-6',
    question: 'Когда использовать JPG вместо WebP?',
    answer: 'Используйте JPG, когда изображение будет открываться в старых программах, отправляться в WhatsApp или по электронной почте, где нужен гарантированный предпросмотр, или печататься. WebP лучше для сайтов, но для того, чтобы поделиться фото с кем-то, JPG по-прежнему самый универсальный формат.',
  },
  {
    id: 'fmt-faq-7',
    question: 'Можно ли конвертировать PNG в JPG?',
    answer: 'Да. Загрузите PNG в CompressMyPic, выберите JPG в качестве выходного формата и скачайте его. Только помните, что у JPG нет прозрачности: если у вашего PNG прозрачный фон, сначала выберите цвет фона, потому что прозрачная область иначе станет сплошной белой.',
  },
  {
    id: 'fmt-faq-8',
    question: 'Можно ли конвертировать JPG в WebP?',
    answer: 'Да. Загрузите JPG, выберите WebP в качестве выходного формата и скачайте его — файл обычно будет на 25–35% меньше при том же видимом качестве. Можно конвертировать несколько JPG в WebP сразу и скачать их все одним ZIP-архивом.',
  },
  {
    id: 'fmt-faq-9',
    question: 'Улучшит ли конвертация JPG в PNG качество?',
    answer: 'Нет. Конвертация JPG в PNG не может вернуть детали, которые сжатие JPG уже отбросило, — она только делает файл намного больше. Единственная веская причина конвертировать JPG в PNG — если изображение нужно редактировать снова без дальнейшей потери качества.',
  },
  {
    id: 'fmt-faq-10',
    question: 'Какой формат использовать для сайта?',
    answer: 'Сначала WebP, а JPG — как запасной вариант. WebP даёт самые маленькие файлы, благодаря чему страницы загружаются быстрее, а скорость страницы важна и для посетителей, и для Google. Используйте PNG только для изображений, которым нужна прозрачность, например для логотипа, а JPG — для фотографий, если не можете использовать WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: 'Какой формат лучше для логотипа?',
    answer: 'PNG, если логотипу нужен прозрачный фон, потому что JPG не умеет делать прозрачность. WebP тоже поддерживает прозрачность и даёт файл меньшего размера, поэтому это хороший выбор для логотипа на сайте. Никогда не сохраняйте логотип в JPG, если фон должен остаться прозрачным.',
  },
  {
    id: 'fmt-faq-12',
    question: 'Какой формат лучше для скриншотов?',
    answer: 'PNG или WebP. У скриншотов чёткие края и ровные цвета, с которыми PNG и WebP справляются хорошо. JPG размывает чёткие края текста. Для самого маленького файла скриншота попробуйте выходной формат WebP в CompressMyPic — он обычно намного меньше PNG без видимой разницы.',
  },
  {
    id: 'fmt-faq-13',
    question: 'Поддерживают ли все браузеры WebP сейчас?',
    answer: 'Да, практически все. Chrome, Edge, Firefox, Safari и все современные мобильные браузеры поддерживают WebP уже много лет. Только очень старые браузеры и некоторые старые приложения не могут открыть WebP — это единственная причина, по которой JPG всё ещё полезен.',
  },
  {
    id: 'fmt-faq-14',
    question: 'Принимают ли WhatsApp или Instagram формат WebP?',
    answer: 'WhatsApp может получать файлы WebP, но они могут не отображаться как обычное фото, поэтому для обмена фотографиями там безопаснее JPG. Instagram принимает JPG и PNG для публикаций и сам конвертирует загрузки. Для обмена в соцсетях придерживайтесь JPG для фотографий.',
  },
  {
    id: 'fmt-faq-15',
    question: 'Потеряет ли фото качество при конвертации в WebP?',
    answer: 'Только настолько, насколько вы сами решите. WebP использует ту же идею, что и JPG, — настройку качества, которая обменивает немного деталей на меньший файл. При качестве 80–90% фото в WebP выглядит неотличимо от исходного JPG, а файл примерно на треть меньше.',
  },
  {
    id: 'fmt-faq-16',
    question: 'Чем JPG отличается от JPEG?',
    answer: 'Ничем — JPG и JPEG это один и тот же формат. JPEG — полное название (Joint Photographic Experts Group), а JPG — короткое расширение файла. Файл photo.jpg и файл photo.jpeg — это один и тот же тип изображения.',
  },
  {
    id: 'fmt-faq-17',
    question: 'Сохранять исходный формат или конвертировать?',
    answer: 'Сохраняйте исходный, если вас устраивает размер, — это самый простой выбор, и при этом ничего не теряется. Конвертируйте, когда есть причина: JPG в WebP, чтобы уменьшить фото для сайта, PNG в JPG, чтобы уменьшить фото, которому не нужна прозрачность, или PNG в WebP, чтобы уменьшить логотип.',
  },
  {
    id: 'fmt-faq-18',
    question: 'Какой формат даёт самый маленький размер файла?',
    answer: 'WebP почти в каждом случае. Для фотографий WebP обычно на 25–35% меньше JPG при том же видимом качестве. Для графики с прозрачностью WebP обычно намного меньше PNG. Поэтому WebP — лучший формат для сайтов.',
  },
  {
    id: 'fmt-faq-19',
    question: 'Может ли CompressMyPic конвертировать между JPG, PNG и WebP?',
    answer: 'Да. Загрузите изображение JPG, PNG или WebP, выберите нужный выходной формат — исходный, JPG, PNG или WebP — и скачайте конвертированный файл. Можно конвертировать несколько изображений сразу с одинаковыми настройками и скачать их все одним ZIP-архивом.',
  },
  {
    id: 'fmt-faq-20',
    question: 'Что происходит с прозрачностью при конвертации PNG в JPG?',
    answer: 'Она теряется. JPG не может хранить прозрачность, поэтому прозрачные части вашего PNG станут сплошным цветом. CompressMyPic позволяет выбрать цвет фона, чтобы заполнить эти области, — выберите тот, который подходит месту, где будет использоваться изображение; обычно это белый.',
  },
];

export const GuideFormatsPageRu: React.FC<GuideFormatsPageRuProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG против PNG против WebP: какой формат выбрать?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG против PNG против WebP — простое объяснение: размер файла, качество и прозрачность в сравнении, чтобы вы могли выбрать правильный формат для фото, логотипов и сайтов.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ru/rukovodstva/jpg-protiv-png-protiv-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Как выбрать между JPG, PNG и WebP и конвертировать изображения',
          description: 'Сравните JPG, PNG и WebP, а затем сожмите или конвертируйте изображение с помощью CompressMyPic.',
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
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            JPG против PNG против WebP — какой формат выбрать?
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            Неправильный формат может сделать ваше изображение в десять раз больше, чем нужно, или испортить прозрачный логотип. Вот простое и честное сравнение, а также то, как конвертировать между форматами за секунды.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              <span>Короткий ответ</span>
            </h2>
            <p>
              Если запомнить только одно, запомните это: используйте JPG для фотографий, PNG для логотипов и всего, чему нужна прозрачность, и WebP, когда хотите самый маленький файл, — особенно на сайте. Таблица ниже показывает, почему.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">Формат</th>
                    <th className="px-4 py-3 font-bold">Размер файла</th>
                    <th className="px-4 py-3 font-bold">Прозрачность</th>
                    <th className="px-4 py-3 font-bold">Лучше всего для</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">JPG</td>
                    <td className="px-4 py-3">Маленький</td>
                    <td className="px-4 py-3">Нет</td>
                    <td className="px-4 py-3">Фотографии, обмен, печать</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">PNG</td>
                    <td className="px-4 py-3">Большой</td>
                    <td className="px-4 py-3">Да</td>
                    <td className="px-4 py-3">Логотипы, значки, скриншоты</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">WebP</td>
                    <td className="px-4 py-3">Самый маленький</td>
                    <td className="px-4 py-3">Да</td>
                    <td className="px-4 py-3">Сайты, фото для веба</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              <span>JPG: лучше всего для фотографий</span>
            </h2>
            <p>
              JPG (также пишется JPEG) — классический формат фотографий. Он использует сжатие с потерями: отбрасывает мелкие детали, которые глаз почти не замечает, благодаря чему файлы становятся значительно меньше. Фото с камеры на 5 МБ может стать JPG на 500 КБ и по-прежнему выглядеть отлично. JPG не умеет делать прозрачность, поэтому это неправильный выбор для логотипов, — но для любой обычной фотографии это безопасный универсальный вариант по умолчанию, который может открыть любое устройство и приложение.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>PNG: лучше всего для логотипов и прозрачности</span>
            </h2>
            <p>
              PNG — формат без потерь: он сохраняет каждый пиксель в точности и поддерживает прозрачный фон. Это делает его правильным форматом для логотипов, значков и графики с текстом. Цена — размер файла: фотография, сохранённая в PNG, может быть в 5–10 раз больше, чем та же фотография в JPG. Никогда не сохраняйте фото с камеры в PNG без конкретной причины.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>WebP: лучше всего для сайтов</span>
            </h2>
            <p>
              WebP — современный формат, созданный Google. Он умеет всё: сжатие с потерями, как JPG, прозрачность, как PNG, и файлы, которые обычно на 25–35% меньше JPG при том же видимом качестве. Его поддерживают все современные браузеры, поэтому это лучший формат для изображений на сайте. Его единственная слабость — совместимость со старым программным обеспечением и предпросмотр в WhatsApp, где JPG по-прежнему безопаснее.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="Скриншот сравнения одной и той же фотографии, сохранённой в JPG, PNG и WebP, с размерами файлов"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Одна и та же фотография в трёх форматах: WebP — самый маленький, PNG — самый большой, а JPG — посередине.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileImage className="w-5 h-5 text-blue-600" />
              <span>Пошагово: сожмите или конвертируйте изображение</span>
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Какой формат для какой задачи?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Фото с камеры — JPG или WebP</div>
                <p className="text-xs text-slate-600">
                  JPG для обмена и печати, WebP для вашего сайта. Оба сохраняют фотографии отлично выглядящими при размере в разы меньше исходного.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Логотипы и значки — PNG или WebP</div>
                <p className="text-xs text-slate-600">
                  Нужна прозрачность, поэтому JPG исключён. PNG — безопасная классика; WebP меньше и работает везде, где современно.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Скриншоты — WebP или PNG</div>
                <p className="text-xs text-slate-600">
                  Чёткий текст и ровные цвета подходят WebP и PNG. JPG размывает края текста, поэтому избегайте его для скриншотов.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Изображения для сайта — WebP</div>
                <p className="text-xs text-slate-600">
                  Самые маленькие файлы означают более быстрые страницы. Конвертируйте фото для сайта в WebP и держите JPG как запасной вариант для очень старых браузеров.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="Скриншот выбора выходного формата JPG, PNG или WebP в CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Выберите выходной формат в CompressMyPic — сохраните исходный или конвертируйте в JPG, PNG или WebP.
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Часто задаваемые вопросы</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
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
            <h2 className="text-xl font-bold text-slate-900">Похожие руководства</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/ru/rukovodstva/szhat-izobrazheniya-dlya-whatsapp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Как сжать изображения для WhatsApp без потери качества</div>
                <p className="text-xs text-slate-600 mt-1">Сначала уменьшите фото сами, а затем отправьте их как документы, чтобы WhatsApp не мог их размыть.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/ru/rukovodstva/umenshit-razmer-izobrazheniya-do-100-kb')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Как уменьшить размер изображения до 100 КБ для сайтов и электронной почты</div>
                <p className="text-xs text-slate-600 mt-1">Пошаговое руководство, как достичь 100 КБ, не испортив фотографию.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ru/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Сжать изображения бесплатно
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ru/rukovodstva/szhat-izobrazheniya-dlya-whatsapp')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Сжать для WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
