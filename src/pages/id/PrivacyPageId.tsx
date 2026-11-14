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
            Terakhir diperbarui: 12 Nov 2026
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
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analitik
            </h2>
            <p>
              Saat ini kami tidak menggunakan cookie analitik. Jika hal itu berubah, kebijakan ini akan diperbarui.
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

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Kontak
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
