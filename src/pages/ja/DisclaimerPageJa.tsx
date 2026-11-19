import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageJaProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageJa: React.FC<DisclaimerPageJaProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '免責事項 | CompressMyPic – 無料の画像ツール';
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
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              免責事項
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            最終更新日：2026年11月18日
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 一般情報
            </h2>
            <p>
              CompressMyPicは、無料のオンライン画像圧縮・編集サービスです。このウェブサイトのツール、ガイド、記事は、一般的な情報提供と実用的な利用のみを目的としています。これらは、法律、医療、金融、技術など、いかなる種類の専門的な助言でもなく、あなたとCompressMyPicとの間に専門的な関係を生じさせるものでもありません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 保証なし
            </h2>
            <p>
              本サービスは「現状のまま」かつ「提供可能な範囲で」提供され、明示的か黙示的かを問わず、いかなる保証もありません。ツールが常に利用可能であること、中断がないこと、エラーがないこと、有害な要素がないこと、また特定の画像が特定のサイズや品質に圧縮されることを保証しません。結果は元の画像、その形式、およびお使いのブラウザによって異なりますので、ツールを使用する前に必ず元のファイルのコピーを保管してください。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. コンテンツの正確性
            </h2>
            <p>
              私たちはガイド、記事、ツールの説明を正確かつ最新の状態に保つよう努めていますが、画像形式、ブラウザ、ウェブ標準は時間とともに変化します。最善を尽くしても、このサイトの情報が古くなったり、誤りを含む場合があります。プラットフォームのファイルサイズ制限など重要な詳細については、信頼する前に必ずそのプラットフォーム自身の最新の公式ドキュメントで確認してください。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. ファイルはご自身の責任です
            </h2>
            <p>
              画像はお使いのブラウザ内でローカルに処理され、サーバーにアップロードされることはありません。そのため、ファイルの復旧はできません。ツール使用中に元の画像を上書き、削除、紛失した場合、復元することはできません。大切な画像は必ずバックアップを取り、所有しているファイル、または編集する許可のあるファイルのコピーのみを処理してください。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 第三者サービスとリンク
            </h2>
            <p>
              このサイトは、利用統計のためのGoogleアナリティクス4、お問い合わせフォームのためのFormSubmit、匿名コメントのためのCloudflare Workerといった第三者サービスを利用し、外部サイトへリンクしています。これらのサービスやサイトを私たちは管理しておらず、その内容、利用可能性、プライバシー慣行、正確性について責任を負いません。これらを利用する際は、それぞれの規約とプライバシーポリシーが適用されます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 広告
            </h2>
            <p>
              このサイトでは現在、広告を表示していません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 責任の制限
            </h2>
            <p>
              法律で認められる最大限の範囲において、CompressMyPicおよびその運営者は、このウェブサイトまたはそのツールの使用、あるいは使用できないことに起因する直接的、間接的、付随的、または結果的な損失や損害（ファイル、データ、利益の損失を含みますが、これらに限定されません）について責任を負いません。サービスにご不満がある場合の唯一の救済手段は、利用を中止することです。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. ユーザーコメント
            </h2>
            <p>
              ツールの下に投稿されるコメントは訪問者によって書かれたもので、訪問者自身の意見を反映しており、私たちの意見ではありません。コメントはモデレーションを行い、スパム、嫌がらせ、トピック外の内容は削除する場合がありますが、ユーザーコメントの内容を推奨したり責任を負ったりすることはありません。コメント欄にパスワード、支払い情報、機密性の高い個人情報を投稿しないでください。
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. お問い合わせ
            </h2>
            <p>
              この免責事項についてご質問がある場合は、
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              までご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
