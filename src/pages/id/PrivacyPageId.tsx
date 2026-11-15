import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageIdProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageId: React.FC<PrivacyPageIdProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Kebijakan Privasi - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/id/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Kompresor Gambar</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Kebijakan Privasi
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Terakhir diperbarui: 15 Nov 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Pemrosesan Gambar di Perangkat Anda
            </h2>
            <p>
              CompressMyPic adalah kompresor gambar online gratis. Gambar diproses secara lokal di browser Anda menggunakan HTML5 Canvas — gambar tidak pernah diunggah ke server kami, dan kami tidak mengumpulkan, menyimpan, atau membagikan gambar Anda. Saat Anda menutup atau memuat ulang tab browser, semua objek sementara di memori akan terhapus.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Tidak Ada Pengumpulan Data Pribadi
            </h2>
            <p>
              Kami tidak meminta akun, kata sandi, alamat email, atau nomor telepon untuk menggunakan alat kompresi ini. Informasi kontak apa pun yang Anda kirimkan secara sukarela melalui formulir kontak kami hanya digunakan untuk membalas pertanyaan spesifik Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Iklan (Google AdSense)
            </h2>
            <p>
              Kami menggunakan Google AdSense untuk menampilkan iklan setelah diaktifkan. Vendor pihak ketiga, termasuk Google, menggunakan cookie untuk menayangkan iklan berdasarkan kunjungan pengguna sebelumnya ke situs web ini atau situs web lainnya. Penggunaan cookie iklan oleh Google memungkinkan Google dan mitranya menayangkan iklan kepada Anda berdasarkan kunjungan Anda ke situs ini dan/atau situs lain di Internet. Anda dapat memilih untuk tidak menerima iklan yang dipersonalisasi dengan mengunjungi Pengaturan Iklan Google (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) atau{' '}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analitik
            </h2>
            <p>
              Kami menggunakan Google Analytics 4 (GA4) untuk memahami, secara agregat, bagaimana situs ini digunakan — misalnya, alat mana yang populer dan halaman mana yang dikunjungi. GA4 mengumpulkan data penggunaan anonim seperti halaman yang Anda kunjungi, berapa lama Anda berada di sana, dan informasi umum tentang perangkat serta browser Anda. GA4 dapat memasang cookie di perangkat Anda (seperti _ga) untuk membedakan satu kunjungan dengan kunjungan lainnya. Kami tidak menggunakan GA4 untuk mengidentifikasi Anda secara pribadi. Anda dapat memilih tidak ikut serta dalam Google Analytics kapan saja dengan memasang Pengaya Penyisihan Google Analytics (https://tools.google.com/dlpage/gaoptout) atau menonaktifkan cookie di pengaturan browser Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Tautan Pihak Ketiga
            </h2>
            <p>
              Situs web kami mungkin berisi tautan ke situs eksternal. Kami tidak bertanggung jawab atas praktik privasi atau konten platform pihak ketiga.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookie dan Persetujuan
            </h2>
            <p>
              CompressMyPic sendiri tidak memasang cookie apa pun untuk alat gambarnya: kompresi berjalan sepenuhnya di browser Anda dan tidak memerlukan cookie, akun, atau preferensi yang disimpan oleh kami. Cookie di situs ini berasal dari layanan pihak ketiga. Google AdSense dan mitranya dapat memasang cookie iklan untuk menampilkan iklan yang relevan kepada Anda dan mengukur seberapa sering suatu iklan ditampilkan. Browser Anda menyimpan cookie ini di perangkat Anda, dan Anda dapat menghapusnya kapan saja melalui pengaturan browser.
            </p>
            <p>
              Jika Anda berkunjung dari Kawasan Ekonomi Eropa atau Britania Raya, kami meminta persetujuan Anda sebelum menampilkan iklan yang dipersonalisasi, sesuai dengan GDPR dan Kebijakan Persetujuan Pengguna UE dari Google. Anda dapat menarik persetujuan itu kapan saja dengan menghapus cookie browser Anda atau mengubah pilihan persetujuan yang ditawarkan di situs. Memilih iklan yang tidak dipersonalisasi tidak menghentikan iklan sepenuhnya, tetapi berarti iklan tidak lagi didasarkan pada riwayat penjelajahan Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Hak Anda Berdasarkan GDPR
            </h2>
            <p>
              Jika Anda berada di Kawasan Ekonomi Eropa atau Britania Raya, Peraturan Perlindungan Data Umum (GDPR) memberi Anda hak atas data pribadi Anda. Anda dapat meminta salinan data pribadi yang kami miliki tentang Anda, meminta kami memperbaikinya jika salah, meminta kami menghapusnya, meminta kami membatasi penggunaannya, dan menolak pemrosesannya. Jika pemrosesan didasarkan pada persetujuan Anda, Anda dapat menarik persetujuan itu kapan saja; penarikan tersebut tidak memengaruhi apa yang telah kami lakukan secara sah sebelumnya.
            </p>
            <p>
              Karena alat kami memproses gambar secara lokal dan kami tidak memiliki akun pengguna, satu-satunya data pribadi yang biasanya kami miliki adalah nama, alamat email, dan pesan yang Anda kirim melalui formulir kontak. Untuk menggunakan salah satu hak ini, kirim email kepada kami di <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> dan kami akan membalas dalam 30 hari. Anda juga berhak mengajukan keluhan kepada otoritas perlindungan data setempat jika Anda merasa kami menangani data Anda secara tidak adil.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Penyimpanan Data
            </h2>
            <p>
              Kami menyimpan data pribadi hanya selama diperlukan untuk tujuan pengumpulannya. Pesan formulir kontak disimpan hanya sampai pertanyaan Anda dijawab dan percakapan selesai, serta untuk jangka waktu singkat setelahnya jika ada pertanyaan lanjutan; pesan tersebut tidak pernah digunakan untuk pemasaran dan tidak pernah dibagikan kepada pihak ketiga. Gambar Anda tidak pernah disimpan sama sekali: gambar hanya ada di memori browser Anda saat Anda menggunakan alat dan akan terhapus begitu Anda menutup atau memuat ulang tab. Data analitik agregat tidak berisi informasi pribadi dan hanya disimpan dalam bentuk ringkasan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Keamanan dan reCAPTCHA
            </h2>
            <p>
              Situs ini disajikan melalui HTTPS, sehingga koneksi antara browser Anda dan situs terenkripsi. Formulir kontak kami disampaikan melalui FormSubmit, yang meneruskan pesan Anda ke alamat email kami, dan formulir tersebut dilindungi oleh Google reCAPTCHA untuk memblokir spam dan penyalahgunaan otomatis. Saat Anda mengirim formulir, reCAPTCHA dapat mengumpulkan informasi perangkat keras dan perangkat lunak, seperti detail browser dan perangkat Anda, untuk membedakan manusia dari bot; hal ini diatur oleh <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Kebijakan Privasi
              </a> dan <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Persyaratan Layanan
              </a> Google. Kami tidak pernah meminta Anda mengirim kata sandi, detail pembayaran, atau dokumen pribadi yang sensitif melalui formulir kontak, dan Anda tidak boleh menyertakannya dalam pesan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Privasi Anak
            </h2>
            <p>
              CompressMyPic adalah alat untuk khalayak umum dan tidak ditujukan kepada anak di bawah usia 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda adalah orang tua atau wali dan yakin anak Anda telah mengirim informasi pribadi kepada kami melalui formulir kontak, silakan kirim email kepada kami dan kami akan segera menghapusnya.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Perubahan pada Kebijakan Ini
            </h2>
            <p>
              Kami dapat memperbarui kebijakan ini saat situs berubah — misalnya, jika kami menambahkan layanan analitik baru, mitra iklan baru, atau cara baru untuk menghubungi kami. Jika demikian, kami akan mengubah tanggal «Terakhir diperbarui» di bagian atas halaman ini, dan perubahan penting akan dijelaskan di sini dengan bahasa yang sederhana. Terus menggunakan situs setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Kontak
            </h2>
            <p>
              Jika Anda memiliki pertanyaan tentang kebijakan ini, hubungi kami di{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
