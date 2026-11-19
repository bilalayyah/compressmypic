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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>画像圧縮ツールに戻る</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              プライバシーポリシー
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            最終更新日：2026年11月15日
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. ブラウザー上での画像処理
            </h2>
            <p>
              CompressMyPicは、無料のオンライン画像圧縮ツールです。画像はHTML5 Canvasを使ってお使いのブラウザー上でローカルに処理されます。画像が当社のサーバーにアップロードされることは決してなく、当社は画像を収集、保存、共有しません。ブラウザーのタブを閉じるか更新すると、メモリー上の一時的なデータはすべて消去されます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 個人データの収集なし
            </h2>
            <p>
              圧縮ツールをご利用いただくにあたり、アカウント、パスワード、メールアドレス、電話番号は必要ありません。お問い合わせフォームから任意でご提供いただいた連絡先情報は、お問い合わせへの返信にのみ使用します。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. 広告
            </h2>
            <p>
              CompressMyPicでは現在、広告を表示していません。このサイトでは広告Cookieを設定していません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. アナリティクス
            </h2>
            <p>
              当社は、サイトがどのように利用されているかを集計形式で把握するために、Google Analytics 4（GA4）を使用しています。たとえば、どのツールが人気か、どのページが訪問されているかなどです。GA4は、訪問したページ、滞在時間、デバイスやブラウザに関する一般的な情報などの匿名化された利用データを収集します。訪問を区別するために、お使いのデバイスにCookie（_gaなど）を設定する場合があります。当社は、個人を特定するためにGA4を使用しません。Google Analytics オプトアウト アドオン（https://tools.google.com/dlpage/gaoptout）をインストールするか、ブラウザの設定でCookieを無効にすることで、いつでもGoogle Analyticsをオプトアウトできます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 第三者リンク
            </h2>
            <p>
              当社のウェブサイトには、外部サイトへのリンクが含まれている場合があります。当社は、第三者プラットフォームのプライバシー慣行やコンテンツについて責任を負いません。
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookieと同意
            </h2>
            <p>
              CompressMyPic自体は、画像ツール用にCookieを一切設定しません。圧縮はすべてお使いのブラウザー内で行われ、当社側でCookie、アカウント、保存された設定を必要としません。このサイトのCookieはサードパーティのサービスによるものです。たとえば、Googleアナリティクスが利用状況の統計のためにCookieを設定する場合があります。これらのCookieはお使いのブラウザーによってデバイスに保存され、ブラウザーの設定からいつでも削除できます。
            </p>
            <p>
              CompressMyPicでは現在、広告を表示していないため、どの地域の訪問者にも広告に関する同意は求めていません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. GDPRに基づくあなたの権利
            </h2>
            <p>
              欧州経済領域または英国にお住まいの場合、一般データ保護規則（GDPR）により、ご自身の個人データに対する権利が認められています。当社が保有するあなたの個人データのコピーを請求したり、誤りがある場合に訂正を求めたり、削除を求めたり、利用の制限を求めたり、処理に異議を唱えたりできます。処理があなたの同意に基づいている場合、同意はいつでも撤回できます。撤回しても、それ以前に適法に行われた処理には影響しません。
            </p>
            <p>
              当社のツールは画像をローカルで処理し、ユーザーアカウントもありませんので、当社が通常保有する個人データは、お問い合わせフォームから送信されたお名前、メールアドレス、メッセージのみです。これらの権利を行使するには、<a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>までメールでご連絡ください。30日以内に返信いたします。また、当社があなたのデータを不公平に取り扱ったと思われる場合は、お住まいの地域のデータ保護当局に苦情を申し立てる権利もあります。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. データの保存期間
            </h2>
            <p>
              当社は、個人データを収集した目的に必要な期間のみ保存します。お問い合わせフォームのメッセージは、お問い合わせへの回答が終わり、会話が終了するまでの間、およびその後の短期間、フォローアップの質問に備えてのみ保存されます。マーケティングに使用されることは決してなく、第三者と共有されることもありません。あなたの画像は一切保存されません。ツールを使用している間、ブラウザーのメモリー内にのみ存在し、タブを閉じるか更新すると消去されます。集計された分析データには個人情報は含まれず、要約形式でのみ保存されます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. セキュリティとreCAPTCHA
            </h2>
            <p>
              このサイトはHTTPSで提供されており、お使いのブラウザーとサイト間の接続は暗号化されています。お問い合わせフォームはFormSubmitを通じて提供され、あなたのメッセージは当社のメールアドレスに転送されます。また、フォームはGoogle reCAPTCHAによって保護されており、スパムや自動化された不正利用をブロックします。フォームを送信すると、reCAPTCHAは人間とボットを区別するために、ブラウザーやデバイスの詳細などのハードウェアおよびソフトウェア情報を収集する場合があります。これはGoogleの<a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                プライバシーポリシー
              </a>と<a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                利用規約
              </a>に準拠します。当社がお問い合わせフォームでパスワード、支払い情報、機密性の高い個人書類の送信を求めることは決してありません。また、メッセージにそれらを含めないでください。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. 子どものプライバシー
            </h2>
            <p>
              CompressMyPicは一般向けのツールであり、13歳未満の子どもを対象としていません。当社は、子どもから個人情報を意図的に収集することはありません。保護者の方で、お子様がお問い合わせフォームを通じて個人情報を送信したと思われる場合は、メールでご連絡ください。速やかに削除いたします。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. 本ポリシーの変更
            </h2>
            <p>
              当社は、サイトが変更された場合に本ポリシーを更新することがあります。たとえば、新しい分析サービス、新しい広告パートナー、または新しい連絡方法を追加する場合です。その際は、このページ上部の「最終更新日」を変更し、重要な変更についてはここで平易な言葉で説明します。変更後にサイトを引き続き利用することは、更新されたポリシーに同意したことになります。
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. お問い合わせ
            </h2>
            <p>
              このポリシーについてご質問がある場合は、{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
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
