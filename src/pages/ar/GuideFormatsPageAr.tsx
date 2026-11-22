import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';
import { GuideRelatedLinks } from '../../components/GuideRelatedLinks';

interface GuideFormatsPageArProps {
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
    text: 'انتقل إلى compressmypic.online في متصفحك. لا يوجد شيء لتثبيته، ولا حساب لإنشائه، ولا يُرفع أي ملف أبدًا إلى خادم.',
  },
  {
    title: 'ارفع صورتك',
    text: 'اسحب صورتك وأفلتها، أو انقر على «استعراض الملفات» لاختيارها. تُقبل ملفات JPG وPNG وWebP، حتى 20 ميغابايت لكل صورة.',
  },
  {
    title: 'قرر: احتفظ بالصيغة أو حوّلها',
    text: 'اختر «الأصلية» للاحتفاظ بالصيغة التي تحملها صورتك بالفعل، أو اختر JPG أو PNG أو WebP كإخراج. واستخدم الدليل أدناه لتقرر: JPG للصور، وPNG عندما تحتاج إلى شفافية، وWebP عندما تريد أصغر ملف لموقع ويب.',
  },
  {
    title: 'اختر إعدادًا مسبقًا للجودة',
    text: 'ابدأ بالإعداد المسبق «متوازن» (نحو 70%). ولصورة تريدها أن تبدو مثالية، استخدم الإعداد المسبق «عالٍ» أو جودة من 85 إلى 90%. ولصورة ويب صغيرة، يكفي إعداد أقل.',
  },
  {
    title: 'راجع الحجم المباشر وقارن',
    text: 'تعرض كل صورة حجمها الأصلي وحجمها الجديد المضغوط. وافتح مقارنة قبل وبعد وقرّب: فإذا لم ترَ أي فرق، فالإعداد صحيح. وجرّب تغيير صيغة الإخراج إلى WebP وراقب كم يصغر الملف أكثر.',
  },
  {
    title: 'نزّل صورتك',
    text: 'نزّل الصورة منفردة، أو استخدم «تنزيل الكل (ZIP)» عندما تكون قد حوّلت عدة صور دفعة واحدة. وملفك الأصلي لا يُعدل أبدًا: فأنت تحصل على نسخة جديدة أصغر.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'ما الفرق بين JPG وPNG؟',
    answer: 'صيغة JPG فاقدة ومصممة للصور: تحذف بعض التفاصيل لإنشاء ملفات أصغر بكثير ولا تدعم الشفافية. أما PNG فغير فاقدة وتدعم الشفافية، لذا فهي مثالية للشعارات والرسومات، لكن صور PNG أكبر عدة مرات من الصورة نفسها محفوظة بصيغة JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'هل WebP أفضل من JPG؟',
    answer: 'من حيث حجم الملف، نعم: فصيغة WebP عادة أصغر بنسبة 25 إلى 35% من JPG بجودة مماثلة، وتدعم الشفافية أيضًا. والسبب الوحيد لاختيار JPG بدلًا من WebP هو التوافق: فبعض البرامج القديمة وبعض التطبيقات ما زالت تتعامل مع JPG بشكل أفضل، ويعرض واتساب صور JPG بشكل أكثر موثوقية.',
  },
  {
    id: 'fmt-faq-3',
    question: 'هل WebP أفضل من PNG؟',
    answer: 'عمومًا، نعم. فصيغة WebP تدعم الشفافية مثل PNG، لكنها تنشئ ملفات أصغر بكثير، ويمكنها أيضًا إجراء ضغط فاقد مثل JPG. ويبقى PNG الخيار الأكثر أمانًا عندما تحتاج إلى جودة مثالية غير فاقدة لشعار أو رسم سيُحرر مرة أخرى لاحقًا.',
  },
  {
    id: 'fmt-faq-4',
    question: 'هل تدعم PNG الشفافية وJPG لا؟',
    answer: 'صحيح. تدعم PNG خلفية شفافة (قناة ألفا)، ولهذا تكون الشعارات والأيقونات عادة بصيغة PNG. أما JPG فلا شفافية فيها إطلاقًا: فأي منطقة شفافة في JPG تتحول إلى لون صلب، عادة أبيض، لذا لا تحفظ أبدًا شعارًا بخلفية شفافة بصيغة JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'لماذا تكون ملفات PNG أكبر بكثير من JPG؟',
    answer: 'لأن PNG غير فاقدة: فهي تحافظ على كل بكسل من التفاصيل بدقة، بينما تحذف JPG تفاصيل لا تلاحظها العين بالكاد. وقد تكون صورة كاميرا محفوظة بصيغة PNG أكبر من 5 إلى 10 مرات من الصورة نفسها بصيغة JPG. ولهذا يجب ألا تكون الصور بصيغة PNG أبدًا تقريبًا.',
  },
  {
    id: 'fmt-faq-6',
    question: 'متى يجب أن أستخدم JPG بدلًا من WebP؟',
    answer: 'استخدم JPG عندما تُفتح الصورة في برامج قديمة، أو تُرسل عبر واتساب أو البريد الإلكتروني وتريد معاينة مضمونة، أو تُطبع. فصيغة WebP أفضل لمواقع الويب، لكن لمشاركة صورة مع شخص ما، تبقى JPG الصيغة الأكثر عالمية.',
  },
  {
    id: 'fmt-faq-7',
    question: 'هل يمكنني تحويل PNG إلى JPG؟',
    answer: 'نعم. ارفع ملف PNG إلى CompressMyPic، واختر JPG كصيغة إخراج، ونزّله. وتذكر فقط أن JPG لا شفافية فيها: فإذا كان ملف PNG لديك بخلفية شفافة، فاختر أولًا لون خلفية، لأن المنطقة الشفافة ستصبح بيضاء صلبة في حال عدم ذلك.',
  },
  {
    id: 'fmt-faq-8',
    question: 'هل يمكنني تحويل JPG إلى WebP؟',
    answer: 'نعم. ارفع ملف JPG، واختر WebP كإخراج، ونزّله: فالملف عادة أصغر بنسبة 25 إلى 35% بنفس الجودة المرئية. ويمكنك تحويل عدة ملفات JPG إلى WebP دفعة واحدة وتنزيلها كلها كملف ZIP.',
  },
  {
    id: 'fmt-faq-9',
    question: 'هل يحسن تحويل JPG إلى PNG الجودة؟',
    answer: 'لا. فتتحويل JPG إلى PNG لا يمكنه استعادة التفاصيل التي حذفها ضغط JPG بالفعل؛ بل يجعل الملف أكبر بكثير فقط. والسبب الجيد الوحيد لتحويل JPG إلى PNG هو إذا كنت بحاجة إلى تحرير الصورة مرة أخرى دون فقدان المزيد من الجودة.',
  },
  {
    id: 'fmt-faq-10',
    question: 'ما الصيغة التي يجب استخدامها لموقع ويب؟',
    answer: 'WebP أولًا وJPG كبديل. فصيغة WebP تعطيك أصغر الملفات، مما يجعل الصفحات تحمل أسرع، وسرعة الصفحة مهمة للزوار وGoogle على حد سواء. واستخدم PNG فقط للصور التي تحتاج إلى شفافية، مثل الشعار، وJPG للصور إذا لم تتمكن من استخدام WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: 'ما الصيغة الأفضل للشعار؟',
    answer: 'PNG إذا كان الشعار يحتاج إلى خلفية شفافة، لأن JPG لا تدعم الشفافية. وتدعم WebP الشفافية أيضًا وتنشئ ملفًا أصغر، لذا فهي خيار جيد لشعار على موقع ويب. ولا تحفظ شعارًا بصيغة JPG أبدًا إذا كان يجب أن تبقى الخلفية شفافة.',
  },
  {
    id: 'fmt-faq-12',
    question: 'ما الصيغة الأفضل للقطات الشاشة؟',
    answer: 'PNG أو WebP. فلقطات الشاشة فيها حواف حادة وألوان مسطحة، وتتعامل معها PNG وWebP بشكل جيد. أما JPG فيشوش الحواف الحادة للنص. وللحصول على أصغر ملف للقطة شاشة، جرّب إخراج WebP في CompressMyPic: فهو عادة أصغر بكثير من PNG دون أي فرق مرئي.',
  },
  {
    id: 'fmt-faq-13',
    question: 'هل تدعم جميع المتصفحات WebP الآن؟',
    answer: 'نعم، عمليًا جميعها. فمتصفحات Chrome وEdge وFirefox وSafari وجميع متصفحات الجوال الحديثة تدعم WebP منذ سنوات. وفقط المتصفحات القديمة جدًا وبعض التطبيقات القديمة لا تستطيع فتح WebP، وهذا هو السبب الوحيد الذي يجعل JPG ما زال مفيدًا.',
  },
  {
    id: 'fmt-faq-14',
    question: 'هل يقبل واتساب أو إنستغرام WebP؟',
    answer: 'يمكن لواتساب استقبال ملفات WebP، لكنها قد لا تظهر كصورة عادية، لذا فإن JPG أكثر أمانًا لمشاركة الصور هناك. ويقبل إنستغرام JPG وPNG للمنشورات ويحوّل الرفوعات بنفسه. ولمشاركة الصور على وسائل التواصل الاجتماعي، التزم بـ JPG للصور.',
  },
  {
    id: 'fmt-faq-15',
    question: 'هل يفقد تحويل صورة إلى WebP الجودة؟',
    answer: 'فقط بقدر ما تختار. فصيغة WebP تستخدم الفكرة نفسها مثل JPG: إعداد جودة يبدل قليلًا من التفاصيل بملف أصغر. ومع جودة من 80 إلى 90%، تبدو صورة WebP مطابقة تمامًا لصورة JPG الأصلية ويكون الملف أصغر بنحو الثلث.',
  },
  {
    id: 'fmt-faq-16',
    question: 'هل JPG وJPEG هما الصيغة نفسها؟',
    answer: 'لا يوجد أي فرق: فـ JPG وJPEG هما الصيغة نفسها. وJPEG هو الاسم الكامل (Joint Photographic Experts Group) وJPG هو امتداد الملف القصير. فملف يسمى photo.jpg وملف يسمى photo.jpeg هما النوع نفسه من الصور.',
  },
  {
    id: 'fmt-faq-17',
    question: 'هل يجب أن أحتفظ بالصيغة الأصلية أم أحوّلها؟',
    answer: 'احتفظ بالأصلية إذا كنت راضيًا عن الحجم: فهو الخيار الأبسط ولا يُفقد شيء. وحوّل عندما يكون لديك سبب: من JPG إلى WebP لتصغير صورة موقع ويب، ومن PNG إلى JPG لتصغير صورة لا تحتاج إلى شفافية، أو من PNG إلى WebP لتصغير شعار.',
  },
  {
    id: 'fmt-faq-18',
    question: 'ما الصيغة التي تعطي أصغر ملف؟',
    answer: 'WebP، في جميع الحالات تقريبًا. فبالنسبة للصور، تكون WebP عادة أصغر بنسبة 25 إلى 35% من JPG بنفس الجودة المرئية. وبالنسبة للرسومات ذات الشفافية، تكون WebP عادة أصغر بكثير من PNG. ولهذا تعتبر WebP أفضل صيغة لمواقع الويب.',
  },
  {
    id: 'fmt-faq-19',
    question: 'هل يحوّل CompressMyPic بين JPG وPNG وWebP؟',
    answer: 'نعم. ارفع صورة JPG أو PNG أو WebP، واختر صيغة الإخراج التي تريدها — الأصلية أو JPG أو PNG أو WebP — ونزّل الملف المحول. ويمكنك تحويل عدة صور دفعة واحدة بنفس الإعدادات وتنزيلها كلها كملف ZIP.',
  },
  {
    id: 'fmt-faq-20',
    question: 'ماذا يحدث للشفافية إذا حوّلت PNG إلى JPG؟',
    answer: 'تُفقد. فصيغة JPG لا تستطيع تخزين الشفافية، لذا تتحول الأجزاء الشفافة من ملف PNG إلى لون صلب. ويتيح لك CompressMyPic اختيار لون خلفية لملء تلك المناطق، لذا اختر لونًا يناسب المكان الذي ستُستخدم فيه الصورة؛ والأبيض هو الخيار المعتاد.',
  },
];

export const GuideFormatsPageAr: React.FC<GuideFormatsPageArProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG مقابل PNG مقابل WebP: أي صيغة يجب أن تستخدم؟';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG مقابل PNG مقابل WebP مشروحة ببساطة: قارن الحجم والجودة والشفافية لتختار الصيغة المناسبة لصورك وشعاراتك ومواقعك.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ar/adilla/jpg-vs-png-vs-webp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'كيفية الاختيار بين JPG وPNG وWebP وتحويل الصور',
          description: 'قارن بين JPG وPNG وWebP ثم اضغط صورتك أو حوّلها باستخدام CompressMyPic.',
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
          headline: "JPG مقابل PNG مقابل WebP: أي صيغة يجب أن تستخدم؟",
          description: "JPG مقابل PNG مقابل WebP مشروحة ببساطة: قارن الحجم والجودة والشفافية لتختار الصيغة المناسبة لصورك وشعاراتك ومواقعك.",
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
          mainEntityOfPage: "https://compressmypic.online/ar/adilla/jpg-vs-png-vs-webp/",
          inLanguage: 'ar',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "الرئيسية", item: "https://compressmypic.online/ar/" },
            { '@type': 'ListItem', position: 2, name: "أدلة", item: "https://compressmypic.online/ar/" },
            { '@type': 'ListItem', position: 3, name: "JPG مقابل PNG مقابل WebP: أي صيغة يجب أن تستخدم؟", item: "https://compressmypic.online/ar/adilla/jpg-vs-png-vs-webp/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-formats-jsonld');
    if (prev) prev.remove();
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
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <a
            href="/ar/"
            onClick={(e) => { e.preventDefault(); onNavigate('/ar/'); }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>العودة إلى ضاغط الصور</span>
          </a>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            JPG مقابل PNG مقابل WebP: أي صيغة يجب أن تستخدم؟
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            بقلم <a href="/ar/hawlna" onClick={(e) => { e.preventDefault(); onNavigate('/ar/hawlna'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            اختيار الصيغة الخاطئة قد يجعل صورتك أكبر بعشر مرات من اللازم، أو يفسد شعارًا شفافًا. وإليك المقارنة البسيطة والصادقة، وكيفية التحويل بين الصيغ في ثوانٍ.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>الإجابة المختصرة</span>
            </h2>
            <p>
              إذا تذكرت شيئًا واحدًا فقط، فتذكر هذا: استخدم JPG للصور، وPNG للشعارات وكل ما يحتاج إلى شفافية، وWebP عندما تريد أصغر ملف، خاصة في موقع ويب. ويوضح الجدول أدناه السبب.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-start border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">الصيغة</th>
                    <th className="px-4 py-3 font-semibold">حجم الملف</th>
                    <th className="px-4 py-3 font-semibold">الشفافية</th>
                    <th className="px-4 py-3 font-semibold">مثالية لـ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">JPG</td>
                    <td className="px-4 py-3">صغير</td>
                    <td className="px-4 py-3">لا</td>
                    <td className="px-4 py-3">الصور، المشاركة، الطباعة</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">PNG</td>
                    <td className="px-4 py-3">كبير</td>
                    <td className="px-4 py-3">نعم</td>
                    <td className="px-4 py-3">الشعارات، الأيقونات، لقطات الشاشة</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">WebP</td>
                    <td className="px-4 py-3">الأصغر</td>
                    <td className="px-4 py-3">نعم</td>
                    <td className="px-4 py-3">مواقع الويب، صور الويب</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Camera className="w-4 h-4" />
              </span>
              <span>JPG: الأفضل للصور</span>
            </h2>
            <p className="text-sm sm:text-base">
              صيغة JPG (وتُكتب أيضًا JPEG) هي الصيغة الكلاسيكية للصور. وتستخدم ضغطًا فاقدًا: تحذف تفاصيل دقيقة لا تلاحظها عينك بالكاد، مما يجعل الملفات أصغر بكثير. ويمكن أن تتحول صورة كاميرا بحجم 5 ميغابايت إلى 500 كيلوبايت بصيغة JPG وتبقى تبدو جيدة جدًا. ولا تدعم JPG الشفافية، لذا فهي الخيار الخاطئ للشعارات، لكنها لأي صورة عادية هي الخيار الآمن والعالمي الذي يمكن لجميع الأجهزة والتطبيقات فتحه.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: الأفضل للشعارات والشفافية</span>
            </h2>
            <p className="text-sm sm:text-base">
              صيغة PNG غير فاقدة: تحافظ على كل بكسل بدقة وتدعم الخلفيات الشفافة. وهذا يجعلها الصيغة المناسبة للشعارات والأيقونات والرسومات ذات النص. والثمن هو حجم الملف: فقد تكون صورة محفوظة بصيغة PNG أكبر من 5 إلى 10 مرات من الصورة نفسها بصيغة JPG. ولا تحفظ صورة كاميرا بصيغة PNG أبدًا إلا إذا كان لديك سبب محدد.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: الأفضل لمواقع الويب</span>
            </h2>
            <p className="text-sm sm:text-base">
              صيغة WebP هي الصيغة الحديثة التي أنشأتها Google. وهي تفعل كل شيء: ضغط فاقد مثل JPG، وشفافية مثل PNG، وملفات عادة أصغر بنسبة 25 إلى 35% من JPG بنفس الجودة المرئية. وتدعمها جميع المتصفحات الحديثة، ولهذا فهي أفضل صيغة لصور مواقع الويب. ونقطة ضعفها الوحيدة هي التوافق مع البرامج القديمة، ومع معاينات واتساب، حيث تبقى JPG أكثر أمانًا.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.webp"
              alt="لقطة شاشة تقارن الصورة نفسها محفوظة بصيغ JPG وPNG وWebP مع أحجام ملفاتها"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              الصورة نفسها بثلاث صيغ: WebP هي الأصغر، وPNG هي الأكبر، وJPG في المنتصف.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>خطوة بخطوة: اضغط صورتك أو حوّلها</span>
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

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>ما الصيغة لكل مهمة؟</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">صور الكاميرا: JPG أو WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  JPG للمشاركة والطباعة، وWebP لموقعك. وكلاهما يحافظ على مظهر الصور الجيد جدًا بجزء صغير من الحجم الأصلي.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">الشعارات والأيقونات: PNG أو WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  تحتاج إلى شفافية، لذا فإن JPG مستبعدة. وPNG هي الخيار الكلاسيكي الآمن؛ وWebP أصغر وتعمل في جميع الأماكن الحديثة.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">لقطات الشاشة: WebP أو PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  النص الحاد والألوان المسطحة تناسب WebP وPNG. أما JPG فيشوش حواف النص، لذا تجنبه في لقطات الشاشة.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">صور المواقع: WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  الملفات الأصغر تعني صفحات أسرع. وحوّل صور موقعك إلى WebP واحتفظ بـ JPG كبديل للمتصفحات القديمة جدًا.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.webp"
              alt="لقطة شاشة لكيفية اختيار صيغة الإخراج JPG أو PNG أو WebP في CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              اختر صيغة الإخراج في CompressMyPic: احتفظ بالأصلية أو حوّل إلى JPG أو PNG أو WebP.
            </figcaption>
          </figure>

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
              <a
                href="/ar/adilla/daght-as-suwar-li-whatsapp"
                onClick={(e) => { e.preventDefault(); onNavigate('/ar/adilla/daght-as-suwar-li-whatsapp'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">كيفية ضغط الصور لواتساب دون فقدان الجودة</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">قلل صورك بنفسك أولًا ثم أرسلها كمستندات حتى لا يتمكن واتساب من تشويهها.</p>
              </a>
              <a
                href="/ar/adilla/taqlil-hajm-as-sura-ila-100kb"
                onClick={(e) => { e.preventDefault(); onNavigate('/ar/adilla/taqlil-hajm-as-sura-ila-100kb'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">كيفية تصغير حجم صورة إلى 100 كيلوبايت لمواقع الويب والبريد الإلكتروني</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">دليل خطوة بخطوة للوصول إلى 100 كيلوبايت دون إفساد صورتك.</p>
              </a>
            </div>
          </section>

          <GuideRelatedLinks guide="formats" lang="ar" onNavigate={onNavigate} />

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="/ar/"
              onClick={(e) => { e.preventDefault(); onNavigate('/ar/'); }}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              اضغط الصور مجانًا
            </a>
            <a
              href="/ar/adilla/daght-as-suwar-li-whatsapp"
              onClick={(e) => { e.preventDefault(); onNavigate('/ar/adilla/daght-as-suwar-li-whatsapp'); }}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              الضغط لواتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
