import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';

interface Guide100kbPageRuProps {
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
    text: 'Зайдите на compressmypic.online в вашем браузере. Ничего устанавливать не нужно и аккаунт создавать не нужно — инструмент бесплатный, без регистрации и без водяных знаков.',
  },
  {
    title: 'Загрузите изображение',
    text: 'Перетащите изображение на страницу или нажмите «Выбрать файлы», чтобы выбрать его на устройстве. Поддерживаются JPG, PNG и WebP, до 20 МБ на изображение. Можно загрузить несколько изображений сразу.',
  },
  {
    title: 'Начните с пресета «Сбалансированный»',
    text: 'Пресет «Сбалансированный» устанавливает качество около 70%. Для большинства фотографий этого уже достаточно, чтобы сократить файл до доли исходного размера, — посмотрите на живой размер рядом с изображением, чтобы понять, где вы находитесь.',
  },
  {
    title: 'Опускайте ползунок качества шаг за шагом',
    text: 'Поля, куда можно ввести «100 КБ», нет — вместо этого медленно двигайте ползунок качества вниз и следите, как живой размер до и после обновляется после каждого изменения. Двигайтесь маленькими шагами (например, с 70% до 60%, затем до 50%), чтобы не перескочить и не потерять больше качества, чем нужно.',
  },
  {
    title: 'Переключитесь на WebP, если всё ещё больше 100 КБ',
    text: 'Если файл всё ещё больше 100 КБ при разумном качестве, измените выходной формат на WebP. WebP обычно на 25–35% меньше JPG при том же видимом качестве, и это часто закрывает разрыв до 100 КБ без дальнейшего снижения качества.',
  },
  {
    title: 'Сравните до и после',
    text: 'Откройте сравнение до и после и приблизьте лица, текст и мелкие детали. Если картинка по-прежнему выглядит хорошо, вы закончили. Если она выглядит блочной или выцветшей, немного поднимите качество и примите файл чуть больше 100 КБ — чёткое фото на 120 КБ лучше размытого на 100 КБ.',
  },
  {
    title: 'Скачайте изображение',
    text: 'Нажмите «Скачать», чтобы сохранить файл меньшего размера, или используйте «Скачать все (ZIP)», если уменьшили несколько изображений сразу. Ваше исходное изображение никогда не изменяется — вы всегда получаете новую, уменьшенную копию.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'Как уменьшить мою фотографию примерно до 100 КБ?',
    answer: 'Загрузите её в CompressMyPic, начните с пресета «Сбалансированный», а затем опускайте ползунок качества шаг за шагом, следя за живым размером до и после. Остановитесь, как только сжатый размер станет близок к 100 КБ. Если вы всё ещё выше, переключите выходной формат на WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'Почему нет поля для точного ввода 100 КБ?',
    answer: 'Потому что каждое фото сжимается по-разному: чистое небо уменьшается гораздо сильнее, чем оживлённая сцена с толпой, при том же качестве. Фиксированное поле «100 КБ» должно было бы гадать. Вместо этого CompressMyPic показывает вам живой сжатый размер после каждого изменения, чтобы вы могли сами довести файл до 100 КБ, полностью контролируя качество.',
  },
  {
    id: 'kb-faq-3',
    question: 'Какая настройка качества даёт около 100 КБ?',
    answer: 'Это зависит от фотографии, но для типичного фото с телефона качество 50–70% обычно даёт около 100 КБ. Простое фото с ровными цветами может достичь 100 КБ при 70%, а детализированный пейзаж может потребовать 40–50%. Следите за живым размером — это число и есть правда, а не какой-то фиксированный процент.',
  },
  {
    id: 'kb-faq-4',
    question: 'Моё фото всё ещё больше 100 КБ при низком качестве — что теперь?',
    answer: 'Сначала переключите выходной формат на WebP, который обычно на 25–35% меньше JPG. Если всё ещё больше, опустите качество ещё немного и проверьте сравнение — небольшое дополнительное снижение часто незаметно. В крайнем случае фото с огромными размерами может потребовать более низкой настройки качества, чем вы ожидали, потому что больше пикселей означает больше данных.',
  },
  {
    id: 'kb-faq-5',
    question: 'Стоит ли использовать WebP, чтобы достичь 100 КБ?',
    answer: 'Да, когда это возможно. WebP — самый простой способ достичь 100 КБ без слишком сильного снижения качества, потому что он даёт файл меньшего размера при том же видимом качестве, что и JPG. Используйте WebP для изображений на сайте и везде, где используются современные браузеры; используйте JPG только когда изображение должно открываться в старых программах или отправляться в WhatsApp.',
  },
  {
    id: 'kb-faq-6',
    question: 'Размывается ли фото при уменьшении до 100 КБ?',
    answer: 'Нет, если делать это аккуратно. При 100 КБ обычное фото с телефона по-прежнему выглядит чётким на экранах, потому что экраны показывают гораздо меньше пикселей, чем запечатлела камера. Оно выглядит размытым, только если опустить качество слишком низко (ниже примерно 40%) или если фото печатается в большом размере. Всегда проверяйте сравнение до и после перед скачиванием.',
  },
  {
    id: 'kb-faq-7',
    question: 'Можно ли уменьшить PNG до 100 КБ?',
    answer: 'Да, но фотографии в PNG изначально большие, поэтому это требует больше усилий. Загрузите PNG, опустите ползунок качества и переключите выходной формат на WebP или JPG — уже это одно часто сокращает размер более чем вдвое. Сохраняйте выходной формат PNG, только если изображению нужна прозрачность, и примите, что прозрачный PNG может не достичь 100 КБ.',
  },
  {
    id: 'kb-faq-8',
    question: 'Как уменьшить размер изображения до 200 КБ?',
    answer: 'Используйте тот же метод: загрузите изображение, начните с пресета «Сбалансированный» и опускайте ползунок качества, следя за живым размером, пока он не станет близок к 200 КБ. Большинство фотографий легко достигают 200 КБ при качестве 70–80%, поэтому опускаться низко обычно вообще не нужно.',
  },
  {
    id: 'kb-faq-9',
    question: 'Как уменьшить размер изображения до 50 КБ?',
    answer: 'Загрузите изображение, переключите выходной формат на WebP и постепенно опускайте ползунок качества, пока живой размер не станет близок к 50 КБ, — обычно около 40–55% качества для фотографии. Внимательно проверяйте сравнение, потому что при 50 КБ мелкие детали начинают страдать; это подходит для миниатюр и чатов, но менее хорошо для фотографий, которые хочется сохранить.',
  },
  {
    id: 'kb-faq-10',
    question: 'Как уменьшить размер изображения до 20 КБ?',
    answer: 'Используйте выходной формат WebP и низкую настройку качества, обычно 25–40%, и следите за живым размером. 20 КБ — это очень мало, поэтому ожидайте заметной мягкости: это подходит для значков, миниатюр и крошечных превью, а не для фотографий с лицами. Если изображение всё равно не достигает 20 КБ, в нём, вероятно, слишком много деталей для такого крошечного файла.',
  },
  {
    id: 'kb-faq-11',
    question: 'Какой размер файла хорош для изображений на сайте?',
    answer: 'Стремитесь к менее 100 КБ на изображение для обычных фото контента и менее 200 КБ для больших изображений-героев. Маленькие файлы делают страницы быстрее, что замечают посетители и вознаграждает Google. Используйте формат WebP и пресет «Сбалансированный» как отправную точку для изображений на сайте.',
  },
  {
    id: 'kb-faq-12',
    question: 'Какое ограничение на размер вложений в электронной почте?',
    answer: 'Большинство почтовых провайдеров разрешают 20–25 МБ на сообщение в общей сложности, включая все вложения, — Gmail разрешает 25 МБ. Одна фотография, уменьшенная до 100 КБ, никогда не станет проблемой; даже десять фотографий по 100 КБ — это всего 1 МБ. Именно предварительное сжатие делает отправку нескольких фото по электронной почте безболезненной.',
  },
  {
    id: 'kb-faq-13',
    question: 'Можно ли уменьшить несколько изображений до 100 КБ сразу?',
    answer: 'Да. Загрузите все изображения вместе, примените ко всем одинаковый пресет и качество и проверьте живой размер каждого. Если одно изображение всё ещё больше 100 КБ, настройте его отдельно, а затем скачайте всё вместе с помощью кнопки «Скачать все (ZIP)».',
  },
  {
    id: 'kb-faq-14',
    question: 'Изменяет ли инструмент размеры моего изображения?',
    answer: 'Нет. CompressMyPic сохраняет размеры вашего изображения в точности — уменьшается только размер файла. Ваша фотография сохраняет ту же ширину, высоту и соотношение сторон, что и оригинал, поэтому фото 4000×3000 остаётся 4000×3000, просто с гораздо меньшим файлом.',
  },
  {
    id: 'kb-faq-15',
    question: 'Как проверить размер моего сжатого изображения?',
    answer: 'CompressMyPic показывает исходный размер и сжатый размер для каждого изображения, в реальном времени, прямо под каждой фотографией — например, «4,2 МБ → 98 КБ». Также можно проверить скачанный файл на вашем устройстве: на телефоне посмотрите сведения о файле в галерее или файловом менеджере.',
  },
  {
    id: 'kb-faq-16',
    question: 'Достаточно ли 100 КБ качества для сайта?',
    answer: 'Да, почти для любого использования в вебе. Фотографии на сайте показываются шириной в несколько сотен пикселей, поэтому изображение на 100 КБ выглядит чётким на экране. Только полноэкранные изображения-герои или фотографии, предназначенные для печати, нуждаются в файлах большего размера. Сожмите до 100 КБ, проверьте сравнение — и вы увидите, что качество сохраняется.',
  },
  {
    id: 'kb-faq-17',
    question: 'Можно ли уменьшить скриншот до 100 КБ?',
    answer: 'Да, и скриншоты — самый лёгкий случай. В них много больших областей ровного цвета, поэтому они сжимаются исключительно хорошо: скриншот, который начинался с 1 МБ, часто опускается ниже 100 КБ при пресете «Сбалансированный». Попробуйте выходной формат WebP для самого маленького результата.',
  },
  {
    id: 'kb-faq-18',
    question: 'Загружаются ли мои изображения куда-либо при сжатии?',
    answer: 'Нет. Всё сжатие происходит внутри вашего браузера на вашем устройстве, поэтому ваши изображения никогда не загружаются на сервер, не хранятся и не просматриваются никем другим. Они остаются в памяти браузера и удаляются при закрытии или обновлении вкладки.',
  },
  {
    id: 'kb-faq-19',
    question: 'Есть ли ограничение на количество изображений, которые я могу уменьшить?',
    answer: 'Нет. Нет ограничения на количество изображений, которые можно сжать, и не нужен аккаунт или регистрация. Единственное ограничение — 20 МБ на изображение, чего хватает для фотографий с камеры в высоком разрешении и больших скриншотов.',
  },
  {
    id: 'kb-faq-20',
    question: 'Бесплатно ли уменьшать изображения до 100 КБ?',
    answer: 'Да, полностью бесплатно. Нет никаких сборов, платных тарифов, кредитов и водяных знаков на ваших сжатых изображениях. Откройте сайт, уменьшите изображения до 100 КБ и скачивайте их столько раз, сколько хотите.',
  },
];

export const Guide100kbPageRu: React.FC<Guide100kbPageRuProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Как уменьшить размер изображения до 100 КБ для веба и электронной почты';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Уменьшите размер изображения до 100 КБ для сайтов и электронной почты с помощью бесплатного online-компрессора. Пошаговое руководство — без регистрации, без водяных знаков, изображения остаются на вашем устройстве.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ru/rukovodstva/umenshit-razmer-izobrazheniya-do-100-kb';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Как уменьшить размер изображения до 100 КБ для сайтов и электронной почты',
          description: 'Используйте ползунок качества и выходной формат WebP в CompressMyPic, чтобы уменьшить изображение примерно до 100 КБ.',
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
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
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
            Как уменьшить размер изображения до 100 КБ для сайтов и электронной почты
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            Фотография на 4 МБ замедляет ваш сайт и забивает электронную почту. Уменьшение её примерно до 100 КБ делает страницы быстрыми, а письма отправляются мгновенно — и если сделать это правильно, никто не заметит разницы.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>Почему 100 КБ — волшебное число</span>
            </h2>
            <p>
              100 КБ — это размер, к которому стремится большинство, потому что он находится в золотой середине: достаточно маленький, чтобы мгновенно загружаться на сайте или помещаться в любое письмо, но достаточно большой, чтобы по-прежнему выглядеть чётко на экране. Типичное фото с телефона начинается с 3–5 МБ, поэтому достижение 100 КБ означает удаление примерно 97% файла — а современное сжатие делает это в основном за счёт удаления данных, которые ваши глаза не видят.
            </p>
            <p>
              Одно честное замечание перед началом: в CompressMyPic нет поля, куда можно ввести «100 КБ» и получить ровно этот размер. Ни один честный инструмент не может обещать точное число, потому что каждая фотография сжимается по-разному. Вместо этого инструмент показывает вам живой сжатый размер после каждого изменения, и вы сами доводите его до 100 КБ с помощью ползунка качества. Это руководство показывает, как именно.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-blue-600" />
              <span>Пошагово: уменьшите изображение до 100 КБ</span>
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

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="Скриншот загрузки большого фото в CompressMyPic, чтобы уменьшить его до 100 КБ"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Загрузите вашу фотографию — исходный размер показан сразу, поэтому вы знаете, насколько нужно уменьшиться.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>Распространённые цели на первый взгляд</span>
            </h2>
            <p>
              100 КБ — не единственная цель, которая нужна людям. Тот же метод работает для любого размера — вот чего ожидать для каждого:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">Цель</th>
                    <th className="px-4 py-3 font-bold">Типичное качество</th>
                    <th className="px-4 py-3 font-bold">Подходит для</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">200 КБ</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">Фото для блога, большие изображения для веба</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">100 КБ</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">Фото для сайта, вложения в письма</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">50 КБ</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">Миниатюры, чаты, быстрые страницы</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">20 КБ</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">Значки, крошечные превью</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Это отправные точки, а не обещания. Простое фото легко достигает 100 КБ; насыщенное детализированное фото требует более низкой настройки качества. Доверяйте живому числу размера, а не проценту.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>Советы для сайтов и электронной почты</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Для сайтов используйте выходной формат WebP — это самый быстрый способ достичь 100 КБ, и его поддерживают все современные браузеры.</li>
              <li>Для электронной почты JPG — самый безопасный формат, потому что его открывает каждое почтовое приложение. JPG на 100 КБ прикрепляется мгновенно и никогда не отклоняется из-за размера.</li>
              <li>Сожмите все фотографии для одной страницы или одного письма вместе, а затем скачайте их все кнопкой «Скачать все (ZIP)».</li>
              <li>Не гонитесь за ровно 100 КБ. Чёткое фото на 115 КБ лучше размытого ровно на 100 КБ — разница во времени загрузки ничтожна.</li>
              <li>Всегда проверяйте сравнение до и после при полном увеличении, прежде чем публиковать или отправлять фото.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="Скриншот живого размера файла до и после, показывающего изображение, уменьшенное примерно до 100 КБ"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Живой размер до и после показывает ваш прогресс — опускайте ползунок, пока сжатый размер не станет близок к 100 КБ.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Когда 100 КБ недостижимы</span>
            </h2>
            <p>
              Некоторые изображения просто не могут достичь 100 КБ, не выглядя плохо: очень большое и очень детализированное фото или PNG с прозрачностью, который должен остаться PNG. В таком случае не заставляйте. Чёткое фото на 180 КБ побеждает испорченное на 100 КБ каждый раз — для сайта оно всё равно загружается быстро, а для электронной почты оно всё равно намного ниже любого лимита вложений. Цель — маленький файл, который по-прежнему выглядит хорошо, а не магическое число.
            </p>
          </section>

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
                onClick={() => onNavigate('/ru/rukovodstva/jpg-protiv-png-protiv-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG против PNG против WebP — какой формат выбрать?</div>
                <p className="text-xs text-slate-600 mt-1">Размер файла, качество и прозрачность в сравнении, чтобы каждый раз выбирать правильный формат.</p>
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
              onClick={() => onNavigate('/ru/rukovodstva/jpg-protiv-png-protiv-webp')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              JPG против PNG против WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
