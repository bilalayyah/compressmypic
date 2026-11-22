import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageTrProps {
  onNavigate: (path: string) => void;
}

export const TermsPageTr: React.FC<TermsPageTrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Hizmet Şartları - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/tr/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Görsel sıkıştırıcıya dön</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#dc2626] dark:text-[#f87171]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Hizmet Şartları
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Son güncelleme: 14 Kasım 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Şartların kabulü
            </h2>
            <p>
              CompressMyPic'e erişerek ve onu kullanarak bu Hizmet Şartları'na uymayı ve bunlara bağlı olmayı kabul edersiniz. Bu şartların herhangi bir bölümüyle aynı fikirde değilseniz hizmeti kullanmayı bırakın.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. İzin verilen kullanım
            </h2>
            <p>
              CompressMyPic'i hem kişisel hem de ticari amaçlarla görsel optimize etmek için kullanabilirsiniz. Hizmeti hiçbir yasa dışı faaliyet için kullanmamayı ve web sitesinin çalışmasına, güvenliğine ya da kullanılabilirliğine zarar verebilecek hiçbir şekilde kullanmamayı kabul edersiniz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Fikri mülkiyet hakları
            </h2>
            <p>
              Aracımızla sıkıştırdığınız tüm görseller, fotoğraflar ve grafikler üzerindeki telif hakkının, mülkiyetin ve fikri mülkiyet haklarının %100'ünü korursunuz. CompressMyPic, yaratıcı çalışmalarınız üzerinde hiçbir mülkiyet, lisans ya da hak iddia etmez. Tüm işlemler cihazınızda yerel olarak gerçekleşir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Garanti reddi
            </h2>
            <p>
              CompressMyPic, açık ya da zımni hiçbir garanti olmaksızın «olduğu gibi» ve «mevcut haliyle» sunulur. Tüm tarayıcılarda azami uyumluluk ve en iyi performans için çaba göstersek de hizmetin kesintisiz olacağını, hatasız olacağını ya da belirli teknik gereksinimleri karşılayacağını garanti etmeyiz.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Hizmetin kullanılabilirliği ve değişiklikler
            </h2>
            <p>
              CompressMyPic ücretsiz bir hizmettir ve her zaman kullanılabilir olacağını garanti etmeyiz. Herhangi bir aracı, özelliği ya da web sitesinin tamamını dilediğimiz zaman, bildirimde bulunarak ya da bulunmaksızın değiştirebilir, askıya alabilir ya da durdurabiliriz; örneğin bir hatayı düzeltmek, modern tarayıcılarda artık çalışmayan bir teknolojiyi değiştirmek ya da hizmeti ücretsiz tutmak için. Görsel başına azami dosya boyutu gibi makul sınırlar da koyabiliriz (şu anda ana sıkıştırıcı için 20 MB ve format dönüştürücüler için 25 MB) ve tarayıcılar ile cihazlar geliştikçe bu sınırları değiştirebiliriz. Tüm işlemler tarayıcınızda gerçekleştiği için web sitesindeki bir kesinti asla orijinal görsellerinizi riske atmaz: dosyalarınız cihazınızda kalır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Kabul edilebilir kullanım
            </h2>
            <p>
              CompressMyPic'i yalnızca yasal amaçlarla ve hizmete ya da başkalarına zarar vermeyecek şekilde kullanmayı kabul edersiniz. Özellikle web sitesini aşırı yüklememeli, zarar vermemeli ya da tersine mühendislik uygulamamalı; güvenlik açıkları aramamalı; çok sayıda istek göndermek için otomatik komut dosyaları kullanmamalı ve hizmeti, başkasının telif hakkını ihlal eden, yasa dışı içerik barındıran ya da aldatmak ya da taciz etmek amacıyla hazırlanmış görselleri işlemek için kullanmamalısınız. İşlediğiniz her görseli kullanma hakkına sahip olduğunuzdan emin olmak ve önemli bir görseli sıkıştırmadan ya da dönüştürmeden önce yedek kopyasını saklamak sizin sorumluluğunuzdadır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Sorumluluğun sınırlandırılması
            </h2>
            <p>
              Yasaların izin verdiği azami ölçüde, CompressMyPic ve sahibi, hizmetin kullanımından doğan veri kaybı, kâr kaybı ya da bir görseli yeniden oluşturma maliyeti dahil ancak bunlarla sınırlı olmaksızın hiçbir dolaylı, arızi ya da sonuçsal kayıptan sorumlu tutulamaz. Hizmet ücretsiz olduğu için, hizmetle ilgili herhangi bir talebe ilişkin toplam sorumluluğumuz, hizmeti kullanmak için ödediğiniz tutarla sınırlıdır; bu tutar sıfırdır. Bu, dolandırıcılık sorumluluğu ya da ihmalden kaynaklanan ölüm veya kişisel yaralanma sorumluluğu gibi yasayla sınırlandırılamayan hiçbir sorumluluğu sınırlandırmaz.
            </p>
            <p>
              Sıkıştırma, doğası gereği kayıplı bir süreçtir: dosya boyutunu küçültmek kaliteyi düşürebilir ve JPEG gibi bazı formatlar şeffaflığı koruyamaz. Orijinal bir dosyayı silmeden ya da üzerine yazmadan önce sıkıştırılmış sonucu incelemek sizin sorumluluğunuzdadır; kalite kaybından, şeffaflık eksikliğinden ya da sıkıştırmanın işlemeyi seçtiğiniz bir görselde yol açtığı diğer değişikliklerden sorumlu değiliz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Üçüncü taraf hizmetleri
            </h2>
            <p>
              Site, çalışmak için Cloudflare aracılığıyla barındırma ve içerik teslimi ile FormSubmit aracılığıyla mesaj teslimi dahil üçüncü taraf hizmetleri kullanır. Bu hizmetlerin kendi şartları ve gizlilik politikaları vardır ve bunları kullanımınız, bu şartlara ek olarak o belgelere tabidir. CompressMyPic'ten bağlantı verilen üçüncü taraf web sitelerinin ya da hizmetlerin kullanılabilirliğinden, içeriğinden ya da uygulamalarından sorumlu değiliz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Uygulanacak hukuk
            </h2>
            <p>
              Bu şartlar, sitenin işletildiği Birleşik Arap Emirlikleri yasalarına tabidir; kanunlar ihtilafı kuralları dikkate alınmaz. Bu şartlardan ya da hizmeti kullanımınızdan doğan ya da bunlarla ilgili herhangi bir anlaşmazlık, Birleşik Arap Emirlikleri mahkemeleri tarafından çözülür. Bu şartların herhangi bir bölümü uygulanamaz bulunursa diğer bölümler tamamen uygulanmaya devam eder.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Bu şartlardaki değişiklikler
            </h2>
            <p>
              Hizmet değiştiğinde bu şartları güncelleyebiliriz; örneğin yeni araçlar eklediğimizde, dosya boyutu sınırlarını değiştirdiğimizde ya da yeni bir üçüncü taraf hizmeti kullanmaya başladığımızda. Bunu yaptığımızda bu sayfanın üst kısmındaki «Son güncelleme» tarihini güncelleriz. Şartlar değiştikten sonra CompressMyPic'i kullanmaya devam ederseniz güncellenmiş şartları kabul etmiş olursunuz. Bir değişiklikle aynı fikirde değilseniz hizmeti kullanmayı bırakın.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. İletişim
            </h2>
            <p>
              Bu şartlarla ilgili sorularınız varsa bize{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}adresinden yazın.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
