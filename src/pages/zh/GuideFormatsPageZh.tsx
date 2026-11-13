// Simplified Chinese (zh) formats guide — /zh/zhinan/jpg-vs-png-vs-webp.
// Translated from the ENGLISH original only (src/pages/GuideFormatsPage.tsx,
// repo HEAD cf50185). Same sections, same component shape, same props
// (onNavigate), 6 how-to steps, 20 FAQs. Back-link and CTAs point at the
// Chinese home /zh/; related guides use the fixed /zh/zhinan/... slugs.
// 在线 is used consistently throughout the Chinese prose.

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';

interface GuideFormatsPageZhProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: '打开 CompressMyPic',
    text: '在浏览器中打开 compressmypic.online。无需安装任何东西，无需创建账号，文件也绝不会上传到服务器。',
  },
  {
    title: '上传图片',
    text: '拖放图片，或点按“浏览文件”来选择。JPG、PNG 与 WebP 文件都支持，每张图片最大 20 MB。',
  },
  {
    title: '决定：保留格式还是转换格式',
    text: '选择“原始格式”可保留图片已有格式，或选择 JPG、PNG、WebP 作为输出格式。请参考下面的指南来决定：照片用 JPG，需要透明背景时用 PNG，想要网站上最小的文件时用 WebP。',
  },
  {
    title: '选择画质预设',
    text: '从“均衡”预设（约 70%）开始。想让照片看起来完美，请使用“高”预设或 85–90% 的画质。小的网页图片用更低的设置也可以。',
  },
  {
    title: '查看实时体积并对比',
    text: '每张图片都会显示原始体积和压缩后的新体积。打开压缩前后对比并放大查看——如果看不出差别，设置就是合适的。试着把输出格式切换到 WebP，看看文件能小多少。',
  },
  {
    title: '下载图片',
    text: '下载单张图片，或一次转换多张图片时使用“全部下载（ZIP）”。你的原始文件绝不会被改动——你得到的是一份新的、更小的副本。',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'JPG 和 PNG 有什么区别？',
    answer: 'JPG 是为照片设计的有损格式：它会丢掉一些细节来换取小得多的文件，而且无法实现透明背景。PNG 是无损格式，支持透明背景，非常适合标志和图形——但同样的照片保存为 PNG 时，文件会比 JPG 大好几倍。',
  },
  {
    id: 'fmt-faq-2',
    question: 'WebP 比 JPG 更好吗？',
    answer: '就文件体积而言，是的——WebP 在同等画质下通常比 JPG 小 25–35%，而且同样支持透明背景。选择 JPG 而不是 WebP 的唯一原因是兼容性：一些较旧的软件和应用处理 JPG 更好，而且 WhatsApp 预览 JPG 照片更可靠。',
  },
  {
    id: 'fmt-faq-3',
    question: 'WebP 比 PNG 更好吗？',
    answer: '通常是的。WebP 像 PNG 一样支持透明背景，但文件小得多，还可以像 JPG 一样进行有损压缩。当你需要为标志或图形保留完美的无损画质以便日后再次编辑时，PNG 仍然是更安全的选择。',
  },
  {
    id: 'fmt-faq-4',
    question: 'PNG 支持透明背景而 JPG 不支持，对吗？',
    answer: '没错。PNG 支持透明背景（Alpha 通道），所以标志和图标通常是 PNG。JPG 完全没有透明背景——JPG 中的任何透明区域都会变成纯色（通常是白色），所以绝不要把带透明背景的标志保存为 JPG。',
  },
  {
    id: 'fmt-faq-5',
    question: '为什么 PNG 文件比 JPG 大得多？',
    answer: '因为 PNG 是无损格式：它会精确保留每一个像素的细节，而 JPG 会丢掉眼睛几乎注意不到的细节。相机照片保存为 PNG 时，文件可能是同一张照片保存为 JPG 的 5–10 倍。这就是为什么照片几乎绝不应该保存为 PNG。',
  },
  {
    id: 'fmt-faq-6',
    question: '什么时候应该用 JPG 而不是 WebP？',
    answer: '当图片要在较旧的软件中打开、在 WhatsApp 或邮件中发送并希望保证预览效果，或者要打印时，请用 JPG。WebP 更适合网站，但与他人分享照片时，JPG 仍然是最通用的格式。',
  },
  {
    id: 'fmt-faq-7',
    question: '可以把 PNG 转换为 JPG 吗？',
    answer: '可以。把 PNG 上传到 CompressMyPic，选择 JPG 作为输出格式并下载即可。只是要记住 JPG 没有透明背景：如果你的 PNG 有透明背景，请先选择一个背景色，因为透明区域否则会变成纯白色。',
  },
  {
    id: 'fmt-faq-8',
    question: '可以把 JPG 转换为 WebP 吗？',
    answer: '可以。上传 JPG，选择 WebP 作为输出并下载——在相同视觉画质下，文件通常会小 25–35%。你可以一次把多张 JPG 转换为 WebP，并全部下载为 ZIP。',
  },
  {
    id: 'fmt-faq-9',
    question: '把 JPG 转换为 PNG 能提高画质吗？',
    answer: '不能。把 JPG 转换为 PNG 无法恢复 JPG 压缩已经丢掉的细节——只会让文件大得多。把 JPG 转换为 PNG 的唯一正当理由，是你需要再次编辑图片而不想损失更多画质。',
  },
  {
    id: 'fmt-faq-10',
    question: '网站应该用什么格式？',
    answer: '首选 WebP，JPG 作为备用。WebP 的文件最小，页面加载更快——页面速度对访客和 Google 都很重要。只有需要透明背景的图片（比如标志）才用 PNG；如果不能用 WebP，照片用 JPG。',
  },
  {
    id: 'fmt-faq-11',
    question: '标志最适合用什么格式？',
    answer: '如果标志需要透明背景，请用 PNG，因为 JPG 无法实现透明背景。WebP 同样支持透明背景，而且文件更小，所以是网站上标志的很好选择。如果背景必须保持透明，绝不要把标志保存为 JPG。',
  },
  {
    id: 'fmt-faq-12',
    question: '截图最适合用什么格式？',
    answer: 'PNG 或 WebP。截图有锐利的边缘和纯色区域，PNG 和 WebP 都能很好地处理。JPG 会模糊锐利的文字边缘。想要最小的截图文件，可以在 CompressMyPic 中试试 WebP 输出——它通常比 PNG 小得多，而且看不出差别。',
  },
  {
    id: 'fmt-faq-13',
    question: '现在所有浏览器都支持 WebP 吗？',
    answer: '是的，几乎所有浏览器都支持。Chrome、Edge、Firefox、Safari 以及所有现代手机浏览器多年来都支持 WebP。只有非常旧的浏览器和一些较旧的应用无法打开 WebP，这也是 JPG 仍然有用的唯一原因。',
  },
  {
    id: 'fmt-faq-14',
    question: 'WhatsApp 或 Instagram 接受 WebP 吗？',
    answer: 'WhatsApp 可以接收 WebP 文件，但它们可能无法像普通照片那样预览，所以分享照片时 JPG 更安全。Instagram 接受 JPG 和 PNG 作为帖子图片，上传后会自行转换。在社交媒体上分享时，照片请坚持用 JPG。',
  },
  {
    id: 'fmt-faq-15',
    question: '把照片转换为 WebP 会损失画质吗？',
    answer: '只会损失你自己选择的那部分。WebP 与 JPG 的原理相同——通过画质设置，用一点细节换取更小的文件。在 80–90% 画质下，WebP 照片看起来与原始 JPG 一模一样，而文件大约小三分之一。',
  },
  {
    id: 'fmt-faq-16',
    question: 'JPG 和 JPEG 有什么区别？',
    answer: '没有区别——JPG 和 JPEG 是同一种格式。JPEG 是全名（Joint Photographic Experts Group，联合图像专家组），JPG 是简短的文件扩展名。一个叫 photo.jpg 的文件和一个叫 photo.jpeg 的文件是同一种图片。',
  },
  {
    id: 'fmt-faq-17',
    question: '应该保留原始格式还是转换格式？',
    answer: '如果你对体积满意，就保留原始格式——这是最简单的选择，也不会损失任何东西。有理由时再转换：JPG 转 WebP 可以缩小网站照片，PNG 转 JPG 可以缩小不需要透明背景的照片，PNG 转 WebP 可以缩小标志。',
  },
  {
    id: 'fmt-faq-18',
    question: '哪种格式的文件最小？',
    answer: '几乎在所有情况下都是 WebP。照片方面，WebP 在相同视觉画质下通常比 JPG 小 25–35%。带透明背景的图形方面，WebP 通常比 PNG 小得多。这就是为什么 WebP 是网站的最佳格式。',
  },
  {
    id: 'fmt-faq-19',
    question: 'CompressMyPic 可以在 JPG、PNG 与 WebP 之间转换吗？',
    answer: '可以。上传 JPG、PNG 或 WebP 图片，选择你想要的输出格式——原始格式、JPG、PNG 或 WebP——然后下载转换后的文件。你可以用相同设置一次转换多张图片，并全部下载为 ZIP。',
  },
  {
    id: 'fmt-faq-20',
    question: '把 PNG 转换为 JPG 时，透明背景会怎样？',
    answer: '透明背景会丢失。JPG 无法存储透明信息，所以 PNG 中的透明部分会变成纯色。CompressMyPic 允许你选择一种背景色来填充这些区域，请选择与图片使用场景相匹配的颜色——白色通常是首选。',
  },
];

export const GuideFormatsPageZh: React.FC<GuideFormatsPageZhProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG、PNG、WebP 对比：应该选择哪种格式？';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG、PNG、WebP 简单对比：文件大小、画质与透明支持一目了然，帮你为照片、标志、截图和网站选对格式，并用免费在线工具在几秒内压缩或转换图片。了解 JPG 为何最适合照片、PNG 为何最适合标志、WebP 为何是网站的最佳选择，以及转换时如何保留透明背景。无需注册、无水印，附分步指南与 20 个常见问题解答。');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/zh/zhinan/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: '如何比较 JPG、PNG 与 WebP 并转换图片',
          description: '比较 JPG、PNG 与 WebP，然后用 CompressMyPic 压缩或转换你的图片。',
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
    script.id = 'guide-formats-zh-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-zh-jsonld');
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
            onClick={() => onNavigate('/zh/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回图片压缩器</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            JPG、PNG 与 WebP 对比——应该选择哪种格式？
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            选错格式可能让你的图片比实际需要的大十倍——或者毁掉一个透明标志。下面是简单、诚实的对比，以及如何在几秒钟内转换格式。
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              <span>简短答案</span>
            </h2>
            <p>
              如果你只记住一件事，那就记住这个：照片用 JPG，标志和任何需要透明背景的图片用 PNG，想要最小的文件时用 WebP——尤其是在网站上。下面的表格说明了原因。
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">格式</th>
                    <th className="px-4 py-3 font-bold">文件体积</th>
                    <th className="px-4 py-3 font-bold">透明背景</th>
                    <th className="px-4 py-3 font-bold">最适合</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">JPG</td>
                    <td className="px-4 py-3">小</td>
                    <td className="px-4 py-3">不支持</td>
                    <td className="px-4 py-3">照片、分享、打印</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">PNG</td>
                    <td className="px-4 py-3">大</td>
                    <td className="px-4 py-3">支持</td>
                    <td className="px-4 py-3">标志、图标、截图</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">WebP</td>
                    <td className="px-4 py-3">最小</td>
                    <td className="px-4 py-3">支持</td>
                    <td className="px-4 py-3">网站、网页照片</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              <span>JPG：最适合照片</span>
            </h2>
            <p>
              JPG（也写作 JPEG）是经典的照片格式。它使用有损压缩：丢掉眼睛几乎注意不到的精细细节，从而让文件大幅变小。一张 5 MB 的相机照片保存为 JPG 后可能变成 500 KB，而且看起来依然很棒。JPG 无法实现透明背景，所以不适合标志——但对于任何普通照片，它都是安全、通用的默认选择，所有设备和应用都能打开。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>PNG：最适合标志和透明背景</span>
            </h2>
            <p>
              PNG 是无损格式：它会精确保留每一个像素，而且支持透明背景。这使它成为标志、图标和带文字图形的正确格式。代价是文件体积——一张照片保存为 PNG 时，文件可能是同一张照片保存为 JPG 的 5–10 倍。除非有特定理由，否则绝不要把相机照片保存为 PNG。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>WebP：最适合网站</span>
            </h2>
            <p>
              WebP 是 Google 开发的现代格式。它什么都能做：像 JPG 一样的有损压缩、像 PNG 一样的透明背景，而且文件在相同视觉画质下通常比 JPG 小 25–35%。所有现代浏览器都支持它，所以它是网站图片的最佳格式。它唯一的弱点是与较旧软件的兼容性——以及 WhatsApp 预览，在那里 JPG 仍然更安全。
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="同一张照片分别保存为 JPG、PNG 与 WebP 及其文件体积的对比截图"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              同一张照片的三种格式：WebP 最小，PNG 最大，JPG 居中。
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileImage className="w-5 h-5 text-blue-600" />
              <span>分步指南：压缩或转换你的图片</span>
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
              <span>不同用途应该用什么格式？</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">相机照片——JPG 或 WebP</div>
                <p className="text-xs text-slate-600">
                  分享和打印用 JPG，网站用 WebP。两种格式都能让照片以远小于原始体积的文件保持出色的外观。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">标志和图标——PNG 或 WebP</div>
                <p className="text-xs text-slate-600">
                  你需要透明背景，所以 JPG 不行。PNG 是安全的经典选择；WebP 更小，在现代环境中都可以使用。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">截图——WebP 或 PNG</div>
                <p className="text-xs text-slate-600">
                  锐利的文字和纯色区域适合 WebP 和 PNG。JPG 会模糊文字边缘，所以截图请避免使用 JPG。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">网站图片——WebP</div>
                <p className="text-xs text-slate-600">
                  文件最小意味着页面更快。把网站照片转换为 WebP，并为非常旧的浏览器保留 JPG 作为备用。
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="在 CompressMyPic 中选择 JPG、PNG 或 WebP 输出格式的截图"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              在 CompressMyPic 中选择输出格式——保留原始格式，或转换为 JPG、PNG、WebP。
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>常见问题</span>
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
            <h2 className="text-xl font-bold text-slate-900">相关指南</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/zh/zhinan/whatsapp-tupian-yasuo')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">如何在 WhatsApp 上压缩图片而不损失画质</div>
                <p className="text-xs text-slate-600 mt-1">先自己缩小照片，再作为文件发送，这样 WhatsApp 就无法再模糊它们。</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/zh/zhinan/jiang-tupian-yasuo-zhi-100kb')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">如何把图片压缩到 100KB，用于网站和邮件</div>
                <p className="text-xs text-slate-600 mt-1">分步指南，帮你达到 100KB 而不毁掉照片。</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/zh/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              免费压缩图片
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/zh/zhinan/whatsapp-tupian-yasuo')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              为 WhatsApp 压缩
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
