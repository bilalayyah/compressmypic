import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPagePtProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Abra o CompressMyPic',
    text: 'Acesse compressmypic.online no seu navegador. Não há nada para instalar nem conta para criar: a ferramenta é grátis, sem cadastro e sem marca d\'água.',
  },
  {
    title: 'Envie sua imagem',
    text: 'Arraste sua imagem e solte na página, ou toque em «Procurar arquivos» para escolhê-la no seu dispositivo. São aceitos JPG, PNG e WebP, até 20 MB por imagem. Você pode enviar várias imagens de uma vez.',
  },
  {
    title: 'Comece com o ajuste predefinido Equilibrado',
    text: 'O ajuste predefinido Equilibrado define a qualidade em cerca de 70%. Para a maioria das fotos, isso já reduz o arquivo para uma fração do seu tamanho original; confira o tamanho ao vivo mostrado junto à sua imagem para ver em que ponto você está.',
  },
  {
    title: 'Abaixe o controle deslizante de qualidade passo a passo',
    text: 'Não há um campo onde você digita «100 KB»: em vez disso, arraste o controle deslizante de qualidade para baixo devagar e veja como o tamanho do antes e do depois é atualizado ao vivo depois de cada mudança. Avance em passos pequenos (por exemplo, de 70% para 60% e para 50%) para não passar do ponto e não perder mais qualidade do que o necessário.',
  },
  {
    title: 'Mude para WebP se ainda estiver acima de 100 KB',
    text: 'Se o arquivo continuar acima de 100 KB com uma qualidade razoável, mude o formato de saída para WebP. O WebP costuma ser de 25% a 35% menor que o JPG com a mesma qualidade visível, e muitas vezes fecha a diferença até 100 KB sem abaixar mais a qualidade.',
  },
  {
    title: 'Compare o antes e o depois',
    text: 'Abra a comparação do antes e do depois e aproxime nos rostos, no texto e nos detalhes finos. Se a foto continuar boa, você já terminou. Se ela ficar em blocos ou desbotada, suba um pouco a qualidade e aceite um arquivo um pouco acima de 100 KB: uma foto nítida de 120 KB é melhor que uma embaçada de 100 KB.',
  },
  {
    title: 'Baixe sua imagem',
    text: 'Toque em Baixar para salvar o arquivo menor, ou use «Baixar tudo (ZIP)» se você reduziu várias imagens de uma vez. Sua imagem original nunca é alterada: você sempre recebe uma cópia nova e menor.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'Como deixo o tamanho da minha foto em cerca de 100 KB?',
    answer: 'Envie-a para o CompressMyPic, comece com o ajuste predefinido Equilibrado e depois abaixe o controle deslizante de qualidade passo a passo enquanto observa o tamanho ao vivo do antes e do depois. Pare assim que o tamanho comprimido estiver perto de 100 KB. Se ele ainda estiver acima, mude o formato de saída para WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'Por que não há um campo para digitar exatamente 100 KB?',
    answer: 'Porque cada foto comprime de um jeito diferente: um céu limpo reduz muito mais que uma cena cheia com a mesma qualidade. Um campo fixo de «100 KB» teria que adivinhar. Em vez disso, o CompressMyPic mostra o tamanho comprimido ao vivo depois de cada mudança, para que você mesmo possa levar o arquivo a 100 KB com controle total sobre a qualidade.',
  },
  {
    id: 'kb-faq-3',
    question: 'Qual ajuste de qualidade me dá cerca de 100 KB?',
    answer: 'Depende da foto, mas para uma foto típica de celular, uma qualidade de 50% a 70% costuma ficar perto de 100 KB. Uma foto simples com cores sólidas pode chegar a 100 KB com 70%, enquanto uma paisagem com muitos detalhes pode precisar de 40% a 50%. Observe o tamanho ao vivo: esse número é a verdade, não nenhum percentual fixo.',
  },
  {
    id: 'kb-faq-4',
    question: 'Minha foto continua pesando mais de 100 KB com qualidade baixa, o que faço agora?',
    answer: 'Primeiro mude o formato de saída para WebP, que costuma ser de 25% a 35% menor que o JPG. Se ela ainda estiver acima, abaixe um pouco mais a qualidade e confira a comparação: muitas vezes uma pequena redução adicional é invisível. Como último recurso, uma foto com dimensões enormes pode precisar de um ajuste de qualidade mais baixo do que você esperava, porque mais pixels significam mais dados.',
  },
  {
    id: 'kb-faq-5',
    question: 'Devo usar WebP para chegar a 100 KB?',
    answer: 'Sim, sempre que puder. O WebP é a forma mais fácil de chegar a 100 KB sem abaixar demais a qualidade, porque cria um arquivo menor com a mesma qualidade visível que o JPG. Use WebP para as imagens de sites e em todos os lugares onde navegadores modernos são usados; use JPG só quando a imagem precisar ser aberta em programas antigos ou compartilhada pelo WhatsApp.',
  },
  {
    id: 'kb-faq-6',
    question: 'Reduzir para 100 KB deixa a foto embaçada?',
    answer: 'Não, se você fizer com cuidado. Com 100 KB, uma foto normal de celular continua nítida nas telas, porque as telas mostram bem menos pixels do que os que a câmera capturou. Ela só fica embaçada se você abaixar demais a qualidade (abaixo de cerca de 40%) ou se a foto for impressa grande. Confira sempre a comparação do antes e do depois antes de baixar.',
  },
  {
    id: 'kb-faq-7',
    question: 'Posso reduzir um PNG para 100 KB?',
    answer: 'Sim, mas as fotos PNG são grandes desde o início, então dá mais trabalho. Envie o PNG, abaixe o controle deslizante de qualidade e mude a saída para WebP ou JPG: só isso muitas vezes reduz o tamanho para menos da metade. Mantenha a saída PNG só se a imagem precisar de transparência, e aceite que um PNG transparente pode não chegar a 100 KB.',
  },
  {
    id: 'kb-faq-8',
    question: 'Como deixo uma imagem com 200 KB?',
    answer: 'Use o mesmo método: envie a imagem, comece com o ajuste predefinido Equilibrado e abaixe o controle deslizante de qualidade enquanto observa o tamanho ao vivo até ele ficar perto de 200 KB. A maioria das fotos chega a 200 KB facilmente com uma qualidade de 70% a 80%, então geralmente você não precisa abaixar muito.',
  },
  {
    id: 'kb-faq-9',
    question: 'O que devo fazer para uma imagem pesar 50 KB?',
    answer: 'Envie a imagem, mude o formato de saída para WebP e abaixe o controle deslizante de qualidade aos poucos até o tamanho ao vivo ficar perto de 50 KB, geralmente com uma qualidade de cerca de 40% a 55% para uma foto. Confira a comparação com atenção, porque com 50 KB os detalhes finos começam a sofrer; está bom para miniaturas e chat, menos para as fotos que você quer guardar.',
  },
  {
    id: 'kb-faq-10',
    question: 'É possível baixar uma imagem até 20 KB?',
    answer: 'Use a saída WebP e um ajuste de qualidade baixo, geralmente de 25% a 40%, e observe o tamanho ao vivo. 20 KB é muito pouco, então espere uma suavidade visível: serve para ícones, miniaturas e imagens de pré-visualização pequenas, não para fotos com rostos. Se a imagem ainda não chegar a 20 KB, ela provavelmente tem detalhes demais para um arquivo tão pequeno.',
  },
  {
    id: 'kb-faq-11',
    question: 'Qual é um bom tamanho de arquivo para as imagens de um site?',
    answer: 'Busque menos de 100 KB por imagem para as fotos de conteúdo normais, e menos de 200 KB para as imagens principais grandes. Arquivos pequenos fazem as páginas carregarem mais rápido, algo que os visitantes notam e que o Google premia. Use o formato WebP e o ajuste predefinido Equilibrado como ponto de partida para as imagens de sites.',
  },
  {
    id: 'kb-faq-12',
    question: 'Qual é o limite de tamanho dos anexos de e-mail?',
    answer: 'A maioria dos provedores de e-mail permite de 20 a 25 MB por mensagem no total, incluindo todos os anexos; o Gmail permite 25 MB. Uma só foto reduzida para 100 KB nunca é um problema; até dez fotos de 100 KB cada são só 1 MB. Comprimir primeiro é o que faz enviar várias fotos por e-mail não ter complicações.',
  },
  {
    id: 'kb-faq-13',
    question: 'Posso reduzir várias imagens para 100 KB de uma vez?',
    answer: 'Sim. Envie todas as imagens juntas, aplique o mesmo ajuste predefinido e a mesma qualidade a todas e confira o tamanho ao vivo de cada uma. Se uma imagem continuar acima de 100 KB, ajuste-a separadamente e depois baixe tudo junto com o botão «Baixar tudo (ZIP)».',
  },
  {
    id: 'kb-faq-14',
    question: 'A ferramenta muda as dimensões da minha imagem?',
    answer: 'Não. O CompressMyPic mantém as dimensões da sua imagem exatamente iguais: só o tamanho do arquivo é reduzido. Sua foto conserva a mesma largura, altura e proporção da original, então uma foto de 4000×3000 fica em 4000×3000, só que com um arquivo bem menor.',
  },
  {
    id: 'kb-faq-15',
    question: 'Como confiro o tamanho da minha imagem comprimida?',
    answer: 'O CompressMyPic mostra o tamanho original e o tamanho comprimido de cada imagem, ao vivo, logo abaixo de cada foto; por exemplo, «4,2 MB → 98 KB». Você também pode conferir o arquivo baixado no seu dispositivo: no celular, veja os detalhes do arquivo na sua galeria ou no gerenciador de arquivos.',
  },
  {
    id: 'kb-faq-16',
    question: '100 KB é qualidade suficiente para um site?',
    answer: 'Sim, para quase todos os usos na web. As fotos de sites são mostradas com algumas centenas de pixels de largura, então uma imagem de 100 KB fica nítida na tela. Só as imagens principais em tela cheia ou as fotos destinadas a serem impressas precisam de arquivos maiores. Comprima para 100 KB, confira a comparação e você vai ver que a qualidade se mantém.',
  },
  {
    id: 'kb-faq-17',
    question: 'Posso reduzir uma captura de tela para 100 KB?',
    answer: 'Sim, e as capturas de tela são o caso mais fácil. Elas têm grandes áreas de cor sólida, então comprimem muito bem: uma captura de tela que começa com 1 MB muitas vezes cai para menos de 100 KB com o ajuste predefinido Equilibrado. Teste a saída WebP para obter o resultado menor.',
  },
  {
    id: 'kb-faq-18',
    question: 'Minhas imagens saem do meu dispositivo ao comprimi-las?',
    answer: 'Não. Toda a compressão acontece dentro do seu próprio navegador no seu dispositivo, então suas imagens nunca são enviadas para um servidor, nem armazenadas nem vistas por mais ninguém. Elas ficam na memória do seu navegador e são apagadas quando você fecha ou atualiza a aba.',
  },
  {
    id: 'kb-faq-19',
    question: 'Há algum limite na quantidade de imagens que posso reduzir?',
    answer: 'Não. Não há limite na quantidade de imagens que você pode comprimir, e você não precisa de nenhuma conta nem cadastro. O único limite é de 20 MB por imagem, que cobre fotos de câmera de alta resolução e capturas de tela grandes.',
  },
  {
    id: 'kb-faq-20',
    question: 'Reduzir imagens para 100 KB é grátis?',
    answer: 'Sim, totalmente grátis. Não há cobranças, não há planos pagos, não há créditos e não há marca d\'água nas suas imagens comprimidas. Abra o site, reduza suas imagens para 100 KB e baixe-as quantas vezes quiser.',
  },
];

export const Guide100kbPagePt: React.FC<Guide100kbPagePtProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Como reduzir uma imagem para 100 KB para web e e-mail';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Reduza o tamanho de uma imagem para 100 KB para sites e e-mail com um compressor online grátis. Guia passo a passo, sem cadastro nem marca d\'água.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/pt/guias/reduzir-imagem-para-100kb';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Como reduzir o tamanho de uma imagem para 100 KB para sites e e-mail',
          description: 'Use o controle deslizante de qualidade e a saída WebP no CompressMyPic para reduzir uma imagem para cerca de 100 KB.',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/pt/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao compressor de imagens</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            Como reduzir o tamanho de uma imagem para 100 KB para sites e e-mail
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Uma foto de 4 MB faz seu site carregar devagar e trava um e-mail. Reduzi-la para cerca de 100 KB faz as páginas carregarem rápido e os e-mails serem enviados na hora, e se você fizer bem, ninguém consegue notar a diferença.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>Por que 100 KB é o número mágico</span>
            </h2>
            <p>
              100 KB é o tamanho que a maioria das pessoas busca porque está no ponto ideal: pequeno o suficiente para carregar na hora em um site ou caber em qualquer e-mail, mas grande o suficiente para continuar nítido em uma tela. Uma foto típica de celular começa com 3 a 5 MB, então chegar a 100 KB significa eliminar cerca de 97% do arquivo, e a compressão moderna consegue isso principalmente eliminando dados que seus olhos não conseguem ver.
            </p>
            <p>
              Uma nota honesta antes de começar: o CompressMyPic não tem um campo onde você digita «100 KB» e obtém exatamente esse tamanho. Nenhuma ferramenta honesta pode prometer um número exato, porque cada foto comprime de um jeito diferente. Em vez disso, a ferramenta mostra o tamanho comprimido ao vivo depois de cada mudança, e você mesmo o leva até 100 KB com o controle deslizante de qualidade. Este guia mostra exatamente como fazer isso.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>Passo a passo: reduza uma imagem para 100 KB</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="Captura de tela de como enviar uma foto grande para o CompressMyPic para reduzi-la para 100 KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Envie sua foto: o tamanho original é mostrado na hora, então você sabe quanto precisa reduzir.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>Metas comuns de relance</span>
            </h2>
            <p>
              100 KB não é a única meta que as pessoas precisam. O mesmo método funciona para qualquer tamanho; isto é o que você pode esperar de cada um:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Meta</th>
                    <th className="px-4 py-3 font-semibold">Qualidade típica</th>
                    <th className="px-4 py-3 font-semibold">Ideal para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">200 KB</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">Fotos de blog, imagens web grandes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">100 KB</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">Fotos de sites, anexos de e-mail</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">50 KB</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">Miniaturas, chat, páginas rápidas</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">20 KB</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">Ícones, pré-visualizações pequenas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Estes são pontos de partida, não promessas. Uma foto simples chega a 100 KB facilmente; uma foto com muitos detalhes precisa de um ajuste de qualidade mais baixo. Confie no número do tamanho ao vivo, não no percentual.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>Dicas para sites e e-mail</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Para os sites, use a saída WebP: é a forma mais rápida de chegar a 100 KB e todos os navegadores modernos a aceitam.</li>
              <li>Para o e-mail, o JPG é o formato mais seguro porque todos os aplicativos de e-mail o abrem. Um JPG de 100 KB é anexado na hora e nunca volta por tamanho.</li>
              <li>Comprima todas as fotos de uma página ou de um e-mail juntas e depois baixe todas com o botão Baixar tudo (ZIP).</li>
              <li>Não persiga um 100 KB exato. Uma foto nítida de 115 KB é melhor que uma embaçada de exatamente 100 KB: a diferença no tempo de carregamento é nula.</li>
              <li>Confira sempre a comparação do antes e do depois com o zoom no máximo antes de publicar ou enviar a foto.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="Captura de tela do tamanho do arquivo ao vivo, antes e depois, mostrando uma imagem reduzida para cerca de 100 KB"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              O tamanho ao vivo do antes e do depois mostra seu progresso: abaixe o controle deslizante até o tamanho comprimido ficar perto de 100 KB.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Quando 100 KB não é possível</span>
            </h2>
            <p className="text-sm sm:text-base">
              Algumas imagens simplesmente não conseguem chegar a 100 KB sem ficar ruins: uma foto muito grande e com muitos detalhes, ou um PNG com transparência que precisa continuar sendo PNG. Nesse caso, não force. Uma foto nítida de 180 KB é melhor que uma estragada de 100 KB em todos os casos: para um site ela continua carregando rápido e para o e-mail continua bem abaixo de qualquer limite de anexos. O objetivo é um arquivo pequeno que continue ficando bom, não um número mágico.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Perguntas frequentes</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">Guias relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/pt/guias/comprimir-imagens-para-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Como comprimir imagens para WhatsApp sem perder qualidade</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Reduza as fotos você mesmo primeiro e depois envie-as como documentos para que o WhatsApp não as deixe embaçadas.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/pt/guias/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP: qual formato devo usar?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Tamanho de arquivo, qualidade e transparência comparados, para você escolher o formato certo sempre.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/pt/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Comprimir imagens grátis
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/pt/guias/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
