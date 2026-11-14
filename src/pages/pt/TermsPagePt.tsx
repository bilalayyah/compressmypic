import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPagePtProps {
  onNavigate: (path: string) => void;
}

export const TermsPagePt: React.FC<TermsPagePtProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Termos de Serviço - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/pt/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao compressor de imagens</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#7c3aed] dark:text-[#a78bfa]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Termos de Serviço
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última atualização: 12 de novembro de 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Aceitação dos termos
            </h2>
            <p>
              Ao acessar e usar o CompressMyPic, você concorda em cumprir estes Termos de Serviço e fica sujeito a eles. Se você não concordar com alguma parte destes termos, pare de usar o serviço.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Uso permitido
            </h2>
            <p>
              Você pode usar o CompressMyPic para otimizar imagens tanto para fins pessoais quanto comerciais. Você concorda em não usar o serviço para nenhuma atividade ilegal nem de nenhuma maneira que possa prejudicar o funcionamento, a segurança ou a disponibilidade do site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Direitos de propriedade intelectual
            </h2>
            <p>
              Você mantém 100% dos direitos autorais, da propriedade e dos direitos de propriedade intelectual sobre todas as imagens, fotos e gráficos que comprimir com nossa ferramenta. O CompressMyPic não reivindica nenhuma propriedade, licença nem direito sobre suas obras criativas. Todo o processamento é feito localmente no seu equipamento.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Isenção de garantias
            </h2>
            <p>
              O CompressMyPic é oferecido "como está" e "conforme a disponibilidade", sem garantias de nenhum tipo, expressas ou implícitas. Embora nos esforcemos para alcançar a máxima compatibilidade e o melhor desempenho em todos os navegadores, não garantimos que o serviço seja ininterrupto, esteja livre de erros ou atenda a requisitos técnicos específicos.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Contato
            </h2>
            <p>
              Se você tiver alguma pergunta sobre estes termos, escreva para{' '}
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
