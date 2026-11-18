import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPagePtProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPagePt: React.FC<CookiePolicyPagePtProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Política de cookies | CompressMyPic – Como os cookies são usados';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Política de cookies
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última atualização: 18 de novembro de 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. O que são cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto que um site pede ao seu navegador para armazenar no seu dispositivo. Eles podem lembrar informações sobre a sua visita — por exemplo, se você já viu uma mensagem antes — para que o site ou um serviço possa reconhecer o seu navegador em uma visita posterior. Esta política explica quais cookies são usados no CompressMyPic, por que são usados e como você pode controlá-los.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookies que não definimos
            </h2>
            <p>
              O CompressMyPic não define nenhum cookie. Nossas ferramentas de imagem funcionam inteiramente no seu navegador: a compressão não precisa de conta, login ou cookie. Não definimos cookies para lembrar de você, rastreá-lo ou armazenar suas preferências. Suas imagens nunca saem do seu navegador, e nada sobre elas é armazenado em um cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Cookies de publicidade do Google AdSense
            </h2>
            <p>
              Usamos o Google AdSense para exibir anúncios neste site. O AdSense e seus parceiros podem definir cookies no seu dispositivo para veicular anúncios com base nas suas visitas anteriores a este site ou a outros sites. O uso de cookies de publicidade pelo Google permite que ele e seus parceiros veiculem anúncios para você com base na sua visita a este site e/ou a outros sites na Internet, e meçam a frequência com que um anúncio é exibido. Os espaços publicitários deste site são escolhidos manualmente; não usamos inserção automática de anúncios. Você pode desativar a publicidade personalizada visitando as Configurações de anúncios do Google (
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://adssettings.google.com</a>
              ) ou 
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://www.aboutads.info/choices/</a>
              . Escolher anúncios não personalizados não interrompe a publicidade por completo, mas significa que os anúncios não serão mais baseados no seu histórico de navegação.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Cookies do Google Analytics 4
            </h2>
            <p>
              Usamos o Google Analytics 4 (GA4) para entender, de forma agregada, como o site é usado — por exemplo, quais ferramentas são populares e quais páginas recebem visitas. O GA4 pode definir cookies no seu dispositivo, como _ga, para distinguir uma visita da outra. Os dados são anonimizados e usados apenas de forma resumida; não usamos o GA4 para identificá-lo pessoalmente. Você pode desativar o Google Analytics a qualquer momento instalando o complemento de desativação do Google Analytics (https://tools.google.com/dlpage/gaoptout) ou desativando os cookies nas configurações do seu navegador.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Consentimento (EEE, Reino Unido e Suíça)
            </h2>
            <p>
              Se você nos visita do Espaço Econômico Europeu, do Reino Unido ou da Suíça, o Google mostra uma mensagem de consentimento antes de exibir publicidade personalizada, de acordo com o RGPD e a Política de Consentimento de Usuários da UE do Google. Você pode alterar ou retirar seu consentimento a qualquer momento usando o link "Configurações de privacidade e cookies" no rodapé deste site, que reabre a mensagem de consentimento, ou limpando os cookies do seu navegador. Retirar o consentimento não afeta nada feito licitamente antes da retirada.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Outros serviços de terceiros
            </h2>
            <p>
              Alguns outros serviços deste site podem usar cookies ou armazenamento semelhante próprios. O Google reCAPTCHA, que protege nosso formulário de contato contra spam, pode definir cookies para distinguir pessoas de robôs; seu uso é regido pela 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Política de Privacidade do Google</a>
               e pelos 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Termos de Serviço do Google</a>
               do Google. A Cloudflare, que hospeda este site, pode definir um cookie de segurança para proteger o site contra abusos. Os comentários anônimos em nossas ferramentas pedem apenas um nome, que é armazenado pelo serviço de comentários — não em um cookie deste site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Armazenamento do navegador que não é um cookie
            </h2>
            <p>
              Seu navegador também armazena uma pequena quantidade de informações locais que não é um cookie. Se você publicar um comentário, seu navegador pode lembrar o nome digitado para não precisar digitá-lo novamente, e se você mudar o idioma do site, seu navegador pode lembrar essa escolha para sua próxima visita. Essas informações ficam no seu próprio dispositivo, nunca são enviadas aos nossos servidores e podem ser apagadas a qualquer momento, limpando os dados do site no seu navegador.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Como controlar os cookies
            </h2>
            <p>
              Você pode excluir os cookies já armazenados no seu dispositivo e impedir que cookies sejam definidos no futuro nas configurações do seu navegador — todos os principais navegadores (Chrome, Firefox, Safari, Edge) oferecem isso nas configurações de privacidade ou segurança. Bloquear todos os cookies não afetará nossas ferramentas de imagem, que não dependem de cookies, mas pode afetar recursos de serviços de terceiros, como anúncios e estatísticas. Você também pode usar o modo privado ou anônimo do navegador, que exclui os cookies ao fechar a janela.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta política quando o site mudar — por exemplo, se adicionarmos um novo parceiro de publicidade ou serviço de estatísticas. Quando isso acontecer, alteraremos a data de "Última atualização" no topo desta página. Continuar usando o site após uma alteração significa que você aceita a política atualizada.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Contato
            </h2>
            <p>
              Se tiver dúvidas sobre esta política, entre em contato conosco em 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
               ou leia nossa 
              <a href="/pt/privacidade" onClick={(e) => { e.preventDefault(); onNavigate('/pt/privacidade'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Política de Privacidade</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
