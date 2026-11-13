import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageJaProps {
  onNavigate: (path: string) => void;
}

export const AboutPageJa: React.FC<AboutPageJaProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'CompressMyPicについて – 無料のオンライン画像圧縮ツール';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'CompressMyPicについて – JPG、PNG、WebPに対応した無料のオンライン画像圧縮ツール。登録不要、透かしなし、サーバーへのアップロードなしで、オンラインで無料で画像を圧縮できます。');
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            CompressMyPicについて
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            CompressMyPicは、無料でプライバシーを守る画像圧縮ツールです。JPG、PNG、WebPの画像をブラウザー上で直接圧縮できます。速く、安全で、ファイルをどこにもアップロードしません。
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span>CompressMyPicとは？</span>
            </h2>
            <p>
              CompressMyPicは、画質を落とさずに画像サイズを小さくできる、無料のオンライン画像圧縮・最適化ツールです。日常的に使われるJPG、PNG、WebPに対応した写真圧縮・写真サイズ縮小ツールで、JPGを100KBまで圧縮したり、PNGをオンラインで無料圧縮したり、WebP画像を圧縮したり、WhatsAppやInstagram、Facebook、メールで共有する前に写真のファイルサイズを小さくしたりできます。
            </p>
            <p>
              従来の画像圧縮サイトでは、大切な個人の写真や会社の画像が、他人の所有するサーバーにアップロードされていました。そうしたやり方には当然の懸念があり、だからこそ私たちはCompressMyPicをまったく逆の発想で作りました。すべての処理をお使いの端末上で行うツールです。
            </p>
            <p>
              画像を選んだり、ドラッグ＆ドロップしたりすると、ブラウザーが一時的なメモリー領域を確保し、画像をHTML Canvasに描画して圧縮アルゴリズムを適用し、新しいファイルを書き出します。そのすべてが、お使いのブラウザーのタブの中で行われます。画像の圧縮に、ネットワーク設備やデータベース、クラウドサーバーは一切関わりません。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>対応形式：JPG、PNG、WebP</span>
            </h2>
            <p>
              JPG圧縮ツールとして、CompressMyPicではJPGをオンラインで無料圧縮でき、写真のシャープさを保ったままJPEGのファイルサイズを小さくできます。「バランス」プリセットを試したり、画質スライダーを下げたりして、圧縮前後のサイズをリアルタイムで確認しながら、100KBや200KBといった目標を目指せます。PNG圧縮ツールとしては、ロゴやグラフィックの透明部分を保ったまま、PNGをオンラインで無料圧縮できます。WebP画像を圧縮すると、最も小さいファイルが得られます。WebPは同じ画質でJPEGより通常25〜35％小さく、ウェブページ用に画像を最適化するのに最適です。
            </p>
            <p>
              各画像の元の形式をそのまま使うことも、JPG、PNG、WebPの間で変換することもできます。画質スライダー（10％〜100％）、「低」「バランス」「高」のプリセット、圧縮前後のサイズ表示により、ファイルサイズと画質のバランスを細かく調整できます。なお、このツールには目標KBを入力する欄はありません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>私たちの基本理念</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">徹底したプライバシー</div>
                <p className="text-xs text-slate-600">
                  ファイルが外部サーバーやデータベースに触れることは一切ありません。写真や大切な画像は、お使いの端末内に厳密に留まります。圧縮はお使いの端末上で行われるため、他の誰かに見られることはありません。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">シンプルで無料</div>
                <p className="text-xs text-slate-600">
                  ソフトウェアのインストールも、有料プランも、隠れた料金も、アカウント作成も、メール認証も、試用制限もありません。オンラインで無料で画像を圧縮できます。登録不要で、圧縮後の画像に透かしも付きません。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">画質はあなたが決める</div>
                <p className="text-xs text-slate-600">
                  画質スライダーをリアルタイムで動かしたり、「低」「バランス」「高」のプリセットを選んだり、出力形式を選んだり、画像を並べて比べたりして、違いをすぐに確認できます。画質を落とさずに画像サイズを小さくできます。すべてあなたの思いどおりに。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">一括画像圧縮</div>
                <p className="text-xs text-slate-600">
                  複数の画像を同じ設定でまとめて圧縮し、「すべてダウンロード（ZIP）」ボタンで一括ダウンロードできます。写真ライブラリーや商品カタログ、ウェブサイトの画像フォルダーに便利な一括圧縮ツールです。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">自動の安全チェック</div>
                <p className="text-xs text-slate-600">
                  圧縮ツールは画像の透明部分を検出します。透明なPNGに対してJPEG出力を選ぶと警告が表示されます。JPEGは透明に対応していないため、うっかり透明情報を失うことがありません。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">高速な処理</div>
                <p className="text-xs text-slate-600">
                  すべての処理がお使いの端末上で行われるため、ファイルをサーバーに送って戻ってくるのを待つ必要がありません。1枚あたり最大20MBまでの大きなファイルでも、パソコンでもスマートフォンでもすばやく圧縮できます。
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>どなたのためのツールですか？</span>
            </h2>
            <p>
              CompressMyPicは、画像を小さくしたいすべての方のためのツールです。ウェブサイト用に画像を最適化し、ページの画像サイズを小さくしたいブロガーやサイト運営者、共有や納品の前に写真のファイルサイズを小さくしたいフォトグラファー、ウェブサイトや店舗の商品ページ用に写真を圧縮したいネットショップ運営者、メールの添付用に画像を圧縮したい学生や会社員、そしてWhatsAppやInstagram、Facebook用に画像を圧縮して、速く送り、モバイルデータを節約したいすべての方に役立ちます。
            </p>
            <p>
              パソコンでもスマートフォンでもブラウザーで使え、インストールは不要で、登録も求められません。サイトを開いて画像をアップロードし、小さくなったファイルをダウンロードするだけです。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              <span>プライバシーとセキュリティ</span>
            </h2>
            <p>
              CompressMyPicでは、プライバシーはオプションの機能ではなく、大切な権利だと考えています。現代では、画像圧縮ツールでさえ、多くのウェブサイトが初期設定でデータを収集しています。私たちは、最新のブラウザー技術を使ってお使いのパソコン上でメディアをローカル処理する、プライバシーを最優先にした設計を採用しています。
            </p>
            <p>
              ファイルはブラウザーのメモリー内に留まり、タブを閉じるかページを更新するとすぐに消去されます。リモートサーバー上で画像処理が行われないため、たとえ望んだとしても画像データを収集することはできません。それがこのツールの設計であり、お約束です。
            </p>
            <p>
              プライバシーの取り扱いについて詳しくは、{' '}
              <button
                type="button"
                onClick={() => onNavigate('/ja/puraibashi')}
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                プライバシーポリシー
              </button>
              {' '}のページをご覧ください。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>私たちのミッション</span>
            </h2>
            <p>
              最高のツールとは、最もシンプルで、最も速く、最も透明性の高いものだと信じています。私たちのミッションは、速く、信頼でき、完全に無料の画像圧縮ツールをすべての方に届けることです。隠れた条件も、あなたを追跡する広告も、サーバーへのアップロードも、プライバシーの妥協もありません。JPGを1枚圧縮する場合も、WebP画像をまとめて圧縮する場合も、ツールはただ動くべきだと考えています。
            </p>
            <p>
              ご質問やアイデア、改善できる点がございましたら、ぜひお聞かせください。サイトから直接ご連絡いただけます。
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ja/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              画像圧縮を始める
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ja/otoiawase')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
