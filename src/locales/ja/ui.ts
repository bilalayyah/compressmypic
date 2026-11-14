// Japanese UI strings — assembled for src/locales/ja/ui.ts
// = i18n-ja.ts (export JA) + tool-ui-ja.ts (export TOOL_UI_JA).
// Neither source has imports. HOME_ENTRY_JA from i18n-ja.ts is NOT
// included here: it is already merged as TOOLS_REGISTRY_JA[0] in
// src/locales/ja/tools.ts, mirroring the PT ui.ts (PT + TOOL_UI_PT only).

// Japanese (ja) UI strings for CompressMyPic — modern natural Japanese.
// Mirrors ~/workspace/compressmypic/id-ru/i18n-id.ts exactly: same 15
// sections, same keys within each section, same export shape.
// Source: English originals ONLY, read from the fresh clone /tmp/cmpic-jako
// (HEAD 83630b4): Hero, FaqSection, EducationalContent,
// ToolsDirectorySection, ShareSection, Header, Footer, ToolPageLayout,
// UploadZone, ComparisonModal, CompressionControls, ResultsList, home entry
// in src/data/tools.ts, App.tsx guides section. The ID file was used as
// STRUCTURAL template only (keys/order) — no Indonesian text copied, and
// nothing translated from any language other than English. The DE
// dictionary's older FAQ set was NOT used; the faqSection below is the
// CURRENT EN FaqSection.tsx set (20 FAQs).
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com
// and format names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is.
// "ZIP" is kept as a file-format term. "online" is ALWAYS rendered as
// オンライン (katakana) in Japanese prose/SEO — Latin "online" never appears
// in JA prose values (brand/format names and URLs excepted). 無料 (free) is
// used prominently where EN says "free". Placeholders: {name} = tool/file
// name, {max} = max size in MB, {year} = current year, {count} = number of
// extra errors, {current} = current theme, {progress} = ZIP progress %,
// {bytes} = byte size, {formats} = supported format list.
// NOTE on footer links: like ES/PT/DE/IT/ID/RU, this dictionary keeps
// ENGLISH slugs in the footer (legal links /privacy, /terms, /about,
// /contact; directory links use English tool slugs); the app maps them to
// the current language via toLocalizedPath at render.
// NOTE on guidesSection cards: like ES/PT/DE/IT/ID/RU, cards carry NO `link`
// key — the guide hrefs live in App.tsx.
// NOTE on header: the 11 language-switcher native names (English, Español,
// Português, Deutsch, Français, 日本語, Bahasa Indonesia, Italiano, Русский,
// 한국어, 简体中文) live in the app's SUPPORTED_LANGUAGES config, not in this
// dictionary — same as ES/PT/DE/IT/ID/RU.
// NOTE on educational bullets: bullets are "Title: description" strings and
// the app splits them on the FIRST ASCII ': ' — so the separator in every
// bullet below is an ASCII colon + space, never a full-width colon.
// NOTE on real limits: main compressor 20 MB per image; format converters
// 25 MB per file; Background Remover 20 MB. No fake stats anywhere.

export const JA = {
  header: {
    home: 'ホーム', // 'Home'
    tools: 'ツール', // 'Tools'
    howItWorks: '使い方', // 'How It Works'
    faq: 'よくある質問', // 'FAQ'
    about: '概要', // 'About'
    contact: 'お問い合わせ', // 'Contact'
    compressImages: '画像を圧縮', // 'Compress Images'
    themeLight: 'ライトモード', // 'Light Mode'
    themeDark: 'ダークモード', // 'Dark Mode'
    themeSystem: 'システム設定に合わせる', // 'System Default'
    languageLabel: '言語', // 'Language'
    homeAriaLabel: 'CompressMyPic – 無料オンライン画像圧縮ツールのロゴ', // 'CompressMyPic – Free online image compressor logo'
    themeLightShort: 'ライト', // 'Light'
    themeDarkShort: 'ダーク', // 'Dark'
    themeSystemShort: 'システム', // 'System'
    themeHeading: 'テーマ', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'ナビゲーションメニューの表示・非表示を切り替える', // 'Toggle navigation menu'
    themeAriaLabel: 'カラーテーマを変更（現在：{current}）', // 'Change color theme (Current: {current})'
    themeTitle: 'テーマ：{current}', // 'Theme: {current}'
    aboutUs: '私たちについて', // 'About Us' (mobile drawer)
    contactUs: 'お問い合わせ', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      '高速・安全・プライベートなブラウザ内画像圧縮。JPG・PNG・WebP画像を、データを外部サーバーにアップロードすることなく最適化できます。', // 'Fast, secure, and private browser-native image compression. Optimize JPG, PNG, and WebP images without uploading your data to any external server.'
    privacyNote: '100% デバイス内プライバシー', // '100% Client-Side Privacy'
    toolsHeading: '画像ツール', // 'Image Tools'
    legalHeading: '信頼と法務', // 'Trust & Legal'
    guidesHeading: 'ガイド', // 'Guides'
    moreHeading: 'その他のユーティリティ', // 'More Utilities'
    directoryHeading: '高度な圧縮・編集・開発者向けツール', // 'Advanced Compression, Editing & Developer Tools'
    processedLocally: 'HTML5 Canvasでローカル処理', // 'Processed locally via HTML5 Canvas'
    bottomRights:
      '© {year} CompressMyPic. 無断転載を禁じます。無料のブラウザ内画像圧縮ユーティリティ。', // '© {year} CompressMyPic. All rights reserved. Free client-side image compression utility.'
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: 'お問い合わせ：bilalayyah@gmail.com', // 'Contact: bilalayyah@gmail.com'
    toolsLinks: [
      { slug: '/', label: '画像圧縮' }, // 'Compress Images'
      { slug: '/image-resizer', label: '画像リサイズ' }, // 'Image Resizer'
      { slug: '/image-converter', label: '画像変換' }, // 'Image Converter'
      { slug: '/rotate-flip-image', label: '画像の回転と反転' }, // 'Rotate & Flip Image'
      { slug: '/image-to-pdf', label: '画像をPDFに変換' }, // 'Image to PDF'
      { slug: '/remove-image-metadata', label: 'メタデータを削除' }, // 'Remove Metadata'
      { slug: '/remove-background', label: '背景除去' }, // 'Background Remover'
    ],
    legalLinks: [
      { slug: '/privacy', label: 'プライバシーポリシー' }, // 'Privacy Policy'
      { slug: '/terms', label: '利用規約' }, // 'Terms of Service'
      { slug: '/about', label: '私たちについて' }, // 'About Us'
      { slug: '/contact', label: 'サポートに連絡' }, // 'Contact Support'
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: '画質を落とさずにWhatsApp用に画像を圧縮する方法', // 'How to compress images for WhatsApp without losing quality'
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP：どの形式を使うべきか？', // 'JPG vs PNG vs WebP: Which Format Should You Use?'
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Web・メール用に画像サイズを100KBまで小さくする方法', // 'How to Reduce Image Size to 100KB for Web & Email'
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'メタデータ・EXIFビューアー' }, // 'Metadata & EXIF Viewer'
      { slug: '/favicon-generator', label: 'ファビコン生成ツール' }, // 'Favicon Generator'
      { slug: '/image-color-picker', label: '画像カラーピッカー' }, // 'Image Color Picker'
      { slug: '/image-dimensions-checker', label: '画像サイズチェッカー' }, // 'Dimensions Checker'
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: '50KBに圧縮' }, // 'Compress to 50KB'
      { slug: '/compress-image-to-100kb', label: '100KBに圧縮' }, // 'Compress to 100KB'
      { slug: '/compress-image-to-200kb', label: '200KBに圧縮' }, // 'Compress to 200KB'
      { slug: '/compress-image-to-500kb', label: '500KBに圧縮' }, // 'Compress to 500KB'
      { slug: '/target-file-size-compressor', label: '目標サイズ圧縮ツール' }, // 'Target File Size Compressor'
      { slug: '/bulk-image-compressor', label: '一括画像圧縮ツール' }, // 'Bulk Image Compressor'
      { slug: '/bulk-image-resizer', label: '一括画像リサイズツール' }, // 'Bulk Image Resizer'
      { slug: '/bulk-image-converter', label: '一括画像変換ツール' }, // 'Bulk Image Converter'
      { slug: '/web-image-optimizer', label: 'Web画像最適化ツール' }, // 'Web Image Optimizer'
      { slug: '/gif-compressor', label: 'GIF圧縮ツール' }, // 'GIF Compressor'
      { slug: '/image-cropper', label: '画像切り抜きツール' }, // 'Image Cropper'
      { slug: '/image-watermark', label: '画像透かしツール' }, // 'Image Watermark'
      { slug: '/blur-pixelate-image', label: 'ぼかし・モザイク' }, // 'Blur & Pixelate'
      { slug: '/add-text-to-image', label: '画像にテキストを追加' }, // 'Add Text to Image'
      { slug: '/image-border-generator', label: '枠線生成ツール' }, // 'Border Generator'
      { slug: '/round-image-corners', label: '角丸ツール' }, // 'Round Corners'
      { slug: '/image-brightness-editor', label: '明るさ調整ツール' }, // 'Brightness Editor'
      { slug: '/image-contrast-editor', label: 'コントラスト調整ツール' }, // 'Contrast Editor'
      { slug: '/image-saturation-editor', label: '彩度調整ツール' }, // 'Saturation Editor'
      { slug: '/image-filters', label: '画像フィルター' }, // 'Image Filters'
      { slug: '/add-background-to-image', label: '背景を追加' }, // 'Add Background'
      { slug: '/image-splitter', label: '画像分割ツール' }, // 'Image Splitter'
      { slug: '/image-dpi-changer', label: 'DPI変更ツール' }, // 'DPI Changer'
      { slug: '/image-to-base64', label: '画像をBase64に変換' }, // 'Image to Base64'
      { slug: '/base64-to-image', label: 'Base64を画像に変換' }, // 'Base64 to Image'
      { slug: '/image-color-palette-extractor', label: 'カラーパレット抽出ツール' }, // 'Color Palette Extractor'
      { slug: '/gif-maker', label: 'GIF作成ツール' }, // 'GIF Maker'
      { slug: '/image-collage-maker', label: '画像コラージュ作成ツール' }, // 'Image Collage Maker'
      { slug: '/heic-to-jpg', label: 'HEICをJPGに変換' }, // 'HEIC to JPG'
      { slug: '/jpg-to-png', label: 'JPGをPNGに変換' }, // 'JPG to PNG'
      { slug: '/png-to-jpg', label: 'PNGをJPGに変換' }, // 'PNG to JPG'
      { slug: '/jpg-to-webp', label: 'JPGをWebPに変換' }, // 'JPG to WebP'
      { slug: '/webp-to-jpg', label: 'WebPをJPGに変換' }, // 'WebP to JPG'
      { slug: '/png-to-webp', label: 'PNGをWebPに変換' }, // 'PNG to WebP'
      { slug: '/webp-to-png', label: 'WebPをPNGに変換' }, // 'WebP to PNG'
      { slug: '/svg-to-png', label: 'SVGをPNGに変換' }, // 'SVG to PNG'
      { slug: '/avif-to-jpg', label: 'AVIFをJPGに変換' }, // 'AVIF to JPG'
      { slug: '/bmp-to-jpg', label: 'BMPをJPGに変換' }, // 'BMP to JPG'
    ],
  },
  hero: {
    pill: '100% プライベートなデバイス内圧縮・サーバーへのアップロードなし', // '100% Private Client-Side Compression · No Server Uploads'
    h1: '無料画像圧縮ツール – 画像をオンラインで圧縮し、画質そのままサイズを小さく', // 'Free Image Compressor – Compress Images Online & Reduce Size Without Losing Quality'
    sub: '目に見える画質を落とさずに、画像ファイルのサイズを小さくできます。無料の画像圧縮ツール・写真圧縮ツールで、JPG・PNG・WebP・HEIC対応のオンライン画像最適化ツール。高速・安全、登録不要・透かしなし、ブラウザで直接かんたんに画像を圧縮できます。', // 'Reduce image file sizes without sacrificing noticeable quality. Compress image online free with our free image compressor and photo compressor — an online image optimizer for JPG, PNG, WebP and HEIC. Fast, secure, no signup, no watermark, and easy image compression directly in your browser.'
    badge1: '画像がデバイスから外に出ることはありません', // 'Your images never leave your device'
    badge2: 'ブラウザで瞬時に処理', // 'Instant browser processing'
    badge3: 'JPG・PNG・WebP・HEICに対応', // 'JPG, PNG, WebP & HEIC supported'
  },
  toolsDirectory: {
    heading: 'その他の無料画像処理ツール', // 'More Free Image Processing Tools'
    subheading:
      'すべてのツールはブラウザで100%ローカルに動作します。サーバーへのアップロード、登録、透かしは一切ありません。', // 'Every tool runs 100% locally in your browser — no server uploads, no signup, no watermarks.'
    eyebrow: 'すべてブラウザ内ツール', // 'All Browser-Native Tools'
    allTools: 'すべてのツール', // 'All Tools'
    openTool: 'ツールを開く', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: '画像圧縮とは？', // 'What Is Image Compression?'
        body: '画像圧縮とは、画質を許容できる範囲で落とさずに、画像ファイルのバイト単位のサイズを小さくする処理です。カメラやスマートフォンが写真を保存するとき、大量のデータを記録しますが、その多くは削除・簡略化しても人の目にはほとんど違いが分かりません。CompressMyPicは、JPG・PNG・WebPファイルに対応した無料のオンライン画像最適化ツールであり、画像サイズ縮小ツールとして、写真圧縮ツール・写真サイズ縮小ツールとしても使えます。\n\n画像圧縮アルゴリズムはこうしたパターンを分析し、不要な情報を再構成したり、選んで削除したりします。その結果、ファイルは必要なストレージ容量が大幅に少なくなり、インターネット経由の転送もはるかに速くなります。このガイドでは、CompressMyPicに内蔵された画質スライダー、プリセット、形式選択を使って、画質を落とさずに画像を圧縮する方法を紹介します。', // 'Image compression is the process of reducing the file size of a graphics file in bytes without degrading the visual quality of the picture beyond an acceptable threshold. When a camera or smartphone saves a photo, it stores a huge amount of data — much of which the human eye cannot easily distinguish when removed or simplified. CompressMyPic is a free online image optimizer and image size reducer that works as a photo compressor and photo size reducer for JPG, PNG and WebP files.\n\nBy analyzing these patterns, image compression algorithms restructure or selectively discard redundant information. The resulting file requires significantly less storage capacity and transfers much faster across the internet. This guide shows you how to compress image without losing quality, using the quality slider, presets and format choice built into CompressMyPic.'
      },
      {
        heading: 'なぜ画像を圧縮すべきなのか？', // 'Why Should You Compress Images?'
        body: '最適化されていない画像は、ウェブサイトのパフォーマンス、ストレージの負担、モバイルデータ消費における最大のボトルネックのひとつです。画像を圧縮すると、すぐに実感できるメリットが得られます。', // 'Unoptimized images represent one of the single largest bottlenecks for website performance, storage overhead, and mobile data consumption. Compressing your images provides immediate tangible benefits:'
        bullets: [
          'ウェブサイトの読み込み高速化: 圧縮された画像を使ったページは最大70%速く表示され、Googleのコアウェブバイタル（Largest Contentful Paint）が改善し、検索順位も上がります。ウェブサイト用に画像サイズを小さくすると、訪問者の滞在時間が長くなり、離脱も減ります。', // 'Faster Website Loading: Pages with compressed images render up to 70% faster, improving your Google Core Web Vitals (Largest Contentful Paint) and boosting search engine rankings. When you reduce image size for website pages, visitors stay longer and bounce less.'
          'ストレージ負担の軽減: 肥大化した元ファイルではなく、最適化された画像ファイルを保存することで、クラウドホスティング、サーバーのディスク使用量、バックアップストレージのコストを削減できます。', // 'Reduced Storage Overhead: Cut down cloud hosting, server disk usage, and backup storage costs by storing streamlined image files instead of bloated originals.'
          '画像共有がもっと簡単に: 厳しいメール添付の容量制限やメッセージのアップロード上限に阻まれることがなくなります。圧縮した写真は、通信速度の遅いモバイル回線やデータ容量の少ないプランでも、すぐに添付して送信できます。', // 'Easier Image Sharing: Never get stopped by strict email attachment limits or messaging upload quotas. Compressed photos attach and send instantly, even on slow mobile connections or limited data plans.'
          '帯域幅の消費を削減: ユーザーのモバイルデータプランの費用を節約し、サイトからの離脱を防ぎます。ファイルが小さいほどダウンロードが速くなります。特に通信速度の遅いモバイル回線では効果的です。', // 'Reduced Bandwidth Consumption: Save your users money on mobile data plans and prevent visitors from abandoning your site. Smaller files mean faster downloads — especially on slower mobile connections.'
        ],
      },
      {
        heading: '使い方', // 'How It Works'
        body: '写真の圧縮は数秒で完了します。アカウントも、ソフトウェアも、アップロードも不要です。画質を落とさずに画像を圧縮する方法を、かんたんな3ステップで紹介します。', // 'Compressing your photos takes seconds — no account, no software, no upload. Here is how to compress image without losing quality in three simple steps.'
        bullets: [
          'ステップ1 — 画像をアップロード: JPG・PNG・WebP・HEIC画像をアップロードエリアにドラッグ＆ドロップするか、「ファイルを選択」をクリックして選ぶか、Ctrl+Vで画像を貼り付けます。複数画像を一度にアップロードでき、1枚あたり最大20MBまで対応しています。', // 'Step 1 — Upload your images: Drag and drop your JPG, PNG, WebP or HEIC images into the upload area, click Browse Files to select them, or paste an image with Ctrl+V. You can upload multiple images at once, up to 20 MB per image.'
          'ステップ2 — 画質を調整し、形式を選ぶ: 「低」「バランス」「高」プリセットを選ぶか、画質スライダーを10%から100%まで動かし、元の形式を維持するか、JPG・PNG・WebPに変換するかを選びます。各画像の圧縮前後のファイルサイズがリアルタイムで表示され、比較スライダーで画質を目で確認できます。', // 'Step 2 — Adjust quality and choose your format: Choose a Low, Balanced or High preset, or move the quality slider from 10% to 100%, and choose to keep the original format or convert to JPG, PNG or WebP. Watch the live before-and-after file size for every image and use the interactive comparison slider to check the visual result.'
          'ステップ3 — 圧縮した画像をダウンロード: 圧縮した画像を1枚ずつダウンロードするか、「すべてダウンロード（ZIP）」をクリックしてバッチ全体を1つのファイルでダウンロードします。画像はブラウザ内で直接圧縮されるため、待つ必要も、アップロードする必要もありません。', // 'Step 3 — Download your compressed images: Download each compressed image individually, or click Download All (ZIP) to download the whole batch in one file. Your images are compressed right in your browser, so there is nothing to wait for and nothing to upload.'
        ],
      },
      {
        heading: 'なぜこの無料画像圧縮ツールを使うのか？', // 'Why Use This Free Image Compressor?'
        body: 'CompressMyPicは、登録不要・透かしなしの無料画像圧縮ツールです。日常の写真、ウェブサイトの画像、ソーシャルメディアの投稿用に作られています。', // 'CompressMyPic is a free image compressor with no signup and no watermark — built for everyday photos, website images and social media uploads.'
        bullets: [
          'JPG・PNG・WebP・HEICを圧縮: 実際に使う形式に対応した、ひとつの画像圧縮ツールです。JPG・JPEG写真を圧縮し、透明度を保ったままPNG画像を圧縮し、最小のファイルサイズのためにWebP画像を圧縮できます。', // 'Compress JPG, PNG, WebP & HEIC: A single image compressor for the formats you actually use. Compress JPG and JPEG photos, compress PNG graphics while keeping transparency, and compress WebP images for the smallest files.'
          '画質を落とさずに画像サイズを縮小: スマート圧縮が不要なデータやメタデータを削除しながら、元の画像とほぼ同じ見た目を保ちます。「バランス」プリセットが最適な出発点で、圧縮前後の比較で画質を自分で確認できます。', // 'Reduce Image Size Without Losing Quality: Smart compression removes redundant data and metadata while keeping the picture looking virtually identical to the original. The Balanced preset is the best starting point, and the before-and-after comparison lets you verify the quality yourself.'
          '一括画像圧縮ツール – 複数の画像を一度に圧縮: この一括画像圧縮ツール・バッチ画像圧縮ツールを使えば、複数の画像を同じ設定で一度に圧縮し、「すべてダウンロード（ZIP）」ボタンでまとめてダウンロードできます。1枚ずつ保存する手間がありません。', // 'Bulk Image Compressor – Compress Multiple Images at Once: This bulk image compressor and batch image compressor lets you compress multiple images at once with the same settings, then download them all together with the Download All (ZIP) button instead of saving files one by one.'
          'WhatsApp・Instagram・Facebook用に画像を圧縮: 写真を小さくすれば、WhatsAppで速く送信でき、InstagramやFacebookにもスムーズにアップロードできます。ファイルが小さいほどモバイルデータの使用量が少なく、サイズが大きすぎて拒否される心配も大幅に減ります。', // 'Compress Images for WhatsApp, Instagram & Facebook: Shrink photos so they send fast on WhatsApp and upload smoothly to Instagram and Facebook. Smaller files use less mobile data and are far less likely to be rejected for being too large.'
          '画像サイズを20KB・50KB・100KB・200KBに縮小: 画質スライダーを少しずつ下げ、リアルタイムの圧縮前後サイズを確認しながら、目標サイズ（200KB、100KB、50KB、さらには20KB）に近づけます。出力形式をWebPに切り替えると、画質の劣化を抑えながら目標に到達しやすくなります。', // 'Reduce Image Size to 20KB, 50KB, 100KB or 200KB: Lower the quality slider step by step and watch the live before-and-after size until you reach your target — 200KB, 100KB, 50KB or even 20KB. Switching the output format to WebP usually gets you there with less visible quality loss.'
        ],
      },
      {
        heading: 'JPG・PNG・WebPの圧縮：どの形式を選ぶべきか？', // 'Compress JPG, PNG and WebP: Which Format Should You Choose?'
        body: 'JPG、PNG、WebPはそれぞれ異なる目的に適しています。それぞれの強みを理解することで、プロジェクトに最適な選択ができます。\n\n見た目の違いを比較する: どれくらいの圧縮なら許容できるか分からない場合は、ツール内の圧縮前後比較オプションを使ってください。インタラクティブなスライダーで元の画像と圧縮後の画像を並べて確認し、ダウンロード前に画質の劣化やアーティファクトがないかチェックできます。', // 'JPG, PNG, and WebP each serve a different purpose. Understanding their strengths helps you make the best choice for your specific project.\n\nCompare the Visual Difference: Not sure how much compression is acceptable? Use the before-and-after comparison option in the tool. Our interactive slider tool lets you inspect the original image and the compressed version side-by-side to spot any visual artifacts or quality loss before you download.'
        bullets: [
          'JPG圧縮ツール – JPGをオンラインで無料圧縮: ウェブサイト、ブログ、ポートフォリオの写真に最適です。JPGをオンラインで無料圧縮し、画質スライダーを下げながらリアルタイムのサイズを確認して、JPEGを100KBまで圧縮できます。JPEG圧縮は非可逆圧縮で、人の目ではほとんど分からない視覚データを永久に削除します。そのため、写真をメガバイト単位からキロバイト単位まで小さくでき、目に見える画質の劣化はほとんどありません。', // 'JPG Compressor — Compress JPG Online Free: Best for photographs on your website, blog, or portfolio. Compress JPG online free and compress JPEG to 100KB by lowering the quality slider while watching the live size. JPEG compression is lossy — it permanently removes some visual data that the human eye struggles to perceive. As a result, you can shrink a photo from megabytes to kilobytes with virtually no visible quality loss.'
          'PNG圧縮ツール – PNGをオンラインで無料圧縮: グラフィック、スクリーンショット、ロゴ、透明度が必要な画像（ロゴ、アイコン、イラストなど）に最適です。PNGをオンラインで無料圧縮でき、透明度を完全に保ったままシャープでピクセルパーフェクトなグラフィックを維持できます。PNGをWebPに変換すると、さらに大幅に小さくなることがよくあります。', // 'PNG Compressor — Compress PNG Online Free: Best for graphics, screenshots, logos, and images that require transparency, such as logos, icons, or illustrations. Compress PNG online free here while keeping full transparency for sharp, pixel-perfect graphics. Converting a PNG to WebP often makes it much smaller.'
          'WebP画像を圧縮 – モダンな形式: Web最適化に最適です。WebPは優れた非可逆・可逆圧縮を提供し、通常JPEGやPNGより25～35%小さくなります。WebP画像ファイルを圧縮すれば、同等の画質で最小のサイズが得られ、画質の劣化を目立たせずにウェブページ用に画像を最適化したい場合に最適です。ほとんどのウェブサイトにとって最良の選択です。', // 'Compress WebP Image — The Modern Format: Best for web optimisation. WebP offers excellent lossy and lossless compression that is typically 25-35% smaller than JPEG or PNG. Compress WebP image files for the smallest size at similar quality, and use WebP when you want to optimize images for web pages without visible quality loss. It is the best choice for most websites.'
        ],
      },
      {
        heading: 'この画像圧縮ツールは何に使える？', // 'What Can You Use This Image Compressor For?'
        body: 'ひとつの無料画像圧縮ツールで、画像サイズを小さくしたい最も一般的な理由のほとんどに対応できます。', // 'One free image compressor covers the most common reasons people need to reduce image size.'
        bullets: [
          'ウェブ用に画像を最適化: ウェブページ用に画像を最適化して読み込みを速くし、コアウェブバイタルを改善して検索順位を上げます。画像が小さいほどページが速くなり、訪問者は満足し、ホスティングの帯域幅も節約できます。', // 'Optimize images for web: Optimize images for web pages to load faster, improve Core Web Vitals and rank better. Smaller images mean faster pages, happier visitors and lower hosting bandwidth.'
          'メール添付用に画像を圧縮: メール添付用に画像を圧縮し、写真が添付サイズの制限内に収まるようにします。大きな元ファイルではなく、小さくなったダウンロードファイルを添付すれば、メールが差し戻されることなく送信できます。', // 'Compress images for email attachment: Compress images for an email attachment so your photos fit inside attachment size limits. Attach the smaller downloads instead of the large originals and your emails will send without bouncing.'
          'ウェブサイト用に写真を圧縮: ウェブサイト、ブログ、ポートフォリオ、オンラインストアにアップロードする前に写真を圧縮します。商品写真、バナー、ブログ画像はシャープなまま、サーバー上の容量を大幅に節約できます。', // 'Compress photo for website: Compress a photo for your website, blog, portfolio or online store before you upload it. Product photos, banners and blog images stay sharp while taking up far less space on your server.'
          '写真のファイルサイズを小さく: スマートフォンやカメラの写真を、共有・バックアップ・印刷する前にファイルサイズを小さくします。大きな写真もすぐに送信でき、簡単に保存・管理できます。', // 'Reduce photo file size: Reduce photo file size from a phone or camera before sharing, backing up or printing. Large photos become quick to send, easy to store and simple to manage.'
        ],
      },
      {
        heading: 'なぜ画像サイズが重要なのか', // 'Why Image Size Matters'
        body: '大きくて高解像度の画像ファイルは、カメラ技術の急速な進歩の結果です。画像はわずか数年前と比べて2～3倍も大きくなっています。ウェブサイト用に画像サイズを小さくし、ウェブ用に画像を最適化すれば、サイトの読み込みが速くなり、帯域幅の使用量が減り、検索結果での順位も上がります。\n\n良い圧縮ツールを探すときは、次の3つをチェックしてください。1）画質を損なわないこと、2）データをプライベートに保つこと（デバイス内処理）、3）ファイルを遠くのサーバーに送ることなく高速に処理すること。まさにそれが、CompressMyPicが作られた目的です。', // 'Large, high-resolution image files are the result of the rapid advancement in camera technology — images are now 2-3x larger than they were just a few years ago. When you reduce image size for website pages and optimize images for web use, your site loads faster, uses less bandwidth and ranks better in search results.\n\nWhen searching for a good compressor, look for one that: 1) does not compromise on quality, 2) keeps your data private (client-side processing), and 3) processes images fast without running your files through a distant server. That is exactly what CompressMyPic is built for.'
      },
      {
        heading: '最適化のコツ：画質を落とさずに画像サイズを小さくする', // 'Optimization Tips: Reduce Image Size Without Losing Quality'
        body: '',
        bullets: [
          '「バランス」プリセットから始める: 「バランス」プリセット（画質70%）は、ほとんどの画像にとって最適なバランスです。ファイルは大幅に小さくなり、元の画像との見た目の違いもほとんどありません。', // 'Start with the Balanced Preset: The Balanced preset (70% quality) offers the optimal trade-off for most images — dramatically smaller files with great visual similarity to the original.'
          '適切な形式を選ぶ: 写真の場合は、JPGやWebPがファイルサイズで常にPNGを上回ります。透明度のあるロゴやライングラフィックにはPNGを使います。', // 'Choose the right format: For photographs, JPG or WebP will always outperform PNG in file size. For logos and line graphics with transparency, use PNG.'
          '目標サイズを目指す: ウェブサイト用には200KB未満の画像を目指します。メールやメッセージ用には、高速に配信できるよう1MB未満に抑えます。画質スライダーとリアルタイムのサイズ表示を使って目標サイズに到達しましょう。', // 'Aim for a target size: For website use, aim for images under 200 KB. For emails and messages, stay under 1 MB to ensure fast delivery. Use the quality slider and the live size display to reach your target size.'
          'ちょうど良いポイントを見つける: 画質が重要なヒーロー画像には画質スライダーを85～90%に設定します。一般的なウェブサイト利用では70～80%が理想的なバランスです。サムネイルやサイズを最優先する場合は50～60%が適しています。', // 'Find the sweet spot: Set the quality slider to 85-90% for hero images where quality matters; 70-80% is typically the ideal balance for general website use; 50-60% is better for thumbnails or when size is the top priority.'
          '最小のファイルにはWebPを試す: 出力形式をWebPに切り替えると、通常JPGやPNGが同等の画質でさらに25～35%小さくなります。画質を落とさずに画像サイズを小さくする、かんたんな方法です。', // 'Try WebP for the smallest files: Switching the output format to WebP usually shrinks a JPG or PNG by another 25-35% at similar quality — a simple way to reduce image size without losing quality.'
        ],
      },
    ],
  },
  faqSection: {
    heading: 'よくある質問', // 'Frequently Asked Questions'
    subheading:
      'CompressMyPicで画像をオンラインで無料圧縮するために知っておきたいことをすべてまとめました。', // 'Everything you need to know about compressing images online for free with CompressMyPic.'
    faqs: [
      {
        id: 'faq-1',
        question: '画像をオンラインで無料圧縮するにはどうすればいいですか？', // 'How can I compress an image online for free?'
        answer:
          '画像ファイルをCompressMyPicにドラッグ＆ドロップするか、「ファイルを選択」をクリックするだけです。圧縮プリセット（低・バランス・高）を選ぶか、画質スライダーを調整して、最適化された画像をすぐにダウンロードできます。このツールは100%無料で、登録もソフトウェアのインストールも不要です。', // 'Simply drag and drop your image files onto CompressMyPic or click "Browse Files". Choose a compression preset (Low, Balanced, or High) or adjust the quality slider, then download your optimized images instantly. The tool is 100% free with no sign-up or software installation required.'
      },
      {
        id: 'faq-2',
        question: '画像を100KBまで圧縮するにはどうすればいいですか？', // 'How do I compress an image to 100KB?'
        answer:
          'CompressMyPicには目標KBを直接入力する欄がないため、100KBと直接入力することはできません。代わりに画像をアップロードし、プリセットを選ぶか画質スライダーを下げて、各画像に表示されるリアルタイムの圧縮前後サイズを確認します。画質を調整するか、出力形式をWebPに切り替えて、圧縮後のサイズが100KBに近づいたらダウンロードしてください。', // 'CompressMyPic does not have an exact target-KB input box, so you cannot type in 100KB directly. Instead, upload your image, choose a preset or lower the quality slider, and watch the live before-and-after size shown for each image. Adjust the quality or switch the output format to WebP until the compressed size is close to 100KB, then download it.'
      },
      {
        id: 'faq-3',
        question: '画質を落とさずに画像サイズを小さくするにはどうすればいいですか？', // 'How can I reduce image size without losing quality?'
        answer:
          '「バランス」プリセット（画質約70%）か、85～90%の高画質設定を選んでください。不要なデータやメタデータを削除しながら、元の画像とほぼ同じ見た目を保ちます。インタラクティブな圧縮前後比較で結果を確認し、元の形式を維持するか、画質とサイズのバランスが最良のWebPを選びましょう。', // 'Choose the Balanced preset (around 70% quality) or a high quality setting of 85-90%, which removes redundant data and metadata while keeping the picture looking virtually identical to the original. Use the interactive before-and-after comparison to check the result, and keep the original format or choose WebP for the best quality-to-size balance.'
      },
      {
        id: 'faq-4',
        question: 'JPEGを100KBまで圧縮するにはどうすればいいですか？', // 'How do I compress a JPEG to 100KB?'
        answer:
          'JPEGのファイルサイズを小さくするには、JPEGをアップロードし、出力形式でJPEGを選んでから、リアルタイムの圧縮サイズを確認しながら画質スライダーを少しずつ下げます。目標KBを直接入力する欄はないため、圧縮前後のサイズ表示を見て、ファイルが100KBに近づいたところで止めます。', // 'To reduce JPEG file size, upload your JPEG, choose JPEG as the output format, then lower the quality slider step by step while watching the live compressed size. Because there is no exact target-KB box, use the before-and-after size display to stop when the file is close to 100KB.'
      },
      {
        id: 'faq-5',
        question: '画像サイズを20KB・50KB・200KBまで小さくするにはどうすればいいですか？', // 'How do I reduce image size to 20KB, 50KB or 200KB?'
        answer:
          '画像をアップロードし、変更するたびにリアルタイムの圧縮前後サイズを確認しながら画質スライダーを少しずつ下げて、目標サイズ（200KB、50KB、20KB）に到達します。20KBのような小さい目標では、通常より低い画質設定とWebP出力が必要です。同じ方法は500KBを含むあらゆる目標サイズに使え、サイズは常にKBで表示されるため、画像サイズを何KB小さくできたか正確に確認できます。', // 'Upload your image and lower the quality slider gradually, checking the live before-and-after size after each change, until you reach your target - 200KB, 50KB or 20KB. Smaller targets such as 20KB usually need a lower quality setting and WebP output. The same method works for any target, including 500KB, and the size is always shown in KB so you can see exactly how much you reduced the image size in KB.'
      },
      {
        id: 'faq-6',
        question: 'PNGをオンラインで無料圧縮するにはどうすればいいですか？', // 'How do I compress a PNG online for free?'
        answer:
          'PNGをCompressMyPicにアップロードし、プリセットを選ぶか画質スライダーを調整してください。PNGのオンライン圧縮はここでは無料で、登録は不要です。PNGとWebP出力では透明度が保持され、PNGをWebPに変換すると大幅に小さくなることがよくあります。', // 'Upload your PNG to CompressMyPic and choose a preset or adjust the quality slider - compressing a PNG online is free here, with no signup. Transparency is preserved for PNG and WebP output, and converting a PNG to WebP often makes it much smaller.'
      },
      {
        id: 'faq-7',
        question: '対応している画像形式は何ですか？', // 'What image formats are supported?'
        answer:
          'CompressMyPicはJPG（JPEG）、PNG、WebP、HEICに対応しています。iPhoneで撮影した写真も含まれます。iPhoneの写真はデフォルトでHEICとして保存されます。元の形式を維持することも、形式間で変換することもできます。たとえば、JPGファイルをJPEGとして圧縮したり、透明度を保ったままPNGファイルを圧縮したり、最小のファイルにするためにWebPに変換したりできます。', // 'CompressMyPic supports JPG (JPEG), PNG, WebP and HEIC — including photos taken on iPhones, which save as HEIC by default. You can keep the original format or convert between them - for example, compress JPG files as JPEG, compress PNG files while keeping transparency, or convert to WebP for the smallest files.'
      },
      {
        id: 'faq-8',
        question: '複数の画像を一度に圧縮できますか？', // 'Can I compress multiple images at once?'
        answer:
          'はい。この一括画像圧縮ツール・バッチ画像圧縮ツールでは、数十枚の画像を一度にアップロードし、同じ設定で複数の画像を一度に圧縮して、「すべてダウンロード（ZIP）」ボタンでまとめてダウンロードすることも、1枚ずつダウンロードすることもできます。', // 'Yes. This bulk image compressor and batch image compressor lets you upload dozens of images at once, compress multiple images at once with the same settings, and download them all together with the "Download All (ZIP)" button, or download each one individually.'
      },
      {
        id: 'faq-9',
        question: 'WhatsApp用に画像を圧縮するにはどうすればいいですか？', // 'How do I compress an image for WhatsApp?'
        answer:
          '写真をアップロードし、画質の低いプリセットやWebP出力を選んで、WhatsAppで共有する前に小さいファイルをダウンロードします。写真が小さいほど送信が速くなり、モバイルデータの使用量が少なく、サイズが大きすぎて拒否される可能性も低くなります。', // 'Upload your photo, choose a lower quality preset or WebP output, and download the smaller file before sharing it on WhatsApp. Smaller photos send faster, use less mobile data, and are less likely to be rejected for being too large.'
      },
      {
        id: 'faq-10',
        question: 'InstagramやFacebook用に画像を圧縮するにはどうすればいいですか？', // 'How do I compress an image for Instagram or Facebook?'
        answer:
          'ここにアップロードし、「バランス」プリセットを選んで、小さくなったJPGまたはWebPファイルをダウンロードすることで、InstagramやFacebook用に写真を圧縮できます。ファイルが小さいほどアップロードが速くなり、フィード、ストーリー、プロフィール写真に十分な画質が保たれます。', // 'Compress your photo for Instagram or Facebook by uploading it here, choosing the Balanced preset, and downloading the smaller JPG or WebP file. The reduced file uploads faster and keeps enough quality for feeds, stories and profile pictures.'
      },
      {
        id: 'faq-11',
        question: 'メール添付用に画像を圧縮できますか？', // 'Can I compress images for an email attachment?'
        answer:
          'はい。画質スライダーで小さくして、各ファイルがメールプロバイダーの添付サイズ制限に収まるようにすることで、メール添付用に画像を圧縮できます。その後、大きな元ファイルではなく、ダウンロードしたファイルをメッセージに添付してください。', // 'Yes. Compress images for an email attachment by reducing them with the quality slider until each file is small enough for your email provider attachment limit, then attach the downloaded files to your message instead of the large originals.'
      },
      {
        id: 'faq-12',
        question: 'CompressMyPicは本当に無料ですか？', // 'Is CompressMyPic really free?'
        answer:
          'はい、CompressMyPicは完全に無料で使えます。料金も、有料プランも、クレジットもなく、圧縮できる画像の数に制限もありません。', // 'Yes, CompressMyPic is completely free to use. There are no fees, no paid plans, no credits and no limits on how many images you can compress.'
      },
      {
        id: 'faq-13',
        question: 'CompressMyPicは透かしを追加しますか？', // 'Does CompressMyPic add a watermark?'
        answer:
          'いいえ。CompressMyPicは透かしなしの無料画像圧縮ツールです。圧縮後の画像はクリーンで、ロゴ、テキスト、ブランド表示は一切追加されません。', // 'No. CompressMyPic is a free image compressor with no watermark - your compressed images are clean, with no logo, text or branding added.'
      },
      {
        id: 'faq-14',
        question: 'CompressMyPicを使うのに登録は必要ですか？', // 'Do I need to sign up to use CompressMyPic?'
        answer:
          'いいえ。これは登録不要の無料画像圧縮ツールです。アカウント、メールアドレス、パスワードは不要です。サイトを開いて、すぐに圧縮を始められます。', // 'No. This is a free image compressor with no signup: there is no account, no email address and no password required. Just open the site and start compressing.'
      },
      {
        id: 'faq-15',
        question: '画像はサーバーにアップロードされますか？', // 'Are my images uploaded to a server?'
        answer:
          'いいえ。すべての圧縮は、ウェブブラウザ内でお使いのデバイス上で完全に処理されるため、画像がサーバーにアップロードされたり、保存されたり、他人に見られたりすることはありません。画像はブラウザのメモリ内に留まり、タブを更新または閉じると消去されます。', // 'No. All compression happens entirely on your own device inside your web browser, so your images are never uploaded to a server, stored or viewed by anyone else. They stay in your browser memory and are cleared when you refresh or close the tab.'
      },
      {
        id: 'faq-16',
        question: 'ファイルサイズの制限はありますか？', // 'Is there a file size limit?'
        answer:
          'はい、制限は1枚あたり20MBで、高解像度のカメラ写真や大きなスクリーンショットにも対応しています。処理はお使いのデバイスで行われるため、大きなファイルでも圧縮は高速です。', // 'Yes, the limit is 20 MB per image, which covers high-resolution camera photos and large screenshots. Because processing happens on your device, compression stays fast even for large files.'
      },
      {
        id: 'faq-17',
        question: '画像を圧縮すると寸法は変わりますか？', // 'Does compressing an image change its dimensions?'
        answer:
          'いいえ。CompressMyPicは画像の寸法を変更しません。ファイルサイズだけが小さくなります。写真は元と同じ幅、高さ、アスペクト比を維持します。', // 'No. CompressMyPic keeps your image dimensions unchanged - only the file size is reduced. Your photo keeps the same width, height and aspect ratio as the original.'
      },
      {
        id: 'faq-18',
        question: 'スマートフォンで画像を圧縮できますか？', // 'Can I compress images on mobile?'
        answer:
          'はい。CompressMyPicはiOSとAndroidのモバイルブラウザで動作するため、カメラロールから写真を選ぶか、新しい写真を撮影してここにアップロードすることで、スマートフォンで写真を圧縮できます。', // 'Yes. CompressMyPic works on mobile browsers on iOS and Android, so you can compress a photo on your phone by picking it from your camera roll or taking a new picture and uploading it here.'
      },
      {
        id: 'faq-19',
        question: '画質スライダーはどのように機能しますか？', // 'How does the quality slider work?'
        answer:
          '画質スライダーでは、圧縮画質を10%から100%まで設定できます。値が高いほど細部が多く残り、ファイルは大きくなります。値が低いほどファイルは大幅に小さくなります。「低」「バランス」「高」プリセットがスライダーを自動で設定し、リアルタイムの圧縮前後サイズが変更の結果を表示します。', // 'The quality slider lets you set the compression quality from 10% to 100%. Higher values keep more detail and produce larger files, while lower values make files much smaller. The Low, Balanced and High presets set the slider for you, and the live before-and-after size shows the result of every change.'
      },
      {
        id: 'faq-20',
        question: '出力形式はどうやって選びますか？', // 'How do I choose the output format?'
        answer:
          '画像をアップロードした後、元の形式を維持するか、JPG・PNG・WebPに変換するかを選びます。WebPは通常、ウェブページ用に画像を最適化するのに最適な選択です。同等の画質でJPEGより25～35%小さくなります。一方、透明度が必要な場合はPNGが最適です。', // 'After uploading an image, choose whether to keep the original format or convert to JPG, PNG or WebP. WebP is usually the best choice to optimize images for web pages because it is 25-35% smaller than JPEG at similar quality, while PNG is best when you need transparency.'
      },
    ],
  },
  guidesSection: {
    heading: 'ガイド', // 'Guides'
    subheading:
      '画質を落とさずにファイルサイズを小さくするためのステップバイステップガイド。', // 'Step-by-step guides to get smaller files without losing visible quality.'
    cards: [
      {
        title: '画質を落とさずにWhatsApp用に画像を圧縮する方法', // 'How to compress images for WhatsApp without losing quality'
        desc: '送信前に写真を小さくして、シャープなまま速く送信できます。', // 'Shrink photos before sending so they stay sharp and send fast.'
        cta: 'ガイドを読む →', // 'Read guide →'
      },
      {
        title: 'JPG vs PNG vs WebP：どの形式を使うべきか？', // 'JPG vs PNG vs WebP: Which Format Should You Use?'
        desc: 'ファイルサイズ、画質、透明度を比較して、適切な形式を選びましょう。', // 'File size, quality and transparency compared, so you can pick the right format.'
        cta: 'ガイドを読む →', // 'Read guide →'
      },
      {
        title: 'Web・メール用に画像サイズを100KBまで小さくする方法', // 'How to Reduce Image Size to 100KB for Web & Email'
        desc: 'ステップバイステップ：画質を落とさずに100KBを達成します。', // 'Step-by-step: hit 100KB without losing visible quality.'
        cta: 'ガイドを読む →', // 'Read guide →'
      },
    ],
  },
  shareSection: {
    heading: 'CompressMyPicを友達とシェアする', // 'Share CompressMyPic with friends'
    text: 'このツールが役に立ちましたか？友達の画像圧縮も手伝ってあげましょう。ワンタップでできます。', // 'Found this tool useful? Help a friend compress their images too — it takes one tap.'
    shareText:
      '画像をオンラインで無料圧縮 — 登録不要、透かしなし。CompressMyPicを試す：', // 'Compress images online for free — no signup, no watermark. Try CompressMyPic:'
    siteUrl: 'https://compressmypic.online/',
    shareOn: '{name}でシェア', // 'Share on {name}'
    copyLink: 'リンクをコピー', // 'Copy link'
    copied: 'コピーしました！', // 'Copied!'
    share: 'シェア', // 'Share'
    emailSubject: '無料画像圧縮ツール – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – 無料画像圧縮ツール', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'ホーム', // 'Home'
    privacyPill: '100% プライベートなブラウザ内処理・ファイルがデバイスから出ることはありません', // '100% Private Browser Processing · Files Never Leave Your Device'
    noUploads: 'サーバーへのアップロードなし', // 'No server uploads'
    freeNote: '無料・登録不要・透かしなし', // 'Free · No signup · No watermark'
    howToTitle: '{name}の使い方', // 'How to Use {name}'
    howToIntro:
      'かんたんなステップに従って、ブラウザ内で直接タスクを完了しましょう。', // 'Follow these simple steps to complete your task — right inside your browser.'
    featuresTitle: 'CompressMyPicの{name}を使う理由', // 'Why Use CompressMyPic {name}?'
    faqTitle: '{name} — よくある質問', // '{name} — Frequently Asked Questions'
    relatedTitle: '関連する無料画像ツール', // 'Related Free Image Tools'
    commentsTitle: 'コメント',
    commentsNote: 'このツールについての感想を共有しましょう — 名前を書いて投稿するだけ。アカウントは不要です。',
    commentsNamePlaceholder: 'あなたの名前',
    commentsTextPlaceholder: 'コメントを書く…',
    commentsSubmit: 'コメントを投稿',
    commentsPosting: '投稿中…',
    commentsEmpty: '最初のコメントを投稿しましょう。',
    commentsPosted: 'ありがとうございます！コメントが公開されました。',
    commentsLoadError: 'コメントを読み込めませんでした。もう一度お試しください。',
    commentsPostError: 'コメントを投稿できませんでした。もう一度お試しください。',
    commentsRetry: '再試行',
    commentsLoading: 'コメントを読み込み中…',
  },
  uploadZone: {
    dropText: '画像をここにドラッグ＆ドロップ', // 'Drag & drop images here'
    browseButton: 'ファイルを選択', // 'browse files'
    browsePrefix: 'または', // 'or'
    browseSuffix: 'パソコンやスマートフォンから', // 'from your computer or phone'
    orPaste: '貼り付け（Ctrl+V）にも対応', // 'Paste (Ctrl+V) supported'
    hint: '1枚あたり最大{max}MB', // 'Max {max} MB per image'
    errorTooBig: '「{name}」は上限の{max}MBを超えています。', // '"{name}" exceeds the maximum limit of {max} MB.'
    errorBadType: '「{name}」は対応していない形式です（{formats}）。', // '"{name}" is not a supported format ({formats}).'
    errorUnreadable: '「{name}」は空のファイルです（0バイト）。', // '"{name}" is an empty file (0 bytes).'
    errorMore: '（他に{count}件のエラー）', // '(+{count} more errors)'
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      '画像アップロードエリア。ドラッグ＆ドロップするか、クリックしてファイルを選択してください。', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: '破損しているか、読み取れないファイルです。', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: '画質のビジュアル比較', // 'Visual Quality Comparison'
    beforeLabel: '元画像（圧縮前）', // 'Original (Before)'
    afterLabel: '圧縮後', // 'Compressed (After)'
    closeLabel: '比較表示を閉じる', // 'Close comparison view'
    instruction: 'スライダーを左右にドラッグして、ピクセル単位の画質を確認できます。', // 'Drag the slider handle left or right to inspect pixel quality.'
    sliderLabel: 'スライダー', // 'Slider'
    sideBySideLabel: '並べて表示', // 'Side by Side'
    zoomInLabel: '拡大', // 'Zoom in'
    zoomOutLabel: '縮小', // 'Zoom out'
    originalLabel: '元画像：', // 'Original:'
    outputLabel: '出力：', // 'Output:'
    reductionLabel: '削減：', // 'Reduction:'
    sizeChangeLabel: 'サイズ変更：', // 'Size Change:'
    qualityLabel: '画質設定：', // 'Quality Setting:'
    formatLabel: '形式：', // 'Format:'
    modalAriaLabel: '画像比較モーダル', // 'Image comparison modal'
    altCompressed: '{name}の圧縮バージョン', // 'Compressed version of {name}'
    altOriginal: '{name}の元のバージョン', // 'Original version of {name}'
    altProcessed: '{name}の処理済みバージョン', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: '無料画像圧縮ツール オンライン – 画像サイズを100KBまで小さく', // 'Free Image Compressor Online – Reduce Image Size to 100KB'
    seoDescription:
      '画像をオンラインで無料圧縮 — 画質を落とさずに画像サイズを小さくできます。JPG・PNG・WebP・HEICに対応し、登録不要・透かしなし。ブラウザ内で直接処理するので、写真もウェブサイトの画像も安全に圧縮できます。今すぐ無料でお試しください。インストールも不要です。何枚でも圧縮できます。数秒で完了します。', // 'Compress image online free — reduce image size without losing quality. Compress JPG, PNG and WebP with no signup and no watermark, right in your browser.'
    h1: '無料画像圧縮ツール オンライン', // 'Free Image Compressor'
    subtitle: 'JPG・PNG・WebP・HEICのファイルサイズを、ブラウザで直接小さくできます。', // 'Reduce JPG, PNG, WebP & HEIC file size directly in your browser.'
  },
  categories: {
    compress: '圧縮', // 'Compress'
    resize: 'サイズ変更', // 'Resize'
    convert: '変換', // 'Convert'
    'crop-edit': 'トリミングと編集', // 'Crop & Edit'
    'ai-tools': 'AIツール', // 'AI Tools'
    create: '作成', // 'Create'
    privacy: 'プライバシー', // 'Privacy Tools'
    developer: '開発者ツール', // 'Developer Tools'
  },
  compressionControls: {
    modeLabel: '圧縮モード', // 'Compression Mode'
    presetLow: '低圧縮（85%）', // 'Low Compression (85%)'
    presetBalanced: 'バランス（70%）', // 'Balanced (70%)'
    presetHigh: '高圧縮（50%）', // 'High Compression (50%)'
    presetCustom: 'カスタム', // 'Custom'
    formatLabel: '出力形式', // 'Output Format'
    formatOriginal: '元の形式', // 'Original'
    qualityLabel: '画質の目標：', // 'Quality Target:'
    qualityHigh: '高画質', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'ウェブ最適バランス', // 'Optimal Web Balance' (60–79)
    qualityMax: '最大の容量節約', // 'Max Space Savings' (< 60)
    qualityAriaLabel: '10%から100%までの画質スライダー', // 'Quality slider from 10 to 100 percent'
    compressAll: 'すべて再圧縮', // 'Re-compress All'
    compressing: '圧縮中…', // 'Compressing...'
    clearAll: 'すべて消去', // 'Clear All'
    clearAllTitle: 'すべての画像を消去', // 'Clear all images'
    transparencyTitle: 'JPEG変換時の透明度に関する注意', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'JPEG形式は透明度（アルファチャンネル）に対応していません。透明な背景は単色の背景（デフォルトは白）に置き換えられます。透明な背景を維持したい場合は、PNGまたはWebPを選択してください。', // 'JPEG format does not support transparency (alpha channels). Transparent backgrounds will be replaced with a solid matte background (default white). Select PNG or WebP if you wish to retain transparent backgrounds.'
    pngTip:
      'PNGは可逆形式で画質スライダーを無視するため、PNGを再エンコードすると元のファイルサイズと同じか、それ以上になることがあります。写真のようなPNGの場合は、WebPまたはJPGを選ぶと通常50～80%小さくなります。', // 'PNG is a lossless format and ignores the quality slider, so re-encoding a PNG can sometimes match or exceed the original file size. For photo-like PNGs, selecting WebP or JPG usually produces 50–80% smaller files.'
  },
  resultsList: {
    summary: '圧縮サマリー', // 'Compression Summary'
    image: '画像', // 'Image' (count === 1)
    images: '画像', // 'Images' (count !== 1) — Japanese has no plural inflection
    totalOriginal: '合計（元）：', // 'Total Original:'
    totalCompressed: '合計（圧縮後）：', // 'Total Compressed:'
    totalSaved: '合計削減：', // 'Total Saved:'
    processing: '処理中…', // 'Processing...'
    grewBy: '（{bytes}増加）', // '(grew by {bytes})'
    reduction: '削減：', // 'Reduction:'
    sizeChange: 'サイズ変更：', // 'Size Change:'
    downloadAll: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    creatingZip: 'ZIPを作成中（{progress}%）…', // 'Creating ZIP ({progress}%)...'
    compare: '比較', // 'Compare'
    compareTitle: 'クリックして画質のビジュアル比較を確認', // 'Click to inspect visual quality comparison'
    compareActionTitle: '圧縮前後を目で比較する', // 'Compare visual before/after'
    download: 'ダウンロード', // 'Download'
    retry: '再試行', // 'Retry'
    removeTitle: '画像を削除', // 'Remove image'
    removeAriaLabel: '{name}を削除', // 'Remove {name}'
    keptOriginal: '元画像を維持（再エンコードの方が大きかった）', // 'Kept original (re-encode was larger)'
    grewByStatus: '{bytes}増加 — 再エンコードの方が元画像より大きい', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: '圧縮が完了しました', // 'Compressed successfully'
    optimizing: 'ピクセルを最適化中…', // 'Optimizing pixels...'
    compressionError: '圧縮エラー', // 'Compression error'
    original: '元画像', // 'Original' (metric label)
    compressed: '圧縮後', // 'Compressed' (metric label)
    output: '出力', // 'Output' (metric label when original kept)
    spaceSaved: '削減容量', // 'Space Saved'
    formatLabel: '形式：', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'アルファ', // 'Alpha' badge
    largerTitle: '出力は元画像より{bytes}大きくなっています。', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      '可逆のPNG再エンコードは画質スライダーを無視します。写真のようなPNGには、WebPまたはJPGの方が通常はるかに小さくなります。', // 'Lossless PNG re-encoding ignores the quality slider; WebP or JPG is usually much smaller for photo-like PNGs.'
    largerNote:
      'この画像は、選択した画質に対してすでに十分に圧縮されています。', // 'This image was already tightly compressed for the selected quality.'
    keepOriginal: '元画像を維持', // 'Keep original'
  },
} as const;

// Per-tool workspace UI strings in Japanese (modern Japanese) — COMPLETE (all 48 tools).
// Assembled from tool-ui-ja-batch1.ts … tool-ui-ja-batch6.ts (coordinator merge).
// Target: merged into src/locales/ja/ui.ts as the TOOL_UI_JA export.
// Japanese (modern Japanese), polite desu/masu forms. Keyed by English slug.
// English source is in a comment on each line. Placeholders in braces
// are filled at runtime and must be kept as-is.
// NOTE: the '/image-metadata-viewer' gpsWarning string is split across JSX
// lines in the page file with an inline link button; gpsWarningLink
// carries that link's text. The '/target-file-size-compressor' table
// carries qualityLosslessPng (looked up by targetCompression.ts for
// the qualityLabel of PNG outputs) and uses the EN
// runtime placeholder names {bytes}/{qualityLabel}/{percent} — the
// only {size} left is maxSuffix, which the component replaces itself.

export const TOOL_UI_JA = {

  '/image-resizer': {
    comparisonTitlePrefix: 'リサイズの比較', // 'Resize Comparison'
    comparisonAfterLabel: 'リサイズ後', // 'Resized (After)'
    presetInstagramPost: 'Instagram投稿（1080×1080）', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Instagramストーリー（1080×1920）', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'YouTubeサムネイル（1280×720）', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Facebookカバー（851×315）', // 'Facebook Cover (851×315)'
    presetXHeader: 'Xヘッダー（1500×500）', // 'X Header (1500×500)'
    presetFullHd: 'フルHD（1920×1080）', // 'Full HD (1920×1080)'
    errorResizeFailed: '画像のリサイズに失敗しました。', // 'Resize failed.'
    errorCorruptedFile: '破損しているか読み取れない画像ファイルです。', // 'Corrupted or unreadable image file.'
    resizeMode: 'リサイズモード', // 'Resize Mode'
    modeByPixels: 'ピクセル指定（幅 × 高さ）', // 'By Pixels (W × H)'
    modeByPercentage: 'パーセント指定（%）', // 'By Percentage (%)'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: '元の形式', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: '幅（px）', // 'Width (px)'
    heightLabel: '高さ（px）', // 'Height (px)'
    placeholderAuto: '自動', // placeholder 'Auto'
    aspectRatioLocked: 'アスペクト比ロック中', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'ロック解除（自由）', // 'Unlocked (Custom)'
    fitModeLabel: 'フィットモード：', // 'Fit Mode:'
    fitContain: '全体表示（切り取りなし）', // 'Contain (No Crop)'
    fitCover: 'カバー（中央切り取り）', // 'Cover (Center Crop)'
    fitStretchExact: '引き伸ばし', // 'Stretch Exact'
    quickPresets: 'SNS・Web向けクイックプリセット', // 'Quick Social & Web Presets'
    scalePercentage: '拡大・縮小率：', // 'Scale Percentage:'
    outputQuality: '出力画質：', // 'Output Quality:'
    matteBg: '背景色：', // 'Matte BG:'
    resizing: 'リサイズ中…', // 'Resizing...'
    resizeAll: 'すべてリサイズ（{count}件）', // 'Resize All ({count})'
    clear: 'クリア', // 'Clear'
    batchReady: 'バッチ準備完了', // 'Batch Ready'
    batchReadySingular: 'リサイズ済み画像{count}枚がダウンロード可能です', // '{count} resized image ready to download'
    batchReadyPlural: 'リサイズ済み画像{count}枚がダウンロード可能です', // '{count} resized images ready to download'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    resizedStatus: 'リサイズ済み（{original} → {converted}）', // 'Resized ({original} → {converted})'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: '形式変換の比較', // 'Format Conversion Comparison'
    comparisonAfterLabel: '変換後', // 'Converted (After)'
    errorConversionFailed: '画像の変換に失敗しました。', // 'Conversion failed.'
    errorUnsupportedFile: '未対応または破損した画像ファイルです。', // 'Unsupported or corrupted image file.'
    convertToFormat: '変換先の形式', // 'Convert To Format'
    formatWebp: 'WebP（Web向けに最も軽い）', // 'WebP (Smallest Web)'
    formatJpg: 'JPG（汎用）', // 'JPG (Universal)'
    formatPng: 'PNG（ロスレス・透明対応）', // 'PNG (Lossless Alpha)'
    transparencyFillColor: '透明塗りつぶし色', // 'Transparency Fill Color'
    quality: '画質', // 'Quality'
    qualityLosslessPng: 'ロスレスPNG', // 'Lossless PNG'
    converting: '変換中…', // 'Converting...'
    convertAll: 'すべて変換（{count}件）', // 'Convert All ({count})'
    clear: 'クリア', // 'Clear'
    conversionComplete: '変換が完了しました', // 'Conversion Complete'
    filesConverted: '{count}ファイルを{format}に変換しました', // '{count} files converted to {format}'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    convertedStatus: '{ext}に変換済み', // 'Converted to {ext}'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'クイック回転と反転', // 'Quick Rotate & Flip'
    rotate90Left: '左に90°回転', // 'Rotate 90° Left'
    rotate90Right: '右に90°回転', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: '左右反転', // 'Flip Horizontal'
    flipVertical: '上下反転', // 'Flip Vertical'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: '元の形式', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: '回転角度：', // 'Rotation Angle:'
    resetTo0: '0°にリセット', // 'Reset to 0°'
    applyAngle: '角度を適用', // 'Apply Angle'
    clear: 'クリア', // 'Clear'
    batchReady: 'バッチ準備完了', // 'Batch Ready'
    transformedImagesReady: '変換済み画像{count}枚の準備ができました', // '{count} transformed images ready'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    rotatedBadge: '{angle}°回転', // 'Rotated {angle}°'
    flippedH: '・左右反転', // ' · Flipped H'
    flippedV: '・上下反転', // ' · Flipped V'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeItem: '{name}を削除', // 'Remove {name}' (aria-label)
    transformFailed: '画像の変換に失敗しました。', // 'Transform failed.'
    corruptedImage: '破損しているか読み取れない画像です。', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: '回転・反転の比較', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: '編集後', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: '画像をドロップしてPDFにまとめます', // 'Drop images to combine into PDF'
    couldNotRead: '「{filename}」を読み取れませんでした。有効な画像であることを確認してください。', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'PDFの生成に失敗しました。', // 'PDF generation failed.'
    encodingPage: 'ページ{current}/{total}をエンコード中…', // 'Encoding page {current} of {total}...'
    generatingPdf: 'PDFを生成中…', // 'Generating PDF...'
    pageSize: 'ページサイズ', // 'Page Size'
    pageSizeA4: 'A4（210 × 297 mm）', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'USレター（8.5 × 11インチ）', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: '画像サイズに合わせる', // 'Fit to Image Size'
    orientation: '向き', // 'Orientation'
    orientationAuto: '自動（写真に合わせる）', // 'Auto (Match Photo)'
    orientationPortrait: '縦向き', // 'Portrait'
    orientationLandscape: '横向き', // 'Landscape'
    margin: '余白', // 'Margin'
    marginNone: '余白なし（全面）', // 'No Margin (Full Bleed)'
    marginSmall: '小さい余白', // 'Small Margin'
    marginMedium: '中くらいの余白', // 'Medium Margin'
    imagePlacement: '画像の配置', // 'Image Placement'
    placementContain: '全体表示（画像全体）', // 'Contain (Full Image)'
    placementCover: 'ページ全体に合わせる', // 'Cover (Fill Page)'
    pdfFilename: 'PDFファイル名', // 'PDF Filename'
    pdfImageQuality: 'PDF画像の画質：', // 'PDF Image Quality:'
    createDownloadPdf: 'PDFを作成してダウンロード（{count}ページ）', // 'Create & Download PDF ({count}p)'
    clear: 'クリア', // 'Clear'
    pdfReady: 'PDFの準備ができました（{count}{pages}・{size}）', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'ページ', // 'page'
    pagePlural: 'ページ', // 'pages'
    downloadPdfAgain: 'PDFをもう一度ダウンロード', // 'Download PDF Again'
    pageOrder: 'ページ順（{count}{pages}）', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'ページ', // 'Page' (in Page Order heading)
    pageOrderPlural: 'ページ', // 'Pages' (in Page Order heading)
    movePageUp: 'ページを上へ移動', // 'Move page up' (title)
    movePageDown: 'ページを下へ移動', // 'Move page down' (title)
    removePage: 'ページを削除', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: '画像をドロップしてEXIFとメタデータを確認します', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: '画像のメタデータを解析できませんでした。', // 'Unable to parse image metadata.'
    embeddedMetadataFound: '埋め込みメタデータが見つかりました（タグの種類：{count}件）', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'EXIF・GPS・隠れたカメラタグは検出されませんでした', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'メタデータを削除', // 'Strip Metadata'
    copyJson: 'JSONをコピー', // 'Copy JSON'
    copiedJson: 'JSONをコピーしました', // 'Copied JSON'
    exportJson: 'JSONをエクスポート', // 'Export JSON'
    clear: 'クリア', // 'Clear' (title)
    gpsDetected: 'GPS位置座標が検出されました', // 'GPS Location Coordinates Detected'
    latitude: '緯度：', // 'Latitude:'
    longitude: '経度：', // 'Longitude:'
    gpsWarning:
      'この画像をこのまま共有すると、写真を撮った場所が分かってしまうことがあります。オンラインに投稿する前に画像メタデータ削除をお使いください。', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.' — split across JSX lines in the page, with an inline link button
    gpsWarningLink: '画像メタデータ削除', // inline link text inside the GPS warning: 'Remove Image Metadata' — extra key, not in the Spanish table
    extractedMetadata: '抽出されたメタデータ（{count}件のプロパティ）', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'プライバシータグ', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: '写真をドロップしてEXIF・GPS・メタデータを削除します', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'メタデータの削除に失敗しました。', // 'Failed to strip metadata.'
    strippingMethod: '除去方法', // 'Stripping Method'
    losslessStrip: 'ロスレスバイナリ除去（JPG/PNG）', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: '完全Canvas再エンコード', // 'Full Canvas Re-encode'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: '元の形式', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: '再エンコード画質（WebP/HEICまたは完全再エンコード用）：', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'クリーニング中…', // 'Cleaning...'
    recleanAll: 'すべて再クリーニング', // 'Re-clean All'
    clear: 'クリア', // 'Clear'
    privacyVerified: 'プライバシー確認済み', // 'Privacy Verified'
    cleanImagesReady: 'メタデータを除去したクリーンな画像{count}枚の準備ができました', // '{count} clean images ready with metadata stripped'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllCleanZip: 'すべてクリーンをダウンロード（ZIP）', // 'Download All Clean (ZIP)'
    strippedTags: 'メタデータタグを除去しました：{before}件 → 残り{after}件', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: '確認済み：クリーン（EXIF/GPSタグ0件）', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'ロスレスバイナリ除去', // 'Lossless binary strip'
    cleanCanvasExport: 'クリーンなCanvas書き出し', // 'Clean Canvas export'
    scrubbing: 'EXIF・GPSヘッダーを除去中…', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'クリーンをダウンロード', // 'Download Clean'
    removeItem: '{name}を削除', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'ロゴやアイコンをここにドロップします', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: '正方形のPNG・SVGを推奨・', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'ファイルを選択', // 'browse file'
    errorGenerateFailed: 'ファビコンパッケージの生成に失敗しました。', // 'Failed to generate favicon package.'
    backgroundFill: '背景塗りつぶし', // 'Background Fill'
    transparent: '透明', // 'Transparent'
    padding: 'パディング', // 'Padding'
    cornerRadius: '角丸', // 'Corner Radius'
    tabPreviewAlt: 'タブプレビュー', // alt 'Tab preview'
    myWebsite: 'マイウェブサイト', // 'My Website'
    darkTabPreviewAlt: 'ダークタブプレビュー', // alt 'Dark tab preview'
    darkModeTab: 'ダークモードタブ', // 'Dark Mode Tab'
    packingZip: 'ZIPにまとめています…', // 'Packing ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    clear: 'クリア', // title 'Clear'
    downloadFaviconIco: 'favicon.icoをダウンロード', // title 'Download favicon.ico'
    downloadFile: '{filename}をダウンロード', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'HTML <head> スニペット', // 'HTML <head> Snippet'
    copied: 'コピーしました！', // 'Copied!'
    copyHtml: 'HTMLをコピー', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: '画像をドロップするかスクリーンショットを貼り付けます（Ctrl+V）', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    clickAnywhereToPin: '任意の場所をクリックして色を固定します', // 'Click anywhere to pin a color'
    newImage: '新しい画像', // 'New Image'
    pixelInspector: 'ピクセルインスペクター', // 'Pixel Inspector'
    copyLabel: '{label}をコピー', // title `Copy ${row.label}`
    pickedSwatches: '選択済みスウォッチ（{count}色）', // 'Picked Swatches ({count})'
    exportCss: 'CSSをエクスポート', // 'Export CSS'
    clickPixelsHint: '画像のピクセルをクリックして色をパレットに保存します。', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'クリックして選択し、{hex}をコピーします', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: '画像をドロップして正確な寸法と比率を確認', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: '最小幅チェック（px）', // 'Min Width Check (px)'
    minHeightCheck: '最小高さチェック（px）', // 'Min Height Check (px)'
    placeholderMinWidth: '例：1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: '例：630', // placeholder 'e.g. 630'
    exportCsv: 'CSV書き出し', // 'Export CSV'
    exportJson: 'JSON書き出し', // 'Export JSON'
    clear: 'クリア', // 'Clear'
    headerImage: '画像', // table header 'Image'
    headerDimensions: '寸法', // table header 'Dimensions'
    headerAspectRatio: 'アスペクト比', // table header 'Aspect Ratio'
    headerOrientation: '向き', // table header 'Orientation'
    headerSizeFormat: 'サイズ / 形式', // table header 'Size / Format'
    headerPrint300Dpi: '300DPIで印刷', // table header 'Print @300 DPI'
    headerSpecCheck: '仕様チェック', // table header 'Spec Check'
    orientationLandscape: '横向き', // 'Landscape'
    orientationPortrait: '縦向き', // 'Portrait'
    orientationSquare: '正方形', // 'Square'
    alphaTag: ' · アルファ', // ' · Alpha'
    specPass: '合格', // 'Pass'
    specBelowMin: '最小値未満', // 'Below Min'
    csvYes: 'はい', // CSV value 'Yes'
    csvNo: 'いいえ', // CSV value 'No'
  },
  '/image-cropper': {
    uploadTitle: '画像をドロップしてインタラクティブに切り抜く', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorCanvasContext: 'キャンバスのコンテキストを初期化できませんでした。', // 'Unable to initialize canvas context.'
    errorCropExportFailed: '切り抜きの書き出しに失敗しました。', // 'Crop export failed.'
    aspectFree: '自由', // aspect preset 'Free'
    selection: '選択範囲：', // 'Selection:'
    zoomOut: 'ズームアウト', // aria-label 'Zoom out'
    zoomIn: 'ズームイン', // aria-label 'Zoom in'
    removeImage: '画像を削除', // aria-label 'Remove image'
    cropSourceAlt: '切り抜き元の画像', // alt 'Crop source'
    originalLabel: '元画像：', // 'Original:'
    cropOptions: '切り抜きオプション', // 'Crop Options'
    selectFull: '全体を選択', // 'Select Full'
    aspectRatioPreset: 'アスペクト比プリセット', // 'Aspect Ratio Preset'
    cropWidth: '切り抜き幅', // 'Crop Width'
    cropHeight: '切り抜き高さ', // 'Crop Height'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: '元画像', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画質', // 'Quality'
    cropping: '切り抜き中…', // 'Cropping...'
    cropAndDownload: '切り抜いてダウンロード', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: '画像をドロップしてテキストまたはロゴの透かしを追加', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorUnableToLoadLogo: 'ロゴ画像を読み込めませんでした。', // 'Unable to load logo image.'
    errorWatermarkExportFailed: '透かし入り画像の書き出しに失敗しました。', // 'Watermark export failed.'
    fallbackWatermarkText: '透かし', // canvas fallback text 'Watermark'
    tiledPreview: 'タイルプレビュー', // 'Tiled Preview'
    dragToPosition: '画像上でドラッグして配置', // 'Drag on Image to Position'
    changeImage: '画像を変更', // 'Change Image'
    watermarkType: '透かしの種類', // 'Watermark Type'
    modeText: 'テキスト透かし', // 'Text Watermark'
    modeLogo: 'ロゴ画像', // 'Logo Image'
    watermarkTextLabel: '透かしテキスト', // 'Watermark Text'
    placeholderBrand: '© あなたのブランド', // placeholder '© Your Brand'
    textColor: 'テキスト色', // 'Text Color'
    size: 'サイズ', // 'Size'
    uploadLogo: 'ロゴをアップロード（PNG / SVG）', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'ロゴ画像を変更', // 'Change Logo Image'
    logoWidth: 'ロゴ幅', // 'Logo Width'
    opacity: '不透明度', // 'Opacity'
    rotation: '回転', // 'Rotation'
    tiledRepeatPattern: 'タイル繰り返しパターン', // 'Tiled Repeat Pattern'
    tileSpacing: 'タイル間隔', // 'Tile Spacing'
    anchorPresets: 'アンカープリセット（または画像上でドラッグ）', // 'Anchor Presets (or drag on image)'
    formatOrig: '元画像', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画質', // 'Quality'
    exporting: '書き出し中…', // 'Exporting...'
    downloadWatermarked: '透かし入り画像をダウンロード', // 'Download Watermarked Image'
  },
  '/blur-pixelate-image': {
    uploadTitle: '画像をドロップして領域をぼかし・モザイク処理', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: '書き出しに失敗しました。', // 'Export failed.'
    paintOverAreasBlur: 'ぼかしたい領域を塗りつぶす', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'モザイク処理する領域を塗りつぶす', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: '画像全体プレビュー', // 'Whole-Image Preview'
    undo: '元に戻す', // 'Undo'
    resetBrush: 'ブラシをリセット', // 'Reset Brush'
    removeImage: '画像を削除', // aria-label 'Remove image'
    targetArea: '対象領域', // 'Target Area'
    brushArea: 'ブラシ領域', // 'Brush Area'
    wholeImage: '画像全体', // 'Whole Image'
    effectStyle: 'エフェクトの種類', // 'Effect Style'
    pixelateMosaic: 'モザイク', // 'Pixelate Mosaic'
    smoothBlur: 'スムーズぼかし', // 'Smooth Blur'
    blurRadius: 'ぼかし半径', // 'Blur Radius'
    mosaicBlockSize: 'モザイクブロックサイズ', // 'Mosaic Block Size'
    brushSize: 'ブラシサイズ', // 'Brush Size'
    brushHint: '顔、文字、ナンバープレートを隠すには、写真上で直接クリック＆ドラッグしてください。', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: '元画像', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画質', // 'Quality'
    exporting: '書き出し中…', // 'Exporting...'
    downloadImage: '画像をダウンロード', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: '画像をドロップしてカスタムテキストを追加', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: '書き出しに失敗しました。', // 'Export failed.'
    dragAnyText: '画像上でテキストを直接ドラッグ', // 'Drag Any Text Directly on Image'
    changeImage: '画像を変更', // 'Change Image'
    textLayer: 'テキスト {index}', // tab `Text ${idx + 1}`
    add: '追加', // 'Add'
    deleteActiveTextLayer: 'アクティブなテキストレイヤーを削除', // aria-label 'Delete active text layer'
    textContent: 'テキスト内容（複数行対応）', // 'Text Content (multi-line supported)'
    font: 'フォント', // 'Font'
    fontInter: 'Inter / すっきりしたサンセリフ', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / ミーム表示', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / クラシックなセリフ', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / 等幅', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / 丸みのあるサンセリフ', // font option 'Trebuchet / Rounded Sans'
    fill: '塗りつぶし', // 'Fill'
    toggleBold: '太字を切り替え', // aria-label 'Toggle Bold'
    toggleItalic: '斜体を切り替え', // aria-label 'Toggle Italic'
    size: 'サイズ', // 'Size'
    rotation: '回転', // 'Rotation'
    textOutline: 'テキストアウトライン', // 'Text Outline'
    dropShadow: 'ドロップシャドウ', // 'Drop Shadow'
    defaultLayerText: 'ダブルタップまたは編集してテキストを入力', // default layer text 'Double-tap or edit text'
    defaultCaption: 'キャプション {index}', // default layer text `Caption ${index + 1}`
    formatOrig: '元画像', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画質', // 'Quality'
    exporting: '書き出し中…', // 'Exporting...'
    downloadImageWithText: 'テキスト付き画像をダウンロード', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: '画像をドロップしてカスタム枠・フレームを追加', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: '書き出しに失敗しました。', // 'Export failed.'
    framedPreview: 'フレーム付きプレビュー', // 'Framed Preview'
    changeImage: '画像を変更', // 'Change Image'
    quickFramePresets: 'クイックフレームプリセット', // 'Quick Frame Presets'
    presetClassicWhite: 'クラシックホワイト', // preset 'Classic White'
    presetPolaroidFrame: 'ポラロイドフレーム', // preset 'Polaroid Frame'
    presetDarkStudio: 'ダークスタジオ', // preset 'Dark Studio'
    presetGradientGlow: 'グラデーショングロー', // preset 'Gradient Glow'
    borderStyle: '枠のスタイル', // 'Border Style'
    borderStyleSolid: '単色', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'グラデーション', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'ポラロイド', // border type 'polaroid' (rendered capitalized)
    borderColor: '枠の色', // 'Border Color'
    startColor: '開始色', // 'Start Color'
    endColor: '終了色', // 'End Color'
    gradientAngle: 'グラデーション角度', // 'Gradient Angle'
    borderSize: '枠の太さ', // 'Border Size'
    frameRadius: 'フレーム角丸', // 'Frame Radius'
    photoRadius: '写真角丸', // 'Photo Radius'
    dropShadow: 'ドロップシャドウ', // 'Drop Shadow'
    shadowNone: 'なし', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'ソフト', // shadow level 'soft' (rendered capitalized)
    shadowMedium: '中', // shadow level 'medium' (rendered capitalized)
    shadowDeep: '深い', // shadow level 'deep' (rendered capitalized)
    exporting: '書き出し中…', // 'Exporting...'
    downloadFramedImage: 'フレーム付き画像をダウンロード', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: '画像をドロップして角を丸める', // 'Drop an image to round its corners'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: '角丸画像の書き出しに失敗しました。', // 'Failed to export rounded image.'
    liveCornerPreview: 'ライブ角丸プレビュー', // 'Live Corner Preview'
    changeImage: '画像を変更', // 'Change Image'
    cornerSettings: '角の設定', // 'Corner Settings'
    fullCirclePill: 'フルサークル / ピル', // 'Full Circle / Pill'
    individualPerCorner: '角ごとの個別コントロール', // 'Individual Per-Corner Control'
    allCornersRadius: 'すべての角の半径', // 'All Corners Radius'
    cornerTopLeft: '左上', // per-corner label 'Top Left'
    cornerTopRight: '右上', // per-corner label 'Top Right'
    cornerBottomLeft: '左下', // per-corner label 'Bottom Left'
    cornerBottomRight: '右下', // per-corner label 'Bottom Right'
    outerCornerFill: '外側の角の塗りつぶし', // 'Outer Corner Fill'
    transparentPngWebp: '透明（PNG/WebP）', // 'Transparent (PNG/WebP)'
    solidColor: '単色', // 'Solid Color'
    outputFormat: '出力形式', // 'Output Format'
    exporting: '書き出し中…', // 'Exporting...'
    downloadRoundedImage: '角丸画像をダウンロード', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: '画像をドロップして明るさを調整', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: '調整済み画像の書き出しに失敗しました。', // 'Failed to export adjusted image.'
    viewAfter: '後', // view tab 'after' (rendered capitalized)
    viewBefore: '前', // view tab 'before' (rendered capitalized)
    viewSplitCompare: '分割比較', // view tab 'Split Compare'
    fullscreenCompare: '全画面比較', // 'Fullscreen Compare'
    removeImage: '画像を削除', // title/aria-label 'Remove image'
    beforeLabel: '前', // split slider label 'Before'
    afterLabel: '後', // split slider label 'After'
    originalPreviewAlt: '元画像プレビュー', // alt 'Original preview'
    originalComparisonAlt: '元画像比較', // alt 'Original comparison'
    brightnessControls: '明るさコントロール', // 'Brightness Controls'
    reset: 'リセット', // 'Reset'
    brightnessLevel: '明るさレベル', // 'Brightness Level'
    minLabel: '−100% 暗く', // min label '-100% Darker'
    maxLabel: '+100% 明るく', // max label '+100% Brighter'
    quickPresets: 'クイックプリセット', // 'Quick Presets'
    presetDark: '暗い（−30%）', // preset 'Dark (-30%)'
    presetDim: 'やや暗い（−15%）', // preset 'Dim (-15%)'
    presetOriginal: '元画像（0%）', // preset 'Original (0%)'
    presetBright: '明るい（+15%）', // preset 'Bright (+15%)'
    presetVibrant: '鮮やか（+30%）', // preset 'Vibrant (+30%)'
    presetHighKey: 'ハイキー（+50%）', // preset 'High Key (+50%)'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: '元画像', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画質', // 'Quality'
    exporting: '書き出し中…', // 'Exporting...'
    downloadEditedImage: '編集済み画像をダウンロード', // 'Download Edited Image'
    comparisonTitlePrefix: '明るさ比較', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: '編集後', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: '画像をドロップしてコントラストを調整', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'コントラスト比較', // 'Contrast Comparison'
    comparisonAfterLabel: '編集済み（アフター）', // 'Edited (After)'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: '調整した画像をエクスポートできませんでした。', // 'Failed to export adjusted image.'
    tabAfter: 'アフター', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'ビフォー', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: '分割比較', // tab 'split' renders 'Split Compare'
    fullscreenCompare: '全画面比較', // 'Fullscreen Compare'
    removeImage: '画像を削除', // title + aria-label 'Remove image'
    originalPreviewAlt: 'オリジナルプレビュー', // alt 'Original preview'
    originalComparisonAlt: 'オリジナル比較', // alt 'Original comparison'
    splitBeforeLabel: 'ビフォー', // split slider left label 'Before'
    splitAfterLabel: 'アフター', // split slider right label 'After'
    controlsHeading: 'コントラスト調整', // '{label} Controls' (contrast mode)
    reset: 'リセット', // 'Reset'
    levelLabel: 'コントラストレベル', // '{label} Level' (contrast mode)
    minLabel: '-100% フラット', // minLabel '-100% Flat'
    maxLabel: '+100% ハイコントラスト', // maxLabel '+100% High Contrast'
    quickPresets: 'クイックプリセット', // 'Quick Presets'
    presetSoft: 'ソフト (-25%)', // 'Soft (-25%)'
    presetMuted: 'ミュート (-10%)', // 'Muted (-10%)'
    presetOriginal: 'オリジナル (0%)', // 'Original (0%)'
    presetCrisp: 'クリスプ (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'パンチー (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'ドラマチック (+70%)', // 'Dramatic (+70%)'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画質', // 'Quality'
    exporting: 'エクスポート中…', // 'Exporting...'
    downloadEditedImage: '編集した画像をダウンロード', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: '画像をドロップして彩度を調整', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: '彩度比較', // 'Saturation Comparison'
    comparisonAfterLabel: '編集済み（アフター）', // 'Edited (After)'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: '調整した画像をエクスポートできませんでした。', // 'Failed to export adjusted image.'
    tabAfter: 'アフター', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'ビフォー', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: '分割比較', // tab 'split' renders 'Split Compare'
    fullscreenCompare: '全画面比較', // 'Fullscreen Compare'
    removeImage: '画像を削除', // title + aria-label 'Remove image'
    originalPreviewAlt: 'オリジナルプレビュー', // alt 'Original preview'
    originalComparisonAlt: 'オリジナル比較', // alt 'Original comparison'
    splitBeforeLabel: 'ビフォー', // split slider left label 'Before'
    splitAfterLabel: 'アフター', // split slider right label 'After'
    controlsHeading: '彩度調整', // '{label} Controls' (saturation mode)
    reset: 'リセット', // 'Reset'
    levelLabel: '彩度レベル', // '{label} Level' (saturation mode)
    minLabel: '-100% グレースケール', // minLabel '-100% Grayscale'
    maxLabel: '+100% ビビッド', // maxLabel '+100% Vivid'
    quickPresets: 'クイックプリセット', // 'Quick Presets'
    presetGrayscale: 'グレースケール (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'ミュート (-40%)', // 'Muted (-40%)'
    presetOriginal: 'オリジナル (0%)', // 'Original (0%)'
    presetRich: 'リッチ (+30%)', // 'Rich (+30%)'
    presetVivid: 'ビビッド (+60%)', // 'Vivid (+60%)'
    presetHyper: 'ハイパー (+90%)', // 'Hyper (+90%)'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画質', // 'Quality'
    exporting: 'エクスポート中…', // 'Exporting...'
    downloadEditedImage: '編集した画像をダウンロード', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: '画像をドロップしてフィルターを適用', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'フィルター比較', // 'Filter Comparison'
    comparisonAfterLabel: 'フィルター適用後', // 'Filtered'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: 'エクスポートできませんでした。', // 'Export failed.'
    filterPreview: 'フィルタープレビュー', // 'Filter Preview'
    holdToViewOriginal: '長押ししてオリジナルを表示', // 'Hold to View Original'
    compare: '比較', // 'Compare'
    removeImage: '画像を削除', // aria-label 'Remove image'
    originalBadge: 'オリジナル', // 'Original' badge
    filterPresets: 'フィルタープリセット', // 'Filter Presets'
    reset: 'リセット', // 'Reset'
    presetOriginal: 'オリジナル', // preset 'Original'
    presetGrayscale: 'グレースケール', // preset 'Grayscale'
    presetSepia: 'セピア', // preset 'Sepia'
    presetVintage: 'ビンテージ', // preset 'Vintage'
    presetWarm: 'ウォーム', // preset 'Warm'
    presetCool: 'クール', // preset 'Cool'
    presetHighContrast: 'ハイコントラスト', // preset 'High Contrast'
    presetMatteFade: 'マットフェード', // preset 'Matte Fade'
    presetDramatic: 'ドラマチック', // preset 'Dramatic'
    presetNoir: '白黒ノワール', // preset 'B&W Noir'
    presetGoldenHour: 'ゴールデンアワー', // preset 'Golden Hour'
    presetInvert: '反転', // preset 'Invert'
    filterIntensity: 'フィルターの強さ', // 'Filter Intensity'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画質', // 'Quality'
    rendering: 'レンダリング中…', // 'Rendering...'
    downloadFilteredImage: 'フィルターを適用した画像をダウンロード', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: '画像または透明PNGをドロップして背景を追加', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorExportFailed: 'エクスポートできませんでした。', // 'Export failed.'
    backgroundPreview: '背景プレビュー', // 'Background Preview'
    changeImage: '画像を変更', // 'Change Image'
    outputDimensionsPrefix: '出力：', // 'Output:' (before '{w}×{h}px')
    backgroundType: '背景タイプ', // 'Background Type'
    modeSolidColor: '単色', // 'Solid Color'
    modeGradient: 'グラデーション', // 'Gradient'
    modeBlurredPhoto: 'ぼかし写真', // 'Blurred Photo'
    selectColor: '色 {color} を選択', // aria-label `Select color ${c}`
    color1: '色1', // 'Color 1'
    color2: '色2', // 'Color 2'
    angle: '角度', // 'Angle'
    backdropBlurRadius: '背景ぼかし半径', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'キャンバスのアスペクト比', // 'Canvas Aspect Ratio'
    aspectOriginal: 'オリジナル', // 'Orig'
    imageScale: '画像スケール', // 'Image Scale'
    roundness: '角丸', // 'Roundness'
    dropShadowBehindImage: '画像の後ろにドロップシャドウ', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'エクスポート中…', // 'Exporting...'
    downloadImage: '画像をダウンロード', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: '画像をドロップしてグリッドタイルやストリップに分割', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorSplitFailed: '画像を分割できませんでした。', // 'Failed to split image.'
    errorCanvasContext: 'キャンバスコンテキストを初期化できませんでした。', // 'Unable to initialize canvas context.'
    cutLinePreview: '切り取り線プレビュー（{rows} × {cols} = {tiles}タイル）', // 'Cut-Line Preview ({rows} × {cols} = {tiles} tiles)'
    changeImage: '画像を変更', // 'Change Image'
    splitGuideAlt: '分割ガイド', // alt 'Split guide'
    splitLayout: '分割レイアウト', // 'Split Layout'
    modeGrid: 'グリッド (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: '横ストリップ', // 'Horiz. Strips'
    modeVerticalStrips: '縦ストリップ', // 'Vert. Strips'
    rowsLabel: '行（横方向の切り取り）', // 'Rows (Horizontal Cuts)'
    columnsLabel: '列（縦方向の切り取り）', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 カルーセル', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 ストリップ', // preset '4×1 Strips'
    formatOriginal: 'オリジナル', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'タイル画質', // 'Tile Quality'
    splittingImage: '画像を分割中…', // 'Splitting Image...'
    splitIntoTiles: '{count}タイルに分割', // `Split into ${n} Tiles`
    splitComplete: '分割完了', // 'Split Complete'
    tilesGenerated: 'フル解像度で{count}枚の画像タイルを生成しました', // '{n} image tiles generated at full resolution'
    packagingZip: 'ZIPを作成中…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'すべてのタイルをダウンロード (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'ダウンロード', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'JPGまたはPNG画像をドロップしてDPIメタデータを更新', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'DPIを更新できませんでした。', // 'Failed to update DPI.'
    targetDpiPresets: 'ターゲットDPIプリセット', // 'Target DPI Presets'
    preset72Screen: '72 DPI（画面）', // '72 DPI (Screen)'
    preset96Windows: '96 DPI（Windows）', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI（ドラフト印刷）', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI（高品質印刷）', // '300 DPI (High Print)'
    preset600Archival: '600 DPI（アーカイブ）', // '600 DPI (Archival)'
    customDpi: 'カスタムDPI', // 'Custom DPI'
    applyDpi: '{dpi} DPIを適用', // 'Apply {dpi} DPI'
    clear: 'クリア', // 'Clear'
    batchReady: 'バッチ準備完了', // 'Batch Ready'
    filesUpdatedToDpi: '{count}ファイルを{dpi} DPIに更新しました', // '{n} files updated to {dpi} DPI'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード (ZIP)', // 'Download All (ZIP)'
    beforeDpi: '変更前：{dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: '変更前：未設定', // 'Before: Not set'
    verifiedDpi: '検証済み：{dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'ロスレスJPEGヘッダー更新', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'ロスレスPNG pHYs更新', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'pHYs DPI付きPNGに変換', // 'Converted to PNG with pHYs DPI'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: '画像をドロップしてBase64にエンコード', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'ファイルをエンコードできませんでした。', // 'Could not encode file.'
    errorFailedToRead: '画像ファイルを読み取れませんでした。', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'クリップボードへの書き込みに失敗しました。テキストボックスから選択してコピーしてください。', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'ファイル：', // 'File:' (summary card)
    outputLabel: '出力：', // 'Output:' (summary card)
    charsLabel: '文字', // 'chars' (summary card)
    encodeAnother: '別の画像をエンコード', // 'Encode Another'
    tabDataUrl: 'データURL', // tab 'Data URL'
    tabRawBase64: '生のBase64', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'コピーしました！', // 'Copied!'
    copyOutput: '出力をコピー', // 'Copy Output'
    saveTxt: '.TXTで保存', // 'Save .TXT'
  },
  '/base64-to-image': {
    pasteLabel: 'Base64文字列またはデータURLを貼り付け', // 'Paste Base64 String or Data URL'
    clear: 'クリア', // 'Clear'
    inputPlaceholder: 'data:image/png;base64,iVBORw0KGgo... または生のBase64バイトをここに貼り付けてください', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'PNG、JPG、WebP、GIF、SVG、BMP、ICOのBase64ペイロードに対応', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'デコード中…', // 'Decoding...'
    decodeImage: '画像をデコード', // 'Decode Image'
    decodingBytes: 'Base64バイトをデコード中…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'サポートされていないデータURIエンコードです。Base64ペイロード（`;base64,`）が必要です。', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: '入力に無効なBase64文字が含まれています。', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'デコードされたバイトは有効なブラウザーで読める画像を形成しません。', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Base64文字列をデコードできませんでした。', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'デコードされたBase64のプレビュー', // alt 'Decoded Base64 preview'
    validImageDecoded: '有効な画像をデコードしました', // 'Valid Image Decoded'
    detectedFormat: '検出された形式', // 'Detected Format'
    binarySize: 'バイナリサイズ', // 'Binary Size'
    dimensions: '寸法', // 'Dimensions'
    downloadFormat: 'ダウンロード形式', // 'Download Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: '画像ファイルをダウンロード', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: '画像をドロップして主要なカラーパレットを抽出', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: '画像を読み込めませんでした。', // 'Unable to load image.'
    errorClipboardDenied: 'クリップボードへのアクセスが拒否されました。', // 'Clipboard permission denied.'
    extractedPalette: '抽出されたパレット（{count}色）', // 'Extracted Palette ({count} Colors)'
    sourceAlt: '元画像', // alt 'Source'
    changeImage: '変更', // 'Change'
    numberOfColors: '色数', // 'Number of Colors'
    colorsCount: '{count}色', // '{count} colors'
    copyCssVariables: 'CSS変数をコピー', // 'Copy CSS Variables'
    copiedCss: 'CSSをコピーしました！', // 'Copied CSS!'
    copyJson: 'JSONをコピー', // 'Copy JSON'
    copiedJson: 'JSONをコピーしました！', // 'Copied JSON!'
    downloadPalettePng: 'パレットPNGをダウンロード', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: '2枚以上の画像をドロップしてアニメーションGIFを作成', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'アニメーションGIFのエンコードに失敗しました。', // 'Failed to encode animated GIF.'
    skippedFile: '「{name}」をスキップしました：{error}', // 'Skipped "{name}": {error}'
    skippedFileNoError: '「{name}」をスキップしました。', // 'Skipped "{name}".'
    generatedGif: '生成されたGIF（{width}×{height}ピクセル・{size}）', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'ライブタイミングプレビュー・フレーム{current}/{total}', // 'Live Timing Preview · Frame {current}/{total}'
    generatedGifAlt: '生成されたアニメーションGIF', // alt 'Generated animated GIF'
    pause: '一時停止', // 'Pause'
    play: '再生', // 'Play'
    backToFrameEditor: 'フレームエディターに戻る', // 'Back to Frame Editor'
    clearAllFrames: 'すべてのフレームをクリア', // aria-label 'Clear all frames'
    largeGifWarning: '大きなGIFの警告（{size}）', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      '5〜15MBを超えるGIFは、メッセージアプリでのアップロードが遅くなったり、プラットフォームの厳しい制限に引っかかったりすることがあります。出力の幅・高さを小さくしたり（例：480ピクセル）、品質を下げたり、フレームを削除したりしてみてください。', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'アニメーションGIFをダウンロード（{size}）', // 'Download Animated GIF ({size})'
    animationSettings: 'アニメーション設定', // 'Animation Settings'
    defaultFrameDuration: 'デフォルトのフレーム間隔', // 'Default Frame Duration'
    frameDurationValue: '{ms}ミリ秒（{fps} FPS）', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS（1000ミリ秒）', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS（500ミリ秒）', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS（200ミリ秒）', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS（100ミリ秒）', // '10 FPS (100ms)'
    loopBehavior: 'ループ動作', // 'Loop Behavior'
    loopForever: '常に繰り返す', // 'Forever'
    loopSetLoops: '回数を指定', // 'Set Loops'
    loopPlayOnce: '1回のみ', // 'Play Once'
    totalPlays: '合計再生回数', // 'Total Plays'
    outputDimensions: '出力サイズ（ピクセル）', // 'Output Dimensions (px)'
    ratioLocked: '比率を固定', // 'Ratio Locked'
    ratioUnlocked: '固定解除', // 'Unlocked'
    widthLabel: '幅', // 'Width'
    heightLabel: '高さ', // 'Height'
    sizePreset480: '480ピクセル', // '480px'
    sizePreset640: '640ピクセル', // '640px'
    sizePreset800: '800ピクセル', // '800px'
    sizePresetOriginal: 'オリジナル', // 'Original'
    frameFit: 'フレームフィット', // 'Frame Fit'
    fitContain: '全体表示', // 'contain'
    fitCover: '全体を覆う', // 'cover'
    backgroundMatte: '背景マット', // 'Background Matte'
    colorPaletteQuality: 'カラーパレットの品質', // 'Color Palette Quality'
    encodingGif: 'GIFをエンコード中（{progress}%）…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'アニメーションGIFを生成', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'アニメーションGIFを再エンコード', // 'Re-Encode Animated GIF'
    framesHeading: 'フレーム（{count}）— ドラッグまたは矢印で並べ替え', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'フレームごとの遅延を空欄にすると、全体のフレーム間隔{ms}ミリ秒が適用されます。', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'フレームを追加', // 'Add Frames'
    delayMsLabel: '遅延（ミリ秒）:', // 'Delay (ms):'
    moveEarlier: '前に移動', // title 'Move earlier'
    moveLater: '後に移動', // title 'Move later'
    duplicateFrame: 'フレームを複製', // title 'Duplicate frame'
    removeFrame: 'フレームを削除', // title 'Remove frame'
    moveFrameEarlierAria: 'フレーム{n}を前に移動', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'フレーム{n}を後に移動', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'フレーム{n}を複製', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'フレーム{n}を削除', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: '2〜9枚の画像をドロップしてフォトコラージュを作成', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'コラージュのエクスポートに失敗しました。', // 'Failed to export collage.'
    couldNotLoadFile: '「{name}」を読み込めませんでした：{error}', // 'Could not load "{name}": {error}'
    couldNotLoadFileNoError: '「{name}」を読み込めませんでした。', // 'Could not load "{name}".'
    collagePreview: 'コラージュプレビュー（{width}×{height}ピクセル）', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'すべてクリア', // 'Clear All'
    rearrangeCells: 'セルを並べ替え（ドラッグまたは2つのセルをタップして入れ替え）', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      '任意のセルカードを別のスロットにドラッグすると、写真がすぐに並べ替えられます。', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: '写真を追加', // 'Add Photos'
    cellLabel: 'セル{n}', // 'Cell {n}'
    slotLabel: 'スロット{n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'セル{n}を後ろに移動', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'セル{n}を前に移動', // aria-label `Move cell ${n} forward`
    clearCellAria: 'セル{n}をクリア', // aria-label `Clear cell ${n}`
    addPhoto: '写真を追加', // 'Add Photo'
    collageLayout: 'コラージュレイアウト', // 'Collage Layout'
    layout2x2: '2×2グリッド', // '2×2 Grid'
    layout3x3: '3×3グリッド', // '3×3 Grid'
    layoutVertical: '縦ストリップ', // 'Vertical Strip'
    layoutHorizontal: '横ストリップ', // 'Horizontal Strip'
    cellProportionsSpacing: 'セル割合と間隔', // 'Cell Proportions & Spacing'
    equalCells: '均等なセル', // 'Equal Cells'
    colSplit: '列分割', // 'Col Split'
    centerCol: '中央列', // 'Center Col'
    rowSplit: '行分割', // 'Row Split'
    centerRow: '中央行', // 'Center Row'
    leadCellEmphasis: 'メインセルの強調', // 'Lead Cell Emphasis'
    gapSpacing: '間隔', // 'Gap Spacing'
    cellRadius: 'セル角丸', // 'Cell Radius'
    backgroundColor: '背景色', // 'Background Color'
    backgroundSwatchAria: '背景{color}', // aria-label `Background ${c}`
    imageFit: '画像フィット', // 'Image Fit'
    fitCover: '全体を覆う', // 'cover'
    fitContain: '全体表示', // 'contain'
    outputSize: '出力サイズ（ピクセル）', // 'Output Size (px)'
    widthLabel: '幅', // 'Width'
    heightLabel: '高さ', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG（ロスレス）', // 'PNG (Lossless)'
    jpgQuality: 'JPG品質', // 'JPG Quality'
    exportingCollage: 'コラージュをエクスポート中…', // 'Exporting Collage...'
    downloadCollage: 'コラージュをダウンロード（{format}）', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: '画像をドロップして{target}未満に圧縮', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '画像をドロップして{target}未満に圧縮', // 'Drop images to compress under {target}'
    errorTargetFailed: '目標サイズへの圧縮に失敗しました。', // 'Target compression failed.'
    errorCorruptedFile: '破損しているか読み取れない画像ファイルです。', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '目標サイズの最大ファイルサイズ', // 'Target Maximum File Size'
    targetMaxSuffix: '（{bytes}まで）', // '({bytes} max)'
    needDifferentTarget: '別の目標KBサイズが必要ですか？', // 'Need a different target KB?'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '画質を下げるだけでは{target}未満に収まらない場合、インテリジェントなサイズ縮小を許可する', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'ロスレスPNGでは{target}にきれいに収まらない場合、大きなPNGを自動的にWebP/JPGに変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'ロスレスPNGでは{target}にきれいに収まらない場合、大きなPNGを自動的にWebP/JPGに変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    compressToTarget: '{target}に圧縮', // 'Compress to {target}'
    optimizing: '最適化中…', // 'Optimizing...'
    clear: 'クリア', // 'Clear'
    losslessPngSelected: 'ロスレスPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngTitle: 'ロスレスPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNGは画質スライダーを無視するため、サイズを小さくするにはピクセルサイズを縮小するしかありません。大きな写真の場合は、JPGまたはWebPを選ぶことで、鮮明さを保ちながら厳しいKB制限を達成できます。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNGは画質スライダーを無視するため、サイズを小さくするにはピクセルサイズを縮小するしかありません。大きな写真の場合は、JPGまたはWebPを選ぶことで、鮮明さを保ちながら厳しいKB制限を達成できます。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '目標圧縮の概要・目標≤{target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}枚中{achieved}枚の{images}が{target}の目標を達成しました', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '画像', // 'image'
    imagePlural: '画像', // 'images'
    summaryMissed: '・{missed}枚は正直に収まりませんでした（詳細は下記）', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '合計節約：{bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '合計節約：{bytes}（{grew}増加）', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '（{grew}増加）', // '(grew by {grew})'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    metricOriginal: '元画像', // 'Original' (metric label)
    metricOutput: '出力', // 'Output' (metric label)
    metricSpaceSaved: '節約した容量', // 'Space Saved' (metric label)
    metricReduction: '削減率', // 'Reduction' (metric label)
    metricSizeChange: 'サイズ変化', // 'Size Change' (metric label)
    columnOriginal: '元画像', // 'Original' (metric label)
    columnOutput: '出力', // 'Output' (metric label)
    columnSpaceSaved: '節約した容量', // 'Space Saved' (metric label)
    columnReduction: '削減率', // 'Reduction' (metric label)
    columnSizeChange: 'サイズ変化', // 'Size Change' (metric label)
    underTarget: '{target}未満（{bytes}）', // 'Under {target} ({bytes})'
    targetMissed: '目標未達成 — {bytes}', // 'Target missed — {bytes}'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    grewBy: '{bytes}増加しました。再エンコードしたファイルが元ファイルより大きくなっています。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '写真のようなPNGには、通常WebPやJPGの方が小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '写真のようなPNGには、通常WebPやJPGの方が小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '元ファイルを保持', // 'Keep original'
    keptOriginalNote: '再エンコードでファイルが大きくなったため、元のファイルが保持されました。', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target}未満でより高い解像度を保つため、ロスレスPNGが自動的に{format}に変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '{target}未満でより高い解像度を保つため、ロスレスPNGが自動的に{format}に変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP（透明度を保持）', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '元のファイルはすでに{target}未満でしたが、再エンコードで{bytes}大きくなりました。「元ファイルを保持」を使うか、WebP/JPGに切り替えてより小さく出力してください。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '元のファイルはすでに{target}未満でした。画質{quality}%できれいにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '元のファイルはすでに{target}未満でした。画質{quality}%できれいにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'フル解像度{width}×{height}ピクセルで目標を達成しました（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height}ピクセル（{percent}%）に縮小し、{qualityLabel}で目標を達成しました。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'ロスレスPNG', // 'lossless PNG'
    qualityPercent: '画質{quality}%', // '{quality}% quality'
    statusCannotPng:
      'ロスレスPNGでは{target}に到達できません（到達可能な最小サイズ：{width}×{height}ピクセルで{bytes}）。より小さいサイズにするには、出力形式をJPGまたはWebPに切り替えてください。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'フルサイズ{width}×{height}ピクセルでは{target}に到達できません（画質での最小サイズは{bytes}です）。さらに小さくするには「サイズ縮小を許可」をオンにしてください。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '要求された{target}の目標をきれいに達成できませんでした。最小の正直なエンコード出力は{bytes}（{width}×{height}ピクセル、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '要求された{target}の目標をきれいに達成できませんでした。最小の正直なエンコード出力は{bytes}（{width}×{height}ピクセル、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '目標圧縮（{target}）', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '圧縮済み（{bytes}）', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: '画像をドロップして{target}未満に圧縮', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '画像をドロップして{target}未満に圧縮', // 'Drop images to compress under {target}'
    errorTargetFailed: '目標サイズへの圧縮に失敗しました。', // 'Target compression failed.'
    errorCorruptedFile: '破損しているか読み取れない画像ファイルです。', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '目標サイズの最大ファイルサイズ', // 'Target Maximum File Size'
    targetMaxSuffix: '（{bytes}まで）', // '({bytes} max)'
    needDifferentTarget: '別の目標KBサイズが必要ですか？', // 'Need a different target KB?'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '画質を下げるだけでは{target}未満に収まらない場合、インテリジェントなサイズ縮小を許可する', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'ロスレスPNGでは{target}にきれいに収まらない場合、大きなPNGを自動的にWebP/JPGに変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'ロスレスPNGでは{target}にきれいに収まらない場合、大きなPNGを自動的にWebP/JPGに変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    compressToTarget: '{target}に圧縮', // 'Compress to {target}'
    optimizing: '最適化中…', // 'Optimizing...'
    clear: 'クリア', // 'Clear'
    losslessPngSelected: 'ロスレスPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngTitle: 'ロスレスPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNGは画質スライダーを無視するため、サイズを小さくするにはピクセルサイズを縮小するしかありません。大きな写真の場合は、JPGまたはWebPを選ぶことで、鮮明さを保ちながら厳しいKB制限を達成できます。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNGは画質スライダーを無視するため、サイズを小さくするにはピクセルサイズを縮小するしかありません。大きな写真の場合は、JPGまたはWebPを選ぶことで、鮮明さを保ちながら厳しいKB制限を達成できます。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '目標圧縮の概要・目標≤{target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}枚中{achieved}枚の{images}が{target}の目標を達成しました', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '画像', // 'image'
    imagePlural: '画像', // 'images'
    summaryMissed: '・{missed}枚は正直に収まりませんでした（詳細は下記）', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '合計節約：{bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '合計節約：{bytes}（{grew}増加）', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '（{grew}増加）', // '(grew by {grew})'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    metricOriginal: '元画像', // 'Original' (metric label)
    metricOutput: '出力', // 'Output' (metric label)
    metricSpaceSaved: '節約した容量', // 'Space Saved' (metric label)
    metricReduction: '削減率', // 'Reduction' (metric label)
    metricSizeChange: 'サイズ変化', // 'Size Change' (metric label)
    columnOriginal: '元画像', // 'Original' (metric label)
    columnOutput: '出力', // 'Output' (metric label)
    columnSpaceSaved: '節約した容量', // 'Space Saved' (metric label)
    columnReduction: '削減率', // 'Reduction' (metric label)
    columnSizeChange: 'サイズ変化', // 'Size Change' (metric label)
    underTarget: '{target}未満（{bytes}）', // 'Under {target} ({bytes})'
    targetMissed: '目標未達成 — {bytes}', // 'Target missed — {bytes}'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    grewBy: '{bytes}増加しました。再エンコードしたファイルが元ファイルより大きくなっています。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '写真のようなPNGには、通常WebPやJPGの方が小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '写真のようなPNGには、通常WebPやJPGの方が小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '元ファイルを保持', // 'Keep original'
    keptOriginalNote: '再エンコードでファイルが大きくなったため、元のファイルが保持されました。', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target}未満でより高い解像度を保つため、ロスレスPNGが自動的に{format}に変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '{target}未満でより高い解像度を保つため、ロスレスPNGが自動的に{format}に変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP（透明度を保持）', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '元のファイルはすでに{target}未満でしたが、再エンコードで{bytes}大きくなりました。「元ファイルを保持」を使うか、WebP/JPGに切り替えてより小さく出力してください。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '元のファイルはすでに{target}未満でした。画質{quality}%できれいにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '元のファイルはすでに{target}未満でした。画質{quality}%できれいにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'フル解像度{width}×{height}ピクセルで目標を達成しました（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height}ピクセル（{percent}%）に縮小し、{qualityLabel}で目標を達成しました。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'ロスレスPNG', // 'lossless PNG'
    qualityPercent: '画質{quality}%', // '{quality}% quality'
    statusCannotPng:
      'ロスレスPNGでは{target}に到達できません（到達可能な最小サイズ：{width}×{height}ピクセルで{bytes}）。より小さいサイズにするには、出力形式をJPGまたはWebPに切り替えてください。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'フルサイズ{width}×{height}ピクセルでは{target}に到達できません（画質での最小サイズは{bytes}です）。さらに小さくするには「サイズ縮小を許可」をオンにしてください。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '要求された{target}の目標をきれいに達成できませんでした。最小の正直なエンコード出力は{bytes}（{width}×{height}ピクセル、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '要求された{target}の目標をきれいに達成できませんでした。最小の正直なエンコード出力は{bytes}（{width}×{height}ピクセル、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '目標圧縮（{target}）', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '圧縮済み（{bytes}）', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: '画像をドロップして{target}未満に圧縮', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '画像をドロップして{target}未満に圧縮', // 'Drop images to compress under {target}'
    errorTargetFailed: '目標サイズへの圧縮に失敗しました。', // 'Target compression failed.'
    errorCorruptedFile: '破損しているか読み取れない画像ファイルです。', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '目標サイズの最大ファイルサイズ', // 'Target Maximum File Size'
    targetMaxSuffix: '（{bytes}まで）', // '({bytes} max)'
    needDifferentTarget: '別の目標KBサイズが必要ですか？', // 'Need a different target KB?'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '画質を下げるだけでは{target}未満に収まらない場合、インテリジェントなサイズ縮小を許可する', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'ロスレスPNGでは{target}にきれいに収まらない場合、大きなPNGを自動的にWebP/JPGに変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'ロスレスPNGでは{target}にきれいに収まらない場合、大きなPNGを自動的にWebP/JPGに変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    compressToTarget: '{target}に圧縮', // 'Compress to {target}'
    optimizing: '最適化中…', // 'Optimizing...'
    clear: 'クリア', // 'Clear'
    losslessPngSelected: 'ロスレスPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngTitle: 'ロスレスPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNGは画質スライダーを無視するため、サイズを小さくするにはピクセルサイズを縮小するしかありません。大きな写真の場合は、JPGまたはWebPを選ぶことで、鮮明さを保ちながら厳しいKB制限を達成できます。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNGは画質スライダーを無視するため、サイズを小さくするにはピクセルサイズを縮小するしかありません。大きな写真の場合は、JPGまたはWebPを選ぶことで、鮮明さを保ちながら厳しいKB制限を達成できます。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '目標圧縮の概要・目標≤{target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}枚中{achieved}枚の{images}が{target}の目標を達成しました', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '画像', // 'image'
    imagePlural: '画像', // 'images'
    summaryMissed: '・{missed}枚は正直に収まりませんでした（詳細は下記）', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '合計節約：{bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '合計節約：{bytes}（{grew}増加）', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '（{grew}増加）', // '(grew by {grew})'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    metricOriginal: '元画像', // 'Original' (metric label)
    metricOutput: '出力', // 'Output' (metric label)
    metricSpaceSaved: '節約した容量', // 'Space Saved' (metric label)
    metricReduction: '削減率', // 'Reduction' (metric label)
    metricSizeChange: 'サイズ変化', // 'Size Change' (metric label)
    columnOriginal: '元画像', // 'Original' (metric label)
    columnOutput: '出力', // 'Output' (metric label)
    columnSpaceSaved: '節約した容量', // 'Space Saved' (metric label)
    columnReduction: '削減率', // 'Reduction' (metric label)
    columnSizeChange: 'サイズ変化', // 'Size Change' (metric label)
    underTarget: '{target}未満（{bytes}）', // 'Under {target} ({bytes})'
    targetMissed: '目標未達成 — {bytes}', // 'Target missed — {bytes}'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    grewBy: '{bytes}増加しました。再エンコードしたファイルが元ファイルより大きくなっています。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '写真のようなPNGには、通常WebPやJPGの方が小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '写真のようなPNGには、通常WebPやJPGの方が小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '元ファイルを保持', // 'Keep original'
    keptOriginalNote: '再エンコードでファイルが大きくなったため、元のファイルが保持されました。', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target}未満でより高い解像度を保つため、ロスレスPNGが自動的に{format}に変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '{target}未満でより高い解像度を保つため、ロスレスPNGが自動的に{format}に変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP（透明度を保持）', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '元のファイルはすでに{target}未満でしたが、再エンコードで{bytes}大きくなりました。「元ファイルを保持」を使うか、WebP/JPGに切り替えてより小さく出力してください。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '元のファイルはすでに{target}未満でした。画質{quality}%できれいにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '元のファイルはすでに{target}未満でした。画質{quality}%できれいにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'フル解像度{width}×{height}ピクセルで目標を達成しました（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height}ピクセル（{percent}%）に縮小し、{qualityLabel}で目標を達成しました。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'ロスレスPNG', // 'lossless PNG'
    qualityPercent: '画質{quality}%', // '{quality}% quality'
    statusCannotPng:
      'ロスレスPNGでは{target}に到達できません（到達可能な最小サイズ：{width}×{height}ピクセルで{bytes}）。より小さいサイズにするには、出力形式をJPGまたはWebPに切り替えてください。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'フルサイズ{width}×{height}ピクセルでは{target}に到達できません（画質での最小サイズは{bytes}です）。さらに小さくするには「サイズ縮小を許可」をオンにしてください。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '要求された{target}の目標をきれいに達成できませんでした。最小の正直なエンコード出力は{bytes}（{width}×{height}ピクセル、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '要求された{target}の目標をきれいに達成できませんでした。最小の正直なエンコード出力は{bytes}（{width}×{height}ピクセル、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '目標圧縮（{target}）', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '圧縮済み（{bytes}）', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: '画像をドロップして{target}未満に圧縮', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '画像をドロップして{target}未満に圧縮', // 'Drop images to compress under {target}'
    errorTargetFailed: '目標サイズへの圧縮に失敗しました。', // 'Target compression failed.'
    errorCorruptedFile: '破損しているか読み取れない画像ファイルです。', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '目標サイズの最大ファイルサイズ', // 'Target Maximum File Size'
    targetMaxSuffix: '（{bytes}まで）', // '({bytes} max)'
    needDifferentTarget: '別の目標KBサイズが必要ですか？', // 'Need a different target KB?'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '画質を下げるだけでは{target}未満に収まらない場合、インテリジェントなサイズ縮小を許可する', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'ロスレスPNGでは{target}にきれいに収まらない場合、大きなPNGを自動的にWebP/JPGに変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'ロスレスPNGでは{target}にきれいに収まらない場合、大きなPNGを自動的にWebP/JPGに変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    compressToTarget: '{target}に圧縮', // 'Compress to {target}'
    optimizing: '最適化中…', // 'Optimizing...'
    clear: 'クリア', // 'Clear'
    losslessPngSelected: 'ロスレスPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngTitle: 'ロスレスPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNGは画質スライダーを無視するため、サイズを小さくするにはピクセルサイズを縮小するしかありません。大きな写真の場合は、JPGまたはWebPを選ぶことで、鮮明さを保ちながら厳しいKB制限を達成できます。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNGは画質スライダーを無視するため、サイズを小さくするにはピクセルサイズを縮小するしかありません。大きな写真の場合は、JPGまたはWebPを選ぶことで、鮮明さを保ちながら厳しいKB制限を達成できます。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '目標圧縮の概要・目標≤{target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}枚中{achieved}枚の{images}が{target}の目標を達成しました', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '画像', // 'image'
    imagePlural: '画像', // 'images'
    summaryMissed: '・{missed}枚は正直に収まりませんでした（詳細は下記）', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '合計節約：{bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '合計節約：{bytes}（{grew}増加）', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '（{grew}増加）', // '(grew by {grew})'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    metricOriginal: '元画像', // 'Original' (metric label)
    metricOutput: '出力', // 'Output' (metric label)
    metricSpaceSaved: '節約した容量', // 'Space Saved' (metric label)
    metricReduction: '削減率', // 'Reduction' (metric label)
    metricSizeChange: 'サイズ変化', // 'Size Change' (metric label)
    columnOriginal: '元画像', // 'Original' (metric label)
    columnOutput: '出力', // 'Output' (metric label)
    columnSpaceSaved: '節約した容量', // 'Space Saved' (metric label)
    columnReduction: '削減率', // 'Reduction' (metric label)
    columnSizeChange: 'サイズ変化', // 'Size Change' (metric label)
    underTarget: '{target}未満（{bytes}）', // 'Under {target} ({bytes})'
    targetMissed: '目標未達成 — {bytes}', // 'Target missed — {bytes}'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    grewBy: '{bytes}増加しました。再エンコードしたファイルが元ファイルより大きくなっています。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '写真のようなPNGには、通常WebPやJPGの方が小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '写真のようなPNGには、通常WebPやJPGの方が小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '元ファイルを保持', // 'Keep original'
    keptOriginalNote: '再エンコードでファイルが大きくなったため、元のファイルが保持されました。', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target}未満でより高い解像度を保つため、ロスレスPNGが自動的に{format}に変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '{target}未満でより高い解像度を保つため、ロスレスPNGが自動的に{format}に変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP（透明度を保持）', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '元のファイルはすでに{target}未満でしたが、再エンコードで{bytes}大きくなりました。「元ファイルを保持」を使うか、WebP/JPGに切り替えてより小さく出力してください。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '元のファイルはすでに{target}未満でした。画質{quality}%できれいにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '元のファイルはすでに{target}未満でした。画質{quality}%できれいにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'フル解像度{width}×{height}ピクセルで目標を達成しました（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height}ピクセル（{percent}%）に縮小し、{qualityLabel}で目標を達成しました。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'ロスレスPNG', // 'lossless PNG'
    qualityPercent: '画質{quality}%', // '{quality}% quality'
    statusCannotPng:
      'ロスレスPNGでは{target}に到達できません（到達可能な最小サイズ：{width}×{height}ピクセルで{bytes}）。より小さいサイズにするには、出力形式をJPGまたはWebPに切り替えてください。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'フルサイズ{width}×{height}ピクセルでは{target}に到達できません（画質での最小サイズは{bytes}です）。さらに小さくするには「サイズ縮小を許可」をオンにしてください。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '要求された{target}の目標をきれいに達成できませんでした。最小の正直なエンコード出力は{bytes}（{width}×{height}ピクセル、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '要求された{target}の目標をきれいに達成できませんでした。最小の正直なエンコード出力は{bytes}（{width}×{height}ピクセル、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '目標圧縮（{target}）', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '圧縮済み（{bytes}）', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: '数十枚の画像をドロップして一括圧縮', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: '圧縮に失敗しました。', // 'Compression failed.'
    errorCorruptedFile: '破損しているか読み取れない画像ファイルです。', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'クイックバッチプロファイル：', // 'Quick Batch Profiles:'
    profileWebFast: 'Web高速（WebP 75%）', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'メール・共有（JPG 65%）', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: '高画質（85%）', // 'High Fidelity (85%)'
    compressingBatch: 'バッチをローカルで圧縮中…', // 'Compressing batch locally...'
    // CompressionControls、ResultsList、ComparisonModalで描画される文字列は
    // 共有i18n-ja.ts辞書のセクション（compressionControls、resultsList、
    // comparisonModal）から取得される — Batch 1で翻訳済み。
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: '画像をドロップして{target}まで圧縮', // `Drop images to compress under ${targetLabel}`
    uploadTitle: '画像をドロップして{target}まで圧縮', // 'Drop images to compress under {target}' — fallback key in TargetSizeCompressorTool
    targetMaxFileSize: '目標最大ファイルサイズ', // 'Target Maximum File Size'
    targetNumberAria: '目標ファイルサイズの数値', // aria-label 'Target file size number'
    maxSuffix: '（最大{size}）', // '({formatBytes(effectiveTargetBytes)} max)'
    targetMaxSuffix: '（{bytes}まで）', // '({bytes} max)' — fallback key in TargetSizeCompressorTool
    needDifferentTarget: '別のKB制限が必要ですか？', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged (format name)
    formatPng: 'PNG', // 'PNG' — unchanged (format name)
    formatWebpTransparency: 'WebP（透明度を保持）', // 'WebP (transparency preserved)'
    allowDownscale: '画質の低下だけでは{target}に収まらない場合、インテリジェントなサイズスケーリングを許可する', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: '非可逆なしPNGでは{target}にきれいに届かない場合、大きなPNGをWebP/JPGへ自動変換する', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: '透明PNGのマット色：', // 'Transparent PNG matte color:'
    transparentPngMatte: '透明PNGのマット色：', // 'Transparent PNG matte color:' — fallback key in TargetSizeCompressorTool
    losslessPngTitle: '非可逆なしPNGが選択されています：', // 'Lossless PNG selected:'
    losslessPngSelected: '非可逆なしPNGが選択されています：', // 'Lossless PNG selected:' — fallback key in TargetSizeCompressorTool
    losslessPngNote: 'PNGは画質スライダーを無視するため、サイズ削減はピクセル寸法の縮小に厳密に依存します。大きな写真の場合は、シャープさを保ちながら厳しいKB制限に届くようJPGまたはWebPを選んでください。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    qualityPercent: '画質{quality}%', // '{quality}% quality'
    compressToTarget: '{target}まで圧縮', // 'Compress to {targetLabel}'
    optimizing: '最適化中…', // 'Optimizing...'
    clear: 'クリア', // 'Clear'
    targetSummary: '目標圧縮サマリー・目標 ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{total}枚中{achieved}枚の{images}が{target}の目標を達成しました', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: '画像', // 'image'
    imagePlural: '画像', // 'images'
    summaryMissed: '・{missed}枚は正直に収まりませんでした（詳細は下記）', // '{missed} could not honestly fit (details below)'
    totalSaved: '合計節約：{bytes}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '（{grew}増加）', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    underTarget: '{target}未満（{bytes}）', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: '目標未達成 — {bytes}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'オリジナル', // 'Original'
    columnOutput: '出力', // 'Output'
    columnSpaceSaved: '節約した容量', // 'Space Saved'
    columnReduction: '削減率', // 'Reduction'
    columnSizeChange: 'サイズ変更', // 'Size Change'
    metricOriginal: 'オリジナル', // 'Original' — fallback key in TargetSizeCompressorTool
    metricOutput: '出力', // 'Output' — fallback key in TargetSizeCompressorTool
    metricSpaceSaved: '節約した容量', // 'Space Saved' — fallback key in TargetSizeCompressorTool
    metricReduction: '削減率', // 'Reduction' — fallback key in TargetSizeCompressorTool
    metricSizeChange: 'サイズ変更', // 'Size Change' — fallback key in TargetSizeCompressorTool
    grewBy: '{bytes}増加 — 再エンコードが元ファイルより大きくなりました。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: '写真のようなPNGには、WebPまたはJPGの方が通常は小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngNote: '写真のようなPNGには、WebPまたはJPGの方が通常は小さくなります。', // 'WebP or JPG is usually smaller for photo-like PNGs.' — fallback key in TargetSizeCompressorTool
    keepOriginal: '元のファイルを保持', // 'Keep original'
    keptOriginalNote: '再エンコードでファイルが大きくなったため、元のファイルを保持しました。', // 'Kept original file because re-encoding made it larger.'
    qualityLosslessPng: '非可逆なしPNG', // 'lossless PNG' — qualityLabel in src/utils/targetCompression.ts for PNG outputs (prevents an English leak)
    statusAlreadyUnder: '元のファイルはすでに{target}未満でした。画質{quality}%でクリーンにエクスポートされました。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnderGrew: '元のファイルはすでに{target}未満でしたが、再エンコードで{bytes}大きくなりました。「元のファイルを保持」を使うか、より小さい出力のためにWebP/JPGに切り替えてください。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusMetFull: 'フル解像度{width}×{height} pxで目標を達成しました（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: '{width}×{height} px（{percent}%）にスケーリングして目標を達成しました（{qualityLabel}）。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    statusCannotPng: '非可逆なしPNGでは{target}に届きません（達成可能な最小サイズ：{width}×{height} pxで{bytes}）。より小さいサイズに届くよう、出力形式をJPGまたはWebPに切り替えてください。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'フルサイズ{width}×{height} pxでは{target}に届きません（最小の画質サイズは{bytes}です）。さらに寸法を縮小するには「サイズスケーリングを許可」を有効にしてください。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly: '要求された目標{target}をクリーンに達成できませんでした。達成可能な最小の正直なエンコード出力は{bytes}（{width}×{height} px、画質{quality}%）です。より大きな目標サイズをお試しください。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    switchedFormatNote: '非可逆なしPNGは、{target}以下でより高い解像度を保つため{format}へ自動変換されました。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    errorTargetFailed: '目標までの圧縮に失敗しました。', // 'Target compression failed.'
    errorCorruptedFile: '破損しているか読み取れない画像ファイルです。', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: '目標圧縮（{target}）', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: '圧縮済み（{bytes}）', // `Compressed (${formatBytes(compressedSize)})`
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: '複数の画像をドロップして一括リサイズ', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: '一括リサイズ戦略', // 'Batch Resize Strategy'
    strategyBounding: '最大幅×高さに収める', // 'Fit Max W × H'
    strategyWidth: '均一な幅', // 'Uniform Width'
    strategyExact: '正確な幅×高さ', // 'Exact W × H'
    strategyPercentage: 'パーセント（%）', // 'Percentage (%)'
    outputFormat: '出力形式', // 'Output Format'
    formatOriginal: 'オリジナル', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'すべての画像をスケール：', // 'Scale All Images:'
    maxWidth: '最大幅（px）', // 'Max Width (px)'
    targetWidth: '目標幅（px）', // 'Target Width (px)'
    exactWidth: '正確な幅（px）', // 'Exact Width (px)'
    maxHeight: '最大高さ（px）', // 'Max Height (px)'
    exactHeight: '正確な高さ（px）', // 'Exact Height (px)'
    doNotEnlarge: '小さい画像を拡大しない', // 'Do not enlarge smaller images'
    fitMode: 'フィットモード', // 'Fit Mode'
    fitContain: '収める', // 'Contain'
    fitCover: '覆う', // 'Cover'
    fitStretch: '引き伸ばす', // 'Stretch'
    presetFullHd: 'フルHD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'ブログ 1200px', // 'Blog 1200px'
    presetEcommerce: 'Eコマース 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'サムネイル 600px', // 'Thumbnail 600px'
    quality: '画質：', // 'Quality:'
    matteBg: 'マット背景：', // 'Matte BG:'
    resizingProgress: 'リサイズ中（{processed}/{total}）…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: '一括リサイズ（{count}）', // 'Bulk Resize ({items.length})'
    clear: 'クリア', // 'Clear'
    bulkResizeComplete: '一括リサイズ完了', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count}枚の画像をリサイズしました', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count}枚の画像をリサイズしました', // '{count} images resized and ready'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    errorResizeFailed: '一括リサイズに失敗しました。', // 'Batch resize failed.'
    errorCorruptedFile: '破損しているか読み取れない画像ファイルです。', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: '一括リサイズ比較', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'リサイズ後', // 'Resized (After)'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: '複数の画像をドロップして形式を一括変換', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'バッチを変換する形式', // 'Convert Batch To Format'
    formatWebp: 'WebP（ウェブで最小）', // 'WebP (Smallest Web)'
    formatJpg: 'JPG（ユニバーサル）', // 'JPG (Universal)'
    formatPng: 'PNG（非可逆なし・透明度あり）', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: '任意のファイル名サフィックス', // 'Optional Filename Suffix'
    placeholderSuffix: '例：_web', // placeholder 'e.g. _web'
    transparentFill: '透明な塗りつぶし', // 'Transparent Fill'
    qualityLosslessPng: '画質（非可逆なしPNG）', // 'Quality (Lossless PNG)'
    qualityPercent: '画質（{quality}%）', // 'Quality ({quality}%)'
    convertingProgress: '変換中（{processed}/{total}）…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'すべて変換（{count}）', // 'Convert All ({items.length})'
    clear: 'クリア', // 'Clear'
    bulkConversionSummary: '一括変換サマリー', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count}ファイルを{format}に変換 · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    convertedTo: '{ext}に変換済み', // 'Converted to {ext}'
    errorConversionFailed: '一括変換に失敗しました。', // 'Batch conversion failed.'
    errorUnsupportedFile: 'サポートされていないか破損した画像ファイルです。', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: '一括形式変換', // 'Bulk Format Conversion'
    comparisonAfterLabel: '変換後', // 'Converted (After)'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'ウェブサイトのアセットをドロップしてCore Web Vitals向けに最適化', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'ウェブパフォーマンスプリセット', // 'Web Performance Presets'
    presetHero: 'ヒーロー/バナー', // 'Hero / Banner'
    presetHeroDesc: '最大1600 px・WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: 'Eコマース商品', // 'E-Commerce Product'
    presetProductDesc: '最大1200 px・WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: 'カード/サムネイル', // 'Card / Thumbnail'
    presetThumbDesc: '最大640 px・WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: 'ソーシャルOG/メール', // 'Social OG / Email'
    presetOgDesc: '最大1200 px・JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'レティナ2倍グラフィック', // 'Retina 2× Graphic'
    presetRetinaDesc: '最大1920 px・WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: 'ウェブ形式', // 'Web Format'
    maxDimension: '最大寸法（長辺）', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: '元の寸法を保持', // 'Keep Original Dimensions'
    max1920: '最大1920 px（レティナ/フルHD）', // 'Max 1920px (Retina / Full HD)'
    max1600: '最大1600 px（ヒーロー/バナー）', // 'Max 1600px (Hero / Banner)'
    max1200: '最大1200 px（ブログ/商品）', // 'Max 1200px (Blog / Product)'
    max800: '最大800 px（コンテンツ内）', // 'Max 800px (In-Content)'
    max640: '最大640 px（サムネイル）', // 'Max 640px (Thumbnails)'
    quality: '画質：', // 'Quality:'
    onlyDownscale: '大きな画像だけを縮小する（EXIF・GPSメタデータは自動的に削除されます）', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: '最適化中…', // 'Optimizing...'
    optimizeForWeb: 'ウェブ用に最適化（{count}）', // 'Optimize for Web ({items.length})'
    clear: 'クリア', // 'Clear'
    webPerformanceSummary: 'ウェブパフォーマンスサマリー', // 'Web Performance Summary'
    pageWeightSaved: '（{percent}%軽量化・ページ重量を{saved}節約）', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '（+{percent}%・{amount}増加）', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    webReady: 'ウェブ対応（{percent}）', // 'Web-Ready ({formatPercent})'
    grewBy: '{amount}増加（{percent}）', // 'Grew by {amount} ({percent})'
    copyImg: '<img>をコピー', // 'Copy <img>'
    copiedHtml: 'HTMLをコピーしました', // 'Copied HTML'
    copyImgTitle: '明示的な幅と高さを持つレスポンシブHTML imgタグをコピー', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'ウェブ最適化に失敗しました。', // 'Web optimization failed.'
    errorCorruptedFile: '破損しているかサポートされていない画像です。', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'ウェブ最適化比較', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'ウェブ対応（後）', // 'Web-Ready (After)'
    compare: '比較', // 'Compare'
    download: 'ダウンロード', // 'Download'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'アニメーションGIFをドロップして圧縮', // 'Drop an animated GIF to compress'
    decodingGif: 'アニメーションGIFのフレームをブラウザ内でローカルにデコードしています…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'フレーム', // 'frame'
    framePlural: 'フレーム', // 'frames'
    presetLight: 'ライト', // 'Light'
    presetBalanced: 'バランス', // 'Balanced'
    presetMaxShrink: '最大圧縮', // 'Max Shrink'
    colorPaletteLimit: 'カラーパレット制限', // 'Color Palette Limit'
    colorsCount: '{count}色', // '{maxColors} colors'
    outputScale: '出力スケール', // 'Output Scale'
    scaleWithDims: '{percent}%（{width}×{height}）', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'フレームレート最適化', // 'Frame Rate Optimization'
    keepAllFrames: 'すべてのフレームを保持', // 'Keep All Frames'
    dropEvery2nd: '2フレームごとに間引く（約50%小さく）', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: '3フレームに1フレーム残す', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'GIFを圧縮中（{progress}%）…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'GIFを圧縮', // 'Compress GIF'
    reset: 'リセット', // 'Reset'
    originalGif: '元のGIF', // 'Original GIF'
    compressedGif: '圧縮済みGIF', // 'Compressed GIF'
    sizeChange: 'サイズ変更', // 'Size Change'
    sizeAndFrames: '{size}・{frames}フレーム', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: '圧縮済みGIFをダウンロード', // 'Download Compressed GIF'
    notSmallerNotice: 'この元のGIFはすでに大幅に最適化されているか、入力データより大きいフルフレームパレットを使用しています。{size}未満に縮小するには、カラーパレットを32〜64色に下げ、出力スケールを75%または50%に下げ、2フレームごとに間引いてください。', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: '{percent}%圧縮しました（{saved}節約）。ブラウザ内でクリーンに処理されました。', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'オリジナル（{width}×{height} px）', // 'Original ({width}×{height}px)'
    compressedLabel: '圧縮済み（{width}×{height} px）', // 'Compressed ({width}×{height}px)'
    altOriginalGif: '元のGIF', // alt 'Original GIF'
    altCompressedGif: '圧縮済みGIF', // alt 'Compressed GIF'
    errorGifFailed: 'GIFの圧縮に失敗しました。', // 'GIF compression failed.'
    errorDecodeFrames: 'GIFフレームをデコードできませんでした。', // 'Could not decode GIF frames.'
    errorTooSmall: 'ファイルが小さすぎて有効なGIFではありません。', // 'File is too small to be a valid GIF.'
    errorNotValidGif: '選択したファイルは有効なGIF87aまたはGIF89aアニメーションではありません。', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIFのキャンバス寸法が無効な0×0です。', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'GIFのグローバルカラーテーブルが途中で切れています。', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'このGIFファイルから画像フレームをデコードできませんでした。', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: '2D Canvasコンテキストを初期化できませんでした。', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'iPhoneのHEICまたはHEIF写真をドロップしてJPGに変換', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Apple HEIC・HEIF写真を、クライアント側WebAssembly（heic2any）を使ってブラウザ内でローカルにデコードします。写真がデバイスから出ることは決してありません。', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    outputQuality: 'JPG出力画質', // 'JPG Output Quality'
    outputQualityLabel: 'JPG出力画質', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'JPG出力画質', // `${targetLabel} output quality`
    smallerFile: '小さいファイル（20%）', // 'Smaller file (20%)'
    balanced: 'バランス（85%）', // 'Balanced (85%)'
    maxDetail: '最大ディテール（100%）', // 'Max detail (100%)'
    losslessPngOutput: '非可逆なしPNG出力', // 'Lossless PNG Output'
    losslessPngEncoding: '非可逆なしPNGエンコード', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '非可逆なしPNGエンコード', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNGはシャープなエッジ、テキスト、アルファ透明度を、非可逆な圧縮アーティファクトなしで保ちます。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNGはシャープなエッジ、テキスト、アルファ透明度を、非可逆な圧縮アーティファクトなしで保ちます。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '透明背景のマット色', // 'Transparent Background Matte Color'
    matteColorLabel: '透明背景のマット色', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'マットの背景色', // 'Matte background color'
    matteWhite: '白', // 'White'
    matteBlack: '黒', // 'Black'
    matteLightGray: 'ライトグレー', // 'Light Gray'
    rasterExportScale: 'ラスターエクスポートスケール', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVGの固有寸法に適用される倍率（最大8000 px）。スケールを変更したあと「すべて再変換」をクリックしてください。', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    converting: '変換中…', // 'Converting...'
    clear: 'クリア', // 'Clear'
    batchSummary: 'HEIC → JPG：バッチサマリー', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count}{files}を変換 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    columnChange: '変化', // 'Change'
    changeLabel: '変化', // 'Change' — primary key in FormatConverterTool
    compare: '比較', // 'Compare'
    downloadTarget: 'JPGをダウンロード', // 'Download JPG'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'このHEIC/HEIFファイルをデコードできませんでした。有効なiPhone/AppleのHEIC写真であることを確認してください。', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: '「{filename}」をデコードできませんでした。有効なHEIC画像であることを確認してください。', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: '{name}をJPGに変換できませんでした。', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'JPGまたはJPEG画像をドロップして非可逆なしPNGに変換', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    outputQuality: 'PNG出力画質', // 'PNG Output Quality'
    outputQualityLabel: 'PNG出力画質', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'PNG出力画質', // `${targetLabel} output quality`
    smallerFile: '小さいファイル（20%）', // 'Smaller file (20%)'
    balanced: 'バランス（85%）', // 'Balanced (85%)'
    maxDetail: '最大ディテール（100%）', // 'Max detail (100%)'
    losslessPngOutput: '非可逆なしPNG出力', // 'Lossless PNG Output'
    losslessPngEncoding: '非可逆なしPNGエンコード', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '非可逆なしPNGエンコード', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNGはシャープなエッジ、テキスト、アルファ透明度を、非可逆な圧縮アーティファクトなしで保ちます。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNGはシャープなエッジ、テキスト、アルファ透明度を、非可逆な圧縮アーティファクトなしで保ちます。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '透明背景のマット色', // 'Transparent Background Matte Color'
    matteColorLabel: '透明背景のマット色', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'マットの背景色', // 'Matte background color'
    matteWhite: '白', // 'White'
    matteBlack: '黒', // 'Black'
    matteLightGray: 'ライトグレー', // 'Light Gray'
    rasterExportScale: 'ラスターエクスポートスケール', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVGの固有寸法に適用される倍率（最大8000 px）。スケールを変更したあと「すべて再変換」をクリックしてください。', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    converting: '変換中…', // 'Converting...'
    clear: 'クリア', // 'Clear'
    batchSummary: 'JPG → PNG：バッチサマリー', // 'JPG → PNG Batch Summary'
    filesConverted: '{count}{files}を変換 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    columnChange: '変化', // 'Change'
    changeLabel: '変化', // 'Change' — primary key in FormatConverterTool
    compare: '比較', // 'Compare'
    downloadTarget: 'PNGをダウンロード', // 'Download PNG'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    errorDecodeFile: '「{filename}」をデコードできませんでした。有効なJPG画像であることを確認してください。', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: '{name}をPNGに変換できませんでした。', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG（{size}）', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'PNGファイルをドロップして小さいJPGに変換', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    outputQuality: 'JPG出力画質', // 'JPG Output Quality'
    outputQualityLabel: 'JPG出力画質', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'JPG出力画質', // `${targetLabel} output quality`
    smallerFile: '小さいファイル（20%）', // 'Smaller file (20%)'
    balanced: 'バランス（85%）', // 'Balanced (85%)'
    maxDetail: '最大ディテール（100%）', // 'Max detail (100%)'
    losslessPngOutput: '非可逆なしPNG出力', // 'Lossless PNG Output'
    losslessPngEncoding: '非可逆なしPNGエンコード', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '非可逆なしPNGエンコード', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNGはシャープなエッジ、テキスト、アルファ透明度を、非可逆な圧縮アーティファクトなしで保ちます。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNGはシャープなエッジ、テキスト、アルファ透明度を、非可逆な圧縮アーティファクトなしで保ちます。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '透明背景のマット色', // 'Transparent Background Matte Color'
    matteColorLabel: '透明背景のマット色', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'マットの背景色', // 'Matte background color'
    matteWhite: '白', // 'White'
    matteBlack: '黒', // 'Black'
    matteLightGray: 'ライトグレー', // 'Light Gray'
    matteNote: 'JPGは透明度をサポートしていません。透明な領域はこの色でクリーンに塗りつぶされます。', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    rasterExportScale: 'ラスターエクスポートスケール', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVGの固有寸法に適用される倍率（最大8000 px）。スケールを変更したあと「すべて再変換」をクリックしてください。', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    converting: '変換中…', // 'Converting...'
    clear: 'クリア', // 'Clear'
    batchSummary: 'PNG → JPG：バッチサマリー', // 'PNG → JPG Batch Summary'
    filesConverted: '{count}{files}を変換 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    columnChange: '変化', // 'Change'
    changeLabel: '変化', // 'Change' — primary key in FormatConverterTool
    compare: '比較', // 'Compare'
    downloadTarget: 'JPGをダウンロード', // 'Download JPG'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    errorDecodeFile: '「{filename}」をデコードできませんでした。有効なPNG画像であることを確認してください。', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: '{name}をJPGに変換できませんでした。', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'JPG画像をドロップして軽量WebPに変換', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebPの出力画質', // 'WebP Output Quality'
    qualityAriaLabel: 'WebPの出力画質', // aria-label 'WebP output quality'
    smallerFile: '小さいファイル（20％）', // 'Smaller file (20%)'
    balanced: 'バランス（85％）', // 'Balanced (85%)'
    maxDetail: '最大のディテール（100％）', // 'Max detail (100%)'
    batchSummary: '{source} → {target}の一括変換まとめ', // '{source} → {target} Batch Summary'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    filesConvertedSuffix: '変換済み', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    changeLabel: '変化', // 'Change'
    compare: '比較', // 'Compare'
    downloadTarget: 'WebPをダウンロード', // 'Download WebP'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    converting: '変換中…', // 'Converting...'
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    clear: 'クリア', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '「{name}」をWebPに変換できませんでした。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '「{name}」をデコードできませんでした。有効なJPG画像か確認してください。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'WebP画像をドロップして汎用的なJPGに変換', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPGの出力画質', // 'JPG Output Quality'
    qualityAriaLabel: 'JPGの出力画質', // aria-label 'JPG output quality'
    smallerFile: '小さいファイル（20％）', // 'Smaller file (20%)'
    balanced: 'バランス（85％）', // 'Balanced (85%)'
    maxDetail: '最大のディテール（100％）', // 'Max detail (100%)'
    matteColorLabel: '透明部分の背景色', // 'Transparent Background Matte Color'
    matteAriaLabel: '背景色', // aria-label 'Matte background color'
    matteWhite: '白', // 'White'
    matteBlack: '黒', // 'Black'
    matteLightGray: 'ライトグレー', // 'Light Gray'
    matteHint: 'JPGは透明性に対応していません。透明な部分はこの色できれいに塗りつぶされます。', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target}の一括変換まとめ', // '{source} → {target} Batch Summary'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    filesConvertedSuffix: '変換済み', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    changeLabel: '変化', // 'Change'
    compare: '比較', // 'Compare'
    downloadTarget: 'JPGをダウンロード', // 'Download JPG'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    converting: '変換中…', // 'Converting...'
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    clear: 'クリア', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '「{name}」をJPGに変換できませんでした。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '「{name}」をデコードできませんでした。有効なWebP画像か確認してください。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'PNGファイルをドロップして透明WebPに変換', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebPの出力画質', // 'WebP Output Quality'
    qualityAriaLabel: 'WebPの出力画質', // aria-label 'WebP output quality'
    smallerFile: '小さいファイル（20％）', // 'Smaller file (20%)'
    balanced: 'バランス（85％）', // 'Balanced (85%)'
    maxDetail: '最大のディテール（100％）', // 'Max detail (100%)'
    batchSummary: '{source} → {target}の一括変換まとめ', // '{source} → {target} Batch Summary'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    filesConvertedSuffix: '変換済み', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    changeLabel: '変化', // 'Change'
    compare: '比較', // 'Compare'
    downloadTarget: 'WebPをダウンロード', // 'Download WebP'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    converting: '変換中…', // 'Converting...'
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    clear: 'クリア', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '「{name}」をWebPに変換できませんでした。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '「{name}」をデコードできませんでした。有効なPNG画像か確認してください。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'WebPファイルをドロップして非可逆なしPNGに変換', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    losslessPngOutput: '非可逆なしPNG出力', // 'Lossless PNG Output'
    losslessPngEncodingTitle: '非可逆なしPNGエンコード', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNGはシャープな輪郭や文字、アルファ透明性を、非可逆圧縮のアーティファクトなしに保ちます。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: '{source} → {target}の一括変換まとめ', // '{source} → {target} Batch Summary'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    filesConvertedSuffix: '変換済み', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    changeLabel: '変化', // 'Change'
    compare: '比較', // 'Compare'
    downloadTarget: 'PNGをダウンロード', // 'Download PNG'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    converting: '変換中…', // 'Converting...'
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    clear: 'クリア', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '「{name}」をPNGに変換できませんでした。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '「{name}」をデコードできませんでした。有効なWebP画像か確認してください。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'SVGベクターファイルをドロップしてPNGにラスタライズ', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'インラインのSVGグラフィックをHTML5 Canvasでローカルにラスタライズし、透明な背景を保持します。制限：SVG内で参照される外部の<image> URL、外部CSSスタイルシート／ウェブフォント、スクリプトは、単独のCanvas書き出しでは描画されない場合があります。', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    losslessPngOutput: '非可逆なしPNG出力', // 'Lossless PNG Output'
    losslessPngEncodingTitle: '非可逆なしPNGエンコード', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNGはシャープな輪郭や文字、アルファ透明性を、非可逆圧縮のアーティファクトなしに保ちます。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'ラスター書き出し倍率', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG本来の寸法にかける倍率（最大8000px）。倍率を変えたあとに「すべて再変換」をクリックしてください。', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: '{source} → {target}の一括変換まとめ', // '{source} → {target} Batch Summary'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    filesConvertedSuffix: '変換済み', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    changeLabel: '変化', // 'Change'
    compare: '比較', // 'Compare'
    downloadTarget: 'PNGをダウンロード', // 'Download PNG'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    converting: '変換中…', // 'Converting...'
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    clear: 'クリア', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '「{name}」をPNGに変換できませんでした。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'このSVGをラスタライズできませんでした。有効なXML形式のSVGマークアップで、構文エラーがないことを確認してください。', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'AVIF画像をドロップして汎用的なJPGに変換', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'お使いのブラウザのネイティブAVIFデコーダー（モダンなChrome、Edge、Firefox、Safariに対応）を使ってAVIF画像をローカルにデコードし、標準的なJPGファイルとして書き出します。', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPGの出力画質', // 'JPG Output Quality'
    qualityAriaLabel: 'JPGの出力画質', // aria-label 'JPG output quality'
    smallerFile: '小さいファイル（20％）', // 'Smaller file (20%)'
    balanced: 'バランス（85％）', // 'Balanced (85%)'
    maxDetail: '最大のディテール（100％）', // 'Max detail (100%)'
    matteColorLabel: '透明部分の背景色', // 'Transparent Background Matte Color'
    matteAriaLabel: '背景色', // aria-label 'Matte background color'
    matteWhite: '白', // 'White'
    matteBlack: '黒', // 'Black'
    matteLightGray: 'ライトグレー', // 'Light Gray'
    matteHint: 'JPGは透明性に対応していません。透明な部分はこの色できれいに塗りつぶされます。', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target}の一括変換まとめ', // '{source} → {target} Batch Summary'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    filesConvertedSuffix: '変換済み', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    changeLabel: '変化', // 'Change'
    compare: '比較', // 'Compare'
    downloadTarget: 'JPGをダウンロード', // 'Download JPG'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    converting: '変換中…', // 'Converting...'
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    clear: 'クリア', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '「{name}」をJPGに変換できませんでした。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'お使いのブラウザでこのAVIF画像をデコードできませんでした。有効な.avif画像か確認し、モダンなChrome、Firefox、Edge、Safariブラウザでお試しください。', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: '非圧縮BMPビットマップをドロップしてコンパクトなJPGに変換', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: '変換パイプライン：', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPGの出力画質', // 'JPG Output Quality'
    qualityAriaLabel: 'JPGの出力画質', // aria-label 'JPG output quality'
    smallerFile: '小さいファイル（20％）', // 'Smaller file (20%)'
    balanced: 'バランス（85％）', // 'Balanced (85%)'
    maxDetail: '最大のディテール（100％）', // 'Max detail (100%)'
    batchSummary: '{source} → {target}の一括変換まとめ', // '{source} → {target} Batch Summary'
    fileSingular: 'ファイル', // 'file'
    filePlural: 'ファイル', // 'files'
    filesConvertedSuffix: '変換済み', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIPを作成中…', // 'Creating ZIP...'
    downloadAllZip: 'すべてダウンロード（ZIP）', // 'Download All (ZIP)'
    changeLabel: '変化', // 'Change'
    compare: '比較', // 'Compare'
    downloadTarget: 'JPGをダウンロード', // 'Download JPG'
    removeImage: '{name}を削除', // aria-label `Remove ${item.name}`
    converting: '変換中…', // 'Converting...'
    reconvertAll: 'すべて再変換', // 'Re-convert All'
    clear: 'クリア', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '「{name}」をJPGに変換できませんでした。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '「{name}」をデコードできませんでした。有効なBMP画像か確認してください。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: '写真をドロップしてAIで背景を除去', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: 'ブラウザ内AIモデルを読み込み中（isnet_quint8）', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: 'モデルキャッシュ', // 'Model Cache'
    progressWasm: 'WebAssemblyのAIランタイムを読み込み中…', // 'Loading WebAssembly AI runtime...'
    progressModel: 'AI背景除去モデルをダウンロード中（約35MB、次回以降はキャッシュされます）…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: 'お使いのブラウザ内でローカルに背景を除去中…', // 'Removing background locally in your browser...'
    progressPreparing: 'ブラウザ内AIモデルを準備中…', // 'Preparing in-browser AI model...'
    progressInitLibrary: 'AI背景除去ライブラリを読み込み中…', // 'Loading AI background removal library...'
    progressInitModule: 'AI背景除去モジュールを初期化中…', // 'Initializing AI background removal module...'
    errorModelInit: 'AI背景モデルを初期化できませんでした：{message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: 'このブラウザでAI背景モデルを初期化できませんでした。', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: '透明PNGの出力をデコードできませんでした。', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: 'このブラウザで背景除去に失敗しました。別の画像を試すか、ページを再読み込みしてください。', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: '変換前後のプレビュー', // 'Before & After Preview'
    splitCompare: '分割比較', // 'Split Compare'
    newImage: '新しい画像', // 'New Image'
    originalLabel: '元画像', // 'Original'
    transparentCutout: '透明な切り抜き（PNG）', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: '単色背景のプレビュー', // 'Solid Background Preview'
    waitingForResult: '結果を待っています…', // 'Waiting for result...'
    processingLocally: 'ローカルで処理中…', // 'Processing locally...'
    cutoutStatus: '切り抜きステータス', // 'Cutout Status'
    ready: '完了', // 'Ready'
    backgroundFillOption: '背景の塗りつぶしオプション', // 'Background Fill Option'
    bgTransparent: '透明', // 'Transparent'
    bgWhite: '白', // 'White'
    bgBlack: '黒', // 'Black'
    bgCustom: 'カスタム', // 'Custom'
    customBackgroundColor: 'カスタム背景色', // 'Custom Background Color'
    downloadTransparentPng: '透明PNGをダウンロード', // 'Download Transparent PNG'
    downloadWithWhite: '白い背景でダウンロード', // 'Download with White Background'
    downloadWithBlack: '黒い背景でダウンロード', // 'Download with Black Background'
    downloadWithCustom: '{color}の背景でダウンロード', // 'Download with {color} Background'
    rerunRemoval: 'もう一度除去', // 'Re-run Removal'
    comparisonTitlePrefix: '背景除去の比較', // 'Background Removal Comparison'
    comparisonAfterTransparent: '切り抜き（透明PNG）', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: '切り抜き（単色背景）', // 'Cutout (Solid BG)'
    altOriginal: '元画像 {name}', // alt `Original ${sourceFile.name}`
    altCutout: '背景を除去した {name}', // alt `Background removed ${sourceFile.name}`
  },
};
