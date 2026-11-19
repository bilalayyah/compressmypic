import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageIdProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageId: React.FC<DisclaimerPageIdProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Penafian | CompressMyPic – Alat Gambar Gratis';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke kompresor gambar</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Penafian
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Terakhir diperbarui: 18 November 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Informasi Umum
            </h2>
            <p>
              CompressMyPic adalah layanan kompresi dan pengeditan gambar online gratis. Alat, panduan, dan artikel di situs web ini disediakan hanya untuk informasi umum dan penggunaan praktis. Semuanya bukan nasihat profesional dalam bentuk apa pun — bukan nasihat hukum, medis, keuangan, atau teknis — dan tidak menciptakan hubungan profesional apa pun antara Anda dan CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Tanpa Jaminan
            </h2>
            <p>
              Layanan ini disediakan "sebagaimana adanya" dan "sebagaimana tersedia", tanpa jaminan apa pun, baik tersurat maupun tersirat. Kami tidak menjamin bahwa alat akan selalu tersedia, tanpa gangguan, tanpa kesalahan, atau bebas dari komponen berbahaya, atau bahwa gambar tertentu akan dikompresi ke ukuran atau kualitas tertentu. Hasilnya bergantung pada gambar asli, formatnya, dan browser Anda, jadi selalu simpan salinan file asli Anda sebelum menggunakan alat apa pun.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Keakuratan Konten
            </h2>
            <p>
              Kami berusaha keras menjaga panduan, artikel, dan deskripsi alat kami tetap akurat dan terbaru, tetapi format gambar, browser, dan standar web berubah seiring waktu. Informasi di situs ini dapat menjadi kedaluwarsa atau mengandung kesalahan meskipun kami sudah berusaha sebaik mungkin. Selalu periksa detail penting — seperti batas ukuran file suatu platform — pada dokumentasi resmi platform tersebut sebelum mengandalkannya.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. File Anda adalah Tanggung Jawab Anda
            </h2>
            <p>
              Gambar diproses secara lokal di browser Anda dan tidak pernah diunggah ke server kami. Itu juga berarti kami tidak dapat memulihkan file untuk Anda: jika Anda menimpa, menghapus, atau kehilangan gambar asli saat menggunakan alat kami, kami tidak dapat mengembalikannya. Simpanlah cadangan dari gambar penting apa pun, dan hanya proses salinan file yang Anda miliki atau yang Anda punya izin untuk mengedit.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Layanan dan Tautan Pihak Ketiga
            </h2>
            <p>
              Situs ini menggunakan layanan pihak ketiga — Google Analytics 4 untuk statistik penggunaan, FormSubmit untuk formulir kontak, dan Cloudflare Worker untuk komentar anonim — serta menautkan ke situs web eksternal. Kami tidak mengendalikan layanan atau situs tersebut, dan kami tidak bertanggung jawab atas konten, ketersediaan, praktik privasi, atau keakuratan mereka. Ketentuan dan kebijakan privasi mereka sendiri berlaku saat Anda menggunakannya.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Iklan
            </h2>
            <p>
              Situs ini saat ini tidak menampilkan iklan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Batasan Tanggung Jawab
            </h2>
            <p>
              Sejauh diizinkan oleh hukum, CompressMyPic dan operatornya tidak akan bertanggung jawab atas kerugian atau kerusakan langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan — atau ketidakmampuan menggunakan — situs web ini atau alat-alatnya, termasuk namun tidak terbatas pada file, data, atau keuntungan yang hilang. Satu-satunya jalan keluar Anda jika tidak puas dengan layanan ini adalah berhenti menggunakannya.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Komentar Pengguna
            </h2>
            <p>
              Komentar yang diposting di bawah alat kami ditulis oleh pengunjung dan mencerminkan pendapat mereka sendiri, bukan pendapat kami. Kami memoderasi komentar dan dapat menghapus apa pun yang berupa spam, kasar, atau tidak relevan, tetapi kami tidak mendukung atau bertanggung jawab atas isi komentar pengguna. Jangan pernah membagikan kata sandi, detail pembayaran, atau informasi pribadi yang sensitif dalam komentar.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Kontak
            </h2>
            <p>
              Jika Anda memiliki pertanyaan tentang penafian ini, hubungi kami di 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
