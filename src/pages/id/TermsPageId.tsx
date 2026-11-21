import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageIdProps {
  onNavigate: (path: string) => void;
}

export const TermsPageId: React.FC<TermsPageIdProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Syarat Layanan - CompressMyPic';
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Kompresor Gambar</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#dc2626] dark:text-[#f87171]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Syarat Layanan
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Terakhir diperbarui: 14 Nov 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Penerimaan Syarat
            </h2>
            <p>
              Dengan mengakses dan menggunakan CompressMyPic, Anda setuju untuk mematuhi dan terikat oleh Syarat Layanan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, harap berhenti menggunakan layanan ini.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Penggunaan yang Diizinkan
            </h2>
            <p>
              Anda dapat menggunakan CompressMyPic untuk keperluan pengoptimalan gambar pribadi maupun komersial. Anda setuju untuk tidak menggunakan layanan ini untuk aktivitas apa pun yang melanggar hukum atau dengan cara apa pun yang dapat mengganggu pengoperasian, keamanan, atau ketersediaan situs web ini.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Hak Kekayaan Intelektual
            </h2>
            <p>
              Anda tetap memiliki 100% hak cipta, kepemilikan, dan hak kekayaan intelektual penuh atas semua gambar, foto, dan grafis yang Anda kompres dengan alat kami. CompressMyPic tidak mengklaim kepemilikan, lisensi, atau hak apa pun atas karya kreatif Anda. Semua pemrosesan terjadi secara lokal di perangkat Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Penafian Jaminan
            </h2>
            <p>
              CompressMyPic disediakan "sebagaimana adanya" dan "sebagaimana tersedia" tanpa jaminan apa pun, baik tersurat maupun tersirat. Meskipun kami berupaya mencapai kompatibilitas dan performa maksimal di semua browser, kami tidak menjamin bahwa layanan ini akan berjalan tanpa gangguan, tanpa kesalahan, atau memenuhi persyaratan teknis tertentu.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Ketersediaan dan Perubahan Layanan
            </h2>
            <p>
              CompressMyPic adalah layanan gratis dan kami tidak menjamin layanan ini akan selalu tersedia. Kami dapat mengubah, menangguhkan, atau menghentikan alat, fitur, atau seluruh situs web kapan saja, dengan atau tanpa pemberitahuan — misalnya, untuk memperbaiki bug, mengganti teknologi yang tidak lagi berfungsi di browser modern, atau menjaga layanan tetap gratis. Kami juga dapat menetapkan batas yang wajar, seperti ukuran file maksimum per gambar (saat ini 20 MB untuk kompresor utama dan 25 MB untuk konverter format), dan kami dapat mengubah batas tersebut seiring dengan peningkatan browser dan perangkat. Karena semua pemrosesan terjadi di browser Anda, gangguan pada situs web tidak pernah membahayakan gambar asli Anda: file Anda tetap berada di perangkat Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Penggunaan yang Dapat Diterima
            </h2>
            <p>
              Anda setuju untuk menggunakan CompressMyPic hanya untuk tujuan yang sah dan dengan cara yang tidak merugikan layanan atau orang lain. Secara khusus, Anda tidak boleh mencoba membebani, merusak, atau merekayasa balik situs web, menguji kelemahan keamanannya, menggunakan skrip otomatis untuk mengirim sejumlah besar permintaan, atau menggunakan layanan untuk memproses gambar yang melanggar hak cipta orang lain, berisi materi ilegal, atau dimaksudkan untuk menipu atau melecehkan. Anda bertanggung jawab untuk memastikan bahwa Anda berhak menggunakan setiap gambar yang Anda proses, dan untuk menyimpan cadangan gambar penting sebelum mengompres atau mengonversinya.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Batasan Tanggung Jawab
            </h2>
            <p>
              Sejauh diizinkan oleh hukum, CompressMyPic dan pemiliknya tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan Anda — termasuk, namun tidak terbatas pada, kehilangan data, kehilangan keuntungan, atau biaya pembuatan ulang gambar. Karena layanan ini gratis, total tanggung jawab kami atas klaim apa pun yang terkait dengan layanan dibatasi pada jumlah yang Anda bayar untuk menggunakannya, yaitu nol. Hal ini tidak membatasi tanggung jawab apa pun yang tidak dapat dibatasi oleh hukum, seperti tanggung jawab atas penipuan atau atas kematian atau cedera pribadi yang disebabkan oleh kelalaian.
            </p>
            <p>
              Kompresi pada dasarnya adalah proses lossy: mengurangi ukuran file dapat mengurangi kualitasnya, dan beberapa format, seperti JPEG, tidak dapat mempertahankan transparansi. Anda bertanggung jawab untuk memeriksa hasil kompresi sebelum menghapus atau menimpa file asli, dan kami tidak bertanggung jawab atas penurunan kualitas, hilangnya transparansi, atau perubahan lain yang disebabkan kompresi pada gambar yang Anda pilih untuk diproses.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Layanan Pihak Ketiga
            </h2>
            <p>
              Situs ini menggunakan layanan pihak ketiga untuk beroperasi, termasuk hosting dan pengiriman konten melalui Cloudflare dan pengiriman pesan melalui FormSubmit. Layanan tersebut memiliki syarat dan kebijakan privasi masing-masing, dan penggunaan Anda atas layanan tersebut diatur oleh dokumen-dokumen tersebut serta oleh syarat ini. Kami tidak bertanggung jawab atas ketersediaan, konten, atau praktik situs web atau layanan pihak ketiga yang ditautkan dari CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Hukum yang Berlaku
            </h2>
            <p>
              Syarat ini diatur oleh hukum Uni Emirat Arab, tempat situs ini dioperasikan, tanpa memperhatikan aturan konflik hukumnya. Setiap sengketa yang timbul dari atau terkait dengan syarat ini atau penggunaan layanan Anda akan diselesaikan oleh pengadilan Uni Emirat Arab. Jika ada bagian dari syarat ini yang dinyatakan tidak dapat ditegakkan, bagian lainnya akan tetap berlaku sepenuhnya.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Perubahan pada Syarat Ini
            </h2>
            <p>
              Kami dapat memperbarui syarat ini saat layanan berubah — misalnya, saat kami menambahkan alat baru, mengubah batas ukuran file, atau mulai menggunakan layanan pihak ketiga yang baru. Jika demikian, kami akan memperbarui tanggal «Terakhir diperbarui» di bagian atas halaman ini. Jika Anda terus menggunakan CompressMyPic setelah syarat berubah, Anda menerima syarat yang diperbarui. Jika Anda tidak setuju dengan suatu perubahan, berhentilah menggunakan layanan ini.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Kontak
            </h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai syarat ini, silakan hubungi kami di{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
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
