// Simplified Chinese (zh) About page — /zh/guanyu-women.
// Translated from the ENGLISH original only (src/pages/AboutPage.tsx,
// repo HEAD cf50185). Same sections, same component shape, same props
// (onNavigate). Back-link and CTAs point at the Chinese home /zh/;
// privacy link points at /zh/yinsi-zhengce; contact at /zh/lianxi-women.
// 在线 is used consistently throughout the Chinese prose.

import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageZhProps {
  onNavigate: (path: string) => void;
}

export const AboutPageZh: React.FC<AboutPageZhProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '关于 CompressMyPic – 免费在线图片压缩器';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', '关于 CompressMyPic——免费在线图片压缩器，支持 JPG、PNG 与 WebP。在线免费压缩图片，无需注册、无水印，文件不上传服务器。');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
            关于 CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            CompressMyPic 是一款免费、私密的图片压缩器。直接在浏览器中压缩 JPG、PNG 与 WebP 图片——快速、安全，无需把文件上传到任何地方。
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span>什么是 CompressMyPic？</span>
            </h2>
            <p>
              CompressMyPic 是一款免费在线图片压缩器和图片优化工具，可以在不损失画质的情况下减小图片体积。它是日常常用格式的照片压缩器和照片体积缩小工具，支持 JPG、PNG 与 WebP。你可以用它把 JPG 压缩到 100KB、在线免费压缩 PNG、压缩 WebP 图片，或者在 WhatsApp、Instagram、Facebook 或邮件分享照片之前先减小照片的文件体积。
            </p>
            <p>
              传统的图片压缩网站会把你敏感的个人照片或公司图片上传到别人拥有的服务器上。这种做法确实令人担忧，而这正是我们反其道而行之、打造 CompressMyPic 的原因——这款工具的所有处理都在你自己的设备上完成。
            </p>
            <p>
              当你选择或拖放一张图片时，浏览器会分配一块临时内存缓冲区，把图片绘制到 HTML Canvas 元素上，应用压缩算法，然后导出新文件——全部都在你自己的浏览器标签页内完成。压缩图片的过程中不涉及任何网络基础设施、数据库或云服务器。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>支持的格式：JPG、PNG 与 WebP</span>
            </h2>
            <p>
              作为 JPG 压缩器，CompressMyPic 可以让你在线免费压缩 JPG、减小 JPEG 文件体积，同时保持照片清晰——试试“均衡”预设，或者拉低画质滑块，查看实时压缩前后体积对比，达到 100KB 或 200KB 等目标。作为 PNG 压缩器，它可以让你在线免费压缩 PNG，同时为标志和图形保留透明背景。压缩 WebP 图片时，你得到的文件是三者中最小的：WebP 在同等画质下通常比 JPEG 小 25–35%，是优化网页图片的最佳选择。
            </p>
            <p>
              你可以保留每张图片的原始格式，也可以在 JPG、PNG 与 WebP 之间转换。画质滑块（10% 至 100%）、低、均衡、高三种预设，以及实时压缩前后体积显示，让你完全掌控文件体积与图片画质之间的平衡——而且我们绝不会声称提供本工具并不具备的精确目标 KB 输入框。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>我们的核心原则</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">绝对隐私</div>
                <p className="text-xs text-slate-600">
                  没有任何文件会接触外部服务器或数据库。你的照片和敏感图片始终只留在你的本地设备上。因为压缩在本地完成，你的作品不会被任何人看到。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">简单免费</div>
                <p className="text-xs text-slate-600">
                  无需安装软件，没有付费套餐，没有隐藏费用，无需创建账号，无需邮箱验证，也没有试用限制。在线免费压缩图片——真正免费，无需注册，压缩后的图片也没有水印。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">画质由你掌控</div>
                <p className="text-xs text-slate-600">
                  我们提供精细的控制：实时拖动“画质”滑块，选择低、均衡或高预设，挑选输出文件格式，并排比较每张图片，立即发现差异。按你的方式减小图片体积而不损失画质。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">批量图片压缩器</div>
                <p className="text-xs text-slate-600">
                  一次用相同设置压缩多张图片，并通过“全部下载（ZIP）”按钮一次性下载全部——这是为照片库、产品目录和网站图片文件夹准备的批量图片压缩器。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">自动安全检查</div>
                <p className="text-xs text-slate-600">
                  压缩器会检测图片中的透明部分。如果你为透明 PNG 选择了 JPEG 输出，我们会显示警告，因为 JPEG 不支持透明背景——这样你就不会意外丢失透明通道。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">快速性能</div>
                <p className="text-xs text-slate-600">
                  因为所有处理都在你的设备本地完成，无需等待文件上传到服务器再下载回来。无论在电脑还是手机上，即使是每张最大 20 MB 的大文件，也能快速压缩照片。
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>CompressMyPic 适合谁？</span>
            </h2>
            <p>
              CompressMyPic 适合所有需要缩小图片的人：想优化网页图片、减小网站页面图片体积的博主和网站站长；需要在分享或交付样片之前减小照片文件体积的摄影师；为网站或商店上架图片而压缩照片的在线卖家；为邮件附件压缩图片的学生和上班族；以及任何想压缩图片以便在 WhatsApp、Instagram 或 Facebook 上更快发送、更省流量的用户。
            </p>
            <p>
              它适用于电脑和手机浏览器，无需安装，也从不要求注册——只需打开网站，上传图片，下载更小的文件即可。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              <span>隐私与安全</span>
            </h2>
            <p>
              在 CompressMyPic，我们相信隐私是一项基本权利，而不是可有可无的功能。如今，许多网站默认收集数据，哪怕只是一款图片压缩工具也不例外。我们采用隐私优先的做法，依靠现代浏览器技术，在你的电脑本地处理你的图片。
            </p>
            <p>
              你的文件只保留在浏览器内存中，关闭标签页或刷新页面后会立即清除。因为图片处理完全不在远程服务器上进行，即使我们想收集图片数据也做不到。这就是这款工具的设计，也是我们的承诺。
            </p>
            <p>
              想确切了解我们如何处理隐私，请访问我们的{' '}
              <button
                type="button"
                onClick={() => onNavigate('/zh/yinsi-zhengce')}
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                隐私政策
              </button>
              {' '}页面。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>我们的使命</span>
            </h2>
            <p>
              我们相信，最好的工具就是最简单、最快速、最透明的工具。我们的使命是为所有人提供一款快速、可靠、完全免费的图片压缩器——没有隐藏的代价，没有追踪你的广告，没有服务器上传，也不在隐私上妥协。无论你压缩一张 JPG 还是整批 WebP 图片，工具都应该直接好用。
            </p>
            <p>
              有问题、有想法，或者发现了我们可以改进的地方？我们很乐意听到你的声音。你可以直接通过本站联系我们。
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/zh/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              开始压缩图片
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/zh/lianxi-women')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              联系我们
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
