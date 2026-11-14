import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideFormatsPageIdProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Buka CompressMyPic',
    text: 'Buka compressmypic.online di browser Anda. Tidak ada yang perlu diinstal, tidak ada akun yang perlu dibuat, dan tidak ada file yang pernah diunggah ke server.',
  },
  {
    title: 'Unggah gambar Anda',
    text: 'Seret dan letakkan gambar Anda atau ketuk "Pilih File" untuk memilihnya. File JPG, PNG, dan WebP semuanya didukung, hingga 20 MB per gambar.',
  },
  {
    title: 'Putuskan: pertahankan format atau konversi',
    text: 'Pilih "Original" untuk mempertahankan format yang sudah dimiliki gambar Anda, atau pilih JPG, PNG, atau WebP sebagai keluaran. Gunakan panduan di bawah ini untuk memutuskan: JPG untuk foto, PNG saat Anda membutuhkan transparansi, WebP saat Anda menginginkan file terkecil untuk situs web.',
  },
  {
    title: 'Pilih preset kualitas',
    text: 'Mulailah dengan preset Seimbang (sekitar 70%). Untuk foto yang ingin tetap terlihat sempurna, gunakan preset Tinggi atau kualitas 85–90%. Untuk gambar web yang kecil, pengaturan yang lebih rendah sudah cukup.',
  },
  {
    title: 'Periksa ukuran langsung dan bandingkan',
    text: 'Setiap gambar menampilkan ukuran aslinya dan ukuran barunya setelah dikompres. Buka perbandingan sebelum dan sesudah lalu perbesar — jika Anda tidak dapat melihat perbedaan, pengaturannya sudah tepat. Coba ganti format keluaran ke WebP dan lihat seberapa jauh file mengecil.',
  },
  {
    title: 'Unduh gambar Anda',
    text: 'Unduh gambar tunggal, atau gunakan "Unduh Semua (ZIP)" saat Anda mengonversi beberapa gambar sekaligus. File asli Anda tidak pernah diubah — Anda mendapatkan salinan baru yang lebih kecil.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'Apa perbedaan antara JPG dan PNG?',
    answer: 'JPG adalah format lossy yang dibuat untuk foto: format ini membuang sebagian detail untuk menghasilkan file yang jauh lebih kecil, dan tidak dapat membuat transparansi. PNG bersifat lossless dan mendukung transparansi, sehingga sempurna untuk logo dan grafis — tetapi foto PNG beberapa kali lebih besar daripada foto yang sama yang disimpan sebagai JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'Apakah WebP lebih baik daripada JPG?',
    answer: 'Untuk ukuran file, ya — WebP biasanya 25–35% lebih kecil daripada JPG dengan kualitas yang sebanding, dan juga mendukung transparansi. Satu-satunya alasan memilih JPG daripada WebP adalah kompatibilitas: beberapa perangkat lunak dan aplikasi lama masih menangani JPG dengan lebih baik, dan WhatsApp menampilkan pratinjau foto JPG dengan lebih andal.',
  },
  {
    id: 'fmt-faq-3',
    question: 'Apakah WebP lebih baik daripada PNG?',
    answer: 'Biasanya, ya. WebP mendukung transparansi seperti PNG tetapi menghasilkan file yang jauh lebih kecil, dan juga dapat melakukan kompresi lossy seperti JPG. PNG tetap menjadi pilihan yang lebih aman saat Anda membutuhkan kualitas lossless yang sempurna untuk logo atau grafis yang akan diedit lagi nanti.',
  },
  {
    id: 'fmt-faq-4',
    question: 'Apakah PNG mendukung transparansi dan JPG tidak?',
    answer: 'Benar. PNG mendukung latar belakang transparan (saluran alpha), itulah sebabnya logo dan ikon biasanya berupa PNG. JPG sama sekali tidak memiliki transparansi — area transparan pada JPG menjadi warna solid, biasanya putih, jadi jangan pernah menyimpan logo berlatar transparan sebagai JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'Mengapa file PNG jauh lebih besar daripada JPG?',
    answer: 'Karena PNG bersifat lossless: format ini menyimpan setiap piksel detail secara persis, sementara JPG membuang detail yang nyaris tidak terlihat oleh mata. Foto kamera yang disimpan sebagai PNG dapat berukuran 5–10 kali lebih besar daripada foto yang sama sebagai JPG. Itulah sebabnya foto hampir tidak boleh berupa PNG.',
  },
  {
    id: 'fmt-faq-6',
    question: 'Kapan saya harus menggunakan JPG daripada WebP?',
    answer: 'Gunakan JPG saat gambar akan dibuka di perangkat lunak lama, dikirim melalui WhatsApp atau email yang mengharuskan pratinjau dijamin tampil, atau dicetak. WebP lebih baik untuk situs web, tetapi untuk membagikan foto kepada seseorang, JPG tetap menjadi format yang paling universal.',
  },
  {
    id: 'fmt-faq-7',
    question: 'Bisakah saya mengonversi PNG ke JPG?',
    answer: 'Ya. Unggah PNG ke CompressMyPic, pilih JPG sebagai format keluaran, lalu unduh. Ingat saja bahwa JPG tidak memiliki transparansi: jika PNG Anda berlatar transparan, pilih warna latar terlebih dahulu, karena area transparan tersebut akan menjadi putih solid.',
  },
  {
    id: 'fmt-faq-8',
    question: 'Bisakah saya mengonversi JPG ke WebP?',
    answer: 'Ya. Unggah JPG, pilih WebP sebagai keluaran, lalu unduh — file biasanya 25–35% lebih kecil dengan kualitas visual yang sama. Anda dapat mengonversi beberapa JPG ke WebP sekaligus dan mengunduh semuanya sebagai ZIP.',
  },
  {
    id: 'fmt-faq-9',
    question: 'Apakah mengonversi JPG ke PNG meningkatkan kualitas?',
    answer: 'Tidak. Mengonversi JPG ke PNG tidak dapat mengembalikan detail yang sudah dibuang oleh kompresi JPG — hanya membuat file jauh lebih besar. Satu-satunya alasan yang baik untuk mengonversi JPG ke PNG adalah jika Anda perlu mengedit gambar lagi tanpa kehilangan kualitas lebih lanjut.',
  },
  {
    id: 'fmt-faq-10',
    question: 'Format apa yang harus saya gunakan untuk situs web?',
    answer: 'WebP terlebih dahulu, JPG sebagai cadangan. WebP menghasilkan file terkecil, sehingga halaman dimuat lebih cepat — dan kecepatan halaman penting bagi pengunjung maupun Google. Gunakan PNG hanya untuk gambar yang membutuhkan transparansi, seperti logo, dan JPG untuk foto jika Anda tidak dapat menggunakan WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: 'Format apa yang terbaik untuk logo?',
    answer: 'PNG jika logo membutuhkan latar belakang transparan, karena JPG tidak dapat membuat transparansi. WebP juga mendukung transparansi dan menghasilkan file yang lebih kecil, sehingga menjadi pilihan yang baik untuk logo di situs web. Jangan pernah menyimpan logo sebagai JPG jika latar belakangnya harus tetap transparan.',
  },
  {
    id: 'fmt-faq-12',
    question: 'Format apa yang terbaik untuk tangkapan layar?',
    answer: 'PNG atau WebP. Tangkapan layar memiliki tepi yang tajam dan warna datar, yang ditangani PNG dan WebP dengan baik. JPG mengaburkan tepi teks yang tajam. Untuk file tangkapan layar terkecil, coba keluaran WebP di CompressMyPic — biasanya jauh lebih kecil daripada PNG tanpa perbedaan yang terlihat.',
  },
  {
    id: 'fmt-faq-13',
    question: 'Apakah semua browser sudah mendukung WebP sekarang?',
    answer: 'Ya, praktis semuanya. Chrome, Edge, Firefox, Safari, dan semua browser ponsel modern telah mendukung WebP selama bertahun-tahun. Hanya browser yang sangat lama dan beberapa aplikasi lama yang tidak dapat membuka WebP, dan itulah satu-satunya alasan JPG masih berguna.',
  },
  {
    id: 'fmt-faq-14',
    question: 'Apakah WhatsApp atau Instagram menerima WebP?',
    answer: 'WhatsApp dapat menerima file WebP, tetapi file tersebut mungkin tidak tampil sebagai foto biasa, jadi JPG lebih aman untuk membagikan foto di sana. Instagram menerima JPG dan PNG untuk postingan dan mengonversi unggahan sendiri. Untuk berbagi di media sosial, tetap gunakan JPG untuk foto.',
  },
  {
    id: 'fmt-faq-15',
    question: 'Apakah mengonversi foto ke WebP akan menghilangkan kualitas?',
    answer: 'Hanya sebanyak yang Anda pilih. WebP menggunakan ide yang sama seperti JPG — pengaturan kualitas yang menukar sedikit detail dengan file yang lebih kecil. Pada kualitas 80–90%, foto WebP terlihat identik dengan JPG aslinya, dan file-nya sekitar sepertiga lebih kecil.',
  },
  {
    id: 'fmt-faq-16',
    question: 'Apa perbedaan antara JPG dan JPEG?',
    answer: 'Tidak ada — JPG dan JPEG adalah format yang sama. JPEG adalah nama lengkapnya (Joint Photographic Experts Group) dan JPG adalah ekstensi file singkatnya. File bernama foto.jpg dan file bernama foto.jpeg adalah jenis gambar yang sama.',
  },
  {
    id: 'fmt-faq-17',
    question: 'Haruskah saya mempertahankan format asli atau mengonversi?',
    answer: 'Pertahankan format asli jika Anda puas dengan ukurannya — itu pilihan paling sederhana dan tidak ada yang hilang. Konversi saat Anda memiliki alasan: JPG ke WebP untuk memperkecil foto situs web, PNG ke JPG untuk memperkecil foto yang tidak membutuhkan transparansi, atau PNG ke WebP untuk memperkecil logo.',
  },
  {
    id: 'fmt-faq-18',
    question: 'Format mana yang menghasilkan ukuran file terkecil?',
    answer: 'WebP, dalam hampir semua kasus. Untuk foto, WebP biasanya 25–35% lebih kecil daripada JPG dengan kualitas visual yang sama. Untuk grafis dengan transparansi, WebP biasanya jauh lebih kecil daripada PNG. Itulah sebabnya WebP adalah format terbaik untuk situs web.',
  },
  {
    id: 'fmt-faq-19',
    question: 'Bisakah CompressMyPic mengonversi antara JPG, PNG, dan WebP?',
    answer: 'Ya. Unggah gambar JPG, PNG, atau WebP, pilih format keluaran yang Anda inginkan — asli, JPG, PNG, atau WebP — lalu unduh file hasil konversi. Anda dapat mengonversi beberapa gambar sekaligus dengan pengaturan yang sama dan mengunduh semuanya sebagai ZIP.',
  },
  {
    id: 'fmt-faq-20',
    question: 'Apa yang terjadi pada transparansi jika saya mengonversi PNG ke JPG?',
    answer: 'Transparansi hilang. JPG tidak dapat menyimpan transparansi, sehingga bagian transparan pada PNG Anda menjadi warna solid. CompressMyPic memungkinkan Anda memilih warna latar untuk mengisi area tersebut, jadi pilih warna yang sesuai dengan tempat gambar akan digunakan — putih adalah pilihan yang biasa.',
  },
];

export const GuideFormatsPageId: React.FC<GuideFormatsPageIdProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: Format Mana yang Harus Anda Gunakan?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP dijelaskan dengan sederhana: ukuran file, kualitas, dan transparansi dibandingkan, agar Anda dapat memilih format yang tepat untuk foto, logo, dan situs web.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/id/panduan/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cara memilih antara JPG, PNG, dan WebP serta mengonversi gambar',
          description: 'Bandingkan JPG, PNG, dan WebP, lalu kompres atau konversi gambar Anda dengan CompressMyPic.',
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
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
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
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/id/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Kompresor Gambar</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            JPG vs PNG vs WebP — Format Mana yang Harus Anda Gunakan?
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Memilih format yang salah dapat membuat gambar Anda sepuluh kali lebih besar dari yang seharusnya — atau merusak logo transparan. Berikut perbandingan yang sederhana dan jujur, serta cara beralih antar format dalam hitungan detik.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>Jawaban Singkat</span>
            </h2>
            <p>
              Jika Anda hanya mengingat satu hal, ingatlah ini: gunakan JPG untuk foto, PNG untuk logo dan apa pun yang membutuhkan transparansi, dan WebP kapan pun Anda menginginkan file terkecil — terutama di situs web. Tabel di bawah ini menunjukkan alasannya.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Format</th>
                    <th className="px-4 py-3 font-semibold">Ukuran file</th>
                    <th className="px-4 py-3 font-semibold">Transparansi</th>
                    <th className="px-4 py-3 font-semibold">Terbaik untuk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">JPG</td>
                    <td className="px-4 py-3">Kecil</td>
                    <td className="px-4 py-3">Tidak</td>
                    <td className="px-4 py-3">Foto, berbagi, mencetak</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">PNG</td>
                    <td className="px-4 py-3">Besar</td>
                    <td className="px-4 py-3">Ya</td>
                    <td className="px-4 py-3">Logo, ikon, tangkapan layar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">WebP</td>
                    <td className="px-4 py-3">Terkecil</td>
                    <td className="px-4 py-3">Ya</td>
                    <td className="px-4 py-3">Situs web, foto web</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Camera className="w-4 h-4" />
              </span>
              <span>JPG: Terbaik untuk Foto</span>
            </h2>
            <p className="text-sm sm:text-base">
              JPG (juga ditulis JPEG) adalah format foto klasik. Format ini menggunakan kompresi lossy: membuang detail halus yang nyaris tidak terlihat oleh mata, sehingga file menjadi jauh lebih kecil. Foto kamera sebesar 5 MB dapat menjadi 500 KB sebagai JPG dan tetap terlihat bagus. JPG tidak dapat membuat transparansi, sehingga menjadi pilihan yang salah untuk logo — tetapi untuk foto biasa apa pun, format ini adalah pilihan default yang aman dan universal yang dapat dibuka oleh setiap perangkat dan aplikasi.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: Terbaik untuk Logo dan Transparansi</span>
            </h2>
            <p className="text-sm sm:text-base">
              PNG bersifat lossless: format ini menyimpan setiap piksel secara persis, dan mendukung latar belakang transparan. Hal itu menjadikannya format yang tepat untuk logo, ikon, dan grafis berisi teks. Harganya adalah ukuran file — foto yang disimpan sebagai PNG dapat berukuran 5–10 kali lebih besar daripada foto yang sama sebagai JPG. Jangan pernah menyimpan foto kamera sebagai PNG kecuali Anda memiliki alasan khusus.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: Terbaik untuk Situs Web</span>
            </h2>
            <p className="text-sm sm:text-base">
              WebP adalah format modern yang dibuat oleh Google. Format ini melakukan semuanya: kompresi lossy seperti JPG, transparansi seperti PNG, dan file yang biasanya 25–35% lebih kecil daripada JPG dengan kualitas visual yang sama. Setiap browser modern mendukungnya, itulah sebabnya format ini adalah yang terbaik untuk gambar situs web. Satu-satunya kelemahannya adalah kompatibilitas dengan perangkat lunak lama — dan pratinjau WhatsApp, yang masih lebih aman menggunakan JPG.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="Tangkapan layar membandingkan foto yang sama yang disimpan sebagai JPG, PNG, dan WebP beserta ukuran file-nya"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Foto yang sama dalam tiga format: WebP adalah yang terkecil, PNG adalah yang terbesar, dan JPG berada di antaranya.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>Langkah demi Langkah: Mengompres atau Mengonversi Gambar Anda</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Format Mana untuk Pekerjaan Apa?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Foto kamera — JPG atau WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  JPG untuk berbagi dan mencetak, WebP untuk situs web Anda. Keduanya menjaga foto tetap terlihat bagus dengan ukuran yang jauh lebih kecil dari aslinya.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Logo dan ikon — PNG atau WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Anda membutuhkan transparansi, jadi JPG tidak bisa. PNG adalah pilihan klasik yang aman; WebP lebih kecil dan berfungsi di semua tempat modern.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Tangkapan layar — WebP atau PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Teks yang tajam dan warna datar cocok dengan WebP dan PNG. JPG mengaburkan tepi teks, jadi hindari JPG untuk tangkapan layar.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Gambar situs web — WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  File terkecil berarti halaman yang lebih cepat. Konversi foto situs web Anda ke WebP dan pertahankan JPG sebagai cadangan untuk browser yang sangat lama.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="Tangkapan layar memilih format keluaran JPG, PNG, atau WebP di CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Pilih format keluaran Anda di CompressMyPic — pertahankan format asli, atau konversi ke JPG, PNG, atau WebP.
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Pertanyaan yang Sering Diajukan</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">Panduan Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/id/panduan/mengompres-gambar-untuk-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Cara mengompres gambar untuk WhatsApp tanpa kehilangan kualitas</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Perkecil foto sendiri terlebih dahulu, lalu kirim sebagai dokumen agar WhatsApp tidak dapat membuatnya buram.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/id/panduan/mengurangi-ukuran-gambar-menjadi-100-kb')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Cara mengurangi ukuran gambar menjadi 100KB untuk situs web dan email</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Panduan langkah demi langkah untuk mencapai 100KB tanpa merusak foto Anda.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/id/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Kompres Gambar Gratis
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/id/panduan/mengompres-gambar-untuk-whatsapp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              Kompres untuk WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
