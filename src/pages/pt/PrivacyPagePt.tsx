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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
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
            Última atualização: 15 de novembro de 2026
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
              3. Publicidade
            </h2>
            <p>
              O CompressMyPic atualmente não exibe anúncios. Este site não instala cookies de publicidade.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Análises
            </h2>
            <p>
              Usamos o Google Analytics 4 (GA4) para entender, de forma agregada, como o site é usado — por exemplo, quais ferramentas são populares e quais páginas recebem visitas. O GA4 coleta dados de uso anonimizados, como as páginas que você visita, quanto tempo permanece nelas e informações gerais sobre o seu dispositivo e navegador. O GA4 pode instalar cookies no seu dispositivo (como _ga) para distinguir uma visita da outra. Não usamos o GA4 para identificar você pessoalmente. Você pode desativar o Google Analytics a qualquer momento instalando o Complemento de desativação do Google Analytics (https://tools.google.com/dlpage/gaoptout) ou desativando os cookies nas configurações do navegador.
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

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookies e consentimento
            </h2>
            <p>
              O CompressMyPic não instala nenhum cookie para as suas ferramentas de imagem: a compressão acontece inteiramente no seu navegador e não precisa de nenhum cookie, conta ou preferência guardada por nós. Os cookies deste site vêm de serviços de terceiros. Por exemplo, o Google Analytics pode instalar cookies para as estatísticas de uso. O seu navegador guarda esses cookies no seu dispositivo e você pode apagá-los a qualquer momento nas configurações do navegador.
            </p>
            <p>
              O CompressMyPic não exibe anúncios atualmente, por isso não é pedido aos visitantes de nenhuma região o consentimento para publicidade.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Os seus direitos de acordo com o RGPD
            </h2>
            <p>
              Se você está no Espaço Econômico Europeu ou no Reino Unido, o Regulamento Geral sobre a Proteção de Dados (RGPD) lhe dá direitos sobre os seus dados pessoais. Você pode nos pedir uma cópia dos dados pessoais que temos sobre você, pedir que os corrijamos se estiverem errados, pedir que os apaguemos, pedir que limitemos o seu uso e se opor ao seu tratamento. Quando o tratamento se baseia no seu consentimento, você pode retirá-lo a qualquer momento; retirá-lo não afeta o que fizemos legalmente antes.
            </p>
            <p>
              Como as nossas ferramentas processam as imagens localmente e não temos contas de usuário, os únicos dados pessoais que normalmente temos são o nome, o endereço de e-mail e a mensagem que você envia pelo formulário de contato. Para exercer qualquer um desses direitos, escreva para <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> e responderemos em até 30 dias. Você também tem o direito de apresentar uma reclamação à sua autoridade local de proteção de dados se acreditar que tratamos os seus dados de forma injusta.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Retenção de dados
            </h2>
            <p>
              Guardamos os dados pessoais apenas pelo tempo necessário para a finalidade com que foram coletados. As mensagens do formulário de contato são guardadas somente até que a sua pergunta tenha sido respondida e a conversa encerrada, e por um curto período depois, caso haja perguntas de acompanhamento; nunca são usadas para marketing e nunca são compartilhadas com terceiros. As suas imagens nunca são guardadas: elas existem apenas na memória do seu navegador enquanto você usa uma ferramenta e são apagadas no momento em que você fecha ou atualiza a aba. Os dados analíticos agregados não contêm informações pessoais e são guardados apenas de forma resumida.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Segurança e reCAPTCHA
            </h2>
            <p>
              O site é servido por HTTPS, portanto a conexão entre o seu navegador e o site é criptografada. O nosso formulário de contato é fornecido pelo FormSubmit, que encaminha a sua mensagem para o nosso endereço de e-mail, e o formulário é protegido pelo Google reCAPTCHA para bloquear spam e abuso automatizado. Ao enviar o formulário, o reCAPTCHA pode coletar informações de hardware e software, como os detalhes do seu navegador e dispositivo, para distinguir humanos de robôs; isso é regido pela <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Política de Privacidade
              </a> e pelos <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Termos de Serviço
              </a> do Google. Nunca pedimos que você envie senhas, dados de pagamento ou documentos pessoais sensíveis pelo formulário de contato, e você também não deve incluí-los em uma mensagem.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Privacidade das crianças
            </h2>
            <p>
              O CompressMyPic é uma ferramenta para o público em geral e não é dirigido a crianças menores de 13 anos. Não coletamos conscientemente informações pessoais de crianças. Se você é pai, mãe ou responsável e acredita que o seu filho nos enviou informações pessoais pelo formulário de contato, envie-nos um e-mail e nós as apagaremos prontamente.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Alterações a esta política
            </h2>
            <p>
              Podemos atualizar esta política quando o site mudar — por exemplo, se adicionarmos um novo serviço de análise, um novo parceiro de publicidade ou uma nova forma de entrar em contato conosco. Quando isso acontecer, alteraremos a data de «Última atualização» no topo desta página e as alterações importantes serão descritas aqui em linguagem simples. Continuar a usar o site após uma alteração significa que você aceita a política atualizada.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Contato
            </h2>
            <p>
              Se você tiver perguntas sobre esta política, escreva para{' '}
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
