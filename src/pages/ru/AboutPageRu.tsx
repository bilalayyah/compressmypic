import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageRuProps {
  onNavigate: (path: string) => void;
}

export const AboutPageRu: React.FC<AboutPageRuProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'О CompressMyPic – бесплатный online-компрессор изображений';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'О CompressMyPic — бесплатный online-компрессор изображений для JPG, PNG и WebP. Сжимайте изображения online бесплатно, без регистрации, без водяных знаков и без загрузки на сервер.');
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            О CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            CompressMyPic — это бесплатный и приватный компрессор изображений. Сжимайте изображения JPG, PNG и WebP прямо в браузере — быстро, безопасно и без загрузки файлов куда-либо.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span>Что такое CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic — это бесплатный online-компрессор и оптимизатор изображений, который помогает уменьшить размер изображения без потери качества. Это компрессор фотографий и инструмент для уменьшения размера фото для форматов, которыми люди пользуются каждый день: JPG, PNG и WebP. С его помощью можно сжать JPG до 100 КБ, сжать PNG online бесплатно, сжать изображения WebP или уменьшить размер фотографии перед отправкой в WhatsApp, Instagram, Facebook или по электронной почте.
            </p>
            <p>
              Обычные сайты для сжатия изображений загружают ваши личные фотографии или корпоративную графику на чужой сервер. Такая практика вызывает вполне обоснованные опасения — именно поэтому мы сделали CompressMyPic наоборот: как инструмент, который выполняет всё на вашем собственном устройстве.
            </p>
            <p>
              Когда вы выбираете изображение или перетаскиваете его на страницу, браузер выделяет временный буфер в памяти, отрисовывает картинку на элементе HTML Canvas, применяет алгоритм сжатия и затем экспортирует новый файл — и всё это внутри вашей вкладки браузера. В процессе сжатия изображений не участвуют ни сетевая инфраструктура, ни базы данных, ни облачные серверы.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Поддерживаемые форматы: JPG, PNG и WebP</span>
            </h2>
            <p>
              Как компрессор JPG, CompressMyPic позволяет сжать JPG online бесплатно и уменьшить размер JPEG-файла, сохранив фотографии чёткими — попробуйте пресет «Сбалансированный» или опустите ползунок качества ниже и следите за живым отображением размера до и после, чтобы достичь целей вроде 100 КБ или 200 КБ. Как компрессор PNG, он позволяет сжать PNG online бесплатно, сохранив прозрачность для логотипов и графики. А при сжатии изображений WebP вы получаете самые маленькие файлы из всех: WebP обычно на 25–35% меньше JPEG при схожем качестве, что делает его лучшим выбором для оптимизации изображений для веб-страниц.
            </p>
            <p>
              Вы можете сохранить исходный формат каждого изображения или конвертировать между JPG, PNG и WebP. Ползунок качества (от 10% до 100%), пресеты «Низкое», «Сбалансированное» и «Высокое», а также живое отображение размера до и после дают полный контроль над балансом между размером файла и качеством изображения — при этом мы не заявляем о поле ввода точного целевого размера в килобайтах, которого в инструменте нет.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Наши основные принципы</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Абсолютная приватность</div>
                <p className="text-xs text-slate-600">
                  Ни один файл никогда не касается внешнего сервера или базы данных. Ваши фотографии и конфиденциальная графика остаются строго на вашем локальном устройстве. Поскольку сжатие происходит на стороне клиента, вашу работу не видит никто другой.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Просто и бесплатно</div>
                <p className="text-xs text-slate-600">
                  Никакой установки программ, платных тарифов, скрытых платежей, создания аккаунта, подтверждения электронной почты и пробных ограничений. Сжимайте изображения online бесплатно — это действительно бесплатно, без регистрации и без водяных знаков на сжатых изображениях.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Качество, которым управляете вы</div>
                <p className="text-xs text-slate-600">
                  Мы поддерживаем точную настройку: перемещайте ползунок качества в реальном времени, выбирайте любой из пресетов «Низкое», «Сбалансированное» или «Высокое», задавайте выходной формат файла и сравнивайте каждое изображение рядом, чтобы мгновенно заметить различия. Уменьшайте размер изображения без потери качества — на ваших условиях.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Пакетный компрессор изображений</div>
                <p className="text-xs text-slate-600">
                  Сжимайте несколько изображений сразу с одинаковыми настройками и скачивайте их все вместе с помощью кнопки «Скачать все (ZIP)» — пакетный компрессор изображений для фотобиблиотек, каталогов товаров и папок с изображениями для сайтов.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Автоматические проверки безопасности</div>
                <p className="text-xs text-slate-600">
                  Компрессор определяет прозрачность в ваших изображениях. Если вы выберете выходной формат JPEG для прозрачного PNG, мы покажем предупреждение, потому что JPEG не поддерживает прозрачность, — так вы никогда случайно не потеряете альфа-канал.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Быстрая работа</div>
                <p className="text-xs text-slate-600">
                  Поскольку вся обработка происходит локально на вашем устройстве, не нужно ждать, пока файлы загрузятся на сервер и вернутся обратно. Вы можете быстро сжимать фотографии, даже большие файлы до 20 МБ на изображение, на компьютере или телефоне.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Для кого предназначен CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic — для всех, кому нужны изображения меньшего размера: блогеров и владельцев сайтов, которые хотят оптимизировать изображения для веба и уменьшить размер изображений для страниц сайта; фотографов, которым нужно уменьшить размер фотографии перед отправкой или передачей пробных снимков; online-продавцов, которые сжимают фото для сайта или карточки товара; студентов и офисных работников, которые сжимают изображения для вложения в письмо; а также всех, кто хочет сжать изображение для WhatsApp, Instagram или Facebook, чтобы оно отправлялось быстрее и расходовало меньше мобильного трафика.
            </p>
            <p>
              Инструмент работает в браузерах на компьютере и телефоне, не требует установки и никогда не просит зарегистрироваться — просто откройте сайт, загрузите изображения и скачайте файлы меньшего размера.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              <span>Приватность и безопасность</span>
            </h2>
            <p>
              В CompressMyPic мы считаем, что приватность — это важнейшее право, а не опциональная функция. В наше время многие сайты собирают данные по умолчанию, даже инструменты для сжатия изображений. Мы придерживаемся подхода «приватность прежде всего» и опираемся на современные технологии браузеров, чтобы обрабатывать ваши медиафайлы локально на вашем компьютере.
            </p>
            <p>
              Ваши файлы остаются в памяти браузера и сразу же удаляются, когда вы закрываете вкладку или обновляете страницу. Поскольку обработка изображений не происходит на удалённых серверах, мы не можем собирать данные изображений, даже если бы захотели. Таков замысел и обещание этого инструмента.
            </p>
            <p>
              Чтобы узнать точно, как мы обращаемся с приватностью, посетите нашу{' '}
              <button
                type="button"
                onClick={() => onNavigate('/ru/konfidentsialnost')}
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                Политику конфиденциальности
              </button>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Наша миссия</span>
            </h2>
            <p>
              Мы считаем, что лучшие инструменты — самые простые, быстрые и прозрачные. Наша миссия — предоставить всем быстрый, надёжный и полностью бесплатный компрессор изображений: без скрытых компромиссов, без рекламы, которая вас отслеживает, без загрузок на сервер и без уступок в вопросах приватности. Сжимаете ли вы один JPG или целую партию изображений WebP — инструмент должен просто работать.
            </p>
            <p>
              Есть вопрос, идея или вы нашли что-то, что мы можем улучшить? Мы будем рады услышать вас. Вы можете связаться с нами напрямую через сайт.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ru/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Начать сжимать изображения
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ru/kontakty')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
