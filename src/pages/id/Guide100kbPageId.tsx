import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageIdProps {
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
    text: 'Buka compressmypic.online di browser Anda. Tidak ada yang perlu diinstal dan tidak ada akun yang perlu dibuat — alat ini gratis, tanpa daftar dan tanpa watermark.',
  },
  {
    title: 'Unggah gambar Anda',
    text: 'Seret dan letakkan gambar Anda ke halaman, atau ketuk "Pilih File" untuk memilihnya dari perangkat Anda. JPG, PNG, dan WebP didukung, hingga 20 MB per gambar. Anda dapat mengunggah beberapa gambar sekaligus.',
  },
  {
    title: 'Mulai dengan preset Seimbang',
    text: 'Preset Seimbang mengatur kualitas ke sekitar 70%. Untuk sebagian besar foto, ini sudah memangkas file menjadi sebagian kecil dari ukuran aslinya — periksa ukuran langsung yang ditampilkan di samping gambar Anda untuk melihat posisi Anda.',
  },
  {
    title: 'Turunkan slider kualitas selangkah demi selangkah',
    text: 'Tidak ada kotak tempat Anda mengetik "100KB" — sebagai gantinya, geser slider kualitas ke bawah secara perlahan dan lihat ukuran sebelum dan sesudah yang langsung diperbarui setelah setiap perubahan. Bergeraklah dalam langkah kecil (misalnya 70% ke 60% ke 50%) agar Anda tidak melampaui target dan kehilangan kualitas lebih dari yang diperlukan.',
  },
  {
    title: 'Beralih ke WebP jika Anda masih di atas 100KB',
    text: 'Jika file masih di atas 100KB pada kualitas yang wajar, ubah format keluaran menjadi WebP. WebP biasanya 25–35% lebih kecil daripada JPG dengan kualitas visual yang sama, dan sering kali menutup jarak menuju 100KB tanpa menurunkan kualitas lebih jauh.',
  },
  {
    title: 'Bandingkan sebelum dan sesudah',
    text: 'Buka perbandingan sebelum dan sesudah lalu perbesar pada bagian wajah, teks, dan detail halus. Jika gambar masih terlihat bagus, Anda selesai. Jika terlihat pecah-pecah atau pudar, naikkan kualitas sedikit dan terima file yang sedikit di atas 100KB — foto tajam berukuran 120 KB lebih baik daripada foto buram berukuran 100 KB.',
  },
  {
    title: 'Unduh gambar Anda',
    text: 'Ketuk Unduh untuk menyimpan file yang lebih kecil, atau gunakan "Unduh Semua (ZIP)" jika Anda memperkecil beberapa gambar sekaligus. Gambar asli Anda tidak pernah diubah — Anda selalu mendapatkan salinan baru yang lebih kecil.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'Bagaimana cara membuat foto saya menjadi sekitar 100KB?',
    answer: 'Unggah foto ke CompressMyPic, mulai dengan preset Seimbang, lalu turunkan slider kualitas selangkah demi selangkah sambil memperhatikan ukuran sebelum dan sesudah secara langsung. Berhenti segera setelah ukuran hasil kompresi mendekati 100KB. Jika Anda masih di atasnya, ganti format keluaran menjadi WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'Mengapa tidak ada kotak input 100KB yang pasti?',
    answer: 'Karena setiap foto terkompres secara berbeda — langit yang polos menyusut jauh lebih banyak daripada keramaian yang sibuk pada kualitas yang sama. Kotak "100KB" yang tetap harus menebak-nebak. Sebagai gantinya, CompressMyPic menunjukkan ukuran hasil kompresi secara langsung setelah setiap perubahan, sehingga Anda dapat mengarahkan file ke 100KB sendiri dengan kendali penuh atas kualitas.',
  },
  {
    id: 'kb-faq-3',
    question: 'Pengaturan kualitas apa yang menghasilkan sekitar 100KB?',
    answer: 'Tergantung pada fotonya, tetapi untuk foto ponsel pada umumnya, kualitas 50–70% biasanya menghasilkan sekitar 100KB. Foto sederhana dengan warna datar dapat mencapai 100KB pada 70%, sementara lanskap yang detail mungkin membutuhkan 40–50%. Perhatikan ukuran langsung — angka itu adalah kebenarannya, bukan persentase yang tetap.',
  },
  {
    id: 'kb-faq-4',
    question: 'Foto saya masih di atas 100KB pada kualitas rendah — bagaimana sekarang?',
    answer: 'Pertama, ganti format keluaran menjadi WebP, yang biasanya 25–35% lebih kecil daripada JPG. Jika masih di atas, turunkan kualitas sedikit lagi dan periksa perbandingannya — penurunan kecil tambahan sering kali tidak terlihat. Sebagai upaya terakhir, foto berdimensi sangat besar mungkin membutuhkan pengaturan kualitas yang lebih rendah dari yang Anda perkirakan, karena lebih banyak piksel berarti lebih banyak data.',
  },
  {
    id: 'kb-faq-5',
    question: 'Haruskah saya menggunakan WebP untuk mencapai 100KB?',
    answer: 'Ya, kapan pun Anda bisa. WebP adalah cara termudah untuk mencapai 100KB tanpa menurunkan kualitas terlalu jauh, karena format ini menghasilkan file yang lebih kecil dengan kualitas visual yang sama seperti JPG. Gunakan WebP untuk gambar situs web dan di mana pun browser modern digunakan; gunakan JPG hanya saat gambar harus dibuka di perangkat lunak lama atau dibagikan di WhatsApp.',
  },
  {
    id: 'kb-faq-6',
    question: 'Apakah mengurangi menjadi 100KB membuat foto buram?',
    answer: 'Tidak jika Anda melakukannya dengan hati-hati. Pada 100KB, foto ponsel biasa tetap terlihat tajam di layar, karena layar menampilkan piksel yang jauh lebih sedikit daripada yang ditangkap kamera. Foto hanya terlihat buram jika Anda mendorong kualitas terlalu rendah (di bawah sekitar 40%) atau jika foto dicetak dalam ukuran besar. Selalu periksa perbandingan sebelum dan sesudah sebelum mengunduh.',
  },
  {
    id: 'kb-faq-7',
    question: 'Bisakah saya mengurangi PNG menjadi 100KB?',
    answer: 'Ya, tetapi foto PNG berukuran besar sejak awal, sehingga membutuhkan usaha lebih. Unggah PNG, turunkan slider kualitas, dan ganti keluaran menjadi WebP atau JPG — itu saja sering kali memangkas ukuran lebih dari setengah. Pertahankan keluaran PNG hanya jika gambar membutuhkan transparansi, dan terima bahwa PNG transparan mungkin tidak mencapai 100KB.',
  },
  {
    id: 'kb-faq-8',
    question: 'Bagaimana cara mengurangi ukuran gambar menjadi 200KB?',
    answer: 'Gunakan metode yang sama: unggah gambar, mulai dengan preset Seimbang, dan turunkan slider kualitas sambil memperhatikan ukuran langsung hingga mendekati 200KB. Sebagian besar foto mencapai 200KB dengan mudah pada kualitas 70–80%, sehingga Anda biasanya tidak perlu menurunkan kualitas sama sekali.',
  },
  {
    id: 'kb-faq-9',
    question: 'Bagaimana cara mengurangi ukuran gambar menjadi 50KB?',
    answer: 'Unggah gambar, ganti format keluaran menjadi WebP, dan turunkan slider kualitas secara bertahap hingga ukuran langsung mendekati 50KB — biasanya sekitar 40–55% kualitas untuk foto. Periksa perbandingannya dengan saksama, karena pada 50KB detail halus mulai berkurang; ukuran ini cocok untuk thumbnail dan chat, kurang cocok untuk foto yang ingin Anda simpan.',
  },
  {
    id: 'kb-faq-10',
    question: 'Bagaimana cara mengurangi ukuran gambar menjadi 20KB?',
    answer: 'Gunakan keluaran WebP dan pengaturan kualitas rendah, biasanya 25–40%, dan perhatikan ukuran langsung. 20KB sangat kecil, jadi perkirakan akan terlihat kelembutan — ukuran ini cocok untuk ikon, thumbnail, dan gambar pratinjau kecil, bukan foto yang menampilkan wajah. Jika gambar tetap tidak mencapai 20KB, kemungkinan gambar tersebut memiliki terlalu banyak detail untuk file sekecil itu.',
  },
  {
    id: 'kb-faq-11',
    question: 'Berapa ukuran file yang baik untuk gambar situs web?',
    answer: 'Usahakan di bawah 100KB per gambar untuk foto konten biasa, dan di bawah 200KB untuk gambar hero yang besar. File kecil membuat halaman dimuat lebih cepat, yang diperhatikan pengunjung dan dihargai Google. Gunakan format WebP dan preset Seimbang sebagai titik awal untuk gambar situs web.',
  },
  {
    id: 'kb-faq-12',
    question: 'Berapa batas ukuran lampiran email?',
    answer: 'Sebagian besar penyedia email mengizinkan 20–25 MB per pesan secara total, termasuk semua lampiran — Gmail mengizinkan 25 MB. Satu foto yang dikurangi menjadi 100KB tidak pernah menjadi masalah; bahkan sepuluh foto masing-masing 100KB hanya berjumlah 1 MB. Mengompres terlebih dahulu adalah yang membuat pengiriman beberapa foto lewat email menjadi mudah.',
  },
  {
    id: 'kb-faq-13',
    question: 'Bisakah saya mengurangi beberapa gambar menjadi 100KB sekaligus?',
    answer: 'Ya. Unggah semua gambar bersamaan, terapkan preset dan kualitas yang sama untuk semuanya, dan periksa ukuran langsung masing-masing. Jika satu gambar masih di atas 100KB, sesuaikan gambar tersebut secara individual, lalu unduh semuanya bersamaan dengan tombol "Unduh Semua (ZIP)".',
  },
  {
    id: 'kb-faq-14',
    question: 'Apakah alat ini mengubah dimensi gambar saya?',
    answer: 'Tidak. CompressMyPic mempertahankan dimensi gambar Anda persis seperti semula — hanya ukuran file yang dikurangi. Foto Anda tetap memiliki lebar, tinggi, dan rasio aspek yang sama seperti aslinya, sehingga foto 4000×3000 tetap 4000×3000, hanya dengan file yang jauh lebih kecil.',
  },
  {
    id: 'kb-faq-15',
    question: 'Bagaimana cara memeriksa ukuran gambar hasil kompresi saya?',
    answer: 'CompressMyPic menampilkan ukuran asli dan ukuran hasil kompresi untuk setiap gambar, secara langsung, tepat di bawah setiap foto — misalnya "4.2 MB → 98 KB". Anda juga dapat memeriksa file yang diunduh di perangkat Anda: di ponsel, lihat detail file di galeri atau pengelola file Anda.',
  },
  {
    id: 'kb-faq-16',
    question: 'Apakah 100KB cukup berkualitas untuk situs web?',
    answer: 'Ya, untuk hampir semua penggunaan web. Foto situs web ditampilkan dengan lebar beberapa ratus piksel, sehingga gambar 100KB terlihat tajam di layar. Hanya gambar hero layar penuh atau foto yang dimaksudkan untuk dicetak yang membutuhkan file lebih besar. Kompres menjadi 100KB, periksa perbandingannya, dan Anda akan melihat kualitasnya tetap terjaga.',
  },
  {
    id: 'kb-faq-17',
    question: 'Bisakah saya mengurangi tangkapan layar menjadi 100KB?',
    answer: 'Ya, dan tangkapan layar adalah kasus termudah. Tangkapan layar memiliki area warna datar yang luas, sehingga terkompres dengan sangat baik — tangkapan layar yang awalnya 1 MB sering kali turun di bawah 100KB dengan preset Seimbang. Coba keluaran WebP untuk hasil terkecil.',
  },
  {
    id: 'kb-faq-18',
    question: 'Apakah gambar saya diunggah ke mana pun saat saya mengompresnya?',
    answer: 'Tidak. Semua kompresi terjadi di dalam browser Anda sendiri di perangkat Anda, sehingga gambar Anda tidak pernah diunggah ke server, disimpan, atau dilihat oleh orang lain. Gambar tetap berada di memori browser dan terhapus saat Anda menutup atau memuat ulang tab.',
  },
  {
    id: 'kb-faq-19',
    question: 'Apakah ada batas jumlah gambar yang dapat saya perkecil?',
    answer: 'Tidak. Tidak ada batas jumlah gambar yang dapat Anda kompres, dan tidak ada akun atau pendaftaran yang diperlukan. Satu-satunya batas adalah 20 MB per gambar, yang mencakup foto kamera beresolusi tinggi dan tangkapan layar besar.',
  },
  {
    id: 'kb-faq-20',
    question: 'Apakah gratis mengurangi gambar menjadi 100KB?',
    answer: 'Ya, sepenuhnya gratis. Tidak ada biaya, tidak ada paket berbayar, tidak ada kredit, dan tidak ada watermark pada gambar hasil kompresi Anda. Buka situsnya, perkecil gambar Anda menjadi 100KB, dan unduh sebanyak yang Anda mau.',
  },
];

export const Guide100kbPageId: React.FC<Guide100kbPageIdProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Cara Mengurangi Ukuran Gambar menjadi 100KB untuk Web & Email';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Kurangi ukuran gambar menjadi 100KB untuk situs web dan email dengan kompresor online gratis. Panduan langkah demi langkah — tanpa daftar, tanpa watermark, gambar tetap di perangkat Anda.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/id/panduan/mengurangi-ukuran-gambar-menjadi-100-kb';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cara mengurangi ukuran gambar menjadi 100KB untuk situs web dan email',
          description: 'Gunakan slider kualitas dan keluaran WebP di CompressMyPic untuk memperkecil gambar menjadi sekitar 100KB.',
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
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
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
            Cara Mengurangi Ukuran Gambar menjadi 100KB untuk Situs Web dan Email
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Foto sebesar 4 MB memperlambat situs web Anda dan menyumbat email. Mengecilkannya menjadi sekitar 100KB membuat halaman dimuat dengan cepat dan email terkirim seketika — dan jika Anda melakukannya dengan benar, tidak ada yang dapat melihat perbedaannya.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>Mengapa 100KB Adalah Angka Ajaib</span>
            </h2>
            <p>
              100KB adalah ukuran yang dituju kebanyakan orang karena berada di titik yang ideal: cukup kecil untuk dimuat seketika di situs web atau masuk ke email apa pun, tetapi cukup besar untuk tetap terlihat tajam di layar. Foto ponsel pada umumnya berukuran 3–5 MB, sehingga mencapai 100KB berarti memangkas sekitar 97% file — dan kompresi modern melakukannya sebagian besar dengan menghapus data yang tidak dapat dilihat mata Anda.
            </p>
            <p>
              Satu catatan jujur sebelum Anda memulai: CompressMyPic tidak memiliki kotak tempat Anda mengetik "100KB" dan mendapatkan ukuran yang persis. Tidak ada alat jujur yang dapat menjanjikan angka yang persis, karena setiap foto terkompres secara berbeda. Sebagai gantinya, alat ini menunjukkan ukuran hasil kompresi secara langsung setelah setiap perubahan, dan Anda mengarahkannya sendiri ke 100KB dengan slider kualitas. Panduan ini menunjukkan caranya secara tepat.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>Langkah demi Langkah: Mengurangi Gambar menjadi 100KB</span>
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

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="Tangkapan layar mengunggah foto besar ke CompressMyPic untuk menguranginya menjadi 100KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Unggah foto Anda — ukuran aslinya langsung ditampilkan, sehingga Anda tahu seberapa jauh Anda harus melangkah.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>Target Umum Sekilas</span>
            </h2>
            <p>
              100KB bukan satu-satunya target yang dibutuhkan orang. Metode yang sama berlaku untuk ukuran apa pun — berikut perkiraan untuk masing-masing:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Target</th>
                    <th className="px-4 py-3 font-semibold">Kualitas umum</th>
                    <th className="px-4 py-3 font-semibold">Cocok untuk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">200KB</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">Foto blog, gambar web besar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">100KB</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">Foto situs web, lampiran email</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">50KB</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">Thumbnail, chat, halaman cepat</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">20KB</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">Ikon, pratinjau kecil</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Ini adalah titik awal, bukan janji. Foto sederhana mencapai 100KB dengan mudah; foto yang sibuk dan detail membutuhkan pengaturan kualitas yang lebih rendah. Percayalah pada angka ukuran langsung, bukan persentasenya.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>Tips untuk Situs Web dan Email</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Untuk situs web, gunakan keluaran WebP — ini cara tercepat untuk mencapai 100KB, dan setiap browser modern mendukungnya.</li>
              <li>Untuk email, JPG adalah format paling aman karena setiap aplikasi email membukanya. JPG 100KB terlampir seketika dan tidak pernah gagal karena ukuran.</li>
              <li>Kompres semua foto untuk satu halaman atau satu email bersamaan, lalu unduh semuanya dengan tombol Unduh Semua (ZIP).</li>
              <li>Jangan mengejar angka 100KB yang persis. Foto tajam berukuran 115KB lebih baik daripada foto buram yang persis 100KB — perbedaan waktu pemuatannya tidak berarti.</li>
              <li>Selalu periksa perbandingan sebelum dan sesudah dengan zoom penuh sebelum Anda memublikasikan atau mengirim foto.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="Tangkapan layar ukuran file sebelum dan sesudah secara langsung yang menunjukkan gambar dikurangi menjadi sekitar 100KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Ukuran sebelum dan sesudah secara langsung menunjukkan kemajuan Anda — turunkan slider hingga ukuran hasil kompresi mendekati 100KB.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Ketika 100KB Tidak Mungkin</span>
            </h2>
            <p className="text-sm sm:text-base">
              Beberapa gambar memang tidak dapat mencapai 100KB tanpa terlihat buruk: foto yang sangat besar dan sangat detail, atau PNG dengan transparansi yang harus tetap berupa PNG. Dalam kasus tersebut, jangan memaksakannya. Foto tajam berukuran 180KB selalu mengalahkan foto rusak berukuran 100KB — untuk situs web, foto tersebut tetap dimuat dengan cepat, dan untuk email, ukurannya masih jauh di bawah batas lampiran apa pun. Tujuannya adalah file kecil yang tetap terlihat bagus, bukan angka ajaib.
            </p>
          </section>

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
                onClick={() => onNavigate('/id/panduan/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP — format mana yang harus Anda gunakan?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Ukuran file, kualitas, dan transparansi dibandingkan, agar Anda memilih format yang tepat setiap saat.</p>
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
              onClick={() => onNavigate('/id/panduan/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
