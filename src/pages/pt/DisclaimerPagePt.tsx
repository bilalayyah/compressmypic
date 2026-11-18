import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPagePtProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPagePt: React.FC<DisclaimerPagePtProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Aviso legal | CompressMyPic – Ferramentas de imagem gratuitas';
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
            <span>Voltar para o compressor de imagens</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Aviso legal
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última atualização: 18 de novembro de 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Informações gerais
            </h2>
            <p>
              O CompressMyPic é um serviço gratuito de compressão e edição de imagens online. As ferramentas, guias e artigos deste site são fornecidos apenas para informação geral e uso prático. Eles não são aconselhamento profissional de nenhum tipo — nem jurídico, médico, financeiro ou técnico — e não criam nenhuma relação profissional entre você e o CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Sem garantia
            </h2>
            <p>
              O serviço é fornecido "como está" e "conforme disponível", sem garantias de nenhum tipo, expressas ou implícitas. Não garantimos que as ferramentas estejam sempre disponíveis, sem interrupções, sem erros ou livres de componentes prejudiciais, nem que uma imagem específica seja comprimida para um tamanho ou qualidade determinados. Os resultados dependem da imagem original, do seu formato e do seu navegador, por isso mantenha sempre uma cópia dos seus arquivos originais antes de usar qualquer ferramenta.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Exatidão do conteúdo
            </h2>
            <p>
              Trabalhamos para manter nossos guias, artigos e descrições de ferramentas precisos e atualizados, mas os formatos de imagem, os navegadores e os padrões da web mudam com o tempo. As informações deste site podem ficar desatualizadas ou conter erros, apesar dos nossos esforços. Verifique sempre os detalhes importantes — como os limites de tamanho de uma plataforma — na documentação oficial dessa plataforma antes de confiar neles.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Seus arquivos são sua responsabilidade
            </h2>
            <p>
              As imagens são processadas localmente no seu navegador e nunca são enviadas aos nossos servidores. Isso também significa que não podemos recuperar um arquivo para você: se você substituir, excluir ou perder uma imagem original ao usar nossas ferramentas, não podemos restaurá-la. Faça backup de qualquer imagem importante e processe apenas cópias de arquivos que você possui ou tem permissão para editar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Serviços e links de terceiros
            </h2>
            <p>
              Este site usa serviços de terceiros — Google AdSense para publicidade, Google Analytics 4 para estatísticas de uso, FormSubmit para o formulário de contato e um Cloudflare Worker para comentários anônimos — e links para sites externos. Não controlamos esses serviços nem esses sites, e não somos responsáveis pelo seu conteúdo, disponibilidade, práticas de privacidade ou exatidão. Ao usá-los, aplicam-se os seus próprios termos e políticas de privacidade.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Publicidade
            </h2>
            <p>
              Os anúncios exibidos neste site são veiculados pelo Google AdSense e seus parceiros. Não endossamos, garantimos ou assumimos responsabilidade por nenhum produto, serviço ou afirmação feita em um anúncio. Qualquer compra ou decisão que você tomar com base em um anúncio é inteiramente por sua conta e risco; avalie você mesmo os anunciantes antes de comprar qualquer coisa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitação de responsabilidade
            </h2>
            <p>
              Na máxima medida permitida por lei, o CompressMyPic e seu operador não serão responsáveis por nenhuma perda ou dano direto, indireto, incidental ou consequente decorrente do uso — ou da impossibilidade de uso — deste site ou de suas ferramentas, incluindo, entre outros, arquivos, dados ou lucros perdidos. Seu único recurso em caso de insatisfação com o serviço é parar de usá-lo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Comentários de usuários
            </h2>
            <p>
              Os comentários publicados em nossas ferramentas são escritos por visitantes e refletem suas próprias opiniões, não as nossas. Moderamos os comentários e podemos remover qualquer conteúdo que seja spam, abusivo ou fora do tema, mas não endossamos nem assumimos responsabilidade pelo conteúdo dos comentários dos usuários. Nunca compartilhe senhas, dados de pagamento ou informações pessoais sensíveis em um comentário.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Contato
            </h2>
            <p>
              Se tiver dúvidas sobre este aviso legal, entre em contato conosco em 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
