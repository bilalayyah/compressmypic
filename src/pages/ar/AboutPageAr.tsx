import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageArProps {
  onNavigate: (path: string) => void;
}

export const AboutPageAr: React.FC<AboutPageArProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'عن CompressMyPic – ضاغط صور مجاني عبر الإنترنت';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'عن CompressMyPic: ضاغط صور مجاني عبر الإنترنت لصيغ JPG وPNG وWebP. اضغط الصور عبر الإنترنت مجانًا، دون تسجيل ودون علامة مائية ودون رفع أي شيء إلى أي خادم.');
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>العودة إلى ضاغط الصور</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            عن CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic ضاغط صور مجاني وخاص. اضغط صور JPG وPNG وWebP مباشرة في متصفحك: سريع وآمن ودون رفع ملفاتك إلى أي مكان.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>ما هو CompressMyPic؟</span>
            </h2>
            <p>
              CompressMyPic ضاغط صور مجاني عبر الإنترنت ومحسّن للصور يساعدك على تقليل حجم صورك دون فقدان الجودة. وهو ضاغط صور ومقلل لحجم الصور للصيغ التي تستخدمها كل يوم: JPG وPNG وWebP. استخدمه لضغط JPG إلى 100 كيلوبايت، أو ضغط PNG عبر الإنترنت مجانًا، أو ضغط صور WebP، أو تقليل حجم صورة قبل مشاركتها عبر واتساب أو إنستغرام أو فيسبوك أو البريد الإلكتروني.
            </p>
            <p>
              ترفع مواقع ضغط الصور التقليدية صورك الشخصية أو رسومات شركتك إلى خادم يملكه شخص آخر. وتثير هذه الممارسة مخاوف مشروعة، ولهذا السبب بالتحديد أنشأنا CompressMyPic بالعكس: أداة تقوم بكل شيء على جهازك.
            </p>
            <p>
              عند اختيار صورة أو سحبها وإفلاتها، يحجز متصفحك مساحة مؤقتة في الذاكرة، ويرسم الصورة في عنصر Canvas من HTML، ويطبق خوارزمية الضغط، ثم يصدّر الملف الجديد، وكل ذلك داخل تبويب متصفحك. ولا تتدخل في عملية ضغط صورك أي بنية تحتية للشبكة أو قواعد بيانات أو خوادم سحابية.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>الصيغ المدعومة: JPG وPNG وWebP</span>
            </h2>
            <p>
              بصفته ضاغط JPG، يتيح لك CompressMyPic ضغط JPG عبر الإنترنت مجانًا وتقليل حجم ملفات JPEG دون أن تفقد صورك حدّتها: جرّب الإعداد المسبق «متوازن» أو اخفض منزلق الجودة وراقب الحجم قبل وبعد مباشرة لتصل إلى أهداف مثل 100 كيلوبايت أو 200 كيلوبايت. وبصفته ضاغط PNG، يتيح لك ضغط PNG عبر الإنترنت مجانًا مع الحفاظ على شفافية الشعارات والرسومات. وعند ضغط صور WebP، تحصل على أصغر الملفات على الإطلاق: إذ يكون WebP عادة أصغر بنسبة 25 إلى 35% من JPEG بجودة مماثلة، مما يجعله الخيار الأفضل لتحسين الصور لصفحات الويب.
            </p>
            <p>
              يمكنك الاحتفاظ بالصيغة الأصلية لكل صورة أو التحويل بين JPG وPNG وWebP. ويمنحك منزلق الجودة (من 10% إلى 100%)، والإعدادات المسبقة «منخفض» و«متوازن» و«عالٍ»، والعرض المباشر للحجم قبل وبعد، تحكمًا كاملًا في التوازن بين حجم الملف وجودة الصورة، دون أن نعدك أبدًا بخانة إدخال لحجم هدف دقيق بالكيلوبايت لا تملكه الأداة.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>مبادئنا الأساسية</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">خصوصية مطلقة</div>
                <p className="text-xs text-[var(--ink-2)]">
                  لا يلمس أي ملف أبدًا خادمًا خارجيًا أو قاعدة بيانات. وتبقى صورك ورسوماتك الحساسة على جهازك حصرًا. وبما أن الضغط يتم في متصفحك، فلا أحد آخر يرى عملك.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">بسيط ومجاني</div>
                <p className="text-xs text-[var(--ink-2)]">
                  دون تثبيت برامج، ودون خطط مدفوعة، ودون رسوم خفية، ودون إنشاء حسابات، ودون تحقق بالبريد الإلكتروني، ودون حدود تجريبية. اضغط الصور عبر الإنترنت مجانًا: مجاني حقًا، دون تسجيل ودون علامة مائية على صورك المضغوطة.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">الجودة تحت سيطرتك</div>
                <p className="text-xs text-[var(--ink-2)]">
                  لديك تحكم دقيق: حرّك منزلق الجودة في الوقت الفعلي، واختر أيًا من الإعدادات المسبقة «منخفض» أو «متوازن» أو «عالٍ»، واختر صيغة ملف الإخراج، وقارن كل صورة جنبًا إلى جنب لاكتشاف الفروق فورًا. قلل حجم صورك دون فقدان الجودة، على طريقتك.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">ضاغط صور جماعي</div>
                <p className="text-xs text-[var(--ink-2)]">
                  اضغط عدة صور دفعة واحدة بنفس الإعدادات ونزّلها كلها معًا بزر «تنزيل الكل (ZIP)»: ضاغط صور جماعي لمكتبات الصور وكتالوجات المنتجات ومجلدات صور المواقع.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">فحوصات أمان تلقائية</div>
                <p className="text-xs text-[var(--ink-2)]">
                  يكتشف الضاغط شفافية صورك. فإذا اخترت الإخراج بصيغة JPEG لصورة PNG شفافة، نعرض لك تحذيرًا لأن JPEG لا يدعم الشفافية، حتى لا تفقد قناة ألفا الخاصة بك عن طريق الخطأ أبدًا.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">أداء سريع</div>
                <p className="text-xs text-[var(--ink-2)]">
                  بما أن كل المعالجة تتم محليًا على جهازك، فلا حاجة للانتظار حتى تُرفع الملفات وتُنزّل من خادم. ويمكنك ضغط الصور بسرعة، حتى الملفات الكبيرة التي يصل حجمها إلى 20 ميغابايت لكل صورة، على الكمبيوتر أو الهاتف.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>لمن صُمم CompressMyPic؟</span>
            </h2>
            <p>
              CompressMyPic مخصص لأي شخص يحتاج إلى صور أصغر: المدونون وأصحاب المواقع الذين يريدون تحسين الصور للويب وتقليل حجم صور صفحاتهم؛ والمصورون الذين يحتاجون إلى تقليل حجم صورهم قبل مشاركتها أو تسليم عينات؛ والبائعون عبر الإنترنت الذين يضغطون صورة لموقعهم أو لإعلان؛ والطلاب وموظفو المكاتب الذين يضغطون الصور لإرفاقها برسالة بريد إلكتروني؛ وأي شخص يريد ضغط صورة لواتساب أو إنستغرام أو فيسبوك لتُرسل أسرع وتستهلك بيانات جوال أقل.
            </p>
            <p>
              يعمل في متصفحات الكمبيوتر والهاتف، ولا يحتاج إلى تثبيت، ولا يطلب منك التسجيل أبدًا: فقط افتح الموقع، وارفع صورك، ونزّل الملفات الأصغر.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>المنشئ: بلال</span>
            </h2>
            <p>
              أنشأ CompressMyPic بلال، وهو منشئ مستقل يبني أدوات مجانية تحترم الخصوصية للويب. وقد بدأ CompressMyPic بعد أن شعر بالإحباط من ضواغط الصور التي تجبر الناس على رفع صورهم الشخصية إلى خادم شخص غريب لمجرد تصغير ملف. وكانت إجابته أداة تقوم بكل العمل داخل متصفح الزائر نفسه: دون رفع، ودون حساب، ودون علامة مائية، ودون فاتورة مفاجئة في النهاية.
            </p>
            <p>
              يصمم بلال ويبني ويحافظ على أدوات الموقع الـ 47 بنفسه، من الضاغط والمحولات إلى مولد الأيقونات المفضلة (favicon). ويرد شخصيًا على رسائل الدعم، ويقرأ كل تعليق، ويبقي الأدوات مجانية للجميع، سواء ضغطوا صورة واحدة أو ألفًا. ويحمل تذييل الموقع تقديرًا صغيرًا لشاهين، الذي ألهم تشجيعه بلالًا لمواصلة البناء وجعل الأدوات مفيدة حقًا، وليست شائعة فقط.
            </p>
            <p>
              إذا أردت متابعة العمل، يمكنك العثور على المشروع في 
              <a
                href="https://github.com/bilalayyah/compressmypic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                GitHub
              </a>
              ، وقراءة أدلة بلال في 
              <a
                href="https://dev.to/bilalayyah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                Dev.to
              </a>
               أو إلقاء التحية عبر 
              <button
                type="button"
                onClick={() => onNavigate('/ar/ittisal')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                صفحة التواصل
              </button>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>الخصوصية والأمان</span>
            </h2>
            <p>
              في CompressMyPic نؤمن بأن الخصوصية حق أساسي، وليست ميزة اختيارية. فاليوم، تجمع العديد من المواقع البيانات افتراضيًا، حتى أداة ضغط الصور. ونحن نتبع نهجًا يضع الخصوصية أولًا ونستخدم تقنية المتصفح الحديثة لمعالجة ملفاتك محليًا على جهازك.
            </p>
            <p>
              تبقى ملفاتك في ذاكرة متصفحك وتُحذف فورًا عند إغلاق التبويب أو تحديث الصفحة. وبما أن أي معالجة للصور لا تتم على خوادم بعيدة، فلا يمكننا جمع بيانات عن صورك حتى لو أردنا ذلك. وهذا هو تصميم الأداة ووعدها.
            </p>
            <p>
              لمعرفة كيفية تعاملنا مع خصوصيتك بدقة، زر{' '}
              <button
                type="button"
                onClick={() => onNavigate('/ar/khususiyya')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                سياسة الخصوصية
              </button>
              {' '}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>مهمتنا</span>
            </h2>
            <p>
              نؤمن بأن أفضل الأدوات هي الأبسط والأسرع والأكثر شفافية. ومهمتنا هي أن نقدم للجميع ضاغط صور سريعًا وموثوقًا ومجانيًا بالكامل، دون حيل خفية، ودون إعلانات تتتبعك، ودون رفع إلى خوادم، ودون التضحية بخصوصيتك. وسواء ضغطت صورة JPG واحدة أو دفعة كاملة من صور WebP، فالأداة يجب أن تعمل ببساطة.
            </p>
            <p>
              هل لديك سؤال أو فكرة أو وجدت شيئًا يمكننا تحسينه؟ يسعدنا أن نسمع منك. ويمكنك مراسلتنا مباشرة عبر الموقع.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              ابدأ ضغط الصور
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ar/ittisal')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
