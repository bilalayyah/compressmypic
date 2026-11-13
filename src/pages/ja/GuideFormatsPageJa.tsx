import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';

interface GuideFormatsPageJaProps {
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
    text: 'ブラウザーでcompressmypic.onlineを開きます。インストールは不要で、アカウント作成も不要です。ファイルがサーバーにアップロードされることはありません。',
  },
  {
    title: '画像をアップロードする',
    text: '画像をドラッグ＆ドロップするか、「ファイルを選択」をタップして選びます。JPG、PNG、WebPのファイルに対応し、1枚あたり最大20MBまで使えます。',
  },
  {
    title: '形式をそのまま使うか、変換するかを決める',
    text: '「元の形式」を選んで今の形式のままにするか、出力形式としてJPG、PNG、WebPのいずれかを選びます。下のガイドを参考に決めてください。写真はJPG、透明が必要な場合はPNG、ウェブサイト用に最も小さいファイルがほしい場合はWebPです。',
  },
  {
    title: '画質プリセットを選ぶ',
    text: 'まず「バランス」プリセット（およそ70％）から始めます。できるだけきれいに残したい写真は、「高」プリセットか画質85〜90％を使います。小さなウェブ用画像なら、低い設定でも十分です。',
  },
  {
    title: 'リアルタイムのサイズを確認して比べる',
    text: '画像ごとに、元のサイズと圧縮後の新しいサイズが表示されます。圧縮前後の比較を開いて拡大してみてください。違いが見えなければ、その設定で問題ありません。出力形式をWebPに切り替えると、ファイルがどれだけ小さくなるか試してみてください。',
  },
  {
    title: '画像をダウンロードする',
    text: '画像を1枚ずつダウンロードするか、複数の画像を変換した場合は「すべてダウンロード（ZIP）」を使います。元のファイルが変更されることはありません。新しく小さなコピーが得られます。',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'JPGとPNGの違いは何ですか？',
    answer: 'JPGは写真向けの非可逆形式です。細部を一部捨てることでファイルを大幅に小さくしますが、透明には対応していません。PNGは可逆形式で透明に対応しているため、ロゴやグラフィックに最適です。ただし、PNGの写真は同じ写真をJPGで保存した場合の数倍の大きさになります。',
  },
  {
    id: 'fmt-faq-2',
    question: 'WebPはJPGより優れていますか？',
    answer: 'ファイルサイズの面では、はい、優れています。WebPは同じ画質で通常JPGより25〜35％小さく、透明にも対応しています。JPGを選ぶ理由があるとすれば互換性です。古いソフトウェアやアプリではJPGのほうが扱いやすく、WhatsAppでもJPGの写真のほうが確実にプレビューされます。',
  },
  {
    id: 'fmt-faq-3',
    question: 'WebPはPNGより優れていますか？',
    answer: '通常は、はい、優れています。WebPはPNGと同じように透明に対応しながら、はるかに小さいファイルを作ることができ、JPGのように非可逆圧縮もできます。PNGが今も安全な選択肢なのは、後で編集し直すロゴやグラフィックで、完全な可逆画質が必要な場合です。',
  },
  {
    id: 'fmt-faq-4',
    question: 'PNGは透明に対応し、JPGは対応しないのですか？',
    answer: 'そのとおりです。PNGは透明な背景（アルファチャンネル）に対応しているため、ロゴやアイコンは通常PNGです。JPGには透明がまったくありません。JPGでは透明な部分が単色（通常は白）になるため、透明な背景のロゴをJPGで保存してはいけません。',
  },
  {
    id: 'fmt-faq-5',
    question: 'なぜPNGファイルはJPGよりずっと大きいのですか？',
    answer: 'PNGは可逆形式だからです。すべてのピクセルの細部を正確に残すのに対し、JPGは目ではほとんど気づかない細部を捨てます。カメラ写真をPNGで保存すると、同じ写真をJPGで保存した場合の5〜10倍の大きさになることがあります。だからこそ、写真をPNGにしてはいけないのです。',
  },
  {
    id: 'fmt-faq-6',
    question: 'WebPではなくJPGを使うべきなのはどんなときですか？',
    answer: '古いソフトウェアで画像を開く場合、WhatsAppやメールで確実にプレビューさせたい場合、印刷する場合にJPGを使ってください。WebPはウェブサイトに適していますが、誰かと写真を共有する場合は、JPGが今も最も汎用的な形式です。',
  },
  {
    id: 'fmt-faq-7',
    question: 'PNGをJPGに変換できますか？',
    answer: 'はい、できます。PNGをCompressMyPicにアップロードし、出力形式としてJPGを選んでダウンロードします。ただしJPGには透明がないことを忘れないでください。PNGに透明な背景がある場合は、まず背景色を選んでください。選ばなければ、透明な部分は白一色になります。',
  },
  {
    id: 'fmt-faq-8',
    question: 'JPGをWebPに変換できますか？',
    answer: 'はい、できます。JPGをアップロードし、出力としてWebPを選んでダウンロードすると、目に見える画質は同じままで、ファイルは通常25〜35％小さくなります。複数のJPGを一度にWebPへ変換し、ZIPとしてまとめてダウンロードすることもできます。',
  },
  {
    id: 'fmt-faq-9',
    question: 'JPGをPNGに変換すると画質は上がりますか？',
    answer: 'いいえ、上がりません。JPGをPNGに変換しても、JPG圧縮で失われた細部は戻らず、ファイルがはるかに大きくなるだけです。JPGをPNGに変換する正当な理由は、画質をさらに落とさずに画像を編集し直す必要がある場合だけです。',
  },
  {
    id: 'fmt-faq-10',
    question: 'ウェブサイトにはどの形式を使うべきですか？',
    answer: 'まずWebPを使い、JPGを代替として用意します。WebPは最も小さいファイルを作るため、ページの読み込みが速くなります。表示速度は訪問者にもGoogleにも大切です。透明が必要なロゴなどの画像にのみPNGを使い、WebPが使えない場合は写真にJPGを使ってください。',
  },
  {
    id: 'fmt-faq-11',
    question: 'ロゴに最適な形式は何ですか？',
    answer: 'ロゴに透明な背景が必要な場合はPNGです。JPGでは透明にできないからです。WebPも透明に対応し、ファイルも小さいため、ウェブサイト上のロゴにも適しています。背景を透明のままにしなければならないロゴを、JPGで保存してはいけません。',
  },
  {
    id: 'fmt-faq-12',
    question: 'スクリーンショットに最適な形式は何ですか？',
    answer: 'PNGまたはWebPです。スクリーンショットはシャープな輪郭と平らな色が多く、PNGとWebPが得意とする特徴です。JPGはシャープな文字の輪郭をぼかします。最も小さいスクリーンショットファイルにしたい場合は、CompressMyPicでWebP出力を試してください。PNGと目に見える違いがなく、通常ははるかに小さくなります。',
  },
  {
    id: 'fmt-faq-13',
    question: '今ではすべてのブラウザーがWebPに対応していますか？',
    answer: 'はい、実質的にはすべて対応しています。Chrome、Edge、Firefox、Safari、そしてすべてのモダンなモバイルブラウザーが、何年も前からWebPに対応しています。WebPを開けないのは非常に古いブラウザーや一部の古いアプリだけで、それがJPGが今も役立つ唯一の理由です。',
  },
  {
    id: 'fmt-faq-14',
    question: 'WhatsAppやInstagramはWebPを受け付けますか？',
    answer: 'WhatsAppはWebPファイルを受け取れますが、通常の写真としてプレビューされない場合があるため、写真の共有にはJPGのほうが安全です。Instagramは投稿用にJPGとPNGを受け付け、アップロード後に自分で変換します。SNSで共有する場合は、写真はJPGを使うのがおすすめです。',
  },
  {
    id: 'fmt-faq-15',
    question: '写真をWebPに変換すると画質は落ちますか？',
    answer: 'あなたが選ぶ範囲でのみ落ちます。WebPはJPGと同じ考え方で、画質設定により細部を少し犠牲にしてファイルを小さくします。80〜90％の画質では、WebPの写真は元のJPGと見分けがつかず、ファイルは約3分の1小さくなります。',
  },
  {
    id: 'fmt-faq-16',
    question: 'JPGとJPEGの違いは何ですか？',
    answer: '違いはありません。JPGとJPEGは同じ形式です。JPEGは正式名称（Joint Photographic Experts Group）で、JPGは短いファイル拡張子です。photo.jpgというファイルとphoto.jpegというファイルは、同じ種類の画像です。',
  },
  {
    id: 'fmt-faq-17',
    question: '元の形式のままにすべきですか、それとも変換すべきですか？',
    answer: 'サイズに満足しているなら、元の形式のままにするのが最もシンプルで、何も失われません。理由があるときに変換します。ウェブサイトの写真を小さくするためにJPGからWebPへ、透明が不要な写真を小さくするためにPNGからJPGへ、ロゴを小さくするためにPNGからWebPへ変換する、といった場合です。',
  },
  {
    id: 'fmt-faq-18',
    question: '最も小さいファイルになる形式はどれですか？',
    answer: 'ほとんどの場合、WebPです。写真では、WebPは同じ目に見える画質で通常JPGより25〜35％小さくなります。透明のあるグラフィックでは、WebPは通常PNGよりはるかに小さくなります。だからこそ、WebPはウェブサイトに最適な形式です。',
  },
  {
    id: 'fmt-faq-19',
    question: 'CompressMyPicでJPG、PNG、WebPの間で変換できますか？',
    answer: 'はい、できます。JPG、PNG、WebPの画像をアップロードし、元の形式、JPG、PNG、WebPの中から希望の出力形式を選んで、変換後のファイルをダウンロードします。複数の画像を同じ設定でまとめて変換し、ZIPとしてまとめてダウンロードすることもできます。',
  },
  {
    id: 'fmt-faq-20',
    question: 'PNGをJPGに変換すると透明はどうなりますか？',
    answer: '透明は失われます。JPGは透明を保存できないため、PNGの透明な部分は単色になります。CompressMyPicでは、その部分を塗りつぶす背景色を選べます。画像を使う場所に合う色を選んでください。通常は白です。',
  },
];

export const GuideFormatsPageJa: React.FC<GuideFormatsPageJaProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG・PNG・WebPの違いと使い分け｜どれを選ぶべき？';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG・PNG・WebPをわかりやすく比較。ファイルサイズ、画質、透明対応の違いを解説し、写真・ロゴ・ウェブサイトに合った形式の選び方を紹介します。');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ja/gaido/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'JPG、PNG、WebPの選び方と画像の変換方法',
          description: 'JPG、PNG、WebPを比較し、CompressMyPicで画像を圧縮または変換します。',
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
    script.id = 'guide-formats-ja-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-ja-jsonld');
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
            JPG・PNG・WebPの違いと使い分け｜どれを選ぶべき？
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            間違った形式を選ぶと、画像が必要以上に10倍も大きくなったり、透明なロゴが台無しになったりします。シンプルで正直な比較と、数秒で形式を変換する方法を紹介します。
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              <span>結論から言うと</span>
            </h2>
            <p>
              ひとつだけ覚えるなら、これです。写真にはJPG、ロゴや透明が必要なものにはPNG、最も小さいファイルがほしいとき、特にウェブサイトではWebPを使います。理由は下の表のとおりです。
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">形式</th>
                    <th className="px-4 py-3 font-bold">ファイルサイズ</th>
                    <th className="px-4 py-3 font-bold">透明対応</th>
                    <th className="px-4 py-3 font-bold">最適な用途</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">JPG</td>
                    <td className="px-4 py-3">小さい</td>
                    <td className="px-4 py-3">なし</td>
                    <td className="px-4 py-3">写真、共有、印刷</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">PNG</td>
                    <td className="px-4 py-3">大きい</td>
                    <td className="px-4 py-3">あり</td>
                    <td className="px-4 py-3">ロゴ、アイコン、スクリーンショット</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">WebP</td>
                    <td className="px-4 py-3">最も小さい</td>
                    <td className="px-4 py-3">あり</td>
                    <td className="px-4 py-3">ウェブサイト、ウェブ用写真</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              <span>JPG：写真に最適</span>
            </h2>
            <p>
              JPG（JPEGとも書きます）は、定番の写真形式です。非可逆圧縮を使い、目ではほとんど気づかない細部を捨てることで、ファイルを劇的に小さくします。5MBのカメラ写真も、JPGなら500KBになって、それでもきれいに見えます。JPGは透明に対応していないため、ロゴには向きません。しかし、通常の写真であれば、すべての端末やアプリで開ける、安全で汎用的な初期設定です。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>PNG：ロゴと透明に最適</span>
            </h2>
            <p>
              PNGは可逆形式です。すべてのピクセルを正確に残し、透明な背景にも対応します。そのため、ロゴやアイコン、文字のあるグラフィックに適した形式です。代償はファイルサイズです。写真をPNGで保存すると、同じ写真をJPGで保存した場合の5〜10倍の大きさになることがあります。特別な理由がない限り、カメラ写真をPNGで保存してはいけません。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>WebP：ウェブサイトに最適</span>
            </h2>
            <p>
              WebPはGoogleが作ったモダンな形式です。JPGのような非可逆圧縮も、PNGのような透明対応もでき、ファイルは同じ目に見える画質で通常JPGより25〜35％小さくなります。すべてのモダンなブラウザーが対応しているため、ウェブサイトの画像に最適な形式です。唯一の弱点は古いソフトウェアとの互換性と、WhatsAppのプレビューで、そこではJPGのほうが今も安全です。
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="同じ写真をJPG、PNG、WebPで保存し、ファイルサイズを比べているスクリーンショット"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              同じ写真を3つの形式で保存した場合：WebPが最も小さく、PNGが最も大きく、JPGはその中間です。
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileImage className="w-5 h-5 text-blue-600" />
              <span>手順：画像を圧縮または変換する</span>
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

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>用途別の形式はどれ？</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">カメラ写真 — JPGまたはWebP</div>
                <p className="text-xs text-slate-600">
                  共有や印刷にはJPG、ウェブサイトにはWebPを使います。どちらも写真をきれいに保ったまま、元のサイズの何分の1かにできます。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">ロゴとアイコン — PNGまたはWebP</div>
                <p className="text-xs text-slate-600">
                  透明が必要なため、JPGは使えません。PNGは安全な定番で、WebPは小さく、モダンな環境ではどこでも使えます。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">スクリーンショット — WebPまたはPNG</div>
                <p className="text-xs text-slate-600">
                  シャープな文字と平らな色にはWebPとPNGが適しています。JPGは文字の輪郭をぼかすため、スクリーンショットには避けてください。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">ウェブサイトの画像 — WebP</div>
                <p className="text-xs text-slate-600">
                  ファイルが最も小さいため、ページが速くなります。ウェブサイトの写真をWebPに変換し、非常に古いブラウザー用にJPGを代替として残します。
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="CompressMyPicで出力形式としてJPG、PNG、WebPを選んでいるスクリーンショット"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              CompressMyPicで出力形式を選びます。元の形式のままにするか、JPG、PNG、WebPに変換します。
            </figcaption>
          </figure>

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
                onClick={() => onNavigate('/ja/gaido/gazo-saizu-o-100kb-ni-hedasu')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">画像サイズを100KBまで小さくする方法｜Web・メール用</div>
                <p className="text-xs text-slate-600 mt-1">写真を劣化させずに100KBまで小さくする手順を解説します。</p>
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
              onClick={() => onNavigate('/ja/gaido/whatsapp-yo-gazo-asshuku')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              WhatsApp用に圧縮する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
