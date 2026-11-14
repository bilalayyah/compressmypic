import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPagePtProps {
  onNavigate: (path: string) => void;
}

export const AboutPagePt: React.FC<AboutPagePtProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Sobre o CompressMyPic – Compressor de imagens online grátis';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Sobre o CompressMyPic: um compressor de imagens online grátis para JPG, PNG e WebP. Comprima imagens online grátis, sem cadastro, sem marca d\'água e sem enviar nada para nenhum servidor.');
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
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Sobre o CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            O CompressMyPic é um compressor de imagens gratuito e privado. Comprima imagens JPG, PNG e WebP diretamente no seu navegador: rápido, seguro e sem enviar seus arquivos para lugar nenhum.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>O que é o CompressMyPic?</span>
            </h2>
            <p>
              O CompressMyPic é um compressor de imagens online grátis e um otimizador de imagens que ajuda você a reduzir o tamanho das suas imagens sem perder qualidade. É um compressor de fotos e um redutor de tamanho de fotos para os formatos que você usa todos os dias: JPG, PNG e WebP. Use-o para comprimir JPG para 100 KB, comprimir PNG online grátis, comprimir imagens WebP ou reduzir o tamanho de uma foto antes de compartilhá-la no WhatsApp, Instagram, Facebook ou por e-mail.
            </p>
            <p>
              As páginas tradicionais de compressão de imagens enviam suas fotos pessoais ou os gráficos da sua empresa para um servidor que pertence a outra pessoa. Essa prática gera preocupações legítimas, e é justamente por isso que criamos o CompressMyPic ao contrário: como uma ferramenta que faz tudo no seu próprio dispositivo.
            </p>
            <p>
              Quando você seleciona uma imagem ou a arrasta e solta, seu navegador reserva um buffer temporário na memória, desenha a imagem em um elemento Canvas de HTML, aplica o algoritmo de compressão e depois exporta o arquivo novo, tudo dentro da sua própria aba do navegador. No processo de comprimir suas imagens não intervêm infraestruturas de rede, bancos de dados nem servidores na nuvem.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Formatos compatíveis: JPG, PNG e WebP</span>
            </h2>
            <p>
              Como compressor de JPG, o CompressMyPic permite comprimir JPG online grátis e reduzir o tamanho dos seus arquivos JPEG sem que suas fotos percam nitidez: teste o ajuste predefinido Equilibrado ou abaixe o controle deslizante de qualidade e observe o tamanho antes e depois ao vivo para chegar a metas como 100 KB ou 200 KB. Como compressor de PNG, ele permite comprimir PNG online grátis mantendo a transparência de logotipos e gráficos. E quando você comprime imagens WebP, obtém os arquivos menores de todos: o WebP costuma ser de 25% a 35% menor que o JPEG com qualidade semelhante, o que o torna a melhor opção para otimizar imagens para páginas da web.
            </p>
            <p>
              Você pode manter o formato original de cada imagem ou converter entre JPG, PNG e WebP. O controle deslizante de qualidade (de 10% a 100%), os ajustes predefinidos Baixo, Equilibrado e Alto, e a visualização ao vivo do tamanho antes e depois dão a você controle total sobre o equilíbrio entre o tamanho do arquivo e a qualidade da imagem, sem nunca prometer um campo para um tamanho exato em KB que a ferramenta não tem.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Nossos princípios fundamentais</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Privacidade absoluta</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Nenhum arquivo toca jamais um servidor externo nem um banco de dados. Suas fotos e seus gráficos sensíveis ficam estritamente no seu dispositivo. Como a compressão é feita no seu próprio navegador, ninguém mais vê o seu trabalho.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Simples e grátis</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Sem instalar programas, sem planos pagos, sem cobranças ocultas, sem criar contas, sem verificação por e-mail e sem limites de teste. Comprima imagens online grátis: é realmente grátis, sem cadastro e sem marca d'água nas suas imagens comprimidas.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">A qualidade é você quem controla</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Você tem um controle preciso: mova o controle deslizante de Qualidade em tempo real, escolha qualquer um dos ajustes predefinidos Baixo, Equilibrado ou Alto, escolha o formato do arquivo de saída e compare cada imagem lado a lado para detectar as diferenças na hora. Reduza o tamanho das suas imagens sem perder qualidade, do seu jeito.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Compressor de imagens em lote</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Comprima várias imagens de uma vez com os mesmos ajustes e baixe todas juntas com o botão Baixar tudo (ZIP): um compressor de imagens em lote para bibliotecas de fotos, catálogos de produtos e pastas de imagens de sites.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Verificações automáticas de segurança</div>
                <p className="text-xs text-[var(--ink-2)]">
                  O compressor detecta a transparência das suas imagens. Se você escolher saída em JPEG para um PNG transparente, mostramos um aviso porque o JPEG não aceita transparência, assim você nunca perde seu canal alfa por acidente.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Desempenho rápido</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Como todo o processamento é feito localmente no seu dispositivo, você não precisa esperar os arquivos subirem e descerem de um servidor. Você pode comprimir fotos rapidamente, mesmo arquivos grandes de até 20 MB por imagem, no computador ou no celular.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Para quem é o CompressMyPic?</span>
            </h2>
            <p>
              O CompressMyPic é para qualquer pessoa que precise de imagens menores: blogueiros e donos de sites que querem otimizar imagens para a web e reduzir o tamanho das imagens das suas páginas; fotógrafos que precisam reduzir o tamanho das suas fotos antes de compartilhá-las ou entregar provas; vendedores online que comprimem uma foto para seu site ou para um anúncio; estudantes e trabalhadores de escritório que comprimem imagens para anexá-las a um e-mail; e qualquer pessoa que queira comprimir uma imagem para WhatsApp, Instagram ou Facebook para que ela seja enviada mais rápido e consuma menos dados móveis.
            </p>
            <p>
              Funciona em navegadores de computador e de celular, não precisa de instalação e nunca pede que você se cadastre: basta abrir o site, enviar suas imagens e baixar os arquivos menores.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Privacidade e segurança</span>
            </h2>
            <p>
              No CompressMyPic, acreditamos que a privacidade é um direito fundamental, não um recurso opcional. Hoje em dia, muitos sites coletam dados por padrão, até mesmo uma ferramenta de compressão de imagens. Nós adotamos uma abordagem em que a privacidade vem primeiro e usamos a tecnologia moderna do navegador para processar seus arquivos localmente no seu computador.
            </p>
            <p>
              Seus arquivos permanecem na memória do seu navegador e são apagados imediatamente quando você fecha a aba ou atualiza a página. Como nenhum processamento de imagens acontece em servidores remotos, não podemos coletar dados das suas imagens mesmo que quiséssemos. Esse é o projeto e a promessa da ferramenta.
            </p>
            <p>
              Para saber exatamente como tratamos sua privacidade, visite nossa{' '}
              <button
                type="button"
                onClick={() => onNavigate('/pt/privacidade')}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold cursor-pointer"
              >
                Política de Privacidade
              </button>
              {' '}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Nossa missão</span>
            </h2>
            <p>
              Acreditamos que as melhores ferramentas são as mais simples, as mais rápidas e as mais transparentes. Nossa missão é oferecer a todo mundo um compressor de imagens rápido, confiável e totalmente grátis, sem armadilhas ocultas, sem anúncios que rastreiam você, sem envios para servidores e sem abrir mão da sua privacidade. Seja você comprimindo um único JPG ou um lote inteiro de imagens WebP, a ferramenta simplesmente deve funcionar.
            </p>
            <p>
              Tem uma pergunta, uma ideia ou encontrou algo que podemos melhorar? Adoraríamos ouvir você. Você pode nos escrever diretamente pelo site.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/pt/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              Começar a comprimir imagens
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/pt/contato')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              Fale conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
