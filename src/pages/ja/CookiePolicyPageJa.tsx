import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageJaProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageJa: React.FC<CookiePolicyPageJaProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Cookieポリシー | CompressMyPic – Cookieの使い方';
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
            <span>画像圧縮ツールに戻る</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Cookieポリシー
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            最終更新日：2026年11月18日
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Cookieとは何ですか？
            </h2>
            <p>
              Cookieは、ウェブサイトがブラウザに対してデバイスへの保存を求める小さなテキストファイルです。以前にメッセージを見たことがあるかどうかなど、訪問に関する情報を記憶し、サイトやサービスが次回の訪問時にブラウザを認識できるようにします。このポリシーでは、CompressMyPicで使用されるCookie、その理由、および管理方法について説明します。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 当サイトが設定しないCookie
            </h2>
            <p>
              CompressMyPic自体はCookieを一切設定しません。画像ツールはすべてブラウザ内で動作します。圧縮にアカウント、ログイン、Cookieは不要です。あなたを記憶したり、追跡したり、設定を保存するためにCookieを設定することはありません。画像がブラウザから外部に出ることはなく、画像に関する情報がCookieに保存されることもありません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Googleアドセンスの広告Cookie
            </h2>
            <p>
              当サイトでは広告表示にGoogleアドセンスを使用しています。アドセンスとそのパートナーは、このウェブサイトや他のウェブサイトへの過去の訪問に基づき広告を配信するため、デバイスにCookieを設定する場合があります。Googleによる広告Cookieの使用により、Googleとそのパートナーは、このサイトや他のインターネット上のサイトへの訪問に基づいて広告を配信し、広告の表示頻度を測定できます。このサイトの広告枠は手動で選択しています。自動広告挿入は使用していません。パーソナライズド広告をオプトアウトするには、Google広告設定（
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://adssettings.google.com</a>
              ）または
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://www.aboutads.info/choices/</a>
              をご覧ください。パーソナライズされていない広告を選んでも広告が完全になくなるわけではありませんが、広告が閲覧履歴に基づかなくなります。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Googleアナリティクス4のCookie
            </h2>
            <p>
              当サイトでは、サイトの利用状況を集計的に把握するためにGoogleアナリティクス4（GA4）を使用しています。たとえば、どのツールが人気か、どのページが訪問されているかなどです。GA4は、訪問を区別するために、_gaなどのCookieをデバイスに設定する場合があります。データは匿名化され、要約形式でのみ使用されます。GA4を使ってあなた個人を特定することはありません。Googleアナリティクスはいつでも、Googleアナリティクス オプトアウト アドオン（https://tools.google.com/dlpage/gaoptout）をインストールするか、ブラウザ設定でCookieを無効にすることでオプトアウトできます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 同意（EEA、英国、スイス）
            </h2>
            <p>
              欧州経済領域、英国、スイスからアクセスする場合、GoogleはGDPRおよびGoogleのEUユーザー同意ポリシーに従い、パーソナライズド広告を表示する前に同意メッセージを表示します。同意は、このサイトのフッターにある「プライバシーとCookieの設定」リンクからいつでも変更または撤回できます。このリンクにより同意メッセージが再度表示されます。また、ブラウザのCookieを削除することでも撤回できます。同意の撤回は、撤回前に合法的に行われたことには影響しません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. その他の第三者サービス
            </h2>
            <p>
              このサイトの他のサービスも、独自のCookieまたは類似のストレージを使用する場合があります。お問い合わせフォームをスパムから保護するGoogle reCAPTCHAは、人間とボットを区別するためにCookieを設定する場合があります。その利用はGoogleの
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Googleプライバシーポリシー</a>
              と
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Google利用規約</a>
              に準拠します。このサイトをホストするCloudflareは、サイトを悪用から保護するためにセキュリティCookieを設定する場合があります。ツール下の匿名コメントでは名前のみを求め、その名前はコメントサービスによって保存されます。このサイトのCookieには保存されません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Cookieではないブラウザストレージ
            </h2>
            <p>
              ブラウザは、Cookieではない少量のローカル情報も保存します。コメントを投稿すると、ブラウザが入力した名前を記憶して次回入力しなくて済むようにしたり、サイトの言語を変更すると、その選択を次回のために記憶したりする場合があります。この情報はご自身のデバイス内にとどまり、サーバーに送信されることはなく、ブラウザのサイトデータを削除することでいつでも削除できます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Cookieの管理方法
            </h2>
            <p>
              デバイスにすでに保存されているCookieの削除や、今後のCookie設定のブロックは、ブラウザ設定から行えます。主要なブラウザ（Chrome、Firefox、Safari、Edge）はすべて、プライバシーまたはセキュリティ設定でこのオプションを提供しています。すべてのCookieをブロックしても、Cookieに依存しない画像ツールは壊れませんが、広告や分析などの第三者サービスの機能に影響する場合があります。ブラウザのプライベートモードまたはシークレットモードを使用することもできます。これにより、ウィンドウを閉じるとCookieが削除されます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. このポリシーの変更
            </h2>
            <p>
              サイトが変更された場合（たとえば、新しい広告パートナーや分析サービスを追加した場合）、このポリシーを更新することがあります。その際は、このページ上部の「最終更新日」を変更します。変更後にサイトを引き続き利用することは、更新されたポリシーに同意したことになります。
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. お問い合わせ
            </h2>
            <p>
              このポリシーについてご質問がある場合は、
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              までご連絡いただくか、
              <a href="/ja/puraibashi" onClick={(e) => { e.preventDefault(); onNavigate('/ja/puraibashi'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">プライバシーポリシー</a>
              をお読みください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
