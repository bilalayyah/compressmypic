import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageIdProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageId: React.FC<CookiePolicyPageIdProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Kebijakan Cookie | CompressMyPic – Cara Cookie Digunakan';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Kebijakan Cookie
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Terakhir diperbarui: 18 November 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Apa itu Cookie?
            </h2>
            <p>
              Cookie adalah file teks kecil yang diminta situs web kepada browser Anda untuk disimpan di perangkat Anda. Cookie dapat mengingat informasi tentang kunjungan Anda — misalnya, apakah Anda pernah melihat sebuah pesan sebelumnya — sehingga situs atau layanan dapat mengenali browser Anda pada kunjungan berikutnya. Kebijakan ini menjelaskan cookie apa saja yang digunakan di CompressMyPic, mengapa digunakan, dan bagaimana Anda dapat mengendalikannya.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookie yang Tidak Kami Pasang
            </h2>
            <p>
              CompressMyPic sendiri tidak memasang cookie apa pun. Alat gambar kami berjalan sepenuhnya di browser Anda: kompresi tidak memerlukan akun, login, atau cookie. Kami tidak memasang cookie untuk mengingat Anda, melacak Anda, atau menyimpan preferensi Anda. Gambar Anda tidak pernah meninggalkan browser Anda, dan tidak ada informasi tentang gambar tersebut yang disimpan dalam cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Cookie Iklan Google AdSense
            </h2>
            <p>
              Kami menggunakan Google AdSense untuk menampilkan iklan di situs ini. AdSense dan mitranya dapat memasang cookie di perangkat Anda untuk menayangkan iklan berdasarkan kunjungan Anda sebelumnya ke situs web ini atau situs web lain. Penggunaan cookie iklan oleh Google memungkinkan Google dan mitranya menayangkan iklan kepada Anda berdasarkan kunjungan Anda ke situs ini dan/atau situs lain di Internet, serta mengukur seberapa sering sebuah iklan ditampilkan. Penempatan iklan di situs ini dipilih secara manual; kami tidak menggunakan penyisipan iklan otomatis. Anda dapat memilih tidak menerima iklan yang dipersonalisasi dengan mengunjungi Setelan Iklan Google (
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://adssettings.google.com</a>
              ) atau 
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://www.aboutads.info/choices/</a>
              . Memilih iklan yang tidak dipersonalisasi tidak menghentikan iklan sepenuhnya, tetapi berarti iklan tidak lagi didasarkan pada riwayat penelusuran Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Cookie Google Analytics 4
            </h2>
            <p>
              Kami menggunakan Google Analytics 4 (GA4) untuk memahami, secara agregat, bagaimana situs ini digunakan — misalnya, alat mana yang populer dan halaman mana yang dikunjungi. GA4 dapat memasang cookie di perangkat Anda, seperti _ga, untuk membedakan satu kunjungan dari kunjungan lainnya. Data tersebut dianonimkan dan hanya digunakan dalam bentuk ringkasan; kami tidak menggunakan GA4 untuk mengidentifikasi Anda secara pribadi. Anda dapat memilih tidak menggunakan Google Analytics kapan saja dengan memasang Pengaya Browser untuk Menonaktifkan Google Analytics (https://tools.google.com/dlpage/gaoptout) atau dengan menonaktifkan cookie di pengaturan browser Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Persetujuan (EEA, Inggris, dan Swiss)
            </h2>
            <p>
              Jika Anda berkunjung dari Kawasan Ekonomi Eropa, Inggris, atau Swiss, Google akan menampilkan pesan persetujuan sebelum iklan yang dipersonalisasi ditampilkan, sesuai dengan GDPR dan Kebijakan Persetujuan Pengguna UE Google. Anda dapat mengubah atau menarik persetujuan Anda kapan saja menggunakan tautan "Pengaturan privasi dan cookie" di footer situs ini, yang membuka kembali pesan persetujuan, atau dengan menghapus cookie browser Anda. Penarikan persetujuan tidak memengaruhi apa pun yang telah dilakukan secara sah sebelum penarikan tersebut.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Layanan Pihak Ketiga Lainnya
            </h2>
            <p>
              Beberapa layanan lain di situs ini dapat menggunakan cookie atau penyimpanan serupa milik mereka sendiri. Google reCAPTCHA, yang melindungi formulir kontak kami dari spam, dapat memasang cookie untuk membedakan manusia dari bot; penggunaannya diatur oleh 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Kebijakan Privasi Google</a>
               dan 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Persyaratan Layanan Google</a>
               Google. Cloudflare, yang meng-host situs ini, dapat memasang cookie keamanan untuk melindungi situs dari penyalahgunaan. Komentar anonim di bawah alat kami hanya meminta nama, yang disimpan oleh layanan komentar — bukan dalam cookie di situs ini.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Penyimpanan Browser yang Bukan Cookie
            </h2>
            <p>
              Browser Anda juga menyimpan sejumlah kecil informasi lokal yang bukan cookie. Jika Anda memposting komentar, browser Anda dapat mengingat nama yang Anda ketik sehingga Anda tidak perlu mengetiknya lagi, dan jika Anda mengganti bahasa situs, browser Anda dapat mengingat pilihan itu untuk kunjungan berikutnya. Informasi ini tetap berada di perangkat Anda sendiri, tidak pernah dikirim ke server kami, dan Anda dapat menghapusnya kapan saja dengan menghapus data situs di browser Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Cara Mengendalikan Cookie
            </h2>
            <p>
              Anda dapat menghapus cookie yang sudah tersimpan di perangkat Anda dan memblokir cookie agar tidak dipasang di masa mendatang melalui pengaturan browser Anda — semua browser utama (Chrome, Firefox, Safari, Edge) menyediakan opsi ini di pengaturan privasi atau keamanan mereka. Memblokir semua cookie tidak akan merusak alat gambar kami, yang tidak bergantung pada cookie, tetapi dapat memengaruhi fitur layanan pihak ketiga seperti iklan dan analitik. Anda juga dapat menggunakan mode privat atau penyamaran browser Anda, yang menghapus cookie saat Anda menutup jendela.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Perubahan pada Kebijakan Ini
            </h2>
            <p>
              Kami dapat memperbarui kebijakan ini saat situs berubah — misalnya, jika kami menambahkan mitra iklan atau layanan analitik baru. Jika demikian, kami akan mengubah tanggal "Terakhir diperbarui" di bagian atas halaman ini. Terus menggunakan situs setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Kontak
            </h2>
            <p>
              Jika Anda memiliki pertanyaan tentang kebijakan ini, hubungi kami di 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
               atau baca 
              <a href="/id/privasi" onClick={(e) => { e.preventDefault(); onNavigate('/id/privasi'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Kebijakan Privasi</a>
               kami.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
