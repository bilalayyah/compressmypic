import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageJaProps {
  onNavigate: (path: string) => void;
}

export const TermsPageJa: React.FC<TermsPageJaProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '利用規約 - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/ja/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>画像圧縮ツールに戻る</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              利用規約
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            最終更新日：2026年11月12日
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. 規約への同意
            </h2>
            <p>
              CompressMyPicにアクセスし、ご利用いただくことにより、お客様は本利用規約を遵守し、これに拘束されることに同意したものとみなされます。本規約のいずれかの部分に同意いただけない場合は、サービスのご利用をお控えください。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. 許可される利用
            </h2>
            <p>
              CompressMyPicは、個人利用および商用利用の両方で画像の最適化にお使いいただけます。違法な行為のためにサービスを利用したり、ウェブサイトの運営、セキュリティ、利用可能性を損なうおそれのある方法でサービスを利用したりしないことに同意するものとします。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. 知的財産権
            </h2>
            <p>
              お客様は、当社のツールで圧縮したすべての画像、写真、グラフィックについて、著作権、所有権、知的財産権の100％を保持します。CompressMyPicは、お客様の創作物について、所有権、ライセンス、その他のいかなる権利も主張しません。すべての処理はお使いの端末上でローカルに行われます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. 保証の免責
            </h2>
            <p>
              CompressMyPicは、明示または黙示を問わず、いかなる種類の保証もなく、「現状有姿」および「提供可能な範囲」で提供されます。当社はすべてのブラウザーでの最大限の互換性と性能を目指していますが、サービスが中断なく、エラーなく提供されること、または特定の技術要件を満たすことを保証するものではありません。
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              5. お問い合わせ
            </h2>
            <p>
              本規約についてご質問がある場合は、{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              までご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
