import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageArProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'افتح CompressMyPic',
    text: 'انتقل إلى compressmypic.online في متصفحك. لا يوجد شيء لتثبيته ولا حساب لإنشائه: الأداة مجانية ودون تسجيل ودون علامة مائية.',
  },
  {
    title: 'ارفع صورتك',
    text: 'اسحب صورتك وأفلتها في الصفحة، أو انقر على «استعراض الملفات» لاختيارها من جهازك. تُقبل صيغ JPG وPNG وWebP، حتى 20 ميغابايت لكل صورة. ويمكنك رفع عدة صور دفعة واحدة.',
  },
  {
    title: 'ابدأ بالإعداد المسبق «متوازن»',
    text: 'يضبط الإعداد المسبق «متوازن» الجودة على نحو 70%. وبالنسبة لمعظم الصور، يقلل هذا الملف بالفعل إلى جزء صغير من حجمه الأصلي؛ راجع الحجم المباشر المعروض بجانب صورتك لتعرف أين وصلت.',
  },
  {
    title: 'اخفض منزلق الجودة خطوة بخطوة',
    text: 'لا توجد خانة تكتب فيها «100 كيلوبايت»: بدلًا من ذلك، اسحب منزلق الجودة إلى الأسفل ببطء وراقب كيف يتحدث حجم قبل وبعد مباشرة بعد كل تغيير. تقدم بخطوات صغيرة (مثلًا، من 70% إلى 60% ثم إلى 50%) حتى لا تتجاوز الحد وتفقد جودة أكثر من اللازم.',
  },
  {
    title: 'بدّل إلى WebP إذا كنت ما زلت فوق 100 كيلوبايت',
    text: 'إذا كان الملف ما زال فوق 100 كيلوبايت بجودة معقولة، فغيّر صيغة الإخراج إلى WebP. فصيغة WebP عادة أصغر بنسبة 25 إلى 35% من JPG بنفس الجودة المرئية، وغالبًا ما تسد الفجوة إلى 100 كيلوبايت دون خفض الجودة أكثر.',
  },
  {
    title: 'قارن قبل وبعد',
    text: 'افتح مقارنة قبل وبعد وقرّب على الوجوه والنص والتفاصيل الدقيقة. فإذا كانت الصورة ما زالت تبدو جيدة، فقد انتهيت. وإذا بدت متكتلة أو باهتة، فارفع الجودة قليلًا واقبل ملفًا أكبر قليلًا من 100 كيلوبايت: فصورة واضحة بحجم 120 كيلوبايت أفضل من صورة ضبابية بحجم 100 كيلوبايت.',
  },
  {
    title: 'نزّل صورتك',
    text: 'انقر على «تنزيل» لحفظ الملف الأصغر، أو استخدم «تنزيل الكل (ZIP)» إذا قللت عدة صور دفعة واحدة. وصورتك الأصلية لا تُعدل أبدًا: فأنت تحصل دائمًا على نسخة جديدة أصغر.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'كيف أخفض حجم صورتي إلى نحو 100 كيلوبايت؟',
    answer: 'ارفعها إلى CompressMyPic، وابدأ بالإعداد المسبق «متوازن»، ثم اخفض منزلق الجودة خطوة بخطوة بينما تراقب الحجم المباشر قبل وبعد. وتوقف فور وصول الحجم المضغوط إلى قرب 100 كيلوبايت. وإذا كان ما زال فوق ذلك، فغيّر صيغة الإخراج إلى WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'لماذا لا توجد خانة لكتابة 100 كيلوبايت بالضبط؟',
    answer: 'لأن كل صورة تُضغط بشكل مختلف: فسماء صافية تتقلص أكثر بكثير من مشهد مزدحم بنفس الجودة. وستضطر خانة ثابتة «100 كيلوبايت» إلى التخمين. وبدلًا من ذلك، يعرض لك CompressMyPic الحجم المضغوط مباشرة بعد كل تغيير، حتى تتمكن بنفسك من إيصال الملف إلى 100 كيلوبايت مع تحكم كامل في الجودة.',
  },
  {
    id: 'kb-faq-3',
    question: 'ما إعداد الجودة الذي يعطيني نحو 100 كيلوبايت؟',
    answer: 'يعتمد ذلك على الصورة، لكن بالنسبة لصورة هاتف نموذجية، فإن جودة من 50 إلى 70% تصل عادة إلى قرب 100 كيلوبايت. وقد تصل صورة بسيطة بألوان مسطحة إلى 100 كيلوبايت بجودة 70%، بينما قد يحتاج منظر طبيعي كثير التفاصيل إلى 40 إلى 50%. وراقب الحجم المباشر: فهذا الرقم هو الحقيقة، وليس أي نسبة ثابتة.',
  },
  {
    id: 'kb-faq-4',
    question: 'صورتي ما زالت أكبر من 100 كيلوبايت بجودة منخفضة، ماذا أفعل الآن؟',
    answer: 'غيّر صيغة الإخراج إلى WebP أولًا، فهي عادة أصغر بنسبة 25 إلى 35% من JPG. وإذا كانت ما زالت فوق الحد، فاخفض الجودة قليلًا أكثر وراجع المقارنة: فغالبًا ما يكون خفض إضافي صغير غير مرئي. وكحل أخير، قد تحتاج صورة بأبعاد هائلة إلى إعداد جودة أقل مما توقعت، لأن عددًا أكبر من البكسلات يعني بيانات أكثر.',
  },
  {
    id: 'kb-faq-5',
    question: 'هل يجب أن أستخدم WebP للوصول إلى 100 كيلوبايت؟',
    answer: 'نعم، كلما أمكن ذلك. فصيغة WebP هي أسهل طريقة للوصول إلى 100 كيلوبايت دون خفض الجودة كثيرًا، لأنها تنشئ ملفًا أصغر بنفس الجودة المرئية لـ JPG. واستخدم WebP لصور المواقع وكل مكان تُستخدم فيه متصفحات حديثة؛ واستخدم JPG فقط عندما يجب فتح الصورة في برامج قديمة أو مشاركتها عبر واتساب.',
  },
  {
    id: 'kb-faq-6',
    question: 'هل يقلل التصغير إلى 100 كيلوبايت من وضوح الصورة؟',
    answer: 'لا، إذا فعلت ذلك بعناية. فمع 100 كيلوبايت، ما زالت صورة الهاتف العادية تبدو واضحة على الشاشات، لأن الشاشات تعرض بكسلات أقل بكثير مما التقطته الكاميرا. وتبدو ضبابية فقط إذا خفضت الجودة كثيرًا (أقل من نحو 40%) أو إذا طُبعت الصورة بحجم كبير. وراجع دائمًا مقارنة قبل وبعد قبل التنزيل.',
  },
  {
    id: 'kb-faq-7',
    question: 'هل يمكنني تقليل صورة PNG إلى 100 كيلوبايت؟',
    answer: 'نعم، لكن صور PNG كبيرة منذ البداية، لذا يتطلب الأمر مجهودًا أكبر. ارفع ملف PNG، واخفض منزلق الجودة، وغيّر الإخراج إلى WebP أو JPG: فهذا وحده غالبًا ما يقلل الحجم إلى أقل من النصف. واحتفظ بإخراج PNG فقط إذا كانت الصورة تحتاج إلى شفافية، واقبل أن صورة PNG شفافة قد لا تصل إلى 100 كيلوبايت.',
  },
  {
    id: 'kb-faq-8',
    question: 'كيف أجعل صورة بحجم 200 كيلوبايت؟',
    answer: 'استخدم الطريقة نفسها: ارفع الصورة، وابدأ بالإعداد المسبق «متوازن»، واخفض منزلق الجودة بينما تراقب الحجم المباشر حتى يقترب من 200 كيلوبايت. وتصل معظم الصور إلى 200 كيلوبايت بسهولة بجودة من 70 إلى 80%، لذا لن تحتاج عادة إلى خفضها كثيرًا.',
  },
  {
    id: 'kb-faq-9',
    question: 'ماذا يجب أن أفعل ليصبح حجم صورة 50 كيلوبايت؟',
    answer: 'ارفع الصورة، وغيّر صيغة الإخراج إلى WebP، واخفض منزلق الجودة تدريجيًا حتى يقترب الحجم المباشر من 50 كيلوبايت، وعادة بجودة من نحو 40 إلى 55% لصورة فوتوغرافية. وراجع المقارنة بعناية، لأن التفاصيل الدقيقة تبدأ بالتأثر عند 50 كيلوبايت؛ وهذا مناسب للصور المصغرة والمحادثة، وأقل مناسبة للصور التي تريد الاحتفاظ بها.',
  },
  {
    id: 'kb-faq-10',
    question: 'هل يمكن تصغير صورة إلى 20 كيلوبايت؟',
    answer: 'استخدم إخراج WebP وإعداد جودة منخفض، عادة من 25 إلى 40%، وراقب الحجم المباشر. فحجم 20 كيلوبايت صغير جدًا، لذا توقع نعومة مرئية: وهو مناسب للأيقونات والصور المصغرة ومعاينات الصور الصغيرة، وليس للصور التي فيها وجوه. وإذا لم تصل الصورة بعد إلى 20 كيلوبايت، فمن المحتمل أن فيها تفاصيل كثيرة جدًا لملف بهذا الصغر.',
  },
  {
    id: 'kb-faq-11',
    question: 'ما حجم الملف المناسب لصور موقع إلكتروني؟',
    answer: 'استهدف أقل من 100 كيلوبايت لكل صورة لصور المحتوى العادية، وأقل من 200 كيلوبايت للصور الرئيسية الكبيرة. فالملفات الصغيرة تجعل الصفحات تحمل أسرع، وهو ما يلاحظه الزوار ويكافئه Google. واستخدم صيغة WebP والإعداد المسبق «متوازن» كنقطة بداية لصور المواقع.',
  },
  {
    id: 'kb-faq-12',
    question: 'ما حد حجم مرفقات البريد الإلكتروني؟',
    answer: 'يسمح معظم مزودي البريد بـ 20 إلى 25 ميغابايت لكل رسالة إجمالًا، بما في ذلك جميع المرفقات؛ ويسمح Gmail بـ 25 ميغابايت. ولن تكون صورة واحدة مخفضة إلى 100 كيلوبايت مشكلة أبدًا؛ وحتى عشر صور بحجم 100 كيلوبايت لكل منها تساوي 1 ميغابايت فقط. فالضغط أولًا هو ما يجعل إرسال عدة صور بالبريد خاليًا من المتاعب.',
  },
  {
    id: 'kb-faq-13',
    question: 'هل يمكنني تصغير عدة صور إلى 100 كيلوبايت دفعة واحدة؟',
    answer: 'نعم. ارفع جميع الصور معًا، وطبّق الإعداد المسبق نفسه والجودة نفسها على جميعها، وراجع الحجم المباشر لكل منها. وإذا بقيت صورة فوق 100 كيلوبايت، فاضبطها على حدة ثم نزّل الكل معًا بزر «تنزيل الكل (ZIP)».',
  },
  {
    id: 'kb-faq-14',
    question: 'هل تغير الأداة أبعاد صورتي؟',
    answer: 'لا. يحافظ CompressMyPic على أبعاد صورتك كما هي تمامًا: إذ يُقلل حجم الملف فقط. وتحتفظ صورتك بنفس العرض والارتفاع والنسبة مثل الأصلية، فصورة 4000×3000 تبقى 4000×3000، لكن بملف أصغر بكثير.',
  },
  {
    id: 'kb-faq-15',
    question: 'كيف أتحقق من حجم صورتي المضغوطة؟',
    answer: 'يعرض CompressMyPic الحجم الأصلي والحجم المضغوط لكل صورة، مباشرة، أسفل كل صورة؛ مثلًا، «4.2 ميغابايت ← 98 كيلوبايت». ويمكنك أيضًا مراجعة الملف المنزّل على جهازك: ففي الهاتف، انظر إلى تفاصيل الملف في معرض الصور أو مدير الملفات.',
  },
  {
    id: 'kb-faq-16',
    question: 'هل يكفي 100 كيلوبايت جودة لموقع إلكتروني؟',
    answer: 'نعم، لمعظم استخدامات الويب. فصور المواقع تُعرض بعرض بضع مئات من البكسلات، لذا تبدو صورة بحجم 100 كيلوبايت واضحة على الشاشة. وفقط الصور الرئيسية بملء الشاشة أو الصور المخصصة للطباعة تحتاج إلى ملفات أكبر. اضغط إلى 100 كيلوبايت، وراجع المقارنة، وسترى أن الجودة محفوظة.',
  },
  {
    id: 'kb-faq-17',
    question: 'هل يمكنني تصغير لقطة شاشة إلى 100 كيلوبايت؟',
    answer: 'نعم، ولقطات الشاشة هي أسهل حالة. فهي تحتوي على مساحات كبيرة من الألوان المسطحة، لذا تُضغط بشكل جيد جدًا: وغالبًا ما تنخفض لقطة شاشة تبدأ من 1 ميغابايت إلى أقل من 100 كيلوبايت بالإعداد المسبق «متوازن». وجرّب إخراج WebP للحصول على أصغر نتيجة.',
  },
  {
    id: 'kb-faq-18',
    question: 'هل تغادر صوري جهازي عند ضغطها؟',
    answer: 'لا. تتم كل عملية الضغط داخل متصفحك على جهازك، لذا لا تُرفع صورك إلى خادم أبدًا، ولا تُخزن ولا يراها أي شخص آخر. وتبقى في ذاكرة متصفحك وتُحذف عند إغلاق التبويب أو تحديثه.',
  },
  {
    id: 'kb-faq-19',
    question: 'هل يوجد حد لعدد الصور التي يمكنني تصغيرها؟',
    answer: 'لا. لا يوجد حد لعدد الصور التي يمكنك ضغطها، ولا تحتاج إلى أي حساب أو تسجيل. والحد الوحيد هو 20 ميغابايت لكل صورة، وهو ما يغطي صور الكاميرات عالية الدقة ولقطات الشاشة الكبيرة.',
  },
  {
    id: 'kb-faq-20',
    question: 'هل تصغير الصور إلى 100 كيلوبايت مجاني؟',
    answer: 'نعم، مجاني تمامًا. لا توجد رسوم ولا خطط مدفوعة ولا أرصدة ولا علامة مائية على صورك المضغوطة. افتح الموقع، وقلل صورك إلى 100 كيلوبايت، ونزّلها بقدر ما تريد.',
  },
];

export const Guide100kbPageAr: React.FC<Guide100kbPageArProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'كيفية تصغير صورة إلى 100 كيلوبايت للويب والبريد الإلكتروني';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'قلل حجم صورة إلى 100 كيلوبايت لمواقع الويب والبريد الإلكتروني باستخدام ضاغط مجاني عبر الإنترنت. دليل خطوة بخطوة، دون تسجيل أو علامة مائية.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ar/adilla/taqlil-hajm-as-sura-ila-100kb/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'كيفية تصغير حجم صورة إلى 100 كيلوبايت لمواقع الويب والبريد الإلكتروني',
          description: 'استخدم منزلق الجودة وإخراج WebP في CompressMyPic لتصغير صورة إلى نحو 100 كيلوبايت.',
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
        {
          '@type': 'Article',
          headline: "كيفية تصغير صورة إلى 100 كيلوبايت للويب والبريد الإلكتروني",
          description: "قلل حجم صورة إلى 100 كيلوبايت لمواقع الويب والبريد الإلكتروني باستخدام ضاغط مجاني عبر الإنترنت. دليل خطوة بخطوة، دون تسجيل أو علامة مائية.",
          image: 'https://compressmypic.online/og-image.png',
          author: { '@type': 'Person', name: 'Bilal' },
          publisher: {
            '@type': 'Organization',
            name: 'CompressMyPic',
            url: 'https://compressmypic.online/',
            logo: { '@type': 'ImageObject', url: 'https://compressmypic.online/favicon.svg' },
          },
          datePublished: '2026-11-14',
          dateModified: '2026-11-14',
          mainEntityOfPage: "https://compressmypic.online/ar/adilla/taqlil-hajm-as-sura-ila-100kb/",
          inLanguage: 'ar',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "الرئيسية", item: "https://compressmypic.online/ar/" },
            { '@type': 'ListItem', position: 2, name: "أدلة", item: "https://compressmypic.online/ar/" },
            { '@type': 'ListItem', position: 3, name: "كيفية تصغير صورة إلى 100 كيلوبايت للويب والبريد الإلكتروني", item: "https://compressmypic.online/ar/adilla/taqlil-hajm-as-sura-ila-100kb/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-100kb-jsonld');
    if (prev) prev.remove();
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
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/ar/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>العودة إلى ضاغط الصور</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            كيفية تصغير حجم صورة إلى 100 كيلوبايت لمواقع الويب والبريد الإلكتروني
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            بقلم <a href="/ar/hawlna" onClick={(e) => { e.preventDefault(); onNavigate('/ar/hawlna'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            صورة بحجم 4 ميغابايت تجعل موقعك يحمل ببطء وتعرقل رسالة بريد إلكتروني. وتصغيرها إلى نحو 100 كيلوبايت يجعل الصفحات تحمل بسرعة والرسائل تُرسل فورًا، وإذا فعلت ذلك بشكل صحيح، فلن يلاحظ أحد الفرق.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>لماذا يعتبر 100 كيلوبايت الرقم السحري</span>
            </h2>
            <p>
              يعتبر 100 كيلوبايت الحجم الذي يبحث عنه معظم الناس لأنه في النقطة المثالية: صغير بما يكفي ليحمل فورًا في موقع ويب أو يدخل في أي بريد إلكتروني، لكنه كبير بما يكفي ليبقى واضحًا على الشاشة. وتبدأ صورة الهاتف النموذجية من 3 إلى 5 ميغابايت، لذا فإن الوصول إلى 100 كيلوبايت يعني إزالة نحو 97% من الملف، ويحقق الضغط الحديث ذلك أساسًا بحذف بيانات لا تستطيع عيناك رؤيتها.
            </p>
            <p>
              ملاحظة صادقة قبل أن تبدأ: لا يملك CompressMyPic خانة تكتب فيها «100 كيلوبايت» وتحصل على ذلك الحجم بالضبط. فلا يمكن لأي أداة صادقة أن تعد برقم دقيق، لأن كل صورة تُضغط بشكل مختلف. وبدلًا من ذلك، تعرض لك الأداة الحجم المضغوط مباشرة بعد كل تغيير، وأنت بنفسك توصله إلى 100 كيلوبايت باستخدام منزلق الجودة. ويوضح لك هذا الدليل كيفية القيام بذلك بالضبط.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>خطوة بخطوة: صغّر صورة إلى 100 كيلوبايت</span>
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
              src="/guides/reduce-image-size-to-100kb-1.webp"
              alt="لقطة شاشة لكيفية رفع صورة كبيرة إلى CompressMyPic لتصغيرها إلى 100 كيلوبايت"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              ارفع صورتك: يظهر الحجم الأصلي فورًا، فتعرف كم تحتاج إلى التصغير.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>أهداف شائعة في لمحة</span>
            </h2>
            <p>
              ليس 100 كيلوبايت الهدف الوحيد الذي يحتاجه الناس. فالطريقة نفسها تعمل مع أي حجم؛ وهذا ما يمكنك توقعه من كل منها:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-start border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">الهدف</th>
                    <th className="px-4 py-3 font-semibold">الجودة النموذجية</th>
                    <th className="px-4 py-3 font-semibold">مثالي لـ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">200 كيلوبايت</td>
                    <td className="px-4 py-3">70–80 %</td>
                    <td className="px-4 py-3">صور المدونات، صور الويب الكبيرة</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">100 كيلوبايت</td>
                    <td className="px-4 py-3">50–70 %</td>
                    <td className="px-4 py-3">صور المواقع، مرفقات البريد الإلكتروني</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">50 كيلوبايت</td>
                    <td className="px-4 py-3">40–55 % + WebP</td>
                    <td className="px-4 py-3">الصور المصغرة، المحادثة، الصفحات السريعة</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">20 كيلوبايت</td>
                    <td className="px-4 py-3">25–40 % + WebP</td>
                    <td className="px-4 py-3">الأيقونات، المعاينات الصغيرة</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              هذه نقاط بداية، وليست وعودًا. فصورة بسيطة تصل إلى 100 كيلوبايت بسهولة؛ بينما تحتاج صورة كثيرة التفاصيل إلى إعداد جودة أقل. وثق برقم الحجم المباشر، لا بالنسبة المئوية.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>نصائح لمواقع الويب والبريد الإلكتروني</span>
            </h2>
            <ul className="space-y-2 list-disc ps-5 text-sm sm:text-base">
              <li>بالنسبة لمواقع الويب، استخدم إخراج WebP: فهي أسرع طريقة للوصول إلى 100 كيلوبايت وتدعمها جميع المتصفحات الحديثة.</li>
              <li>بالنسبة للبريد الإلكتروني، فإن JPG هي الصيغة الأكثر أمانًا لأن جميع تطبيقات البريد تفتحها. فملف JPG بحجم 100 كيلوبايت يُرفق فورًا ولا يرتد أبدًا بسبب الحجم.</li>
              <li>اضغط جميع صور صفحة أو رسالة بريد معًا ثم نزّلها كلها بزر «تنزيل الكل (ZIP)».</li>
              <li>لا تطارد 100 كيلوبايت بالضبط. فصورة واضحة بحجم 115 كيلوبايت أفضل من صورة ضبابية بحجم 100 كيلوبايت بالضبط: فالفرق في وقت التحميل معدوم.</li>
              <li>راجع دائمًا مقارنة قبل وبعد مع أقصى تقريب قبل نشر الصورة أو إرسالها.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.webp"
              alt="لقطة شاشة لحجم الملف المباشر قبل وبعد، تُظهر صورة مخفضة إلى نحو 100 كيلوبايت"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              يعرض الحجم المباشر قبل وبعد تقدمك: اخفض المنزلق حتى يقترب الحجم المضغوط من 100 كيلوبايت.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>عندما يكون 100 كيلوبايت غير ممكن</span>
            </h2>
            <p className="text-sm sm:text-base">
              بعض الصور ببساطة لا يمكنها الوصول إلى 100 كيلوبايت دون أن تبدو سيئة: صورة كبيرة جدًا وكثيرة التفاصيل، أو صورة PNG شفافة يجب أن تبقى PNG. وفي هذه الحالة، لا تجبرها. فصورة واضحة بحجم 180 كيلوبايت أفضل من صورة تالفة بحجم 100 كيلوبايت في جميع الحالات: فهي ما زالت تحمل بسرعة لموقع ويب وما زالت أقل بكثير من أي حد لمرفقات البريد. والهدف هو ملف صغير ما زال يبدو جيدًا، وليس رقمًا سحريًا.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>الأسئلة الشائعة</span>
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
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-start transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#dc2626] dark:text-[#fca5a5]' : 'text-[var(--ink-3)]'}`} />
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">أدلة ذات صلة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/ar/adilla/daght-as-suwar-li-whatsapp')}
                className={`text-start p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">كيفية ضغط الصور لواتساب دون فقدان الجودة</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">قلل صورك بنفسك أولًا ثم أرسلها كمستندات حتى لا يتمكن واتساب من تشويهها.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/ar/adilla/jpg-vs-png-vs-webp')}
                className={`text-start p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG مقابل PNG مقابل WebP: أي صيغة يجب أن تستخدم؟</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">حجم الملف والجودة والشفافية مقارنة، لتختار الصيغة الصحيحة في كل مرة.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ar/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              اضغط الصور مجانًا
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ar/adilla/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG مقابل PNG مقابل WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
