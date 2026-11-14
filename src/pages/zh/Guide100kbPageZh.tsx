// Simplified Chinese (zh) 100KB guide — /zh/zhinan/jiang-tupian-yasuo-zhi-100kb.
// Translated from the ENGLISH original only (src/pages/Guide100kbPage.tsx,
// repo HEAD cf50185). Same sections, same component shape, same props
// (onNavigate), 7 how-to steps, 20 FAQs. Back-link and CTAs point at the
// Chinese home /zh/; related guides use the fixed /zh/zhinan/... slugs.
// 在线 is used consistently throughout the Chinese prose.

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageZhProps {
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
    text: '在浏览器中打开 compressmypic.online。无需安装任何东西，无需创建账号——工具免费，无需注册，也没有水印。',
  },
  {
    title: '上传图片',
    text: '把图片拖放到页面上，或点按“浏览文件”从设备中选择。支持 JPG、PNG 与 WebP，每张图片最大 20 MB。一次可以上传多张图片。',
  },
  {
    title: '从“均衡”预设开始',
    text: '“均衡”预设会把画质设为约 70%。对于大多数照片，这已经能把文件缩小到原始体积的一小部分——查看图片旁边显示的实时体积，了解你目前的情况。',
  },
  {
    title: '一步一步降低画质滑块',
    text: '这里没有可以输入“100KB”的框——请慢慢拖动滑块降低画质，每次调整后都会实时更新压缩前后体积。请小步调整（例如从 70% 到 60% 再到 50%），以免一下子降得太多、损失不必要的画质。',
  },
  {
    title: '如果还是超过 100KB，请切换到 WebP',
    text: '如果在合理的画质下文件仍然超过 100KB，请把输出格式改为 WebP。WebP 在相同视觉画质下通常比 JPG 小 25–35%，往往能在不进一步降低画质的情况下达到 100KB。',
  },
  {
    title: '对比压缩前后效果',
    text: '打开压缩前后对比，放大查看人脸、文字和精细细节。如果图片看起来依然不错，你就完成了。如果看起来有色块或发灰，请把画质稍微调高一点，接受略高于 100KB 的文件——一张清晰的 120 KB 照片总比一张模糊的 100 KB 照片好。',
  },
  {
    title: '下载图片',
    text: '点按“下载”保存更小的文件；如果一次缩小了多张图片，可以使用“全部下载（ZIP）”。你的原始图片绝不会被改动——你得到的始终是一份新的、更小的副本。',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: '如何把照片缩小到 100KB 左右？',
    answer: '把它上传到 CompressMyPic，从“均衡”预设开始，然后一边查看实时压缩前后体积，一边一步一步降低画质滑块。压缩后的体积一接近 100KB 就停下来。如果还是超过，请把输出格式切换到 WebP。',
  },
  {
    id: 'kb-faq-2',
    question: '为什么没有精确的 100KB 输入框？',
    answer: '因为每张照片的压缩方式都不同——在相同画质下，纯净的天空比繁忙的人群场景缩小得更多。一个固定的“100KB”框只能靠猜测。相反，CompressMyPic 会在每次调整后显示实时压缩体积，让你自己把文件调到 100KB，同时完全掌控画质。',
  },
  {
    id: 'kb-faq-3',
    question: '什么画质设置能达到 100KB 左右？',
    answer: '这取决于照片，但对于典型的手机照片，50–70% 的画质通常能接近 100KB。色彩平坦的简单照片在 70% 时就能达到 100KB，而细节丰富的风景照可能需要 40–50%。请查看实时体积——那个数字才是真实情况，而不是任何固定的百分比。',
  },
  {
    id: 'kb-faq-4',
    question: '低画质下照片还是超过 100KB，该怎么办？',
    answer: '首先把输出格式切换到 WebP，它通常比 JPG 小 25–35%。如果还是超过，再把画质稍微降低一点并查看对比——再降一点往往看不出来。最后，如果照片的像素尺寸非常大，可能需要比预期更低的画质设置，因为像素越多意味着数据越多。',
  },
  {
    id: 'kb-faq-5',
    question: '应该用 WebP 来达到 100KB 吗？',
    answer: '只要可以，就应该用。WebP 是在不过度降低画质的情况下达到 100KB 的最简单方法，因为它在相同视觉画质下文件更小。网站图片和现代浏览器使用的场合请用 WebP；只有当图片必须在较旧软件中打开或在 WhatsApp 上分享时才用 JPG。',
  },
  {
    id: 'kb-faq-6',
    question: '缩小到 100KB 会让照片变模糊吗？',
    answer: '如果操作得当，不会。100KB 的普通手机照片在屏幕上看起来依然清晰，因为屏幕显示的像素远比相机拍摄的少。只有当你把画质推得太低（低于约 40%），或者照片要大幅打印时，它才会看起来模糊。下载前一定要查看压缩前后对比。',
  },
  {
    id: 'kb-faq-7',
    question: '可以把 PNG 缩小到 100KB 吗？',
    answer: '可以，但 PNG 照片本身就很大，所以需要多花些功夫。上传 PNG，降低画质滑块，并把输出切换到 WebP 或 JPG——仅这一步往往就能把体积缩小一半以上。只有当图片需要透明背景时才保留 PNG 输出，并且要接受带透明背景的 PNG 可能无法达到 100KB。',
  },
  {
    id: 'kb-faq-8',
    question: '如何把图片缩小到 200KB？',
    answer: '用同样的方法：上传图片，从“均衡”预设开始，一边查看实时体积，一边降低画质滑块，直到体积接近 200KB。大多数照片在 70–80% 画质下就能轻松达到 200KB，通常根本不需要降得很低。',
  },
  {
    id: 'kb-faq-9',
    question: '如何把图片缩小到 50KB？',
    answer: '上传图片，把输出格式切换到 WebP，然后逐步降低画质滑块，直到实时体积接近 50KB——照片通常在 40–55% 画质左右。请仔细查看对比，因为在 50KB 时精细细节开始受损；它适合缩略图和聊天，不太适合想要保留的照片。',
  },
  {
    id: 'kb-faq-10',
    question: '如何把图片缩小到 20KB？',
    answer: '使用 WebP 输出和较低的画质设置，通常为 25–40%，同时查看实时体积。20KB 非常小，所以请预期会有明显的发软——它适合图标、缩略图和微小的预览图，不适合有人脸的照片。如果图片还是无法达到 20KB，说明它的细节太多，不适合这么小的文件。',
  },
  {
    id: 'kb-faq-11',
    question: '网站图片的合适文件体积是多少？',
    answer: '普通内容照片请控制在 100KB 以下，大型主图请控制在 200KB 以下。小文件让页面加载更快，访客能感觉到，Google 也会给予奖励。网站图片请以 WebP 格式和“均衡”预设作为起点。',
  },
  {
    id: 'kb-faq-12',
    question: '邮件附件的体积限制是多少？',
    answer: '大多数邮件服务商允许每封邮件总共 20–25 MB，包括所有附件——Gmail 允许 25 MB。单张缩小到 100KB 的照片绝不会有问题；即使十张 100KB 的照片加起来也只有 1 MB。先压缩再发送，这就是一次发送多张照片毫不费力的原因。',
  },
  {
    id: 'kb-faq-13',
    question: '可以一次把多张图片缩小到 100KB 吗？',
    answer: '可以。把所有图片一起上传，对它们应用相同的预设和画质，然后检查每张图片的实时体积。如果某张图片仍然超过 100KB，请单独调整那一张，然后用“全部下载（ZIP）”按钮一次性下载全部。',
  },
  {
    id: 'kb-faq-14',
    question: '工具会改变图片的尺寸吗？',
    answer: '不会。CompressMyPic 完全保持图片的尺寸不变——只减小文件体积。你的照片保持与原图相同的宽度、高度和宽高比，所以一张 4000×3000 的照片仍然是 4000×3000，只是文件小得多。',
  },
  {
    id: 'kb-faq-15',
    question: '如何查看压缩后图片的体积？',
    answer: 'CompressMyPic 会在每张照片下方实时显示原始体积和压缩后体积——例如“4.2 MB → 98 KB”。你也可以在设备上查看下载的文件：在手机上，查看相册或文件管理器中的文件详情。',
  },
  {
    id: 'kb-faq-16',
    question: '100KB 的画质足够用于网站吗？',
    answer: '是的，几乎所有网页用途都足够。网站照片只以几百像素宽显示，所以 100KB 的图片在屏幕上看起来很清晰。只有全屏主图或用于打印的照片才需要更大的文件。压缩到 100KB，查看对比，你会发现画质完全过关。',
  },
  {
    id: 'kb-faq-17',
    question: '可以把截图缩小到 100KB 吗？',
    answer: '可以，而且截图是最简单的情况。它们有大面积的纯色区域，所以压缩效果极好——一张起初 1 MB 的截图，在“均衡”预设下常常能降到 100KB 以下。想要最小的结果，请试试 WebP 输出。',
  },
  {
    id: 'kb-faq-18',
    question: '压缩图片时，我的图片会上传到任何地方吗？',
    answer: '不会。所有压缩都在你自己设备的浏览器内完成，所以你的图片绝不会上传到服务器、被存储或被他人查看。它们只留在浏览器内存中，关闭或刷新标签页后即被清除。',
  },
  {
    id: 'kb-faq-19',
    question: '可以缩小的图片数量有限制吗？',
    answer: '没有。可以压缩的图片数量没有限制，也无需账号或注册。唯一的限制是每张图片 20 MB，这足以涵盖高分辨率相机照片和大型截图。',
  },
  {
    id: 'kb-faq-20',
    question: '把图片缩小到 100KB 免费吗？',
    answer: '是的，完全免费。没有费用，没有付费套餐，没有积分，压缩后的图片也没有水印。打开网站，把图片缩小到 100KB，想下载多少次都可以。',
  },
];

export const Guide100kbPageZh: React.FC<Guide100kbPageZhProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = '如何把图片压缩到 100KB：网站与邮件指南';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', '用免费在线压缩器把图片压缩到 100KB，用于网站和邮件。本分步指南教你从均衡预设开始，用画质滑块和 WebP 输出逐步缩小图片。了解 200KB、100KB、50KB 与 20KB 各自适合什么用途，以及何时不必强求精确的 100KB。无需注册、无水印，图片始终保留在你的设备上，附 20 个常见问题解答。');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/zh/zhinan/jiang-tupian-yasuo-zhi-100kb';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: '如何把图片压缩到 100KB，用于网站和邮件',
          description: '用 CompressMyPic 的画质滑块和 WebP 输出，把图片缩小到约 100KB。',
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
    script.id = 'guide-100kb-zh-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-zh-jsonld');
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
            onClick={() => onNavigate('/zh/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回图片压缩器</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            如何把图片压缩到 100KB，用于网站和邮件
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            一张 4 MB 的照片会拖慢你的网站，还会堵塞邮件。把它缩小到约 100KB，页面加载会变快，邮件也能即时发送——而且如果方法得当，没有人能看出差别。
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>为什么 100KB 是神奇的数字</span>
            </h2>
            <p>
              100KB 是大多数人追求的目标，因为它正好处于最佳平衡点：小到可以在网站上即时加载、轻松放进任何邮件，又大到在屏幕上看起来依然清晰。一张典型的手机照片起初为 3–5 MB，所以达到 100KB 意味着要去掉约 97% 的文件——而现代压缩主要去掉的是你的眼睛看不见的数据。
            </p>
            <p>
              开始之前先坦诚说明一点：CompressMyPic 没有可以输入“100KB”并得到精确体积的框。任何诚实的工具都无法承诺一个精确的数字，因为每张照片的压缩方式都不同。相反，工具会在每次调整后显示实时压缩体积，你可以用画质滑块自己把它调到 100KB。本指南会准确告诉你怎么做。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>分步指南：把图片缩小到 100KB</span>
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
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="把一张大照片上传到 CompressMyPic 以缩小到 100KB 的截图"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              上传你的照片——原始体积会立即显示，所以你知道还需要缩小多少。
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>常见目标一览</span>
            </h2>
            <p>
              100KB 不是人们需要的唯一目标。同样的方法适用于任何体积——以下是每个目标的预期情况：
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">目标</th>
                    <th className="px-4 py-3 font-semibold">典型画质</th>
                    <th className="px-4 py-3 font-semibold">适合</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">200KB</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">博客照片、大型网页图片</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">100KB</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">网站照片、邮件附件</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">50KB</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">缩略图、聊天、快速页面</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">20KB</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">图标、微小预览图</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              这些只是起点，不是承诺。一张简单的照片很容易达到 100KB；一张繁忙、细节丰富的照片需要更低的画质设置。请相信实时体积数字，而不是百分比。
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>网站与邮件小技巧</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>网站请用 WebP 输出——它是达到 100KB 的最快方式，而且所有现代浏览器都支持它。</li>
              <li>邮件请用 JPG，它是最安全的格式，因为所有邮件应用都能打开它。一张 100KB 的 JPG 可以即时添加附件，绝不会因为体积而被退回。</li>
              <li>把同一页面或同一封邮件的所有照片一起压缩，然后用“全部下载（ZIP）”按钮全部下载。</li>
              <li>不要追求精确的 100KB。一张清晰的 115KB 照片总比一张模糊的正好 100KB 照片好——加载时间的差别微乎其微。</li>
              <li>发布或发送照片之前，一定要全屏放大查看压缩前后对比。</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="实时压缩前后文件体积的截图，显示图片已缩小到约 100KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              实时压缩前后体积会显示你的进度——降低滑块，直到压缩后的体积接近 100KB。
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>何时无法达到 100KB</span>
            </h2>
            <p className="text-sm sm:text-base">
              有些图片根本无法在不难看的情况下达到 100KB：非常大、细节非常丰富的照片，或者必须保持 PNG 格式的透明 PNG。遇到这种情况，请不要勉强。一张清晰的 180KB 照片每次都胜过一张毁掉的 100KB 照片——对网站来说它加载仍然很快，对邮件来说它仍然远低于任何附件限制。目标是一张看起来依然好看的小文件，而不是一个神奇的数字。
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>常见问题</span>
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">相关指南</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/zh/zhinan/whatsapp-tupian-yasuo')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">如何在 WhatsApp 上压缩图片而不损失画质</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">先自己缩小照片，再作为文件发送，这样 WhatsApp 就无法再模糊它们。</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/zh/zhinan/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG、PNG 与 WebP 对比——应该用哪种格式？</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">对比文件体积、画质与透明支持，帮你每次都选对格式。</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/zh/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              免费压缩图片
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/zh/zhinan/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG、PNG 与 WebP 对比
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
