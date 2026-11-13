import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';

interface GuideWhatsAppPagePtProps {
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
    text: 'Acesse compressmypic.online no navegador do seu celular ou do seu computador. Não há nada para instalar nem conta para criar: a ferramenta abre na hora.',
  },
  {
    title: 'Envie sua foto',
    text: 'Toque em «Procurar arquivos» e escolha a foto da sua galeria, ou arraste a foto e solte na página. Você pode enviar várias fotos de uma vez. Cada imagem pode ter até 20 MB.',
  },
  {
    title: 'Comece com o ajuste predefinido Equilibrado',
    text: 'O ajuste predefinido Equilibrado (cerca de 70% de qualidade) é um bom ponto de partida para as fotos do WhatsApp. Ele reduz bastante o tamanho do arquivo e a foto continua nítida na tela de um celular.',
  },
  {
    title: 'Confira o tamanho ao vivo, antes e depois',
    text: 'Cada foto mostra seu tamanho original e seu novo tamanho comprimido, um ao lado do outro. Se o arquivo continuar maior do que você quer, abaixe um pouco o controle deslizante de qualidade e veja como o tamanho é atualizado na hora.',
  },
  {
    title: 'Mantenha o JPG para as fotos',
    text: 'Para as fotos normais, mantenha o formato de saída JPG. É o formato que o WhatsApp lida melhor e o que produz os arquivos menores para as fotos. Use o PNG só se a sua imagem precisar de transparência, como um logotipo.',
  },
  {
    title: 'Compare o antes e o depois',
    text: 'Abra a comparação do antes e do depois para conferir se a foto continua boa. Aproxime nos rostos e no texto: se você não vir nenhuma diferença real, o ajuste de qualidade é o certo.',
  },
  {
    title: 'Baixe a foto menor',
    text: 'Toque em Baixar na foto, ou use «Baixar tudo (ZIP)» se você comprimiu várias fotos de uma vez. O arquivo menor é salvo no seu dispositivo; sua foto original nunca é alterada.',
  },
  {
    title: 'Envie pelo WhatsApp do jeito certo',
    text: 'Se você quiser a melhor qualidade possível, envie a foto comprimida como documento: no WhatsApp, toque em Anexar, depois em Documento, e escolha o arquivo. O WhatsApp envia os documentos sem tocá-los, então sua foto chega exatamente como você a comprimiu. Se você enviá-la como foto, o WhatsApp vai comprimi-la uma segunda vez.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'Por que o WhatsApp reduz a qualidade das fotos?',
    answer: 'Quando você envia uma foto do jeito habitual, o WhatsApp a comprime novamente para economizar dados e espaço, e muitas vezes a reduz para um tamanho e uma qualidade bem menores. Por isso uma foto nítida de câmera pode ficar suave ou embaçada depois de enviada.',
  },
  {
    id: 'wa-faq-2',
    question: 'O WhatsApp comprime as imagens enviadas como documento?',
    answer: 'Não. Quando você envia uma imagem como documento (Anexar e depois Documento), o WhatsApp envia o arquivo como ele é, sem nenhuma compressão adicional. É a melhor maneira de compartilhar uma foto com toda a qualidade.',
  },
  {
    id: 'wa-faq-3',
    question: 'Qual é o tamanho máximo de imagem que o WhatsApp aceita?',
    answer: 'O WhatsApp permite documentos de até 2 GB, então uma foto comprimida de algumas centenas de KB nunca é um problema. As fotos enviadas do jeito habitual são comprimidas novamente pelo próprio WhatsApp, então na prática o que importa é a qualidade, não o tamanho.',
  },
  {
    id: 'wa-faq-4',
    question: 'Como envio uma foto com toda a qualidade pelo WhatsApp?',
    answer: 'Primeiro comprima a foto você mesmo com o CompressMyPic para que ela tenha um tamanho razoável e depois envie-a pelo WhatsApp como documento em vez de como foto. Toque em Anexar, escolha Documento e selecione o arquivo. Ela vai chegar sem que o WhatsApp a comprima de novo.',
  },
  {
    id: 'wa-faq-5',
    question: 'Devo comprimir antes de enviar ou deixar o WhatsApp fazer isso?',
    answer: 'Comprima você primeiro. O WhatsApp comprime de forma agressiva e você não tem nenhum controle sobre isso. Quando você comprime com o CompressMyPic primeiro, escolhe a qualidade, confere o resultado e depois envia o arquivo como documento para que o WhatsApp não o toque de novo.',
  },
  {
    id: 'wa-faq-6',
    question: 'Qual ajuste de qualidade devo usar para as fotos do WhatsApp?',
    answer: 'Comece com o ajuste predefinido Equilibrado, cerca de 70%. Para uma foto importante, use de 80% a 85% e confira a comparação do antes e do depois. Para uma foto comum e rápida, quando a velocidade importa, de 50% a 60% continua ficando bom na tela de um celular e produz um arquivo bem menor.',
  },
  {
    id: 'wa-faq-7',
    question: 'Comprimir duas vezes piora as fotos?',
    answer: 'Sim. Cada rodada de compressão JPEG remove um pouco mais de detalhe. Por isso você deve comprimir uma só vez com o CompressMyPic e depois enviar o resultado como documento, em vez de deixar o WhatsApp comprimir uma foto já comprimida uma segunda vez.',
  },
  {
    id: 'wa-faq-8',
    question: 'Posso comprimir fotos do WhatsApp no celular?',
    answer: 'Sim. O CompressMyPic funciona no navegador do Android e do iPhone. Abra o site, escolha a foto da sua galeria, comprima, baixe o arquivo menor e depois compartilhe pelo WhatsApp. Não há nenhum aplicativo para instalar.',
  },
  {
    id: 'wa-faq-9',
    question: 'As fotos comprimidas ficam boas nos status do WhatsApp?',
    answer: 'Sim, se você não exagerar. Os status do WhatsApp mostram as fotos em uma resolução modesta, então uma foto comprimida com o ajuste predefinido Equilibrado (cerca de 70%) fica igual à original na tela de um celular. Evite baixar de 50% nas fotos de status com rostos ou texto.',
  },
  {
    id: 'wa-faq-10',
    question: 'O WhatsApp diz que minha imagem é grande demais, o que faço?',
    answer: 'Envie a imagem para o CompressMyPic e abaixe o controle deslizante de qualidade até o arquivo pesar algumas centenas de KB; depois baixe e envie novamente. Se mesmo assim não for enviada como foto, envie-a como documento, que aceita arquivos bem maiores.',
  },
  {
    id: 'wa-faq-11',
    question: 'Devo usar JPG ou PNG para o WhatsApp?',
    answer: 'Use JPG para as fotos. O JPG produz arquivos bem menores para as fotos de câmera e o WhatsApp lida melhor com ele. Use PNG só para as imagens que precisam de transparência, como um logotipo, porque os arquivos PNG são bem maiores.',
  },
  {
    id: 'wa-faq-12',
    question: 'Posso enviar imagens WebP pelo WhatsApp?',
    answer: 'O WhatsApp pode receber arquivos WebP, mas é possível que eles não apareçam como uma foto normal e alguns celulares os tratam de forma estranha. Para as fotos que você quer que as pessoas vejam direto no chat, o JPG é a opção mais segura. O WebP é melhor para sites do que para o WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: 'Posso comprimir várias fotos do WhatsApp de uma vez?',
    answer: 'Envie todas as fotos para o CompressMyPic de uma só vez, aplique o mesmo ajuste predefinido a todas e baixe todas juntas com o botão «Baixar tudo (ZIP)». Depois envie os arquivos pelo WhatsApp um por um ou como documentos.',
  },
  {
    id: 'wa-faq-14',
    question: 'O WhatsApp comprime os vídeos do mesmo jeito?',
    answer: 'Sim, o WhatsApp também comprime os vídeos enviados do jeito habitual, e pode reduzi-los bastante. O CompressMyPic só funciona com imagens (JPG, PNG, WebP), não com vídeos. Para os vídeos, envie-os como documentos para manter a qualidade original.',
  },
  {
    id: 'wa-faq-15',
    question: 'Comprimir uma foto apaga a original do meu celular?',
    answer: 'Não. O CompressMyPic cria uma cópia nova e menor e a baixa no seu dispositivo. Sua foto original fica exatamente como está na sua galeria, sem ser tocada.',
  },
  {
    id: 'wa-faq-16',
    question: 'Minhas fotos são enviadas para algum servidor quando eu as comprimo?',
    answer: 'Não. Toda a compressão acontece dentro do seu próprio navegador no seu dispositivo, então suas fotos nunca são enviadas, armazenadas nem vistas por mais ninguém. Elas ficam na memória do seu navegador e são apagadas quando você fecha ou atualiza a aba.',
  },
  {
    id: 'wa-faq-17',
    question: 'Qual deve ser o tamanho de uma foto para o WhatsApp?',
    answer: 'Para compartilhar no dia a dia, de 100 a 300 KB por foto é uma boa meta: ela é enviada rápido, consome poucos dados móveis e continua nítida no celular. Para uma foto que você queira imprimir ou guardar, fique mais perto de 500 KB a 1 MB com um ajuste de qualidade mais alto.',
  },
  {
    id: 'wa-faq-18',
    question: 'Por que minhas fotos do WhatsApp ficam embaçadas depois de enviadas?',
    answer: 'Porque o WhatsApp as comprimiu novamente quando você as enviou como fotos. A solução é comprimir a foto você mesmo primeiro com uma qualidade que você controla, e depois enviá-la como documento para que o WhatsApp não a comprima de novo.',
  },
  {
    id: 'wa-faq-19',
    question: 'Posso comprimir uma captura de tela para o WhatsApp?',
    answer: 'Sim. Envie a captura de tela para o CompressMyPic igual a uma foto. As capturas de tela comprimem muito bem porque têm grandes áreas de cor sólida: teste primeiro o ajuste predefinido Equilibrado e mude para a saída WebP se quiser o arquivo menor.',
  },
  {
    id: 'wa-faq-20',
    question: 'O CompressMyPic é grátis para as fotos do WhatsApp?',
    answer: 'Sim, totalmente grátis. Não há cadastro, não há marca d\'água, não há limite na quantidade de fotos que você comprime e você não precisa de nenhuma conta. Basta abrir o site, comprimir e baixar.',
  },
];

export const GuideWhatsAppPagePt: React.FC<GuideWhatsAppPagePtProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Comprimir imagens para WhatsApp sem perder qualidade';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Aprenda a comprimir imagens para WhatsApp sem perder qualidade. Grátis e privado, sem cadastro: reduza suas fotos antes de enviar para que elas cheguem nítidas.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/pt/guias/comprimir-imagens-para-whatsapp';
    // hreflang: same DOM mechanism the English page uses for its canonical.
    const alternates = [
      { lang: 'en', href: 'https://compressmypic.online/guides/compress-images-for-whatsapp' },
      { lang: 'pt', href: 'https://compressmypic.online/pt/guias/comprimir-imagens-para-whatsapp' },
      { lang: 'x-default', href: 'https://compressmypic.online/guides/compress-images-for-whatsapp' },
    ];
    const createdLinks: HTMLLinkElement[] = [];
    alternates.forEach(({ lang, href }) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
        createdLinks.push(link);
      }
      link.href = href;
    });
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Como comprimir imagens para WhatsApp sem perder qualidade',
          description: 'Comprima uma foto com o CompressMyPic e envie-a pelo WhatsApp como documento para que ela fique nítida.',
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
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
      if (existing) existing.remove();
      createdLinks.forEach((link) => link.remove());
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
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/pt/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao compressor de imagens</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como comprimir imagens para WhatsApp sem perder qualidade
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            O WhatsApp reduz cada foto que você envia, muitas vezes bem mais do que o necessário. Comprima suas fotos você mesmo primeiro e envie-as do jeito certo: elas vão chegar nítidas, serão enviadas rápido e vão consumir menos dados móveis.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Por que o WhatsApp deixa suas fotos embaçadas</span>
            </h2>
            <p>
              Quando você envia uma foto pelo WhatsApp do jeito habitual, o WhatsApp a comprime novamente antes de entregá-la. Uma foto de câmera de 3 MB pode chegar como um arquivo de 100 KB com detalhes suaves e cores em blocos. O WhatsApp faz isso para economizar dados e espaço, mas você não pode decidir quanta qualidade é perdida.
            </p>
            <p>
              Existe uma segunda forma de enviar uma foto que a maioria das pessoas nunca usa: enviá-la como documento. Os documentos são entregues como são, sem nenhuma compressão adicional. O truque é reduzir a foto você mesmo primeiro, com um ajuste de qualidade que você controla, e depois enviá-la como documento. Assim você obtém um arquivo pequeno e uma foto nítida ao mesmo tempo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>Passo a passo: comprima uma foto para o WhatsApp</span>
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="Captura de tela de como enviar uma foto para o CompressMyPic antes de enviá-la pelo WhatsApp"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Envie sua foto para o CompressMyPic: arraste a foto e solte, ou escolha-a da sua galeria.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span>Qual ajuste de qualidade devo usar?</span>
            </h2>
            <p>
              Não existe um número perfeito único: depende da foto e do que ela vai ser. Use isto como ponto de partida e confira a comparação do antes e do depois sempre:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Fotos do dia a dia: 70%</div>
                <p className="text-xs text-slate-600">
                  O ajuste predefinido Equilibrado. Uma grande economia de tamanho, e a foto continua nítida em qualquer tela de celular. A melhor opção padrão para o WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Fotos importantes: 80–85%</div>
                <p className="text-xs text-slate-600">
                  Fotos de família, fotos de viagens, qualquer coisa que você queira guardar. O arquivo é maior, mas os detalhes finos dos rostos e das paisagens são preservados.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Envios rápidos: 50–60%</div>
                <p className="text-xs text-slate-600">
                  Memes, atualizações rápidas, fotos com dados móveis lentos. Arquivos bem menores que continuam ficando bons no tamanho da tela de um celular.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Dicas para obter os melhores resultados</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Comprima uma só vez, e só uma vez. Comprimir uma foto já comprimida uma segunda vez remove detalhes quase sem economizar mais tamanho.</li>
              <li>Envie sempre o arquivo comprimido como documento se a qualidade importa: é a única maneira de evitar que o WhatsApp o comprima de novo.</li>
              <li>Comprima várias fotos de uma vez com os mesmos ajustes e baixe todas com o botão Baixar tudo (ZIP).</li>
              <li>Para as capturas de tela e os gráficos com texto, teste a saída WebP: ela mantém as bordas nítidas e produz um arquivo menor que o JPG.</li>
              <li>Sua foto original nunca é alterada. O CompressMyPic guarda uma cópia nova e menor, então você sempre pode voltar e testar uma qualidade diferente.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="Captura de tela do controle deslizante de qualidade e do tamanho do arquivo ao vivo, antes e depois, no CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Mova o controle deslizante de qualidade e veja como o tamanho do antes e do depois é atualizado ao vivo até o arquivo ficar do tamanho que você quer.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-blue-600" />
              <span>Erros comuns que você deve evitar</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Enviar a foto como foto depois de comprimi-la: o WhatsApp vai comprimi-la uma segunda vez e desfazer o seu trabalho.</li>
              <li>Abaixar a qualidade para menos de 40% em fotos com rostos: a pele e os detalhes finos viram blocos muito rápido com qualidade baixa.</li>
              <li>Usar PNG para as fotos de câmera: os arquivos PNG são bem maiores que os JPG para as fotos e não trazem nada a mais no WhatsApp.</li>
              <li>Esquecer de conferir o resultado: olhe sempre a comparação do antes e do depois antes de enviar, principalmente nas fotos com texto.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Perguntas frequentes</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
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
            <h2 className="text-xl font-bold text-slate-900">Guias relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/pt/guias/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP: qual formato devo usar?</div>
                <p className="text-xs text-slate-600 mt-1">Tamanho de arquivo, qualidade e transparência comparados, para você escolher o formato certo sempre.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/pt/guias/reduzir-imagem-para-100kb')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Como reduzir o tamanho de uma imagem para 100 KB para sites e e-mail</div>
                <p className="text-xs text-slate-600 mt-1">Guia passo a passo para chegar a 100 KB sem estragar sua foto.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/pt/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Comprimir imagens grátis
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/pt/comprimir-imagem-para-100kb')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Reduzir uma imagem para 100 KB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
