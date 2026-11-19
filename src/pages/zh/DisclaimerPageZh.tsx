import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageZhProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageZh: React.FC<DisclaimerPageZhProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '免责声明 | CompressMyPic – 免费图片工具';
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
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回图片压缩器</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              免责声明
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            最后更新：2026年11月18日
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 一般信息
            </h2>
            <p>
              CompressMyPic 是一项免费的在线图片压缩与编辑服务。本网站上的工具、指南和文章仅供一般信息参考和实际使用。它们不是任何形式的专业建议——不是法律、医疗、财务或技术建议——也不会在您与 CompressMyPic 之间建立任何专业关系。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 不作保证
            </h2>
            <p>
              本服务按“原样”和“可用状态”提供，不作任何明示或暗示的保证。我们不保证工具始终可用、不中断、无错误或不含有害组件，也不保证特定图片一定能压缩到特定大小或质量。结果取决于原始图片、其格式以及您的浏览器，因此在使用任何工具之前，请务必保留原始文件的副本。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. 内容准确性
            </h2>
            <p>
              我们努力保持指南、文章和工具说明的准确与最新，但图片格式、浏览器和网络标准会随时间变化。尽管我们尽了最大努力，本网站的信息仍可能过时或包含错误。在依赖重要细节（例如某个平台的文件大小限制）之前，请务必查阅该平台自身的最新官方文档进行核实。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. 您的文件由您自己负责
            </h2>
            <p>
              图片在您的浏览器中本地处理，绝不会上传到我们的服务器。这也意味着我们无法为您恢复文件：如果您在使用我们的工具时覆盖、删除或丢失了原始图片，我们无法将其恢复。请备份所有重要图片，并且只处理您拥有或有权编辑的文件的副本。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 第三方服务与链接
            </h2>
            <p>
              本网站使用第三方服务——用于使用统计的 Google Analytics 4、用于联系表单的 FormSubmit，以及用于匿名评论的 Cloudflare Worker——并链接到外部网站。我们无法控制这些服务或网站，也不对它们的内容、可用性、隐私做法或准确性负责。使用它们时，适用其各自的条款和隐私政策。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 广告
            </h2>
            <p>
              本网站目前不展示任何广告。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 责任限制
            </h2>
            <p>
              在法律允许的最大范围内，CompressMyPic 及其运营者不对因使用或无法使用本网站或其工具而产生的任何直接、间接、附带或后果性损失或损害承担责任，包括但不限于文件、数据或利润的损失。如果您对服务不满意，唯一的补救办法就是停止使用。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. 用户评论
            </h2>
            <p>
              我们工具下方的评论由访客撰写，反映的是他们自己的观点，而非我们的观点。我们会对评论进行审核，并可能删除垃圾、辱骂或离题内容，但我们不认可用户评论的内容，也不对此承担责任。请勿在评论中分享密码、支付信息或敏感个人信息。
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 联系我们
            </h2>
            <p>
              如果您对本免责声明有任何疑问，请通过 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
               联系我们。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
