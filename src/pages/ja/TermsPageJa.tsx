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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>画像圧縮ツールに戻る</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#7c3aed] dark:text-[#a78bfa]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              利用規約
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            最終更新日：2026年11月14日
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 規約への同意
            </h2>
            <p>
              CompressMyPicにアクセスし、ご利用いただくことにより、お客様は本利用規約を遵守し、これに拘束されることに同意したものとみなされます。本規約のいずれかの部分に同意いただけない場合は、サービスのご利用をお控えください。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 許可される利用
            </h2>
            <p>
              CompressMyPicは、個人利用および商用利用の両方で画像の最適化にお使いいただけます。違法な行為のためにサービスを利用したり、ウェブサイトの運営、セキュリティ、利用可能性を損なうおそれのある方法でサービスを利用したりしないことに同意するものとします。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. 知的財産権
            </h2>
            <p>
              お客様は、当社のツールで圧縮したすべての画像、写真、グラフィックについて、著作権、所有権、知的財産権の100％を保持します。CompressMyPicは、お客様の創作物について、所有権、ライセンス、その他のいかなる権利も主張しません。すべての処理はお使いの端末上でローカルに行われます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. 保証の免責
            </h2>
            <p>
              CompressMyPicは、明示または黙示を問わず、いかなる種類の保証もなく、「現状有姿」および「提供可能な範囲」で提供されます。当社はすべてのブラウザーでの最大限の互換性と性能を目指していますが、サービスが中断なく、エラーなく提供されること、または特定の技術要件を満たすことを保証するものではありません。
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. サービスの利用可能性と変更
            </h2>
            <p>
              CompressMyPicは無料のサービスであり、常時利用可能であることを保証するものではありません。当社は、ツール、機能、またはウェブサイト全体を、通知の有無にかかわらずいつでも変更、一時停止、または中止することがあります。たとえば、バグの修正、最新のブラウザーで動作しなくなった技術の置き換え、サービスを無料に保つためなどです。また、1枚あたりの最大ファイルサイズ（現在、メインの圧縮ツールは20MB、形式変換ツールは25MB）など、合理的な制限を設けることがあり、ブラウザーやデバイスの進化に合わせてこれらの制限を変更することもあります。すべての処理はお使いのブラウザー内で行われるため、ウェブサイトに障害が発生しても、元の画像が危険にさらされることは決してありません。ファイルはあなたのデバイスに残ります。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 許容される利用
            </h2>
            <p>
              あなたは、CompressMyPicを合法的な目的にのみ使用し、サービスや他の人に害を与えない方法で使用することに同意します。具体的には、ウェブサイトに過負荷をかけたり、損傷させたり、リバースエンジニアリングしたり、セキュリティ上の弱点を探ったり、自動化されたスクリプトを使って大量のリクエストを送信したり、他人の著作権を侵害する画像、違法な内容を含む画像、または欺瞞や嫌がらせを目的とした画像を処理するためにサービスを使用したりしてはなりません。処理するすべての画像を使用する権利があることを確認し、圧縮または変換する前に重要な画像のバックアップを保管する責任はあなたにあります。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 責任の制限
            </h2>
            <p>
              法律で認められる最大限の範囲において、CompressMyPicおよびその所有者は、サービスの利用に起因する間接的、付随的、または結果的な損失について責任を負いません。これには、データの損失、利益の損失、画像の再作成にかかる費用などが含まれますが、これらに限定されません。サービスは無料であるため、サービスに関連するいかなる請求に対する当社の責任総額は、あなたが利用のために支払った金額、すなわちゼロに限定されます。これは、詐欺に対する責任や過失による死亡または人身傷害に対する責任など、法律で制限できない責任を制限するものではありません。
            </p>
            <p>
              圧縮は本質的に非可逆的な処理です。ファイルサイズを小さくすると品質が低下する可能性があり、JPEGなどの一部の形式では透明度を保持できません。元のファイルを削除または上書きする前に、圧縮結果を確認する責任はあなたにあります。当社は、品質の低下、透明度の欠落、またはあなたが処理を選択した画像に対して圧縮がもたらすその他の変化について責任を負いません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. サードパーティのサービス
            </h2>
            <p>
              このサイトは、Cloudflareによるホスティングとコンテンツ配信、FormSubmitによるメッセージ配信など、運営のためにサードパーティのサービスを使用しています。これらのサービスにはそれぞれ独自の規約とプライバシーポリシーがあり、それらの利用はこれらの文書および本規約によって規律されます。当社は、CompressMyPicからリンクされているサードパーティのウェブサイトやサービスの可用性、内容、慣行について責任を負いません。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 準拠法
            </h2>
            <p>
              本規約は、サイトが運営されているアラブ首長国連邦の法律に準拠し、その抵触法の規則は考慮されません。本規約またはサービスの利用に起因または関連する紛争は、アラブ首長国連邦の裁判所によって解決されます。本規約の一部が執行不能と判断された場合でも、残りの部分は引き続き完全に適用されます。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. 本規約の変更
            </h2>
            <p>
              当社は、サービスが変更された場合に本規約を更新することがあります。たとえば、新しいツールの追加、ファイルサイズ制限の変更、新しいサードパーティサービスの利用開始などです。その際は、このページ上部の「最終更新日」を更新します。規約の変更後もCompressMyPicを引き続き利用する場合、更新された規約に同意したことになります。変更に同意できない場合は、サービスの利用を中止してください。
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. お問い合わせ
            </h2>
            <p>
              本規約についてご質問がある場合は、{' '}
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
