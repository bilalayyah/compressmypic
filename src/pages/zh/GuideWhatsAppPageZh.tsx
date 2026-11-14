// Simplified Chinese (zh) WhatsApp guide — /zh/zhinan/whatsapp-tupian-yasuo.
// Translated from the ENGLISH original only (src/pages/GuideWhatsAppPage.tsx,
// repo HEAD cf50185). Same sections, same component shape, same props
// (onNavigate), 8 how-to steps, 20 FAQs. Back-link and CTAs point at the
// Chinese home /zh/; related guides use the fixed /zh/zhinan/... slugs.
// 在线 is used consistently throughout the Chinese prose.

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideWhatsAppPageZhProps {
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
    text: '在手机或电脑浏览器中打开 compressmypic.online。无需安装任何东西，也无需创建账号——工具直接打开就能用。',
  },
  {
    title: '上传照片',
    text: '点按“浏览文件”，从相册中选择照片，或把照片拖放到页面上。一次可以上传多张照片，每张图片最大 20 MB。',
  },
  {
    title: '从“均衡”预设开始',
    text: '“均衡”预设（画质约 70%）是 WhatsApp 照片很好的起点。它能大幅缩小文件，同时照片在手机屏幕上看起来依然清晰。',
  },
  {
    title: '查看实时压缩前后体积',
    text: '每张照片都会并排显示原始体积和压缩后的新体积。如果文件还是比你想要的大，把画质滑块再往下拉一点，体积会立即更新。',
  },
  {
    title: '照片保持 JPG 格式',
    text: '普通照片请保持 JPG 输出格式。JPG 是 WhatsApp 处理得最好的格式，照片文件也最小。只有图片需要透明背景（比如标志）时才用 PNG。',
  },
  {
    title: '对比压缩前后效果',
    text: '打开压缩前后对比，检查图片看起来是否依然清晰。放大查看人脸和文字——如果看不出明显差别，画质设置就合适。',
  },
  {
    title: '下载更小的照片',
    text: '点按照片上的“下载”，如果一次压缩了多张照片，可以使用“全部下载（ZIP）”。更小的文件会保存到你的设备上——原始照片绝不会被改动。',
  },
  {
    title: '用聪明的方式在 WhatsApp 上发送',
    text: '如果想获得最好的画质，请把压缩后的照片作为文件发送：在 WhatsApp 中点按“附加”，再点“文件”，然后选择该文件。WhatsApp 会原样发送文件，你的照片会和压缩时一模一样。如果作为照片发送，WhatsApp 会再压缩一次。',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: '为什么 WhatsApp 会降低照片画质？',
    answer: '用普通方式发送照片时，WhatsApp 会重新压缩照片以节省流量和存储空间，常常把照片缩得很小、画质也降低了。这就是为什么清晰的相机照片发送后看起来会发软或模糊。',
  },
  {
    id: 'wa-faq-2',
    question: 'WhatsApp 会压缩以文件形式发送的图片吗？',
    answer: '不会。通过“附加”再选“文件”发送图片时，WhatsApp 会原样发送文件，不做任何额外压缩。这是分享原画质照片的最好方式。',
  },
  {
    id: 'wa-faq-3',
    question: 'WhatsApp 上可以发送的最大图片有多大？',
    answer: 'WhatsApp 允许发送最大 2 GB 的文件，所以几百 KB 的压缩照片完全没有问题。用普通方式发送照片时，WhatsApp 会自己重新压缩，所以实际上的限制是画质，而不是体积。',
  },
  {
    id: 'wa-faq-4',
    question: '如何在 WhatsApp 上发送原画质照片？',
    answer: '先用 CompressMyPic 自己压缩照片，使其体积合理，然后在 WhatsApp 中作为文件而不是照片发送。点按“附加”，选择“文件”，再选中该文件。照片会原样到达，WhatsApp 不会再压缩它。',
  },
  {
    id: 'wa-faq-5',
    question: '应该先自己压缩，还是让 WhatsApp 来压缩？',
    answer: '先自己压缩。WhatsApp 的压缩非常激进，而且你无法控制。先用 CompressMyPic 压缩，你可以选择画质、检查效果，然后作为文件发送，这样 WhatsApp 就不会再碰它。',
  },
  {
    id: 'wa-faq-6',
    question: 'WhatsApp 照片应该用什么画质设置？',
    answer: '从“均衡”预设约 70% 开始。重要的照片请用 80–85%，并查看压缩前后对比。日常随手拍、讲究速度时，50–60% 在手机屏幕上看起来依然不错，而且文件小得多。',
  },
  {
    id: 'wa-faq-7',
    question: '压缩两次会让照片更差吗？',
    answer: '会。每一轮 JPEG 压缩都会丢掉一点细节。这就是为什么你应该只用 CompressMyPic 压缩一次，然后作为文件发送，而不是让 WhatsApp 把已经压缩过的照片再压缩一次。',
  },
  {
    id: 'wa-faq-8',
    question: '可以在手机上压缩 WhatsApp 照片吗？',
    answer: '可以。CompressMyPic 可以在安卓和 iPhone 的浏览器中使用。打开网站，从相机胶卷中选择照片，压缩后下载更小的文件，再通过 WhatsApp 分享。无需安装应用。',
  },
  {
    id: 'wa-faq-9',
    question: '压缩后的照片在 WhatsApp 状态里看起来还好吗？',
    answer: '只要不过度压缩，看起来就很好。WhatsApp 状态以适中的分辨率显示照片，所以用“均衡”预设（约 70%）压缩的照片在手机屏幕上和原图看起来一样。有人脸或文字的状态照片，请避免低于 50%。',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp 提示图片太大，该怎么办？',
    answer: '把图片上传到 CompressMyPic，降低画质滑块，直到文件只有几百 KB，然后下载并重新发送。如果作为照片还是发不出去，改为作为文件发送，文件方式接受大得多的文件。',
  },
  {
    id: 'wa-faq-11',
    question: 'WhatsApp 应该用 JPG 还是 PNG？',
    answer: '照片用 JPG。JPG 的相机照片文件小得多，WhatsApp 对它的处理也最好。只有需要透明背景的图片（比如标志）才用 PNG，因为 PNG 文件大得多。',
  },
  {
    id: 'wa-faq-12',
    question: '可以在 WhatsApp 上发送 WebP 图片吗？',
    answer: 'WhatsApp 可以接收 WebP 文件，但它们可能无法像普通照片那样预览，有些手机处理起来也不太正常。想让对方直接看到照片，JPG 是更安全的选择。WebP 更适合网站，而不是 WhatsApp。',
  },
  {
    id: 'wa-faq-13',
    question: '如何一次压缩多张 WhatsApp 照片？',
    answer: '把所有照片一次性上传到 CompressMyPic，对它们应用相同的预设，然后用“全部下载（ZIP）”按钮一次性下载全部。再从 WhatsApp 中逐个发送，或作为文件发送。',
  },
  {
    id: 'wa-faq-14',
    question: 'WhatsApp 压缩视频的方式也一样吗？',
    answer: '是的，用普通方式发送的视频也会被 WhatsApp 压缩，而且可能压缩很多。CompressMyPic 只处理图片（JPG、PNG、WebP），不处理视频。想保持视频的原始画质，请作为文件发送。',
  },
  {
    id: 'wa-faq-15',
    question: '压缩照片会删除手机里的原图吗？',
    answer: '不会。CompressMyPic 会创建一个新的、更小的副本并下载到你的设备上。你的原始照片在相册中原样保留，不会被改动。',
  },
  {
    id: 'wa-faq-16',
    question: '压缩照片时，我的照片会上传到服务器吗？',
    answer: '不会。所有压缩都在你自己设备的浏览器内完成，所以你的照片绝不会被上传、存储或被他人看到。它们只留在浏览器内存中，关闭或刷新标签页后即被清除。',
  },
  {
    id: 'wa-faq-17',
    question: 'WhatsApp 照片小到多大比较合适？',
    answer: '日常分享时，每张照片 100–300 KB 是很好的目标：发送快、流量省，在手机上看起来依然清晰。想打印或保存的照片，请保持在 500 KB–1 MB 左右，并使用更高的画质设置。',
  },
  {
    id: 'wa-faq-18',
    question: '为什么我发送的 WhatsApp 照片看起来模糊？',
    answer: '因为你作为照片发送时，WhatsApp 对它们重新压缩了。解决办法是先自己以可控的画质压缩照片，然后作为文件发送，这样 WhatsApp 就不会再压缩它。',
  },
  {
    id: 'wa-faq-19',
    question: '可以为 WhatsApp 压缩截图吗？',
    answer: '可以。像上传照片一样把截图上传到 CompressMyPic。截图压缩效果非常好，因为它们有大面积的纯色区域——先试试“均衡”预设，想要最小的文件可以切换到 WebP 输出。',
  },
  {
    id: 'wa-faq-20',
    question: 'CompressMyPic 压缩 WhatsApp 照片免费吗？',
    answer: '是的，完全免费。无需注册、无水印，压缩照片的数量没有限制，也不需要账号。只需打开网站，压缩并下载即可。',
  },
];

export const GuideWhatsAppPageZh: React.FC<GuideWhatsAppPageZhProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = '如何在 WhatsApp 上压缩图片而不损失画质';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', '学习如何在 WhatsApp 上压缩图片而不损失画质：先用免费在线工具以均衡预设压缩照片，查看实时压缩前后体积，再作为文件发送，避免 WhatsApp 二次压缩。本指南免费、私密、无需注册，附分步操作与 20 个常见问题解答，让照片保持清晰、发送更快。日常分享以每张 100–300 KB 为目标，既省流量又清晰。');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/zh/zhinan/whatsapp-tupian-yasuo';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: '如何在 WhatsApp 上压缩图片而不损失画质',
          description: '用 CompressMyPic 压缩照片，然后在 WhatsApp 上作为文件发送，让照片保持清晰。',
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
    script.id = 'guide-whatsapp-zh-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-zh-jsonld');
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
            如何在 WhatsApp 上压缩图片而不损失画质
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            WhatsApp 会缩小你发送的每一张照片——往往缩得比实际需要的多得多。先自己压缩照片，再用正确的方式发送，照片就会保持清晰、发送快速，还能节省流量。
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>为什么 WhatsApp 会让你的照片变模糊</span>
            </h2>
            <p>
              用普通方式在 WhatsApp 上发送照片时，WhatsApp 会在发送前重新压缩照片。一张 3 MB 的相机照片，送达时可能变成 100 KB 的文件，细节发软、色彩出现色块。WhatsApp 这样做是为了节省流量和存储空间，但你对损失多少画质没有任何发言权。
            </p>
            <p>
              还有第二种大多数人从未用过的发送照片方式：作为文件发送。文件会原样送达，不做任何额外压缩。诀窍是先自己缩小照片——用你自己控制的画质设置——然后作为文件发送。这样既能得到小文件，又能得到清晰的照片。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>分步指南：为 WhatsApp 压缩照片</span>
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
              alt="在 WhatsApp 上发送之前，把照片上传到 CompressMyPic 的截图"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              把照片上传到 CompressMyPic——拖放，或从相册中选择。
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>应该用什么画质设置？</span>
            </h2>
            <p>
              没有一个放之四海而皆准的数字——这取决于照片本身和用途。以下可以作为起点，每次都要查看压缩前后对比：
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">日常照片：70%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  “均衡”预设。体积大幅减小，照片在任何手机屏幕上看起来依然清晰，是 WhatsApp 的最佳默认选择。
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">重要照片：80–85%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  家人合影、旅行照片、任何想保留的照片。文件更大，但人脸和风景的精细细节得以保留。
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">快速分享：50–60%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  表情包、快速动态、网速较慢时发送的照片。文件小得多，在手机屏幕尺寸下看起来依然不错。
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>获得最佳效果的小技巧</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>只压缩一次，而且仅此一次。把已经压缩过的照片再压缩一次，几乎省不了体积，却会丢掉细节。</li>
              <li>如果画质重要，一定要把压缩后的文件作为文件发送——这是阻止 WhatsApp 再次压缩它的唯一办法。</li>
              <li>用相同设置一次压缩多张照片，然后用“全部下载（ZIP）”按钮全部下载。</li>
              <li>对于带文字的截图和图形，试试 WebP 输出——它能保持锐利的边缘，而且文件比 JPG 更小。</li>
              <li>你的原始照片绝不会被改动。CompressMyPic 会保存一份新的、更小的副本，所以你可以随时回去尝试不同的画质。</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="CompressMyPic 中画质滑块与实时压缩前后文件体积的截图"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              移动画质滑块，实时查看压缩前后体积，直到文件达到你想要的大小。
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>要避免的常见错误</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>压缩后仍然作为照片发送——WhatsApp 会再压缩一次，让你的努力白费。</li>
              <li>把有人脸的照片画质降到 40% 以下——低画质下皮肤和精细细节很快就会出现色块。</li>
              <li>相机照片用 PNG——PNG 的照片文件比 JPG 大得多，在 WhatsApp 上没有任何好处。</li>
              <li>忘记检查结果——发送前一定要查看压缩前后对比，尤其是有文字的照片。</li>
            </ul>
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
                onClick={() => onNavigate('/zh/zhinan/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG、PNG 与 WebP 对比——应该用哪种格式？</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">对比文件体积、画质与透明支持，帮你每次都选对格式。</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/zh/zhinan/jiang-tupian-yasuo-zhi-100kb')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">如何把图片压缩到 100KB，用于网站和邮件</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">分步指南，帮你达到 100KB 而不毁掉照片。</p>
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
              onClick={() => onNavigate('/zh/zhinan/jiang-tupian-yasuo-zhi-100kb')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              把图片压缩到 100KB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
