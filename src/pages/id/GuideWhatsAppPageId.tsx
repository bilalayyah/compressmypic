import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';

interface GuideWhatsAppPageIdProps {
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
    text: 'Buka compressmypic.online di browser ponsel atau komputer Anda. Tidak ada yang perlu diinstal dan tidak ada akun yang perlu dibuat — alat ini langsung terbuka.',
  },
  {
    title: 'Unggah foto Anda',
    text: 'Ketuk "Pilih File" dan pilih foto dari galeri Anda, atau seret dan letakkan ke halaman. Anda dapat mengunggah beberapa foto sekaligus. Setiap gambar dapat berukuran hingga 20 MB.',
  },
  {
    title: 'Mulai dengan preset Seimbang',
    text: 'Preset Seimbang (kualitas sekitar 70%) adalah titik awal yang baik untuk foto WhatsApp. Preset ini memperkecil file secara signifikan sementara gambar tetap terlihat tajam di layar ponsel.',
  },
  {
    title: 'Periksa ukuran sebelum dan sesudah secara langsung',
    text: 'Setiap foto menampilkan ukuran aslinya dan ukuran barunya setelah dikompres secara berdampingan. Jika file masih lebih besar dari yang Anda inginkan, geser slider kualitas sedikit lebih rendah dan lihat ukurannya berubah secara instan.',
  },
  {
    title: 'Pertahankan JPG untuk foto',
    text: 'Untuk foto biasa, pertahankan format keluaran sebagai JPG. Format ini paling cocok ditangani WhatsApp, dan menghasilkan file terkecil untuk foto. Gunakan PNG hanya jika gambar Anda membutuhkan transparansi, seperti logo.',
  },
  {
    title: 'Bandingkan sebelum dan sesudah',
    text: 'Buka perbandingan sebelum dan sesudah untuk memeriksa apakah gambar masih terlihat bagus. Perbesar pada bagian wajah dan teks — jika Anda tidak melihat perbedaan yang nyata, pengaturan kualitasnya sudah tepat.',
  },
  {
    title: 'Unduh foto yang lebih kecil',
    text: 'Ketuk Unduh pada foto, atau gunakan "Unduh Semua (ZIP)" jika Anda mengompres beberapa foto sekaligus. File yang lebih kecil disimpan ke perangkat Anda — foto asli Anda tidak pernah diubah.',
  },
  {
    title: 'Kirim di WhatsApp dengan cara yang cerdas',
    text: 'Jika Anda menginginkan kualitas sebaik mungkin, kirim foto hasil kompresi sebagai dokumen: di WhatsApp ketuk Lampirkan, lalu Dokumen, dan pilih file tersebut. WhatsApp mengirim dokumen tanpa perubahan apa pun, sehingga foto Anda tiba persis seperti hasil kompresi Anda. Jika Anda mengirimnya sebagai foto, WhatsApp akan mengompresnya untuk kedua kalinya.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'Mengapa WhatsApp menurunkan kualitas foto?',
    answer: 'Saat Anda mengirim foto dengan cara biasa, WhatsApp mengompres ulang foto tersebut untuk menghemat kuota dan penyimpanan, sering kali mengecilkannya menjadi ukuran yang jauh lebih kecil dan kualitas yang lebih rendah. Itulah sebabnya foto kamera yang tajam bisa terlihat lembut atau buram setelah dikirim.',
  },
  {
    id: 'wa-faq-2',
    question: 'Apakah WhatsApp mengompres gambar yang dikirim sebagai dokumen?',
    answer: 'Tidak. Saat Anda mengirim gambar sebagai dokumen (Lampirkan, lalu Dokumen), WhatsApp mengirim file persis apa adanya, tanpa kompresi tambahan. Itulah cara terbaik untuk membagikan foto dengan kualitas penuh.',
  },
  {
    id: 'wa-faq-3',
    question: 'Berapa ukuran gambar maksimum yang dapat saya kirim di WhatsApp?',
    answer: 'WhatsApp mengizinkan dokumen hingga 2 GB, jadi foto hasil kompresi sebesar beberapa ratus KB tidak pernah menjadi masalah. Foto yang dikirim dengan cara biasa dikompres ulang oleh WhatsApp sendiri, sehingga batas yang penting dalam praktik adalah kualitas, bukan ukuran.',
  },
  {
    id: 'wa-faq-4',
    question: 'Bagaimana cara mengirim foto berkualitas penuh di WhatsApp?',
    answer: 'Pertama, kompres foto sendiri dengan CompressMyPic agar ukurannya masuk akal, lalu kirim di WhatsApp sebagai dokumen, bukan sebagai foto. Ketuk Lampirkan, pilih Dokumen, lalu pilih file tersebut. Foto akan tiba tanpa dikompres lagi oleh WhatsApp.',
  },
  {
    id: 'wa-faq-5',
    question: 'Haruskah saya mengompres sebelum mengirim atau membiarkan WhatsApp yang melakukannya?',
    answer: 'Kompres sendiri terlebih dahulu. WhatsApp mengompres secara agresif dan Anda tidak dapat mengendalikannya. Saat Anda mengompres dengan CompressMyPic terlebih dahulu, Anda memilih kualitasnya, memeriksa hasilnya, lalu mengirim file sebagai dokumen agar WhatsApp tidak menyentuhnya lagi.',
  },
  {
    id: 'wa-faq-6',
    question: 'Pengaturan kualitas apa yang harus saya gunakan untuk foto WhatsApp?',
    answer: 'Mulailah dengan preset Seimbang pada sekitar 70%. Untuk foto yang penting, gunakan 80–85% dan periksa perbandingan sebelum dan sesudah. Untuk foto sehari-hari yang mengutamakan kecepatan, 50–60% masih terlihat bagus di layar ponsel dan menghasilkan file yang jauh lebih kecil.',
  },
  {
    id: 'wa-faq-7',
    question: 'Apakah mengompres dua kali membuat foto lebih buruk?',
    answer: 'Ya. Setiap putaran kompresi JPEG membuang sedikit detail lagi. Itulah sebabnya Anda harus mengompres sekali dengan CompressMyPic lalu mengirim hasilnya sebagai dokumen, daripada membiarkan WhatsApp mengompres foto yang sudah dikompres untuk kedua kalinya.',
  },
  {
    id: 'wa-faq-8',
    question: 'Bisakah saya mengompres foto WhatsApp di ponsel?',
    answer: 'Ya. CompressMyPic berfungsi di browser pada Android dan iPhone. Buka situsnya, pilih foto dari rol kamera Anda, kompres, unduh file yang lebih kecil, lalu bagikan dari WhatsApp. Tidak ada aplikasi yang perlu diinstal.',
  },
  {
    id: 'wa-faq-9',
    question: 'Apakah foto hasil kompresi tetap terlihat bagus di Status WhatsApp?',
    answer: 'Ya, jika Anda tidak berlebihan. Status WhatsApp menampilkan foto pada resolusi yang sederhana, sehingga foto yang dikompres dengan preset Seimbang (sekitar 70%) terlihat sama seperti aslinya di layar ponsel. Hindari di bawah 50% untuk foto Status yang menampilkan wajah atau teks.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp mengatakan gambar saya terlalu besar — apa yang harus saya lakukan?',
    answer: 'Unggah gambar ke CompressMyPic dan turunkan slider kualitas hingga file menjadi beberapa ratus KB, lalu unduh dan kirim lagi. Jika tetap tidak dapat dikirim sebagai foto, kirim sebagai dokumen, yang menerima file jauh lebih besar.',
  },
  {
    id: 'wa-faq-11',
    question: 'Haruskah saya menggunakan JPG atau PNG untuk WhatsApp?',
    answer: 'Gunakan JPG untuk foto. JPG menghasilkan file yang jauh lebih kecil untuk foto kamera dan paling cocok ditangani WhatsApp. Gunakan PNG hanya untuk gambar yang membutuhkan transparansi, seperti logo, karena file PNG jauh lebih besar.',
  },
  {
    id: 'wa-faq-12',
    question: 'Bisakah saya mengirim gambar WebP di WhatsApp?',
    answer: 'WhatsApp dapat menerima file WebP, tetapi file tersebut mungkin tidak tampil sebagai foto biasa, dan beberapa ponsel menanganinya dengan aneh. Untuk foto yang ingin dilihat orang secara langsung, JPG adalah pilihan yang lebih aman. WebP lebih cocok untuk situs web daripada untuk WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: 'Bagaimana cara mengompres beberapa foto WhatsApp sekaligus?',
    answer: 'Unggah semua foto ke CompressMyPic sekaligus, terapkan preset yang sama untuk semuanya, dan unduh semuanya bersamaan dengan tombol "Unduh Semua (ZIP)". Lalu kirim file dari WhatsApp satu per satu atau sebagai dokumen.',
  },
  {
    id: 'wa-faq-14',
    question: 'Apakah WhatsApp mengompres video dengan cara yang sama?',
    answer: 'Ya, WhatsApp juga mengompres video yang dikirim dengan cara biasa, dan dapat memperkecilnya secara signifikan. CompressMyPic hanya berfungsi untuk gambar (JPG, PNG, WebP), bukan video. Untuk video, kirim sebagai dokumen agar kualitas aslinya terjaga.',
  },
  {
    id: 'wa-faq-15',
    question: 'Apakah mengompres foto akan menghapus foto asli dari ponsel saya?',
    answer: 'Tidak. CompressMyPic membuat salinan baru yang lebih kecil dan mengunduhnya ke perangkat Anda. Foto asli Anda tetap persis seperti semula di galeri Anda, tanpa disentuh.',
  },
  {
    id: 'wa-faq-16',
    question: 'Apakah foto saya diunggah ke server saat saya mengompresnya?',
    answer: 'Tidak. Semua kompresi terjadi di dalam browser Anda sendiri di perangkat Anda, sehingga foto Anda tidak pernah diunggah, disimpan, atau dilihat oleh orang lain. Foto tetap berada di memori browser dan terhapus saat Anda menutup atau memuat ulang tab.',
  },
  {
    id: 'wa-faq-17',
    question: 'Seberapa kecil seharusnya foto untuk WhatsApp?',
    answer: 'Untuk berbagi sehari-hari, 100–300 KB per foto adalah target yang baik: cepat terkirim, hemat kuota, dan tetap terlihat tajam di ponsel. Untuk foto yang ingin Anda cetak atau simpan, pertahankan mendekati 500 KB–1 MB dengan pengaturan kualitas yang lebih tinggi.',
  },
  {
    id: 'wa-faq-18',
    question: 'Mengapa foto WhatsApp saya terlihat buram setelah dikirim?',
    answer: 'Karena WhatsApp mengompres ulang foto tersebut saat Anda mengirimnya sebagai foto. Solusinya adalah mengompres foto sendiri terlebih dahulu dengan kualitas yang Anda kendalikan, lalu mengirimnya sebagai dokumen agar WhatsApp tidak mengompresnya lagi.',
  },
  {
    id: 'wa-faq-19',
    question: 'Bisakah saya mengompres tangkapan layar untuk WhatsApp?',
    answer: 'Ya. Unggah tangkapan layar ke CompressMyPic dengan cara yang sama seperti foto. Tangkapan layar terkompres dengan sangat baik karena memiliki area warna datar yang luas — coba preset Seimbang terlebih dahulu, dan beralih ke keluaran WebP jika Anda menginginkan file terkecil.',
  },
  {
    id: 'wa-faq-20',
    question: 'Apakah CompressMyPic gratis untuk foto WhatsApp?',
    answer: 'Ya, sepenuhnya gratis. Tidak ada pendaftaran, tidak ada watermark, tidak ada batas jumlah foto yang Anda kompres, dan tidak ada akun yang diperlukan. Cukup buka situsnya, kompres, dan unduh.',
  },
];

export const GuideWhatsAppPageId: React.FC<GuideWhatsAppPageIdProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Mengompres Gambar untuk WhatsApp Tanpa Kehilangan Kualitas';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Pelajari cara mengompres gambar untuk WhatsApp tanpa kehilangan kualitas. Gratis, privat, tanpa daftar — perkecil foto sebelum mengirim agar tetap tajam dan cepat terkirim.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/id/panduan/mengompres-gambar-untuk-whatsapp';
    // hreflang: same DOM mechanism the English page uses for its canonical.
    const alternates = [
      { lang: 'en', href: 'https://compressmypic.online/guides/compress-images-for-whatsapp' },
      { lang: 'id', href: 'https://compressmypic.online/id/panduan/mengompres-gambar-untuk-whatsapp' },
      { lang: 'x-default', href: 'https://compressmypic.online/guides/compress-images-for-whatsapp' },
    ];
    const createdLinks: HTMLLinkElement[] = [];
    alternates.forEach(({ lang, href }) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
        createdLinks.push(link);
      }
      link.href = href;
    });
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Cara mengompres gambar untuk WhatsApp tanpa kehilangan kualitas',
          description: 'Kompres foto dengan CompressMyPic dan kirim di WhatsApp sebagai dokumen agar tetap tajam.',
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
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
      if (existing) existing.remove();
      createdLinks.forEach((link) => link.remove());
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
            onClick={() => onNavigate('/id/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Kompresor Gambar</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cara Mengompres Gambar untuk WhatsApp Tanpa Kehilangan Kualitas
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            WhatsApp memperkecil setiap foto yang Anda kirim — sering kali jauh lebih kecil dari yang seharusnya. Kompres foto Anda sendiri terlebih dahulu, lalu kirim dengan cara yang tepat, dan foto akan tiba dalam keadaan tajam, cepat terkirim, dan hemat kuota.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Mengapa WhatsApp Membuat Foto Anda Buram</span>
            </h2>
            <p>
              Saat Anda mengirim foto di WhatsApp dengan cara biasa, WhatsApp mengompres ulang foto tersebut sebelum dikirimkan. Foto kamera sebesar 3 MB dapat tiba sebagai file 100 KB dengan detail yang lembut dan warna yang pecah-pecah. WhatsApp melakukan ini untuk menghemat kuota dan penyimpanan, tetapi Anda tidak dapat menentukan seberapa banyak kualitas yang hilang.
            </p>
            <p>
              Ada cara kedua untuk mengirim foto yang kebanyakan orang tidak pernah gunakan: mengirimnya sebagai dokumen. Dokumen dikirim persis apa adanya, tanpa kompresi tambahan sama sekali. Triknya adalah memperkecil foto sendiri terlebih dahulu — dengan pengaturan kualitas yang Anda kendalikan — lalu mengirimnya sebagai dokumen. Anda mendapatkan file yang kecil sekaligus foto yang tajam.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>Langkah demi Langkah: Mengompres Foto untuk WhatsApp</span>
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
              alt="Tangkapan layar mengunggah foto ke CompressMyPic sebelum mengirimnya di WhatsApp"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Unggah foto Anda ke CompressMyPic — seret dan letakkan, atau pilih dari galeri Anda.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span>Pengaturan Kualitas Apa yang Harus Anda Gunakan?</span>
            </h2>
            <p>
              Tidak ada satu angka sempurna — semuanya tergantung pada foto dan tujuannya. Gunakan ini sebagai titik awal dan periksa perbandingan sebelum dan sesudah setiap kali:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Foto sehari-hari: 70%</div>
                <p className="text-xs text-slate-600">
                  Preset Seimbang. Penghematan ukuran yang besar, dan foto tetap terlihat tajam di layar ponsel apa pun. Pengaturan default terbaik untuk WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Foto penting: 80–85%</div>
                <p className="text-xs text-slate-600">
                  Foto keluarga, foto perjalanan, apa pun yang ingin Anda simpan. File-nya lebih besar, tetapi detail halus pada wajah dan lanskap tetap terjaga.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Berbagi cepat: 50–60%</div>
                <p className="text-xs text-slate-600">
                  Meme, pembaruan cepat, foto dengan kuota seluler yang lambat. File yang jauh lebih kecil dan tetap terlihat bagus pada ukuran layar ponsel.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Tips untuk Hasil Terbaik</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Kompres sekali, dan hanya sekali. Mengompres foto yang sudah dikompres untuk kedua kalinya membuang detail tanpa penghematan tambahan yang berarti.</li>
              <li>Selalu kirim file hasil kompresi sebagai dokumen jika kualitas penting — itu satu-satunya cara untuk menghentikan WhatsApp mengompresnya lagi.</li>
              <li>Kompres beberapa foto sekaligus dengan pengaturan yang sama dan unduh semuanya dengan tombol Unduh Semua (ZIP).</li>
              <li>Untuk tangkapan layar dan grafis berisi teks, coba keluaran WebP — format ini menjaga tepi tetap tajam dan menghasilkan file yang lebih kecil daripada JPG.</li>
              <li>Foto asli Anda tidak pernah diubah. CompressMyPic menyimpan salinan baru yang lebih kecil, sehingga Anda selalu dapat kembali dan mencoba kualitas yang berbeda.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="Tangkapan layar slider kualitas dan ukuran file sebelum dan sesudah secara langsung di CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Geser slider kualitas dan lihat ukuran sebelum dan sesudah berubah secara langsung hingga file menjadi ukuran yang Anda inginkan.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-blue-600" />
              <span>Kesalahan Umum yang Harus Dihindari</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Mengirim foto sebagai foto setelah mengompresnya — WhatsApp akan mengompresnya untuk kedua kalinya dan membatalkan pekerjaan Anda.</li>
              <li>Menurunkan kualitas di bawah 40% untuk foto yang menampilkan wajah — kulit dan detail halus menjadi pecah-pecah dengan sangat cepat pada kualitas rendah.</li>
              <li>Menggunakan PNG untuk foto kamera — file PNG jauh lebih besar daripada JPG untuk foto dan tidak memberi keuntungan apa pun di WhatsApp.</li>
              <li>Lupa memeriksa hasilnya — selalu lihat perbandingan sebelum dan sesudah sebelum mengirim, terutama untuk foto yang berisi teks.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Pertanyaan yang Sering Diajukan</span>
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
            <h2 className="text-xl font-bold text-slate-900">Panduan Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/id/panduan/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP — format mana yang harus Anda gunakan?</div>
                <p className="text-xs text-slate-600 mt-1">Ukuran file, kualitas, dan transparansi dibandingkan, agar Anda memilih format yang tepat setiap saat.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/id/panduan/mengurangi-ukuran-gambar-menjadi-100-kb')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Cara mengurangi ukuran gambar menjadi 100KB untuk situs web dan email</div>
                <p className="text-xs text-slate-600 mt-1">Panduan langkah demi langkah untuk mencapai 100KB tanpa merusak foto Anda.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/id/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Kompres Gambar Gratis
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/id/panduan/mengurangi-ukuran-gambar-menjadi-100-kb')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Perkecil Gambar menjadi 100KB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
