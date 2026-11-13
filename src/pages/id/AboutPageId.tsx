import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageIdProps {
  onNavigate: (path: string) => void;
}

export const AboutPageId: React.FC<AboutPageIdProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Tentang CompressMyPic – Kompresor Gambar Online Gratis';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Tentang CompressMyPic – kompresor gambar online gratis untuk JPG, PNG, dan WebP. Kompres gambar online gratis, tanpa daftar, tanpa watermark, dan tanpa mengunggah ke server.');
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tentang CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            CompressMyPic adalah kompresor gambar gratis dan privat. Kompres gambar JPG, PNG, dan WebP langsung di browser Anda — cepat, aman, dan tanpa mengunggah file Anda ke mana pun.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span>Apa Itu CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic adalah kompresor gambar online gratis dan alat pengoptimal gambar yang membantu Anda memperkecil ukuran gambar tanpa kehilangan kualitas. Ini adalah kompresor foto dan alat pengecil ukuran foto untuk format yang digunakan orang setiap hari: JPG, PNG, dan WebP. Gunakan untuk mengompres JPG menjadi 100KB, mengompres PNG online gratis, mengompres gambar WebP, atau memperkecil ukuran file foto sebelum membagikannya di WhatsApp, Instagram, Facebook, atau email.
            </p>
            <p>
              Situs kompresi gambar tradisional mengunggah foto pribadi Anda yang sensitif atau grafis perusahaan ke server milik orang lain. Praktik tersebut menimbulkan kekhawatiran yang wajar, dan justru karena itulah kami membangun CompressMyPic dengan cara sebaliknya — sebagai alat yang melakukan semuanya di perangkat Anda sendiri.
            </p>
            <p>
              Saat Anda memilih atau menarik dan melepas gambar, browser Anda mengalokasikan buffer memori sementara, menggambar gambar tersebut ke elemen HTML Canvas, menerapkan algoritma kompresi, lalu mengekspor file baru — semuanya di dalam tab browser Anda sendiri. Tidak ada infrastruktur jaringan, basis data, atau server cloud yang terlibat dalam proses mengompres gambar Anda.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Format yang Didukung: JPG, PNG, dan WebP</span>
            </h2>
            <p>
              Sebagai kompresor JPG, CompressMyPic memungkinkan Anda mengompres JPG online gratis dan memperkecil ukuran file JPEG sambil menjaga foto Anda tetap tajam — coba preset Seimbang atau turunkan slider kualitas dan lihat ukuran sebelum dan sesudah secara langsung untuk mencapai target seperti 100KB atau 200KB. Sebagai kompresor PNG, alat ini memungkinkan Anda mengompres PNG online gratis sambil menjaga transparansi untuk logo dan grafis. Dan saat Anda mengompres gambar WebP, Anda mendapatkan file terkecil dari semuanya: WebP biasanya 25-35% lebih kecil daripada JPEG dengan kualitas yang sebanding, sehingga menjadi pilihan terbaik untuk mengoptimalkan gambar bagi halaman web.
            </p>
            <p>
              Anda dapat mempertahankan format asli setiap gambar, atau beralih di antara JPG, PNG, dan WebP. Slider kualitas (10% hingga 100%), preset Rendah, Seimbang, dan Tinggi, serta tampilan ukuran sebelum dan sesudah secara langsung memberi Anda kendali penuh atas keseimbangan antara ukuran file dan kualitas gambar — tanpa pernah mengklaim adanya kotak input target-KB yang sebenarnya tidak dimiliki alat ini.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Prinsip Inti Kami</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Privasi Mutlak</div>
                <p className="text-xs text-slate-600">
                  Tidak ada satu file pun yang pernah menyentuh server atau basis data eksternal. Foto dan grafis sensitif Anda tetap berada di perangkat lokal Anda. Karena kompresi terjadi di sisi klien, pekerjaan Anda tidak pernah dilihat oleh orang lain.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Sederhana dan Gratis</div>
                <p className="text-xs text-slate-600">
                  Tanpa instalasi perangkat lunak, tanpa paket berbayar, tanpa biaya tersembunyi, tanpa pembuatan akun, tanpa verifikasi email, dan tanpa batas percobaan. Kompres gambar online gratis — benar-benar gratis, tanpa daftar dan tanpa watermark pada gambar hasil kompresi Anda.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Kualitas yang Anda Kendalikan</div>
                <p className="text-xs text-slate-600">
                  Kami mendukung kendali yang mendetail: geser slider Kualitas secara real time, pilih preset Rendah, Seimbang, atau Tinggi, pilih format file keluaran, dan bandingkan setiap gambar berdampingan untuk melihat perbedaannya secara instan. Perkecil ukuran gambar tanpa kehilangan kualitas, sesuai keinginan Anda.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Kompresor Gambar Massal</div>
                <p className="text-xs text-slate-600">
                  Kompres banyak gambar sekaligus dengan pengaturan yang sama dan unduh semuanya bersamaan dengan tombol Unduh Semua (ZIP) — kompresor gambar batch untuk pustaka foto, katalog produk, dan folder gambar situs web.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Pemeriksaan Keamanan Otomatis</div>
                <p className="text-xs text-slate-600">
                  Kompresor mendeteksi transparansi pada gambar Anda. Jika Anda memilih keluaran JPEG untuk PNG transparan, kami menampilkan peringatan karena JPEG tidak mendukung transparansi — sehingga Anda tidak pernah kehilangan saluran alpha secara tidak sengaja.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Performa Cepat</div>
                <p className="text-xs text-slate-600">
                  Karena semua pemrosesan terjadi secara lokal di perangkat Anda, tidak ada waktu menunggu file diunggah lalu diunduh dari server. Anda dapat mengompres foto dengan cepat, bahkan file besar hingga 20 MB per gambar, di desktop maupun ponsel.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Untuk Siapa CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic ditujukan bagi siapa pun yang membutuhkan gambar yang lebih kecil: blogger dan pemilik situs web yang ingin mengoptimalkan gambar untuk web dan memperkecil ukuran gambar untuk halaman situs web; fotografer yang perlu memperkecil ukuran file foto sebelum membagikan atau menyerahkan bukti; penjual online yang mengompres foto untuk situs web atau listing toko; pelajar dan pekerja kantoran yang mengompres gambar untuk lampiran email; dan siapa pun yang ingin mengompres gambar untuk WhatsApp, Instagram, atau Facebook agar terkirim lebih cepat dan hemat kuota.
            </p>
            <p>
              Alat ini berfungsi di browser desktop dan ponsel, tidak memerlukan instalasi, dan tidak pernah meminta Anda mendaftar — cukup buka situsnya, unggah gambar Anda, dan unduh file yang lebih kecil.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              <span>Privasi &amp; Keamanan</span>
            </h2>
            <p>
              Di CompressMyPic, kami meyakini privasi adalah hak yang sangat penting, bukan sekadar fitur tambahan. Di zaman sekarang, banyak situs web mengumpulkan data secara default, bahkan alat kompresi gambar sekalipun. Kami menerapkan pendekatan yang mengutamakan privasi dengan mengandalkan teknologi browser modern untuk memproses media Anda secara lokal di komputer Anda.
            </p>
            <p>
              File Anda tetap berada di memori browser dan langsung terhapus saat Anda menutup tab atau memuat ulang halaman. Karena tidak ada pemrosesan gambar yang terjadi di server jarak jauh, kami tidak dapat mengumpulkan data gambar, sekalipun kami menginginkannya. Itulah desain dan janji alat ini.
            </p>
            <p>
              Untuk mempelajari secara tepat bagaimana kami menangani privasi, silakan kunjungi halaman{' '}
              <button
                type="button"
                onClick={() => onNavigate('/id/privasi')}
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                Kebijakan Privasi
              </button>
              {' '}kami.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Misi Kami</span>
            </h2>
            <p>
              Kami percaya alat terbaik adalah alat yang paling sederhana, tercepat, dan paling transparan. Misi kami adalah menyediakan kompresor gambar yang cepat, andal, dan sepenuhnya gratis bagi semua orang — tanpa pengorbanan tersembunyi, tanpa iklan yang melacak Anda, tanpa unggahan ke server, dan tanpa kompromi terhadap privasi Anda. Baik Anda mengompres satu JPG maupun sekumpulan gambar WebP, alat ini seharusnya langsung berfungsi.
            </p>
            <p>
              Punya pertanyaan, ide, atau menemukan sesuatu yang dapat kami perbaiki? Kami sangat senang mendengarnya. Anda dapat menghubungi kami langsung melalui situs ini.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/id/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Mulai Mengompres Gambar
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/id/kontak')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
