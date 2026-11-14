// Simplified Chinese (zh) Terms of Service page — /zh/shiyong-tiaokuan.
// Translated from the ENGLISH original only (src/pages/TermsPage.tsx,
// repo HEAD cf50185). Same sections, same component shape, same props
// (onNavigate). Legal meaning preserved. Back-link points at /zh/.

import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageZhProps {
  onNavigate: (path: string) => void;
}

export const TermsPageZh: React.FC<TermsPageZhProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '使用条款 - CompressMyPic';
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回图片压缩器</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#7c3aed] dark:text-[#a78bfa]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              使用条款
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            最后更新：2026年11月14日
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 接受条款
            </h2>
            <p>
              访问和使用 CompressMyPic，即表示您同意遵守本使用条款并受其约束。如果您不同意本条款的任何部分，请停止使用本服务。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 允许的使用
            </h2>
            <p>
              您可以将 CompressMyPic 用于个人和商业图片优化用途。您同意不将本服务用于任何非法活动，也不得以任何可能损害网站运行、安全或可用性的方式使用本服务。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. 知识产权
            </h2>
            <p>
              您对使用本工具压缩的所有图片、照片和图形保留 100% 的完整版权、所有权和知识产权。CompressMyPic 对您的创作成果不主张任何所有权、许可或权利。所有处理均在您的本地设备上进行。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. 保证免责声明
            </h2>
            <p>
              CompressMyPic 按“现状”和“现有条件”提供，不作任何明示或暗示的保证。尽管我们努力在所有浏览器上实现最大的兼容性和性能，但我们不保证本服务不会中断、没有错误，或满足特定的技术要求。
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 服务的可用性与变更
            </h2>
            <p>
              CompressMyPic 是一项免费服务，我们不保证它始终可用。我们可能随时更改、暂停或终止任何工具、功能或整个网站，无论是否提前通知——例如修复错误、替换在现代浏览器中已无法使用的技术，或保持服务免费。我们也可能设定合理的限制，例如每张图片的最大文件大小（目前主压缩器为 20 MB，格式转换器为 25 MB），并随着浏览器和设备的改进而调整这些限制。由于所有处理都在你的浏览器中进行，网站中断绝不会使你的原始图片面临风险：你的文件始终留在你的设备上。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 可接受的使用
            </h2>
            <p>
              你同意仅将 CompressMyPic 用于合法目的，并以不损害服务或其他人的方式使用。特别是，你不得试图使网站过载、损坏网站或对其进行逆向工程，不得探测其安全漏洞，不得使用自动化脚本发送大量请求，也不得使用本服务处理侵犯他人版权、包含非法内容或用于欺骗或骚扰的图片。你有责任确保自己有权使用所处理的每一张图片，并在压缩或转换之前备份任何重要的图片。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 责任限制
            </h2>
            <p>
              在法律允许的最大范围内，CompressMyPic 及其所有者不对因你使用本服务而产生的任何间接、附带或后果性损失承担责任——包括但不限于数据丢失、利润损失或重新制作图片的费用。由于本服务是免费的，我们对与本服务相关的任何索赔承担的总责任仅限于你为使用它而支付的金额，即零。这不限制法律上不可限制的任何责任，例如欺诈责任，或因疏忽造成死亡或人身伤害的责任。
            </p>
            <p>
              压缩本质上是一个有损过程：减小文件大小可能会降低其质量，某些格式（例如 JPEG）无法保留透明度。你有责任在删除或覆盖原始文件之前检查压缩结果；对于质量损失、透明度缺失或压缩对你选择处理的图片造成的任何其他变化，我们不承担责任。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. 第三方服务
            </h2>
            <p>
              本站使用第三方服务来运营，包括通过 Cloudflare 进行托管和内容分发、通过 Google AdSense 投放广告，以及通过 FormSubmit 发送消息。这些服务各有其自身的条款和隐私政策，你对它们的使用受这些文件以及本条款的约束。我们不对 CompressMyPic 链接到的第三方网站或服务的可用性、内容或做法承担责任。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 适用法律
            </h2>
            <p>
              本条款受阿拉伯联合酋长国法律管辖，本站即从该国运营，不考虑其法律冲突规则。因本条款或你对本服务的使用而产生或与之相关的任何争议，将由阿拉伯联合酋长国法院解决。如果本条款的任何部分被认定为不可执行，其余部分将继续完全适用。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. 本条款的变更
            </h2>
            <p>
              当服务发生变化时，我们可能会更新本条款——例如新增工具、更改文件大小限制或开始使用新的第三方服务。届时，我们会更新本页面顶部的「最后更新」日期。在条款变更后继续使用 CompressMyPic，即表示你接受更新后的条款。如果你不同意某项变更，请停止使用本服务。
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. 联系方式
            </h2>
            <p>
              如果您对本条款有任何疑问，请通过以下邮箱联系我们：{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
