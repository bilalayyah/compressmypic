import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideFormatsPagePtProps {
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
    text: 'Acesse compressmypic.online no seu navegador. Não há nada para instalar, não há conta para criar e nenhum arquivo é enviado jamais para um servidor.',
  },
  {
    title: 'Envie sua imagem',
    text: 'Arraste sua imagem e solte, ou toque em «Procurar arquivos» para escolhê-la. São aceitos arquivos JPG, PNG e WebP, até 20 MB por imagem.',
  },
  {
    title: 'Decida: mantenha o formato ou converta',
    text: 'Escolha «Original» para manter o formato que sua imagem já tem, ou escolha JPG, PNG ou WebP como saída. Use o guia abaixo para decidir: JPG para as fotos, PNG quando precisa de transparência, WebP quando quer o arquivo menor para um site.',
  },
  {
    title: 'Escolha um ajuste predefinido de qualidade',
    text: 'Comece com o ajuste predefinido Equilibrado (cerca de 70%). Para uma foto que você queira que fique perfeita, use o ajuste predefinido Alto ou uma qualidade de 85% a 90%. Para uma imagem web pequena, um ajuste mais baixo está bom.',
  },
  {
    title: 'Confira o tamanho ao vivo e compare',
    text: 'Cada imagem mostra seu tamanho original e seu novo tamanho comprimido. Abra a comparação do antes e do depois e aproxime: se você não vir nenhuma diferença, o ajuste é o certo. Teste mudar o formato de saída para WebP e veja quanto menor o arquivo fica.',
  },
  {
    title: 'Baixe sua imagem',
    text: 'Baixe a imagem individual, ou use «Baixar tudo (ZIP)» quando você tiver convertido várias imagens de uma vez. Seu arquivo original nunca é alterado: você recebe uma cópia nova e menor.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'Qual é a diferença entre JPG e PNG?',
    answer: 'O JPG é um formato com perda feito para as fotos: ele remove alguns detalhes para criar arquivos bem menores e não aceita transparência. O PNG não tem perda e aceita transparência, então é perfeito para logotipos e gráficos, mas as fotos em PNG são várias vezes maiores que a mesma foto salva como JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'O WebP é melhor que o JPG?',
    answer: 'Em tamanho de arquivo, sim: o WebP costuma ser de 25% a 35% menor que o JPG com qualidade semelhante, e também aceita transparência. A única razão para escolher o JPG em vez do WebP é a compatibilidade: alguns programas antigos e alguns aplicativos ainda lidam melhor com o JPG, e o WhatsApp mostra as fotos JPG de forma mais confiável.',
  },
  {
    id: 'fmt-faq-3',
    question: 'O WebP é melhor que o PNG?',
    answer: 'Geralmente, sim. O WebP aceita transparência como o PNG, mas cria arquivos bem menores, e também pode fazer compressão com perda como o JPG. O PNG continua sendo a opção mais segura quando você precisa de uma qualidade perfeita e sem perda para um logotipo ou gráfico que será editado de novo mais tarde.',
  },
  {
    id: 'fmt-faq-4',
    question: 'O PNG aceita transparência e o JPG não?',
    answer: 'Correto. O PNG aceita um fundo transparente (um canal alfa), por isso os logotipos e os ícones costumam ser PNG. O JPG não tem transparência nenhuma: qualquer área transparente de um JPG vira uma cor sólida, normalmente branca, então nunca salve um logotipo com fundo transparente como JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'Por que os arquivos PNG são bem maiores que os JPG?',
    answer: 'Porque o PNG não tem perda: ele conserva cada pixel de detalhe exatamente, enquanto o JPG remove detalhes que o olho mal nota. Uma foto de câmera salva como PNG pode ser de 5 a 10 vezes maior que a mesma foto como JPG. Por isso as fotos quase nunca deveriam ser PNG.',
  },
  {
    id: 'fmt-faq-6',
    question: 'Quando devo usar JPG em vez de WebP?',
    answer: 'Use JPG quando a imagem for aberta em programas antigos, enviada pelo WhatsApp ou por e-mail e você quiser uma pré-visualização garantida, ou impressa. O WebP é melhor para os sites, mas para compartilhar uma foto com alguém, o JPG continua sendo o formato mais universal.',
  },
  {
    id: 'fmt-faq-7',
    question: 'Posso converter PNG para JPG?',
    answer: 'Sim. Envie o PNG para o CompressMyPic, escolha JPG como formato de saída e baixe. Só lembre que o JPG não tem transparência: se o seu PNG tem um fundo transparente, escolha primeiro uma cor de fundo, porque a área transparente vai ficar branca e sólida do contrário.',
  },
  {
    id: 'fmt-faq-8',
    question: 'Posso converter JPG para WebP?',
    answer: 'Sim. Envie o JPG, escolha WebP como saída e baixe: o arquivo costuma ser de 25% a 35% menor com a mesma qualidade visível. Você pode converter vários JPG para WebP de uma vez e baixar todos como um ZIP.',
  },
  {
    id: 'fmt-faq-9',
    question: 'Converter JPG para PNG melhora a qualidade?',
    answer: 'Não. Converter um JPG para PNG não consegue recuperar os detalhes que a compressão JPG já removeu; só deixa o arquivo bem maior. A única boa razão para converter JPG para PNG é se você precisa editar a imagem de novo sem perder mais qualidade.',
  },
  {
    id: 'fmt-faq-10',
    question: 'Qual formato devo usar para um site?',
    answer: 'WebP primeiro e JPG como alternativa. O WebP dá a você os arquivos menores, o que faz as páginas carregarem mais rápido, e a velocidade da página importa tanto para os visitantes quanto para o Google. Use PNG só para as imagens que precisam de transparência, como um logotipo, e JPG para as fotos se você não puder usar WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: 'Qual formato é melhor para um logotipo?',
    answer: 'PNG se o logotipo precisar de um fundo transparente, porque o JPG não aceita transparência. O WebP também aceita transparência e cria um arquivo menor, então é uma boa opção para um logotipo em um site. Nunca salve um logotipo como JPG se o fundo precisar ficar transparente.',
  },
  {
    id: 'fmt-faq-12',
    question: 'Qual formato é melhor para as capturas de tela?',
    answer: 'PNG ou WebP. As capturas de tela têm bordas nítidas e cores sólidas, que o PNG e o WebP tratam bem. O JPG embaça as bordas nítidas do texto. Para obter o arquivo de captura de tela menor, teste a saída WebP no CompressMyPic: ela costuma ser bem menor que o PNG sem nenhuma diferença visível.',
  },
  {
    id: 'fmt-faq-13',
    question: 'Todos os navegadores aceitam WebP agora?',
    answer: 'Sim, praticamente todos. Chrome, Edge, Firefox, Safari e todos os navegadores móveis modernos aceitam WebP há anos. Só os navegadores muito antigos e alguns aplicativos antigos não conseguem abrir WebP, e essa é a única razão pela qual o JPG continua útil.',
  },
  {
    id: 'fmt-faq-14',
    question: 'O WhatsApp ou o Instagram aceitam WebP?',
    answer: 'O WhatsApp pode receber arquivos WebP, mas é possível que eles não apareçam como uma foto normal, então o JPG é mais seguro para compartilhar fotos lá. O Instagram aceita JPG e PNG para as publicações e converte os envios por conta própria. Para compartilhar nas redes sociais, fique com o JPG para as fotos.',
  },
  {
    id: 'fmt-faq-15',
    question: 'Converter uma foto para WebP perde qualidade?',
    answer: 'Só tanto quanto você escolher. O WebP usa a mesma ideia que o JPG: um ajuste de qualidade que troca um pouco de detalhe por um arquivo menor. Com uma qualidade de 80% a 90%, uma foto WebP fica idêntica ao JPG original e o arquivo é cerca de um terço menor.',
  },
  {
    id: 'fmt-faq-16',
    question: 'JPG e JPEG são o mesmo formato?',
    answer: 'Não há nenhuma diferença: JPG e JPEG são o mesmo formato. JPEG é o nome completo (Joint Photographic Experts Group) e JPG é a extensão curta do arquivo. Um arquivo chamado foto.jpg e um arquivo chamado foto.jpeg são o mesmo tipo de imagem.',
  },
  {
    id: 'fmt-faq-17',
    question: 'Devo manter o formato original ou converter?',
    answer: 'Mantenha o original se você estiver satisfeito com o tamanho: é a opção mais simples e nada é perdido. Converta quando tiver uma razão: de JPG para WebP para reduzir uma foto de um site, de PNG para JPG para reduzir uma foto que não precisa de transparência, ou de PNG para WebP para reduzir um logotipo.',
  },
  {
    id: 'fmt-faq-18',
    question: 'Qual formato dá o arquivo menor?',
    answer: 'O WebP, em quase todos os casos. Para as fotos, o WebP costuma ser de 25% a 35% menor que o JPG com a mesma qualidade visível. Para os gráficos com transparência, o WebP costuma ser bem menor que o PNG. Por isso o WebP é o melhor formato para os sites.',
  },
  {
    id: 'fmt-faq-19',
    question: 'O CompressMyPic converte entre JPG, PNG e WebP?',
    answer: 'Sim. Envie uma imagem JPG, PNG ou WebP, escolha o formato de saída que quiser — original, JPG, PNG ou WebP — e baixe o arquivo convertido. Você pode converter várias imagens de uma vez com os mesmos ajustes e baixar todas como um ZIP.',
  },
  {
    id: 'fmt-faq-20',
    question: 'O que acontece com a transparência se eu converter um PNG para JPG?',
    answer: 'Ela é perdida. O JPG não consegue armazenar transparência, então as partes transparentes do seu PNG viram uma cor sólida. O CompressMyPic permite escolher uma cor de fundo para preencher essas áreas, então escolha uma que combine com o lugar onde a imagem será usada; o branco é a opção habitual.',
  },
];

export const GuideFormatsPagePt: React.FC<GuideFormatsPagePtProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: qual formato devo usar?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP explicado de forma simples: compare tamanho, qualidade e transparência para escolher o formato certo para suas fotos, logotipos e sites.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/pt/guias/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Como escolher entre JPG, PNG e WebP e converter imagens',
          description: 'Compare JPG, PNG e WebP e depois comprima ou converta sua imagem com o CompressMyPic.',
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
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
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
            JPG vs PNG vs WebP: qual formato devo usar?
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Escolher o formato errado pode deixar sua imagem dez vezes maior do que o necessário, ou estragar um logotipo transparente. Aqui está a comparação simples e honesta, e como converter entre formatos em segundos.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>A resposta curta</span>
            </h2>
            <p>
              Se você só lembrar de uma coisa, lembre disto: use JPG para as fotos, PNG para os logotipos e tudo o que precisa de transparência, e WebP quando quiser o arquivo menor, principalmente em um site. A tabela abaixo mostra por quê.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Formato</th>
                    <th className="px-4 py-3 font-semibold">Tamanho de arquivo</th>
                    <th className="px-4 py-3 font-semibold">Transparência</th>
                    <th className="px-4 py-3 font-semibold">Ideal para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">JPG</td>
                    <td className="px-4 py-3">Pequeno</td>
                    <td className="px-4 py-3">Não</td>
                    <td className="px-4 py-3">Fotos, compartilhar, imprimir</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">PNG</td>
                    <td className="px-4 py-3">Grande</td>
                    <td className="px-4 py-3">Sim</td>
                    <td className="px-4 py-3">Logotipos, ícones, capturas de tela</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">WebP</td>
                    <td className="px-4 py-3">O menor</td>
                    <td className="px-4 py-3">Sim</td>
                    <td className="px-4 py-3">Sites, fotos web</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Camera className="w-4 h-4" />
              </span>
              <span>JPG: o melhor para as fotos</span>
            </h2>
            <p className="text-sm sm:text-base">
              O JPG (também escrito JPEG) é o formato clássico para fotos. Ele usa compressão com perda: remove detalhes finos que seu olho mal nota, o que deixa os arquivos bem menores. Uma foto de câmera de 5 MB pode virar 500 KB como JPG e continuar ficando muito boa. O JPG não aceita transparência, então é a opção errada para os logotipos, mas para qualquer foto normal é a opção segura e universal que todos os dispositivos e aplicativos conseguem abrir.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: o melhor para logotipos e transparência</span>
            </h2>
            <p className="text-sm sm:text-base">
              O PNG não tem perda: ele conserva cada pixel exatamente e aceita fundos transparentes. Isso o torna o formato certo para logotipos, ícones e gráficos com texto. O preço é o tamanho do arquivo: uma foto salva como PNG pode ser de 5 a 10 vezes maior que a mesma foto como JPG. Nunca salve uma foto de câmera como PNG a menos que você tenha uma razão específica.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: o melhor para sites</span>
            </h2>
            <p className="text-sm sm:text-base">
              O WebP é o formato moderno criado pelo Google. Ele faz tudo: compressão com perda como o JPG, transparência como o PNG, e arquivos que costumam ser de 25% a 35% menores que o JPG com a mesma qualidade visível. Todos os navegadores modernos o aceitam, por isso é o melhor formato para as imagens de sites. Sua única fraqueza é a compatibilidade com programas antigos, e com as pré-visualizações do WhatsApp, onde o JPG continua mais seguro.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="Captura de tela comparando a mesma foto salva como JPG, PNG e WebP com seus tamanhos de arquivo"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              A mesma foto em três formatos: o WebP é o menor, o PNG é o maior e o JPG fica no meio.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>Passo a passo: comprima ou converta sua imagem</span>
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

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Qual formato para cada trabalho?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Fotos de câmera: JPG ou WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  JPG para compartilhar e imprimir, WebP para seu site. Ambos mantêm as fotos com muito bom aspecto a uma fração do tamanho original.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Logotipos e ícones: PNG ou WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Você precisa de transparência, então o JPG fica descartado. O PNG é o clássico seguro; o WebP é menor e funciona em todos os lugares modernos.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Capturas de tela: WebP ou PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  O texto nítido e as cores sólidas vão bem com WebP e PNG. O JPG embaça as bordas do texto, então evite-o nas capturas de tela.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Imagens de sites: WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Os arquivos menores significam páginas mais rápidas. Converta as fotos do seu site para WebP e mantenha o JPG como alternativa para os navegadores muito antigos.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="Captura de tela de como escolher o formato de saída JPG, PNG ou WebP no CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Escolha seu formato de saída no CompressMyPic: mantenha o original ou converta para JPG, PNG ou WebP.
            </figcaption>
          </figure>

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
                onClick={() => onNavigate('/pt/guias/reduzir-imagem-para-100kb')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Como reduzir o tamanho de uma imagem para 100 KB para sites e e-mail</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Guia passo a passo para chegar a 100 KB sem estragar sua foto.</p>
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
              onClick={() => onNavigate('/pt/guias/comprimir-imagens-para-whatsapp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              Comprimir para WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
