import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';

interface GuideWhatsAppPageJaProps {
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
    text: 'スマートフォンやパソコンのブラウザーでcompressmypic.onlineを開きます。インストールは不要で、アカウント作成も不要です。ツールはすぐに使えます。',
  },
  {
    title: '写真をアップロードする',
    text: '「ファイルを選択」をタップしてギャラリーから写真を選ぶか、ページにドラッグ＆ドロップします。複数の写真を一度にアップロードできます。1枚あたり最大20MBまで対応しています。',
  },
  {
    title: 'まずは「バランス」プリセットから始める',
    text: '「バランス」プリセット（画質およそ70％）は、WhatsApp用の写真にちょうどよい出発点です。ファイルサイズを大幅に小さくしながら、スマートフォンの画面では写真がくっきり見えたままになります。',
  },
  {
    title: '圧縮前後のサイズをリアルタイムで確認する',
    text: '写真ごとに、元のサイズと圧縮後の新しいサイズが並んで表示されます。ファイルがまだ大きい場合は、画質スライダーを少し下げると、サイズがすぐに更新されます。',
  },
  {
    title: '写真はJPGのままにする',
    text: '通常の写真は、出力形式をJPGのままにしてください。WhatsAppが最も扱いやすい形式で、写真のファイルも最も小さくなります。ロゴのように透明部分が必要な画像の場合にのみ、PNGを使ってください。',
  },
  {
    title: '圧縮前後を比べる',
    text: '圧縮前後の比較を開いて、写真がきれいに見えるか確認します。顔や文字の部分を拡大してみて、目に見える違いがなければ、その画質設定で問題ありません。',
  },
  {
    title: '小さくなった写真をダウンロードする',
    text: '写真の「ダウンロード」をタップするか、複数の写真を圧縮した場合は「すべてダウンロード（ZIP）」を使います。小さくなったファイルが端末に保存されます。元の写真が変更されることはありません。',
  },
  {
    title: 'WhatsAppで賢く送る',
    text: 'できるだけ高画質で送りたい場合は、圧縮した写真をドキュメントとして送ります。WhatsAppで「添付」→「ドキュメント」をタップしてファイルを選択します。ドキュメントはそのまま送られるため、圧縮した写真がそのまま届きます。写真として送ると、WhatsAppがもう一度圧縮してしまいます。',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'なぜWhatsAppでは写真の画質が落ちるのですか？',
    answer: '通常の方法で写真を送ると、WhatsAppはデータとストレージを節約するために写真を再圧縮し、サイズも画質も大幅に落としてしまうことがあります。だからこそ、シャープなカメラ写真が、送信後にぼやけて見えることがあるのです。',
  },
  {
    id: 'wa-faq-2',
    question: 'ドキュメントとして送った画像はWhatsAppで圧縮されますか？',
    answer: 'いいえ、圧縮されません。画像をドキュメントとして送る場合（「添付」→「ドキュメント」）、WhatsAppはファイルをそのまま送り、追加の圧縮は行いません。写真をフル画質で共有するには、この方法が最適です。',
  },
  {
    id: 'wa-faq-3',
    question: 'WhatsAppで送れる画像の最大サイズはどれくらいですか？',
    answer: 'WhatsAppではドキュメントを最大2GBまで送れるため、数百KBに圧縮した写真であれば問題になることはありません。通常の方法で送る写真はWhatsApp自身が再圧縮するため、実際にはサイズよりも画質が問題になります。',
  },
  {
    id: 'wa-faq-4',
    question: 'WhatsAppでフル画質の写真を送るにはどうすればよいですか？',
    answer: 'まずCompressMyPicで写真を圧縮して適切なサイズにし、次にWhatsAppでは写真としてではなくドキュメントとして送ります。「添付」をタップし、「ドキュメント」を選んでファイルを選択してください。WhatsAppが再圧縮することなく届きます。',
  },
  {
    id: 'wa-faq-5',
    question: '自分で圧縮してから送るべきですか、それともWhatsAppに任せるべきですか？',
    answer: '自分で先に圧縮するのがおすすめです。WhatsAppの圧縮は強くかかり、調整もできません。CompressMyPicで先に圧縮すれば、画質を自分で選び、結果を確認してから、ドキュメントとして送ることでWhatsAppによる再圧縮を防げます。',
  },
  {
    id: 'wa-faq-6',
    question: 'WhatsApp用の写真にはどの画質設定がよいですか？',
    answer: 'まずは「バランス」プリセットのおよそ70％から始めてください。大切な写真は80〜85％にし、圧縮前後の比較を確認します。日常のちょっとした写真で、送信速度を優先する場合は50〜60％でもスマートフォンの画面では十分きれいに見え、ファイルもずっと小さくなります。',
  },
  {
    id: 'wa-faq-7',
    question: '2回圧縮すると写真は劣化しますか？',
    answer: 'はい、劣化します。JPEG圧縮は、繰り返すたびに少しずつ細部を失います。だからこそ、CompressMyPicで一度だけ圧縮し、その結果をドキュメントとして送るべきです。すでに圧縮した写真をWhatsAppに2回目として圧縮させてはいけません。',
  },
  {
    id: 'wa-faq-8',
    question: 'スマートフォンでWhatsApp用の写真を圧縮できますか？',
    answer: 'はい、できます。CompressMyPicはAndroidとiPhoneのブラウザーで使えます。サイトを開き、カメラロールから写真を選んで圧縮し、小さくなったファイルをダウンロードしてから、WhatsAppで共有します。アプリのインストールは不要です。',
  },
  {
    id: 'wa-faq-9',
    question: '圧縮した写真でもWhatsAppステータスできれいに見えますか？',
    answer: '圧縮しすぎなければ、はい、きれいに見えます。WhatsAppステータスは控えめな解像度で写真を表示するため、「バランス」プリセット（およそ70％）で圧縮した写真は、スマートフォンの画面では元の写真と同じように見えます。顔や文字のあるステータス写真では、50％未満にしないようにしてください。',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsAppで「画像が大きすぎます」と表示されたらどうすればよいですか？',
    answer: '画像をCompressMyPicにアップロードし、画質スライダーを下げてファイルが数百KBになるまで小さくしてから、ダウンロードして再度送ってください。それでも写真として送れない場合は、ドキュメントとして送ると、はるかに大きなファイルも受け付けられます。',
  },
  {
    id: 'wa-faq-11',
    question: 'WhatsAppではJPGとPNGのどちらを使うべきですか？',
    answer: '写真にはJPGを使ってください。JPGはカメラ写真のファイルをずっと小さくでき、WhatsAppでの扱いも最適です。PNGは、ロゴのように透明部分が必要な画像にのみ使ってください。PNGのファイルははるかに大きくなります。',
  },
  {
    id: 'wa-faq-12',
    question: 'WhatsAppでWebP画像を送ることはできますか？',
    answer: 'WebPファイルを受け取ることはできますが、通常の写真としてプレビューされない場合があり、端末によって扱いが異なることもあります。相手に写真として見てもらいたい場合は、JPGのほうが安全です。WebPはWhatsAppよりもウェブサイト向きの形式です。',
  },
  {
    id: 'wa-faq-13',
    question: '複数のWhatsApp用写真を一度に圧縮できますか？',
    answer: 'はい、できます。すべての写真を一度にCompressMyPicにアップロードし、同じプリセットをすべてに適用して、「すべてダウンロード（ZIP）」ボタンでまとめてダウンロードします。その後、WhatsAppから1枚ずつ、またはドキュメントとして送ります。',
  },
  {
    id: 'wa-faq-14',
    question: 'WhatsAppは動画も同じように圧縮しますか？',
    answer: 'はい、通常の方法で送った動画もWhatsAppが圧縮し、大幅に小さくなることがあります。CompressMyPicは画像（JPG、PNG、WebP）専用で、動画には対応していません。動画は、元の画質を保つためにドキュメントとして送ってください。',
  },
  {
    id: 'wa-faq-15',
    question: '圧縮すると元の写真がスマートフォンから消えますか？',
    answer: 'いいえ、消えません。CompressMyPicは新しく小さなコピーを作成して端末にダウンロードします。元の写真はギャラリーにそのまま残り、変更されることはありません。',
  },
  {
    id: 'wa-faq-16',
    question: '圧縮すると写真がサーバーにアップロードされますか？',
    answer: 'いいえ、アップロードされません。圧縮はすべてお使いの端末上のブラウザー内で行われるため、写真がアップロードされたり、保存されたり、他の誰かに見られたりすることはありません。写真はブラウザーのメモリー内に留まり、タブを閉じるか更新すると消去されます。',
  },
  {
    id: 'wa-faq-17',
    question: 'WhatsApp用の写真はどれくらい小さくすればよいですか？',
    answer: '日常の共有では、1枚あたり100〜300KBがよい目安です。速く送れてモバイルデータも少なく済み、スマートフォンでもシャープに見えます。印刷したり保存したりしたい写真は、画質設定を高めにして500KB〜1MB程度に留めるのがおすすめです。',
  },
  {
    id: 'wa-faq-18',
    question: '送信後にWhatsAppの写真がぼやけて見えるのはなぜですか？',
    answer: '写真として送った際に、WhatsAppが再圧縮したためです。解決策は、自分で先に画質を調整して圧縮し、ドキュメントとして送ることで、WhatsAppによる再圧縮を防ぐことです。',
  },
  {
    id: 'wa-faq-19',
    question: 'WhatsApp用にスクリーンショットを圧縮できますか？',
    answer: 'はい、できます。写真と同じようにスクリーンショットをCompressMyPicにアップロードします。スクリーンショットは平らな色の部分が多いため非常によく圧縮できます。まず「バランス」プリセットを試し、さらに小さいファイルにしたい場合はWebP出力に切り替えてください。',
  },
  {
    id: 'wa-faq-20',
    question: 'WhatsApp用の写真の圧縮はCompressMyPicで無料ですか？',
    answer: 'はい、完全に無料です。登録も、透かしも、圧縮できる写真の枚数制限も、アカウントも不要です。サイトを開いて圧縮し、ダウンロードするだけです。',
  },
];

export const GuideWhatsAppPageJa: React.FC<GuideWhatsAppPageJaProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'WhatsApp用に画像を圧縮する方法｜画質を落とさず送る';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'WhatsApp用に画質を落とさず画像を圧縮する方法を解説。無料でプライバシーを守り、登録不要。送信前に写真を小さくして、くっきりしたまま速く送れます。');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ja/gaido/whatsapp-yo-gazo-asshuku';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'WhatsApp用に画質を落とさず画像を圧縮する方法',
          description: 'CompressMyPicで写真を圧縮し、WhatsAppでドキュメントとして送ることで、写真をくっきりしたまま届けます。',
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
    script.id = 'guide-whatsapp-ja-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-ja-jsonld');
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
            WhatsApp用に画質を落とさず画像を圧縮する方法
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            WhatsAppは送る写真をすべて縮小します。しかも、必要以上に小さくしてしまうことがよくあります。まず自分で写真を圧縮し、正しい方法で送れば、写真はくっきりしたまま届き、速く送れて、モバイルデータも少なく済みます。
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>なぜWhatsAppで写真がぼやけるのか</span>
            </h2>
            <p>
              WhatsAppで通常の方法で写真を送ると、届けられる前にWhatsAppが写真を再圧縮します。3MBのカメラ写真が、細部がぼやけ、色がブロック状になった100KBのファイルとして届くこともあります。WhatsAppはデータとストレージを節約するためにこうしていますが、どれだけ画質が落ちるかはあなたには決められません。
            </p>
            <p>
              ほとんどの人が使ったことのない、もう一つの送り方があります。それは、写真をドキュメントとして送る方法です。ドキュメントはそのまま届き、追加の圧縮は一切ありません。コツは、まず自分で写真を小さくすることです。画質は自分で決めて、それからドキュメントとして送ります。そうすれば、小さいファイルとシャープな写真を同時に手に入れられます。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>手順：WhatsApp用に写真を圧縮する</span>
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
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="WhatsAppで送る前にCompressMyPicに写真をアップロードしているスクリーンショット"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              写真をCompressMyPicにアップロードします。ドラッグ＆ドロップするか、ギャラリーから選びます。
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span>どの画質設定を使うべきですか？</span>
            </h2>
            <p>
              写真や用途によって最適な数値は変わるため、万能の答えはありません。以下の目安を出発点にして、毎回圧縮前後の比較を確認してください。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">日常の写真：70％</div>
                <p className="text-xs text-slate-600">
                  「バランス」プリセットです。サイズを大幅に節約でき、スマートフォンの画面では写真がシャープに見えたままになります。WhatsAppに最適な初期設定です。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">大切な写真：80〜85％</div>
                <p className="text-xs text-slate-600">
                  家族写真や旅行写真など、残しておきたい写真に。ファイルは大きくなりますが、顔や風景の細部がしっかり残ります。
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">気軽な共有：50〜60％</div>
                <p className="text-xs text-slate-600">
                  ミームやちょっとした近況報告、モバイルデータが遅いときの写真に。ファイルはずっと小さくなり、スマートフォンの画面サイズでは十分きれいに見えます。
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>きれいに仕上げるコツ</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>圧縮は一度だけ行います。すでに圧縮した写真をもう一度圧縮しても、節約はほとんどなく、細部が失われるだけです。</li>
              <li>画質が大切な場合は、圧縮したファイルを必ずドキュメントとして送ります。それが、WhatsAppによる再圧縮を防ぐ唯一の方法です。</li>
              <li>複数の写真を同じ設定でまとめて圧縮し、「すべてダウンロード（ZIP）」ボタンでまとめてダウンロードします。</li>
              <li>文字のあるスクリーンショットやグラフィックは、WebP出力を試してください。シャープな輪郭が保たれ、JPGより小さいファイルになります。</li>
              <li>元の写真が変更されることはありません。CompressMyPicは新しく小さなコピーを保存するため、いつでも戻って別の画質で試すことができます。</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="CompressMyPicの画質スライダーと圧縮前後のファイルサイズを示すスクリーンショット"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              画質スライダーを動かすと、圧縮前後のサイズがリアルタイムで更新されます。希望のサイズになるまで調整します。
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-blue-600" />
              <span>よくある失敗を避けるには</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>圧縮したあとに写真として送ること。WhatsAppが2回目の圧縮を行い、せっかくの作業が無駄になります。</li>
              <li>顔のある写真の画質を40％未満まで下げること。肌や細部が低い画質ではすぐにブロック状になります。</li>
              <li>カメラ写真にPNGを使うこと。PNGのファイルはJPGよりはるかに大きく、WhatsAppでは得るものがありません。</li>
              <li>結果を確認せずに送ること。特に文字のある写真は、送る前に必ず圧縮前後の比較を確認してください。</li>
            </ul>
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
                onClick={() => onNavigate('/ja/gaido/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG・PNG・WebPの違いと使い分け｜どれを選ぶべき？</div>
                <p className="text-xs text-slate-600 mt-1">ファイルサイズ、画質、透明対応を比較し、毎回正しい形式を選べるようにします。</p>
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
              onClick={() => onNavigate('/ja/gaido/gazo-saizu-o-100kb-ni-hedasu')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              画像を100KBまで小さくする
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
