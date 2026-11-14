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
            最后更新：2026年11月12日
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

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 联系方式
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
