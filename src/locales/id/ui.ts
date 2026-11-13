// Indonesian UI strings — assembled for src/locales/id/ui.ts
// = i18n-id.ts (export ID) + tool-ui-id.ts (export TOOL_UI_ID).
// Neither source has imports. HOME_ENTRY_ID from i18n-id.ts is NOT
// included here: it is already merged as TOOLS_REGISTRY_ID[0] in
// src/locales/id/tools.ts, mirroring the PT ui.ts (PT + TOOL_UI_PT only).

// Indonesian (id) UI strings for CompressMyPic — natural Standard Bahasa Indonesia.
// Mirrors ~/workspace/compressmypic/de-it/i18n-de.ts exactly: same 15
// sections, same keys within each section, same export shape.
// Source: English originals in /tmp/cmpic-idru (Hero, FaqSection,
// EducationalContent, ToolsDirectorySection, ShareSection, Header, Footer,
// ToolPageLayout, UploadZone, ComparisonModal, CompressionControls,
// ResultsList, home entry in tools.ts, App.tsx guides section). The DE/IT
// files were used as structural template only — no DE/IT text copied.
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. "online" stays "online". Placeholders: {name} = tool/file name,
// {max} = max size in MB, {year} = current year, {count} = number of extra errors,
// {current} = current theme, {progress} = ZIP progress %, {bytes} = byte size,
// {formats} = supported format list.
// NOTE on footer links: like ES/PT/DE/IT, this dictionary keeps ENGLISH slugs in the
// footer (legal links /privacy, /terms, /about, /contact; directory links use
// English tool slugs); the app maps them to the current language via
// toLocalizedPath at render.
// NOTE on guidesSection cards: like ES/PT/DE/IT, cards carry NO `link` key — the guide
// hrefs live in App.tsx.
// NOTE on header: the 11 language-switcher native names (English, Español,
// Português, Deutsch, Français, 日本語, Bahasa Indonesia, Italiano, Русский,
// 한국어, 简体中文) live in the app's SUPPORTED_LANGUAGES config, not in this
// dictionary — same as ES/PT/DE/IT.
// NOTE on faqs: translated from the live EN FaqSection.tsx in /tmp/cmpic-idru,
// which matches the IT FAQ set. (The DE file's faqSection is a different,
// older question set and was NOT used as source.)

export const ID = {
  header: {
    home: 'Beranda',
    tools: 'Alat',
    howItWorks: 'Cara Kerja',
    faq: 'FAQ',
    about: 'Tentang',
    contact: 'Kontak',
    compressImages: 'Kompres Gambar',
    themeLight: 'Mode Terang',
    themeDark: 'Mode Gelap',
    themeSystem: 'Default Sistem',
    languageLabel: 'Bahasa',
    homeAriaLabel: 'CompressMyPic – Logo kompresor gambar online gratis',
    themeLightShort: 'Terang', // 'Light'
    themeDarkShort: 'Gelap', // 'Dark'
    themeSystemShort: 'Sistem', // 'System'
    themeHeading: 'Tema', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'Tampilkan atau sembunyikan menu navigasi', // 'Toggle navigation menu'
    themeAriaLabel: 'Ubah tema warna (saat ini: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'Tema: {current}', // 'Theme: {current}'
    aboutUs: 'Tentang Kami', // 'About Us' (mobile drawer)
    contactUs: 'Hubungi Kami', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'Kompresi gambar yang cepat, aman, dan privat langsung di browser Anda. Optimalkan gambar JPG, PNG, dan WebP tanpa mengunggah data Anda ke server mana pun.',
    privacyNote: 'Privasi 100% di Perangkat',
    toolsHeading: 'Alat Gambar',
    legalHeading: 'Kepercayaan & Legal',
    guidesHeading: 'Panduan',
    moreHeading: 'Utilitas Lainnya',
    directoryHeading: 'Alat Kompresi, Pengeditan & Developer Lanjutan',
    processedLocally: 'Diproses secara lokal dengan HTML5 Canvas',
    bottomRights:
      '© {year} CompressMyPic. Hak cipta dilindungi. Utilitas kompresi gambar gratis di browser.',
    contactLabel: 'Kontak: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'Kompres Gambar' },
      { slug: '/image-resizer', label: 'Pengubah Ukuran Gambar' },
      { slug: '/image-converter', label: 'Konverter Gambar' },
      { slug: '/rotate-flip-image', label: 'Putar & Balik Gambar' },
      { slug: '/image-to-pdf', label: 'Gambar ke PDF' },
      { slug: '/remove-image-metadata', label: 'Hapus Metadata' },
      { slug: '/remove-background', label: 'Penghapus Latar Belakang' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'Kebijakan Privasi' },
      { slug: '/terms', label: 'Syarat Layanan' },
      { slug: '/about', label: 'Tentang Kami' },
      { slug: '/contact', label: 'Hubungi Dukungan' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'Cara mengompres gambar untuk WhatsApp tanpa kehilangan kualitas',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP: Format Mana yang Harus Anda Gunakan?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Cara Mengurangi Ukuran Gambar ke 100 KB untuk Web & Email',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'Penampil Metadata & EXIF' },
      { slug: '/favicon-generator', label: 'Generator Favicon' },
      { slug: '/image-color-picker', label: 'Pemilih Warna Gambar' },
      { slug: '/image-dimensions-checker', label: 'Pemeriksa Dimensi Gambar' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: 'Kompres ke 50 KB' },
      { slug: '/compress-image-to-100kb', label: 'Kompres ke 100 KB' },
      { slug: '/compress-image-to-200kb', label: 'Kompres ke 200 KB' },
      { slug: '/compress-image-to-500kb', label: 'Kompres ke 500 KB' },
      { slug: '/target-file-size-compressor', label: 'Kompresor Ukuran File Target' },
      { slug: '/bulk-image-compressor', label: 'Kompresor Gambar Massal' },
      { slug: '/bulk-image-resizer', label: 'Pengubah Ukuran Gambar Massal' },
      { slug: '/bulk-image-converter', label: 'Konverter Gambar Massal' },
      { slug: '/web-image-optimizer', label: 'Pengoptimal Gambar Web' },
      { slug: '/gif-compressor', label: 'Kompresor GIF' },
      { slug: '/image-cropper', label: 'Pemangkas Gambar' },
      { slug: '/image-watermark', label: 'Watermark Gambar' },
      { slug: '/blur-pixelate-image', label: 'Buram & Pikselasi Gambar' },
      { slug: '/add-text-to-image', label: 'Tambah Teks ke Gambar' },
      { slug: '/image-border-generator', label: 'Generator Bingkai Gambar' },
      { slug: '/round-image-corners', label: 'Pembulat Sudut Gambar' },
      { slug: '/image-brightness-editor', label: 'Editor Kecerahan Gambar' },
      { slug: '/image-contrast-editor', label: 'Editor Kontras Gambar' },
      { slug: '/image-saturation-editor', label: 'Editor Saturasi Gambar' },
      { slug: '/image-filters', label: 'Filter Gambar' },
      { slug: '/add-background-to-image', label: 'Tambah Latar Belakang ke Gambar' },
      { slug: '/image-splitter', label: 'Pemisah Gambar' },
      { slug: '/image-dpi-changer', label: 'Pengubah DPI Gambar' },
      { slug: '/image-to-base64', label: 'Gambar ke Base64' },
      { slug: '/base64-to-image', label: 'Base64 ke Gambar' },
      { slug: '/image-color-palette-extractor', label: 'Ekstraktor Palet Warna Gambar' },
      { slug: '/gif-maker', label: 'Pembuat GIF' },
      { slug: '/image-collage-maker', label: 'Pembuat Kolase Gambar' },
      { slug: '/heic-to-jpg', label: 'HEIC ke JPG' },
      { slug: '/jpg-to-png', label: 'JPG ke PNG' },
      { slug: '/png-to-jpg', label: 'PNG ke JPG' },
      { slug: '/jpg-to-webp', label: 'JPG ke WebP' },
      { slug: '/webp-to-jpg', label: 'WebP ke JPG' },
      { slug: '/png-to-webp', label: 'PNG ke WebP' },
      { slug: '/webp-to-png', label: 'WebP ke PNG' },
      { slug: '/svg-to-png', label: 'SVG ke PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF ke JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP ke JPG' },
    ],
  },
  hero: {
    pill: 'Kompresi 100% Privat di Perangkat · Tanpa Unggahan ke Server',
    h1: 'Kompresor Gambar Gratis – Kompres Gambar Online & Perkecil Ukuran Tanpa Kehilangan Kualitas',
    sub: 'Perkecil ukuran file gambar tanpa mengorbankan kualitas yang terlihat. Kompres gambar online gratis dengan kompresor gambar dan kompresor foto gratis kami — pengoptimal gambar online untuk JPG, PNG, WebP, dan HEIC. Cepat, aman, tanpa daftar, tanpa watermark, dan kompresi gambar yang mudah langsung di browser Anda.',
    badge1: 'Gambar Anda tidak pernah meninggalkan perangkat Anda',
    badge2: 'Pemrosesan instan di browser',
    badge3: 'Mendukung JPG, PNG, WebP & HEIC',
  },
  toolsDirectory: {
    heading: 'Alat Pemrosesan Gambar Gratis Lainnya',
    subheading:
      'Setiap alat berjalan 100% di browser Anda — tanpa unggahan ke server, tanpa daftar, tanpa watermark.',
    eyebrow: 'Semua Alat Berbasis Browser', // 'All Browser-Native Tools'
    allTools: 'Semua Alat', // 'All Tools'
    openTool: 'Buka alat', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'Apa Itu Kompresi Gambar?',
        body: 'Kompresi gambar adalah proses mengurangi ukuran file sebuah file grafik dalam byte tanpa menurunkan kualitas visual gambar melebihi batas yang dapat diterima. Saat kamera atau ponsel menyimpan foto, ia menyimpan data dalam jumlah besar — sebagian besar di antaranya tidak mudah dibedakan oleh mata manusia saat dihapus atau disederhanakan. CompressMyPic adalah pengoptimal gambar online gratis dan alat pengecil ukuran gambar yang berfungsi sebagai kompresor foto dan pengecil ukuran foto untuk file JPG, PNG, dan WebP.\n\nDengan menganalisis pola-pola ini, algoritma kompresi gambar menyusun ulang atau membuang informasi yang berlebihan secara selektif. File yang dihasilkan membutuhkan kapasitas penyimpanan yang jauh lebih kecil dan terkirim jauh lebih cepat melalui internet. Panduan ini menunjukkan cara mengompres gambar tanpa kehilangan kualitas, menggunakan penggeser kualitas, preset, dan pilihan format yang ada di CompressMyPic.',
      },
      {
        heading: 'Mengapa Anda Harus Mengompres Gambar?',
        body: 'Gambar yang tidak dioptimalkan adalah salah satu penghambat terbesar bagi kinerja situs web, beban penyimpanan, dan konsumsi data seluler. Mengompres gambar Anda memberikan manfaat langsung dan nyata:',
        bullets: [
          'Pemuatan Situs Web Lebih Cepat: Halaman dengan gambar terkompresi dimuat hingga 70% lebih cepat, meningkatkan Core Web Vitals (Largest Contentful Paint) dan peringkat mesin pencari Anda. Saat Anda mengurangi ukuran gambar untuk halaman situs web, pengunjung bertahan lebih lama dan lebih jarang meninggalkan halaman.',
          'Beban Penyimpanan Berkurang: Kurangi biaya hosting cloud, penggunaan disk server, dan penyimpanan cadangan dengan menyimpan file gambar yang sudah dioptimalkan, bukan file asli yang besar.',
          'Berbagi Gambar Lebih Mudah: Tidak akan lagi terhambat oleh batas lampiran email yang ketat atau kuota unggahan pesan. Foto terkompresi dapat dilampirkan dan dikirim seketika, bahkan dengan koneksi seluler lambat atau paket data terbatas.',
          'Konsumsi Bandwidth Berkurang: Hemat uang pengguna Anda untuk paket data seluler dan cegah pengunjung meninggalkan situs Anda. File yang lebih kecil berarti unduhan lebih cepat — terutama pada koneksi seluler yang lambat.',
        ],
      },
      {
        heading: 'Cara Kerja',
        body: 'Mengompres foto Anda hanya membutuhkan beberapa detik — tanpa akun, tanpa perangkat lunak, tanpa unggahan. Berikut cara mengompres gambar tanpa kehilangan kualitas dalam tiga langkah sederhana.',
        bullets: [
          'Langkah 1 — Unggah gambar Anda: Seret dan letakkan gambar JPG, PNG, WebP, atau HEIC ke area unggah, klik Telusuri File untuk memilihnya, atau tempel gambar dengan Ctrl+V. Anda dapat mengunggah beberapa gambar sekaligus, hingga 20 MB per gambar.',
          'Langkah 2 — Sesuaikan kualitas dan pilih format Anda: Pilih preset Rendah, Seimbang, atau Tinggi, atau geser penggeser kualitas dari 10% hingga 100%, dan pilih untuk mempertahankan format asli atau mengonversi ke JPG, PNG, atau WebP. Lihat ukuran sebelum dan sesudah secara langsung untuk setiap gambar dan gunakan penggeser perbandingan interaktif untuk memeriksa hasil visualnya.',
          'Langkah 3 — Unduh gambar terkompresi Anda: Unduh setiap gambar terkompresi satu per satu, atau klik Unduh Semua (ZIP) untuk mengunduh seluruh batch dalam satu file. Gambar Anda dikompres langsung di browser Anda, jadi tidak ada yang perlu ditunggu dan tidak ada yang perlu diunggah.',
        ],
      },
      {
        heading: 'Mengapa Menggunakan Kompresor Gambar Gratis Ini?',
        body: 'CompressMyPic adalah kompresor gambar gratis tanpa daftar dan tanpa watermark — dibuat untuk foto sehari-hari, gambar situs web, dan unggahan media sosial.',
        bullets: [
          'Kompres JPG, PNG, WebP & HEIC: Satu kompresor gambar untuk format yang benar-benar Anda gunakan. Kompres foto JPG dan JPEG, kompres grafis PNG sambil mempertahankan transparansi, dan kompres gambar WebP untuk file terkecil.',
          'Perkecil Ukuran Gambar Tanpa Kehilangan Kualitas: Kompresi cerdas menghapus data berlebihan dan metadata sambil menjaga gambar tampak hampir sama dengan aslinya. Preset Seimbang adalah titik awal terbaik, dan perbandingan sebelum-sesudah memungkinkan Anda memeriksa kualitasnya sendiri.',
          'Kompresor Gambar Massal – Kompres Beberapa Gambar Sekaligus: Kompresor gambar massal dan kompresor batch ini memungkinkan Anda mengompres beberapa gambar sekaligus dengan pengaturan yang sama, lalu mengunduh semuanya bersamaan dengan tombol Unduh Semua (ZIP), bukan menyimpan file satu per satu.',
          'Kompres Gambar untuk WhatsApp, Instagram & Facebook: Perkecil foto agar cepat terkirim di WhatsApp dan terunggah dengan lancar ke Instagram dan Facebook. File yang lebih kecil menggunakan lebih sedikit data seluler dan jauh lebih kecil kemungkinannya ditolak karena terlalu besar.',
          'Perkecil Ukuran Gambar ke 20 KB, 50 KB, 100 KB, atau 200 KB: Turunkan penggeser kualitas selangkah demi selangkah dan perhatikan ukuran sebelum-sesudah secara langsung hingga Anda mencapai target — 200 KB, 100 KB, 50 KB, atau bahkan 20 KB. Beralih ke format output WebP biasanya membantu Anda mencapainya dengan kehilangan kualitas visual yang lebih sedikit.',
        ],
      },
      {
        heading: 'Kompres JPG, PNG, dan WebP: Format Mana yang Harus Anda Pilih?',
        body: 'JPG, PNG, dan WebP masing-masing memiliki tujuan yang berbeda. Memahami keunggulan masing-masing membantu Anda membuat pilihan terbaik untuk proyek Anda.\n\nBandingkan Perbedaan Visualnya: Tidak yakin seberapa besar kompresi yang dapat diterima? Gunakan opsi perbandingan sebelum-sesudah pada alat ini. Penggeser interaktif kami memungkinkan Anda memeriksa gambar asli dan versi terkompresi secara berdampingan untuk menemukan artefak visual atau kehilangan kualitas sebelum mengunduh.',
        bullets: [
          'Kompresor JPG — Kompres JPG Online Gratis: Terbaik untuk foto di situs web, blog, atau portofolio Anda. Kompres JPG online gratis dan kompres JPEG ke 100 KB dengan menurunkan penggeser kualitas sambil memperhatikan ukuran secara langsung. Kompresi JPEG bersifat lossy — ia menghapus secara permanen sebagian data visual yang sulit dilihat oleh mata manusia. Hasilnya, Anda dapat mengecilkan foto dari megabyte menjadi kilobyte tanpa hampir kehilangan kualitas visual.',
          'Kompresor PNG — Kompres PNG Online Gratis: Terbaik untuk grafis, tangkapan layar, logo, dan gambar yang membutuhkan transparansi, seperti logo, ikon, atau ilustrasi. Kompres PNG online gratis di sini sambil mempertahankan transparansi penuh untuk grafis yang tajam dan sempurna hingga ke piksel. Mengonversi PNG ke WebP sering kali membuatnya jauh lebih kecil.',
          'Kompres Gambar WebP — Format Modern: Terbaik untuk optimasi web. WebP menawarkan kompresi lossy dan lossless yang sangat baik, biasanya 25–35% lebih kecil daripada JPEG atau PNG. Kompres file gambar WebP untuk ukuran terkecil dengan kualitas serupa, dan gunakan WebP saat Anda ingin mengoptimalkan gambar untuk halaman web tanpa kehilangan kualitas visual. Ini adalah pilihan terbaik untuk sebagian besar situs web.',
        ],
      },
      {
        heading: 'Untuk Apa Anda Dapat Menggunakan Kompresor Gambar Ini?',
        body: 'Satu kompresor gambar gratis mencakup alasan paling umum orang perlu mengurangi ukuran gambar.',
        bullets: [
          'Optimalkan gambar untuk web: Optimalkan gambar untuk halaman web agar dimuat lebih cepat, meningkatkan Core Web Vitals, dan peringkat lebih baik. Gambar yang lebih kecil berarti halaman lebih cepat, pengunjung lebih puas, dan bandwidth hosting lebih rendah.',
          'Kompres gambar untuk lampiran email: Kompres gambar untuk lampiran email dengan mengecilkannya menggunakan penggeser kualitas hingga setiap file cukup kecil untuk batas lampiran penyedia email Anda, lalu lampirkan file yang diunduh ke pesan Anda, bukan file asli yang besar.',
          'Kompres foto untuk situs web: Kompres foto untuk situs web, blog, portofolio, atau toko online Anda sebelum mengunggahnya. Foto produk, banner, dan gambar blog tetap tajam sambil memakan jauh lebih sedikit ruang di server Anda.',
          'Perkecil ukuran file foto: Perkecil ukuran file foto dari ponsel atau kamera Anda sebelum membagikan, mencadangkan, atau mencetaknya. Foto besar menjadi cepat dikirim, mudah disimpan, dan sederhana dikelola.',
        ],
      },
      {
        heading: 'Mengapa Ukuran Gambar Penting',
        body: 'File gambar besar beresolusi tinggi adalah hasil dari kemajuan pesat teknologi kamera — gambar kini berukuran 2–3 kali lebih besar daripada hanya beberapa tahun lalu. Saat Anda mengurangi ukuran gambar untuk halaman situs web dan mengoptimalkan gambar untuk penggunaan web, situs Anda dimuat lebih cepat, menggunakan lebih sedikit bandwidth, dan peringkat lebih baik di hasil pencarian.\n\nSaat mencari kompresor yang bagus, carilah yang: 1) tidak mengorbankan kualitas, 2) menjaga data Anda tetap privat (pemrosesan di perangkat), dan 3) memproses gambar dengan cepat tanpa menjalankan file Anda melalui server yang jauh. Itulah tepatnya tujuan CompressMyPic dibuat.',
      },
      {
        heading: 'Tips Optimasi: Perkecil Ukuran Gambar Tanpa Kehilangan Kualitas',
        body: '',
        bullets: [
          'Mulailah dengan Preset Seimbang: Preset Seimbang (kualitas 70%) menawarkan keseimbangan optimal untuk sebagian besar gambar — file jauh lebih kecil dengan kemiripan visual yang besar dengan aslinya.',
          'Pilih format yang tepat: Untuk foto, JPG atau WebP akan selalu menghasilkan file lebih kecil daripada PNG. Untuk logo dan grafis garis dengan transparansi, gunakan PNG.',
          'Bidik ukuran target: Untuk penggunaan situs web, bidik gambar di bawah 200 KB. Untuk email dan pesan, tetap di bawah 1 MB untuk memastikan pengiriman cepat. Gunakan penggeser kualitas dan tampilan ukuran langsung untuk mencapai ukuran target Anda.',
          'Temukan titik ideal: Atur penggeser kualitas ke 85–90% untuk gambar utama yang kualitasnya penting; 70–80% biasanya merupakan keseimbangan ideal untuk penggunaan umum situs web; 50–60% lebih baik untuk thumbnail atau saat ukuran menjadi prioritas utama.',
          'Coba WebP untuk file terkecil: Beralih ke format output WebP biasanya mengecilkan JPG atau PNG sebesar 25–35% lagi dengan kualitas serupa — cara sederhana untuk mengurangi ukuran gambar tanpa kehilangan kualitas.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'Pertanyaan yang Sering Diajukan',
    subheading:
      'Semua yang perlu Anda ketahui tentang mengompres gambar online gratis dengan CompressMyPic.',
    faqs: [
      {
        id: 'faq-1',
        question: 'Bagaimana cara mengompres gambar online secara gratis?',
        answer:
          'Cukup seret dan letakkan file gambar Anda ke CompressMyPic atau klik "Telusuri File". Pilih preset kompresi (Rendah, Seimbang, atau Tinggi) atau sesuaikan penggeser kualitas, lalu unduh gambar yang sudah dioptimalkan seketika. Alat ini 100% gratis tanpa daftar atau instalasi perangkat lunak.',
      },
      {
        id: 'faq-2',
        question: 'Bagaimana cara mengompres gambar ke 100 KB?',
        answer:
          'CompressMyPic tidak memiliki kotak input target KB yang pasti, jadi Anda tidak dapat mengetik 100 KB secara langsung. Sebagai gantinya, unggah gambar Anda, pilih preset atau turunkan penggeser kualitas, dan perhatikan ukuran sebelum-sesudah yang ditampilkan secara langsung untuk setiap gambar. Sesuaikan kualitas atau beralih ke format output WebP hingga ukuran terkompresi mendekati 100 KB, lalu unduh.',
      },
      {
        id: 'faq-3',
        question: 'Bagaimana cara mengurangi ukuran gambar tanpa kehilangan kualitas?',
        answer:
          'Pilih preset Seimbang (kualitas sekitar 70%) atau pengaturan kualitas tinggi 85–90%, yang menghapus data berlebihan dan metadata sambil menjaga gambar tampak hampir sama dengan aslinya. Gunakan perbandingan sebelum-sesudah interaktif untuk memeriksa hasilnya, dan pertahankan format asli atau pilih WebP untuk keseimbangan kualitas dan ukuran terbaik.',
      },
      {
        id: 'faq-4',
        question: 'Bagaimana cara mengompres JPEG ke 100 KB?',
        answer:
          'Untuk mengurangi ukuran file JPEG, unggah JPEG Anda, pilih JPEG sebagai format output, lalu turunkan penggeser kualitas selangkah demi selangkah sambil memperhatikan ukuran terkompresi secara langsung. Karena tidak ada kotak target KB yang pasti, gunakan tampilan ukuran sebelum-sesudah untuk berhenti saat file mendekati 100 KB.',
      },
      {
        id: 'faq-5',
        question: 'Bagaimana cara mengurangi ukuran gambar ke 20 KB, 50 KB, atau 200 KB?',
        answer:
          'Unggah gambar Anda dan turunkan penggeser kualitas secara bertahap, periksa ukuran sebelum-sesudah secara langsung setelah setiap perubahan, hingga Anda mencapai target — 200 KB, 50 KB, atau 20 KB. Target yang lebih kecil seperti 20 KB biasanya membutuhkan pengaturan kualitas yang lebih rendah dan output WebP. Metode yang sama berlaku untuk target apa pun, termasuk 500 KB, dan ukuran selalu ditampilkan dalam KB sehingga Anda dapat melihat dengan tepat seberapa banyak Anda mengurangi ukuran gambar dalam KB.',
      },
      {
        id: 'faq-6',
        question: 'Bagaimana cara mengompres PNG online secara gratis?',
        answer:
          'Unggah PNG Anda ke CompressMyPic dan pilih preset atau sesuaikan penggeser kualitas — mengompres PNG online gratis di sini, tanpa daftar. Transparansi dipertahankan untuk output PNG dan WebP, dan mengonversi PNG ke WebP sering kali membuatnya jauh lebih kecil.',
      },
      {
        id: 'faq-7',
        question: 'Format gambar apa saja yang didukung?',
        answer:
          'CompressMyPic mendukung JPG (JPEG), PNG, WebP, dan HEIC — termasuk foto yang diambil dengan iPhone, yang secara default disimpan sebagai HEIC. Anda dapat mempertahankan format asli atau mengonversi di antara format tersebut — misalnya, mengompres file JPG sebagai JPEG, mengompres file PNG sambil mempertahankan transparansi, atau mengonversi ke WebP untuk file terkecil.',
      },
      {
        id: 'faq-8',
        question: 'Bisakah saya mengompres beberapa gambar sekaligus?',
        answer:
          'Ya. Kompresor gambar massal dan kompresor batch ini memungkinkan Anda mengunggah puluhan gambar sekaligus, mengompres beberapa gambar sekaligus dengan pengaturan yang sama, dan mengunduh semuanya bersamaan dengan tombol "Unduh Semua (ZIP)", atau mengunduh masing-masing secara terpisah.',
      },
      {
        id: 'faq-9',
        question: 'Bagaimana cara mengompres gambar untuk WhatsApp?',
        answer:
          'Unggah foto Anda, pilih preset kualitas yang lebih rendah atau output WebP, dan unduh file yang lebih kecil sebelum membagikannya di WhatsApp. Foto yang lebih kecil terkirim lebih cepat, menggunakan lebih sedikit data seluler, dan lebih kecil kemungkinannya ditolak karena terlalu besar.',
      },
      {
        id: 'faq-10',
        question: 'Bagaimana cara mengompres gambar untuk Instagram atau Facebook?',
        answer:
          'Kompres foto Anda untuk Instagram atau Facebook dengan mengunggahnya di sini, memilih preset Seimbang, dan mengunduh file JPG atau WebP yang lebih kecil. File yang lebih kecil terunggah lebih cepat dan mempertahankan kualitas yang cukup untuk feed, story, dan foto profil.',
      },
      {
        id: 'faq-11',
        question: 'Bisakah saya mengompres gambar untuk lampiran email?',
        answer:
          'Ya. Kompres gambar untuk lampiran email dengan mengecilkannya menggunakan penggeser kualitas hingga setiap file cukup kecil untuk batas lampiran penyedia email Anda, lalu lampirkan file yang diunduh ke pesan Anda, bukan file asli yang besar.',
      },
      {
        id: 'faq-12',
        question: 'Apakah CompressMyPic benar-benar gratis?',
        answer:
          'Ya, CompressMyPic sepenuhnya gratis digunakan. Tidak ada biaya, tidak ada paket berbayar, tidak ada kredit, dan tidak ada batas jumlah gambar yang dapat Anda kompres.',
      },
      {
        id: 'faq-13',
        question: 'Apakah CompressMyPic menambahkan watermark?',
        answer:
          'Tidak. CompressMyPic adalah kompresor gambar gratis tanpa watermark — gambar terkompresi Anda bersih, tanpa logo, teks, atau merek tambahan.',
      },
      {
        id: 'faq-14',
        question: 'Apakah saya harus mendaftar untuk menggunakan CompressMyPic?',
        answer:
          'Tidak. Ini adalah kompresor gambar gratis tanpa daftar: tidak perlu akun, alamat email, atau kata sandi. Cukup buka situsnya dan mulai mengompres.',
      },
      {
        id: 'faq-15',
        question: 'Apakah gambar saya diunggah ke server?',
        answer:
          'Tidak. Semua kompresi terjadi sepenuhnya di perangkat Anda sendiri di dalam browser web, jadi gambar Anda tidak pernah diunggah ke server, disimpan, atau dilihat oleh orang lain. Gambar tetap berada di memori browser dan dihapus saat Anda memuat ulang atau menutup tab.',
      },
      {
        id: 'faq-16',
        question: 'Apakah ada batas ukuran file?',
        answer:
          'Ya, batasnya adalah 20 MB per gambar, yang mencakup foto kamera beresolusi tinggi dan tangkapan layar besar. Karena pemrosesan terjadi di perangkat Anda, kompresi tetap cepat bahkan untuk file besar.',
      },
      {
        id: 'faq-17',
        question: 'Apakah mengompres gambar mengubah dimensinya?',
        answer:
          'Tidak. CompressMyPic menjaga dimensi gambar Anda tidak berubah — hanya ukuran file yang dikurangi. Foto Anda mempertahankan lebar, tinggi, dan rasio aspek yang sama seperti aslinya.',
      },
      {
        id: 'faq-18',
        question: 'Bisakah saya mengompres gambar di ponsel?',
        answer:
          'Ya. CompressMyPic berfungsi di browser seluler di iOS dan Android, jadi Anda dapat mengompres foto di ponsel dengan memilihnya dari galeri atau mengambil foto baru dan mengunggahnya di sini.',
      },
      {
        id: 'faq-19',
        question: 'Bagaimana cara kerja penggeser kualitas?',
        answer:
          'Penggeser kualitas memungkinkan Anda mengatur kualitas kompresi dari 10% hingga 100%. Nilai yang lebih tinggi mempertahankan lebih banyak detail dan menghasilkan file yang lebih besar, sedangkan nilai yang lebih rendah membuat file jauh lebih kecil. Preset Rendah, Seimbang, dan Tinggi mengatur penggeser untuk Anda, dan ukuran sebelum-sesudah secara langsung menunjukkan hasil setiap perubahan.',
      },
      {
        id: 'faq-20',
        question: 'Bagaimana cara memilih format output?',
        answer:
          'Setelah mengunggah gambar, pilih apakah akan mempertahankan format asli atau mengonversi ke JPG, PNG, atau WebP. WebP biasanya merupakan pilihan terbaik untuk mengoptimalkan gambar untuk halaman web karena 25–35% lebih kecil daripada JPEG dengan kualitas serupa, sedangkan PNG terbaik saat Anda membutuhkan transparansi.',
      },
    ],
  },
  guidesSection: {
    heading: 'Panduan',
    subheading:
      'Panduan langkah demi langkah untuk mendapatkan file yang lebih kecil tanpa kehilangan kualitas visual.',
    cards: [
      {
        title: 'Cara Mengompres Gambar untuk WhatsApp Tanpa Kehilangan Kualitas',
        desc: 'Perkecil foto sebelum mengirim agar tetap tajam dan cepat terkirim.',
        cta: 'Baca panduan →',
      },
      {
        title: 'JPG vs PNG vs WebP: Format Mana yang Harus Anda Gunakan?',
        desc: 'Ukuran file, kualitas, dan transparansi dibandingkan, agar Anda dapat memilih format yang tepat.',
        cta: 'Baca panduan →',
      },
      {
        title: 'Cara Mengurangi Ukuran Gambar ke 100 KB untuk Web & Email',
        desc: 'Langkah demi langkah: capai 100 KB tanpa kehilangan kualitas visual.',
        cta: 'Baca panduan →',
      },
    ],
  },
  shareSection: {
    heading: 'Bagikan CompressMyPic kepada Teman Anda',
    text: 'Alat ini bermanfaat bagi Anda? Bantu teman Anda mengompres gambarnya juga — hanya dengan satu ketukan.',
    shareText:
      'Kompres gambar online gratis — tanpa daftar, tanpa watermark. Coba CompressMyPic:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: 'Bagikan di {name}',
    copyLink: 'Salin tautan',
    copied: 'Disalin!',
    share: 'Bagikan',
    emailSubject: 'Kompresor Gambar Gratis – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – Kompresor Gambar Gratis', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'Beranda',
    privacyPill: 'Pemrosesan 100% Privat di Browser · File Tidak Pernah Meninggalkan Perangkat Anda',
    noUploads: 'Tanpa unggahan ke server',
    freeNote: 'Gratis · Tanpa Daftar · Tanpa Watermark',
    howToTitle: 'Cara Menggunakan {name}',
    howToIntro:
      'Ikuti langkah-langkah sederhana ini untuk menyelesaikan tugas Anda — langsung di browser Anda.',
    featuresTitle: 'Mengapa Menggunakan {name} dari CompressMyPic?',
    faqTitle: '{name} — Pertanyaan yang Sering Diajukan',
    relatedTitle: 'Alat Gambar Gratis Terkait',
  },
  uploadZone: {
    dropText: 'Seret & letakkan gambar di sini',
    browseButton: 'telusuri file',
    browsePrefix: 'atau',
    browseSuffix: 'dari komputer atau ponsel Anda',
    orPaste: 'Tempel (Ctrl+V) didukung',
    hint: 'Maks {max} MB per gambar',
    errorTooBig: '"{name}" melebihi batas maksimum {max} MB.',
    errorBadType: '"{name}" bukan format yang didukung ({formats}).',
    errorUnreadable: '"{name}" adalah file kosong (0 byte).',
    errorMore: '(+{count} kesalahan lainnya)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'Area unggah gambar. Seret dan letakkan atau klik untuk menelusuri file.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'File rusak atau tidak dapat dibaca.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'Perbandingan Kualitas Visual',
    beforeLabel: 'Asli (Sebelum)',
    afterLabel: 'Terkompresi (Sesudah)',
    closeLabel: 'Tutup tampilan perbandingan',
    instruction: 'Seret penggeser ke kiri atau kanan untuk memeriksa kualitas setiap piksel.',
    sliderLabel: 'Penggeser',
    sideBySideLabel: 'Berdampingan',
    zoomInLabel: 'Perbesar',
    zoomOutLabel: 'Perkecil',
    originalLabel: 'Asli:',
    outputLabel: 'Hasil:',
    reductionLabel: 'Pengurangan:',
    sizeChangeLabel: 'Perubahan Ukuran:',
    qualityLabel: 'Pengaturan Kualitas:',
    formatLabel: 'Format:',
    modalAriaLabel: 'Modal perbandingan gambar', // 'Image comparison modal'
    altCompressed: 'Versi terkompresi dari {name}', // 'Compressed version of {name}'
    altOriginal: 'Versi asli dari {name}', // 'Original version of {name}'
    altProcessed: 'Versi yang diproses dari {name}', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'Kompresor Gambar Gratis online – Kurangi ke 100 KB',
    seoDescription:
      'Kompres gambar online gratis — perkecil ukuran gambar tanpa mengurangi kualitas. Kompres JPG, PNG, dan WebP tanpa daftar dan tanpa watermark, di browser.',
    h1: 'Kompresor Gambar Gratis online',
    subtitle: 'Perkecil ukuran file JPG, PNG, WebP & HEIC langsung di browser Anda.',
  },
  categories: {
    compress: 'Kompres',
    resize: 'Ubah Ukuran',
    convert: 'Konversi',
    'crop-edit': 'Potong & Edit',
    'ai-tools': 'Tool AI',
    create: 'Buat',
    privacy: 'Tool Privasi',
    developer: 'Tool Developer',
  },
  compressionControls: {
    modeLabel: 'Mode Kompresi', // 'Compression Mode'
    presetLow: 'Kompresi Rendah (85%)', // 'Low Compression (85%)'
    presetBalanced: 'Seimbang (70%)', // 'Balanced (70%)'
    presetHigh: 'Kompresi Tinggi (50%)', // 'High Compression (50%)'
    presetCustom: 'Kustom', // 'Custom'
    formatLabel: 'Format Output', // 'Output Format'
    formatOriginal: 'Asli', // 'Original'
    qualityLabel: 'Target Kualitas:', // 'Quality Target:'
    qualityHigh: 'Fidelitas Tinggi', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'Keseimbangan Web Optimal', // 'Optimal Web Balance' (60–79)
    qualityMax: 'Penghematan Ruang Maksimal', // 'Max Space Savings' (< 60)
    qualityAriaLabel: 'Penggeser kualitas dari 10 hingga 100 persen', // 'Quality slider from 10 to 100 percent'
    compressAll: 'Kompres Ulang Semua', // 'Re-compress All'
    compressing: 'Mengompres…', // 'Compressing...'
    clearAll: 'Hapus Semua', // 'Clear All'
    clearAllTitle: 'Hapus semua gambar', // 'Clear all images'
    transparencyTitle: 'Pemberitahuan Transparansi untuk Konversi JPEG', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'Format JPEG tidak mendukung transparansi (saluran alfa). Latar belakang transparan akan diganti dengan latar belakang solid (putih secara default). Pilih PNG atau WebP jika Anda ingin mempertahankan latar belakang transparan.',
    pngTip:
      'PNG adalah format lossless dan mengabaikan penggeser kualitas, jadi mengodekan ulang PNG terkadang dapat menyamai atau melebihi ukuran file asli. Untuk PNG yang mirip foto, memilih WebP atau JPG biasanya menghasilkan file 50–80% lebih kecil.',
  },
  resultsList: {
    summary: 'Ringkasan Kompresi', // 'Compression Summary'
    image: 'Gambar', // 'Image' (count === 1)
    images: 'Gambar', // 'Images' (count !== 1) — Indonesian has no plural inflection
    totalOriginal: 'Total Asli:', // 'Total Original:'
    totalCompressed: 'Total Terkompresi:', // 'Total Compressed:'
    totalSaved: 'Total Dihemat:', // 'Total Saved:'
    processing: 'Memproses…', // 'Processing...'
    grewBy: '(bertambah {bytes})', // '(grew by {bytes})'
    reduction: 'Pengurangan:', // 'Reduction:'
    sizeChange: 'Perubahan Ukuran:', // 'Size Change:'
    downloadAll: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Membuat ZIP ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'Bandingkan', // 'Compare'
    compareTitle: 'Klik untuk melihat perbandingan kualitas visual', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'Bandingkan sebelum dan sesudah secara visual', // 'Compare visual before/after'
    download: 'Unduh', // 'Download'
    retry: 'Coba Lagi', // 'Retry'
    removeTitle: 'Hapus gambar', // 'Remove image'
    removeAriaLabel: 'Hapus {name}', // 'Remove {name}'
    keptOriginal: 'Asli dipertahankan (pengodean ulang lebih besar)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'Bertambah {bytes} — pengodean ulang lebih besar daripada aslinya', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'Berhasil dikompres', // 'Compressed successfully'
    optimizing: 'Mengoptimalkan piksel…', // 'Optimizing pixels...'
    compressionError: 'Kesalahan kompresi', // 'Compression error'
    original: 'Asli', // 'Original' (metric label)
    compressed: 'Terkompresi', // 'Compressed' (metric label)
    output: 'Hasil', // 'Output' (metric label when original kept)
    spaceSaved: 'Ruang Dihemat', // 'Space Saved'
    formatLabel: 'Format:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alfa', // 'Alpha' badge
    largerTitle: 'Hasil {bytes} lebih besar daripada aslinya.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'Pengodean ulang PNG lossless mengabaikan penggeser kualitas; WebP atau JPG biasanya jauh lebih kecil untuk PNG yang mirip foto.',
    largerNote:
      'Gambar ini sudah sangat terkompresi untuk kualitas yang dipilih.',
    keepOriginal: 'Pertahankan yang asli', // 'Keep original'
  },
} as const;

// Per-tool workspace UI strings in Indonesian (Standard Bahasa Indonesia) — COMPLETE (all 48 tools).
// Assembled from tool-ui-id-batch1.ts … tool-ui-id-batch6.ts (coordinator merge).
// Target: merged into src/locales/id/ui.ts as the TOOL_UI_ID export.
// Indonesian (Standard Bahasa Indonesia), neutral polite forms. Keyed by English slug.
// English source is in a comment on each line. Placeholders in braces
// are filled at runtime and must be kept as-is.
// NOTE: the '/image-metadata-viewer' gpsWarning string is split across JSX
// lines in the page file with an inline link button; gpsWarningLink
// carries that link's text. The '/target-file-size-compressor' table
// carries qualityLosslessPng (looked up by targetCompression.ts for
// the qualityLabel of PNG outputs) and uses the EN
// runtime placeholder names {bytes}/{qualityLabel}/{percent} — the
// only {size} left is maxSuffix, which the component replaces itself.

export const TOOL_UI_ID = {

  '/image-resizer': {
    comparisonTitlePrefix: 'Perbandingan Ubah Ukuran', // 'Resize Comparison'
    comparisonAfterLabel: 'Diubah Ukurannya (Sesudah)', // 'Resized (After)'
    presetInstagramPost: 'Postingan Instagram (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Story Instagram (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'Thumbnail YouTube (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Sampul Facebook (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'Header X (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'Gagal mengubah ukuran gambar.', // 'Resize failed.'
    errorCorruptedFile: 'File gambar rusak atau tidak bisa dibaca.', // 'Corrupted or unreadable image file.'
    resizeMode: 'Mode Ubah Ukuran', // 'Resize Mode'
    modeByPixels: 'Berdasarkan Piksel (L × T)', // 'By Pixels (W × H)'
    modeByPercentage: 'Berdasarkan Persentase (%)', // 'By Percentage (%)'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Asli', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'Lebar (px)', // 'Width (px)'
    heightLabel: 'Tinggi (px)', // 'Height (px)'
    placeholderAuto: 'Otomatis', // placeholder 'Auto'
    aspectRatioLocked: 'Rasio Aspek Terkunci', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'Tidak Terkunci (Kustom)', // 'Unlocked (Custom)'
    fitModeLabel: 'Mode Fit:', // 'Fit Mode:'
    fitContain: 'Contain (Tanpa Potong)', // 'Contain (No Crop)'
    fitCover: 'Cover (Potong Tengah)', // 'Cover (Center Crop)'
    fitStretchExact: 'Regangkan Tepat', // 'Stretch Exact'
    quickPresets: 'Preset Cepat Media Sosial & Web', // 'Quick Social & Web Presets'
    scalePercentage: 'Persentase Skala:', // 'Scale Percentage:'
    outputQuality: 'Kualitas Output:', // 'Output Quality:'
    matteBg: 'Latar:', // 'Matte BG:'
    resizing: 'Mengubah ukuran…', // 'Resizing...'
    resizeAll: 'Ubah Ukuran Semua ({count})', // 'Resize All ({count})'
    clear: 'Bersihkan', // 'Clear'
    batchReady: 'Batch Siap', // 'Batch Ready'
    batchReadySingular: '{count} gambar yang diubah ukurannya siap diunduh', // '{count} resized image ready to download'
    batchReadyPlural: '{count} gambar yang diubah ukurannya siap diunduh', // '{count} resized images ready to download'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'Diubah Ukurannya ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'Perbandingan Konversi Format', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'Dikonversi (Sesudah)', // 'Converted (After)'
    errorConversionFailed: 'Gagal mengonversi gambar.', // 'Conversion failed.'
    errorUnsupportedFile: 'File gambar tidak didukung atau rusak.', // 'Unsupported or corrupted image file.'
    convertToFormat: 'Konversi Ke Format', // 'Convert To Format'
    formatWebp: 'WebP (Web Terkecil)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (Universal)', // 'JPG (Universal)'
    formatPng: 'PNG (Lossless Alpha)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'Warna Isian Transparansi', // 'Transparency Fill Color'
    quality: 'Kualitas', // 'Quality'
    qualityLosslessPng: 'PNG Lossless', // 'Lossless PNG'
    converting: 'Mengonversi…', // 'Converting...'
    convertAll: 'Konversi Semua ({count})', // 'Convert All ({count})'
    clear: 'Bersihkan', // 'Clear'
    conversionComplete: 'Konversi Selesai', // 'Conversion Complete'
    filesConverted: '{count} file dikonversi ke {format}', // '{count} files converted to {format}'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    convertedStatus: 'Dikonversi ke {ext}', // 'Converted to {ext}'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'Putar & Balik Cepat', // 'Quick Rotate & Flip'
    rotate90Left: 'Putar 90° ke Kiri', // 'Rotate 90° Left'
    rotate90Right: 'Putar 90° ke Kanan', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'Balik Horizontal', // 'Flip Horizontal'
    flipVertical: 'Balik Vertikal', // 'Flip Vertical'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Asli', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'Sudut Putar:', // 'Rotation Angle:'
    resetTo0: 'Reset ke 0°', // 'Reset to 0°'
    applyAngle: 'Terapkan Sudut', // 'Apply Angle'
    clear: 'Bersihkan', // 'Clear'
    batchReady: 'Batch Siap', // 'Batch Ready'
    transformedImagesReady: '{count} gambar yang ditransformasi siap', // '{count} transformed images ready'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: 'Diputar {angle}°', // 'Rotated {angle}°'
    flippedH: ' · Dibalik H', // ' · Flipped H'
    flippedV: ' · Dibalik V', // ' · Flipped V'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeItem: 'Hapus {name}', // 'Remove {name}' (aria-label)
    transformFailed: 'Gagal mentransformasi gambar.', // 'Transform failed.'
    corruptedImage: 'Gambar rusak atau tidak bisa dibaca.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'Perbandingan Putar & Balik', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'Diedit (Sesudah)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'Letakkan gambar untuk digabung menjadi PDF', // 'Drop images to combine into PDF'
    couldNotRead: 'Tidak bisa membaca “{filename}”. Pastikan file itu gambar yang valid.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'Gagal membuat PDF.', // 'PDF generation failed.'
    encodingPage: 'Meng-encode halaman {current} dari {total}…', // 'Encoding page {current} of {total}...'
    generatingPdf: 'Membuat PDF…', // 'Generating PDF...'
    pageSize: 'Ukuran Halaman', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'US Letter (8,5 × 11 inci)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'Sesuai Ukuran Gambar', // 'Fit to Image Size'
    orientation: 'Orientasi', // 'Orientation'
    orientationAuto: 'Otomatis (Sesuai Foto)', // 'Auto (Match Photo)'
    orientationPortrait: 'Potret', // 'Portrait'
    orientationLandscape: 'Lanskap', // 'Landscape'
    margin: 'Margin', // 'Margin'
    marginNone: 'Tanpa Margin (Full Bleed)', // 'No Margin (Full Bleed)'
    marginSmall: 'Margin Kecil', // 'Small Margin'
    marginMedium: 'Margin Sedang', // 'Medium Margin'
    imagePlacement: 'Penempatan Gambar', // 'Image Placement'
    placementContain: 'Contain (Gambar Penuh)', // 'Contain (Full Image)'
    placementCover: 'Cover (Isi Halaman)', // 'Cover (Fill Page)'
    pdfFilename: 'Nama File PDF', // 'PDF Filename'
    pdfImageQuality: 'Kualitas Gambar PDF:', // 'PDF Image Quality:'
    createDownloadPdf: 'Buat & Unduh PDF ({count} hlm.)', // 'Create & Download PDF ({count}p)'
    clear: 'Bersihkan', // 'Clear'
    pdfReady: 'PDF siap ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'halaman', // 'page'
    pagePlural: 'halaman', // 'pages'
    downloadPdfAgain: 'Unduh PDF Lagi', // 'Download PDF Again'
    pageOrder: 'Urutan Halaman ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'Halaman', // 'Page' (in Page Order heading)
    pageOrderPlural: 'Halaman', // 'Pages' (in Page Order heading)
    movePageUp: 'Pindahkan halaman ke atas', // 'Move page up' (title)
    movePageDown: 'Pindahkan halaman ke bawah', // 'Move page down' (title)
    removePage: 'Hapus halaman', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'Letakkan gambar untuk memeriksa EXIF & metadata', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'Tidak bisa mengurai metadata gambar.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'Metadata tersemat ditemukan ({count} jenis tag)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'Tidak ada tag EXIF, GPS, atau kamera tersembunyi yang terdeteksi', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'Hapus Metadata', // 'Strip Metadata'
    copyJson: 'Salin JSON', // 'Copy JSON'
    copiedJson: 'JSON disalin', // 'Copied JSON'
    exportJson: 'Ekspor JSON', // 'Export JSON'
    clear: 'Bersihkan', // 'Clear' (title)
    gpsDetected: 'Koordinat Lokasi GPS Terdeteksi', // 'GPS Location Coordinates Detected'
    latitude: 'Lintang:', // 'Latitude:'
    longitude: 'Bujur:', // 'Longitude:'
    gpsWarning:
      'Membagikan gambar ini apa adanya bisa menunjukkan lokasi tempat foto diambil. Gunakan Hapus Metadata Gambar sebelum memposting online.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.' — split across JSX lines in the page, with an inline link button
    gpsWarningLink: 'Hapus Metadata Gambar', // inline link text inside the GPS warning: 'Remove Image Metadata' — extra key, not in the Spanish table
    extractedMetadata: 'Metadata yang Diekstrak ({count} properti)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'Tag Privasi', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'Letakkan foto untuk menghapus EXIF, GPS & metadata', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'Gagal menghapus metadata.', // 'Failed to strip metadata.'
    strippingMethod: 'Metode Penghapusan', // 'Stripping Method'
    losslessStrip: 'Penghapusan Biner Lossless (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'Re-encode Canvas Penuh', // 'Full Canvas Re-encode'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Asli', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'Kualitas Re-encode (dipakai untuk WebP/HEIC atau Re-encode Penuh):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'Membersihkan…', // 'Cleaning...'
    recleanAll: 'Bersihkan Ulang Semua', // 'Re-clean All'
    clear: 'Bersihkan', // 'Clear'
    privacyVerified: 'Privasi Terverifikasi', // 'Privacy Verified'
    cleanImagesReady: '{count} gambar bersih siap, metadata dihapus', // '{count} clean images ready with metadata stripped'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllCleanZip: 'Unduh Semua Bersih (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: 'Dihapus {before} tag metadata → {after} tersisa', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'Terverifikasi bersih (0 tag EXIF/GPS)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'Penghapusan biner lossless', // 'Lossless binary strip'
    cleanCanvasExport: 'Ekspor Canvas bersih', // 'Clean Canvas export'
    scrubbing: 'Menghapus header EXIF & GPS…', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'Unduh Bersih', // 'Download Clean'
    removeItem: 'Hapus {name}', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'Letakkan logo atau ikon Anda di sini', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'PNG atau SVG persegi disarankan · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'telusuri file', // 'browse file'
    errorGenerateFailed: 'Gagal membuat paket favicon.', // 'Failed to generate favicon package.'
    backgroundFill: 'Isian Latar', // 'Background Fill'
    transparent: 'Transparan', // 'Transparent'
    padding: 'Padding', // 'Padding'
    cornerRadius: 'Radius Sudut', // 'Corner Radius'
    tabPreviewAlt: 'Pratinjau tab', // alt 'Tab preview'
    myWebsite: 'Situs Saya', // 'My Website'
    darkTabPreviewAlt: 'Pratinjau tab gelap', // alt 'Dark tab preview'
    darkModeTab: 'Tab Mode Gelap', // 'Dark Mode Tab'
    packingZip: 'Mengemas ZIP…', // 'Packing ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    clear: 'Bersihkan', // title 'Clear'
    downloadFaviconIco: 'Unduh favicon.ico', // title 'Download favicon.ico'
    downloadFile: 'Unduh {filename}', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'Snippet <head> HTML', // 'HTML <head> Snippet'
    copied: 'Disalin!', // 'Copied!'
    copyHtml: 'Salin HTML', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'Letakkan gambar atau tempel screenshot (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'Tidak bisa memuat gambar.', // 'Unable to load image.'
    clickAnywhereToPin: 'Klik di mana saja untuk menyematkan warna', // 'Click anywhere to pin a color'
    newImage: 'Gambar Baru', // 'New Image'
    pixelInspector: 'Inspektor Piksel', // 'Pixel Inspector'
    copyLabel: 'Salin {label}', // title `Copy ${row.label}`
    pickedSwatches: 'Swatch yang Dipilih ({count})', // 'Picked Swatches ({count})'
    exportCss: 'Ekspor CSS', // 'Export CSS'
    clickPixelsHint: 'Klik piksel pada gambar untuk menyimpan warna ke palet Anda.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'Klik untuk memilih & menyalin {hex}', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'Letakkan gambar untuk memeriksa dimensi & rasio yang tepat', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'Periksa Lebar Min (px)', // 'Min Width Check (px)'
    minHeightCheck: 'Periksa Tinggi Min (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'mis. 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'mis. 630', // placeholder 'e.g. 630'
    exportCsv: 'Ekspor CSV', // 'Export CSV'
    exportJson: 'Ekspor JSON', // 'Export JSON'
    clear: 'Bersihkan', // 'Clear'
    headerImage: 'Gambar', // table header 'Image'
    headerDimensions: 'Dimensi', // table header 'Dimensions'
    headerAspectRatio: 'Rasio Aspek', // table header 'Aspect Ratio'
    headerOrientation: 'Orientasi', // table header 'Orientation'
    headerSizeFormat: 'Ukuran / Format', // table header 'Size / Format'
    headerPrint300Dpi: 'Cetak @300 DPI', // table header 'Print @300 DPI'
    headerSpecCheck: 'Periksa Spesifikasi', // table header 'Spec Check'
    orientationLandscape: 'Lanskap', // 'Landscape'
    orientationPortrait: 'Potret', // 'Portrait'
    orientationSquare: 'Persegi', // 'Square'
    alphaTag: ' · Alpha', // ' · Alpha'
    specPass: 'Lolos', // 'Pass'
    specBelowMin: 'Di Bawah Min', // 'Below Min'
    csvYes: 'Ya', // CSV value 'Yes'
    csvNo: 'Tidak', // CSV value 'No'
  },
  '/image-cropper': {
    uploadTitle: 'Letakkan gambar untuk memotong secara interaktif', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'Gambar tidak dapat dimuat.', // 'Unable to load image.'
    errorCanvasContext: 'Konteks kanvas tidak dapat diinisialisasi.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'Ekspor potongan gagal.', // 'Crop export failed.'
    aspectFree: 'Bebas', // aspect preset 'Free'
    selection: 'Pilihan:', // 'Selection:'
    zoomOut: 'Perkecil', // aria-label 'Zoom out'
    zoomIn: 'Perbesar', // aria-label 'Zoom in'
    removeImage: 'Hapus gambar', // aria-label 'Remove image'
    cropSourceAlt: 'Sumber potongan', // alt 'Crop source'
    originalLabel: 'Asli:', // 'Original:'
    cropOptions: 'Opsi Potong', // 'Crop Options'
    selectFull: 'Pilih Semua', // 'Select Full'
    aspectRatioPreset: 'Preset Rasio Aspek', // 'Aspect Ratio Preset'
    cropWidth: 'Lebar Potongan', // 'Crop Width'
    cropHeight: 'Tinggi Potongan', // 'Crop Height'
    outputFormat: 'Format Keluaran', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — sama dalam Bahasa Indonesia
    formatJpg: 'JPG', // 'JPG' — tidak berubah
    quality: 'Kualitas', // 'Quality'
    cropping: 'Memotong…', // 'Cropping...'
    cropAndDownload: 'Potong & Unduh', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'Letakkan gambar untuk menambahkan watermark teks atau logo', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'Gambar tidak dapat dimuat.', // 'Unable to load image.'
    errorUnableToLoadLogo: 'Gambar logo tidak dapat dimuat.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'Ekspor gambar ber-watermark gagal.', // 'Watermark export failed.'
    fallbackWatermarkText: 'Watermark', // canvas fallback text 'Watermark'
    tiledPreview: 'Pratinjau Ubin', // 'Tiled Preview'
    dragToPosition: 'Seret pada gambar untuk memosisikan', // 'Drag on Image to Position'
    changeImage: 'Ganti Gambar', // 'Change Image'
    watermarkType: 'Jenis Watermark', // 'Watermark Type'
    modeText: 'Watermark Teks', // 'Text Watermark'
    modeLogo: 'Logo Gambar', // 'Logo Image'
    watermarkTextLabel: 'Teks Watermark', // 'Watermark Text'
    placeholderBrand: '© Merek Anda', // placeholder '© Your Brand'
    textColor: 'Warna Teks', // 'Text Color'
    size: 'Ukuran', // 'Size'
    uploadLogo: 'Unggah Logo (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'Ganti Logo Gambar', // 'Change Logo Image'
    logoWidth: 'Lebar Logo', // 'Logo Width'
    opacity: 'Opasitas', // 'Opacity'
    rotation: 'Rotasi', // 'Rotation'
    tiledRepeatPattern: 'Pola Ulang Ubin', // 'Tiled Repeat Pattern'
    tileSpacing: 'Jarak Ubin', // 'Tile Spacing'
    anchorPresets: 'Preset Jangkar (atau seret pada gambar)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'Orig', // 'Orig' — singkatan yang sama dalam Bahasa Indonesia
    formatJpg: 'JPG', // 'JPG' — tidak berubah
    quality: 'Kualitas', // 'Quality'
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadWatermarked: 'Unduh Gambar Ber-watermark', // 'Download Watermarked Image'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'Letakkan gambar untuk memburamkan atau mempixelasi area', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'Gambar tidak dapat dimuat.', // 'Unable to load image.'
    errorExportFailed: 'Ekspor gagal.', // 'Export failed.'
    paintOverAreasBlur: 'Lukis di atas area untuk diburamkan', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'Lukis di atas area untuk dipixelasi', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'Pratinjau Seluruh Gambar', // 'Whole-Image Preview'
    undo: 'Urungkan', // 'Undo'
    resetBrush: 'Atur Ulang Kuas', // 'Reset Brush'
    removeImage: 'Hapus gambar', // aria-label 'Remove image'
    targetArea: 'Area Target', // 'Target Area'
    brushArea: 'Area Kuas', // 'Brush Area'
    wholeImage: 'Seluruh Gambar', // 'Whole Image'
    effectStyle: 'Gaya Efek', // 'Effect Style'
    pixelateMosaic: 'Mosaik Pixelasi', // 'Pixelate Mosaic'
    smoothBlur: 'Blur Halus', // 'Smooth Blur'
    blurRadius: 'Radius Blur', // 'Blur Radius'
    mosaicBlockSize: 'Ukuran Blok Mosaik', // 'Mosaic Block Size'
    brushSize: 'Ukuran Kuas', // 'Brush Size'
    brushHint: 'Klik dan seret langsung pada foto untuk menyembunyikan wajah, teks, atau pelat nomor.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'Orig', // 'Orig' — singkatan yang sama dalam Bahasa Indonesia
    formatJpg: 'JPG', // 'JPG' — tidak berubah
    quality: 'Kualitas', // 'Quality'
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadImage: 'Unduh Gambar', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'Letakkan gambar untuk menambahkan overlay teks kustom', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'Gambar tidak dapat dimuat.', // 'Unable to load image.'
    errorExportFailed: 'Ekspor gagal.', // 'Export failed.'
    dragAnyText: 'Seret teks apa pun langsung pada gambar', // 'Drag Any Text Directly on Image'
    changeImage: 'Ganti Gambar', // 'Change Image'
    textLayer: 'Teks {index}', // tab `Text ${idx + 1}`
    add: 'Tambah', // 'Add'
    deleteActiveTextLayer: 'Hapus layer teks aktif', // aria-label 'Delete active text layer'
    textContent: 'Konten Teks (mendukung multi-baris)', // 'Text Content (multi-line supported)'
    font: 'Font', // 'Font'
    fontInter: 'Inter / Sans Bersih', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / Tampilan Meme', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / Serif Klasik', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / Monospace', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / Sans Membulat', // font option 'Trebuchet / Rounded Sans'
    fill: 'Isi', // 'Fill'
    toggleBold: 'Aktifkan Tebal', // aria-label 'Toggle Bold'
    toggleItalic: 'Aktifkan Miring', // aria-label 'Toggle Italic'
    size: 'Ukuran', // 'Size'
    rotation: 'Rotasi', // 'Rotation'
    textOutline: 'Outline Teks', // 'Text Outline'
    dropShadow: 'Bayangan Jatuh', // 'Drop Shadow'
    defaultLayerText: 'Ketuk dua kali atau edit teks', // default layer text 'Double-tap or edit text'
    defaultCaption: 'Caption {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'Orig', // 'Orig' — singkatan yang sama dalam Bahasa Indonesia
    formatJpg: 'JPG', // 'JPG' — tidak berubah
    quality: 'Kualitas', // 'Quality'
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadImageWithText: 'Unduh Gambar dengan Teks', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'Letakkan gambar untuk menambahkan bingkai kustom', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'Gambar tidak dapat dimuat.', // 'Unable to load image.'
    errorExportFailed: 'Ekspor gagal.', // 'Export failed.'
    framedPreview: 'Pratinjau Berbingkai', // 'Framed Preview'
    changeImage: 'Ganti Gambar', // 'Change Image'
    quickFramePresets: 'Preset Bingkai Cepat', // 'Quick Frame Presets'
    presetClassicWhite: 'Putih Klasik', // preset 'Classic White'
    presetPolaroidFrame: 'Bingkai Polaroid', // preset 'Polaroid Frame'
    presetDarkStudio: 'Studio Gelap', // preset 'Dark Studio'
    presetGradientGlow: 'Cahaya Gradien', // preset 'Gradient Glow'
    borderStyle: 'Gaya Bingkai', // 'Border Style'
    borderStyleSolid: 'Solid', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'Gradien', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'Polaroid', // border type 'polaroid' (rendered capitalized)
    borderColor: 'Warna Bingkai', // 'Border Color'
    startColor: 'Warna Awal', // 'Start Color'
    endColor: 'Warna Akhir', // 'End Color'
    gradientAngle: 'Sudut Gradien', // 'Gradient Angle'
    borderSize: 'Ukuran Bingkai', // 'Border Size'
    frameRadius: 'Radius Bingkai', // 'Frame Radius'
    photoRadius: 'Radius Foto', // 'Photo Radius'
    dropShadow: 'Bayangan Jatuh', // 'Drop Shadow'
    shadowNone: 'tidak ada', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'lembut', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'sedang', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'dalam', // shadow level 'deep' (rendered capitalized)
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadFramedImage: 'Unduh Gambar Berbingkai', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'Letakkan gambar untuk membulatkan sudutnya', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'Gambar tidak dapat dimuat.', // 'Unable to load image.'
    errorExportFailed: 'Ekspor gambar membulat gagal.', // 'Failed to export rounded image.'
    liveCornerPreview: 'Pratinjau Sudut Langsung', // 'Live Corner Preview'
    changeImage: 'Ganti Gambar', // 'Change Image'
    cornerSettings: 'Pengaturan Sudut', // 'Corner Settings'
    fullCirclePill: 'Lingkaran Penuh / Pil', // 'Full Circle / Pill'
    individualPerCorner: 'Kontrol Individual Per Sudut', // 'Individual Per-Corner Control'
    allCornersRadius: 'Radius Semua Sudut', // 'All Corners Radius'
    cornerTopLeft: 'Kiri Atas', // per-corner label 'Top Left'
    cornerTopRight: 'Kanan Atas', // per-corner label 'Top Right'
    cornerBottomLeft: 'Kiri Bawah', // per-corner label 'Bottom Left'
    cornerBottomRight: 'Kanan Bawah', // per-corner label 'Bottom Right'
    outerCornerFill: 'Isian Sudut Luar', // 'Outer Corner Fill'
    transparentPngWebp: 'Transparan (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'Warna Solid', // 'Solid Color'
    outputFormat: 'Format Keluaran', // 'Output Format'
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadRoundedImage: 'Unduh Gambar Membulat', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'Letakkan gambar untuk menyesuaikan kecerahan', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'Gambar tidak dapat dimuat.', // 'Unable to load image.'
    errorExportFailed: 'Ekspor gambar hasil edit gagal.', // 'Failed to export adjusted image.'
    viewAfter: 'Sesudah', // view tab 'after' (rendered capitalized)
    viewBefore: 'Sebelum', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'Split Compare', // view tab 'Split Compare'
    fullscreenCompare: 'Bandingkan Layar Penuh', // 'Fullscreen Compare'
    removeImage: 'Hapus gambar', // title/aria-label 'Remove image'
    beforeLabel: 'Sebelum', // split slider label 'Before'
    afterLabel: 'Sesudah', // split slider label 'After'
    originalPreviewAlt: 'Pratinjau asli', // alt 'Original preview'
    originalComparisonAlt: 'Perbandingan asli', // alt 'Original comparison'
    brightnessControls: 'Kontrol Kecerahan', // 'Brightness Controls'
    reset: 'Atur Ulang', // 'Reset'
    brightnessLevel: 'Tingkat Kecerahan', // 'Brightness Level'
    minLabel: '−100% Lebih Gelap', // min label '-100% Darker'
    maxLabel: '+100% Lebih Terang', // max label '+100% Brighter'
    quickPresets: 'Preset Cepat', // 'Quick Presets'
    presetDark: 'Gelap (-30%)', // preset 'Dark (-30%)'
    presetDim: 'Redup (-15%)', // preset 'Dim (-15%)'
    presetOriginal: 'Asli (0%)', // preset 'Original (0%)'
    presetBright: 'Terang (+15%)', // preset 'Bright (+15%)'
    presetVibrant: 'Hidup (+30%)', // preset 'Vibrant (+30%)'
    presetHighKey: 'High Key (+50%)', // preset 'High Key (+50%)'
    outputFormat: 'Format Keluaran', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — sama dalam Bahasa Indonesia
    formatJpg: 'JPG', // 'JPG' — tidak berubah
    quality: 'Kualitas', // 'Quality'
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadEditedImage: 'Unduh Gambar Hasil Edit', // 'Download Edited Image'
    comparisonTitlePrefix: 'Perbandingan Kecerahan', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'Diedit (Sesudah)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'Letakkan gambar untuk menyesuaikan kontras', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'Perbandingan Kontras', // 'Contrast Comparison'
    comparisonAfterLabel: 'Diedit (Sesudah)', // 'Edited (After)'
    errorUnableToLoadImage: 'Tidak dapat memuat gambar.', // 'Unable to load image.'
    errorExportFailed: 'Gagal mengekspor gambar yang disesuaikan.', // 'Failed to export adjusted image.'
    tabAfter: 'Sesudah', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Sebelum', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Bandingkan Terpisah', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Bandingkan Layar Penuh', // 'Fullscreen Compare'
    removeImage: 'Hapus gambar', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Pratinjau asli', // alt 'Original preview'
    originalComparisonAlt: 'Perbandingan asli', // alt 'Original comparison'
    splitBeforeLabel: 'Sebelum', // split slider left label 'Before'
    splitAfterLabel: 'Sesudah', // split slider right label 'After'
    controlsHeading: 'Kontrol Kontras', // '{label} Controls' (contrast mode)
    reset: 'Atur Ulang', // 'Reset'
    levelLabel: 'Tingkat Kontras', // '{label} Level' (contrast mode)
    minLabel: '-100% Datar', // minLabel '-100% Flat'
    maxLabel: '+100% Kontras Tinggi', // maxLabel '+100% High Contrast'
    quickPresets: 'Preset Cepat', // 'Quick Presets'
    presetSoft: 'Lembut (-25%)', // 'Soft (-25%)'
    presetMuted: 'Redup (-10%)', // 'Muted (-10%)'
    presetOriginal: 'Asli (0%)', // 'Original (0%)'
    presetCrisp: 'Tajam (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'Kuat (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'Dramatis (+70%)', // 'Dramatic (+70%)'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Asli', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kualitas', // 'Quality'
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadEditedImage: 'Unduh Gambar yang Diedit', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'Letakkan gambar untuk menyesuaikan saturasi', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'Perbandingan Saturasi', // 'Saturation Comparison'
    comparisonAfterLabel: 'Diedit (Sesudah)', // 'Edited (After)'
    errorUnableToLoadImage: 'Tidak dapat memuat gambar.', // 'Unable to load image.'
    errorExportFailed: 'Gagal mengekspor gambar yang disesuaikan.', // 'Failed to export adjusted image.'
    tabAfter: 'Sesudah', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Sebelum', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Bandingkan Terpisah', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Bandingkan Layar Penuh', // 'Fullscreen Compare'
    removeImage: 'Hapus gambar', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Pratinjau asli', // alt 'Original preview'
    originalComparisonAlt: 'Perbandingan asli', // alt 'Original comparison'
    splitBeforeLabel: 'Sebelum', // split slider left label 'Before'
    splitAfterLabel: 'Sesudah', // split slider right label 'After'
    controlsHeading: 'Kontrol Saturasi', // '{label} Controls' (saturation mode)
    reset: 'Atur Ulang', // 'Reset'
    levelLabel: 'Tingkat Saturasi', // '{label} Level' (saturation mode)
    minLabel: '-100% Grayscale', // minLabel '-100% Grayscale'
    maxLabel: '+100% Hidup', // maxLabel '+100% Vivid'
    quickPresets: 'Preset Cepat', // 'Quick Presets'
    presetGrayscale: 'Grayscale (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'Redup (-40%)', // 'Muted (-40%)'
    presetOriginal: 'Asli (0%)', // 'Original (0%)'
    presetRich: 'Kaya (+30%)', // 'Rich (+30%)'
    presetVivid: 'Hidup (+60%)', // 'Vivid (+60%)'
    presetHyper: 'Hiper (+90%)', // 'Hyper (+90%)'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Asli', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kualitas', // 'Quality'
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadEditedImage: 'Unduh Gambar yang Diedit', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'Letakkan gambar untuk menerapkan filter', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'Perbandingan Filter', // 'Filter Comparison'
    comparisonAfterLabel: 'Difilter', // 'Filtered'
    errorUnableToLoadImage: 'Tidak dapat memuat gambar.', // 'Unable to load image.'
    errorExportFailed: 'Ekspor gagal.', // 'Export failed.'
    filterPreview: 'Pratinjau Filter', // 'Filter Preview'
    holdToViewOriginal: 'Tahan untuk Melihat Asli', // 'Hold to View Original'
    compare: 'Bandingkan', // 'Compare'
    removeImage: 'Hapus gambar', // aria-label 'Remove image'
    originalBadge: 'Asli', // 'Original' badge
    filterPresets: 'Preset Filter', // 'Filter Presets'
    reset: 'Atur Ulang', // 'Reset'
    presetOriginal: 'Asli', // preset 'Original'
    presetGrayscale: 'Grayscale', // preset 'Grayscale'
    presetSepia: 'Sepia', // preset 'Sepia'
    presetVintage: 'Vintage', // preset 'Vintage'
    presetWarm: 'Hangat', // preset 'Warm'
    presetCool: 'Dingin', // preset 'Cool'
    presetHighContrast: 'Kontras Tinggi', // preset 'High Contrast'
    presetMatteFade: 'Matte Fade', // preset 'Matte Fade'
    presetDramatic: 'Dramatis', // preset 'Dramatic'
    presetNoir: 'Noir Hitam Putih', // preset 'B&W Noir'
    presetGoldenHour: 'Golden Hour', // preset 'Golden Hour'
    presetInvert: 'Invert', // preset 'Invert'
    filterIntensity: 'Intensitas Filter', // 'Filter Intensity'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Asli', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kualitas', // 'Quality'
    rendering: 'Merender…', // 'Rendering...'
    downloadFilteredImage: 'Unduh Gambar yang Difilter', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'Letakkan gambar atau PNG transparan untuk menambahkan latar', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'Tidak dapat memuat gambar.', // 'Unable to load image.'
    errorExportFailed: 'Ekspor gagal.', // 'Export failed.'
    backgroundPreview: 'Pratinjau Latar', // 'Background Preview'
    changeImage: 'Ubah Gambar', // 'Change Image'
    outputDimensionsPrefix: 'Output:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'Jenis Latar', // 'Background Type'
    modeSolidColor: 'Warna Solid', // 'Solid Color'
    modeGradient: 'Gradien', // 'Gradient'
    modeBlurredPhoto: 'Foto Blur', // 'Blurred Photo'
    selectColor: 'Pilih warna {color}', // aria-label `Select color ${c}`
    color1: 'Warna 1', // 'Color 1'
    color2: 'Warna 2', // 'Color 2'
    angle: 'Sudut', // 'Angle'
    backdropBlurRadius: 'Radius Blur Latar', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'Rasio Aspek Canvas', // 'Canvas Aspect Ratio'
    aspectOriginal: 'Asli', // 'Orig'
    imageScale: 'Skala Gambar', // 'Image Scale'
    roundness: 'Kebulatan', // 'Roundness'
    dropShadowBehindImage: 'Bayangan di Belakang Gambar', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'Mengekspor…', // 'Exporting...'
    downloadImage: 'Unduh Gambar', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'Letakkan gambar untuk memotongnya menjadi ubin grid atau strip', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'Tidak dapat memuat gambar.', // 'Unable to load image.'
    errorSplitFailed: 'Gagal memotong gambar.', // 'Failed to split image.'
    errorCanvasContext: 'Tidak dapat menginisialisasi konteks canvas.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'Pratinjau Garis Potong ({rows} × {cols} = {tiles} ubin)', // 'Cut-Line Preview ({rows} × {cols} = {tiles} tiles)'
    changeImage: 'Ubah Gambar', // 'Change Image'
    splitGuideAlt: 'Panduan potongan', // alt 'Split guide'
    splitLayout: 'Tata Letak Potongan', // 'Split Layout'
    modeGrid: 'Grid (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'Strip Horiz.', // 'Horiz. Strips'
    modeVerticalStrips: 'Strip Vert.', // 'Vert. Strips'
    rowsLabel: 'Baris (Potongan Horizontal)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'Kolom (Potongan Vertikal)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 Carousel', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 Strip', // preset '4×1 Strips'
    formatOriginal: 'Asli', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'Kualitas Ubin', // 'Tile Quality'
    splittingImage: 'Memotong gambar…', // 'Splitting Image...'
    splitIntoTiles: 'Potong menjadi {count} Ubin', // `Split into ${n} Tiles`
    splitComplete: 'Pemotongan Selesai', // 'Split Complete'
    tilesGenerated: '{count} ubin gambar dibuat pada resolusi penuh', // '{n} image tiles generated at full resolution'
    packagingZip: 'Mengemas ZIP…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'Unduh Semua Ubin (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'Unduh', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'Letakkan gambar JPG atau PNG untuk memperbarui metadata DPI', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'Gagal memperbarui DPI.', // 'Failed to update DPI.'
    targetDpiPresets: 'Preset DPI Target', // 'Target DPI Presets'
    preset72Screen: '72 DPI (Layar)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (Cetak Draf)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (Cetak Berkualitas)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (Arsip)', // '600 DPI (Archival)'
    customDpi: 'DPI Kustom', // 'Custom DPI'
    applyDpi: 'Terapkan {dpi} DPI', // 'Apply {dpi} DPI'
    clear: 'Hapus', // 'Clear'
    batchReady: 'Batch Siap', // 'Batch Ready'
    filesUpdatedToDpi: '{count} file diperbarui ke {dpi} DPI', // '{n} files updated to {dpi} DPI'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'Sebelum: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'Sebelum: Tidak diatur', // 'Before: Not set'
    verifiedDpi: 'Terverifikasi: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Pembaruan Header JPEG Lossless', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Pembaruan pHYs PNG Lossless', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'Dikonversi ke PNG dengan DPI pHYs', // 'Converted to PNG with pHYs DPI'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Letakkan gambar untuk di-encode sebagai Base64', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'Tidak dapat meng-encode file.', // 'Could not encode file.'
    errorFailedToRead: 'Gagal membaca file gambar.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'Gagal menulis ke clipboard — silakan pilih dan salin dari kotak teks.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'File:', // 'File:' (summary card)
    outputLabel: 'Output:', // 'Output:' (summary card)
    charsLabel: 'karakter', // 'chars' (summary card)
    encodeAnother: 'Encode Lain', // 'Encode Another'
    tabDataUrl: 'Data URL', // tab 'Data URL'
    tabRawBase64: 'Base64 Mentah', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'Disalin!', // 'Copied!'
    copyOutput: 'Salin Output', // 'Copy Output'
    saveTxt: 'Simpan .TXT', // 'Save .TXT'
  },
  '/base64-to-image': {
    pasteLabel: 'Tempel String Base64 atau Data URL', // 'Paste Base64 String or Data URL'
    clear: 'Hapus', // 'Clear'
    inputPlaceholder: 'Tempel data:image/png;base64,iVBORw0KGgo... atau byte Base64 mentah di sini', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'Mendukung payload Base64 PNG, JPG, WebP, GIF, SVG, BMP, dan ICO', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'Mendekode…', // 'Decoding...'
    decodeImage: 'Dekode Gambar', // 'Decode Image'
    decodingBytes: 'Mendekode byte Base64…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'Pengodean Data URI tidak didukung. Payload base64 (`;base64,`) diharapkan.', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'Input berisi karakter Base64 yang tidak valid.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'Byte yang didekode bukan gambar yang valid dan bisa dibaca browser.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Tidak dapat mendekode string Base64.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'Pratinjau Base64 yang didekode', // alt 'Decoded Base64 preview'
    validImageDecoded: 'Gambar Valid Didekode', // 'Valid Image Decoded'
    detectedFormat: 'Format Terdeteksi', // 'Detected Format'
    binarySize: 'Ukuran Biner', // 'Binary Size'
    dimensions: 'Dimensi', // 'Dimensions'
    downloadFormat: 'Format Unduhan', // 'Download Format'
    formatOriginal: 'Asli', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'Unduh File Gambar', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'Letakkan gambar untuk mengekstrak paleta warna dominannya', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'Gambar tidak dapat dimuat.', // 'Unable to load image.'
    errorClipboardDenied: 'Izin papan klip ditolak.', // 'Clipboard permission denied.'
    extractedPalette: 'Paleta yang Diekstrak ({count} Warna)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'Sumber', // alt 'Source'
    changeImage: 'Ubah', // 'Change'
    numberOfColors: 'Jumlah Warna', // 'Number of Colors'
    colorsCount: '{count} warna', // '{count} colors'
    copyCssVariables: 'Salin Variabel CSS', // 'Copy CSS Variables'
    copiedCss: 'CSS disalin!', // 'Copied CSS!'
    copyJson: 'Salin JSON', // 'Copy JSON'
    copiedJson: 'JSON disalin!', // 'Copied JSON!'
    downloadPalettePng: 'Unduh PNG Paleta', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'Letakkan 2 gambar atau lebih untuk membuat GIF animasi', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'Gagal mengenkode GIF animasi.', // 'Failed to encode animated GIF.'
    skippedFile: '“{name}” dilewati: {error}', // 'Skipped "{name}": {error}'
    skippedFileNoError: '“{name}” dilewati.', // 'Skipped "{name}".'
    generatedGif: 'GIF yang Dihasilkan ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'Pratinjau Waktu Langsung · Frame {current}/{total}', // 'Live Timing Preview · Frame {current}/{total}'
    generatedGifAlt: 'GIF animasi yang dihasilkan', // alt 'Generated animated GIF'
    pause: 'Jeda', // 'Pause'
    play: 'Putar', // 'Play'
    backToFrameEditor: 'Kembali ke Editor Frame', // 'Back to Frame Editor'
    clearAllFrames: 'Hapus Semua Frame', // aria-label 'Clear all frames'
    largeGifWarning: 'Peringatan: GIF besar ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      'GIF di atas 5–15 MB mungkin diunggah lambat di aplikasi chat atau gagal memenuhi batas platform yang ketat. Coba kurangi lebar/tinggi output (misalnya 480 px), turunkan Kualitas, atau hapus frame.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'Unduh GIF Animasi ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'Pengaturan Animasi', // 'Animation Settings'
    defaultFrameDuration: 'Durasi Frame Default', // 'Default Frame Duration'
    frameDurationValue: '{ms} md ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 md)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 md)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 md)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 md)', // '10 FPS (100ms)'
    loopBehavior: 'Perilaku Loop', // 'Loop Behavior'
    loopForever: 'Selamanya', // 'Forever'
    loopSetLoops: 'Atur Loop', // 'Set Loops'
    loopPlayOnce: 'Putar Sekali', // 'Play Once'
    totalPlays: 'Total Putaran', // 'Total Plays'
    outputDimensions: 'Dimensi Output (px)', // 'Output Dimensions (px)'
    ratioLocked: 'Rasio Terkunci', // 'Ratio Locked'
    ratioUnlocked: 'Tidak Terkunci', // 'Unlocked'
    widthLabel: 'Lebar', // 'Width'
    heightLabel: 'Tinggi', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'Original', // 'Original' — same in Indonesian
    frameFit: 'Penyesuaian Frame', // 'Frame Fit'
    fitContain: 'Contain', // 'contain'
    fitCover: 'Cover', // 'cover'
    backgroundMatte: 'Matte Latar Belakang', // 'Background Matte'
    colorPaletteQuality: 'Kualitas Paleta Warna', // 'Color Palette Quality'
    encodingGif: 'Mengenkode GIF ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'Hasilkan GIF Animasi', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'Enkode Ulang GIF Animasi', // 'Re-Encode Animated GIF'
    framesHeading: 'Frame ({count}) — Seret atau gunakan panah untuk menyusun ulang', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'Biarkan durasi per frame kosong untuk memakai durasi frame global {ms} md.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'Tambah Frame', // 'Add Frames'
    delayMsLabel: 'Durasi (md):', // 'Delay (ms):'
    moveEarlier: 'Pindah lebih awal', // title 'Move earlier'
    moveLater: 'Pindah lebih akhir', // title 'Move later'
    duplicateFrame: 'Gandakan frame', // title 'Duplicate frame'
    removeFrame: 'Hapus frame', // title 'Remove frame'
    moveFrameEarlierAria: 'Pindah frame {n} lebih awal', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'Pindah frame {n} lebih akhir', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'Gandakan frame {n}', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'Hapus frame {n}', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'Letakkan 2 hingga 9 gambar untuk membuat kolase foto', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'Gagal mengekspor kolase.', // 'Failed to export collage.'
    couldNotLoadFile: '“{name}” tidak dapat dimuat: {error}', // 'Could not load "{name}": {error}'
    couldNotLoadFileNoError: '“{name}” tidak dapat dimuat.', // 'Could not load "{name}".'
    collagePreview: 'Pratinjau Kolase ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'Hapus Semua', // 'Clear All'
    rearrangeCells: 'Susun Ulang Sel (Seret atau Ketuk Dua Sel untuk Menukar)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'Seret kartu sel mana pun ke slot lain untuk menyusun ulang foto secara instan.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'Tambah Foto', // 'Add Photos'
    cellLabel: 'Sel {n}', // 'Cell {n}'
    slotLabel: 'Slot {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'Pindah sel {n} ke belakang', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'Pindah sel {n} ke depan', // aria-label `Move cell ${n} forward`
    clearCellAria: 'Kosongkan sel {n}', // aria-label `Clear cell ${n}`
    addPhoto: 'Tambah Foto', // 'Add Photo'
    collageLayout: 'Tata Letak Kolase', // 'Collage Layout'
    layout2x2: 'Grid 2×2', // '2×2 Grid'
    layout3x3: 'Grid 3×3', // '3×3 Grid'
    layoutVertical: 'Strip Vertikal', // 'Vertical Strip'
    layoutHorizontal: 'Strip Horizontal', // 'Horizontal Strip'
    cellProportionsSpacing: 'Proporsi dan Jarak Sel', // 'Cell Proportions & Spacing'
    equalCells: 'Sel Sama', // 'Equal Cells'
    colSplit: 'Pembagian Kolom', // 'Col Split'
    centerCol: 'Kolom Tengah', // 'Center Col'
    rowSplit: 'Pembagian Baris', // 'Row Split'
    centerRow: 'Baris Tengah', // 'Center Row'
    leadCellEmphasis: 'Penekanan Sel Utama', // 'Lead Cell Emphasis'
    gapSpacing: 'Jarak Sel', // 'Gap Spacing'
    cellRadius: 'Radius Sel', // 'Cell Radius'
    backgroundColor: 'Warna Latar Belakang', // 'Background Color'
    backgroundSwatchAria: 'Latar {color}', // aria-label `Background ${c}`
    imageFit: 'Penyesuaian Gambar', // 'Image Fit'
    fitCover: 'Cover', // 'cover'
    fitContain: 'Contain', // 'contain'
    outputSize: 'Ukuran Output (px)', // 'Output Size (px)'
    widthLabel: 'Lebar', // 'Width'
    heightLabel: 'Tinggi', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (Lossless)', // 'PNG (Lossless)'
    jpgQuality: 'Kualitas JPG', // 'JPG Quality'
    exportingCollage: 'Mengekspor Kolase…', // 'Exporting Collage...'
    downloadCollage: 'Unduh Kolase ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'Letakkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Letakkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Kompresi ke ukuran target gagal.', // 'Target compression failed.'
    errorCorruptedFile: 'File gambar rusak atau tidak dapat dibaca.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Ukuran File Maksimum Target', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} maks.)', // '({bytes} max)'
    needDifferentTarget: 'Butuh target KB yang berbeda?', // 'Need a different target KB?'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Indonesian
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Izinkan penskalaan dimensi cerdas jika penurunan kualitas saja tidak muat di bawah {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Otomatis ubah PNG besar ke WebP/JPG jika PNG lossless tidak bisa mencapai {target} dengan bersih', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Otomatis ubah PNG besar ke WebP/JPG jika PNG lossless tidak bisa mencapai {target} dengan bersih', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Warna matte untuk PNG transparan:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Warna matte untuk PNG transparan:', // 'Transparent PNG matte color:'
    compressToTarget: 'Kompres menjadi {target}', // 'Compress to {target}'
    optimizing: 'Mengoptimalkan…', // 'Optimizing...'
    clear: 'Hapus', // 'Clear'
    losslessPngSelected: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG mengabaikan penggeser kualitas, sehingga pengurangan ukuran sangat bergantung pada penyusutan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG mengabaikan penggeser kualitas, sehingga pengurangan ukuran sangat bergantung pada penyusutan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Ringkasan Kompresi Target · Target ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} dari {total} {images} mencapai target {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'gambar', // 'image'
    imagePlural: 'gambar', // 'images'
    summaryMissed: ' · {missed} tidak bisa muat dengan jujur (detail di bawah)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total Dihemat: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total Dihemat: {bytes} (membesar {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(membesar {grew})', // '(grew by {grew})'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Hasil', // 'Output' (metric label)
    metricSpaceSaved: 'Ruang yang Dihemat', // 'Space Saved' (metric label)
    metricReduction: 'Pengurangan', // 'Reduction' (metric label)
    metricSizeChange: 'Perubahan Ukuran', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Hasil', // 'Output' (metric label)
    columnSpaceSaved: 'Ruang yang Dihemat', // 'Space Saved' (metric label)
    columnReduction: 'Pengurangan', // 'Reduction' (metric label)
    columnSizeChange: 'Perubahan Ukuran', // 'Size Change' (metric label)
    underTarget: 'Di Bawah {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Target tidak tercapai — {bytes}', // 'Target missed — {bytes}'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Membesar {bytes}: enkode ulang lebih besar daripada aslinya.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP atau JPG biasanya lebih kecil untuk PNG yang mirip foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP atau JPG biasanya lebih kecil untuk PNG yang mirip foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Pertahankan original', // 'Keep original'
    keptOriginalNote: 'File asli dipertahankan karena enkode ulang membuatnya lebih besar.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparansi dipertahankan)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'File asli sudah berada di bawah {target}, dan enkode ulang membesarkannya {bytes}. Gunakan "Pertahankan original" atau beralih ke WebP/JPG untuk output yang lebih kecil.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Target tercapai pada resolusi penuh {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Target tercapai dengan penskalaan ke {width}×{height} px ({percent}%) pada {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG lossless', // 'lossless PNG'
    qualityPercent: 'Kualitas {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Tidak bisa mencapai {target} dengan PNG lossless (terkecil yang bisa dicapai: {bytes} pada {width}×{height} px). Ubah format output ke JPG atau WebP untuk mencapai ukuran yang lebih kecil.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Tidak bisa mencapai {target} pada dimensi penuh {width}×{height} px (ukuran minimum pada kualitas: {bytes}). Aktifkan "Izinkan Penskalaan Dimensi" untuk memperkecil dimensi lebih lanjut.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Kompresi Target ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Dikompres ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'Letakkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Letakkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Kompresi ke ukuran target gagal.', // 'Target compression failed.'
    errorCorruptedFile: 'File gambar rusak atau tidak dapat dibaca.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Ukuran File Maksimum Target', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} maks.)', // '({bytes} max)'
    needDifferentTarget: 'Butuh target KB yang berbeda?', // 'Need a different target KB?'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Indonesian
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Izinkan penskalaan dimensi cerdas jika penurunan kualitas saja tidak muat di bawah {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Otomatis ubah PNG besar ke WebP/JPG jika PNG lossless tidak bisa mencapai {target} dengan bersih', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Otomatis ubah PNG besar ke WebP/JPG jika PNG lossless tidak bisa mencapai {target} dengan bersih', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Warna matte untuk PNG transparan:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Warna matte untuk PNG transparan:', // 'Transparent PNG matte color:'
    compressToTarget: 'Kompres menjadi {target}', // 'Compress to {target}'
    optimizing: 'Mengoptimalkan…', // 'Optimizing...'
    clear: 'Hapus', // 'Clear'
    losslessPngSelected: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG mengabaikan penggeser kualitas, sehingga pengurangan ukuran sangat bergantung pada penyusutan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG mengabaikan penggeser kualitas, sehingga pengurangan ukuran sangat bergantung pada penyusutan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Ringkasan Kompresi Target · Target ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} dari {total} {images} mencapai target {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'gambar', // 'image'
    imagePlural: 'gambar', // 'images'
    summaryMissed: ' · {missed} tidak bisa muat dengan jujur (detail di bawah)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total Dihemat: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total Dihemat: {bytes} (membesar {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(membesar {grew})', // '(grew by {grew})'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Hasil', // 'Output' (metric label)
    metricSpaceSaved: 'Ruang yang Dihemat', // 'Space Saved' (metric label)
    metricReduction: 'Pengurangan', // 'Reduction' (metric label)
    metricSizeChange: 'Perubahan Ukuran', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Hasil', // 'Output' (metric label)
    columnSpaceSaved: 'Ruang yang Dihemat', // 'Space Saved' (metric label)
    columnReduction: 'Pengurangan', // 'Reduction' (metric label)
    columnSizeChange: 'Perubahan Ukuran', // 'Size Change' (metric label)
    underTarget: 'Di Bawah {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Target tidak tercapai — {bytes}', // 'Target missed — {bytes}'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Membesar {bytes}: enkode ulang lebih besar daripada aslinya.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP atau JPG biasanya lebih kecil untuk PNG yang mirip foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP atau JPG biasanya lebih kecil untuk PNG yang mirip foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Pertahankan original', // 'Keep original'
    keptOriginalNote: 'File asli dipertahankan karena enkode ulang membuatnya lebih besar.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparansi dipertahankan)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'File asli sudah berada di bawah {target}, dan enkode ulang membesarkannya {bytes}. Gunakan "Pertahankan original" atau beralih ke WebP/JPG untuk output yang lebih kecil.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Target tercapai pada resolusi penuh {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Target tercapai dengan penskalaan ke {width}×{height} px ({percent}%) pada {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG lossless', // 'lossless PNG'
    qualityPercent: 'Kualitas {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Tidak bisa mencapai {target} dengan PNG lossless (terkecil yang bisa dicapai: {bytes} pada {width}×{height} px). Ubah format output ke JPG atau WebP untuk mencapai ukuran yang lebih kecil.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Tidak bisa mencapai {target} pada dimensi penuh {width}×{height} px (ukuran minimum pada kualitas: {bytes}). Aktifkan "Izinkan Penskalaan Dimensi" untuk memperkecil dimensi lebih lanjut.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Kompresi Target ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Dikompres ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'Letakkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Letakkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Kompresi ke ukuran target gagal.', // 'Target compression failed.'
    errorCorruptedFile: 'File gambar rusak atau tidak dapat dibaca.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Ukuran File Maksimum Target', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} maks.)', // '({bytes} max)'
    needDifferentTarget: 'Butuh target KB yang berbeda?', // 'Need a different target KB?'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Indonesian
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Izinkan penskalaan dimensi cerdas jika penurunan kualitas saja tidak muat di bawah {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Otomatis ubah PNG besar ke WebP/JPG jika PNG lossless tidak bisa mencapai {target} dengan bersih', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Otomatis ubah PNG besar ke WebP/JPG jika PNG lossless tidak bisa mencapai {target} dengan bersih', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Warna matte untuk PNG transparan:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Warna matte untuk PNG transparan:', // 'Transparent PNG matte color:'
    compressToTarget: 'Kompres menjadi {target}', // 'Compress to {target}'
    optimizing: 'Mengoptimalkan…', // 'Optimizing...'
    clear: 'Hapus', // 'Clear'
    losslessPngSelected: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG mengabaikan penggeser kualitas, sehingga pengurangan ukuran sangat bergantung pada penyusutan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG mengabaikan penggeser kualitas, sehingga pengurangan ukuran sangat bergantung pada penyusutan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Ringkasan Kompresi Target · Target ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} dari {total} {images} mencapai target {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'gambar', // 'image'
    imagePlural: 'gambar', // 'images'
    summaryMissed: ' · {missed} tidak bisa muat dengan jujur (detail di bawah)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total Dihemat: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total Dihemat: {bytes} (membesar {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(membesar {grew})', // '(grew by {grew})'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Hasil', // 'Output' (metric label)
    metricSpaceSaved: 'Ruang yang Dihemat', // 'Space Saved' (metric label)
    metricReduction: 'Pengurangan', // 'Reduction' (metric label)
    metricSizeChange: 'Perubahan Ukuran', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Hasil', // 'Output' (metric label)
    columnSpaceSaved: 'Ruang yang Dihemat', // 'Space Saved' (metric label)
    columnReduction: 'Pengurangan', // 'Reduction' (metric label)
    columnSizeChange: 'Perubahan Ukuran', // 'Size Change' (metric label)
    underTarget: 'Di Bawah {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Target tidak tercapai — {bytes}', // 'Target missed — {bytes}'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Membesar {bytes}: enkode ulang lebih besar daripada aslinya.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP atau JPG biasanya lebih kecil untuk PNG yang mirip foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP atau JPG biasanya lebih kecil untuk PNG yang mirip foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Pertahankan original', // 'Keep original'
    keptOriginalNote: 'File asli dipertahankan karena enkode ulang membuatnya lebih besar.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparansi dipertahankan)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'File asli sudah berada di bawah {target}, dan enkode ulang membesarkannya {bytes}. Gunakan "Pertahankan original" atau beralih ke WebP/JPG untuk output yang lebih kecil.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Target tercapai pada resolusi penuh {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Target tercapai dengan penskalaan ke {width}×{height} px ({percent}%) pada {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG lossless', // 'lossless PNG'
    qualityPercent: 'Kualitas {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Tidak bisa mencapai {target} dengan PNG lossless (terkecil yang bisa dicapai: {bytes} pada {width}×{height} px). Ubah format output ke JPG atau WebP untuk mencapai ukuran yang lebih kecil.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Tidak bisa mencapai {target} pada dimensi penuh {width}×{height} px (ukuran minimum pada kualitas: {bytes}). Aktifkan "Izinkan Penskalaan Dimensi" untuk memperkecil dimensi lebih lanjut.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Kompresi Target ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Dikompres ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'Letakkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Letakkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Kompresi ke ukuran target gagal.', // 'Target compression failed.'
    errorCorruptedFile: 'File gambar rusak atau tidak dapat dibaca.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Ukuran File Maksimum Target', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} maks.)', // '({bytes} max)'
    needDifferentTarget: 'Butuh target KB yang berbeda?', // 'Need a different target KB?'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Indonesian
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Izinkan penskalaan dimensi cerdas jika penurunan kualitas saja tidak muat di bawah {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Otomatis ubah PNG besar ke WebP/JPG jika PNG lossless tidak bisa mencapai {target} dengan bersih', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Otomatis ubah PNG besar ke WebP/JPG jika PNG lossless tidak bisa mencapai {target} dengan bersih', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Warna matte untuk PNG transparan:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Warna matte untuk PNG transparan:', // 'Transparent PNG matte color:'
    compressToTarget: 'Kompres menjadi {target}', // 'Compress to {target}'
    optimizing: 'Mengoptimalkan…', // 'Optimizing...'
    clear: 'Hapus', // 'Clear'
    losslessPngSelected: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG mengabaikan penggeser kualitas, sehingga pengurangan ukuran sangat bergantung pada penyusutan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG mengabaikan penggeser kualitas, sehingga pengurangan ukuran sangat bergantung pada penyusutan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Ringkasan Kompresi Target · Target ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} dari {total} {images} mencapai target {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'gambar', // 'image'
    imagePlural: 'gambar', // 'images'
    summaryMissed: ' · {missed} tidak bisa muat dengan jujur (detail di bawah)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total Dihemat: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total Dihemat: {bytes} (membesar {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(membesar {grew})', // '(grew by {grew})'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Hasil', // 'Output' (metric label)
    metricSpaceSaved: 'Ruang yang Dihemat', // 'Space Saved' (metric label)
    metricReduction: 'Pengurangan', // 'Reduction' (metric label)
    metricSizeChange: 'Perubahan Ukuran', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Hasil', // 'Output' (metric label)
    columnSpaceSaved: 'Ruang yang Dihemat', // 'Space Saved' (metric label)
    columnReduction: 'Pengurangan', // 'Reduction' (metric label)
    columnSizeChange: 'Perubahan Ukuran', // 'Size Change' (metric label)
    underTarget: 'Di Bawah {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Target tidak tercapai — {bytes}', // 'Target missed — {bytes}'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Membesar {bytes}: enkode ulang lebih besar daripada aslinya.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP atau JPG biasanya lebih kecil untuk PNG yang mirip foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP atau JPG biasanya lebih kecil untuk PNG yang mirip foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Pertahankan original', // 'Keep original'
    keptOriginalNote: 'File asli dipertahankan karena enkode ulang membuatnya lebih besar.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'PNG lossless otomatis diubah ke {format} untuk mempertahankan resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparansi dipertahankan)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'File asli sudah berada di bawah {target}, dan enkode ulang membesarkannya {bytes}. Gunakan "Pertahankan original" atau beralih ke WebP/JPG untuk output yang lebih kecil.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'File asli sudah berada di bawah {target}; file diekspor dengan bersih pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Target tercapai pada resolusi penuh {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Target tercapai dengan penskalaan ke {width}×{height} px ({percent}%) pada {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG lossless', // 'lossless PNG'
    qualityPercent: 'Kualitas {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Tidak bisa mencapai {target} dengan PNG lossless (terkecil yang bisa dicapai: {bytes} pada {width}×{height} px). Ubah format output ke JPG atau WebP untuk mencapai ukuran yang lebih kecil.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Tidak bisa mencapai {target} pada dimensi penuh {width}×{height} px (ukuran minimum pada kualitas: {bytes}). Aktifkan "Izinkan Penskalaan Dimensi" untuk memperkecil dimensi lebih lanjut.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Target {target} yang diminta tidak bisa dicapai dengan bersih. Output enkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba ukuran target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Kompresi Target ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Dikompres ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'Letakkan puluhan gambar untuk kompresi massal', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'Kompresi gagal.', // 'Compression failed.'
    errorCorruptedFile: 'File gambar rusak atau tidak dapat dibaca.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'Profil Batch Cepat:', // 'Quick Batch Profiles:'
    profileWebFast: 'Web Cepat (WebP 75%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'Email / Berbagi (JPG 65%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'Kualitas Tinggi (85%)', // 'High Fidelity (85%)'
    compressingBatch: 'Mengompres batch secara lokal…', // 'Compressing batch locally...'
    // String yang dirender oleh CompressionControls, ResultsList, dan ComparisonModal
    // berasal dari bagian kamus i18n-id.ts bersama (compressionControls,
    // resultsList, comparisonModal) — sudah diterjemahkan di Batch 1.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: 'Jatuhkan gambar untuk mengompres di bawah {target}', // `Drop images to compress under ${targetLabel}`
    uploadTitle: 'Jatuhkan gambar untuk mengompres di bawah {target}', // 'Drop images to compress under {target}' — fallback key in TargetSizeCompressorTool
    targetMaxFileSize: 'Ukuran File Target Maksimum', // 'Target Maximum File Size'
    targetNumberAria: 'Angka ukuran file target', // aria-label 'Target file size number'
    maxSuffix: '({size} maks.)', // '({formatBytes(effectiveTargetBytes)} max)'
    targetMaxSuffix: '({bytes} maks.)', // '({bytes} max)' — fallback key in TargetSizeCompressorTool
    needDifferentTarget: 'Butuh target KB yang berbeda?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Indonesian
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged (format name)
    formatPng: 'PNG', // 'PNG' — unchanged (format name)
    allowDownscale: 'Izinkan penskalaan dimensi cerdas jika pengurangan kualitas saja tidak bisa muat di bawah {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'Otomatis konversi PNG besar ke WebP/JPG saat PNG lossless tidak bisa mencapai {target} dengan rapi', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'Warna matte PNG transparan:', // 'Transparent PNG matte color:'
    transparentPngMatte: 'Warna matte PNG transparan:', // 'Transparent PNG matte color:' — fallback key in TargetSizeCompressorTool
    losslessPngTitle: 'PNG lossless dipilih:', // 'Lossless PNG selected:'
    losslessPngSelected: 'PNG lossless dipilih:', // 'Lossless PNG selected:' — fallback key in TargetSizeCompressorTool
    losslessPngNote: 'PNG mengabaikan slider kualitas, sehingga pengurangan ukuran sepenuhnya bergantung pada pengecilan dimensi piksel. Untuk foto besar, pilih JPG atau WebP agar bisa mencapai batas KB yang ketat sambil tetap tajam.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: 'Kompres ke {target}', // 'Compress to {targetLabel}'
    optimizing: 'Mengoptimalkan…', // 'Optimizing...'
    clear: 'Bersihkan', // 'Clear'
    targetSummary: 'Ringkasan Kompresi Target · Target ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{achieved} dari {total} {images} mencapai target {target}', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'gambar', // 'image'
    imagePlural: 'gambar', // 'images'
    summaryMissed: '· {missed} memang tidak bisa muat (detail di bawah)', // '{missed} could not honestly fit (details below)'
    totalSaved: 'Total Dihemat: {bytes}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(membesar {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    underTarget: 'Di bawah {target} ({bytes})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'Target gagal — {bytes}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'Original', // 'Original'
    columnOutput: 'Output', // 'Output'
    columnSpaceSaved: 'Ruang Dihemat', // 'Space Saved'
    columnReduction: 'Pengurangan', // 'Reduction'
    columnSizeChange: 'Perubahan Ukuran', // 'Size Change'
    metricOriginal: 'Original', // 'Original' — fallback key in TargetSizeCompressorTool
    metricOutput: 'Output', // 'Output' — fallback key in TargetSizeCompressorTool
    metricSpaceSaved: 'Ruang Dihemat', // 'Space Saved' — fallback key in TargetSizeCompressorTool
    metricReduction: 'Pengurangan', // 'Reduction' — fallback key in TargetSizeCompressorTool
    metricSizeChange: 'Perubahan Ukuran', // 'Size Change' — fallback key in TargetSizeCompressorTool
    grewBy: 'Membesar {bytes} — hasil pengodean ulang lebih besar dari aslinya.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: 'WebP atau JPG biasanya lebih kecil untuk PNG fotografis.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngNote: 'WebP atau JPG biasanya lebih kecil untuk PNG fotografis.', // 'WebP or JPG is usually smaller for photo-like PNGs.' — fallback key in TargetSizeCompressorTool
    keepOriginal: 'Pertahankan original', // 'Keep original'
    keptOriginalNote: 'File original dipertahankan karena pengodean ulang membuatnya lebih besar.', // 'Kept original file because re-encoding made it larger.'
    qualityLosslessPng: 'PNG lossless', // 'lossless PNG' — qualityLabel in src/utils/targetCompression.ts for PNG outputs (key PT lacks; prevents an English leak)
    statusAlreadyUnder: 'File original sudah di bawah {target}; diekspor dengan rapi pada kualitas {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnderGrew: 'File original sudah di bawah {target}, dan pengodean ulang membesarkannya {bytes}. Gunakan "Pertahankan original" atau beralih ke WebP/JPG untuk output yang lebih kecil.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusMetFull: 'Target tercapai pada resolusi penuh {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: 'Target tercapai dengan menskalakan ke {width}×{height} px ({percent}%) pada {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    statusCannotPng: 'Tidak bisa mencapai {target} dengan PNG lossless (ukuran terkecil yang bisa dicapai: {bytes} pada {width}×{height} px). Ubah format output ke JPG atau WebP untuk mencapai ukuran yang lebih kecil.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'Tidak bisa mencapai {target} pada dimensi penuh {width}×{height} px (ukuran kualitas minimum adalah {bytes}). Aktifkan "Izinkan Penskalaan Dimensi" untuk memperkecil dimensi lebih lanjut.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly: 'Target {target} yang diminta tidak bisa dicapai dengan rapi. Output terenkode jujur terkecil adalah {bytes} ({width}×{height} px, kualitas {quality}%). Coba nilai target yang lebih besar.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    switchedFormatNote: 'PNG lossless otomatis dikonversi ke {format} untuk menjaga resolusi yang lebih tinggi di bawah {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    errorTargetFailed: 'Kompresi target gagal.', // 'Target compression failed.'
    errorCorruptedFile: 'File gambar rusak atau tidak bisa dibaca.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Kompresi Target ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'Terkompresi ({bytes})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'Jatuhkan banyak gambar untuk mengubah ukuran secara massal', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'Strategi Ubah Ukuran Massal', // 'Batch Resize Strategy'
    strategyBounding: 'Pas Maks L×T', // 'Fit Max W × H'
    strategyWidth: 'Lebar Seragam', // 'Uniform Width'
    strategyExact: 'L × T Tepat', // 'Exact W × H'
    strategyPercentage: 'Persentase (%)', // 'Percentage (%)'
    outputFormat: 'Format Output', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Indonesian
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'Skalakan Semua Gambar:', // 'Scale All Images:'
    maxWidth: 'Lebar Maks (px)', // 'Max Width (px)'
    targetWidth: 'Lebar Target (px)', // 'Target Width (px)'
    exactWidth: 'Lebar Tepat (px)', // 'Exact Width (px)'
    maxHeight: 'Tinggi Maks (px)', // 'Max Height (px)'
    exactHeight: 'Tinggi Tepat (px)', // 'Exact Height (px)'
    doNotEnlarge: 'Jangan perbesar gambar yang lebih kecil', // 'Do not enlarge smaller images'
    fitMode: 'Mode Penyesuaian', // 'Fit Mode'
    fitContain: 'Muat', // 'Contain'
    fitCover: 'Isi', // 'Cover'
    fitStretch: 'Regang', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'Blog 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'E-commerce 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'Thumbnail 600px', // 'Thumbnail 600px'
    quality: 'Kualitas:', // 'Quality:'
    matteBg: 'Latar Matte:', // 'Matte BG:'
    resizingProgress: 'Mengubah Ukuran ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'Ubah Ukuran Massal ({count})', // 'Bulk Resize ({items.length})'
    clear: 'Bersihkan', // 'Clear'
    bulkResizeComplete: 'Ubah Ukuran Massal Selesai', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} gambar diubah ukurannya dan siap', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} gambar diubah ukurannya dan siap', // '{count} images resized and ready'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'Ubah ukuran massal gagal.', // 'Batch resize failed.'
    errorCorruptedFile: 'File gambar rusak atau tidak bisa dibaca.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Perbandingan Ubah Ukuran Massal', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'Diubah Ukurannya (Sesudah)', // 'Resized (After)'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'Jatuhkan banyak gambar untuk mengonversi format secara massal', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'Konversi Batch ke Format', // 'Convert Batch To Format'
    formatWebp: 'WebP (Terkecil untuk Web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (Universal)', // 'JPG (Universal)'
    formatPng: 'PNG (Lossless Alfa)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'Sufiks Nama File Opsional', // 'Optional Filename Suffix'
    placeholderSuffix: 'mis. _web', // placeholder 'e.g. _web'
    transparentFill: 'Isian Transparan', // 'Transparent Fill'
    qualityLosslessPng: 'Kualitas (PNG lossless)', // 'Quality (Lossless PNG)'
    qualityPercent: 'Kualitas ({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: 'Mengonversi ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'Konversi Semua ({count})', // 'Convert All ({items.length})'
    clear: 'Bersihkan', // 'Clear'
    bulkConversionSummary: 'Ringkasan Konversi Massal', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} file dikonversi ke {format} · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    convertedTo: 'Dikonversi ke {ext}', // 'Converted to {ext}'
    errorConversionFailed: 'Konversi massal gagal.', // 'Batch conversion failed.'
    errorUnsupportedFile: 'File gambar tidak didukung atau rusak.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'Konversi Format Massal', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'Dikonversi (Sesudah)', // 'Converted (After)'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Jatuhkan aset situs untuk dioptimalkan bagi Core Web Vitals', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'Preset Performa Web', // 'Web Performance Presets'
    presetHero: 'Hero / Banner', // 'Hero / Banner'
    presetHeroDesc: 'Maks 1600px · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: 'Produk E-Commerce', // 'E-Commerce Product'
    presetProductDesc: 'Maks 1200px · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: 'Kartu / Thumbnail', // 'Card / Thumbnail'
    presetThumbDesc: 'Maks 640px · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: 'Social OG / Email', // 'Social OG / Email'
    presetOgDesc: 'Maks 1200px · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'Grafis Retina 2×', // 'Retina 2× Graphic'
    presetRetinaDesc: 'Maks 1920px · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: 'Format Web', // 'Web Format'
    maxDimension: 'Dimensi Maks (Tepi Panjang)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'Pertahankan Dimensi Asli', // 'Keep Original Dimensions'
    max1920: 'Maks 1920px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'Maks 1600px (Hero / Banner)', // 'Max 1600px (Hero / Banner)'
    max1200: 'Maks 1200px (Blog / Produk)', // 'Max 1200px (Blog / Product)'
    max800: 'Maks 800px (Dalam Konten)', // 'Max 800px (In-Content)'
    max640: 'Maks 640px (Thumbnail)', // 'Max 640px (Thumbnails)'
    quality: 'Kualitas:', // 'Quality:'
    onlyDownscale: 'Hanya perkecil gambar yang lebih besar (metadata EXIF & GPS otomatis dihapus)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'Mengoptimalkan…', // 'Optimizing...'
    optimizeForWeb: 'Optimalkan untuk Web ({count})', // 'Optimize for Web ({items.length})'
    clear: 'Bersihkan', // 'Clear'
    webPerformanceSummary: 'Ringkasan Performa Web', // 'Web Performance Summary'
    pageWeightSaved: '({percent}% lebih ringan · {saved} bobot halaman dihemat)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · membesar {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    webReady: 'Siap Web ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: 'Membesar {amount} ({percent})', // 'Grew by {amount} ({percent})'
    copyImg: 'Salin <img>', // 'Copy <img>'
    copiedHtml: 'HTML disalin', // 'Copied HTML'
    copyImgTitle: 'Salin tag img HTML responsif dengan lebar dan tinggi eksplisit', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'Optimalisasi web gagal.', // 'Web optimization failed.'
    errorCorruptedFile: 'Gambar rusak atau tidak didukung.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'Perbandingan Optimalisasi Web', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'Siap Web (Sesudah)', // 'Web-Ready (After)'
    compare: 'Bandingkan', // 'Compare'
    download: 'Unduh', // 'Download'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'Jatuhkan GIF animasi untuk dikompres', // 'Drop an animated GIF to compress'
    decodingGif: 'Mendekode frame GIF animasi secara lokal di browser Anda…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'frame', // 'frame'
    framePlural: 'frame', // 'frames'
    presetLight: 'Ringan', // 'Light'
    presetBalanced: 'Seimbang', // 'Balanced'
    presetMaxShrink: 'Perkecil Maks', // 'Max Shrink'
    colorPaletteLimit: 'Batas Warna Palet', // 'Color Palette Limit'
    colorsCount: '{count} warna', // '{maxColors} colors'
    outputScale: 'Skala Output', // 'Output Scale'
    scaleWithDims: '{percent}% ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'Optimalisasi Frame Rate', // 'Frame Rate Optimization'
    keepAllFrames: 'Pertahankan Semua Frame', // 'Keep All Frames'
    dropEvery2nd: 'Lewati Setiap Frame ke-2 (kira-kira 50% lebih kecil)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'Pertahankan 1 dari Setiap 3 Frame', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'Mengompres GIF ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'Kompres GIF', // 'Compress GIF'
    reset: 'Atur Ulang', // 'Reset'
    originalGif: 'GIF Asli', // 'Original GIF'
    compressedGif: 'GIF Terkompresi', // 'Compressed GIF'
    sizeChange: 'Perubahan Ukuran', // 'Size Change'
    sizeAndFrames: '{size} · {frames}f', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'Unduh GIF Terkompresi', // 'Download Compressed GIF'
    notSmallerNotice: 'GIF sumber ini sudah sangat dioptimalkan atau menggunakan palet frame penuh yang lebih besar dari input. Untuk memperkecilnya di bawah {size}, turunkan Warna Palet ke 32–64 warna, turunkan Skala Output ke 75% atau 50%, atau lewati setiap frame ke-2.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'Dikompres {percent}% ({saved} dihemat) — dengan rapi di browser Anda.', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'Asli ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'Terkompresi ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'GIF Asli', // alt 'Original GIF'
    altCompressedGif: 'GIF Terkompresi', // alt 'Compressed GIF'
    errorGifFailed: 'Kompresi GIF gagal.', // 'GIF compression failed.'
    errorDecodeFrames: 'Tidak bisa mendekode frame GIF.', // 'Could not decode GIF frames.'
    errorTooSmall: 'File terlalu kecil untuk menjadi GIF yang valid.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'File yang dipilih bukan animasi GIF87a atau GIF89a yang valid.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIF memiliki dimensi canvas 0×0 yang tidak valid.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'Tabel Warna Global GIF terpotong.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'Tidak bisa mendekode frame gambar apa pun dari file GIF ini.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: 'Tidak bisa menginisialisasi konteks canvas 2D.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'Jatuhkan foto HEIC atau HEIF iPhone untuk dikonversi ke JPG', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Mendekode foto HEIC dan HEIF Apple secara lokal di dalam browser Anda menggunakan WebAssembly sisi klien (heic2any) — foto Anda tidak pernah meninggalkan perangkat Anda.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'Pipeline Konversi:', // 'Conversion Pipeline:'
    outputQuality: 'Kualitas Output JPG', // 'JPG Output Quality'
    outputQualityLabel: 'Kualitas Output JPG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'Kualitas output JPG', // `${targetLabel} output quality`
    smallerFile: 'File Lebih Kecil (20%)', // 'Smaller file (20%)'
    balanced: 'Seimbang (85%)', // 'Balanced (85%)'
    maxDetail: 'Detail Maks (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Output PNG Lossless', // 'Lossless PNG Output'
    losslessPngEncoding: 'Pengodean PNG Lossless', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Pengodean PNG Lossless', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG menjaga tepi yang tajam, teks, dan transparansi alfa tanpa artefak kompresi lossy.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG menjaga tepi yang tajam, teks, dan transparansi alfa tanpa artefak kompresi lossy.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Warna Matte Latar Transparan', // 'Transparent Background Matte Color'
    matteColorLabel: 'Warna Matte Latar Transparan', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Warna latar matte', // 'Matte background color'
    matteWhite: 'Putih', // 'White'
    matteBlack: 'Hitam', // 'Black'
    matteLightGray: 'Abu-abu Terang', // 'Light Gray'
    rasterExportScale: 'Skala Ekspor Raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Pengali yang diterapkan pada dimensi intrinsik SVG (dibatasi hingga 8000px). Klik Konversi Ulang Semua setelah mengubah skala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    converting: 'Mengonversi…', // 'Converting...'
    clear: 'Bersihkan', // 'Clear'
    batchSummary: 'Ringkasan Batch HEIC → JPG', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} dikonversi · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Perubahan', // 'Change'
    changeLabel: 'Perubahan', // 'Change' — primary key in FormatConverterTool
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh JPG', // 'Download JPG'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'File HEIC/HEIF ini tidak bisa didekode. Pastikan file tersebut adalah foto HEIC iPhone/Apple yang valid.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: 'Tidak bisa mendekode "{filename}". Periksa apakah file tersebut gambar HEIC yang valid.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: 'Tidak bisa mengonversi {name} ke JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'Jatuhkan gambar JPG atau JPEG untuk dikonversi ke PNG lossless', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'Pipeline Konversi:', // 'Conversion Pipeline:'
    outputQuality: 'Kualitas Output PNG', // 'PNG Output Quality'
    outputQualityLabel: 'Kualitas Output PNG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'Kualitas output PNG', // `${targetLabel} output quality`
    smallerFile: 'File Lebih Kecil (20%)', // 'Smaller file (20%)'
    balanced: 'Seimbang (85%)', // 'Balanced (85%)'
    maxDetail: 'Detail Maks (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Output PNG Lossless', // 'Lossless PNG Output'
    losslessPngEncoding: 'Pengodean PNG Lossless', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Pengodean PNG Lossless', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG menjaga tepi yang tajam, teks, dan transparansi alfa tanpa artefak kompresi lossy.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG menjaga tepi yang tajam, teks, dan transparansi alfa tanpa artefak kompresi lossy.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Warna Matte Latar Transparan', // 'Transparent Background Matte Color'
    matteColorLabel: 'Warna Matte Latar Transparan', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Warna latar matte', // 'Matte background color'
    matteWhite: 'Putih', // 'White'
    matteBlack: 'Hitam', // 'Black'
    matteLightGray: 'Abu-abu Terang', // 'Light Gray'
    rasterExportScale: 'Skala Ekspor Raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Pengali yang diterapkan pada dimensi intrinsik SVG (dibatasi hingga 8000px). Klik Konversi Ulang Semua setelah mengubah skala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    converting: 'Mengonversi…', // 'Converting...'
    clear: 'Bersihkan', // 'Clear'
    batchSummary: 'Ringkasan Batch JPG → PNG', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} dikonversi · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Perubahan', // 'Change'
    changeLabel: 'Perubahan', // 'Change' — primary key in FormatConverterTool
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh PNG', // 'Download PNG'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'Tidak bisa mendekode "{filename}". Periksa apakah file tersebut gambar JPG yang valid.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: 'Tidak bisa mengonversi {name} ke PNG.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'Jatuhkan file PNG untuk dikonversi ke JPG yang lebih kecil', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'Pipeline Konversi:', // 'Conversion Pipeline:'
    outputQuality: 'Kualitas Output JPG', // 'JPG Output Quality'
    outputQualityLabel: 'Kualitas Output JPG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'Kualitas output JPG', // `${targetLabel} output quality`
    smallerFile: 'File Lebih Kecil (20%)', // 'Smaller file (20%)'
    balanced: 'Seimbang (85%)', // 'Balanced (85%)'
    maxDetail: 'Detail Maks (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Output PNG Lossless', // 'Lossless PNG Output'
    losslessPngEncoding: 'Pengodean PNG Lossless', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Pengodean PNG Lossless', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG menjaga tepi yang tajam, teks, dan transparansi alfa tanpa artefak kompresi lossy.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG menjaga tepi yang tajam, teks, dan transparansi alfa tanpa artefak kompresi lossy.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Warna Matte Latar Transparan', // 'Transparent Background Matte Color'
    matteColorLabel: 'Warna Matte Latar Transparan', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Warna latar matte', // 'Matte background color'
    matteWhite: 'Putih', // 'White'
    matteBlack: 'Hitam', // 'Black'
    matteLightGray: 'Abu-abu Terang', // 'Light Gray'
    matteNote: 'JPG tidak mendukung transparansi; area transparan terisi rapi dengan warna ini.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    rasterExportScale: 'Skala Ekspor Raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Pengali yang diterapkan pada dimensi intrinsik SVG (dibatasi hingga 8000px). Klik Konversi Ulang Semua setelah mengubah skala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    converting: 'Mengonversi…', // 'Converting...'
    clear: 'Bersihkan', // 'Clear'
    batchSummary: 'Ringkasan Batch PNG → JPG', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} dikonversi · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Perubahan', // 'Change'
    changeLabel: 'Perubahan', // 'Change' — primary key in FormatConverterTool
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh JPG', // 'Download JPG'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'Tidak bisa mendekode "{filename}". Periksa apakah file tersebut gambar PNG yang valid.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: 'Tidak bisa mengonversi {name} ke JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'Letakkan gambar JPG untuk diubah menjadi WebP yang ringan', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'Alur Konversi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Kualitas Output WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'Kualitas output WebP', // aria-label 'WebP output quality'
    smallerFile: 'File lebih kecil (20%)', // 'Smaller file (20%)'
    balanced: 'Seimbang (85%)', // 'Balanced (85%)'
    maxDetail: 'Detail maksimal (100%)', // 'Max detail (100%)'
    batchSummary: 'Ringkasan Batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'dikonversi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Perubahan', // 'Change'
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh WebP', // 'Download WebP'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    converting: 'Mengonversi…', // 'Converting...'
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    clear: 'Bersihkan', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Tidak dapat mengonversi "{name}" ke WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Tidak dapat mendekode "{name}". Pastikan file tersebut adalah gambar JPG yang valid.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'Letakkan gambar WebP untuk diubah menjadi JPG universal', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'Alur Konversi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Kualitas Output JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'Kualitas output JPG', // aria-label 'JPG output quality'
    smallerFile: 'File lebih kecil (20%)', // 'Smaller file (20%)'
    balanced: 'Seimbang (85%)', // 'Balanced (85%)'
    maxDetail: 'Detail maksimal (100%)', // 'Max detail (100%)'
    matteColorLabel: 'Warna Matte Latar Belakang Transparan', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Warna latar belakang', // aria-label 'Matte background color'
    matteWhite: 'Putih', // 'White'
    matteBlack: 'Hitam', // 'Black'
    matteLightGray: 'Abu-abu Terang', // 'Light Gray'
    matteHint: 'JPG tidak mendukung transparansi; area transparan diisi dengan rapi memakai warna ini.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Ringkasan Batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'dikonversi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Perubahan', // 'Change'
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh JPG', // 'Download JPG'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    converting: 'Mengonversi…', // 'Converting...'
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    clear: 'Bersihkan', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Tidak dapat mengonversi "{name}" ke JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Tidak dapat mendekode "{name}". Pastikan file tersebut adalah gambar WebP yang valid.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'Letakkan file PNG untuk diubah menjadi WebP transparan', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'Alur Konversi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Kualitas Output WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'Kualitas output WebP', // aria-label 'WebP output quality'
    smallerFile: 'File lebih kecil (20%)', // 'Smaller file (20%)'
    balanced: 'Seimbang (85%)', // 'Balanced (85%)'
    maxDetail: 'Detail maksimal (100%)', // 'Max detail (100%)'
    batchSummary: 'Ringkasan Batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'dikonversi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Perubahan', // 'Change'
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh WebP', // 'Download WebP'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    converting: 'Mengonversi…', // 'Converting...'
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    clear: 'Bersihkan', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Tidak dapat mengonversi "{name}" ke WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Tidak dapat mendekode "{name}". Pastikan file tersebut adalah gambar PNG yang valid.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'Letakkan file WebP untuk diubah menjadi PNG lossless', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'Alur Konversi:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Output PNG Lossless', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Pengodean PNG Lossless', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG mempertahankan tepi yang tajam, teks, dan transparansi alpha tanpa artefak kompresi lossy.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: 'Ringkasan Batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'dikonversi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Perubahan', // 'Change'
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh PNG', // 'Download PNG'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    converting: 'Mengonversi…', // 'Converting...'
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    clear: 'Bersihkan', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Tidak dapat mengonversi "{name}" ke PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Tidak dapat mendekode "{name}". Pastikan file tersebut adalah gambar WebP yang valid.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'Letakkan file vektor SVG untuk dirasterisasi menjadi PNG', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'Merasterisasi grafik SVG inline secara lokal melalui HTML5 Canvas dengan latar belakang transparan yang terjaga. Batasan: URL <image> eksternal, stylesheet CSS eksternal/webfont, atau skrip yang dirujuk di dalam SVG mungkin tidak dirender dalam ekspor Canvas mandiri.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'Alur Konversi:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Output PNG Lossless', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Pengodean PNG Lossless', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG mempertahankan tepi yang tajam, teks, dan transparansi alpha tanpa artefak kompresi lossy.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'Skala Ekspor Raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Pengali yang diterapkan pada dimensi intrinsik SVG (dibatasi hingga 8000px). Klik Konversi Ulang Semua setelah mengubah skala.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: 'Ringkasan Batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'dikonversi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Perubahan', // 'Change'
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh PNG', // 'Download PNG'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    converting: 'Mengonversi…', // 'Converting...'
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    clear: 'Bersihkan', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Tidak dapat mengonversi "{name}" ke PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'SVG ini tidak dapat dirasterisasi. Pastikan file tersebut adalah markup SVG XML yang valid tanpa sintaks yang cacat.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'Letakkan gambar AVIF untuk diubah menjadi JPG universal', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'Mendekode gambar AVIF secara lokal memakai dekoder AVIF bawaan browser Anda (didukung di browser modern Chrome, Edge, Firefox, dan Safari) dan mengekspor file JPG standar.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'Alur Konversi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Kualitas Output JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'Kualitas output JPG', // aria-label 'JPG output quality'
    smallerFile: 'File lebih kecil (20%)', // 'Smaller file (20%)'
    balanced: 'Seimbang (85%)', // 'Balanced (85%)'
    maxDetail: 'Detail maksimal (100%)', // 'Max detail (100%)'
    matteColorLabel: 'Warna Matte Latar Belakang Transparan', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Warna latar belakang', // aria-label 'Matte background color'
    matteWhite: 'Putih', // 'White'
    matteBlack: 'Hitam', // 'Black'
    matteLightGray: 'Abu-abu Terang', // 'Light Gray'
    matteHint: 'JPG tidak mendukung transparansi; area transparan diisi dengan rapi memakai warna ini.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Ringkasan Batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'dikonversi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Perubahan', // 'Change'
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh JPG', // 'Download JPG'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    converting: 'Mengonversi…', // 'Converting...'
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    clear: 'Bersihkan', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Tidak dapat mengonversi "{name}" ke JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Browser Anda tidak dapat mendekode gambar AVIF ini. Pastikan file tersebut adalah gambar .avif yang valid dan coba browser modern Chrome, Firefox, Edge, atau Safari.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'Letakkan bitmap BMP yang tidak terkompresi untuk diubah menjadi JPG ringkas', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'Alur Konversi:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Kualitas Output JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'Kualitas output JPG', // aria-label 'JPG output quality'
    smallerFile: 'File lebih kecil (20%)', // 'Smaller file (20%)'
    balanced: 'Seimbang (85%)', // 'Balanced (85%)'
    maxDetail: 'Detail maksimal (100%)', // 'Max detail (100%)'
    batchSummary: 'Ringkasan Batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'dikonversi', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Membuat ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Unduh Semua (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Perubahan', // 'Change'
    compare: 'Bandingkan', // 'Compare'
    downloadTarget: 'Unduh JPG', // 'Download JPG'
    removeImage: 'Hapus {name}', // aria-label `Remove ${item.name}`
    converting: 'Mengonversi…', // 'Converting...'
    reconvertAll: 'Konversi Ulang Semua', // 'Re-convert All'
    clear: 'Bersihkan', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Tidak dapat mengonversi "{name}" ke JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Tidak dapat mendekode "{name}". Pastikan file tersebut adalah gambar BMP yang valid.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: 'Letakkan foto untuk menghapus latar belakangnya dengan AI', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: 'Memuat model AI di browser (isnet_quint8)', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: 'Cache Model', // 'Model Cache'
    progressWasm: 'Memuat runtime AI WebAssembly…', // 'Loading WebAssembly AI runtime...'
    progressModel: 'Mengunduh model AI penghapus latar belakang (sekitar 35 MB, tersimpan di cache untuk penggunaan berikutnya)…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: 'Menghapus latar belakang secara lokal di browser Anda…', // 'Removing background locally in your browser...'
    progressPreparing: 'Menyiapkan model AI di browser…', // 'Preparing in-browser AI model...'
    progressInitLibrary: 'Memuat pustaka AI penghapus latar belakang…', // 'Loading AI background removal library...'
    progressInitModule: 'Menginisialisasi modul AI penghapus latar belakang…', // 'Initializing AI background removal module...'
    errorModelInit: 'Tidak dapat menginisialisasi model AI latar belakang: {message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: 'Tidak dapat menginisialisasi model AI latar belakang di browser ini.', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: 'Tidak dapat mendekode output PNG transparan.', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: 'Penghapusan latar belakang gagal di browser ini. Coba gambar lain atau muat ulang halaman.', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: 'Pratinjau Sebelum & Sesudah', // 'Before & After Preview'
    splitCompare: 'Bandingkan Terpisah', // 'Split Compare'
    newImage: 'Gambar Baru', // 'New Image'
    originalLabel: 'Asli', // 'Original'
    transparentCutout: 'Potongan Transparan (PNG)', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: 'Pratinjau Latar Belakang Solid', // 'Solid Background Preview'
    waitingForResult: 'Menunggu hasil…', // 'Waiting for result...'
    processingLocally: 'Memproses secara lokal…', // 'Processing locally...'
    cutoutStatus: 'Status Potongan', // 'Cutout Status'
    ready: 'Siap', // 'Ready'
    backgroundFillOption: 'Opsi Isian Latar Belakang', // 'Background Fill Option'
    bgTransparent: 'Transparan', // 'Transparent'
    bgWhite: 'Putih', // 'White'
    bgBlack: 'Hitam', // 'Black'
    bgCustom: 'Warna Kustom', // 'Custom'
    customBackgroundColor: 'Warna Latar Belakang Kustom', // 'Custom Background Color'
    downloadTransparentPng: 'Unduh PNG Transparan', // 'Download Transparent PNG'
    downloadWithWhite: 'Unduh dengan Latar Belakang Putih', // 'Download with White Background'
    downloadWithBlack: 'Unduh dengan Latar Belakang Hitam', // 'Download with Black Background'
    downloadWithCustom: 'Unduh dengan Latar Belakang {color}', // 'Download with {color} Background'
    rerunRemoval: 'Jalankan Ulang Penghapusan', // 'Re-run Removal'
    comparisonTitlePrefix: 'Perbandingan Penghapusan Latar Belakang', // 'Background Removal Comparison'
    comparisonAfterTransparent: 'Potongan (PNG transparan)', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: 'Potongan (Latar Belakang Solid)', // 'Cutout (Solid BG)'
    altOriginal: 'Asli {name}', // alt `Original ${sourceFile.name}`
    altCutout: 'Latar belakang dihapus {name}', // alt `Background removed ${sourceFile.name}`
  },
};
