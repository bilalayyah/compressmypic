import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideWhatsAppPageArProps {
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
    text: 'انتقل إلى compressmypic.online في متصفح هاتفك أو جهاز الكمبيوتر. لا يوجد شيء لتثبيته ولا حساب لإنشائه: تفتح الأداة فورًا.',
  },
  {
    title: 'ارفع صورتك',
    text: 'انقر على «استعراض الملفات» واختر الصورة من معرض الصور، أو اسحب الصورة وأفلتها في الصفحة. ويمكنك رفع عدة صور دفعة واحدة. ويمكن أن يصل حجم كل صورة إلى 20 ميغابايت.',
  },
  {
    title: 'ابدأ بالإعداد المسبق «متوازن»',
    text: 'يعتبر الإعداد المسبق «متوازن» (نحو 70% جودة) نقطة بداية جيدة لصور واتساب. فهو يقلل حجم الملف كثيرًا وتبقى الصورة واضحة على شاشة الهاتف.',
  },
  {
    title: 'راجع الحجم المباشر قبل وبعد',
    text: 'تعرض كل صورة حجمها الأصلي وحجمها الجديد المضغوط، جنبًا إلى جنب. وإذا كان الملف ما زال أكبر مما تريد، فاخفض منزلق الجودة قليلًا وراقب كيف يتحدث الحجم فورًا.',
  },
  {
    title: 'احتفظ بصيغة JPG للصور',
    text: 'بالنسبة للصور العادية، احتفظ بصيغة الإخراج JPG. فهي الصيغة التي يتعامل معها واتساب بشكل أفضل وتنتج أصغر الملفات للصور. واستخدم PNG فقط إذا كانت صورتك تحتاج إلى شفافية، مثل الشعار.',
  },
  {
    title: 'قارن قبل وبعد',
    text: 'افتح مقارنة قبل وبعد للتأكد من أن الصورة ما زالت تبدو جيدة. وقرّب على الوجوه والنص: فإذا لم ترَ أي فرق حقيقي، فإن إعداد الجودة صحيح.',
  },
  {
    title: 'نزّل الصورة الأصغر',
    text: 'انقر على «تنزيل» في الصورة، أو استخدم «تنزيل الكل (ZIP)» إذا ضغطت عدة صور دفعة واحدة. ويُحفظ الملف الأصغر على جهازك؛ وصورتك الأصلية لا تُعدل أبدًا.',
  },
  {
    title: 'أرسلها عبر واتساب بالطريقة الذكية',
    text: 'إذا أردت أفضل جودة ممكنة، فأرسل الصورة المضغوطة كمستند: في واتساب، انقر على «إرفاق»، ثم «مستند»، واختر الملف. ويرسل واتساب المستندات دون المساس بها، لذا تصل صورتك كما ضغطتها بالضبط. أما إذا أرسلتها كصورة، فسيضغطها واتساب مرة ثانية.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'لماذا يقلل واتساب من جودة الصور؟',
    answer: 'عند إرسال صورة بالطريقة المعتادة، يعيد واتساب ضغطها لتوفير البيانات والمساحة، وغالبًا ما يقللها إلى حجم وجودة أقل بكثير. ولهذا قد تبدو صورة كاميرا واضحة ناعمة أو ضبابية بعد إرسالها.',
  },
  {
    id: 'wa-faq-2',
    question: 'هل يضغط واتساب الصور المرسلة كمستندات؟',
    answer: 'لا. فعند إرسال صورة كمستند (إرفاق ثم مستند)، يرسل واتساب الملف كما هو، دون أي ضغط إضافي. وهذه أفضل طريقة لمشاركة صورة بجودتها الكاملة.',
  },
  {
    id: 'wa-faq-3',
    question: 'ما الحد الأقصى لحجم الصورة الذي يقبله واتساب؟',
    answer: 'يسمح واتساب بمستندات تصل إلى 2 غيغابايت، لذا فإن صورة مضغوطة بحجم بضع مئات من الكيلوبايتات لن تكون مشكلة أبدًا. أما الصور المرسلة بالطريقة المعتادة فيعيد واتساب ضغطها بنفسه، لذا فإن المهم عمليًا هو الجودة، وليس الحجم.',
  },
  {
    id: 'wa-faq-4',
    question: 'كيف أرسل صورة بجودتها الكاملة عبر واتساب؟',
    answer: 'اضغط الصورة بنفسك أولًا باستخدام CompressMyPic حتى يصبح حجمها معقولًا، ثم أرسلها عبر واتساب كمستند بدلًا من إرسالها كصورة. انقر على «إرفاق»، واختر «مستند»، وحدد الملف. وستصل دون أن يعيد واتساب ضغطها.',
  },
  {
    id: 'wa-faq-5',
    question: 'هل يجب أن أضغط قبل الإرسال أم أترك واتساب يفعل ذلك؟',
    answer: 'اضغطها بنفسك أولًا. فواتساب يضغط بقوة ولا تملك أي تحكم في ذلك. وعندما تضغط باستخدام CompressMyPic أولًا، تختار الجودة وتراجع النتيجة ثم ترسل الملف كمستند حتى لا يمسه واتساب مرة أخرى.',
  },
  {
    id: 'wa-faq-6',
    question: 'ما إعداد الجودة الذي يجب أن أستخدمه لصور واتساب؟',
    answer: 'ابدأ بالإعداد المسبق «متوازن»، نحو 70%. ولصورة مهمة، استخدم من 80 إلى 85% وراجع مقارنة قبل وبعد. ولصورة يومية سريعة، عندما تكون السرعة مهمة، فإن 50 إلى 60% ما زالت تبدو جيدة على شاشة الهاتف وتنتج ملفًا أصغر بكثير.',
  },
  {
    id: 'wa-faq-7',
    question: 'هل يضر الضغط مرتين بالصور؟',
    answer: 'نعم. فكل جولة من ضغط JPEG تحذف مزيدًا من التفاصيل. ولهذا يجب أن تضغط مرة واحدة فقط باستخدام CompressMyPic ثم ترسل النتيجة كمستند، بدلًا من ترك واتساب يضغط صورة مضغوطة بالفعل مرة ثانية.',
  },
  {
    id: 'wa-faq-8',
    question: 'هل يمكنني ضغط صور واتساب على الهاتف؟',
    answer: 'نعم. يعمل CompressMyPic في متصفح Android وiPhone. افتح الموقع، واختر الصورة من معرض الصور، واضغطها، ونزّل الملف الأصغر، ثم شاركه من واتساب. ولا يوجد أي تطبيق لتثبيته.',
  },
  {
    id: 'wa-faq-9',
    question: 'هل تبدو الصور المضغوطة جيدة في حالات واتساب؟',
    answer: 'نعم، إذا لم تبالغ. فحالات واتساب تعرض الصور بدقة متواضعة، لذا تبدو صورة مضغوطة بالإعداد المسبق «متوازن» (نحو 70%) مثل الأصلية على شاشة الهاتف. وتجنب النزول عن 50% في صور الحالات التي فيها وجوه أو نص.',
  },
  {
    id: 'wa-faq-10',
    question: 'يقول واتساب إن صورتي كبيرة جدًا، ماذا أفعل؟',
    answer: 'ارفع الصورة إلى CompressMyPic واخفض منزلق الجودة حتى يصبح حجم الملف بضع مئات من الكيلوبايتات؛ ثم نزّلها وأرسلها مرة أخرى. وإذا لم تُرسل بعد كصورة، فأرسلها كمستند، فهو يقبل ملفات أكبر بكثير.',
  },
  {
    id: 'wa-faq-11',
    question: 'هل يجب أن أستخدم JPG أم PNG لواتساب؟',
    answer: 'استخدم JPG للصور. فصيغة JPG تنتج ملفات أصغر بكثير لصور الكاميرا ويتعامل معها واتساب بشكل أفضل. واستخدم PNG فقط للصور التي تحتاج إلى شفافية، مثل الشعار، لأن ملفات PNG أكبر بكثير.',
  },
  {
    id: 'wa-faq-12',
    question: 'هل يمكنني إرسال صور WebP عبر واتساب؟',
    answer: 'يمكن لواتساب استقبال ملفات WebP، لكنها قد لا تظهر كصورة عادية وتتعامل معها بعض الهواتف بشكل غريب. وبالنسبة للصور التي تريد أن يراها الناس مباشرة في المحادثة، فإن JPG هو الخيار الأكثر أمانًا. أما WebP فهي أفضل لمواقع الويب منها لواتساب.',
  },
  {
    id: 'wa-faq-13',
    question: 'هل يمكنني ضغط عدة صور واتساب دفعة واحدة؟',
    answer: 'ارفع جميع الصور إلى CompressMyPic دفعة واحدة، وطبّق الإعداد المسبق نفسه على جميعها، ونزّلها كلها معًا بزر «تنزيل الكل (ZIP)». ثم أرسل الملفات من واتساب واحدًا تلو الآخر أو كمستندات.',
  },
  {
    id: 'wa-faq-14',
    question: 'هل يضغط واتساب الفيديوهات بالطريقة نفسها؟',
    answer: 'نعم، يضغط واتساب أيضًا الفيديوهات المرسلة بالطريقة المعتادة، وقد يقللها كثيرًا. ويعمل CompressMyPic مع الصور فقط (JPG وPNG وWebP)، وليس مع الفيديوهات. وبالنسبة للفيديوهات، أرسلها كمستندات للحفاظ على الجودة الأصلية.',
  },
  {
    id: 'wa-faq-15',
    question: 'هل يحذف ضغط صورة الأصلية من هاتفي؟',
    answer: 'لا. ينشئ CompressMyPic نسخة جديدة أصغر وينزّلها على جهازك. وتبقى صورتك الأصلية كما هي تمامًا في معرض الصور، دون مساس.',
  },
  {
    id: 'wa-faq-16',
    question: 'هل تُرسل صوري إلى أي خادم عند ضغطها؟',
    answer: 'لا. تتم كل عملية الضغط داخل متصفحك على جهازك، لذا لا تُرفع صورك أبدًا ولا تُخزن ولا يراها أي شخص آخر. وتبقى في ذاكرة متصفحك وتُحذف عند إغلاق التبويب أو تحديثه.',
  },
  {
    id: 'wa-faq-17',
    question: 'ما الحجم الذي يجب أن تكون عليه صورة لواتساب؟',
    answer: 'للمشاركة اليومية، يعتبر من 100 إلى 300 كيلوبايت لكل صورة هدفًا جيدًا: فهي تُرسل بسرعة وتستهلك بيانات جوال قليلة وتبقى واضحة على الهاتف. ولصورة تريد طباعتها أو الاحتفاظ بها، ابقَ أقرب إلى 500 كيلوبايت إلى 1 ميغابايت بإعداد جودة أعلى.',
  },
  {
    id: 'wa-faq-18',
    question: 'لماذا تبدو صوري في واتساب ضبابية بعد إرسالها؟',
    answer: 'لأن واتساب أعاد ضغطها عندما أرسلتها كصور. والحل هو أن تضغط الصورة بنفسك أولًا بجودة تتحكم فيها، ثم ترسلها كمستند حتى لا يعيد واتساب ضغطها.',
  },
  {
    id: 'wa-faq-19',
    question: 'هل يمكنني ضغط لقطة شاشة لواتساب؟',
    answer: 'نعم. ارفع لقطة الشاشة إلى CompressMyPic مثل أي صورة. وتُضغط لقطات الشاشة بشكل جيد جدًا لأن فيها مساحات كبيرة من الألوان المسطحة: جرّب الإعداد المسبق «متوازن» أولًا وبدّل إلى إخراج WebP إذا أردت أصغر ملف.',
  },
  {
    id: 'wa-faq-20',
    question: 'هل CompressMyPic مجاني لصور واتساب؟',
    answer: 'نعم، مجاني تمامًا. لا تسجيل ولا علامة مائية ولا حد لعدد الصور التي تضغطها ولا حاجة لأي حساب. فقط افتح الموقع واضغط ونزّل.',
  },
];

export const GuideWhatsAppPageAr: React.FC<GuideWhatsAppPageArProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'ضغط الصور لواتساب دون فقدان الجودة';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'تعلم كيفية ضغط الصور لواتساب دون فقدان الجودة. مجاني وخاص، دون تسجيل: قلل صورك قبل إرسالها لتصل واضحة.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ar/adilla/daght-as-suwar-li-whatsapp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'كيفية ضغط الصور لواتساب دون فقدان الجودة',
          description: 'اضغط صورة باستخدام CompressMyPic وأرسلها عبر واتساب كمستند لتبقى واضحة.',
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
          headline: "ضغط الصور لواتساب دون فقدان الجودة",
          description: "تعلم كيفية ضغط الصور لواتساب دون فقدان الجودة. مجاني وخاص، دون تسجيل: قلل صورك قبل إرسالها لتصل واضحة.",
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
          mainEntityOfPage: "https://compressmypic.online/ar/adilla/daght-as-suwar-li-whatsapp/",
          inLanguage: 'ar',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "الرئيسية", item: "https://compressmypic.online/ar/" },
            { '@type': 'ListItem', position: 2, name: "أدلة", item: "https://compressmypic.online/ar/" },
            { '@type': 'ListItem', position: 3, name: "ضغط الصور لواتساب دون فقدان الجودة", item: "https://compressmypic.online/ar/adilla/daght-as-suwar-li-whatsapp/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-whatsapp-jsonld');
    if (prev) prev.remove();
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
            كيفية ضغط الصور لواتساب دون فقدان الجودة
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            بقلم <a href="/ar/hawlna" onClick={(e) => { e.preventDefault(); onNavigate('/ar/hawlna'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            يقلل واتساب من كل صورة ترسلها، غالبًا أكثر بكثير من اللازم. اضغط صورك بنفسك أولًا وأرسلها بالطريقة الصحيحة: ستصل واضحة، وتُرسل بسرعة، وتستهلك بيانات جوال أقل.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>لماذا يجعل واتساب صورك تبدو ضبابية</span>
            </h2>
            <p>
              عند إرسال صورة عبر واتساب بالطريقة المعتادة، يعيد واتساب ضغطها قبل تسليمها. وقد تصل صورة كاميرا بحجم 3 ميغابايت كملف بحجم 100 كيلوبايت بتفاصيل ناعمة وألوان متكتلة. ويفعل واتساب ذلك لتوفير البيانات والمساحة، لكنك لا تستطيع أن تقرر كم الجودة التي تُفقد.
            </p>
            <p>
              وهناك طريقة ثانية لإرسال صورة لا يستخدمها معظم الناس أبدًا: إرسالها كمستند. فالمستندات تُسلم كما هي، دون أي ضغط إضافي. والحيلة هي أن تقلل الصورة بنفسك أولًا، بإعداد جودة تتحكم فيه، ثم ترسلها كمستند. وبهذا تحصل على ملف صغير وصورة واضحة في الوقت نفسه.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>خطوة بخطوة: اضغط صورة لواتساب</span>
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
              src="/guides/compress-images-for-whatsapp-1.webp"
              alt="لقطة شاشة لكيفية رفع صورة إلى CompressMyPic قبل إرسالها عبر واتساب"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              ارفع صورتك إلى CompressMyPic: اسحب الصورة وأفلتها، أو اخترها من معرض الصور.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>ما إعداد الجودة الذي يجب أن تستخدمه؟</span>
            </h2>
            <p>
              لا يوجد رقم مثالي واحد: فالأمر يعتمد على الصورة والغرض منها. واستخدم هذا كنقطة بداية وراجع مقارنة قبل وبعد في كل مرة:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">صور يومية: 70%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  الإعداد المسبق «متوازن». توفير كبير في الحجم، وتبقى الصورة واضحة على أي شاشة هاتف. وهو أفضل خيار افتراضي لواتساب.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">صور مهمة: 80–85%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  صور العائلة، صور السفر، أي شيء تريد الاحتفاظ به. والملف أكبر، لكن التفاصيل الدقيقة للوجوه والمناظر الطبيعية محفوظة.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">إرسالات سريعة: 50–60%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  الميمات، والتحديثات السريعة، والصور مع بيانات جوال بطيئة. ملفات أصغر بكثير ما زالت تبدو جيدة بحجم شاشة الهاتف.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>نصائح للحصول على أفضل النتائج</span>
            </h2>
            <ul className="space-y-2 list-disc ps-5 text-sm sm:text-base">
              <li>اضغط مرة واحدة فقط، ومرة واحدة فقط. فإعادة ضغط صورة مضغوطة بالفعل مرة ثانية تحذف التفاصيل دون توفير مزيد من الحجم تقريبًا.</li>
              <li>أرسل الملف المضغوط دائمًا كمستند إذا كانت الجودة مهمة: فهذه هي الطريقة الوحيدة لمنع واتساب من ضغطه مرة أخرى.</li>
              <li>اضغط عدة صور دفعة واحدة بنفس الإعدادات ونزّلها كلها بزر «تنزيل الكل (ZIP)».</li>
              <li>بالنسبة للقطات الشاشة والرسومات ذات النص، جرّب إخراج WebP: فهو يحافظ على الحواف حادة وينتج ملفًا أصغر من JPG.</li>
              <li>صورتك الأصلية لا تُعدل أبدًا. فـ CompressMyPic يحفظ نسخة جديدة أصغر، لذا يمكنك دائمًا العودة وتجربة جودة مختلفة.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.webp"
              alt="لقطة شاشة لمنزلق الجودة وحجم الملف المباشر قبل وبعد في CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              حرّك منزلق الجودة وراقب كيف يتحدث حجم قبل وبعد مباشرة حتى يصبح الملف بالحجم الذي تريده.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>أخطاء شائعة يجب تجنبها</span>
            </h2>
            <ul className="space-y-2 list-disc ps-5 text-sm sm:text-base">
              <li>إرسال الصورة كصورة بعد ضغطها: فسيضغطها واتساب مرة ثانية ويفسد عملك.</li>
              <li>خفض الجودة عن 40% في الصور التي فيها وجوه: فالبشرة والتفاصيل الدقيقة تصبح متكتلة بسرعة كبيرة مع الجودة المنخفضة.</li>
              <li>استخدام PNG لصور الكاميرا: فملفات PNG أكبر بكثير من JPG للصور ولا تضيف لك شيئًا في واتساب.</li>
              <li>نسيان مراجعة النتيجة: انظر دائمًا إلى مقارنة قبل وبعد قبل الإرسال، خاصة في الصور ذات النص.</li>
            </ul>
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
                onClick={() => onNavigate('/ar/adilla/jpg-vs-png-vs-webp')}
                className={`text-start p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG مقابل PNG مقابل WebP: أي صيغة يجب أن تستخدم؟</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">حجم الملف والجودة والشفافية مقارنة، لتختار الصيغة الصحيحة في كل مرة.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/ar/adilla/taqlil-hajm-as-sura-ila-100kb')}
                className={`text-start p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">كيفية تصغير حجم صورة إلى 100 كيلوبايت لمواقع الويب والبريد الإلكتروني</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">دليل خطوة بخطوة للوصول إلى 100 كيلوبايت دون إفساد صورتك.</p>
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
              onClick={() => onNavigate('/ar/adilla/taqlil-hajm-as-sura-ila-100kb')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              تصغير صورة إلى 100 كيلوبايت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
