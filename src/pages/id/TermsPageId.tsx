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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Kompresor Gambar</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Syarat Layanan
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Terakhir diperbarui: 12 Nov 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Penerimaan Syarat
            </h2>
            <p>
              Dengan mengakses dan menggunakan CompressMyPic, Anda setuju untuk mematuhi dan terikat oleh Syarat Layanan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, harap berhenti menggunakan layanan ini.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Penggunaan yang Diizinkan
            </h2>
            <p>
              Anda dapat menggunakan CompressMyPic untuk keperluan pengoptimalan gambar pribadi maupun komersial. Anda setuju untuk tidak menggunakan layanan ini untuk aktivitas apa pun yang melanggar hukum atau dengan cara apa pun yang dapat mengganggu pengoperasian, keamanan, atau ketersediaan situs web ini.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Hak Kekayaan Intelektual
            </h2>
            <p>
              Anda tetap memiliki 100% hak cipta, kepemilikan, dan hak kekayaan intelektual penuh atas semua gambar, foto, dan grafis yang Anda kompres dengan alat kami. CompressMyPic tidak mengklaim kepemilikan, lisensi, atau hak apa pun atas karya kreatif Anda. Semua pemrosesan terjadi secara lokal di perangkat Anda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Penafian Jaminan
            </h2>
            <p>
              CompressMyPic disediakan "sebagaimana adanya" dan "sebagaimana tersedia" tanpa jaminan apa pun, baik tersurat maupun tersirat. Meskipun kami berupaya mencapai kompatibilitas dan performa maksimal di semua browser, kami tidak menjamin bahwa layanan ini akan berjalan tanpa gangguan, tanpa kesalahan, atau memenuhi persyaratan teknis tertentu.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              5. Kontak
            </h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai syarat ini, silakan hubungi kami di{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
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
