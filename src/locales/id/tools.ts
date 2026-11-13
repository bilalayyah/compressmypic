// Indonesian (Standard Bahasa Indonesia) tool registry — COMPLETE (home + all 48 tools).
// Assembled from tools-id-batch1.ts … tools-id-batch6.ts (coordinator merge).
// Target path in the repo: src/locales/id/tools.ts
// Indonesian (Standard Bahasa Indonesia), neutral polite forms. Slugs, category ids and
// relatedSlugs are unchanged from the English registry (src/data/tools.ts).
// Batch 1: 8 tools; Batches 2–6: 8 tools each (40 tools); home entry from
// i18n-id.ts (HOME_ENTRY_ID). Translated from English — never from
// Spanish; Spanish files were used only as structural templates.

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_ID: ToolCategoryMeta[] = [
  { id: 'compress', label: 'Kompres', description: 'Perkecil ukuran file gambar tanpa kehilangan kualitas yang terlihat' },
  { id: 'resize', label: 'Ubah Ukuran', description: 'Ubah dimensi piksel atau skala gambar secara massal' },
  { id: 'convert', label: 'Konversi', description: 'Konversi antar format gambar dan buat PDF' },
  { id: 'crop-edit', label: 'Potong & Edit', description: 'Putar, balik, potong, dan sesuaikan gambar' },
  { id: 'ai-tools', label: 'Tool AI', description: 'Pemrosesan gambar cerdas di browser' },
  { id: 'create', label: 'Buat', description: 'Buat favicon, kolase, dan aset web' },
  { id: 'privacy', label: 'Tool Privasi', description: 'Periksa dan hapus metadata EXIF, GPS, dan tersembunyi' },
  { id: 'developer', label: 'Tool Developer', description: 'Pilih warna, periksa dimensi, dan buat aset web' },
];

export const TOOLS_REGISTRY_ID: ToolDefinition[] = [
  {
  slug: '/',
  name: 'Kompresor Gambar',
  shortDescription: 'Kompres gambar JPG, PNG, WebP & HEIC tanpa mengurangi kualitas.',
  category: 'compress',
  seoTitle: 'Kompresor Gambar Gratis online – Kurangi ke 100 KB',
  seoDescription:
    'Kompres gambar online gratis — perkecil ukuran gambar tanpa mengurangi kualitas. Kompres JPG, PNG, dan WebP tanpa daftar dan tanpa watermark, di browser.',
  h1: 'Kompresor Gambar Gratis online',
  subtitle: 'Perkecil ukuran file JPG, PNG, WebP & HEIC langsung di browser Anda.',
  howToSteps: [],
  features: [],
  faqs: [],
  relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
},
  {
    slug: '/image-resizer',
    name: 'Pengubah Ukuran Gambar',
    shortDescription: 'Ubah ukuran gambar berdasarkan piksel, persentase, atau preset media sosial.',
    category: 'resize',
    seoTitle: 'Ubah Ukuran Gambar Online Gratis – Piksel atau %',
    seoDescription:
      'Ubah ukuran gambar online gratis berdasarkan piksel, persentase, atau preset media sosial. Skala banyak foto langsung di browser dan unduh semuanya sebagai ZIP.',
    h1: 'Ubah Ukuran Gambar Online Gratis',
    subtitle:
      'Pengubah ukuran gambar berbasis browser ini memungkinkan desainer web, penjual online, blogger, dan siapa pun mengubah skala foto ke dimensi piksel yang tepat atau rasio persentase dalam hitungan detik. Kunci rasio aspek agar tidak terdistorsi, terapkan preset media sosial sekali klik, atau proses satu folder penuh secara lokal tanpa upload ke server.',
    howToSteps: [
      {
        title: 'Unggah satu atau beberapa gambar',
        description:
          'Seret dan letakkan file JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB per file ke area unggah, pilih file dari perangkat Anda, atau tempel langsung dengan Ctrl+V.',
      },
      {
        title: 'Pilih mode Piksel atau Persentase',
        description:
          'Beralih antara Berdasarkan Piksel (L × T) untuk memasukkan dimensi tepat hingga 12.000 px, atau Berdasarkan Persentase (%) untuk mengubah skala antara 10% dan 200% lewat slider atau tombol cepat.',
      },
      {
        title: 'Atur kunci aspek, mode fit, atau preset',
        description:
          'Biarkan Rasio Aspek Terkunci untuk skala proporsional, atau buka kuncinya untuk memilih Contain, Cover, atau Stretch Exact — atau klik preset seperti Postingan Instagram, Thumbnail YouTube, atau Full HD.',
      },
      {
        title: 'Pilih format output dan kualitas',
        description:
          'Pilih output Asli, JPG, PNG, atau WebP, atur slider Kualitas Output dari 10% hingga 100%, dan pilih warna Latar jika mengekspor sebagai JPG.',
      },
      {
        title: 'Terapkan pengaturan dan bandingkan secara visual',
        description:
          'Klik Ubah Ukuran Semua untuk memproses batch Anda, lalu buka tampilan Bandingkan pada kartu mana pun untuk memeriksa ketajaman dan penghematan byte sebelum dan sesudah, berdampingan.',
      },
      {
        title: 'Unduh file satu per satu atau sebagai arsip ZIP',
        description:
          'Simpan setiap gambar yang sudah diubah ukurannya lewat tombol Unduh, atau klik Unduh Semua (ZIP) saat mengubah ukuran dua file atau lebih sekaligus.',
      },
    ],
    features: [
      {
        title: 'Skala Piksel Tepat & Persentase',
        description:
          'Ubah ukuran ke lebar dan tinggi piksel yang tepat atau skala dengan rapi dari 10% hingga 200% sambil otomatis menjaga rasio aspek saat terkunci.',
      },
      {
        title: 'Mode Fit Cerdas (Tepat, Contain, Cover)',
        description:
          'Pilih cara gambar menyesuaikan dimensi preset yang tetap — regangkan ke ukuran tepat, muat di dalam tanpa memotong, atau potong tengah agar mengisi.',
      },
      {
        title: 'Pemrosesan Batch + Unduhan ZIP',
        description:
          'Proses puluhan foto produk atau thumbnail blog dalam satu batch dan unduh semuanya dalam satu file ZIP.',
      },
      {
        title: '100% Pemrosesan Lokal di Browser',
        description:
          'Foto Anda diubah ukurannya menggunakan HTML5 Canvas di perangkat Anda sendiri dan tidak pernah diunggah ke server eksternal mana pun.',
      },
    ],
    faqs: [
      {
        question: 'Apa bedanya Berdasarkan Piksel dan Berdasarkan Persentase di Pengubah Ukuran Gambar?',
        answer:
          'Berdasarkan Piksel memungkinkan Anda memasukkan lebar dan tinggi tepat dalam piksel (hingga 12.000 px) atau langsung menerapkan preset media sosial. Berdasarkan Persentase mengubah skala setiap gambar yang diunggah secara proporsional antara 10% dan 200% lewat slider atau tombol cepat 25%, 50%, 75%, 150%, dan 200%.',
      },
      {
        question: 'Apa yang terjadi saat Rasio Aspek Terkunci diaktifkan atau dimatikan?',
        answer:
          'Saat Rasio Aspek Terkunci aktif, mengetik lebar baru otomatis memperbarui tinggi dalam proporsi yang tepat terhadap foto pertama yang Anda unggah (dan sebaliknya). Membuka kuncinya memungkinkan Anda memasukkan lebar dan tinggi secara terpisah dan memunculkan opsi fit Contain, Cover, dan Stretch Exact.',
      },
      {
        question: 'Kapan saya harus memilih Contain, Cover, atau Stretch Exact?',
        answer:
          'Pilih Contain (Tanpa Potong) jika Anda ingin seluruh subjek tetap di dalam kotak target tanpa memangkas tepi mana pun. Pilih Cover (Potong Tengah) untuk mengisi dimensi preset yang tepat dengan rapi dengan memangkas kelebihan, atau Stretch Exact jika menyesuaikan batas piksel yang tetap lebih penting daripada menjaga proporsi.',
      },
      {
        question: 'Preset media sosial dan layar apa saja yang sudah tersedia?',
        answer:
          'Ada preset sekali klik untuk Postingan Instagram (1080×1080), Story Instagram (1080×1920), Thumbnail YouTube (1280×720), Sampul Facebook (851×315), Header X (1500×500), dan Full HD (1920×1080). Mengklik preset mana pun akan beralih ke mode Berdasarkan Piksel dan mengisi dimensi tepat tersebut.',
      },
      {
        question: 'Bisakah saya memperbesar gambar kecil melebihi resolusi aslinya?',
        answer:
          'Ya, Anda bisa memasukkan nilai piksel yang lebih besar atau mengubah skala hingga 200% dalam mode Berdasarkan Persentase menggunakan interpolasi HTML5 Canvas. Perlu diingat, memperbesar grafis beresolusi rendah secara signifikan membuat tepinya tampak lebih lembut karena Canvas meregangkan piksel yang ada, bukan menciptakan detail baru.',
      },
      {
        question: 'Berapa dimensi piksel dan ukuran file maksimum yang diizinkan saat mengubah ukuran?',
        answer:
          'Setiap gambar yang diunggah bisa berukuran hingga 20 MB, dan kolom piksel mendukung lebar dan tinggi hingga 12.000 px. Kanvas yang sangat besar bisa menghabiskan banyak RAM browser di perangkat seluler, jadi tetap berada di kisaran 4.000–6.000 px agar pemrosesan tetap cepat.',
      },
      {
        question: 'Format input apa saja yang didukung tool pengubah ukuran gambar ini?',
        answer:
          'Anda bisa mengunggah file JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG. Gambar HEIC didekode secara lokal di browser Anda sebelum diubah ukurannya dengan Canvas, dan Anda bisa mengekspor hasilnya sebagai Asli, JPG, PNG, atau WebP.',
      },
      {
        question: 'Apakah mengubah ukuran menjaga latar transparan pada file PNG dan WebP?',
        answer:
          'Ya, transparansi tetap utuh selama Anda mempertahankan format Asli (untuk PNG/WebP) atau secara eksplisit memilih output PNG atau WebP. Jika Anda mengubah Format Output ke JPG, area transparan akan diisi dengan warna Latar yang Anda pilih (putih secara default).',
      },
      {
        question: 'Bagaimana pemrosesan batch menangani campuran foto lanskap dan potret?',
        answer:
          'Saat Anda mengunggah batch dalam mode Berdasarkan Piksel dengan Rasio Aspek Terkunci, setiap foto mempertahankan proporsi alaminya sendiri menggunakan batas lebar, bukan memelintir foto potret menjadi bingkai lanskap. Jika Anda menginginkan dimensi tetap yang identik di seluruh batch, buka kunci rasio aspek dan pilih Contain atau Cover.',
      },
      {
        question: 'Mengapa unggahan pertama otomatis mengisi Lebar dan Tinggi?',
        answer:
          'Saat Anda meletakkan foto pertama ke antrean kosong, pengubah ukuran mengisi Lebar hingga 1.200 px dan menghitung Tinggi yang sesuai secara proporsional. Anda bisa langsung menimpa angka tersebut dan mengklik Ubah Ukuran Semua untuk menjalankan ulang semua gambar dalam daftar.',
      },
      {
        question: 'Bagaimana cara memeriksa ketajaman setelah memperkecil foto?',
        answer:
          'Klik Bandingkan pada kartu hasil mana pun yang sudah selesai atau klik thumbnail-nya untuk membuka modal perbandingan sebelum dan sesudah. Modal ini menampilkan dimensi asli dan yang diubah ukurannya, penghematan byte, dan slider pembagi agar Anda bisa memeriksa detail halus sebelum mengunduh.',
      },
      {
        question: 'Bisakah saya mengubah format output sekaligus mengubah ukuran?',
        answer:
          'Ya, Anda bisa memilih JPG, PNG, atau WebP di pemilih Format Output dan menyesuaikan slider Kualitas Output (10% hingga 100%) sebelum mengklik Ubah Ukuran Semua. Dengan begitu Anda memperkecil dimensi sekaligus mengonversi ke format web yang ringan dalam satu langkah.',
      },
      {
        question: 'Apakah GIF animasi tetap beranimasi setelah diubah ukurannya di sini?',
        answer:
          'Tidak, HTML5 Canvas hanya merender frame pertama GIF saat mengubah ukuran ke dimensi statis dan mengekspor satu gambar statis. Jika Anda ingin animasi tetap utuh sambil mengurangi bobot file, gunakan tool Kompresor GIF khusus kami.',
      },
      {
        question: 'Apakah foto saya diunggah ke server eksternal saat diubah ukurannya?',
        answer:
          'Tidak, semua pengubahan ukuran terjadi di dalam tab browser Anda menggunakan memori HTML5 Canvas lokal dan JavaScript. Gambar asli dan yang diubah ukurannya tidak pernah melintasi jaringan atau menyentuh penyimpanan jarak jauh mana pun.',
      },
      {
        question: 'Bagaimana cara mengunduh puluhan gambar yang diubah ukurannya tanpa mengklik satu per satu?',
        answer:
          'Setiap kali dua gambar atau lebih selesai diubah ukurannya, bilah Batch Siap muncul di atas daftar dengan tombol Unduh Semua (ZIP). Mengkliknya mengemas setiap file yang diubah ukurannya ke dalam satu unduhan bernama resized_images_compressmypic.zip.',
      },
      {
        question: 'Bisakah saya menempel screenshot dari clipboard untuk diubah ukurannya?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V di Mac) saat berada di halaman untuk meletakkan screenshot yang disalin langsung ke antrean unggah. Screenshot langsung memuat dimensinya dan diubah ukurannya menggunakan pengaturan lebar, tinggi, atau persentase Anda saat ini.',
      },
      {
        question: 'Mengapa PNG saya yang diubah ukurannya justru lebih besar dalam byte meski pikselnya lebih sedikit?',
        answer:
          'Jika Anda mengonversi JPG terkompresi menjadi PNG lossless saat mengubah ukuran, PNG mempertahankan encoding piksel lossless mentah dan bisa lebih berat daripada JPEG sumber. Ubah Format Output ke WebP atau JPG dengan kualitas 80%–85% untuk file web yang jauh lebih kecil.',
      },
      {
        question: 'Pengaturan kualitas apa yang terbaik saat mengekspor gambar JPG atau WebP yang diubah ukurannya?',
        answer:
          'Pengaturan default 85% menyeimbangkan tepi yang tajam dan gradien yang bersih dengan ukuran file kecil untuk situs web, postingan blog, dan marketplace. Turunkan kualitas ke 65%–75% jika Anda butuh penghematan kilobyte yang lebih ketat, atau naikkan ke 95%–100% untuk persiapan cetak.',
      },
      {
        question: 'Bisakah saya mengubah ukuran grafis vektor SVG dengan rapi menjadi PNG resolusi tinggi?',
        answer:
          'Ya, mengunggah SVG inline memungkinkan Anda memasukkan dimensi piksel target yang lebih besar sebelum dirasterisasi ke Canvas. SVG mandiri dengan bentuk dan gradien inline berskala tajam, meskipun tautan font atau gambar eksternal di dalam SVG diblokir oleh keamanan browser.',
      },
      {
        question: 'Apakah pengubah ukuran gambar ini berfungsi offline atau di ponsel?',
        answer:
          'Ya, tool ini berjalan lancar di Safari iOS, Chrome Android, dan browser desktop dengan slider dan preset yang ramah sentuhan. Karena perhitungan berjalan lokal di dalam browser setelah halaman dimuat, tidak ada yang terhambat oleh kecepatan upload.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: 'Konverter Gambar',
    shortDescription: 'Konversi JPG, PNG, WebP, HEIC, BMP, GIF & SVG di browser Anda.',
    category: 'convert',
    seoTitle: 'Konversi Gambar Online Gratis – JPG, PNG, WebP',
    seoDescription:
      'Konversi gambar online gratis – JPG, PNG, WebP, HEIC, SVG, dan lainnya. Proses batch secara privat di perangkat Anda, dengan pengatur kualitas dan ekspor ZIP.',
    h1: 'Konverter Gambar Online Gratis',
    subtitle:
      'Dibuat untuk fotografer iPhone, pengembang web, pemasar, dan tim kantor, konverter gambar browser ini beralih dengan mulus antara JPG, PNG, WebP, HEIC, SVG, BMP, GIF, dan AVIF. Sesuaikan kualitas output, pilih warna isian matte untuk potongan transparan, dan konversi seluruh batch secara lokal tanpa mengunggah file.',
    howToSteps: [
      {
        title: 'Tambahkan satu atau beberapa file gambar',
        description:
          'Letakkan gambar JPG, PNG, WebP, HEIC, SVG, BMP, GIF, atau AVIF (hingga 20 MB per file) ke zona unggah, pilih file dari disk, atau tempel lewat Ctrl+V.',
      },
      {
        title: 'Pilih format output Anda',
        description:
          'Pilih WebP (Web Terkecil), JPG (Universal), atau PNG (Lossless Alpha) di bawah Konversi Ke Format.',
      },
      {
        title: 'Atur warna isian transparansi untuk output JPG',
        description:
          'Saat mengonversi grafis PNG, WebP, atau SVG transparan ke JPG, klik swatch Warna Isian Transparansi untuk memilih putih, hitam, atau latar hex apa pun.',
      },
      {
        title: 'Sesuaikan slider kualitas jika perlu',
        description:
          'Seret slider Kualitas antara 10% dan 100% untuk output WebP atau JPG (slider otomatis nonaktif untuk PNG lossless).',
      },
      {
        title: 'Konversi dan periksa hasilnya',
        description:
          'Klik Konversi Semua untuk meng-encode ulang antrean Anda dengan pengaturan terbaru, lalu klik Bandingkan pada item mana pun untuk memeriksa ketepatan visual dan perubahan byte.',
      },
      {
        title: 'Unduh file satu per satu atau sebagai ZIP',
        description:
          'Simpan setiap file yang dikonversi lewat tombol Unduh, atau klik Unduh Semua (ZIP) untuk mengunduh seluruh batch sekaligus.',
      },
    ],
    features: [
      {
        title: 'Dukungan Format Input yang Luas',
        description:
          'Mengonversi foto HEIC/HEIF iPhone, grafis vektor SVG yang tajam, file BMP lama, gambar WebP, PNG, dan JPEG langsung di browser Anda.',
      },
      {
        title: 'Konversi yang Aman untuk Transparansi',
        description:
          'Mempertahankan transparansi alpha saat mengonversi ke PNG atau WebP, dan memungkinkan Anda menyesuaikan warna latar matte saat mengonversi ke JPG.',
      },
      {
        title: 'Konversi Batch & Ekspor ZIP',
        description:
          'Konversi seluruh folder gambar sekaligus dengan pengaturan kualitas yang konsisten dan unduh semuanya dalam satu klik.',
      },
      {
        title: 'Mesin Privat di Perangkat',
        description:
          'Bahkan dekode HEIC berjalan lokal lewat WebAssembly di browser Anda — tanpa upload ke server dan tanpa watermark.',
      },
    ],
    faqs: [
      {
        question: 'Format input dan output apa saja yang didukung konverter gambar ini?',
        answer:
          'Anda bisa memasukkan file JPG, PNG, WebP, HEIC/HEIF iPhone, SVG, BMP, GIF, dan AVIF yang didekode browser hingga 20 MB per gambar. Output diekspor dengan rapi sebagai WebP (Web Terkecil), JPG (Universal), atau PNG (Lossless Alpha).',
      },
      {
        question: 'Bagaimana foto HEIC dan HEIF iPhone dikonversi tanpa server?',
        answer:
          'Konverter kami memuat dekoder HEIC WebAssembly sisi klien langsung di dalam tab browser Anda. Dekoder ini mendekode kontainer HEIC secara lokal di CPU Anda dan merender foto ke HTML5 Canvas untuk mengekspor file JPG, PNG, atau WebP standar.',
      },
      {
        question: 'Mengapa slider Kualitas nonaktif saat PNG dipilih?',
        answer:
          'PNG menggunakan kompresi DEFLATE lossless, artinya ia meng-encode setiap piksel secara akurat tanpa membuang detail visual pada tingkat kualitas persentase. Slider menjadi aktif begitu Anda beralih ke WebP atau JPG.',
      },
      {
        question: 'Apa yang terjadi pada area transparan saat mengonversi PNG atau WebP ke JPG?',
        answer:
          'Karena JPG tidak mendukung kanal transparansi alpha, piksel transparan harus diratakan ke latar solid. Gunakan pemilih Warna Isian Transparansi (putih secara default) untuk memadukan tepi transparan dengan rapi ke warna apa pun.',
      },
      {
        question: 'Bisakah saya mengonversi gambar AVIF dari situs web modern menjadi JPG atau PNG?',
        answer:
          'Ya, versi modern Chrome, Edge, Firefox, dan Safari mendekode file AVIF secara native di dalam browser Anda. Setelah didekode, tool mengekspornya ke JPG, PNG, atau WebP universal tanpa layanan cloud eksternal.',
      },
      {
        question: 'Apakah logo vektor SVG tetap terjaga dengan baik saat dikonversi ke PNG atau WebP?',
        answer:
          'Ya, file SVG mandiri dengan path, isian, dan gradien inline dirasterisasi dengan rapi pada dimensi intrinsiknya dengan latar transparan yang dipertahankan. Perlu diingat bahwa SVG yang bergantung pada font web eksternal atau URL gambar jarak jauh dibatasi oleh keamanan Canvas browser.',
      },
      {
        question: 'Apakah mengonversi JPG lossy menjadi PNG mengembalikan detail foto yang hilang?',
        answer:
          'Tidak, menyimpan ulang JPG yang sudah terkompresi sebagai PNG tidak bisa memulihkan detail yang dibuang selama encoding JPEG asli, dan biasanya justru menambah ukuran file secara signifikan. Pilih PNG hanya jika Anda butuh penyimpanan lossless sebelum pengeditan bertahap di masa depan.',
      },
      {
        question: 'Bisakah saya mencampur format berbeda dalam satu konversi batch?',
        answer:
          'Ya, Anda bisa meletakkan foto HEIC, screenshot BMP, logo PNG, dan unduhan AVIF bersama-sama ke antrean yang sama. Setiap file yang valid dikonversi ke format target yang Anda pilih dan diunduh dengan rapi dalam satu arsip ZIP.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah GIF animasi ke konverter umum?',
        answer:
          'Canvas menggambar frame awal GIF dan mengonversi frame tersebut menjadi file WebP, JPG, atau PNG statis. Jika Anda ingin memperkecil GIF animasi sambil menjaga gerakannya tetap utuh, beralihlah ke tool Kompresor GIF kami.',
      },
      {
        question: 'Mengapa output WebP memangkas ukuran screenshot PNG saya begitu drastis?',
        answer:
          'Berbeda dengan PNG lossless, WebP pada kualitas 85% menggabungkan kompresi prediktif modern dengan dukungan transparansi alpha penuh. Hal itu biasanya memperkecil screenshot UI besar dan potongan produk secara signifikan sambil menjaga keterbacaan yang tajam dan tepi yang halus.',
      },
      {
        question: 'Bagaimana cara memeriksa kualitas sebelum dan sesudah sebelum menyimpan gambar yang dikonversi?',
        answer:
          'Klik Bandingkan pada kartu yang dikonversi (atau klik thumbnail-nya) untuk membuka modal perbandingan interaktif. Anda bisa membandingkan ukuran byte asli vs yang dikonversi dan menyeret gagang pembagi melintasi tepi dan teks.',
      },
      {
        question: 'Apakah foto atau screenshot sensitif saya pernah dikirim lewat internet?',
        answer:
          'Tidak pernah — semua dekode, perataan warna, dan re-encode terjadi sepenuhnya di dalam memori browser lokal Anda. Tidak ada yang diunggah, disimpan di server, atau dibagikan ke pihak ketiga.',
      },
      {
        question: 'Pengaturan kualitas apa yang disarankan untuk mengonversi foto ke WebP atau JPG?',
        answer:
          'Pengaturan default 85% bekerja andal untuk aset web WebP maupun berbagi JPG universal tanpa blocking kompresi yang terlihat. Anda bisa menaikkannya ke 92%–95% untuk foto portofolio atau menurunkannya ke 70%–75% untuk batas bandwidth yang ketat.',
      },
      {
        question: 'Bagaimana nama file output dibuat setelah konversi?',
        answer:
          'Setiap file yang dikonversi mempertahankan nama dasar file Anda yang sudah dibersihkan dan otomatis mengganti ekstensinya menjadi .webp, .jpg, atau .png. Anda bisa melihat nama file output yang tepat dan ukuran byte yang dikonversi pada setiap kartu sebelum mengunduh.',
      },
      {
        question: 'Bisakah saya mengonversi bitmap BMP dari software Windows lama ke WebP atau JPG?',
        answer:
          'Ya, file .bmp yang tidak terkompresi didekode secara native di browser dan langsung dikonversi menjadi file JPG atau WebP yang ringkas. Menghilangkan header bitmap yang tidak terkompresi biasanya memangkas bobot penyimpanan secara drastis.',
      },
      {
        question: 'Bagaimana jika satu file dalam batch saya rusak atau tidak bisa dibaca?',
        answer:
          'Setiap gambar diproses secara terpisah, jadi satu file yang rusak atau tidak didukung menampilkan lencana error inline tanpa menghentikan antrean Anda yang lain. Semua gambar yang valid tetap dikonversi dan dikemas ke dalam unduhan ZIP Anda.',
      },
      {
        question: 'Apakah mengonversi lewat HTML5 Canvas menghapus metadata kamera EXIF yang tersembunyi?',
        answer:
          'Ya, menggambar gambar ke Canvas dan meng-encode JPG, PNG, atau WebP baru menghasilkan bitmap bersih tanpa tag GPS EXIF atau metadata serial kamera. Hal itu melindungi privasi saat membagikan file yang dikonversi secara online.',
      },
      {
        question: 'Bisakah saya mengonversi gambar yang ditempel langsung dari clipboard?',
        answer:
          'Ya, menyalin gambar atau mengambil screenshot lalu menekan Ctrl+V di mana saja pada halaman akan menambahkannya langsung ke antrean konverter. Gambar langsung di-encode ke format target aktif Anda.',
      },
      {
        question: 'Apakah ada batas harian atau batas jumlah file pada konversi batch?',
        answer:
          'Tidak, tidak ada akun, watermark, atau kuota konversi harian. Anda hanya dibatasi oleh pemeriksaan 20 MB per file dan RAM browser yang tersedia di perangkat Anda.',
      },
      {
        question: 'Kapan saya harus memilih Unduh Semua (ZIP) dibanding Unduh satu file?',
        answer:
          'Gunakan tombol Unduh per kartu saat menyimpan satu foto yang dikonversi dengan cepat. Setiap kali dua gambar atau lebih selesai dikonversi, klik Unduh Semua (ZIP) di bilah ringkasan batch untuk menggabungkannya menjadi converted_images_compressmypic.zip.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Putar & Balik Gambar',
    shortDescription: 'Putar gambar 90°, 180°, sudut kustom, dan balik secara horizontal atau vertikal.',
    category: 'crop-edit',
    seoTitle: 'Putar Gambar Online Gratis – Putar 90° & Balik',
    seoDescription:
      'Putar gambar 90°, 180°, atau sudut kustom apa pun dan balik secara horizontal atau vertikal di browser. Proses banyak foto sekaligus dengan unduhan ZIP instan.',
    h1: 'Putar & Balik Gambar Online',
    subtitle:
      'Perbaiki foto kamera yang miring, cerminkan selfie yang terbalik, dan luruskan horizon yang miring saat Anda memutar file gambar langsung di browser. Ideal untuk fotografer, pelajar yang memindai dokumen, dan kreator konten — semuanya ditransformasi secara lokal pada resolusi penuh dengan ekspor batch ZIP.',
    howToSteps: [
      {
        title: 'Unggah satu atau banyak gambar',
        description:
          'Seret dan letakkan file JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB per file ke dropzone, atau tempel langsung dengan Ctrl+V.',
      },
      {
        title: 'Gunakan putaran cepat 90° dan 180°',
        description:
          'Klik Putar 90° ke Kiri, Putar 90° ke Kanan, atau 180° di bawah Putar & Balik Cepat untuk memutar setiap gambar dalam antrean seketika.',
      },
      {
        title: 'Cerminkan secara horizontal atau vertikal',
        description:
          'Aktifkan Balik Horizontal untuk mencerminkan kiri-ke-kanan atau Balik Vertikal untuk membalik atas-ke-bawah — gabungkan salah satunya dengan sudut putar apa pun.',
      },
      {
        title: 'Atur sudut kustom dengan presisi (−180° hingga +180°)',
        description:
          'Seret slider Sudut Putar untuk meluruskan foto yang miring hingga derajat yang tepat, lalu klik Terapkan Sudut (atau Reset ke 0° kapan saja).',
      },
      {
        title: 'Pilih Format Output Anda',
        description:
          'Pilih Asli, JPG, PNG, atau WebP sesuai alur kerja tujuan Anda; perubahan langsung di-render ulang pada semua gambar Anda.',
      },
      {
        title: 'Bandingkan secara visual dan unduh',
        description:
          'Klik Bandingkan pada kartu mana pun untuk memeriksa orientasi sebelum dan sesudah, lalu klik Unduh atau Unduh Semua (ZIP) untuk batch.',
      },
    ],
    features: [
      {
        title: 'Putar Cepat 90° & Sudut Kustom',
        description:
          'Putar dengan rapi dalam langkah 90° atau atur sudut derajat yang tepat dengan perhitungan batas kanvas otomatis agar sudut tidak pernah terpotong.',
      },
      {
        title: 'Cermin & Balik Instan',
        description:
          'Balik gambar secara horizontal (selfie cermin) atau vertikal (refleksi terbalik) dalam satu klik.',
      },
      {
        title: 'Transformasi Batch',
        description:
          'Terapkan putaran atau balik yang sama ke beberapa foto yang diunggah secara bersamaan dan ekspor semuanya sebagai ZIP.',
      },
      {
        title: 'Output dengan Kehilangan Minimal',
        description:
          'Pilih format Asli, PNG untuk pelestarian lossless, atau WebP/JPG dengan kualitas yang bisa disesuaikan.',
      },
    ],
    faqs: [
      {
        question: 'Apakah memutar foto pada sudut kustom seperti 15° memotong sudut-sudutnya?',
        answer:
          'Tidak, tool menghitung lebar dan tinggi batas trigonometri yang diperluas secara otomatis untuk sudut non-90°. Hal itu memperluas Canvas secukupnya agar setiap piksel sudut asli Anda tetap di dalam bingkai.',
      },
      {
        question: 'Apa yang mengisi sudut segitiga yang dibuat oleh sudut miring kustom?',
        answer:
          'Jika Anda mempertahankan format Asli pada PNG/WebP atau memilih output PNG/WebP, sudut-sudut luar tambahan tersebut tetap sepenuhnya transparan. Jika output Anda menjadi JPG, yang tidak mendukung alpha, sudut-sudut itu diisi dengan warna putih solid yang bersih.',
      },
      {
        question: 'Bisakah saya memutar 90° sekaligus membalik secara horizontal?',
        answer:
          'Ya, Balik Horizontal dan Balik Vertikal berfungsi sebagai sakelar independen di samping sudut putar apa pun. Setiap lencana kartu hasil menampilkan kondisi gabungan Anda yang tepat, misalnya Diputar 90° · Dibalik H.',
      },
      {
        question: 'Mengapa memutar 90° atau 270° menukar lebar dan tinggi piksel?',
        answer:
          'Memutar gambar lanskap 1920×1080 sebesar 90° memutar sumbunya sehingga menjadi gambar potret 1080×1920. Mempertahankan batas yang ditukar secara tepat mencegah sisi foto Anda meregang atau terpotong.',
      },
      {
        question: 'Bagaimana cara memperbaiki selfie terbalik dengan teks yang tercermin?',
        answer:
          'Unggah foto, klik Reset ke 0° jika Anda tidak menginginkan putaran 90° (tool ini default 90° saat dimuat), dan aktifkan Balik Horizontal. Teks pada kaus atau papan langsung kembali ke arah baca normal.',
      },
      {
        question: 'Mengapa gambar otomatis berputar 90° tepat setelah diunggah?',
        answer:
          'Kondisi default Putar & Balik Cepat dimulai pada 90° agar foto miring yang umum langsung tegak saat dijatuhkan. Anda bisa menyesuaikannya dengan Putar 90° ke Kiri, 180°, slider sudut, atau mengklik Reset ke 0° kapan pun Anda hanya ingin membalik.',
      },
      {
        question: 'Format gambar apa saja yang bisa saya putar dan balik di sini?',
        answer:
          'Unggah file JPG, PNG, WebP, HEIC/HEIF, GIF, BMP, atau SVG hingga 20 MB per file. Opsi ekspor mencakup Asli, JPG, PNG, dan WebP lewat rendering HTML5 Canvas lokal.',
      },
      {
        question: 'Bisakah saya memutar batch satu folder foto ponsel yang miring secara bersamaan?',
        answer:
          'Ya, letakkan foto sebanyak yang bisa ditangani browser Anda dengan rapi, klik tombol putar atau balik yang diinginkan sekali, dan setiap item diperbarui bersama-sama. Saat beberapa file selesai, Unduh Semua (ZIP) mengekspor rotated_images_compressmypic.zip.',
      },
      {
        question: 'Apakah memutar PNG transparan menjaga latar transparannya?',
        answer:
          'Ya, area transparan tetap transparan saat output Asli (dari PNG/WebP), PNG, atau WebP dipilih. Hal ini berlaku baik untuk putaran 90° yang tajam maupun pelurusan kemiringan sembarang.',
      },
      {
        question: 'Bagaimana cara membatalkan beberapa putaran tanpa memuat ulang halaman?',
        answer:
          'Klik Reset ke 0° tepat di atas slider Sudut Putar kapan saja. Tindakan itu langsung menghapus putaran kembali ke 0° dan mematikan kedua balik — Horizontal dan Vertikal — di seluruh antrean.',
      },
      {
        question: 'Mengapa ukuran file bisa sedikit berubah setelah memutar JPEG?',
        answer:
          'Memutar piksel di dalam HTML5 Canvas meng-encode ulang JPEG pada kualitas 90%, bukan mengubah blok DCT secara lossless. Memilih output PNG mempertahankan piksel secara lossless jika Anda menginginkan nol artefak kompresi.',
      },
      {
        question: 'Apakah ada cara mudah untuk memeriksa sebelum dan sesudah pelurusan?',
        answer:
          'Klik Bandingkan pada kartu mana pun (atau klik thumbnail pratinjaunya) untuk membuka modal Perbandingan Putar & Balik. Anda bisa memeriksa tepi yang sudah sejajar dengan slider interaktif sebelum/sesudah sebelum menyimpan.',
      },
      {
        question: 'Apakah tool ini menangani orientasi foto iPhone dengan benar?',
        answer:
          'Ya, browser modern dan pemuat HEIC kami menormalisasi orientasi EXIF saat mendekode ke Canvas sebelum menerapkan sudut yang Anda pilih. Apa yang Anda lihat pada thumbnail kartu sama dengan piksel di dalam file yang Anda unduh.',
      },
      {
        question: 'Bisakah saya meluruskan pindaian dokumen yang miring dengan langkah kecil 1°?',
        answer:
          'Ya, seret slider Sudut Putar antara −180° dan +180° (langkah 1°) lalu lepaskan untuk melihat pratinjau dokumen yang sudah diluruskan. Klik Terapkan Sudut jika Anda menyesuaikannya lewat tombol panah keyboard untuk diterapkan ke semua file dalam antrean.',
      },
      {
        question: 'Apakah dokumen atau foto pribadi saya diunggah ke server?',
        answer:
          'Tidak, memutar dan membalik berjalan 100% lokal di browser web Anda lewat transformasi Canvas 2D. Gambar Anda tidak pernah meninggalkan komputer atau ponsel Anda.',
      },
      {
        question: 'Apa yang terjadi jika saya memutar GIF animasi?',
        answer:
          'Memutar GIF mengekstrak dan mentransformasi frame pertama menjadi gambar statis. Putaran animasi multi-frame tidak didukung langsung di tool ini.',
      },
      {
        question: 'Bisakah saya mencerminkan atau memutar screenshot yang ditempel langsung dari clipboard?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V) di mana saja pada halaman setelah menyalin gambar atau screenshot. Gambar masuk ke antrean batch dan langsung menerapkan pengaturan putar dan balik aktif Anda.',
      },
      {
        question: 'Apakah ada batas ukuran file atau jumlah putaran?',
        answer:
          'Unggahan individual bisa berukuran hingga 20 MB per file agar browser Anda tetap responsif. Dalam batas itu, Anda bisa memutar, membalik, mereset, dan mengekspor ulang foto sebanyak yang Anda butuhkan tanpa akun, batas harian, atau watermark.',
      },
      {
        question: 'Bisakah saya mengganti format output ke WebP saat memutar batch PNG?',
        answer:
          'Ya, mengklik WebP di bawah Format Output langsung mentransformasi ulang dan mengekspor batch Anda sebagai gambar WebP yang diputar dan ringan. Anda bisa beralih format bolak-balik dengan bebas tanpa mengunggah ulang.',
      },
      {
        question: 'Apakah Putar & Balik bekerja dengan baik di ponsel dan tablet layar sentuh?',
        answer:
          'Ya, semua tombol putar, sakelar balik, dan slider sudut yang mendukung sentuhan bekerja di Safari seluler dan Chrome Android. Anda juga bisa mengunduh foto satu per satu langsung ke rol kamera atau folder Unduhan perangkat Anda.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: 'Gambar ke PDF',
    shortDescription: 'Gabungkan gambar JPG, PNG, WebP & HEIC menjadi PDF multi-halaman.',
    category: 'convert',
    seoTitle: 'Gambar ke PDF Gratis – Gabung Foto jadi PDF',
    seoDescription:
      'Ubah foto menjadi PDF secara gratis – susun ulang halaman, pilih ukuran A4 atau Letter, atur margin. Dokumen Anda dibuat lokal di browser, tanpa upload.',
    h1: 'Konverter Gambar ke PDF',
    subtitle:
      'Ideal untuk pelajar, freelancer, akuntan, dan siapa pun yang mengirimkan KTP atau kuitansi, konverter gambar ke PDF privat ini menggabungkan beberapa foto menjadi satu PDF multi-halaman yang tajam. Susun ulang halaman dengan bebas, pilih ukuran A4, US Letter, atau Sesuai Ukuran Gambar, sesuaikan margin dan kualitas, lalu buat dokumen Anda secara lokal tanpa satu pun upload ke server.',
    howToSteps: [
      {
        title: 'Letakkan gambar untuk dimasukkan ke PDF',
        description:
          'Unggah satu atau beberapa file JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB per file (atau tempel dengan Ctrl+V). Setiap gambar menjadi satu halaman.',
      },
      {
        title: 'Atur urutan halaman',
        description:
          'Periksa daftar Urutan Halaman di bawah kontrol dan gunakan tombol Naik, Turun, atau Hapus untuk mengurutkan kuitansi, slide, atau pindaian secara akurat.',
      },
      {
        title: 'Pilih Ukuran Halaman dan Orientasi',
        description:
          'Pilih A4 (210 × 297 mm), US Letter (8,5 × 11 inci), atau Sesuai Ukuran Gambar, lalu pilih orientasi Otomatis (Sesuai Foto), Potret, atau Lanskap.',
      },
      {
        title: 'Sesuaikan Margin dan Penempatan Gambar',
        description:
          'Pilih Tanpa Margin (Full Bleed), Margin Kecil, atau Margin Sedang, lalu pilih Contain (Gambar Penuh) atau Cover (Isi Halaman).',
      },
      {
        title: 'Atur nama file dan Kualitas Gambar PDF',
        description:
          'Sesuaikan Nama File PDF (diakhiri .pdf) dan geser Kualitas Gambar PDF antara 40% dan 98% untuk menyeimbangkan ketajaman dengan ukuran total dokumen.',
      },
      {
        title: 'Buat dan unduh PDF Anda',
        description:
          'Klik Buat & Unduh PDF untuk membuat file secara lokal; banner konfirmasi hijau juga memungkinkan Anda mengklik Unduh PDF Lagi.',
      },
    ],
    features: [
      {
        title: 'Penyusunan Multi-Halaman',
        description:
          'Susun ulang gambar yang diunggah dengan mudah sebelum membuat PDF agar kuitansi, pindaian, dan slide muncul dalam urutan yang Anda inginkan.',
      },
      {
        title: 'Ukuran Halaman Fleksibel & Orientasi Otomatis',
        description:
          'Ekspor ke A4 atau US Letter standar dengan Otomatis Potret/Lanskap per halaman, atau pilih Sesuai Gambar untuk menyesuaikan rasio aspek tepat setiap foto.',
      },
      {
        title: 'Margin & Kualitas PDF yang Bisa Disesuaikan',
        description:
          'Pilih margin Tanpa, Kecil, atau Sedang dan kontrol kualitas gambar yang disematkan agar PDF Anda tetap ringan untuk email.',
      },
      {
        title: 'Tanpa Upload ke Server',
        description:
          'KTP sensitif, kontrak, dan dokumen pindaian tidak pernah menyentuh server eksternal — biner PDF dibuat secara lokal di memori browser.',
      },
    ],
    faqs: [
      {
        question: 'Apakah konverter gambar ke PDF ini aman untuk paspor, KTP, dan kuitansi pajak?',
        answer:
          'Ya, dokumen Anda tidak pernah diunggah ke server jarak jauh atau antrean cloud mana pun. Pembangun PDF JavaScript kami meng-encode setiap halaman di dalam RAM browser lokal Anda dan menulis .pdf yang sudah jadi langsung ke perangkat Anda.',
      },
      {
        question: 'Pilihan ukuran halaman apa saja yang didukung?',
        answer:
          'Anda bisa menstandardisasi setiap halaman ke A4 (210 × 297 mm) atau US Letter (8,5 × 11 inci) untuk pencetakan dan pengarsipan yang konsisten. Atau, pilih Sesuai Ukuran Gambar agar setiap halaman PDF sesuai dengan dimensi native dan rasio aspek fotonya.',
      },
      {
        question: 'Bagaimana Orientasi Otomatis bekerja dengan campuran foto horizontal dan vertikal?',
        answer:
          'Saat Orientasi diatur ke Otomatis (Sesuai Foto), gambar lanskap otomatis menerima halaman lanskap sementara gambar potret menerima halaman potret. Anda bisa mengunci setiap halaman ke Potret atau Lanskap kapan pun tata letak cetak yang seragam diperlukan.',
      },
      {
        question: 'Apa bedanya penempatan Contain dan Cover?',
        answer:
          'Contain (Gambar Penuh) mengubah skala setiap foto secara proporsional agar seluruh gambar muat di dalam margin yang Anda pilih tanpa ada yang terpotong. Cover (Isi Halaman) memperbesar foto untuk mengisi seluruh area cetak hingga ke tepi, memangkas kelebihan apa pun.',
      },
      {
        question: 'Mengapa dropdown Orientasi nonaktif saat Sesuai Ukuran Gambar dipilih?',
        answer:
          'Sesuai Ukuran Gambar mengukur setiap halaman PDF secara dinamis ke rasio aspek tepat fotonya, sehingga penggantian potret vs lanskap tidak berlaku. Beralihlah Ukuran Halaman ke A4 atau US Letter jika Anda menginginkan kontrol Potret/Lanskap manual.',
      },
      {
        question: 'Bisakah saya menyusun ulang halaman setelah mengunggah beberapa file sekaligus?',
        answer:
          'Ya, gulir ke bagian Urutan Halaman di mana setiap halaman menampilkan lencana bernomor, thumbnail, dimensi piksel, dan ukuran file. Gunakan tombol panah Naik dan Turun pada baris mana pun untuk menyusun ulang halaman sebelum mengklik Buat & Unduh PDF.',
      },
      {
        question: 'Bagaimana slider Kualitas Gambar PDF memengaruhi ukuran file?',
        answer:
          'Menurunkan Kualitas Gambar PDF ke 60%–75% mengompresi aliran JPEG yang disematkan di dalam PDF, menjaga pindaian multi-halaman tetap ringkas untuk batas upload email atau portal yang ketat. Mendorong ke 90%–98% mempertahankan teks kecil yang lebih tajam pada dokumen yang padat.',
      },
      {
        question: 'Format file gambar apa saja yang bisa saya gabungkan menjadi PDF?',
        answer:
          'Anda bisa mencampur gambar JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG (hingga 20 MB per file) di dalam satu dokumen PDF. Gambar-gambar itu didekode secara lokal di browser dan dinormalisasi dengan mulus ke halaman PDF.',
      },
      {
        question: 'Apa yang terjadi pada gambar PNG atau WebP transparan di dalam PDF?',
        answer:
          'Karena halaman PDF standar memiliki kanvas kertas putih, latar transparan digabungkan dengan rapi ke putih solid sebelum disematkan. Hal itu mencegah artefak gelap yang tak terduga di balik logo atau tanda tangan yang dipindai.',
      },
      {
        question: 'Bisakah saya menyesuaikan nama file output sebelum menyimpan?',
        answer:
          'Ya, ketik judul dokumen apa pun ke kolom Nama File PDF (defaultnya compressmypic-document.pdf). Jika Anda menghilangkan akhiran .pdf, pengekspor akan menambahkan .pdf secara otomatis saat mengunduh.',
      },
      {
        question: 'Berapa halaman yang bisa saya gabungkan menjadi satu dokumen PDF?',
        answer:
          'Tidak ada batas jumlah halaman yang dibuat-buat — Anda bisa menggabungkan puluhan foto atau kuitansi menjadi satu PDF multi-halaman. Kapasitas praktis hanya bergantung pada memori browser yang tersedia di perangkat Anda dan resolusi piksel setiap gambar.',
      },
      {
        question: 'Apa bedanya Tanpa Margin, Margin Kecil, dan Margin Sedang?',
        answer:
          'Tanpa Margin (Full Bleed) memperluas penempatan hingga ke tepi kertas, ideal untuk karya tanpa tepi atau ekspor Sesuai Gambar. Margin Kecil dan Margin Sedang menambahkan batas putih yang rapi di sekitar setiap halaman untuk pencetakan standar dan keterbacaan.',
      },
      {
        question: 'Bisakah saya menambahkan lebih banyak foto setelah memeriksa daftar Urutan Halaman?',
        answer:
          'Ya, cukup letakkan atau telusuri file tambahan ke kotak unggah di atas dan file-file itu ditambahkan ke akhir daftar Urutan Halaman Anda. Anda kemudian bisa menyusun ulang atau menghapus halaman individual sebelum membuat PDF yang diperbarui.',
      },
      {
        question: 'Apakah tool menambahkan logo footer, stempel halaman, atau watermark ke PDF saya?',
        answer:
          'Tidak, CompressMyPic menghasilkan halaman PDF yang sepenuhnya bersih yang hanya berisi gambar Anda di dalam margin yang Anda pilih. Tidak ada branding, header, atau watermark yang pernah ditambahkan.',
      },
      {
        question: 'Mengapa pesan progres menampilkan Meng-encode halaman X dari Y?',
        answer:
          'PDF multi-halaman meng-encode setiap gambar secara berurutan di memori browser untuk menghindari tab browser Anda membeku atau penggunaan RAM melonjak. Setelah halaman terakhir di-encode, bilah konfirmasi hijau menampilkan jumlah halaman total dan ukuran byte PDF yang tepat.',
      },
      {
        question: 'Bagaimana jika saya kehilangan atau menutup dialog unduhan browser otomatis?',
        answer:
          'Biarkan tab tetap terbuka — kartu konfirmasi hijau tetap terlihat dengan tombol Unduh PDF Lagi. Mengkliknya langsung memicu penyimpanan Blob yang sudah dibuat tanpa re-encode.',
      },
      {
        question: 'Bisakah saya menempel screenshot langsung ke pembangun PDF?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V di Mac) untuk menambahkan screenshot clipboard langsung ke antrean Urutan Halaman Anda. Hal itu membuat penggabungan beberapa screenshot bug atau kuitansi chat menjadi satu PDF menjadi cepat.',
      },
      {
        question: 'Apakah membuat PDF mengunggah metadata apa pun seperti tag GPS EXIF?',
        answer:
          'Tidak, setiap gambar halaman didekode dan digambar ke HTML5 Canvas sebelum disematkan ke aliran byte PDF. Akibatnya, header EXIF kamera asli dan koordinat GPS dikecualikan secara otomatis selama konversi.',
      },
      {
        question: 'Bisakah saya mengonversi foto kamera HEIC iPhone langsung ke PDF tanpa mengonversi ke JPG dulu?',
        answer:
          'Ya, letakkan foto .heic atau .heif langsung ke zona unggah dan browser mendekodenya secara lokal seketika. Foto-foto itu langsung muncul di daftar Urutan Halaman Anda dan siap digabungkan menjadi PDF A4 atau Letter.',
      },
      {
        question: 'Apakah tool Gambar ke PDF bekerja di ponsel dan Chromebook?',
        answer:
          'Ya, semuanya berjalan dalam JavaScript browser standar di iOS, Android, Windows, macOS, dan ChromeOS. Anda tidak memerlukan Adobe Acrobat, ekstensi browser, atau software PDF desktop.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: 'Penampil Metadata Gambar',
    shortDescription: 'Periksa pengaturan kamera EXIF, koordinat GPS, dan data PNG/WebP.',
    category: 'privacy',
    seoTitle: 'Lihat Metadata Gambar – Periksa EXIF & GPS Gratis',
    seoDescription:
      'Periksa metadata gambar secara privat – lihat tag EXIF, koordinat GPS, dan stempel waktu. Salin atau ekspor JSON lengkap secara privat, semua lokal di browser.',
    h1: 'Penampil Metadata & EXIF Gambar',
    subtitle:
      'Dibuat untuk fotografer yang memeriksa pengaturan lensa, developer yang men-debug header, dan siapa pun yang memeriksa privasi sebelum memposting, penampil metadata gambar browser ini memeriksa byte file mentah secara lokal. Ungkap tag EXIF tersembunyi, koordinat GPS, stempel waktu, dan chunk PNG atau WebP tanpa mengunggah satu piksel pun.',
    howToSteps: [
      {
        title: 'Letakkan atau pilih gambar untuk diperiksa',
        description:
          'Unggah gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB (atau tempel lewat Ctrl+V). Header biner mentah langsung diurai di perangkat Anda.',
      },
      {
        title: 'Periksa banner Ringkasan & Risiko Privasi',
        description:
          'Lihat format kontainer yang terdeteksi, dimensi, ukuran file, dan apakah jenis tag metadata sensitif yang disematkan ditemukan.',
      },
      {
        title: 'Tinjau peringatan Lokasi GPS apa pun',
        description:
          'Jika ada tag GPSIFD, kotak peringatan menyoroti Lintang dan Bujur yang didekode secara tepat dan menawarkan lompatan sekali klik ke Hapus Metadata Gambar.',
      },
      {
        title: 'Telusuri tabel Metadata yang Diekstrak',
        description:
          'Gulir entri yang dikelompokkan (Kamera, EXIF, GPS, chunk PNG/WebP, Info file) dengan label Tag Privasi berwarna amber yang menandai kolom sensitif.',
      },
      {
        title: 'Salin atau ekspor JSON, atau hapus tag',
        description:
          'Klik Salin JSON untuk menyalin laporan lengkap, Ekspor JSON untuk menyimpan file .json, atau klik Hapus Metadata untuk membersihkan tag privat dengan rapi.',
      },
    ],
    features: [
      {
        title: 'Deteksi EXIF & GPS Mendalam',
        description:
          'Mengurai tabel biner TIFF IFD0, ExifIFD, dan GPSIFD di JPEG, eXIf PNG, dan chunk EXIF WebP untuk mengungkap tag lokasi dan perangkat yang tersembunyi.',
      },
      {
        title: 'Penandaan Risiko Privasi',
        description:
          'Otomatis menandai kolom sensitif seperti lintang/bujur GPS, nomor seri kamera, nama artis, dan stempel waktu pengambilan.',
      },
      {
        title: 'Pemeriksaan Chunk PNG & WebP',
        description:
          'Membaca kedalaman warna IHDR PNG, DPI fisik pHYs, chunk tEXt/iTXt/tIME, dan flag alpha/animasi WebP VP8X.',
      },
      {
        title: 'Ekspor Laporan JSON',
        description:
          'Salin semua kolom metadata yang diurai ke clipboard Anda atau unduh laporan JSON yang bersih dengan satu klik.',
      },
    ],
    faqs: [
      {
        question: 'Informasi tersembunyi seperti apa yang bisa diungkap penampil metadata gambar ini?',
        answer:
          'Tergantung format kontainernya, parser kami mengekstrak kolom TIFF IFD0, ExifIFD, dan GPSIFD secara lokal dari header gambar Anda. Hal ini mengungkap detail seperti merek dan model kamera, spesifikasi lensa, kecepatan rana, ISO, aperture, stempel waktu, software pengedit, catatan hak cipta, dan koordinat GPS desimal.',
      },
      {
        question: 'Apakah tool ini juga memeriksa header teknis PNG dan WebP selain EXIF JPEG?',
        answer:
          'Ya, di luar segmen EXIF JPEG standar, penampil membaca chunk teknis yang disematkan di dalam file PNG dan WebP. Anda bisa melihat bit-depth IHDR PNG, kepadatan DPI fisik pHYs, chunk teks tEXt/iTXt/tIME, blok eXIf PNG, dan flag alpha atau animasi WebP VP8X.',
      },
      {
        question: 'Mengapa foto yang diunduh dari WhatsApp atau Instagram menunjukkan nol tag EXIF?',
        answer:
          'Jejaring sosial dan aplikasi pesan menghapus header EXIF, kamera, dan GPS secara otomatis saat Anda mengunggah foto melalui server mereka. File asli langsung dari rol kamera ponsel atau DSLR Anda mempertahankan metadata lengkap.',
      },
      {
        question: 'Bagaimana tool mendeteksi apakah sebuah foto mengungkap lokasi saya?',
        answer:
          'Saat tag rasional GPSIFD ada di header gambar, penampil mengonversi derajat, menit, dan detik menjadi Lintang dan Bujur desimal secara otomatis. Koordinat yang terdeteksi memicu banner amber Koordinat Lokasi GPS Terdeteksi tepat di atas tabel properti.',
      },
      {
        question: 'Apa arti label Tag Privasi berwarna amber di tabel metadata?',
        answer:
          'Entri yang ditandai dengan lencana Tag Privasi amber berisi informasi pribadi atau pengenal perangkat. Contoh umum meliputi koordinat GPS, stempel waktu pengambilan yang tepat, nama fotografer/artis, nomor seri kamera, dan string model perangkat.',
      },
      {
        question: 'Bisakah saya menghapus metadata sensitif tepat setelah memeriksa gambar?',
        answer:
          'Ya, setiap kali tag sensitif terdeteksi, tombol Hapus Metadata berwarna oranye muncul di bilah ringkasan (ditambah tautan di dalam kotak peringatan GPS). Mengkliknya membawa Anda langsung ke tool Hapus Metadata Gambar kami.',
      },
      {
        question: 'Bagaimana cara kerja ekspor JSON untuk developer atau dokumentasi?',
        answer:
          'Klik Salin JSON di bilah ringkasan untuk langsung menempatkan ImageMetadataReport terstruktur ke clipboard Anda. Jika Anda butuh file untuk audit atau laporan bug, klik Ekspor JSON untuk mengunduh <filename>_metadata.json secara lokal.',
      },
      {
        question: 'Mengapa chunk EXIF biner penuh tidak diekstrak untuk beberapa file HEIC atau GIF?',
        answer:
          'Parser chunk biner mendalam kami menargetkan kontainer JPEG, PNG, dan WebP secara native dalam JavaScript. Untuk file HEIC, GIF, BMP, dan SVG, penampil melaporkan info kontainer, ukuran file, dan dimensi piksel yang andal secara akurat.',
      },
      {
        question: 'Apakah foto privat dengan lokasi GPS pernah diunggah saat saya memeriksanya?',
        answer:
          'Tidak, pemeriksaan biner berjalan 100% lokal di browser Anda menggunakan penguraian byte File ArrayBuffer. Mengirim foto privat yang belum dibersihkan lewat internet akan menggagalkan privasi, jadi nol byte meninggalkan komputer atau ponsel Anda.',
      },
      {
        question: 'Apakah melihat metadata mengubah, mengompresi, atau menghapus apa pun di file saya?',
        answer:
          'Tidak, Penampil Metadata Gambar ini sepenuhnya hanya-baca. Tool membaca header dari memori browser untuk menunjukkan apa yang ada di dalamnya tanpa mengubah file asli Anda.',
      },
      {
        question: 'Bisakah saya memeriksa beberapa file berturut-turut tanpa me-refresh?',
        answer:
          'Ya, klik ikon tempat sampah merah (Bersihkan) di bilah ringkasan untuk kembali ke zona unggah kapan saja. Anda kemudian bisa meletakkan atau menempel gambar berikutnya untuk membuat laporan metadata baru.',
      },
      {
        question: 'Mengapa menempel screenshot dengan Ctrl+V biasanya tidak menunjukkan tag kamera?',
        answer:
          'Clipboard sistem operasi meneruskan bitmap raster mentah, bukan file JPEG kamera asli. Karena gambar clipboard tidak memiliki header kamera, screenshot yang ditempel menampilkan dimensi kontainer dan info format tanpa blok EXIF atau GPS.',
      },
      {
        question: 'Berapa ukuran file maksimum yang didukung untuk pemeriksaan metadata?',
        answer:
          'Anda bisa memeriksa gambar individual hingga 20 MB langsung di browser Anda. Batas itu dengan mudah mencakup JPEG DSLR resolusi penuh, ekspor PNG yang detail, dan file BMP yang tidak terkompresi.',
      },
      {
        question: 'Bagaimana cara memverifikasi bahwa tool lain benar-benar menghapus semua tag EXIF dari foto?',
        answer:
          'Letakkan file output yang sudah dibersihkan kembali ke penampil metadata gambar ini untuk memeriksa byte mentahnya. Jika pembersihan berhasil, banner status hijau mengonfirmasi Tidak ada tag EXIF, GPS, atau kamera tersembunyi yang terdeteksi dan tidak ada peringatan GPS yang muncul.',
      },
      {
        question: 'Apakah penampil mendeteksi XMP Adobe atau komentar teks PNG?',
        answer:
          'Ya, chunk teks kunci-nilai PNG tEXt dan iTXt — seperti Software, Author, Comment, atau Creation Time — diekstrak dengan rapi ke tabel metadata. Blok eXIf PNG yang disematkan dan chunk EXIF WebP didekode bersamaan.',
      },
      {
        question: 'Apa arti chunk pHYs pada screenshot PNG?',
        answer:
          'Chunk pHYs PNG menyimpan kepadatan piksel fisik (DPI / piksel per meter) yang dimaksudkan untuk skala cetak atau tata letak. Penampil kami membaca dan mengonversi nilai-nilai itu agar Anda bisa melihat apakah gambar menentukan 72 DPI, 96 DPI, atau 300 DPI.',
      },
      {
        question: 'Mengapa ekstensi nama file kadang berbeda dari containerFormat?',
        answer:
          'Terkadang file PNG atau WebP diganti namanya dengan ekstensi .jpg (atau sebaliknya). Karena penampil kami memeriksa byte magic biner aktual, bukan hanya mempercayai nama file, ia melaporkan format kontainer dasar yang sebenarnya.',
      },
      {
        question: 'Bisakah saya memeriksa metadata gambar di browser seluler iPhone atau Android?',
        answer:
          'Ya, buka halaman di Safari seluler atau Chrome dan pilih foto langsung dari rol kamera Anda. Anda bisa memeriksa koordinat GPS tersembunyi dan detail kamera di ponsel sebelum memposting gambar secara online.',
      },
      {
        question: 'Mengapa foto DSLR saya menampilkan panjang fokus lensa dan kecepatan rana?',
        answer:
          'Kamera digital merekam telemetri eksposur di dalam direktori biner ExifIFD saat Anda menekan rana. Kolom seperti ISO, F-Number, Waktu Eksposur, Panjang Fokus, Flash, dan Mode Metering didekode secara lokal untuk Anda baca.',
      },
      {
        question: 'Apakah ada biaya atau pendaftaran untuk memeriksa foto tanpa batas?',
        answer:
          'Tidak, memeriksa metadata gambar dan mengekspor laporan JSON sepenuhnya gratis tanpa akun atau paywall. Anda bisa memeriksa foto sebanyak yang Anda butuhkan hingga 20 MB tanpa watermark atau batas harian.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: 'Hapus Metadata Gambar',
    shortDescription: 'Hapus EXIF, lokasi GPS, info kamera & komentar secara privat.',
    category: 'privacy',
    seoTitle: 'Hapus Metadata Gambar Gratis – Bersihkan EXIF & GPS',
    seoDescription:
      'Hapus metadata gambar dengan aman, termasuk detail kamera EXIF dan lokasi GPS, langsung di browser. Penghapusan biner lossless untuk JPG dan PNG dan ekspor ZIP.',
    h1: 'Hapus Metadata Gambar Online',
    subtitle:
      'Dirancang untuk penjual marketplace, jurnalis, orang tua, dan pengguna yang sadar privasi, tool ini memungkinkan Anda menghapus metadata gambar secara permanen sebelum membagikan foto secara online. Hapus model kamera EXIF, koordinat GPS, stempel waktu pengambilan, dan chunk teks tersembunyi secara lokal di browser Anda menggunakan penghapusan biner lossless atau re-encode Canvas yang bersih.',
    howToSteps: [
      {
        title: 'Letakkan foto yang ingin Anda bersihkan',
        description:
          'Unggah satu atau banyak gambar JPG, PNG, WebP, atau HEIC (hingga 20 MB per file) ke kotak unggah, atau tempel dengan Ctrl+V.',
      },
      {
        title: 'Tinjau penghapusan otomatis dan lencana verifikasi',
        description:
          'File langsung dibersihkan saat diunggah dan dipindai ulang secara otomatis, menampilkan berapa banyak tag metadata yang dihapus (mis. → 0 tersisa).',
      },
      {
        title: 'Pilih Metode Penghapusan jika menyesuaikan pengaturan',
        description:
          'Pertahankan Penghapusan Biner Lossless (JPG/PNG) untuk nol re-encode piksel pada JPEG dan PNG, atau pilih Re-encode Canvas Penuh untuk meratakan piksel dengan bersih.',
      },
      {
        title: 'Opsional: atur Format Output dan Kualitas',
        description:
          'Pilih output Asli, JPG, PNG, atau WebP, sesuaikan Kualitas Re-encode (50%–100%) untuk re-encode WebP/HEIC/Canvas penuh, lalu klik Bersihkan Ulang Semua.',
      },
      {
        title: 'Unduh file bersih atau ZIP batch',
        description:
          'Klik Unduh Bersih pada kartu terverifikasi individual atau klik Unduh Semua Bersih (ZIP) untuk menyimpan clean_images_no_metadata.zip.',
      },
    ],
    features: [
      {
        title: 'Penghapusan Lossless Sejati untuk JPEG & PNG',
        description:
          'Menghapus EXIF, XMP, IPTC, komentar, dan chunk PNG tEXt/eXIf pada tingkat biner tanpa re-encode atau mengompresi ulang satu piksel pun.',
      },
      {
        title: 'Output Bersih Terverifikasi',
        description:
          'Setiap file output otomatis dipindai ulang oleh parser metadata kami untuk memverifikasi bahwa 0 tag EXIF/GPS sensitif tersisa.',
      },
      {
        title: 'Pembersihan Batch + Ekspor ZIP',
        description:
          'Bersihkan seluruh batch foto sebelum memposting ke marketplace, forum, atau listing dan unduh semuanya bersama-sama sebagai ZIP.',
      },
      {
        title: '100% Privasi di Perangkat',
        description:
          'Tool privasi harus privat — foto asli Anda dengan data GPS tidak pernah meninggalkan browser Anda.',
      },
    ],
    faqs: [
      {
        question: 'Bagaimana Penghapusan Biner Lossless bekerja tanpa merusak kualitas foto?',
        answer:
          'Pada file JPEG dan PNG yang dipertahankan dalam format aslinya, pembersih biner kami mengurai struktur kontainer secara langsung. Ia menghapus segmen metadata (JPEG APP1–APP15/COM dan PNG eXIf/tEXt/iTXt/tIME) tanpa mendekode atau mengompresi ulang satu piksel pun.',
      },
      {
        question: 'Apa yang terjadi saat saya mengunggah file WebP atau HEIC untuk menghapus metadata?',
        answer:
          'Penghapusan segmen biner lossless berlaku untuk input JPG dan PNG. Untuk input HEIC atau WebP — atau setiap kali Anda mengganti Format Output atau memilih Re-encode Canvas Penuh — tool menggambar piksel ke HTML5 Canvas baru untuk menjamin semua header metadata dibuang.',
      },
      {
        question: 'Bagaimana saya tahu pasti bahwa lokasi GPS dan tag EXIF sudah dihapus?',
        answer:
          'Setelah membersihkan setiap gambar, tool kami menjalankan parser metadata kami untuk kedua kalinya pada Blob output dan menampilkan lencana hijau (misalnya, Dihapus X tag metadata → 0 tersisa atau Terverifikasi bersih). Tidak ada yang ditebak.',
      },
      {
        question: 'Jenis metadata apa saja yang ditargetkan saat membersihkan foto?',
        answer:
          'Pembersih menghapus merek, model, detail lensa, nomor seri, pengaturan rana, dan stempel waktu pengambilan kamera EXIF. Ia juga menghapus tag lintang/bujur/ketinggian GPS, paket XMP Adobe, kolom IPTC, komentar JPEG, dan chunk teks atau waktu PNG.',
      },
      {
        question: 'Kapan saya harus memilih Re-encode Canvas Penuh daripada Penghapusan Biner Lossless?',
        answer:
          'Pilih Re-encode Canvas Penuh saat Anda menginginkan bitmap terkompresi yang benar-benar baru tanpa segmen biner warisan apa pun. Metode ini juga digunakan otomatis setiap kali Anda mengubah Format Output atau mengunggah foto WebP dan HEIC.',
      },
      {
        question: 'Format upload apa saja yang diterima Hapus Metadata Gambar?',
        answer:
          'Dropzone upload menerima file JPG (JPEG), PNG, WebP, dan HEIC/HEIF iPhone hingga 20 MB per file. Dari sana, Anda bisa mengekspor file bersih dalam format Asli, JPG, PNG, atau WebP.',
      },
      {
        question: 'Apakah slider Kualitas Re-encode memengaruhi file Penghapusan Biner Lossless?',
        answer:
          'Tidak, Penghapusan Biner Lossless melewatkan re-encode piksel sepenuhnya sehingga bit visual JPEG/PNG Anda tetap tak tersentuh terlepas dari slider. Slider Kualitas Re-encode (50%–100%) hanya berlaku untuk input WebP/HEIC atau ekspor Re-encode Canvas Penuh.',
      },
      {
        question: 'Bisakah saya menghapus metadata dari seluruh folder foto listing sekaligus?',
        answer:
          'Ya, letakkan beberapa foto bersama-sama dan tunggu sebentar hingga lencana verifikasi otomatis berubah hijau di semua kartu. Lalu klik Unduh Semua Bersih (ZIP) untuk mengunduh clean_images_no_metadata.zip.',
      },
      {
        question: 'Apakah foto saya yang belum dibersihkan dengan koordinat GPS diunggah ke mana pun?',
        answer:
          'Tidak pernah — membersihkan header GPS dan perangkat yang sensitif hanya melindungi privasi jika terjadi secara lokal. Semua pemotongan byte biner dan ekspor Canvas terjadi di dalam memori browser Anda sendiri.',
      },
      {
        question: 'Mengapa sebuah foto menampilkan Terverifikasi bersih (0 tag EXIF/GPS) tepat setelah diunggah?',
        answer:
          'Itu berarti file sumber sudah tidak berisi chunk metadata EXIF, GPS, atau teks apa pun (umum untuk screenshot atau gambar yang diunduh dari aplikasi pesan). Pembersih kami tetap memverifikasi output dengan bersih.',
      },
      {
        question: 'Apakah menghapus metadata juga mengurangi ukuran file?',
        answer:
          'Ya, foto kamera sering membawa thumbnail pratinjau EXIF yang disematkan, blok XML XMP Adobe, dan segmen warna atau komentar. Menghapusnya dalam mode Penghapusan Biner Lossless sering memangkas puluhan kilobyte tanpa perubahan pada ketajaman gambar.',
      },
      {
        question: 'Apakah Penghapusan Biner Lossless mempertahankan latar PNG transparan?',
        answer:
          'Ya, chunk data gambar PNG (IDAT) dan transparansi alpha tetap tak tersentuh byte demi byte. Hanya chunk teks, EXIF, dan stempel waktu ancillary yang dipotong dari file.',
      },
      {
        question: 'Apa yang terjadi jika foto iPhone diputar lewat tag Orientasi EXIF?',
        answer:
          'Menghapus blok APP1 mentah secara lossless menghapus flag Orientasi, sedangkan Re-encode Canvas Penuh atau dekode HEIC memanggang orientasi piksel tegak langsung ke kanvas yang diekspor. Jika JPEG vertikal tampak miring setelah penghapusan lossless, beralihlah ke Re-encode Canvas Penuh dan klik Bersihkan Ulang Semua.',
      },
      {
        question: 'Bisakah saya mengonversi PNG bersih langsung ke WebP atau JPG sambil menghapus metadata?',
        answer:
          'Ya, pilih JPG atau WebP di bawah Format Output, atur Kualitas Re-encode, dan klik Bersihkan Ulang Semua. Setiap file di-encode ulang dengan bersih lewat Canvas dengan semua metadata dihapus dan format yang dipilih diterapkan.',
      },
      {
        question: 'Apakah file asli saya di disk diubah atau ditimpa?',
        answer:
          'Tidak, browser web tidak bisa menimpa file langsung di folder lokal Anda. Mengklik Unduh Bersih menyimpan salinan terpisah yang sudah dibersihkan sementara file asli Anda tetap tak tersentuh.',
      },
      {
        question: 'Bisakah saya memeriksa ulang output yang dibersihkan di inspector independen?',
        answer:
          'Ya, letakkan file yang diunduh ke Penampil Metadata Gambar kami tepat setelah menyimpan. Tool mengurai header biner mentah secara independen sehingga Anda bisa mengonfirmasi nol koordinat GPS atau tag kamera tersisa.',
      },
      {
        question: 'Apakah pembersih bekerja di ponsel sebelum memposting ke marketplace?',
        answer:
          'Ya, buka halaman di Safari iOS atau Chrome Android dan pilih foto langsung dari rol kamera ponsel Anda. Setelah lencana hijau terverifikasi muncul, Anda bisa mengunduh salinan bersih langsung ke perangkat Anda.',
      },
      {
        question: 'Bisakah saya menempel gambar clipboard ke Hapus Metadata Gambar?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V di Mac) untuk meletakkan gambar atau screenshot yang disalin langsung ke antrean unggah. Tool otomatis membersihkan chunk residual apa pun dan menyiapkan unduhan bersih.',
      },
      {
        question: 'Mengapa tombol Bersihkan Ulang Semua ada jika pembersihan dimulai otomatis?',
        answer:
          'File langsung dibersihkan saat dijatuhkan menggunakan pengaturan aktif Anda. Jika Anda kemudian mengubah Metode Penghapusan, mengganti Format Output, atau menyesuaikan Kualitas Re-encode, mengklik Bersihkan Ulang Semua menerapkan opsi yang diperbarui itu ke seluruh batch.',
      },
      {
        question: 'Apakah ada batas jumlah file atau biaya untuk menghapus data EXIF?',
        answer:
          'Setiap file yang diunggah bisa berukuran hingga 20 MB agar memori browser Anda tetap lancar. Di luar batas per file itu, Anda bisa menghapus metadata gambar dari foto tanpa batas tanpa watermark, pendaftaran, atau biaya.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
  {
    slug: '/favicon-generator',
    name: 'Pembuat Favicon',
    shortDescription: 'Buat favicon.ico, Apple Touch, Android & file manifest.',
    category: 'create',
    seoTitle: 'Pembuat Favicon Gratis – Buat favicon.ico & Ikon App',
    seoDescription:
      'Gunakan pembuat favicon gratis untuk membuat favicon.ico multi-ukuran, ikon Apple Touch, ikon Android Chrome, site.webmanifest, dan snippet HTML di browser.',
    h1: 'Pembuat Favicon Online Gratis',
    subtitle:
      'Dirancang untuk pengembang web, pendiri startup, blogger, dan indie maker, pembuat favicon gratis ini mengubah logo atau grafis apa pun menjadi paket ikon browser dan seluler yang siap dipakai. Pratinjau ikon Anda di tab terang dan gelap, atur padding, radius sudut, dan isian latar, lalu unduh semuanya secara lokal tanpa upload ke server.',
    howToSteps: [
      {
        title: 'Unggah logo atau grafis ikon Anda',
        description:
          'Letakkan gambar PNG, SVG, JPG, WebP, atau HEIC hingga 20 MB (PNG atau SVG persegi paling cocok) atau tempel dari clipboard dengan Ctrl+V.',
      },
      {
        title: 'Pilih Isian Latar',
        description:
          'Biarkan kotak centang Transparan aktif untuk ikon potongan yang bersih, atau hapus centangnya untuk memilih warna latar solid hex.',
      },
      {
        title: 'Sesuaikan Padding dan Radius Sudut',
        description:
          'Geser Padding antara 0% dan 25% untuk ruang napas dan seret Radius Sudut dari 0% hingga 50% untuk persegi membulat atau lencana melingkar.',
      },
      {
        title: 'Periksa Pratinjau Tab Browser',
        description:
          'Periksa pratinjau skala 16×16 live yang dirender di dalam tab Situs Saya yang terang dan mockup Tab Mode Gelap.',
      },
      {
        title: 'Unduh file individual atau ZIP lengkap',
        description:
          'Simpan ukuran ikon individual dari kartu yang dibuat atau klik Unduh Semua (ZIP) untuk mengunduh favicon_package_compressmypic.zip.',
      },
      {
        title: 'Salin snippet head HTML',
        description:
          'Klik Salin HTML di panel gelap Snippet <head> HTML dan tempel tag <link> langsung ke template situs web Anda.',
      },
    ],
    features: [
      {
        title: 'favicon.ico Multi-Ukuran Asli',
        description:
          'Membuat file .ico biner asli yang menyematkan frame 16×16, 32×32, dan 48×48 yang tajam — bukan PNG yang diganti nama.',
      },
      {
        title: 'Set Ikon Web & Seluler Lengkap',
        description:
          'Membuat ikon 16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192 dan 512×512 (Android/PWA) plus site.webmanifest.',
      },
      {
        title: 'Pratinjau Tab Browser Live',
        description:
          'Pratinjau tampilan ikon Anda pada skala tab browser sebenarnya dengan latar terang dan gelap sebelum mengunduh.',
      },
      {
        title: 'Snippet HTML Siap Tempel',
        description:
          'Salin tag <link> HTML yang bersih langsung ke <head> Anda dengan satu klik.',
      },
    ],
    faqs: [
      {
        question: 'Ukuran ikon dan file apa saja yang dikemas di dalam ZIP favicon?',
        answer:
          'Mengunduh ZIP menggabungkan favicon.ico multi-frame (16×16, 32×32, dan 48×48), file terpisah favicon-16x16.png, favicon-32x32.png, dan favicon-48x48.png, apple-touch-icon.png (180×180), android-chrome-192x192.png, dan android-chrome-512x512.png. Paket ini juga membuat file JSON site.webmanifest yang siap diunggah.',
      },
      {
        question: 'Apakah favicon.ico berupa biner ICO multi-frame asli atau PNG yang diganti nama?',
        answer:
          'Pembuat favicon kami menulis kontainer biner ICONDIR Windows asli dengan entri direktori PNG RGBA 32-bit terpisah untuk frame 16×16, 32×32, dan 48×48. Browser desktop lama dan pintasan Windows otomatis memilih frame paling tajam yang cocok tanpa artefak rendering.',
      },
      {
        question: 'Dimensi dan format sumber apa yang paling cocok untuk ikon tab browser yang tajam?',
        answer:
          'Mulailah dengan PNG persegi yang bersih atau SVG mandiri pada 512×512 piksel atau lebih besar agar penurunan skala menghasilkan tepi yang tajam pada 16×16 maupun 512×512. Sumber beresolusi rendah yang kecil lalu diregangkan hingga ikon splash PWA 512×512 bisa tampak lembut.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah logo persegi panjang, bukan persegi?',
        answer:
          'Grafis persegi panjang dipusatkan secara proporsional di dalam setiap kanvas ikon persegi tanpa meregang atau memipihkan merek Anda. Ruang kosong di atas/bawah atau kiri/kanan diisi dengan transparansi atau warna latar yang Anda pilih.',
      },
      {
        question: 'Mengapa generator menampilkan pratinjau tab browser terang dan gelap?',
        answer:
          'Ikon gelap bisa menghilang dengan latar tab browser Mode Gelap, sementara logo putih menghilang pada tema browser terang. Melihat tab Situs Saya yang terang dan Tab Mode Gelap berdampingan memungkinkan Anda menambahkan padding atau pil latar solid sebelum diterapkan.',
      },
      {
        question: 'Bagaimana Padding dan Radius Sudut bekerja bersama pada ikon aplikasi?',
        answer:
          'Padding (0% hingga 25%) mengecilkan logo Anda sedikit ke dalam dari batas persegi agar sudut membulat tidak memotong tepi grafis. Menaikkan Radius Sudut ke arah 20% menciptakan squircle gaya iOS, sementara 50% memotong seluruh ikon menjadi lingkaran penuh.',
      },
      {
        question: 'Haruskah Ikon Apple Touch menggunakan latar solid, bukan transparan?',
        answer:
          'Safari iOS sering menggabungkan area transparan apple-touch-icon.png ke hitam saat pengguna menyematkan situs ke Layar Utama. Jika logo Anda menggunakan bentuk gelap, hapus centang Transparan di bawah Isian Latar dan pilih putih atau warna merek Anda.',
      },
      {
        question: 'Apa saja isi file site.webmanifest yang dibuat?',
        answer:
          'JSON manifest mendeklarasikan jalur ke /android-chrome-192x192.png dan /android-chrome-512x512.png, mengatur display ke standalone, dan menyinkronkan theme_color dan background_color dengan Isian Latar yang Anda pilih. Anda bisa membukanya di editor teks apa pun untuk menyesuaikan nama situs Anda.',
      },
      {
        question: 'Di mana saya harus mengunggah file favicon yang dibuat di situs web saya?',
        answer:
          'Letakkan favicon.ico, semua ikon PNG yang dibuat, dan site.webmanifest di direktori publik root situs Anda agar URL seperti /favicon.ico dan /apple-touch-icon.png teratasi dengan rapi. Lalu tempel Snippet <head> HTML yang disalin ke dalam bagian <head> HTML utama Anda.',
      },
      {
        question: 'Bisakah saya mengunduh hanya favicon.ico atau apple-touch-icon.png tanpa ZIP?',
        answer:
          'Ya, setiap ukuran ikon muncul sebagai kartu pratinjaunya sendiri yang menampilkan dimensi dan ukuran byte yang tepat beserta tombol Unduh khusus. Anda bisa mengambil aset satu per satu atau mengklik Unduh Semua (ZIP) untuk paket lengkap.',
      },
      {
        question: 'Apakah mengunggah logo SVG menghasilkan ikon 16×16 yang tajam?',
        answer:
          'Ya, vektor SVG inline dirasterisasi langsung di dalam browser ke setiap grid piksel target dari 16×16 hingga 512×512. Pastikan SVG Anda menggunakan bentuk dan warna yang disematkan, bukan gambar tertaut eksternal atau font web jarak jauh.',
      },
      {
        question: 'Bisakah saya mengubah foto HEIC iPhone atau grafis WebP menjadi favicon situs?',
        answer:
          'Ya, dropzone upload menerima file PNG, SVG, JPG, WebP, GIF, BMP, dan HEIC/HEIF iPhone hingga 20 MB. Gambar HEIC didekode secara lokal di browser Anda sebelum paket ikon dibuat.',
      },
      {
        question: 'Apakah logo merek atau ikon aplikasi yang belum dirilis dikirim ke server eksternal?',
        answer:
          'Tidak, pengubahan ukuran Canvas, pengemasan ICO biner, pembuatan manifest, dan pengarsipan ZIP berjalan sepenuhnya di dalam tab browser Anda sendiri. Merek Anda yang belum dirilis tidak pernah melintasi jaringan apa pun.',
      },
      {
        question: 'Mengapa favicon lama saya masih muncul di Chrome setelah mengunggah file baru?',
        answer:
          'Browser menyimpan cache favicon secara agresif selama berhari-hari, bahkan setelah Anda mengganti file di server. Refresh keras dengan Ctrl+Shift+R (atau membuka jendela Incognito) memaksa browser Anda mengambil favicon.ico dan ikon PNG yang baru.',
      },
      {
        question: 'Apakah perubahan pada Padding, Radius Sudut, atau Isian Latar memperbarui semua ukuran sekaligus?',
        answer:
          'Ya, menggerakkan slider apa pun atau mengganti Isian Latar langsung membangun ulang favicon.ico, keenam dimensi ikon PNG, pratinjau tab terang/gelap, dan site.webmanifest bersama-sama. Anda tidak perlu mengunggah ulang logo di antara penyesuaian.',
      },
      {
        question: 'Apakah Snippet <head> HTML bekerja dengan React, Next.js, atau situs HTML biasa?',
        answer:
          'Ya, tag standar <link rel="icon">, <link rel="apple-touch-icon">, dan <link rel="manifest"> bekerja di situs HTML statis, header WordPress, index.html Vite/React, dan template server. Cukup tempel di dalam <head> dan letakkan file-file di root web Anda.',
      },
      {
        question: 'Bisakah saya membuat favicon melingkar dari avatar atau lencana persegi?',
        answer:
          'Ya, biarkan Transparan dicentang di bawah Isian Latar dan seret Radius Sudut hingga 50%. Semua ikon PNG dan frame favicon.ico yang disematkan terpotong dengan rapi menjadi lingkaran halus anti-alias.',
      },
      {
        question: 'Mengapa 192×192 dan 512×512 diperlukan di samping favicon.ico?',
        answer:
          'Chrome Android modern dan prompt instal Progressive Web App mencari ikon layar utama 192×192 dan ikon splash 512×512 yang dideklarasikan di site.webmanifest. Menyertakan keduanya memastikan pintasan seluler tampak tajam di samping tab browser desktop klasik.',
      },
      {
        question: 'Bisakah saya menempel grafis logo langsung dari clipboard ke tool favicon?',
        answer:
          'Ya, salin gambar atau screenshot ke clipboard Anda dan tekan Ctrl+V (atau Cmd+V di Mac) pada halaman. Gambar langsung masuk ke generator dan merender set ikon lengkap.',
      },
      {
        question: 'Apakah ada watermark, persyaratan akun, atau biaya untuk membuat paket favicon?',
        answer:
          'Tidak, pembuat favicon 100% gratis untuk situs web pribadi dan komersial tanpa watermark, akun, atau batas build harian. Hanya batas file sumber 20 MB yang berlaku agar memori browser tetap cepat.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: 'Pemilih Warna Gambar',
    shortDescription: 'Ambil warna piksel tepat dari gambar apa pun dalam HEX, RGB, HSL & CMYK.',
    category: 'developer',
    seoTitle: 'Pemilih Warna Gambar – Ambil Kode HEX, RGB & HSL',
    seoDescription:
      'Ambil warna piksel secara akurat dengan pemilih warna gambar online. Periksa nilai HEX, RGB, HSL, dan CMYK dengan loupe piksel live dan ekspor CSS lokal.',
    h1: 'Pemilih Warna Gambar Online Gratis',
    subtitle:
      'Dibuat untuk desainer web, developer frontend, penata merek, dan ilustrator, pemilih warna gambar browser ini mengambil sampel piksel RGBA yang tepat dari foto, logo, atau screenshot apa pun. Arahkan kursor untuk memeriksa loupe 11×11 yang diperbesar dengan pembacaan HEX live, klik piksel untuk menyimpan swatch, dan ekspor properti kustom CSS tanpa mengunggah file Anda.',
    howToSteps: [
      {
        title: 'Unggah gambar atau tempel screenshot',
        description:
          'Letakkan file JPG, PNG, WebP, HEIC, SVG, BMP, atau GIF hingga 20 MB, atau tekan Ctrl+V untuk menempel screenshot langsung dari clipboard Anda.',
      },
      {
        title: 'Arahkan kursor dengan loupe Inspektor Piksel live',
        description:
          'Gerakkan kursor Anda di atas kanvas gambar untuk melihat koordinat piksel (x, y) yang tepat dan grid crosshair zoom 11×11 yang memperbarui swatch secara real time.',
      },
      {
        title: 'Klik piksel untuk menyematkan dan membuat swatch',
        description:
          'Klik titik mana pun pada kanvas untuk mengunci warnanya ke Inspektor Piksel dan menambahkannya ke Swatch yang Dipilih (hingga 24 warna unik).',
      },
      {
        title: 'Salin nilai HEX, RGB, HSL, atau CMYK',
        description:
          'Klik ikon salin di samping HEX, RGB, HSL, atau CMYK di Inspektor Piksel — atau klik pil swatch yang tersimpan — untuk langsung menyalin kode.',
      },
      {
        title: 'Ekspor palet Anda sebagai variabel CSS',
        description:
          'Klik Ekspor CSS di kartu Swatch yang Dipilih untuk mengunduh picked-colors.css dengan properti kustom :root yang rapi dan siap untuk stylesheet Anda.',
      },
    ],
    features: [
      {
        title: 'Loupe Piksel yang Diperbesar Secara Live',
        description:
          'Grid crosshair yang diperbesar memungkinkan Anda menargetkan piksel yang tepat secara akurat di mouse desktop maupun layar sentuh seluler.',
      },
      {
        title: '4 Format Warna Sekaligus',
        description:
          'Menampilkan representasi HEX, RGB, HSL, dan CMYK secara bersamaan untuk pengembang web dan desainer grafis.',
      },
      {
        title: 'Riwayat Swatch Tersimpan & Ekspor',
        description:
          'Klik beberapa area gambar Anda untuk membuat daftar swatch kustom dan salin sebagai properti kustom CSS atau JSON.',
      },
      {
        title: '100% Pengambilan Sampel Canvas Lokal',
        description:
          'Nilai piksel dibaca secara lokal lewat HTML5 Canvas getImageData — desain dan screenshot Anda tetap sepenuhnya privat.',
      },
    ],
    faqs: [
      {
        question: 'Apakah pemilih warna gambar ini mengambil sampel dari file resolusi penuh atau pratinjau yang diperkecil?',
        answer:
          'Setiap hover dan klik memetakan koordinat pointer secara proporsional ke Canvas HTML5 offscreen resolusi penuh yang sesuai dengan naturalWidth × naturalHeight sebenarnya dari gambar Anda. Sekalipun foto 4K besar diperkecil secara visual agar muat di layar, getImageData membaca piksel dasar yang tepat.',
      },
      {
        question: 'Bagaimana loupe 11×11 yang diperbesar membantu menargetkan garis tipis atau ikon kecil?',
        answer:
          'Bergerak melintasi kanvas memperbarui loupe zoom nearest-neighbor 88×88 yang menampilkan grid piksel 11×11 di sekitar kursor Anda dengan crosshair bergaris ganda pada piksel aktif yang tepat. Hal itu mencegah pengambilan sampel piksel tepi anti-alias yang tidak disengaja di samping tepi yang tajam.',
      },
      {
        question: 'Format kode warna apa saja yang dihitung otomatis untuk setiap piksel yang dipilih?',
        answer:
          'Inspektor Piksel mengonversi triplet RGB yang diambil sampelnya secara bersamaan menjadi HEX huruf besar (#RRGGBB), CSS rgb(r, g, b), CSS hsl(h, s%, l%), dan nilai CMYK persentase. Setiap baris memiliki tombol salin sekali klik sendiri.',
      },
      {
        question: 'Berapa banyak warna yang bisa saya kumpulkan di Swatch yang Dipilih sekaligus?',
        answer:
          'Mengklik bagian berbeda dari foto Anda menyimpan hingga 24 swatch HEX unik dalam urutan kronologis (melewatkan duplikat secara otomatis). Mengklik pil swatch yang tersimpan akan memulihkannya di inspector dan menyalin kode HEX-nya langsung ke clipboard Anda.',
      },
      {
        question: 'Apa yang diunduh tombol Ekspor CSS?',
        answer:
          'Mengklik Ekspor CSS membuat stylesheet picked-colors.css yang berisi blok :root dengan properti kustom bernomor (--color-1, --color-2, dst.) dan komentar RGB inline untuk setiap warna di Swatch yang Dipilih. Jika Anda belum mengklik beberapa piksel, tool mengekspor piksel Anda yang sedang dipilih.',
      },
      {
        question: 'Mengapa sebuah warna sudah ditampilkan tepat saat gambar dimuat?',
        answer:
          'Saat dimuat pertama kali, inspector otomatis mengambil sampel piksel tengah yang tepat dari gambar yang Anda unggah sehingga Anda langsung melihat pembacaan HEX, RGB, HSL, dan CMYK live sebelum menggerakkan mouse. Menggerakkan atau mengklik di mana saja langsung memperbarui pembacaan itu.',
      },
      {
        question: 'Bisakah saya menempel screenshot langsung dengan Ctrl+V untuk mengambil sampel warna UI?',
        answer:
          'Ya, salin potongan halaman web, UI aplikasi, atau mockup desain ke clipboard Anda dan tekan Ctrl+V (atau Cmd+V di Mac) saat area unggah terbuka. Gambar langsung dimuat ke kanvas pengambilan sampel tanpa menyimpan file sementara terlebih dahulu.',
      },
      {
        question: 'Jenis file apa saja yang bisa saya periksa dengan tool eyedropper ini?',
        answer:
          'Anda bisa memuat gambar JPG, PNG, WebP, HEIC/HEIF iPhone, SVG, BMP, dan GIF hingga 20 MB per file. SVG vektor dirasterisasi dengan rapi ke Canvas sehingga Anda bisa mengambil sampel warna isian yang dirender secara tepat langsung.',
      },
      {
        question: 'Seberapa akurat nilai CMYK yang ditampilkan di Inspektor Piksel?',
        answer:
          'Persentase CMYK dihitung secara matematis dari nilai piksel sRGB menggunakan rumus konversi RGB-ke-CMYK standar. Untuk pencetakan offset komersial yang membutuhkan profil press ICC yang ketat, anggap nilai itu sebagai perkiraan awal yang membantu, bukan bukti tinta yang terkalibrasi.',
      },
      {
        question: 'Apa yang terjadi jika saya mengambil sampel area transparan pada logo PNG?',
        answer:
          'HTML5 Canvas membaca kanal merah, hijau, dan biru pada koordinat itu — piksel Canvas yang sepenuhnya transparan default ke 0, 0, 0 (#000000) saat kanal RGB kosong. Ambil sampel langsung di atas goresan atau bentuk yang opaque untuk memeriksa warna karya Anda yang sebenarnya.',
      },
      {
        question: 'Apakah mockup UI privat atau aset merek klien diunggah ke server mana pun?',
        answer:
          'Tidak, pembacaan piksel lewat Canvas getImageData berjalan sepenuhnya di memori browser lokal Anda. Desain yang belum dirilis, screenshot rahasia, dan foto pribadi tidak pernah meninggalkan komputer atau ponsel Anda.',
      },
      {
        question: 'Apakah pemilih warna bekerja di Chrome, Safari, dan Firefox tanpa ekstensi browser?',
        answer:
          'Ya, berbeda dengan API EyeDropper browser eksperimental yang hanya bekerja di Chromium desktop, sampler HTML5 Canvas kami berjalan di Firefox, Safari, Edge, dan Chrome. Tidak diperlukan ekstensi browser, izin khusus, atau plugin.',
      },
      {
        question: 'Bagaimana cara beralih ke foto lain setelah memilih swatch?',
        answer:
          'Klik tombol Gambar Baru di sudut kanan atas header kanvas kapan saja. Tindakan itu menghapus gambar aktif, mereset daftar Swatch yang Dipilih dengan bersih, dan mengembalikan Anda ke zona unggah.',
      },
      {
        question: 'Bisakah saya memeriksa koordinat piksel yang tepat di samping nilai warna?',
        answer:
          'Ya, header Inspektor Piksel menampilkan koordinat x dan y live (misalnya, x:412, y:198) dalam huruf monospace saat Anda mengarahkan kursor ke kanvas. Hal itu membantu Anda mencocokkan piksel tertentu secara konsisten di seluruh aset besar.',
      },
      {
        question: 'Mengapa mengklik warna di dalam foto JPEG sedikit berbeda antar piksel yang berdekatan?',
        answer:
          'Kompresi JPEG menggunakan subsampling chroma dan transformasi blok yang menimbulkan sedikit variasi piksel-ke-piksel di permukaan yang datar. Menggunakan loupe 11×11 memungkinkan Anda memilih piksel representatif yang bersih jauh dari tepi yang terkompresi.',
      },
      {
        question: 'Bisakah saya mengetuk warna secara akurat di iPad atau layar sentuh ponsel?',
        answer:
          'Ya, mengetuk area mana pun pada kanvas di seluler memicu sampler di lokasi ketukan Anda, menyematkan swatch, memperbarui keempat format warna, dan menambahkan kode HEX ke Swatch yang Dipilih. Anda juga bisa mengetuk pil swatch yang tersimpan untuk menyalinnya.',
      },
      {
        question: 'Apakah tool ini mengganti swatch tersimpan saya jika saya mengklik warna hex yang sama dua kali?',
        answer:
          'Tidak, Swatch yang Dipilih memeriksa string HEX yang cocok secara otomatis dan mengabaikan duplikat. Hal itu menjaga palet yang Anda kumpulkan tetap rapi sekalipun Anda mengambil sampel latar atau warna merek yang sama berkali-kali.',
      },
      {
        question: 'Mengapa menggunakan HSL di samping HEX dan RGB saat menata situs web?',
        answer:
          'HSL (Hue, Saturation, Lightness) memudahkan developer CSS menurunkan state hover yang lebih terang atau border yang lebih gelap hanya dengan menyesuaikan persentase lightness sambil menjaga hue tetap. Memiliki HEX dan HSL berdampingan menghemat konversi manual.',
      },
      {
        question: 'Berapa ukuran file gambar maksimum yang diizinkan di pemilih warna?',
        answer:
          'Gambar individual yang diunggah bisa berukuran hingga 20 MB. Batas itu dengan mudah menangani foto kamera bermegapiksel tinggi, ekspor PNG Figma yang besar, dan screenshot satu halaman penuh.',
      },
      {
        question: 'Apakah ada biaya, akun, atau batas jumlah warna yang bisa saya ambil sampelnya?',
        answer:
          'Tidak, pemilih warna gambar sepenuhnya gratis tanpa akun atau paywall. Anda bisa mengunggah gambar tanpa batas dan mengekspor palet warna CSS tanpa watermark.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },
  {
    slug: '/image-dimensions-checker',
    name: 'Pemeriksa Dimensi Gambar',
    shortDescription: 'Periksa lebar, tinggi, rasio aspek, megapiksel & ukuran cetak.',
    category: 'developer',
    seoTitle: 'Pemeriksa Dimensi Gambar – Ukuran Piksel & Rasio Aspek',
    seoDescription:
      'Gunakan pemeriksa dimensi gambar gratis ini untuk memeriksa lebar piksel, tinggi, rasio aspek, megapiksel, alpha, dan ukuran cetak 300 DPI langsung di browser.',
    h1: 'Pemeriksa Dimensi Gambar & Alat Rasio',
    subtitle:
      'Ideal untuk manajer e-commerce, pembeli iklan, pengembang UI, dan desainer cetak, pemeriksa dimensi gambar kami membaca lebar piksel, tinggi, rasio aspek, megapiksel, dan ukuran cetak 300 DPI dalam hitungan detik. Letakkan seluruh batch aset, validasi persyaratan piksel minimum, dan ekspor laporan CSV atau JSON yang rapi secara privat di perangkat Anda.',
    howToSteps: [
      {
        title: 'Letakkan atau pilih satu atau beberapa gambar',
        description:
          'Unggah file JPG, PNG, WebP, HEIC, SVG, BMP, GIF, atau AVIF hingga 20 MB per file ke zona letak, atau tempel dengan Ctrl+V.',
      },
      {
        title: 'Periksa dimensi piksel dan rasio aspek',
        description:
          'Tinjau Lebar × Tinggi (px) yang tepat, Megapiksel, Orientasi (Lanskap, Potret, Persegi), dan Rasio Aspek yang disederhanakan/desimal di tabel.',
      },
      {
        title: 'Verifikasi bobot file, format, dan kanal Alpha',
        description:
          'Periksa nilai kolom Ukuran / Format untuk melihat tipe kontainer yang benar-benar terdeteksi, jumlah byte, dan apakah ada piksel Alpha transparan.',
      },
      {
        title: 'Periksa perkiraan ukuran cetak 300 DPI',
        description:
          'Lihat kolom Cetak @300 DPI untuk mengetahui dimensi cetak fisik maksimum yang tetap tajam dalam inci (L" × T") sebelum mengunggah ke percetakan.',
      },
      {
        title: 'Jalankan pemeriksaan spesifikasi minimum dan ekspor CSV atau JSON',
        description:
          'Masukkan aturan opsional Periksa Lebar Min (px) dan Periksa Tinggi Min (px) untuk menandai Lolos atau Di Bawah Min, lalu klik Ekspor CSV atau Ekspor JSON.',
      },
    ],
    features: [
      {
        title: 'Pemeriksaan Dimensi Batch',
        description:
          'Periksa puluhan aset sekaligus — ideal untuk memverifikasi gambar produk toko, materi iklan, atau tangkapan layar aplikasi.',
      },
      {
        title: 'Rasio Aspek Eksak & Umum',
        description:
          'Menghitung rasio yang disederhanakan secara matematis sekaligus mencocokkan standar umum seperti 16:9, 4:3, 1:1, dan 4:5.',
      },
      {
        title: 'Validator Min/Maks Kustom',
        description:
          'Atur aturan lebar/tinggi minimum atau maksimum opsional untuk langsung menyorot gambar yang lolos atau gagal sesuai spesifikasi Anda.',
      },
      {
        title: 'Ekspor CSV & JSON',
        description:
          'Unduh spreadsheet CSV yang rapi atau ringkasan JSON dari semua dimensi gambar yang diperiksa.',
      },
    ],
    faqs: [
      {
        question: 'Apakah pemeriksa dimensi gambar ini mengubah atau menyimpan ulang gambar saya?',
        answer:
          'Tidak, pemeriksa ini hanya membaca dimensi piksel alami, byte file, dan properti kontainer di memori browser. Tidak ada yang dikompres, dipotong, ditimpa, atau diunggah ke server eksternal.',
      },
      {
        question: 'Format file gambar apa saja yang bisa saya periksa sekaligus?',
        answer:
          'Anda bisa meletakkan gambar JPG, PNG, WebP, HEIC/HEIF iPhone, SVG, BMP, GIF, dan AVIF yang didukung browser hingga 20 MB per file. Format yang berbeda bisa dicampur dalam satu tabel batch.',
      },
      {
        question: 'Bagaimana cara kerja validator Periksa Lebar Min dan Periksa Tinggi Min?',
        answer:
          'Mengetik ambang piksel di Periksa Lebar Min (px) atau Periksa Tinggi Min (px) akan menambahkan kolom Periksa Spesifikasi langsung di tabel. Setiap baris langsung menampilkan lencana hijau Lolos atau peringatan kuning Di Bawah Min sehingga materi yang terlalu kecil cepat terlihat.',
      },
      {
        question: 'Bagaimana rasio aspek umum seperti 16:9 atau 4:5 dicocokkan dengan rasio eksak?',
        answer:
          'Pertama, kalkulator menghitung rasio lebar:tinggi yang disederhanakan secara matematis lewat pembagi persekutuan terbesar beserta rasio desimalnya (misalnya, 1,78:1). Jika gambar cocok atau sangat dekat dengan rasio bingkai standar seperti 16:9, 4:3, 3:2, 1:1, 4:5, atau 9:16, label yang mudah dikenali itu langsung ditampilkan.',
      },
      {
        question: 'Bagaimana dimensi Cetak @300 DPI dihitung dari piksel?',
        answer:
          'Lebar dan tinggi cetak dalam inci dihitung dengan membagi lebar dan tinggi piksel dengan 300 piksel per inci (misalnya, 3000 × 2400 px sama dengan 10,0" × 8,0" pada 300 DPI). JSON yang diekspor juga menyimpan padanan cetak skala layar 72 DPI.',
      },
      {
        question: 'Kolom apa saja yang disertakan saat saya mengklik Ekspor CSV?',
        answer:
          'Mengklik Ekspor CSV akan mengunduh image-dimensions-report.csv dengan sepuluh kolom terstruktur: Nama File, Lebar (px), Tinggi (px), Orientasi, Rasio Aspek, Megapiksel, Ukuran File (Byte), Format, Transparansi, dan Ukuran Cetak @300DPI. Nama file yang mengandung koma atau tanda kutip akan di-escape dengan benar untuk CSV.',
      },
      {
        question: 'Apa yang disimpan Ekspor JSON dibandingkan dengan CSV?',
        answer:
          'Ekspor JSON menulis array image-dimensions-report.json yang diformat berisi objek metadata rapi untuk setiap baris yang diperiksa (tanpa URL pratinjau internal dan ID baris sementara). Pengembang dan skrip QA bisa langsung memasukkannya ke pemeriksaan aset otomatis.',
      },
      {
        question: 'Bagaimana pemeriksa mendeteksi apakah PNG atau WebP benar-benar memiliki transparansi Alpha?',
        answer:
          'Alih-alih menebak dari ekstensi file, pemuat memindai byte alpha piksel di Canvas untuk memastikan apakah ada piksel dengan opasitas di bawah 255. Gambar dengan area transparan asli akan menampilkan tag Alpha tepat di bawah formatnya.',
      },
      {
        question: 'Bisakah saya menambahkan folder atau batch lain ke tabel dimensi yang sudah ada?',
        answer:
          'Ya, meletakkan atau memilih gambar lagi akan menambahkan baris baru di bagian bawah tabel tanpa menghapus entri sebelumnya. Klik Bersihkan kapan saja untuk mengatur ulang tabel bagi proyek baru.',
      },
      {
        question: 'Mengapa foto iPhone menampilkan Lanskap vs Potret secara akurat di sini?',
        answer:
          'Browser modern menormalisasi rotasi EXIF kamera secara otomatis saat mendekode gambar JPEG dan HEIC ke dimensi alaminya. Itu menjamin foto ponsel vertikal dilaporkan sebagai orientasi Potret dengan batas piksel tinggi yang benar.',
      },
      {
        question: 'Bagaimana megapiksel (MP) dihitung untuk gambar saya?',
        answer:
          'Megapiksel sama dengan (Lebar × Tinggi) dibagi 1.000.000, dibulatkan ke dua desimal (misalnya, 1920 × 1080 = 2,07 MP). Itu sesuai dengan pelaporan standar sensor kamera dan marketplace cetak.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah file dengan ekstensi yang menyesatkan, seperti WebP bernama .jpg?',
        answer:
          'Pemeriksa kami membaca tipe biner yang terdeteksi saat dekode, bukan sekadar mempercayai akhiran nama file. Anda akan melihat format asli yang terdeteksi beserta bobot byte yang tepat di kolom Ukuran / Format.',
      },
      {
        question: 'Bisakah saya memeriksa dimensi intrinsik grafik SVG juga?',
        answer:
          'Ya, file SVG mandiri dengan atribut lebar/tinggi atau viewBox didekode secara native di dalam browser. Tabel dimensi membaca lebar piksel, tinggi piksel, dan rasio aspek hasil rendernya dengan rapi.',
      },
      {
        question: 'Apakah materi iklan yang belum dirilis atau foto produk rahasia dikirim online?',
        answer:
          'Tidak pernah — semua dekode gambar, deteksi transparansi, pemeriksaan spesifikasi, dan pembuatan CSV/JSON berjalan di dalam tab browser Anda sendiri. Nol byte meninggalkan perangkat Anda.',
      },
      {
        question: 'Bisakah saya menempel gambar clipboard langsung untuk memeriksa resolusi pikselnya?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V di Mac) untuk menambahkan tangkapan layar atau grafik yang disalin langsung ke tabel dimensi. Anda bisa langsung membaca ukuran piksel, jumlah megapiksel, dan rasio aspeknya yang tepat.',
      },
      {
        question: 'Mengapa gambar produk Amazon, Etsy, atau Shopify bisa gagal Periksa Lebar Min?',
        answer:
          'Banyak marketplace mensyaratkan minimal 1000 px atau 1200 px pada sisi terpendek atau terpanjang untuk mengaktifkan pratinjau zoom. Memasukkan 1200 ke Periksa Lebar Min memungkinkan Anda mengaudit seluruh katalog produk sebelum mengunggah.',
      },
      {
        question: 'Apa yang terjadi jika satu file yang tidak bisa dibaca tercampur dalam batch besar?',
        answer:
          'Jika sebuah file melebihi batas 20 MB atau gagal didekode browser, UploadZone akan menandai atau melewati item yang tidak valid itu. Setiap gambar valid dalam peletakan yang sama tetap terisi normal di tabel dimensi Anda.',
      },
      {
        question: 'Bisakah saya menggunakan pemeriksa dimensi ini di ponsel atau tablet?',
        answer:
          'Ya, buka alat ini di Safari iOS atau Chrome Android, pilih foto dari galeri, dan periksa dimensi piksel serta ukuran megapiksel yang tepat saat bepergian. Tabel bisa digeser horizontal di layar sempit sehingga tidak ada kolom yang terpotong.',
      },
      {
        question: 'Bagaimana cara memperbaiki gambar yang gagal pemeriksaan spesifikasi minimum atau rasio aspeknya salah?',
        answer:
          'Klik kartu Ubah Ukuran Gambar atau Pemotong Gambar yang tertaut di Alat Gambar Gratis Terkait di bawah panduan. Anda bisa memotong ke rasio 16:9, 4:5, atau 1:1 yang tepat atau mengubah skala dimensi langsung di browser.',
      },
      {
        question: 'Apakah ada batas harian atau biaya untuk laporan dimensi batch?',
        answer:
          'Tidak, memeriksa batch gambar tanpa batas hingga 20 MB per file sepenuhnya gratis. Anda bisa mengunduh laporan CSV dan JSON sesering yang dibutuhkan tanpa akun atau watermark.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/image-cropper',
    name: 'Pemotong Gambar',
    shortDescription: 'Potong foto secara interaktif dengan gagang seret, rasio aspek & zoom.',
    category: 'crop-edit',
    seoTitle: 'Pemotong Gambar Online Gratis – Potong Foto & Atur Rasio',
    seoDescription:
      'Pemotong gambar di browser dengan gagang seret, preset aspek 1:1 hingga 16:9, dan zoom 300%. Potong JPG, PNG, WebP, dan HEIC secara lokal tanpa unggahan.',
    h1: 'Pemotong Gambar Online Gratis',
    subtitle:
      'Dibuat untuk kreator sosial, desainer, pelajar, dan penjual e-commerce, pemotong gambar interaktif kami memungkinkan Anda membingkai dan memangkas foto secara akurat langsung di browser. Kunci rasio populer dari 1:1 hingga 16:9, zoom hingga 300% untuk tepi yang rapat, dan ekspor potongan yang rapi secara lokal tanpa unggahan.',
    howToSteps: [
      {
        title: 'Unggah gambar untuk dipotong',
        description:
          'Letakkan gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB ke zona letak, telusuri dari perangkat Anda, atau tempel dengan Ctrl+V.',
      },
      {
        title: 'Pilih preset rasio aspek',
        description:
          'Pertahankan Bebas untuk pemangkasan tanpa batasan atau klik 1:1, 4:3, 16:9, 3:2, 4:5, atau 9:16 di bawah Preset Rasio Aspek untuk mengunci pembingkaian.',
      },
      {
        title: 'Seret bingkai dan gagang pengubah ukuran',
        description:
          'Pindahkan kotak potong ke subjek Anda memakai grid rule-of-thirds dan tarik salah satu dari 8 gagang tepi atau sudut sambil melihat Lebar Potongan dan Tinggi Potongan secara langsung.',
      },
      {
        title: 'Zoom atau atur ulang seluruh kanvas',
        description:
          'Gunakan tombol Zoom (100% hingga 300% dengan langkah 25%) untuk penjajaran tepi yang presisi, atau klik Pilih Semua untuk kembali ke seluruh gambar.',
      },
      {
        title: 'Pilih format keluaran dan kualitas',
        description:
          'Pilih keluaran Asli, JPG, PNG, atau WebP, dan sesuaikan slider Kualitas (10% hingga 100%) saat menyimpan format lossy.',
      },
      {
        title: 'Potong dan unduh file Anda',
        description:
          'Klik Potong & Unduh untuk me-render persegi panjang yang dipilih pada resolusi sumber penuh dan menyimpannya dengan dimensi di nama file.',
      },
    ],
    features: [
      {
        title: 'Gagang Seret & Ubah Ukuran Interaktif',
        description:
          'Gagang pointer mouse dan sentuh yang halus memungkinkan Anda memotong area apa pun hingga ke piksel yang tepat.',
      },
      {
        title: 'Preset Rasio Aspek',
        description:
          'Beralih antara Bebas, 1:1 Persegi, 4:3, 16:9, 3:2, 4:5 Instagram, dan 9:16 Story.',
      },
      {
        title: 'Zoom & Pembacaan Dimensi Langsung',
        description:
          'Zoom untuk pembingkaian yang rapat dan lihat lebar × tinggi keluaran yang tepat secara real time.',
      },
      {
        title: 'Pemrosesan Lokal 100% Privat',
        description:
          'Foto Anda dipotong di perangkat Anda lewat HTML5 Canvas tanpa unggahan server.',
      },
    ],
    faqs: [
      {
        question: 'Apakah memotong mengurangi kualitas di dalam persegi panjang yang dipilih?',
        answer:
          'Tidak, pemotong gambar mengambil koordinat yang Anda pilih langsung dari resolusi asli penuh yang tersimpan di memori browser, bukan dari kotak pratinjau yang diperkecil. Saat menyimpan sebagai PNG lossless, piksel di dalam potongan Anda tetap identik dengan sumbernya.',
      },
      {
        question: 'Preset rasio aspek apa saja yang tersedia di opsi potong?',
        answer:
          'Anda bisa beralih antara Bebas (persegi panjang apa pun), 1:1 (avatar persegi), 4:3, 16:9 (layar lebar/YouTube), 3:2 (standar DSLR), 4:5 (potret Instagram), dan 9:16 (Stories/Reels). Mengklik preset akan memusatkan bingkai yang sesuai secara otomatis.',
      },
      {
        question: 'Bagaimana perilaku 8 gagang pengubah ukuran saat preset rasio aspek aktif?',
        answer:
          'Keempat gagang sudut dan gagang tepi mempertahankan proporsi yang Anda pilih secara otomatis sambil tetap berada rapi di dalam batas gambar. Untuk menyesuaikan lebar dan tinggi secara terpisah lagi, cukup klik preset Bebas.',
      },
      {
        question: 'Untuk apa grid rule-of-thirds di dalam kotak pilihan?',
        answer:
          'Grid 3×3 yang halus membagi bingkai potong Anda menjadi tiga bagian sehingga Anda bisa menyejajarkan horizon, mata, atau pusat produk secara akurat saat menyeret. Grid ini murni panduan visual di layar dan tidak pernah muncul di gambar yang diekspor.',
      },
      {
        question: 'Seberapa jauh saya bisa zoom untuk pembingkaian detail?',
        answer:
          'Gunakan tombol Zoom In (+) dan Zoom Out (-) di bilah viewport untuk zoom dengan halus dari 100% hingga 300% dengan langkah 25%. Saat zoom melewati 100%, gulir di dalam panggung pratinjau untuk memangkas tepi yang halus.',
      },
      {
        question: 'Apa fungsi tombol Pilih Semua di Opsi Potong?',
        answer:
          'Mengklik Pilih Semua akan mengembalikan Rasio Aspek ke Bebas, memperluas kotak potong hingga menutupi 100% lebar dan tinggi gambar Anda, dan mengatur ulang Zoom ke 100%. Ini memberi titik awal yang bersih tanpa mengunggah ulang.',
      },
      {
        question: 'Bisakah saya melihat dimensi piksel keluaran yang tepat sebelum mengunduh?',
        answer:
          'Ya, pembacaan Pilihan di atas panggung maupun kartu Lebar Potongan / Tinggi Potongan di Opsi Potong diperbarui langsung dalam piksel saat Anda menyeret. Nama file yang diekspor juga menyertakan dimensi potongan yang tepat itu (misalnya, foto_1080x1080_dipotong.jpg).',
      },
      {
        question: 'Apakah memotong berfungsi dengan gestur jari di ponsel dan tablet?',
        answer:
          'Ya, kotak potong dan gagangnya memakai Pointer events yang aman untuk sentuhan dan dirancang untuk mouse desktop maupun layar sentuh ponsel. Anda bisa menyeret bingkai dan menarik gagang dengan nyaman di iOS dan Android.',
      },
      {
        question: 'Apakah memotong mempertahankan latar transparan pada PNG dan WebP?',
        answer:
          'Ya, mempertahankan format Asli (dari PNG/WebP) atau memilih PNG atau WebP akan menjaga transparansi alpha penuh di dalam area yang dipotong. Memilih JPG akan meratakan piksel transparan ke putih solid.',
      },
      {
        question: 'Mengapa slider Kualitas menghilang saat PNG dipilih?',
        answer:
          'PNG memakai kompresi lossless, sehingga pengaturan kualitas persentase lossy tidak berlaku. Alihkan Format Keluaran ke Asli (untuk JPEG), JPG, atau WebP untuk menampilkan slider Kualitas 10%–100%.',
      },
      {
        question: 'Bisakah saya memotong beberapa gambar berbeda sekaligus?',
        answer:
          'Pemotong interaktif ini menangani satu gambar dalam satu waktu agar Anda bisa memeriksa dan membingkai setiap subjek secara individual dengan gagang seret dan zoom. Setelah diunduh, klik ikon tempat sampah untuk segera memuat foto berikutnya.',
      },
      {
        question: 'Format file apa saja yang bisa diunggah ke pemotong?',
        answer:
          'Anda bisa memotong gambar JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB per file. Perlu dicatat, GIF animasi akan memotong frame awalnya sebagai keluaran statis.',
      },
      {
        question: 'Apakah potret privat atau KTP diunggah ke server saat dipotong?',
        answer:
          'Tidak, seluruh penggambaran kanvas dan pengodean blob berjalan secara lokal di dalam browser web Anda. Tidak ada yang dikirim lewat jaringan atau disimpan secara eksternal.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar langsung dari clipboard untuk memangkasnya?',
        answer:
          'Ya, ambil tangkapan layar lalu tekan Ctrl+V (atau Cmd+V di Mac) di halaman saat belum ada gambar yang dimuat. Tangkapan itu langsung terbuka di dalam viewport potong dan siap dibingkai.',
      },
      {
        question: 'Bagaimana cara memotong foto persegi panjang menjadi avatar profil persegi yang rapi?',
        answer:
          'Klik tombol 1:1 di bawah Preset Rasio Aspek, seret persegi putih ke wajah atau logo, dan sesuaikan gagang sudut hingga puas. Lalu klik Potong & Unduh untuk menyimpan gambar persegi yang tepat.',
      },
      {
        question: 'Pengaturan kualitas apa yang dipakai secara default saat mengekspor potongan JPG atau WebP?',
        answer:
          'Kualitas default adalah 92% sehingga JPEG dan WebP yang dipotong tetap mempertahankan tekstur fotografi yang tajam tanpa bobot file yang membengkak. Geser ke 75%–85% jika Anda juga menginginkan ukuran unggahan yang lebih kecil.',
      },
      {
        question: 'Apakah memotong juga menghapus data lokasi GPS EXIF yang tertanam?',
        answer:
          'Ya, mengekspor area yang dipotong lewat HTML5 Canvas yang baru akan membuat bitmap bersih tanpa tag EXIF atau GPS JPEG asli. Itu membantu melindungi lokasi dan privasi perangkat Anda saat membagikan foto yang dipangkas.',
      },
      {
        question: 'Mengapa panggung menggelapkan semua yang berada di luar kotak pilihan saya?',
        answer:
          'Lapisan gelap semi-transparan meredupkan area yang akan dipangkas. Kontras visual itu membantu Anda menilai komposisi dan keseimbangan rule-of-thirds dengan jelas sebelum mengklik Potong & Unduh.',
      },
      {
        question: 'Bisakah saya mengganti foto saat ini dengan cepat setelah mengunduh potongan?',
        answer:
          'Ya, klik ikon tempat sampah merah di sudut kanan atas header viewport potong kapan saja. Itu akan menghapus foto aktif dan kembali dengan rapi ke zona unggah untuk gambar berikutnya.',
      },
      {
        question: 'Apakah ada biaya, pendaftaran, atau watermark pada ekspor yang dipotong?',
        answer:
          'Tidak, pemotong gambar sepenuhnya gratis tanpa akun atau paywall. Setiap foto yang dipotong diekspor dengan rapi pada resolusi penuh tanpa watermark tambahan.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: 'Watermark Gambar',
    shortDescription: 'Tambahkan watermark teks atau logo kustom, seret atau ubin di foto.',
    category: 'crop-edit',
    seoTitle: 'Tambah Watermark Gambar Gratis – Teks & Logo Kustom',
    seoDescription:
      'Lindungi foto dengan watermark gambar di browser. Tambahkan teks kustom atau logo PNG/SVG transparan, seret atau ubin diagonal, lalu ekspor dengan aman.',
    h1: 'Alat Watermark Gambar Online Gratis',
    subtitle:
      'Dirancang untuk fotografer, ilustrator, penjual Etsy, dan agensi digital, alat browser privat ini menambahkan watermark teks atau logo gambar yang tajam tanpa unggahan server. Seret tanda Anda dengan bebas di kanvas, jepret ke 9 preset jangkar, atau ulangi pola miring di seluruh foto.',
    howToSteps: [
      {
        title: 'Unggah foto dasar Anda',
        description:
          'Letakkan gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB ke zona letak, telusuri dari disk, atau tempel dengan Ctrl+V.',
      },
      {
        title: 'Pilih Watermark Teks atau Logo Gambar',
        description:
          'Pilih Watermark Teks untuk mengetik teks merek kustom, memilih warna, dan menyesuaikan Ukuran (2%–20%), atau pilih Logo Gambar untuk mengunggah logo PNG atau SVG transparan (lebar 5%–60%).',
      },
      {
        title: 'Sesuaikan Opasitas dan Rotasi',
        description:
          'Atur Opasitas dari 5% yang halus hingga 100% yang solid, dan miringkan Rotasi dari -180° hingga +180° secara real time.',
      },
      {
        title: 'Posisikan bebas atau aktifkan Pola Ulang Ubin',
        description:
          'Seret watermark Anda langsung pada gambar pratinjau, klik Preset Jangkar 9 titik (dari kiri atas hingga kanan bawah), atau aktifkan Pola Ulang Ubin dan sesuaikan Jarak Ubin (15%–60%).',
      },
      {
        title: 'Pilih format keluaran dan kualitas',
        description:
          'Pilih keluaran Asli, JPG, PNG, atau WebP, dan atur Kualitas (10%–100%) saat menyimpan format lossy.',
      },
      {
        title: 'Unduh gambar ber-watermark Anda',
        description:
          'Klik Unduh Gambar Ber-watermark untuk menggabungkan overlay pada resolusi asli penuh gambar dan menyimpannya sebagai <name>_watermarked.',
      },
    ],
    features: [
      {
        title: 'Watermark Teks & Logo',
        description:
          'Gunakan tipografi kustom yang tajam atau unggah logo merek PNG/SVG transparan Anda.',
      },
      {
        title: 'Seret untuk Memosisikan + 9 Preset Jangkar',
        description:
          'Tempatkan tanda Anda di sudut mana pun, tepat di tengah, atau seret dengan bebas di kanvas.',
      },
      {
        title: 'Perlindungan Ubin Diagonal',
        description:
          'Aktifkan Watermark Ubin untuk mengulang teks atau logo Anda di seluruh foto dengan jarak yang bisa disesuaikan.',
      },
      {
        title: 'Privasi Sisi Klien',
        description:
          'Beri watermark pada proof dan foto portofolio secara lokal tanpa mengirim aslinya ke server eksternal.',
      },
    ],
    faqs: [
      {
        question: 'Bisakah saya memakai teks kustom sekaligus logo transparan saya sendiri sebagai watermark gambar?',
        answer:
          'Ya, beralihlah antara Watermark Teks dan Logo Gambar di bagian atas panel kontrol. Mode teks mendukung frasa kustom, warna hex, dan penskalaan ukuran, sementara mode logo menerima file logo PNG, SVG, atau format lain yang didukung.',
      },
      {
        question: 'Bagaimana Pola Ulang Ubin melindungi proof klien lebih baik daripada satu stempel sudut?',
        answer:
          'Satu tanda sudut mudah dipotong, sedangkan mengaktifkan Pola Ulang Ubin akan mencap teks atau logo Anda yang diputar dalam grid berselang-seling di seluruh bingkai. Gunakan slider Jarak Ubin (15% hingga 60%) untuk mengatur kerapatan grid.',
      },
      {
        question: 'Mengapa Preset Jangkar disembunyikan saat Pola Ulang Ubin diaktifkan?',
        answer:
          'Preset Jangkar dan seret-untuk-memosisikan berlaku untuk menempatkan satu watermark pada koordinat tertentu (kiri atas, tengah atas, kanan atas, tengah kiri, tengah, tengah kanan, kiri bawah, tengah bawah, kanan bawah). Matikan Pola Ulang Ubin kapan saja jika Anda ingin menyeret atau menjepret satu stempel.',
      },
      {
        question: 'Bagaimana ukuran teks dihitung pada thumbnail kecil vs foto kamera besar?',
        answer:
          'Ukuran Font (2% hingga 20%) dan Lebar Logo (5% hingga 60%) berskala proporsional relatif terhadap lebar gambar Anda. Itu memastikan watermark Anda tampak konsisten baik pada thumbnail produk 800 px maupun proof resolusi tinggi 4000 px.',
      },
      {
        question: 'Apakah kanvas pratinjau menurunkan kualitas keluaran yang saya unduh?',
        answer:
          'Tidak, pratinjau interaktif menyesuaikan hingga lebar 900 px murni agar penyeretan di layar Anda nyaman. Saat Anda mengklik Unduh Gambar Ber-watermark, pengekspor membangun kanvas resolusi penuh yang sesuai dengan dimensi piksel tepat foto asli Anda.',
      },
      {
        question: 'Bisakah saya membuat teks watermark putih tetap terbaca di latar terang?',
        answer:
          'Ya, Watermark Teks secara otomatis me-render bayangan jatuh gelap yang halus di belakang huruf Anda. Itu membuat watermark putih atau berwarna terang tetap tajam dan terbaca di langit cerah, latar produk putih, dan highlight.',
      },
      {
        question: 'Rentang opasitas dan rotasi apa yang paling cocok untuk perlindungan proof yang tidak mencolok?',
        answer:
          'Untuk branding sudut yang halus, coba Opasitas 40%–65% pada rotasi 0° yang dijangkarkan ke Kanan Bawah. Untuk perlindungan proof stok yang kuat, gunakan Pola Ulang Ubin pada Opasitas 25%–40% dengan sudut diagonal -25° atau -35°.',
      },
      {
        question: 'Bagaimana cara menyeret satu watermark ke tempat kustom yang tepat?',
        answer:
          'Dengan Pola Ulang Ubin tidak dicentang, klik atau tekan langsung di mana saja pada kanvas pratinjau lalu seret pointer Anda. Watermark akan mengikuti dengan halus dan menempel sedikit di dalam tepi sehingga tidak pernah terpotong.',
      },
      {
        question: 'Format gambar apa saja yang didukung untuk foto dasar dan logo yang diunggah?',
        answer:
          'Baik foto utama maupun unggahan logo mendukung JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB. Perlu dicatat, GIF animasi di-render sebagai satu frame statis ber-watermark.',
      },
      {
        question: 'Apakah ekspor mempertahankan transparansi jika gambar dasar saya adalah PNG transparan?',
        answer:
          'Ya, memilih Asli (dari PNG/WebP), PNG, atau WebP akan mempertahankan transparansi alpha penuh di luar karya Anda sambil menggabungkan watermark di atasnya. Memilih JPG akan mengisi area transparan dengan putih solid.',
      },
      {
        question: 'Apakah proof asli tanpa watermark pernah diunggah ke server eksternal?',
        answer:
          'Tidak, menjaga proof klien tanpa watermark tetap privat sangatlah penting. Setiap gabungan kanvas, pass ubin, dan ekspor gambar akhir berjalan ketat di dalam memori browser lokal Anda tanpa unggahan jaringan.',
      },
      {
        question: 'Bisakah saya mengunggah foto dasar baru tanpa kehilangan pengaturan teks, opasitas, atau sudut saya?',
        answer:
          'Ya, klik Ganti Gambar di header pratinjau kapan saja Anda ingin mencap foto lain. Teks watermark, logo yang diunggah, opasitas, sudut rotasi, dan tata letak ubin Anda saat ini tetap terkonfigurasi secara otomatis.',
      },
      {
        question: 'Bisakah saya mengganti logo merek yang diunggah nanti tanpa memuat ulang alat?',
        answer:
          'Ya, saat mode Logo Gambar dipilih, klik Ganti Logo Gambar untuk memilih file PNG atau SVG lain kapan saja. Foto dasar Anda yang ada langsung diperbarui.',
      },
      {
        question: 'Mengapa Kualitas menghilang saat keluaran PNG dipilih?',
        answer:
          'Keluaran PNG adalah bitmap lossless, sehingga kualitas kompresi persentase tidak berlaku. Beralihlah ke Asli (untuk sumber JPEG), JPG, atau WebP untuk menyesuaikan slider Kualitas antara 10% dan 100%.',
      },
      {
        question: 'Bisakah saya menempel foto langsung dari clipboard untuk diberi watermark?',
        answer:
          'Ya, salin gambar atau tangkapan layar lalu tekan Ctrl+V (atau Cmd+V di Mac) saat zona unggah terbuka. Gambar itu langsung dimuat ke editor watermark.',
      },
      {
        question: 'Apakah watermark diratakan secara permanen ke dalam file yang diunduh?',
        answer:
          'Ya, watermark dilukis langsung ke bitmap keluaran dan disimpan sebagai JPG, PNG, atau WebP yang diratakan (<name>_watermarked). Tidak ada layer yang bisa diedit tersisa di dalam gambar yang diekspor.',
      },
      {
        question: 'Apa yang terjadi jika saya mengosongkan kolom input Teks Watermark?',
        answer:
          'Jika Anda mengosongkan kolom Teks Watermark sepenuhnya, renderer sementara menampilkan "Watermark" di kanvas pratinjau. Itu mencegah pilihan kosong yang tak terlihat saat Anda mengetik label baru.',
      },
      {
        question: 'Bisakah saya memosisikan dan mengekspor foto ber-watermark di ponsel atau iPad?',
        answer:
          'Ya, penyeretan di kanvas pratinjau memakai Pointer events yang ramah sentuhan beserta slider responsif. Anda bisa dengan mudah mencap foto portofolio atau proof langsung di Safari atau Chrome ponsel.',
      },
      {
        question: 'Apakah pemberian watermark menghapus tag GPS EXIF kamera saat mengekspor?',
        answer:
          'Ya, me-render ke HTML5 Canvas yang baru akan membuat file keluaran bersih tanpa menyalin header EXIF kamera. Lokasi GPS dan metadata perangkat Anda tetap tidak disertakan dalam proof yang diunduh.',
      },
      {
        question: 'Apakah CompressMyPic menambahkan lencana tambahan di samping watermark saya sendiri?',
        answer:
          'Tidak, hanya teks atau logo persis yang Anda konfigurasikan yang digambar ke foto Anda. Kami tidak pernah menambahkan branding eksternal, lencana sudut, atau watermark situs ke ekspor Anda.',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: 'Buram & Pixelasi Gambar',
    shortDescription: 'Buramkan atau pixelasi seluruh foto atau hanya area sensitif dengan kuas.',
    category: 'crop-edit',
    seoTitle: 'Buram & Pixelasi Gambar Gratis – Sensor Wajah & Teks Online',
    seoDescription:
      'Buramkan atau pixelasi area gambar online dengan kuas sensor halus atau mode seluruh bingkai. Sembunyikan wajah, pelat nomor, dan teks privat di browser.',
    h1: 'Buram & Pixelasi Gambar Online',
    subtitle:
      'Dibuat untuk jurnalis, guru, penjual marketplace, dan pengguna privasi sehari-hari, alat browser ini memungkinkan Anda memburamkan atau mempixelasi detail gambar secara permanen sebelum dibagikan online. Lukis secara selektif di atas wajah, pelat nomor, atau alamat dengan kuas sensor interaktif, atau terapkan blur halus dan pixelasi ke seluruh bingkai secara lokal.',
    howToSteps: [
      {
        title: 'Unggah foto atau tangkapan layar',
        description:
          'Letakkan gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG apa pun hingga 20 MB ke zona letak, atau tempel langsung dengan Ctrl+V.',
      },
      {
        title: 'Pilih Area Kuas atau Seluruh Gambar',
        description:
          'Pertahankan Area Kuas untuk menyensor hanya area yang dilukis seperti wajah dan angka, atau beralih ke Seluruh Gambar untuk memburamkan atau mempixelasi seluruh bingkai.',
      },
      {
        title: 'Pilih Mosaik Pixelasi atau Blur Halus',
        description:
          'Beralih antara ubin Mosaik Pixelasi yang kotak-kotak atau Blur Halus tergantung gaya yang Anda inginkan.',
      },
      {
        title: 'Atur kekuatan dan Ukuran Kuas',
        description:
          'Sesuaikan Ukuran Blok Mosaik (4–60 px) atau Radius Blur (2–50 px), dan atur Ukuran Kuas (2%–20%) saat melukis secara selektif.',
      },
      {
        title: 'Lukis di atas detail sensitif',
        description:
          'Klik dan seret langsung di atas wajah, pelat nomor, atau teks privat pada kanvas pratinjau; klik Urungkan atau Atur Ulang Kuas kapan saja.',
      },
      {
        title: 'Pilih format dan unduh',
        description:
          'Pilih keluaran Asli, JPG, PNG, atau WebP, atur Kualitas (10%–100%) untuk format lossy, dan klik Unduh Gambar untuk menyimpan secara lokal.',
      },
    ],
    features: [
      {
        title: 'Kuas Sensor Interaktif',
        description:
          'Lukis di atas wajah, alamat, atau pelat nomor dengan ukuran kuas yang bisa disesuaikan dan urungkan per goresan.',
      },
      {
        title: 'Blur & Mosaik Seluruh Gambar',
        description:
          'Buramkan latar dengan cepat atau buat efek mosaik pixel-art retro di seluruh bingkai.',
      },
      {
        title: 'Tanpa Unggahan Server',
        description:
          'Karena Anda menyembunyikan detail sensitif, tidak ada yang pernah meninggalkan perangkat Anda.',
      },
      {
        title: 'Ekspor Resolusi Penuh',
        description:
          'Koordinat kuas dipetakan secara akurat ke piksel asli penuh gambar untuk ekspor yang tajam.',
      },
    ],
    faqs: [
      {
        question: 'Bisakah area yang diburamkan atau dipixelasi dibatalkan atau dikembalikan dari file yang diunduh?',
        answer:
          'Tidak, ekspor meratakan goresan Anda langsung menjadi satu bitmap raster datar (JPG, PNG, atau WebP) tanpa layer tersembunyi atau riwayat urungkan di dalam gambar. Setelah diunduh, piksel tajam asli di balik masker sensor hilang secara permanen.',
      },
      {
        question: 'Mengapa Mosaik Pixelasi sering lebih aman daripada Blur Halus yang ringan untuk menyembunyikan teks?',
        answer:
          'Ukuran Blok Mosaik yang agresif (20 px hingga 60 px) menggabungkan karakter menjadi kotak warna solid besar, menghancurkan garis huruf halus sepenuhnya. Radius blur yang sangat kecil terkadang masih menyisakan bentuk kata yang bisa ditebak, sehingga Radius Blur yang lebih tinggi atau Mosaik Pixelasi memberi redaksi yang lebih kuat.',
      },
      {
        question: 'Bagaimana mode Area Kuas menjaga area tajam di luar goresan saya tetap utuh?',
        answer:
          'Dalam mode Area Kuas, gambar dasar Anda digambar dengan ketajaman penuh sementara setiap goresan yang dilukis bertindak sebagai masker alpha offscreen yang hanya menggabungkan area yang diburamkan atau dipixelasi di atasnya. Bagian foto yang tidak dilukis tetap sepenuhnya tajam.',
      },
      {
        question: 'Bisakah saya mencampur goresan pixelasi dan goresan blur pada gambar yang sama?',
        answer:
          'Ya, setiap goresan menyimpan Gaya Efek (Mosaik Pixelasi atau Blur Halus), kekuatan, dan radius kuas yang aktif saat Anda melukisnya. Anda bisa mempixelasi pelat nomor dulu, beralih ke Blur Halus, lalu menguas wajah latar pada foto yang sama.',
      },
      {
        question: 'Apakah melukis pada pratinjau yang diperkecil dipetakan secara akurat ke foto kamera besar?',
        answer:
          'Ya, semua koordinat pointer disimpan dalam rasio ternormalisasi 0-ke-1 beserta penskalaan kuas dan efek yang proporsional. Saat Anda mengklik Unduh Gambar, gabungan di-render ke kanvas resolusi penuh yang sesuai dengan dimensi sumber Anda.',
      },
      {
        question: 'Bagaimana cara memperbaiki kesalahan saat melukis di atas wajah atau alamat?',
        answer:
          'Klik tombol Urungkan di atas kanvas pratinjau untuk menghapus hanya goresan terbaru Anda tanpa menghapus redaksi sebelumnya. Jika ingin memulai dari bersih, klik Atur Ulang Kuas untuk menghapus semua goresan sekaligus.',
      },
      {
        question: 'Apa yang dilakukan saat Area Target diubah ke Seluruh Gambar?',
        answer:
          'Seluruh Gambar menerapkan radius Blur Halus atau ukuran blok Mosaik Pixelasi aktif Anda secara merata ke setiap piksel dari tepi ke tepi. Ini berguna untuk membuat pelat latar yang lembut, backdrop hero, atau tekstur pixel-art retro tanpa melukis.',
      },
      {
        question: 'Apakah foto tanpa sensor yang berisi wajah, KTP, atau alamat privat dikirim ke server mana pun?',
        answer:
          'Tidak pernah — mengunggah gambar sensitif yang belum disensor ke server jarak jauh akan membahayakan privasi bahkan sebelum Anda menyembunyikan apa pun. Setiap masker kanvas, pass blur, dan unduhan akhir berjalan ketat di dalam browser Anda.',
      },
      {
        question: 'Seberapa besar saya harus mengatur Ukuran Kuas dan Ukuran Blok Mosaik untuk tangkapan layar kecil?',
        answer:
          'Untuk tangkapan layar chat atau ponsel, Ukuran Kuas 4%–8% menargetkan satu baris teks atau nama pengguna dengan rapi tanpa mengotori pesan di dekatnya. Mengatur Ukuran Blok Mosaik sekitar 12–24 px biasanya mengaburkan teks kecil dengan baik.',
      },
      {
        question: 'Format file gambar apa saja yang bisa saya buramkan atau pixelasi di sini?',
        answer:
          'Anda bisa mengunggah gambar JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB per file. Perlu dicatat, GIF animasi multi-frame akan menyensor dan mengekspor frame pembukanya sebagai file statis.',
      },
      {
        question: 'Bisakah saya menyensor bagian sensitif dari tangkapan layar yang ditempel dengan Ctrl+V?',
        answer:
          'Ya, ambil tangkapan layar ke clipboard lalu tekan Ctrl+V (atau Cmd+V di Mac) saat zona letak unggahan terlihat. Tangkapan itu langsung terbuka dalam mode Area Kuas dan siap disensor lalu disimpan.',
      },
      {
        question: 'Apakah ekspor mempertahankan latar transparan pada grafik PNG atau WebP?',
        answer:
          'Ya, mempertahankan Asli (untuk PNG/WebP) atau memilih PNG atau WebP akan menjaga transparansi alpha di sekitar stiker non-persegi panjang atau potongan UI. Memilih JPG akan mengekspor gambar JPEG yang buram.',
      },
      {
        question: 'Mengapa tombol Urungkan dan Atur Ulang Kuas hanya terlihat dalam mode Area Kuas?',
        answer:
          'Tombol-tombol itu mengelola goresan kuas yang dilukis satu per satu, sehingga otomatis disembunyikan saat Anda beralih ke mode Seluruh Gambar. Beralih kembali ke Area Kuas akan memulihkan goresan tersimpan Anda tepat di tempat Anda meninggalkannya.',
      },
      {
        question: 'Bisakah saya memakai jari atau Apple Pencil di ponsel atau tablet untuk melukis goresan sensor?',
        answer:
          'Ya, kanvas memakai Pointer events touch-none yang khusus dibuat untuk layar sentuh ponsel dan stylus. Anda bisa menyeret goresan sensor di atas wajah atau teks dengan halus tanpa menggulir halaman secara tidak sengaja.',
      },
      {
        question: 'Apakah penyensoran dan ekspor juga menghapus tag GPS EXIF kamera?',
        answer:
          'Ya, me-render gabungan yang disensor lewat HTML5 Canvas yang baru akan menghilangkan header EXIF JPEG asli dan koordinat GPS secara otomatis. Itu melindungi detail visual sekaligus metadata file tersembunyi.',
      },
      {
        question: 'Mengapa Kualitas disembunyikan saat saya memilih keluaran PNG?',
        answer:
          'PNG memakai kompresi piksel lossless, sehingga persentase kualitas lossy tidak berlaku. Pilih Asli (saat mengedit JPEG), JPG, atau WebP jika Anda ingin mengatur slider Kualitas 10%–100%.',
      },
      {
        question: 'Nama file apa yang dipakai saat saya menyimpan foto yang diburamkan atau dipixelasi?',
        answer:
          'Pengunduh mempertahankan nama file dasar Anda yang sudah dibersihkan dan menambahkan _blur atau _pixelate berdasarkan Gaya Efek aktif Anda. Itu memudahkan Anda mengatur ekspor yang disensor (seperti struk_pixelate.png) dengan rapi di samping aslinya.',
      },
      {
        question: 'Bagaimana jika saya ingin memburamkan seluruh latar potret dengan rapi tanpa melukis?',
        answer:
          'Gunakan mode Seluruh Gambar saat Anda menginginkan pelembutan latar yang seragam di balik grafik overlay atau kartu UI. Untuk mengisolasi subjek pada latar yang bersih, padukan dengan alat Penghapus Latar kami.',
      },
      {
        question: 'Seberapa kuat Blur Halus dan Mosaik Pixelasi bisa diatur?',
        answer:
          'Radius Blur berkisar dari penghalusan halus 2 px hingga blur berat 50 px bergaya Gaussian. Ukuran Blok Mosaik membentang dari ubin halus 4 px hingga blok besar 60 px yang diskalakan proporsional dengan resolusi sumber Anda.',
      },
      {
        question: 'Apakah ada watermark, batas harian, atau pendaftaran untuk menyensor foto?',
        answer:
          'Tidak, Anda bisa memburamkan atau mempixelasi foto hingga 20 MB per file tanpa watermark atau pendaftaran. Semua pemrosesan lokal tetap sepenuhnya gratis untuk ekspor tanpa batas.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: 'Tambah Teks ke Gambar',
    shortDescription: 'Tambahkan overlay teks bergaya yang bisa diseret dengan font, outline & bayangan.',
    category: 'crop-edit',
    seoTitle: 'Tambah Teks ke Gambar Gratis – Font, Outline & Seret Layer',
    seoDescription:
      'Tambahkan teks ke gambar gratis di editor browser kami dengan layer yang bisa diseret, 5 font, tebal/miring, outline, bayangan, dan rotasi—tanpa watermark.',
    h1: 'Tambah Teks ke Gambar Online',
    subtitle:
      'Dibuat untuk kreator konten, manajer media sosial, guru, dan pembuat meme, alat privat ini memudahkan Anda menambahkan teks ke file gambar tanpa aplikasi desain yang berat. Lapisi beberapa headline atau caption multi-baris, sesuaikan font, outline, bayangan, dan rotasi, lalu ekspor dengan rapi tanpa watermark.',
    howToSteps: [
      {
        title: 'Unggah gambar atau tempel dari clipboard',
        description:
          'Letakkan foto JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB ke zona letak, atau tempel langsung dengan Ctrl+V.',
      },
      {
        title: 'Ketik teks multi-baris dan kelola layer',
        description:
          'Edit salinan Anda di dalam Konten Teks (Enter menambah jeda baris) dan klik Tambah untuk menumpuk layer tambahan seperti Teks 1, Teks 2, atau menghapus yang tidak diinginkan.',
      },
      {
        title: 'Pilih font, warna isi, Tebal, dan Miring',
        description:
          'Pilih di antara Inter, Impact, Georgia, Courier, atau Trebuchet, atur pemilih warna Isi teks Anda, dan aktifkan gaya Tebal atau Miring.',
      },
      {
        title: 'Sesuaikan Ukuran, Rotasi, Outline, dan Bayangan',
        description:
          'Geser Ukuran (2%–22%) dan Rotasi (-180° hingga +180°), lalu sesuaikan warna dan lebar Outline Teks (1–10) plus Bayangan Jatuh opsional.',
      },
      {
        title: 'Seret layer langsung pada gambar',
        description:
          'Klik dan seret blok teks apa pun langsung pada kanvas pratinjau untuk memosisikan headline, caption meme, atau callout tangkapan layar secara presisi.',
      },
      {
        title: 'Pilih format keluaran dan unduh',
        description:
          'Pilih keluaran Asli, JPG, PNG, atau WebP, atur Kualitas (10%–100%) untuk file lossy, dan klik Unduh Gambar dengan Teks.',
      },
    ],
    features: [
      {
        title: 'Beberapa Layer Teks yang Bisa Diseret',
        description:
          'Tambahkan headline, caption, dan callout lalu seret masing-masing secara terpisah di kanvas.',
      },
      {
        title: 'Kontrol Tipografi yang Kaya',
        description:
          'Pilih font, ukuran, ketebalan tebal/miring, warna, outline stroke, dan bayangan jatuh.',
      },
      {
        title: 'Kontrol Sudut & Penjajaran',
        description:
          'Putar layer teks apa pun dengan halus dari -180° hingga +180°.',
      },
      {
        title: 'Ekspor Resolusi Penuh yang Bersih',
        description:
          'Tanpa watermark tambahan — unduh langsung dalam JPG, PNG, atau WebP.',
      },
    ],
    faqs: [
      {
        question: 'Bisakah saya menambahkan beberapa headline terpisah atau caption meme atas-dan-bawah?',
        answer:
          'Ya, klik tombol Tambah di samping tab Teks 1 untuk membuat Teks 2, Teks 3, dan layer teks independen sebanyak yang Anda butuhkan. Setiap layer menyimpan font, warna, ukuran, rotasi, outline, dan posisi seretnya sendiri pada gambar.',
      },
      {
        question: 'Font apa saja yang tersedia di editor Tambah Teks ke Gambar?',
        answer:
          'Anda bisa beralih langsung di antara lima keluarga yang andal dan cocok dengan sistem: Inter / Sans Bersih, Impact / Tampilan Meme, Georgia / Serif Klasik, Courier / Monospace, dan Trebuchet / Sans Membulat. Kelimanya bekerja andal secara offline tanpa menunggu unduhan font eksternal.',
      },
      {
        question: 'Bagaimana cara membuat teks meme putih klasik dengan bingkai gelap yang tebal?',
        answer:
          'Pilih Impact / Tampilan Meme, biarkan Tebal aktif dan Isi diatur ke putih (#ffffff), dan pertahankan Outline Teks dicentang dengan warna outline gelap seperti #0f172a atau hitam. Seret slider ketebalan outline ke arah 6–10 untuk kontras yang tak salah lagi.',
      },
      {
        question: 'Apakah menekan Enter di dalam Konten Teks membuat caption multi-baris?',
        answer:
          'Ya, Konten Teks mendukung jeda baris multi-baris penuh yang dipusatkan rapi dengan pengali line-height 1,22. Itu membuat penumpukan kutipan multi-baris, callout tutorial, atau caption panjang mudah tanpa membuat layer terpisah per baris.',
      },
      {
        question: 'Bagaimana cara memilih dan memindahkan satu layer tertentu saat saya punya beberapa di foto?',
        answer:
          'Klik tab layer (Teks 1, Teks 2, dst.) di panel kanan untuk beralih kontrol tipografi aktif. Anda juga bisa mengklik langsung di dekat blok teks mana pun di kanvas — editor akan mengambil layer yang paling dekat dengan pointer Anda.',
      },
      {
        question: 'Bisakah saya memiringkan teks secara diagonal pada sudut kustom?',
        answer:
          'Ya, seret slider Rotasi ke mana saja antara -180° dan +180° untuk setiap layer teks aktif. Setiap blok berputar halus di sekitar koordinat tengahnya untuk stempel miring, callout, atau caption yang playful.',
      },
      {
        question: 'Bagaimana Ukuran teks (2%–22%) berskala pada foto kecil vs 4K?',
        answer:
          'Ukuran font berskala sebagai persentase dari lebar gambar keluaran Anda (dengan batas minimum 12 px). Itu menjaga proporsi tetap konsisten antara pratinjau di layar dan file ekspor resolusi penuh.',
      },
      {
        question: 'Apakah tangkapan layar atau foto keluarga diunggah ke mana pun saat menambahkan caption?',
        answer:
          'Tidak, komposisi Canvas me-render setiap glyph font, stroke, bayangan, dan rotasi secara lokal di dalam tab browser Anda. Gambar dasar dan grafik jadi Anda tidak pernah meninggalkan perangkat Anda.',
      },
      {
        question: 'Apa yang terjadi pada stiker PNG transparan jika saya mengekspor dengan teks yang ditambahkan?',
        answer:
          'Memilih Asli (dari PNG/WebP), PNG, atau WebP akan mempertahankan area transparan di sekitar grafik Anda dengan rapi. Jika Anda memilih keluaran JPG, area transparan akan diratakan halus ke latar putih solid.',
      },
      {
        question: 'Bagaimana cara menghapus layer teks tambahan tanpa menghapus seluruh gambar?',
        answer:
          'Pilih tab layer yang ingin dibuang lalu klik ikon tempat sampah di samping tombol Tambah. Saat hanya tersisa satu layer, mengosongkan kotak teksnya akan menyembunyikannya sementara tanpa kehilangan editor.',
      },
      {
        question: 'Bisakah saya mengganti foto latar tanpa kehilangan layer teks yang sudah diberi gaya?',
        answer:
          'Klik Ganti Gambar di header pratinjau untuk kembali ke zona letak dan memuat file lain. Layer teks dan gaya Anda yang ada tetap siap sehingga Anda bisa memakai ulang pengaturan caption yang sama di berbagai foto.',
      },
      {
        question: 'Format file gambar apa saja yang bisa saya buka untuk menambahkan teks?',
        answer:
          'Editor membuka file JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB per file. GIF animasi diekspor sebagai satu frame statis ber-caption.',
      },
      {
        question: 'Bisakah saya menyeret dan meletakkan layer teks memakai layar sentuh ponsel?',
        answer:
          'Ya, penyeretan kanvas mengandalkan Pointer events touch-none yang dirancang untuk jari dan stylus. Anda bisa memosisikan ulang caption dengan rapi di Safari iOS dan Chrome Android tanpa menggulir halaman.',
      },
      {
        question: 'Bagaimana Bayangan Jatuh meningkatkan keterbacaan di samping Outline Teks?',
        answer:
          'Bayangan Jatuh melemparkan blur gelap yang lembut dengan skala proporsional terhadap ukuran font Anda di bawah huruf. Mengaktifkan Bayangan Jatuh tanpa outline menghasilkan subtitle editorial yang bersih, sementara memadukan keduanya memaksimalkan keterbacaan di atas tekstur yang ramai.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar lewat Ctrl+V untuk menganotasinya dengan cepat?',
        answer:
          'Ya, salin tangkapan layar atau slide apa pun lalu tekan Ctrl+V (atau Cmd+V di Mac) di halaman sebelum memuat file. Tangkapan itu langsung dimuat ke kanvas dan siap diberi callout teks serta diekspor dengan rapi.',
      },
      {
        question: 'Mengapa slider Kualitas tidak muncul saat saya memilih PNG?',
        answer:
          'PNG mengode gambar secara lossless tanpa slider persentase kualitas kompresi. Pilih Asli (untuk JPEG), JPG, atau WebP jika Anda ingin menyesuaikan Kualitas ekspor dari 10% hingga 100%.',
      },
      {
        question: 'Apakah menambahkan teks lewat Canvas menghapus tag GPS EXIF kamera yang tersembunyi?',
        answer:
          'Ya, menggambar ke HTML5 Canvas yang baru akan membuat bitmap baru tanpa menyalin header EXIF. Lokasi GPS dan metadata kamera Anda tetap terhapus dari ekspor yang disimpan.',
      },
      {
        question: 'Nama file apa yang disimpan saat mengunduh foto beranotasi?',
        answer:
          'File yang diunduh mempertahankan nama file dasar Anda yang sudah dibersihkan dan menambahkan _text plus ekstensi yang Anda pilih (seperti meme_text.jpg). Itu menghindari penimpaan gambar asli Anda yang belum beranotasi.',
      },
      {
        question: 'Apa bedanya alat ini dengan alat Watermark Gambar?',
        answer:
          'Watermark Gambar berfokus pada stempel merek tunggal atau ubin diagonal serta logo PNG/SVG yang diunggah. Tambah Teks ke Gambar justru menyediakan beberapa layer teks independen yang bisa diseret, 5 font, kontrol tebal/miring, dan stroke meme yang tebal.',
      },
      {
        question: 'Apakah CompressMyPic menaruh logo atau watermark apa pun pada gambar yang diekspor di sini?',
        answer:
          'Tidak, file yang Anda unduh hanya berisi gambar Anda dan layer teks persis yang Anda buat. Semuanya berjalan gratis di browser Anda tanpa watermark dan tanpa pendaftaran.',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: 'Generator Bingkai Gambar',
    shortDescription: 'Tambahkan bingkai solid atau gradien, bingkai foto, sudut membulat & bayangan.',
    category: 'crop-edit',
    seoTitle: 'Generator Bingkai Gambar Gratis – Solid, Gradien & Polaroid',
    seoDescription:
      'Bingkai foto cepat dengan generator bingkai gratis kami. Pakai bingkai solid, gradien linear, atau Polaroid, sudut membulat, dan bayangan lokal di browser.',
    h1: 'Generator Bingkai Gambar Gratis',
    subtitle:
      'Dibuat untuk fotografer, pemilik toko Etsy, desainer portofolio, dan kreator sosial, generator bingkai gambar gratis kami membungkus gambar apa pun dalam matte galeri yang tajam, gradien dua warna, atau bingkai Polaroid klasik. Atur ketebalan bingkai, radius sudut dalam dan luar, serta bayangan elevasi langsung di browser sebelum mengekspor.',
    howToSteps: [
      {
        title: 'Letakkan atau pilih gambar untuk dibingkai',
        description:
          'Unggah foto JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG apa pun hingga 20 MB, atau tempel dengan Ctrl+V.',
      },
      {
        title: 'Pilih Preset Bingkai Cepat atau Gaya Bingkai',
        description:
          'Klik preset Putih Klasik, Bingkai Polaroid, Studio Gelap, atau Cahaya Gradien, atau beralih manual antara gaya Solid, Gradien, dan Polaroid.',
      },
      {
        title: 'Sesuaikan warna bingkai dan sudut gradien',
        description:
          'Atur Warna Bingkai dalam mode Solid/Polaroid, atau pilih Warna Awal, Warna Akhir, dan Sudut Gradien (0°–360°) untuk bingkai gradien linear.',
      },
      {
        title: 'Sesuaikan Ukuran Bingkai dan radius sudut',
        description:
          'Geser Ukuran Bingkai (1%–25%) beserta slider Radius Bingkai (0%–30%) dan Radius Foto (0%–30%) yang independen.',
      },
      {
        title: 'Pilih Bayangan Jatuh dan format pratinjau',
        description:
          'Pilih Bayangan Jatuh tidak ada, lembut, sedang, atau dalam, lalu pilih keluaran PNG, JPG, atau WEBP sambil memeriksa pratinjau papan catur.',
      },
      {
        title: 'Unduh gambar berbingkai Anda',
        description:
          'Klik Unduh Gambar Berbingkai untuk me-render bingkai dan bayangan pada resolusi sumber penuh dan menyimpannya sebagai <name>_framed.',
      },
    ],
    features: [
      {
        title: 'Bingkai Solid & Gradien',
        description:
          'Buat matte galeri yang bersih atau bingkai gradien linear dua warna yang hidup.',
      },
      {
        title: 'Gaya Bingkai Preset',
        description:
          'Terapkan tampilan Polaroid, Putih Galeri, Studio Gelap, atau Gradien Senja secara instan.',
      },
      {
        title: 'Radius Sudut & Bayangan Jatuh',
        description:
          'Bulatkan sudut foto dalam atau bingkai luar dan tambahkan bayangan elevasi yang realistis.',
      },
      {
        title: 'Dukungan PNG Lossless',
        description:
          'Ekspor PNG untuk mempertahankan sudut luar transparan di sekitar bayangan dan bingkai membulat.',
      },
    ],
    faqs: [
      {
        question: 'Apa beda Gaya Bingkai Polaroid dengan bingkai Solid standar?',
        answer:
          'Bingkai solid membungkus padding seragam di keempat tepi foto Anda, sedangkan Polaroid menambahkan tinggi bingkai putih ekstra 3,2× di sepanjang tepi bawah untuk meniru cetakan film instan klasik. Mengklik preset Bingkai Polaroid akan mengonfigurasi proporsi yang bersih dalam satu klik.',
      },
      {
        question: 'Mengapa Bayangan Jatuh menghilang saat saya beralih format keluaran ke JPG?',
        answer:
          'File JPG tidak mendukung kanal transparansi alpha agar bayangan elevasi semi-transparan yang lembut bisa memudar rapi ke latar halaman. Renderer kami mempertahankan padding Bayangan Jatuh dalam ekspor PNG dan WebP transparan sambil menjaga tepi bingkai yang tajam pada JPG putih solid.',
      },
      {
        question: 'Apa beda Radius Bingkai dan Radius Foto?',
        answer:
          'Radius Bingkai (0%–30%) melengkungkan sudut luar bingkai berwarna itu sendiri, sementara Radius Foto (0%–30%) melengkungkan sudut dalam foto Anda di dalam matte tersebut. Memadukan atau mengontraskan keduanya memungkinkan Anda membangun kartu UI yang ramping atau matte galeri yang tajam.',
      },
      {
        question: 'Bagaimana bingkai Cahaya Gradien menghitung sudut dan warna?',
        answer:
          'Memilih gaya Gradien akan menampilkan Warna Awal, Warna Akhir, dan slider Sudut Gradien 0°–360° yang menggambar gradien linear diagonal atau terarah penuh di belakang foto Anda. Anda bisa mengklik Cahaya Gradien di bawah Preset Bingkai Cepat untuk gaya kartu biru-ke-hijau zamrud instan.',
      },
      {
        question: 'Apakah menambahkan bingkai memotong tepi foto asli saya?',
        answer:
          'Tidak, generator bingkai gambar memperluas kanvas ke luar di sekitar lebar dan tinggi gambar asli penuh Anda, bukan menutupi piksel Anda. Hanya pengaturan Radius Foto di atas 0% yang akan membulatkan keempat sudut dalam gambar dengan lembut.',
      },
      {
        question: 'Bagaimana Ukuran Bingkai (1%–25%) dihitung pada foto tinggi vs lebar?',
        answer:
          'Ketebalan bingkai dihitung sebagai persentase dari dimensi terpendek gambar Anda — min(lebar, tinggi). Itu menjaga margin atas, bawah, dan samping tetap seimbang pada banner 16:9 maupun potret 4:5.',
      },
      {
        question: 'Apa yang dikonfigurasi otomatis oleh keempat Preset Bingkai Cepat?',
        answer:
          'Putih Klasik mengatur matte galeri putih 10% dengan bayangan lembut, sementara Bingkai Polaroid menambahkan margin bawah cetakan instan. Studio Gelap menerapkan bingkai slate, dan Cahaya Gradien membuat bingkai gradien biru-ke-hijau zamrud 135°.',
      },
      {
        question: 'Mengapa pratinjau menampilkan papan catur abu-abu-putih di sekitar bingkai saya?',
        answer:
          'Papan catur itu memvisualisasikan piksel transparan asli di luar sudut bingkai yang membulat dan di dalam bayangan jatuh yang lembut. Saat diekspor sebagai PNG atau WebP, area papan catur itu tetap sepenuhnya tembus pandang di situs web atau slide presentasi mana pun.',
      },
      {
        question: 'Apakah pembingkaian berjalan lokal tanpa mengunggah foto saya?',
        answer:
          'Ya, pengecatan gradien, pemotongan sudut, rendering bayangan, dan ekspor Blob terjadi ketat di dalam HTML5 Canvas pada perangkat Anda. Tidak ada yang pernah diunggah ke server eksternal.',
      },
      {
        question: 'Format file gambar apa saja yang bisa dimuat ke generator bingkai?',
        answer:
          'Anda bisa meletakkan gambar JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB per file. GIF animasi diekspor sebagai frame pertama statis berbingkai.',
      },
      {
        question: 'Bisakah saya mengubah warna bingkai Preset Bingkai Cepat setelah mengkliknya?',
        answer:
          'Ya, preset hanya mengisi kontrol Gaya Bingkai, warna, radius, dan bayangan untuk Anda. Anda bisa langsung mengubah Warna Bingkai, mengubah ukuran margin, atau beralih Bayangan Jatuh setelahnya.',
      },
      {
        question: 'Bagaimana cara membuat bingkai galeri arang gelap atau pastel tanpa bayangan?',
        answer:
          'Pilih gaya Solid, klik Warna Bingkai untuk memilih sembarang nuansa hex kustom, dan seret Radius Bingkai maupun Radius Foto ke 0%. Lalu klik tidak ada di bawah Bayangan Jatuh untuk bingkai datar yang tajam.',
      },
      {
        question: 'Apakah gambar berbingkai yang saya unduh beresolusi penuh?',
        answer:
          'Ya, pratinjau di layar diperkecil murni agar pas dengan nyaman di dalam tata letak Anda. Mengklik Unduh Gambar Berbingkai akan membangun Canvas baru pada resolusi piksel tepat foto asli Anda ditambah bingkai dan bayangan yang diskalakan.',
      },
      {
        question: 'Sebaiknya saya mengekspor PNG atau WebP saat mempertahankan sudut bingkai membulat yang transparan?',
        answer:
          'Pilih PNG saat Anda menginginkan ketajaman lossless di sekitar bingkai tipis dan aset cetak. Pilih WebP untuk kartu situs web yang cepat dan ringan namun tetap mempertahankan sudut luar transparan dan bayangan elevasi.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar langsung dari clipboard untuk membungkusnya dalam bingkai kartu?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V di Mac) di zona unggah tepat setelah mengambil tangkapan layar. Memadukan bingkai membulat, bingkai gradien, dan Bayangan Jatuh sedang akan mengubah tangkapan layar mentah menjadi visual presentasi yang rapi.',
      },
      {
        question: 'Apakah menambahkan bingkai menghapus data GPS EXIF kamera yang tersembunyi?',
        answer:
          'Ya, penggabungan ke HTML5 Canvas akan membuat bitmap berbingkai yang bersih. Header EXIF kamera sumber dan koordinat GPS otomatis tidak disertakan dalam PNG, JPG, atau WebP yang Anda unduh.',
      },
      {
        question: 'Bagaimana cara memuat foto kedua saat menguji bingkai?',
        answer:
          'Klik Ganti Gambar di sudut kanan atas panel pratinjau untuk memilih foto lain. Semua warna bingkai, sudut gradien, radius sudut, dan pilihan bayangan aktif Anda tetap utuh.',
      },
      {
        question: 'Nama file apa yang dipakai gambar berbingkai saat disimpan?',
        answer:
          'Ekspor mempertahankan nama file asli Anda yang sudah dibersihkan dengan tambahan _framed sebelum .png, .jpg, atau .webp. Misalnya, file bernama potret.jpg akan tersimpan rapi sebagai potret_framed.png.',
      },
      {
        question: 'Apakah generator bingkai bekerja lancar di browser ponsel?',
        answer:
          'Ya, setiap kartu preset, slider rentang, dan pemilih warna bekerja rapi di Safari iOS dan Chrome Android. Anda bisa membingkai Polaroid atau foto produk langsung dari galeri ponsel Anda.',
      },
      {
        question: 'Apakah ada watermark, paywall, atau batas pendaftaran pada foto berbingkai?',
        answer:
          'Tidak, setiap foto berbingkai diunduh sepenuhnya tanpa watermark dan tanpa biaya. Hanya pemeriksaan standar 20 MB per file yang berlaku agar memori browser lokal tetap lancar.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: 'Bulatkan Sudut Gambar',
    shortDescription: 'Bulatkan sudut secara seragam atau per sudut dengan keluaran PNG transparan.',
    category: 'crop-edit',
    seoTitle: 'Bulatkan Sudut Gambar Gratis – Pemotong Sudut PNG Transparan',
    seoDescription:
      'Bulatkan sudut gambar online gratis dengan slider seragam atau per sudut, preset avatar lingkaran, dan ekspor PNG atau WebP transparan langsung di browser.',
    h1: 'Bulatkan Sudut Gambar Online',
    subtitle:
      'Dirancang untuk desainer UI, penulis newsletter, blogger, dan pengguna sosial yang membuat kartu atau avatar yang ramping, alat browser ini memungkinkan Anda membulatkan sudut gambar dengan rapi pada resolusi penuh. Lengkungkan keempat sudut secara seragam, aktifkan slider per sudut individual, atau jepret ke lingkaran penuh dengan keluaran PNG/WebP transparan.',
    howToSteps: [
      {
        title: 'Letakkan atau pilih gambar Anda',
        description:
          'Unggah foto JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB ke zona letak, atau tempel dengan Ctrl+V.',
      },
      {
        title: 'Sesuaikan Radius Semua Sudut atau klik Lingkaran Penuh / Pil',
        description:
          'Seret slider Radius Semua Sudut (0%–100%, menampilkan kelengkungan piksel yang tepat) atau klik Lingkaran Penuh / Pil untuk menjepret ke 100%.',
      },
      {
        title: 'Opsional aktifkan Kontrol Individual Per Sudut',
        description:
          'Aktifkan Kontrol Individual Per Sudut untuk memberi gaya pada sudut Kiri Atas, Kanan Atas, Kiri Bawah, dan Kanan Bawah secara independen.',
      },
      {
        title: 'Pilih isian luar Transparan atau Warna Solid',
        description:
          'Pertahankan Transparan (PNG/WebP) aktif untuk sudut membulat yang tembus pandang, atau beralih ke Warna Solid dan pilih sembarang latar hex.',
      },
      {
        title: 'Pilih format keluaran (PNG, WebP, atau JPG)',
        description:
          'Pilih PNG untuk tepi alpha lossless, WebP untuk aset web transparan yang lebih ringan, atau JPG untuk latar sudut solid yang buram.',
      },
      {
        title: 'Unduh gambar membulat Anda',
        description:
          'Periksa pratinjau papan catur dan klik Unduh Gambar Membulat untuk mengekspor <name>_rounded pada dimensi asli penuh.',
      },
    ],
    features: [
      {
        title: 'Radius Seragam & Per Sudut',
        description:
          'Bulatkan semua sudut secara merata hingga pil/lingkaran, atau beri gaya pada setiap sudut secara independen.',
      },
      {
        title: 'Sudut Transparan Asli',
        description:
          'Ekspor PNG atau WebP dengan transparansi alpha anti-alias yang bersih di luar masker membulat.',
      },
      {
        title: 'Latar Solid Opsional',
        description:
          'Isi sudut luar dengan sembarang warna hex kustom jika mengekspor untuk JPG.',
      },
      {
        title: 'Keluaran Resolusi Penuh',
        description:
          'Mempertahankan dimensi piksel asli Anda yang tepat sambil memotong sudut dengan rapi.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa saya harus memakai PNG atau WebP agar sudut membulat tetap tembus pandang?',
        answer:
          'Format JPEG tidak mendukung kanal transparansi alpha, sehingga sudut di luar masker membulat akan selalu berubah menjadi putih solid atau buram. PNG dan WebP mempertahankan transparansi anti-alias 8-bit yang halus sehingga kartu atau avatar membulat Anda menyatu mulus di atas warna halaman web atau slide apa pun.',
      },
      {
        question: 'Bagaimana cara kerja pintasan Lingkaran Penuh / Pil pada foto persegi vs persegi panjang?',
        answer:
          'Mengklik Lingkaran Penuh / Pil akan mengatur Radius Semua Sudut ke 100% dari setengah sisi terpendek — min(lebar, tinggi) / 2. Pada gambar 1:1 persegi, itu memotong lingkaran sempurna; pada banner yang lebih lebar, itu membentuk pil stadion yang halus.',
      },
      {
        question: 'Apa yang terjadi jika saya hanya ingin dua sudut atas membulat untuk kartu blog?',
        answer:
          'Centang Kontrol Individual Per Sudut untuk membuka empat slider terpisah untuk Kiri Atas, Kanan Atas, Kiri Bawah, dan Kanan Bawah (masing-masing 0%–100%). Atur Kiri Bawah dan Kanan Bawah ke 0% sambil hanya membulatkan sudut atas.',
      },
      {
        question: 'Bagaimana cara membuat potret persegi dulu jika foto saya persegi panjang?',
        answer:
          'Buka alat Pemotong Gambar kami (tertaut di Alat Gambar Gratis Terkait di bawah), pilih preset rasio aspek 1:1, dan unduh potongan persegi Anda. Lalu letakkan file persegi itu di sini dan klik Lingkaran Penuh / Pil untuk avatar lingkaran yang tajam.',
      },
      {
        question: 'Apa arti pembacaan piksel langsung di samping Radius Semua Sudut?',
        answer:
          'Di samping slider 0%–100%, label menghitung lengkungan sudut yang tepat dalam piksel keluaran asli (misalnya, 120px (24%)) relatif terhadap dimensi asli gambar Anda. Itu memudahkan pencocokan nilai border-radius CSS.',
      },
      {
        question: 'Kapan saya harus memilih Warna Solid di bawah Isian Sudut Luar alih-alih Transparan?',
        answer:
          'Pilih Warna Solid saat Anda berencana mengekspor JPG yang ringan, mencocokkan latar kartu mode gelap tertentu, atau mengunggah ke aplikasi yang mengganti alpha PNG transparan dengan hitam. Anda bisa memilih putih atau sembarang kode hex tepat dengan swatch warna.',
      },
      {
        question: 'Apa yang terjadi otomatis jika saya mengklik Transparan (PNG/WebP) saat JPG dipilih?',
        answer:
          'File JPG tidak bisa menyimpan transparansi alpha pada sudut luar. Mengklik Transparan (PNG/WebP) karena itu akan mengalihkan Format Keluaran ke PNG secara otomatis agar sudut membulat Anda tetap tembus pandang.',
      },
      {
        question: 'Apakah membulatkan sudut mengecilkan lebar dan tinggi foto saya?',
        answer:
          'Tidak, gambar yang diekspor mempertahankan lebar dan tinggi tepat Anda dalam piksel. Hanya area sudut luar yang dipotong halus memakai kurva sudut kuadratik.',
      },
      {
        question: 'Mengapa tepi melengkung tampak halus, bukan piksel bergerigi?',
        answer:
          'HTML5 Canvas memotong sepanjang jalur Bézier kuadratik vektor dengan penghalusan berkualitas tinggi yang diaktifkan. Itu menciptakan anti-aliasing sub-piksel yang lembut di sepanjang kurva yang menyatu alami dengan latar halaman gelap atau terang.',
      },
      {
        question: 'Apakah potret atau avatar profil diunggah ke server mana pun selama pemotongan sudut?',
        answer:
          'Tidak, pemotongan jalur dan pengodean PNG/WebP berjalan ketat di dalam tab browser Anda lewat HTML5 Canvas. Foto pribadi dan logo merek tidak pernah meninggalkan perangkat Anda.',
      },
      {
        question: 'Format input apa saja yang bisa dibulatkan di alat ini?',
        answer:
          'Letakkan file JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, atau SVG hingga 20 MB per file. GIF animasi mengekspor frame pertama statis yang membulat.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar clipboard langsung untuk membulatkan sudutnya?',
        answer:
          'Ya, ambil tangkapan layar lalu tekan Ctrl+V (atau Cmd+V di Mac) saat zona unggah aktif. Tangkapan itu langsung terbuka di dalam pratinjau papan catur dan siap dibulatkan sudutnya.',
      },
      {
        question: 'Apa yang terjadi pada nilai Per Sudut Individual saya jika saya mematikan mode per sudut?',
        answer:
          'Mematikan centang Kontrol Individual Per Sudut akan mengembalikan kanvas ke slider tunggal Radius Semua Sudut sehingga keempat sudut tetap seragam. Mencetangnya kembali akan mengisi keempat slider sudut dengan rapi dari radius seragam Anda saat ini.',
      },
      {
        question: 'Apakah membulatkan sudut juga menghapus tag GPS EXIF yang tertanam?',
        answer:
          'Ya, me-render piksel lewat potongan Canvas yang bersih akan menghapus header EXIF JPEG asli dan GPS secara otomatis. Itu melindungi privasi kapan pun Anda membagikan avatar membulat atau thumbnail produk online.',
      },
      {
        question: 'Bagaimana cara mengganti gambar saat ini sambil mempertahankan pengaturan radius sudut saya?',
        answer:
          'Klik Ganti Gambar di atas panggung pratinjau untuk mengunggah foto baru. Radius seragam, nilai per sudut, mode isian, dan format keluaran Anda tetap aktif untuk ekspor berulang yang cepat.',
      },
      {
        question: 'Nama file apa yang diberikan pada gambar membulat yang diunduh?',
        answer:
          'Pengunduh mempertahankan nama file asli Anda yang sudah dibersihkan dan menambahkan _rounded sebelum .png, .webp, atau .jpg. Misalnya, avatar.jpg akan diunduh rapi sebagai avatar_rounded.png.',
      },
      {
        question: 'Sebaiknya saya memilih PNG atau WebP saat mengekspor grafik web membulat?',
        answer:
          'Pilih PNG untuk kompatibilitas maksimum di berbagai aplikasi lama dan ketajaman tepi lossless. Pilih WebP saat Anda menginginkan aset situs web yang jauh lebih kecil namun tetap mempertahankan transparansi alpha sudut penuh.',
      },
      {
        question: 'Bisakah saya memakai Bulatkan Sudut Gambar di browser ponsel iOS atau Android?',
        answer:
          'Ya, semua slider, kotak centang, dan sakelar format menyesuaikan dengan lancar ke layar ponsel di Safari dan Chrome. Anda bisa membulatkan sudut pada potret langsung dari galeri ponsel Anda.',
      },
      {
        question: 'Apa beda alat ini dengan Generator Bingkai Gambar?',
        answer:
          'Bulatkan Sudut Gambar memotong foto Anda dengan rapi pada dimensi aslinya tanpa menambahkan padding luar. Generator Bingkai Gambar justru membungkus matte berwarna, gradien, atau bingkai Polaroid di sekitar gambar Anda.',
      },
      {
        question: 'Apakah ada watermark, biaya, atau batas harian pada ekspor membulat?',
        answer:
          'Tidak, Anda bisa membulatkan sudut pada foto tanpa batas hingga 20 MB per file sepenuhnya gratis. Tidak ada watermark, akun, atau paywall yang pernah muncul pada unduhan.',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: 'Editor Kecerahan Gambar',
    shortDescription: 'Terangkan atau gelapkan foto dengan pratinjau sebelum/sesudah langsung.',
    category: 'crop-edit',
    seoTitle: 'Editor Kecerahan Gambar – Terangkan atau Gelapkan Foto',
    seoDescription:
      'Atur pencahayaan foto dengan editor kecerahan gambar gratis kami. Geser -100% hingga +100%, pakai preset cepat, bandingkan sebelum dan sesudah, ekspor privat.',
    h1: 'Editor Kecerahan Gambar Online Gratis',
    subtitle:
      'Dibuat untuk fotografer yang memperbaiki foto kurang cahaya, agen properti yang menerangkan ruangan, dan penjual yang memoles foto produk, editor kecerahan gambar browser kami menyesuaikan pencahayaan dengan halus tanpa mengunggah aslinya. Putar slider dari -100% hingga +100%, uji preset pencahayaan instan, dan periksa hasilnya dengan perbandingan split langsung.',
    howToSteps: [
      {
        title: 'Letakkan atau pilih foto untuk diterangkan atau digelapkan',
        description:
          'Unggah gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG apa pun hingga 20 MB ke zona letak, atau tempel dengan Ctrl+V.',
      },
      {
        title: 'Sesuaikan slider Tingkat Kecerahan atau Preset Cepat',
        description:
          'Gerakkan Tingkat Kecerahan dari -100% Lebih Gelap hingga +100% Lebih Terang, atau klik Gelap (-30%), Redup (-15%), Asli (0%), Terang (+15%), Hidup (+30%), atau High Key (+50%).',
      },
      {
        title: 'Bandingkan tampilan Sesudah, Sebelum, dan Split Compare',
        description:
          'Beralih antara tab Sesudah, Sebelum, dan Split Compare — atau luncurkan Bandingkan Layar Penuh — untuk memverifikasi detail bayangan dan highlight.',
      },
      {
        title: 'Pilih Format Keluaran dan Kualitas',
        description:
          'Pilih keluaran Asli, JPG, PNG, atau WEBP dan sesuaikan slider Kualitas (10%–100%) saat menyimpan format lossy.',
      },
      {
        title: 'Unduh gambar hasil edit Anda',
        description:
          'Klik Unduh Gambar Hasil Edit untuk memproses kurva kecerahan pada resolusi asli penuh dan menyimpannya sebagai <name>_brightness secara lokal.',
      },
    ],
    features: [
      {
        title: 'Penyesuaian Piksel Real-Time',
        description:
          'Pratinjau instan di browser desktop dan ponsel tanpa perjalanan pulang-pergi ke server.',
      },
      {
        title: 'Preset Eksposur Cepat',
        description:
          'Uji preset Gelap, Redup, Terang, Hidup, dan High Key dalam satu klik.',
      },
      {
        title: 'Pemeriksaan Sebelum & Sesudah',
        description:
          'Bandingkan foto hasil edit secara berdampingan atau dengan slider perbandingan interaktif.',
      },
      {
        title: 'Pemrosesan Privat Sisi Klien',
        description:
          'Foto pribadi Anda tetap ketat di dalam browser Anda.',
      },
    ],
    faqs: [
      {
        question: 'Bagaimana slider Tingkat Kecerahan mengubah piksel tanpa langsung menghilangkan warna?',
        answer:
          'Menggerakkan Tingkat Kecerahan antara -100% Lebih Gelap dan +100% Lebih Terang akan menyesuaikan luminansi dengan halus di seluruh bingkai secara real time di dalam HTML5 Canvas. Memeriksa Split Compare atau Bandingkan Layar Penuh memungkinkan Anda menerangkan bayangan gelap tanpa memotong putih terang.',
      },
      {
        question: 'Mengapa foto saya otomatis dipratinjau pada +15% tepat setelah diunggah?',
        answer:
          'Editor diinisialisasi pada Terang (+15%) sehingga Anda langsung melihat peningkatan eksposur yang halus saat memuat. Klik Asli (0%) atau Atur Ulang di Kontrol Kecerahan kapan saja untuk membandingkan dari garis dasar netral.',
      },
      {
        question: 'Preset Cepat apa saja yang disertakan untuk pengujian eksposur satu klik?',
        answer:
          'Enam preset mencakup penyesuaian umum: Gelap (-30%), Redup (-15%), Asli (0%), Terang (+15%), Hidup (+30%), dan High Key (+50%). Mengklik kartu mana pun akan menjepret slider seketika sambil tetap memungkinkan Anda menyempurnakan dengan langkah 1%.',
      },
      {
        question: 'Apa beda Sesudah, Sebelum, Split Compare, dan Bandingkan Layar Penuh?',
        answer:
          'Sesudah menampilkan kanvas hasil edit Anda, Sebelum menampilkan gambar asli yang belum disentuh, dan Split Compare menambahkan slider Sebelum/Sesudah interaktif langsung di dalam viewport. Mengklik Bandingkan Layar Penuh akan me-render Blob resolusi penuh dan membuka modal perbandingan detail.',
      },
      {
        question: 'Apakah menerangkan foto mengurangi resolusi atau dimensi pikselnya?',
        answer:
          'Tidak, pratinjau langsung diskalakan hingga 1000 px murni untuk respons slider interaktif yang halus. Mengklik Unduh Gambar Hasil Edit akan me-render Canvas resolusi penuh yang mempertahankan lebar dan tinggi asli tepat gambar Anda.',
      },
      {
        question: 'Kapan saya harus menggelapkan foto memakai nilai negatif seperti -15% atau -30%?',
        answer:
          'Nilai kecerahan negatif meredam foto ponsel yang terlalu terang dan silau jendela yang keras dengan rapi. Meredupkan foto hero yang terang juga menciptakan kontras yang lebih baik di balik headline overlay putih.',
      },
      {
        question: 'Apakah editor kecerahan gambar mempertahankan latar transparan pada PNG?',
        answer:
          'Ya, mempertahankan Asli (untuk PNG/WebP) atau memilih PNG atau WebP akan menjaga area transparan tetap rapi pada viewport papan catur. Jika Anda memilih keluaran JPG, area transparan akan diratakan halus ke putih solid.',
      },
      {
        question: 'Apakah foto keluarga pribadi atau proof klien diunggah ke server eksternal?',
        answer:
          'Tidak, transformasi kecerahan piksel dan pengodean format berjalan lokal di browser Anda memakai HTML5 Canvas. Gambar Anda tidak pernah meninggalkan komputer atau ponsel Anda.',
      },
      {
        question: 'Format file gambar apa saja yang bisa saya terangkan atau gelapkan di sini?',
        answer:
          'Anda bisa membuka file JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB per file. GIF animasi mengekspor frame pembuka yang diterangkan sebagai gambar statis.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar gelap langsung dari clipboard untuk menerangkannya?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V di Mac) di zona unggah setelah menyalin tangkapan layar atau slide yang gelap. Tangkapan itu langsung dimuat ke viewport live dan siap disesuaikan lalu diekspor.',
      },
      {
        question: 'Apa yang terjadi jika saya mendorong kecerahan hingga +100%?',
        answer:
          'Pengaturan positif ekstrem akan menerangkan midtone dengan kuat dan mendorong highlight ke putih murni, yang berguna untuk grafik high-key bergaya tetapi bisa memotong tekstur highlight pada potret. Bidik +10% hingga +35% untuk pemulihan eksposur yang natural.',
      },
      {
        question: 'Bisakah saya menyesuaikan kontras atau vibransi warna setelah menerangkan gambar?',
        answer:
          'Ya, unduh dulu foto Anda yang sudah diterangkan, lalu klik Editor Kontras Gambar atau Editor Saturasi Gambar di Alat Gambar Gratis Terkait di bawah. Memisahkan penyesuaian ke alat khusus memungkinkan Anda menyempurnakan punch kontras atau kekayaan warna secara presisi.',
      },
      {
        question: 'Mengapa Kualitas menghilang saat saya memilih PNG di bawah Format Keluaran?',
        answer:
          'PNG memakai kompresi lossless tanpa tingkat kualitas persentase yang bervariasi. Beralihlah ke Asli (untuk JPEG), JPG, atau WebP untuk menampilkan dan menyesuaikan slider Kualitas 10%–100% (default 90%).',
      },
      {
        question: 'Bagaimana cara membatalkan semua perubahan kecerahan dengan cepat?',
        answer:
          'Klik tombol biru Atur Ulang di sudut kanan atas Kontrol Kecerahan kapan saja. Anda juga bisa mengklik kartu preset Asli (0%) untuk langsung kembali ke penyesuaian nol.',
      },
      {
        question: 'Apakah mengekspor foto hasil edit menghapus tag lokasi GPS EXIF kamera?',
        answer:
          'Ya, menggambar ke HTML5 Canvas yang baru akan membangun bitmap keluaran yang bersih tanpa menyalin data EXIF kamera. Koordinat GPS atau nomor seri perangkat apa pun akan dihapus otomatis.',
      },
      {
        question: 'Bisakah saya memuat foto lain tepat setelah mengekspor tanpa memuat ulang halaman?',
        answer:
          'Ya, klik ikon tempat sampah merah (Hapus gambar) di toolbar pratinjau kapan saja. Itu akan menghapus foto aktif dengan rapi dan membawa Anda langsung kembali ke zona letak unggahan.',
      },
      {
        question: 'Nama file apa yang dipakai saat saya mengklik Unduh Gambar Hasil Edit?',
        answer:
          'Pengekspor mempertahankan nama file asli Anda yang sudah dibersihkan dan menambahkan _brightness plus ekstensi format yang Anda pilih. Misalnya, dapur.jpg akan tersimpan rapi sebagai dapur_brightness.jpg.',
      },
      {
        question: 'Apakah editor bekerja andal di Safari iPhone dan Chrome Android?',
        answer:
          'Ya, setiap kartu preset, slider rentang, dan tampilan perbandingan split bekerja lancar di layar sentuh ponsel. Anda bisa menerangkan foto gelap dari galeri langsung di Safari atau Chrome pada ponsel Anda.',
      },
      {
        question: 'Mengapa JPEG gelap yang terkompres menunjukkan noise blok samar saat diterangkan kuat?',
        answer:
          'Bayangan pada JPEG yang sangat terkompres sering menyimpan artefak kuantisasi yang tersembunyi dalam kegelapan; menaikkan kecerahan sebesar +40% atau lebih membuat noise bayangan yang ada menjadi terlihat. Menjaga penyesuaian tetap moderat (+15% hingga +30%) akan mempertahankan tone yang lebih bersih.',
      },
      {
        question: 'Apakah ada watermark, pendaftaran akun, atau batas untuk menerangkan foto?',
        answer:
          'Tidak, editor kecerahan gambar sepenuhnya gratis tanpa watermark atau pendaftaran. Anda bisa menerangkan atau menggelapkan foto tanpa batas hingga 20 MB per file.',
      },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-contrast-editor',
    name: 'Editor Kontras Gambar',
    shortDescription: 'Tingkatkan atau lembutkan kontras gambar dengan perbandingan sebelum/sesudah secara langsung.',
    category: 'crop-edit',
    seoTitle: 'Editor Kontras Gambar Gratis – Atur Kontras Online',
    seoDescription:
      'Atur kontras gambar gratis secara online: geser dari -100% hingga +100%, coba 6 preset, bandingkan tampilan terpisah, dan ekspor di browser tanpa unggah.',
    h1: 'Editor Kontras Gambar Online Gratis',
    subtitle:
      'Dirancang untuk fotografer, penjual online, dan desainer yang memperbaiki foto berkabut atau datar, editor kontras gambar di browser ini memungkinkan Anda memperdalam bayangan dan mempertajam pemisahan tonal dalam hitungan detik. Pilih preset sekali klik, periksa pratinjau layar terpisah, dan ekspor secara lokal tanpa unggah ke server.',
    howToSteps: [
      {
        title: 'Letakkan atau pilih gambar',
        description:
          'Unggah foto JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB ke dropzone editor, telusuri dari disk, atau tempel langsung dengan Ctrl+V.',
      },
      {
        title: 'Tinjau pratinjau canvas langsung',
        description:
          'Foto Anda dimuat ke pratinjau Canvas responsif yang dimulai pada kontras +20% sehingga Anda langsung melihat bagaimana sedikit penajaman memengaruhi pemisahan tonal.',
      },
      {
        title: 'Sesuaikan slider Tingkat Kontras atau preset',
        description:
          'Seret slider Tingkat Kontras dari -100% Datar hingga +100% Kontras Tinggi, atau klik Lembut (-25%), Redup (-10%), Asli (0%), Tajam (+20%), Kuat (+40%), atau Dramatis (+70%).',
      },
      {
        title: 'Periksa detail dengan alat perbandingan',
        description:
          'Beralih antara Sesudah, Sebelum, dan Bandingkan Terpisah (menggunakan slider pembatas vertikal), atau klik Bandingkan Layar Penuh untuk memeriksa bayangan dan highlight dari dekat.',
      },
      {
        title: 'Pilih format, kualitas, dan unduh',
        description:
          'Pilih Asli, JPG, PNG, atau WebP di bawah Format Output, atur Kualitas (10%–100%) untuk format lossy, lalu klik Unduh Gambar yang Diedit.',
      },
    ],
    features: [
      { title: 'Kurva Kontras Presisi', description: 'Memperluas atau memampatkan rentang tonal secara halus tanpa pergeseran warna yang kasar.' },
      { title: 'Preset Sekali Klik', description: 'Coba preset Lembut, Redup, Tajam, Kuat, atau Dramatis langsung.' },
      { title: 'Modal Sebelum/Sesudah Interaktif', description: 'Periksa detail bayangan dan highlight yang halus sebelum mengunduh.' },
      { title: '100% di Sisi Klien', description: 'Pemrosesan browser yang cepat tanpa unggahan atau watermark.' },
    ],
    faqs: [
      {
        question: 'Efek visual apa yang dihasilkan saat menggeser slider Tingkat Kontras ke arah positif atau negatif?',
        answer:
          'Menggeser slider di atas 0% membuat warna gelap makin gelap dan warna terang makin terang di sekitar titik tengah, sehingga subjek tampak lebih menonjol dari latar yang berkabut. Menggesernya di bawah 0% akan memampatkan highlight dan bayangan ke arah abu-abu tengah yang netral untuk tampilan matte yang lebih lembut.',
      },
      {
        question: 'Preset Cepat apa saja yang tersedia di panel Kontrol Kontras?',
        answer:
          'Tersedia enam preset sekali klik: Lembut (-25%), Redup (-10%), Asli (0%), Tajam (+20%), Kuat (+40%), dan Dramatis (+70%). Mengklik preset apa pun langsung mengatur slider Tingkat Kontras dan memperbarui pratinjau canvas secara langsung.',
      },
      {
        question: 'Mengapa editor kontras mulai dari +20% tepat setelah mengunggah foto?',
        answer:
          'Editor dimulai pada Tajam (+20%) agar Anda langsung melihat peningkatan tonal yang aktif, bukan gambar yang tidak berubah. Klik Asli (0%) atau Atur Ulang di bagian atas Kontrol Kontras kapan saja untuk kembali ke nol.',
      },
      {
        question: 'Bagaimana editor kontras gambar menghitung perubahan piksel?',
        answer:
          'Editor menerapkan kurva kontras linear standar piksel demi piksel pada kanal RGB di HTML5 Canvas sambil membiarkan kanal alpha tetap utuh. Perhitungan langsung di ImageData menghindari perbedaan filter CSS browser di iOS Safari dan browser seluler.',
      },
      {
        question: 'Bagaimana cara memeriksa bayangan sebelum dan sesudah tanpa menebak-nebak?',
        answer:
          'Gunakan tab Sesudah, Sebelum, dan Bandingkan Terpisah tepat di atas area pratinjau untuk menarik garis pembatas langsung dari 0% hingga 100% melintasi gambar Anda. Untuk pemeriksaan piksel lebih dekat, klik Bandingkan Layar Penuh untuk membuka modal perbandingan berdampingan.',
      },
      {
        question: 'Apakah meningkatkan kontras akan memotong awan terang atau menghitamkan bayangan gelap?',
        answer:
          'Mendorong kontras secara agresif ke arah +70% hingga +100% akan mendorong highlight yang hampir putih ke arah 255 murni dan bayangan gelap ke arah 0. Gunakan Bandingkan Terpisah untuk mengawasi tekstur halus pada kemeja terang atau rambut gelap, lalu turunkan ke +15%–+40% jika muncul pemotongan.',
      },
      {
        question: 'Jenis file gambar apa saja yang bisa saya buka di editor kontras?',
        answer:
          'Anda dapat mengunggah file JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB per file. Foto HEIC didekode otomatis di browser Anda sebelum dirender di canvas pengeditan.',
      },
      {
        question: 'Bisakah saya menyimpan logo PNG yang diedit kontrasnya dengan latar transparan tetap utuh?',
        answer:
          'Ya, mempertahankan format Asli pada PNG transparan atau memilih output PNG atau WebP akan menjaga transparansi alpha sepenuhnya. Hanya beralih Format Output ke JPG yang akan mengisi area transparan dengan latar putih solid.',
      },
      {
        question: 'Apakah pratinjau yang diperkecil memengaruhi resolusi unduhan akhir saya?',
        answer:
          'Tidak, pratinjau di layar membatasi skala tampilan hingga 1.000 px pada sisi terpanjang agar menggeser slider tetap instan. Saat Anda mengklik Unduh Gambar yang Diedit, rumus kontras yang sama persis dirender pada 100% dimensi piksel asli Anda.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar dari clipboard untuk memperbaiki tangkapan layar yang kusam?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V di Mac) di mana saja pada layar unggah untuk memuat gambar clipboard langsung ke editor. Menyesuaikan kontras sebesar +20% hingga +35% sangat bagus untuk membuat garis grafik yang samar atau teks UI abu-abu tampak lebih tajam.',
      },
      {
        question: 'Apakah menyesuaikan kontras mengubah foto berwarna menjadi hitam putih?',
        answer:
          'Tidak, kontras menggeser jarak luminansi pada kanal merah, hijau, dan biru secara proporsional tanpa menghilangkan informasi rona. Perlu dicatat, kontras positif yang kuat secara alami sedikit meningkatkan vibransi warna yang terasa, sementara kontras negatif meredupkan warna.',
      },
      {
        question: 'Pengaturan kualitas apa yang harus saya pilih saat mengekspor sebagai JPG atau WebP?',
        answer:
          'Slider Kualitas default-nya 90%, menjaga gradasi tonal yang halus bebas dari banding sekaligus menjaga ukuran file tetap ringan. Turunkan ke arah 75%–80% untuk unggahan web yang lebih kecil, atau beralih ke PNG untuk output yang sepenuhnya lossless.',
      },
      {
        question: 'Bagaimana file yang diunduh diberi nama setelah mengedit kontras?',
        answer:
          'File yang Anda simpan menambahkan _contrast ke nama dasar file asli Anda yang sudah dibersihkan, diikuti ekstensi format yang dipilih, misalnya portrait_contrast.jpg. File asli Anda di disk tidak pernah diubah atau ditimpa.',
      },
      {
        question: 'Bisakah alat ini mempertajam foto buram yang tidak fokus?',
        answer:
          'Meningkatkan kontras akan menambah pemisahan tepi antara area terang dan gelap, sehingga foto berkabut atau berawan bisa tampak jauh lebih jernih. Namun, alat ini menyesuaikan kurva tonal, bukan menerapkan penajaman konvolusi tepi, sehingga blur gerakan yang parah tidak bisa difokuskan kembali.',
      },
      {
        question: 'Apakah ada foto yang diunggah ke server eksternal untuk pemrosesan kontras?',
        answer:
          'Tidak, setiap perhitungan piksel terjadi di dalam tab browser lokal Anda menggunakan HTML5 Canvas dan JavaScript. Potret pribadi, ID yang dipindai, dan foto produk yang belum dirilis tidak pernah meninggalkan komputer atau ponsel Anda.',
      },
      {
        question: 'Apa yang terjadi saat saya mengunggah GIF animasi untuk menyesuaikan kontras?',
        answer:
          'HTML5 Canvas merender dan menyesuaikan frame pertama GIF, lalu mengekspor satu gambar statis dalam format yang Anda pilih. Penyesuaian kontras GIF animasi multi-frame tidak didukung di sini.',
      },
      {
        question: 'Apa bedanya penyesuaian kontras dengan penyesuaian kecerahan?',
        answer:
          'Kecerahan menggeser semua piksel menjadi lebih terang atau lebih gelap secara seragam bersama-sama, sedangkan kontras memperlebar atau mempersempit jarak antara bayangan gelap dan highlight terang di sekitar titik abu-abu tengah. Jika foto gelap tampak pudar setelah dicerahkan, lanjutkan dengan alat kontras kami.',
      },
      {
        question: 'Bisakah saya menggunakan kontras negatif untuk melembutkan bayangan tengah hari yang keras pada potret?',
        answer:
          'Ya, memilih Lembut (-25%) atau Redup (-10%) akan mengurangi transisi keras antara kulit yang terkena sinar matahari dan bayangan gelap. Untuk silau ekstrem atau nuansa editorial yang datar, geser slider antara -30% dan -50%.',
      },
      {
        question: 'Bagaimana cara memuat foto baru tanpa me-refresh tab browser?',
        answer:
          'Klik ikon tempat sampah di sudut kanan atas panel Pratinjau untuk menghapus gambar saat ini dan kembali ke zona unggah. Tindakan itu membebaskan memori browser sementara dan menyiapkan canvas untuk file berikutnya.',
      },
      {
        question: 'Apakah editor kontras berfungsi dengan andal di iOS Safari dan Android Chrome?',
        answer:
          'Ya, perhitungan tonal berjalan secara eksplisit di dalam array piksel JavaScript ImageData, bukan mengandalkan filter canvas CSS yang berperilaku tidak konsisten di browser seluler. Hal itu menjaga pratinjau kontras dan unduhan akhir tetap seragam di iPhone, Android, macOS, dan Windows.',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: 'Editor Saturasi Gambar',
    shortDescription: 'Tingkatkan vibransi warna atau buat foto menjadi hitam putih dengan bersih di browser.',
    category: 'crop-edit',
    seoTitle: 'Editor Saturasi Gambar Gratis – Atur Vibransi Warna',
    seoDescription:
      'Tingkatkan warna atau ubah foto menjadi hitam putih dengan editor saturasi gambar gratis. Pratinjau perbandingan terpisah dan ekspor bersih di browser.',
    h1: 'Editor Saturasi Gambar Online Gratis',
    subtitle:
      'Dibuat untuk fotografer, kreator sosial, dan editor ecommerce yang menyeimbangkan intensitas warna, editor saturasi gambar di browser ini menyesuaikan vibransi warna relatif terhadap luminansi yang dirasakan. Bergeserlah dengan halus dari -100% grayscale yang tajam hingga +100% warna yang hidup, dengan perbandingan terpisah dan ekspor lokal.',
    howToSteps: [
      {
        title: 'Muat foto ke editor',
        description:
          'Seret dan letakkan gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG apa pun hingga 20 MB, pilih file dari perangkat Anda, atau tempel lewat Ctrl+V.',
      },
      {
        title: 'Pratinjau peningkatan warna awal',
        description:
          'Editor dimuat dengan Tingkat Saturasi diatur pada +25% sehingga Anda langsung melihat bagaimana kroma yang lebih kaya mengangkat warna kusam di canvas pratinjau langsung.',
      },
      {
        title: 'Sesuaikan Tingkat Saturasi atau klik preset',
        description:
          'Seret slider dari -100% Grayscale hingga +100% Hidup, atau pilih Grayscale (-100%), Redup (-40%), Asli (0%), Kaya (+30%), Hidup (+60%), atau Hiper (+90%).',
      },
      {
        title: 'Periksa warna kulit dengan Bandingkan Terpisah',
        description:
          'Beralih antara Sesudah, Sebelum, atau Bandingkan Terpisah dengan slider sapuan—atau klik Bandingkan Layar Penuh—untuk memastikan warna merah dan warna kulit tampak seimbang, bukan terlalu jenuh.',
      },
      {
        title: 'Pilih format output dan simpan secara lokal',
        description:
          'Pilih Asli, JPG, PNG, atau WebP, sesuaikan Kualitas (10%–100%) jika bukan PNG, lalu klik Unduh Gambar yang Diedit.',
      },
    ],
    features: [
      { title: 'Saturasi yang Menjaga Luminansi', description: 'Menyesuaikan intensitas warna relatif terhadap kecerahan yang dirasakan sehingga warna tetap alami.' },
      { title: 'Dari Grayscale hingga Hiper-Hidup', description: 'Geser ke -100% untuk hitam putih instan atau dorong ke positif untuk warna yang kaya dan hidup.' },
      { title: 'Pratinjau Sebelum/Sesudah Langsung', description: 'Beralih atau seret tampilan perbandingan untuk menghindari warna kulit yang terlalu jenuh.' },
      { title: 'Privat & Gratis', description: 'Tanpa unggahan, tanpa akun, dan tanpa watermark.' },
    ],
    faqs: [
      {
        question: 'Bagaimana editor saturasi gambar ini menjaga kecerahan yang dirasakan?',
        answer:
          'Setiap piksel menghitung luminansi yang dirasakan menggunakan bobot ITU-R BT.709 (0,2126 R + 0,7152 G + 0,0722 B) dan menginterpolasi kanal RGB menuju atau menjauhi titik abu-abu netral tersebut. Hasilnya, warna merah dan hijau yang berwarna tidak menjadi terlalu terang atau keruh secara tidak wajar saat didesaturasi.',
      },
      {
        question: 'Preset sekali klik apa saja yang tersedia di Kontrol Saturasi?',
        answer:
          'Anda mendapatkan enam preset: Grayscale (-100%), Redup (-40%), Asli (0%), Kaya (+30%), Hidup (+60%), dan Hiper (+90%). Mengklik tombol apa pun langsung memperbarui pratinjau dan dapat disesuaikan lagi dengan slider.',
      },
      {
        question: 'Bisakah saya mengubah potret berwarna menjadi grayscale yang bersih dengan satu klik?',
        answer:
          'Ya, klik preset Grayscale (-100%) atau geser Tingkat Saturasi sepenuhnya ke kiri hingga -100%. Karena menggunakan pembobotan luminansi standar, warna kulit dan dedaunan berubah menjadi nilai monokrom yang tampak alami, bukan rata-rata yang datar.',
      },
      {
        question: 'Mengapa Tingkat Saturasi default-nya +25% saat file pertama kali dimuat?',
        answer:
          'Memulai pada +25% langsung menampilkan peningkatan vibransi yang lembut begitu foto Anda muncul. Klik Asli (0%) atau tautan Atur Ulang kapan saja jika Anda lebih suka menyesuaikan ke atas atau ke bawah dari posisi netral.',
      },
      {
        question: 'Bagaimana cara mencegah potret tampak oranye atau neon saat meningkatkan warna?',
        answer:
          'Tetaplah di rentang +15% hingga +35% untuk foto orang dan beralihlah ke tab Bandingkan Terpisah untuk menyapu antara warna kulit asli Anda dan canvas yang ditingkatkan. Bandingkan Layar Penuh juga memungkinkan Anda memeriksa pipi, bibir, dan label produk dari dekat sebelum mengekspor.',
      },
      {
        question: 'Apa yang terjadi jika saya meningkatkan saturasi pada foto yang sudah monokrom atau abu-abu?',
        answer:
          'Piksel yang nilai merah, hijau, dan birunya sama persis berada tepat pada sumbu luminansi, sehingga menaikkan saturasi tidak bisa menciptakan warna yang tidak ada. Namun, pada gambar sepia atau hitam putih hangat yang bernuansa, saturasi positif akan menonjolkan warna dasarnya.',
      },
      {
        question: 'Apakah editor saturasi mendukung ikon PNG transparan dan stiker WebP?',
        answer:
          'Ya, penyesuaian piksel mengubah intensitas warna RGB sambil membiarkan kanal transparansi alpha tetap utuh. Pertahankan format Asli atau pilih PNG atau WebP di bawah Format Output untuk menjaga latar transparan tetap bersih.',
      },
      {
        question: 'Apa yang terjadi pada transparansi jika saya mengekspor stiker yang didesaturasi sebagai JPG?',
        answer:
          'Karena JPG tidak mendukung transparansi alpha, piksel transparan otomatis diratakan ke atas canvas putih solid (#FFFFFF) sebelum pengodean JPEG. Pilih PNG atau WebP kapan pun Anda perlu menjaga transparansi.',
      },
      {
        question: 'Format unggahan dan ukuran file maksimum apa yang diterima?',
        answer:
          'Anda dapat meletakkan gambar JPG, PNG, WebP, HEIC/HEIF, GIF, BMP, dan SVG hingga 20 MB masing-masing. GIF animasi memuat frame awalnya ke Canvas untuk diedit dan diekspor sebagai gambar statis.',
      },
      {
        question: 'Apakah ada perbedaan antara kejernihan pratinjau dan resolusi file yang diunduh?',
        answer:
          'Canvas interaktif menampilkan pratinjau hingga 1.000 px pada dimensi terpanjang agar penyesuaian slider terasa halus dan tanpa jeda. Saat mengekspor, proses Canvas resolusi penuh berjalan pada lebar dan tinggi asli file Anda.',
      },
      {
        question: 'Kapan saya harus menggunakan Redup (-40%) bukan Grayscale (-100%)?',
        answer:
          'Redup (-40%) menenangkan papan neon yang terlalu terang, latar ruangan yang ramai, atau pencahayaan produk yang keras sambil mempertahankan petunjuk warna yang halus. Cara ini cocok untuk foto hero blog yang tenang atau latar di belakang teks.',
      },
      {
        question: 'Bisakah saya menempel gambar langsung dari clipboard ke tool saturasi?',
        answer:
          'Ya, salin gambar atau tangkapan layar apa pun ke clipboard Anda lalu tekan Ctrl+V (atau Cmd+V) pada perintah unggah. Gambar langsung terbuka di editor dan siap disetel warnanya.',
      },
      {
        question: 'Bagaimana nama file hasil ekspor membedakan foto yang diedit dari foto asli?',
        answer:
          'Ekspor otomatis menambahkan _saturation ke nama file asli Anda yang sudah dibersihkan (misalnya, sunset_saturation.jpg). Gambar sumber Anda tetap utuh di perangkat Anda.',
      },
      {
        question: 'Pengaturan Kualitas apa yang berlaku saat menyimpan sebagai Asli, JPG, atau WebP?',
        answer:
          'Ekspor JPG dan WebP default-nya Kualitas 90%, yang dapat Anda sesuaikan dari 10% hingga 100% sebelum mengunduh. Saat PNG dipilih, slider Kualitas disembunyikan karena PNG selalu diekspor secara lossless.',
      },
      {
        question: 'Apakah foto yang diunggah dikirim ke GPU cloud atau server pihak ketiga?',
        answer:
          'Tidak pernah — setiap perhitungan piksel berjalan di dalam tab browser lokal Anda pada perangkat keras Anda sendiri. Tidak ada data gambar, preset, atau nama file yang dikirim melalui jaringan.',
      },
      {
        question: 'Apakah mengedit saturasi di sini menghapus metadata EXIF GPS atau kamera?',
        answer:
          'Ya, menggambar ke HTML5 Canvas dan menulis blob gambar baru akan menghilangkan header EXIF asli seperti nomor seri kamera dan tag lokasi GPS. Hal itu membantu menjaga foto sosial yang dibagikan tetap bersih dari sisi privasi.',
      },
      {
        question: 'Bagaimana cara mengatur ulang hanya slider saturasi tanpa memuat ulang foto saya?',
        answer:
          'Klik tombol Atur Ulang di sudut kanan atas Kontrol Saturasi untuk mengembalikan slider langsung ke 0%. Anda juga bisa mengklik tombol preset cepat Asli (0%) tepat di bawah slider tanpa mengunggah ulang file Anda.',
      },
      {
        question: 'Bisakah saya meningkatkan dedaunan dan langit lanskap dengan Hiper (+90%) secara bersih?',
        answer:
          'Hiper (+90%) menggandakan perbedaan kroma dengan halus hingga batas kanal RGB (0–255), menghasilkan poster perjalanan yang dramatis dan produk yang menonjol. Perhatikan warna merah dan biru terang di Bandingkan Terpisah untuk memastikan tekstur kelopak atau kain yang halus tidak terpotong.',
      },
      {
        question: 'Bisakah saya mengubah grafik PNG berwarna menjadi WebP yang lebih ringan sambil meredupkan warnanya?',
        answer:
          'Ya, atur tingkat saturasi yang Anda inginkan, pilih WEBP di bawah Format Output, dan sesuaikan Kualitas ke 80%–90%. Mengklik Unduh Gambar yang Diedit akan menghasilkan WebP yang ringkas dan seimbang warnanya dalam satu langkah.',
      },
      {
        question: 'Apakah tool ini berfungsi offline setelah dimuat dan di layar sentuh seluler?',
        answer:
          'Ya, slider, tombol preset, dan slider tampilan terpisah merespons gestur sentuhan dengan halus di iOS Safari dan Android Chrome. Karena pemrosesan tidak memerlukan panggilan server sama sekali, pengeditan tetap berjalan bahkan pada koneksi seluler yang lambat.',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: 'Filter Gambar',
    shortDescription: 'Terapkan preset grayscale, sepia, vintage, hangat, dingin & noir dengan intensitas yang bisa diatur.',
    category: 'crop-edit',
    seoTitle: 'Filter Gambar Online Gratis – Vintage, Sepia & Noir',
    seoDescription:
      'Percantik foto memakai filter gambar online gratis seperti Vintage, Sepia, Noir Hitam Putih, Hangat, Dingin, dan Matte Fade. Atur intensitas filter di browser.',
    h1: 'Filter Gambar Online Gratis',
    subtitle:
      'Ideal untuk kreator, blogger, dan siapa pun yang ingin memberi jepretan sehari-hari estetika yang konsisten, filter gambar online gratis ini menyediakan 11 gradasi warna pilihan yang dirender lewat thumbnail langsung. Padukan filter apa pun dengan halus memakai slider Intensitas Filter dan simpan salinan resolusi penuh langsung di browser Anda.',
    howToSteps: [
      {
        title: 'Letakkan atau pilih gambar',
        description:
          'Unggah foto JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG apa pun hingga 20 MB, pilih file dari disk, atau tempel langsung dengan Ctrl+V.',
      },
      {
        title: 'Telusuri thumbnail filter langsung',
        description:
          'Periksa grid Preset Filter berisi 12 kartu yang menampilkan pratinjau miniatur asli dari Asli ditambah 11 gradasi bergaya yang dihasilkan dari gambar yang Anda unggah.',
      },
      {
        title: 'Pilih gaya preset',
        description:
          'Klik Grayscale, Sepia, Vintage, Hangat, Dingin, Kontras Tinggi, Matte Fade, Dramatis, Noir Hitam Putih, Golden Hour, atau Invert untuk menerapkannya ke canvas utama.',
      },
      {
        title: 'Padukan kekuatan dengan Intensitas Filter',
        description:
          'Seret slider Intensitas Filter antara 0% dan 100% untuk melembutkan gradasi yang kuat menjadi sapuan warna yang halus (atau klik Atur Ulang untuk kembali ke Asli).',
      },
      {
        title: 'Tahan tampilan asli atau buka modal Bandingkan',
        description:
          'Tekan dan tahan Tahan untuk Melihat Asli untuk pemeriksaan A/B kilat, atau klik Bandingkan untuk membuka modal pemeriksaan geser terpisah yang interaktif.',
      },
      {
        title: 'Pilih Format Output dan unduh',
        description:
          'Pilih Asli, JPG, PNG, atau WebP, sesuaikan Kualitas (10%–100%) jika perlu, lalu klik Unduh Gambar yang Difilter.',
      },
    ],
    features: [
      { title: '11+ Preset Filter Pilihan', description: 'Mencakup Grayscale, Sepia, Vintage, Hangat, Dingin, Kontras Tinggi, Matte Fade, Dramatis, Noir Hitam Putih, Golden Hour, dan Invert.' },
      { title: 'Slider Intensitas yang Halus', description: 'Padukan filter apa pun dengan halus antara 0% dan 100%, bukan terjebak pada nilai default yang kasar.' },
      { title: 'Strip Thumbnail Langsung', description: 'Lihat tampilan setiap filter pada foto Anda yang sebenarnya sebelum memilih.' },
      { title: '100% Canvas di Sisi Klien', description: 'Siap berfungsi offline di browser Anda tanpa unggahan ke server.' },
    ],
    faqs: [
      {
        question: '11 gaya filter apa saja yang bisa saya pratinjau di grid filter gambar online?',
        answer:
          'Selain Asli, grid menghasilkan thumbnail langsung untuk Grayscale, Sepia, Vintage, Hangat, Dingin, Kontras Tinggi, Matte Fade, Dramatis, Noir Hitam Putih, Golden Hour, dan Invert. Setiap thumbnail dirender langsung dari foto yang Anda unggah, bukan dari ikon contoh stok.',
      },
      {
        question: 'Bagaimana cara kerja slider Intensitas Filter saat diatur antara 0% dan 100%?',
        answer:
          'Mengatur Intensitas Filter di bawah 100% akan memadukan nilai piksel RGB yang difilter secara linear kembali ke arah piksel asli Anda. Misalnya, mengatur Vintage atau Golden Hour ke 45% akan menghasilkan sapuan film yang lembut tanpa menutupi warna kulit alami.',
      },
      {
        question: 'Mengapa tool memilih Vintage pada 100% tepat saat saya meletakkan foto?',
        answer:
          'Tool default-nya Vintage pada intensitas penuh agar Anda langsung melihat efek jadi di canvas utama begitu diunggah. Cukup klik ubin lain di Preset Filter atau klik Atur Ulang untuk kembali ke Asli.',
      },
      {
        question: 'Apa perbedaan filter Grayscale dan Noir Hitam Putih?',
        answer:
          'Grayscale mengubah warna menjadi warna hitam putih yang seimbang menggunakan bobot luminansi alami tanpa mengubah kontras. Noir Hitam Putih menambahkan peningkatan kontras curam 1,65× di atas konversi grayscale untuk bayangan gelap yang kuat dan highlight terang yang sinematik.',
      },
      {
        question: 'Apa perbedaan visual Sepia, Vintage, Matte Fade, dan Golden Hour?',
        answer:
          'Sepia menggeser seluruh gambar ke warna cokelat monokrom klasik, sementara Vintage memadukan warna sepia hangat ke dalam warna asli dengan kehangatan pudar yang halus. Matte Fade mengangkat warna hitam gelap menjadi abu-abu slate yang lembut, dan Golden Hour meningkatkan warna merah dan kuning hangat sambil mendinginkan warna biru bayangan.',
      },
      {
        question: 'Bagaimana tombol Tahan untuk Melihat Asli mempercepat pengeditan?',
        answer:
          'Menekan dan menahan Tahan untuk Melihat Asli dengan mouse atau jari Anda akan mengembalikan canvas sementara ke foto Anda yang belum diedit dan menampilkan badge Asli. Melepaskannya langsung memulihkan pratinjau yang difilter sehingga Anda bisa membandingkan A/B dalam hitungan milidetik.',
      },
      {
        question: 'Bisakah saya memeriksa tampilan terpisah berdampingan sebelum menyimpan?',
        answer:
          'Ya, klik tombol Bandingkan di samping Tahan untuk Melihat Asli untuk membuka modal Perbandingan Filter lengkap. Modal ini menampilkan ukuran byte asli vs yang difilter dan slider sapuan terpisah yang interaktif.',
      },
      {
        question: 'Apakah gambar yang diunduh diproses pada ukuran kecil yang sama seperti thumbnail preset?',
        answer:
          'Tidak, grid preset menggunakan thumbnail kecil 120 px untuk pratinjau instan dan ruang kerja utama dibatasi 1.000 px demi responsivitas. Mengklik Unduh Gambar yang Difilter akan memproses resolusi piksel asli penuh Anda di HTML5 Canvas.',
      },
      {
        question: 'Format file dan ukuran maksimum apa yang berfungsi dengan filter foto ini?',
        answer:
          'Anda dapat meletakkan file JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB per unggahan. Output yang didukung adalah Asli, JPG, PNG, dan WebP.',
      },
      {
        question: 'Apa yang terjadi pada area transparan di logo PNG saat menerapkan Hangat, Dingin, atau Invert?',
        answer:
          'Semua perhitungan filter piksel hanya mengubah kanal merah, hijau, dan biru sambil membiarkan transparansi alpha tetap utuh. Pertahankan output Asli, PNG, atau WebP untuk menjaga latar transparan; memilih JPG akan mengisi zona transparan dengan putih solid.',
      },
      {
        question: 'Filter Invert paling berguna untuk apa?',
        answer:
          'Invert mengurangkan setiap kanal RGB dari 255 untuk menghasilkan negatif warna yang persis dari gambar Anda. Developer menggunakannya untuk membalik diagram mode gelap untuk dokumen putih, dan fotografer menggunakannya untuk melihat pratinjau negatif film yang dipindai.',
      },
      {
        question: 'Apakah efek filter konsisten di Chrome, Firefox, dan iPhone Safari?',
        answer:
          'Ya, kesebelas preset dihitung langsung dalam loop piksel JavaScript ImageData, bukan mengandalkan string CSS ctx.filter. Hal itu menjamin warna yang identik di iOS Safari, Android Chrome, dan browser desktop.',
      },
      {
        question: 'Bisakah saya menumpuk dua filter seperti Dingin ditambah Matte Fade pada gambar yang sama?',
        answer:
          'Setiap preset dihitung langsung dari gambar asli Anda yang bersih dalam satu langkah, sehingga mengklik ubin baru akan mengganti preset dengan bersih tanpa menurunkan kualitas. Untuk menggabungkan dua gradasi, unduh PNG pertama Anda yang difilter lalu letakkan kembali untuk langkah kedua.',
      },
      {
        question: 'Bagaimana nama file output diberi tag agar saya ingat filter mana yang saya ekspor?',
        answer:
          'Pengekspor menambahkan ID preset ke nama dasar file Anda yang sudah dibersihkan, misalnya photo_golden-hour.jpg atau photo_noir.webp. Hal itu memudahkan membedakan dua atau tiga tampilan uji dalam satu folder.',
      },
      {
        question: 'Apakah mengunggah foto untuk menerapkan filter akan mengirimnya ke server eksternal?',
        answer:
          'Tidak, thumbnail, pratinjau canvas langsung, dan ekspor akhir semuanya berjalan sepenuhnya di dalam memori tab browser Anda. Tidak ada foto yang ditransfer ke server jarak jauh atau disimpan di log cloud.',
      },
      {
        question: 'Bisakah saya menggunakan filter Dingin atau Kontras Tinggi pada tangkapan layar yang ditempel dari clipboard?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V) pada zona unggah untuk memuat tangkapan layar yang disalin langsung. Kontras Tinggi dan Noir Hitam Putih sangat efektif untuk mencerahkan teks samar pada hasil pindaian dokumen.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah GIF animasi ke tool filter gambar?',
        answer:
          'HTML5 Canvas mengekstrak frame pertama GIF untuk thumbnail pratinjau dan mengekspor gambar statis yang difilter. Pemfilteran GIF animasi multi-frame tidak dilakukan oleh tool ini.',
      },
      {
        question: 'Bagaimana cara mengatur Kualitas saat mengekspor file WebP atau JPG yang difilter?',
        answer:
          'Pengaturan default 90% menjaga butiran film yang halus dan bayangan matte tetap bersih tanpa ukuran file yang besar. Jika Anda membutuhkan pelestarian lossless untuk pengeditan lebih lanjut, pilih PNG di bawah Format Output.',
      },
      {
        question: 'Apakah menerapkan filter menghapus tag EXIF kamera dan GPS yang sensitif?',
        answer:
          'Ya, menggambar piksel yang difilter ke HTML5 Canvas yang baru akan membuat file gambar baru yang bersih tanpa header EXIF. Tag model kamera, stempel waktu, dan koordinat GPS yang tertanam otomatis dikecualikan saat Anda mengunduh.',
      },
      {
        question: 'Bagaimana cara mengganti foto lain dengan cepat setelah mengunduh foto yang difilter?',
        answer:
          'Klik ikon tempat sampah di sudut kanan atas panel Pratinjau Filter untuk menghapus gambar Anda saat ini dan kembali ke dropzone. Semua memori pratinjau langsung dibebaskan untuk foto berikutnya.',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: 'Tambah Latar ke Gambar',
    shortDescription: 'Tempatkan gambar transparan atau berbingkai pada latar solid, gradien, atau blur.',
    category: 'create',
    seoTitle: 'Tambah Latar ke Gambar Gratis – Solid, Gradien & Blur',
    seoDescription:
      'Tambahkan latar ke file gambar atau PNG transparan secara online dengan warna solid, gradien dua warna, atau latar blur. Ekspor bingkai 1:1, 16:9, atau 4:5.',
    h1: 'Tambah Latar ke Gambar Online',
    subtitle:
      'Dibuat untuk penjual ecommerce, desainer logo, dan penerbit media sosial, tool ini memudahkan Anda menambahkan latar ke unggahan gambar atau potongan PNG transparan. Pilih swatch warna solid, gradien dua warna bersudut, atau latar foto blur yang berukuran untuk postingan persegi, story, atau layar lebar.',
    howToSteps: [
      {
        title: 'Unggah foto atau PNG transparan',
        description:
          'Letakkan gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG apa pun hingga 20 MB ke zona unggah, pilih dari disk, atau tempel dengan Ctrl+V.',
      },
      {
        title: 'Pilih Warna Solid, Gradien, atau Foto Blur',
        description:
          'Pilih Warna Solid dengan pemilih warna dan 6 swatch cepat, Gradien dengan dua warna dan slider sudut 0°–360°, atau Foto Blur dengan radius blur 4–50 px.',
      },
      {
        title: 'Pilih Rasio Aspek Canvas',
        description:
          'Klik Asli, 1:1 persegi, 16:9 layar lebar, 9:16 story vertikal, atau 4:5 potret sosial di bawah Rasio Aspek Canvas.',
      },
      {
        title: 'Sesuaikan Skala Gambar, Kebulatan, dan Bayangan',
        description:
          'Geser Skala Gambar (40%–100%) untuk mengontrol padding di sekitar subjek Anda, Kebulatan (0%–30%) untuk sudut yang lembut, dan aktifkan atau nonaktifkan Bayangan di Belakang Gambar.',
      },
      {
        title: 'Pilih format output dan unduh',
        description:
          'Periksa dimensi piksel Output yang tepat di bawah pratinjau, pilih PNG, JPG, atau WEBP, lalu klik Unduh Gambar.',
      },
    ],
    features: [
      { title: '3 Mode Latar', description: 'Pilih Warna Solid, Gradien Dua Warna, atau Latar Foto Blur untuk foto vertikal/horizontal dengan bingkai.' },
      { title: 'Rasio Aspek Sosial & Web', description: 'Sesuaikan foto apa pun ke bingkai Asli, 1:1 Persegi, 16:9 Layar Lebar, 9:16 Story, atau 4:5 Potret.' },
      { title: 'Skala Latar Depan, Radius & Bayangan', description: 'Tambahkan ruang napas, sudut membulat, dan bayangan lembut di sekitar gambar latar depan Anda.' },
      { title: 'Tanpa Unggahan', description: 'Dirender secara lokal lewat HTML5 Canvas dengan unduhan instan.' },
    ],
    faqs: [
      {
        question: 'Kapan saya harus menggunakan mode Foto Blur saat menambahkan latar ke gambar?',
        answer:
          'Mode Foto Blur mengisi margin canvas yang kosong di sekitar foto ponsel potret dengan salinan gambar Anda sendiri yang diperbesar dan diburamkan lembut, ditambah warna slate ringan 12%. Cara ini memungkinkan Anda menempatkan foto vertikal 9:16 ke dalam banner YouTube 16:9 atau persegi 1:1 tanpa bilah hitam yang jelek atau pemotongan.',
      },
      {
        question: 'Bagaimana cara menambahkan latar studio putih yang bersih di belakang potongan PNG transparan?',
        answer:
          'Pilih Warna Solid di bawah Jenis Latar, klik swatch putih #ffffff (atau masukkan warna hex apa pun), dan sesuaikan Skala Gambar jika Anda menginginkan ruang napas di sekitar produk. Ekspor sebagai JPG untuk unggahan marketplace yang ringan atau PNG untuk tepi yang tajam.',
      },
      {
        question: 'Bisakah saya menyesuaikan gradien linear multi-warna dengan sudut di belakang logo atau tangkapan layar aplikasi?',
        answer:
          'Ya, alihkan Jenis Latar ke Gradien untuk memilih Warna 1 dan Warna 2 lewat input warna, lalu seret slider Sudut ke nilai apa pun dari 0° hingga 360°. Cara ini ideal untuk mengubah tangkapan layar perangkat lunak yang polos menjadi kartu hero yang rapi untuk landing page.',
      },
      {
        question: 'Preset Rasio Aspek Canvas apa saja yang tersedia untuk postingan sosial?',
        answer:
          'Anda dapat beralih instan antara Asli (sesuai dimensi foto Anda), 1:1 (postingan persegi dan kartu produk), dan 16:9 (thumbnail dan banner YouTube). Preset vertikal untuk 9:16 (Story dan Reels) dan 4:5 (potret feed Instagram) juga sudah tersedia.',
      },
      {
        question: 'Bagaimana dimensi piksel output akhir ditentukan saat mengubah rasio aspek?',
        answer:
          'Pengekspor mengatur sisi terpanjang canvas output ke dimensi asli terpanjang foto Anda atau minimal 1.200 px, lalu menghitung sisi yang lebih pendek dengan bersih dari rasio yang Anda pilih. Misalnya, memilih 1:1 pada ikon 800×600 akan menghasilkan grafik 1200×1200 yang tajam.',
      },
      {
        question: 'Bagaimana Skala Gambar memengaruhi margin di sekitar gambar latar depan saya?',
        answer:
          'Skala Gambar (40% hingga 100%, default 85%) menentukan persentase kotak maksimum di dalam canvas latar yang dapat ditempati foto latar depan Anda sambil tetap proporsional. Mengatur 100% akan mengisi hingga ke tepi pada rasio yang cocok, sementara 60%–80% menampilkan bingkai latar yang lapang.',
      },
      {
        question: 'Apakah Kebulatan menerapkan sudut yang halus pada PNG transparan atau hanya foto persegi panjang?',
        answer:
          'Kebulatan (0%–30%) memotong area penempatan latar depan persegi panjang menggunakan kurva sudut kuadratik, yang membulatkan tangkapan layar dan foto persegi panjang dengan bersih. Pada potongan transparan yang subjeknya berada jauh di dalam tepi gambar, menaikkan Kebulatan membiarkan potongan bagian dalam tidak tersentuh sambil membulatkan kotak bayangannya.',
      },
      {
        question: 'Bagaimana Bayangan di Belakang Gambar berperilaku pada logo transparan dibanding foto solid?',
        answer:
          'Untuk foto atau tangkapan layar solid, bayangan ini memberikan bayangan elevasi yang halus dan lembut, proporsional dengan ukuran canvas, di belakang kartu latar depan yang membulat. Pada gambar alpha transparan, bayangan menggunakan isian latar samar 1% di dalam kotak yang dipotong agar latar depan tampak bersih dari latar terang atau gradien.',
      },
      {
        question: 'Jenis file gambar apa saja yang bisa saya impor untuk menambahkan latar?',
        answer:
          'Anda dapat mengunggah grafik JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB. GIF animasi menggambar frame awalnya sebagai lapisan latar depan.',
      },
      {
        question: 'Apakah tool ini otomatis menghapus latar foto yang sudah ada terlebih dahulu?',
        answer:
          'Tidak, editor ini menempatkan gambar yang Anda unggah (potongan transparan, logo, atau foto lengkap) ke canvas latar baru, bukan menjalankan segmentasi potongan AI. Jika Anda memiliki foto dengan adegan ramai yang ingin dihapus dulu, jalankan melalui tool Penghapus Latar kami lalu letakkan PNG transparan di sini.',
      },
      {
        question: 'Format output apa saja yang didukung dan pada kualitas kompresi berapa?',
        answer:
          'Anda dapat mengekspor komposisi jadi sebagai PNG, JPG, atau WEBP dengan kualitas ekspor Canvas 92% (pengodean lossless untuk PNG). Dimensi piksel output yang tepat muncul tepat di bawah canvas pratinjau sebelum Anda mengunduh.',
      },
      {
        question: 'Swatch warna cepat apa saja yang tersedia dalam mode Warna Solid?',
        answer:
          'Selain pemilih warna bawaan yang lengkap, tersedia enam swatch yang bisa diklik untuk diuji dalam satu klik: putih murni (#ffffff), slate gelap (#0f172a), biru merek (#2563eb), zamrud (#10b981), krem hangat (#fef3c7), dan abu-abu lembut (#f1f5f9). Anda dapat mengetuk swatch apa pun untuk melihat pratinjau instan lalu menyempurnakannya dengan input warna.',
      },
      {
        question: 'Seberapa halus kontrol Radius Blur Latar dalam mode Foto Blur?',
        answer:
          'Anda dapat menyesuaikan Radius Blur Latar dari 4 px (tekstur latar yang sedikit dilembutkan) hingga 50 px (warna sekitar yang buram dan lembut). Radius blur menyesuaikan secara dinamis dengan dimensi ekspor resolusi penuh Anda.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar langsung dari clipboard untuk membingkainya pada gradien?',
        answer:
          'Ya, salin tangkapan layar atau grafik lalu tekan Ctrl+V (atau Cmd+V) pada zona unggah untuk memuatnya langsung ke canvas latar. Memadukan latar gradien dengan skala 85%, sedikit kebulatan, dan bayangan membuat tangkapan layar dokumentasi tampak menonjol.',
      },
      {
        question: 'Apakah logo yang diunggah, mockup UI yang belum dirilis, atau potret pribadi dikirim ke server?',
        answer:
          'Tidak, pembuatan latar, filter blur, bayangan, dan pengodean file semuanya berjalan secara lokal di browser Anda menggunakan HTML5 Canvas. Tidak ada yang ditransmisikan melalui internet atau disimpan dari jarak jauh.',
      },
      {
        question: 'Bagaimana file latar yang diunduh diberi nama?',
        answer:
          'File yang diekspor mempertahankan nama dasar file Anda yang sudah dibersihkan dan menambahkan _background beserta ekstensi format yang Anda pilih, misalnya product-cutout_background.png atau banner_background.webp. File sumber asli Anda di disk tetap tidak tersentuh.',
      },
      {
        question: 'Apakah mengekspor dengan latar menghapus metadata lokasi EXIF dari foto kamera?',
        answer:
          'Ya, menyusun lapisan ke HTML5 Canvas yang baru dan mengodekan gambar baru akan mengecualikan header EXIF asli secara otomatis. Koordinat GPS, nomor seri kamera, dan stempel waktu pengambilan tidak pernah dibawa ke file yang diunduh.',
      },
      {
        question: 'Bisakah saya melihat pratinjau mode Foto Blur pada ikon kecil atau grafik SVG?',
        answer:
          'Ya, logo SVG inline mandiri atau grafik PNG kecil akan diskalakan ke latar penutup dan menerima blur Gaussian atau multi-pass yang halus di belakang latar depan vektor yang tajam. Pilih radius blur 25–45 px saat menghaluskan tepi vektor yang tajam menjadi halo sekitar yang lembut.',
      },
      {
        question: 'Mengapa mode Foto Blur menambahkan warna halus di atas latar yang diburamkan?',
        answer:
          'Lapisan slate gelap yang lembut pada opasitas 12% dilukis langsung di atas lapisan latar yang diburamkan sebelum menggambar subjek latar depan. Lapisan kontras yang halus ini membantu tepi terang, label putih, dan potongan transparan tetap terbaca dengan latar langit yang terang atau pola yang ramai.',
      },
      {
        question: 'Bagaimana cara mengganti foto latar depan tanpa kehilangan alur kerja yang saya sukai?',
        answer:
          'Klik Ubah Gambar di sudut kanan atas panel Pratinjau Latar untuk mengosongkan canvas saat ini dan mengunggah aset lain. Karena tool berjalan secara native di browser desktop dan seluler, mengganti gambar hanya membutuhkan waktu sesaat.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: 'Pemotong Gambar',
    shortDescription: 'Potong gambar menjadi ubin grid N×M atau strip dan unduh sebagai ZIP.',
    category: 'create',
    seoTitle: 'Pemotong Gambar Online Gratis – Ubin Grid & Unduh ZIP',
    seoDescription:
      'Iris foto menjadi ubin grid N×M, baris horizontal, atau strip carousel vertikal dengan pemotong gambar gratis. Periksa garis potong langsung dan unduh file ZIP.',
    h1: 'Pemotong Gambar Online',
    subtitle:
      'Dibuat untuk perencana grid Instagram, desainer UI, dan pembuat cetakan, pemotong gambar di browser ini membagi panorama lebar atau foto persegi menjadi hingga 10×10 ubin atau strip yang tepat. Periksa garis potong bernomor secara langsung dan simpan setiap irisan resolusi penuh satu per satu atau dalam satu unduhan ZIP.',
    howToSteps: [
      {
        title: 'Letakkan gambar untuk diiris',
        description:
          'Unggah foto JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG apa pun hingga 20 MB (atau tempel lewat Ctrl+V). Ubin potongan 3×3 awal dibuat otomatis saat diunggah.',
      },
      {
        title: 'Periksa Pratinjau Garis Potong bernomor',
        description:
          'Periksa grid overlay bergaris putus-putus di atas foto Anda di sebelah kiri yang menunjukkan batas ubin bernomor yang tepat (1 hingga N) sebelum mengekspor potongan akhir.',
      },
      {
        title: 'Pilih Tata Letak Potongan atau preset cepat',
        description:
          'Pilih Grid (N×M), Strip Horiz., atau Strip Vert., masukkan Baris dan Kolom dari 1 hingga 10, atau klik 2×2, 3×3 Instagram, 1×3 Carousel, atau 4×1 Strip.',
      },
      {
        title: 'Pilih format output dan Kualitas Ubin',
        description:
          'Pilih Asli, JPG, PNG, atau WEBP dan sesuaikan Kualitas Ubin (10%–100%, default 92%) untuk output non-PNG.',
      },
      {
        title: 'Buat irisan resolusi penuh',
        description:
          'Klik Potong menjadi N Ubin setiap kali Anda memperbarui Baris, Kolom, atau pengaturan format untuk mengiris ulang semua ubin pada batas piksel resolusi penuh yang tepat.',
      },
      {
        title: 'Simpan potongan satu per satu atau arsip ZIP',
        description:
          'Gunakan Unduh pada kartu ubin R·C bernomor mana pun di bawah, atau klik Unduh Semua Ubin (ZIP) untuk mengunduh seluruh grid bernomor sekaligus.',
      },
    ],
    features: [
      { title: 'Mode Grid & Strip yang Fleksibel', description: 'Potong menjadi grid Baris × Kolom kustom, baris horizontal, atau irisan vertikal.' },
      { title: 'Pratinjau Garis Potong Langsung', description: 'Lihat batas ubin bernomor yang dilapiskan pada gambar Anda sebelum memotong.' },
      { title: 'Pratinjau Ubin Instan & ZIP', description: 'Periksa setiap ubin yang dihasilkan dan unduh semua bagian dengan nama yang rapi (baris_kolom) dalam satu ZIP.' },
      { title: 'Pemotongan Resolusi Penuh', description: 'Setiap ubin diiris dengan bersih dari canvas asli resolusi penuh.' },
    ],
    faqs: [
      {
        question: 'Bagaimana pemotong gambar membuat grid profil Instagram 3×3 dengan rapi?',
        answer:
          'Klik tombol preset 3×3 Instagram (atau atur mode Grid dengan 3 Baris dan 3 Kolom) lalu klik Potong menjadi 9 Ubin. Setiap bagian diekspor dengan nomor berurutan dari baris 1 kolom 1 di kiri atas hingga baris 3 kolom 3 di kanan bawah, sehingga mengunggah dalam urutan terbalik akan membangun mosaik profil yang mulus.',
      },
      {
        question: 'Berapa ukuran grid maksimum yang bisa saya iris dalam satu kali proses?',
        answer:
          'Baik Baris (Potongan Horizontal) maupun Kolom (Potongan Vertikal) menerima nilai dari 1 hingga 10, memungkinkan 2 irisan hingga grid 10×10 dengan total 100 ubin. Karena setiap irisan menggunakan batas piksel yang dibulatkan di seluruh gambar asli Anda, ubin yang bersebelahan sejajar dari tepi ke tepi tanpa piksel yang hilang.',
      },
      {
        question: 'Apa perbedaan Strip Horiz. dan Strip Vert. dengan mode Grid (N×M)?',
        answer:
          'Strip Horiz. mengunci Kolom ke 1 dan mengiris banner horizontal selebar penuh yang ditumpuk dari atas ke bawah, yang berguna untuk tangkapan layar halaman web yang panjang atau bagian infografis yang tinggi. Strip Vert. mengunci Baris ke 1 dan membagi panorama lebar berdampingan menjadi slide carousel Instagram atau LinkedIn yang bisa digeser dengan mulus.',
      },
      {
        question: 'Preset Potongan sekali klik apa saja yang tersedia?',
        answer:
          'Empat tombol preset berada tepat di bawah input angka: 2×2 (4 kuadran), 3×3 Instagram (9 persegi grid), 1×3 Carousel (3 strip geser vertikal), dan 4×1 Strip (4 pita horizontal). Mengklik preset apa pun langsung memperbarui Pratinjau Garis Potong.',
      },
      {
        question: 'Apakah ubin yang dihasilkan diperkecil atau dipotong pada dimensi piksel asli penuh?',
        answer:
          'Setiap ubin diiris langsung dari lebar dan tinggi piksel penuh gambar sumber Anda di HTML5 Canvas tanpa diubah ukurannya. Misalnya, membagi panorama 3000×1000 menjadi strip Carousel 1×3 akan menghasilkan tiga ubin 1000×1000 yang tajam.',
      },
      {
        question: 'Apa yang terjadi jika lebar atau tinggi gambar saya tidak habis dibagi Baris atau Kolom?',
        answer:
          'Koordinat potong dihitung secara proporsional dengan Math.round di seluruh lebar dan tinggi penuh sehingga irisan yang bersebelahan berbagi batas piksel bulat yang tepat tanpa celah atau tumpang tindih. Beberapa ubin bisa berbeda 1 piksel saat membagi angka ganjil (misalnya 1000 px pada 3 kolom: 333, 334, 333).',
      },
      {
        question: 'Apakah saya perlu mengingat ubin mana yang dipasang di mana setelah mengunduh ZIP?',
        answer:
          'Tidak, setiap irisan menampilkan badge baris dan kolomnya (misalnya R1·C2) dan dimensi piksel yang tepat di bawah kartu pratinjaunya. Di dalam arsip ZIP, nama file mengikuti <dasar>_r<baris>_c<kolom>.<ekst> (misalnya panorama_r1_c1.jpg, panorama_r1_c2.jpg) dalam urutan baca.',
      },
      {
        question: 'Apakah perubahan pada Baris, Kolom, atau Format otomatis memperbarui ubin yang dihasilkan?',
        answer:
          'Saat pertama kali mengunggah file, ubin dibuat otomatis pada pengaturan tata letak aktif Anda. Setelah mengedit Baris, Kolom, atau Format Output, Pratinjau Garis Potong langsung diperbarui dan mengklik Potong menjadi N Ubin akan membuat ulang kartu ubin yang dapat diunduh dan ZIP.',
      },
      {
        question: 'Format input apa saja yang berfungsi di pemotong gambar?',
        answer:
          'Unggah gambar JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 20 MB masing-masing. Memilih Asli di bawah Format Output akan mempertahankan format sumber Anda (atau mengonversi HEIC/SVG/BMP dengan bersih ke PNG/JPG standar).',
      },
      {
        question: 'Apakah memotong sprite sheet PNG transparan menjaga latar transparan?',
        answer:
          'Ya, mengiris aset PNG atau WebP transparan akan menjaga transparansi alpha sepenuhnya saat Format Output adalah Asli, PNG, atau WEBP. Jika Anda secara eksplisit beralih Format Output ke JPG, canvas ubin akan mengisi transparansi dengan putih solid (#FFFFFF).',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar panjang dari clipboard dan mengirisnya menjadi bagian yang bisa dicetak?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V) pada zona unggah untuk meletakkan tangkapan layar clipboard langsung ke pemotong. Pilih Strip Horiz. dan atur 3–6 baris untuk memecah log obrolan yang tinggi atau tangkapan web menjadi halaman yang mudah dikelola.',
      },
      {
        question: 'Apakah slider Kualitas Ubin muncul untuk ubin PNG?',
        answer:
          'Tidak, ubin PNG selalu diodekan secara lossless sehingga Kualitas Ubin (10%–100%, default 92%) otomatis hanya tampil saat format hasil Anda adalah JPG atau WebP. Hal itu memastikan tepi yang tajam pada sprite, mockup UI, dan potongan teks.',
      },
      {
        question: 'Bagaimana unduhan ZIP massal diberi nama?',
        answer:
          'Mengklik Unduh Semua Ubin (ZIP) akan mengemas setiap ubin yang dihasilkan ke dalam satu arsip bernama <dasar>_<baris>x<kolom>_tiles.zip, misalnya hero_3x3_tiles.zip. Anda juga dapat mengunduh ubin satu per satu lewat tombol Unduh pada setiap kartu.',
      },
      {
        question: 'Apakah foto diunggah ke server eksternal selama pemotongan grid?',
        answer:
          'Tidak, perhitungan potong, pengirisan Canvas, pratinjau ubin, dan kompresi ZIP semuanya terjadi di dalam memori browser lokal. Karya pribadi, diagram, dan foto pribadi Anda tidak pernah meninggalkan perangkat Anda.',
      },
      {
        question: 'Apakah pemotongan menghapus tag EXIF kamera dan metadata lokasi GPS?',
        answer:
          'Ya, mengiris sub-region persegi panjang ke ubin HTML5 Canvas yang baru akan menghasilkan blob gambar bersih tanpa header EXIF. Akibatnya, detail kamera dan koordinat GPS dari foto asli tidak pernah disalin ke irisan individual.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah GIF animasi untuk dipotong menjadi ubin grid?',
        answer:
          'HTML5 Canvas mengekstrak dan mengiris frame pertama GIF menjadi ubin statis dalam format output yang Anda pilih. Memotong GIF animasi multi-frame sambil menjaga animasi tidak didukung di sini.',
      },
      {
        question: 'Mengapa ubin 3×3 saya bisa sedikit berbeda rasio aspeknya jika foto sumber saya tidak persegi?',
        answer:
          'Pemotong membagi gambar sumber Anda secara proporsional sepanjang lebar dan tinggi yang ada tanpa mendistorsi atau memotong tepi. Jika Anda menginginkan ubin persegi 1:1 untuk grid Instagram, potong gambar Anda menjadi 1:1 terlebih dahulu di tool Pemangkas Gambar kami sebelum mengiris 3×3.',
      },
      {
        question: 'Bagaimana cara mengganti gambar setelah mengunduh grid yang dipotong?',
        answer:
          'Klik Ubah Gambar di sudut kanan atas kartu Pratinjau Garis Potong untuk membebaskan URL ubin yang ada dari memori dan memuat gambar baru. Tidak perlu memuat ulang halaman.',
      },
      {
        question: 'Bisakah developer game menggunakan tool ini untuk mengiris lembar ikon atau tileset?',
        answer:
          'Ya, spritesheet yang disusun pada baris dan kolom yang seragam akan teriris secara akurat saat Anda mengatur jumlah Baris × Kolom yang cocok dan mempertahankan output PNG. Setiap ikon tersimpan rapi berdasarkan koordinat baris dan kolom di dalam ZIP.',
      },
      {
        question: 'Apakah Pemotong Gambar berjalan andal di iPhone, iPad, dan ponsel Android?',
        answer:
          'Ya, grid responsif, input angka baris/kolom, dan pengemasan ZIP di sisi klien berfungsi langsung di iOS Safari dan Android Chrome. Pemotongan 10×10 yang lebih besar pada foto bermegapiksel sangat tinggi berjalan paling cepat di desktop atau browser seluler modern.',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: 'Pengubah DPI Gambar',
    shortDescription: 'Ubah metadata DPI JPEG/PNG (72/150/300/kustom) secara lossless.',
    category: 'developer',
    seoTitle: 'Pengubah DPI Gambar Gratis – Ubah ke 300 DPI Lossless',
    seoDescription:
      'Perbarui tag kepadatan cetak JPEG JFIF/EXIF dan PNG pHYs dengan pengubah DPI gambar gratis. Atur DPI 72, 150, 300, 600, atau kustom secara lossless di browser.',
    h1: 'Pengubah DPI Gambar Gratis',
    subtitle:
      'Dibuat untuk desainer, percetakan, penulis, dan pelajar yang menyiapkan file untuk portal cetak, pengubah DPI gambar lossless ini memperbarui header resolusi JPEG dan PNG tanpa menyentuh data piksel. Beralihlah ke DPI 72, 96, 150, 300, 600, atau kustom dalam batch dengan pembacaan balik yang terverifikasi.',
    howToSteps: [
      {
        title: 'Pilih atau sesuaikan DPI Target Anda terlebih dahulu (atau kapan saja)',
        description:
          'Klik preset—72 DPI (Layar), 96 DPI (Windows), 150 DPI (Cetak Draf), 300 DPI (Cetak Berkualitas), atau 600 DPI (Arsip)—atau masukkan DPI Kustom apa pun dari 1 hingga 2.400.',
      },
      {
        title: 'Unggah satu atau beberapa gambar',
        description:
          'Letakkan file JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB masing-masing ke area unggah (atau tempel dengan Ctrl+V). File langsung diproses pada DPI yang Anda pilih.',
      },
      {
        title: 'Tinjau Sebelum, DPI Terverifikasi, dan metode pemrosesan',
        description:
          'Setiap kartu menampilkan DPI asli vs output yang terverifikasi beserta badge yang mengonfirmasi Pembaruan Header JPEG Lossless, Pembaruan pHYs PNG Lossless, atau Dikonversi ke PNG dengan DPI pHYs.',
      },
      {
        title: 'Ubah DPI secara dinamis pada file yang antre jika perlu',
        description:
          'Klik preset DPI lain atau ketik DPI Kustom baru lalu tekan Terapkan DPI [X] untuk memproses ulang setiap file dalam antrean Anda secara otomatis.',
      },
      {
        title: 'Unduh file satu per satu atau ZIP batch',
        description:
          'Klik Unduh pada kartu hasil individual (bernama <dasar>_<dpi>dpi.<ekst>), atau klik Unduh Semua (ZIP) kapan pun dua file atau lebih sudah siap.',
      },
    ],
    features: [
      { title: 'Edit Header JPEG & PNG Lossless Sejati', description: 'Memperbarui densitas JFIF APP0/EXIF pada JPEG dan chunk pHYs (dengan CRC32 yang valid) pada PNG tanpa menyentuh piksel gambar.' },
      { title: 'Pembacaan Balik Sebelum & Sesudah Terverifikasi', description: 'Mem-parsing ulang file output secara otomatis sehingga Anda melihat DPI terverifikasi yang persis tersimpan di dalam file.' },
      { title: 'Pemrosesan DPI Batch', description: 'Perbarui puluhan grafik siap cetak sekaligus dan ekspor dalam arsip ZIP.' },
      { title: 'Fallback WebP/HEIC', description: 'Format non-DPI dapat dikonversi dengan bersih ke PNG lossless dengan chunk DPI pHYs yang tepat tertanam.' },
    ],
    faqs: [
      {
        question: 'Bagaimana pengubah DPI gambar ini mengedit file JPEG dan PNG tanpa kehilangan kualitas?',
        answer:
          'Alih-alih mendekode dan mengompresi ulang piksel di Canvas, tool ini langsung menambal segmen metadata biner—memperbarui atau menyisipkan tag resolusi JFIF APP0 dan EXIF IFD0 pada JPEG, serta menulis chunk pHYs yang valid dengan checksum CRC32 pada PNG. Setiap piksel visual dan blok kompresi tetap 100% tidak tersentuh.',
      },
      {
        question: 'Apakah mengubah DPI akan mengubah lebar dan tinggi piksel atau ukuran cetak fisik?',
        answer:
          'Mengubah DPI membuat dimensi piksel tetap sama persis—misalnya, foto 3000×2400 tetap 3000×2400 px. Yang berubah adalah header kepadatan cetak yang memberi tahu aplikasi penerbitan seperti Photoshop, InDesign, atau portal cetak untuk menafsirkannya pada 10×8 inci pada 300 DPI, bukan 41,6×33,3 inci pada 72 DPI.',
      },
      {
        question: 'Mengapa foto kamera atau tangkapan layar yang diunggah sering menampilkan Sebelum: Tidak diatur?',
        answer:
          'Banyak ekspor ponsel, tangkapan layar, dan pengoptimal web menghapus kolom resolusi JFIF/EXIF atau menghilangkan chunk pHYs PNG yang opsional, sehingga penampil mengasumsikan fallback 72 atau 96 DPI. Tool kami menyuntikkan header standar agar validator cetak mendeteksi 300 DPI dengan andal.',
      },
      {
        question: 'Bagaimana badge DPI Terverifikasi mengonfirmasi bahwa pembaruan benar-benar berhasil?',
        answer:
          'Setelah membangun Blob biner yang diperbarui, tool menjalankan parser header binernya kembali dari awal pada file output untuk membaca densitas X/Y yang baru tertanam. Hal itu menjamin file yang diunduh lolos pemeriksaan portal cetak otomatis dan inspektor desktop.',
      },
      {
        question: 'Apa yang terjadi saat saya mengunggah file WebP, HEIC, BMP, GIF, atau SVG?',
        answer:
          'Format yang tidak memiliki header DPI standar lintas perangkat lunak (seperti WebP atau BMP) didekode secara lokal dan dikonversi dengan bersih ke PNG lossless dengan chunk DPI pHYs yang tepat tertanam. Anda akan melihat badge Dikonversi ke PNG dengan DPI pHYs pada kartu-kartu tersebut.',
      },
      {
        question: 'Preset DPI apa saja yang tersedia dan rentang apa yang diterima DPI Kustom?',
        answer:
          'Lima preset cepat mencakup standar umum: 72 DPI (Layar), 96 DPI (Windows), 150 DPI (Cetak Draf), 300 DPI (Cetak Berkualitas), dan 600 DPI (Arsip). DPI Kustom memungkinkan Anda mengetik bilangan bulat apa pun antara 1 dan 2.400 DPI.',
      },
      {
        question: 'Apakah memperbarui DPI JPEG menjaga tag EXIF kamera atau profil ICC saya yang sudah ada?',
        answer:
          'Ya, penyalin segmen JPEG lossless kami membiarkan profil warna, tag kamera, dan data pindaian gambar Anda tetap utuh sambil memperbarui densitas JFIF APP0 dan EXIF XResolution/YResolution/ResolutionUnit jika ada segmen EXIF APP1. Jika tidak ada header JFIF, tool menyisipkan segmen JFIF APP0 18-byte yang bersih tepat setelah SOI.',
      },
      {
        question: 'Mengapa DPI PNG terkadang terbaca 299 atau 300 DPI setelah konversi?',
        answer:
          'Spesifikasi resmi PNG pHYs menyimpan resolusi dalam piksel per meter, bukan titik per inci, sehingga 300 DPI dikonversi menjadi 11.811 piksel per meter. Membulatkan piksel per meter kembali ke inci akan menghasilkan 300 DPI yang tepat dan bersih di hampir setiap nilai preset.',
      },
      {
        question: 'Apakah mengubah thumbnail web 400×400 beresolusi rendah ke 300 DPI akan membuatnya tajam untuk dicetak?',
        answer:
          'Tidak, memperbarui DPI hanya mengubah instruksi metadata, bukan jumlah piksel—file 400×400 piksel pada 300 DPI hanya tercetak tajam pada ukuran 1,33×1,33 inci. Untuk menutupi ukuran kertas yang lebih besar dengan bersih pada 300 DPI, Anda membutuhkan dimensi piksel yang lebih besar pada karya sumber.',
      },
      {
        question: 'Bisakah saya memperbarui beberapa aset cetak ke 300 DPI sekaligus dan mengekspor satu ZIP?',
        answer:
          'Ya, letakkan sejumlah file JPG atau PNG hingga 20 MB masing-masing dan semuanya akan diproses ke DPI yang Anda pilih secara berurutan. Kapan pun dua file atau lebih selesai, bilah Batch Siap akan muncul dengan tombol Unduh Semua (ZIP) yang menghasilkan images_<dpi>dpi_compressmypic.zip.',
      },
      {
        question: 'Bisakah saya berubah pikiran dan menerapkan 600 DPI lagi setelah file sudah diproses pada 300 DPI?',
        answer:
          'Ya, mengklik tombol Preset DPI Target lain langsung memperbarui dan memproses ulang setiap file dalam antrean Anda dari file asli yang diunggah tanpa menumpuk editan. Jika Anda mengetik angka ke DPI Kustom, klik Terapkan DPI untuk menyegarkan semua item pada densitas kustom tersebut.',
      },
      {
        question: 'Apakah mengatur 300 DPI membuat ukuran file JPEG atau PNG jauh lebih besar?',
        answer:
          'Tidak, menambahkan atau menambal header JFIF APP0 (18 byte) atau chunk pHYs PNG (21 byte) hanya mengubah total bobot file sekitar beberapa lusin byte paling banyak untuk JPEG dan PNG native. Hanya format non-DPI yang dikonversi menjadi PNG lossless yang berubah ukurannya.',
      },
      {
        question: 'Apakah bukti rahasia, sampul buku, atau pindaian ID dikirim ke server eksternal?',
        answer:
          'Tidak, parsing byte biner, perhitungan checksum CRC32, dan penambalan header semuanya berjalan secara lokal di ArrayBuffer browser. File Anda tidak pernah meninggalkan komputer atau ponsel Anda.',
      },
      {
        question: 'Mengapa platform penerbitan seperti Amazon KDP atau jurnal akademik menolak file 72 DPI?',
        answer:
          'Banyak portal preflight cetak otomatis memeriksa tag resolusi JFIF atau pHYs PNG pada gambar dan menolak pengiriman di bawah 300 DPI meskipun dimensi pikselnya sudah memadai. Memperbarui tag header ke 300 DPI akan memenuhi pemeriksaan preflight tersebut tanpa mengompresi ulang karya.',
      },
      {
        question: 'Bagaimana file output diberi nama saat disimpan satu per satu atau dalam ZIP?',
        answer:
          'Setiap file yang diperbarui mempertahankan nama dasarnya yang sudah dibersihkan dan menambahkan _<target>dpi beserta ekstensinya, misalnya poster_300dpi.jpg atau diagram_600dpi.png. Hal itu menghindari penimpaan file asli Anda di disk.',
      },
      {
        question: 'Apakah pengubah DPI berfungsi pada JPEG yang awalnya memakai titik per cm, bukan titik per inci?',
        answer:
          'Ya, pembaca mengenali unit=1 (titik per inci) maupun unit=2 (titik per cm, dikali 2,54) pada tag JFIF dan EXIF saat menampilkan DPI Sebelum. Saat menulis header output, tool menstandarkan densitas dengan bersih ke inci (DPI) untuk kompatibilitas universal.',
      },
      {
        question: 'Bisakah saya menghapus atau menghilangkan tag DPI, bukan mengubahnya?',
        answer:
          'Tool ini selalu menanamkan atau memperbarui header DPI target yang Anda pilih agar sesuai standar cetak atau tampilan. Jika Anda ingin menghapus semua metadata JFIF, EXIF, dan chunk PNG demi privasi, jalankan file Anda melalui tool Hapus Metadata Gambar kami.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah JPEG yang rusak atau format yang tidak didukung?',
        answer:
          'Setiap file yang antre berjalan secara independen di dalam penangan error-nya sendiri sehingga satu gambar yang tidak bisa dibaca tidak akan menghentikan batch Anda yang lain. Item yang gagal menampilkan peringatan merah inline yang jelas sementara file yang valid selesai dan dikemas ke unduhan ZIP Anda seperti biasa.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar clipboard dan langsung memberi stempel 300 DPI?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V) pada zona unggah untuk memasukkan PNG clipboard langsung ke pemroses. Tool akan menulis chunk pHYs 300 DPI yang valid secara lossless dalam sekejap.',
      },
      {
        question: 'Apakah editor DPI lossless ini berfungsi di browser Windows, Mac, Linux, dan seluler?',
        answer:
          'Ya, API standar browser ArrayBuffer dan DataView berjalan bersih di Chrome, Firefox, Edge, dan Safari desktop serta browser seluler. Tidak pernah diperlukan perangkat lunak desktop, plugin, atau unggahan server.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: 'Gambar ke Base64',
    shortDescription: 'Encode gambar apa pun menjadi Data URL Base64, tag img HTML, atau cuplikan CSS.',
    category: 'developer',
    seoTitle: 'Konverter Gambar ke Base64 – Data URL, HTML & CSS Gratis',
    seoDescription:
      'Encode gambar dengan konverter gambar ke Base64 gratis langsung di browser Anda. Hasilkan Data URL, string Base64 mentah, tag img HTML, dan cuplikan CSS url().',
    h1: 'Konverter Gambar ke Base64',
    subtitle:
      'Dibuat untuk developer frontend, pembuat template email, dan penulis teknis, konverter gambar ke Base64 lokal ini mengubah aset gambar biner menjadi string teks siap salin dalam satu langkah. Beralihlah instan antara tab Data URL, Base64 Mentah, HTML img, dan CSS url() tanpa mengunggah ikon proprietary.',
    howToSteps: [
      {
        title: 'Letakkan, pilih, atau tempel gambar',
        description:
          'Unggah file JPG, PNG, WebP, SVG, GIF, BMP, ICO, atau AVIF apa pun hingga 15 MB ke dropzone, atau tempel gambar clipboard lewat Ctrl+V.',
      },
      {
        title: 'Tinjau ukuran file dan overhead karakter',
        description:
          'Periksa kartu ringkasan atas yang menampilkan thumbnail gambar Anda, ukuran byte asli, dimensi alami (jika berlaku), jumlah karakter output yang tepat, dan persentase overhead Base64.',
      },
      {
        title: 'Beralih antara 4 tab output developer',
        description:
          'Klik Data URL, Base64 Mentah, HTML <img>, atau CSS url() untuk memformat string yang di-encode untuk payload JSON, gambar inline HTML, atau stylesheet.',
      },
      {
        title: 'Salin ke clipboard atau simpan sebagai file .txt',
        description:
          'Klik Salin Output (atau klik di dalam kotak kode untuk memilih semua) untuk menyalin string, atau klik Simpan .TXT untuk mengunduh <namafile>_<tab>.txt.',
      },
      {
        title: 'Klik Encode Lain untuk mengganti file',
        description:
          'Saat siap meng-encode ikon atau sprite berikutnya, klik Encode Lain untuk mengosongkan output dan membebaskan memori objek lokal.',
      },
    ],
    features: [
      { title: '4 Format Output Developer', description: 'Hasilkan cuplikan Data URL, Base64 Mentah, HTML <img>, dan CSS background-image secara otomatis.' },
      { title: 'Metrik Byte & Karakter yang Tepat', description: 'Bandingkan ukuran file biner asli vs panjang string Base64 yang di-encode langsung.' },
      { title: 'Salin Sekali Klik & Unduh TXT', description: 'Salin string Base64 yang besar ke clipboard dengan andal atau simpan sebagai file teks biasa.' },
      { title: '100% Encode FileReader Lokal', description: 'Tanpa unggahan — pengodean terjadi secara native di dalam tab browser Anda.' },
    ],
    faqs: [
      {
        question: 'Mengapa konverter gambar ke Base64 menambahkan sekitar 33% pada ukuran output?',
        answer:
          'Base64 merepresentasikan setiap 3 byte biner (24 bit) menggunakan 4 karakter ASCII yang bisa dicetak (6 bit masing-masing), ditambah hingga dua tanda sama dengan sebagai padding di akhir. Akibatnya, gambar 30 KB selalu di-encode menjadi sekitar 40 KB teks Base64, yang dilacak otomatis oleh bilah ringkasan.',
      },
      {
        question: 'Empat format output apa yang bisa saya hasilkan setelah meng-encode gambar?',
        answer:
          'Empat tab berada tepat di atas kotak kode: Data URL (URI data:image/...;base64,... yang lengkap), Base64 Mentah (payload yang dipangkas tanpa awalan), HTML <img> (tag siap pakai dengan alt yang dibersihkan dan atribut lebar/tinggi), dan CSS url() (aturan background-image: url("...");).',
      },
      {
        question: 'Apakah pengodean mengubah kualitas gambar, menghapus kode SVG, atau meratakan GIF animasi?',
        answer:
          'Tidak, encoder membaca file biner mentah secara langsung melalui FileReader.readAsDataURL di browser tanpa menggambar ke Canvas. Setiap byte asli, elemen XML SVG vektor, frame ICO, dan frame animasi GIF tetap 100% identik bit demi bit.',
      },
      {
        question: 'Format file gambar dan ukuran unggahan maksimum apa yang didukung?',
        answer:
          'Anda dapat meng-encode gambar JPG, PNG, WebP, SVG, GIF, BMP, favicon ICO, dan AVIF hingga 15 MB per file. Membatasi input Base64 hingga 15 MB mencegah string teks bermegabyte membekukan rendering clipboard atau textarea.',
      },
      {
        question: 'Kapan developer sebaiknya menyisipkan Data URL Base64 dibanding merujuk file gambar biasa?',
        answer:
          'Menyisipkan ikon UI kecil, spinner, favicon, atau badge tanda tangan email di bawah beberapa kilobyte akan menghilangkan round-trip HTTP tambahan dan berfungsi bersih dalam dokumen HTML mandiri. Untuk foto hero yang besar, URL gambar WebP atau JPG biasa tetap lebih kecil dan mendapat manfaat dari caching HTTP browser.',
      },
      {
        question: 'Mengapa tab HTML <img> otomatis menyertakan atribut lebar dan tinggi?',
        answer:
          'Begitu browser Anda memuat pratinjau objek sementara dan membaca naturalWidth dan naturalHeight, dimensi piksel tersebut mengisi cuplikan HTML bersama tag alt yang berasal dari nama dasar file Anda. Menyertakan dimensi membantu mencegah Cumulative Layout Shift (CLS) pada halaman web.',
      },
      {
        question: 'Bisakah saya mengunduh output Base64 yang panjang saat menyalin string besar tidak praktis?',
        answer:
          'Ya, klik Simpan .TXT di samping Salin Output untuk mengunduh teks persis yang ditampilkan pada tab aktif Anda (Data URL, Base64 Mentah, HTML, atau CSS) sebagai <dasar>_<tab>.txt. Hal itu membuat membuka payload yang sangat panjang dengan bersih di VS Code atau skrip terminal menjadi mudah.',
      },
      {
        question: 'Apa yang terjadi jika browser saya memblokir izin clipboard saat mengklik Salin Output?',
        answer:
          'Jika navigator.clipboard.writeText diblokir oleh pengaturan privasi browser, catatan inline akan meminta Anda menyalin langsung dari kotak kode. Mengklik atau masuk ke textarea monospace gelap otomatis menyorot seluruh string sehingga Ctrl+C / Cmd+C menyalin semuanya dengan bersih.',
      },
      {
        question: 'Apa perbedaan Base64 Mentah dengan Data URL saat mengirim payload JSON API?',
        answer:
          'Data URL menambahkan awalan data:<mime>;base64, sehingga browser dapat merendernya langsung di dalam atribut src atau aturan CSS url(). API, database seluler, dan encoder server sering mengharapkan Base64 Mentah saja—beralih ke tab Base64 Mentah akan menghapus header secara otomatis.',
      },
      {
        question: 'Apakah ikon UI proprietary, diagram rahasia, atau aset klien diunggah ke mana pun?',
        answer:
          'Tidak pernah — FileReader membaca byte secara ketat di dalam memori browser sisi klien lokal. Tidak ada file gambar atau string Base64 yang pernah ditransmisikan ke server jarak jauh.',
      },
      {
        question: 'Bisakah saya meng-encode logo SVG atau file favicon.ico dengan bersih?',
        answer:
          'Ya, ekstensi .svg dan .ico secara eksplisit didukung dalam filter unggahan dan di-encode dengan awalan MIME data:image/svg+xml atau image/x-icon yang sesuai. Anda juga dapat meletakkan file ke konverter lalu memverifikasinya bolak-balik dengan dekoder Base64 ke Gambar kami.',
      },
      {
        question: 'Mengapa persentase overhead sedikit lebih tinggi pada tab HTML <img> dan CSS url()?',
        answer:
          'Selain ekspansi pengodean Base64 sebesar 33% dan header MIME Data URL, tab HTML dan CSS membungkus karakter markup tambahan seperti <img src="..." alt="..." />. Penghitung ringkasan menghitung ulang karakter secara langsung setiap kali Anda berganti tab.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar langsung dari clipboard untuk mendapatkan Data URL dengan cepat?',
        answer:
          'Ya, tekan Ctrl+V (atau Cmd+V di Mac) di mana saja pada layar unggah untuk menangkap gambar yang disalin dari clipboard Anda secara langsung. Tool langsung meng-encode-nya menjadi format Data URL, Base64 Mentah, HTML, dan CSS yang siap disalin sekali klik.',
      },
      {
        question: 'Apakah Base64 Mentah mempertahankan karakter + dan / standar dengan padding =?',
        answer:
          'Ya, FileReader browser menghasilkan string Base64 standar RFC 4648 yang memakai +, /, dan karakter padding = di akhir, bukan substitusi base64url yang aman untuk URL. Hal itu memastikan kompatibilitas langsung dengan data URI HTML, payload email MIME, dan dekoder backend standar.',
      },
      {
        question: 'Mengapa klien email terkadang memblokir gambar Base64 inline?',
        answer:
          'Beberapa penyedia webmail dan filter spam perusahaan menghapus URI data:image dalam newsletter HTML demi keamanan meskipun browser menampilkannya dengan baik. Base64 paling cocok untuk aplikasi web, dokumen HTML file tunggal, bundle React/CSS, dan template JSON/SVG.',
      },
      {
        question: 'Bagaimana cara menjaga metadata kamera asli atau menghapusnya sebelum pengodean Base64?',
        answer:
          'Karena tool ini meng-encode byte mentah yang persis, metadata EXIF yang ada di dalam JPEG akan tetap ter-encode di dalam string Base64. Jika Anda menginginkan string Base64 yang lebih kecil dan bebas metadata, jalankan foto Anda melalui tool Hapus Metadata Gambar kami sebelum meng-encode.',
      },
      {
        question: 'Haruskah saya mengecilkan PNG atau JPG besar sebelum mengonversinya ke Base64?',
        answer:
          'Ya—karena Base64 membengkakkan ukuran sekitar 33%, mengompres PNG 300 KB menjadi WebP 40 KB terlebih dahulu akan menghemat sekitar 350 KB pembengkakan teks Base64 di stylesheet atau bundle Anda. Gunakan Kompresor Gambar atau Pengoptimal Gambar Web kami sebelumnya untuk penghematan besar.',
      },
      {
        question: 'Mengapa dimensi tidak muncul pada file ICO tertentu yang tidak umum atau file yang cacat?',
        answer:
          'Jika browser tidak dapat mendekode ICO multi-frame yang tidak biasa atau header eksotis menjadi pratinjau HTMLImageElement, dimensi akan dihilangkan dengan bersih dari ringkasan sementara pengodean Base64 mentah tetap berhasil. PNG, JPG, WebP, GIF, SVG, BMP, dan AVIF standar menampilkan jumlah piksel L×T yang tepat.',
      },
      {
        question: 'Bagaimana cara meng-encode gambar lain setelah menyalin cuplikan pertama?',
        answer:
          'Klik Encode Lain di sudut kanan atas kartu ringkasan untuk mengatur ulang tab output dan mengosongkan textarea. Tindakan itu langsung membebaskan memori pratinjau sementara dan memulihkan dropzone untuk aset Anda berikutnya.',
      },
      {
        question: 'Apakah encoder Base64 berfungsi di browser seluler Safari dan Chrome?',
        answer:
          'Ya, API bawaan HTML5 FileReader dan Clipboard berjalan andal di iOS Safari, Android Chrome, Windows, macOS, dan Linux. Karena pengodean berjalan secara lokal di memori browser, tidak ada penundaan server sama sekali bahkan pada data seluler.',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/base64-to-image',
    name: 'Base64 ke Gambar',
    shortDescription: 'Dekode Data URL Base64 atau string Base64 mentah kembali menjadi gambar.',
    category: 'developer',
    seoTitle: 'Dekoder Base64 ke Gambar Gratis – Pratinjau & Unduh File',
    seoDescription:
      'Ubah string yang di-encode kembali menjadi grafik dengan dekoder Base64 ke gambar gratis. Deteksi otomatis byte PNG, JPG, WebP, GIF, atau SVG dan simpan lokal.',
    h1: 'Dekoder Base64 ke Gambar',
    subtitle:
      'Dirancang untuk insinyur web yang men-debug payload API, pemasar email yang memeriksa ikon inline, dan penguji QA, dekoder Base64 ke gambar di browser ini merekonstruksi Data URL dan string Base64 mentah menjadi file yang bisa diunduh. Periksa format MIME yang terdeteksi, dimensi piksel, dan ukuran byte secara privat di perangkat Anda.',
    howToSteps: [
      {
        title: 'Tempel string Base64 atau Data URL Anda',
        description:
          'Tempel string data:image/...;base64,... yang lengkap atau karakter Base64 mentah ke dalam kotak Tempel String Base64 atau Data URL.',
      },
      {
        title: 'Tunggu dekode otomatis (atau klik Dekode Gambar)',
        description:
          'Dekoder langsung mem-parsing spasi, karakter yang aman untuk URL, dan byte header magic saat ditempel (atau saat mengklik Dekode Gambar) untuk memvalidasi gambar.',
      },
      {
        title: 'Periksa pratinjau, format, ukuran, dan dimensi',
        description:
          'Lihat grafik yang didekode di atas papan catur transparansi bersama badge Gambar Valid Didekode, Format Terdeteksi, Ukuran Biner, dan piksel Lebar × Tinggi.',
      },
      {
        title: 'Pilih Format Unduhan Anda',
        description:
          'Pilih Asli untuk menyimpan file biner yang didekode persis tanpa disentuh, atau pilih PNG, JPG, atau WEBP untuk mengonversi gambar saat diekspor.',
      },
      {
        title: 'Unduh file gambar Anda yang didekode',
        description:
          'Klik Unduh File Gambar untuk menyimpan decoded_image.<ekst> langsung ke perangkat Anda, atau klik Hapus di atas kotak input untuk menguji payload lain.',
      },
    ],
    features: [
      { title: 'Deteksi Otomatis Awalan Data URL yang Hilang', description: 'Otomatis mengidentifikasi header magic PNG, JPEG, GIF, WebP, BMP, dan SVG bahkan dari Base64 mentah.' },
      { title: 'Validasi Instan & Pesan Error', description: 'Menangkap karakter Base64 yang tidak valid atau header yang rusak dengan jelas.' },
      { title: 'Konversi Format Opsional', description: 'Unduh biner yang didekode persis atau ekspor ulang sebagai PNG, JPG, atau WebP.' },
      { title: 'Dekode Privat di Browser', description: 'Aman untuk token internal, aset email, dan ikon UI proprietary.' },
    ],
    faqs: [
      {
        question: 'Bisakah dekoder Base64 ke gambar ini membaca string yang menghilangkan awalan data:image/?',
        answer:
          'Ya, jika Anda menempel Base64 mentah tanpa header Data URL, dekoder memeriksa byte tanda magic yang didekode di bagian depan aliran biner. Dekoder otomatis mendeteksi PNG, JPEG, GIF, WebP, BMP, ICO, dan markup XML/SVG inline.',
      },
      {
        question: 'Apakah tool ini menangani varian Base64 yang aman untuk URL dan jeda baris yang tidak disengaja?',
        answer:
          'Ya, sebelum memanggil atob(), dekoder otomatis menghapus spasi, spasi kosong, dan pembungkus baris serta mengonversi karakter - dan _ yang aman untuk URL kembali menjadi + dan / standar. Hal itu membuat penempelan string yang dibungkus dari log JSON, output terminal, atau payload JWT berfungsi dengan bersih.',
      },
      {
        question: 'Apa yang terjadi jika saya menempel payload Base64 yang rusak atau bukan gambar?',
        answer:
          'Karakter Base64 yang tidak valid langsung memicu pesan validasi, sementara byte Base64 valid yang tidak membentuk gambar yang bisa dibaca browser akan menampilkan error eksplisit yang menjelaskan bahwa byte tidak dapat dirender. Tidak ada yang rusak atau macet di halaman.',
      },
      {
        question: 'Opsi Format Unduhan apa saja yang ditawarkan setelah string didekode?',
        answer:
          'Anda dapat memilih Asli, PNG, JPG, atau WEBP sebelum menyimpan. Memilih Asli akan menyimpan byte biner mentah yang persis tanpa disentuh sebagai decoded_image.<ekst>, sedangkan PNG, JPG, atau WEBP akan merender ulang grafik yang didekode ke HTML5 Canvas.',
      },
      {
        question: 'Apa yang terjadi pada area transparan jika saya mengekspor ulang PNG atau SVG yang didekode sebagai JPG?',
        answer:
          'Memilih JPG di Format Unduhan otomatis mengisi Canvas dengan latar putih solid (#FFFFFF) yang bersih sebelum pengodean pada kualitas 92%. Mempertahankan Asli, PNG, atau WEBP akan menjaga transparansi penuh di atas pratinjau papan catur.',
      },
      {
        question: 'Apakah dekoder menjaga GIF animasi dan SVG vektor saat diatur ke Asli?',
        answer:
          'Ya, memilih Asli akan mengunduh Blob persis yang dibuat langsung dari array byte yang Anda dekode, menjaga jalur vektor SVG dan animasi GIF multi-frame tetap utuh. Perlu dicatat, beralih Format Unduhan ke PNG, JPG, atau WEBP akan merasterisasi SVG atau frame pertama GIF lewat Canvas.',
      },
      {
        question: 'Metrik apa saja yang muncul di samping pratinjau gambar yang didekode?',
        answer:
          'Setelah divalidasi, panel ringkasan di sebelah kanan menampilkan badge status hijau Gambar Valid Didekode bersama Format Terdeteksi (misalnya PNG, JPEG, atau SVG+XML). Tepat di bawahnya, Anda dapat memeriksa Ukuran Biner yang didekode persis dalam KB/MB dan Dimensi alami dalam piksel.',
      },
      {
        question: 'Mengapa string data:image/svg+xml tanpa ;base64, menampilkan error pengodean?',
        answer:
          'Data URI non-base64 (seperti string SVG yang di-encode persen seperti data:image/svg+xml,%3Csvg...) adalah teks biasa, bukan payload Base64. Tool ini secara eksplisit memvalidasi payload Base64 standar atau data URL ;base64, sehingga input yang tidak valid gagal dengan jelas.',
      },
      {
        question: 'Apakah ada risiko mendekode respons API internal, token QR, atau ikon privat di sini?',
        answer:
          'Tidak, semua sanitasi string, dekode byte atob(), pengendus tanda MIME, dan rendering gambar berjalan ketat di dalam memori tab browser Anda. String yang di-encode tidak pernah melintasi jaringan atau menyentuh log jarak jauh.',
      },
      {
        question: 'Bagaimana pratinjau papan catur membantu memeriksa ikon yang didekode?',
        answer:
          'Pola papan catur abu-abu muda yang halus dirender di belakang bingkai pratinjau sehingga potongan transparan, ikon UI putih, dan bayangan lembut langsung tampak menonjol. Tanpa papan catur, logo transparan putih akan menyatu tanpa terlihat ke dalam panel putih kosong.',
      },
      {
        question: 'Mengapa ukuran file biner yang didekode lebih kecil daripada teks Base64 yang saya tempel?',
        answer:
          'Teks Base64 memperluas data biner sekitar 33% dengan memakai 6 bit per karakter ASCII. Mengonversinya kembali menjadi byte gambar mentah akan memulihkan ukuran file biner asli yang ringkas.',
      },
      {
        question: 'Bisakah saya membungkus tanda kutip HTML atau CSS url("...") di sekitar string saya sebelum menempel?',
        answer:
          'Untuk validasi yang bersih, tempel hanya Data URL (data:image/...;base64,...) atau karakter Base64 itu sendiri tanpa tag HTML atau tanda kutip CSS di sekelilingnya. Menghapus tanda kutip di sekitarnya memastikan validator membaca Base64 murni.',
      },
      {
        question: 'Bagaimana cara mengonversi string Base64 favicon BMP atau ICO lama yang didekode menjadi WebP modern?',
        answer:
          'Tempel Base64 mentah atau Data URL, konfirmasikan pratinjau dirender dengan bersih, klik WEBP di pemilih Format Unduhan, lalu tekan Unduh File Gambar. Pengekspor Canvas langsung menghasilkan gambar WebP yang terkompresi.',
      },
      {
        question: 'Seberapa cepat dekode bekerja untuk string Base64 bermegabyte?',
        answer:
          'Dekode terjadi dalam hitungan milidetik secara lokal di JavaScript untuk ikon kecil dan foto web biasa di bawah beberapa megabyte. String yang ditempel sangat besar (puluhan megabyte teks) terutama bergantung pada kecepatan tempel textarea browser Anda.',
      },
      {
        question: 'Bisakah saya mendekode string Base64 SVG+XML menjadi file PNG raster yang tajam?',
        answer:
          'Ya, tempel Data URL SVG yang di-encode Base64 atau markup Base64 SVG mentah, yang diidentifikasi dekoder lewat header <svg atau <?xml secara otomatis. Lalu alihkan Format Unduhan dari Asli ke PNG untuk merasterisasi grafik vektor ke Canvas pada ukuran alaminya.',
      },
      {
        question: 'Mengapa file output selalu diunduh sebagai decoded_image.<ekst>?',
        answer:
          'String Base64 standar dan Data URL meng-encode byte gambar mentah dan tipe MIME tanpa membawa nama file asli. Agar unduhan tetap dapat diprediksi di semua input, pengekspor menamai file yang disimpan decoded_image diikuti ekstensi format yang terdeteksi atau dipilih.',
      },
      {
        question: 'Apa cara tercepat untuk menghapus string Base64 yang besar dan memeriksa string berikutnya?',
        answer:
          'Klik Hapus di sudut kanan atas kartu Tempel String Base64 untuk menghapus textarea dalam satu ketukan. Tindakan itu langsung menghapus panel pratinjau dan mencabut URL objek sementara dari memori browser.',
      },
      {
        question: 'Apakah menempel string Base64 otomatis mendekode tanpa perlu mengklik Dekode Gambar?',
        answer:
          'Ya, dekode langsung berjalan begitu teks masuk atau berubah di dalam kotak input sehingga payload yang valid muncul pratinjaunya dalam hitungan milidetik. Tombol Dekode Gambar tetap siap kapan pun Anda ingin menjalankan validasi secara manual.',
      },
      {
        question: 'Bagaimana cara meng-encode gambar yang diunduh kembali menjadi Data URL HTML atau CSS nanti?',
        answer:
          'Gulir ke bagian Tool Terkait di bawah dan buka Gambar ke Base64 untuk beralih arah dengan bersih. Tool itu mengubah gambar JPG, PNG, WebP, SVG, GIF, BMP, atau ICO apa pun kembali menjadi cuplikan Data URL, Base64 Mentah, HTML <img>, atau CSS url().',
      },
      {
        question: 'Apakah dekoder Base64 ke Gambar berfungsi offline atau di ponsel?',
        answer:
          'Ya, setiap pemeriksaan string, dekode byte, dan konversi format Canvas berjalan di dalam API bawaan browser tanpa panggilan jaringan. Tool berfungsi lancar di iOS Safari, Android Chrome, Windows, macOS, dan Linux setelah halaman dimuat.',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: 'Ekstraktor Paleta Warna Gambar',
    shortDescription: 'Ekstrak warna dominan dari foto apa pun dengan kode HEX, RGB, HSL, dan ekspor.',
    category: 'developer',
    seoTitle: 'Ekstraktor Paleta Warna Gambar Online Gratis',
    seoDescription:
      'Ekstrak warna dominan dari foto apa pun gratis online: 3–12 swatch dengan kode HEX, RGB, dan HSL, variabel CSS, JSON, serta kartu PNG di browser Anda.',
    h1: 'Ekstraktor Paleta Warna Gambar Online Gratis',
    subtitle:
      'Temukan skema warna utama di dalam foto, ilustrasi, atau tangkapan layar UI apa pun dengan ekstraktor paleta warna gambar berbasis browser yang ditenagai kuantisasi Median-Cut. Dirancang untuk desainer UI, perencana merek, dan pengembang front-end, alat ini menghasilkan 3 hingga 12 swatch yang seimbang beserta persentase masing-masing, penyalinan kode HEX, RGB, dan HSL sekali klik, properti kustom CSS, data JSON, dan kartu paleta PNG yang bisa dibagikan — semuanya lokal di perangkat Anda.',
    howToSteps: [
      {
        title: 'Unggah gambar sumber Anda',
        description:
          'Seret atau pilih file JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB di zona unggah (atau tempel dari papan klip Anda).',
      },
      {
        title: 'Atur Jumlah Warna (3–12)',
        description:
          'Geser penggeser Jumlah Warna antara 3 warna aksen minimalis dan 12 swatch yang detail untuk menghitung ulang paleta seketika.',
      },
      {
        title: 'Periksa Strip Warna Proporsional',
        description:
          'Lihat Strip Warna Proporsional horizontal di atas kartu swatch untuk mengetahui seberapa dominan setiap warna di dalam gambar.',
      },
      {
        title: 'Salin kode HEX, RGB, atau HSL dari swatch',
        description:
          'Klik pil HEX, RGB, atau HSL di dalam kartu swatch untuk menyalin nilai warna tersebut langsung ke papan klip Anda.',
      },
      {
        title: 'Ekspor Variabel CSS atau JSON',
        description:
          'Gunakan Salin Variabel CSS untuk mendapatkan blok :root yang siap ditempel atau Salin JSON untuk mengambil kode swatch, persentase, dan dimensi sumber yang terstruktur.',
      },
      {
        title: 'Unduh kartu PNG paleta',
        description:
          'Klik Unduh PNG Paleta untuk menyimpan kartu presentasi putih yang bersih, yang memasangkan foto pratinjau Anda dengan blok-blok warna hasil ekstraksi.',
      },
    ],
    features: [
      { title: 'Kuantisasi Warna Median-Cut', description: 'Mengelompokkan jutaan piksel gambar menjadi swatch dominan yang seimbang dan representatif dalam hitungan milidetik.' },
      { title: 'HEX, RGB, HSL, dan Dominansi %', description: 'Setiap swatch menampilkan kode warna yang tepat dan seberapa besar bagian gambar yang diwakilinya.' },
      { title: 'Ekspor untuk Pengembang + Kartu PNG', description: 'Ekspor sebagai variabel CSS, JSON, cuplikan Tailwind, atau kartu paleta PNG yang bisa dibagikan.' },
      { title: '100% Berbasis Browser', description: 'Menganalisis piksel secara lokal di Canvas HTML5 tanpa mengunggah gambar.' },
    ],
    faqs: [
      {
        question: 'Bagaimana kuantisasi Median-Cut menyusun paleta dari foto saya?',
        answer:
          'Median-Cut mengelompokkan piksel yang diambil sampelnya ke dalam kotak warna RGB tiga dimensi, lalu berulang kali membelah saluran warna terlebar pada nilai mediannya hingga tersisa jumlah kotak yang diminta. Setiap kotak dirata-rata menjadi satu swatch representatif yang dibobot berdasarkan jumlah piksel yang masuk ke dalamnya, sehingga menghasilkan warna dominan yang harmonis, bukan piksel acak yang menyimpang.',
      },
      {
        question: 'Berapa banyak swatch warna yang bisa saya hasilkan dengan ekstraktor paleta warna gambar ini?',
        answer:
          'Anda bisa mengekstrak 3 hingga 12 warna dominan menggunakan penggeser Jumlah Warna. Memilih 3 hingga 5 warna cocok untuk tema merek yang minimalis, sedangkan 8 hingga 12 warna menampilkan nuansa bayangan yang halus dan warna aksen sekunder.',
      },
      {
        question: 'Apa arti lencana persentase pada setiap kartu warna?',
        answer:
          'Setiap persentase menunjukkan bagian dari piksel non-transparan yang diambil sampelnya dan ditetapkan ke swatch tersebut selama kuantisasi. Strip Warna Proporsional langsung menyesuaikan skala setiap segmen warna agar sesuai dengan persentase yang tepat itu.',
      },
      {
        question: 'Bisakah saya menyalin semua swatch hasil ekstraksi sekaligus sebagai properti kustom CSS?',
        answer:
          'Ya. Mengklik Salin Variabel CSS akan menyalin satu blok :root lengkap yang mencantumkan --palette-1 hingga --palette-N beserta semua warna hex, siap dipakai di stylesheet Anda. Anda bisa mengganti nama variabelnya nanti agar sesuai dengan token desain Anda.',
      },
      {
        question: 'Data apa saja yang disertakan saat saya mengklik Salin JSON?',
        answer:
          'Salin JSON menulis array objek yang berisi indeks, nilai hex, rgb, hsl, serta persentase dominansi setiap swatch. Pengembang bisa langsung memasukkan data ini ke file konfigurasi tema, dokumentasi desain, atau skrip gaya otomatis.',
      },
      {
        question: 'Apa yang dihasilkan oleh Unduh PNG Paleta?',
        answer:
          'Unduh PNG Paleta membuat kartu presentasi putih bersih selebar 1000 piksel yang menampilkan grafik sumber Anda di tengah bagian atas, di atas blok-blok warna membulat yang diberi label kode hex dan persentase bagiannya. Kartu ini diunduh secara lokal sebagai <filename>_palette.png tanpa watermark.',
      },
      {
        question: 'Mengapa Ekstraktor Paleta memberikan hasil yang berbeda dari pipet warna?',
        answer:
          'Pipet warna mengambil sampel satu piksel di bawah kursor Anda, sedangkan ekstraksi paleta mengelompokkan seluruh gambar menjadi keluarga warna dominan secara keseluruhan. Cara ini lebih cepat saat Anda ingin membangun skema warna yang selaras, bukan mencocokkan satu titik kecil secara persis.',
      },
      {
        question: 'Bagaimana latar belakang transparan ditangani saat mengekstrak warna dari PNG?',
        answer:
          'Piksel dengan transparansi alfa di bawah 50% dilewati sebelum kuantisasi berjalan. Dengan begitu, ruang kanvas transparan yang kosong di sekitar logo atau potongan produk tidak menggeser paleta ke arah putih atau hitam.',
      },
      {
        question: 'Apakah ekstraktor ini benar-benar memeriksa setiap piksel dari foto 20 MB yang besar?',
        answer:
          'Agar ekstraksi tetap cepat di dalam browser Anda, gambar untuk sementara diperkecil ke kanvas di luar layar hingga 140 piksel pada sisi terpanjangnya sebelum Median-Cut berjalan. Karena rasio warna dominan hampir tidak berubah pada ukuran itu, paleta dihitung hampir seketika tanpa membuat tab Anda macet.',
      },
      {
        question: 'Format dan ukuran file gambar apa saja yang diterima?',
        answer:
          'Anda bisa mengunggah file JPG, PNG, WebP, HEIC/HEIF dari iPhone, GIF, BMP, dan SVG hingga 20 MB per gambar. GIF animasi multi-frame mengekstrak warna dengan bersih dari frame pembukanya.',
      },
      {
        question: 'Mengapa dua warna yang mirip muncul di paleta 12 warna saya?',
        answer:
          'Foto dengan gradien besar — seperti matahari terbenam, warna kulit, atau latar studio — berisi jutaan piksel yang mengelompok di satu wilayah ruang warna. Pada jumlah swatch yang tinggi seperti 10 atau 12, Median-Cut secara alami membagi wilayah padat itu menjadi sorotan dan warna tengah yang saling berdekatan.',
      },
      {
        question: 'Apakah konsep merek, moodboard klien, atau tangkapan layar dikirim ke server?',
        answer:
          'Tidak. Pengambilan sampel piksel, pengelompokan warna, pemformatan kode, dan pembuatan kartu PNG semuanya terjadi secara eksklusif di memori Canvas HTML5 lokal Anda. Aset kreatif Anda tetap berada di perangkat Anda sendiri.',
      },
      {
        question: 'Bisakah saya mengubah jumlah swatch setelah menyalin CSS tanpa mengunggah ulang?',
        answer:
          'Ya. Menggeser penggeser Jumlah Warna akan langsung mengelompokkan ulang data gambar yang tersimpan di memori, sehingga Anda bisa membandingkan 4, 6, atau 10 warna secara berdampingan sebelum mengekspor.',
      },
      {
        question: 'Mengapa aksen neon kecil mungkin tidak muncul di paleta 4 warna?',
        answer:
          'Karena Median-Cut memprioritaskan wilayah warna dengan area piksel terbesar, aksen kecil sebesar 1% di dalam tangkapan layar gelap yang besar bisa bergabung ke kotak yang lebih luas pada jumlah swatch rendah. Menaikkan Jumlah Warna ke arah 10 atau 12 biasanya membuat warna aksen yang lebih kecil terlihat.',
      },
      {
        question: 'Apakah label teks swatch tetap terbaca pada warna yang sangat gelap atau sangat terang?',
        answer:
          'Ya. Baik pada kartu langsung di halaman maupun pada kartu PNG Paleta yang diekspor, warna tinta putih atau gelap dihitung secara otomatis dari luminansi yang dirasakan setiap warna, sehingga kode hex tetap mudah dibaca.',
      },
      {
        question: 'Bisakah saya menempel tangkapan layar langsung dari papan klip ke ekstraktor?',
        answer:
          'Ya. Tekan Ctrl+V di Windows/Linux atau Cmd+V di macOS di mana saja pada halaman untuk memuat tangkapan layar atau maket desain yang disalin langsung ke penganalisis warna.',
      },
      {
        question: 'Seberapa akurat string HSL dan RGB dibandingkan dengan standar CSS?',
        answer:
          'Setiap swatch menghasilkan notasi rgb(r, g, b) dan hsl(h, s%, l%) standar yang valid di CSS, beserta kode hex enam digit huruf besar #RRGGBB. Anda bisa menempel string yang disalin langsung ke CSS, Figma, atau DevTools browser.',
      },
      {
        question: 'Bisakah saya mengekstrak paleta dari logo vektor SVG?',
        answer:
          'Ya. Saat Anda meletakkan file SVG hingga 20 MB, browser Anda akan merasterisasikannya dengan bersih ke Canvas sebelum warna dihitung, sehingga Anda langsung mendapatkan swatch dan persentase dari karya vektor.',
      },
      {
        question: 'Apakah mengunggah gambar baru akan menghapus swatch lama secara otomatis?',
        answer:
          'Ya, meletakkan gambar pengganti atau mengklik Gambar Baru akan menghapus status paleta sebelumnya dengan bersih dan menjalankan kuantisasi baru pada grafik yang baru. Anda tidak perlu memuat ulang halaman di antara foto.',
      },
      {
        question: 'Bisakah saya memakai ekstraktor paleta ini di iOS, Android, dan browser desktop?',
        answer:
          'Ya. Grid swatch yang responsif, penggeser, dan tombol salin berjalan lancar di Safari seluler, Chrome Android, dan browser desktop modern tanpa pendaftaran atau instalasi.',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
  {
    slug: '/gif-maker',
    name: 'Pembuat GIF',
    shortDescription: 'Buat GIF animasi dari JPG, PNG, dan WebP dengan durasi frame dan kontrol loop.',
    category: 'create',
    seoTitle: 'Pembuat GIF Animasi Online Gratis',
    seoDescription:
      'Buat GIF animasi gratis online: gabungkan gambar JPG, PNG, WebP, dan HEIC, atur durasi tiap frame, dan pilih jumlah pengulangan, langsung di browser Anda.',
    h1: 'Pembuat GIF Animasi Gratis',
    subtitle:
      'Ubah foto, berbagai sudut produk, dan frame panduan UI menjadi animasi berulang dengan pembuat GIF animasi gratis kami yang berjalan bersih di browser Anda. Ideal untuk kreator media sosial, penulis tutorial, dan pemasar: susun ulang, gandakan, dan atur waktu tiap frame secara terpisah, pilih jumlah pengulangan, sesuaikan penyesuaian frame dan dimensi, lalu enkode file GIF89a tanpa watermark secara privat.',
    howToSteps: [
      {
        title: 'Unggah dua gambar frame atau lebih',
        description:
          'Letakkan file JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB per file di zona letak frame (atau gunakan Tambah Frame nanti untuk menambahkan lagi).',
      },
      {
        title: 'Susun ulang, gandakan, atau hapus frame',
        description:
          'Seret kartu frame dari pegangannya atau gunakan tombol panah untuk menentukan urutan, menggandakan frame kunci, atau menghapus gambar yang tidak diinginkan.',
      },
      {
        title: 'Atur kecepatan global dan durasi per frame',
        description:
          'Pilih penggeser Durasi Frame Default (50–3000 md) atau preset 1–10 FPS, dan masukkan durasi kustom (md) pada frame tertentu jika diperlukan.',
      },
      {
        title: 'Konfigurasi Perilaku Loop dan Penyesuaian Frame',
        description:
          'Pilih Selamanya, Atur Loop (2–50 kali putar), atau Putar Sekali, lalu pilih penyesuaian Contain atau Cover beserta warna Matte Latar Belakang.',
      },
      {
        title: 'Sesuaikan Dimensi Output dan Kualitas Paleta Warna',
        description:
          'Pilih preset 480 px, 640 px, 800 px, atau Original (atau ketik lebar/tinggi dari 16 hingga 2000 px) dan atur Kualitas Paleta Warna dari 10% hingga 100%.',
      },
      {
        title: 'Hasilkan dan unduh GIF animasi Anda',
        description:
          'Klik Hasilkan GIF Animasi untuk melihat pratinjau Pemutaran Waktu Langsung atau enkode secara lokal dan simpan animated_compressmypic.gif.',
      },
    ],
    features: [
      { title: 'Enkode GIF89a Asli di Sisi Klien', description: 'Menggunakan kuantizer warna dan enkoder GIF LZW yang cepat di dalam browser (dimuat saat dibutuhkan) — tanpa panggilan API eksternal atau unggahan server.' },
      { title: 'Durasi Global dan Per Frame', description: 'Atur kecepatan frame yang seragam dalam milidetik atau preset FPS, dan timpa waktu pada frame kunci tertentu jika perlu.' },
      { title: 'Kontrol Loop dan Penyesuaian yang Fleksibel', description: 'Pilih pengulangan tanpa henti, putar sekali, atau jumlah putar yang tepat, plus penyesuaian frame Contain atau Cover.' },
      { title: 'Peringatan Ukuran File Besar', description: 'Otomatis memperingatkan Anda saat GIF hasil enkode menjadi berat (lebih dari 5–15 MB) agar Anda bisa mengoptimalkan dimensi atau kualitas untuk aplikasi chat.' },
    ],
    faqs: [
      {
        question: 'Bagaimana browser mengenkode foto saya menjadi GIF animasi tanpa mengunggahnya?',
        answer:
          'Saat Anda mengklik Hasilkan GIF Animasi, halaman memuat enkoder GIF89a JavaScript lokal dan kuantizer warna langsung di dalam tab browser Anda, saat dibutuhkan. Setiap frame dirender ke kanvas di luar layar pada dimensi yang Anda pilih, lalu dikompres dengan LZW secara lokal. Pada klik pertama, enkoder mungkin perlu beberapa saat untuk dimuat, jadi bersabarlah dan coba lagi jika prosesnya gagal pada percobaan pertama.',
      },
      {
        question: 'Apa perbedaan antara Pratinjau Waktu Langsung dan GIF yang dihasilkan?',
        answer:
          'Sebelum enkode, kanvas pratinjau memutar gambar yang Anda unggah secara real time menggunakan durasi milidetik dan pengaturan penyesuaian Anda saat ini, sehingga Anda bisa langsung memeriksa temponya. Menghasilkan GIF akan mengunci pilihan tersebut ke dalam file .gif 256 warna yang benar-benar terkuantisasi.',
      },
      {
        question: 'Bisakah saya berhenti lebih lama pada slide judul atau frame ajakan terakhir?',
        answer:
          'Ya. Durasi Frame Default mengatur kecepatan dasar (50 md hingga 3000 md) untuk seluruh urutan, sedangkan setiap kartu frame memiliki kolom input Durasi (md) opsional yang menerima 20 md hingga 10.000 md untuk menahan slide tertentu lebih lama.',
      },
      {
        question: 'Preset cepat 1 FPS, 2 FPS, 5 FPS, dan 10 FPS itu setara dengan berapa milidetik?',
        answer:
          'Tombol-tombol itu memetakan frame per detik ke interval milidetik yang tepat: 1000 md untuk 1 FPS, 500 md untuk 2 FPS, 200 md untuk 5 FPS, dan 100 md untuk 10 FPS. Setelah itu Anda tetap bisa menggeser penggeser dengan langkah 25 md.',
      },
      {
        question: 'Pilihan loop apa saja yang tersedia untuk GIF yang sudah jadi?',
        answer:
          'Di bawah Perilaku Loop, Anda bisa memilih Selamanya untuk pemutaran tanpa henti, Atur Loop untuk menentukan jumlah yang tepat antara 2 dan 50 kali putar, atau Putar Sekali agar animasi berhenti dengan bersih pada frame terakhir. Byte ekstensi Netscape ditulis otomatis sesuai pilihan Anda.',
      },
      {
        question: 'Bagaimana cara memilih antara Contain dan Cover pada Penyesuaian Frame?',
        answer:
          'Contain memperkecil setiap gambar agar muat sepenuhnya di dalam frame GIF, mengisi bilah letterbox tambahan dengan warna Matte Latar Belakang Anda. Cover memperbesar tiap foto sedikit agar memenuhi seluruh kanvas hingga ke tepi tanpa bilah, memotong tepi yang meluber.',
      },
      {
        question: 'Bagaimana cara menangani gambar dengan rasio aspek berbeda dalam satu animasi?',
        answer:
          'Pilih Contain jika Anda tidak ingin logo atau foto potret terpotong, dan samakan swatch Matte Latar Belakang dengan latar situs web atau mode gelap Anda. Pilih Cover saat menggabungkan foto santai dengan berbagai bentuk menjadi tayangan slide penuh yang seragam.',
      },
      {
        question: 'Berapa dimensi piksel minimum dan maksimum untuk GIF yang dihasilkan?',
        answer:
          'Lebar dan Tinggi Output menerima nilai dari 16 px hingga 2000 px, dengan tombol cepat untuk 480 px, 640 px, 800 px, dan Original. Biarkan Rasio Terkunci aktif saat memperbesar satu dimensi secara proporsional.',
      },
      {
        question: 'Mengapa alat ini menampilkan Peringatan GIF Besar di atas 5 MB atau 15 MB?',
        answer:
          'Karena GIF menyimpan frame raster penuh dengan batas 256 warna, bukan kompresi video modern antar-frame, animasi lebar beresolusi tinggi cepat membesar. Mengubah lebar ke 480 px atau 640 px atau menurunkan Kualitas Paleta Warna akan mengurangi bobot file secara signifikan untuk aplikasi chat dan email.',
      },
      {
        question: 'Apa yang dikendalikan oleh penggeser Kualitas Paleta Warna?',
        answer:
          'Kualitas Paleta Warna (10% hingga 100%, standarnya 80%) mengatur seberapa halus kuantizer mengambil sampel piksel frame saat menyusun setiap paleta 256 warna. Pengaturan yang lebih tinggi mempertahankan gradien warna yang lebih halus, sedangkan pengaturan yang lebih rendah mempercepat enkode dan sering memperkecil ukuran byte.',
      },
      {
        question: 'Berapa banyak frame sumber yang sebaiknya saya gabungkan dalam satu GIF buatan browser?',
        answer:
          'Antrean frame tidak memiliki batas jumlah file yang tetap, meskipun menggabungkan 2 hingga 40 frame dengan lebar 480 px–800 px umumnya berjalan lancar di memori browser desktop dan seluler biasa. Tumpukan gambar 4K yang lebih besar bisa ditambahkan dalam batch hingga 20 MB per file input.',
      },
      {
        question: 'Bisakah saya mengulang satu frame tanpa mengunggah file yang sama dua kali?',
        answer:
          'Ya. Klik ikon gandakan pada kartu frame mana pun untuk mengkloning slide itu beserta durasi kustomnya tepat di samping aslinya, lalu seret atau pindahkan dengan panah ke mana saja di linimasa.',
      },
      {
        question: 'Apakah saya harus mengunggah semuanya sekaligus, atau bisa menambah frame lagi nanti?',
        answer:
          'Anda bisa menambahkan gambar lagi kapan saja menggunakan tombol Tambah Frame di header Frame. Urutan frame, durasi kustom, dan dimensi output Anda saat ini tetap utuh saat frame baru ditambahkan.',
      },
      {
        question: 'Apakah ekspor HEIC atau rangkaian Live Photo dari iPhone berfungsi di pembuat GIF ini?',
        answer:
          'Ya. Jika Anda memilih beberapa gambar .heic atau .heif hingga 20 MB per file, halaman mendekodenya secara lokal di browser Anda melalui WebAssembly sebelum animasi Anda disusun.',
      },
      {
        question: 'Apa yang terjadi jika saya mengubah pengaturan setelah GIF dihasilkan?',
        answer:
          'Klik Kembali ke Editor Frame di bawah pratinjau GIF yang sudah jadi untuk membuka kembali linimasa dan kontrol Anda. Sesuaikan durasi, loop, dimensi, atau urutan frame dengan bebas, lalu hasilkan file baru segera.',
      },
      {
        question: 'Apakah GIF yang dihasilkan mempertahankan latar belakang transparan dengan bersih?',
        answer:
          'Sebelum kuantisasi LZW berjalan, setiap frame digabungkan dengan bersih ke warna Matte Latar Belakang yang Anda pilih (standarnya putih). Cara ini mencegah tepi hitam yang kasar dan bergerigi di sekitar tepi PNG atau SVG yang halus.',
      },
      {
        question: 'Bisakah saya mengekstrak satu frame dari GIF yang sudah ada jika saya mengunggah file .gif?',
        answer:
          'Saat Anda meletakkan gambar .gif sebagai frame sumber, Canvas HTML5 memuat frame awalnya ke dalam urutan seperti foto diam lainnya. Gunakan tool Pemisah Gambar atau Kompresor GIF jika Anda perlu mengenkode ulang GIF animasi yang sudah ada.',
      },
      {
        question: 'Apakah watermark atau kartu akhir promosi ditambahkan ke GIF yang saya unduh?',
        answer:
          'Tidak pernah. Setiap GIF animasi hasil enkode hanya berisi frame dan pengaturan yang Anda pilih, tanpa branding, watermark, atau batas penggunaan.',
      },
      {
        question: 'Mengapa rasio aspek saya tetap terkunci saat mengedit Lebar Output?',
        answer:
          'Rasio Terkunci aktif secara standar untuk mencegah frame yang meregang atau terjepit berdasarkan dimensi slide pertama Anda. Klik tombol kunci untuk memasukkan lebar dan tinggi kustom yang independen jika diperlukan.',
      },
      {
        question: 'Apakah file animated_compressmypic.gif yang diekspor berfungsi di Slack, Discord, dan situs web?',
        answer:
          'Ya. Enkoder menghasilkan file biner GIF89a standar dengan ekstensi loop Netscape, sehingga kompatibel secara luas untuk pemutaran di browser, aplikasi chat, blog, dan tool presentasi.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/image-splitter', '/image-resizer', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: 'Pembuat Kolase Gambar',
    shortDescription: 'Susun foto dalam grid 2×2, 3×3, atau strip dengan tukar posisi seret dan ekspor.',
    category: 'create',
    seoTitle: 'Pembuat Kolase Gambar Online Gratis',
    seoDescription:
      'Buat kolase foto gratis online di browser Anda: grid 2×2 dan 3×3 atau strip, tukar posisi sel dengan seret, lalu simpan sebagai JPG atau PNG hingga 4000 px.',
    h1: 'Pembuat Kolase Gambar Online Gratis',
    subtitle:
      'Susun grid foto yang rapi, strip sebelum-sesudah, dan tata letak story media sosial dengan pembuat kolase gambar gratis kami langsung di browser Anda. Dibuat untuk kreator konten, penjual online, dan keluarga, alat ini mendukung grid 2×2 dan 3×3 beserta strip vertikal dan horizontal, dengan pertukaran sel seret-dan-letakkan, pembagian yang bisa disesuaikan, sudut membulat, jarak kustom, dan ekspor JPG atau PNG tanpa watermark hingga 4000 px.',
    howToSteps: [
      {
        title: 'Unggah foto ke studio kolase',
        description:
          'Letakkan gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 20 MB per file; meletakkan 5 gambar atau lebih otomatis memilih Grid 3×3, sedangkan 4 gambar atau kurang memilih Grid 2×2.',
      },
      {
        title: 'Pilih tata letak grid atau strip',
        description:
          'Beralih bebas antara Grid 2×2 (4 sel), Grid 3×3 (9 sel), Strip Vertikal, atau Strip Horizontal di panel Tata Letak Kolase.',
      },
      {
        title: 'Susun ulang atau isi slot kolase',
        description:
          'Seret sel mana pun ke sel lain untuk menukar posisi, ketuk dua slot berurutan di layar sentuh, gunakan panah Kiri/Kanan, atau klik Tambah Foto untuk mengisi slot yang kosong.',
      },
      {
        title: 'Sesuaikan proporsi sel, jarak, dan sudut',
        description:
          'Sesuaikan Pembagian Kolom, Pembagian Baris, atau Penekanan Sel Utama (atau klik Sel Sama), lalu atur Jarak Sel (0–80 px) dan Radius Sel (0–60 px).',
      },
      {
        title: 'Pilih warna latar, Penyesuaian Gambar, dan Ukuran Output',
        description:
          'Pilih pembingkaian Cover atau Contain, pilih swatch Warna Latar Belakang atau kode hex, dan masukkan dimensi dari 200 hingga 4000 px (atau klik preset 1200×1200, 1920×1080, atau 1080×1920).',
      },
      {
        title: 'Ekspor kolase yang sudah jadi',
        description:
          'Pilih JPG (dengan penggeser kualitas 10–100%) atau PNG (Lossless), lalu klik Unduh Kolase untuk menyimpan tata letak Anda secara lokal pada resolusi penuh.',
      },
    ],
    features: [
      { title: '4 Tata Letak Kolase yang Rapi', description: 'Buat kotak 2×2 yang seimbang, grid foto 3×3, story seluler vertikal, atau strip perbandingan horizontal yang lebar.' },
      { title: 'Penyusunan Ulang Sel Seret-dan-Letakkan', description: 'Seret sel foto mana pun ke slot lain untuk langsung menukar posisi, atau ketuk dua sel di ponsel.' },
      { title: 'Proporsi dan Jarak Sel Kustom', description: 'Sesuaikan pembagian kolom, pembagian baris, penekanan sel utama, jarak sel, kebulatan sudut, dan warna latar secara presisi.' },
      { title: 'Ekspor JPG dan PNG Resolusi Tinggi', description: 'Render kolase resolusi penuh hingga 4000 px langsung di Canvas HTML5 tanpa watermark.' },
    ],
    faqs: [
      {
        question: 'Tata letak apa saja yang disertakan dalam pembuat kolase gambar ini?',
        answer:
          'Anda bisa langsung beralih antara Grid 2×2 (4 sel), Grid 3×3 (9 sel), Strip Vertikal (kolom dari atas ke bawah), dan Strip Horizontal (baris berdampingan). Memilih Strip Vertikal atau Horizontal otomatis mengatur dimensi standar yang praktis (1080×1920 atau 1920×720), yang bisa Anda sesuaikan lagi setelahnya.',
      },
      {
        question: 'Bagaimana cara kerja ketuk-untuk-tukar jika saya membuat kolase di ponsel atau tablet?',
        answer:
          'Di layar sentuh yang sulit diseret, cukup ketuk ubin sel pertama di bawah Susun Ulang Sel untuk menyorotnya, lalu ketuk slot kedua untuk langsung menukar fotonya. Tombol panah Kiri dan Kanan juga tersedia di bawah setiap slot.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah foto lebih sedikit daripada jumlah sel dalam grid 3×3?',
        answer:
          'Sel yang belum terisi akan tampil sebagai placeholder Slot N bergaris putus-putus yang bersih di dalam pratinjau langsung, sehingga Anda bisa memeriksa tata letak sambil menambahkan gambar yang tersisa. Anda bisa mengklik tombol + tepat pada ubin kosong atau beralih ke tata letak 2×2 atau strip agar sesuai dengan jumlah gambar Anda.',
      },
      {
        question: 'Bisakah saya membuat satu foto utama lebih besar daripada yang lain dalam grid atau strip?',
        answer:
          'Ya. Di Grid 2×2 Anda bisa menyeret Pembagian Kolom dan Pembagian Baris dari 20% hingga 80%, di Grid 3×3 Anda bisa mengubah ukuran Kolom Tengah dan Baris Tengah, dan di Strip Vertikal atau Horizontal Anda bisa meningkatkan Penekanan Sel Utama hingga +100%.',
      },
      {
        question: 'Bagaimana cara mengembalikan penggeser sel yang tidak rata ke grid yang seragam?',
        answer:
          'Klik tombol Sel Sama di bagian Proporsi dan Jarak Sel. Tombol ini mengatur ulang pembagian kolom, pembagian baris, dan penekanan utama ke pembagian yang seimbang dan sama dalam satu klik.',
      },
      {
        question: 'Bisakah saya membuat kolase tanpa batas yang mulus tanpa jarak antar foto?',
        answer:
          'Ya. Seret Jarak Sel dan Radius Sel ke 0 px agar foto yang bersebelahan bertemu dari tepi ke tepi dengan bersih, tanpa garis sambungan yang terlihat atau sudut membulat.',
      },
      {
        question: 'Kapan saya sebaiknya mengubah Penyesuaian Gambar dari Cover ke Contain?',
        answer:
          'Cover mengisi setiap sel persegi panjang hingga ke tepi dengan memotong tepi halus yang berada di luar rasio aspek sel — ideal untuk grid gaya hidup yang seragam. Contain memperkecil setiap gambar hingga seluruh subjek muat di dalam selnya tanpa terpotong, menampilkan Warna Latar Belakang Anda di balik margin yang terbuka.',
      },
      {
        question: 'Bisakah saya menyesuaikan jarak sel dan radius sudut membulat secara terpisah?',
        answer:
          'Ya. Jarak Sel menyesuaikan margin luar dan lebar celah dari 0 px hingga 80 px, sedangkan Radius Sel membulatkan setiap sudut kotak foto dengan halus dari 0 px hingga 60 px.',
      },
      {
        question: 'Dimensi kanvas cepat dan rasio preset apa saja yang didukung?',
        answer:
          'Anda bisa mengetik Ukuran Output kustom apa pun antara 200 px dan 4000 px di setiap sisi untuk kartu cetak atau media sosial kustom. Tersedia juga tombol cepat bawaan untuk Kotak 1200×1200, Lanskap 1920×1080, dan Story 1080×1920.',
      },
      {
        question: 'Preset Warna Latar Belakang apa saja yang muncul secara standar?',
        answer:
          'Anda mendapatkan swatch sekali klik untuk putih murni (#ffffff), slate gelap (#0f172a), dan abu-abu netral lembut (#f1f5f9). Pemilih warna native lengkap selalu tersedia di sampingnya saat Anda membutuhkan nilai hex merek yang tepat.',
      },
      {
        question: 'Apakah mengunggah campuran foto HEIC iPhone, PNG, dan JPG dalam satu kolase berfungsi?',
        answer:
          'Ya. Setiap file yang diunggah — termasuk JPG, PNG, WebP, HEIC/HEIF, GIF, BMP, dan SVG hingga 20 MB — didekode secara privat di browser Anda dan digambar ke satu Canvas HTML5 yang menyatu.',
      },
      {
        question: 'Jika saya menaruh stiker PNG transparan di dalam sel, apa yang tampak di belakangnya?',
        answer:
          'Setiap sel dirender di atas Warna Latar Belakang yang Anda pilih sebelum gambar latar depan digabungkan. Dengan begitu, logo PNG transparan dan potongan gambar tetap bersih dengan latar putih, slate gelap, atau warna kustom.',
      },
      {
        question: 'Sebaiknya saya menyimpan kolase yang sudah jadi sebagai JPG atau PNG (Lossless)?',
        answer:
          'Pilih JPG dengan kualitas 85%–95% untuk grid foto ringan yang ditujukan ke Instagram, WhatsApp, atau email. Pilih PNG (Lossless) saat menggabungkan tangkapan layar UI yang tajam, diagram, atau grafik teks yang akan terganggu oleh halo kompresi JPEG.',
      },
      {
        question: 'Bagaimana nama file yang diekspor menunjukkan pengaturan kolase yang saya gunakan?',
        answer:
          'Setiap ekspor yang diunduh otomatis menyertakan tata letak dan dimensi piksel, menghasilkan nama seperti collage_2x2_1200x1200.jpg. Pola penamaan ini membantu Anda memilah beberapa variasi rasio aspek tanpa mengganti nama file secara manual.',
      },
      {
        question: 'Apakah foto keluarga privat atau foto sebelum-sesudah pelanggan diunggah ke mana pun?',
        answer:
          'Tidak. Dekode gambar, penyusunan tata letak grid, dan ekspor Canvas resolusi tinggi semuanya terjadi secara ketat di dalam tab browser Anda, sehingga tidak ada foto yang meninggalkan ponsel atau komputer Anda.',
      },
      {
        question: 'Apakah pratinjau kolase sama persis dengan ekspor piksel pada 4000 px?',
        answer:
          'Ya. Baik panggung langsung maupun ekspor akhir memakai perhitungan proporsi dan sudut yang persis sama, menyesuaikan skala Jarak Sel dan Radius Sel dengan halus sesuai Ukuran Output yang dipilih, sehingga celah yang diekspor sama dengan yang Anda lihat.',
      },
      {
        question: 'Berapa banyak foto yang bisa ditampung Strip Vertikal atau Horizontal sekaligus?',
        answer:
          'Strip Vertikal dan Horizontal mendukung 2 hingga 6 slot dinamis, tergantung berapa banyak gambar yang Anda muat. Dengan begitu, mudah membuat perbandingan dua panel atau strip story multi-frame dengan bersih.',
      },
      {
        question: 'Bisakah saya menghapus satu foto dari kolase tanpa memulai dari awal?',
        answer:
          'Ya. Klik tombol tempat sampah pada kartu slot mana pun di bawah Susun Ulang Sel untuk menghapus foto itu, sementara semua gambar lain yang diunggah, pengaturan tata letak, dan pembagian kustom Anda tetap utuh.',
      },
      {
        question: 'Berapa resolusi maksimum yang bisa saya ekspor untuk mencetak kolase foto?',
        answer:
          'Lebar dan Tinggi Output sama-sama bisa mencapai 4000×4000 piksel, menghasilkan detail tajam 16 megapiksel. Resolusi ini cocok untuk cetakan foto meja, lookbook, dan slide resolusi tinggi.',
      },
      {
        question: 'Apakah ada batas jumlah kolase yang bisa saya buat atau ekspor?',
        answer:
          'Tidak. Anda bisa berganti tata letak, menyesuaikan warna, dan mengekspor kolase tanpa batas secara gratis, tanpa akun, watermark, atau batas ekspor harian.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: 'Kompres Gambar Menjadi 50 KB',
    shortDescription: 'Perkecil foto JPG, PNG, dan WebP hingga benar-benar di bawah 50 KB untuk formulir.',
    category: 'compress',
    seoTitle: 'Kompres Gambar Menjadi 50 KB Online',
    seoDescription:
      'Kompres gambar menjadi 50 KB gratis online untuk portal paspor, formulir visa, dan avatar. Pencarian kualitas biner dan penskalaan dimensi cerdas di browser.',
    h1: 'Kompres Gambar Menjadi 50 KB Online',
    subtitle:
      'Siapkan foto paspor, pindaian visa, tanda tangan tulisan tangan, dan avatar profil ringkas untuk batas portal yang ketat saat Anda perlu mengompres gambar menjadi 50 KB dengan andal. Alat ini berjalan 100% lokal di browser Anda untuk file hingga 25 MB, memadukan pencarian kualitas biner dengan penskalaan piksel opsional, sehingga dokumen sensitif tidak pernah menyentuh server eksternal.',
    howToSteps: [
      {
        title: 'Letakkan gambar atau pindaian dokumen Anda',
        description:
          'Unggah satu atau beberapa file JPG, PNG, WebP, atau HEIC hingga 25 MB (atau tempel foto yang disalin melalui Ctrl+V).',
      },
      {
        title: 'Pilih Format Output (Original, JPG, WebP, atau PNG)',
        description:
          'Pilih JPG atau WebP untuk batas foto 50 KB yang ketat, atau pertahankan Original dengan Konversi Otomatis PNG aktif untuk tangkapan layar yang berat.',
      },
      {
        title: 'Periksa tombol penskalaan dan konversi otomatis',
        description:
          'Biarkan penskalaan dimensi cerdas dicentang untuk foto bermegapiksel tinggi, atau hapus centangnya untuk mempertahankan dimensi piksel yang tepat saat portal mengharuskannya.',
      },
      {
        title: 'Periksa lencana byte terverifikasi dan tampilan perbandingan',
        description:
          'Periksa setiap kartu untuk lencana hijau Di Bawah 50 KB, lalu buka tampilan Bandingkan untuk memastikan fitur wajah atau garis tanda tangan tetap terbaca.',
      },
      {
        title: 'Unduh file satu per satu atau Unduh Semua (ZIP)',
        description:
          'Simpan setiap file <name>_50kb satu per satu, gunakan Pertahankan original jika file sudah lebih kecil, atau kemas batch ke dalam compressmypic_50kb.zip.',
      },
    ],
    features: [
      { title: 'Pencarian Kualitas Biner + Penskalaan Dimensi', description: 'Menemukan kualitas visual tertinggi di bawah 50 KB terlebih dahulu pada piksel asli, lalu memperkecil resolusi dengan halus jika diperlukan.' },
      { title: 'Pelaporan Hasil yang Jujur', description: 'Tidak pernah memalsukan ukuran output — jika PNG lossless atau resolusi terkunci tidak muat di bawah 50 KB, alat ini menjelaskan alasannya dengan jelas.' },
      { title: 'Fallback Cerdas PNG ke WebP/JPG', description: 'Secara opsional mengubah PNG lossless yang berat menjadi WebP atau JPG agar foto tetap tajam saat mencapai 50 KB.' },
      { title: 'Pemrosesan Browser yang Privat', description: 'Paspor, foto identitas, dan formulir pribadi tidak pernah meninggalkan perangkat Anda.' },
    ],
    faqs: [
      {
        question: 'Portal sehari-hari apa saja yang mengharuskan unggahan gambar benar-benar di bawah 50 KB?',
        answer:
          'Aplikasi visa pemerintah, perpanjangan paspor, pendaftaran ujian pegawai negeri, formulir penerimaan universitas, dan kolom pindaian tanda tangan sering memberlakukan batas unggah keras 20 KB–50 KB. Menjaga file Anda nyaman di bawah 50 KB akan mencegah batas waktu pengiriman formulir dan galat penolakan unggahan.',
      },
      {
        question: 'Mengapa foto paspor dan pindaian identitas aman diperkecil di sini hingga 50 KB?',
        answer:
          'Setiap operasi piksel — dari dekode HEIC hingga pencarian kompresi biner dan pengemasan ZIP — dijalankan secara lokal di dalam tab browser Anda sendiri. Foto identitas sensitif, tanda tangan, dan dokumen pribadi tidak pernah diunggah melalui internet.',
      },
      {
        question: 'Mengapa mencapai 50 KB pada foto ponsel 12 megapiksel biasanya memerlukan penskalaan dimensi?',
        answer:
          'Foto penuh 4000×3000 piksel berisi 12 juta piksel yang data dasar Huffman JPEG-nya biasanya melebihi 200 KB bahkan pada kompresi berat. Dengan penskalaan dimensi cerdas dicentang, pengoptimal menurunkan dimensi dengan halus hingga detail wajah yang tajam muat bersih di bawah 50 KB.',
      },
      {
        question: 'Sebaiknya saya memilih JPG atau WebP saat mengirim gambar di bawah 50 KB ke portal ujian atau pemerintah?',
        answer:
          'Selalu pilih JPG untuk formulir pemerintah, paspor, beasiswa, atau perbankan lama karena banyak skrip validasi menolak unggahan .webp meski ukurannya lebih kecil. Pilih WebP untuk avatar web modern atau situs pribadi yang mengutamakan ketajaman maksimal pada 50 KB.',
      },
      {
        question: 'Bagaimana alat ini mengoptimalkan tanda tangan tulisan tangan atau dokumen pindaian hingga di bawah 50 KB?',
        answer:
          'Pindaian tinta hitam di atas kertas putih terang terkompres secara agresif dalam JPG atau WebP setelah resolusi berlebih dipangkas dengan bersih. Memeriksa modal Bandingkan memastikan goresan tinta tetap bersih tanpa blok kompresi yang buram di sekitar tepi teks.',
      },
      {
        question: 'Mengapa pemberitahuan merah Membesar muncul saat input saya sudah 32 KB?',
        answer:
          'Jika JPG atau PNG yang sudah ringan dienkode ulang pada kualitas tinggi di Canvas, aliran byte barunya kadang mendarat di 40 KB alih-alih makin mengecil. Cukup klik Pertahankan original pada kartu itu untuk mempertahankan file sumber 32 KB Anda yang persis.',
      },
      {
        question: 'Bisakah saya mempertahankan dimensi piksel 600×600 yang tepat jika portal visa saya mengharuskan piksel tetap dan maks 50 KB?',
        answer:
          'Ya. Hapus centang Izinkan penskalaan dimensi cerdas agar dimensi piksel terkunci 100%, sehingga pencarian biner menguji kualitas JPEG atau WebP hingga 5% pada dimensi Anda yang tepat. Jika potret 600×600 cukup bersih, foto itu mudah muat di bawah 50 KB tanpa diubah ukurannya.',
      },
      {
        question: 'Mengapa mengunci Format Output ke PNG sering memicu peringatan Target tidak tercapai pada 50 KB?',
        answer:
          'Karena PNG memakai kompresi DEFLATE lossless yang mengabaikan penggeser kualitas, hanya ikon datar atau thumbnail kecil yang terkompres di bawah 50 KB sebagai PNG. Biarkan Format pada Original dengan Konversi Otomatis dicentang — atau beralih langsung ke JPG — agar gambar fotografis mencapai 50 KB dengan bersih.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah PNG tanda tangan transparan lalu mengubahnya ke JPG agar muat 50 KB?',
        answer:
          'Memilih JPG akan menampilkan swatch warna matte untuk PNG transparan (putih murni #ffffff sebagai standar). Semua area latar transparan diisi bersih ke putih solid sebelum enkode JPEG, sehingga tinta hitam tetap tajam, bukan berubah menjadi hitam solid.',
      },
      {
        question: 'Bisakah saya meletakkan swafoto HEIC iPhone 15 MB langsung untuk diperkecil di bawah 50 KB?',
        answer:
          'Ya. File hingga 25 MB — termasuk foto HEIC/HEIF Apple — didekode otomatis di browser melalui WebAssembly, lalu dikompres ke arah 50 KB dalam satu langkah yang mulus.',
      },
      {
        question: 'Langkah skala apa saja yang diuji pengoptimal saat dimensi 100% melebihi 50 KB?',
        answer:
          'Saat dimensi penuh tidak bisa melewati 50 KB pada kualitas yang bisa diterima, mesin menguji faktor perkecilan progresif mulai 82% hingga menuju 10% (dibatasi minimal 16 px). Pada setiap langkah, mesin menjalankan pencarian kualitas biner baru dan berhenti pada dimensi terbesar yang masih terbaca di bawah 50 KB.',
      },
      {
        question: 'Apakah mengompres potret berlatar gelap hingga di bawah 50 KB akan menimbulkan pita warna yang terlihat?',
        answer:
          'Bayangan gelap yang halus pada target 50 KB yang agresif bisa menunjukkan sedikit blok jika dimensinya tetap besar. Mengizinkan penskalaan dimensi membuat alat mengenkode dimensi yang sedikit lebih kecil pada faktor kualitas 70%–85% yang lebih tinggi, menghasilkan gradien yang lebih halus daripada dimensi besar pada kualitas 10%.',
      },
      {
        question: 'Apakah kompresor 50 KB menghapus tag lokasi GPS tersembunyi dari foto identitas saya?',
        answer:
          'Ya. Merender gambar Anda ke Canvas HTML5 akan menghapus metadata EXIF seperti nomor seri kamera, thumbnail, dan koordinat GPS, sekaligus melindungi privasi Anda dan membebaskan kilobyte tambahan untuk detail gambar yang terlihat.',
      },
      {
        question: 'Bagaimana alat ini menentukan apakah akan menampilkan lencana Di Bawah 50 KB?',
        answer:
          'Setelah mengenkode Blob akhir, alat memeriksa ukuran byte yang tepat terhadap 51.200 byte (50 × 1024). Hanya file yang benar-benar berada pada atau di bawah batas byte persis itu yang menerima lencana konfirmasi hijau Di Bawah 50 KB.',
      },
      {
        question: 'Bisakah saya memproses foto potret dan pindaian tanda tangan bersama-sama di bawah 50 KB?',
        answer:
          'Ya. Letakkan beberapa gambar hingga 25 MB per file ke dalam antrean, sesuaikan preferensi format Anda, lalu unduh setiap file satu per satu atau gabungkan semuanya ke dalam compressmypic_50kb.zip.',
      },
      {
        question: 'Bagaimana jika portal sebenarnya mengharuskan 20 KB atau 30 KB, bukan 50 KB?',
        answer:
          'Klik tautan Butuh target KB yang berbeda? tepat di dalam header target untuk langsung melompat ke Kompresor Ukuran File Target kustom, tempat Anda bisa mengetik batas kustom apa pun seperti 20 KB atau 30 KB.',
      },
      {
        question: 'Berapa ukuran file maksimum yang bisa saya letakkan ke kompresor 50 KB?',
        answer:
          'File input individual hingga 25 MB didukung dalam format JPG, PNG, WebP, HEIC/HEIF, GIF, BMP, dan SVG. Input GIF animasi mengekspor satu frame statis yang dioptimalkan di bawah 50 KB.',
      },
      {
        question: 'Mengapa alat ini menargetkan sedikit di bawah 50 KB (sekitar 48–49,9 KB), bukan berhenti di 25 KB?',
        answer:
          'Pencarian binernya mengoptimalkan hingga 7 iterasi agar mendarat dalam kisaran 96%–100% dari batas 50 KB bila memungkinkan. Cara ini memaksimalkan ketajaman visual dengan memanfaatkan hampir setiap kilobyte yang tersedia di bawah batas.',
      },
      {
        question: 'Apakah nama file yang diunduh ditandai dengan jelas agar saya tidak tertukar dengan file resolusi tinggi asli saya?',
        answer:
          'Ya. Setiap file output otomatis menambahkan _50kb sebelum ekstensi — misalnya portrait_50kb.jpg — dan membiarkan file asli Anda tetap utuh di perangkat Anda.',
      },
      {
        question: 'Bisakah saya memeriksa ketajaman di ponsel sebelum mengunggah ke portal formulir?',
        answer:
          'Ya. Seluruh antarmuka, termasuk penampil Bandingkan yang interaktif, berfungsi lancar di Safari seluler dan Chrome di Android, sehingga pengiriman formulir saat bepergian menjadi cepat dan andal.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/image-resizer',
    ],
  },
  {
    slug: '/compress-image-to-100kb',
    name: 'Kompres Gambar Menjadi 100 KB',
    shortDescription: 'Perkecil ukuran gambar hingga di bawah 100 KB dengan bersih tanpa buram yang terlihat.',
    category: 'compress',
    seoTitle: 'Kompres Gambar Menjadi 100 KB Online',
    seoDescription:
      'Kompres gambar menjadi 100 KB gratis online untuk portal kerja, CV, dan halaman web. Detail tetap tajam berkat pencarian kualitas cerdas dan ekspor ZIP.',
    h1: 'Kompres Gambar Menjadi 100 KB Online',
    subtitle:
      'Capai titik manis web dan portal yang terbukti saat Anda mengompres gambar menjadi 100 KB tanpa mengorbankan ketajaman. Dibuat untuk pelamar kerja yang melampirkan foto portofolio, blogger yang menyiapkan thumbnail artikel yang cepat, dan portal HR dengan batas lampiran yang ketat, alat lokal ini menguji pengaturan kualitas dan penskalaan opsional di dalam browser Anda untuk input hingga 25 MB.',
    howToSteps: [
      {
        title: 'Tambahkan foto atau grafik artikel Anda',
        description:
          'Seret dan letakkan satu atau beberapa gambar JPG, PNG, WebP, atau HEIC hingga 25 MB per file ke ruang kerja.',
      },
      {
        title: 'Konfirmasi Format Output dan perilaku fallback',
        description:
          'Pertahankan Original (dengan fallback WebP/JPG otomatis untuk PNG yang terlalu besar) atau targetkan JPG atau WebP secara eksplisit untuk output yang konsisten.',
      },
      {
        title: 'Pilih apakah perkecilan piksel diizinkan',
        description:
          'Biarkan penskalaan dimensi cerdas dicentang untuk hasil 800 px–1400 px yang tajam, atau hapus centangnya untuk mempertahankan lebar dan tinggi piksel asli 100%.',
      },
      {
        title: 'Bandingkan ketajaman visual dengan aslinya',
        description:
          'Periksa persentase yang dihemat dan lencana KB output yang tepat, lalu buka Bandingkan pada kartu mana pun untuk memeriksa ketajaman tepi secara berdampingan.',
      },
      {
        title: 'Unduh file satu per satu atau ZIP batch',
        description:
          'Simpan file <name>_100kb satu per satu segera, atau klik Unduh Semua (ZIP) untuk mengunduh compressmypic_100kb.zip dalam satu klik.',
      },
    ],
    features: [
      { title: 'Kualitas Maksimal di Bawah 100 KB', description: 'Bukan memakai penggeser kualitas rendah yang sembarangan, pencarian biner mengunci kualitas tertinggi di bawah 100 KB.' },
      { title: 'Mempertahankan Resolusi Bila Memungkinkan', description: 'Mempertahankan lebar dan tinggi piksel asli 100% kapan pun penyesuaian kualitas saja sudah memenuhi batas 100 KB.' },
      { title: 'Peringatan Batasan yang Transparan', description: 'Memberi tahu dengan jelas jika PNG terkunci atau pengaturan 4K tanpa skala menghalangi pencapaian 100 KB.' },
      { title: 'Privasi Lokal 100%', description: 'Tanpa unggahan, tanpa watermark, dan tanpa pendaftaran.' },
    ],
    faqs: [
      {
        question: 'Mengapa 100 KB dianggap titik manis untuk CV, portal kerja, dan situs web?',
        answer:
          'Pada kisaran 100 KB, foto 1000 px hingga 1400 px pada umumnya dimuat dengan cepat bahkan melalui jaringan seluler 3G, sambil mempertahankan detail wajah yang halus, tipografi yang tajam, dan kedalaman warna alami. Sebagian besar sistem rekrutmen dan pembuat CV PDF menerima aset di bawah 100 KB dengan nyaman tanpa memotong atau memblokir.',
      },
      {
        question: 'Bisakah banner web Full HD 1920×1080 tetap berdimensi penuh saat diperkecil menjadi 100 KB?',
        answer:
          'Ya, dalam banyak kasus — terutama foto produk yang bersih, ilustrasi UI, atau latar yang diburamkan lembut yang dikompres dalam WebP atau JPG. Jika pemandangan yang ramai masih melebihi 100 KB pada kualitas 35%, penskalaan opsional menurunkan lebar dengan halus (misalnya 82% atau 68%) untuk melindungi ketajaman.',
      },
      {
        question: 'Bagaimana pencarian biner kualitas otomatis menjaga file 100 KB saya tetap setajam mungkin?',
        answer:
          'Bukan menebak tingkat kompresi statis yang rendah seperti 40%, mesin menguji batas kualitas atas dan bawah melalui hingga 7 langkah biner. Mesin berhenti tepat dalam kisaran 96%–100% di bawah 102.400 byte, memaksimalkan ketepatan piksel untuk anggaran ukuran file yang tepat.',
      },
      {
        question: 'Kapan saya sebaiknya menghapus centang Konversi otomatis PNG besar saat menargetkan 100 KB?',
        answer:
          'Jika infografik datar, ikon UI, atau diagram dua warna harus tetap PNG lossless secara ketat dan sudah muat bersih di bawah 100 KB, membiarkan Original atau memilih PNG akan bekerja dengan baik. Namun, untuk PNG fotografis, membiarkan Konversi Otomatis aktif akan mengalihkan foto buram ke JPG atau yang transparan ke WebP agar Anda tetap mendapatkan piksel yang tajam di bawah 100 KB.',
      },
      {
        question: 'Apakah logo PNG transparan akan kehilangan transparansinya jika dikonversi otomatis di bawah 100 KB?',
        answer:
          'Tidak. Sebelum beralih dari PNG yang terlalu besar pada mode Original, kompresor mendeteksi transparansi alfa pada file Anda dan otomatis memilih WebP (mempertahankan transparansi penuh) alih-alih JPG setiap kali ada piksel alfa.',
      },
      {
        question: 'Bagaimana mengompres hingga 100 KB memengaruhi Core Web Vitals dan bobot halaman?',
        answer:
          'Memangkas thumbnail hero 2 MB atau header artikel 800 KB menjadi 95 KB akan memangkas muatan halaman secara drastis tanpa menurunkan kualitas kartu tata letak secara visual. Gambar yang lebih ringan langsung memperbaiki Largest Contentful Paint (LCP) untuk pengunjung seluler maupun desktop.',
      },
      {
        question: 'Bisakah saya memperkecil grafik buletin email hingga di bawah 100 KB agar dirender lebih cepat di kotak masuk?',
        answer:
          'Ya. Memilih output JPG menjaga dukungan luas di klien email seperti Outlook, Apple Mail, dan Gmail, sambil memastikan buletin multi-gambar tetap cepat dan ringan di bawah ambang bobot filter spam.',
      },
      {
        question: 'Apa yang terjadi saat file yang saya unggah sudah 65 KB?',
        answer:
          'Kompresor mencatat bahwa file Anda sudah berada di bawah 100 KB dan menghasilkan ekspor bersih pada resolusi penuh. Jika enkode ulang Canvas HTML5 kebetulan menghasilkan file yang sedikit lebih besar dari 65 KB, pemberitahuan merah memungkinkan Anda langsung mengklik Pertahankan original.',
      },
      {
        question: 'Mengapa modal Bandingkan membantu saat mengencangkan gambar hingga 100 KB?',
        answer:
          'Melihat tirai sebelum-sesudah yang terbagi memungkinkan Anda memeriksa apakah rambut halus, tenunan kain, atau teks tangkapan layar kecil tetap bersih setelah kompresi. Jika artefak muncul pada resolusi terkunci, beralih dari JPG ke WebP sering membersihkannya dalam anggaran 100 KB yang sama.',
      },
      {
        question: 'Apakah peredam 100 KB ini menghapus tag EXIF kamera secara otomatis?',
        answer:
          'Ya. Menggambar ke Canvas HTML5 akan menghapus thumbnail kamera yang tersemat, blok XMP Lightroom, dan koordinat GPS, yang sering menghemat 20 KB–60 KB saja sebelum kompresi visual dimulai.',
      },
      {
        question: 'Bisakah saya menyeret seluruh folder thumbnail blog untuk mengompres semuanya menjadi 100 KB?',
        answer:
          'Ya. Unggah beberapa file hingga 25 MB per file dalam satu antrean, tunggu beberapa detik selagi setiap gambar diproses berurutan di browser Anda, lalu simpan semuanya di dalam compressmypic_100kb.zip.',
      },
      {
        question: 'Bagaimana jika portal CV mengizinkan JPG hingga 100 KB tetapi menolak file WebP?',
        answer:
          'Pilih JPG di bawah Format Output, bukan membiarkannya pada Original, sebelum atau sesudah mengunggah. Kompresor akan menjalankan ulang setiap gambar secara ketat sebagai .jpg standar di bawah 100 KB dan menerapkan warna matte pilihan Anda ke area transparan mana pun.',
      },
      {
        question: 'Mengapa tangkapan layar PNG 3000×2000 saya menyusut bersih setelah diperkecil ke 68% pada 100 KB?',
        answer:
          'Ukuran file PNG lossless berkaitan erat dengan jumlah total piksel dan entropi. Memperkecil tangkapan layar besar secara moderat dan memasangkannya dengan WebP atau JPG akan menurunkan bobot byte dari beberapa megabyte menjadi di bawah 100 KB, sementara teks tetap nyaman dibaca.',
      },
      {
        question: 'Apakah CV rahasia, pratinjau arsitektur, atau maket NDA diunggah ke mana pun?',
        answer:
          'Tidak pernah. Semua langkah kompresi, iterasi biner, dan pembuatan arsip ZIP berjalan secara ketat di JavaScript dan Canvas lokal di dalam tab browser Anda.',
      },
      {
        question: 'Jenis file apa saja yang bisa saya masukkan ke kompresor 100 KB?',
        answer:
          'Anda bisa meletakkan file JPG, PNG, WebP, HEIC/HEIF iPhone, GIF, BMP, dan SVG hingga 25 MB per file. Perlu dicatat, input GIF animasi mengompres frame pembukanya sebagai output statis.',
      },
      {
        question: 'Bisakah saya memilih target kustom seperti 80 KB atau 120 KB dari halaman ini?',
        answer:
          'Ya — ketuk tautan Butuh target KB yang berbeda? di panel ukuran target untuk langsung melompat ke Kompresor Ukuran File Target kami yang fleksibel dengan input KB atau MB kustom apa pun.',
      },
      {
        question: 'Mengapa target PNG terkunci masih bisa gagal pada 100 KB meski sudah diperkecil?',
        answer:
          'Saat PNG dipaksakan secara eksplisit dan perkecilan dinonaktifkan, foto yang berisik mempertahankan jutaan warna unik yang tidak bisa dikemas ke dalam 100 KB secara lossless. Mengaktifkan kembali penskalaan dimensi atau beralih ke WebP akan segera mengatasinya.',
      },
      {
        question: 'Apakah mengubah pengaturan setelah batch saya selesai otomatis mengompres ulang file saya?',
        answer:
          'Ya. Mengalihkan Format Output, Penskalaan Dimensi, konversi otomatis PNG, atau warna matte JPG otomatis memproses ulang item antrean Anda menuju 100 KB, sehingga Anda bisa membandingkan hasilnya dengan mudah.',
      },
      {
        question: 'Apakah Windows, macOS, dan iOS membuka file _100kb.jpg dan _100kb.webp yang diunduh secara native?',
        answer:
          'Ya. JPEG standar terbuka secara universal di mana saja, dan WebP modern terbuka secara native di semua browser desktop terkini, Pratinjau macOS, Foto Windows, Android, dan iOS.',
      },
      {
        question: 'Apakah ada kuota harian atau batas jumlah file pada tool 100 KB?',
        answer:
          'Tidak. Kompres gambar sebanyak yang bisa ditangani memori browser Anda hingga di bawah 100 KB, tanpa watermark, permintaan akun, atau paywall.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-200kb',
      '/web-image-optimizer',
      '/target-file-size-compressor',
    ],
  },
  {
    slug: '/compress-image-to-200kb',
    name: 'Kompres Gambar Menjadi 200 KB',
    shortDescription: 'Optimalkan foto hingga di bawah 200 KB untuk blog, unggahan CMS, dan portal.',
    category: 'compress',
    seoTitle: 'Kompres Gambar Menjadi 200 KB Online',
    seoDescription:
      'Kompres gambar menjadi 200 KB gratis online untuk WordPress, Shopify, dan banner blog. Detail tetap tajam berkat pencarian kualitas biner dan ekspor ZIP.',
    h1: 'Kompres Gambar Menjadi 200 KB Online',
    subtitle:
      'Siapkan fotografi produk toko yang tajam, header unggulan blog, dan listing bisnis saat Anda mengompres gambar menjadi 200 KB tanpa beban berlebih. Disesuaikan untuk editor WordPress, pedagang Shopify, dan pemasar digital, alat ini memprioritaskan dimensi asli 100% terlebih dahulu dan berjalan sepenuhnya lokal untuk file hingga 25 MB tanpa transfer server.',
    howToSteps: [
      {
        title: 'Unggah gambar toko atau blog',
        description:
          'Letakkan file tunggal atau seluruh batch gambar JPG, PNG, WebP, atau HEIC hingga 25 MB per file ke ruang kerja.',
      },
      {
        title: 'Pilih output WebP, JPG, Original, atau PNG',
        description:
          'Pilih WebP untuk kecepatan CMS modern, JPG untuk kompatibilitas marketplace universal, atau Original untuk hanya mengubah PNG berat secara otomatis.',
      },
      {
        title: 'Alihkan dimensi penuh vs. penskalaan fallback',
        description:
          'Biarkan penskalaan cerdas aktif untuk foto kamera 24 MP, atau hapus centangnya saat templat produk menuntut dimensi piksel asli secara ketat.',
      },
      {
        title: 'Periksa penghematan dan detail berdampingan',
        description:
          'Verifikasi indikator hijau Di Bawah 200 KB, lalu seret penggeser Bandingkan pada label, serat kain, atau tepi UI yang halus.',
      },
      {
        title: 'Simpan aset satu per satu atau Unduh Semua (ZIP)',
        description:
          'Unduh gambar <name>_200kb satu per satu secara langsung, atau kemas katalog toko Anda ke dalam compressmypic_200kb.zip.',
      },
    ],
    features: [
      { title: 'Siap CMS dan Marketplace', description: 'Cocok untuk unggahan Shopify, WooCommerce, WordPress, dan Google Business.' },
      { title: 'Penskalaan Fallback Cerdas', description: 'Jika foto kamera 24 MP tidak muat di bawah 200 KB pada ukuran penuh, penskalaan dimensi akan bekerja dengan bersih.' },
      { title: 'Verifikasi KB yang Tepat', description: 'Menampilkan byte output terverifikasi di samping byte asli dan persentase pengurangan.' },
      { title: 'Tanpa Unggahan Server', description: 'Pemrosesan Canvas HTML5 yang cepat langsung di komputer atau ponsel Anda.' },
    ],
    faqs: [
      {
        question: 'Mengapa agensi WordPress dan toko Shopify menstandarkan foto produk di kisaran 200 KB?',
        answer:
          'Batas 200 KB menyisakan bitrate yang cukup untuk jahitan yang tajam, kilau metalik, dan label produk yang terbaca, sambil menjaga grid koleksi tetap cepat bagi pembeli seluler. Tetap di bawah 200 KB juga memenuhi batas CMS dan direktori yang ketat seperti Profil Bisnis Google atau aturan media WooCommerce.',
      },
      {
        question: 'Bisakah foto kamera 12 megapiksel atau 24 megapiksel mencapai 200 KB dengan bersih?',
        answer:
          'Ya. Jika dimensi penuh 4000×3000 px melebihi 200 KB bahkan pada kualitas 35%, penskalaan dimensi cerdas akan turun secara proporsional — sering menetap di sekitar lebar 2200 px atau 1800 px pada kualitas 75%–85% yang tajam.',
      },
      {
        question: 'Kapan saya sebaiknya mengunci dimensi dengan menghapus centang Izinkan penskalaan dimensi cerdas pada 200 KB?',
        answer:
          'Hapus centang penskalaan setiap kali marketplace atau portal cetak memberlakukan lebar piksel yang tepat (misalnya slot produk kotak 1600×1600 px). Pengoptimal akan menurunkan kualitas lossy hingga serendah 5% pada dimensi penuh dan melaporkan dengan jujur jika 200 KB tidak bisa dicapai tanpa mengubah ukuran.',
      },
      {
        question: 'Bagaimana WebP dibandingkan dengan JPG pada target 200 KB untuk foto e-commerce?',
        answer:
          'Dalam anggaran 200 KB yang sama, WebP umumnya memberikan bayangan studio yang jauh lebih bersih dan teks kemasan kecil yang lebih tajam daripada JPG — biasanya setara dengan faktor kualitas 10%–15% lebih tinggi. Pilih JPG hanya jika backend marketplace lama masih menolak unggahan .webp.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah potongan produk PNG studio dengan latar transparan?',
        answer:
          'Dengan Format dibiarkan pada Original dan Konversi Otomatis aktif, PNG transparan yang terlalu besar akan beralih bersih ke WebP transparan saat PNG saja tidak bisa mencapai 200 KB dengan rapi. Jika Anda memilih JPG secara eksplisit, area transparan akan menyatu ke warna matte PNG Transparan pilihan Anda.',
      },
      {
        question: 'Mengapa pengoptimal lebih memilih mempertahankan resolusi 100% sebelum mengurangi dimensi piksel?',
        answer:
          'Memperkecil dimensi akan membuang detail grid piksel secara permanen, sedangkan penyetelan kualitas lossy yang moderat mempertahankan tepi yang tajam pada lebar penuh. Menguji kualitas 35%–94% pada dimensi penuh terlebih dahulu memastikan grafik hero desktop tetap berukuran penuh bila memungkinkan.',
      },
      {
        question: 'Bisakah saya mengoptimalkan seluruh katalog musiman sekaligus hingga di bawah 200 KB?',
        answer:
          'Ya. Letakkan puluhan foto produk hingga 25 MB per file ke dalam antrean, biarkan alat memeriksa setiap gambar secara lokal, lalu ambil setiap aset yang dioptimalkan di dalam compressmypic_200kb.zip.',
      },
      {
        question: 'Apakah mengubah latar transparan menjadi matte JPG putih membantu mencapai 200 KB untuk Amazon atau Etsy?',
        answer:
          'Ya. Latar putih murni (#ffffff) terkompres sangat efisien dalam JPEG sekaligus memenuhi pedoman latar putih marketplace, membebaskan byte tambahan dalam 200 KB untuk produk sebenarnya di tengah.',
      },
      {
        question: 'Mengapa unggahan WebP 140 KB saya menampilkan peringatan Membesar setelah diproses ulang?',
        answer:
          'Jika file yang sudah dioptimalkan dengan baik di bawah 200 KB dienkode ulang pada kualitas tinggi standar Canvas, file itu bisa mendarat di sekitar 165 KB alih-alih mengecil. Mengklik Pertahankan original akan segera mengembalikan file sumber 140 KB yang tidak tersentuh.',
      },
      {
        question: 'Apakah prototipe produk yang belum dirilis atau banner kampanye klien disimpan di server eksternal?',
        answer:
          'Tidak. Setiap dekode piksel, langkah penskalaan, dan pembuatan ZIP terjadi secara privat di dalam sesi browser lokal Anda, sehingga aman untuk peluncuran yang diembargo dan pekerjaan klien NDA.',
      },
      {
        question: 'Apakah kompresor 200 KB mendukung foto HEIC/HEIF Apple dari iPhone terbaru?',
        answer:
          'Ya. WebAssembly sisi klien mendekode file HEIC iPhone langsung di tab browser Anda, sehingga Anda tidak perlu mengubahnya terlebih dahulu.',
      },
      {
        question: 'Mengapa 200 KB sering lebih baik daripada 50 KB untuk infografik detail atau papan menu?',
        answer:
          'Tipografi kecil di dalam menu restoran, denah lantai properti, atau tangkapan UI perangkat lunak cepat buram jika dipadatkan di bawah 50 KB. Target 200 KB memberi WebP dan JPG empat kali lipat ruang byte, sehingga label halus tetap tajam.',
      },
      {
        question: 'Seberapa dekat pencarian kualitas biner biasanya mendarat ke 200 KB?',
        answer:
          'Setelah kisaran kualitas yang layak ditemukan pada skala tertentu, hingga 7 iterasi pencarian biner menargetkan 96% hingga 100% dari 204.800 byte. File umumnya menetap antara 192 KB dan 199 KB, sehingga Anda mendapatkan ketajaman maksimum dalam batas tersebut.',
      },
      {
        question: 'Apakah profil warna DSLR dan tag GPS kamera yang tersemat dihapus selama kompresi 200 KB?',
        answer:
          'Ya. Menulis gambar melalui Canvas HTML5 akan menghapus blok metadata EXIF dan thumbnail pratinjau yang tersemat, meningkatkan privasi dan menghilangkan kilobyte yang terbuang di server WordPress dan CDN.',
      },
      {
        question: 'Bagaimana jika PNG lossless yang terlalu besar hanya diperkecil hingga 35% agar tetap PNG di bawah 200 KB?',
        answer:
          'Dengan Format diatur ke Original dan Konversi Otomatis PNG aktif, PNG lossless apa pun yang terpaksa di bawah skala 65% otomatis beralih ke WebP atau JPG. Dengan begitu, Anda mempertahankan dimensi piksel yang jauh lebih tajam sambil melewati batas 200 KB dengan nyaman.',
      },
      {
        question: 'Bisakah saya melihat detail kain atau perhiasan yang halus sebelum mengunduh file 200 KB?',
        answer:
          'Ya. Mengklik Bandingkan pada kartu hasil mana pun yang sudah selesai akan membuka penggeser layar terbagi interaktif yang membandingkan piksel asli Anda yang tidak terkompres langsung dengan output yang dikompres.',
      },
      {
        question: 'Apa yang terjadi jika saya meletakkan banner vektor SVG ke kompresor 200 KB?',
        answer:
          'Browser Anda merasterisasi SVG ke Canvas dan mengoptimalkannya menjadi PNG, WebP, atau JPG di bawah 200 KB sesuai pilihan format Anda. Ini berguna saat marketplace atau portal CMS menolak unggahan .svg mentah.',
      },
      {
        question: 'Berapa ukuran file sumber maksimum yang diterima per gambar di sini?',
        answer:
          'Setiap JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG yang diunggah bisa mencapai 25 MB. Ruang ini menangani ekspor kamera berat langsung dari Lightroom atau ponsel modern tanpa perlu diperkecil dulu.',
      },
      {
        question: 'Bagaimana file output dinamai agar tetap terpisah dari folder produk master saya?',
        answer:
          'Setiap salinan yang disimpan mempertahankan nama dasar file Anda yang sudah dibersihkan dan menambahkan _200kb sebelum ekstensi, menghasilkan nama yang jelas seperti sneaker_side_200kb.webp. Master resolusi tinggi asli Anda tetap sepenuhnya tidak tersentuh di disk.',
      },
      {
        question: 'Bisakah saya melompat ke ambang tepat lainnya seperti 150 KB atau 300 KB jika portal mengubah aturan?',
        answer:
          'Ya. Gunakan tautan Butuh target KB yang berbeda? di bagian atas kontrol untuk membuka Kompresor Ukuran File Target kustom dan memasukkan angka KB atau MB yang tepat.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-500kb',
      '/web-image-optimizer',
      '/bulk-image-compressor',
    ],
  },
  {
    slug: '/compress-image-to-500kb',
    name: 'Kompres Gambar Menjadi 500 KB',
    shortDescription: 'Perkecil foto bermegabyte hingga di bawah 500 KB dengan kualitas sangat tinggi.',
    category: 'compress',
    seoTitle: 'Kompres Gambar Menjadi 500 KB Online',
    seoDescription:
      'Kompres gambar menjadi 500 KB gratis online tanpa kehilangan ketajaman resolusi tinggi. Ubah file JPG, PNG, WebP, dan HEIC besar menjadi aset web yang cepat.',
    h1: 'Kompres Gambar Menjadi 500 KB Online',
    subtitle:
      'Ubah frame DSLR 5 MB hingga 18 MB yang besar, ekspor RAW ponsel, dan tangkapan layar resolusi tinggi menjadi aset yang tajam saat Anda mengompres gambar menjadi 500 KB secara lokal di browser Anda. Ideal untuk fotografer yang mengirim proof klien, pendiri yang membuat pitch deck ringan, dan agensi yang mengirim galeri portofolio, alat ini mempertahankan dimensi piksel resolusi tinggi penuh sedapat mungkin hingga 25 MB per file.',
    howToSteps: [
      {
        title: 'Letakkan file kamera atau desain resolusi penuh',
        description:
          'Unggah satu atau beberapa gambar JPG, PNG, WebP, atau HEIC hingga 25 MB per file tanpa mengubah ukurannya terlebih dahulu.',
      },
      {
        title: 'Pilih Format Output untuk pengiriman resolusi tinggi',
        description:
          'Pertahankan Original untuk penanganan yang mulus, pilih JPG untuk deck klien dan proof cetak, atau pilih WebP untuk galeri portofolio yang sangat tajam.',
      },
      {
        title: 'Periksa preferensi penskalaan dan fallback PNG',
        description:
          'Biarkan penskalaan dimensi cerdas dicentang untuk foto 40 MP ke atas, atau hapus centangnya untuk mempertahankan dimensi 4K ke atas yang ketat pada kualitas yang dioptimalkan.',
      },
      {
        title: 'Periksa detail berdampingan dalam mode Bandingkan',
        description:
          'Periksa setiap lencana konfirmasi Di Bawah 500 KB dan amati dedaunan, tekstur kulit, atau tipografi di penampil sebelum/sesudah yang terbagi.',
      },
      {
        title: 'Unduh file satu per satu atau kemas ZIP',
        description:
          'Simpan setiap output <name>_500kb segera, atau ekspor kumpulan foto besar dengan bersih dalam compressmypic_500kb.zip.',
      },
    ],
    features: [
      { title: 'Kompresi 500 KB yang Hampir Lossless', description: '500 KB memberi ruang yang cukup untuk menjaga gambar besar 1920 px–4000 px tetap tidak bisa dibedakan secara visual dari aslinya.' },
      { title: 'Dekode HEIC Otomatis', description: 'Mendukung foto HEIC/HEIF iPhone secara lokal melalui WebAssembly sisi klien.' },
      { title: 'Tanpa Tebak-tebakan Kualitas', description: 'Berhenti menggeser persentase secara manual — biarkan pencarian biner memaksimalkan kualitas di bawah 500 KB.' },
      { title: '100% Privat di Browser', description: 'Tidak ada yang diunggah ke server jarak jauh.' },
    ],
    faqs: [
      {
        question: 'Mengapa 500 KB mempertahankan kualitas visual yang hampir asli pada foto 4K dan 12 MP?',
        answer:
          'Setengah megabyte (512.000 byte) menyediakan ruang yang cukup untuk mikro-kontras yang halus, butiran film yang lembut, dan gradien langit yang mulus di seluruh foto 1920 px hingga 4000 px. Sebagian besar gambar mencapai 500 KB dengan bersih pada kualitas tinggi 75%–92% tanpa perlu memperkecil dimensi sama sekali.',
      },
      {
        question: 'Seberapa baik cara ini bekerja untuk Pitch Deck, Keynote, dan lampiran slide PowerPoint?',
        answer:
          'Memperkecil tangkapan layar dan maket studio dari PNG 6 MB menjadi JPG atau WebP di bawah 500 KB akan mengurangi beban presentasi secara dramatis. Deck 30 slide tetap cepat dikirim lewat email dan disinkronkan ke cloud, sambil tampak sangat tajam di proyektor konferensi.',
      },
      {
        question: 'Bisakah saya mempertahankan resolusi asli 100% pada foto DSLR 24 MP saat mengompres menjadi 500 KB?',
        answer:
          'Hapus centang Izinkan penskalaan dimensi cerdas untuk memaksakan dimensi piksel asli 100%, sehingga pencarian biner kualitas bisa turun hingga 5% jika diperlukan. Untuk sebagian besar JPEG kamera 6000×4000 px, kualitas JPG sekitar 40%–65% sudah cukup untuk melewati 500 KB tanpa memperkecil satu piksel pun.',
      },
      {
        question: 'Mengapa potret HEIC iPhone 15 MB bisa tetap beresolusi penuh di bawah 500 KB saat diekspor sebagai JPG atau WebP?',
        answer:
          'Foto HEIC dari ponsel modern membawa data warna yang dalam dan jumlah megapiksel yang tinggi, tetapi dienkode ulang secara efisien menjadi JPG atau WebP berkualitas 80% ke atas di kisaran 450–495 KB. Bokeh potret dan gradien kulit yang halus tetap mulus di seluruh kanvas gambar.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah maket dasbor perangkat lunak PNG lossless 10 MB?',
        answer:
          'PNG retina layar penuh jarang muat di dalam 500 KB secara lossless tanpa penyusutan piksel yang besar. Membiarkan Format pada Original dengan Konversi Otomatis PNG aktif akan otomatis mengalihkannya ke WebP berkualitas tinggi yang hampir lossless atau JPG yang tajam, sehingga teks UI tetap terbaca pada ukuran layar penuh.',
      },
      {
        question: 'Mengapa 500 KB populer untuk pengiriman portofolio Behance, Dribbble, dan agensi?',
        answer:
          'Platform portofolio dan portal vendor RFP sering membatasi media studi kasus hingga 500 KB per gambar agar halaman multi-proyek tetap cepat. Mengompres sedikit di bawah 500 KB memenuhi validator unggahan tanpa memicu kompresi ulang sisi server yang kasar.',
      },
      {
        question: 'Bagaimana perilaku alat jika satu file dalam batch saya sudah 320 KB?',
        answer:
          'Kompresor mendeteksi bahwa 320 KB sudah memenuhi syarat 500 KB dan memproses salinan bersih pada resolusi penuh. Jika enkode ulang menghasilkan file yang sedikit lebih berat, peringatan Membesar akan muncul agar Anda bisa mengklik Pertahankan original dan mempertahankan file asli 320 KB.',
      },
      {
        question: 'Apakah fotografer kehilangan kendali atas kekayaan intelektual atau membocorkan pemotretan klien di sini?',
        answer:
          'Tidak pernah. Baik saat menyiapkan pratinjau pernikahan, pemotretan arsitektur komersial, atau prototipe yang belum dirilis, setiap gambar didekode dan dikompres di dalam tab browser lokal Anda tanpa transmisi server.',
      },
      {
        question: 'Format apa yang mempertahankan tipografi dan garis vektor tipis paling tajam pada 500 KB?',
        answer:
          'WebP mengungguli JPG pada tipografi gelap-di-atas-putih yang tajam, bagan, dan skema di dalam batas 500 KB. Enkode blok prediktifnya meminimalkan halo berisik di sekitar antarmuka dan diagram berkontras tinggi.',
      },
      {
        question: 'Bisakah saya meratakan PNG produk transparan ke arang gelap, bukan putih, saat menargetkan JPG 500 KB?',
        answer:
          'Ya. Memilih JPG akan menampilkan pemilih warna matte PNG Transparan, sehingga Anda bisa memasukkan putih, slate gelap, atau warna hex merek kustom apa pun untuk pencampuran tepi transparan yang mulus.',
      },
      {
        question: 'Apakah kompresi Canvas mempertahankan model lensa kamera, kecepatan rana, dan koordinat GPS?',
        answer:
          'Tidak — Canvas HTML5 otomatis menghapus metadata EXIF, sehingga menghilangkan thumbnail kamera yang tersemat dan data lokasi. Cara ini menjaga proof klien tetap privat dan mengalokasikan setiap kilobyte untuk piksel yang terlihat.',
      },
      {
        question: 'Batas byte tepat apa yang memicu lencana konfirmasi Di Bawah 500 KB?',
        answer:
          'Alat memeriksa file hasil enkode akhir terhadap 512.000 byte (500 × 1024). File yang benar-benar berada pada atau di bawah 512.000 byte akan menampilkan lencana status hijau Di Bawah 500 KB beserta ruang yang dihemat secara tepat.',
      },
      {
        question: 'Bisakah saya mengurangi dua puluh foto 10 MB sekaligus menjadi 500 KB dalam satu langkah?',
        answer:
          'Ya. Letakkan semua dua puluh gambar (hingga 25 MB per file) ke dalam antrean, biarkan browser memproses setiap foto secara berurutan, lalu ekspor semuanya bersama-sama di dalam compressmypic_500kb.zip.',
      },
      {
        question: 'Mengapa PNG lossless yang dipaksakan dengan penskalaan dinonaktifkan menampilkan Target tidak tercapai pada 500 KB?',
        answer:
          'Kompresi PNG lossless mengabaikan penggeser kualitas, artinya pemandangan resolusi tinggi yang kompleks dengan format PNG dan dimensi penuh yang sama-sama terkunci tidak bisa turun di bawah batas DEFLATE mentahnya. Aktifkan penskalaan dimensi atau pilih WebP/JPG untuk melewati 500 KB dengan bersih.',
      },
      {
        question: 'Bisakah saya memperbesar dan menggeser, atau membandingkan aslinya dengan versi 500 KB secara berdampingan sebelum menyimpan?',
        answer:
          'Ya. Mengklik Bandingkan pada kartu mana pun yang sudah selesai akan membuka tirai pisah sebelum/sesudah selebar penuh, sehingga Anda bisa memeriksa mata, helai rambut, atau label kecil langsung terhadap file aslinya.',
      },
      {
        question: 'Jika gambar memerlukan sedikit penskalaan dimensi untuk mencapai 500 KB, seberapa drastis pengubahan ukurannya?',
        answer:
          'Penskala mulai dari 82% dari dimensi asli sebelum mencoba langkah yang lebih curam. Karena 500 KB cukup longgar, ekspor studio 50 MP yang besar biasanya melewati target dengan bersih tepat pada langkah 82% atau 68% sambil mempertahankan ketajaman cetak resolusi tinggi.',
      },
      {
        question: 'Apakah alat ini mendukung bitmap BMP lama atau diagram SVG hingga 25 MB?',
        answer:
          'Ya. Arsip BMP yang tidak terkompres dan ilustrasi SVG vektor hingga 25 MB dimuat langsung ke Canvas dan diekspor bersih di bawah 500 KB dalam format raster pilihan Anda.',
      },
      {
        question: 'Bagaimana nama file berubah saat mengunduh salinan 500 KB yang dikompres?',
        answer:
          'Setiap gambar yang diproses otomatis menambahkan _500kb sebelum ekstensinya, menghasilkan nama yang jelas seperti architectural_proof_500kb.jpg. Tag pada nama file yang diekspor memastikan hasil kiriman Anda yang dikompres tidak pernah menimpa master asli.',
      },
      {
        question: 'Apa yang harus saya lakukan jika portal marketplace menetapkan batas 1 MB atau 250 KB?',
        answer:
          'Klik pintasan Butuh target KB yang berbeda? di atas tombol format untuk membuka Kompresor Ukuran File Target kustom dan memasukkan ambang KB atau MB kustom apa pun.',
      },
      {
        question: 'Bisakah saya mengompres aset 500 KB langsung dari iPad atau tablet Android?',
        answer:
          'Ya. Kontrol format yang ramah sentuhan, penggeser perbandingan, dan ekspor ZIP berfungsi bersih di browser tablet dan seluler modern tanpa perangkat lunak desktop.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/bulk-image-compressor',
      '/',
    ],
  },
  {
    slug: '/bulk-image-compressor',
    name: 'Kompresor Gambar Massal',
    shortDescription: 'Kompres puluhan gambar sekaligus secara massal dan ekspor sebagai satu ZIP.',
    category: 'compress',
    seoTitle: 'Kompres Gambar Massal Online Gratis',
    seoDescription:
      'Perkecil puluhan file dengan kompresor gambar massal di browser Anda secara lokal. Terapkan profil Web Cepat, Email, atau Kualitas Tinggi, lalu unduh satu ZIP.',
    h1: 'Kompresor Gambar Massal Gratis Online',
    subtitle:
      'Perkecil seluruh folder foto produk, cadangan rol kamera, dan aset situs web secara bersamaan menggunakan kompresor gambar massal gratis kami langsung di browser Anda. Dibuat untuk tim e-commerce, fotografer, dan pengembang yang menangani batch besar, alat ini memadukan Profil Batch Cepat sekali klik dan penggeser kualitas kustom dengan pelacakan progres langsung, perbandingan visual per file, dan unduhan ZIP tunggal yang instan.',
    howToSteps: [
      {
        title: 'Letakkan seluruh batch gambar Anda',
        description:
          'Pilih atau seret beberapa gambar JPG, PNG, WebP, atau HEIC hingga 25 MB per file ke zona letak batch (gambar lain bisa ditambahkan kapan saja).',
      },
      {
        title: 'Klik Profil Batch Cepat atau sesuaikan pengaturan',
        description:
          'Pilih Web Cepat (WebP 75%), Email / Berbagi (JPG 65%), atau Kualitas Tinggi (85%), atau sesuaikan penggeser kualitas, format output, dan warna matte.',
      },
      {
        title: 'Pantau progres kompresi batch secara langsung',
        description:
          'Perhatikan bilah progres langsung yang selesai file demi file, lalu periksa banner ringkasan yang menampilkan total file, MB yang dihemat, dan persentase pengurangan keseluruhan.',
      },
      {
        title: 'Periksa kartu individual dan kualitas sebelum/sesudah',
        description:
          'Buka modal Bandingkan pada file contoh, klik Pertahankan original jika ada aset yang sudah kecil malah membesar, atau jalankan ulang file tunggal dengan pengaturan yang disesuaikan.',
      },
      {
        title: 'Sesuaikan dan Kompres Ulang Semua jika diperlukan',
        description:
          'Ubah profil, persentase kualitas, atau format target Anda kapan saja, lalu proses ulang seluruh antrean dalam satu klik tanpa mengunggah ulang.',
      },
      {
        title: 'Unduh file satu per satu atau Unduh Semua (ZIP)',
        description:
          'Simpan gambar yang dioptimalkan satu per satu langsung dari kartunya, atau klik Unduh Semua (ZIP) untuk mengunduh bulk_compressed_compressmypic.zip.',
      },
    ],
    features: [
      { title: 'Progres Batch dan Total Penghematan', description: 'Menampilkan progres langsung file demi file beserta total MB dan persentase yang dihemat di seluruh batch Anda.' },
      { title: 'Profil Batch Cepat Sekali Klik', description: 'Menerapkan preset WebP, Email/JPG, atau Kualitas Tinggi ke setiap file secara instan.' },
      { title: 'Modal Perbandingan Per File', description: 'Periksa setiap foto yang dikompres terhadap aslinya sebelum mengunduh.' },
      { title: 'Tanpa Batas Batch', description: 'Kompres gambar sebanyak yang diizinkan memori perangkat Anda, tanpa tingkat berbayar atau antrean server.' },
    ],
    faqs: [
      {
        question: 'Apa yang diubah oleh tiga Profil Batch Cepat pada gambar dalam antrean saya?',
        answer:
          'Web Cepat mengubah Format Output menjadi WebP pada kualitas 75% untuk situs web yang ringan, Email / Berbagi mengubah batch menjadi JPG 65% untuk lampiran yang lebih kecil, dan Kualitas Tinggi mempertahankan format asli pada kualitas 85%. Mengklik profil mana pun otomatis memperbarui pengaturan dan mengompres ulang file yang sudah dimuat.',
      },
      {
        question: 'Bisakah saya mengompres gambar secara massal di laptop atau ponsel tanpa koneksi unggah yang aktif?',
        answer:
          'Setelah halaman tool selesai dimuat, semua kompresi batch, dekode, dan pembuatan ZIP terjadi secara lokal di browser Anda menggunakan Canvas HTML5 dan WebAssembly. Foto Anda tidak pernah masuk ke antrean pemrosesan jarak jauh atau meninggalkan perangkat Anda.',
      },
      {
        question: 'Bagaimana ringkasan batch agregat melaporkan total penghematan?',
        answer:
          'Saat file selesai diproses, bilah ringkasan menjumlahkan ukuran byte asli di semua item terhadap hasil yang dikompres, menampilkan megabyte agregat yang dihemat dan persentase pengurangan keseluruhan. Jika ada satu file yang akhirnya lebih besar, Anda bisa mengklik Pertahankan original pada kartu itu sebelum mengekspor ZIP.',
      },
      {
        question: 'Apa yang terjadi saat saya mencampur tangkapan layar PNG, HEIC iPhone, dan foto JPG dalam satu batch?',
        answer:
          'Dengan Format Output diatur ke Original, setiap gambar dienkode ke format web yang cocok (HEIC didekode menjadi JPG/PNG dengan bersih melalui WebAssembly). Sebagai alternatif, memilih WebP atau JPG akan menyatukan seluruh folder campuran menjadi satu ekstensi output yang seragam.',
      },
      {
        question: 'Berapa ukuran maksimum yang diizinkan per file di Kompresor Gambar Massal?',
        answer:
          'File individual hingga 25 MB didukung untuk input JPG, PNG, WebP, HEIC/HEIF, GIF, BMP, dan SVG. Tidak ada batas jumlah yang tetap — hanya memori browser perangkat Anda yang tersedia.',
      },
      {
        question: 'Mengapa alat ini memproses batch dengan bilah progres langsung, bukan membekukan tab saya?',
        answer:
          'File berjalan dalam langkah browser yang terkendali dengan pembaruan progres (X / Y) yang ditampilkan secara real time. Cara ini menjaga halaman tetap responsif sehingga Anda bisa memantau penyelesaian dengan jelas, bahkan pada batch 30 atau 50 foto resolusi tinggi.',
      },
      {
        question: 'Apa nama file ZIP yang diekspor saat saya mengklik Unduh Semua (ZIP)?',
        answer:
          'Mengklik Unduh Semua (ZIP) akan mengemas setiap output yang sudah jadi dengan bersih ke dalam bulk_compressed_compressmypic.zip. Seluruh arsip ZIP dibuat langsung di memori browser Anda tanpa melewati server penyimpanan cloud.',
      },
      {
        question: 'Bisakah saya menambahkan foto tambahan ke antrean setelah batch pertama saya selesai dikompres?',
        answer:
          'Ya. Meletakkan gambar lagi akan menambahkannya dengan bersih ke daftar batch Anda yang sudah ada, sehingga Anda bisa menggabungkan file lama dan file yang baru diletakkan bersama-sama ke dalam satu ZIP akhir.',
      },
      {
        question: 'Apa perbedaan antara preset Seimbang, File Lebih Kecil, dan Kualitas Tinggi di dalam Kontrol Kompresi?',
        answer:
          'Profil Batch Cepat mengonfigurasi pintasan format plus kualitas untuk tujuan umum seperti kecepatan web atau lampiran email. Sementara itu, pil Seimbang, File Lebih Kecil, Kualitas Tinggi, dan penggeser kualitas 10%–100% di dalam Kontrol Kompresi memungkinkan Anda menyetel kekuatan lossy yang tepat sebelum mengklik Kompres Ulang Semua.',
      },
      {
        question: 'Jika saya mengubah ikon PNG transparan menjadi JPG secara massal, bagaimana latarnya diwarnai?',
        answer:
          'Setiap kali Format Output adalah JPG (termasuk melalui profil Email / Berbagi), pemilih Warna Latar Matte akan muncul secara otomatis. Pemilih ini mengisi saluran alfa transparan dengan bersih ke putih murni (#ffffff) atau warna hex kustom apa pun yang Anda pilih, sehingga ikon tidak pernah berubah menjadi hitam.',
      },
      {
        question: 'Apakah Kompresor Gambar Massal mengubah dimensi piksel gambar atau mempertahankan lebar dan tinggi asli?',
        answer:
          'Kompresor Gambar Massal mempertahankan setiap file pada 100% lebar dan tinggi piksel aslinya sambil mengurangi ukuran byte melalui enkode kualitas. Jika Anda juga perlu memperkecil dimensi pada puluhan foto, padukan alat ini dengan Pengubah Ukuran Gambar Massal.',
      },
      {
        question: 'Mengapa satu PNG yang sudah dikompres di batch saya menampilkan peringatan Enkode ulang — membesar?',
        answer:
          'File PNG yang diekspor oleh tool yang memakai kuantisasi paleta agresif bisa sedikit membesar saat disimpan ulang sebagai PNG lossless 24-bit penuh di Canvas HTML5. Mengklik Pertahankan original pada kartu itu akan menjaga file asli yang lebih kecil di dalam ZIP batch Anda, atau mengubah format ke WebP/JPG akan memperkecilnya lebih lanjut.',
      },
      {
        question: 'Bisakah saya mengompres ulang satu gambar yang membandel saja, bukan menjalankan ulang seluruh folder?',
        answer:
          'Ya. Setiap kartu hasil yang sudah selesai menyertakan tombol Kompres Ulang dan Hapus sendiri di samping Bandingkan dan Unduh, sehingga Anda bisa menyesuaikan atau membuang outlier dengan bersih.',
      },
      {
        question: 'Apakah kompresi massal otomatis menghapus koordinat GPS kamera dan tag EXIF dari album perjalanan?',
        answer:
          'Ya. Karena setiap gambar dirender ke Canvas HTML5 selama kompresi, tag EXIF yang tersemat, nomor seri kamera, dan lokasi GPS dihapus bersih dari setiap file di dalam ZIP.',
      },
      {
        question: 'Kapan saya sebaiknya memilih Kompresor Gambar Massal, bukan Ukuran File Target atau Pengoptimal Gambar Web?',
        answer:
          'Gunakan Kompresor Gambar Massal saat Anda menginginkan penghematan berbasis kualitas yang cepat dan seragam pada dimensi piksel penuh di puluhan foto. Pilih Ukuran File Target saat Anda membutuhkan setiap file di bawah batas KB yang ketat, atau Pengoptimal Gambar Web untuk batas piksel web preset plus tag HTML responsif.',
      },
      {
        question: 'Bisakah saya memeriksa kualitas visual item batch individual sebelum mengunduh ZIP penuh?',
        answer:
          'Ya. Mengklik Bandingkan pada kartu mana pun akan membuka penggeser pisah berdampingan yang membandingkan versi asli dan versi terkompres dengan detail penuh.',
      },
      {
        question: 'Bagaimana titik awal kualitas standar 70% bekerja pada pustaka foto umum?',
        answer:
          'Kualitas lossy 70% biasanya memberikan pengurangan byte yang besar, 50%–75%, pada JPEG resolusi tinggi, sambil tetap tampak bersih secara visual di layar web biasa dan saat berbagi email. Naikkan ke 85% pada Kualitas Tinggi untuk pekerjaan portofolio yang kritis.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah folder besar berisi 100 foto di ponsel dengan RAM terbatas?',
        answer:
          'Karena dekode dan buffer Canvas berada di memori perangkat, tab seluler bisa melambat pada antrean tunggal yang ekstrem. Memproses 15 hingga 30 foto bermegapiksel tinggi per batch — dan mengosongkan daftar yang sudah selesai di antara batch — menjaga browser ponsel tetap lancar.',
      },
      {
        question: 'Apakah watermark, batas file harian, atau permintaan upgrade berbayar pernah diberlakukan pada ekspor ZIP massal?',
        answer:
          'Tidak pernah. Baik unduhan file tunggal maupun bundel Unduh Semua (ZIP) diekspor dengan bersih, tanpa watermark, pendaftaran akun, atau paywall jumlah file.',
      },
      {
        question: 'Bisakah saya meletakkan GIF animasi ke dalam batch kompresi massal?',
        answer:
          'Input GIF animasi hanya mengekstrak dan mengompres frame pembukanya sebagai file statis di sini. Jika Anda perlu memperkecil GIF animasi multi-frame sambil menjaga gerakannya tetap utuh, gunakan tool Kompresor GIF khusus kami.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-resizer',
      '/bulk-image-converter',
      '/web-image-optimizer',
      '/',
    ],
  },
  {
    slug: '/target-file-size-compressor',
    name: 'Kompresor Ukuran File Target',
    shortDescription: 'Kompres gambar apa pun ke batas KB atau MB yang Anda tentukan.',
    category: 'compress',
    seoTitle: 'Kompres Gambar ke Ukuran Tepat KB & MB Online',
    seoDescription:
      'Capai batas upload yang tepat di browser: ketik batas KB atau MB, lalu gunakan pencarian kualitas biner dan penskalaan piksel secara lokal di perangkat Anda.',
    h1: 'Kompresor Gambar Ukuran File Target',
    subtitle:
      'Masukkan batas upload yang tepat dalam KB atau MB — misalnya 35 KB untuk kartu identitas, 150 KB untuk banner situs, atau 2 MB untuk lampiran — dengan kompresor ukuran file target kami yang berjalan langsung di browser. Dibuat untuk desainer, pengembang, dan pelamar yang berhadapan dengan aturan portal yang tidak standar: alat ini memadukan pencarian kualitas biner dengan penskalaan piksel opsional untuk file hingga 25 MB, semuanya rapi di perangkat Anda sendiri.',
    howToSteps: [
      {
        title: 'Masukkan batas KB atau MB kustom Anda',
        description:
          'Ketik angka target apa pun dari 1 KB hingga 10.240 KB (atau beralih ke MB hingga 20 MB), atau ketuk tombol preset cepat seperti 20 KB, 50 KB, 100 KB, 200 KB, 500 KB, atau 1 MB.',
      },
      {
        title: 'Jatuhkan satu atau banyak gambar hingga 25 MB',
        description:
          'Unggah file JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG ke area unggah — pengoptimalan target otomatis langsung dimulai.',
      },
      {
        title: 'Pilih Format Output dan kontrol cadangan',
        description:
          'Pilih Original, JPG, WebP, atau PNG, biarkan penskalaan dimensi cerdas tetap aktif jika file beresolusi tinggi perlu mengurangi piksel, dan aktifkan Konversi Otomatis PNG untuk grafis yang berat.',
      },
      {
        title: 'Baca diagnosis target dan bandingkan kualitas',
        description:
          'Periksa Ringkasan Kompresi Target untuk melihat file yang mencapai target dan yang tidak, periksa ketajaman berdampingan dengan Bandingkan, atau klik Pertahankan original jika ada file kecil yang justru membesar.',
      },
      {
        title: 'Sesuaikan target kapan saja atau unduh ZIP',
        description:
          'Ubah ambang kustom Anda dan klik Kompres ke [target] untuk memproses ulang antrean, lalu simpan file satu per satu atau klik Unduh Semua (ZIP).',
      },
    ],
    features: [
      {
        title: 'Target KB & MB Kustom',
        description: 'Atur ukuran target apa pun — dari avatar mungil 10 KB hingga unggahan cetak bermegabyte.',
      },
      {
        title: 'Mesin Dua Tahap: Kualitas + Skala',
        description: 'Menguji tingkat kualitas pada resolusi penuh terlebih dahulu, lalu menurunkan dimensi selangkah demi selangkah hanya saat diperlukan.',
      },
      {
        title: 'Diagnosis Gagal yang Jujur',
        description: 'Menjelaskan dengan jelas saat PNG lossless atau penskalaan yang dimatikan menghalangi tercapainya batas ukuran yang ketat.',
      },
      {
        title: 'Dukungan Batch & ZIP',
        description: 'Kompres banyak file ke target KB yang sama dan unduh semuanya dalam satu ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Berapa rentang KB dan MB kustom yang bisa saya ketik di kompresor ukuran file target ini?',
        answer:
          'Dalam mode KB, Anda bisa memasukkan bilangan bulat apa pun dari 1 KB hingga 10.240 KB (10 MB), dengan nilai default 150 KB saat halaman dibuka. Beralih ke satuan MB memungkinkan Anda menargetkan nilai apa pun dari 1 MB hingga 20 MB, dengan tombol isi cepat untuk 20 KB, 50 KB, 100 KB, 200 KB, 500 KB, dan 1 MB.',
      },
      {
        question: 'Bagaimana cara beralih antara satuan KB dan MB menghitung ulang angka saya saat ini?',
        answer:
          'Mengklik MB akan membagi target KB Anda saat ini dengan 1.024 dan membulatkannya menjadi minimal 1 MB, sehingga Anda tidak pernah tanpa sengaja turun dari kilobyte ke batas byte yang sangat kecil. Mengetuk kembali ke KB akan mengalikannya dengan 1.024 hingga batas 10.240 KB.',
      },
      {
        question: 'Mengapa pengoptimal menguji pencarian kualitas biner pada resolusi 100% sebelum memperkecil dimensi?',
        answer:
          'Banyak gambar dengan batas moderat seperti 150 KB, 300 KB, atau 1,5 MB bisa mencapai target hanya dengan memangkas beban kompresi JPEG atau WebP tanpa membuang piksel. Memeriksa kualitas 35%–94% pada dimensi penuh terlebih dahulu memastikan lebar dan tinggi piksel tetap utuh sebisa mungkin.',
      },
      {
        question: 'Kapan penskalaan dimensi cerdas otomatis turun tangan?',
        answer:
          'Jika kualitas lossy 35% pada lebar penuh pun tidak bisa menekan gambar di bawah ambang byte Anda dan opsi Izinkan penskalaan dimensi cerdas dicentang, mesin akan turun melalui faktor skala bertahap dari 82% hingga 10%. Pada setiap langkah, mesin menjalankan pencarian kualitas baru dan memilih resolusi tertinggi yang memenuhi batas tepat Anda.',
      },
      {
        question: 'Apa yang terjadi saat portal membutuhkan batas KB yang sangat ketat sekaligus tanpa perubahan ukuran?',
        answer:
          'Hapus centang Izinkan penskalaan dimensi cerdas untuk mengunci lebar dan tinggi Anda pada 100%. Kompresor kemudian akan menurunkan kualitas JPG atau WebP lossy hingga serendah 5% pada dimensi penuh dan memberi tahu Anda dengan jujur jika kompleksitas gambar mentah tidak mungkin muat secara fisik dalam KB yang Anda minta.',
      },
      {
        question: 'Mengapa batas mustahil seperti 2 KB atau 3 KB memicu pemberitahuan gagal yang jujur?',
        answer:
          'Setiap file JPEG, WebP, atau PNG yang valid berisi header file wajib, tabel Huffman, dan blok kuantisasi warna yang memakan beberapa ratus byte bahkan pada grid kecil. Alih-alih crash atau mengarang angka, kartu menampilkan ukuran terenkode nyata terkecil yang dapat dicapai beserta saran yang bisa ditindaklanjuti.',
      },
      {
        question: 'Apa fungsi tombol Konversi otomatis PNG besar saat Format tetap di Original?',
        answer:
          'File PNG lossless mengabaikan slider kualitas dan hanya mengecil melalui penurunan skala, yang bisa membuat tangkapan layar atau grafis produk buram jika dipaksa di bawah batas KB yang ketat. Dengan Konversi otomatis aktif, PNG buram yang terlalu besar beralih ke JPG, sedangkan PNG transparan beralih ke WebP setiap kali PNG saja gagal mencapai target atau turun di bawah skala 65%.',
      },
      {
        question: 'Bisakah saya mengompres foto campuran secara massal ke ambang KB kustom yang sama persis sekaligus?',
        answer:
          'Ya. Jatuhkan campuran gambar JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 25 MB per file ke antrean, dan setiap file akan dioptimalkan secara independen terhadap target KB atau MB aktif Anda.',
      },
      {
        question: 'Bagaimana Ringkasan Kompresi Target melacak keberhasilan sebagian batch?',
        answer:
          'Saat mengompres batch multi-file terhadap batas kustom yang ketat, banner ringkasan gelap menghitung dengan tepat berapa file yang lolos dari target Anda versus berapa file yang memang tidak bisa muat, beserta total byte yang dihemat. Setiap kartu menjelaskan persentase kualitas akhir dan rasio skala yang tepat.',
      },
      {
        question: 'Nama file apa yang diberikan untuk unduhan target kustom dan ZIP batch?',
        answer:
          'Unduhan tunggal menambahkan tag kilobyte target Anda — menghasilkan nama seperti brochure_150kb.jpg — sedangkan ekspor ZIP multi-file tersimpan rapi sebagai compressmypic_<nilai><satuan>.zip. File asli Anda yang tak tersentuh tetap terpisah dengan aman di disk.',
      },
      {
        question: 'Bagaimana alat ini menangani latar transparan jika saya memilih JPG untuk batas KB kustom yang ketat?',
        answer:
          'Memilih JPG akan menampilkan pemilih warna matte PNG transparan (putih murni #ffffff secara default). Area transparan alfa apa pun akan terisi rapi dengan warna latar pilihan Anda sebelum kompresi JPEG berjalan, sehingga tidak muncul bingkai hitam pekat.',
      },
      {
        question: 'Mengapa file yang lebih kecil dari target kustom saya menampilkan peringatan Membesar?',
        answer:
          'Jika Anda meminta batas 300 KB untuk gambar yang sudah dikompres hingga 180 KB, mendekode ke HTML5 Canvas lalu menyimpannya lagi dengan kualitas tinggi bisa mengembangkannya menjadi 240 KB. Klik Pertahankan original pada kartu tersebut untuk menyimpan file sumber 180 KB Anda yang lebih ringan.',
      },
      {
        question: 'Apakah kompresi target kustom menghapus metadata EXIF sensitif dari dokumen atau foto?',
        answer:
          'Ya. Merender piksel melalui HTML5 Canvas secara otomatis menghapus pratinjau kamera tersemat, metadata shutter, dan koordinat GPS, menjaga file pribadi tetap privat sekaligus mengarahkan setiap kilobyte untuk kejelasan visual.',
      },
      {
        question: 'Bisakah saya mengubah nilai KB kustom setelah gambar selesai tanpa mengunggah ulang?',
        answer:
          'Ya. Edit angka target atau ketuk tombol preset lain kapan saja, lalu klik tombol Kompres ke [target] untuk mengoptimalkan ulang seluruh daftar yang dimuat langsung di memori.',
      },
      {
        question: 'Seberapa akurat jumlah byte akhir terhadap batas kilobyte biner?',
        answer:
          'Mesin mengonversi KB ke byte biner yang tepat (KB × 1024) dan memperlakukan entri Anda sebagai batas atas yang ketat, tidak pernah melampauinya kecuali mustahil secara fisik dalam batasan yang terkunci. Pencarian binernya biasanya berhenti dalam 96% hingga 100% dari batas tersebut untuk menjaga detail maksimal.',
      },
      {
        question: 'Apakah bukti klien privat, kontrak, atau hasil pindaian medis diunggah selama perhitungan target?',
        answer:
          'Tidak. Iterasi pencarian biner, penskalaan gambar, dekode HEIC WebAssembly, dan pengemasan ZIP semuanya berjalan sepenuhnya di dalam sesi browser Anda tanpa transfer jaringan eksternal.',
      },
      {
        question: 'Bisakah saya melihat pratinjau teks halus atau detail pada batas KB kustom saya sebelum menyimpan?',
        answer:
          'Ya. Klik Bandingkan pada kartu hasil yang sudah selesai untuk membuka tirai pisah sebelum-sesudah yang interaktif dan memeriksa tepi tajam langsung terhadap unggahan asli.',
      },
      {
        question: 'Kapan lebih baik memilih alat tetap seperti 50 KB atau 100 KB daripada alat kustom ini?',
        answer:
          'Gunakan halaman tetap saat alur kerja Anda selalu menargetkan patokan portal standar seperti paspor 50 KB atau unggahan Shopify 200 KB. Buka kompresor ukuran file target kustom ini setiap kali formulir meminta batas yang tidak biasa seperti 30 KB, 75 KB, 250 KB, atau 1,5 MB.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah GIF animasi dan menargetkan 400 KB di sini?',
        answer:
          'Karena penargetan KB berbasis Canvas memproses frame raster statis, unggahan GIF animasi akan dioptimalkan dan mengekspor frame pembukanya sebagai gambar diam. Gunakan Kompresor GIF khusus kami jika Anda perlu memperkecil animasi berulang multi-frame dengan rapi.',
      },
      {
        question: 'Apa yang terjadi jika saya menetapkan target MB tinggi seperti 5 MB pada gambar 1 MB?',
        answer:
          'Gambar apa pun yang sudah berada di bawah batas MB kustom Anda akan langsung lolos pada pass kualitas tertinggi dengan dimensi penuh. Jika pengodean ulang justru menambah bobot byte tanpa perlu, Anda bisa mengklik Pertahankan original langsung pada kartu untuk menyimpan file sumber yang lebih ringan.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/compress-image-to-500kb',
    ],
  },
  {
    slug: '/bulk-image-resizer',
    name: 'Pengubah Ukuran Gambar Massal',
    shortDescription: 'Ubah ukuran puluhan gambar berdasarkan dimensi maks, lebar, atau % + ZIP.',
    category: 'resize',
    seoTitle: 'Ubah Ukuran Gambar Massal Gratis Online – ZIP',
    seoDescription:
      'Skalakan puluhan foto di browser dengan pengubah ukuran gambar massal gratis. Pilih Pas Maks L×T, Lebar Seragam, Piksel Tepat, atau %, lalu unduh satu ZIP.',
    h1: 'Pengubah Ukuran Gambar Massal Online Gratis',
    subtitle:
      'Standarkan dimensi piksel di seluruh pemotretan produk, folder blog, dan album foto dengan pengubah ukuran gambar massal gratis kami yang berjalan lokal di browser. Dirancang untuk penjual e-commerce, tim konten, dan fotografer: alat ini menangani batch campuran potret dan lanskap melalui Pas Maks L × T, Lebar Seragam, L × T Tepat, atau penskalaan Persentase hingga 25 MB per file, dengan ekspor ZIP instan.',
    howToSteps: [
      {
        title: 'Jatuhkan banyak gambar ke antrean batch',
        description:
          'Unggah campuran file JPG, PNG, WebP, HEIC, GIF, BMP, atau SVG hingga 25 MB per file dari komputer atau ponsel Anda.',
      },
      {
        title: 'Pilih Strategi Ubah Ukuran Massal',
        description:
          'Pilih Pas Maks L × T untuk orientasi campuran, Lebar Seragam untuk tata letak kolom tetap, L × T Tepat untuk grid ketat, atau Persentase (%) untuk penskalaan seragam.',
      },
      {
        title: 'Atur dimensi target atau preset ukuran cepat',
        description:
          'Masukkan piksel dari 1 hingga 12.000 px (atau klik Full HD 1920px, Blog 1200px, E-commerce 1000×1000, atau Thumbnail 600px), atau geser skala dari 10% hingga 200%.',
      },
      {
        title: 'Atur perlindungan anti-perbesar dan perilaku penyesuaian',
        description:
          'Biarkan Jangan perbesar gambar yang lebih kecil tetap dicentang untuk melindungi ikon mungil, atau pilih Muat, Isi, atau Regang saat L × T Tepat dipilih.',
      },
      {
        title: 'Pilih Format Output, Kualitas, dan Latar Matte',
        description:
          'Pertahankan Original atau konversi output ke JPG, PNG, atau WebP, beserta slider kualitas 10%–100% dan warna latar matte kustom untuk JPG.',
      },
      {
        title: 'Jalankan Ubah Ukuran Massal dan Unduh Semua (ZIP)',
        description:
          'Periksa dimensi piksel lama dan baru di setiap kartu, lalu klik Unduh Semua (ZIP) untuk menyimpan bulk_resized_compressmypic.zip secara lokal.',
      },
    ],
    features: [
      {
        title: 'Mode Kotak Batas Pas Maks',
        description:
          'Mengecilkan lanskap lebar maupun potret tinggi dengan aman di dalam, misalnya, 1200×1200 px — tanpa memotong atau mendistorsi.',
      },
      {
        title: 'Perlindungan Anti-Perbesar',
        description: 'Biarkan "Jangan perbesar gambar yang lebih kecil" tetap dicentang agar aset kecil tetap tajam, bukan meregang.',
      },
      {
        title: 'Kontrol Format & Kualitas',
        description: 'Secara opsional konversi output yang diubah ukurannya ke WebP atau JPG dalam satu langkah.',
      },
      {
        title: 'Pengemasan ZIP Sekali Klik',
        description: 'Unduh puluhan gambar yang diubah ukurannya dengan nama yang rapi dalam satu file ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Bagaimana Pas Maks L × T menangani folder yang mencampur lanskap horizontal dan potret vertikal?',
        answer:
          'Pas Maks L × T memperlakukan entri lebar dan tinggi Anda (default 1200×1200 px) sebagai kotak batas tak terlihat, sambil menjaga rasio aspek alami setiap foto. Lanskap 4000×2000 menjadi 1200×600, sedangkan potret 2000×4000 menjadi 600×1200 — tanpa pemotongan atau peregangan.',
      },
      {
        question: 'Kapan Lebar Seragam lebih baik daripada Pas Maks L × T?',
        answer:
          'Pilih Lebar Seragam saat membuat buletin vertikal, kolom artikel CMS, atau aliran galeri responsif di mana setiap gambar harus berbagi lebar horizontal yang sama persis. Setiap foto menskalakan tingginya secara proporsional sehingga tidak ada yang meregang atau terpotong.',
      },
      {
        question: 'Apa fungsi Muat, Isi, dan Regang dalam mode L × T Tepat?',
        answer:
          'Muat menempatkan seluruh gambar di dalam kotak piksel tepat Anda dengan margin padding yang rapi, sedangkan Isi mengisi setiap tepi piksel dengan memotong bagian yang berlebih di tengah. Regang memaksa rasio aspek yang tidak cocok agar pas langsung ke piksel target yang tepat.',
      },
      {
        question: 'Bagaimana cara kerja penskalaan batch Persentase (%)?',
        answer:
          'Mode Persentase mengalikan lebar dan tinggi asli setiap gambar yang diunggah dengan faktor slider pilihan Anda (10% hingga 200%, dengan tombol cepat 25%, 50%, 75%, 100%, dan 150%). Memilih 50% mengubah foto 4000×3000 menjadi 2000×1500 dan ikon 1000×800 menjadi 500×400 dalam satu pass.',
      },
      {
        question: 'Mengapa saya harus membiarkan Jangan perbesar gambar yang lebih kecil tetap aktif di batch campuran?',
        answer:
          'Jika sebuah folder berisi foto DSLR 4000 px sekaligus lencana 400 px, memaksa lencana kecil naik ke 1200 px akan meregangkan piksel dan menimbulkan buram. Dengan Jangan perbesar tetap dicentang, foto besar mengecil dengan rapi sementara file yang lebih kecil tetap pada dimensi asli yang tajam.',
      },
      {
        question: 'Apa yang diatur oleh empat tombol preset piksel cepat?',
        answer:
          'Mengetuk Full HD 1920px mengisi 1920×1080, Blog 1200px mengatur 1200×1200, E-commerce 1000×1000 mengatur 1000×1000, dan Thumbnail 600px mengatur 600×600. Anda tetap bisa menyesuaikan setiap kolom piksel secara manual hingga 12.000 px setelahnya.',
      },
      {
        question: 'Bisakah saya mengonversi seluruh folder ke WebP atau JPG sambil mengubah ukuran secara massal?',
        answer:
          'Ya. Ubah Format Output dari Original ke WebP, JPG, atau PNG sebelum mengklik Ubah Ukuran Massal (N) untuk menskalakan ulang dimensi piksel sekaligus memodernisasi format file dalam satu pass canvas.',
      },
      {
        question: 'Apa yang terjadi pada logo PNG transparan jika saya mengubah ukurannya dengan Format Output diatur ke JPG?',
        answer:
          'Memilih JPG akan menampilkan pemilih warna Latar Matte (#ffffff putih secara default). Latar transparan atau bayangan lembut apa pun akan dirender rapi di atas warna matte pilihan Anda sebelum pengodean JPEG.',
      },
      {
        question: 'Apakah mempertahankan Format Output di PNG menjaga transparansi alfa selama pengubahan ukuran massal?',
        answer:
          'Ya, mengekspor sebagai PNG menjaga latar transparan dan tepi alfa lembut tetap utuh di setiap item yang diubah ukurannya. Mempertahankan Format Output di Original juga menjaga transparansi untuk unggahan PNG dan WebP.',
      },
      {
        question: 'Bagaimana cara memastikan foto yang diubah ukurannya tetap terlihat tajam sebelum mengunduh ZIP?',
        answer:
          'Klik kartu thumbnail mana pun atau tombol Bandingkan pada item yang sudah selesai untuk membuka penampil perbandingan sebelum-sesudah yang interaktif. Anda bisa menyeret pembatas berdampingan untuk memeriksa tepi yang tajam sebelum mengekspor batch.',
      },
      {
        question: 'Berapa ukuran file maksimum dan batas piksel per gambar di Pengubah Ukuran Gambar Massal?',
        answer:
          'Setiap gambar yang diunggah bisa mencapai 25 MB, dan input piksel berkisar dari 1 px hingga 12.000 px per sisi. Ingat bahwa mengekspor canvas raksasa di atas 10.000 px untuk puluhan gambar bergantung pada RAM browser yang tersedia di perangkat Anda.',
      },
      {
        question: 'Apakah foto HEIC iPhone dan file SVG vektor didukung dalam antrean ubah ukuran yang sama?',
        answer:
          'Ya. Foto HEIC/HEIF didekode secara lokal melalui WebAssembly sisi klien, dan grafis SVG dirasterisasi dengan mulus ke HTML5 Canvas sebelum diskalakan bersama unggahan standar JPG, PNG, WebP, GIF, dan BMP.',
      },
      {
        question: 'Bisakah saya mengubah pengaturan dan mengubah ukuran seluruh batch lagi tanpa mengunggah ulang file?',
        answer:
          'Ya. Sesuaikan strategi, batas piksel, format, atau slider kualitas 10%–100% kapan saja, lalu klik Ubah Ukuran Massal (N) untuk memproses ulang semua gambar dalam antrean langsung di memori browser.',
      },
      {
        question: 'Apakah penghitung progres live menunjukkan sejauh mana folder besar sudah diproses?',
        answer:
          'Ya. Saat pemrosesan berjalan, tombol aksi menampilkan Mengubah Ukuran (X/Y)... beserta thumbnail yang berputar, sehingga Anda selalu tahu progres batch yang tepat.',
      },
      {
        question: 'Apakah katalog klien rahasia atau album keluarga dikirim ke server cloud untuk diubah ukurannya?',
        answer:
          'Tidak pernah. Setiap perhitungan ubah ukuran, langkah menggambar Canvas, dan bundel ZIP dieksekusi secara lokal di perangkat Anda, menjaga fotografi privat dan barang yang belum dirilis tetap 100% di perangkat.',
      },
      {
        question: 'Apakah Pengubah Ukuran Gambar Massal menghapus detail EXIF kamera dan koordinat GPS?',
        answer:
          'Ya. Karena HTML5 Canvas menggambar ulang data piksel ke dimensi target tanpa menyalin header EXIF mentah, tag lokasi dan nomor seri kamera akan terhapus secara otomatis.',
      },
      {
        question: 'Apa nama arsip ZIP yang diunduh?',
        answer:
          'Mengklik Unduh Semua (ZIP) akan menghasilkan bulk_resized_compressmypic.zip secara lokal di browser Anda. Arsip ini mengemas setiap file yang berhasil diubah ukurannya dari antrean Anda dengan rapi dalam satu arsip.',
      },
      {
        question: 'Bisakah saya menghapus satu file yang tidak sengaja ditambahkan dari batch 20 gambar sebelum mengekspor ZIP?',
        answer:
          'Ya. Klik ikon tempat sampah pada kartu mana pun untuk menghapus hanya gambar tersebut tanpa mengganggu 19 hasil ubah ukuran lainnya.',
      },
      {
        question: 'Apa bedanya Pengubah Ukuran Gambar Massal dengan Kompresor Gambar Massal?',
        answer:
          'Kompresor Gambar Massal menjaga lebar dan tinggi piksel asli tetap utuh sambil mengurangi ukuran file melalui kompresi lossy. Sebaliknya, pengubah ukuran gambar massal ini secara aktif mengubah dimensi piksel dan kotak batas secara batch, beserta pengaturan format dan kualitas opsional.',
      },
      {
        question: 'Bisakah saya menambahkan foto tambahan ke batch ubah ukuran yang sudah selesai?',
        answer:
          'Ya. Seret file tambahan ke area unggah kapan saja dan file tersebut akan diproses otomatis dengan strategi ubah ukuran aktif Anda, lalu bergabung ke ringkasan akhir Unduh Semua (ZIP).',
      },
    ],
    relatedSlugs: [
      '/image-resizer',
      '/bulk-image-compressor',
      '/bulk-image-converter',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/bulk-image-converter',
    name: 'Pengonversi Gambar Massal',
    shortDescription: 'Konversi banyak file JPG, PNG, HEIC, SVG & BMP sekaligus + ZIP.',
    category: 'convert',
    seoTitle: 'Konversi Gambar Massal Gratis Online – ZIP',
    seoDescription:
      'Ubah folder campuran dengan pengonversi gambar massal gratis di browser. Konversi batch HEIC, PNG, SVG, AVIF, dan BMP ke WebP, JPG, atau PNG dengan ekspor ZIP.',
    h1: 'Pengonversi Gambar Massal Gratis',
    subtitle:
      'Satukan folder campuran berisi foto HEIC Apple, unduhan AVIF, ikon SVG, PNG transparan, dan bitmap BMP lama dalam satu pass dengan pengonversi gambar massal gratis kami. Dibuat untuk pengembang, manajer konten, dan pengguna sehari-hari yang menstandarkan seluruh pustaka aset, alat ini mengonversi batch hingga 25 MB per file dengan rapi ke WebP, JPG, atau PNG secara lokal, dengan sufiks nama file opsional dan unduhan ZIP tunggal.',
    howToSteps: [
      {
        title: 'Jatuhkan batch gambar format campuran',
        description:
          'Unggah kombinasi file JPG, PNG, WebP, HEIC, SVG, BMP, GIF, atau AVIF hingga 25 MB per file ke area unggah.',
      },
      {
        title: 'Pilih format target: WebP, JPG, atau PNG',
        description:
          'Pilih WebP (Terkecil untuk Web) untuk kecepatan situs, JPG (Universal) untuk berbagi luas, atau PNG (Lossless Alfa) untuk grafis yang tajam.',
      },
      {
        title: 'Sufiks nama file opsional dan Isian Transparan',
        description:
          'Masukkan sufiks nama file opsional seperti _web (atau biarkan kosong) dan pilih warna matte Isian Transparan jika mengonversi gambar alfa ke JPG.',
      },
      {
        title: 'Atur persentase kualitas output',
        description:
          'Sesuaikan slider kualitas 10%–100% untuk ekspor WebP atau JPG (otomatis dinonaktifkan saat PNG Lossless aktif).',
      },
      {
        title: 'Tinjau total batch dan perbandingan visual',
        description:
          'Periksa perubahan byte per file dan banner Ringkasan Konversi Massal, lalu buka Bandingkan pada item contoh untuk memastikan ketajaman.',
      },
      {
        title: 'Simpan file satu per satu atau Unduh Semua (ZIP)',
        description:
          'Klik Unduh pada kartu tunggal atau Unduh Semua (ZIP) untuk mengekspor bulk_converted_webp.zip, bulk_converted_jpg.zip, atau bulk_converted_png.zip.',
      },
    ],
    features: [
      {
        title: 'Pipeline Batch Input Campuran',
        description: 'Jatuhkan HEIC, PNG, SVG, dan JPEG bersamaan dalam satu batch dan satukan semuanya ke satu format.',
      },
      {
        title: 'Opsi Matte Transparansi & Sufiks',
        description: 'Sesuaikan latar matte JPG putih atau berwarna dan tambahkan sufiks nama file opsional dengan rapi.',
      },
      {
        title: 'Ringkasan Ukuran Batch',
        description: 'Lihat ukuran asli agregat versus ukuran hasil konversi di seluruh batch.',
      },
      {
        title: '100% WebAssembly & Canvas Lokal',
        description: 'Tidak ada file yang pernah diunggah — bahkan konversi HEIC iPhone berjalan di perangkat Anda.',
      },
    ],
    faqs: [
      {
        question: 'Bisakah saya mencampur berbagai jenis file input dalam antrean Pengonversi Gambar Massal yang sama?',
        answer:
          'Ya. Anda bisa menjatuhkan file HEIC Apple, AVIF modern, PNG transparan, SVG vektor, BMP lama, GIF, WebP, dan JPG ke dalam satu pass unggah yang sama, lalu mengekspor seluruh koleksi dalam satu format yang seragam.',
      },
      {
        question: 'Mengapa Sufiks Nama File Opsional membantu saat mengonversi batch?',
        answer:
          'Mengetik tag seperti _web atau _v2 akan menambahkan sufiks tersebut tepat sebelum ekstensi file baru, menghasilkan nama yang rapi seperti hero_web.webp. Cara ini mencegah aset yang baru dikonversi bertabrakan dengan file sumber bernama mirip di folder proyek bersama.',
      },
      {
        question: 'Bagaimana Ringkasan Konversi Massal menghitung dampak total batch?',
        answer:
          'Setelah file selesai diproses, banner ringkasan gelap menjumlahkan byte asli di semua file yang dikonversi dan menampilkan total byte hasil konversi di sampingnya. Dengan begitu Anda bisa langsung memeriksa perubahan penyimpanan atau bandwidth di seluruh folder.',
      },
      {
        question: 'Apa yang terjadi jika saya menyatukan PNG transparan dan SVG ke format JPG?',
        answer:
          'Memilih JPG (Universal) akan menampilkan pemilih warna Isian Transparan (putih #ffffff secara default). Area transparan alfa apa pun di PNG atau SVG Anda akan membaur mulus ke rona latar yang dipilih, bukan berubah menjadi hitam pekat.',
      },
      {
        question: 'Mengapa slider Kualitas dinonaktifkan saat PNG (Lossless Alfa) dipilih?',
        answer:
          'PNG menggunakan pengodean lossless DEFLATE yang menjaga setiap piksel yang didekode tetap identik tanpa tingkat kualitas lossy. Setiap kali Anda memilih WebP atau JPG, slider kualitas 10%–100% langsung terbuka.',
      },
      {
        question: 'Bisakah saya mengonversi folder foto campuran dua kali — sekali ke WebP dan sekali ke JPG — tanpa mengunggah ulang?',
        answer:
          'Ya. Ubah Konversi Batch ke Format dari WebP ke JPG kapan saja, perbarui Sufiks Nama File secara opsional, lalu klik Konversi Semua (N) untuk memproses ulang file yang tersimpan di memori dan mengambil ZIP kedua.',
      },
      {
        question: 'Bagaimana penamaan ZIP menunjukkan format target yang saya ekspor?',
        answer:
          'Mengklik Unduh Semua (ZIP) akan membuat bulk_converted_webp.zip, bulk_converted_jpg.zip, atau bulk_converted_png.zip langsung di browser Anda. Adanya format dalam nama file memudahkan membedakan beberapa ekspor format di folder Unduhan Anda.',
      },
      {
        question: 'Apakah menyatukan semuanya ke WebP menjaga transparansi alfa pada logo PNG dan ikon SVG?',
        answer:
          'Ya. Baik WebP (Terkecil untuk Web) maupun PNG (Lossless Alfa) mempertahankan transparansi 8-bit penuh dari PNG transparan, WebP, dan file SVG mandiri dengan rapi.',
      },
      {
        question: 'Apa yang terjadi jika browser lama tidak bisa mendekode file AVIF campuran di dalam batch saya?',
        answer:
          'Jika sebuah file menggunakan codec yang tidak didukung browser Anda, seperti AVIF di browser yang sudah ketinggalan zaman, hanya kartu tertentu itu yang menampilkan pemberitahuan error eksplisit. Setiap item JPG, PNG, atau HEIC lain dalam batch yang sama akan selesai seperti biasa.',
      },
      {
        question: 'Apakah batch HEIC iPhone dikonversi di server cloud jarak jauh?',
        answer:
          'Tidak. Bahkan dekode HEIC dan HEIF Apple berjalan secara lokal di dalam tab browser Anda melalui WebAssembly sisi klien, sebelum HTML5 Canvas mengodekan format output pilihan Anda.',
      },
      {
        question: 'Seberapa besar file individual di dalam Pengonversi Gambar Massal?',
        answer:
          'Setiap gambar individual dalam antrean batch Anda bisa mencapai 25 MB. Ruang ini dengan mudah mencakup foto kamera megapiksel tinggi, ekspor PNG berlapis, dan arsip BMP yang tidak terkompresi.',
      },
      {
        question: 'Apa yang terjadi saat GIF animasi disertakan dalam folder konversi massal?',
        answer:
          'HTML5 Canvas merasterisasi frame pembuka dari .gif yang diunggah menjadi file WebP, JPG, atau PNG statis yang tajam, sambil menjaga lebar dan tinggi penuh. Gunakan Kompresor GIF kami jika Anda ingin menjaga animasi berulang tetap utuh.',
      },
      {
        question: 'Apakah konversi format massal mengubah lebar dan tinggi asli gambar?',
        answer:
          'Tidak, setiap output menjaga 100% lebar dan tinggi piksel aslinya tetap utuh. Gunakan Pengubah Ukuran Gambar Massal jika Anda perlu mengubah ukuran atau membatasi dimensi gambar pada saat yang sama.',
      },
      {
        question: 'Mengapa mengonversi JPEG terkompresi ke PNG bisa membuat total ringkasan batch terlihat lebih besar?',
        answer:
          'PNG lossless menyimpan data jauh lebih banyak per piksel fotografis daripada JPEG lossy. Kecuali alur kerja Anda memang mengharuskan .png, mengonversi batch web campuran ke WebP pada 85% biasanya menghemat ruang secara substansial sambil mempertahankan kualitas yang tajam.',
      },
      {
        question: 'Apakah tag EXIF kamera yang tersemat tetap ada setelah mengonversi folder campuran?',
        answer:
          'Tidak. Merender gambar melalui HTML5 Canvas menghapus blok metadata EXIF, nomor seri kamera, dan tag GPS di setiap file yang dikonversi dengan rapi.',
      },
      {
        question: 'Bisakah saya membandingkan piksel asli dan hasil konversi pada kartu individual sebelum mengekspor ZIP?',
        answer:
          'Ya. Klik Bandingkan pada kartu file yang sudah selesai untuk memeriksa tepi halus dan warna berdampingan di penampil perbandingan terpisah.',
      },
      {
        question: 'Apa yang terjadi jika saya menambahkan lebih banyak file setelah mengonversi batch pertama saya?',
        answer:
          'File yang baru dijatuhkan akan dikonversi otomatis menggunakan format target, kualitas, sufiks, dan isian matte yang sedang dipilih. File tersebut kemudian bergabung rapi ke antrean aktif dan ringkasan ZIP bersama.',
      },
      {
        question: 'Apakah font web eksternal atau gambar jarak jauh yang tertaut di dalam file SVG ikut disertakan selama konversi massal?',
        answer:
          'Demi keamanan browser, HTML5 Canvas mengisolasi SVG mandiri dan memblokir pengambilan URL jarak jauh atau font web eksternal. SVG mandiri dengan path, gradien, dan CSS inline akan dikonversi dengan rapi.',
      },
      {
        question: 'Bisakah saya menghapus satu gambar yang gagal atau tidak diinginkan dari daftar hasil konversi?',
        answer:
          'Ya. Klik tombol tempat sampah pada kartu mana pun untuk mengecualikannya dari daftar dan membangun ulang ringkasan serta unduhan ZIP dari file yang tersisa.',
      },
      {
        question: 'Kapan saya harus memilih pengonversi massal ini daripada pengonversi pasangan tunggal seperti HEIC ke JPG?',
        answer:
          'Alat pasangan tunggal mengonfigurasi filter file yang ketat dan default untuk satu jalur migrasi tertentu. Buka pengonversi gambar massal ini setiap kali sebuah folder berisi beberapa ekstensi berbeda yang semuanya harus menjadi WebP, JPG, atau PNG sekaligus.',
      },
    ],
    relatedSlugs: [
      '/image-converter',
      '/bulk-image-compressor',
      '/bulk-image-resizer',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/web-image-optimizer',
    name: 'Pengoptimal Gambar Web',
    shortDescription: 'Optimalkan gambar hero, produk & kartu untuk kecepatan Core Web Vitals.',
    category: 'compress',
    seoTitle: 'Optimalkan Gambar Web Gratis – Core Web Vitals',
    seoDescription:
      'Perkecil aset halaman yang berat dengan pengoptimal gambar web gratis di browser. Pilih preset WebP, hapus tag EXIF, dan salin tag img HTML yang responsif.',
    h1: 'Pengoptimal Gambar Web (Siap Core Web Vitals)',
    subtitle:
      'Siapkan grafis situs web yang memuat cepat, dirancang untuk Core Web Vitals (LCP dan CLS), dengan pengoptimal gambar web gratis kami langsung di browser. Dibuat untuk pengembang front-end, pedagang Shopify, dan SEO teknis, alat ini memadukan preset WebP dan JPG yang teruji untuk slot hingga 25 MB per file dengan penghapusan EXIF otomatis, tag HTML <img> yang bisa disalin, dan unduhan ZIP tunggal.',
    howToSteps: [
      {
        title: 'Pilih satu dari 5 Preset Performa Web',
        description:
          'Pilih Hero / Banner (1600px WebP 80%), Produk E-Commerce (1200px WebP 82%), Kartu / Thumbnail (640px WebP 75%), Social OG / Email (1200px JPG 82%), atau Grafis Retina 2× (1920px WebP 88%).',
      },
      {
        title: 'Sesuaikan Format Web, Dimensi Maks, atau Kualitas',
        description:
          'Beralih di antara WebP, JPG, atau PNG, sesuaikan Dimensi Maks (Tepi Panjang) dari 640 px hingga 1920 px (atau Pertahankan Dimensi Asli), dan atur Kualitas dari 20% hingga 95%.',
      },
      {
        title: 'Jatuhkan aset situs mentah ke area unggah',
        description:
          'Unggah gambar JPG, PNG, WebP, HEIC, SVG, BMP, GIF, atau AVIF hingga 25 MB per file dengan opsi Hanya perkecil gambar yang lebih besar dicentang agar ikon kecil tidak membengkak.',
      },
      {
        title: 'Tinjau penghematan bobot halaman dan Bandingkan kualitas',
        description:
          'Periksa Ringkasan Performa Web untuk total bobot halaman yang dihemat, verifikasi lencana Siap Web per kartu, dan periksa tepi berdampingan melalui Bandingkan.',
      },
      {
        title: 'Salin snippet HTML <img> yang responsif',
        description:
          'Klik Salin <img> pada kartu yang sudah selesai untuk mengambil markup siap tempel dengan lebar, tinggi, loading="lazy", dan decoding="async".',
      },
      {
        title: 'Unduh aset -web tunggal atau bundel ZIP',
        description:
          'Simpan file <nama>-web individual atau klik Unduh Semua (ZIP) untuk mengunduh web_optimized_compressmypic.zip dengan rapi.',
      },
    ],
    features: [
      {
        title: 'Preset Siap Web',
        description:
          'Batas dimensi dan titik manis kualitas WebP/JPG yang sudah dikonfigurasi, disesuaikan untuk LCP dan PageSpeed Insights.',
      },
      {
        title: 'Snippet HTML <img> yang Bisa Disalin',
        description:
          'Menghasilkan atribut responsif `lebar`, `tinggi`, `loading="lazy"`, dan `decoding="async"` untuk mencegah pergeseran tata letak (CLS).',
      },
      {
        title: 'Penghapusan EXIF Otomatis & Penjaga Upscale',
        description: 'Menghapus metadata kamera yang membengkak dan menghindari memperbesar ikon yang lebih kecil tanpa perlu.',
      },
      {
        title: 'Pemeriksa Sebelum/Sesudah Interaktif',
        description: 'Verifikasi kejelasan visual berdampingan sebelum menerapkan aset ke produksi.',
      },
    ],
    faqs: [
      {
        question: 'Bagaimana lima Preset Performa Web dipetakan ke slot situs nyata?',
        answer:
          'Hero / Banner membatasi hingga 1600 px WebP (80%), Produk E-Commerce membatasi hingga 1200 px WebP (82%), Kartu / Thumbnail membatasi hingga 640 px WebP (75%), Social OG / Email menghasilkan 1200 px JPG (82%) untuk kompatibilitas scraper, dan Grafis Retina 2× mempertahankan hingga 1920 px WebP (88%). Mengklik preset mana pun juga otomatis mengoptimalkan ulang file yang sudah dimuat.',
      },
      {
        question: 'Bagaimana tombol Salin <img> membantu meningkatkan skor Core Web Vitals?',
        answer:
          'Mengklik Salin <img> akan menyalin tag HTML semantik yang berisi atribut lebar dan tinggi output yang tepat, plus loading="lazy" dan decoding="async". Dimensi eksplisit memungkinkan browser mencadangkan ruang yang tepat saat tata letak halaman dibuat, sehingga menghilangkan Cumulative Layout Shift (CLS).',
      },
      {
        question: 'Haruskah saya mempertahankan loading="lazy" pada gambar Hero di atas lipatan setelah menyalin tag HTML?',
        answer:
          'Untuk kartu dan gambar di bawah lipatan, loading="lazy" sangat ideal. Untuk satu gambar Hero / Banner LCP teratas Anda yang langsung terlihat saat dimuat, hapus loading="lazy" (atau atur fetchpriority="high") di kode Anda agar browser mengambilnya segera.',
      },
      {
        question: 'Mengapa Social OG / Email mengubah Format Web dari WebP ke JPG?',
        answer:
          'Beberapa scraper tautan sosial, versi Slack/Outlook yang lebih lama, dan platform buletin masih menolak atau gagal merender pratinjau OpenGraph WebP dengan andal. Memilih JPG 1200 px pada 82% memberikan pemuatan cepat sekaligus kartu pratinjau yang solid di mana-mana.',
      },
      {
        question: 'Mengapa Hanya perkecil gambar yang lebih besar melindungi ikon UI dan thumbnail kecil?',
        answer:
          'Dengan kotak centang tersebut aktif, mengunggah avatar penulis 400×400 px saat Produk E-Commerce (Maks 1200px) dipilih akan membuat avatar tetap 400×400 px, bukan memburamkannya ke atas menjadi 1200 px. Menghapus centangnya akan menskalakan aset yang lebih kecil hingga ke tepi panjang yang dipilih jika memang diperlukan.',
      },
      {
        question: 'Bagaimana penghapusan metadata EXIF dan GPS memangkas bobot halaman web tambahan?',
        answer:
          'Ekspor kamera sering menyematkan 30 KB–150 KB pratinjau thumbnail, riwayat edit Lightroom, dan koordinat GPS di dalam blok EXIF. Pengodean ulang di HTML5 Canvas menghapus semua beban non-piksel dengan rapi sebelum diterapkan.',
      },
      {
        question: 'Mengapa file yang diunduh otomatis berakhiran -web pada namanya?',
        answer:
          'Setiap output menambahkan -web sebelum ekstensinya, menghasilkan nama file yang rapi seperti sneaker-web.webp. Cara ini memungkinkan pengembang menaruh aset produksi ke folder publik tanpa menimpa master mentah beresolusi tinggi.',
      },
      {
        question: 'Bagaimana atribut alt di dalam Salin <img> dibuat?',
        answer:
          'Snippet secara otomatis menghapus ekstensi file dan mengubah tanda hubung serta garis bawah dari nama file asli Anda menjadi spasi yang mudah dibaca di dalam alt="...". Pastikan Anda menyempurnakannya menjadi frasa manusia yang deskriptif saat menempelkannya ke HTML produksi.',
      },
      {
        question: 'Mengapa Pengoptimal Gambar Web memakai default Produk E-Commerce (Maks 1200px · WebP 82%)?',
        answer:
          'Lebar 1200 px pada WebP 82% memberikan kualitas zoom produk yang tajam di ponsel Retina maupun laptop standar, sambil memperkecil file DSLR bermegabyte sebesar 80%–95%. Cara ini menghindari potongan 640 px yang terlalu lembut maupun file asli 4000 px yang membengkak.',
      },
      {
        question: 'Mengapa PNG kecil yang sudah terkompresi bisa berubah merah dengan peringatan Membesar saat Format Web adalah PNG?',
        answer:
          'Mengodekan ulang PNG kecil berindeks palet melalui HTML5 Canvas berwarna penuh tanpa mengubah dimensi bisa menghasilkan PNG lossless yang sedikit lebih berat. Ubah Format Web ke WebP untuk menjaga transparansi dengan bobot byte yang jauh lebih kecil.',
      },
      {
        question: 'Bisakah saya mengoptimalkan 30 gambar blog mentah untuk kecepatan Lighthouse secara massal dalam satu klik?',
        answer:
          'Ya. Jatuhkan hingga 25 MB per file ke seluruh set media blog Anda, periksa Ringkasan Performa Web yang menampilkan total bobot halaman yang dihemat, dan ambil web_optimized_compressmypic.zip setiap kali 2 file atau lebih selesai.',
      },
      {
        question: 'Mengapa slider Kualitas dibatasi 20% hingga 95%, bukan 100% di sini?',
        answer:
          'Menyimpan WebP atau JPG pada kualitas 100% akan meledakkan bobot byte secara eksponensial dengan hampir nol perbedaan visual di layar web, sehingga merusak Largest Contentful Paint (LCP). Membatasi hingga 95% menjaga grafis Retina 2× tetap sangat tajam tanpa muatan 10 MB yang tidak disengaja.',
      },
      {
        question: 'Apakah output WebP menjaga latar transparan dari PNG dan SVG yang diunggah?',
        answer:
          'Ya. Setiap kali Format Web diatur ke WEBP atau PNG, transparansi alfa penuh tetap utuh sepenuhnya, sedangkan memilih JPG akan menggabungkan area transparan ke putih bersih (#ffffff).',
      },
      {
        question: 'Apakah tangkapan layar situs staging atau peluncuran produk yang belum dirilis diunggah ke server eksternal?',
        answer:
          'Tidak. Pengubahan ukuran preset, pengodean WebP, penghapusan EXIF, dan pembuatan tag HTML semuanya berjalan sepenuhnya di dalam tab browser Anda, menjaga grafis pemasaran yang diembargo tetap privat.',
      },
      {
        question: 'Bisakah saya menyesuaikan campuran pengaturan setelah mengklik Preset Performa Web?',
        answer:
          'Ya. Mengubah Format Web, Dimensi Maks, atau Kualitas secara manual akan mengalihkan indikator preset aktif dengan rapi ke kustom, sehingga Anda bisa mengklik Optimalkan untuk Web (N) dengan resep yang disesuaikan persis.',
      },
      {
        question: 'Apa yang terjadi jika saya mengunggah foto HEIC iPhone Apple langsung untuk blog saya?',
        answer:
          'WebAssembly sisi klien mendekode foto HEIC dan HEIF hingga 25 MB secara native di dalam tab browser Anda. Browser Anda kemudian mengubah ukurannya ke Dimensi Maks pilihan Anda dan mengodekan aset WebP atau JPG yang ringan dan siap diterbitkan.',
      },
      {
        question: 'Bagaimana preset Kartu / Thumbnail dibandingkan dengan Grafis Retina 2×?',
        answer:
          'Kartu / Thumbnail membatasi tepi panjang hingga 640 px dengan WebP 75% agar grid arsip multi-kartu tetap sangat ringan. Sebaliknya, Grafis Retina 2× mengizinkan hingga 1920 px pada WebP 88% sehingga tangkapan layar showcase ber-DPI tinggi tetap sangat tajam.',
      },
      {
        question: 'Apakah Pertahankan Dimensi Asli tetap mengompres dan menghapus metadata EXIF?',
        answer:
          'Ya. Memilih Pertahankan Dimensi Asli membuat lebar dan tinggi piksel tetap utuh, sambil tetap mengonversi ke Format Web pilihan Anda, menerapkan slider kualitas, dan menghapus tag EXIF yang tersembunyi.',
      },
      {
        question: 'Bisakah saya memeriksa secara visual teks UI yang tajam di tangkapan layar sebelum menerbitkannya ke dokumentasi saya?',
        answer:
          'Ya. Mengklik Bandingkan pada kartu mana pun akan membuka penampil perbandingan berdampingan sehingga Anda bisa memeriksa kejelasan teks sebelum diterapkan.',
      },
      {
        question: 'Kapan saya harus menggunakan pengoptimal gambar web ini daripada Kompresor Gambar Massal?',
        answer:
          'Gunakan Kompresor Gambar Massal saat Anda ingin mempertahankan dimensi asli di seluruh arsip campuran. Pilih pengoptimal gambar web ini saat membangun halaman web produksi yang diuntungkan oleh batas dimensi responsif, preset WebP, penghapusan EXIF, dan tag HTML <img> yang bisa disalin.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-compressor',
      '/compress-image-to-100kb',
      '/image-resizer',
      '/image-converter',
    ],
  },
  {
    slug: '/gif-compressor',
    name: 'Kompresor GIF',
    shortDescription: 'Kompres GIF animasi dengan mengurangi warna palet, skala & frame.',
    category: 'compress',
    seoTitle: 'Kompresor GIF Online Gratis – Perkecil GIF',
    seoDescription:
      'Perkecil animasi berulang dengan kompresor GIF gratis di browser. Turunkan warna palet, skalakan dimensi, atau lewati frame berlebih dengan pratinjau live.',
    h1: 'Kompresor GIF Animasi Online Gratis',
    subtitle:
      'Perkecil animasi berulang GIF87a dan GIF89a yang berat dengan rapi langsung di dalam browser Anda dengan kompresor GIF animasi gratis kami, tanpa mengubahnya menjadi gambar diam. Disesuaikan untuk pengguna Slack, Discord, pemasar email, dan penulis dokumentasi yang menangani file hingga 30 MB: alat ini memadukan tiga tuas kompresi nyata — Batas Warna Palet, Skala Output, dan Optimalisasi Frame Rate — dengan pemutaran animasi live berdampingan.',
    howToSteps: [
      {
        title: 'Jatuhkan GIF animasi atau statis hingga 30 MB',
        description:
          'Unggah file .gif apa pun (hingga 30 MB) ke area unggah untuk mendekode frame, dimensi, metode disposal, dan jeda waktu secara lokal.',
      },
      {
        title: 'Pilih preset cepat atau atur pengaturan kustom',
        description:
          'Klik Ringan (192 warna, 100%), Seimbang (96 warna, 85%), atau Perkecil Maks (64 warna, 75%, lewati setiap frame ke-2), atau sesuaikan setiap tuas secara manual.',
      },
      {
        title: 'Turunkan Batas Warna Palet (16–256 warna)',
        description:
          'Seret slider Batas Warna Palet dari 256 ke arah 32 atau 16 warna (atau klik tombol cepat 256, 128, 64, 32) untuk memperkecil tabel warna LZW.',
      },
      {
        title: 'Sesuaikan Skala Output dan Optimalisasi Frame Rate',
        description:
          'Pilih preset Skala Output (100%, 85%, 75%, 50%, atau 25%) dan secara opsional lewati setiap frame ke-2 atau 2 dari 3 frame, sambil otomatis menjaga kecepatan pemutaran yang sebenarnya.',
      },
      {
        title: 'Jalankan Kompres GIF dan bandingkan animasi live',
        description:
          'Tonton pratinjau animasi live Asli vs. Terkompresi berdampingan dan tinjau byte yang tepat, jumlah frame, dan persentase penghematan.',
      },
      {
        title: 'Unduh GIF Terkompresi',
        description:
          'Klik Unduh GIF Terkompresi untuk menyimpan <namafile>_compressed.gif secara lokal tanpa perjalanan ke server atau watermark.',
      },
    ],
    features: [
      {
        title: 'Pengodean Ulang GIF Asli Sisi Klien',
        description:
          'Mendekode frame GIF, metode disposal, dan jumlah loop secara lokal, lalu mengodekan ulang dengan kuantisasi warna yang dimuat sesuai kebutuhan — tanpa unggahan server.',
      },
      {
        title: '3 Tuas Kompresi',
        description:
          'Perkecil ukuran melalui pengurangan warna palet (256 → 32 warna), penskalaan dimensi (100% → 25%), dan melewati frame secara cerdas.',
      },
      {
        title: 'Melewati Frame yang Menjaga Waktu',
        description:
          'Saat melewati setiap frame ke-2 atau ke-3, jeda frame yang dipertahankan otomatis digabungkan sehingga kecepatan pemutaran tetap natural.',
      },
      {
        title: 'Perbandingan Byte yang Jujur',
        description:
          'Menampilkan ukuran file dan jumlah frame sebelum/sesudah yang tepat — dan memberi tahu Anda dengan jelas saat diperlukan pengurangan palet atau skala yang lebih kuat.',
      },
    ],
    faqs: [
      {
        question: 'Apakah kompresor GIF ini menjaga waktu animasi, jumlah loop, dan gerakan secara penuh?',
        answer:
          'Ya. Alat ini mendekode setiap frame GIF, jeda milidetik per frame, metode disposal, dan metadata loop secara lokal, lalu mengodekan ulang file GIF89a animasi yang asli, bukan meratakannya menjadi gambar diam.',
      },
      {
        question: 'Bagaimana melewati frame menjaga kecepatan animasi tetap natural, bukan memutar cepat?',
        answer:
          'Saat Anda memilih Lewati Setiap Frame ke-2 atau Pertahankan 1 dari Setiap 3 Frame, kompresor menjumlahkan durasi milidetik frame yang dilewati ke frame yang dipertahankan. Total waktu putaran tetap akurat sementara total data frame menyusut setengah hingga dua pertiga.',
      },
      {
        question: 'Pengaturan tepat apa yang diterapkan Ringan, Seimbang, dan Perkecil Maks?',
        answer:
          'Ringan mengatur 192 warna palet pada skala 100% dengan mempertahankan semua frame, sedangkan Seimbang turun ke 96 warna dan skala 85% dengan mempertahankan semua frame. Perkecil Maks menggabungkan 64 warna, skala 75%, dan Lewati Setiap Frame ke-2 untuk batas file Discord atau Slack yang agresif.',
      },
      {
        question: 'Mengapa kompresi Seimbang atau 128 warna pertama saya justru sedikit lebih besar dari GIF mungil yang sudah ada?',
        answer:
          'GIF yang dioptimalkan dengan baik oleh alat desktop sering mengandalkan patch bounding dirty-rectangle mungil antar frame, sedangkan pengodean ulang Canvas membangun frame penuh terkuantisasi yang bersih. Jika pemberitahuan kuning muncul, turunkan Batas Warna Palet ke 64 atau 32 warna, turunkan Skala Output ke 75% atau 50%, atau lewati setiap frame ke-2.',
      },
      {
        question: 'Tuas mana yang memangkas ukuran file GIF animasi paling cepat tanpa merusak rekaman layar?',
        answer:
          'Menurunkan Skala Output dari 100% ke 75% atau 50% memangkas area piksel sebesar 44% hingga 75% secara langsung sambil menjaga teks UI tetap terbaca. Memadukan skala 75% dengan 64–96 warna palet bekerja sangat baik untuk screencast dokumentasi.',
      },
      {
        question: 'Mengapa tombol Optimalisasi Frame Rate dinonaktifkan pada GIF 1 frame atau 2 frame?',
        answer:
          'Melewati setiap frame kedua atau ketiga pada file 1 atau 2 frame tidak akan menyisakan gerakan apa pun. Tombol melewati frame tersebut otomatis terkunci setiap kali GIF yang didekode memiliki 2 frame atau kurang.',
      },
      {
        question: 'Berapa ukuran file GIF animasi terbesar yang didukung Kompresor GIF?',
        answer:
          'Anda bisa mengunggah animasi GIF87a atau GIF89a hingga 30 MB per file. Progres ditampilkan dengan rapi sebagai Mengompres GIF (X%)... saat browser Anda mengkuantisasi dan mengodekan ulang setiap frame yang dipertahankan.',
      },
      {
        question: 'Apakah mengurangi Batas Warna Palet di bawah 64 warna memengaruhi GIF reaksi fotografis secara berbeda dari screencast UI?',
        answer:
          'Ya. Animasi UI perangkat lunak yang datar dengan warna merek terbatas tetap terlihat tajam pada 32 atau 64 warna, sedangkan klip video live-action dengan gradien kulit menunjukkan posterisasi pada palet yang sangat rendah — jadi menurunkan skala atau frame rate sedikit sering lebih rapi untuk klip film.',
      },
      {
        question: 'Bisakah saya melihat pratinjau animasi asli dan hasil kompresi berdampingan sebelum mengunduh?',
        answer:
          'Ya. Tepat di bawah bilah ringkasan byte gelap, dua pemutar animasi live menampilkan GIF Asli dan Terkompresi secara bersamaan dengan dimensi piksel dan ukuran file yang tepat, sehingga Anda bisa langsung melihat gerakan tersendat atau banding.',
      },
      {
        question: 'Berapa resolusi output minimum saat memilih Skala Output 25% pada GIF stiker kecil?',
        answer:
          'Dimensi output dibatasi dengan aman ke minimum 16×16 piksel per sisi. Hal itu mencegah GIF reaksi mungil runtuh menjadi file piksel nol yang tidak valid, bahkan pada opsi skala 25%.',
      },
      {
        question: 'Bisakah saya menjalankan beberapa uji kompresi pada GIF yang sama tanpa memuat ulang?',
        answer:
          'Ya. Buffer frame yang didekode tetap tersimpan di memori, sehingga Anda bisa menyesuaikan Batas Warna Palet (16–256), Skala Output, atau Optimalisasi Frame Rate secara bebas dan mengklik Kompres GIF lagi dalam hitungan detik.',
      },
      {
        question: 'Bagaimana kompresor GIF berjalan di browser saya tanpa mengunggah animasi besar ke server?',
        answer:
          'Alat ini mendekode frame langsung dari ArrayBuffer yang diunggah di JavaScript dan memuat encoder GIF LZW yang ringan serta kuantisasi warna sesuai kebutuhan. Screencast Slack privat, laporan bug, dan demo produk tidak pernah meninggalkan perangkat Anda.',
      },
      {
        question: 'Mengapa GIF mengompres jauh lebih sedikit daripada video MP4 dari klip yang sama?',
        answer:
          'GIF adalah format frame lossless-LZW 256 warna dari tahun 1989 tanpa kompensasi gerak antar-frame temporal modern. Menggabungkan penurunan skala moderat (75%–50%), palet yang lebih rendah (64–96 warna), dan melewati frame 2× memberikan penghematan byte terbaik dalam spesifikasi .gif standar.',
      },
      {
        question: 'Apakah mengompres GIF animasi dengan piksel transparan menjaga transparansi latar?',
        answer:
          'Ya. Indeks transparansi dan metode disposal frame yang didekode dari GIF sumber Anda dilacak antar frame selama pengodean ulang di browser.',
      },
      {
        question: 'Nama file apa yang digunakan saat menyimpan animasi yang dioptimalkan?',
        answer:
          'Mengklik Unduh GIF Terkompresi akan mengekspor nama file yang sudah dibersihkan dan diakhiri _compressed.gif, seperti demo_walkthrough_compressed.gif. Animasi master asli Anda tetap sepenuhnya tidak tersentuh di disk.',
      },
      {
        question: 'Bisakah saya memperkecil GIF agar memenuhi batas 8 MB/10 MB Discord atau batas unggah Slack?',
        answer:
          'Ya. Jatuhkan animasi apa pun hingga 30 MB, uji Seimbang atau Perkecil Maks, periksa pembacaan ukuran Terkompresi live tepat di atas kartu ringkasan, dan sesuaikan Skala Output ke 50% jika Anda membutuhkan pengurangan bobot lebih lanjut.',
      },
      {
        question: 'Apakah Atur Ulang menghapus semua memori frame yang tersimpan dengan rapi?',
        answer:
          'Ya. Mengklik Atur Ulang akan mencabut URL blob yang aktif dan mengosongkan buffer frame yang didekode dari memori browser, sehingga Anda bisa memuat GIF berat lainnya dengan lancar.',
      },
      {
        question: 'Apa bedanya Kompresor GIF dengan Pembuat GIF?',
        answer:
          'Pembuat GIF membuat animasi baru dari gambar diam JPG, PNG, atau WebP yang terpisah. Sebaliknya, kompresor GIF ini mengambil animasi .gif berat yang sudah ada dan memperkecil ukuran filenya melalui palet, skala, dan pengurangan frame.',
      },
      {
        question: 'Bisakah saya mengunggah file .gif statis satu frame juga?',
        answer:
          'Ya. GIF statis satu frame dimuat sebagai file 1 frame, di mana Anda bisa memperkecil dimensi melalui Skala Output dan menurunkan Batas Warna Palet hingga 16 warna dengan rapi.',
      },
      {
        question: 'Apakah watermark, batas frame, atau antrean server diterapkan pada GIF yang dikompres?',
        answer:
          'Tidak. Kompresi dieksekusi secara lokal dengan kecepatan browser penuh — tanpa watermark, tanpa pendaftaran, dan tanpa batas pengulangan.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },
  {
    slug: '/heic-to-jpg',
    name: 'HEIC ke JPG',
    shortDescription: 'Konversi foto HEIC/HEIF iPhone Apple ke JPG universal di browser.',
    category: 'convert',
    seoTitle: 'Konversi HEIC ke JPG Gratis Online – iPhone',
    seoDescription:
      'Ubah foto Apple menjadi file universal dengan pengonversi HEIC ke JPG gratis. Dekode WebAssembly lokal berjalan privat di browser Anda dengan ekspor ZIP massal.',
    h1: 'Pengonversi HEIC ke JPG Online Gratis',
    subtitle:
      'Ubah foto kamera HEIC atau HEIF dari iPhone dan iPad Apple menjadi file .jpg yang bisa dibaca di mana saja dengan pengonversi HEIC ke JPG gratis kami yang berjalan lokal di browser. Ideal untuk pengguna Windows, pelamar kerja, dan lab foto yang menolak format High Efficiency Apple: alat ini mendekode hingga 25 MB per file melalui WebAssembly sisi klien dengan kualitas yang bisa disesuaikan dan unduhan batch ZIP tunggal.',
    howToSteps: [
      {
        title: 'Jatuhkan foto HEIC atau HEIF Apple',
        description:
          'Pilih atau seret satu atau banyak gambar .heic atau .heif (hingga 25 MB per file) langsung dari iPhone, Mac, cadangan cloud, atau folder Windows Anda.',
      },
      {
        title: 'Tunggu sebentar untuk dekode WebAssembly lokal',
        description:
          'Halaman memuat WebAssembly sisi klien (heic2any) langsung di dalam tab browser Anda untuk mendekode container gambar HEVC Apple secara privat.',
      },
      {
        title: 'Sesuaikan Kualitas Output JPG (20%–100%)',
        description:
          'Pertahankan default 90% yang hampir lossless untuk potret keluarga dan cetakan, atau geser mendekati 75%–85% untuk lampiran email yang lebih ringan, lalu klik Konversi Ulang Semua.',
      },
      {
        title: 'Tinjau dimensi piksel dan perbandingan ukuran',
        description:
          'Periksa jumlah byte HEIC asli vs. JPG output pada setiap kartu dan luncurkan slider Bandingkan untuk memastikan detail yang tajam.',
      },
      {
        title: 'Unduh file JPG atau Unduh Semua (ZIP)',
        description:
          'Simpan foto .jpg individual langsung atau klik Unduh Semua (ZIP) untuk mengunduh compressmypic_heic_to_jpg.zip dalam satu klik.',
      },
    ],
    features: [
      {
        title: 'Dekode HEIC WebAssembly Sisi Klien',
        description: 'Menggunakan heic2any di dalam tab browser Anda sehingga foto kamera privat tidak pernah diunggah ke server eksternal.',
      },
      {
        title: 'Konversi Massal + Ekspor ZIP',
        description: 'Konversi seluruh folder foto HEIC iPhone ke JPG dalam satu antrean dan ambil semuanya dalam satu ZIP.',
      },
      {
        title: 'Slider Kualitas JPG Kustom',
        description: 'Atur kompresi output dari 20% hingga 100% sesuai apakah Anda mengutamakan detail atau ukuran file yang mungil.',
      },
      {
        title: 'Privasi EXIF Dihapus oleh Canvas',
        description: 'Pengodean ulang Canvas secara alami menghapus koordinat GPS tersembunyi dan metadata seri kamera.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa PC Windows, perangkat lunak lama, dan formulir unggah menolak foto .heic dari iPhone?',
        answer:
          'Apple mengadopsi container HEIC (dibangun di atas kompresi video HEVC) mulai iOS 11 untuk menghemat ruang penyimpanan di iPhone dan iPad. Karena banyak instalasi Windows, portal pemerintah, backend CMS, dan editor desktop tidak memiliki codec HEVC berlisensi, mengonversi HEIC ke JPG standar membuat foto Anda langsung bisa dibuka di mana saja.',
      },
      {
        question: 'Bagaimana pengonversi HEIC ke JPG ini mendekode file Apple di dalam browser web standar?',
        answer:
          'Sebagian besar browser tidak bisa merender piksel HEIC secara native dalam tag gambar standar di Windows atau Linux. Alat ini menjalankan decoder WebAssembly heic2any sisi klien tepat di dalam tab Anda sendiri, sehingga browser Anda menerjemahkan aliran HEIC menjadi piksel RGB dengan rapi — tanpa server cloud jarak jauh.',
      },
      {
        question: 'Apakah foto kamera pribadi, selfie ID, atau liburan keluarga diunggah ke mana pun selama konversi?',
        answer:
          'Tidak pernah. Baik langkah dekode HEIC WebAssembly maupun langkah pengodean JPEG HTML5 Canvas terjadi secara lokal di memori browser Anda, sehingga foto pribadi tidak pernah meninggalkan komputer atau ponsel Anda.',
      },
      {
        question: 'Apa bedanya file .heic dan .heif di sini?',
        answer:
          'HEIF adalah standar High Efficiency Image File yang mendasarinya, sedangkan HEIC adalah ekstensi nama file Apple untuk container HEIF yang dikodekan HEVC. Ekstensi .heic maupun .heif (dan tipe MIME yang cocok) diterima dan didekode dengan mulus menjadi .jpg.',
      },
      {
        question: 'Mengapa file JPG hasil konversi sering lebih besar dalam megabyte daripada HEIC aslinya?',
        answer:
          'Pengodean HEVC Apple mengemas data gambar kira-kira dua kali lebih padat daripada JPEG klasik pada kualitas visual yang serupa. Mengembangkan HEIC 1,8 MB menjadi JPG 90% yang sangat detail umumnya menghasilkan file 2,5 MB–3,5 MB — dan menurunkan Kualitas Output JPG ke arah 80% membantu memangkas ukuran itu kembali jika diperlukan.',
      },
      {
        question: 'Mengapa 90% ditetapkan sebagai Kualitas Output JPG default untuk foto iPhone?',
        answer:
          'Pada 90%, JPEG standar mempertahankan tekstur kulit yang halus, detail rambut, dan bokeh latar mode potret tanpa blok kompresi yang terlihat. Anda bisa menggeser ke mana pun antara 20% dan 100% dan menekan Konversi Ulang Semua kapan saja.',
      },
      {
        question: 'Apakah mengonversi Live Photo iPhone (.heic) mempertahankan gerakan video atau mengekspor JPG diam?',
        answer:
          'Saat Anda mengunggah komponen diam .heic dari Live Photo iPhone, decoder mengekstrak frame beresolusi tinggi tersebut dan mengekspornya sebagai foto .jpg universal. Trek video gerak di dalam klip MOV yang dipasangkan tidak dibundel ke dalam JPEG statis.',
      },
      {
        question: 'Bisakah saya menjatuhkan seluruh album liburan berisi file HEIC dan mengunduh satu ZIP?',
        answer:
          'Ya. Pilih puluhan file .heic atau .heif (hingga 25 MB per file) dalam satu pass, tunggu saat browser Anda mendekode setiap foto secara lokal, lalu klik Unduh Semua (ZIP) untuk menyimpan compressmypic_heic_to_jpg.zip.',
      },
      {
        question: 'Apakah koordinat GPS dan tag lokasi iPhone Apple tetap ada di JPG yang diekspor?',
        answer:
          'Tidak. Pengodean melalui HTML5 Canvas menghapus lokasi GPS EXIF yang tersemat, nomor seri kamera, dan stempel waktu secara otomatis — memberi Anda privasi tambahan sebelum memposting JPG hasil konversi secara online.',
      },
      {
        question: 'Mengapa mendekode HEIC iPhone ProRAW/HEIC 12 megapiksel atau 48 megapiksel bisa memakan satu atau dua detik per file?',
        answer:
          'Dekompresi HEVC di WebAssembly membutuhkan perhitungan CPU yang lebih berat daripada dekode JPEG standar, terutama pada foto iPhone Pro 24 MP atau 48 MP. Karena batch diproses secara lokal, kecepatan konversi bergantung dengan mulus pada prosesor perangkat Anda, bukan pada bandwidth unggah.',
      },
      {
        question: 'Apa yang terjadi pada orientasi kamera iPhone vertikal vs. horizontal selama konversi HEIC ke JPG?',
        answer:
          'Browser modern membaca flag orientasi yang tersemat saat mendekode gambar ke Canvas. Hal itu memastikan selfie vertikal dan foto lanskap diekspor tegak tanpa rotasi menyamping.',
      },
      {
        question: 'Mengapa file bernama image.heic gagal dengan pemberitahuan error HEIC tidak valid?',
        answer:
          'Kadang aplikasi pesan pihak ketiga menyimpan container yang rusak atau file dengan label salah berekstensi .heic, atau melebihi batas 25 MB. Mencoba salinan asli yang diekspor melalui AirDrop, iCloud Photos, atau Apple Files akan menyelesaikan header wrapper yang rusak.',
      },
      {
        question: 'Berapa ukuran maksimum per foto HEIC atau HEIF yang diterima di sini?',
        answer:
          'File individual hingga 25 MB didukung dalam antrean. Batas tersebut dengan mudah mencakup foto kamera HEIC iPhone standar 12 MP, 24 MP, dan 48 MP.',
      },
      {
        question: 'Bisakah saya membandingkan JPG yang didekode secara visual dengan pratinjau HEIC asli sebelum menyimpan?',
        answer:
          'Ya. Klik thumbnail hasil mana pun atau tombol Bandingkan untuk memeriksa ketajaman berdampingan di dalam modal perbandingan interaktif.',
      },
      {
        question: 'Apakah warna gamut lebar Display P3 iPhone akan terlihat akurat setelah dikonversi ke JPG?',
        answer:
          'Selama rendering Canvas browser, warna gamut lebar dipetakan dengan rapi ke ruang JPEG sRGB standar. Hasilnya, warna dirender secara konsisten di monitor Windows, browser web, dan kios cetak foto tanpa pergeseran yang pudar.',
      },
      {
        question: 'Bagaimana cara menghentikan foto iPhone di masa depan agar tersimpan sebagai HEIC, bukan JPG?',
        answer:
          'Di iPhone Anda, buka Pengaturan, masuk ke Kamera, ketuk Format, lalu pilih Paling Kompatibel untuk foto baru. Namun, mempertahankan Efisiensi Tinggi menghemat kira-kira setengah penyimpanan ponsel Anda — dan Anda bisa mengonversi batch HEIC tertentu ke JPG kapan saja di sini.',
      },
      {
        question: 'Apakah saya kehilangan resolusi piksel saat mengubah HEIC 4032×3024 menjadi JPG?',
        answer:
          'Tidak. JPG output mempertahankan 100% lebar dan tinggi piksel yang didekode tetap utuh, kecuali Anda memilih untuk mengubah ukurannya secara terpisah setelahnya.',
      },
      {
        question: 'Bisakah saya menempel atau mengonversi file HEIC dari browser Android, Chromebook, Linux, atau Windows?',
        answer:
          'Ya. Karena WebAssembly heic2any berjalan di dalam Chrome, Firefox, Edge, dan Safari apa pun sistem operasinya, Anda bisa membuka dan mengonversi lampiran .heic iPhone dengan rapi bahkan di mesin Linux atau Windows tanpa memasang ekstensi.',
      },
      {
        question: 'Apa yang harus saya lakukan jika perlu memperkecil JPG yang baru dikonversi di bawah 100 KB untuk portal lowongan?',
        answer:
          'Turunkan Kualitas Output JPG di sini dan klik Konversi Ulang Semua untuk memangkas ukuran file dengan cepat. Jika Anda masih membutuhkan penargetan byte yang ketat, lompat langsung ke Kompres Gambar ke 100KB melalui alat tertaut kami.',
      },
      {
        question: 'Apakah pengonversi ini juga menerima file JPG atau PNG, atau hanya HEIC dan HEIF?',
        answer:
          'Halaman ini sengaja hanya memfilter input .heic dan .heif agar batch foto Apple tetap rapi. Gunakan Pengonversi Gambar Massal kami jika folder Anda mencampur HEIC dengan file PNG, WebP, dan BMP.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },
  {
    slug: '/jpg-to-png',
    name: 'JPG ke PNG',
    shortDescription: 'Konversi foto JPG/JPEG ke gambar PNG lossless di browser.',
    category: 'convert',
    seoTitle: 'Konversi JPG ke PNG Gratis Online – Lossless',
    seoDescription:
      'Ubah foto JPEG menjadi file lossless dengan pengonversi JPG ke PNG gratis. Konversi satu atau banyak gambar di browser dengan fidelitas piksel dan ekspor ZIP.',
    h1: 'Pengonversi JPG ke PNG Online Gratis',
    subtitle:
      'Konversi foto .jpg dan .jpeg standar dengan rapi menjadi file .png lossless menggunakan pengonversi JPG ke PNG gratis kami yang berjalan langsung di dalam browser. Dibuat untuk percetakan, editor grafis, dan formulir web yang secara ketat mengharuskan unggahan PNG: alat ini mengunci piksel yang ada tanpa kerusakan kompresi lossy tambahan, pada batch hingga 25 MB per gambar dengan ekspor ZIP instan.',
    howToSteps: [
      {
        title: 'Jatuhkan foto JPG atau JPEG hingga 25 MB per file',
        description:
          'Unggah satu atau banyak gambar .jpg atau .jpeg dari komputer, ponsel, atau kartu kamera Anda ke area unggah.',
      },
      {
        title: 'Konfirmasi mode Pengodean PNG Lossless',
        description:
          'Perhatikan bahwa slider kualitas otomatis tersembunyi dan panel Pengodean PNG Lossless muncul, karena PNG tidak pernah menimbulkan artefak kompresi lossy.',
      },
      {
        title: 'Periksa ukuran JPG asli vs. PNG hasil konversi',
        description:
          'Tinjau dimensi piksel dan jumlah byte per kartu file, lalu buka Bandingkan untuk memeriksa fidelitas piksel berdampingan.',
      },
      {
        title: 'Tambahkan file JPEG ekstra kapan saja atau hapus yang tidak diinginkan',
        description:
          'Jatuhkan lebih banyak file .jpg ke sesi aktif atau hapus kartu tunggal dengan tombol tempat sampah sebelum membundel.',
      },
      {
        title: 'Unduh PNG tunggal atau Unduh Semua (ZIP)',
        description:
          'Klik Unduh PNG pada kartu hasil mana pun atau Unduh Semua (ZIP) untuk menyimpan compressmypic_jpg_to_png.zip secara lokal.',
      },
    ],
    features: [
      {
        title: 'Output PNG Benar-Benar Lossless',
        description: 'Mencegah kerusakan generasi lossy tambahan saat menyiapkan gambar untuk pengeditan lebih lanjut atau pengarsipan.',
      },
      {
        title: 'Antrean Batch & Pengemasan ZIP',
        description: 'Konversi banyak JPEG ke PNG secara bersamaan dan ekspor dalam satu ZIP yang terorganisir.',
      },
      {
        title: 'Tanpa Watermark atau Pendaftaran',
        description: 'Konversi tanpa batas langsung di Chrome, Firefox, Safari, atau Edge tanpa membuat akun.',
      },
      {
        title: '100% Pemrosesan Lokal',
        description: 'Gambar tetap di dalam tab browser Anda — tidak ada yang menyentuh server jarak jauh.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa slider kualitas menghilang di pengonversi JPG ke PNG ini?',
        answer:
          'Berbeda dengan JPEG atau WebP, PNG menggunakan kompresi lossless DEFLATE di mana setiap piksel dikodekan secara identik tanpa pertukaran persentase kualitas. Mengganti slider dengan kartu Pengodean PNG Lossless mencegah tebakan yang menyesatkan.',
      },
      {
        question: 'Jika mengonversi JPG ke PNG itu lossless, mengapa alat ini tidak bisa menghapus blok JPEG buram yang sudah ada?',
        answer:
          'PNG lossless membekukan piksel yang saat ini tersimpan di dalam JPEG Anda, sehingga tidak ada kerusakan generasi tambahan saat Anda mengedit, memotong, atau menyimpan ulang file nanti. Namun, alat ini tidak bisa secara ajaib merekonstruksi tekstur halus yang sudah dibuang saat foto kamera asli disimpan sebagai JPG.',
      },
      {
        question: 'Mengapa JPG 300 KB sering mengembang menjadi PNG 1,5 MB–3 MB setelah konversi?',
        answer:
          'JPEG membuang variasi warna halus di blok piksel 8×8 agar tetap kecil, sedangkan PNG mencatat data piksel RGB lossless yang tepat di seluruh frame. Foto bernada kontinu secara alami membutuhkan byte jauh lebih banyak dalam PNG lossless daripada dalam JPG terkompresi.',
      },
      {
        question: 'Kapan mengonversi JPG ke PNG benar-benar berguna meskipun ukuran filenya lebih besar?',
        answer:
          'Mengonversi ke PNG sangat penting saat vendor cetak, pengimpor UI perangkat lunak, portal lencana, atau editor pixel-art secara ketat menuntut file .png. Alat ini juga melindungi gambar saat Anda berencana melapisi teks yang tajam dan mengedit berulang kali tanpa memperparah artefak rekompresi JPEG.',
      },
      {
        question: 'Apakah mengonversi JPG dengan latar putih solid ke PNG membuat latar tersebut transparan?',
        answer:
          'Tidak. File JPEG standar tidak menyimpan informasi transparansi alfa, sehingga mengonversi JPG ke PNG menghasilkan gambar .png yang sepenuhnya buram dan mempertahankan latar putih. Padukan dengan Penghapus Latar kami setelahnya jika Anda membutuhkan potongan alfa.',
      },
      {
        question: 'Mengapa Anda tidak boleh mengganti ekstensi file .jpg menjadi .png secara manual?',
        answer:
          'Mengubah hanya sufiks nama file akan meninggalkan byte biner JPEG mentah di dalamnya, sehingga validator unggah yang ketat, pemuat canvas HTML, dan perangkat lunak cetak akan menolak atau gagal membuka file. Dekode Canvas dan pengodean ulang PNG yang sebenarnya akan menulis chunk dan header PNG yang valid.',
      },
      {
        question: 'Apakah file PNG hasil konversi mempertahankan lebar dan tinggi piksel yang tepat dari JPEG asli saya?',
        answer:
          'Ya. Setiap .png yang diekspor mempertahankan 100% lebar dan tinggi alami JPG sumber — tanpa pemotongan atau pengubahan ukuran otomatis.',
      },
      {
        question: 'Bisakah saya mengonversi 20 pindaian JPG secara massal menjadi file PNG dan menyimpan satu ZIP?',
        answer:
          'Ya. Jatuhkan banyak file .jpg atau .jpeg (hingga 25 MB per file) bersamaan, tunggu sebentar saat browser Anda mengodekan setiap PNG secara lokal, lalu klik Unduh Semua (ZIP) untuk mengunduh compressmypic_jpg_to_png.zip.',
      },
      {
        question: 'Apakah mengonversi JPG ke PNG menghapus tag EXIF kamera tersembunyi dan metadata GPS?',
        answer:
          'Ya. Mendekode JPEG ke HTML5 Canvas dan menulis PNG baru akan membuang header EXIF JPEG, model kamera, dan koordinat GPS secara otomatis.',
      },
      {
        question: 'Apakah ID yang dipindai, kwitansi, atau potret pribadi dikirim ke server eksternal selama konversi PNG?',
        answer:
          'Tidak pernah. Dekode JPEG, rendering Canvas, pengodean PNG DEFLATE, dan pengarsipan ZIP berjalan sepenuhnya di dalam memori browser lokal di komputer atau ponsel Anda.',
      },
      {
        question: 'Apa yang terjadi jika input saya adalah JPEG yang disimpan dengan warna cetak CMYK, bukan RGB?',
        answer:
          'Browser modern mengonversi aliran piksel JPEG ke ruang warna RGBA sRGB 8-bit standar saat menggambar ke HTML5 Canvas. Hal itu menjamin output .png Anda dirender secara akurat di browser web, slide, dan layar ponsel.',
      },
      {
        question: 'Bagaimana kolom Perubahan menampilkan pertumbuhan ukuran file dengan rapi?',
        answer:
          'Mengubah JPG terkompresi menjadi PNG lossless hampir selalu meningkatkan ukuran byte. Karena itu, sel Perubahan setiap kartu dengan jujur melaporkan perbedaan +X% positif yang tepat, beserta ukuran byte JPG asli dan PNG akhir.',
      },
      {
        question: 'Bisakah saya menggunakan penampil Bandingkan untuk memastikan tidak ada pergeseran warna antara JPG dan PNG?',
        answer:
          'Ya. Klik thumbnail kartu mana pun atau tombol Bandingkan untuk memeriksa piksel berdampingan di tirai pisah interaktif sebelum mengunduh.',
      },
      {
        question: 'Mengapa PNG hasil konversi membantu sebelum saya menjalankan beberapa putaran anotasi atau overlay teks?',
        answer:
          'Menyimpan ulang JPEG berulang kali akan sedikit merusak tepi setiap kali kuantisasi lossy berjalan lagi. Mengonversi aset sumber ke PNG sekali akan menciptakan master antara yang lossless dan tahan terhadap pengeditan grafis berulang dengan rapi.',
      },
      {
        question: 'Apakah ekstensi .jpg dan .jpeg diterima dengan mulus?',
        answer:
          'Ya. Area unggah menerima ekstensi .jpg maupun .jpeg dan mengeluarkan file .png standar dengan mempertahankan nama dasar asli Anda yang sudah dibersihkan.',
      },
      {
        question: 'Bisakah saya juga mengonversi gambar PNG, WebP, atau HEIC di halaman khusus ini?',
        answer:
          'Halaman ini sengaja hanya menerima input JPG/JPEG untuk konversi satu langkah yang rapi ke PNG. Gunakan Pengonversi Gambar atau Pengonversi Gambar Massal kami jika folder sumber Anda berisi format file lain.',
      },
      {
        question: 'Berapa ukuran maksimum yang diizinkan per JPEG yang diunggah?',
        answer:
          'Setiap file .jpg atau .jpeg individual bisa mencapai 25 MB. Batas yang murah hati ini dengan mudah mencakup ekspor kamera beresolusi tinggi, foto DSLR, dan karya digital yang lebar.',
      },
      {
        question: 'Mengapa foto potret yang disimpan sebagai .jpg bisa diekspor tegak meskipun diambil menyamping di kamera?',
        answer:
          'Browser modern secara otomatis membaca tag orientasi EXIF yang tersemat saat melukis JPEG yang didekode ke HTML5 Canvas. Hal itu mengunci orientasi tegak secara permanen ke dalam piksel PNG baru, sehingga tampil tegak di setiap aplikasi.',
      },
      {
        question: 'Apakah PNG yang diekspor bisa dibuka di Photoshop, Illustrator, Figma, Canva, dan PowerPoint?',
        answer:
          'Ya. File .png RGBA 8-bit standar yang dibuat oleh HTML5 Canvas kompatibel secara universal di setiap aplikasi desain desktop, paket office, browser, dan sistem operasi ponsel.',
      },
      {
        question: 'Seberapa cepat konversi JPG ke PNG berbasis browser dibandingkan pengonversi cloud?',
        answer:
          'Karena tidak ada waktu tunggu unggah atau unduh file untuk foto bermegabyte, konversi Canvas lokal selesai dalam hitungan milidetik per file langsung di CPU Anda sendiri. Batch selesai dengan cepat tanpa menunggu di antrean server jarak jauh.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },
  {
    slug: '/png-to-jpg',
    name: 'PNG ke JPG',
    shortDescription: 'Konversi PNG berat ke JPG ringan dengan warna matte latar kustom.',
    category: 'convert',
    seoTitle: 'Konversi PNG ke JPG Gratis Online – Matte',
    seoDescription:
      'Ubah file PNG berat menjadi foto ringan dengan pengonversi PNG ke JPG gratis. Pilih warna matte kustom untuk area transparan, atur kualitas, dan simpan ZIP.',
    h1: 'Pengonversi PNG ke JPG Online Gratis',
    subtitle:
      'Perkecil tangkapan layar PNG yang besar, capture Retina, dan ekspor grafis menjadi file .jpg yang cepat dan ringan dengan pengonversi PNG ke JPG gratis kami di browser. Disesuaikan untuk blogger, pemasar, dan pengirim email yang berhadapan dengan lampiran PNG berukuran besar hingga 25 MB per file: alat ini memadukan slider kualitas dengan pemilih Warna Matte Latar Transparan kustom, sehingga area alfa tidak pernah berubah menjadi hitam pekat.',
    howToSteps: [
      {
        title: 'Jatuhkan gambar PNG hingga 25 MB per file',
        description:
          'Unggah satu atau banyak tangkapan layar .png, render produk, atau potongan transparan ke area unggah.',
      },
      {
        title: 'Pilih Warna Matte Latar Transparan',
        description:
          'Klik Putih (#ffffff), Hitam (#000000), Abu-abu Terang (#f8fafc), atau swatch warna native untuk mengontrol bagaimana piksel transparan diratakan di belakang subjek yang buram.',
      },
      {
        title: 'Atur Kualitas Output JPG (20%–100%)',
        description:
          'Pertahankan default 88% yang tajam atau seret antara 20% (file mungil) dan 100% (detail maksimal), lalu klik Konversi Ulang Semua.',
      },
      {
        title: 'Verifikasi penghematan byte dan tepi tajam melalui Bandingkan',
        description:
          'Periksa persentase yang dihemat per kartu dan periksa tepi teks atau produk di penampil perbandingan sebelum-sesudah yang interaktif.',
      },
      {
        title: 'Unduh file JPG atau Unduh Semua (ZIP)',
        description:
          'Simpan foto .jpg hasil konversi individual segera atau bundel batch bersama-sama ke compressmypic_png_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Isian Matte Transparansi Kustom',
        description: 'Area PNG transparan membaur rapi ke putih, hitam, atau warna latar kustom apa pun, bukan berubah menjadi hitam pekat.',
      },
      {
        title: 'Pengurangan Ukuran File yang Besar',
        description: 'Mengonversi PNG fotografis ke JPG 85% sering memperkecil bobot file sebesar 60–85% secara instan.',
      },
      {
        title: 'Pemeriksa Visual Sebelum/Sesudah',
        description: 'Verifikasi ketajaman berdampingan sebelum mengunduh agar teks dan tepi tetap tajam.',
      },
      {
        title: 'Eksekusi Browser yang Privat',
        description: 'Tangkapan layar dan dokumen rahasia tetap aman di komputer Anda sendiri.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa tangkapan layar macOS dan Windows tersimpan sebagai PNG bermegabyte yang menyusut drastis sebagai JPG?',
        answer:
          'Sistem operasi desktop secara default menggunakan PNG lossless untuk tangkapan layar, yang menyimpan jutaan piksel layar Retina yang tidak terkompresi dengan setia — sering melebihi 3 MB hingga 8 MB per capture. Mengonversi PNG fotografis atau UI yang kaya ke JPG 85%–90% biasanya memangkas 60% hingga 85% bobot file untuk berbagi email dan Slack yang cepat.',
      },
      {
        question: 'Bagaimana pemilih Warna Matte Latar Transparan mencegah kotak hitam yang jelek?',
        answer:
          'Karena spesifikasi JPEG tidak memiliki kanal transparansi alfa, pengonversi yang naif sering menetapkan piksel alfa kosong ke hitam #000000, sehingga merusak logo gelap atau potongan berbayang. Melukis warna matte pilihan Anda (putih secara default, plus hitam, abu-abu terang, atau hex kustom apa pun) ke canvas terlebih dahulu akan membaurkan tepi semi-transparan dengan rapi.',
      },
      {
        question: 'Bisakah saya memilih arang gelap atau warna merek situs tertentu di belakang logo PNG transparan sebelum menyimpan JPG?',
        answer:
          'Ya. Klik kotak input warna di samping tombol cepat Putih, Hitam, dan Abu-abu Terang di bawah Warna Matte Latar Transparan untuk memilih nilai hex yang tepat, lalu klik Konversi Ulang Semua untuk melihat pratinjau dan mengekspor.',
      },
      {
        question: 'Persentase Kualitas Output JPG berapa yang menjaga tipografi tangkapan layar tetap tajam tanpa file yang membengkak?',
        answer:
          'Menjaga Kualitas Output JPG sekitar 88% (default) hingga 95% akan membuat tepi tajam di sekitar teks UI perangkat lunak dan bagan tetap bersih. Turun di bawah 70% bisa menimbulkan noise nyamuk samar di sekitar huruf merah atau biru berkontras tinggi akibat subsampling chroma JPEG.',
      },
      {
        question: 'Mengapa ikon PNG monokrom datar mungil 20 KB justru bisa sedikit membesar saat dikonversi ke JPG 88%?',
        answer:
          'PNG berindeks palet unggul pada grafis datar dua warna dengan area solid yang tajam, sedangkan blok kosinus 8×8 JPEG menambah overhead pada logo mungil. Selalu periksa kolom Perubahan — untuk ikon transparan datar yang ditujukan untuk situs web, WebP atau mempertahankan PNG biasanya lebih kecil daripada JPG.',
      },
      {
        question: 'Bagaimana cara memilih antara PNG ke JPG dan PNG ke WebP?',
        answer:
          'Pilih PNG ke JPG saat lampiran harus dibuka di Microsoft Word, pembuat PDF, program email lama, lab cetak, atau portal yang menolak WebP, atau saat Anda memang membutuhkan latar putih solid. Pilih PNG ke WebP saat menerapkan aset ke situs web di mana menjaga transparansi dan kecepatan maksimal penting.',
      },
      {
        question: 'Apakah mengonversi potongan produk transparan ke matte putih #ffffff membantu di listing marketplace?',
        answer:
          'Ya. Marketplace seperti Amazon dan eBay umumnya lebih menyukai JPG buram berlatar putih yang tajam untuk thumbnail produk utama daripada PNG alfa, dan putih terkompresi sangat efisien di dalam JPEG.',
      },
      {
        question: 'Bisakah saya mengonversi seluruh batch 25 tangkapan layar PNG Retina menjadi JPG sekaligus?',
        answer:
          'Ya. Jatuhkan banyak file .png hingga 25 MB per file ke antrean, pilih kualitas dan warna isian matte Anda, lalu unduh semuanya bersama-sama dalam compressmypic_png_to_jpg.zip.',
      },
      {
        question: 'Apa yang terjadi pada bayangan lembut di sekitar capture jendela PNG transparan saat diratakan ke JPG?',
        answer:
          'Bayangan yang dibaur alfa akan menyatu secara alami di atas Warna Matte pilihan Anda, bukan terpotong menjadi garis keras bergerigi. Hal itu menghasilkan bayangan yang halus dan bersih pada latar putih atau berwarna, siap untuk slide dan artikel.',
      },
      {
        question: 'Apakah dashboard rahasia, kwitansi, atau mockup desain diunggah ke API cloud?',
        answer:
          'Tidak. Komposisi matte Canvas, kompresi JPEG, dan pembuatan ZIP semuanya dieksekusi secara lokal di dalam tab browser Anda, sehingga capture sensitif tidak pernah meninggalkan komputer Anda.',
      },
      {
        question: 'Apakah konversi PNG ke JPG mengubah lebar atau tinggi piksel?',
        answer:
          'Tidak. Setiap .jpg hasil konversi mempertahankan 100% lebar dan tinggi yang tepat dari PNG asli Anda. Gunakan Pengubah Ukuran Gambar atau Pengubah Ukuran Gambar Massal jika Anda juga ingin menurunkan capture Retina ke dimensi 1×.',
      },
      {
        question: 'Mengapa slider kualitas membentang dari 20% hingga 100%?',
        answer:
          'Menyeret ke arah 20% menunjukkan bagaimana kompresi agresif memangkas ukuran saat file super mungil wajib, sedangkan 85%–90% mencapai titik manis visual untuk foto dan slide yang tajam. Memilih 100% memberikan detail JPEG maksimal setiap kali bobot byte menjadi sekunder.',
      },
      {
        question: 'Bisakah saya mengubah Warna Matte atau Kualitas setelah melihat hasil konversi pertama?',
        answer:
          'Ya. Pilih swatch matte lain atau geser slider kapan saja, lalu klik Konversi Ulang Semua untuk membuat ulang setiap file yang dimuat tanpa mengunggah ulang.',
      },
      {
        question: 'Apakah mengonversi PNG ke JPG menghapus chunk teks PNG yang tersemat seperti perangkat lunak pembuat atau komentar?',
        answer:
          'Ya. Menggambar piksel ke HTML5 Canvas menghapus blok tEXt, iTXt, dan profil ICC yang tersemat, menjaga JPG output tetap ramping dan bersih.',
      },
      {
        question: 'Bisakah saya memeriksa ketajaman tepi sebelum/sesudah pada tangkapan layar UI hasil konversi sebelum mengunduh?',
        answer:
          'Ya. Klik Bandingkan pada kartu mana pun untuk menyeret penampil terpisah melintasi label teks dan ikon terhadap PNG asli yang lossless.',
      },
      {
        question: 'Jenis file apa yang diterima halaman khusus PNG ke JPG ini?',
        answer:
          'Halaman ini memfilter dengan rapi file .png hingga 25 MB per file agar Anda tidak secara tidak sengaja meratakan input non-PNG. Untuk batch campuran yang berisi file WebP atau BMP, coba Pengonversi Gambar Massal.',
      },
      {
        question: 'Apakah pengonversi mendukung PNG interlaced (Adam7) yang transparan?',
        answer:
          'Ya. Decoder gambar native browser Anda membaca aliran PNG standar maupun interlaced dengan rapi sebelum melukis ke latar matte Canvas.',
      },
      {
        question: 'Apakah Windows Photos, macOS Preview, WhatsApp, dan printer lama bisa membuka JPG yang diekspor?',
        answer:
          'Ya. Output .jpg RGB baseline standar memiliki kompatibilitas terluas dari semua format gambar digital — di ponsel, browser, paket office, dan terminal cetak.',
      },
      {
        question: 'Apa nama file unduhan tunggal vs. nama file ZIP batch?',
        answer:
          'Unduhan tunggal mempertahankan nama file asli Anda yang sudah dibersihkan dengan ekstensi .jpg. Batch berisi 2 file atau lebih diekspor dengan rapi dan dibundel di dalam compressmypic_png_to_jpg.zip.',
      },
      {
        question: 'Bisakah saya mengonversi tangkapan layar PNG dari browser ponsel iOS atau Android dengan rapi?',
        answer:
          'Ya. Swatch matte, slider kualitas, pemeriksa perbandingan visual, dan ekspor ZIP bekerja langsung di Safari di iOS dan Chrome di Android tanpa perlu mengunduh aplikasi.',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },
  {
    slug: '/jpg-to-webp',
    name: 'JPG ke WebP',
    shortDescription: 'Ubah foto JPG menjadi WebP generasi terbaru agar situs lebih cepat & SEO lebih baik.',
    category: 'convert',
    seoTitle: 'Konverter JPG ke WebP Gratis Online',
    seoDescription:
      'Ubah foto JPG menjadi WebP modern gratis online. File lebih kecil, halaman lebih cepat, dan Core Web Vitals lebih baik, dengan penggeser kualitas dan ZIP.',
    h1: 'Konverter JPG ke WebP Online Gratis',
    subtitle:
      'Ubah foto JPG sehari-hari menjadi gambar WebP modern yang ringan dengan konverter JPG ke WebP gratis kami, yang berjalan sepenuhnya di browser Anda. Dibuat untuk blogger, pemilik toko, dan developer yang membutuhkan halaman lebih cepat dan Core Web Vitals lebih baik, alat ini mengonversi file JPG hingga 25 MB per file dengan kualitas pilihan Anda — 82% secara default — lengkap dengan pemrosesan batch dan unduhan ZIP sekali klik, dan tidak ada yang pernah diunggah.',
    howToSteps: [
      {
        title: 'Letakkan foto JPG hingga 25 MB per file',
        description:
          'Unggah satu atau beberapa foto .jpg atau .jpeg dari blog, toko, atau galeri kamera Anda ke area unggah.',
      },
      {
        title: 'Atur kualitas output WebP (20%–100%)',
        description:
          'Pertahankan 82% yang tajam sebagai default untuk foto, atau geser ke arah 20% untuk file yang sangat kecil dan 100% untuk detail maksimal, lalu klik Konversi Ulang Semua.',
      },
      {
        title: 'Periksa penghematan ukuran di setiap kartu',
        description:
          'Setiap hasil menampilkan ukuran JPG asli, ukuran WebP hasil konversi, dan persentase yang dihemat sehingga Anda langsung melihat keuntungannya.',
      },
      {
        title: 'Bandingkan ketajaman secara berdampingan',
        description:
          'Klik Bandingkan pada kartu mana pun untuk membuka tampilan terpisah dan memeriksa apakah teks, wajah, dan tepi masih terlihat tajam pada kualitas yang Anda pilih.',
      },
      {
        title: 'Unduh file WebP atau Unduh Semua (ZIP)',
        description:
          'Simpan file .webp satu per satu atau gabungkan seluruh batch ke dalam compressmypic_jpg_to_webp.zip dalam sekali klik.',
      },
    ],
    features: [
      {
        title: 'Skor PageSpeed & LCP Lebih Cepat',
        description: 'WebP adalah format web generasi terbaru yang direkomendasikan Lighthouse dan browser modern.',
      },
      {
        title: 'Kontrol Kualitas yang Bisa Diatur',
        description: 'Atur kompresi di mana saja dari 20% hingga 100% dan lihat hasilnya langsung di pratinjau.',
      },
      {
        title: 'Ekspor Batch ke ZIP',
        description: 'Optimalkan seluruh folder gambar blog atau e-commerce secara lokal dalam hitungan detik.',
      },
      {
        title: 'Tanpa Bolak-Balik ke Server',
        description: 'Memakai encoder WebP bawaan browser Anda — cepat, bisa offline, dan privat.',
      },
    ],
    faqs: [
      {
        question: 'Seberapa kecil file WebP dibandingkan foto yang sama dalam format JPG?',
        answer:
          'Pada kualitas visual yang sebanding, file WebP biasanya 25% hingga 35% lebih kecil daripada foto yang sama dalam format JPG, karena kompresi WebP memprediksi piksel dengan lebih efisien. Penghematan pastinya tergantung pada fotonya: lanskap yang detail menghemat lebih sedikit, sedangkan langit yang halus dan foto studio menghemat lebih banyak.',
      },
      {
        question: 'Mengapa Google merekomendasikan WebP untuk situs yang lebih cepat dan Core Web Vitals yang lebih baik?',
        answer:
          'Alat Lighthouse dan PageSpeed dari Google menandai gambar yang berat sebagai salah satu penyebab utama skor Largest Contentful Paint (LCP) yang lambat. Menyajikan foto yang sama sebagai WebP yang lebih ringan memangkas waktu unduh pada koneksi lambat, yang secara langsung memperbaiki LCP dan skor pengalaman yang dipakai Google sebagai sinyal peringkat.',
      },
      {
        question: 'Browser apa saja yang bisa membuka file WebP tanpa menginstal apa pun?',
        answer:
          'Semua browser modern membuka WebP secara bawaan: Chrome, Edge, Firefox, dan Safari di desktop, ditambah Chrome di Android dan Safari di iOS. Tidak perlu plugin atau aplikasi penampil, sehingga gambar WebP tampil langsung di halaman web, chat, dan sebagian besar penampil gambar modern.',
      },
      {
        question: 'Pengaturan kualitas apa yang sebaiknya saya pakai untuk foto JPG ke WebP di situs web?',
        answer:
          'Untuk foto situs web, 80% hingga 85% adalah titik ideal: gambar terlihat hampir sama dengan JPG aslinya tetapi jauh lebih kecil. Alat ini memakai default 82% tepat karena alasan itu, dan Anda bisa menaikkannya ke 90% atau lebih untuk gambar hero yang setiap detailnya penting.',
      },
      {
        question: 'Apakah mengubah JPG menjadi WebP akan mengubah dimensi foto?',
        answer:
          'Tidak. Konversi hanya mengubah wadah file dan kompresinya, sehingga WebP hasil ekspor mempertahankan 100% lebar dan tinggi piksel JPG aslinya. Jika Anda juga ingin dimensi yang lebih kecil, gunakan Ubah Ukuran Gambar setelahnya untuk ukuran piksel yang tepat.',
      },
      {
        question: 'Bisakah foto JPG mempertahankan transparansinya saat diubah menjadi WebP?',
        answer:
          'Tidak, karena file JPG standar tidak memiliki saluran transparansi yang bisa dipertahankan — setiap piksel dalam JPG sepenuhnya buram. Jika grafik sumber Anda memiliki latar belakang transparan, mulailah dari PNG dan gunakan konverter PNG ke WebP kami, yang mempertahankan saluran alpha sepenuhnya.',
      },
      {
        question: 'Apakah foto JPG saya diunggah ke server selama konversi?',
        answer:
          'Tidak pernah. Konversi berjalan di HTML5 Canvas dalam tab browser Anda sendiri, sehingga foto Anda dienkode secara lokal dan tidak pernah meninggalkan komputer atau ponsel Anda. Menutup tab akan menghapusnya dari memori browser.',
      },
      {
        question: 'Bisakah saya mengubah seluruh folder gambar blog JPG menjadi WebP sekaligus?',
        answer:
          'Ya. Letakkan beberapa file .jpg atau .jpeg hingga 25 MB per file ke dalam antrean, pilih satu pengaturan kualitas untuk seluruh batch, lalu unduh semuanya bersama-sama dalam compressmypic_jpg_to_webp.zip. Setiap file dikonversi secara terpisah, jadi satu file yang rusak tidak akan memblokir yang lain.',
      },
      {
        question: 'Apa yang terjadi pada data kamera EXIF dan tag GPS saat JPG menjadi WebP?',
        answer:
          'Menggambar piksel ke HTML5 Canvas menghapus data EXIF yang tertanam, termasuk koordinat GPS, model kamera, dan stempel waktu. Hal itu membuat file WebP hasil keluaran tetap ramping dan melindungi privasi Anda sebelum memublikasikan foto secara online.',
      },
      {
        question: 'Mengapa WebP hasil konversi kadang lebih besar daripada JPG aslinya?',
        answer:
          'JPG yang sangat kecil atau sudah sangat terkompresi bisa sedikit membesar saat dienkode ulang, terutama pada kualitas 100%, karena WebP membawa overhead wadahnya sendiri. Jika sebuah file membesar, turunkan kualitas ke arah 80% atau pertahankan JPG aslinya — kolom Perubahan pada setiap kartu menampilkan hasilnya dengan jujur.',
      },
      {
        question: 'Bisakah saya memakai file WebP hasil konversi di WordPress, Shopify, atau Wix?',
        answer:
          'Ya. WordPress, Shopify, Wix, Squarespace, dan sebagian besar pembangun situs modern menerima unggahan WebP secara langsung, dan browser menyajikannya tanpa pengaturan tambahan. Untuk tema atau plugin yang sangat lama yang menolak WebP, konversi kembali dengan alat WebP ke JPG kami.',
      },
      {
        question: 'Berapa ukuran maksimum file JPG yang diterima di sini?',
        answer:
          'Setiap file JPG atau JPEG boleh berukuran hingga 25 MB, yang mencakup foto kamera beresolusi tinggi dan tangkapan layar besar. Karena konversi terjadi di perangkat Anda, file besar diproses dengan kecepatan CPU lokal tanpa waktu tunggu unggahan.',
      },
      {
        question: 'Apakah konversi ke WebP berfungsi di browser ponsel?',
        answer:
          'Ya. Penggeser kualitas, antrean batch, penampil perbandingan, dan unduhan ZIP semuanya berfungsi di Safari pada iOS dan Chrome di Android, tanpa perlu menginstal aplikasi. Di ponsel, batch yang sangat besar hanya membutuhkan waktu sedikit lebih lama karena pekerjaan berjalan di prosesor ponsel.',
      },
      {
        question: 'Bagaimana cara memeriksa WebP hasil konversi masih terlihat tajam sebelum diunduh?',
        answer:
          'Klik Bandingkan pada kartu hasil mana pun untuk membuka penampil terpisah dan menyeret kursor melintasi foto guna memeriksa wajah, teks, dan tepi dibandingkan dengan JPG aslinya. Jika ada yang terlihat lembut, naikkan penggeser kualitas lalu klik Konversi Ulang Semua.',
      },
      {
        question: 'Bisakah saya mengubah kualitas setelah konversi pertama tanpa mengunggah ulang?',
        answer:
          'Ya. Geser penggeser kualitas ke nilai baru kapan saja lalu klik Konversi Ulang Semua untuk membuat ulang setiap file yang dimuat dengan pengaturan baru. File yang Anda unggah tetap berada di antrean, jadi tidak perlu menyeretnya lagi.',
      },
      {
        question: 'Apakah WebP lebih baik daripada JPG untuk foto produk di toko online?',
        answer:
          'Untuk foto produk yang ditampilkan di situs web, ya: WebP pada 80% hingga 85% terlihat sama seperti JPG tetapi dimuat jauh lebih cepat, yang membantu pembeli maupun peringkat pencarian. Pertahankan JPG hanya jika marketplace, lab cetak, atau pembeli secara eksplisit memintanya.',
      },
      {
        question: 'Nama file apa yang dipertahankan file WebP yang diunduh?',
        answer:
          'Unduhan tunggal mempertahankan nama file asli Anda yang sudah dibersihkan dengan ekstensi .webp, sehingga photo_01.jpg menjadi photo_01.webp. Batch berisi dua file atau lebih diekspor tergabung dalam compressmypic_jpg_to_webp.zip.',
      },
      {
        question: 'Bisakah saya mengubah tangkapan layar JPG berisi teks menjadi WebP tanpa huruf yang buram?',
        answer:
          'Ya, pada kualitas 85% hingga 90%, teks tangkapan layar tetap tajam karena WebP mempertahankan tepi kontras tinggi dengan baik. Menurun di bawah 70% bisa melembutkan huruf kecil, jadi periksa penampil Bandingkan dan naikkan kualitas jika teks terlihat kabur.',
      },
      {
        question: 'Apakah konverter ini berfungsi offline setelah halaman dimuat?',
        answer:
          'Ya. Setelah halaman dimuat di browser Anda, konversi berjalan sepenuhnya dalam JavaScript lokal dan HTML5 Canvas tanpa panggilan ke server. Anda hanya membutuhkan internet lagi untuk memuat halaman itu sendiri atau mengunduh file yang sudah selesai.',
      },
      {
        question: 'Kapan sebaiknya saya mempertahankan JPG daripada mengubahnya ke WebP?',
        answer:
          'Pertahankan JPG jika file harus dibuka di perangkat lunak lama, lampiran email, lab cetak, atau portal unggah yang masih menolak WebP. Untuk apa pun yang diterbitkan di situs web modern, WebP adalah pilihan yang lebih baik — dan Anda selalu bisa mengubahnya kembali dengan WebP ke JPG.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'WebP ke JPG',
    shortDescription: 'Ubah unduhan WebP kembali menjadi file JPG yang diterima di mana saja.',
    category: 'convert',
    seoTitle: 'Konverter WebP ke JPG Gratis Online',
    seoDescription:
      'Ubah gambar WebP menjadi JPG universal gratis online di browser Anda. Pilih warna matte untuk area transparan, atur kualitas, dan unduh batch sebagai ZIP.',
    h1: 'Konverter WebP ke JPG Online Gratis',
    subtitle:
      'Ubah gambar .webp yang diunduh menjadi file .jpg klasik yang terbuka di aplikasi, portal, atau printer mana pun dengan konverter WebP ke JPG gratis kami di browser Anda. Dibuat untuk siapa pun yang menerima file WebP dari situs web atau messenger yang ditolak editor, paket office, atau formulir unggah mereka, alat ini mengonversi file WebP hingga 25 MB per file dengan kualitas 88% secara default, lengkap dengan pemilih warna matte untuk area transparan dan ekspor batch ZIP.',
    howToSteps: [
      {
        title: 'Letakkan gambar WebP hingga 25 MB per file',
        description:
          'Unggah satu atau beberapa file .webp yang disimpan dari situs web, chat, atau unduhan ke area unggah.',
      },
      {
        title: 'Pilih warna matte untuk area transparan',
        description:
          'Pilih Putih (#ffffff), Hitam (#000000), Abu-abu Terang (#f8fafc), atau warna hex kustom apa pun, karena JPG tidak bisa menyimpan transparansi.',
      },
      {
        title: 'Atur kualitas output JPG (20%–100%)',
        description:
          'Pertahankan 88% yang tajam sebagai default atau geser ke arah 20% untuk file yang sangat kecil dan 100% untuk detail maksimal, lalu klik Konversi Ulang Semua.',
      },
      {
        title: 'Bandingkan JPG dengan WebP aslinya',
        description:
          'Klik Bandingkan pada kartu mana pun untuk memeriksa tepi dan teks di penampil terpisah sebelum Anda menyimpan apa pun.',
      },
      {
        title: 'Unduh file JPG atau Unduh Semua (ZIP)',
        description:
          'Simpan file .jpg satu per satu atau gabungkan seluruh batch ke dalam compressmypic_webp_to_jpg.zip dalam sekali klik.',
      },
    ],
    features: [
      {
        title: 'Memperbaiki Penolakan Perangkat Lunak Lama',
        description: 'Ubah gambar WebP dengan mudah untuk portal, printer, atau aplikasi lama yang hanya menerima JPG.',
      },
      {
        title: 'Isian Matte yang Aman untuk Transparansi',
        description: 'WebP transparan diratakan dengan rapi ke warna putih, hitam, atau warna latar hex apa pun.',
      },
      {
        title: 'Pengodean Ulang Berkualitas Tinggi',
        description: 'Kualitas default 88% menjaga detail tetap tajam dengan pembengkakan ukuran file yang minimal.',
      },
      {
        title: 'Privasi 100% di Browser',
        description: 'Tanpa antrean cloud atau unggahan ke server — berjalan langsung di perangkat Anda.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa beberapa aplikasi, printer, dan formulir unggah menolak file .webp?',
        answer:
          'WebP adalah format yang lebih baru, dan banyak program desktop lama, kios cetak, versi Microsoft Office, dan formulir unggah pemerintah dibuat sebelum WebP ada, sehingga mereka hanya mengenali JPG dan PNG. Mengubah WebP menjadi JPG membuat gambar langsung bisa dibuka di mana saja tanpa meminta siapa pun menginstal apa pun.',
      },
      {
        question: 'Apa yang terjadi pada bagian transparan WebP saat menjadi JPG?',
        answer:
          'JPG tidak memiliki saluran transparansi alpha, sehingga piksel transparan harus diisi dengan warna solid selama konversi. Alat ini mengisinya dengan warna matte pilihan Anda — putih secara default — sehingga logo dan stiker mendapatkan latar belakang solid yang bersih, bukan kotak hitam.',
      },
      {
        question: 'Bisakah saya memilih warna latar belakang di balik stiker WebP transparan?',
        answer:
          'Ya. Di bawah Warna Matte Latar Belakang Transparan, pilih Putih, Hitam, atau Abu-abu Terang, atau klik contoh warna untuk memasukkan nilai hex kustom apa pun. Pilihan berlaku saat Anda mengklik Konversi Ulang Semua, sehingga Anda bisa mencoba berbagai latar belakang sebelum mengunduh.',
      },
      {
        question: 'Apakah mengubah WebP menjadi JPG menurunkan kualitas?',
        answer:
          'Sedikit penurunan tidak bisa dihindari karena JPG mengodekan ulang piksel dengan kompresi lossy, tetapi pada default 88% perbedaannya hampir tidak terlihat untuk foto dan tangkapan layar. Jika WebP aslinya sudah berkualitas rendah, konversi tidak bisa mengembalikan detail yang memang tidak pernah ada.',
      },
      {
        question: 'Apakah JPG akan mempertahankan dimensi piksel yang sama dengan WebP?',
        answer:
          'Ya. Setiap .jpg hasil konversi mempertahankan 100% lebar dan tinggi persis WebP aslinya, jadi tidak ada yang dipotong atau diubah ukurannya. Gunakan Ubah Ukuran Gambar setelahnya jika Anda juga membutuhkan dimensi yang lebih kecil.',
      },
      {
        question: 'Apa yang harus saya lakukan dengan file WebP animasi di sini?',
        answer:
          'WebP animasi diekspor sebagai JPG diam, karena format JPG tidak bisa menyimpan gerakan. Anda mendapatkan satu bingkai tajam dari animasi, yang cocok untuk thumbnail dan dokumen — untuk versi bergeraknya, simpan file WebP aslinya.',
      },
      {
        question: 'Apakah file WebP saya diunggah ke mana pun selama konversi?',
        answer:
          'Tidak. Seluruh konversi berjalan di HTML5 Canvas dalam tab browser Anda sendiri, sehingga gambar Anda tidak pernah dikirim ke server, disimpan, atau dilihat orang lain. Menutup tab akan menghapusnya dari memori browser.',
      },
      {
        question: 'Bisakah saya mengubah banyak unduhan WebP menjadi JPG dalam satu batch?',
        answer:
          'Ya. Letakkan beberapa file .webp hingga 25 MB per file ke dalam antrean, pilih satu warna matte dan kualitas untuk seluruh batch, lalu unduh semuanya bersama-sama dalam compressmypic_webp_to_jpg.zip. Setiap file dikonversi secara terpisah.',
      },
      {
        question: 'Berapa file WebP terbesar yang diterima konverter ini?',
        answer:
          'Setiap file WebP boleh berukuran hingga 25 MB, yang mencakup unduhan beresolusi tinggi dan tangkapan layar besar. Karena konversi berjalan di perangkat Anda, file besar diproses dengan kecepatan CPU lokal tanpa waktu tunggu unggahan.',
      },
      {
        question: 'Bagaimana cara mendapatkan latar belakang putih bersih, bukan kotak hitam di balik logo?',
        answer:
          'Pilih Putih (#ffffff) di bawah Warna Matte Latar Belakang Transparan sebelum mengonversi — putih adalah default, sehingga sebagian besar logo sudah keluar dengan bersih. Jika sebuah file terkonversi dengan warna yang salah, cukup ubah contoh warna lalu klik Konversi Ulang Semua untuk membuatnya ulang.',
      },
      {
        question: 'Mengapa file JPG kadang lebih besar daripada WebP aslinya?',
        answer:
          'WebP mengompresi lebih efisien daripada JPG, sehingga WebP kecil yang dienkode ulang sebagai JPG pada 88% bisa berakhir lebih besar daripada sumbernya. Hal itu sudah diduga: Anda menukar sedikit ukuran file dengan kompatibilitas universal. Menurunkan kualitas ke arah 75% biasanya membuat JPG kembali lebih kecil daripada ukuran aslinya.',
      },
      {
        question: 'Bisakah saya membuka JPG hasil konversi di Microsoft Word, PowerPoint, atau Photoshop?',
        answer:
          'Ya. Output .jpg RGB baseline standar terbuka di hampir semua paket office, editor, browser, dan alur kerja cetak, termasuk versi lama yang tidak pernah mengenal WebP. Dukungan universal inilah alasan utama untuk mengonversi.',
      },
      {
        question: 'Apakah konverter menghapus metadata dari file WebP?',
        answer:
          'Ya. Menggambar piksel ke HTML5 Canvas menghapus data EXIF, XMP, dan profil ICC yang tertanam, sehingga JPG hasil keluaran tetap ramping dan bebas dari detail lokasi atau kamera yang tersembunyi.',
      },
      {
        question: 'Bagaimana cara memeriksa JPG terlihat benar sebelum mengunduhnya?',
        answer:
          'Klik Bandingkan pada kartu hasil mana pun untuk membuka penampil terpisah dan menyeret kursor melintasi gambar guna memeriksa tepi, teks, dan warna dibandingkan dengan WebP aslinya. Setiap kartu juga menampilkan ukuran asli dan ukuran hasil konversi, sehingga kejutan terlihat sebelum Anda menyimpan.',
      },
      {
        question: 'Bisakah saya mengubah warna matte atau kualitas setelah mengonversi?',
        answer:
          'Ya. Pilih contoh warna matte lain atau geser penggeser kualitas kapan saja lalu klik Konversi Ulang Semua untuk membuat ulang setiap file yang dimuat tanpa mengunggah ulang. File WebP asli Anda tetap berada di antrean sampai Anda menghapusnya.',
      },
      {
        question: 'Nama file apa yang dipertahankan JPG yang diunduh?',
        answer:
          'Unduhan tunggal mempertahankan nama file asli Anda yang sudah dibersihkan dengan ekstensi .jpg, sehingga banner.webp menjadi banner.jpg. Batch berisi dua file atau lebih diekspor tergabung dalam compressmypic_webp_to_jpg.zip.',
      },
      {
        question: 'Apakah WebP ke JPG berfungsi di browser iPhone dan Android?',
        answer:
          'Ya. Pemilih matte, penggeser kualitas, penampil perbandingan, dan unduhan ZIP semuanya berfungsi di Safari pada iOS dan Chrome di Android tanpa perlu menginstal aplikasi. Batch besar hanya membutuhkan waktu sedikit lebih lama di prosesor ponsel.',
      },
      {
        question: 'Kapan WebP ke JPG menjadi pilihan yang tepat, bukan WebP ke PNG?',
        answer:
          'Pilih JPG jika Anda membutuhkan file terkecil yang kompatibel secara luas — lampiran email, dokumen Office, portal unggah, dan printer. Pilih PNG jika Anda harus mempertahankan transparansi atau membutuhkan kualitas lossless yang sempurna piksel demi piksel untuk pengeditan.',
      },
      {
        question: 'Mengapa tangkapan layar WebP dengan teks tajam terlihat lebih lembut setelah konversi?',
        answer:
          'JPEG memakai subsampling chroma, yang sedikit melembutkan tepi kontras tinggi seperti huruf merah atau biru di atas putih. Menaikkan kualitas ke 92% atau 95% menjaga teks tangkapan layar tetap tajam, dan penampil Bandingkan memungkinkan Anda memverifikasinya sebelum mengunduh.',
      },
      {
        question: 'Bisakah saya mengonversi gambar WebP yang disimpan situs web tanpa ekstensi file?',
        answer:
          'Tidak langsung — halaman ini menyaring input berdasarkan ekstensi .webp dan tipe MIME WebP, jadi ganti nama file terlebih dahulu agar berakhiran .webp. Jika file tersebut sebenarnya JPG atau PNG yang salah diberi nama oleh situs, gunakan konverter yang sesuai.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'PNG ke WebP',
    shortDescription: 'Ubah grafik PNG transparan menjadi WebP transparan yang ringkas.',
    category: 'convert',
    seoTitle: 'Konverter PNG ke WebP Gratis Online',
    seoDescription:
      'Ubah PNG menjadi WebP gratis online sambil mempertahankan transparansi penuh. Perkecil logo, ikon, dan tangkapan layar dengan penggeser kualitas dan ZIP.',
    h1: 'Konverter PNG ke WebP Online Gratis',
    subtitle:
      'Perkecil logo, ikon, dan tangkapan layar PNG transparan yang berat menjadi file WebP yang ringkas dengan konverter PNG ke WebP gratis kami, langsung di browser Anda. Dibuat untuk developer web dan desainer yang membutuhkan grafik transparan yang dimuat cepat, alat ini mengonversi file PNG hingga 25 MB per file dengan kualitas 85% secara default sambil mempertahankan saluran alpha sepenuhnya, lengkap dengan pemrosesan batch dan unduhan ZIP.',
    howToSteps: [
      {
        title: 'Letakkan grafik PNG hingga 25 MB per file',
        description:
          'Unggah logo .png transparan, ikon, tangkapan layar, atau potongan produk ke area unggah.',
      },
      {
        title: 'Atur kualitas output WebP (20%–100%)',
        description:
          'Pertahankan 85% sebagai default untuk grafik transparan yang tajam, atau geser ke arah 20% untuk file yang sangat kecil dan 100% untuk detail maksimal, lalu klik Konversi Ulang Semua.',
      },
      {
        title: 'Periksa transparansi dan penghematan ukuran',
        description:
          'Setiap kartu menampilkan ukuran PNG asli, ukuran WebP baru, dan persentase yang dihemat, dengan transparansi ditampilkan pada pratinjau papan catur.',
      },
      {
        title: 'Bandingkan tepi dan bayangan secara berdampingan',
        description:
          'Klik Bandingkan pada kartu mana pun untuk memeriksa tepi semi-transparan, gradien, dan bayangan jatuh di penampil terpisah.',
      },
      {
        title: 'Unduh file WebP atau Unduh Semua (ZIP)',
        description:
          'Simpan file .webp satu per satu atau gabungkan batch ke dalam compressmypic_png_to_webp.zip dalam sekali klik.',
      },
    ],
    features: [
      {
        title: 'Transparansi Alpha Penuh Terjaga',
        description: 'Berbeda dengan JPG, WebP mempertahankan tepi semi-transparan yang bersih dan bayangan jatuh dari PNG Anda.',
      },
      {
        title: 'Aset hingga 70% Lebih Kecil',
        description: 'Ganti gambar hero dan potongan PNG bermegabyte dengan file WebP yang ramping untuk situs yang lebih cepat.',
      },
      {
        title: 'Tampilan Terpisah Sebelum/Sesudah',
        description: 'Periksa tepi yang dihaluskan dan gradien secara berdampingan sebelum mengunduh.',
      },
      {
        title: 'Pemrosesan Batch + ZIP',
        description: 'Ubah seluruh set ikon dan produk secara lokal tanpa batas unggahan.',
      },
    ],
    faqs: [
      {
        question: 'Apakah PNG ke WebP benar-benar mempertahankan latar belakang transparan?',
        answer:
          'Ya. Pengodean WebP melalui HTML5 Canvas mempertahankan saluran alpha 8-bit sepenuhnya, sehingga piksel yang sepenuhnya transparan tetap transparan dan tepi semi-transparan, bayangan lembut, serta kurva yang dihaluskan mempertahankan perpaduan halusnya. Pratinjau hasil menampilkan transparansi pada pola papan catur sehingga Anda bisa langsung memverifikasinya.',
      },
      {
        question: 'Seberapa kecil WebP dibandingkan PNG untuk gambar yang sama?',
        answer:
          'Tergantung kompleksitas visualnya, mengubah PNG menjadi WebP 85% umumnya memangkas ukuran file sebesar 50% hingga 80%. PNG fotografis dan tangkapan layar besar paling banyak menghemat, sedangkan ikon datar kecil dengan sedikit warna mungkin menghemat lebih sedikit — kolom Perubahan pada setiap kartu menunjukkan hasil pastinya.',
      },
      {
        question: 'Apakah bayangan semi-transparan dan tepi lembut bertahan setelah konversi?',
        answer:
          'Ya. WebP menyimpan nilai alpha 8-bit yang sama seperti PNG, sehingga bayangan jatuh, cahaya, dan tepi yang dilembutkan tersusun persis seperti pada aslinya. Gunakan penampil Bandingkan untuk memperbesar tepi dan memastikan kelembutannya terlihat sama sebelum mengunduh.',
      },
      {
        question: 'Pengaturan kualitas apa yang paling cocok untuk logo PNG transparan?',
        answer:
          'Default 85% ideal untuk sebagian besar logo dan ikon: tepinya tetap tajam sementara file menyusut drastis. Untuk pekerjaan kelas cetak atau seni garis yang sangat halus, naikkan kualitas ke 90% atau 95%; menurun di bawah 70% bisa membuat garis tipis dan teks kecil terlihat kasar.',
      },
      {
        question: 'Bagaimana cara mengubah seluruh set ikon dari PNG menjadi WebP sekaligus?',
        answer:
          'Letakkan beberapa file .png hingga 25 MB per file ke dalam antrean, pilih satu pengaturan kualitas untuk seluruh batch, lalu unduh semuanya bersama-sama dalam compressmypic_png_to_webp.zip. Setiap ikon dikonversi secara terpisah, jadi satu file yang rusak tidak akan memblokir yang lain.',
      },
      {
        question: 'Apakah file PNG diunggah ke server saat diubah menjadi WebP?',
        answer:
          'Tidak. Konversi berjalan di HTML5 Canvas dalam tab browser Anda sendiri, sehingga logo, tangkapan layar, dan aset desain Anda tidak pernah meninggalkan komputer Anda. Menutup tab akan menghapusnya dari memori browser.',
      },
      {
        question: 'Apakah mengubah PNG menjadi WebP mengubah dimensi gambar?',
        answer:
          'Tidak. WebP hasil ekspor mempertahankan 100% lebar dan tinggi piksel PNG aslinya — hanya format file dan kompresinya yang berubah. Gunakan Ubah Ukuran Gambar setelahnya jika Anda juga membutuhkan dimensi yang lebih kecil untuk web.',
      },
      {
        question: 'Berapa ukuran PNG maksimum yang diterima di sini?',
        answer:
          'Setiap file PNG boleh berukuran hingga 25 MB, yang mencakup tangkapan layar besar, tangkapan Retina, dan render produk beresolusi tinggi. Karena konversi berjalan di perangkat Anda, file besar diproses dengan kecepatan CPU lokal tanpa waktu tunggu unggahan.',
      },
      {
        question: 'Mengapa WebP hasil konversi saya lebih besar daripada PNG aslinya?',
        answer:
          'PNG datar kecil dengan sedikit warna — seperti ikon dua warna — sudah sangat efisien, dan pengodean WebP lossy bisa menambah overhead pada file tersebut. Jika sebuah file membesar, periksa kolom Perubahan dan pertahankan PNG aslinya untuk aset itu; WebP unggul pada grafik fotografis dan kompleks.',
      },
      {
        question: 'Bisakah situs web memakai file WebP hasil konversi secara langsung?',
        answer:
          'Ya. Semua browser modern menampilkan WebP secara bawaan, dan WordPress, Shopify, Wix, serta sebagian besar pembangun situs menerima unggahan WebP. Logo WebP transparan berfungsi persis seperti PNG transparan di header, tombol, dan galeri produk.',
      },
      {
        question: 'Apa yang terjadi pada metadata PNG dan potongan teks selama konversi?',
        answer:
          'Menggambar piksel ke HTML5 Canvas menghapus potongan teks PNG yang tertanam, catatan perangkat lunak pembuat, dan profil ICC. File WebP hasil keluaran tetap ramping dan bebas dari metadata tersembunyi, yang ideal untuk memublikasikan aset secara online.',
      },
      {
        question: 'Bagaimana cara memverifikasi transparansi terjaga sebelum mengunduh?',
        answer:
          'Thumbnail hasil menampilkan area transparan pada pola papan catur, dan tombol Bandingkan membuka penampil terpisah tempat Anda bisa menyeret kursor melintasi gambar untuk memastikan tepinya berpadu dengan halus. Jika latar belakang terlihat solid, bukan kotak-kotak, PNG sumbernya tidak memiliki transparansi.',
      },
      {
        question: 'Bisakah saya mengubah kualitas setelah mengonversi tanpa mengunggah lagi?',
        answer:
          'Ya. Geser penggeser kualitas ke nilai baru kapan saja lalu klik Konversi Ulang Semua untuk membuat ulang setiap file yang dimuat dengan pengaturan baru. PNG yang Anda unggah tetap berada di antrean, jadi tidak perlu menyeretnya lagi.',
      },
      {
        question: 'Apakah WebP lebih baik daripada PNG untuk gambar hero situs web?',
        answer:
          'Untuk gambar hero fotografis atau kompleks, ya: WebP pada 85% terlihat sama seperti PNG tetapi dimuat jauh lebih cepat. PNG tetap unggul untuk ikon datar kecil, pixel art, atau aset apa pun yang kualitas lossless secara matematis menjadi syarat mutlak.',
      },
      {
        question: 'Apakah PNG ke WebP berfungsi di browser seluler?',
        answer:
          'Ya. Penggeser kualitas, antrean batch, penampil perbandingan, dan unduhan ZIP semuanya berfungsi di Safari pada iOS dan Chrome di Android tanpa perlu menginstal aplikasi. Batch besar hanya membutuhkan waktu sedikit lebih lama di prosesor ponsel.',
      },
      {
        question: 'Nama file apa yang didapatkan file WebP hasil konversi?',
        answer:
          'Unduhan tunggal mempertahankan nama file asli Anda yang sudah dibersihkan dengan ekstensi .webp, sehingga logo.png menjadi logo.webp. Batch berisi dua file atau lebih diekspor tergabung dalam compressmypic_png_to_webp.zip.',
      },
      {
        question: 'Bisakah saya mengubah tangkapan layar PNG berisi teks menjadi WebP tanpa huruf yang buram?',
        answer:
          'Ya, pada kualitas 85% hingga 90%, teks tangkapan layar tetap tajam karena WebP mempertahankan tepi kontras tinggi dengan baik. Menurun di bawah 70% bisa melembutkan huruf kecil, jadi periksa penampil Bandingkan dan naikkan kualitas jika teks terlihat kabur.',
      },
      {
        question: 'Apakah alat ini mempertahankan profil warna (ICC) PNG di WebP?',
        answer:
          'Tidak. Pengodean ulang melalui Canvas menghapus profil ICC yang tertanam dan merender warna dalam sRGB standar, yang dipakai browser untuk tampilan web. Untuk sebagian besar grafik layar, perbedaan yang terlihat bisa diabaikan, tetapi pekerjaan warna yang kritis untuk cetak sebaiknya tetap dalam format aslinya.',
      },
      {
        question: 'Kapan sebaiknya saya memilih PNG ke WebP, bukan PNG ke JPG?',
        answer:
          'Pilih WebP kapan pun gambar harus tetap transparan atau dimuat cepat di situs web. Pilih JPG hanya jika tujuannya — klien email, dokumen Office, atau portal unggah lama — tidak bisa membuka WebP dan Anda bersedia menukar transparansi dengan latar belakang solid.',
      },
      {
        question: 'Bisakah PNG interlaced diubah menjadi WebP di sini?',
        answer:
          'Ya. Dekoder gambar bawaan browser Anda membaca aliran PNG standar maupun interlaced (Adam7) dengan bersih sebelum menggambarnya ke Canvas, sehingga file interlaced dikonversi persis seperti PNG biasa.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'WebP ke PNG',
    shortDescription: 'Ubah gambar WebP menjadi PNG lossless dengan transparansi yang utuh.',
    category: 'convert',
    seoTitle: 'Konverter WebP ke PNG Gratis Online',
    seoDescription:
      'Ubah WebP menjadi PNG lossless gratis online di browser Anda. Transparansi penuh tetap utuh, dimensi piksel tidak berubah, dan batch diekspor sebagai satu ZIP.',
    h1: 'Konverter WebP ke PNG Online Gratis',
    subtitle:
      'Ubah unduhan WebP menjadi file PNG lossless yang universal dengan konverter WebP ke PNG gratis kami, sepenuhnya di browser Anda. Dibuat untuk desainer, editor, dan siapa pun yang aplikasi atau percetakannya menolak WebP, alat ini mengonversi file WebP hingga 25 MB per file tanpa kehilangan kualitas sama sekali dan dengan transparansi alpha penuh, ditambah pemrosesan batch dan unduhan ZIP.',
    howToSteps: [
      {
        title: 'Letakkan file WebP hingga 25 MB per file',
        description:
          'Unggah satu atau beberapa gambar .webp dari unduhan, chat, atau situs web ke area unggah.',
      },
      {
        title: 'Tunggu konversi PNG lossless',
        description:
          'Setiap WebP dirender ke kanvas transparan dan diekspor sebagai PNG lossless secara otomatis — tidak ada penggeser kualitas karena PNG bersifat lossless.',
      },
      {
        title: 'Periksa transparansi pada pratinjau',
        description:
          'Area transparan ditampilkan dengan latar belakang papan catur, dan setiap kartu mencantumkan ukuran file asli dan hasil konversi.',
      },
      {
        title: 'Bandingkan PNG dengan WebP aslinya',
        description:
          'Klik Bandingkan pada kartu mana pun untuk memeriksa tepi, teks, dan transparansi di penampil terpisah.',
      },
      {
        title: 'Unduh file PNG atau Unduh Semua (ZIP)',
        description:
          'Simpan file .png satu per satu atau gabungkan batch ke dalam compressmypic_webp_to_png.zip dalam sekali klik.',
      },
    ],
    features: [
      {
        title: 'Transparansi Alpha Tetap Utuh',
        description: 'Logo dan stiker WebP transparan tetap transparan dengan bersih di PNG hasilnya.',
      },
      {
        title: 'Dukungan Editor Universal',
        description: 'Buka PNG hasil konversi di alat desain, deck presentasi, atau portal unggah mana pun tanpa masalah kompatibilitas WebP.',
      },
      {
        title: 'Dukungan Antrean Batch',
        description: 'Ubah beberapa unduhan WebP menjadi PNG dalam sekali klik dan ekspor satu ZIP.',
      },
      {
        title: 'Pemrosesan Privat di Perangkat',
        description: 'File tidak pernah meninggalkan perangkat Anda — konversi terjadi di memori browser lokal.',
      },
    ],
    faqs: [
      {
        question: 'Apakah mengubah WebP menjadi PNG benar-benar lossless?',
        answer:
          'Ya. PNG menyimpan setiap piksel yang didekode persis seperti yang dibaca browser dari WebP, tanpa kehilangan kompresi lebih lanjut. Satu-satunya batas kualitas adalah kompresi yang sudah diterapkan WebP aslinya sendiri — alat ini tidak pernah menambah kerusakan lossy putaran kedua.',
      },
      {
        question: 'Apakah logo WebP transparan tetap transparan sebagai PNG?',
        answer:
          'Ya. Saluran alpha penuh terbawa, sehingga piksel transparan tetap transparan dan tepi semi-transparan mempertahankan perpaduan halusnya. Thumbnail hasil menampilkan transparansi pada pola papan catur sehingga Anda bisa memastikannya sebelum mengunduh.',
      },
      {
        question: 'Mengapa output PNG lebih besar daripada WebP yang saya unggah?',
        answer:
          'PNG memakai kompresi DEFLATE lossless, sedangkan WebP memakai kompresi modern yang jauh lebih agresif, sehingga piksel yang sama membutuhkan lebih banyak byte sebagai PNG. File yang lebih besar adalah harga jujur dari kompatibilitas universal dan nol kehilangan kualitas lebih lanjut.',
      },
      {
        question: 'Bisakah saya mengonversi WebP animasi menjadi PNG di sini?',
        answer:
          'WebP animasi diekspor sebagai PNG diam dari bingkai pertamanya, karena PNG tidak bisa menyimpan gerakan. Bingkai diam itu cocok untuk thumbnail, dokumen, dan stiker — untuk versi bergeraknya, simpan file WebP aslinya.',
      },
      {
        question: 'Apakah PNG akan mempertahankan lebar dan tinggi yang sama dengan WebP?',
        answer:
          'Ya. Setiap .png hasil konversi mempertahankan 100% dimensi piksel persis WebP aslinya, jadi tidak ada yang dipotong atau diubah ukurannya. Gunakan Ubah Ukuran Gambar setelahnya jika Anda juga membutuhkan dimensi yang lebih kecil.',
      },
      {
        question: 'Apakah file WebP diunggah ke server selama konversi?',
        answer:
          'Tidak. Konversi berjalan di HTML5 Canvas dalam tab browser Anda sendiri, sehingga gambar Anda tidak pernah dikirim ke server, disimpan, atau dilihat orang lain. Menutup tab akan menghapusnya dari memori browser.',
      },
      {
        question: 'Bisakah saya mengonversi sejumlah gambar WebP menjadi PNG sekaligus?',
        answer:
          'Ya. Letakkan beberapa file .webp hingga 25 MB per file ke dalam antrean lalu unduh semuanya bersama-sama dalam compressmypic_webp_to_png.zip. Setiap file dikonversi secara terpisah, jadi satu file yang rusak tidak akan memblokir yang lain.',
      },
      {
        question: 'Seberapa besar satu file WebP di sini?',
        answer:
          'Setiap file WebP boleh berukuran hingga 25 MB, yang mencakup unduhan beresolusi tinggi dan tangkapan layar besar. Karena konversi berjalan di perangkat Anda, file besar diproses dengan kecepatan CPU lokal tanpa waktu tunggu unggahan.',
      },
      {
        question: 'Apakah ada penggeser kualitas untuk WebP ke PNG?',
        answer:
          'Tidak, dan memang tidak dibutuhkan: PNG adalah format lossless, sehingga tidak ada kompromi kualitas versus ukuran yang perlu diatur. Alat ini menampilkan catatan Pengodean PNG Lossless sebagai pengganti penggeser, dan setiap piksel dipertahankan secara persis.',
      },
      {
        question: 'Di mana saya bisa memakai file PNG hasil konversi?',
        answer:
          'Di mana pun PNG diterima: Photoshop, Figma, Canva, PowerPoint, Word, percetakan, dan portal unggah yang menolak WebP. PNG adalah format raster yang paling universal untuk diedit, dan itulah alasan konversi ini ada.',
      },
      {
        question: 'Apakah konverter mempertahankan metadata WebP seperti EXIF?',
        answer:
          'Tidak. Menggambar piksel ke HTML5 Canvas menghapus data EXIF, XMP, dan profil ICC yang tertanam, sehingga PNG hasil keluaran tetap ramping dan bebas dari detail lokasi atau kamera yang tersembunyi.',
      },
      {
        question: 'Bagaimana cara memastikan transparansi bertahan sebelum mengunduh?',
        answer:
          'Thumbnail hasil menampilkan area transparan dengan latar belakang papan catur, dan tombol Bandingkan membuka penampil terpisah tempat Anda bisa menyeret kursor melintasi gambar untuk memastikan tepinya berpadu dengan halus. Jika latar belakang terlihat solid, WebP sumbernya tidak memiliki transparansi.',
      },
      {
        question: 'Bisakah saya mengubah tangkapan layar WebP berisi teks menjadi PNG tanpa kehilangan kualitas?',
        answer:
          'Ya. Karena PNG bersifat lossless, teks tangkapan layar, label UI, dan garis halus tetap sempurna piksel demi piksel — lebih tajam daripada pengodean ulang JPG mana pun. Hal itu menjadikan alat ini pilihan yang tepat saat tangkapan layar harus diedit atau dicetak nanti.',
      },
      {
        question: 'Nama file apa yang dipertahankan unduhan PNG?',
        answer:
          'Unduhan tunggal mempertahankan nama file asli Anda yang sudah dibersihkan dengan ekstensi .png, sehingga sticker.webp menjadi sticker.png. Batch berisi dua file atau lebih diekspor tergabung dalam compressmypic_webp_to_png.zip.',
      },
      {
        question: 'Apakah WebP ke PNG berfungsi di ponsel?',
        answer:
          'Ya. Zona unggah, antrean batch, penampil perbandingan, dan unduhan ZIP semuanya berfungsi di Safari pada iOS dan Chrome di Android tanpa perlu menginstal aplikasi. Batch besar hanya membutuhkan waktu sedikit lebih lama di prosesor ponsel.',
      },
      {
        question: 'Kapan sebaiknya saya memilih WebP ke PNG, bukan WebP ke JPG?',
        answer:
          'Pilih PNG jika Anda harus mempertahankan transparansi atau membutuhkan kualitas lossless yang sempurna piksel demi piksel untuk pengeditan, desain, atau cetak. Pilih JPG jika Anda membutuhkan file terkecil yang kompatibel secara luas dan bisa menerima latar belakang solid serta sedikit kehilangan kompresi.',
      },
      {
        question: 'Bisakah file WebP tanpa ekstensi dikonversi?',
        answer:
          'Tidak langsung — halaman ini menyaring input berdasarkan ekstensi .webp dan tipe MIME WebP, jadi ganti nama file terlebih dahulu agar berakhiran .webp. Jika file tersebut sebenarnya JPG atau PNG yang salah diberi nama oleh situs, gunakan konverter yang sesuai.',
      },
      {
        question: 'Mengapa seorang desainer membutuhkan PNG, bukan WebP?',
        answer:
          'Alat desain, editor berbasis layer, dan alur kerja cetak sering membutuhkan PNG untuk mask, seleksi, dan overlay transparan yang tidak bisa disediakan WebP dalam alur mereka. PNG juga menjamin setiap pengeditan berikutnya dimulai dari piksel yang persis, bukan dari dekode lossy.',
      },
      {
        question: 'Apakah alat ini mendukung file WebP dengan pengodean lossless?',
        answer:
          'Ya. File WebP lossless didekode dengan bersih di browser dan dienkode ulang sebagai PNG lossless dengan setiap piksel terjaga. Terlepas dari apakah WebP sumbernya lossy atau lossless, output PNG tidak menambah kehilangan kualitas lebih lanjut.',
      },
      {
        question: 'Apa yang terjadi jika file WebP rusak atau bukan WebP asli?',
        answer:
          'File tersebut menampilkan pesan error yang jelas per file yang menjelaskan bahwa file tidak bisa didekode, sementara file lain dalam batch Anda tetap terkonversi secara normal. Mengunduh ulang WebP asli dari sumbernya biasanya memperbaiki file yang terpotong atau salah diberi nama.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'SVG ke PNG',
    shortDescription: 'Rasterisasi grafik vektor SVG menjadi PNG transparan yang tajam 1×–4×.',
    category: 'convert',
    seoTitle: 'Konverter SVG ke PNG Gratis Online',
    seoDescription:
      'Ubah vektor SVG menjadi PNG transparan gratis online di browser Anda. Ekspor PNG tajam 1x–4x secara lokal, dengan batas yang jujur untuk aset eksternal.',
    h1: 'Konverter SVG ke PNG Online Gratis',
    subtitle:
      'Rasterisasi logo, ikon, dan ilustrasi SVG menjadi PNG transparan yang tajam dengan konverter SVG ke PNG gratis kami, sepenuhnya di browser Anda. Dibuat untuk desainer dan developer yang membutuhkan ekspor high-DPI untuk slide, dokumen, dan app store, alat ini merender SVG mandiri pada skala 1×, 2×, 3×, atau 4× (hingga 8000px) lengkap dengan pemrosesan batch dan unduhan ZIP.',
    howToSteps: [
      {
        title: 'Letakkan file SVG hingga 25 MB per file',
        description:
          'Unggah satu atau beberapa file vektor .svg dengan bentuk, path, gradien, atau gaya inline.',
      },
      {
        title: 'Pilih skala ekspor raster (1×–4×)',
        description:
          'Pilih 1× untuk ukuran intrinsik SVG, atau 2×–4× untuk ekspor PNG Retina dan high-DPI yang tajam.',
      },
      {
        title: 'Klik Konversi Ulang Semua setelah mengubah skala',
        description:
          'Perubahan skala berlaku saat Anda mengonversi ulang, sehingga pratinjau dan unduhan sesuai dengan ukuran yang Anda pilih.',
      },
      {
        title: 'Perhatikan catatan tentang aset eksternal',
        description:
          'Gambar eksternal, stylesheet, dan webfont di dalam SVG diblokir oleh keamanan canvas browser dan tidak akan muncul di PNG.',
      },
      {
        title: 'Bandingkan PNG hasil rasterisasi',
        description:
          'Klik Bandingkan pada kartu mana pun untuk memeriksa tepi yang tajam dan transparansi di penampil terpisah.',
      },
      {
        title: 'Unduh file PNG atau Unduh Semua (ZIP)',
        description:
          'Simpan file .png satu per satu atau gabungkan batch ke dalam compressmypic_svg_to_png.zip dalam sekali klik.',
      },
    ],
    features: [
      {
        title: 'Ekspor High-DPI 1×, 2×, 3× & 4×',
        description: 'Skalakan ikon 24px kecil atau logo 100px dengan bersih hingga resolusi 4× sebelum rasterisasi.',
      },
      {
        title: 'Latar Belakang Transparan Terjaga',
        description: 'Mengekspor PNG dengan saluran alpha yang tajam, siap untuk slide, header web, dan deck desain.',
      },
      {
        title: 'Ruang Lingkup Canvas Mandiri yang Jujur',
        description: 'Mendokumentasikan dengan jelas bahwa bentuk dan gaya vektor SVG inline dirender dengan bersih, sedangkan URL gambar eksternal atau webfont eksternal di dalam SVG bisa diblokir oleh sandbox Canvas browser.',
      },
      {
        title: 'Rasterisasi SVG Batch',
        description: 'Ubah seluruh paket ikon menjadi PNG dalam satu proses dan unduh file ZIP.',
      },
    ],
    faqs: [
      {
        question: 'SVG saya memakai foto yang ditautkan — mengapa foto itu hilang dari PNG?',
        answer:
          'Demi keamanan, browser men-sandbox file SVG yang dirender ke HTML5 Canvas dan memblokir pengambilan URL <image> eksternal, sehingga foto yang ditautkan dari web tidak bisa dimuat selama rasterisasi. Tanamkan gambar langsung di dalam file SVG atau ganti dengan bentuk vektor inline, dan PNG akan dirender secara lengkap.',
      },
      {
        question: 'Bisakah saya memakai webfont di dalam SVG untuk ekspor PNG?',
        answer:
          'Webfont eksternal yang dirujuk melalui URL diblokir oleh sandbox canvas yang sama, sehingga teks yang diatur dengan font jarak jauh akan kembali ke font sistem atau menghilang. Gunakan font sistem, ubah teks menjadi outline di editor Anda, atau tanamkan data font langsung di dalam file SVG.',
      },
      {
        question: 'Skala apa yang harus saya pilih untuk mengubah ikon 24px menjadi PNG 96px yang tajam?',
        answer:
          'Pilih 4× di bawah Skala Ekspor Raster lalu klik Konversi Ulang Semua: ikon 24px menjadi PNG 96px yang tajam karena vektor dirender ulang pada ukuran yang lebih besar, bukan meregangkan piksel. Gunakan 2× untuk ekspor 48px, dan ingat output dibatasi hingga 8000px pada sisi terpanjang.',
      },
      {
        question: 'Berapa PNG terbesar yang bisa dihasilkan SVG di sini?',
        answer:
          'Skala ekspor dibatasi hingga 8000px pada sisi terpanjang, sehingga SVG yang sangat besar pada 4× akan berhenti di batas itu. Untuk sebagian besar ikon dan logo, batas ini tidak pernah jadi masalah — logo 100px pada 4× hanya 400px, jauh di bawah batas.',
      },
      {
        question: 'Apakah SVG ke PNG mempertahankan latar belakang transparan?',
        answer:
          'Ya. Kecuali SVG itu sendiri menggambar persegi panjang latar belakang, PNG hasil ekspor mempertahankan latar belakang transparan alpha yang bersih, siap untuk slide, header, dan deck desain. Pratinjau menampilkan transparansi pada pola papan catur.',
      },
      {
        question: 'Apakah file SVG diunggah ke server?',
        answer:
          'Tidak. Rasterisasi berjalan di HTML5 Canvas dalam tab browser Anda sendiri, sehingga file vektor Anda tidak pernah meninggalkan komputer Anda. Menutup tab akan menghapusnya dari memori browser.',
      },
      {
        question: 'Bisakah saya mengonversi seluruh paket ikon SVG sekaligus?',
        answer:
          'Ya. Letakkan beberapa file .svg hingga 25 MB per file ke dalam antrean, pilih satu skala untuk seluruh batch, lalu unduh semuanya bersama-sama dalam compressmypic_svg_to_png.zip. Setiap ikon dirasterisasi secara terpisah.',
      },
      {
        question: 'Apa yang membuat SVG gagal dirasterisasi dan menampilkan error?',
        answer:
          'Penyebab paling umum adalah XML yang tidak valid: tag yang tidak ditutup, atribut yang cacat, atau file yang sebenarnya bukan markup SVG. Buka file di editor teks atau editor vektor, perbaiki kesalahan sintaksnya, lalu coba lagi — pesan error muncul per file, sehingga SVG lain tetap terkonversi.',
      },
      {
        question: 'Apakah gradien dan opasitas di dalam SVG dirender dengan benar?',
        answer:
          'Ya. Gradien linear dan radial inline, atribut opasitas, serta isian bergaya blend yang didefinisikan di dalam SVG dirender dengan bersih ke Canvas. Hanya aset yang diambil dari luar file — gambar eksternal, stylesheet, dan font — yang diblokir.',
      },
      {
        question: 'Apakah teks di dalam SVG saya diekspor sebagai teks PNG yang tajam?',
        answer:
          'Ya, jika teks memakai font sistem yang terinstal di perangkat Anda, teks dirasterisasi dengan tajam pada skala apa pun. Teks dengan webfont eksternal akan kembali ke font default, jadi ubah teks menjadi outline di Illustrator, Figma, atau Inkscape untuk hasil yang terjamin.',
      },
      {
        question: 'Bisakah saya mengonversi SVG yang merujuk stylesheet CSS eksternal?',
        answer:
          'Tidak. Stylesheet eksternal diblokir oleh keamanan canvas browser, sehingga class yang didefinisikan dalam file .css yang ditautkan tidak akan diterapkan dan bentuk bisa dirender tanpa gaya. Pindahkan gaya ke inline dengan atribut style atau blok <style> di dalam SVG itu sendiri.',
      },
      {
        question: 'Apakah output PNG bersifat lossless?',
        answer:
          'Ya. Piksel hasil rasterisasi disimpan sebagai PNG lossless, sehingga tepi, teks, dan warna datar tetap sempurna piksel demi piksel pada ukuran ekspor. Ekspor ulang pada skala yang lebih tinggi jika Anda membutuhkan lebih banyak detail — tidak ada penggeser kualitas karena PNG tidak memiliki langkah lossy.',
      },
      {
        question: 'Berapa ukuran PNG pada skala 1×?',
        answer:
          'Pada 1×, PNG sesuai dengan dimensi intrinsik SVG dari atribut lebar dan tingginya atau viewBox. Ikon 24×24 diekspor sebagai 24×24 piksel, sedangkan SVG tanpa ukuran intrinsik memakai dimensi viewBox-nya.',
      },
      {
        question: 'Bisakah saya mengonversi file SVG di ponsel?',
        answer:
          'Ya. Zona unggah, pemilih skala, penampil perbandingan, dan unduhan ZIP semuanya berfungsi di Safari pada iOS dan Chrome di Android tanpa perlu menginstal aplikasi. Paket ikon besar hanya membutuhkan waktu sedikit lebih lama di prosesor ponsel.',
      },
      {
        question: 'Nama file apa yang dipertahankan PNG hasil ekspor?',
        answer:
          'Unduhan tunggal mempertahankan nama file asli Anda yang sudah dibersihkan dengan ekstensi .png, sehingga logo.svg menjadi logo.png. Batch berisi dua file atau lebih diekspor tergabung dalam compressmypic_svg_to_png.zip.',
      },
      {
        question: 'Apakah konverter mendukung animasi SVG (SMIL/CSS)?',
        answer:
          'Tidak. Rasterisasi menangkap satu bingkai statis dari SVG, sehingga animasi SMIL dan CSS tidak terbawa ke PNG. Untuk hasil animasi, ekspor animasi sebagai video atau GIF dari alat desain Anda.',
      },
      {
        question: 'Bisakah saya merasterisasi SVG dengan gambar yang ditanam sebagai data URI?',
        answer:
          'Biasanya, ya. Gambar yang ditanam langsung di dalam file sebagai data URI base64 adalah bagian dari SVG itu sendiri, sehingga tidak ada yang diambil dari luar dan gambar umumnya dirender. Gambar yang ditautkan dengan URL http adalah yang diblokir oleh keamanan canvas.',
      },
      {
        question: 'Kapan sebaiknya saya memakai SVG ke PNG, bukan mempertahankan SVG?',
        answer:
          'Gunakan PNG jika tujuannya membutuhkan gambar raster: PowerPoint, Word, postingan sosial, tangkapan layar app store, atau alat apa pun yang tidak bisa membuka SVG. Pertahankan SVG jika grafik harus tetap bisa diskalakan tanpa batas di situs web.',
      },
      {
        question: 'Apakah mengubah SVG menjadi PNG mengubah warna?',
        answer:
          'Warna dirender sesuai yang didefinisikan dalam SVG, dan outputnya adalah PNG sRGB standar. Canvas menghapus profil ICC yang tertanam, sehingga pencocokan warna yang kritis untuk cetak sebaiknya tetap di file vektor aslinya — untuk layar, perbedaan yang terlihat bisa diabaikan.',
      },
      {
        question: 'Berapa ukuran maksimum file SVG yang diterima?',
        answer:
          'Setiap file SVG boleh berukuran hingga 25 MB, yang mencakup bahkan file ilustrasi besar dengan ribuan path. SVG yang sangat kompleks hanya membutuhkan waktu satu atau dua detik lebih lama untuk dirasterisasi di perangkat Anda.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'AVIF ke JPG',
    shortDescription: 'Ubah gambar AVIF menjadi JPG universal melalui dekoder browser Anda.',
    category: 'convert',
    seoTitle: 'Konverter AVIF ke JPG Gratis Online',
    seoDescription:
      'Ubah gambar AVIF menjadi JPG universal gratis online di browser. Dekode AVIF bawaan, pemilih matte untuk transparansi, kontrol kualitas, dan ekspor batch ZIP.',
    h1: 'Konverter AVIF ke JPG Online Gratis',
    subtitle:
      'Ubah gambar .avif modern menjadi file .jpg yang didukung secara universal dengan konverter AVIF ke JPG gratis kami, memakai dekoder AVIF bawaan browser Anda. Dibuat untuk siapa pun yang mengunduh file AVIF yang tidak bisa dibuka editor, aplikasi office, atau formulir unggah mereka, alat ini mengonversi file AVIF hingga 25 MB per file dengan kualitas 88% secara default, lengkap dengan pemilih warna matte dan ekspor batch ZIP — tidak ada yang pernah diunggah.',
    howToSteps: [
      {
        title: 'Letakkan gambar AVIF hingga 25 MB per file',
        description:
          'Unggah file .avif di browser modern dengan dekode AVIF bawaan — Chrome, Edge, Firefox, atau Safari.',
      },
      {
        title: 'Pilih warna matte untuk area transparan',
        description:
          'Pilih Putih (#ffffff), Hitam (#000000), Abu-abu Terang (#f8fafc), atau warna hex kustom apa pun, karena JPG tidak bisa menyimpan transparansi.',
      },
      {
        title: 'Atur kualitas output JPG (20%–100%)',
        description:
          'Pertahankan 88% yang tajam sebagai default atau geser ke arah 20% untuk file yang sangat kecil dan 100% untuk detail maksimal, lalu klik Konversi Ulang Semua.',
      },
      {
        title: 'Bandingkan JPG dengan AVIF aslinya',
        description:
          'Klik Bandingkan pada kartu mana pun untuk memeriksa detail, warna, dan tepi di penampil terpisah sebelum menyimpan.',
      },
      {
        title: 'Unduh file JPG atau Unduh Semua (ZIP)',
        description:
          'Simpan file .jpg satu per satu atau gabungkan batch ke dalam compressmypic_avif_to_jpg.zip dalam sekali klik.',
      },
    ],
    features: [
      {
        title: 'Dekode AVIF Bawaan Browser',
        description: 'Memanfaatkan dekoder AVIF perangkat keras/perangkat lunak browser modern Anda secara lokal tanpa bolak-balik ke server.',
      },
      {
        title: 'Kompatibilitas Format yang Jujur',
        description: 'Dibangun khusus untuk mendekode AVIF menjadi JPG universal (atau gunakan alat JPG/PNG/WebP untuk format lain — output AVIF tidak ditawarkan).',
      },
      {
        title: 'Pemilih Warna Matte Transparansi',
        description: 'Area AVIF transparan berpadu dengan bersih ke warna putih atau latar hex kustom Anda.',
      },
      {
        title: 'Ekspor Batch ZIP',
        description: 'Ubah beberapa unduhan AVIF menjadi JPG dalam satu sesi browser.',
      },
    ],
    faqs: [
      {
        question: 'Apa itu AVIF dan mengapa beberapa aplikasi gagal membukanya?',
        answer:
          'AVIF adalah format gambar modern berbasis kompresi video AV1 yang menyimpan foto dengan ukuran jauh lebih kecil daripada JPG. Karena format ini lebih baru, banyak editor lama, paket office, printer, dan portal unggah tidak pernah menambahkan dekoder AVIF, sehingga mengubahnya menjadi JPG adalah cara tercepat untuk membuat gambar bisa dipakai di mana saja.',
      },
      {
        question: 'Browser apa saja yang bisa mendekode AVIF untuk konversi di sini?',
        answer:
          'Chrome, Edge, Firefox, dan Safari modern semuanya mendekode AVIF secara bawaan di browser, dan itulah yang dipakai alat ini. Jika Anda membuka halaman di browser yang sangat lama, setiap file menampilkan error yang jelas, bukan terkonversi — memperbarui browser akan memperbaikinya.',
      },
      {
        question: 'Apa yang terjadi jika browser saya tidak bisa mendekode file AVIF?',
        answer:
          'File tersebut menampilkan pesan error eksplisit per file yang menjelaskan bahwa browser Anda tidak bisa mendekodenya, sementara file lain dalam batch Anda tetap terkonversi secara normal. Beralih ke versi Chrome, Firefox, Edge, atau Safari terbaru menyelesaikannya dalam hampir semua kasus.',
      },
      {
        question: 'Apakah mengubah AVIF menjadi JPG menurunkan kualitas?',
        answer:
          'Sedikit penurunan tidak bisa dihindari karena JPG mengodekan ulang piksel dengan kompresi lossy, sedangkan AVIF jauh lebih efisien pada kualitas yang sama. Pada default 88%, perbedaannya hampir tidak terlihat untuk foto; hanya pengamatan piksel yang ekstrem pada tekstur halus yang menunjukkan pelembutan.',
      },
      {
        question: 'Apakah area AVIF transparan akan menjadi hitam di JPG?',
        answer:
          'Tidak. Area transparan diisi dengan warna matte pilihan Anda — putih secara default — sehingga logo dan potongan mendapatkan latar belakang solid yang bersih, bukan kotak hitam. Pilih Hitam, Abu-abu Terang, atau warna hex kustom apa pun sebelum mengonversi.',
      },
      {
        question: 'Bisakah saya mengonversi gambar AVIF dengan transparansi menjadi JPG dengan bersih?',
        answer:
          'Ya. Pemilih warna matte memadukan tepi semi-transparan dengan halus di atas latar belakang pilihan Anda, sehingga bayangan lembut dan kurva yang dihaluskan terlihat natural, bukan terpotong menjadi garis keras. Periksa penampil Bandingkan untuk memastikan perpaduannya.',
      },
      {
        question: 'Apakah file AVIF diunggah ke server?',
        answer:
          'Tidak. Dekode dan pengodean ulang keduanya terjadi secara lokal memakai dekoder AVIF bawaan browser Anda dan HTML5 Canvas, sehingga gambar Anda tidak pernah meninggalkan perangkat Anda. Menutup tab akan menghapusnya dari memori browser.',
      },
      {
        question: 'Bagaimana cara mengonversi beberapa unduhan AVIF sekaligus?',
        answer:
          'Letakkan beberapa file .avif hingga 25 MB per file ke dalam antrean, pilih satu warna matte dan kualitas untuk seluruh batch, lalu unduh semuanya bersama-sama dalam compressmypic_avif_to_jpg.zip. Setiap file dikonversi secara terpisah.',
      },
      {
        question: 'Berapa file AVIF terbesar yang diterima?',
        answer:
          'Setiap file AVIF boleh berukuran hingga 25 MB, yang mencakup unduhan beresolusi tinggi dan tangkapan kamera. Karena dekode berjalan di perangkat Anda, file besar diproses dengan kecepatan CPU lokal tanpa waktu tunggu unggahan.',
      },
      {
        question: 'Apakah ada cara mengubah JPG menjadi AVIF di sini?',
        answer:
          'Tidak. HTML5 Canvas tidak bisa mengodekan AVIF secara universal di semua browser, sehingga situs ini hanya mendekode AVIF menjadi output JPG, PNG, dan WebP yang andal. Untuk output AVIF, Anda membutuhkan encoder desktop khusus.',
      },
      {
        question: 'Apakah JPG mempertahankan dimensi piksel yang sama dengan AVIF?',
        answer:
          'Ya. Setiap .jpg hasil konversi mempertahankan 100% lebar dan tinggi persis AVIF aslinya, jadi tidak ada yang dipotong atau diubah ukurannya. Gunakan Ubah Ukuran Gambar setelahnya jika Anda juga membutuhkan dimensi yang lebih kecil.',
      },
      {
        question: 'Persentase kualitas apa yang paling cocok untuk foto AVIF?',
        answer:
          'Default 88% ideal untuk sebagian besar foto: detail tetap tajam sementara file tetap kecil. Untuk foto yang sangat detail atau gambar yang akan Anda edit lebih lanjut, naikkan kualitas ke 92% atau 95%; untuk berbagi cepat, 80% biasanya sudah cukup.',
      },
      {
        question: 'Bagaimana foto AVIF HDR atau wide-gamut terlihat setelah konversi?',
        answer:
          'Foto tersebut diekspor sebagai JPG sRGB standar, sehingga sorotan HDR yang ekstrem dipetakan ke rentang tampilan normal dan warna wide-gamut yang sangat jenuh sedikit bergeser ke arah sRGB. Untuk foto sehari-hari, hasilnya terlihat natural; untuk pekerjaan warna yang kritis, simpan AVIF aslinya.',
      },
      {
        question: 'Bisakah saya memeriksa JPG hasil konversi sebelum mengunduh?',
        answer:
          'Ya. Klik Bandingkan pada kartu hasil mana pun untuk membuka penampil terpisah dan menyeret kursor melintasi gambar guna memeriksa detail, warna, dan tepi dibandingkan dengan AVIF aslinya. Setiap kartu juga menampilkan ukuran asli dan ukuran hasil konversi.',
      },
      {
        question: 'Jika hasil pertama terlihat salah, bisakah saya mengubah pengaturan dan mencoba lagi?',
        answer:
          'Ya. Pilih contoh warna matte lain atau geser penggeser kualitas kapan saja lalu klik Konversi Ulang Semua untuk membuat ulang setiap file yang dimuat tanpa mengunggah ulang. File AVIF asli Anda tetap berada di antrean sampai Anda menghapusnya.',
      },
      {
        question: 'Nama file apa yang dipertahankan unduhan JPG?',
        answer:
          'Unduhan tunggal mempertahankan nama file asli Anda yang sudah dibersihkan dengan ekstensi .jpg, sehingga photo.avif menjadi photo.jpg. Batch berisi dua file atau lebih diekspor tergabung dalam compressmypic_avif_to_jpg.zip.',
      },
      {
        question: 'Apakah AVIF ke JPG berfungsi di browser seluler?',
        answer:
          'Ya, di browser seluler modern dengan dekode AVIF bawaan, seperti Chrome terbaru di Android dan Safari di iOS. Pemilih matte, penggeser kualitas, dan unduhan ZIP semuanya berfungsi tanpa menginstal aplikasi.',
      },
      {
        question: 'Kapan sebaiknya saya mengubah AVIF menjadi JPG, bukan AVIF menjadi PNG?',
        answer:
          'Pilih JPG jika Anda membutuhkan file kecil yang kompatibel secara universal untuk email, Office, atau portal unggah. Pilih PNG jika Anda harus mempertahankan transparansi atau membutuhkan kualitas lossless yang sempurna piksel demi piksel untuk pengeditan — dengan catatan file PNG akan jauh lebih besar.',
      },
      {
        question: 'Mengapa JPG kadang lebih besar daripada AVIF?',
        answer:
          'AVIF mengompresi jauh lebih efisien daripada JPG, sehingga AVIF kecil yang dienkode ulang sebagai JPG pada 88% bisa dengan mudah berakhir lebih besar daripada sumbernya. Hal itu sudah diduga: Anda menukar ukuran file dengan kompatibilitas universal. Menurunkan kualitas ke arah 75% biasanya mengecilkan JPG kembali.',
      },
      {
        question: 'Apakah konverter menghapus metadata AVIF?',
        answer:
          'Ya. Menggambar piksel ke HTML5 Canvas menghapus data EXIF, XMP, dan profil ICC yang tertanam, sehingga JPG hasil keluaran tetap ramping dan bebas dari detail lokasi atau kamera yang tersembunyi.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'BMP ke JPG',
    shortDescription: 'Ubah bitmap BMP besar yang tidak terkompresi menjadi file JPG yang ringkas.',
    category: 'convert',
    seoTitle: 'Konverter BMP ke JPG Gratis Online',
    seoDescription:
      'Ubah bitmap BMP yang tidak terkompresi menjadi JPG ringkas gratis online. Potong ukuran file 85–95% secara privat, dengan penggeser kualitas dan ZIP batch.',
    h1: 'Konverter BMP ke JPG Online Gratis',
    subtitle:
      'Ubah bitmap BMP Windows besar yang tidak terkompresi menjadi file JPG ringan yang mudah dibagikan dengan konverter BMP ke JPG gratis kami, langsung di browser Anda. Dibuat untuk siapa pun yang membersihkan folder berisi tangkapan layar .bmp lama, hasil scan, atau ekspor Paint, alat ini mengonversi file BMP hingga 25 MB per file dengan kualitas 88% secara default — biasanya mengecilkannya sebesar 85–95% — lengkap dengan pemrosesan batch dan unduhan ZIP.',
    howToSteps: [
      {
        title: 'Letakkan bitmap BMP hingga 25 MB per file',
        description:
          'Unggah satu atau beberapa file .bmp dari tangkapan layar Windows, hasil scan, atau folder lama ke area unggah.',
      },
      {
        title: 'Atur kualitas output JPG (20%–100%)',
        description:
          'Pertahankan 88% yang tajam sebagai default atau geser ke arah 20% untuk file yang sangat kecil dan 100% untuk detail maksimal, lalu klik Konversi Ulang Semua.',
      },
      {
        title: 'Periksa penghematan ukuran di setiap kartu',
        description:
          'Setiap hasil menampilkan ukuran BMP asli yang besar, ukuran JPG yang ringkas, dan persentase yang dihemat.',
      },
      {
        title: 'Bandingkan JPG dengan BMP aslinya',
        description:
          'Klik Bandingkan pada kartu mana pun untuk memastikan teks dan detail tetap tajam di penampil terpisah.',
      },
      {
        title: 'Unduh file JPG atau Unduh Semua (ZIP)',
        description:
          'Simpan file .jpg satu per satu atau gabungkan batch ke dalam compressmypic_bmp_to_jpg.zip dalam sekali klik.',
      },
    ],
    features: [
      {
        title: 'Pengurangan Ukuran Biasanya 90%+',
        description: 'Bitmap BMP yang tidak terkompresi menyimpan piksel mentah; kompresi JPG mengecilkannya secara dramatis untuk email dan web.',
      },
      {
        title: 'Dimensi Piksel Dipertahankan',
        description: 'Mempertahankan lebar dan tinggi asli yang persis sambil memodernisasi format wadahnya.',
      },
      {
        title: 'Antrean Batch + Unduhan ZIP',
        description: 'Bersihkan folder berisi tangkapan layar atau hasil scan .bmp lama dalam satu proses cepat.',
      },
      {
        title: 'Privasi 100% di Sisi Klien',
        description: 'Tanpa unggahan — konversi terjadi secara lokal di komputer Anda.',
      },
    ],
    faqs: [
      {
        question: 'Mengapa file BMP sangat besar dibandingkan JPG?',
        answer:
          'BMP adalah format yang tidak terkompresi: format ini menyimpan hampir setiap piksel sebagai data warna mentah dengan hampir tanpa kompresi, sehingga satu tangkapan layar bisa berbobot puluhan megabyte. JPG memakai kompresi lossy yang cerdas yang membuang data yang hampir tidak diperhatikan mata Anda, dan itulah mengapa gambar yang sama menyusut secara dramatis.',
      },
      {
        question: 'Berapa penghematan ukuran file yang bisa saya harapkan saat mengubah BMP menjadi JPG?',
        answer:
          'Karena file BMP biasanya tidak terkompresi, mengubahnya menjadi JPG 88% secara rutin memangkas ukuran file sebesar 85% hingga 95% — bitmap 10 MB sering menjadi JPG 500 KB hingga 1,5 MB. Hasil scan fotografis paling banyak menghemat, sedangkan grafik datar satu warna menghemat sedikit lebih sedikit.',
      },
      {
        question: 'Apakah mengubah BMP menjadi JPG mengubah dimensi gambar?',
        answer:
          'Tidak. Setiap .jpg hasil konversi mempertahankan 100% lebar dan tinggi piksel persis BMP aslinya, jadi tidak ada yang dipotong atau diubah ukurannya. Gunakan Ubah Ukuran Gambar setelahnya jika Anda juga membutuhkan dimensi yang lebih kecil.',
      },
      {
        question: 'Pengaturan kualitas apa yang menjaga tangkapan layar BMP tetap mudah dibaca?',
        answer:
          'Default 88% menjaga teks tangkapan layar dan detail UI tetap tajam sambil menghilangkan sebagian besar pembengkakan bitmap. Untuk hasil scan dengan cetakan halus atau font kecil, naikkan kualitas ke 92% atau 95%; untuk berbagi cepat, 80% biasanya sudah cukup.',
      },
      {
        question: 'Apakah file BMP diunggah ke server?',
        answer:
          'Tidak. Konversi berjalan di HTML5 Canvas dalam tab browser Anda sendiri, sehingga tangkapan layar dan hasil scan Anda tidak pernah meninggalkan komputer Anda. Menutup tab akan menghapusnya dari memori browser.',
      },
      {
        question: 'Bagaimana cara mengonversi sekumpulan hasil scan BMP dalam satu batch?',
        answer:
          'Letakkan beberapa file .bmp hingga 25 MB per file ke dalam antrean, pilih satu pengaturan kualitas untuk seluruh batch, lalu unduh semuanya bersama-sama dalam compressmypic_bmp_to_jpg.zip. Setiap file dikonversi secara terpisah.',
      },
      {
        question: 'Berapa file BMP terbesar yang diterima?',
        answer:
          'Setiap file BMP boleh berukuran hingga 25 MB, yang mencakup tangkapan layar besar dan hasil scan beresolusi tinggi. Karena konversi berjalan di perangkat Anda, file besar diproses dengan kecepatan CPU lokal tanpa waktu tunggu unggahan.',
      },
      {
        question: 'Bisakah saya mengonversi file BMP tanpa koneksi internet setelah halaman terbuka?',
        answer:
          'Ya. Setelah halaman dimuat di browser Anda, konversi berjalan sepenuhnya dalam JavaScript lokal dan HTML5 Canvas tanpa panggilan ke server. Anda hanya membutuhkan internet lagi untuk memuat halaman itu sendiri atau mengunduh file yang sudah selesai.',
      },
      {
        question: 'Apakah JPG akan terbuka di program apa pun?',
        answer:
          'Ya. Output .jpg RGB baseline standar terbuka di hampir semua penampil, editor, browser, klien email, dan printer — jauh lebih luas daripada BMP, yang tidak lagi diterima banyak aplikasi dan situs web modern.',
      },
      {
        question: 'Apakah konverter mempertahankan transparansi BMP?',
        answer:
          'File BMP jarang membawa saluran alpha yang bisa dipakai, dan JPG sama sekali tidak mendukung transparansi, sehingga output JPG selalu buram. Jika grafik Anda membutuhkan transparansi, konversi ke PNG atau WebP sebagai gantinya, yang mempertahankan alpha.',
      },
      {
        question: 'Apa yang terjadi pada kedalaman warna BMP selama konversi?',
        answer:
          'Browser mendekode BMP dan merendernya melalui jalur warna canvas standar, lalu mengekspor JPG sRGB normal. BMP dengan kedalaman warna tinggi mempertahankan warna yang terlihat; hanya varian indexed atau 1-bit yang eksotis yang mungkin perlu disimpan ulang di editor terlebih dahulu.',
      },
      {
        question: 'Bisakah saya memeriksa kualitas sebelum mengunduh?',
        answer:
          'Ya. Klik Bandingkan pada kartu hasil mana pun untuk membuka penampil terpisah dan menyeret kursor melintasi gambar guna memeriksa teks, garis, dan detail dibandingkan dengan BMP aslinya. Setiap kartu juga menampilkan ukuran persis yang dihemat.',
      },
      {
        question: 'Apakah mungkin menyesuaikan penggeser kualitas setelah konversi pertama?',
        answer:
          'Ya. Geser penggeser kualitas ke nilai baru kapan saja lalu klik Konversi Ulang Semua untuk membuat ulang setiap file yang dimuat tanpa mengunggah ulang. File BMP asli Anda tetap berada di antrean sampai Anda menghapusnya.',
      },
      {
        question: 'Nama file apa yang dipertahankan JPG?',
        answer:
          'Unduhan tunggal mempertahankan nama file asli Anda yang sudah dibersihkan dengan ekstensi .jpg, sehingga scan.bmp menjadi scan.jpg. Batch berisi dua file atau lebih diekspor tergabung dalam compressmypic_bmp_to_jpg.zip.',
      },
      {
        question: 'Apakah BMP ke JPG berfungsi di browser seluler?',
        answer:
          'Ya. Zona unggah, penggeser kualitas, penampil perbandingan, dan unduhan ZIP semuanya berfungsi di Safari pada iOS dan Chrome di Android tanpa perlu menginstal aplikasi. Batch besar hanya membutuhkan waktu sedikit lebih lama di prosesor ponsel.',
      },
      {
        question: 'Kapan BMP ke JPG lebih baik daripada BMP ke PNG?',
        answer:
          'Pilih JPG jika Anda membutuhkan file terkecil yang bisa dibagikan untuk email, web, atau pesan. Pilih PNG jika Anda membutuhkan kualitas arsip lossless atau berencana mengedit gambar lebih lanjut, dengan catatan file PNG akan tetap jauh lebih besar daripada JPG.',
      },
      {
        question: 'Bisakah file BMP 1-bit atau 8-bit lama dikonversi?',
        answer:
          'Sebagian besar file BMP 1-bit, 8-bit, 24-bit, dan 32-bit standar didekode dengan bersih di browser modern. Varian yang sangat tidak biasa, seperti BMP terkompresi RLE atau format OS/2, mungkin menampilkan error per file — menyimpannya ulang sebagai BMP 24-bit di Paint atau editor akan memperbaikinya.',
      },
      {
        question: 'Mengapa hasil scan BMP terkompresi dengan sangat baik sebagai JPG?',
        answer:
          'Hasil scan berisi gradien halus, tekstur kertas, dan detail fotografis yang ditangani kompresi kosinus JPEG dengan sangat efisien. Area datar satu warna terkompresi bahkan lebih baik, dan itulah mengapa hasil scan 10 MB bisa turun di bawah 1 MB pada kualitas 88%.',
      },
      {
        question: 'Apakah mengubah BMP menjadi JPG menghapus metadata apa pun?',
        answer:
          'Ya. Menggambar piksel ke HTML5 Canvas menghapus blok metadata apa pun yang tertanam, sehingga JPG hasil keluaran tetap ramping dan bebas dari detail tersembunyi. File BMP sendiri jarang membawa banyak metadata.',
      },
      {
        question: 'Bisakah saya mengonversi file BMP dari kamera digital atau pemindai secara langsung?',
        answer:
          'Ya, jika file disimpan sebagai .bmp — sebagian besar pemindai dan kamera lama menawarkan BMP sebagai opsi ekspor. Kamera modern biasanya sudah menyimpan JPG, jadi periksa ekstensi file terlebih dahulu dan gunakan konverter yang sesuai jika file tersebut bukan bitmap.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
  {
    slug: '/remove-background',
    name: 'Penghapus Latar Belakang',
    shortDescription: 'Hapus latar belakang gambar dengan AI di browser dan ekspor PNG transparan.',
    category: 'ai-tools',
    seoTitle: 'Penghapus Latar Belakang Gratis – AI, Tanpa Daftar',
    seoDescription:
      'Hapus latar belakang gambar gratis dengan AI di browser. Unduh PNG transparan atau tambahkan latar putih, hitam, atau kustom — privat dan tanpa watermark.',
    h1: 'Penghapus Latar Belakang AI Online Gratis',
    subtitle:
      'Hapus latar belakang dari potret, foto produk, hewan peliharaan, dan logo dengan penghapus latar belakang AI gratis kami, yang berjalan sepenuhnya di browser Anda. Dibuat untuk penjual, kreator, dan desainer yang membutuhkan potongan bersih dengan cepat, alat ini memuat model AI yang ringkas sekali (sekitar 35 MB, tersimpan di cache setelahnya), memproses satu foto hingga 20 MB dalam satu waktu, dan mengekspor PNG transparan — atau menempatkan potongan Anda di atas latar belakang putih, hitam, atau kustom.',
    howToSteps: [
      {
        title: 'Tunggu model AI dimuat',
        description:
          'Pada penggunaan pertama, halaman mengunduh model isnet_quint8 yang ringkas (sekitar 35 MB) sekali lalu menyimpannya di cache browser Anda; kunjungan berikutnya dimulai langsung.',
      },
      {
        title: 'Letakkan satu foto hingga 20 MB',
        description:
          'Unggah satu foto JPG, PNG, WebP, HEIC, BMP, atau AVIF — satu file dalam satu waktu — ke area unggah.',
      },
      {
        title: 'Biarkan AI memotong subjek Anda',
        description:
          'Model mengisolasi subjek Anda secara lokal di browser Anda dan menampilkan foto asli di samping potongan transparan.',
      },
      {
        title: 'Bandingkan potongan dengan foto asli',
        description:
          'Klik Bandingkan Terpisah untuk menyeret kursor melintasi tampilan sebelum-sesudah dan memeriksa tepi di sekitar rambut, bulu, dan detail halus.',
      },
      {
        title: 'Pilih transparan, putih, hitam, atau kustom',
        description:
          'Pertahankan PNG transparan, atau beralih ke latar belakang warna putih, hitam, atau kustom sebelum mengunduh.',
      },
      {
        title: 'Unduh potongan Anda',
        description:
          'Simpan PNG transparan (dinamai sesuai foto Anda dengan tambahan _no_bg) atau versi latar belakang solid, lalu klik Gambar Baru untuk foto berikutnya.',
      },
    ],
    features: [
      {
        title: 'Segmentasi AI 100% di Sisi Klien',
        description: 'Didukung model ONNX isnet_quint8 yang ringan dan berjalan secara lokal di browser Anda — foto Anda tidak pernah diunggah ke server mana pun.',
      },
      {
        title: 'Ekspor PNG Transparan Instan',
        description: 'Unduh potongan PNG transparan alpha yang tajam, siap untuk listing e-commerce, thumbnail, slide, dan pekerjaan desain.',
      },
      {
        title: 'Pengalih Latar Belakang Solid Bawaan',
        description: 'Pratinjau dan ekspor potongan Anda dengan latar belakang putih bersih, hitam pekat, atau warna hex kustom apa pun tanpa membuka aplikasi lain.',
      },
      {
        title: 'Gratis, Tanpa Daftar & Tanpa Watermark',
        description: 'Potongan resolusi penuh tanpa batas harian, tanpa akun, dan tanpa watermark.',
      },
    ],
    faqs: [
      {
        question: 'Apakah penghapusan latar belakang mengirim foto saya ke server?',
        answer:
          'Tidak. Model AI diunduh ke browser Anda sekali lalu menjalankan inferensi sepenuhnya di perangkat Anda, sehingga foto Anda tidak pernah diunggah, disimpan, atau dilihat orang lain. Menutup tab akan menghapus semuanya dari memori browser.',
      },
      {
        question: 'Mengapa potongan pertama lebih lambat daripada potongan berikutnya?',
        answer:
          'Pada kunjungan pertama, browser Anda mengunduh model isnet_quint8 yang ringkas (sekitar 35 MB) dan menginisialisasi runtime AI WebAssembly, yang membutuhkan beberapa detik ekstra. Setelah itu model tersimpan di cache, sehingga foto berikutnya diproses jauh lebih cepat.',
      },
      {
        question: 'Seberapa besar model AI yang diunduh browser saya?',
        answer:
          'Sekitar 35 MB, diunduh sekali pada penggunaan pertama lalu disimpan di cache oleh browser Anda. Model isnet_quint8 terkuantisasi yang kecil inilah yang membuat penghapusan di browser menjadi mungkin tanpa server — model cloud yang lebih besar membutuhkan unggahan dan API berbayar.',
      },
      {
        question: 'Bisakah saya memakai penghapus latar belakang tanpa internet setelah pemuatan pertama?',
        answer:
          'Sebagian besar, ya: setelah model tersimpan di cache, penghapusan sebenarnya berjalan sepenuhnya offline di browser Anda. Anda tetap membutuhkan internet untuk memuat halaman itu sendiri pada pertama kalinya, dan model yang tersimpan di cache bisa terhapus jika browser menghapus data situs.',
      },
      {
        question: 'Jenis foto apa yang menghasilkan tepi paling bersih?',
        answer:
          'Foto dengan subjek yang jelas dan kontras yang baik terhadap latar belakang bekerja paling baik — potret, foto produk, hewan peliharaan, mobil, dan logo dengan garis yang tajam. Pencahayaan yang rata dan latar belakang yang sederhana memberikan pekerjaan termudah bagi model.',
      },
      {
        question: 'Bisakah saya menghapus latar belakang dari foto dengan pemandangan yang berantakan atau ramai?',
        answer:
          'Ya, tetapi harap tepinya lebih lembut: saat subjek menyatu dengan latar belakang yang ramai, model kecil di perangkat harus menebak di mana subjek berakhir. Latar belakang yang lebih bersih, pencahayaan yang lebih baik, atau crop yang lebih dekat sebelum mengunggah memberikan potongan yang terlihat lebih baik.',
      },
      {
        question: 'Apa yang terjadi pada rambut halus, bulu, atau tepi yang tembus pandang?',
        answer:
          'Helai halus dan bulu yang tipis adalah kasus tersulit bagi model terkuantisasi yang ringkas, sehingga tepi di sana bisa terlihat sedikit lembut atau kehilangan beberapa helai rambut. Periksa tampilan Bandingkan Terpisah — untuk sebagian besar potret dan foto produk, hasilnya bersih, tetapi masking rambut yang sempurna piksel demi piksel adalah keterbatasan yang diketahui.',
      },
      {
        question: 'Bagaimana cara menempatkan potongan saya di atas latar belakang putih bersih untuk Amazon atau eBay?',
        answer:
          'Setelah potongan siap, pilih Putih di bawah Opsi Isian Latar Belakang lalu klik Unduh dengan Latar Belakang Putih. Marketplace lebih menyukai JPG dan PNG berlatar belakang putih buram yang tajam untuk thumbnail produk utama, dan alat ini mengekspor persis seperti itu.',
      },
      {
        question: 'Format file apa saja yang bisa saya unggah?',
        answer:
          'JPG, PNG, WebP, HEIC, BMP, dan AVIF — alat ini menerima set gambar diperluas yang sama seperti bagian lain situs ini. Foto HEIC dari iPhone dikonversi menjadi gambar yang bisa didekode secara otomatis sebelum model berjalan.',
      },
      {
        question: 'Berapa ukuran foto maksimum?',
        answer:
          'Setiap foto boleh berukuran hingga 20 MB, dan alat ini memproses satu foto dalam satu waktu. Itu mencakup foto ponsel dan kamera beresolusi tinggi; file yang sangat besar hanya membutuhkan waktu sedikit lebih lama karena model berjalan di perangkat Anda.',
      },
      {
        question: 'Bisakah saya menghapus latar belakang dari beberapa foto sekaligus?',
        answer:
          'Tidak, alat ini menangani satu foto dalam satu waktu agar model AI bisa memusatkan seluruh memori perangkat pada satu potongan yang bersih. Klik Gambar Baru setelah setiap unduhan untuk memproses foto berikutnya — tidak ada batas harian.',
      },
      {
        question: 'Apakah potongan mempertahankan resolusi foto aslinya?',
        answer:
          'Ya. PNG transparan hasil ekspor mempertahankan 100% lebar dan tinggi piksel foto aslinya, sehingga foto produk 4000px tetap 4000px. Gunakan Ubah Ukuran Gambar setelahnya jika Anda membutuhkan versi yang lebih kecil untuk web.',
      },
      {
        question: 'Mengapa PNG transparan saya lebih besar daripada foto aslinya?',
        answer:
          'PNG menyimpan setiap piksel potongan secara lossless, sedangkan JPG asli Anda sangat terkompresi — sehingga potongan besar yang detail bisa dengan mudah lebih berat daripada sumber JPG yang kecil. Hal itu normal: Anda menukar ukuran file dengan transparansi dan tepi yang sempurna piksel demi piksel.',
      },
      {
        question: 'Bisakah saya menjalankan penghapusan ulang pada foto yang sama?',
        answer:
          'Ya. Klik Jalankan Ulang Penghapusan untuk memproses foto yang sama lagi — berguna jika proses pertama menangkap bayangan sebagai bagian dari subjek atau jika Anda ingin membandingkan hasilnya. Model ini deterministik, sehingga hasilnya biasanya sama persis kecuali inputnya berubah.',
      },
      {
        question: 'Apa yang harus saya lakukan jika sebagian subjek hilang dari potongan?',
        answer:
          'Pertama periksa tampilan Bandingkan Terpisah untuk melihat persis apa yang terpotong. Subjek yang menyatu dengan latar belakang — pakaian sewarna, kaca, atau kamuflase — membingungkan model; coba foto dengan kontras subjek-latar belakang yang lebih kuat atau crop lebih dekat ke subjek sebelum mengunggah.',
      },
      {
        question: 'Apakah ada watermark pada PNG yang diunduh?',
        answer:
          'Tidak. Unduhan adalah potongan resolusi penuh tanpa watermark, tanpa logo, dan tanpa branding tambahan. Tidak ada pendaftaran, tidak ada akun, dan tidak ada batas harian untuk jumlah foto yang latar belakangnya Anda hapus.',
      },
      {
        question: 'Apakah penghapusan latar belakang berfungsi di browser seluler?',
        answer:
          'Ya. Model diunduh dan berjalan di Safari pada iOS dan Chrome di Android, dengan kontrol unggah, bandingkan, dan unduh yang sama. Di ponsel, foto besar membutuhkan waktu lebih lama karena AI berjalan di prosesor ponsel — Wi-Fi membantu untuk unduhan model pertama.',
      },
      {
        question: 'Apa bedanya alat ini dengan alat berbayar seperti remove.bg?',
        answer:
          'Alat ini gratis, privat, dan berjalan sepenuhnya di browser Anda tanpa unggahan dan tanpa akun, sedangkan alat cloud berbayar memproses foto Anda di server mereka. Komprominya adalah kualitas pada tepi yang rumit: model kecil di perangkat sangat baik untuk subjek yang jelas tetapi tidak bisa menandingi model cloud besar pada rambut halus atau pemandangan yang ramai.',
      },
      {
        question: 'Bisakah saya memakai potongan di Canva, Photoshop, atau PowerPoint?',
        answer:
          'Ya. PNG transparan hasil ekspor terbuka langsung di Canva, Photoshop, Figma, PowerPoint, dan Google Slides, tempat Anda bisa menempatkannya di atas latar belakang, slide, atau desain apa pun. Unduhan latar belakang solid bekerja dengan cara yang sama untuk aplikasi yang membutuhkan gambar buram.',
      },
      {
        question: 'Apa yang terjadi pada foto saya setelah saya menutup tab?',
        answer:
          'Tidak ada yang disimpan di mana pun: pemrosesan terjadi di memori browser, foto tidak pernah diunggah, dan menutup tab akan menghapus gambar dan potongannya. Hanya model AI yang tersimpan di cache yang tetap berada di browser untuk penggunaan berikutnya yang lebih cepat.',
      },
    ],
    relatedSlugs: ['/add-background-to-image', '/image-resizer', '/png-to-webp'],
  },
];


export const TOOL_BY_SLUG_ID: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_ID.map((t) => [t.slug, t])
);
