import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPagePtProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPagePt: React.FC<PrivacyPagePtProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Política de Privacidade - CompressMyPic';
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
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última atualização: 12 de novembro de 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Processamento de imagens no seu navegador
            </h2>
            <p>
              O CompressMyPic é um compressor de imagens online grátis. As imagens são processadas localmente no seu navegador com HTML5 Canvas: elas nunca são enviadas para os nossos servidores e não coletamos, armazenamos nem compartilhamos suas imagens. Quando você fecha ou atualiza a aba do navegador, todos os objetos temporários na memória são apagados.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Não coletamos dados pessoais
            </h2>
            <p>
              Não pedimos conta, senha, e-mail nem número de telefone para usar a ferramenta de compressão. Qualquer dado de contato que você enviar voluntariamente pelo nosso formulário de contato é usado apenas para responder à sua pergunta específica.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Publicidade (Google AdSense)
            </h2>
            <p>
              Usamos o Google AdSense para exibir anúncios quando ele estiver ativado. Fornecedores externos, incluindo o Google, usam cookies para exibir anúncios com base nas suas visitas anteriores a este site ou a outros sites. O uso que o Google faz dos cookies de publicidade permite que o Google e seus parceiros exibam anúncios para você com base na sua visita a este site e/ou a outros sites da internet. Você pode desativar a publicidade personalizada visitando as Configurações de anúncios do Google (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) ou{' '}
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
              4. Análises
            </h2>
            <p>
              Atualmente não usamos cookies de análise. Se isso mudar, atualizaremos esta política.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Links de terceiros
            </h2>
            <p>
              Nosso site pode conter links para sites externos. Não somos responsáveis pelas práticas de privacidade nem pelo conteúdo de plataformas de terceiros.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Contato
            </h2>
            <p>
              Se você tiver perguntas sobre esta política, escreva para{' '}
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
