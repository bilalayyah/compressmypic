import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageJaProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageJa: React.FC<PrivacyPageJaProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'プライバシーポリシー - CompressMyPic';
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
            <Shield className="w-6 h-6 text-emerald-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              プライバシーポリシー
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            最終更新日：2026年11月12日
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. ブラウザー上での画像処理
            </h2>
            <p>
              CompressMyPicは、無料のオンライン画像圧縮ツールです。画像はHTML5 Canvasを使ってお使いのブラウザー上でローカルに処理されます。画像が当社のサーバーにアップロードされることは決してなく、当社は画像を収集、保存、共有しません。ブラウザーのタブを閉じるか更新すると、メモリー上の一時的なデータはすべて消去されます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. 個人データの収集なし
            </h2>
            <p>
              圧縮ツールをご利用いただくにあたり、アカウント、パスワード、メールアドレス、電話番号は必要ありません。お問い合わせフォームから任意でご提供いただいた連絡先情報は、お問い合わせへの返信にのみ使用します。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. 広告（Google AdSense）
            </h2>
            <p>
              当社は、有効化された後に広告を表示するため、Google AdSenseを使用しています。Googleを含む第三者ベンダーは、ユーザーが過去にこのウェブサイトや他のウェブサイトを訪問した際の情報に基づいて広告を配信するためにCookieを使用します。Googleによる広告Cookieの使用により、Googleおよびそのパートナーは、ユーザーのこのサイトやインターネット上の他のサイトへの訪問に基づいて広告を配信できます。パーソナライズド広告を無効にするには、Google広告設定（
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://adssettings.google.com
              </a>
              ）または{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              をご覧ください。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. アナリティクス
            </h2>
            <p>
              現在、当社はアナリティクスCookieを使用していません。変更があった場合は、このポリシーを更新します。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              5. 第三者リンク
            </h2>
            <p>
              当社のウェブサイトには、外部サイトへのリンクが含まれている場合があります。当社は、第三者プラットフォームのプライバシー慣行やコンテンツについて責任を負いません。
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              6. お問い合わせ
            </h2>
            <p>
              このポリシーについてご質問がある場合は、{' '}
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
