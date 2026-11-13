import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';

interface Guide100kbPageJaProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'CompressMyPicを開く',
    text: 'ブラウザーでcompressmypic.onlineを開きます。インストールは不要で、アカウント作成も不要です。ツールは無料で、登録不要、透かしなしです。',
  },
  {
    title: '画像をアップロードする',
    text: '画像をページにドラッグ＆ドロップするか、「ファイルを選択」をタップして端末から選びます。JPG、PNG、WebPに対応し、1枚あたり最大20MBまで使えます。複数の画像を一度にアップロードできます。',
  },
  {
    title: 'まずは「バランス」プリセットから始める',
    text: '「バランス」プリセットは画質をおよそ70％に設定します。ほとんどの写真では、これだけでファイルが元のサイズの何分の1かになります。画像の横に表示されるリアルタイムのサイズで、現在の状況を確認してください。',
  },
  {
    title: '画質スライダーを少しずつ下げる',
    text: '「100KB」と入力する欄はありません。その代わり、画質スライダーをゆっくり下げて、変更するたびに圧縮前後のサイズがリアルタイムで更新されるのを確認します。小さなステップで動かします（たとえば70％から60％、そして50％へ）。そうすることで、必要以上に画質を落としてしまうのを防げます。',
  },
  {
    title: '100KBを超えている場合はWebPに切り替える',
    text: '適切な画質でもファイルが100KBを超えている場合は、出力形式をWebPに変更します。WebPは同じ目に見える画質で通常JPGより25〜35％小さく、画質をさらに下げなくても100KBに届くことがよくあります。',
  },
  {
    title: '圧縮前後を比べる',
    text: '圧縮前後の比較を開き、顔や文字、細部を拡大して確認します。写真がきれいに見えれば完了です。ブロック状に見えたり色が抜けたりする場合は、画質を少し上げて、100KBを少し超えたファイルを受け入れてください。シャープな120KBの写真は、ぼやけた100KBの写真より優れています。',
  },
  {
    title: '画像をダウンロードする',
    text: '「ダウンロード」をタップして小さくなったファイルを保存するか、複数の画像を小さくした場合は「すべてダウンロード（ZIP）」を使います。元の画像が変更されることはありません。いつでも新しく小さなコピーが得られます。',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: '写真を100KB程度まで小さくするにはどうすればよいですか？',
    answer: 'CompressMyPicにアップロードし、「バランス」プリセットから始めて、圧縮前後のサイズをリアルタイムで確認しながら画質スライダーを少しずつ下げます。圧縮後のサイズが100KBに近づいたら止めます。それでも超えている場合は、出力形式をWebPに切り替えてください。',
  },
  {
    id: 'kb-faq-2',
    question: 'なぜ100KBを正確に入力する欄がないのですか？',
    answer: '写真によって圧縮のされ方が異なるからです。平らな空の写真は、同じ画質でもにぎやかな群衆の写真よりはるかに小さくなります。固定の「100KB」欄があれば、推測で決めるしかありません。その代わり、CompressMyPicは変更するたびに圧縮後のサイズをリアルタイムで表示するため、画質を自分で調整しながら100KBへ導くことができます。',
  },
  {
    id: 'kb-faq-3',
    question: '100KB程度になる画質設定はどれくらいですか？',
    answer: '写真によりますが、一般的なスマートフォン写真では、画質50〜70％で100KB前後になることが多いです。平らな色の多いシンプルな写真は70％で100KBに届く場合があり、細部の多い風景写真では40〜50％が必要になることもあります。リアルタイムのサイズ表示を見てください。その数値こそが真実であり、固定のパーセンテージではありません。',
  },
  {
    id: 'kb-faq-4',
    question: '低い画質でも100KBを超えたままです。どうすればよいですか？',
    answer: 'まず出力形式をWebPに切り替えてください。通常はJPGより25〜35％小さくなります。それでも超える場合は、画質をもう少し下げて比較を確認します。わずかな低下は目に見えないことがよくあります。最後の手段として、寸法の非常に大きな写真は、予想より低い画質設定が必要になることがあります。ピクセルが多いほどデータも多くなるからです。',
  },
  {
    id: 'kb-faq-5',
    question: '100KBを目指すのにWebPを使うべきですか？',
    answer: 'はい、使える場合はWebPを使うのがおすすめです。WebPは、JPGと同じ目に見える画質でより小さいファイルを作るため、画質を下げすぎずに100KBに届きやすくなります。ウェブサイトの画像やモダンなブラウザーで使う場所ではWebPを、古いソフトウェアで開かなければならない場合やWhatsAppで共有する場合はJPGを使ってください。',
  },
  {
    id: 'kb-faq-6',
    question: '100KBまで小さくすると写真はぼやけますか？',
    answer: '丁寧に行えば、ぼやけません。画面ではカメラが捉えたピクセルよりはるかに少ないピクセルしか表示されないため、100KBの通常のスマートフォン写真でも画面上ではシャープに見えます。画質を下げすぎた場合（およそ40％未満）や、写真を大きく印刷する場合にのみぼやけて見えます。ダウンロード前に、必ず圧縮前後の比較を確認してください。',
  },
  {
    id: 'kb-faq-7',
    question: 'PNGを100KBまで小さくできますか？',
    answer: 'はい、できます。ただしPNGの写真はもともと大きいため、より手間がかかります。PNGをアップロードし、画質スライダーを下げて、出力をWebPまたはJPGに切り替えます。それだけでサイズが半分以下になることがよくあります。透明が必要な画像の場合にのみPNG出力を残し、透明なPNGでは100KBに届かない可能性があることを受け入れてください。',
  },
  {
    id: 'kb-faq-8',
    question: '画像サイズを200KBまで小さくするにはどうすればよいですか？',
    answer: '同じ方法を使います。画像をアップロードし、「バランス」プリセットから始めて、リアルタイムのサイズが200KBに近づくまで画質スライダーを下げます。ほとんどの写真は70〜80％の画質で簡単に200KBに届くため、画質を低くする必要は通常ありません。',
  },
  {
    id: 'kb-faq-9',
    question: '画像サイズを50KBまで小さくするにはどうすればよいですか？',
    answer: '画像をアップロードし、出力形式をWebPに切り替えて、リアルタイムのサイズが50KBに近づくまで画質スライダーを少しずつ下げます。写真では通常40〜55％程度の画質になります。比較をよく確認してください。50KBでは細部が劣化し始めます。サムネイルやチャットには適していますが、残しておきたい写真にはあまり向きません。',
  },
  {
    id: 'kb-faq-10',
    question: '画像サイズを20KBまで小さくするにはどうすればよいですか？',
    answer: 'WebP出力と低い画質設定（通常25〜40％）を使い、リアルタイムのサイズを確認します。20KBは非常に小さいため、ぼやけが目立つことを想定してください。アイコンやサムネイル、小さなプレビュー画像に適しており、顔のある写真には向きません。それでも20KBに届かない場合、その画像は小さなファイルにするには細部が多すぎる可能性があります。',
  },
  {
    id: 'kb-faq-11',
    question: 'ウェブサイトの画像に適したファイルサイズはどれくらいですか？',
    answer: '通常のコンテンツ写真は1枚あたり100KB未満、大きなヒーロー画像は200KB未満を目指します。ファイルが小さいほどページの読み込みが速くなり、訪問者がそれを実感し、Googleも評価します。ウェブサイトの画像は、WebP形式と「バランス」プリセットを出発点にしてください。',
  },
  {
    id: 'kb-faq-12',
    question: 'メールの添付サイズの上限はどれくらいですか？',
    answer: 'ほとんどのメールサービスでは、すべての添付ファイルを含めて1通あたり合計20〜25MBまで送れます。Gmailは25MBまでです。100KBまで小さくした写真1枚であれば問題になることは決してありません。100KBの写真を10枚送っても合計1MBにしかなりません。先に圧縮しておくことで、複数の写真をメールで送るのが楽になります。',
  },
  {
    id: 'kb-faq-13',
    question: '複数の画像を一度に100KBまで小さくできますか？',
    answer: 'はい、できます。すべての画像をまとめてアップロードし、同じプリセットと画質をすべてに適用して、各画像のリアルタイムのサイズを確認します。1枚だけ100KBを超えている場合は、その画像だけ個別に調整してから、「すべてダウンロード（ZIP）」ボタンでまとめてダウンロードします。',
  },
  {
    id: 'kb-faq-14',
    question: 'ツールは画像の寸法を変更しますか？',
    answer: 'いいえ、変更しません。CompressMyPicは画像の寸法をまったく同じに保ち、ファイルサイズだけを小さくします。写真は元の幅、高さ、アスペクト比をそのまま保ちます。たとえば4000×3000の写真は4000×3000のまま、ファイルだけがはるかに小さくなります。',
  },
  {
    id: 'kb-faq-15',
    question: '圧縮後の画像サイズはどうやって確認できますか？',
    answer: 'CompressMyPicは、すべての画像について元のサイズと圧縮後のサイズをリアルタイムで、各写真のすぐ下に表示します。たとえば「4.2 MB → 98 KB」のように表示されます。ダウンロードしたファイルのサイズは端末でも確認できます。スマートフォンでは、ギャラリーやファイルマネージャーのファイル詳細をご覧ください。',
  },
  {
    id: 'kb-faq-16',
    question: 'ウェブサイト用に100KBの画質で十分ですか？',
    answer: 'はい、ほとんどのウェブ用途では十分です。ウェブサイトの写真は画面上で数百ピクセル幅で表示されるため、100KBの画像でもシャープに見えます。より大きなファイルが必要なのは、フルスクリーンのヒーロー画像や印刷用の写真だけです。100KBに圧縮して比較を確認すれば、画質が保たれていることがわかります。',
  },
  {
    id: 'kb-faq-17',
    question: 'スクリーンショットを100KBまで小さくできますか？',
    answer: 'はい、できます。スクリーンショットは最も簡単なケースです。平らな色の部分が多いため非常によく圧縮でき、1MBから始まったスクリーンショットも「バランス」プリセットで100KB未満になることがよくあります。最も小さい結果を得るには、WebP出力を試してください。',
  },
  {
    id: 'kb-faq-18',
    question: '圧縮すると画像はどこかにアップロードされますか？',
    answer: 'いいえ、アップロードされません。圧縮はすべてお使いの端末上のブラウザー内で行われるため、画像がサーバーにアップロードされたり、保存されたり、他の誰かに見られたりすることはありません。画像はブラウザーのメモリー内に留まり、タブを閉じるか更新すると消去されます。',
  },
  {
    id: 'kb-faq-19',
    question: '小さくできる画像の枚数に制限はありますか？',
    answer: 'いいえ、制限はありません。圧縮できる画像の枚数に上限はなく、アカウントや登録も不要です。唯一の制限は1枚あたり20MBまでで、高解像度のカメラ写真や大きなスクリーンショットも十分にカバーできます。',
  },
  {
    id: 'kb-faq-20',
    question: '画像を100KBまで小さくするのは無料ですか？',
    answer: 'はい、完全に無料です。料金も、有料プランも、クレジットも、圧縮後の画像への透かしもありません。サイトを開いて画像を100KBまで小さくし、何度でもダウンロードできます。',
  },
];

export const Guide100kbPageJa: React.FC<Guide100kbPageJaProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = '画像サイズを100KBまで小さくする方法｜Web・メール用';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', '無料のオンライン圧縮ツールで画像サイズを100KBまで小さくする方法をステップごとに解説。登録不要、透かしなし。画像はお使いの端末内に留まります。');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ja/gaido/gazo-saizu-o-100kb-ni-hedasu';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: '画像サイズを100KBまで小さくする方法｜ウェブサイトとメール用',
          description: 'CompressMyPicの画質スライダーとWebP出力を使って、画像をおよそ100KBまで小さくします。',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-100kb-ja-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-ja-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

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
            画像サイズを100KBまで小さくする方法｜ウェブサイトとメール用
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            4MBの写真はウェブサイトを遅くし、メールも詰まらせます。100KB程度まで小さくすれば、ページは速く読み込まれ、メールもすぐに送れます。正しく行えば、誰にも違いはわかりません。
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>なぜ100KBがちょうどよいのか</span>
            </h2>
            <p>
              100KBは、多くの人が目指すサイズです。ウェブサイトでもメールでもすぐに読み込めるほど小さいのに、画面上ではシャープに見えるだけの大きさも残っている、ちょうどよいバランスだからです。一般的なスマートフォン写真は3〜5MBから始まるため、100KBに届くということは、ファイルのおよそ97％を削ることになります。モダンな圧縮は、そのほとんどを目では見えないデータを除くことで実現しています。
            </p>
            <p>
              始める前に、正直にお伝えしておきます。CompressMyPicには「100KB」と入力してその通りのサイズを得る欄はありません。写真によって圧縮のされ方が異なるため、正確な数値を約束できる正直なツールはないのです。その代わり、このツールは変更するたびに圧縮後のサイズをリアルタイムで表示し、画質スライダーで自分で100KBへ導くことができます。このガイドで、その方法を正確に解説します。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-blue-600" />
              <span>手順：画像を100KBまで小さくする</span>
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="100KBまで小さくするために大きな写真をCompressMyPicにアップロードしているスクリーンショット"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              写真をアップロードします。元のサイズがすぐに表示されるため、どれだけ小さくする必要があるかがわかります。
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>よくある目標サイズの一覧</span>
            </h2>
            <p>
              100KBだけが目標ではありません。同じ方法はどのサイズにも使えます。各サイズで期待できる目安は次のとおりです。
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">目標</th>
                    <th className="px-4 py-3 font-bold">一般的な画質</th>
                    <th className="px-4 py-3 font-bold">適した用途</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">200KB</td>
                    <td className="px-4 py-3">70〜80％</td>
                    <td className="px-4 py-3">ブログ写真、大きなウェブ画像</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">100KB</td>
                    <td className="px-4 py-3">50〜70％</td>
                    <td className="px-4 py-3">ウェブサイトの写真、メールの添付</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">50KB</td>
                    <td className="px-4 py-3">40〜55％＋WebP</td>
                    <td className="px-4 py-3">サムネイル、チャット、速いページ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">20KB</td>
                    <td className="px-4 py-3">25〜40％＋WebP</td>
                    <td className="px-4 py-3">アイコン、小さなプレビュー</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              これらは出発点であり、約束ではありません。シンプルな写真は簡単に100KBに届きますが、にぎやかで細部の多い写真は低い画質設定が必要です。パーセンテージではなく、リアルタイムのサイズ表示を信じてください。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>ウェブサイトとメールのコツ</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>ウェブサイトではWebP出力を使います。100KBに届く最も速い方法で、すべてのモダンなブラウザーが対応しています。</li>
              <li>メールではJPGが最も安全な形式です。すべてのメールアプリで開けます。100KBのJPGはすぐに添付でき、サイズで送信に失敗することもありません。</li>
              <li>1つのページや1通のメール用の写真をすべてまとめて圧縮し、「すべてダウンロード（ZIP）」ボタンでまとめてダウンロードします。</li>
              <li>正確な100KBにこだわらないでください。ちょうど100KBのぼやけた写真より、115KBのシャープな写真のほうが優れています。読み込み時間の違いはわずかです。</li>
              <li>公開や送信の前に、必ず圧縮前後の比較をフルズームで確認してください。</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="画像がおよそ100KBまで小さくなったことを示す圧縮前後のファイルサイズのスクリーンショット"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              圧縮前後のサイズ表示で進み具合がわかります。圧縮後のサイズが100KBに近づくまでスライダーを下げます。
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>100KBにできない場合</span>
            </h2>
            <p>
              100KBに届かない画像もあります。非常に大きく、細部の多い写真や、PNGのままにしなければならない透明のあるPNGです。その場合は、無理に100KBを目指さないでください。シャープな180KBの写真は、台無しになった100KBの写真より常に優れています。ウェブサイトでも速く読み込まれ、メールでも添付上限をはるかに下回ります。目標は、きれいに見える小さいファイルであり、魔法の数字ではありません。
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>よくある質問</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">関連ガイド</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/ja/gaido/whatsapp-yo-gazo-asshuku')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">WhatsApp用に画質を落とさず画像を圧縮する方法</div>
                <p className="text-xs text-slate-600 mt-1">まず自分で写真を小さくし、ドキュメントとして送ることで、WhatsAppにぼやけさせない方法を解説します。</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/ja/gaido/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG・PNG・WebPの違いと使い分け｜どれを選ぶべき？</div>
                <p className="text-xs text-slate-600 mt-1">ファイルサイズ、画質、透明対応を比較し、毎回正しい形式を選べるようにします。</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ja/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              無料で画像を圧縮する
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ja/gaido/jpg-vs-png-vs-webp')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              JPG・PNG・WebPの違い
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
