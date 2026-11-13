// Portuguese (Brazilian pt-BR) tool registry — COMPLETE (home + all 48 tools).
// Assembled from tools-pt-batch1.ts … tools-pt-batch6.ts (coordinator merge).
// Target path in the repo: src/locales/pt/tools.ts
// Portuguese (Brazilian pt-BR), você forms. Slugs, category ids and
// relatedSlugs are unchanged from the English registry (src/data/tools.ts).
// Batch 1: 8 tools; Batches 2–6: 8 tools each (40 tools); home entry from
// i18n-pt.ts (HOME_ENTRY_PT). Translated from English — never from
// Spanish; Spanish files were used only as structural templates.

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_PT: ToolCategoryMeta[] = [
  { id: 'compress', label: 'Comprimir', description: 'Reduza o tamanho dos arquivos de imagem sem perda visível de qualidade' },
  { id: 'resize', label: 'Redimensionar', description: 'Altere as dimensões em pixels ou escale imagens em lote' },
  { id: 'convert', label: 'Converter', description: 'Converta entre formatos de imagem e gere PDF' },
  { id: 'crop-edit', label: 'Recortar e editar', description: 'Gire, inverta, recorte e ajuste suas fotos' },
  { id: 'ai-tools', label: 'Ferramentas de IA', description: 'Processamento inteligente de imagens no navegador' },
  { id: 'create', label: 'Criar', description: 'Crie favicons, colagens e recursos para web' },
  { id: 'privacy', label: 'Ferramentas de privacidade', description: 'Inspecione e remova metadados EXIF, GPS e ocultos' },
  { id: 'developer', label: 'Ferramentas para desenvolvedores', description: 'Escolha cores, inspecione dimensões e gere recursos web' },
];

export const TOOLS_REGISTRY_PT: ToolDefinition[] = [
  {
  slug: '/',
  name: 'Compressor de imagens',
  shortDescription: 'Comprima imagens JPG, PNG, WebP e HEIC sem perder qualidade.',
  category: 'compress',
  seoTitle: 'Compressor de imagens grátis online – Reduza para 100KB',
  seoDescription:
    'Comprima imagens online grátis: reduza o tamanho sem perder qualidade. Comprima JPG, PNG e WebP sem cadastro nem marca d’água, direto no seu navegador.',
  h1: 'Compressor de imagens grátis',
  subtitle: 'Reduza o tamanho de arquivos JPG, PNG, WebP e HEIC direto no seu navegador.',
  howToSteps: [],
  features: [],
  faqs: [],
  relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
},
  {
    slug: '/image-resizer',
    name: 'Redimensionador de imagens',
    shortDescription: 'Redimensione imagens por pixels exatos, porcentagem ou modelos de redes sociais.',
    category: 'resize',
    seoTitle: 'Redimensionador de imagens grátis online – Por pixels ou %',
    seoDescription:
      'Redimensione imagens grátis online por pixels exatos, porcentagem ou modelos de redes sociais. Processe lotes no navegador e baixe tudo em ZIP, sem enviar nada.',
    h1: 'Redimensionador de imagens grátis online',
    subtitle:
      'Nosso redimensionador de imagens no navegador permite que web designers, vendedores online, blogueiros e usuários comuns ajustem suas fotos para dimensões exatas em pixels ou proporções em porcentagem em segundos. Trave a proporção para evitar distorções, aplique modelos de redes sociais com um clique ou processe uma pasta inteira localmente, sem enviar nada para nenhum servidor.',
    howToSteps: [
      {
        title: 'Envie uma ou várias imagens',
        description:
          'Arraste arquivos JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB cada para a área de envio, escolha os arquivos no seu dispositivo ou cole diretamente com Ctrl+V.',
      },
      {
        title: 'Escolha o modo Por pixels ou Por porcentagem',
        description:
          'Alterne entre Por pixels (L × A) para digitar dimensões exatas de até 12.000 px, ou Por porcentagem (%) para escalar entre 10% e 200% com o controle deslizante ou os botões rápidos.',
      },
      {
        title: 'Ajuste a trava de proporção, o modo de ajuste ou os modelos',
        description:
          'Mantenha a proporção travada para escalar sem deformar, ou destrave para escolher Conter, Cobrir ou Esticar exato; você também pode clicar em um modelo como Post do Instagram, Miniatura do YouTube ou Full HD.',
      },
      {
        title: 'Escolha o formato de saída e a qualidade',
        description:
          'Selecione a saída Original, JPG, PNG ou WebP, ajuste o controle de qualidade de saída de 10% a 100% e escolha uma cor de fundo fosco se exportar em JPG.',
      },
      {
        title: 'Aplique as configurações e compare visualmente',
        description:
          'Clique em Redimensionar tudo para processar seu lote e abra a visualização Comparar em qualquer cartão para revisar a nitidez e a economia em bytes antes e depois, lado a lado.',
      },
      {
        title: 'Baixe arquivos individuais ou um arquivo ZIP',
        description:
          'Salve cada imagem redimensionada com seu botão Baixar, ou clique em Baixar tudo (ZIP) ao redimensionar dois ou mais arquivos de uma vez.',
      },
    ],
    features: [
      {
        title: 'Pixels exatos e escala por porcentagem',
        description:
          'Redimensione para largura e altura exatas em pixels ou escale de forma limpa de 10% a 200%, preservando a proporção automaticamente quando travada.',
      },
      {
        title: 'Modos de ajuste inteligentes (Exato, Conter, Cobrir)',
        description:
          'Escolha como as imagens se encaixam em dimensões fixas predefinidas: esticar até o tamanho exato, caber dentro sem cortar ou cortar no centro para preencher.',
      },
      {
        title: 'Redimensionamento em lote e download em ZIP',
        description:
          'Processe dezenas de fotos de produtos ou miniaturas de blog em um só lote e baixe todas dentro de um único arquivo ZIP.',
      },
      {
        title: 'Processamento 100% local no navegador',
        description:
          'Suas fotos são redimensionadas com HTML5 Canvas no seu próprio dispositivo e nunca são enviadas para nenhum servidor externo.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a diferença entre Por pixels e Por porcentagem no redimensionador de imagens?',
        answer:
          'Por pixels permite digitar largura e altura exatas em pixels (até 12.000 px) ou aplicar modelos de redes sociais diretamente. Por porcentagem escala cada imagem enviada de forma proporcional entre 10% e 200% usando o controle deslizante ou os botões rápidos de 25%, 50%, 75%, 150% e 200%.',
      },
      {
        question: 'O que acontece ao ativar ou desativar a trava de proporção?',
        answer:
          'Com a proporção travada, ao digitar uma nova largura a altura é atualizada automaticamente em proporção exata à sua primeira foto enviada (e vice-versa). Ao destravar, você pode digitar valores independentes de largura e altura e aparecem as opções de ajuste Conter, Cobrir e Esticar exato.',
      },
      {
        question: 'Quando devo escolher Conter, Cobrir ou Esticar exato?',
        answer:
          'Escolha Conter (sem corte) quando quiser manter o assunto inteiro dentro do quadro sem aparar nenhuma borda. Escolha Cobrir (corte central) para preencher dimensões exatas predefinidas aparando o excesso, ou Esticar exato se o mais importante for respeitar os limites em pixels mesmo perdendo a proporção.',
      },
      {
        question: 'Quais modelos de redes sociais e de tela a ferramenta inclui?',
        answer:
          'Há modelos de um clique para Post do Instagram (1080×1080), Story do Instagram (1080×1920), Miniatura do YouTube (1280×720), Capa do Facebook (851×315), Cabeçalho do X (1500×500) e Full HD (1920×1080). Ao clicar em qualquer modelo, o modo muda para Por pixels e essas dimensões exatas são preenchidas.',
      },
      {
        question: 'Posso ampliar uma imagem pequena além da resolução original?',
        answer:
          'Sim, você pode digitar valores em pixels maiores ou escalar até 200% no modo Por porcentagem com a interpolação do HTML5 Canvas. Lembre-se de que ampliar muito gráficos de baixa resolução deixa as bordas mais suaves, porque o Canvas estica os pixels existentes em vez de inventar detalhes novos.',
      },
      {
        question: 'Qual é a dimensão máxima em pixels e o tamanho máximo de arquivo ao redimensionar?',
        answer:
          'Cada imagem enviada pode ter até 20 MB e os campos de pixels aceitam larguras e alturas de até 12.000 px. Telas muito grandes podem consumir bastante memória RAM do navegador no celular, então ficar entre 4.000 e 6.000 px deixa o processamento rápido.',
      },
      {
        question: 'Quais formatos de entrada este redimensionador de imagens aceita?',
        answer:
          'Você pode enviar arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG. As imagens HEIC são decodificadas localmente no seu navegador antes do redimensionamento no Canvas, e você pode exportar os resultados como Original, JPG, PNG ou WebP.',
      },
      {
        question: 'O redimensionamento preserva os fundos transparentes de PNG e WebP?',
        answer:
          'Sim, a transparência é mantida sempre que você conservar o formato Original (para PNG/WebP) ou escolher explicitamente PNG ou WebP como saída. Se mudar o formato de saída para JPG, as áreas transparentes são preenchidas com a cor de fundo fosco escolhida (branco por padrão).',
      },
      {
        question: 'Como o redimensionamento em lote lida com fotos horizontais e verticais misturadas?',
        answer:
          'Quando você envia um lote no modo Por pixels com a proporção travada, cada foto conserva suas proporções naturais usando o limite de largura, sem deformar os retratos em quadros horizontais. Se quiser dimensões fixas idênticas em todo o lote, destrave a proporção e escolha Conter ou Cobrir.',
      },
      {
        question: 'Por que o primeiro envio preenche automaticamente a largura e a altura?',
        answer:
          'Quando você solta sua primeira foto em uma fila vazia, o redimensionador define a largura em no máximo 1.200 px e calcula a altura correspondente em proporção. Você pode mudar esses números na hora e clicar em Redimensionar tudo para processar novamente todas as imagens da lista.',
      },
      {
        question: 'Como reviso a nitidez depois de reduzir uma foto?',
        answer:
          'Clique em Comparar em qualquer cartão de resultado ou clique na miniatura para abrir o modal de comparação antes e depois. Ele mostra as dimensões original e redimensionada, a economia em bytes e um controle dividido para você revisar os detalhes finos antes de baixar.',
      },
      {
        question: 'Posso mudar o formato de saída e redimensionar ao mesmo tempo?',
        answer:
          'Sim, você pode escolher JPG, PNG ou WebP no seletor de formato de saída e ajustar o controle de qualidade (de 10% a 100%) antes de clicar em Redimensionar tudo. Assim você reduz as dimensões e converte para um formato web leve em uma só passada.',
      },
      {
        question: 'Os GIFs animados continuam animados depois de redimensionados aqui?',
        answer:
          'Não, o HTML5 Canvas desenha o primeiro quadro do GIF ao redimensioná-lo para dimensões estáticas e exporta uma imagem de um só quadro. Se quiser conservar a animação e reduzir o peso do arquivo, use nossa ferramenta específica Compressor de GIF.',
      },
      {
        question: 'Minhas fotos são enviadas para um servidor externo durante o redimensionamento?',
        answer:
          'Não, todo o redimensionamento ocorre dentro da aba do seu navegador com a memória local do HTML5 Canvas e JavaScript. Nem suas imagens originais nem as redimensionadas viajam pela rede nem tocam nenhum armazenamento remoto.',
      },
      {
        question: 'Como baixo dezenas de imagens redimensionadas sem clicar uma por uma?',
        answer:
          'Quando duas ou mais imagens terminam de ser redimensionadas, aparece uma barra de Lote pronto acima da lista com um botão Baixar tudo (ZIP). Ao clicar, todos os arquivos redimensionados são empacotados em um só download chamado resized_images_compressmypic.zip.',
      },
      {
        question: 'Posso colar uma captura de tela da área de transferência para redimensioná-la?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V no Mac) enquanto estiver na página para soltar uma captura copiada diretamente na fila de envio. Ela carrega suas dimensões na hora e é redimensionada com suas configurações atuais de largura, altura ou porcentagem.',
      },
      {
        question: 'Por que meu PNG redimensionado ficou maior em bytes mesmo com menos pixels?',
        answer:
          'Se você converter um JPG comprimido para PNG sem perdas ao redimensionar, o PNG conserva a codificação de pixels sem perdas e pode pesar mais que o JPEG original. Mude o formato de saída para WebP ou JPG com qualidade de 80%–85% para obter arquivos web bem mais leves.',
      },
      {
        question: 'Qual ajuste de qualidade é melhor ao exportar imagens JPG ou WebP redimensionadas?',
        answer:
          'O ajuste padrão de 85% equilibra bordas nítidas e gradientes limpos com arquivos pequenos para sites, blogs e lojas online. Abaixe a qualidade para 65%–75% se precisar de uma economia de kilobytes mais rigorosa, ou suba para 95%–100% para preparar impressões.',
      },
      {
        question: 'Posso redimensionar gráficos vetoriais SVG de forma limpa para PNGs de alta resolução?',
        answer:
          'Sim, ao enviar um SVG embutido você pode digitar dimensões-alvo maiores antes de rasterizá-lo no Canvas. Os SVGs autocontidos com formas e gradientes embutidos escalam com nitidez, embora links externos para fontes ou imagens dentro do SVG sejam bloqueados pela segurança do navegador.',
      },
      {
        question: 'Este redimensionador de imagens funciona offline ou no celular?',
        answer:
          'Sim, funciona sem problemas no Safari do iOS, no Chrome do Android e em navegadores de desktop, com controles deslizantes e modelos compatíveis com toque. Como os cálculos são executados localmente dentro do seu navegador depois que a página carrega, nada depende da velocidade de envio.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: 'Conversor de imagens',
    shortDescription: 'Converta JPG, PNG, WebP, HEIC, BMP, GIF e SVG no seu navegador.',
    category: 'convert',
    seoTitle: 'Conversor de imagens grátis online – JPG, PNG, WebP e HEIC',
    seoDescription:
      'Converta imagens grátis online entre JPG, PNG, WebP, HEIC, SVG, BMP, GIF e AVIF. Converta lotes no seu dispositivo, com qualidade ajustável e download em ZIP.',
    h1: 'Conversor de imagens grátis online',
    subtitle:
      'Pensado para fotógrafos de iPhone, desenvolvedores web, profissionais de marketing e equipes de escritório, este conversor de imagens no navegador alterna sem esforço entre JPG, PNG, WebP, HEIC, SVG, BMP, GIF e AVIF. Ajuste a qualidade de saída, escolha uma cor de preenchimento fosco para os recortes transparentes e converta lotes inteiros localmente sem enviar arquivos.',
    howToSteps: [
      {
        title: 'Adicione um ou vários arquivos de imagem',
        description:
          'Solte imagens JPG, PNG, WebP, HEIC, SVG, BMP, GIF ou AVIF (até 20 MB cada) na área de envio, selecione arquivos no disco ou cole com Ctrl+V.',
      },
      {
        title: 'Escolha o formato de saída',
        description:
          'Selecione WebP (o mais leve para web), JPG (universal) ou PNG (sem perdas e com transparência) em Converter para o formato.',
      },
      {
        title: 'Defina a cor de preenchimento para a saída JPG',
        description:
          'Ao converter gráficos PNG, WebP ou SVG transparentes para JPG, clique na amostra de cor de preenchimento de transparência para escolher um fundo branco, preto ou qualquer cor hexadecimal.',
      },
      {
        title: 'Ajuste o controle de qualidade se precisar',
        description:
          'Arraste o controle de qualidade entre 10% e 100% para saídas WebP ou JPG (o controle é desativado automaticamente para PNG sem perdas).',
      },
      {
        title: 'Converta e revise os resultados',
        description:
          'Clique em Converter tudo para recodificar sua fila com as configurações atualizadas e clique em Comparar em qualquer item para verificar a fidelidade visual e a mudança em bytes.',
      },
      {
        title: 'Baixe arquivos individuais ou em ZIP',
        description:
          'Salve cada arquivo convertido com seu botão Baixar, ou clique em Baixar tudo (ZIP) para baixar todo o lote junto.',
      },
    ],
    features: [
      {
        title: 'Amplo suporte a formatos de entrada',
        description:
          'Converta fotos HEIC/HEIF de iPhone, gráficos vetoriais SVG, arquivos BMP antigos, imagens WebP, PNG e JPEG diretamente no seu navegador.',
      },
      {
        title: 'Conversão segura com transparência',
        description:
          'Conserva a transparência alfa ao converter para PNG ou WebP e permite personalizar a cor de fundo fosco ao converter para JPG.',
      },
      {
        title: 'Conversão em lote e exportação em ZIP',
        description:
          'Converta pastas inteiras de imagens de uma vez com configurações de qualidade uniformes e baixe todas com um clique.',
      },
      {
        title: 'Motor privado no cliente',
        description:
          'Até a decodificação de HEIC é executada localmente via WebAssembly no seu navegador: zero envios ao servidor e zero marcas d\'água.',
      },
    ],
    faqs: [
      {
        question: 'Quais formatos de entrada e saída este conversor de imagens aceita?',
        answer:
          'Você pode carregar arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, SVG, BMP, GIF e AVIF decodificados pelo navegador, de até 20 MB por imagem. As saídas são exportadas como WebP (o mais leve para web), JPG (universal) ou PNG (sem perdas e com transparência).',
      },
      {
        question: 'Como as fotos HEIC e HEIF de iPhone são convertidas sem servidor?',
        answer:
          'Nosso conversor carrega um decodificador HEIC de WebAssembly diretamente na aba do seu navegador. Ele decodifica o contêiner HEIC localmente, na sua CPU, e desenha a foto no HTML5 Canvas para exportar arquivos padrão JPG, PNG ou WebP.',
      },
      {
        question: 'Por que o controle de qualidade é desativado ao escolher PNG?',
        answer:
          'O PNG usa compressão DEFLATE sem perdas, ou seja, codifica cada pixel com exatidão sem descartar detalhes visuais conforme um nível de qualidade em porcentagem. O controle é ativado assim que você muda para WebP ou JPG.',
      },
      {
        question: 'O que acontece com as áreas transparentes ao converter PNG ou WebP para JPG?',
        answer:
          'Como o JPG não admite canal de transparência alfa, os pixels transparentes precisam ser achatados sobre um fundo sólido. Use o seletor de cor de preenchimento de transparência (branco por padrão) para fundir as bordas transparentes sobre qualquer cor.',
      },
      {
        question: 'Posso converter imagens AVIF de sites modernos para JPG ou PNG?',
        answer:
          'Sim, as versões modernas do Chrome, Edge, Firefox e Safari decodificam arquivos AVIF nativamente no seu navegador. Depois de decodificados, a ferramenta os exporta para JPG, PNG ou WebP universais sem nenhum serviço externo na nuvem.',
      },
      {
        question: 'Os logotipos vetoriais SVG são preservados bem ao convertê-los para PNG ou WebP?',
        answer:
          'Sim, os arquivos SVG autocontidos com caminhos, preenchimentos e gradientes embutidos são rasterizados de forma limpa em suas dimensões intrínsecas e conservam os fundos transparentes. Lembre-se de que os SVGs que dependem de fontes web externas ou URLs de imagens remotas são restritos pela segurança do Canvas do navegador.',
      },
      {
        question: 'Converter um JPG com perdas para PNG recupera o detalhe perdido da foto?',
        answer:
          'Não, salvar novamente um JPG já comprimido como PNG não pode recuperar o detalhe descartado durante a codificação JPEG original, e normalmente aumenta muito o tamanho do arquivo. Escolha PNG só se precisar de armazenamento sem perdas antes de futuras edições em várias etapas.',
      },
      {
        question: 'Posso misturar formatos diferentes em uma só conversão em lote?',
        answer:
          'Sim, você pode soltar fotos HEIC, capturas BMP, logotipos PNG e downloads AVIF juntos na mesma fila. Cada arquivo válido é convertido para o formato-alvo que você escolheu e tudo é baixado em um único arquivo ZIP.',
      },
      {
        question: 'O que acontece se eu enviar um GIF animado ao conversor geral?',
        answer:
          'O Canvas desenha o quadro inicial do GIF e o converte em um arquivo WebP, JPG ou PNG estático. Se quiser reduzir um GIF animado mantendo o movimento, mude para nossa ferramenta Compressor de GIF.',
      },
      {
        question: 'Por que a saída WebP reduziu tanto o tamanho da minha captura PNG?',
        answer:
          'Diferente do PNG sem perdas, o WebP com qualidade de 85% combina compressão preditiva moderna com suporte completo à transparência alfa. Isso costuma reduzir muito as capturas de interface e os recortes de produto grandes sem perder legibilidade nem suavidade nas bordas.',
      },
      {
        question: 'Como verifico a qualidade do antes e do depois antes de salvar as imagens convertidas?',
        answer:
          'Clique em Comparar em qualquer cartão convertido (ou clique na miniatura) para abrir o modal de comparação interativo. Você pode comparar os tamanhos em bytes do original e do convertido e arrastar o controle dividido sobre bordas e texto.',
      },
      {
        question: 'Minhas fotos ou capturas sensíveis são enviadas alguma vez pela internet?',
        answer:
          'Nunca: toda a decodificação, o achatamento de cores e a recodificação ocorrem estritamente na memória local do seu navegador. Nada é enviado, salvo em servidores nem compartilhado com terceiros.',
      },
      {
        question: 'Qual ajuste de qualidade é recomendado para converter fotos para WebP ou JPG?',
        answer:
          'Os 85% padrão funcionam bem tanto para recursos WebP quanto para JPG universais, sem bloqueio de compressão perceptível. Você pode subir para 92%–95% para fotos de portfólio ou baixar para 70%–75% para limites de banda mais apertados.',
      },
      {
        question: 'Como os nomes dos arquivos de saída são gerados após a conversão?',
        answer:
          'Cada arquivo convertido conserva seu nome base higienizado e troca automaticamente a extensão para .webp, .jpg ou .png. Você pode ver o nome exato de saída e o tamanho convertido em bytes em cada cartão antes de baixar.',
      },
      {
        question: 'Posso converter bitmaps BMP de programas antigos do Windows para WebP ou JPG?',
        answer:
          'Sim, os arquivos .bmp sem compressão são decodificados nativamente no navegador e convertidos na hora para arquivos JPG ou WebP compactos. Eliminar os cabeçalhos de bitmap sem compressão reduz o peso de armazenamento de forma drástica.',
      },
      {
        question: 'O que acontece se um arquivo do meu lote estiver danificado ou não puder ser lido?',
        answer:
          'Cada imagem é processada de forma independente, então um só arquivo danificado ou incompatível mostra um selo de erro embutido sem interromper o restante da sua fila. Todas as imagens válidas ainda são convertidas e empacotadas no seu download ZIP.',
      },
      {
        question: 'Converter com HTML5 Canvas elimina os metadados EXIF ocultos da câmera?',
        answer:
          'Sim, desenhar uma imagem no Canvas e codificar um JPG, PNG ou WebP novo produz um bitmap limpo sem tags GPS EXIF nem metadados de série da câmera. Isso protege sua privacidade ao compartilhar os arquivos convertidos na internet.',
      },
      {
        question: 'Posso converter imagens coladas diretamente da área de transferência?',
        answer:
          'Sim, copie uma imagem ou faça uma captura de tela e pressione Ctrl+V em qualquer lugar da página para adicioná-la diretamente à fila do conversor. Ela é codificada na hora para seu formato-alvo ativo.',
      },
      {
        question: 'Há um limite diário ou de quantidade de arquivos nas conversões em lote?',
        answer:
          'Não, não há contas, marcas d\'água nem cotas diárias de conversão. Você só é limitado pela verificação de 20 MB por arquivo e pela memória RAM disponível do navegador do seu dispositivo.',
      },
      {
        question: 'Quando convém usar Baixar tudo (ZIP) em vez do download individual?',
        answer:
          'Use o botão Baixar de cada cartão quando for salvar uma só foto convertida rapidamente. Quando duas ou mais imagens terminam de ser convertidas, clique em Baixar tudo (ZIP) na barra de resumo do lote para agrupá-las em converted_images_compressmypic.zip.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Girar e inverter imagem',
    shortDescription: 'Gire 90°, 180° ou em ângulos personalizados, e inverta imagens na horizontal ou vertical.',
    category: 'crop-edit',
    seoTitle: 'Girar imagem online grátis – Gire 90° e inverta',
    seoDescription:
      'Gire imagens 90°, 180° ou em qualquer ângulo e inverta na horizontal ou vertical no navegador. Processe fotos em lote e baixe tudo em ZIP agora mesmo.',
    h1: 'Girar e inverter imagem online',
    subtitle:
      'Corrija fotos tortas da câmera, espelhe selfies invertidas e endireite horizontes inclinados ao girar imagens diretamente no seu navegador. Ideal para fotógrafos, estudantes que digitalizam documentos e criadores de conteúdo: tudo é transformado localmente, em resolução completa e com exportação em lote em ZIP.',
    howToSteps: [
      {
        title: 'Envie uma ou várias imagens',
        description:
          'Arraste e solte arquivos JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB cada na área de envio, ou cole diretamente com Ctrl+V.',
      },
      {
        title: 'Use os giros rápidos de 90° e 180°',
        description:
          'Clique em Girar 90° para a esquerda, Girar 90° para a direita ou 180° em Girar e inverter rápido para girar todas as imagens da fila na hora.',
      },
      {
        title: 'Espelhe na horizontal ou na vertical',
        description:
          'Ative Inverter na horizontal para espelhar da esquerda para a direita ou Inverter na vertical para inverter de cima para baixo; você pode combinar qualquer uma das duas com qualquer ângulo de rotação.',
      },
      {
        title: 'Ajuste ângulos personalizados (de -180° a +180°)',
        description:
          'Arraste o controle deslizante de Ângulo de rotação para endireitar fotos tortas com graus exatos e depois clique em Aplicar ângulo (ou em Redefinir para 0° quando quiser).',
      },
      {
        title: 'Escolha o formato de saída',
        description:
          'Selecione Original, JPG, PNG ou WebP conforme o fluxo de trabalho de destino; as mudanças são aplicadas na hora a todas as suas imagens.',
      },
      {
        title: 'Compare visualmente e baixe',
        description:
          'Clique em Comparar em qualquer cartão para revisar a orientação antes e depois, e depois clique em Baixar ou em Baixar tudo (ZIP) para os lotes.',
      },
    ],
    features: [
      {
        title: 'Rotação rápida de 90° e em ângulo personalizado',
        description:
          'Gire com passos limpos de 90° ou ajuste qualquer grau exato, com cálculo automático dos limites do canvas para que os cantos nunca sejam cortados.',
      },
      {
        title: 'Espelho e inversão instantâneos',
        description:
          'Inverta imagens na horizontal (selfie espelhada) ou na vertical (reflexo invertido) com um só clique.',
      },
      {
        title: 'Transformação em lote',
        description:
          'Aplique a mesma rotação ou inversão a várias fotos enviadas de uma vez e exporte todas em um ZIP.',
      },
      {
        title: 'Saída com perda mínima',
        description:
          'Escolha o formato Original, PNG para conservar sem perdas ou WebP e JPG com qualidade ajustável.',
      },
    ],
    faqs: [
      {
        question: 'Girar uma foto em um ângulo personalizado como 15° corta os cantos?',
        answer:
          'Não, a ferramenta calcula a largura e a altura trigonométricas expandidas automaticamente para ângulos diferentes de 90°. Isso expande o Canvas só o suficiente para que cada pixel dos cantos originais fique dentro do quadro.',
      },
      {
        question: 'O que preenche os cantos triangulares criados por um ângulo de inclinação personalizado?',
        answer:
          'Se você mantiver o formato Original em um PNG/WebP ou escolher a saída PNG/WebP, esses cantos externos extras ficam completamente transparentes. Se sua saída for JPG, que não suporta alfa, os cantos são preenchidos com branco sólido limpo.',
      },
      {
        question: 'Posso girar 90° e inverter na horizontal ao mesmo tempo?',
        answer:
          'Sim, Inverter na horizontal e Inverter na vertical funcionam como interruptores independentes junto com qualquer ângulo de rotação. Cada cartão de resultado mostra seu estado combinado exato, como Girada 90° · Invertida H.',
      },
      {
        question: 'Por que girar 90° ou 270° troca a largura e a altura em pixels?',
        answer:
          'Girar uma imagem horizontal de 1920×1080 em 90° rotaciona seus eixos e ela vira uma imagem vertical de 1080×1920. Manter os limites exatos trocados evita esticar ou cortar qualquer lado da sua foto.',
      },
      {
        question: 'Como corrijo uma selfie invertida com texto espelhado?',
        answer:
          'Envie a foto, clique em Redefinir para 0° se não quiser um giro de 90° (a ferramenta começa em 90° ao carregar) e ative Inverter na horizontal. O texto em camisetas ou placas volta imediatamente à direção normal de leitura.',
      },
      {
        question: 'Por que as imagens giram 90° automaticamente logo após o envio?',
        answer:
          'O estado padrão de Girar e inverter rápido começa em 90° para que as fotos laterais comuns fiquem de pé ao serem soltas. Você pode ajustar com Girar 90° para a esquerda, 180°, o controle de ângulo ou clicar em Redefinir para 0° sempre que quiser só inverter.',
      },
      {
        question: 'Quais formatos de imagem posso girar e inverter aqui?',
        answer:
          'Envie arquivos JPG, PNG, WebP, HEIC/HEIF, GIF, BMP ou SVG de até 20 MB cada. As opções de exportação cobrem Original, JPG, PNG e WebP via renderização local em HTML5 Canvas.',
      },
      {
        question: 'Posso girar em lote uma pasta de fotos de celular tortas juntas?',
        answer:
          'Sim, solte quantas fotos seu navegador lidar bem, clique nos botões de rotação ou inversão desejados uma vez, e cada item é atualizado junto. Quando vários arquivos terminam, Baixar tudo (ZIP) exporta rotated_images_compressmypic.zip.',
      },
      {
        question: 'Girar um PNG transparente mantém seu fundo transparente?',
        answer:
          'Sim, as regiões transparentes permanecem transparentes quando a saída Original (de PNG/WebP), PNG ou WebP é selecionada. Isso funciona tanto para rotações nítidas de 90° quanto para endireitamento com inclinação arbitrária.',
      },
      {
        question: 'Como desfaço vários giros sem recarregar a página?',
        answer:
          'Clique em Redefinir para 0° logo acima do controle deslizante de Ângulo de rotação a qualquer momento. Isso limpa imediatamente a rotação de volta para 0° e desliga as inversões Horizontal e Vertical em toda a fila.',
      },
      {
        question: 'Por que o tamanho do arquivo pode mudar um pouco depois de girar um JPEG?',
        answer:
          'Girar pixels dentro do HTML5 Canvas recodifica o JPEG com qualidade de 90% em vez de modificar os blocos DCT sem perdas. Escolher a saída PNG preserva os pixels sem perdas se você quiser zero artefatos de compressão.',
      },
      {
        question: 'Há um jeito fácil de inspecionar o antes e o depois do endireitamento?',
        answer:
          'Clique em Comparar em qualquer cartão (ou clique na miniatura) para abrir o modal de Comparação de girar e inverter. Você pode inspecionar as bordas alinhadas com o controle interativo de antes/depois antes de salvar.',
      },
      {
        question: 'Esta ferramenta respeita a orientação das fotos do iPhone corretamente?',
        answer:
          'Sim, os navegadores modernos e nosso carregador HEIC normalizam a orientação EXIF ao decodificar para o Canvas antes de aplicar o ângulo selecionado. O que você vê na miniatura do cartão corresponde aos pixels dentro do arquivo baixado.',
      },
      {
        question: 'Posso endireitar um documento digitalizado inclinado em pequenos incrementos de 1°?',
        answer:
          'Sim, arraste o controle deslizante de Ângulo de rotação entre -180° e +180° (passo de 1°) e solte para ver o documento endireitado. Clique em Aplicar ângulo se ajustá-lo com as setas do teclado para aplicar em todos os arquivos da fila.',
      },
      {
        question: 'Algum dos meus documentos ou fotos pessoais é enviado para um servidor?',
        answer:
          'Não, a rotação e a inversão são executadas 100% localmente no seu navegador web via transformações Canvas 2D. Suas imagens nunca saem do seu computador ou smartphone.',
      },
      {
        question: 'O que acontece se eu girar um GIF animado?',
        answer:
          'Girar um GIF extrai e transforma o primeiro quadro em uma imagem estática. A rotação animada de vários quadros não é suportada diretamente nesta ferramenta.',
      },
      {
        question: 'Posso espelhar ou girar capturas de tela coladas direto da área de transferência?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V) em qualquer lugar da página depois de copiar uma imagem ou captura de tela. Ela entra na fila do lote e aplica suas configurações ativas de rotação e inversão imediatamente.',
      },
      {
        question: 'Há algum limite de tamanho de arquivo ou de número de giros?',
        answer:
          'Os envios individuais podem ter até 20 MB por arquivo para que seu navegador continue responsivo. Dentro desse limite, você pode girar, inverter, redefinir e reexportar quantas fotos precisar, sem conta, limite diário ou marca d\'água.',
      },
      {
        question: 'Posso mudar o formato de saída para WebP enquanto giro um lote de PNGs?',
        answer:
          'Sim, clicar em WebP em Formato de saída transforma novamente e exporta seu lote na hora como imagens WebP giradas e leves. Você pode alternar os formatos livremente sem enviar de novo.',
      },
      {
        question: 'Girar e inverter funciona bem em celulares e tablets com tela de toque?',
        answer:
          'Sim, todos os botões de rotação, interruptores de inversão e o controle de ângulo compatível com toque funcionam no Safari móvel e no Chrome do Android. Você também pode baixar fotos individuais direto para o rolo da câmera ou a pasta Downloads do dispositivo.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: 'Imagem para PDF',
    shortDescription: 'Combine imagens JPG, PNG, WebP e HEIC em um PDF de várias páginas.',
    category: 'convert',
    seoTitle: 'Imagem para PDF grátis – Combine fotos em PDF',
    seoDescription:
      'Transforme fotos em um só documento com nosso conversor de imagem para PDF no navegador. Reordene páginas, escolha A4 ou Carta, ajuste margens e salve offline.',
    h1: 'Conversor de imagem para PDF',
    subtitle:
      'Ideal para estudantes, freelancers, contadores e qualquer pessoa enviando documentos de identidade ou recibos, este conversor privado de imagem para PDF mescla várias fotos em um só PDF nítido de várias páginas. Reordene as páginas livremente, escolha dimensões A4, Carta dos EUA ou Ajustar à imagem, ajuste as margens e a qualidade, e monte seu documento localmente sem nenhum envio ao servidor.',
    howToSteps: [
      {
        title: 'Solte as imagens para incluir no PDF',
        description:
          'Envie uma ou várias imagens JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB cada (ou cole com Ctrl+V). Cada imagem vira uma página.',
      },
      {
        title: 'Organize a ordem das páginas',
        description:
          'Revise a lista de Ordem das páginas abaixo dos controles e use os botões Subir, Descer ou Remover para sequenciar recibos, slides ou digitalizações com precisão.',
      },
      {
        title: 'Selecione Tamanho da página e Orientação',
        description:
          'Escolha A4 (210 × 297 mm), Carta dos EUA (8,5 × 11 pol.) ou Ajustar ao tamanho da imagem, e escolha Automática (conforme a foto), Vertical ou Horizontal.',
      },
      {
        title: 'Ajuste Margens e Posicionamento da imagem',
        description:
          'Escolha Sem margem (sangria total), Margem pequena ou Margem média, e selecione Conter (imagem completa) ou Cobrir (preencher a página).',
      },
      {
        title: 'Defina o nome do arquivo e a Qualidade da imagem do PDF',
        description:
          'Personalize o Nome do arquivo PDF (terminando em .pdf) e deslize a Qualidade da imagem do PDF entre 40% e 98% para equilibrar nitidez e tamanho total do documento.',
      },
      {
        title: 'Crie e baixe seu PDF',
        description:
          'Clique em Criar e baixar PDF para gerar o arquivo localmente; um banner de confirmação verde também permite clicar em Baixar PDF novamente.',
      },
    ],
    features: [
      {
        title: 'Ordenação de várias páginas',
        description:
          'Reordene facilmente as imagens enviadas antes de gerar seu PDF para que recibos, digitalizações e slides apareçam na sequência exata que você quer.',
      },
      {
        title: 'Tamanhos de página flexíveis e orientação automática',
        description:
          'Exporte para A4 ou Carta dos EUA padrão com Vertical/Horizontal automático por página, ou escolha Ajustar à imagem para corresponder à proporção exata de cada foto.',
      },
      {
        title: 'Margens ajustáveis e qualidade do PDF',
        description:
          'Escolha margens Nenhuma, Pequena ou Média e controle a qualidade da imagem embutida para manter seu PDF leve para e-mail.',
      },
      {
        title: 'Zero envios ao servidor',
        description:
          'Documentos de identidade, contratos e documentos digitalizados sensíveis nunca tocam um servidor externo — o binário do PDF é construído localmente na memória do navegador.',
      },
    ],
    faqs: [
      {
        question: 'Este conversor de imagem para PDF é seguro para passaportes, documentos de identidade e recibos fiscais?',
        answer:
          'Sim, seus documentos nunca são enviados para nenhum servidor remoto ou fila na nuvem. Nosso construtor de PDF em JavaScript codifica cada página dentro da RAM local do seu navegador e grava o .pdf final direto no seu dispositivo.',
      },
      {
        question: 'Quais opções de tamanho de página são suportadas?',
        answer:
          'Você pode padronizar cada página em A4 (210 × 297 mm) ou Carta dos EUA (8,5 × 11 pol.) para impressão e arquivamento consistentes. Como alternativa, escolha Ajustar ao tamanho da imagem para que cada página do PDF corresponda às dimensões e à proporção nativas da foto.',
      },
      {
        question: 'Como a Orientação automática funciona com fotos horizontais e verticais misturadas?',
        answer:
          'Quando a Orientação está em Automática (conforme a foto), as imagens horizontais recebem páginas horizontais automaticamente, enquanto as verticais recebem páginas verticais. Você pode travar todas as páginas em Vertical ou Horizontal sempre que precisar de um layout de impressão uniforme.',
      },
      {
        question: 'Qual é a diferença entre o posicionamento Conter e Cobrir?',
        answer:
          'Conter (imagem completa) escala cada foto proporcionalmente para que a imagem inteira caiba dentro das margens escolhidas sem cortar nada. Cobrir (preencher a página) amplia a foto para preencher toda a área imprimível de ponta a ponta, aparando qualquer excesso.',
      },
      {
        question: 'Por que o menu de Orientação é desativado quando Ajustar ao tamanho da imagem é escolhido?',
        answer:
          'Ajustar ao tamanho da imagem dimensiona cada página individual do PDF dinamicamente para a proporção exata da foto, então a substituição de vertical versus horizontal não se aplica. Mude o Tamanho da página para A4 ou Carta dos EUA se quiser controle manual de Vertical/Horizontal.',
      },
      {
        question: 'Posso reordenar as páginas depois de enviar vários arquivos de uma vez?',
        answer:
          'Sim, role até a seção Ordem das páginas, onde cada página mostra um selo numerado, miniatura, dimensões em pixels e tamanho do arquivo. Use os botões de seta Subir e Descer em qualquer linha para reorganizar as páginas antes de clicar em Criar e baixar PDF.',
      },
      {
        question: 'Como o controle de Qualidade da imagem do PDF afeta o tamanho do arquivo?',
        answer:
          'Abaixar a Qualidade da imagem do PDF para 60%–75% comprime os fluxos JPEG embutidos dentro do PDF, mantendo digitalizações de várias páginas compactas para limites rigorosos de e-mail ou de portal. Subir para 90%–98% preserva texto pequeno mais nítido em documentos densos.',
      },
      {
        question: 'Quais formatos de arquivo de imagem posso combinar em um PDF?',
        answer:
          'Você pode misturar imagens JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG (até 20 MB por arquivo) dentro de um só documento PDF. Elas são decodificadas localmente no navegador e normalizadas suavemente nas páginas do PDF.',
      },
      {
        question: 'O que acontece com imagens PNG ou WebP transparentes dentro de um PDF?',
        answer:
          'Como as páginas padrão de PDF têm uma tela de papel branco, os fundos transparentes são compostos limpamente sobre branco sólido antes da incorporação. Isso evita artefatos escuros inesperados atrás de logotipos ou assinaturas digitalizadas.',
      },
      {
        question: 'Posso personalizar o nome do arquivo de saída antes de salvar?',
        answer:
          'Sim, digite qualquer título de documento no campo Nome do arquivo PDF (o padrão é compressmypic-document.pdf). Se você omitir o sufixo .pdf, o exportador adiciona .pdf automaticamente ao baixar.',
      },
      {
        question: 'Quantas páginas posso mesclar em um só documento PDF?',
        answer:
          'Não há limite artificial de contagem de páginas — você pode combinar dezenas de fotos ou recibos em um só PDF de várias páginas. A capacidade prática depende apenas da memória disponível do navegador do seu dispositivo e da resolução em pixels de cada imagem.',
      },
      {
        question: 'Como Sem margem, Margem pequena e Margem média diferem?',
        answer:
          'Sem margem (sangria total) estende o posicionamento até as bordas do papel, ideal para arte sem borda ou exportações de Ajustar à imagem. Margem pequena e Margem média adicionam bordas brancas limpas ao redor de cada página para impressão e leitura padrão.',
      },
      {
        question: 'Posso adicionar mais fotos depois de já inspecionar a lista de Ordem das páginas?',
        answer:
          'Sim, basta soltar ou procurar arquivos adicionais na caixa de envio no topo e eles são adicionados ao final da sua lista de Ordem das páginas. Você pode então reordenar ou excluir páginas individuais antes de gerar o PDF atualizado.',
      },
      {
        question: 'A ferramenta adiciona um logotipo de rodapé, carimbo de página ou marca d\'água ao meu PDF?',
        answer:
          'Não, o CompressMyPic produz páginas de PDF completamente limpas contendo apenas suas imagens dentro das margens selecionadas. Nenhuma marca, cabeçalho ou marca d\'água é adicionada.',
      },
      {
        question: 'Por que uma mensagem de progresso mostra Codificando página X de Y?',
        answer:
          'PDFs de várias páginas codificam cada imagem sequencialmente na memória do navegador para evitar congelar a aba ou sobrecarregar a RAM. Assim que a página final é codificada, a barra verde de confirmação exibe a contagem total de páginas e o tamanho exato do PDF em bytes.',
      },
      {
        question: 'E se eu perder ou fechar a caixa de download automático do navegador?',
        answer:
          'Mantenha a aba aberta — o cartão verde de confirmação continua visível com um botão Baixar PDF novamente. Ao clicar, ele dispara novamente o salvamento do Blob gerado exato na hora, sem recodificar.',
      },
      {
        question: 'Posso colar capturas de tela diretamente no construtor de PDF?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V no Mac) para adicionar uma captura da área de transferência direto na sua fila de Ordem das páginas. Isso torna rápido agrupar várias capturas de bugs ou recibos de chat em um só PDF.',
      },
      {
        question: 'Gerar um PDF envia algum metadado como tags GPS EXIF?',
        answer:
          'Não, cada imagem da página é decodificada e desenhada no HTML5 Canvas antes de ser incorporada ao fluxo de bytes do PDF. Como resultado, os cabeçalhos EXIF originais da câmera e as coordenadas GPS são excluídos automaticamente durante a conversão.',
      },
      {
        question: 'Posso converter fotos HEIC de iPhone direto para PDF sem converter para JPG antes?',
        answer:
          'Sim, solte fotos .heic ou .heif diretamente na área de envio e o navegador as decodifica localmente na hora. Elas aparecem direto na sua lista de Ordem das páginas, prontas para combinar em PDFs A4 ou Carta.',
      },
      {
        question: 'A ferramenta Imagem para PDF funciona em smartphones e Chromebooks?',
        answer:
          'Sim, tudo é executado em JavaScript padrão do navegador no iOS, Android, Windows, macOS e ChromeOS. Você não precisa de Adobe Acrobat, extensões de navegador ou software de PDF de desktop instalado.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: 'Visualizador de metadados de imagem',
    shortDescription: 'Inspecione configurações EXIF da câmera, coordenadas GPS e dados PNG/WebP.',
    category: 'privacy',
    seoTitle: 'Visualizador de metadados – Veja EXIF e GPS grátis',
    seoDescription:
      'Inspecione tags EXIF da câmera, coordenadas GPS, datas e blocos PNG ou WebP com visualizador privado de metadados. Copie ou exporte o JSON completo localmente.',
    h1: 'Visualizador de metadados e EXIF de imagem',
    subtitle:
      'Feito para fotógrafos verificando configurações de lente, desenvolvedores depurando cabeçalhos e qualquer pessoa verificando a privacidade antes de postar, nosso visualizador de metadados de imagem no navegador inspeciona os bytes brutos do arquivo localmente. Revele tags EXIF ocultas, coordenadas GPS, datas e blocos PNG ou WebP sem enviar um só pixel.',
    howToSteps: [
      {
        title: 'Solte ou selecione uma imagem para inspecionar',
        description:
          'Envie uma imagem JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB (ou cole via Ctrl+V). Os cabeçalhos binários brutos são analisados na hora no seu dispositivo.',
      },
      {
        title: 'Verifique o banner Resumo e Risco de privacidade',
        description:
          'Veja o formato de contêiner detectado, as dimensões, o tamanho do arquivo e se tipos de tags de metadados embutidos sensíveis foram encontrados.',
      },
      {
        title: 'Revise qualquer alerta de Localização GPS',
        description:
          'Se existirem tags GPSIFD, uma caixa de aviso destaca a Latitude e a Longitude decodificadas exatas e oferece um atalho de um clique para Remover metadados da imagem.',
      },
      {
        title: 'Navegue pela tabela de Metadados extraídos',
        description:
          'Percorra as entradas agrupadas (Câmera, EXIF, GPS, blocos PNG/WebP, Informações do arquivo) com selos âmbar de Tag de privacidade marcando campos sensíveis.',
      },
      {
        title: 'Copie ou exporte o JSON, ou remova as tags',
        description:
          'Clique em Copiar JSON para copiar o relatório completo, Exportar JSON para salvar um arquivo .json, ou clique em Remover metadados para limpar as tags privadas.',
      },
    ],
    features: [
      {
        title: 'Detecção profunda de EXIF e GPS',
        description:
          'Analisa as tabelas binárias TIFF IFD0, ExifIFD e GPSIFD em JPEG, eXIf de PNG e blocos EXIF de WebP para descobrir tags ocultas de localização e dispositivo.',
      },
      {
        title: 'Destaque de risco de privacidade',
        description:
          'Sinaliza automaticamente campos sensíveis como latitude/longitude GPS, números de série da câmera, nomes de artistas e datas de captura.',
      },
      {
        title: 'Inspeção de blocos PNG e WebP',
        description:
          'Lê a profundidade de cor IHDR de PNG, DPI físico pHYs, blocos tEXt/iTXt/tIME e sinalizadores de alfa/animação VP8X de WebP.',
      },
      {
        title: 'Exportação de relatório JSON',
        description:
          'Copie todos os campos de metadados analisados para sua área de transferência ou baixe um relatório JSON limpo com um clique.',
      },
    ],
    faqs: [
      {
        question: 'Que tipo de informação oculta este visualizador de metadados de imagem pode revelar?',
        answer:
          'Dependendo do formato do contêiner, nosso analisador extrai campos TIFF IFD0, ExifIFD e GPSIFD localmente dos cabeçalhos da sua imagem. Isso revela detalhes como marca e modelo da câmera, especificações da lente, velocidade do obturador, ISO, abertura, datas, software de edição, notas de copyright e coordenadas GPS decimais.',
      },
      {
        question: 'Ele inspeciona cabeçalhos técnicos de PNG e WebP além do EXIF de JPEG?',
        answer:
          'Sim, além dos segmentos EXIF padrão de JPEG, o visualizador lê blocos técnicos embutidos dentro de arquivos PNG e WebP. Você pode ver profundidade de bits IHDR de PNG, densidade DPI física pHYs, blocos de texto tEXt/iTXt/tIME, blocos eXIf de PNG e sinalizadores de alfa ou animação VP8X de WebP.',
      },
      {
        question: 'Por que uma foto baixada do WhatsApp ou Instagram mostra zero tags EXIF?',
        answer:
          'As redes sociais e os aplicativos de mensagem removem cabeçalhos EXIF, de câmera e de GPS automaticamente quando você envia fotos pelos servidores deles. Os arquivos originais direto do rolo da câmera do celular ou da DSLR mantêm os metadados completos.',
      },
      {
        question: 'Como a ferramenta detecta se uma foto revela minha localização?',
        answer:
          'Quando existem tags racionais GPSIFD no cabeçalho da imagem, o visualizador converte graus, minutos e segundos em Latitude e Longitude decimais automaticamente. Quaisquer coordenadas detectadas disparam um banner âmbar de Coordenadas de localização GPS detectadas logo acima da tabela de propriedades.',
      },
      {
        question: 'O que significam os selos âmbar de Tag de privacidade na tabela de metadados?',
        answer:
          'As entradas marcadas com um selo âmbar de Tag de privacidade contêm informações pessoais ou de identificação do dispositivo. Exemplos típicos incluem coordenadas GPS, datas exatas de captura, nomes de fotógrafos/artistas, números de série da câmera e strings de modelo do dispositivo.',
      },
      {
        question: 'Posso remover metadados sensíveis logo depois de inspecionar uma imagem?',
        answer:
          'Sim, sempre que tags sensíveis são detectadas, um botão laranja Remover metadados aparece na barra de resumo (além de um link dentro da caixa de aviso de GPS). Ao clicar, você vai direto para nossa ferramenta Remover metadados da imagem.',
      },
      {
        question: 'Como funciona a exportação JSON para desenvolvedores ou documentação?',
        answer:
          'Clique em Copiar JSON na barra de resumo para colocar o ImageMetadataReport estruturado na sua área de transferência na hora. Se precisar de um arquivo para auditorias ou relatórios de bugs, clique em Exportar JSON para baixar <nome-do-arquivo>_metadata.json localmente.',
      },
      {
        question: 'Por que blocos binários EXIF completos não são extraídos de alguns arquivos HEIC ou GIF?',
        answer:
          'Nosso analisador profundo de blocos binários tem como alvo contêineres JPEG, PNG e WebP nativamente em JavaScript. Para arquivos HEIC, GIF, BMP e SVG, o visualizador relata informações confiáveis de contêiner, tamanho do arquivo e dimensões em pixels com precisão.',
      },
      {
        question: 'Fotos privadas com localização GPS são enviadas alguma vez quando eu as inspeciono?',
        answer:
          'Não, a inspeção binária é executada 100% localmente no seu navegador usando análise de bytes do ArrayBuffer do arquivo. Enviar fotos privadas sem limpeza pela internet anularia a privacidade, então zero bytes saem do seu computador ou celular.',
      },
      {
        question: 'Ver metadados modifica, comprime ou apaga algo no meu arquivo?',
        answer:
          'Não, o Visualizador de metadados de imagem é estritamente somente leitura. Ele lê cabeçalhos da memória do navegador para mostrar o que há dentro sem alterar seu arquivo original.',
      },
      {
        question: 'Posso inspecionar vários arquivos em sequência sem atualizar?',
        answer:
          'Sim, clique no ícone vermelho de lixeira (Limpar) na barra de resumo para redefinir de volta para a área de envio a qualquer momento. Você pode então soltar ou colar sua próxima imagem para gerar um novo relatório de metadados.',
      },
      {
        question: 'Por que colar uma captura de tela com Ctrl+V geralmente não mostra tags da câmera?',
        answer:
          'As áreas de transferência do sistema operacional passam bitmaps rasterizados brutos em vez dos arquivos JPEG originais da câmera. Como as imagens da área de transferência não têm cabeçalhos de câmera, as capturas coladas mostram dimensões do contêiner e informações de formato sem blocos EXIF ou GPS.',
      },
      {
        question: 'Qual é o tamanho máximo de arquivo suportado para inspeção de metadados?',
        answer:
          'Você pode inspecionar imagens individuais de até 20 MB direto no seu navegador. Esse limite cobre facilmente JPEGs de DSLR em resolução completa, exportações PNG detalhadas e arquivos BMP sem compressão.',
      },
      {
        question: 'Como verifico se outra ferramenta realmente removeu todas as tags EXIF de uma foto?',
        answer:
          'Solte o arquivo limpo de volta neste visualizador de metadados de imagem para inspecionar seus bytes brutos. Se a limpeza tiver sucesso, o banner verde de status confirma Nenhuma tag EXIF, GPS ou oculta da câmera detectada e nenhum alerta de GPS aparece.',
      },
      {
        question: 'O visualizador detecta XMP da Adobe ou comentários de texto PNG?',
        answer:
          'Sim, blocos de texto chave-valor tEXt e iTXt de PNG — como Software, Autor, Comentário ou Hora de criação — são extraídos limpamente para a tabela de metadados. Quaisquer blocos eXIf de PNG embutidos e blocos EXIF de WebP são decodificados junto.',
      },
      {
        question: 'O que significa o bloco pHYs em capturas de tela PNG?',
        answer:
          'O bloco pHYs de PNG armazena a densidade física de pixels (DPI / pixels por metro) destinada a escala de impressão ou layout. Nosso visualizador lê e converte esses valores para que você veja se uma imagem especifica 72 DPI, 96 DPI ou 300 DPI.',
      },
      {
        question: 'Por que a extensão do nome do arquivo às vezes difere do containerFormat?',
        answer:
          'Às vezes um arquivo PNG ou WebP é renomeado com extensão .jpg (ou vice-versa). Como nosso visualizador inspeciona os bytes mágicos binários reais em vez de confiar apenas no nome do arquivo, ele relata o verdadeiro formato de contêiner subjacente.',
      },
      {
        question: 'Posso verificar metadados de imagem em navegadores móveis de iPhone ou Android?',
        answer:
          'Sim, abra a página no Safari móvel ou no Chrome e escolha uma foto direto do rolo da câmera. Você pode verificar coordenadas GPS ocultas e detalhes da câmera no celular antes de postar fotos online.',
      },
      {
        question: 'Por que minha foto de DSLR mostrou distância focal da lente e velocidade do obturador?',
        answer:
          'As câmeras digitais registram telemetria de exposição dentro do diretório binário ExifIFD no momento em que você pressiona o obturador. Campos como ISO, Número F, Tempo de exposição, Distância focal, Flash e Modo de medição são decodificados localmente para você ler.',
      },
      {
        question: 'Há alguma taxa ou cadastro necessário para inspecionar fotos ilimitadas?',
        answer:
          'Não, inspecionar metadados de imagem e exportar relatórios JSON é totalmente grátis, sem contas ou barreiras de pagamento. Você pode verificar quantas fotos de até 20 MB precisar, sem marcas d\'água ou limites diários.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: 'Remover metadados da imagem',
    shortDescription: 'Remova EXIF, localização GPS, informações da câmera e comentários em privado.',
    category: 'privacy',
    seoTitle: 'Remover metadados da imagem grátis – Tire EXIF e GPS',
    seoDescription:
      'Remova metadados com segurança, incluindo detalhes EXIF da câmera e localização GPS, direto no navegador. Remoção binária sem perdas para JPG e PNG com ZIP.',
    h1: 'Remover metadados da imagem online',
    subtitle:
      'Projetada para vendedores de marketplace, jornalistas, pais e usuários preocupados com a privacidade, esta ferramenta permite remover metadados da imagem permanentemente antes de compartilhar fotos online. Remova modelos de câmera EXIF, coordenadas GPS, datas de captura e blocos de texto ocultos localmente no seu navegador usando remoção binária sem perdas ou recodificação limpa no Canvas.',
    howToSteps: [
      {
        title: 'Solte as fotos que você quer limpar',
        description:
          'Envie uma ou várias imagens JPG, PNG, WebP ou HEIC (até 20 MB cada) na caixa de envio, ou cole com Ctrl+V.',
      },
      {
        title: 'Revise a remoção automática e os selos de verificação',
        description:
          'Os arquivos são limpos imediatamente após o envio e verificados novamente automaticamente, mostrando quantas tags de metadados foram removidas (por exemplo, → 0 restantes).',
      },
      {
        title: 'Escolha o Método de remoção se ajustar as configurações',
        description:
          'Mantenha Remoção binária sem perdas (JPG/PNG) para zero recodificação de pixels em JPEGs e PNGs, ou escolha Recodificação completa no canvas para achatar os pixels de forma limpa.',
      },
      {
        title: 'Defina opcionalmente o Formato de saída e a Qualidade',
        description:
          'Selecione a saída Original, JPG, PNG ou WebP, ajuste a Qualidade de recodificação (50%–100%) para WebP/HEIC/recodificação completa, e clique em Limpar tudo novamente.',
      },
      {
        title: 'Baixe os arquivos limpos ou um ZIP em lote',
        description:
          'Clique em Baixar limpa em cartões verificados individuais ou clique em Baixar todas limpas (ZIP) para salvar clean_images_no_metadata.zip.',
      },
    ],
    features: [
      {
        title: 'Remoção verdadeiramente sem perdas em JPEG e PNG',
        description:
          'Remove EXIF, XMP, IPTC, comentários e blocos tEXt/eXIf de PNG no nível binário, sem recodificar nem um pixel.',
      },
      {
        title: 'Saída limpa verificada',
        description:
          'Cada arquivo de saída é verificado novamente automaticamente pelo nosso analisador de metadados para confirmar que 0 tags EXIF/GPS sensíveis permanecem.',
      },
      {
        title: 'Limpeza em lote + exportação em ZIP',
        description:
          'Limpe um lote inteiro de fotos antes de postar em marketplaces, fóruns ou anúncios e baixe todas juntas em um ZIP.',
      },
      {
        title: 'Privacidade 100% no dispositivo',
        description:
          'Ferramentas de privacidade precisam ser privadas — suas fotos originais com dados GPS nunca saem do seu navegador.',
      },
    ],
    faqs: [
      {
        question: 'Como a Remoção binária sem perdas funciona sem prejudicar a qualidade da foto?',
        answer:
          'Em arquivos JPEG e PNG mantidos no formato original, nosso limpador binário analisa a estrutura do contêiner diretamente. Ele remove segmentos de metadados (APP1–APP15/COM de JPEG e eXIf/tEXt/iTXt/tIME de PNG) sem decodificar ou recomprimir um só pixel.',
      },
      {
        question: 'O que acontece quando envio arquivos WebP ou HEIC para remover metadados?',
        answer:
          'A remoção binária de segmentos sem perdas aplica-se a entradas JPG e PNG. Para entradas HEIC ou WebP — ou sempre que você mudar o Formato de saída ou escolher Recodificação completa no canvas — a ferramenta desenha os pixels em um HTML5 Canvas novo para garantir que todos os cabeçalhos de metadados sejam descartados.',
      },
      {
        question: 'Como sei com certeza que a localização GPS e as tags EXIF foram removidas?',
        answer:
          'Depois de limpar cada imagem, nossa ferramenta executa nosso analisador de metadados uma segunda vez no Blob de saída e exibe um selo verde (por exemplo, Removidas X tags de metadados → 0 restantes ou Limpa verificada). Nada é adivinhado.',
      },
      {
        question: 'Quais tipos de metadados são alvo ao limpar fotos?',
        answer:
          'O limpador remove marca, modelo, detalhes da lente, números de série, configurações do obturador e datas de captura EXIF da câmera. Ele também remove tags de latitude/longitude/altitude GPS, pacotes XMP da Adobe, campos IPTC, comentários JPEG e blocos de texto ou de hora de PNG.',
      },
      {
        question: 'Quando devo escolher Recodificação completa no canvas em vez de Remoção binária sem perdas?',
        answer:
          'Escolha Recodificação completa no canvas quando quiser um bitmap comprimido novinho em folha com zero segmentos binários herdados. Ela também é usada automaticamente sempre que você muda o Formato de saída ou envia fotos WebP e HEIC.',
      },
      {
        question: 'Quais formatos de envio são aceitos por Remover metadados da imagem?',
        answer:
          'A área de envio aceita arquivos JPG (JPEG), PNG, WebP e HEIC/HEIF de iPhone de até 20 MB por arquivo. A partir daí, você pode exportar arquivos limpos em formato Original, JPG, PNG ou WebP.',
      },
      {
        question: 'O controle de Qualidade de recodificação afeta arquivos de Remoção binária sem perdas?',
        answer:
          'Não, a Remoção binária sem perdas pula a recodificação de pixels por completo, então seus bits visuais de JPEG/PNG permanecem intocados, independentemente do controle. O controle de Qualidade de recodificação (50%–100%) só se aplica a entradas WebP/HEIC ou exportações de Recodificação completa no canvas.',
      },
      {
        question: 'Posso remover metadados de uma pasta inteira de fotos de anúncio de uma vez?',
        answer:
          'Sim, solte várias fotos juntas e aguarde um momento até os selos de verificação automática ficarem verdes em todos os cartões. Depois clique em Baixar todas limpas (ZIP) para baixar clean_images_no_metadata.zip.',
      },
      {
        question: 'Minhas fotos não limpas com coordenadas GPS são enviadas para algum lugar?',
        answer:
          'Nunca — limpar cabeçalhos sensíveis de GPS e do dispositivo só protege a privacidade quando acontece localmente. Todo o fatiamento de bytes binários e a exportação no Canvas ocorrem dentro da memória do seu próprio navegador.',
      },
      {
        question: 'Por que uma foto mostrou Limpa verificada (0 tags EXIF/GPS) logo após o envio?',
        answer:
          'Isso significa que o arquivo de origem já continha zero blocos de metadados EXIF, GPS ou de texto (comum em capturas de tela ou imagens baixadas de aplicativos de mensagem). Nosso limpador ainda verifica a saída de forma limpa.',
      },
      {
        question: 'Remover metadados também reduz o tamanho do arquivo?',
        answer:
          'Sim, fotos de câmera costumam carregar miniaturas de prévia EXIF embutidas, blocos XML XMP da Adobe e segmentos de cor ou comentário. Removê-los no modo Remoção binária sem perdas frequentemente corta dezenas de kilobytes sem nenhuma mudança na nitidez da imagem.',
      },
      {
        question: 'A Remoção binária sem perdas preserva fundos PNG transparentes?',
        answer:
          'Sim, os blocos de dados de imagem PNG (IDAT) e a transparência alfa permanecem intocados byte a byte. Apenas blocos auxiliares de texto, EXIF e data são removidos do arquivo.',
      },
      {
        question: 'O que acontece se uma foto de iPhone foi girada via tag de Orientação EXIF?',
        answer:
          'Remover o bloco APP1 bruto sem perdas apaga o sinalizador de Orientação, enquanto a Recodificação completa no canvas ou a decodificação HEIC incorpora a orientação vertical dos pixels direto no canvas exportado. Se um JPEG vertical parecer torto após a remoção sem perdas, mude para Recodificação completa no canvas e clique em Limpar tudo novamente.',
      },
      {
        question: 'Posso converter um PNG limpo diretamente para WebP ou JPG enquanto removo metadados?',
        answer:
          'Sim, escolha JPG ou WebP em Formato de saída, defina a Qualidade de recodificação e clique em Limpar tudo novamente. Cada arquivo é recodificado de forma limpa pelo Canvas com todos os metadados removidos e o formato escolhido aplicado.',
      },
      {
        question: 'Meus arquivos originais no disco são alterados ou substituídos?',
        answer:
          'Não, os navegadores web não podem sobrescrever arquivos diretamente nas suas pastas locais. Clicar em Baixar limpa salva uma cópia separada limpa, deixando seus originais intocados.',
      },
      {
        question: 'Posso conferir a saída limpa em um inspetor independente?',
        answer:
          'Sim, solte qualquer arquivo baixado no nosso Visualizador de metadados de imagem logo após salvar. Ele analisa os cabeçalhos binários brutos de forma independente para que você confirme que zero coordenadas GPS ou tags da câmera permanecem.',
      },
      {
        question: 'O limpador funciona em celulares antes de postar em marketplaces?',
        answer:
          'Sim, abra a página no Safari do iOS ou no Chrome do Android e escolha fotos direto do rolo da câmera do celular. Assim que os selos verdes de verificação aparecerem, você pode baixar cópias limpas direto no dispositivo.',
      },
      {
        question: 'Posso colar uma imagem da área de transferência em Remover metadados da imagem?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V no Mac) para soltar uma imagem copiada ou captura de tela direto na fila de envio. Ela limpa automaticamente quaisquer blocos residuais e prepara o download limpo.',
      },
      {
        question: 'Por que existe o botão Limpar tudo novamente se a limpeza começa automaticamente?',
        answer:
          'Os arquivos são limpos imediatamente ao serem soltos usando suas configurações ativas. Se você depois mudar o Método de remoção, trocar o Formato de saída ou ajustar a Qualidade de recodificação, clicar em Limpar tudo novamente aplica essas opções atualizadas em todo o lote.',
      },
      {
        question: 'Há algum limite de quantidade de arquivos ou custo para remover dados EXIF?',
        answer:
          'Cada arquivo enviado pode ter até 20 MB para que a memória do navegador continue fluida. Além desse limite por arquivo, você pode remover metadados de imagem de fotos ilimitadas sem marcas d\'água, cadastros ou taxas.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
  {
    slug: '/favicon-generator',
    name: 'Gerador de favicon',
    shortDescription: 'Gere favicon.ico, Apple Touch, Android e arquivos de manifesto.',
    category: 'create',
    seoTitle: 'Gerador de favicon grátis – Crie favicon.ico e ícones',
    seoDescription:
      'Use o gerador de favicon grátis para criar um favicon.ico multi-tamanho, Apple Touch, ícones Android Chrome, site.webmanifest e trecho HTML direto no navegador.',
    h1: 'Gerador de favicon grátis online',
    subtitle:
      'Projetado para desenvolvedores web, fundadores de startups, blogueiros e criadores independentes, este gerador de favicon grátis transforma qualquer logotipo ou gráfico em um pacote de ícones de navegador e celular pronto para implantar. Visualize seu ícone em abas claras e escuras, ajuste preenchimento, raio de canto e preenchimento de fundo, e baixe tudo localmente sem nenhum envio ao servidor.',
    howToSteps: [
      {
        title: 'Envie seu logotipo ou gráfico de ícone',
        description:
          'Solte uma imagem PNG, SVG, JPG, WebP ou HEIC de até 20 MB (PNG ou SVG quadrado funciona melhor) ou cole da área de transferência com Ctrl+V.',
      },
      {
        title: 'Escolha o Preenchimento de fundo',
        description:
          'Mantenha a caixa Transparente marcada para ícones recortados limpos, ou desmarque para escolher uma cor de fundo sólida em hexadecimal.',
      },
      {
        title: 'Ajuste o Preenchimento e o Raio de canto',
        description:
          'Deslize o Preenchimento entre 0% e 25% para dar respiro e arraste o Raio de canto de 0% a 50% para quadrados arredondados ou selos circulares.',
      },
      {
        title: 'Inspecione as Prévias de aba do navegador',
        description:
          'Confira as prévias ao vivo em escala 16×16 renderizadas dentro do mockup da aba clara Meu site e da aba em Modo escuro.',
      },
      {
        title: 'Baixe arquivos individuais ou o ZIP completo',
        description:
          'Salve tamanhos de ícone individuais a partir dos cartões gerados ou clique em Baixar tudo (ZIP) para baixar favicon_package_compressmypic.zip.',
      },
      {
        title: 'Copie o trecho HTML do head',
        description:
          'Clique em Copiar HTML no painel escuro de Trecho HTML <head> e cole as tags <link> diretamente no modelo do seu site.',
      },
    ],
    features: [
      {
        title: 'Favicon.ico multi-tamanho de verdade',
        description:
          'Cria um arquivo .ico binário genuíno incorporando quadros nítidos de 16×16, 32×32 e 48×48 — não um PNG renomeado.',
      },
      {
        title: 'Conjunto completo de ícones web e móveis',
        description:
          'Gera ícones 16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192 e 512×512 (Android/PWA) mais site.webmanifest.',
      },
      {
        title: 'Prévia ao vivo de aba do navegador',
        description:
          'Visualize como seu ícone fica em escala real de aba do navegador em fundos claros e escuros antes de baixar.',
      },
      {
        title: 'Trecho HTML pronto para colar',
        description:
          'Copie as tags <link> HTML limpas direto para o seu <head> com um clique.',
      },
    ],
    faqs: [
      {
        question: 'Quais tamanhos e arquivos de ícone exatos vêm dentro do ZIP do favicon?',
        answer:
          'Baixar o ZIP agrupa um favicon.ico multi-quadro (16×16, 32×32 e 48×48), arquivos separados favicon-16x16.png, favicon-32x32.png e favicon-48x48.png, apple-touch-icon.png (180×180), android-chrome-192x192.png e android-chrome-512x512.png. Ele também gera um arquivo JSON site.webmanifest pronto para enviar.',
      },
      {
        question: 'O favicon.ico é um binário ICO multi-quadro genuíno ou um PNG renomeado?',
        answer:
          'Nosso gerador de favicon grava um contêiner binário ICONDIR real do Windows com entradas de diretório PNG RGBA separadas de 32 bits para os quadros 16×16, 32×32 e 48×48. Navegadores de desktop antigos e atalhos do Windows escolhem automaticamente o quadro mais nítido correspondente, sem artefatos de renderização.',
      },
      {
        question: 'Quais dimensões e formato de origem funcionam melhor para ícones de aba nítidos?',
        answer:
          'Comece com um PNG quadrado limpo ou SVG autocontido com 512×512 pixels ou mais para que a redução produza bordas nítidas tanto em 16×16 quanto em 512×512. Fontes minúsculas de baixa resolução esticadas até ícones de splash PWA de 512×512 podem parecer suaves.',
      },
      {
        question: 'O que acontece se eu enviar um logotipo retangular em vez de quadrado?',
        answer:
          'Gráficos retangulares são centralizados proporcionalmente dentro de cada canvas de ícone quadrado sem esticar ou esmagar sua marca. O espaço vazio na parte superior/inferior ou esquerda/direita é preenchido com transparência ou com a cor de fundo selecionada.',
      },
      {
        question: 'Por que o gerador mostra prévias de aba clara e escura?',
        answer:
          'Ícones escuros podem sumir contra abas de navegador em Modo escuro, enquanto logotipos brancos desaparecem em temas claros de navegador. Ver a aba clara Meu site e a aba em Modo escuro lado a lado permite adicionar preenchimento ou uma pílula de fundo sólido antes de implantar.',
      },
      {
        question: 'Como Preenchimento e Raio de canto funcionam juntos em um ícone de app?',
        answer:
          'O Preenchimento (0% a 25%) encolhe seu logotipo levemente para dentro a partir da borda quadrada para que os cantos arredondados não cortem as bordas do gráfico. Aumentar o Raio de canto para cerca de 20% cria squircles no estilo iOS, enquanto 50% recorta o ícone inteiro em um círculo completo.',
      },
      {
        question: 'Os Apple Touch Icons devem usar fundo sólido em vez de transparente?',
        answer:
          'O Safari do iOS frequentemente compõe áreas transparentes do apple-touch-icon.png sobre preto quando os usuários fixam um site na Tela de Início. Se seu logotipo usa formas escuras, desmarque Transparente em Preenchimento de fundo e escolha branco ou a cor da sua marca.',
      },
      {
        question: 'O que está incluído dentro do arquivo site.webmanifest gerado?',
        answer:
          'O JSON do manifesto declara caminhos para /android-chrome-192x192.png e /android-chrome-512x512.png, define display como standalone e sincroniza theme_color e background_color com o Preenchimento de fundo escolhido. Você pode abri-lo em qualquer editor de texto para personalizar o nome do seu site.',
      },
      {
        question: 'Onde devo enviar os arquivos de favicon gerados no meu site?',
        answer:
          'Coloque favicon.ico, todos os ícones PNG gerados e site.webmanifest no diretório público raiz do seu site para que URLs como /favicon.ico e /apple-touch-icon.png resolvam de forma limpa. Depois cole o Trecho HTML <head> copiado dentro da seção <head> principal do seu HTML.',
      },
      {
        question: 'Posso baixar só o favicon.ico ou o apple-touch-icon.png sem o ZIP?',
        answer:
          'Sim, cada tamanho de ícone aparece como seu próprio cartão de prévia mostrando dimensões exatas e tamanho em bytes junto com um botão Baixar dedicado. Você pode pegar recursos individuais ou clicar em Baixar tudo (ZIP) para o pacote completo.',
      },
      {
        question: 'Enviar um logotipo SVG cria ícones nítidos de 16×16?',
        answer:
          'Sim, vetores SVG embutidos são rasterizados diretamente no navegador em cada grade de pixels-alvo, de 16×16 até 512×512. Apenas certifique-se de que seu SVG use formas e cores embutidas em vez de imagens vinculadas externas ou fontes web remotas.',
      },
      {
        question: 'Posso converter uma foto HEIC de iPhone ou gráfico WebP em favicon de site?',
        answer:
          'Sim, a área de envio aceita arquivos PNG, SVG, JPG, WebP, GIF, BMP e HEIC/HEIF de iPhone de até 20 MB. As imagens HEIC são decodificadas localmente no seu navegador antes da montagem do pacote de ícones.',
      },
      {
        question: 'Logotipos de marca ou ícones de app não lançados são enviados para servidores externos?',
        answer:
          'Não, o redimensionamento no Canvas, o empacotamento binário ICO, a geração do manifesto e o arquivamento em ZIP são executados estritamente dentro da sua própria aba do navegador. Suas marcas não lançadas nunca viajam por nenhuma rede.',
      },
      {
        question: 'Por que meu favicon antigo ainda aparecia no Chrome depois de enviar arquivos novos?',
        answer:
          'Os navegadores armazenam favicons em cache de forma agressiva por dias, mesmo depois de você substituir arquivos no servidor. Atualizar com força usando Ctrl+Shift+R (ou abrir uma janela Anônima) força seu navegador a buscar o novo favicon.ico e os ícones PNG.',
      },
      {
        question: 'Mudanças em Preenchimento, Raio de canto ou Preenchimento de fundo atualizam todos os tamanhos de uma vez?',
        answer:
          'Sim, mover qualquer controle ou alternar o Preenchimento de fundo reconstrói imediatamente o favicon.ico, todas as seis dimensões de ícone PNG, as prévias de aba clara/escura e o site.webmanifest juntos. Você nunca precisa enviar seu logotipo novamente entre ajustes.',
      },
      {
        question: 'O Trecho HTML <head> funciona com React, Next.js ou sites HTML simples?',
        answer:
          'Sim, as tags padrão <link rel="icon">, <link rel="apple-touch-icon"> e <link rel="manifest"> funcionam em sites HTML estáticos, cabeçalhos WordPress, index.html de Vite/React e modelos de servidor. Basta colá-las dentro do <head> e colocar os arquivos na raiz web.',
      },
      {
        question: 'Posso criar um favicon circular a partir de um avatar ou selo quadrado?',
        answer:
          'Sim, mantenha Transparente marcado em Preenchimento de fundo e arraste o Raio de canto até 50%. Todos os ícones PNG e os quadros favicon.ico embutidos são recortados limpamente em um círculo suave com antisserrilhamento.',
      },
      {
        question: 'Por que 192×192 e 512×512 são necessários junto com o favicon.ico?',
        answer:
          'O Chrome moderno do Android e os prompts de instalação de Progressive Web App procuram ícones de tela inicial de 192×192 e ícones de splash de 512×512 declarados no site.webmanifest. Incluir ambos garante que os atalhos móveis fiquem nítidos junto com as abas clássicas de desktop.',
      },
      {
        question: 'Posso colar um gráfico de logotipo direto da área de transferência na ferramenta de favicon?',
        answer:
          'Sim, copie uma imagem ou captura de tela para sua área de transferência e pressione Ctrl+V (ou Cmd+V no Mac) na página. Ela entra imediatamente no gerador e renderiza o conjunto completo de ícones.',
      },
      {
        question: 'Há alguma marca d\'água, exigência de conta ou custo para gerar pacotes de favicon?',
        answer:
          'Não, o gerador de favicon é 100% grátis para sites pessoais e comerciais, sem marcas d\'água, contas ou limites diários de criação. Apenas um limite de arquivo de origem de 20 MB se aplica para que a memória do navegador continue rápida.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: 'Seletor de cores de imagem',
    shortDescription: 'Capture cores exatas de pixels de qualquer imagem em HEX, RGB, HSL e CMYK.',
    category: 'developer',
    seoTitle: 'Seletor de cores de imagem – HEX, RGB e HSL grátis',
    seoDescription:
      'Capture cores exatas com o seletor de cores de imagem online. Veja valores HEX, RGB, HSL e CMYK com lupa de pixel ao vivo e exporte variáveis CSS localmente.',
    h1: 'Seletor de cores de imagem grátis online',
    subtitle:
      'Feito para web designers, desenvolvedores frontend, estilistas de marca e ilustradores, nosso seletor de cores de imagem no navegador captura pixels RGBA exatos de qualquer foto, logotipo ou captura de tela. Passe o cursor para inspecionar uma lupa ampliada de 11×11 com leitura HEX ao vivo, clique em pixels para salvar amostras e exporte propriedades personalizadas de CSS sem enviar seus arquivos.',
    howToSteps: [
      {
        title: 'Envie uma imagem ou cole uma captura de tela',
        description:
          'Solte um arquivo JPG, PNG, WebP, HEIC, SVG, BMP ou GIF de até 20 MB, ou pressione Ctrl+V para colar uma captura direto da área de transferência.',
      },
      {
        title: 'Passe o cursor com a lupa ao vivo do Inspetor de pixels',
        description:
          'Mova o cursor sobre o canvas da imagem para ver coordenadas exatas de pixel (x, y) e uma grade ampliada de 11×11 com mira atualizando a amostra em tempo real.',
      },
      {
        title: 'Clique em pixels para fixar e montar amostras',
        description:
          'Clique em qualquer ponto do canvas para travar sua cor no Inspetor de pixels e adicioná-la às Amostras escolhidas (até 24 cores únicas).',
      },
      {
        title: 'Copie valores HEX, RGB, HSL ou CMYK',
        description:
          'Clique no ícone de cópia ao lado de HEX, RGB, HSL ou CMYK no Inspetor de pixels — ou clique em qualquer pílula de amostra salva — para copiar o código na hora.',
      },
      {
        title: 'Exporte sua paleta como variáveis CSS',
        description:
          'Clique em Exportar CSS no cartão de Amostras escolhidas para baixar picked-colors.css com propriedades personalizadas :root limpas, prontas para sua folha de estilos.',
      },
    ],
    features: [
      {
        title: 'Lupa de pixel ampliada ao vivo',
        description:
          'A grade ampliada com mira permite mirar pixels exatos com precisão tanto em mouses de desktop quanto em telas de toque móveis.',
      },
      {
        title: '4 formatos de cor na hora',
        description:
          'Exibe representações HEX, RGB, HSL e CMYK simultaneamente para desenvolvedores web e designers gráficos.',
      },
      {
        title: 'Histórico de amostras salvo e exportação',
        description:
          'Clique em várias áreas da sua imagem para montar uma lista personalizada de amostras e copiá-la como propriedades personalizadas de CSS ou JSON.',
      },
      {
        title: 'Amostragem 100% local no Canvas',
        description:
          'Os valores de pixel são lidos localmente via getImageData do HTML5 Canvas — seus designs e capturas de tela ficam completamente privados.',
      },
    ],
    faqs: [
      {
        question: 'Este seletor de cores de imagem captura do arquivo em resolução completa ou de uma prévia reduzida?',
        answer:
          'Cada passagem do cursor e clique mapeia as coordenadas do ponteiro proporcionalmente para um Canvas offscreen em resolução completa correspondente à naturalWidth × naturalHeight verdadeira da sua imagem. Mesmo que uma foto grande de 4K seja reduzida visualmente para caber na tela, o getImageData lê o pixel subjacente exato.',
      },
      {
        question: 'Como a lupa ampliada de 11×11 ajuda a mirar linhas finas ou ícones pequenos?',
        answer:
          'Ao mover-se pelo canvas, uma lupa ampliada de 88×88 com vizinho mais próximo exibe uma grade de pixels de 11×11 ao redor do cursor com uma mira de contorno duplo no pixel ativo exato. Isso evita capturar acidentalmente pixels de borda com antisserrilhamento ao lado de bordas nítidas.',
      },
      {
        question: 'Quais formatos de código de cor são calculados automaticamente para cada pixel escolhido?',
        answer:
          'O Inspetor de pixels converte o trio RGB capturado simultaneamente em HEX maiúsculo (#RRGGBB), rgb(r, g, b) de CSS, hsl(h, s%, l%) de CSS e valores CMYK em porcentagem. Cada linha tem seu próprio botão de cópia com um clique.',
      },
      {
        question: 'Quantas cores posso coletar nas Amostras escolhidas de uma vez?',
        answer:
          'Clicar em diferentes partes da sua foto armazena até 24 amostras HEX únicas em ordem cronológica (pulando duplicatas automaticamente). Clicar em qualquer pílula de amostra salva a restaura no inspetor e copia seu código HEX direto para sua área de transferência.',
      },
      {
        question: 'O que o botão Exportar CSS baixa?',
        answer:
          'Clicar em Exportar CSS gera uma folha de estilos picked-colors.css contendo um bloco :root com propriedades personalizadas numeradas (--color-1, --color-2 etc.) e comentários RGB embutidos para cada cor nas Amostras escolhidas. Se você ainda não clicou em vários pixels, ele exporta seu pixel atualmente selecionado.',
      },
      {
        question: 'Por que uma cor já aparece logo quando uma imagem carrega?',
        answer:
          'No carregamento inicial, o inspetor captura automaticamente o pixel central exato da sua imagem enviada para que você veja imediatamente leituras HEX, RGB, HSL e CMYK ao vivo antes de mover o mouse. Mover ou clicar em qualquer lugar atualiza essas leituras na hora.',
      },
      {
        question: 'Posso colar uma captura de tela direto com Ctrl+V para capturar cores de UI?',
        answer:
          'Sim, copie um trecho de página web, UI de app ou mockup de design para sua área de transferência e pressione Ctrl+V (ou Cmd+V no Mac) enquanto a área de envio estiver aberta. Ela carrega direto no canvas de amostragem sem salvar um arquivo temporário antes.',
      },
      {
        question: 'Quais tipos de arquivo posso inspecionar com a ferramenta conta-gotas?',
        answer:
          'Você pode carregar imagens JPG, PNG, WebP, HEIC/HEIF de iPhone, SVG, BMP e GIF de até 20 MB cada. SVGs vetoriais são rasterizados limpamente no Canvas para que você possa capturar cores exatas de preenchimento renderizado diretamente.',
      },
      {
        question: 'Quão precisos são os valores CMYK mostrados no Inspetor de pixels?',
        answer:
          'As porcentagens CMYK são calculadas matematicamente a partir de valores de pixel sRGB usando fórmulas padrão de conversão RGB para CMYK. Para impressão offset comercial que exige perfis ICC de imprensa rigorosos, trate-os como aproximações iniciais úteis em vez de provas de tinta calibradas.',
      },
      {
        question: 'O que acontece se eu capturar uma área transparente em um logotipo PNG?',
        answer:
          'O HTML5 Canvas lê os canais vermelho, verde e azul naquela coordenada — pixels de Canvas totalmente transparentes assumem 0, 0, 0 (#000000) quando os canais RGB estão vazios. Capture diretamente sobre traços ou formas opacas para inspecionar as cores verdadeiras da sua arte.',
      },
      {
        question: 'Mockups de UI privados ou recursos de marca de clientes são enviados para algum servidor?',
        answer:
          'Não, a leitura de pixels via getImageData do Canvas é executada estritamente na memória local do seu navegador. Designs não lançados, capturas confidenciais e fotos pessoais nunca saem do seu computador ou celular.',
      },
      {
        question: 'O seletor de cores funciona no Chrome, Safari e Firefox sem extensões de navegador?',
        answer:
          'Sim, diferente da API experimental EyeDropper do navegador, que só funciona no Chromium de desktop, nosso amostrador HTML5 Canvas é executado no Firefox, Safari, Edge e Chrome. Nenhuma extensão de navegador, permissão especial ou plugin é necessária.',
      },
      {
        question: 'Como mudo para uma foto diferente depois de escolher amostras?',
        answer:
          'Clique no botão Nova imagem no canto superior direito do cabeçalho do canvas a qualquer momento. Isso limpa a imagem ativa, redefine a lista de Amostras escolhidas de forma limpa e retorna você para a área de envio.',
      },
      {
        question: 'Posso inspecionar coordenadas exatas de pixel junto com o valor da cor?',
        answer:
          'Sim, o cabeçalho do Inspetor de pixels exibe coordenadas x e y ao vivo (por exemplo, x:412, y:198) em tipo monoespaçado enquanto você passa o cursor sobre o canvas. Isso ajuda a combinar pixels específicos de forma consistente em recursos grandes.',
      },
      {
        question: 'Por que clicar em uma cor dentro de uma foto JPEG varia levemente entre pixels adjacentes?',
        answer:
          'A compressão JPEG usa subamostragem de croma e transformações de bloco que introduzem leves variações de pixel para pixel em superfícies planas. Usar a lupa de 11×11 permite escolher um pixel representativo limpo, longe de bordas comprimidas.',
      },
      {
        question: 'Posso tocar em cores com precisão em um iPad ou smartphone com tela de toque?',
        answer:
          'Sim, tocar em qualquer área do canvas no celular dispara o amostrador no local do toque, fixa a amostra, atualiza todos os quatro formatos de cor e adiciona o código HEX às Amostras escolhidas. Você também pode tocar em qualquer pílula de amostra salva para copiá-la.',
      },
      {
        question: 'Esta ferramenta substitui minhas amostras salvas se eu clicar na mesma cor hex duas vezes?',
        answer:
          'Não, as Amostras escolhidas verificam strings HEX correspondentes automaticamente e ignoram duplicatas. Isso mantém sua paleta coletada organizada mesmo se você capturar o mesmo fundo ou cor de marca várias vezes.',
      },
      {
        question: 'Por que usar HSL junto com HEX e RGB ao estilizar sites?',
        answer:
          'HSL (Matiz, Saturação, Luminosidade) facilita para desenvolvedores CSS derivar estados de hover mais claros ou bordas mais escuras ajustando apenas a porcentagem de luminosidade enquanto mantém o matiz constante. Ter HEX e HSL lado a lado economiza conversão manual.',
      },
      {
        question: 'Qual é o tamanho máximo de arquivo de imagem permitido no seletor de cores?',
        answer:
          'As imagens enviadas individualmente podem ter até 20 MB de tamanho de arquivo. Esse limite lida facilmente com fotos de câmera de vários megapixels, grandes exportações PNG do Figma e capturas de tela de página inteira.',
      },
      {
        question: 'Há algum custo, conta ou limite de quantas cores posso capturar?',
        answer:
          'Não, o seletor de cores de imagem é totalmente grátis, sem contas ou barreiras de pagamento. Você pode enviar imagens ilimitadas e exportar paletas de cores CSS sem marcas d\'água.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },
  {
    slug: '/image-dimensions-checker',
    name: 'Verificador de dimensões de imagem',
    shortDescription: 'Verifique largura, altura, proporção, megapixels e tamanho de impressão.',
    category: 'developer',
    seoTitle: 'Verificador de dimensões de imagem – Pixels e MP',
    seoDescription:
      'Inspecione largura, altura, proporção, megapixels, alfa e tamanho de impressão a 300 DPI em lotes com este verificador de dimensões de imagem grátis online.',
    h1: 'Verificador de dimensões de imagem e proporção',
    subtitle:
      'Ideal para gerentes de e-commerce, compradores de mídia, desenvolvedores de interface e designers de impressão, nosso verificador de dimensões de imagem lê largura e altura em pixels, proporção, megapixels e tamanho de impressão a 300 DPI em segundos. Solte lotes inteiros de arquivos, valide requisitos mínimos de pixels e exporte relatórios limpos em CSV ou JSON com total privacidade no seu dispositivo.',
    howToSteps: [
      {
        title: 'Solte ou selecione uma ou várias imagens',
        description:
          'Envie arquivos JPG, PNG, WebP, HEIC, SVG, BMP, GIF ou AVIF de até 20 MB cada para a área de upload, ou cole com Ctrl+V.',
      },
      {
        title: 'Inspecione as dimensões em pixels e as proporções',
        description:
          'Confira largura × altura exatas (px), megapixels, orientação (Paisagem, Retrato, Quadrada) e proporção simplificada e decimal na tabela.',
      },
      {
        title: 'Verifique o peso do arquivo, o formato e o canal alfa',
        description:
          'Confira os valores da coluna Tamanho / Formato para identificar os tipos reais de contêiner, a quantidade de bytes e se há pixels alfa transparentes.',
      },
      {
        title: 'Confira o tamanho estimado de impressão a 300 DPI',
        description:
          'Veja a coluna Impressão a 300 DPI para saber as dimensões físicas máximas e nítidas em polegadas (larg." × alt.") antes de enviar para gráficas.',
      },
      {
        title: 'Faça verificações de especificação mínima e exporte CSV ou JSON',
        description:
          'Digite regras opcionais de Largura mínima (px) e Altura mínima (px) para marcar Aprovado ou Abaixo do mínimo e clique em Exportar CSV ou Exportar JSON.',
      },
    ],
    features: [
      {
        title: 'Inspeção de dimensões em lote',
        description:
          'Confira dezenas de arquivos de uma só vez — ideal para validar imagens de produtos, criativos de anúncios ou capturas de aplicativo.',
      },
      {
        title: 'Proporções exatas e comuns',
        description:
          'Calcula a proporção simplificada matematicamente e identifica padrões comuns como 16:9, 4:3, 1:1 e 4:5.',
      },
      {
        title: 'Validador personalizado de mínimo e máximo',
        description:
          'Defina regras opcionais de largura e altura mínimas ou máximas para destacar na hora as imagens que passam ou não na sua especificação.',
      },
      {
        title: 'Exportação em CSV e JSON',
        description:
          'Baixe uma planilha CSV limpa ou um resumo JSON com todas as dimensões de imagem inspecionadas.',
      },
    ],
    faqs: [
      {
        question: 'O verificador de dimensões de imagem altera ou regrava minhas imagens?',
        answer:
          'Não, o verificador lê as dimensões naturais em pixels, os bytes do arquivo e as propriedades do contêiner apenas na memória do navegador. Nada é comprimido, cortado, sobrescrito nem enviado para servidores externos.',
      },
      {
        question: 'Quais formatos de arquivo posso inspecionar em lote?',
        answer:
          'Você pode soltar imagens JPG, PNG, WebP, HEIC/HEIF de iPhone, SVG, BMP, GIF e AVIF compatível com o navegador, de até 20 MB por arquivo. Formatos misturados podem ser soltos juntos na mesma tabela.',
      },
      {
        question: 'Como funciona o validador de Largura mínima e Altura mínima?',
        answer:
          'Ao digitar um limite em pixels em Largura mínima (px) ou Altura mínima (px), uma coluna de Verificação de especificação aparece na tabela. Cada linha mostra na hora um selo verde de Aprovado ou um alerta âmbar de Abaixo do mínimo, para que os criativos pequenos se destaquem rápido.',
      },
      {
        question: 'Como as proporções comuns, como 16:9 ou 4:5, são comparadas com as proporções exatas?',
        answer:
          'Primeiro, a calculadora calcula a proporção largura:altura reduzida matematicamente pelo maior divisor comum e a proporção decimal (por exemplo, 1,78:1). Quando uma imagem coincide ou fica muito perto de proporções padrão de quadro como 16:9, 4:3, 3:2, 1:1, 4:5 ou 9:16, ela exibe diretamente esse rótulo reconhecível.',
      },
      {
        question: 'Como é calculada a dimensão de Impressão a 300 DPI a partir dos pixels?',
        answer:
          'A largura e a altura de impressão em polegadas são calculadas dividindo a largura e a altura em pixels por 300 pixels por polegada (por exemplo, 3000 × 2400 px equivalem a 10,0" × 8,0" a 300 DPI). O JSON exportado também mantém os equivalentes de impressão em escala de tela de 72 DPI.',
      },
      {
        question: 'Quais colunas são incluídas ao clicar em Exportar CSV?',
        answer:
          'Ao clicar em Exportar CSV, é baixado o arquivo image-dimensions-report.csv com dez colunas estruturadas: Nome do arquivo, Largura (px), Altura (px), Orientação, Proporção, Megapixels, Tamanho do arquivo (bytes), Formato, Transparência e Tamanho de impressão a 300 DPI. Nomes de arquivo com vírgulas ou aspas são escapados corretamente no CSV.',
      },
      {
        question: 'O que o Exportar JSON salva em comparação com o CSV?',
        answer:
          'O Exportar JSON grava um arquivo image-dimensions-report.json formatado com objetos de metadados limpos para cada linha inspecionada (omitindo URLs internas de prévia e IDs temporários de linha). Desenvolvedores e scripts de controle de qualidade podem analisá-lo direto em verificações automatizadas de arquivos.',
      },
      {
        question: 'Como o verificador detecta se um PNG ou WebP realmente tem transparência alfa?',
        answer:
          'Em vez de adivinhar pela extensão do arquivo, o carregador varre os bytes alfa dos pixels no Canvas para verificar se algum pixel tem opacidade abaixo de 255. Imagens com regiões realmente transparentes mostram uma etiqueta Alfa logo abaixo do formato.',
      },
      {
        question: 'Posso adicionar mais pastas ou lotes a uma tabela de dimensões existente?',
        answer:
          'Sim, soltar ou buscar mais imagens adiciona novas linhas no final da sua tabela atual, sem apagar as entradas anteriores. Clique em Limpar quando quiser redefinir a tabela para um novo projeto.',
      },
      {
        question: 'Por que as fotos de iPhone mostram Paisagem ou Retrato com precisão aqui?',
        answer:
          'Os navegadores modernos normalizam automaticamente a rotação EXIF da câmera ao decodificar imagens JPEG e HEIC nas dimensões naturais. Isso garante que uma foto vertical de celular informe corretamente a orientação Retrato e os limites altos em pixels.',
      },
      {
        question: 'Como são calculados os megapixels (MP) das minhas imagens?',
        answer:
          'Os megapixels equivalem a (largura × altura) dividido por 1.000.000, arredondado para duas casas decimais (por exemplo, 1920 × 1080 = 2,07 MP). Isso corresponde ao padrão de sensores de câmera e de mercados de impressão.',
      },
      {
        question: 'O que acontece se eu enviar um arquivo com extensão enganosa, como um WebP chamado .jpg?',
        answer:
          'Nosso inspetor lê o tipo binário real resolvido durante a decodificação, em vez de confiar cegamente no sufixo do nome do arquivo. Você verá o formato real detectado junto com o peso exato em bytes na coluna Tamanho / Formato.',
      },
      {
        question: 'Posso verificar as dimensões intrínsecas de gráficos SVG também?',
        answer:
          'Sim, arquivos SVG autocontidos com atributos de largura e altura ou um viewBox são decodificados nativamente dentro do navegador. A tabela de dimensões lê sua largura, altura e proporção em pixels renderizados sem problemas.',
      },
      {
        question: 'Criativos de anúncios não publicados ou fotos confidenciais de produtos são enviados online?',
        answer:
          'Nunca — toda a decodificação de imagens, detecção de transparência, verificação de especificações e geração de CSV/JSON é executada dentro da sua própria aba do navegador. Zero bytes saem do seu dispositivo.',
      },
      {
        question: 'Posso colar uma imagem da área de transferência para verificar sua resolução em pixels?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V no Mac) para adicionar uma captura de tela ou gráfico copiado direto na tabela de dimensões. Você pode ler na hora seu tamanho exato em pixels, a quantidade de megapixels e a proporção.',
      },
      {
        question: 'Por que uma imagem de produto da Amazon, Etsy ou Shopify pode falhar na Verificação de largura mínima?',
        answer:
          'Muitos marketplaces exigem pelo menos 1000 px ou 1200 px no lado mais curto ou mais longo para ativar as prévias com zoom. Ao digitar 1200 em Largura mínima, você audita um catálogo inteiro de produtos antes de enviar.',
      },
      {
        question: 'O que acontece se um arquivo ilegível for misturado em uma grande solta em lote?',
        answer:
          'Se um arquivo passar do limite de 20 MB ou não puder ser decodificado no navegador, o UploadZone sinaliza ou ignora esse item inválido sem problemas. Todas as imagens válidas da mesma solta continuam aparecendo normalmente na sua tabela de dimensões.',
      },
      {
        question: 'Posso usar este verificador de dimensões no celular ou tablet?',
        answer:
          'Sim, abra a ferramenta no Safari do iOS ou no Chrome do Android, escolha fotos da sua galeria e inspecione as dimensões exatas em pixels e os tamanhos em megapixels em qualquer lugar. A tabela rola na horizontal em telas estreitas para que nenhuma coluna seja cortada.',
      },
      {
        question: 'Como corrijo uma imagem que falha na minha verificação de especificação mínima ou tem proporção errada?',
        answer:
          'Clique nos cartões com link do Redimensionador de imagens ou do Cortador de imagens em Ferramentas gratuitas relacionadas abaixo do guia. Você pode cortar para uma proporção exata de 16:9, 4:5 ou 1:1 ou redimensionar as dimensões direto no navegador.',
      },
      {
        question: 'Há algum limite diário ou taxa para relatórios de dimensões em lote?',
        answer:
          'Não, inspecionar lotes ilimitados de imagens de até 20 MB por arquivo é totalmente grátis. Você pode baixar relatórios em CSV e JSON quantas vezes precisar, sem contas nem marcas d\'água.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/image-cropper',
    name: 'Cortador de imagens',
    shortDescription: 'Corte fotos interativamente com alças de arraste, proporções e zoom.',
    category: 'crop-edit',
    seoTitle: 'Cortador de imagens grátis online – Corte fotos e proporções',
    seoDescription:
      'Cortador de imagens no navegador com alças de arraste, proporções de 1:1 a 16:9 e zoom de até 300%. Corte JPG, PNG, WebP e HEIC localmente, sem uploads.',
    h1: 'Cortador de imagens grátis online',
    subtitle:
      'Feito para criadores de redes sociais, designers, estudantes e vendedores de e-commerce, nosso cortador de imagens interativo permite enquadrar e aparar fotos com precisão direto no navegador. Trave proporções populares de 1:1 a 16:9, dê zoom de até 300% para bordas exatas e exporte cortes limpos localmente, sem nenhum upload.',
    howToSteps: [
      {
        title: 'Envie uma imagem para cortar',
        description:
          'Solte uma imagem JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB na área de upload, busque no seu dispositivo ou cole com Ctrl+V.',
      },
      {
        title: 'Selecione uma predefinição de proporção',
        description:
          'Mantenha Livre para aparar sem restrições ou clique em 1:1, 4:3, 16:9, 3:2, 4:5 ou 9:16 em Predefinição de proporção para travar o enquadramento.',
      },
      {
        title: 'Arraste o quadro e as alças de redimensionamento',
        description:
          'Mova a caixa de corte sobre o assunto usando a grade de terços e puxe qualquer uma das 8 alças de borda ou canto enquanto acompanha a Largura e a Altura do corte ao vivo.',
      },
      {
        title: 'Dê zoom ou redefina o quadro inteiro',
        description:
          'Use os botões de Zoom (de 100% a 300%, em passos de 25%) para alinhar bordas com precisão, ou clique em Selecionar tudo para voltar à imagem inteira.',
      },
      {
        title: 'Escolha o formato e a qualidade de saída',
        description:
          'Escolha entre Original, JPG, PNG ou WebP e ajuste o controle de Qualidade (10% a 100%) ao salvar formatos com perda.',
      },
      {
        title: 'Corte e baixe seu arquivo',
        description:
          'Clique em Cortar e baixar para renderizar o retângulo selecionado na resolução original completa e salvá-lo com as dimensões no nome do arquivo.',
      },
    ],
    features: [
      {
        title: 'Alças interativas de arraste e redimensionamento',
        description:
          'Alças suaves de mouse e toque permitem cortar qualquer região até o pixel exato.',
      },
      {
        title: 'Predefinições de proporção',
        description:
          'Alterne entre Livre, 1:1 Quadrado, 4:3, 16:9, 3:2, 4:5 para Instagram e 9:16 para Stories.',
      },
      {
        title: 'Zoom e leitura de dimensões ao vivo',
        description:
          'Aproxime para enquadrar com precisão e veja a largura × altura exatas de saída em tempo real.',
      },
      {
        title: 'Processamento 100% privado e local',
        description:
          'Suas fotos são cortadas no seu dispositivo via Canvas HTML5, sem nenhum upload para servidores.',
      },
    ],
    faqs: [
      {
        question: 'Cortar reduz a qualidade dentro do retângulo selecionado?',
        answer:
          'Não, o cortador de imagens extrai as coordenadas selecionadas direto da resolução original completa guardada na memória do navegador, e não da caixa de prévia reduzida. Ao salvar como PNG sem perdas, os pixels dentro do corte permanecem idênticos aos da origem.',
      },
      {
        question: 'Quais predefinições de proporção estão incluídas nas opções de corte?',
        answer:
          'Você pode alternar entre Livre (qualquer retângulo), 1:1 (avatares quadrados), 4:3, 16:9 (widescreen/YouTube), 3:2 (padrão de DSLR), 4:5 (retrato do Instagram) e 9:16 (Stories/Reels). Ao clicar em uma predefinição, um quadro correspondente é centralizado automaticamente.',
      },
      {
        question: 'Como as 8 alças de redimensionamento se comportam com uma proporção ativa?',
        answer:
          'As quatro alças de canto e as de borda mantêm a proporção selecionada automaticamente, respeitando os limites da imagem. Para ajustar largura e altura de forma independente de novo, basta clicar na predefinição Livre.',
      },
      {
        question: 'Para que serve a grade de terços dentro da caixa de seleção?',
        answer:
          'A grade sutil de 3×3 divide seu quadro de corte em terços para que você alinhe horizontes, olhos ou centros de produtos com precisão ao arrastar. Ela é apenas um guia visual na tela e nunca aparece na imagem exportada.',
      },
      {
        question: 'Até onde posso dar zoom para enquadrar com detalhe?',
        answer:
          'Use os botões de Zoom (+) e Zoom (-) na barra da área de trabalho para ampliar suavemente de 100% até 300%, em incrementos de 25%. Com zoom acima de 100%, role dentro do palco de prévia para aparar bordas finas.',
      },
      {
        question: 'O que o botão Selecionar tudo faz nas Opções de corte?',
        answer:
          'Ao clicar em Selecionar tudo, a Proporção volta para Livre, a caixa de corte se expande para cobrir 100% da largura e da altura da imagem e o Zoom volta para 100%. Você ganha um ponto de partida limpo sem enviar a imagem de novo.',
      },
      {
        question: 'Consigo ver as dimensões exatas de saída em pixels antes de baixar?',
        answer:
          'Sim, tanto a leitura de Seleção acima do palco quanto os cartões de Largura do corte / Altura do corte nas Opções de corte são atualizados ao vivo em pixels enquanto você arrasta. O nome do arquivo exportado também inclui essas dimensões exatas do corte (por exemplo, foto_1080x1080_cortada.jpg).',
      },
      {
        question: 'O corte funciona com gestos de dedo no celular e no tablet?',
        answer:
          'Sim, a caixa de corte e as alças usam eventos Pointer seguros para toque, feitos tanto para mouse de desktop quanto para telas de toque. Você pode arrastar o quadro e puxar as alças com conforto no iOS e no Android.',
      },
      {
        question: 'O corte preserva fundos transparentes de PNGs e WebPs?',
        answer:
          'Sim, manter o formato Original (de PNG/WebP) ou escolher PNG ou WebP mantém a transparência alfa completa dentro da região cortada. Ao escolher JPG, os pixels transparentes são achatados sobre branco sólido.',
      },
      {
        question: 'Por que o controle de Qualidade some quando PNG é selecionado?',
        answer:
          'O PNG usa compressão sem perdas, então uma configuração de qualidade com perda em porcentagem não se aplica. Mude o Formato de saída para Original (para JPEGs), JPG ou WebP para revelar o controle de Qualidade de 10% a 100%.',
      },
      {
        question: 'Posso cortar várias imagens diferentes de uma vez?',
        answer:
          'Este cortador interativo trabalha uma imagem por vez para que você inspecione e enquadre cada assunto individualmente com alças de arraste e zoom. Depois de baixar, clique no ícone de lixeira para carregar a próxima foto na hora.',
      },
      {
        question: 'Quais formatos de arquivo podem ser enviados para o cortador?',
        answer:
          'Você pode cortar imagens JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB por arquivo. Observe que GIFs animados cortam o quadro inicial como saída estática.',
      },
      {
        question: 'Retratos privados ou documentos são enviados para um servidor ao cortar?',
        answer:
          'Não, todo o desenho no canvas e a codificação do blob são executados localmente dentro do seu navegador. Nada é transmitido pela rede nem salvo externamente.',
      },
      {
        question: 'Posso colar uma captura de tela direto da área de transferência para aparar?',
        answer:
          'Sim, faça uma captura de tela e pressione Ctrl+V (ou Cmd+V no Mac) na página enquanto nenhuma imagem estiver carregada. Ela abre direto na área de corte, pronta para enquadrar.',
      },
      {
        question: 'Como corto uma foto retangular em um avatar quadrado limpo para perfil?',
        answer:
          'Clique no botão 1:1 em Predefinição de proporção, arraste o quadrado branco sobre o rosto ou logotipo e ajuste as alças de canto até ficar satisfeito. Depois clique em Cortar e baixar para salvar uma imagem quadrada exata.',
      },
      {
        question: 'Qual é a qualidade padrão ao exportar cortes em JPG ou WebP?',
        answer:
          'A qualidade padrão é 92%, para que JPEGs e WebPs cortados mantenham textura fotográfica nítida sem peso excessivo. Deslize para 75%–85% se também quiser um tamanho menor de upload.',
      },
      {
        question: 'Cortar também remove dados de localização GPS EXIF embutidos?',
        answer:
          'Sim, exportar a região cortada por um Canvas HTML5 novo cria um bitmap limpo, sem as tags EXIF ou GPS do JPEG original. Isso ajuda a proteger sua localização e a privacidade do dispositivo ao compartilhar fotos aparadas.',
      },
      {
        question: 'Por que o palco escurece tudo fora da minha caixa de seleção?',
        answer:
          'A sobreposição escura semitransparente escurece as regiões que serão aparadas. Esse contraste visual ajuda você a avaliar a composição e o equilíbrio da regra dos terços antes de clicar em Cortar e baixar.',
      },
      {
        question: 'Posso trocar a foto atual rapidamente depois de baixar um corte?',
        answer:
          'Sim, clique no ícone vermelho de lixeira no canto superior direito do cabeçalho da área de corte a qualquer momento. Isso limpa a foto ativa e volta para a área de upload para a sua próxima imagem.',
      },
      {
        question: "Há algum custo, cadastro ou marca d'água nos cortes exportados?",
        answer:
          'Não, o cortador de imagens é totalmente grátis, sem contas nem barreiras de pagamento. Cada foto cortada é exportada limpa, em resolução total, sem nenhuma marca d\'água.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: "Marca d'água em imagem",
    shortDescription: "Adicione marcas d'água de texto ou logotipo personalizadas, arraste ou repita em mosaico.",
    category: 'crop-edit',
    seoTitle: "Adicionar marca d'água em imagem grátis – Texto e logo",
    seoDescription:
      "Proteja fotos com marca d'água no navegador. Adicione texto personalizado ou logotipos PNG/SVG transparentes e arraste para posicionar ou repita na diagonal.",
    h1: "Ferramenta grátis de marca d'água em imagem online",
    subtitle:
      'Feita para fotógrafos, ilustradores, vendedores do Etsy e agências digitais, esta ferramenta privada de navegador adiciona uma marca d\'água nítida de texto ou logotipo sem uploads para servidores. Arraste sua marca livremente pelo canvas, fixe em 9 predefinições de âncora ou repita um padrão inclinado por toda a foto.',
    howToSteps: [
      {
        title: 'Envie sua foto base',
        description:
          'Solte uma imagem JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB na área de upload, busque no disco ou cole com Ctrl+V.',
      },
      {
        title: "Escolha Marca d'água de texto ou Imagem de logotipo",
        description:
          'Escolha Marca d\'água de texto para digitar um texto personalizado de marca, escolher a cor e ajustar o Tamanho (2%–20%), ou escolha Imagem de logotipo para enviar um logotipo PNG ou SVG transparente (5%–60% de largura).',
      },
      {
        title: 'Ajuste Opacidade e Rotação',
        description:
          'Defina a Opacidade de 5% sutil até 100% sólido e incline a Rotação de -180° a +180° em tempo real.',
      },
      {
        title: 'Posicione livremente ou ative o Padrão repetido em mosaico',
        description:
          'Arraste sua marca d\'água direto na imagem de prévia, clique em uma Predefinição de âncora de 9 pontos (do canto superior esquerdo ao inferior direito) ou ative o Padrão repetido em mosaico e ajuste o Espaçamento do mosaico (15%–60%).',
      },
      {
        title: 'Selecione o formato e a qualidade de saída',
        description:
          'Escolha a saída Orig, JPG, PNG ou WebP e defina a Qualidade (10%–100%) ao salvar formatos com perda.',
      },
      {
        title: 'Baixe sua imagem com marca d\'água',
        description:
          'Clique em Baixar imagem com marca d\'água para compor a sobreposição na resolução original completa da imagem e salvar <nome>_watermarked.',
      },
    ],
    features: [
      {
        title: "Marcas d'água de texto e logotipo",
        description:
          'Use tipografia personalizada nítida ou envie o logotipo da sua marca em PNG/SVG transparente.',
      },
      {
        title: 'Arrastar para posicionar + 9 predefinições de âncora',
        description:
          'Coloque sua marca em qualquer canto, bem no centro, ou arraste-a livremente pelo canvas.',
      },
      {
        title: 'Proteção diagonal em mosaico',
        description:
          'Ative a Marca d\'água em mosaico para repetir seu texto ou logotipo por toda a foto, com espaçamento ajustável.',
      },
      {
        title: 'Privacidade no navegador',
        description:
          'Marque provas e fotos de portfólio localmente, sem enviar os originais para servidores externos.',
      },
    ],
    faqs: [
      {
        question: "Posso usar texto personalizado e meu próprio logotipo transparente como marca d'água?",
        answer:
          "Sim, alterne entre Marca d'água de texto e Imagem de logotipo no topo do painel de controles. O modo texto aceita frase personalizada, cor hexadecimal e escala de tamanho, enquanto o modo logotipo aceita arquivos de logotipo PNG, SVG ou qualquer formato compatível transparente.",
      },
      {
        question: 'Como o Padrão repetido em mosaico protege provas de clientes melhor que um único carimbo de canto?',
        answer:
          'Marcas de um único canto podem ser cortadas facilmente, enquanto ativar o Padrão repetido em mosaico carimba seu texto ou logotipo girado em uma grade escalonada por todo o quadro. Use o controle de Espaçamento do mosaico (15% a 60%) para controlar a densidade da grade.',
      },
      {
        question: 'Por que as Predefinições de âncora ficam ocultas quando o Padrão repetido em mosaico está ativado?',
        answer:
          'As Predefinições de âncora e o arrastar para posicionar servem para colocar uma única marca d\'água em coordenadas específicas (TL, TC, TR, ML, C, MR, BL, BC, BR). Desative o Padrão repetido em mosaico quando quiser arrastar ou fixar um único carimbo.',
      },
      {
        question: 'Como o tamanho do texto é calculado entre miniaturas pequenas e fotos enormes de câmera?',
        answer:
          "O Tamanho da fonte (2% a 20%) e a Largura do logotipo (5% a 60%) escalam proporcionalmente à largura da sua imagem. Isso garante que sua marca d'água fique consistente tanto em uma miniatura de produto de 800 px quanto em uma prova de alta resolução de 4000 px.",
      },
      {
        question: 'O canvas de prévia reduz a qualidade da minha saída baixada?',
        answer:
          "Não, a prévia interativa cabe em até 900 px de largura apenas para arrastar com conforto na sua tela. Ao clicar em Baixar imagem com marca d'água, o exportador constrói um canvas de resolução total com as dimensões exatas em pixels da sua foto original.",
      },
      {
        question: "Consigo deixar o texto branco da marca d'água legível sobre fundos claros?",
        answer:
          "Sim, a Marca d'água de texto renderiza automaticamente uma sombra escura sutil atrás das letras. Isso mantém marcas d'água brancas ou de cor clara nítidas e legíveis sobre céus claros, fundos brancos de produtos e realces.",
      },
      {
        question: 'Quais faixas de opacidade e rotação funcionam melhor para uma proteção discreta de provas?',
        answer:
          'Para uma marca de canto sutil, experimente Opacidade de 40%–65% com rotação de 0° fixada no canto Inferior direito (BR). Para uma proteção forte de provas de banco de imagens, use o Padrão repetido em mosaico com Opacidade de 25%–40% e um ângulo diagonal de -25° ou -35°.',
      },
      {
        question: "Como arrasto uma única marca d'água para um ponto personalizado exato?",
        answer:
          "Com o Padrão repetido em mosaico desmarcado, clique ou pressione diretamente em qualquer lugar do canvas de prévia e arraste o ponteiro. A marca d'água acompanha suavemente e fica contida um pouco dentro das bordas, para nunca sair cortada.",
      },
      {
        question: 'Quais formatos de imagem são aceitos para fotos base e logotipos enviados?',
        answer:
          "Tanto a foto principal quanto o upload de logotipo aceitam JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB. Observe que GIFs animados são renderizados como um único quadro estático com marca d'água.",
      },
      {
        question: 'A exportação preserva a transparência se minha imagem base for um PNG transparente?',
        answer:
          "Sim, selecionar Orig (de PNG/WebP), PNG ou WebP preserva a transparência alfa completa fora da sua arte enquanto compõe a marca d'água por cima. Ao selecionar JPG, as áreas transparentes são preenchidas com branco sólido.",
      },
      {
        question: "Provas originais sem marca d'água são enviadas para servidores externos?",
        answer:
          "Não, manter provas de clientes sem marca d'água em sigilo é essencial. Cada composição no canvas, passagem de mosaico e exportação final de imagem é executada estritamente na memória local do seu navegador, sem nenhum upload de rede.",
      },
      {
        question: 'Posso enviar uma nova foto base sem perder meu texto, opacidade ou ângulo?',
        answer:
          "Sim, clique em Trocar imagem no cabeçalho da prévia quando quiser carimbar outra foto. Seu texto atual da marca d'água, logotipo enviado, opacidade, ângulo de rotação e layout de mosaico permanecem configurados automaticamente.",
      },
      {
        question: 'Posso trocar o logotipo da marca enviado depois, sem recarregar a ferramenta?',
        answer:
          'Sim, com o modo Imagem de logotipo selecionado, clique em Trocar imagem de logotipo para escolher outro arquivo PNG ou SVG a qualquer momento. Sua foto base atual é atualizada na hora.',
      },
      {
        question: 'Por que a Qualidade some quando a saída PNG é selecionada?',
        answer:
          'As saídas PNG são bitmaps sem perdas, então a qualidade de compressão em porcentagem não se aplica. Mude para Orig (para fontes JPEG), JPG ou WebP para ajustar o controle de Qualidade entre 10% e 100%.',
      },
      {
        question: 'Posso colar uma foto direto da área de transferência para marcá-la?',
        answer:
          'Sim, copie uma imagem ou captura de tela e pressione Ctrl+V (ou Cmd+V no Mac) quando a área de upload estiver aberta. Ela é carregada direto no editor de marca d\'água.',
      },
      {
        question: "A marca d'água fica permanentemente achatada no arquivo baixado?",
        answer:
          "Sim, a marca d'água é pintada direto no bitmap de saída e salva como JPG, PNG ou WebP achatado (<nome>_watermarked). Não restam camadas editáveis dentro da imagem exportada.",
      },
      {
        question: "O que acontece se eu deixar o campo Texto da marca d'água em branco?",
        answer:
          "Se você apagar completamente o campo Texto da marca d'água, o renderizador mostra temporariamente \"Marca d'água\" no canvas de prévia. Isso evita uma seleção vazia e invisível enquanto você digita um novo rótulo.",
      },
      {
        question: "Posso posicionar e exportar fotos com marca d'água no smartphone ou iPad?",
        answer:
          'Sim, arrastar pelo canvas de prévia usa eventos Pointer amigáveis ao toque, junto com controles deslizantes responsivos. Você pode carimbar fotos de portfólio ou provas direto no Safari ou Chrome do celular.',
      },
      {
        question: "A marca d'água remove tags GPS EXIF da câmera ao exportar?",
        answer:
          'Sim, renderizar em um Canvas HTML5 novo cria um arquivo de saída limpo, sem copiar os cabeçalhos EXIF da câmera. Sua localização GPS e os metadados do dispositivo ficam fora da prova baixada.',
      },
      {
        question: "O CompressMyPic adiciona algum selo extra ao lado da minha marca d'água?",
        answer:
          'Não, apenas o texto ou logotipo exato que você configurou é desenhado na sua foto. Nunca adicionamos nenhuma marca externa, selo de canto ou marca d\'água do site às suas exportações.',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: 'Desfocar e pixelar imagem',
    shortDescription: 'Desfoque ou pixele a foto inteira ou só áreas sensíveis com o pincel.',
    category: 'crop-edit',
    seoTitle: 'Desfocar e pixelar imagem grátis – Censure rostos e texto',
    seoDescription:
      'Desfoque ou pixele áreas online com um pincel de censura suave ou no modo de quadro inteiro. Oculte rostos, placas e textos privados direto no navegador.',
    h1: 'Desfocar e pixelar imagem online',
    subtitle:
      'Feita para jornalistas, professores, vendedores de marketplaces e usuários comuns de privacidade, esta ferramenta de navegador permite desfocar ou pixelar detalhes de imagem permanentemente antes de compartilhar online. Pinte seletivamente sobre rostos, placas ou endereços com o pincel interativo de censura, ou aplique desfoque suave e pixelação em todo o quadro localmente.',
    howToSteps: [
      {
        title: 'Envie uma foto ou captura de tela',
        description:
          'Solte qualquer imagem JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB na área de upload, ou cole direto com Ctrl+V.',
      },
      {
        title: 'Escolha Área de pincel ou Imagem inteira',
        description:
          'Mantenha Área de pincel selecionada para censurar apenas as regiões pintadas, como rostos e números, ou mude para Imagem inteira para desfocar ou pixelar todo o quadro.',
      },
      {
        title: 'Escolha Mosaico pixelado ou Desfoque suave',
        description:
          'Alterne entre mosaicos em blocos de Mosaico pixelado ou Desfoque suave, conforme o estilo que você quer.',
      },
      {
        title: 'Defina a intensidade e o Tamanho do pincel',
        description:
          'Ajuste o Tamanho do bloco de mosaico (4–60 px) ou o Raio de desfoque (2–50 px), e ajuste o Tamanho do pincel (2%–20%) ao pintar seletivamente.',
      },
      {
        title: 'Pinte sobre os detalhes sensíveis',
        description:
          'Clique e arraste direto sobre rostos, placas ou textos privados no canvas de prévia; clique em Desfazer ou Redefinir pincel quando quiser.',
      },
      {
        title: 'Escolha o formato e baixe',
        description:
          'Escolha a saída Orig, JPG, PNG ou WebP, defina a Qualidade (10%–100%) para formatos com perda e clique em Baixar imagem para salvar localmente.',
      },
    ],
    features: [
      {
        title: 'Pincel interativo de censura',
        description:
          'Pinte sobre rostos, endereços ou placas com tamanho de pincel ajustável e desfazer por traço.',
      },
      {
        title: 'Desfoque e mosaico na imagem inteira',
        description:
          'Desfoque fundos rapidamente ou crie efeitos retrô de mosaico pixel art em todo o quadro.',
      },
      {
        title: 'Zero upload para servidor',
        description:
          'Como você está escondendo detalhes sensíveis, nada sai do seu dispositivo.',
      },
      {
        title: 'Exportação em resolução total',
        description:
          'As coordenadas do pincel são mapeadas com precisão para os pixels originais completos da imagem, para exportações nítidas.',
      },
    ],
    faqs: [
      {
        question: 'Regiões desfocadas ou pixeladas podem ser desfeitas ou revertidas no arquivo baixado?',
        answer:
          'Não, a exportação achata seus traços direto em um único bitmap plano (JPG, PNG ou WebP), sem camadas ocultas nem histórico de desfazer dentro da imagem. Depois de baixada, os pixels nítidos originais atrás da máscara censurada se foram para sempre.',
      },
      {
        question: 'Por que o Mosaico pixelado costuma ser mais seguro que um Desfoque suave leve para esconder texto?',
        answer:
          'Um Tamanho de bloco de mosaico agressivo (20 px a 60 px) funde os caracteres em grandes quadrados de cor sólida, destruindo por completo os contornos finos das letras. Raios de desfoque muito pequenos às vezes deixam formas de palavras levemente adivinháveis, então usar um Raio de desfoque maior ou o Mosaico pixelado dá uma redação mais forte.',
      },
      {
        question: 'Como o modo Área de pincel mantém nítidas as áreas fora dos meus traços?',
        answer:
          'No modo Área de pincel, sua imagem base é desenhada com total clareza, enquanto cada traço pintado funciona como uma máscara alfa fora da tela que compõe apenas a região desfocada ou pixelada por cima. As partes não pintadas da foto ficam completamente nítidas.',
      },
      {
        question: 'Posso misturar traços pixelados e traços desfocados na mesma imagem?',
        answer:
          'Sim, cada traço guarda o Estilo de efeito (Mosaico pixelado ou Desfoque suave), a intensidade e o raio do pincel ativos quando você o pintou. Você pode pixelar uma placa primeiro, mudar para Desfoque suave e pintar o rosto de fundo na mesma foto.',
      },
      {
        question: 'Pintar na prévia reduzida é mapeado com precisão para fotos enormes de câmera?',
        answer:
          'Sim, todas as coordenadas do ponteiro são salvas em proporções normalizadas de 0 a 1, junto com o escalonamento proporcional do pincel e do efeito. Ao clicar em Baixar imagem, a composição é renderizada em um canvas de resolução total que corresponde às dimensões da sua fonte.',
      },
      {
        question: 'Como corrijo um deslize ao pintar sobre um rosto ou endereço?',
        answer:
          'Clique no botão Desfazer acima do canvas de prévia para remover apenas o seu traço mais recente, sem apagar redações anteriores. Se quiser começar do zero, clique em Redefinir pincel para apagar todos os traços na hora.',
      },
      {
        question: 'O que acontece ao mudar a Área alvo para Imagem inteira?',
        answer:
          'A Imagem inteira aplica seu Raio de desfoque suave ou Tamanho de bloco de Mosaico pixelado ativos de forma uniforme em cada pixel, de borda a borda. É útil para criar placas de fundo suaves, fundos de destaque ou texturas retrô de pixel art sem pintar.',
      },
      {
        question: 'Fotos não editadas com rostos, documentos ou endereços privados são enviadas para algum servidor?',
        answer:
          'Nunca — enviar imagens sensíveis sem censura para um servidor remoto comprometeria a privacidade antes mesmo de você esconder qualquer coisa. Cada máscara de canvas, passagem de desfoque e download final é executado estritamente dentro do seu navegador.',
      },
      {
        question: 'Qual deve ser o Tamanho do pincel e do Bloco de mosaico para capturas pequenas?',
        answer:
          'Para capturas de conversa ou de celular, um Tamanho do pincel de 4%–8% mira linhas individuais de texto ou nomes de usuário com precisão, sem borrar mensagens próximas. Definir o Tamanho do bloco de mosaico em torno de 12–24 px costuma obscurecer textos pequenos de forma legível.',
      },
      {
        question: 'Quais formatos de arquivo posso desfocar ou pixelar aqui?',
        answer:
          'Você pode enviar imagens JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB por arquivo. Observe que GIFs animados de vários quadros censuram e exportam o quadro inicial como arquivo estático.',
      },
      {
        question: 'Posso censurar partes sensíveis de uma captura colada com Ctrl+V?',
        answer:
          'Sim, faça uma captura de tela para a área de transferência e pressione Ctrl+V (ou Cmd+V no Mac) enquanto a área de upload estiver visível. Ela abre direto no modo Área de pincel, pronta para editar e salvar.',
      },
      {
        question: 'A exportação preserva fundos transparentes em gráficos PNG ou WebP?',
        answer:
          'Sim, manter Orig (para PNG/WebP) ou escolher PNG ou WebP mantém a transparência alfa intacta ao redor de adesivos não retangulares ou recortes de interface. Ao escolher JPG, a exportação é uma imagem JPEG opaca.',
      },
      {
        question: 'Por que os botões Desfazer e Redefinir pincel só aparecem no modo Área de pincel?',
        answer:
          'Esses botões gerenciam traços individuais de pincel pintados, então eles ficam ocultos automaticamente quando você alterna para o modo Imagem inteira. Ao voltar para Área de pincel, seus traços salvos são restaurados exatamente onde você os deixou.',
      },
      {
        question: 'Posso usar o dedo ou a Apple Pencil no celular ou tablet para pintar traços de censura?',
        answer:
          'Sim, o canvas usa eventos Pointer com touch-none feitos especificamente para telas de toque e canetas stylus. Você pode arrastar traços de censura por rostos ou textos suavemente, sem rolar a página por acidente.',
      },
      {
        question: 'Censurar e exportar também remove tags GPS EXIF da câmera?',
        answer:
          'Sim, renderizar a composição editada por um Canvas HTML5 novo omite automaticamente os cabeçalhos EXIF de JPEG e as coordenadas GPS originais. Isso protege tanto os detalhes visuais quanto os metadados ocultos do arquivo.',
      },
      {
        question: 'Por que a Qualidade some quando escolho a saída PNG?',
        answer:
          'O PNG usa compressão de pixels sem perdas, então porcentagens de qualidade com perda não se aplicam. Selecione Orig (ao editar um JPEG), JPG ou WebP se quiser ajustar o controle de Qualidade de 10%–100%.',
      },
      {
        question: 'Qual nome de arquivo é usado ao salvar minha foto desfocada ou pixelada?',
        answer:
          'O downloader mantém o nome base higienizado do seu arquivo e acrescenta _blur ou _pixelate conforme o Estilo de efeito ativo. Isso permite manter exportações censuradas (como recibo_pixelate.png) organizadas junto aos originais.',
      },
      {
        question: 'E se eu quiser desfocar todo o fundo de um retrato sem pintar?',
        answer:
          'Use o modo Imagem inteira quando quiser um amaciamento uniforme do fundo atrás de gráficos sobrepostos ou cartões de interface. Para isolar um assunto sobre um fundo limpo, combine com nossa ferramenta Removedor de fundo.',
      },
      {
        question: 'Até onde o Desfoque suave e o Mosaico pixelado podem ir?',
        answer:
          'O Raio de desfoque vai de um amaciamento sutil de 2 px até um desfoque pesado de 50 px estilo gaussiano. O Tamanho do bloco de mosaico vai de mosaicos finos de 4 px até blocos grossos de 60 px, escalados proporcionalmente à resolução da sua fonte.',
      },
      {
        question: "Há marcas d'água, limites diários ou cadastros para censurar fotos?",
        answer:
          'Não, você pode desfocar ou pixelar fotos de até 20 MB por arquivo, sem marcas d\'água nem cadastros. Todo o processamento local continua totalmente grátis em exportações ilimitadas.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: 'Adicionar texto a imagem',
    shortDescription: 'Adicione textos arrastáveis com estilo, com fontes, contorno e sombra.',
    category: 'crop-edit',
    seoTitle: 'Adicionar texto a imagem grátis – Fontes, contorno',
    seoDescription:
      "Adicione texto a imagens grátis com nosso editor online, com camadas arrastáveis, 5 fontes, negrito/itálico, contornos, sombras e rotação — sem marca d'água.",
    h1: 'Adicionar texto a imagem online',
    subtitle:
      'Feito para criadores de conteúdo, gestores de redes sociais, professores e criadores de memes, esta ferramenta privada facilita adicionar texto a arquivos de imagem sem aplicativos pesados de design. Sobreponha vários títulos ou legendas de várias linhas, personalize fontes, contornos, sombras e rotação, e exporte com limpeza, sem marcas d\'água.',
    howToSteps: [
      {
        title: 'Envie uma imagem ou cole da área de transferência',
        description:
          'Solte uma foto JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB na área de upload, ou cole direto com Ctrl+V.',
      },
      {
        title: 'Digite texto de várias linhas e gerencie camadas',
        description:
          'Edite seu texto dentro de Conteúdo do texto (Enter adiciona quebras de linha) e clique em Adicionar para empilhar camadas extras como Texto 1, Texto 2, ou excluir as indesejadas.',
      },
      {
        title: 'Escolha fonte, cor de preenchimento, Negrito e Itálico',
        description:
          'Escolha entre Inter, Impact, Georgia, Courier ou Trebuchet, defina a cor de Preenchimento do texto e ative o estilo Negrito ou Itálico.',
      },
      {
        title: 'Ajuste Tamanho, Rotação, Contorno e Sombra',
        description:
          'Deslize o Tamanho (2%–22%) e a Rotação (-180° a +180°) e personalize a cor e a largura do Contorno do texto (1–10), além da Sombra projetada opcional.',
      },
      {
        title: 'Arraste camadas direto na imagem',
        description:
          'Clique e arraste qualquer bloco de texto direto no canvas de prévia para posicionar títulos, legendas de memes ou chamadas de capturas com precisão.',
      },
      {
        title: 'Escolha o formato de saída e baixe',
        description:
          'Selecione a saída Orig, JPG, PNG ou WebP, defina a Qualidade (10%–100%) para arquivos com perda e clique em Baixar imagem com texto.',
      },
    ],
    features: [
      {
        title: 'Várias camadas de texto arrastáveis',
        description:
          'Adicione títulos, legendas e chamadas e arraste cada uma de forma independente no canvas.',
      },
      {
        title: 'Controles ricos de tipografia',
        description:
          'Escolha fontes, tamanhos, pesos negrito/itálico, cores, contornos e sombras projetadas.',
      },
      {
        title: 'Controle de ângulo e alinhamento',
        description:
          'Gire qualquer camada de texto suavemente de -180° a +180°.',
      },
      {
        title: 'Exportação limpa em resolução total',
        description:
          'Sem marcas d\'água adicionadas — baixe direto em JPG, PNG ou WebP.',
      },
    ],
    faqs: [
      {
        question: 'Posso adicionar vários títulos separados ou legendas de meme em cima e embaixo?',
        answer:
          'Sim, clique no botão Adicionar ao lado da aba Texto 1 para criar Texto 2, Texto 3 e quantas camadas de texto independentes precisar. Cada camada mantém sua própria fonte, cor, tamanho, rotação, contorno e posição de arraste na imagem.',
      },
      {
        question: 'Quais fontes estão incluídas no editor de Adicionar texto a imagem?',
        answer:
          'Você pode alternar na hora entre cinco famílias confiáveis e combinadas com o sistema: Inter / Sans limpa, Impact / Exibição de meme, Georgia / Serif clássica, Courier / Monoespaçada e Trebuchet / Sans arredondada. Todas as cinco funcionam offline com confiança, sem esperar downloads de fontes externas.',
      },
      {
        question: 'Como crio o texto clássico de meme branco com borda escura grossa?',
        answer:
          'Selecione Impact / Exibição de meme, deixe o Negrito ativo e o Preenchimento em branco (#ffffff), e mantenha o Contorno do texto marcado com uma cor escura como #0f172a ou preto. Arraste o controle de espessura do contorno para 6–10 para um contraste inconfundível.',
      },
      {
        question: 'Pressionar Enter dentro de Conteúdo do texto cria legendas de várias linhas?',
        answer:
          'Sim, o Conteúdo do texto aceita quebras de linha completas, centralizadas com um multiplicador de altura de linha de 1,22. Isso facilita empilhar citações de várias linhas, chamadas de tutorial ou legendas longas sem criar camadas separadas por linha.',
      },
      {
        question: 'Como seleciono e movo uma camada específica quando tenho várias na foto?',
        answer:
          'Clique na aba da camada (Texto 1, Texto 2 etc.) no painel direito para trocar os controles de tipografia ativos. Você também pode clicar direto perto de qualquer bloco de texto no canvas — o editor pega a camada mais próxima do seu ponteiro.',
      },
      {
        question: 'Posso inclinar o texto na diagonal em ângulos personalizados?',
        answer:
          'Sim, arraste o controle de Rotação para qualquer valor entre -180° e +180° para cada camada de texto ativa. Cada bloco gira suavemente em torno de suas coordenadas centrais para carimbos inclinados, chamadas ou legendas divertidas.',
      },
      {
        question: 'Como o Tamanho do texto (2%–22%) escala em fotos pequenas e em fotos 4K?',
        answer:
          'O tamanho da fonte escala como porcentagem da largura da sua imagem de saída (com um piso mínimo de 12 px). Isso mantém as proporções consistentes entre a prévia na tela e os arquivos exportados em resolução total.',
      },
      {
        question: 'Capturas de tela ou fotos de família são enviadas para algum lugar ao adicionar legendas?',
        answer:
          'Não, a composição no Canvas renderiza cada glifo de fonte, traço, sombra e rotação localmente dentro da sua aba do navegador. Suas imagens base e gráficos finalizados nunca saem do seu dispositivo.',
      },
      {
        question: 'O que acontece com adesivos PNG transparentes se eu exportar com texto adicionado?',
        answer:
          'Ao escolher Orig (de PNG/WebP), PNG ou WebP, as áreas transparentes ao redor do seu gráfico são preservadas com limpeza. Se você escolher a saída JPG, as regiões transparentes são achatadas suavemente sobre um fundo branco sólido.',
      },
      {
        question: 'Como removo uma camada de texto extra sem apagar a imagem inteira?',
        answer:
          'Selecione a aba da camada que você quer descartar e clique no ícone de lixeira ao lado do botão Adicionar. Quando resta apenas uma camada, limpar sua caixa de texto a oculta temporariamente sem perder o editor.',
      },
      {
        question: 'Posso trocar a foto de fundo sem perder minhas camadas de texto estilizadas?',
        answer:
          'Clique em Trocar imagem no cabeçalho da prévia para voltar à área de upload e carregar outro arquivo. Suas camadas de texto e estilos existentes permanecem prontos para que você reutilize a mesma configuração de legenda em várias fotos.',
      },
      {
        question: 'Quais formatos de arquivo posso abrir para adicionar texto?',
        answer:
          'O editor abre arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB cada. GIFs animados são exportados como um único quadro estático com legenda.',
      },
      {
        question: 'Posso arrastar e soltar camadas de texto usando a tela de toque do smartphone?',
        answer:
          'Sim, o arraste no canvas depende de eventos Pointer com touch-none feitos para dedos e canetas stylus. Você pode reposicionar legendas com limpeza no Safari do iOS e no Chrome do Android sem rolar a página.',
      },
      {
        question: 'Como a Sombra projetada melhora a legibilidade junto com o Contorno do texto?',
        answer:
          'A Sombra projetada projeta um desfoque escuro e suave, escalado proporcionalmente ao tamanho da sua fonte, abaixo das letras. Ativar a Sombra projetada sem contorno cria legendas editoriais limpas, enquanto combinar os dois maximiza a legibilidade sobre texturas cheias.',
      },
      {
        question: 'Posso colar uma captura de tela com Ctrl+V para anotá-la rapidamente?',
        answer:
          'Sim, copie qualquer captura de tela ou slide e pressione Ctrl+V (ou Cmd+V no Mac) na página antes de carregar um arquivo. Ela é carregada direto no canvas, pronta para chamadas de texto e exportação limpa.',
      },
      {
        question: 'Por que o controle de Qualidade some quando PNG é escolhido?',
        answer:
          'O PNG codifica imagens sem perdas, sem um controle de qualidade em porcentagem. Escolha Orig (para JPEGs), JPG ou WebP se quiser ajustar a Qualidade de exportação de 10% a 100%.',
      },
      {
        question: 'Adicionar texto via Canvas remove tags GPS EXIF ocultas da câmera?',
        answer:
          'Sim, desenhar em um Canvas HTML5 novo cria um bitmap novinho sem copiar os cabeçalhos EXIF. Sua localização GPS e os metadados da câmera ficam fora da exportação salva.',
      },
      {
        question: 'Qual nome de arquivo é salvo ao baixar uma foto anotada?',
        answer:
          'Os arquivos baixados mantêm o nome base higienizado do seu arquivo e acrescentam _text mais a extensão escolhida (como meme_text.jpg). Isso evita sobrescrever sua foto original sem anotação.',
      },
      {
        question: "Qual é a diferença desta ferramenta para a ferramenta de Marca d'água em imagem?",
        answer:
          "A Marca d'água em imagem foca em carimbos de marca únicos ou em mosaico diagonal e logotipos PNG/SVG enviados. Adicionar texto a imagem, em vez disso, oferece várias camadas de texto independentes e arrastáveis, 5 fontes, controles de negrito/itálico e traços grossos de meme.",
      },
      {
        question: "O CompressMyPic coloca algum logotipo ou marca d'água nas imagens exportadas aqui?",
        answer:
          'Não, seus arquivos baixados contêm apenas sua imagem e as camadas de texto exatas que você criou. Tudo funciona grátis no seu navegador, sem marcas d\'água e sem cadastro.',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: 'Gerador de bordas para imagem',
    shortDescription: 'Adicione bordas sólidas ou em gradiente, molduras, cantos arredondados e sombras.',
    category: 'crop-edit',
    seoTitle: 'Gerador de bordas de imagem grátis – Sólida e gradiente',
    seoDescription:
      'Emoldure fotos com nosso gerador de bordas grátis. Aplique molduras sólidas, em gradiente ou Polaroid, cantos arredondados e sombras, tudo local no navegador.',
    h1: 'Gerador de bordas para imagem grátis',
    subtitle:
      'Feito para fotógrafos, donos de lojas no Etsy, designers de portfólio e criadores de redes sociais, nosso gerador de bordas grátis envolve qualquer foto em molduras de galeria nítidas, gradientes de duas cores ou molduras clássicas Polaroid. Ajuste a espessura da borda, os raios interno e externo dos cantos e as sombras de elevação direto no navegador antes de exportar.',
    howToSteps: [
      {
        title: 'Solte ou selecione uma imagem para emoldurar',
        description:
          'Envie qualquer foto JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB, ou cole com Ctrl+V.',
      },
      {
        title: 'Escolha uma Predefinição rápida de moldura ou Estilo de borda',
        description:
          'Clique nas predefinições Branco clássico, Moldura Polaroid, Estúdio escuro ou Brilho em gradiente, ou alterne manualmente entre os estilos Sólida, Gradiente e Polaroid.',
      },
      {
        title: 'Personalize as cores da moldura e o ângulo do gradiente',
        description:
          'Defina a Cor da borda no modo Sólida/Polaroid, ou escolha Cor inicial, Cor final e Ângulo do gradiente (0°–360°) para molduras em gradiente linear.',
      },
      {
        title: 'Ajuste o Tamanho da borda e os raios dos cantos',
        description:
          'Deslize o Tamanho da borda (1%–25%) junto com os controles independentes de Raio da moldura (0%–30%) e Raio da foto (0%–30%).',
      },
      {
        title: 'Escolha a Sombra projetada e o formato de prévia',
        description:
          'Selecione nenhuma, suave, média ou profunda em Sombra projetada e escolha a saída PNG, JPG ou WEBP enquanto confere a prévia em xadrez.',
      },
      {
        title: 'Baixe sua imagem emoldurada',
        description:
          'Clique em Baixar imagem emoldurada para renderizar a borda e a sombra na resolução original completa da fonte e salvar <nome>_framed.',
      },
    ],
    features: [
      {
        title: 'Bordas sólidas e em gradiente',
        description:
          'Crie molduras de galeria limpas ou molduras vibrantes em gradiente linear de duas cores.',
      },
      {
        title: 'Estilos de moldura predefinidos',
        description:
          'Aplique na hora os visuais Polaroid, Branco de galeria, Estúdio escuro ou Gradiente de pôr do sol.',
      },
      {
        title: 'Raio de canto e Sombra projetada',
        description:
          'Arredonde os cantos internos da foto ou externos da moldura e adicione sombras realistas de elevação.',
      },
      {
        title: 'Suporte a PNG sem perdas',
        description:
          'Exporte em PNG para preservar cantos externos transparentes ao redor de sombras e molduras arredondadas.',
      },
    ],
    faqs: [
      {
        question: 'Como o Estilo de borda Polaroid difere de uma borda Sólida padrão?',
        answer:
          'Bordas sólidas envolvem preenchimento uniforme ao redor dos quatro lados da sua foto, enquanto a Polaroid adiciona 3,2× mais altura de moldura branca ao longo da borda inferior para replicar impressões clássicas de filme instantâneo. Clicar na predefinição Moldura Polaroid configura proporções limpas em um clique.',
      },
      {
        question: 'Por que as Sombras projetadas somem quando mudo o formato de saída para JPG?',
        answer:
          'Arquivos JPG não aceitam canal alfa de transparência para que sombras suaves de elevação semitransparentes se fundam com limpeza nos fundos de página. Nosso renderizador preserva o preenchimento da Sombra projetada em exportações transparentes de PNG e WebP, mantendo bordas nítidas em JPGs de branco sólido.',
      },
      {
        question: 'Qual é a diferença entre Raio da moldura e Raio da foto?',
        answer:
          'O Raio da moldura (0%–30%) curva os cantos externos da própria borda colorida, enquanto o Raio da foto (0%–30%) curva os cantos internos da sua fotografia dentro dessa moldura. Combinar ou contrastar os dois permite criar cartões de interface elegantes ou molduras de galeria nítidas.',
      },
      {
        question: 'Como a moldura Brilho em gradiente calcula ângulo e cores?',
        answer:
          'Ao selecionar o estilo Gradiente, aparecem Cor inicial, Cor final e um controle de Ângulo do gradiente de 0°–360° que desenha um gradiente linear direcional completo atrás da sua foto. Você pode clicar em Brilho em gradiente nas Predefinições rápidas de moldura para um estilo instantâneo de cartão azul para verde-água.',
      },
      {
        question: 'Adicionar uma borda corta alguma borda da minha foto original?',
        answer:
          'Não, o gerador de bordas expande o canvas para fora, ao redor da largura e altura originais completas da sua imagem, em vez de cobrir seus pixels. Apenas definir o Raio da foto acima de 0% arredonda suavemente os quatro cantos internos da imagem.',
      },
      {
        question: 'Como o Tamanho da borda (1%–25%) é calculado em fotos altas e largas?',
        answer:
          'A espessura da borda é calculada como porcentagem da menor dimensão da sua imagem — min(largura, altura). Isso mantém as margens superior, inferior e laterais equilibradas tanto em banners 16:9 quanto em retratos 4:5.',
      },
      {
        question: 'O que as quatro Predefinições rápidas de moldura configuram automaticamente?',
        answer:
          'Branco clássico define uma moldura de galeria branca de 10% com sombra suave, enquanto Moldura Polaroid adiciona uma margem inferior de impressão instantânea. Estúdio escuro aplica uma moldura ardósia e Brilho em gradiente cria uma borda em gradiente azul para verde-água a 135°.',
      },
      {
        question: 'Por que a prévia mostra um xadrez cinza e branco ao redor da minha moldura?',
        answer:
          'Esse xadrez visualiza pixels realmente transparentes fora dos cantos arredondados da moldura e dentro das sombras suaves. Ao exportar como PNG ou WebP, essas regiões em xadrez permanecem completamente transparentes em qualquer site ou slide de apresentação.',
      },
      {
        question: 'A moldura é feita localmente, sem enviar minha fotografia?',
        answer:
          'Sim, a pintura do gradiente, o recorte dos cantos, a renderização da sombra e a exportação do Blob acontecem estritamente dentro do Canvas HTML5 no seu dispositivo. Nada é enviado para servidores externos.',
      },
      {
        question: 'Quais formatos de arquivo podem ser carregados no gerador de bordas?',
        answer:
          'Você pode soltar imagens JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB cada. GIFs animados são exportados como um primeiro quadro estático emoldurado.',
      },
      {
        question: 'Posso mudar a cor da moldura de uma Predefinição rápida depois de clicar nela?',
        answer:
          'Sim, as predefinições apenas preenchem os controles de Estilo de borda, cor, raio e sombra para você. Você pode ajustar a Cor da borda, redimensionar as margens ou trocar a Sombra projetada logo em seguida.',
      },
      {
        question: 'Como faço uma moldura de galeria carvão escuro ou pastel sem nenhuma sombra?',
        answer:
          'Escolha o estilo Sólida, clique em Cor da borda para selecionar qualquer tom hexadecimal personalizado e arraste o Raio da moldura e o Raio da foto para 0%. Depois clique em nenhuma em Sombra projetada para bordas planas e nítidas.',
      },
      {
        question: 'Minha imagem emoldurada baixada terá resolução total?',
        answer:
          'Sim, a prévia na tela é reduzida apenas para caber com conforto no seu layout. Ao clicar em Baixar imagem emoldurada, um Canvas novinho é construído com a resolução exata em pixels da sua foto original, mais a moldura e a sombra escaladas.',
      },
      {
        question: 'Devo exportar PNG ou WebP para manter cantos transparentes da moldura arredondada?',
        answer:
          'Escolha PNG quando quiser nitidez sem perdas ao redor de bordas finas e arquivos de impressão. Escolha WebP para cartões de site rápidos e leves que ainda preservam cantos externos transparentes e sombras de elevação.',
      },
      {
        question: 'Posso colar uma captura de tela direto da área de transferência para envolvê-la em uma moldura de cartão?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V no Mac) na área de upload logo após fazer uma captura de tela. Combinar uma borda arredondada, moldura em gradiente e Sombra projetada média transforma capturas brutas em visuais polidos de apresentação.',
      },
      {
        question: 'Adicionar uma borda remove dados GPS EXIF ocultos da câmera?',
        answer:
          'Sim, compor no Canvas HTML5 cria um bitmap emoldurado limpo. Os cabeçalhos EXIF da câmera de origem e as coordenadas GPS são excluídos automaticamente do PNG, JPG ou WebP baixado.',
      },
      {
        question: 'Como carrego uma segunda foto ao testar molduras?',
        answer:
          'Clique em Trocar imagem no canto superior direito do painel de prévia para escolher outra foto. Todas as suas cores de borda, ângulos de gradiente, raios de canto e escolhas de sombra ativos permanecem intactos.',
      },
      {
        question: 'Com qual nome de arquivo a imagem emoldurada é salva?',
        answer:
          'As exportações preservam o nome original higienizado do seu arquivo, com _framed acrescentado antes de .png, .jpg ou .webp. Por exemplo, um arquivo chamado retrato.jpg é salvo como retrato_framed.png.',
      },
      {
        question: 'O gerador de bordas funciona bem em navegadores de celular?',
        answer:
          'Sim, cada cartão de predefinição, controle deslizante e seletor de cor funciona com limpeza no Safari do iOS e no Chrome do Android. Você pode emoldurar Polaroids ou fotos de produtos direto da galeria do smartphone.',
      },
      {
        question: "Há marcas d'água, barreiras de pagamento ou limites de cadastro nas fotos emolduradas?",
        answer:
          'Não, cada foto emoldurada é baixada totalmente sem marca d\'água e sem custo. Apenas a verificação padrão de 20 MB por arquivo se aplica, para manter a memória do navegador fluida.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: 'Arredondar cantos da imagem',
    shortDescription: 'Arredonde cantos de forma uniforme ou por canto, com saída PNG transparente.',
    category: 'crop-edit',
    seoTitle: 'Arredondar cantos da imagem grátis – PNG transparente',
    seoDescription:
      'Arredonde cantos de imagem grátis com controles uniformes ou por canto, predefinição de avatar circular e exportação em PNG transparente, direto no navegador.',
    h1: 'Arredondar cantos da imagem online',
    subtitle:
      'Feita para designers de interface, autores de newsletter, blogueiros e usuários de redes sociais que criam cartões ou avatares elegantes, esta ferramenta de navegador permite arredondar cantos de imagem com limpeza, em resolução total. Curve os quatro cantos de forma uniforme, alterne controles individuais por canto ou fixe um círculo completo com saída transparente em PNG/WebP.',
    howToSteps: [
      {
        title: 'Solte ou escolha sua imagem',
        description:
          'Envie uma foto JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB para a área de upload, ou cole com Ctrl+V.',
      },
      {
        title: 'Ajuste o Raio de todos os cantos ou clique em Círculo completo / Pílula',
        description:
          'Arraste o controle de Raio de todos os cantos (0%–100%, mostrando a curvatura exata em pixels) ou clique em Círculo completo / Pílula para fixar em 100%.',
      },
      {
        title: 'Ative opcionalmente o Controle individual por canto',
        description:
          'Ative o Controle individual por canto para estilizar os cantos Superior esquerdo, Superior direito, Inferior esquerdo e Inferior direito de forma independente.',
      },
      {
        title: 'Escolha preenchimento externo Transparente ou de Cor sólida',
        description:
          'Mantenha Transparente (PNG/WebP) ativo para cantos arredondados transparentes, ou mude para Cor sólida e escolha qualquer fundo hexadecimal.',
      },
      {
        title: 'Selecione o formato de saída (PNG, WebP ou JPG)',
        description:
          'Escolha PNG para bordas alfa sem perdas, WebP para arquivos web transparentes mais leves ou JPG para fundos opacos de cantos sólidos.',
      },
      {
        title: 'Baixe sua imagem arredondada',
        description:
          'Confira a prévia em xadrez e clique em Baixar imagem arredondada para exportar <nome>_rounded nas dimensões originais completas.',
      },
    ],
    features: [
      {
        title: 'Raio uniforme e por canto',
        description:
          'Arredonde todos os cantos de forma uniforme até uma pílula/círculo, ou estilize cada canto de forma independente.',
      },
      {
        title: 'Cantos realmente transparentes',
        description:
          'Exporte PNG ou WebP com transparência alfa limpa e suavizada fora da máscara arredondada.',
      },
      {
        title: 'Fundo sólido opcional',
        description:
          'Preencha os cantos externos com qualquer cor hexadecimal personalizada se for exportar em JPG.',
      },
      {
        title: 'Saída em resolução total',
        description:
          'Mantém as dimensões exatas em pixels da sua imagem original enquanto recorta os cantos com limpeza.',
      },
    ],
    faqs: [
      {
        question: 'Por que preciso usar PNG ou WebP para manter os cantos arredondados transparentes?',
        answer:
          'O formato JPEG não aceita canal alfa de transparência, então os cantos fora de uma máscara arredondada sempre ficariam branco sólido ou opacos. PNG e WebP preservam transparência suave de 8 bits com antialiasing, para que seu cartão arredondado ou avatar se misture perfeitamente a qualquer cor de página ou slide.',
      },
      {
        question: 'Como o atalho Círculo completo / Pílula funciona em fotos quadradas e retangulares?',
        answer:
          'Ao clicar em Círculo completo / Pílula, o Raio de todos os cantos é definido em 100% da metade do lado mais curto — min(largura, altura) / 2. Em uma imagem quadrada 1:1, isso corta um círculo perfeito; em um banner mais largo, forma uma pílula suave de estádio.',
      },
      {
        question: 'O que acontece se eu quiser apenas os dois cantos superiores arredondados para um cartão de blog?',
        answer:
          'Marque Controle individual por canto para desbloquear quatro controles separados para Superior esquerdo, Superior direito, Inferior esquerdo e Inferior direito (cada um de 0%–100%). Defina Inferior esquerdo e Inferior direito em 0% enquanto arredonda apenas os cantos superiores.',
      },
      {
        question: 'Como faço um retrato quadrado primeiro se minha foto for retangular?',
        answer:
          'Abra nossa ferramenta Cortador de imagens (com link em Ferramentas gratuitas relacionadas abaixo), selecione a predefinição de proporção 1:1 e baixe seu corte quadrado. Depois solte esse arquivo quadrado aqui e clique em Círculo completo / Pílula para um avatar circular nítido.',
      },
      {
        question: 'O que significa a leitura de pixels ao vivo ao lado de Raio de todos os cantos?',
        answer:
          'Junto com o controle de 0%–100%, o rótulo calcula a curva exata do canto em pixels reais de saída (por exemplo, 120px (24%)) em relação às dimensões da sua imagem original. Isso facilita combinar valores de border-radius do CSS.',
      },
      {
        question: 'Quando devo escolher Cor sólida em Preenchimento de canto externo em vez de Transparente?',
        answer:
          'Escolha Cor sólida quando planeja exportar um JPG leve, combinar um fundo específico de cartão em modo escuro ou enviar para um aplicativo que substitui o alfa de PNG transparente por preto. Você pode escolher branco ou qualquer código hexadecimal exato com o seletor de cor.',
      },
      {
        question: 'O que acontece automaticamente se eu clicar em Transparente (PNG/WebP) com JPG selecionado?',
        answer:
          'Arquivos JPG não podem armazenar transparência alfa nos cantos externos. Ao clicar em Transparente (PNG/WebP), o Formato de saída muda para PNG automaticamente, para que seus cantos arredondados permaneçam transparentes.',
      },
      {
        question: 'Arredondar cantos reduz a largura e a altura da minha foto?',
        answer:
          'Não, a imagem exportada mantém a largura e a altura exatas em pixels da sua imagem original. Apenas as regiões dos cantos externos são recortadas suavemente usando curvas de canto quadráticas.',
      },
      {
        question: 'Por que as bordas curvas ficam suaves em vez de pixels serrilhados?',
        answer:
          'O Canvas HTML5 recorta ao longo de caminhos vetoriais de Bézier quadráticos com suavização de alta qualidade ativada. Isso cria antialiasing suave de subpixel ao longo das curvas, que se mistura naturalmente a fundos de página escuros ou claros.',
      },
      {
        question: 'Retratos ou avatares de perfil são enviados para algum servidor durante o recorte de cantos?',
        answer:
          'Não, o recorte de caminho e a codificação PNG/WebP são executados estritamente dentro da sua aba do navegador via Canvas HTML5. Fotos pessoais e logotipos de marca nunca saem do seu dispositivo.',
      },
      {
        question: 'Quais formatos de entrada podem ser arredondados nesta ferramenta?',
        answer:
          'Solte arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP ou SVG de até 20 MB cada. GIFs animados exportam um primeiro quadro estático arredondado.',
      },
      {
        question: 'Posso colar uma captura da área de transferência direto para arredondar seus cantos?',
        answer:
          'Sim, faça uma captura de tela e pressione Ctrl+V (ou Cmd+V no Mac) quando a área de upload estiver ativa. Ela abre direto na prévia em xadrez, pronta para arredondar os cantos.',
      },
      {
        question: 'O que acontece com meus valores Individuais por canto se eu desmarcar o modo por canto?',
        answer:
          'Ao desmarcar o Controle individual por canto, o canvas volta ao controle único de Raio de todos os cantos, para que os quatro cantos fiquem uniformes. Ao marcá-lo de novo, os quatro controles de canto são preenchidos a partir do seu raio uniforme atual.',
      },
      {
        question: 'Arredondar cantos também remove tags GPS EXIF embutidas?',
        answer:
          'Sim, renderizar pixels por um recorte limpo de Canvas remove automaticamente os cabeçalhos EXIF e GPS do JPEG original. Isso protege a privacidade sempre que você compartilha avatares arredondados ou miniaturas de produtos online.',
      },
      {
        question: 'Como troco a imagem atual mantendo minha configuração de raio de canto?',
        answer:
          'Clique em Trocar imagem acima do palco de prévia para enviar uma nova foto. Seu raio uniforme, valores por canto, modo de preenchimento e formato de saída permanecem ativos para exportações repetidas rápidas.',
      },
      {
        question: 'Qual nome de arquivo é atribuído às imagens arredondadas baixadas?',
        answer:
          'O downloader mantém o nome original higienizado do seu arquivo e adiciona _rounded antes de .png, .webp ou .jpg. Por exemplo, avatar.jpg é baixado como avatar_rounded.png.',
      },
      {
        question: 'Devo escolher PNG ou WebP ao exportar gráficos web arredondados?',
        answer:
          'Escolha PNG para máxima compatibilidade com aplicativos mais antigos e nitidez sem perdas nas bordas. Escolha WebP quando quiser arquivos de site bem menores que ainda mantêm a transparência alfa total dos cantos.',
      },
      {
        question: 'Posso usar Arredondar cantos da imagem em navegadores de celular iOS ou Android?',
        answer:
          'Sim, todos os controles, caixas de seleção e alternâncias de formato se adaptam bem a telas de celular no Safari e no Chrome. Você pode arredondar cantos de retratos direto da galeria do celular.',
      },
      {
        question: 'Como esta ferramenta difere do Gerador de bordas para imagem?',
        answer:
          'Arredondar cantos da imagem recorta sua foto com limpeza nas dimensões originais, sem adicionar preenchimento externo. O Gerador de bordas para imagem, em vez disso, envolve molduras coloridas, gradientes ou molduras Polaroid ao redor da sua foto.',
      },
      {
        question: "Há marcas d'água, taxas ou limites diários nas exportações arredondadas?",
        answer:
          'Não, você pode arredondar cantos em fotos ilimitadas de até 20 MB por arquivo, totalmente grátis. Nenhuma marca d\'água, conta ou barreira de pagamento aparece nos downloads.',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: 'Editor de brilho de imagem',
    shortDescription: 'Clareie ou escureça fotos com prévia de antes e depois ao vivo.',
    category: 'crop-edit',
    seoTitle: 'Editor de brilho de imagem grátis – Clareie fotos',
    seoDescription:
      'Ajuste a iluminação de fotos com nosso editor de brilho grátis. Deslize de -100% a +100%, use predefinições rápidas, compare antes e depois e exporte.',
    h1: 'Editor de brilho de imagem grátis online',
    subtitle:
      'Feito para fotógrafos corrigindo fotos subexpostas, corretores de imóveis clareando ambientes e vendedores aprimorando fotos de produtos, nosso editor de brilho no navegador ajusta a iluminação suavemente sem enviar os originais. Gire o controle de -100% a +100%, teste predefinições instantâneas de iluminação e confira os resultados com comparação dividida ao vivo.',
    howToSteps: [
      {
        title: 'Solte ou selecione uma foto para clarear ou escurecer',
        description:
          'Envie qualquer imagem JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB para a área de upload, ou cole com Ctrl+V.',
      },
      {
        title: 'Ajuste o controle de Nível de brilho ou as Predefinições rápidas',
        description:
          'Mova o Nível de brilho de -100% Mais escuro a +100% Mais claro, ou clique em Escuro (-30%), Sombrio (-15%), Original (0%), Claro (+15%), Vibrante (+30%) ou Alta chave (+50%).',
      },
      {
        title: 'Compare as visualizações Depois, Antes e Comparação dividida',
        description:
          'Alterne entre as abas Depois, Antes e Comparação dividida — ou abra a Comparação em tela cheia — para verificar detalhes de sombras e realces.',
      },
      {
        title: 'Selecione o Formato de saída e a Qualidade',
        description:
          'Escolha a saída Original, JPG, PNG ou WEBP e ajuste o controle de Qualidade (10%–100%) ao salvar formatos com perda.',
      },
      {
        title: 'Baixe sua imagem editada',
        description:
          'Clique em Baixar imagem editada para processar a curva de brilho na resolução original completa e salvar <nome>_brightness localmente.',
      },
    ],
    features: [
      {
        title: 'Ajuste de pixels em tempo real',
        description:
          'Prévia instantânea em navegadores de desktop e celular, sem idas e vindas ao servidor.',
      },
      {
        title: 'Predefinições rápidas de exposição',
        description:
          'Teste as predefinições Escuro, Sombrio, Claro, Vibrante e Alta chave em um clique.',
      },
      {
        title: 'Inspeção de antes e depois',
        description:
          'Compare a foto editada lado a lado ou com o controle interativo de comparação.',
      },
      {
        title: 'Processamento privado no navegador',
        description:
          'Suas fotos pessoais permanecem estritamente dentro do seu navegador.',
      },
    ],
    faqs: [
      {
        question: 'Como o controle de Nível de brilho muda os pixels sem desbotar as cores na hora?',
        answer:
          'Mover o Nível de brilho entre -100% Mais escuro e +100% Mais claro ajusta a luminância suavemente por todo o quadro em tempo real dentro do Canvas HTML5. Conferir a Comparação dividida ou a Comparação em tela cheia permite clarear sombras escuras sem estourar os brancos claros.',
      },
      {
        question: 'Por que minha foto é pré-visualizada automaticamente em +15% logo após o upload?',
        answer:
          'O editor inicia em Claro (+15%) para que você veja na hora um leve aumento de exposição ao carregar. Clique em Original (0%) ou Redefinir em Controles de brilho quando quiser comparar a partir da linha de base neutra.',
      },
      {
        question: 'Quais Predefinições rápidas estão incluídas para testar a exposição em um clique?',
        answer:
          'Seis predefinições cobrem ajustes comuns: Escuro (-30%), Sombrio (-15%), Original (0%), Claro (+15%), Vibrante (+30%) e Alta chave (+50%). Clicar em qualquer cartão ajusta o controle na hora e ainda permite afinar em passos de 1%.',
      },
      {
        question: 'Como Depois, Antes, Comparação dividida e Comparação em tela cheia diferem?',
        answer:
          'Depois mostra seu canvas editado, Antes revela a imagem original intocada e Comparação dividida adiciona um controle interativo de Antes/Depois direto na área de visualização. Clicar em Comparação em tela cheia renderiza um Blob de resolução total e abre o modal de comparação detalhado.',
      },
      {
        question: 'Clarear uma foto reduz sua resolução ou dimensões em pixels?',
        answer:
          'Não, a prévia ao vivo é dimensionada até 1000 px apenas para uma resposta suave e interativa do controle. Ao clicar em Baixar imagem editada, um Canvas de resolução total é renderizado, preservando a largura e a altura originais exatas da sua imagem.',
      },
      {
        question: 'Quando devo escurecer uma foto usando valores negativos como -15% ou -30%?',
        answer:
          'Valores negativos de brilho atenuam com limpeza fotos de celular superexpostas e reflexos fortes de janela. Escurecer uma foto de destaque clara também cria melhor contraste atrás de títulos brancos sobrepostos.',
      },
      {
        question: 'O editor de brilho de imagem preserva fundos transparentes em PNGs?',
        answer:
          'Sim, manter Original (para PNG/WebP) ou escolher PNG ou WebP preserva áreas transparentes com limpeza contra a área de visualização em xadrez. Se você escolher a saída JPG, as regiões transparentes são achatadas suavemente sobre branco sólido.',
      },
      {
        question: 'Fotos pessoais de família ou provas de clientes são enviadas para servidores externos?',
        answer:
          'Não, as transformações de brilho de pixels e a codificação de formato são executadas localmente no seu navegador usando Canvas HTML5. Suas imagens nunca saem do seu computador ou smartphone.',
      },
      {
        question: 'Quais formatos de arquivo posso clarear ou escurecer aqui?',
        answer:
          'Você pode abrir arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB cada. GIFs animados exportam seu quadro inicial clareado como imagem estática.',
      },
      {
        question: 'Posso colar uma captura escura direto da área de transferência para clareá-la?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V no Mac) na área de upload depois de copiar uma captura escura ou slide. Ela é carregada direto na área de visualização, pronta para ajustar e exportar.',
      },
      {
        question: 'O que acontece se eu levar o brilho até +100%?',
        answer:
          'Configurações positivas extremas clareiam bastante os tons médios e empurram os realces para o branco puro, o que é útil para gráficos estilizados de alta chave, mas pode estourar texturas de realce em retratos. Mire em +10% a +35% para uma recuperação natural de exposição.',
      },
      {
        question: 'Posso ajustar contraste ou vibração de cor depois de clarear uma imagem?',
        answer:
          'Sim, baixe primeiro sua foto clareada e depois clique em Editor de contraste de imagem ou Editor de saturação de imagem em Ferramentas gratuitas relacionadas abaixo. Dividir os ajustes em ferramentas dedicadas permite afinar com precisão o impacto do contraste ou a riqueza das cores.',
      },
      {
        question: 'Por que a Qualidade some quando seleciono PNG em Formato de saída?',
        answer:
          'O PNG usa compressão sem perdas, sem um nível de qualidade variável em porcentagem. Mude para Original (para JPEGs), JPG ou WebP para revelar e ajustar o controle de Qualidade de 10%–100% (padrão de 90%).',
      },
      {
        question: 'Como desfaço todas as mudanças de brilho rapidamente?',
        answer:
          'Clique no botão azul Redefinir no canto superior direito de Controles de brilho a qualquer momento. Você também pode clicar no cartão de predefinição Original (0%) para voltar direto ao ajuste zero.',
      },
      {
        question: 'Exportar uma foto editada remove tags de localização GPS EXIF da câmera?',
        answer:
          'Sim, desenhar em um Canvas HTML5 novo constrói um bitmap de saída limpo, sem copiar os dados EXIF da câmera. Quaisquer coordenadas GPS ou números de série do dispositivo são removidos automaticamente.',
      },
      {
        question: 'Posso carregar outra foto logo após exportar, sem atualizar a página?',
        answer:
          'Sim, clique no ícone vermelho de lixeira (Remover imagem) na barra de ferramentas da prévia a qualquer momento. Isso limpa a foto ativa com limpeza e leva você direto de volta à área de upload.',
      },
      {
        question: 'Qual nome de arquivo é usado ao clicar em Baixar imagem editada?',
        answer:
          'O exportador mantém o nome original higienizado do seu arquivo e acrescenta _brightness mais a extensão de formato selecionada. Por exemplo, cozinha.jpg é salvo como cozinha_brightness.jpg.',
      },
      {
        question: 'O editor funciona bem no Safari do iPhone e no Chrome do Android?',
        answer:
          'Sim, cada cartão de predefinição, controle deslizante e visualização de comparação dividida funciona suavemente em telas de toque de celular. Você pode clarear fotos escuras da galeria direto no Safari ou Chrome do celular.',
      },
      {
        question: 'Por que uma JPEG escura e comprimida pode mostrar ruído de bloco leve quando muito clareada?',
        answer:
          'Sombras em JPEGs muito comprimidos costumam guardar artefatos de quantização escondidos na escuridão; aumentar o brilho em +40% ou mais torna visível o ruído de sombra existente. Manter ajustes moderados (+15% a +30%) mantém tons mais limpos.',
      },
      {
        question: "Há alguma marca d'água, cadastro de conta ou limite ao clarear fotos?",
        answer:
          'Não, o editor de brilho de imagem é totalmente grátis, sem marcas d\'água nem cadastros. Você pode clarear ou escurecer fotos ilimitadas de até 20 MB por arquivo.',
      },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-contrast-editor',
    name: 'Editor de contraste de imagem',
    shortDescription: 'Aumente ou suavize o contraste das suas imagens com comparação ao vivo de antes e depois.',
    category: 'crop-edit',
    seoTitle: 'Editor de contraste de imagem grátis online',
    seoDescription:
      'Ajuste o contraste das suas fotos grátis online: de -100% a +100%, com 6 predefinições e comparação de antes e depois no seu navegador, sem cadastro hoje.',
    h1: 'Editor de contraste de imagem grátis online',
    subtitle:
      'Feita para fotógrafos, vendedores online e designers que corrigem fotos sem vida ou com neblina, esta ferramenta de contraste no navegador permite aprofundar as sombras e acentuar a separação tonal em segundos. Escolha predefinições com um clique, veja prévias em tela dividida e exporte localmente sem enviar nada a nenhum servidor.',
    howToSteps: [
      {
        title: 'Solte ou selecione uma imagem',
        description:
          'Envie uma foto JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB para a área de envio do editor, procure no disco ou cole diretamente com Ctrl+V.',
      },
      {
        title: 'Veja a prévia ao vivo no canvas',
        description:
          'Sua foto é carregada em uma prévia de canvas responsiva que começa com +20% de contraste, para você ver na hora como um toque sutil afeta a separação tonal.',
      },
      {
        title: 'Ajuste o controle de Nível de contraste ou as predefinições',
        description:
          'Arraste o controle de Nível de contraste de -100% Sem contraste até +100% Alto contraste, ou clique em Suave (-25%), Suavizado (-10%), Original (0%), Nítido (+20%), Marcante (+40%) ou Dramático (+70%).',
      },
      {
        title: 'Confira os detalhes com as ferramentas de comparação',
        description:
          'Alterne entre Depois, Antes e Comparação dividida (com o controle divisor vertical), ou clique em Comparar em tela cheia para inspecionar sombras e realces de perto.',
      },
      {
        title: 'Escolha o formato, a qualidade e baixe',
        description:
          'Selecione Original, JPG, PNG ou WebP em Formato de saída, ajuste a Qualidade (10%–100%) para formatos com perda e clique em Baixar imagem editada.',
      },
    ],
    features: [
      {
        title: 'Curva de contraste precisa',
        description: 'Expande ou comprime suavemente a faixa tonal sem mudanças bruscas de cor.',
      },
      {
        title: 'Predefinições com um clique',
        description: 'Teste na hora as predefinições Suave, Suavizado, Nítido, Marcante ou Dramático.',
      },
      {
        title: 'Modal interativo de antes e depois',
        description: 'Inspecione os detalhes finos de sombras e realces antes de baixar.',
      },
      {
        title: '100% no navegador',
        description: 'Processamento rápido no navegador, sem envios nem marcas d\'água.',
      },
    ],
    faqs: [
      {
        question: 'Que efeito visual mover o controle de contraste para valores positivos ou negativos produz?',
        answer:
          'Ao mover o controle acima de 0%, os tons escuros ficam mais escuros e os tons claros ficam mais claros em torno do ponto médio, para o assunto se destacar de fundos com neblina. Ao mover abaixo de 0%, os realces e as sombras se comprimem em direção a um cinza médio neutro, com uma estética fosca mais suave.',
      },
      {
        question: 'Quais predefinições rápidas o painel de Controles de contraste inclui?',
        answer:
          'São seis predefinições de um clique: Suave (-25%), Suavizado (-10%), Original (0%), Nítido (+20%), Marcante (+40%) e Dramático (+70%). Ao clicar em qualquer predefinição, o controle de Nível de contraste é ajustado na hora e a prévia ao vivo do canvas é atualizada.',
      },
      {
        question: 'Por que o editor de contraste começa em +20% ao enviar uma foto?',
        answer:
          'O editor inicia em Nítido (+20%) para você ver uma melhora tonal ativa imediatamente, em vez de uma imagem sem mudanças. Clique em Original (0%) ou em Redefinir, na parte superior dos Controles de contraste, a qualquer momento para voltar a zero.',
      },
      {
        question: 'Como o editor de contraste calcula as mudanças de pixel?',
        answer:
          'Ele aplica uma curva de contraste linear padrão pixel a pixel nos canais RGB sobre HTML5 Canvas, sem tocar no canal alfa. Ao calcular diretamente em ImageData, evita as divergências dos filtros CSS do navegador no Safari do iOS e em navegadores de celular.',
      },
      {
        question: 'Como reviso as sombras de antes e depois sem adivinhar no editor de contraste?',
        answer:
          'Use as abas Depois, Antes e Comparação dividida logo acima da prévia para arrastar uma linha divisória ao vivo de 0% a 100% sobre a sua imagem. Para uma inspeção de pixels mais próxima, clique em Comparar em tela cheia para abrir o modal de comparação lado a lado.',
      },
      {
        question: 'O contraste alto estoura as nuvens brilhantes ou esmaga as sombras pretas?',
        answer:
          'Ao subir o contraste com força em direção a +70% ou +100%, os realces quase brancos se aproximam do 255 puro e as sombras profundas do 0. Use a Comparação dividida para vigiar a textura sutil em camisas claras ou cabelos escuros e reduza para +15%–+40% se aparecer estouro.',
      },
      {
        question: 'Quais tipos de arquivo posso abrir no editor de contraste de imagem?',
        answer:
          'Você pode enviar arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB por arquivo. As fotos HEIC são decodificadas no seu navegador automaticamente antes de aparecer no canvas de edição.',
      },
      {
        question: 'Posso salvar logotipos PNG com fundo transparente depois de ajustar o contraste?',
        answer:
          'Sim, se você mantiver o formato Original em um PNG transparente ou selecionar PNG ou WebP como saída, a transparência alfa é preservada por completo. Só ao mudar o formato de saída para JPG as áreas transparentes são preenchidas sobre um fundo branco sólido.',
      },
      {
        question: 'A prévia do editor de contraste afeta a resolução final do download?',
        answer:
          'Não, a prévia na tela limita a escala de exibição a 1.000 px no lado mais longo para o arrastar do controle ser instantâneo. Ao clicar em Baixar imagem editada, a mesma fórmula de contraste é aplicada a 100% das dimensões em pixels originais.',
      },
      {
        question: 'O editor de contraste aceita capturas coladas da área de transferência?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V no Mac) em qualquer lugar da tela de envio para carregar uma imagem da área de transferência diretamente no editor. Ajustar o contraste entre +20% e +35% é ideal para deixar linhas fracas de gráficos ou texto cinza de interface mais nítidos.',
      },
      {
        question: 'Ajustar o contraste transforma uma foto colorida em preto e branco?',
        answer:
          'Não, o contraste muda a distância de luminância nos canais vermelho, verde e azul de forma proporcional, sem remover a informação de matiz. Note que um contraste positivo forte aumenta naturalmente a intensidade percebida da cor, enquanto o contraste negativo atenua as cores.',
      },
      {
        question: 'Que qualidade escolho ao exportar em JPG ou WebP no editor de contraste?',
        answer:
          'O controle de qualidade começa em 90%, o que mantém os gradientes tonais suaves sem faixas e os arquivos com peso moderado. Reduza para 75%–80% para envios web mais leves, ou mude para PNG para uma saída totalmente sem perda.',
      },
      {
        question: 'Como o arquivo baixado é nomeado depois de editar o contraste?',
        answer:
          'Seu arquivo salvo adiciona _contrast ao nome base original limpo, seguido da extensão do formato escolhido, por exemplo portrait_contrast.jpg. Seu arquivo original no disco nunca é modificado nem sobrescrito.',
      },
      {
        question: 'O editor de contraste pode focar fotos borradas ou fora de foco?',
        answer:
          'Aumentar o contraste amplia a separação de bordas entre áreas claras e escuras, o que pode fazer fotos com neblina parecerem bem mais claras. No entanto, ele ajusta curvas tonais em vez de aplicar nitidez por convolução de bordas, então um desfoque de movimento grave não pode ser refocado.',
      },
      {
        question: 'Minhas fotos são enviadas para servidores externos ao ajustar o contraste?',
        answer:
          'Não, cada cálculo de pixel acontece dentro da aba do seu navegador local com HTML5 Canvas e JavaScript. Retratos pessoais, documentos digitalizados e fotos de produto não publicadas nunca saem do seu computador ou celular.',
      },
      {
        question: 'Como o editor de contraste trata um GIF animado enviado?',
        answer:
          'O HTML5 Canvas mostra e ajusta o primeiro quadro do GIF e exporta uma única imagem estática no formato selecionado. Ajustes de contraste em GIFs animados de vários quadros não são suportados.',
      },
      {
        question: 'Em que o ajuste de contraste difere do ajuste de brilho?',
        answer:
          'O brilho desloca todos os pixels juntos para mais claro ou mais escuro de forma uniforme, enquanto o contraste amplia ou reduz a distância entre as sombras escuras e os realces brilhantes em torno do ponto cinza médio. Se uma foto escura parecer lavada depois de clarear, continue com a nossa ferramenta de contraste.',
      },
      {
        question: 'Posso usar o contraste negativo para suavizar sombras duras do meio-dia em retratos?',
        answer:
          'Sim, ao escolher Suave (-25%) ou Suavizado (-10%) você reduz as transições bruscas entre a pele iluminada pelo sol e as sombras escuras. Para brilho extremo ou um estilo editorial chapado, arraste o controle entre -30% e -50%.',
      },
      {
        question: 'Como carrego uma foto nova no editor de contraste sem recarregar a aba?',
        answer:
          'Clique no ícone de lixeira no canto superior direito do painel de prévia para apagar a imagem atual e voltar à área de envio. Isso libera a memória temporária do navegador e deixa o canvas pronto para o seu próximo arquivo.',
      },
      {
        question: 'O editor de contraste funciona no Safari do iOS e no Chrome do Android?',
        answer:
          'Sim, a matemática tonal é executada explicitamente dentro de matrizes de pixels ImageData de JavaScript, em vez de depender de filtros CSS de canvas que se comportam de forma inconsistente em navegadores de celular. Isso mantém uniformes as prévias de contraste e os downloads finais no iPhone, Android, macOS e Windows.',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: 'Editor de saturação de imagem',
    shortDescription: 'Aumente a intensidade da cor ou converta fotos para preto e branco, tudo no seu navegador.',
    category: 'crop-edit',
    seoTitle: 'Editor de saturação de imagem grátis online',
    seoDescription:
      'Aumente ou reduza a saturação das suas fotos grátis online: de -100% (preto e branco) a +100% (cores vivas), com 6 predefinições e vista dividida no navegador.',
    h1: 'Editor de saturação de imagem grátis online',
    subtitle:
      'Criada para fotógrafos, criadores de redes sociais e editores de e-commerce que equilibram a intensidade da cor, esta ferramenta de saturação no navegador ajusta a intensidade da cor de acordo com a luminosidade percebida. Passe com fluidez de um cinza nítido de -100% a tons vívidos de +100%, com comparação dividida e exportação local.',
    howToSteps: [
      {
        title: 'Carregue uma foto no editor',
        description:
          'Arraste e solte qualquer imagem JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB, escolha um arquivo do seu dispositivo ou cole com Ctrl+V.',
      },
      {
        title: 'Veja o aumento inicial de cor',
        description:
          'O editor carrega com o nível de saturação em +25%, para você ver na hora como um croma mais intenso realça as cores apagadas na prévia ao vivo.',
      },
      {
        title: 'Ajuste o nível de saturação ou clique em uma predefinição',
        description:
          'Arraste o controle de -100% Preto e branco até +100% Vívido, ou escolha Preto e branco (-100%), Suavizado (-40%), Original (0%), Intenso (+30%), Vívido (+60%) ou Hiper (+90%).',
      },
      {
        title: 'Inspecione os tons de pele com a Comparação dividida',
        description:
          'Alterne entre Depois, Antes ou Comparação dividida com o controle de varredura, ou clique em Comparar em tela cheia, para garantir que os vermelhos e os tons de pele pareçam equilibrados e não supersaturados.',
      },
      {
        title: 'Escolha o formato de saída e salve localmente',
        description:
          'Selecione Original, JPG, PNG ou WebP, ajuste a Qualidade (10%–100%) se não for PNG e clique em Baixar imagem editada.',
      },
    ],
    features: [
      {
        title: 'Saturação que preserva a luminosidade',
        description: 'Ajusta a intensidade da cor de acordo com o brilho percebido para que os tons se mantenham naturais.',
      },
      {
        title: 'De preto e branco a hipervívido',
        description: 'Deslize para -100% para um preto e branco instantâneo ou suba no positivo para cores intensas e vibrantes.',
      },
      {
        title: 'Prévia ao vivo de antes e depois',
        description: 'Alterne ou arraste a vista de comparação para não supersaturar os tons de pele.',
      },
      {
        title: 'Privada e grátis',
        description: 'Sem envios, sem contas e sem marcas d\'água.',
      },
    ],
    faqs: [
      {
        question: 'Como o editor de saturação preserva o brilho percebido da foto?',
        answer:
          'Cada pixel calcula a luminosidade percebida com os pesos ITU-R BT.709 (0,2126 R + 0,7152 G + 0,0722 B) e interpola os canais RGB em direção a esse ponto cinza neutro ou para longe dele. Assim, os vermelhos e verdes coloridos não ficam brilhantes demais nem turvos ao dessaturar.',
      },
      {
        question: 'Quais predefinições o painel de Controles de saturação traz?',
        answer:
          'São seis predefinições: Preto e branco (-100%), Suavizado (-40%), Original (0%), Intenso (+30%), Vívido (+60%) e Hiper (+90%). Ao clicar em qualquer botão, a prévia é atualizada na hora e depois você pode refinar com o controle.',
      },
      {
        question: 'Posso converter um retrato colorido em preto e branco com um clique no editor de saturação?',
        answer:
          'Sim, clique na predefinição Preto e branco (-100%) ou deslize o nível de saturação até o extremo esquerdo em -100%. Como usa a ponderação padrão de luminosidade, os tons de pele e a vegetação se convertem em valores monocromáticos de aparência natural, em vez de médias chapadas.',
      },
      {
        question: 'Por que o nível de saturação começa em +25% ao carregar um arquivo?',
        answer:
          'Começar em +25% mostra um aumento suave e imediato da intensidade assim que a sua foto aparece. Clique em Original (0%) ou no link Redefinir a qualquer momento se preferir ajustar para cima ou para baixo a partir do ponto neutro.',
      },
      {
        question: 'Como evito que os retratos fiquem laranja ou neon ao subir a saturação?',
        answer:
          'Mantenha-se na faixa de +15% a +35% para pessoas e mude para a aba Comparação dividida para varrer entre os tons de pele originais e o canvas com mais cor. O Comparar em tela cheia também permite inspecionar de perto bochechas, lábios e rótulos de produto antes de exportar.',
      },
      {
        question: 'O que acontece se eu subir a saturação de uma foto que já é monocromática ou cinza?',
        answer:
          'Os pixels em que os valores vermelho, verde e azul são iguais ficam exatamente sobre o eixo de luminosidade, então subir a saturação não pode inventar uma cor que não existe. Em imagens sépia ou em preto e branco com tom quente, a saturação positiva acentua o matiz de cor subjacente.',
      },
      {
        question: 'O editor de saturação aceita ícones PNG transparentes e figurinhas WebP?',
        answer:
          'Sim, os ajustes de pixel alteram a intensidade da cor RGB sem tocar no canal alfa de transparência. Mantenha o formato Original ou selecione PNG ou WebP em Formato de saída para conservar os fundos transparentes sem problemas.',
      },
      {
        question: 'O que acontece com a transparência se eu exportar uma figurinha dessaturada como JPG?',
        answer:
          'Como o JPG não aceita transparência alfa, os pixels transparentes são achatados automaticamente sobre um canvas branco sólido (#FFFFFF) antes da codificação JPEG. Escolha PNG ou WebP sempre que precisar conservar a transparência.',
      },
      {
        question: 'Quais arquivos e tamanho máximo o editor de saturação de imagem aceita?',
        answer:
          'Você pode soltar imagens JPG, PNG, WebP, HEIC/HEIF, GIF, BMP e SVG de até 20 MB cada. Os GIFs animados carregam seu quadro inicial no canvas para edição e são exportados como imagem estática.',
      },
      {
        question: 'Há diferença entre a nitidez da prévia e a resolução do arquivo baixado na saturação?',
        answer:
          'O canvas interativo mostra a prévia até 1.000 px na dimensão mais longa para os ajustes do controle parecerem fluidos e sem atraso. Ao exportar, é executada uma passagem de canvas em resolução total com a largura e altura originais do seu arquivo.',
      },
      {
        question: 'Quando vale a pena usar Suavizado (-40%) em vez de Preto e branco (-100%)?',
        answer:
          'Suavizado (-40%) acalma letreiros de neon brilhantes demais, fundos de cômodos carregados ou iluminação de produto dura, sem perder os matizes de cor sutis. Funciona bem para fotos principais de blog tranquilas ou fundos atrás de texto.',
      },
      {
        question: 'Posso colar imagens da área de transferência diretamente na ferramenta de saturação?',
        answer:
          'Sim, copie qualquer imagem ou captura para a área de transferência e pressione Ctrl+V (ou Cmd+V) na mensagem de envio. Ela abre na hora no editor, pronta para ajustar a cor.',
      },
      {
        question: 'Como o nome do arquivo exportado distingue as fotos editadas em saturação?',
        answer:
          'As exportações adicionam automaticamente _saturation ao nome de arquivo original limpo (por exemplo, sunset_saturation.jpg). Sua imagem de origem fica intacta no seu dispositivo.',
      },
      {
        question: 'Que qualidade é aplicada ao salvar como Original, JPG ou WebP na saturação?',
        answer:
          'As exportações JPG e WebP começam com uma qualidade padrão de 90%, que você pode ajustar entre 10% e 100% antes de baixar. Ao selecionar PNG, o controle de qualidade é ocultado porque o PNG sempre exporta sem perda.',
      },
      {
        question: 'As fotos enviadas são transmitidas para GPUs na nuvem ou servidores externos ao editar a saturação?',
        answer:
          'Nunca: cada cálculo de pixel é executado dentro da aba do seu navegador local, no hardware do seu próprio dispositivo. Nenhum dado de imagem, predefinição ou nome de arquivo é enviado pela rede.',
      },
      {
        question: 'Editar a saturação aqui remove os metadados EXIF ou GPS da câmera?',
        answer:
          'Sim, desenhar sobre HTML5 Canvas e escrever um novo blob de imagem omite os cabeçalhos EXIF originais, como números de série de câmera e tags de localização GPS. Isso ajuda a manter limpas de privacidade as fotos sociais compartilhadas.',
      },
      {
        question: 'Como redefino só o controle de saturação sem recarregar minha foto?',
        answer:
          'Clique no botão Redefinir no canto superior direito dos Controles de saturação para devolver o controle na hora a 0%. Você também pode clicar no botão de ajuste rápido Original (0%) logo abaixo do controle, sem enviar o arquivo de novo.',
      },
      {
        question: 'Posso realçar a folhagem e os céus de uma paisagem com Hiper (+90%) sem danificar a foto?',
        answer:
          'Hiper (+90%) duplica com suavidade as diferenças de croma até os limites dos canais RGB (0–255), com pôsteres de viagem dramáticos e produtos chamativos. Vigie os vermelhos e azuis brilhantes na Comparação dividida para garantir que as texturas finas de pétalas ou tecidos não estourem.',
      },
      {
        question: 'Posso converter um gráfico PNG colorido para WebP leve enquanto atenúo suas cores?',
        answer:
          'Sim, ajuste o nível de saturação desejado, selecione WEBP em Formato de saída e ajuste a qualidade para 80%–90%. Ao clicar em Baixar imagem editada, você obtém um WebP compacto e com a cor equilibrada em um só passo.',
      },
      {
        question: 'A ferramenta de saturação funciona offline e em telas de toque de celular?',
        answer:
          'Sim, os controles, os botões de predefinições e o controle de comparação de vista dividida respondem com fluidez aos gestos de toque no Safari do iOS e no Chrome do Android. Como o processamento não requer chamadas ao servidor, as edições funcionam mesmo com conexões de celular lentas.',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: 'Filtros de imagem',
    shortDescription: 'Aplique filtros em preto e branco, sépia, vintage, quente, frio e noir com intensidade ajustável.',
    category: 'crop-edit',
    seoTitle: 'Filtros de imagem grátis online – Vintage e sépia',
    seoDescription:
      'Aplique filtros de imagem grátis online: vintage, sépia, preto e branco, quente, frio e muito mais. Ajuste a intensidade do filtro de 0% a 100% sem cadastro.',
    h1: 'Filtros de imagem grátis online',
    subtitle:
      'Ideal para criadores, blogueiros e qualquer pessoa que queira dar às suas fotos do dia a dia uma estética coerente, estes filtros de imagem grátis online oferecem 11 graus de cor selecionados com miniaturas ao vivo. Combine qualquer filtro com fluidez com o controle de intensidade e salve cópias em resolução total no seu navegador.',
    howToSteps: [
      {
        title: 'Solte ou escolha uma imagem',
        description:
          'Envie qualquer foto JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB, escolha um arquivo do disco ou cole diretamente com Ctrl+V.',
      },
      {
        title: 'Explore as miniaturas de filtros ao vivo',
        description:
          'Veja a grade de 12 cartões de predefinições de filtro, com prévias reais em miniatura de Original mais 11 graus estilizados gerados a partir da sua imagem enviada.',
      },
      {
        title: 'Selecione um estilo predefinido',
        description:
          'Clique em Preto e branco, Sépia, Vintage, Quente, Frio, Alto contraste, Fosco suave, Dramático, Noir P&B, Hora dourada ou Inverter para aplicá-lo ao canvas principal.',
      },
      {
        title: 'Combine a força com a intensidade do filtro',
        description:
          'Arraste o controle de intensidade do filtro entre 0% e 100% para suavizar graus fortes e transformá-los em lavagens de cor sutis (ou clique em Redefinir para voltar a Original).',
      },
      {
        title: 'Segure o original ou abra o modal Comparar',
        description:
          'Mantenha pressionado Segure para ver o original para verificações A/B instantâneas, ou clique em Comparar para abrir o modal interativo de inspeção com controle dividido.',
      },
      {
        title: 'Escolha o formato de saída e baixe',
        description:
          'Selecione Original, JPG, PNG ou WebP, ajuste a Qualidade (10%–100%) se necessário e clique em Baixar imagem com filtro.',
      },
    ],
    features: [
      {
        title: 'Mais de 11 predefinições de filtro selecionadas',
        description: 'Inclui Preto e branco, Sépia, Vintage, Quente, Frio, Alto contraste, Fosco suave, Dramático, Noir P&B, Hora dourada e Inverter.',
      },
      {
        title: 'Controle de intensidade suave',
        description: 'Combine qualquer filtro com fluidez entre 0% e 100%, em vez de ficar com valores padrão bruscos.',
      },
      {
        title: 'Faixa de miniaturas ao vivo',
        description: 'Veja como cada filtro fica na sua foto real antes de escolher um.',
      },
      {
        title: 'Canvas 100% no navegador',
        description: 'Funciona pronto sem conexão no seu navegador, sem envios para servidores.',
      },
    ],
    faqs: [
      {
        question: 'Quais 11 estilos de filtro posso ver na grade de filtros de imagem?',
        answer:
          'Junto com Original, a grade gera miniaturas ao vivo de Preto e branco, Sépia, Vintage, Quente, Frio, Alto contraste, Fosco suave, Dramático, Noir P&B, Hora dourada e Inverter. Cada miniatura é mostrada diretamente a partir da sua foto enviada, não com ícones de amostra genéricos.',
      },
      {
        question: 'Como funciona o controle de intensidade do filtro entre 0% e 100%?',
        answer:
          'Ao fixar a intensidade do filtro abaixo de 100%, os valores de pixels RGB filtrados são misturados de forma linear de volta aos seus pixels originais. Por exemplo, fixar Vintage ou Hora dourada em 45% aplica uma lavagem de filme suave sem dominar os tons naturais da pele.',
      },
      {
        question: 'Por que a ferramenta de filtros seleciona Vintage em 100% ao soltar uma foto?',
        answer:
          'Ela começa com Vintage em intensidade máxima para você ver um efeito pronto no canvas principal na hora ao enviar a foto. Basta clicar em qualquer outro cartão de predefinição ou em Redefinir para voltar a Original.',
      },
      {
        question: 'Em que os filtros Preto e branco e Noir P&B se diferenciam?',
        answer:
          'Preto e branco converte as cores em tons equilibrados de preto e branco com pesos naturais de luminosidade, sem alterar o contraste. Noir P&B adiciona um forte aumento de contraste de 1,65× sobre a conversão para preto e branco, com sombras escuras intensas e realces cinematográficos brilhantes.',
      },
      {
        question: 'Como Sépia, Vintage, Fosco suave e Hora dourada se diferenciam visualmente?',
        answer:
          'Sépia desloca toda a imagem para tons marrons monocromáticos clássicos, enquanto Vintage mistura sépia quente com as cores originais e um calor tênue e desbotado. Fosco suave eleva os pretos escuros a cinzas ardósia suaves, e Hora dourada intensifica os vermelhos e amarelos quentes enquanto esfria os azuis das sombras.',
      },
      {
        question: 'Como o botão Segure para ver o original agiliza a edição?',
        answer:
          'Ao manter pressionado Segure para ver o original com o mouse ou o dedo, o canvas volta temporariamente à sua foto sem edição e mostra um selo Original. Ao soltar, a prévia filtrada é restaurada na hora, para você comparar A/B em milissegundos.',
      },
      {
        question: 'Posso inspecionar divisões lado a lado antes de salvar um filtro?',
        answer:
          'Sim, clique no botão Comparar junto a Segure para ver o original para abrir o modal completo de comparação de filtros. Ele mostra os tamanhos em bytes original e filtrado, além de um controle interativo de varredura dividida.',
      },
      {
        question: 'As imagens baixadas são processadas no mesmo tamanho reduzido que as miniaturas de filtros?',
        answer:
          'Não, a grade de predefinições usa miniaturas minúsculas de 120 px para prévias instantâneas e o espaço de trabalho principal tem um limite de 1.000 px para maior fluidez. Ao clicar em Baixar imagem com filtro, é processada a resolução total em pixels originais sobre HTML5 Canvas.',
      },
      {
        question: 'Quais arquivos e tamanho máximo esses filtros de foto aceitam?',
        answer:
          'Você pode soltar arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB por envio. Os formatos de saída aceitos são Original, JPG, PNG e WebP.',
      },
      {
        question: 'Os filtros quentes ou Inverter conservam a transparência de um logotipo PNG?',
        answer:
          'Toda a matemática de pixels dos filtros altera só os canais vermelho, verde e azul, sem tocar na transparência alfa. Mantenha a saída Original, PNG ou WebP para conservar os fundos transparentes; ao escolher JPG, as áreas transparentes são preenchidas com branco sólido.',
      },
      {
        question: 'Para que o filtro Inverter é mais útil nos filtros de imagem?',
        answer:
          'Inverter subtrai cada canal RGB de 255 para produzir um negativo exato de cor da sua imagem. Os desenvolvedores o usam para inverter diagramas de modo escuro em documentos brancos, e os fotógrafos para pré-visualizar negativos de filme digitalizados.',
      },
      {
        question: 'Os efeitos de filtro são consistentes no Chrome, Firefox e Safari do iPhone?',
        answer:
          'Sim, as 11 predefinições são calculadas diretamente em loops de pixels ImageData de JavaScript, em vez de depender de cadeias CSS ctx.filter. Isso garante cores idênticas no Safari do iOS, Chrome do Android e navegadores de desktop.',
      },
      {
        question: 'Posso combinar dois filtros, como Frio mais Fosco suave, na mesma imagem?',
        answer:
          'Cada predefinição é calculada diretamente a partir da sua imagem original limpa em uma só passagem, então ao clicar em um novo cartão você muda de predefinição sem degradar a qualidade. Para combinar dois graus, baixe seu primeiro PNG filtrado e solte-o de novo para uma segunda passagem.',
      },
      {
        question: 'Como os nomes de arquivo de saída são etiquetados para lembrar o filtro exportado?',
        answer:
          'O exportador adiciona o ID da predefinição ao seu nome base de arquivo limpo, como photo_golden-hour.jpg ou photo_noir.webp. Isso facilita distinguir dois ou três aspectos de teste exportados em uma mesma pasta.',
      },
      {
        question: 'Enviar uma foto para aplicar filtros a envia para um servidor externo?',
        answer:
          'Não, as miniaturas, as prévias ao vivo do canvas e as exportações finais são executadas por completo dentro da memória da aba do seu navegador. Nenhuma foto é transferida para servidores remotos nem guardada em registros na nuvem.',
      },
      {
        question: 'Posso usar filtros Frio ou Alto contraste em capturas coladas da área de transferência?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V) na área de envio para carregar qualquer captura copiada na hora. Alto contraste e Noir P&B são especialmente eficazes para clarear texto fraco em digitalizações de documentos.',
      },
      {
        question: 'Como a ferramenta de filtros trata um GIF animado enviado?',
        answer:
          'O HTML5 Canvas extrai o primeiro quadro do GIF para as miniaturas de prévia e exporta uma imagem filtrada estática. A filtragem de GIFs animados de vários quadros não é feita por esta ferramenta.',
      },
      {
        question: 'Como configuro a qualidade ao exportar arquivos WebP ou JPG com filtro?',
        answer:
          'O ajuste padrão de 90% conserva limpo o grão de filme sutil e as sombras foscas sem arquivos grandes. Se você precisa de conservação sem perda para continuar editando, escolha PNG em Formato de saída.',
      },
      {
        question: 'Aplicar um filtro remove as tags EXIF e GPS sensíveis da câmera?',
        answer:
          'Sim, desenhar os pixels filtrados em um canvas HTML5 Canvas novo cria um arquivo de imagem limpo sem cabeçalhos EXIF. As tags de modelo de câmera, os carimbos de data e hora e as coordenadas GPS embutidas são excluídas automaticamente ao baixar.',
      },
      {
        question: 'Como troco para outra foto rápido depois de baixar uma imagem filtrada?',
        answer:
          'Clique no ícone de lixeira no canto superior direito do painel Prévia de filtro para apagar sua imagem atual e voltar à área de envio. Toda a memória de prévia é liberada na hora para a sua próxima foto.',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: 'Adicionar fundo a imagem',
    shortDescription: 'Coloque imagens transparentes ou com moldura sobre fundos sólidos, degradês ou desfocados.',
    category: 'create',
    seoTitle: 'Adicionar fundo a imagem grátis online – Sólido e degradê',
    seoDescription:
      'Adicione fundo às suas imagens grátis online: cores sólidas, degradês de duas cores ou foto desfocada. Exporte em 1:1, 16:9 ou 4:5, tudo no seu navegador.',
    h1: 'Adicionar fundo a imagem online',
    subtitle:
      'Feita para vendedores de e-commerce, designers de logotipos e editores de redes sociais, esta ferramenta facilita adicionar fundo às imagens enviadas ou a recortes PNG transparentes. Escolha amostras de cor sólida, degradês de duas cores em ângulo ou fundos desfocados com o tamanho de publicações quadradas, de story ou panorâmicas.',
    howToSteps: [
      {
        title: 'Envie uma foto ou um PNG transparente',
        description:
          'Solte qualquer imagem JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB na área de envio, selecione-a do disco ou cole com Ctrl+V.',
      },
      {
        title: 'Escolha Cor sólida, Degradê ou Foto desfocada',
        description:
          'Escolha Cor sólida com o seletor de cor e 6 amostras rápidas, Degradê com duas cores e um controle de ângulo de 0° a 360°, ou Foto desfocada com um raio de desfoque de 4 a 50 px.',
      },
      {
        title: 'Selecione uma proporção de tela',
        description:
          'Clique em Orig, quadrado 1:1, panorâmico 16:9, story vertical 9:16 ou retrato social 4:5 em Proporção da tela.',
      },
      {
        title: 'Ajuste a escala, o arredondamento e a sombra',
        description:
          'Deslize Escala da imagem (40%–100%) para controlar o preenchimento em torno do seu assunto, Arredondamento (0%–30%) para cantos suaves e ative Sombra atrás da imagem.',
      },
      {
        title: 'Escolha o formato de saída e baixe',
        description:
          'Confira as dimensões exatas em pixels de saída abaixo da prévia, escolha PNG, JPG ou WEBP e clique em Baixar imagem.',
      },
    ],
    features: [
      {
        title: '3 modos de fundo',
        description: 'Escolha Cor sólida, Degradê de duas cores ou Fundo de foto desfocada para fotos verticais ou horizontais com faixas.',
      },
      {
        title: 'Proporções sociais e web',
        description: 'Ajuste qualquer foto em molduras Original, Quadrado 1:1, Panorâmico 16:9, Story 9:16 ou Retrato 4:5.',
      },
      {
        title: 'Escala, raio e sombra em primeiro plano',
        description: 'Adicione espaço, cantos arredondados e sombras suaves em torno da sua imagem principal.',
      },
      {
        title: 'Zero envios',
        description: 'É exibida localmente com HTML5 Canvas e download instantâneo.',
      },
    ],
    faqs: [
      {
        question: 'Quando vale a pena usar o modo Foto desfocada para adicionar fundo a uma imagem?',
        answer:
          'O modo Foto desfocada preenche as margens vazias da tela em torno de uma foto vertical de celular com uma cópia ampliada e desfocada da sua própria imagem, mais um tom ardósia suave de 12%. Permite colocar fotos verticais 9:16 dentro de banners 16:9 do YouTube ou quadrados 1:1 sem barras pretas feias nem recortes.',
      },
      {
        question: 'Como adiciono um fundo de estúdio branco limpo atrás de um PNG transparente?',
        answer:
          'Selecione Cor sólida em Tipo de fundo, clique na amostra branca #ffffff (ou digite qualquer cor hexadecimal) e ajuste a escala da imagem se quiser espaço em torno do produto. Exporte como JPG para envios leves a lojas online ou PNG para bordas nítidas.',
      },
      {
        question: 'Posso personalizar degradês lineares de vários ângulos atrás de logotipos ou capturas?',
        answer:
          'Sim, mude o tipo de fundo para Degradê para escolher a Cor 1 e a Cor 2 com os seletores de cor e depois arraste o controle de ângulo entre 0° e 360°. É ideal para transformar capturas de software simples em cartões principais polidos para páginas iniciais.',
      },
      {
        question: 'Quais proporções de tela predefinidas a ferramenta para adicionar fundo oferece?',
        answer:
          'Você pode mudar na hora entre Orig (corresponde às dimensões da sua foto), 1:1 (publicações quadradas e cartões de produto) e 16:9 (miniaturas e banners do YouTube). Também há ajustes verticais para 9:16 (Stories e Reels) e 4:5 (retratos de feed do Instagram).',
      },
      {
        question: 'Como as dimensões finais em pixels são determinadas ao mudar a proporção da tela?',
        answer:
          'O exportador fixa o lado mais longo da tela de saída na dimensão original mais longa da sua foto, ou em pelo menos 1.200 px, e depois calcula o lado mais curto de forma limpa a partir da proporção escolhida. Por exemplo, escolher 1:1 em um ícone de 800×600 produz um gráfico nítido de 1200×1200.',
      },
      {
        question: 'Como a escala da imagem afeta as margens em torno da minha foto principal?',
        answer:
          'A escala da imagem (40% a 100%, com 85% por padrão) define a porcentagem máxima de caixa dentro da tela de fundo que a sua foto principal pode ocupar sem perder a proporção. Fixar 100% preenche de borda a borda em proporções coincidentes, enquanto 60%–80% mostra uma moldura generosa de fundo.',
      },
      {
        question: 'O arredondamento suaviza os cantos de PNGs transparentes ou só de fotos retangulares?',
        answer:
          'O arredondamento (0%–30%) recorta a área retangular de colocação em primeiro plano com curvas de canto quadráticas, o que arredonda com limpeza capturas e fotos retangulares. Em recortes transparentes cujo assunto fica bem dentro das bordas da imagem, subir o arredondamento deixa o recorte interior intacto enquanto arredonda sua caixa de sombra.',
      },
      {
        question: 'Como a sombra se comporta com logotipos transparentes em comparação com fotos sólidas?',
        answer:
          'Em fotos ou capturas sólidas, ela projeta uma sombra de elevação suave e sutil, proporcional ao tamanho da tela, atrás do cartão arredondado em primeiro plano. Em imagens com transparência alfa, usa um preenchimento de fundo tênue de 1% dentro da caixa recortada para que o primeiro plano se destaque com limpeza sobre fundos brilhantes ou degradês.',
      },
      {
        question: 'Quais tipos de arquivo posso importar para adicionar um fundo?',
        answer:
          'Você pode enviar imagens JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB. Os GIFs animados desenham seu quadro inicial como camada principal.',
      },
      {
        question: 'Esta ferramenta remove automaticamente o fundo existente de uma foto?',
        answer:
          'Não, este editor coloca a sua imagem enviada (recorte transparente, logotipo ou foto completa) sobre uma nova tela de fundo, em vez de executar segmentação de recorte com IA. Se você tem uma foto com uma cena carregada que precisa apagar primeiro, passe-a pela nossa ferramenta Remover fundo e depois solte o PNG transparente aqui.',
      },
      {
        question: 'Quais formatos de saída adicionar fundo aceita e com qual qualidade de compressão?',
        answer:
          'Você pode exportar composições terminadas como PNG, JPG ou WEBP com uma qualidade de exportação de canvas de 92% (codificação sem perda para PNG). As dimensões exatas em pixels de saída aparecem logo abaixo do canvas de prévia antes de baixar.',
      },
      {
        question: 'Quais amostras de cor rápidas o modo de cor sólida inclui?',
        answer:
          'Junto com o seletor de cor nativo completo, há seis amostras em que se pode clicar e testar em um só toque: branco puro (#ffffff), ardósia escuro (#0f172a), azul de marca (#2563eb), esmeralda (#10b981), creme quente (#fef3c7) e cinza suave (#f1f5f9). Você pode tocar em qualquer amostra para vê-la na hora e depois refiná-la com o seletor de cor.',
      },
      {
        question: 'Quão suave é o controle de raio de desfoque do fundo no modo Foto desfocada?',
        answer:
          'Você pode ajustar o raio de desfoque do fundo de 4 px (textura de fundo levemente suavizada) até 50 px (cor ambiente cremosa e desfocada). O raio de desfoque é escalado de forma dinâmica para coincidir com suas dimensões de exportação em resolução total.',
      },
      {
        question: 'Posso colar capturas diretamente da área de transferência para emoldurá-las em um degradê?',
        answer:
          'Sim, copie uma captura ou um gráfico e pressione Ctrl+V (ou Cmd+V) na área de envio para carregá-lo diretamente na tela de fundo. Combinar um fundo degradê com escala de 85%, arredondamento leve e sombra faz as capturas de documentação se destacarem.',
      },
      {
        question: 'Os logotipos, maquetes ou retratos são enviados para um servidor ao adicionar fundo?',
        answer:
          'Não, a geração de fundo, o filtro de desfoque, as sombras e a codificação de arquivos são executados localmente dentro do seu navegador com HTML5 Canvas. Nada é transmitido pela internet nem conservado de forma remota.',
      },
      {
        question: 'Como os arquivos baixados com fundo adicionado são nomeados?',
        answer:
          'Os arquivos exportados conservam seu nome base limpo e adicionam _background junto com a extensão do formato escolhido, como product-cutout_background.png ou banner_background.webp. Sua imagem de origem no disco fica intacta.',
      },
      {
        question: 'Exportar com fundo remove os metadados EXIF de localização das fotos de câmera?',
        answer:
          'Sim, compor camadas sobre um canvas HTML5 Canvas novo e codificar uma imagem nova exclui automaticamente os cabeçalhos EXIF originais. As coordenadas GPS, os números de série de câmera e os carimbos de data e hora nunca são levados ao arquivo baixado.',
      },
      {
        question: 'Posso pré-visualizar o modo Foto desfocada em ícones pequenos ou gráficos SVG?',
        answer:
          'Sim, os logotipos SVG autocontidos ou os gráficos PNG pequenos são escalados sobre o fundo de capa e recebem um desfoque gaussiano suave atrás do primeiro plano vetorial nítido. Escolha um raio de desfoque de 25–45 px para suavizar bordas vetoriais nítidas em um halo ambiente suave.',
      },
      {
        question: 'Por que o modo Foto desfocada adiciona um tom sutil sobre o fundo desfocado?',
        answer:
          'Um véu escuro ardósia suave a 12% de opacidade é pintado diretamente sobre a camada de fundo desfocada, antes de desenhar o assunto em primeiro plano. Esse véu de contraste sutil ajuda os bordos claros, os rótulos brancos e os recortes transparentes a se manterem legíveis sobre céus brilhantes ou padrões carregados.',
      },
      {
        question: 'Como substituo a foto principal sem perder meu fluxo de trabalho preferido?',
        answer:
          'Clique em Trocar imagem no canto superior direito do painel Prévia de fundo para apagar a tela atual e enviar outro recurso. Como a ferramenta funciona de forma nativa em navegadores de desktop e celular, trocar de imagem leva só um momento.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: 'Divisor de imagens',
    shortDescription: 'Divida imagens em blocos de grade N×M ou em tiras e baixe-as em um arquivo ZIP.',
    category: 'create',
    seoTitle: 'Divisor de imagens grátis online – Grade e ZIP',
    seoDescription:
      'Divida imagens grátis online em grades N×M ou tiras para Instagram e carrosséis. Veja as linhas de corte e baixe todas as peças em um arquivo ZIP no navegador.',
    h1: 'Divisor de imagens online',
    subtitle:
      'Criada para planejadores de grade do Instagram, designers de interface e criadores de impressos, este divisor de imagens no navegador divide panoramas amplos ou fotos quadradas em até 100 peças exatas de 10×10 ou em tiras. Inspecione as linhas de corte numeradas ao vivo e salve cada corte em resolução total separadamente ou em um download ZIP.',
    howToSteps: [
      {
        title: 'Solte uma imagem para cortar',
        description:
          'Envie qualquer foto JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB (ou cole com Ctrl+V). As peças iniciais de divisão 3×3 são geradas automaticamente ao enviá-la.',
      },
      {
        title: 'Inspecione a prévia de linhas de corte numeradas',
        description:
          'Veja a grade sobreposta com linhas tracejadas sobre a sua foto à esquerda, que mostra os limites exatos das peças numeradas (de 1 a N) antes de cortar as exportações finais.',
      },
      {
        title: 'Escolha o layout de divisão ou os ajustes rápidos',
        description:
          'Selecione Grade (N×M), Tiras horizontais ou Tiras verticais, digite Linhas e Colunas de 1 a 10, ou clique em 2×2, 3×3 Instagram, 1×3 Carrossel ou 4×1 Tiras.',
      },
      {
        title: 'Escolha o formato de saída e a qualidade da peça',
        description:
          'Selecione Orig, JPG, PNG ou WEBP e ajuste a Qualidade da peça (10%–100%, 92% por padrão) para saídas que não sejam PNG.',
      },
      {
        title: 'Gere cortes em resolução total',
        description:
          'Clique em Dividir em N peças sempre que atualizar Linhas, Colunas ou o formato para recortar todas as peças em limites exatos de pixels em resolução total.',
      },
      {
        title: 'Salve peças individuais ou o arquivo ZIP',
        description:
          'Use Baixar em qualquer cartão de peça numerada L·C abaixo, ou clique em Baixar todas as peças (ZIP) para baixar toda a grade numerada junta.',
      },
    ],
    features: [
      {
        title: 'Modos flexíveis de grade e tiras',
        description: 'Divida em grades personalizadas de Linhas × Colunas, linhas horizontais ou cortes verticais.',
      },
      {
        title: 'Prévia de linhas de corte ao vivo',
        description: 'Veja os limites de peças numeradas sobrepostos à sua imagem antes de dividir.',
      },
      {
        title: 'Prévias instantâneas de peças e ZIP',
        description: 'Inspecione cada peça gerada e baixe todas as peças com nomes limpos (linha_coluna) em um só ZIP.',
      },
      {
        title: 'Corte em resolução total',
        description: 'Cada peça é cortada com limpeza a partir do canvas original em resolução total.',
      },
    ],
    faqs: [
      {
        question: 'Como o divisor de imagens constrói uma grade 3×3 limpa para o Instagram?',
        answer:
          'Clique no botão de ajuste predefinido 3×3 Instagram (ou fixe o modo Grade com 3 linhas e 3 colunas) e clique em Dividir em 9 peças. Cada peça é exportada numerada em sequência desde a linha 1 coluna 1 em cima à esquerda até a linha 3 coluna 3 embaixo à direita, então ao enviá-las em ordem inversa você constrói um mosaico de perfil sem costuras.',
      },
      {
        question: 'Até que tamanho de grade posso cortar em uma só execução com o divisor?',
        answer:
          'Tanto Linhas (cortes horizontais) quanto Colunas (cortes verticais) aceitam valores de 1 a 10, o que permite de 2 cortes até uma grade de 10×10 com um total de 100 peças individuais. Como cada corte usa limites de pixels arredondados sobre a sua imagem original, as peças vizinhas se alinham de borda a borda sem pixels faltantes.',
      },
      {
        question: 'Em que as tiras horizontais e verticais diferem do modo Grade (N×M)?',
        answer:
          'As tiras horizontais fixam as colunas em 1 e cortam banners horizontais de largura total empilhados de cima para baixo, útil para capturas longas de páginas web ou seções de infográficos altos. As tiras verticais fixam as linhas em 1 e dividem panoramas amplos lado a lado em slides de carrossel deslizáveis do Instagram ou LinkedIn.',
      },
      {
        question: 'Quais predefinições de divisão com um clique o divisor inclui?',
        answer:
          'Quatro botões de ajuste predefinido estão logo abaixo dos campos numéricos: 2×2 (4 quadrantes), 3×3 Instagram (9 quadrados de grade), 1×3 Carrossel (3 tiras verticais deslizáveis) e 4×1 Tiras (4 faixas horizontais). Ao clicar em qualquer ajuste, a prévia de linhas de corte ao vivo é atualizada na hora.',
      },
      {
        question: 'As peças geradas são reduzidas ou recortadas nas dimensões originais em pixels?',
        answer:
          'Cada peça é cortada diretamente da largura e altura em pixels completos da sua imagem de origem sobre HTML5 Canvas, sem mudar seu tamanho. Por exemplo, dividir um panorama de 3000×1000 em tiras de carrossel 1×3 produz três peças nítidas de 1000×1000.',
      },
      {
        question: 'O que acontece se a largura ou altura da minha imagem não se divide em partes iguais?',
        answer:
          'As coordenadas de corte são calculadas de forma proporcional com Math.round sobre toda a largura e altura, para que os cortes vizinhos compartilhem bordas exatas de pixels inteiros sem buracos nem sobreposições. Algumas peças podem diferir em 1 pixel ao dividir números ímpares (como 1000 px em 3 colunas: 333, 334, 333).',
      },
      {
        question: 'Preciso lembrar qual peça vai onde depois de baixar o ZIP do divisor?',
        answer:
          'Não, cada corte mostra seu selo de linha e coluna (como L1·C2) e suas dimensões exatas em pixels abaixo do seu cartão de prévia. Dentro do arquivo ZIP, os nomes seguem <base>_l<linha>_c<coluna>.<ext> (por exemplo, panorama_r1_c1.jpg, panorama_r1_c2.jpg) em ordem de leitura.',
      },
      {
        question: 'As mudanças em linhas, colunas ou formato atualizam as peças geradas automaticamente?',
        answer:
          'Ao enviar um arquivo pela primeira vez, as peças são geradas automaticamente com a configuração ativa de layout. Depois de editar Linhas, Colunas ou Formato de saída, a prévia de linhas de corte é atualizada na hora e ao clicar em Dividir em N peças os cartões de peças baixáveis e o ZIP são regenerados.',
      },
      {
        question: 'Quais formatos de entrada funcionam no divisor de imagens?',
        answer:
          'Envie imagens JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB cada. Ao selecionar Orig em Formato de saída, é conservado o formato de origem (ou HEIC/SVG/BMP é convertido com limpeza para PNG/JPG padrão).',
      },
      {
        question: 'Dividir uma folha de sprites PNG transparente conserva os fundos transparentes?',
        answer:
          'Sim, cortar recursos PNG ou WebP transparentes mantém a transparência alfa completa quando o formato de saída é Orig, PNG ou WEBP. Se você mudar explicitamente o formato de saída para JPG, os canvases de peças preenchem a transparência com branco sólido (#FFFFFF).',
      },
      {
        question: 'Posso colar uma captura longa da área de transferência e dividi-la em seções imprimíveis?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V) na área de envio para soltar uma captura da área de transferência diretamente no divisor. Escolha Tiras horizontais e fixe 3–6 linhas para dividir registros de chat altos ou capturas web em páginas manejáveis.',
      },
      {
        question: 'O controle de qualidade da peça aparece para as peças PNG do divisor?',
        answer:
          'Não, as peças PNG sempre são codificadas sem perda, então a Qualidade da peça (10%–100%, com 92% por padrão) é mostrada automaticamente só quando o seu formato resolvido é JPG ou WebP. Isso garante bordas nítidas em sprites, maquetes de interface e divisões de texto.',
      },
      {
        question: 'Como o download ZIP em massa do divisor de imagens é nomeado?',
        answer:
          'Ao clicar em Baixar todas as peças (ZIP), todas as peças geradas são empacotadas em um só arquivo chamado <base>_<linhas>x<colunas>_tiles.zip, como hero_3x3_tiles.zip. Você também pode baixar peças individuais com o botão Baixar de cada cartão.',
      },
      {
        question: 'As fotos são enviadas para servidores externos durante o corte em grade?',
        answer:
          'Não, os cálculos de corte, o corte em canvas, as prévias de peças e a compressão ZIP acontecem dentro da memória local do navegador. Suas obras privadas, diagramas e fotos pessoais nunca saem do seu dispositivo.',
      },
      {
        question: 'Dividir remove as tags EXIF de câmera e os metadados GPS de localização?',
        answer:
          'Sim, cortar sub-regiões retangulares em peças novas de HTML5 Canvas gera blobs de imagem limpos sem cabeçalhos EXIF. Por isso, os detalhes de câmera e as coordenadas GPS da foto original nunca são copiados nas peças individuais.',
      },
      {
        question: 'O que acontece com um GIF animado ao dividi-lo em peças de grade?',
        answer:
          'O HTML5 Canvas extrai e corta o primeiro quadro do GIF em peças estáticas com o formato de saída escolhido. Dividir GIFs animados de vários quadros mantendo a animação não é suportado aqui.',
      },
      {
        question: 'Por que minhas peças 3×3 podem diferir levemente em proporção se minha foto não é quadrada?',
        answer:
          'O divisor divide a sua imagem de origem de forma proporcional ao longo da sua largura e altura existentes, sem distorcer nem recortar bordas. Se você quer peças quadradas 1:1 para uma grade do Instagram, recorte sua imagem para 1:1 primeiro na nossa ferramenta Cortador de imagens antes de dividir 3×3.',
      },
      {
        question: 'Como substituo a imagem depois de baixar uma grade dividida?',
        answer:
          'Clique em Trocar imagem no canto superior direito do cartão Prévia de linhas de corte para liberar as URLs de peças existentes da memória e carregar uma imagem nova. Não é preciso recarregar a página.',
      },
      {
        question: 'Os desenvolvedores de jogos podem usar esta ferramenta para cortar folhas de ícones?',
        answer:
          'Sim, as folhas de sprites dispostas em linhas e colunas uniformes são cortadas com precisão quando você fixa contagens de Linhas × Colunas coincidentes e mantém a saída PNG. Cada ícone é salvo ordenado por sua coordenada de linha e coluna dentro do ZIP.',
      },
      {
        question: 'O divisor de imagens funciona em iPhone, iPad e telefones Android?',
        answer:
          'Sim, as grades responsivas, os campos numéricos de linhas e colunas e o empacotamento ZIP no navegador funcionam diretamente no Safari do iOS e no Chrome do Android. As divisões grandes de 10×10 em fotos de muitos megapixels rodam mais rápido no desktop ou em navegadores de celular modernos.',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: 'Alterador de DPI de imagem',
    shortDescription: 'Altere os metadados DPI de JPEG e PNG (72, 150, 300 ou personalizado) sem perder qualidade.',
    category: 'developer',
    seoTitle: 'Alterar DPI de imagem grátis online – 300 DPI',
    seoDescription:
      'Altere o DPI de imagens JPG e PNG grátis online para 72, 150, 300 ou 600 DPI sem perder qualidade. Metadados verificados e processo em lote no seu navegador.',
    h1: 'Alterar DPI de imagem grátis',
    subtitle:
      'Criada para designers, gráficas, autores e estudantes que preparam arquivos para portais de impressão, este alterador de DPI de imagem sem perdas atualiza os cabeçalhos de resolução de JPEG e PNG sem tocar nos dados de pixels. Mude para 72, 96, 150, 300 ou 600 DPI, ou para um DPI personalizado, em lotes com leitura verificada.',
    howToSteps: [
      {
        title: 'Escolha ou ajuste primeiro seu DPI de destino (ou a qualquer momento)',
        description:
          'Clique em uma predefinição: 72 DPI (Tela), 96 DPI (Windows), 150 DPI (Impressão de rascunho), 300 DPI (Impressão de alta qualidade) ou 600 DPI (Arquivo), ou digite qualquer DPI personalizado de 1 a 2.400.',
      },
      {
        title: 'Envie uma ou várias imagens',
        description:
          'Solte arquivos JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB cada na área de envio (ou cole com Ctrl+V). Os arquivos são processados na hora com o DPI escolhido.',
      },
      {
        title: 'Confira Antes, DPI verificado e o método de processamento',
        description:
          'Cada cartão mostra o DPI original em comparação com o DPI de saída verificado, junto com um selo que confirma Atualização sem perdas do cabeçalho JPEG, Atualização sem perdas do pHYs PNG ou Convertido para PNG com DPI pHYs.',
      },
      {
        title: 'Mude o DPI de forma dinâmica nos arquivos na fila se necessário',
        description:
          'Clique em outra predefinição de DPI de destino ou digite um novo DPI personalizado e pressione Aplicar [X] DPI para reprocessar automaticamente cada arquivo da sua fila.',
      },
      {
        title: 'Baixe arquivos individuais ou um ZIP em lote',
        description:
          'Clique em Baixar nos cartões de resultados individuais (com nome <base>_<dpi>dpi.<ext>) ou em Baixar tudo (ZIP) quando houver dois ou mais arquivos prontos.',
      },
    ],
    features: [
      {
        title: 'Edição real de cabeçalho JPEG e PNG sem perdas',
        description: 'Atualiza a densidade JFIF APP0/EXIF em JPEG e os blocos pHYs (com CRC32 válido) em PNG sem tocar nos pixels da imagem.',
      },
      {
        title: 'Leitura verificada de antes e depois',
        description: 'Analisa de novo o arquivo de saída automaticamente para você ver o DPI verificado exato guardado no arquivo.',
      },
      {
        title: 'Processamento de DPI em lote',
        description: 'Atualize dezenas de gráficos prontos para imprimir de uma vez e exporte-os em um arquivo ZIP.',
      },
      {
        title: 'Suporte a WebP/HEIC',
        description: 'Os formatos sem DPI podem ser convertidos com limpeza para PNG sem perda com o bloco pHYs DPI exato embutido.',
      },
    ],
    faqs: [
      {
        question: 'Como o alterador de DPI edita arquivos JPEG e PNG sem perder qualidade?',
        answer:
          'Em vez de decodificar e recomprimir pixels no canvas, ele corrige diretamente os segmentos binários de metadados: atualiza ou insere as tags de resolução JFIF APP0 e EXIF IFD0 em JPEG, e escreve um bloco pHYs válido com soma de verificação CRC32 em PNG. Cada pixel visual e bloco de compressão fica 100% intacto.',
      },
      {
        question: 'Alterar o DPI muda a largura e altura em pixels ou o tamanho físico de impressão?',
        answer:
          'Alterar o DPI mantém as dimensões em pixels completamente idênticas: por exemplo, uma foto de 3000×2400 continua sendo de 3000×2400 px. O que muda é o cabeçalho de densidade de impressão que indica a aplicativos de publicação como Photoshop, InDesign ou portais de impressão que o interpretem a 10×8 polegadas a 300 DPI, em vez de 41,6×33,3 polegadas a 72 DPI.',
      },
      {
        question: 'Por que as fotos de câmera ou capturas costumam mostrar Antes: não definido em DPI?',
        answer:
          'Muitas exportações de telefone, capturas e otimizadores web removem os campos de resolução JFIF/EXIF ou omitem o bloco opcional pHYs de PNG, deixando que os visualizadores assumam um valor de 72 ou 96 DPI. Nossa ferramenta insere um cabeçalho padrão para que os validadores de impressão detectem 300 DPI de forma confiável.',
      },
      {
        question: 'Como o selo de DPI verificado confirma que a atualização funcionou?',
        answer:
          'Depois de construir o blob binário atualizado, a ferramenta executa seu analisador de cabeçalho binário de novo sobre o arquivo de saída do zero para ler a densidade X/Y recém-embutida. Isso garante que o arquivo baixado passe nas verificações automatizadas de portais de impressão e inspetores de desktop.',
      },
      {
        question: 'Como o alterador de DPI trata os arquivos WebP, HEIC, BMP, GIF ou SVG?',
        answer:
          'Os formatos que não têm cabeçalhos DPI padrão entre programas (como WebP ou BMP) são decodificados localmente e convertidos com limpeza para PNG sem perda com o bloco pHYs DPI exato embutido. Você verá um selo Convertido para PNG com DPI pHYs nesses cartões.',
      },
      {
        question: 'Quais predefinições de DPI há e que faixa o DPI personalizado aceita?',
        answer:
          'Cinco ajustes rápidos cobrem os padrões comuns: 72 DPI (Tela), 96 DPI (Windows), 150 DPI (Impressão de rascunho), 300 DPI (Impressão de alta qualidade) e 600 DPI (Arquivo). O DPI personalizado permite digitar qualquer número inteiro entre 1 e 2.400 DPI.',
      },
      {
        question: 'Atualizar o DPI de JPEG conserva as tags EXIF e o perfil ICC da minha câmera?',
        answer:
          'Sim, nosso copiador de segmentos JPEG sem perdas deixa intactos seu perfil de cor, as tags de câmera e os dados de digitalização de imagem, enquanto atualiza a densidade JFIF APP0 e XResolution/YResolution/ResolutionUnit de EXIF se existe um segmento EXIF APP1. Se não havia cabeçalho JFIF, insere um segmento JFIF APP0 limpo de 18 bytes logo depois de SOI.',
      },
      {
        question: 'Por que o DPI de PNG às vezes é lido como 299 ou 300 DPI após a conversão?',
        answer:
          'A especificação oficial pHYs de PNG guarda a resolução em pixels por metro em vez de pontos por polegada, convertendo 300 DPI em 11.811 pixels por metro. Arredondar de pixels por metro para polegadas produz um 300 DPI exato e limpo em quase todos os valores predefinidos.',
      },
      {
        question: 'Alterar uma miniatura web de 400×400 para 300 DPI a deixará nítida para imprimir?',
        answer:
          'Não, atualizar o DPI só altera as instruções de metadados, não a contagem de pixels: um arquivo de 400×400 pixels a 300 DPI imprime com nitidez só a 1,33×1,33 polegadas. Para cobrir tamanhos de papel maiores com limpeza a 300 DPI, você precisa de dimensões em pixels maiores na obra de origem.',
      },
      {
        question: 'Posso atualizar vários recursos de impressão para 300 DPI em lote e exportar um ZIP?',
        answer:
          'Sim, solte qualquer quantidade de arquivos JPG ou PNG de até 20 MB cada e todos são processados no DPI escolhido em sequência. Quando dois ou mais arquivos terminam, aparece uma barra Lote pronto com um botão Baixar tudo (ZIP) que produz images_<dpi>dpi_compressmypic.zip.',
      },
      {
        question: 'Posso mudar de ideia e aplicar 600 DPI depois de processar a 300 DPI?',
        answer:
          'Sim, ao clicar em outro botão de predefinição de DPI de destino você atualiza e reprocessa na hora todos os arquivos da sua fila a partir dos arquivos originais enviados, sem acumular edições. Se você digitar um número em DPI personalizado, clique em Aplicar DPI para atualizar todos os itens naquela densidade personalizada.',
      },
      {
        question: 'Definir 300 DPI aumenta muito o tamanho de arquivo de JPEG ou PNG?',
        answer:
          'Não, adicionar ou corrigir um cabeçalho JFIF APP0 (18 bytes) ou um bloco pHYs de PNG (21 bytes) muda o peso total do arquivo no máximo algumas dezenas de bytes em JPEGs e PNGs nativos. Só os formatos sem DPI convertidos para PNG sem perda mudam de tamanho.',
      },
      {
        question: 'As provas, capas ou digitalizações confidenciais são enviadas para algum servidor externo?',
        answer:
          'Não, a análise binária de bytes, o cálculo de soma de verificação CRC32 e a correção de cabeçalhos são executados localmente em ArrayBuffers do navegador. Seus arquivos nunca saem do seu computador ou celular.',
      },
      {
        question: 'Por que plataformas como Amazon KDP ou revistas acadêmicas rejeitam arquivos de 72 DPI?',
        answer:
          'Muitos portais automatizados de pré-impressão inspecionam a tag de resolução JFIF ou pHYs de PNG da imagem e rejeitam envios abaixo de 300 DPI, mesmo quando as dimensões em pixels são amplas. Atualizar a tag de cabeçalho para 300 DPI satisfaz essas verificações de pré-impressão sem recomprimir a obra.',
      },
      {
        question: 'Como os arquivos de saída são nomeados ao salvá-los individualmente ou em ZIP?',
        answer:
          'Cada arquivo atualizado conserva seu nome base limpo e adiciona _<objetivo>dpi mais sua extensão, como poster_300dpi.jpg ou diagram_600dpi.png. Isso evita sobrescrever seus arquivos originais no disco.',
      },
      {
        question: 'O alterador de DPI funciona em JPEGs que usavam pontos por cm em vez de por polegada?',
        answer:
          'Sim, o leitor reconhece tanto a unidade=1 (pontos por polegada) quanto a unidade=2 (pontos por cm, multiplicados por 2,54) em tags JFIF e EXIF ao mostrar o DPI de Antes. Ao escrever os cabeçalhos de saída, ele padroniza a densidade com limpeza para polegadas (DPI) para compatibilidade universal.',
      },
      {
        question: 'Posso remover ou tirar as tags DPI em vez de alterá-las?',
        answer:
          'Esta ferramenta sempre embute ou atualiza o cabeçalho DPI de destino escolhido para cumprir os padrões de impressão ou tela. Se você quer apagar todos os metadados JFIF, EXIF e de blocos PNG por privacidade, passe seus arquivos pela nossa ferramenta Remover metadados de imagem.',
      },
      {
        question: 'O que acontece se eu enviar um JPEG danificado ou um formato não compatível ao alterador de DPI?',
        answer:
          'Cada arquivo na fila é executado de forma independente dentro do seu próprio manipulador de erros, então uma só imagem ilegível nunca interrompe o resto do seu lote. Os itens com falha mostram um alerta vermelho claro na mesma página, enquanto os arquivos válidos terminam e são empacotados no seu download ZIP normalmente.',
      },
      {
        question: 'Posso colar uma captura da área de transferência e carimbá-la na hora a 300 DPI?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V) na área de envio para passar uma captura PNG da área de transferência diretamente ao processador. Ele escreve um bloco pHYs válido de 300 DPI sem perda em um momento.',
      },
      {
        question: 'Este editor de DPI sem perdas funciona em Windows, Mac, Linux e navegadores de celular?',
        answer:
          'Sim, as APIs padrão de ArrayBuffer e DataView do navegador funcionam com limpeza no Chrome, Firefox, Edge e Safari de desktop, além de navegadores de celular. Nunca são necessários programas de desktop, plug-ins nem envios para servidores.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: 'Imagem para Base64',
    shortDescription: 'Codifique qualquer imagem em Data URL Base64, tag HTML img ou trecho CSS.',
    category: 'developer',
    seoTitle: 'Imagem para Base64 grátis online – Data URL e HTML',
    seoDescription:
      'Converta imagens para Base64 grátis online: gere Data URLs, Base64 puro, tags HTML <img> e regras CSS url(). Copie com um clique, tudo no seu navegador.',
    h1: 'Conversor de imagem para Base64',
    subtitle:
      'Criada para desenvolvedores frontend, programadores de modelos de e-mail e redatores técnicos, este conversor local de imagem para Base64 transforma recursos de imagem binários em cadeias de texto prontas para copiar em um só passo. Mude na hora entre as abas Data URL, Base64 puro, HTML img e CSS url() sem enviar ícones próprios.',
    howToSteps: [
      {
        title: 'Solte, selecione ou cole uma imagem',
        description:
          'Envie qualquer arquivo JPG, PNG, WebP, SVG, GIF, BMP, ICO ou AVIF de até 15 MB para a área de envio, ou cole uma imagem da área de transferência com Ctrl+V.',
      },
      {
        title: 'Confira o tamanho de arquivo e a sobrecarga de caracteres',
        description:
          'Inspecione o cartão de resumo superior com a miniatura da sua imagem, o tamanho original em bytes, as dimensões naturais (quando aplicáveis), a contagem exata de caracteres de saída e a porcentagem de sobrecarga Base64.',
      },
      {
        title: 'Alterne entre as 4 abas de saída para desenvolvedores',
        description:
          'Clique em Data URL, Base64 puro, HTML <img> ou CSS url() para formatar a cadeia codificada para cargas JSON, imagens embutidas em HTML ou folhas de estilo.',
      },
      {
        title: 'Copie para a área de transferência ou salve como arquivo .txt',
        description:
          'Clique em Copiar saída (ou clique dentro da caixa de código para selecionar tudo) para copiar a cadeia, ou clique em Salvar .TXT para baixar <nome-de-arquivo>_<aba>.txt.',
      },
      {
        title: 'Clique em Codificar outra para trocar de arquivo',
        description:
          'Quando estiver pronto para codificar o próximo ícone ou sprite, clique em Codificar outra para apagar a saída e liberar a memória local de objetos.',
      },
    ],
    features: [
      {
        title: '4 formatos de saída para desenvolvedores',
        description: 'Gere automaticamente trechos de Data URL, Base64 puro, HTML <img> e CSS background-image.',
      },
      {
        title: 'Métricas exatas de bytes e caracteres',
        description: 'Compare na hora o tamanho de arquivo binário original com o comprimento da cadeia Base64 codificada.',
      },
      {
        title: 'Copiar com um clique e download TXT',
        description: 'Copie cadeias Base64 enormes para a área de transferência de forma confiável ou salve-as como arquivo de texto simples.',
      },
      {
        title: 'Codificação 100% local com FileReader',
        description: 'Sem envios: a codificação acontece de forma nativa dentro da aba do seu navegador.',
      },
    ],
    faqs: [
      {
        question: 'Por que o conversor de imagem para Base64 adiciona aproximadamente 33% ao tamanho de saída?',
        answer:
          'O Base64 representa cada 3 bytes binários (24 bits) com 4 caracteres ASCII imprimíveis (6 bits cada), mais até dois sinais de igual de preenchimento no final. Por isso, uma imagem de 30 KB sempre é codificada em cerca de 40 KB de texto Base64, que a barra de resumo registra automaticamente.',
      },
      {
        question: 'Quais quatro formatos de saída posso gerar depois de codificar uma imagem para Base64?',
        answer:
          'Quatro abas estão logo acima da caixa de código: Data URL (URI completa data:image/...;base64,...), Base64 puro (carga sem prefixo), HTML <img> (tag pronta com alt limpo e atributos de largura e altura) e CSS url() (regra background-image: url("...");).',
      },
      {
        question: 'Codificar altera a qualidade da imagem, remove o código SVG ou achata GIFs animados?',
        answer:
          'Não, o codificador lê o arquivo binário puro diretamente com FileReader.readAsDataURL do navegador, sem desenhar no canvas. Cada byte original, elemento XML de SVG vetorial, quadro ICO e quadro de animação GIF permanece 100% idêntico bit a bit.',
      },
      {
        question: 'Quais formatos de arquivo e tamanho máximo de envio a codificação para Base64 aceita?',
        answer:
          'Você pode codificar imagens JPG, PNG, WebP, SVG, GIF, BMP, ICO de favicons e AVIF de até 15 MB por arquivo. Manter as entradas Base64 com um limite de 15 MB evita que cadeias de texto de vários megabytes congelem a renderização da área de transferência ou da área de texto.',
      },
      {
        question: 'Quando vale a pena embutir Data URLs Base64 em vez de referenciar arquivos de imagem normais?',
        answer:
          'Embutir ícones pequenos de interface, spinners, favicons ou selos de assinatura de e-mail de poucos kilobytes elimina viagens HTTP extras e funciona com limpeza em documentos HTML independentes. Para fotos principais grandes, as URLs normais de imagem WebP ou JPG continuam sendo menores e se beneficiam do cache HTTP do navegador.',
      },
      {
        question: 'Por que a aba HTML <img> inclui atributos de largura e altura automaticamente?',
        answer:
          'Depois que o seu navegador carrega a prévia temporária de objeto e lê naturalWidth e naturalHeight, essas dimensões em pixels preenchem o trecho HTML junto com uma tag alt derivada do seu nome base de arquivo. Incluir dimensões ajuda a prevenir o deslocamento cumulativo de layout (CLS) em páginas web.',
      },
      {
        question: 'Posso baixar a saída Base64 longa quando copiar cadeias grandes é inconveniente?',
        answer:
          'Sim, clique em Salvar .TXT junto a Copiar saída para baixar o texto exato que é mostrado na sua aba ativa (Data URL, Base64 puro, HTML ou CSS) como <base>_<aba>.txt. Isso facilita abrir cargas muito longas com limpeza no VS Code ou em scripts de terminal.',
      },
      {
        question: 'O que acontece se meu navegador bloquear as permissões da área de transferência ao clicar em Copiar saída?',
        answer:
          'Se navigator.clipboard.writeText estiver bloqueado pela configuração de privacidade do navegador, uma mensagem na página pede para você copiar diretamente da caixa de código. Ao clicar ou tabular dentro da área de texto monoespaçada escura, toda a cadeia é destacada automaticamente para que Ctrl+C / Cmd+C copie tudo com limpeza.',
      },
      {
        question: 'Em que o Base64 puro difere da Data URL ao enviar cargas JSON de API?',
        answer:
          'A Data URL antepõe data:<mime>;base64, para que os navegadores possam mostrá-la diretamente dentro de atributos src ou regras CSS url(). As APIs, bancos de dados de celular e codificadores de servidor costumam esperar só Base64 puro: ao mudar para a aba Base64 puro, o cabeçalho é removido automaticamente.',
      },
      {
        question: 'Os ícones de interface, diagramas ou recursos de clientes são enviados para algum lugar ao codificar?',
        answer:
          'Nunca: o FileReader lê os bytes estritamente dentro da memória local do navegador do cliente. Nenhum arquivo de imagem nem cadeia Base64 é transmitido jamais para servidores remotos.',
      },
      {
        question: 'Posso codificar um logotipo SVG ou um arquivo favicon.ico sem problemas?',
        answer:
          'Sim, tanto as extensões .svg quanto .ico são aceitas explicitamente no filtro de envio e são codificadas com seu prefixo MIME adequado data:image/svg+xml ou image/x-icon. Você também pode soltar arquivos no conversor e depois verificá-los de ida e volta com nosso decodificador Base64 para imagem.',
      },
      {
        question: 'Por que a porcentagem de sobrecarga é um pouco maior nas abas HTML <img> e CSS url()?',
        answer:
          'Além da expansão de codificação Base64 de 33% e do cabeçalho MIME da Data URL, as abas HTML e CSS envolvem caracteres extras de marcação como <img src="..." alt="..." />. O contador de resumo recalcula os caracteres ao vivo cada vez que você muda de aba.',
      },
      {
        question: 'Posso colar uma captura diretamente da área de transferência para obter uma Data URL rápida?',
        answer:
          'Sim, pressione Ctrl+V (ou Cmd+V no Mac) em qualquer lugar da tela de envio para capturar uma imagem copiada da área de transferência diretamente. A ferramenta a codifica na hora em formatos Data URL, Base64 puro, HTML e CSS, prontos para copiar com um clique.',
      },
      {
        question: 'O Base64 puro conserva os caracteres padrão + e / com preenchimento =?',
        answer:
          'Sim, o FileReader do navegador produz cadeias Base64 padrão RFC 4648 com +, / e caracteres = de preenchimento no final, em vez de substituições base64url seguras para URL. Isso garante compatibilidade direta com URIs de dados HTML, cargas MIME de e-mail e decodificadores de servidor padrão.',
      },
      {
        question: 'Por que alguns clientes de e-mail bloqueiam as imagens Base64 embutidas?',
        answer:
          'Alguns provedores de webmail e filtros de spam corporativos removem as URIs data:image em boletins HTML por razões de segurança, embora os navegadores as mostrem bem. O Base64 funciona melhor em aplicativos web, documentos HTML de um só arquivo, pacotes React/CSS e modelos JSON/SVG.',
      },
      {
        question: 'Como conservo os metadados originais de câmera ou os removo antes de codificar para Base64?',
        answer:
          'Como esta ferramenta codifica os bytes puros exatos, qualquer metadado EXIF existente dentro de um JPEG permanece codificado dentro da cadeia Base64. Se você quer cadeias Base64 menores e sem metadados, passe sua foto pela nossa ferramenta Remover metadados de imagem antes de codificar.',
      },
      {
        question: 'Devo reduzir PNGs ou JPGs grandes antes de convertê-los para Base64?',
        answer:
          'Sim: como o Base64 infla o tamanho em ~33%, comprimir primeiro um PNG de 300 KB para um WebP de 40 KB economiza cerca de 350 KB de sobrecarga de texto Base64 na sua folha de estilo ou pacote. Use antes nosso Compressor de imagens ou Otimizador de imagens web para grandes economias.',
      },
      {
        question: 'Por que as dimensões são omitidas em certos arquivos ICO incomuns ou danificados?',
        answer:
          'Se um navegador não consegue decodificar um ICO incomum de vários quadros ou um cabeçalho exótico em uma prévia HTMLImageElement, as dimensões são omitidas com limpeza enquanto a codificação Base64 pura continua funcionando. Os arquivos padrão PNG, JPG, WebP, GIF, SVG, BMP e AVIF mostram contagens exatas de pixels L×A.',
      },
      {
        question: 'Como codifico outra imagem depois de copiar o primeiro trecho?',
        answer:
          'Clique em Codificar outra no canto superior direito do cartão de resumo para redefinir as abas de saída e apagar a área de texto. Libera na hora a memória temporária de prévia e restaura a área de envio para o seu próximo recurso.',
      },
      {
        question: 'O codificador Base64 funciona no Safari de celular e nos navegadores Chrome?',
        answer:
          'Sim, as APIs integradas HTML5 FileReader e de área de transferência funcionam com confiabilidade no Safari do iOS, Chrome do Android, Windows, macOS e Linux. Como a codificação é executada localmente na memória do navegador, não há atrasos de servidor nem mesmo com dados de celular.',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/base64-to-image',
    name: 'Base64 para imagem',
    shortDescription: 'Decodifique uma Data URL Base64 ou uma cadeia Base64 pura e volte a convertê-la em imagem.',
    category: 'developer',
    seoTitle: 'Base64 para imagem grátis online – Decodificador',
    seoDescription:
      'Decodifique Base64 para imagem grátis online: cole uma Data URL ou Base64 puro e veja a imagem na hora. Detecta PNG, JPG, WebP, GIF e SVG no seu navegador.',
    h1: 'Decodificador de Base64 para imagem',
    subtitle:
      'Feita para engenheiros web que depuram cargas de API, especialistas de e-mail que revisam ícones embutidos e testadores de qualidade, este decodificador de Base64 para imagem no navegador reconstrói Data URLs e cadeias Base64 puras em arquivos baixáveis. Inspecione o formato MIME detectado, as dimensões em pixels e o tamanho em bytes em privado, no seu dispositivo.',
    howToSteps: [
      {
        title: 'Cole sua cadeia Base64 ou Data URL',
        description:
          'Cole uma cadeia completa data:image/...;base64,... ou caracteres Base64 puros na caixa Cole uma string Base64 ou Data URL.',
      },
      {
        title: 'Aguarde a decodificação automática (ou clique em Decodificar imagem)',
        description:
          'O decodificador analisa espaços em branco, caracteres seguros para URL e bytes de cabeçalho mágico na hora ao colar (ou ao clicar em Decodificar imagem) para validar a imagem.',
      },
      {
        title: 'Inspecione a prévia, o formato, o tamanho e as dimensões',
        description:
          'Veja o gráfico decodificado sobre um xadrez de transparência junto com o selo Imagem válida decodificada, o formato detectado, o tamanho binário e a largura × altura em pixels.',
      },
      {
        title: 'Selecione seu formato de download',
        description:
          'Escolha Original para guardar o arquivo binário decodificado exato sem tocá-lo, ou escolha PNG, JPG ou WEBP para converter a imagem ao exportar.',
      },
      {
        title: 'Baixe seu arquivo de imagem decodificado',
        description:
          'Clique em Baixar arquivo de imagem para salvar decoded_image.<ext> diretamente no seu dispositivo, ou clique em Limpar acima da caixa de entrada para testar outra carga.',
      },
    ],
    features: [
      {
        title: 'Detecta automaticamente o prefixo de Data URL faltante',
        description: 'Identifica automaticamente os cabeçalhos mágicos PNG, JPEG, GIF, WebP, BMP e SVG mesmo a partir de Base64 puro.',
      },
      {
        title: 'Validação instantânea e mensagens de erro',
        description: 'Detecta com clareza caracteres Base64 inválidos ou cabeçalhos danificados.',
      },
      {
        title: 'Conversão de formato opcional',
        description: 'Baixe o binário decodificado exato ou exporte-o de novo como PNG, JPG ou WebP.',
      },
      {
        title: 'Decodificação privada no navegador',
        description: 'Segura para tokens internos, recursos de e-mail e ícones de interface próprios.',
      },
    ],
    faqs: [
      {
        question: 'Este decodificador de Base64 para imagem pode ler cadeias sem o prefixo data:image/?',
        answer:
          'Sim, se você colar Base64 puro sem cabeçalho de Data URL, o decodificador inspeciona os bytes de assinatura mágica decodificados na frente do fluxo binário. Detecta automaticamente PNG, JPEG, GIF, WebP, BMP, ICO e marcação XML/SVG embutida.',
      },
      {
        question: 'O decodificador trata variantes Base64 seguras para URL e quebras de linha acidentais?',
        answer:
          'Sim, antes de chamar atob(), o decodificador remove automaticamente espaços em branco, espaços e quebras de linha, e converte os caracteres seguros para URL - e _ de volta para + e / padrão. Isso faz colar cadeias enroladas de registros JSON, saídas de terminal ou cargas JWT funcionar com limpeza.',
      },
      {
        question: 'O que acontece se eu colar uma carga Base64 danificada ou que não é uma imagem?',
        answer:
          'Os caracteres Base64 inválidos acionam uma mensagem de validação imediata, enquanto os bytes Base64 válidos que não formam uma imagem legível pelo navegador mostram um erro explícito que explica que os bytes não puderam ser exibidos. Nada quebra nem trava a página.',
      },
      {
        question: 'Quais opções de formato de download o decodificador oferece depois que a cadeia é decodificada?',
        answer:
          'Você pode selecionar Original, PNG, JPG ou WEBP antes de salvar. Ao escolher Original, são salvos os bytes binários puros exatos sem tocá-los como decoded_image.<ext>, enquanto PNG, JPG ou WEBP exibem de novo o gráfico decodificado em HTML5 Canvas.',
      },
      {
        question: 'O que acontece com as áreas transparentes se eu reexportar um PNG ou SVG decodificado como JPG?',
        answer:
          'Ao selecionar JPG em Formato de download, é preenchido automaticamente o canvas com um fundo branco sólido limpo (#FFFFFF) antes de codificar com qualidade de 92%. Manter Original, PNG ou WEBP conserva a transparência completa sobre a prévia em xadrez.',
      },
      {
        question: 'O decodificador conserva os GIFs animados e SVGs vetoriais ao escolher Original?',
        answer:
          'Sim, ao escolher Original é baixado o blob exato construído diretamente a partir do seu arranjo de bytes decodificados, mantendo intactas as rotas vetoriais SVG e as animações GIF de vários quadros. Note que mudar o formato de download para PNG, JPG ou WEBP rasteriza os SVGs ou o primeiro quadro dos GIFs com o canvas.',
      },
      {
        question: 'Quais métricas aparecem junto à prévia da imagem decodificada?',
        answer:
          'Depois de validada, o painel de resumo da direita mostra um selo verde de status Imagem válida decodificada junto com o formato detectado (como PNG, JPEG ou SVG+XML). Logo abaixo, você pode inspecionar o tamanho binário decodificado exato em KB/MB e as dimensões naturais em pixels.',
      },
      {
        question: 'Por que uma cadeia data:image/svg+xml sem ;base64, mostra um erro de codificação?',
        answer:
          'As URIs de dados que não são Base64 (como cadeias SVG codificadas por porcentagem, por exemplo data:image/svg+xml,%3Csvg...) são texto simples em vez de cargas Base64. Esta ferramenta valida explicitamente cargas Base64 padrão ou URIs de dados com ;base64, para que as entradas inválidas falhem com clareza.',
      },
      {
        question: 'Há algum risco ao decodificar respostas internas de API, tokens QR ou ícones privados aqui?',
        answer:
          'Não, toda a limpeza de cadeias, a decodificação de bytes com atob(), a detecção de assinatura MIME e a renderização de imagens são executadas estritamente dentro da memória da aba do seu navegador. As cadeias codificadas nunca viajam pela rede nem tocam registros remotos.',
      },
      {
        question: 'Como a prévia em xadrez ajuda a inspecionar ícones decodificados?',
        answer:
          'Um padrão de xadrez cinza claro sutil é exibido atrás do quadro de prévia para que os recortes transparentes, os ícones brancos de interface e as sombras suaves se destaquem na hora. Sem xadrez, os logotipos brancos transparentes se misturariam de forma invisível com um painel branco vazio.',
      },
      {
        question: 'Por que o arquivo binário decodificado pesa menos que o texto Base64 que colei?',
        answer:
          'O texto Base64 expande os dados binários em aproximadamente 33% com 6 bits por caractere ASCII. Ao voltar a convertê-lo em bytes de imagem puros, é restaurado o tamanho compacto original do arquivo binário.',
      },
      {
        question: 'Posso envolver aspas HTML ou CSS url("...") em torno da minha cadeia antes de colá-la?',
        answer:
          'Para uma validação limpa, cole só a Data URL (data:image/...;base64,...) ou os caracteres Base64 em si, sem tags HTML nem aspas CSS em volta. Tirar as aspas que cercam garante que o validador leia Base64 puro.',
      },
      {
        question: 'Como converto uma cadeia Base64 de um favicon BMP ou ICO antigo para WebP moderno?',
        answer:
          'Cole o Base64 puro ou a Data URL, confirme que a prévia é exibida com limpeza, clique em WEBP no seletor de formato de download e pressione Baixar arquivo de imagem. O exportador de canvas produz na hora uma imagem WebP comprimida.',
      },
      {
        question: 'Quão rápida é a decodificação de cadeias Base64 de vários megabytes?',
        answer:
          'A decodificação acontece em milissegundos localmente em JavaScript para ícones pequenos e fotos web típicas de menos de vários megabytes. As cadeias coladas muito grandes (dezenas de megabytes de texto) dependem principalmente da velocidade de colagem da área de texto do seu navegador.',
      },
      {
        question: 'Posso decodificar cadeias Base64 SVG+XML em arquivos PNG raster nítidos?',
        answer:
          'Sim, cole uma Data URL SVG codificada em Base64 ou marcação Base64 SVG pura, que o decodificador identifica com cabeçalhos <svg ou <?xml automaticamente. Depois mude o formato de download de Original para PNG para rasterizar o gráfico vetorial no canvas no seu tamanho natural.',
      },
      {
        question: 'Por que o arquivo de saída sempre é baixado como decoded_image.<ext>?',
        answer:
          'As cadeias Base64 padrão e as Data URLs codificam bytes de imagem puros e tipos MIME sem levar um nome de arquivo original. Para manter os downloads previsíveis em todas as entradas, o exportador nomeia o arquivo salvo decoded_image seguido da extensão de formato detectada ou selecionada.',
      },
      {
        question: 'Qual é a forma mais rápida de apagar uma cadeia Base64 enorme e inspecionar a próxima?',
        answer:
          'Clique em Limpar no canto superior direito do cartão Cole uma string Base64 para limpar a área de texto de um toque. Ao fazer isso, o painel de prévia é removido na hora e as URLs de objeto temporárias são revogadas da memória do navegador.',
      },
      {
        question: 'Colar uma cadeia Base64 é decodificado automaticamente sem precisar clicar em Decodificar imagem?',
        answer:
          'Sim, a decodificação é acionada automaticamente assim que o texto entra ou muda dentro da caixa de entrada, para que as cargas válidas sejam pré-visualizadas em milissegundos. O botão Decodificar imagem fica pronto para quando você quiser executar de novo a validação manualmente.',
      },
      {
        question: 'Como codifico uma imagem baixada de novo em Data URLs HTML ou CSS mais tarde?',
        answer:
          'Role até a seção Ferramentas relacionadas abaixo e abra Imagem para Base64 para mudar de direção com limpeza. Ela converte qualquer imagem JPG, PNG, WebP, SVG, GIF, BMP ou ICO de volta para trechos de Data URL, Base64 puro, HTML <img> ou CSS url().',
      },
      {
        question: 'O decodificador de Base64 para imagem funciona offline ou em smartphones?',
        answer:
          'Sim, cada verificação de cadeia, decodificação de bytes e conversão de formato em canvas é executada dentro das APIs integradas do navegador, sem chamadas de rede. Funciona com fluidez no Safari do iOS, Chrome do Android, Windows, macOS e Linux depois que a página carrega.',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: 'Extrator de paleta de cores',
    shortDescription: 'Extraia as cores dominantes de qualquer foto com códigos HEX, RGB, HSL e exportação.',
    category: 'developer',
    seoTitle: 'Extrator de paleta de cores grátis online',
    seoDescription:
      'Extraia as cores dominantes de uma foto grátis online: de 3 a 12 amostras com códigos HEX, RGB e HSL, variáveis CSS, JSON e cartão PNG no seu navegador.',
    h1: 'Extrator de paleta de cores grátis online',
    subtitle:
      'Descubra a combinação de cores principal de qualquer fotografia, ilustração ou captura de tela com o nosso extrator de paleta de cores no navegador, movido por quantização Median-Cut. Feito para designers de interface, estrategistas de marca e desenvolvedores front-end, ele gera de 3 a 12 amostras equilibradas com porcentagens de presença, cópia de códigos HEX, RGB e HSL com um clique, propriedades personalizadas de CSS, dados JSON e cartões PNG de paleta compartilháveis, tudo localmente no seu dispositivo.',
    howToSteps: [
      {
        title: 'Envie a imagem de origem',
        description:
          'Solte ou selecione qualquer arquivo JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB na área de envio (ou cole da área de transferência).',
      },
      {
        title: 'Defina a quantidade de cores (3–12)',
        description:
          'Arraste o controle de Quantidade de cores entre 3 tons de destaque minimalistas e 12 amostras detalhadas para recalcular a paleta na hora.',
      },
      {
        title: 'Confira a faixa proporcional de cores',
        description:
          'Observe a faixa proporcional de cores horizontal acima dos cartões de amostra para ver o quanto cada tom domina a imagem.',
      },
      {
        title: 'Copie os códigos HEX, RGB ou HSL das amostras',
        description:
          'Clique em qualquer pílula HEX, RGB ou HSL dentro de um cartão de amostra para copiar esse valor exato de cor direto para a área de transferência.',
      },
      {
        title: 'Exporte variáveis CSS ou JSON',
        description:
          'Use Copiar variáveis CSS para obter um bloco :root pronto para colar, ou Copiar JSON para pegar os códigos das amostras, as porcentagens e as dimensões de origem em formato estruturado.',
      },
      {
        title: 'Baixe um cartão PNG da paleta',
        description:
          'Clique em Baixar paleta PNG para salvar um cartão de apresentação branco e limpo que combina a sua foto de pré-visualização com os blocos de cor extraídos.',
      },
    ],
    features: [
      { title: 'Quantização de cores Median-Cut', description: 'Agrupa milhões de pixels da imagem em amostras dominantes equilibradas e representativas em milissegundos.' },
      { title: 'HEX, RGB, HSL e % de presença', description: 'Cada amostra mostra os códigos exatos de cor e a parte da imagem que ela ocupa.' },
      { title: 'Exportações para desenvolvedores + cartão PNG', description: 'Exporte como propriedades personalizadas de CSS, JSON, trecho de Tailwind ou um cartão PNG de paleta compartilhável.' },
      { title: '100% no navegador', description: 'Analisa os pixels localmente no HTML5 Canvas sem enviar imagens.' },
    ],
    faqs: [
      {
        question: 'Como a quantização Median-Cut monta uma paleta a partir da minha foto?',
        answer:
          'O Median-Cut agrupa os pixels amostrados em caixas de cor RGB tridimensionais e divide várias vezes o canal de cor mais largo pela sua mediana até restar a quantidade de caixas pedida. Cada caixa vira uma amostra representativa, ponderada pela quantidade de pixels que caíram nela, o que produz cores dominantes harmoniosas em vez de pixels isolados ruidosos.',
      },
      {
        question: 'Quantas amostras de cor posso gerar com o extrator de paleta?',
        answer:
          'Você pode extrair de 3 a 12 cores dominantes com o controle de Quantidade de cores. Escolher de 3 a 5 funciona bem para temas de marca minimalistas, enquanto de 8 a 12 revela tons de sombra sutis e matizes de destaque secundários.',
      },
      {
        question: 'O que significa a porcentagem de cada cartão de cor?',
        answer:
          'Cada porcentagem mostra a proporção dos pixels amostrados não transparentes atribuídos àquela amostra durante a quantização. A faixa proporcional de cores dimensiona cada segmento exatamente de acordo com essas porcentagens.',
      },
      {
        question: 'Posso copiar todas as amostras extraídas como variáveis CSS de uma vez?',
        answer:
          'Sim. Ao clicar em Copiar variáveis CSS, você copia um bloco :root completo com --palette-1 até --palette-N e cada cor em hexadecimal, pronto para a sua folha de estilos. Depois, você pode renomear as variáveis para combinar com os seus tokens de design.',
      },
      {
        question: 'Quais dados vêm na opção Copiar JSON do extrator de paleta?',
        answer:
          'O Copiar JSON grava uma lista de objetos com o índice de cada amostra, o valor hexadecimal, rgb, hsl e a porcentagem de presença. Desenvolvedores podem inserir esses dados direto em arquivos de configuração de tema, documentação de design ou scripts de estilo automatizados.',
      },
      {
        question: 'O que a opção Baixar paleta PNG gera?',
        answer:
          'O Baixar paleta PNG cria um cartão de apresentação branco e limpo de 1000 pixels de largura que mostra a sua imagem de origem centralizada no topo, acima de blocos de cor arredondados com os códigos hexadecimais e as porcentagens de presença. Ele é baixado localmente como <nome>_palette.png, sem marca d\'água.',
      },
      {
        question: 'Por que o extrator de paleta dá resultados diferentes de um conta-gotas?',
        answer:
          'Um conta-gotas pega um único pixel embaixo do cursor, enquanto a extração de paleta agrupa a imagem inteira em famílias de cores dominantes. Isso torna a ferramenta mais rápida para montar combinações de cores coesas do que para igualar um pontinho específico.',
      },
      {
        question: 'Como os fundos transparentes são tratados ao extrair cores de arquivos PNG?',
        answer:
          'Os pixels com transparência alfa abaixo de 50% são descartados antes da quantização. Isso evita que o espaço vazio da tela transparente ao redor de logotipos ou recortes de produto distorça a paleta em direção ao branco ou ao preto.',
      },
      {
        question: 'O extrator analisa cada pixel de uma foto gigante de 20 MB?',
        answer:
          'Para manter a extração rápida dentro do seu navegador, a imagem é temporariamente reduzida em uma tela fora da tela de até 140 pixels no lado maior antes do Median-Cut. Como as proporções das cores dominantes se mantêm praticamente iguais nessa escala, as paletas são calculadas quase na hora sem travar a sua aba.',
      },
      {
        question: 'Quais formatos de arquivo e tamanhos o extrator de paleta aceita?',
        answer:
          'Você pode enviar arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 20 MB por imagem. GIFs animados de vários quadros extraem as cores do quadro inicial sem problemas.',
      },
      {
        question: 'Por que apareceram dois tons parecidos na minha paleta de 12 cores?',
        answer:
          'Fotos com gradientes grandes, como pores do sol, tons de pele ou fundos de estúdio, contêm milhões de pixels concentrados em uma região do espaço de cores. Com quantidades altas de amostras, como 10 ou 12, o Median-Cut subdivide naturalmente essa região densa em luzes e meios-tons bem próximos.',
      },
      {
        question: 'Meus conceitos de marca ou capturas de tela são enviados para algum servidor?',
        answer:
          'Não. A amostragem de pixels, o agrupamento de cores, a formatação de código e a criação do cartão PNG acontecem exclusivamente na memória local do HTML5 Canvas. Os seus recursos criativos ficam estritamente no seu próprio dispositivo.',
      },
      {
        question: 'Posso mudar a quantidade de amostras depois de copiar o CSS sem enviar a imagem de novo?',
        answer:
          'Sim. Ao mover o controle de Quantidade de cores, os dados da imagem guardados em memória são reagrupados na hora, então você pode testar 4, 6 ou 10 cores lado a lado antes de exportar.',
      },
      {
        question: 'Por que um pequeno destaque neon não aparece em uma paleta de 4 cores?',
        answer:
          'Como o Median-Cut prioriza as regiões de cor com as maiores áreas de pixels, um botãozinho de destaque de 1% dentro de uma captura enorme e escura pode se fundir em uma caixa mais ampla com poucas cores. Ao subir a quantidade de cores para 10 ou 12, os destaques menores costumam aparecer.',
      },
      {
        question: 'Os textos das amostras são legíveis em cores muito escuras ou muito claras?',
        answer:
          'Sim. Tanto nos cartões da página quanto no cartão PNG exportado, a tinta branca ou escura é calculada automaticamente a partir da luminância percebida de cada cor, então os códigos hexadecimais continuam legíveis.',
      },
      {
        question: 'Posso colar uma captura de tela direto da área de transferência no extrator de paleta?',
        answer:
          'Sim. Pressione Ctrl+V no Windows/Linux ou Cmd+V no macOS em qualquer lugar da página para carregar uma captura copiada ou um mockup de design direto no analisador de cores.',
      },
      {
        question: 'Qual é a precisão dos valores HSL e RGB do extrator em relação aos padrões de CSS?',
        answer:
          'Cada amostra gera notação padrão válida em CSS rgb(r, g, b) e hsl(h, s%, l%) junto com códigos hexadecimais #RRGGBB de seis dígitos em maiúsculas. Você pode colar qualquer valor copiado direto em CSS, no Figma ou nas ferramentas de desenvolvimento do navegador.',
      },
      {
        question: 'Posso extrair uma paleta de um logotipo vetorial SVG?',
        answer:
          'Sim. Ao soltar um arquivo SVG de até 20 MB, o seu navegador o rasteriza no Canvas antes de contar as cores, o que dá amostras e porcentagens instantâneas a partir da arte vetorial.',
      },
      {
        question: 'Ao enviar uma imagem nova, as amostras antigas são apagadas automaticamente?',
        answer:
          'Sim, ao soltar uma imagem substituta ou clicar em Trocar, o estado da paleta anterior é apagado e uma quantização nova é executada na imagem nova. Você nunca precisa atualizar a página entre uma foto e outra.',
      },
      {
        question: 'Posso usar este extrator de paleta no iOS, no Android e em navegadores de computador?',
        answer:
          'Sim. A grade responsiva de amostras, o controle deslizante e os botões de cópia funcionam sem problemas no Safari do iOS, no Chrome do Android e em navegadores modernos de computador, sem cadastros nem instalações.',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
  {
    slug: '/gif-maker',
    name: 'Criador de GIF',
    shortDescription: 'Crie GIFs animados a partir de JPG, PNG e WebP com controle de duração por quadro e repetições.',
    category: 'create',
    seoTitle: 'Criador de GIF animado grátis online',
    seoDescription:
      'Crie GIFs grátis online no seu navegador: combine quadros JPG, PNG, WebP e HEIC, ajuste a duração de cada quadro e escolha as repetições. Sem marca d\'água.',
    h1: 'Criador de GIF animado grátis',
    subtitle:
      'Transforme fotos, ângulos de produto e quadros de demonstrações de interface em animações em loop com o nosso criador de GIF animado grátis, que funciona direto no seu navegador. Ideal para criadores de redes sociais, autores de tutoriais e profissionais de marketing: reordene, duplique e ajuste o tempo dos quadros individualmente, escolha a quantidade de repetições, personalize o ajuste e as dimensões dos quadros e codifique arquivos GIF89a sem marca d\'água e em particular.',
    howToSteps: [
      {
        title: 'Envie duas ou mais imagens de quadro',
        description:
          'Solte arquivos JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB cada um na área de quadros (ou use Adicionar quadros depois para incluir mais).',
      },
      {
        title: 'Reordene, duplique ou exclua quadros',
        description:
          'Arraste os cartões de quadro pelas alças ou use os botões de seta para definir a ordem da sequência, duplicar quadros principais ou remover fotos indesejadas.',
      },
      {
        title: 'Defina a velocidade global e as durações por quadro',
        description:
          'Escolha o controle de Duração padrão do quadro (50–3000 ms) ou uma opção rápida de 1–10 FPS, e digite durações personalizadas em quadros individuais se precisar.',
      },
      {
        title: 'Configure o comportamento de repetição e o ajuste dos quadros',
        description:
          'Selecione Sempre, Definir repetições (2–50 reproduções) ou Reproduzir uma vez, e depois escolha o ajuste Conter ou Cobrir junto com uma cor de fundo fosca.',
      },
      {
        title: 'Ajuste as dimensões de saída e a qualidade da paleta',
        description:
          'Escolha uma opção rápida de 480 px, 640 px, 800 px ou Original (ou digite largura e altura de 16 a 2000 px) e defina a qualidade da paleta de cores de 10% a 100%.',
      },
      {
        title: 'Gere e baixe o seu GIF animado',
        description:
          'Clique em Gerar GIF animado para ver a reprodução ao vivo com os tempos ou codificar localmente e salvar animated_compressmypic.gif.',
      },
    ],
    features: [
      {
        title: 'Codificação real de GIF89a no cliente',
        description:
          'Usa um quantizador de cores rápido no navegador e um codificador GIF LZW (carregado sob demanda) — zero chamadas a APIs externas ou envios ao servidor.',
      },
      {
        title: 'Durações globais e por quadro',
        description:
          'Defina uma velocidade uniforme de quadros em milissegundos ou com opções rápidas de FPS, e opcionalmente altere o tempo em quadros principais individuais.',
      },
      {
        title: 'Controles flexíveis de repetição e ajuste',
        description:
          'Escolha repetição infinita, reproduzir uma vez ou uma quantidade exata de reproduções, além do ajuste de quadros Conter ou Cobrir.',
      },
      {
        title: 'Aviso de arquivo grande',
        description:
          'Avisa automaticamente quando um GIF codificado fica pesado (acima de 5–15 MB) para que você possa otimizar as dimensões ou a qualidade para aplicativos de chat.',
      },
    ],
    faqs: [
      {
        question: 'Como o navegador codifica as minhas fotos em um GIF animado sem enviá-las?',
        answer:
          'Ao clicar em Gerar GIF animado, a página carrega sob demanda um codificador GIF89a local em JavaScript e um quantizador de cores direto dentro da aba do seu navegador. Cada quadro é desenhado em uma tela fora da tela com as dimensões escolhidas e compactado com LZW localmente.',
      },
      {
        question: 'Qual é a diferença entre a pré-visualização ao vivo e o GIF gerado?',
        answer:
          'Antes de codificar, a tela de pré-visualização reproduz as suas imagens enviadas em tempo real usando as suas durações atuais em milissegundos e os ajustes de enquadramento, para você conferir o ritmo na hora. Ao gerar o GIF, essas escolhas são fixadas em um arquivo .gif real de 256 cores quantizadas.',
      },
      {
        question: 'Posso pausar por mais tempo em um slide de título ou no quadro final do GIF?',
        answer:
          'Sim. Enquanto a Duração padrão do quadro define a velocidade base (50 ms a 3000 ms) de toda a sequência, cada cartão de quadro tem um campo opcional de Duração (ms) que aceita de 20 ms a 10.000 ms para segurar slides específicos por mais tempo.',
      },
      {
        question: 'A que equivalem as opções rápidas de 1, 2, 5 e 10 FPS do criador de GIF?',
        answer:
          'Esses botões convertem quadros por segundo em intervalos exatos em milissegundos: 1000 ms para 1 FPS, 500 ms para 2 FPS, 200 ms para 5 FPS e 100 ms para 10 FPS. Depois, você pode ajustar o controle em incrementos de 25 ms.',
      },
      {
        question: 'Quais opções de repetição o GIF final oferece?',
        answer:
          'Em Comportamento de repetição, você pode escolher Sempre para reprodução infinita, Definir repetições para especificar uma quantidade exata entre 2 e 50 reproduções, ou Reproduzir uma vez para a animação parar no quadro final. Os bytes de extensão Netscape são gravados automaticamente conforme a sua escolha.',
      },
      {
        question: 'Como escolho entre Conter e Cobrir no ajuste de quadros do GIF?',
        answer:
          'Conter dimensiona cada imagem para caber por completo dentro do quadro do GIF, preenchendo as barras restantes com a sua cor de fundo fosca. Cobrir amplia cada foto levemente para preencher toda a tela de ponta a ponta sem barras, cortando as bordas que sobram.',
      },
      {
        question: 'Como lidar com imagens de proporções diferentes em uma mesma animação GIF?',
        answer:
          'Escolha Conter se você nunca quiser cortar logotipos ou fotos verticais, e combine a amostra de fundo fosco com o fundo do seu site ou do modo escuro. Escolha Cobrir ao combinar fotos casuais de formatos variados em uma apresentação uniforme de tela cheia.',
      },
      {
        question: 'Quais são as dimensões mínimas e máximas em pixels de um GIF gerado?',
        answer:
          'A largura e a altura de saída aceitam valores de 16 px a 2000 px, com botões rápidos de 480 px, 640 px, 800 px e Original. Mantenha a proporção travada ao dimensionar uma dimensão proporcionalmente.',
      },
      {
        question: 'Por que a ferramenta mostra um aviso de GIF grande acima de 5 MB ou 15 MB?',
        answer:
          'Como o GIF guarda quadros rasterizados completos com um limite de 256 cores em vez da compressão moderna entre quadros de vídeo, as animações largas de alta resolução crescem rápido. Mudar a largura para 480 px ou 640 px, ou baixar a qualidade da paleta de cores, reduz bastante o peso do arquivo para aplicativos de chat e e-mail.',
      },
      {
        question: 'O que controla o controle de qualidade da paleta de cores do GIF?',
        answer:
          'A qualidade da paleta de cores (de 10% a 100%, com 80% como padrão) ajusta com que precisão o quantizador amostra os pixels dos quadros ao construir cada paleta de 256 cores. Os valores altos preservam gradientes de cor mais suaves, enquanto os valores baixos aceleram a codificação e costumam reduzir o tamanho em bytes.',
      },
      {
        question: 'Quantos quadros de origem devo combinar em um GIF feito no navegador?',
        answer:
          'A fila de quadros não tem um limite fixo de quantidade de arquivos, embora combinar de 2 a 40 quadros de 480 px a 800 px de largura costuma funcionar sem problemas na memória típica de navegadores de computador e celular. Pilhas maiores de imagens 4K podem ser adicionadas em lotes de até 20 MB por arquivo de entrada.',
      },
      {
        question: 'Posso repetir um quadro sem enviar o mesmo arquivo duas vezes no criador de GIF?',
        answer:
          'Sim. Clique no ícone de duplicar de qualquer cartão de quadro para clonar aquele slide junto com a sua duração personalizada ao lado do original, e depois arraste-o ou mova-o com as setas para qualquer lugar da linha do tempo.',
      },
      {
        question: 'Preciso enviar tudo de uma vez ou posso adicionar mais quadros depois no criador de GIF?',
        answer:
          'Você pode adicionar mais imagens a qualquer momento com o botão Adicionar quadros no cabeçalho de Quadros. A sua ordem atual de quadros, as durações personalizadas e as dimensões de saída continuam intactas quando novos quadros são incluídos.',
      },
      {
        question: 'As exportações HEIC ou rajadas de Live Photo do iPhone funcionam neste criador de GIF?',
        answer:
          'Sim. Se você selecionar várias imagens .heic ou .heif de até 20 MB cada uma, a página as decodifica localmente no seu navegador via WebAssembly antes de montar a sua animação.',
      },
      {
        question: 'O que acontece se eu mudar os ajustes depois de já ter gerado um GIF?',
        answer:
          'Clique em Voltar ao editor de quadros abaixo da pré-visualização do GIF finalizado para desbloquear a sua linha do tempo e os seus controles. Ajuste durações, repetições, dimensões ou a ordem dos quadros livremente e gere um arquivo novo na hora.',
      },
      {
        question: 'O GIF gerado preserva os fundos transparentes sem problemas?',
        answer:
          'Antes de a quantização LZW ser executada, cada quadro é composto sobre a sua cor de fundo fosca selecionada (branco por padrão). Isso evita bordas pretas serrilhadas ao redor de bordas suavizadas de PNG ou SVG.',
      },
      {
        question: 'Posso extrair um único quadro de um GIF existente se enviar um arquivo .gif?',
        answer:
          'Quando você solta uma imagem .gif como quadro de origem, o HTML5 Canvas carrega o quadro inicial dela na sequência como qualquer foto estática. Use as ferramentas Divisor de imagens ou Compressor de GIF se precisar recodificar GIFs animados existentes.',
      },
      {
        question: 'Marcas d\'água ou cartões finais promocionais são adicionados ao meu GIF baixado?',
        answer:
          'Nunca. Cada GIF animado codificado contém apenas os seus quadros e ajustes escolhidos, sem marcas, marcas d\'água nem limites de uso.',
      },
      {
        question: 'Por que a minha proporção se manteve fixa ao editar a largura de saída do GIF?',
        answer:
          'A proporção travada fica ativada por padrão para evitar quadros esticados ou achatados conforme as dimensões do seu primeiro slide. Clique no botão de trava para digitar uma largura e altura personalizadas independentes se precisar.',
      },
      {
        question: 'O arquivo animated_compressmypic.gif vai funcionar no Slack, no Discord e em sites?',
        answer:
          'Sim. O codificador gera arquivos binários padrão GIF89a com extensões de repetição Netscape, o que garante ampla compatibilidade de reprodução em navegadores, aplicativos de chat, blogs e ferramentas de apresentação.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/image-splitter', '/image-resizer', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: 'Criador de colagens de imagens',
    shortDescription: 'Organize fotos em grades 2×2, 3×3 ou faixas com troca por arrastar e exportação.',
    category: 'create',
    seoTitle: 'Criador de colagens de fotos grátis online',
    seoDescription:
      'Crie colagens grátis online no seu navegador: grades 2×2 e 3×3 ou faixas, arraste as células para trocar de lugar e exporte em JPG ou PNG de até 4000 px.',
    h1: 'Criador de colagens de imagens grátis online',
    subtitle:
      'Monte grades de fotos limpas, faixas de antes e depois e layouts de stories com o nosso criador de colagens de imagens grátis direto no seu navegador. Feito para criadores de conteúdo, vendedores online e famílias, ele aceita grades 2×2 e 3×3 junto com faixas verticais e horizontais, com troca de células por arrastar, divisões ajustáveis, cantos arredondados, espaçamentos personalizados e exportação JPG ou PNG sem marca d\'água de até 4000 px.',
    howToSteps: [
      {
        title: 'Envie fotos para o estúdio de colagem',
        description:
          'Solte imagens JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 20 MB cada uma; ao soltar 5 ou mais, a grade 3×3 é escolhida automaticamente, enquanto 4 ou menos selecionam a grade 2×2.',
      },
      {
        title: 'Escolha um layout de grade ou faixa',
        description:
          'Alterne livremente entre grade 2×2 (4 células), grade 3×3 (9 células), faixa vertical ou faixa horizontal no painel de layout da colagem.',
      },
      {
        title: 'Reordene ou preencha os espaços da colagem',
        description:
          'Arraste qualquer célula sobre outra para trocar de posição, toque em dois espaços em sequência em telas de toque, use as setas para esquerda/direita ou clique em Adicionar fotos para preencher os espaços abertos.',
      },
      {
        title: 'Ajuste as proporções, os espaços e os cantos das células',
        description:
          'Ajuste a divisão de colunas, a divisão de linhas ou o destaque da célula principal (ou clique em Células iguais), e depois defina o espaçamento (0–80 px) e o raio da célula (0–60 px).',
      },
      {
        title: 'Escolha a cor de fundo, o ajuste de imagem e o tamanho de saída',
        description:
          'Escolha o enquadramento Cobrir ou Conter, selecione uma amostra de cor de fundo ou um código hexadecimal, e digite dimensões de 200 a 4000 px (ou clique nas opções rápidas 1200×1200, 1920×1080 ou 1080×1920).',
      },
      {
        title: 'Exporte a sua colagem finalizada',
        description:
          'Escolha JPG (com controle de qualidade de 10–100%) ou PNG (sem perda) e clique em Baixar colagem para salvar o seu layout em resolução completa localmente.',
      },
    ],
    features: [
      {
        title: '4 layouts de colagem limpos',
        description:
          'Crie quadrados equilibrados 2×2, grades de fotos 3×3, stories verticais de celular ou faixas horizontais amplas de comparação.',
      },
      {
        title: 'Reordenação de células por arrastar',
        description:
          'Arraste qualquer célula de foto sobre outro espaço para trocar de posição na hora, ou toque em duas células no celular.',
      },
      {
        title: 'Proporções de célula e espaços personalizados',
        description:
          'Ajuste com precisão as divisões de colunas, as divisões de linhas, o destaque da célula principal, o espaçamento, o arredondamento dos cantos e a cor de fundo.',
      },
      {
        title: 'Exportação JPG e PNG de alta resolução',
        description:
          'Renderize colagens em resolução completa de até 4000 px direto no HTML5 Canvas, sem marcas d\'água.',
      },
    ],
    faqs: [
      {
        question: 'Quais layouts este criador de colagens de imagens inclui?',
        answer:
          'Você pode alternar na hora entre grade 2×2 (4 células), grade 3×3 (9 células), faixa vertical (coluna de cima para baixo) e faixa horizontal (linha lado a lado). Ao selecionar faixa vertical ou horizontal, dimensões padrão úteis são definidas automaticamente (1080×1920 ou 1920×720), e você pode ajustá-las livremente depois.',
      },
      {
        question: 'Como funciona a troca por toque se eu fizer uma colagem no celular ou no tablet?',
        answer:
          'Em telas de toque, onde arrastar é incômodo, basta tocar no primeiro cartão de célula em Reordenar células para destacá-lo e depois tocar em um segundo espaço para trocar as fotos na hora. Também há botões de seta para esquerda e direita abaixo de cada espaço.',
      },
      {
        question: 'O que acontece se eu enviar menos fotos do que a quantidade de células de uma grade 3×3?',
        answer:
          'As células sem preenchimento aparecem como marcadores limpos com linhas tracejadas «Espaço N» dentro da pré-visualização ao vivo, para você inspecionar o layout enquanto adiciona as imagens restantes. Você pode clicar no botão + direto em um cartão vazio ou mudar para um layout 2×2 ou de faixa para combinar com a sua quantidade exata de imagens.',
      },
      {
        question: 'Posso deixar uma foto em destaque maior do que as outras em uma grade ou faixa?',
        answer:
          'Sim. Na grade 2×2, você pode arrastar a divisão de colunas e a divisão de linhas de 20% a 80%; na grade 3×3, pode mudar o tamanho da coluna central e da linha central; e nas faixas verticais ou horizontais, pode aumentar o destaque da célula principal em até +100%.',
      },
      {
        question: 'Como volto os controles de células desiguais para uma grade uniforme?',
        answer:
          'Clique no botão Células iguais na seção Proporções e espaçamento de células. Ele restaura a divisão de colunas, a divisão de linhas e o destaque principal para divisões equilibradas e iguais com um clique.',
      },
      {
        question: 'Posso fazer uma colagem sem bordas, com zero espaço entre as fotos?',
        answer:
          'Sim. Arraste tanto o espaçamento quanto o raio da célula até 0 px para que as fotos vizinhas se encontrem borda com borda, sem linhas de junta visíveis nem cantos arredondados.',
      },
      {
        question: 'Quando devo mudar o ajuste de imagem de Cobrir para Conter na colagem?',
        answer:
          'Cobrir preenche cada célula retangular de ponta a ponta, cortando bordas sutis que ficam fora da proporção da célula, ideal para grades uniformes de estilo de vida. Conter reduz cada imagem até que todo o assunto caiba dentro da sua célula sem ser cortado, mostrando a cor de fundo atrás de qualquer margem aberta.',
      },
      {
        question: 'Posso ajustar o espaçamento das células e o raio dos cantos arredondados separadamente?',
        answer:
          'Sim. O espaçamento ajusta as margens externas e as larguras das juntas de 0 px a 80 px, enquanto o raio da célula arredonda suavemente cada canto da caixa de foto de 0 px a 60 px.',
      },
      {
        question: 'Quais dimensões rápidas de tela e proporções predefinidas a colagem aceita?',
        answer:
          'Você pode digitar qualquer tamanho de saída personalizado entre 200 px e 4000 px em cada lado para cartões personalizados de impressão ou de redes sociais. Também há botões rápidos integrados para 1200×1200 Quadrado, 1920×1080 Horizontal e 1080×1920 Story.',
      },
      {
        question: 'Quais amostras de cor de fundo aparecem por padrão na colagem?',
        answer:
          'Você tem amostras de um clique para branco puro (#ffffff), azul-escuro profundo (#0f172a) e cinza neutro suave (#f1f5f9). Um seletor de cor nativo completo fica ao lado sempre que você precisar de um valor hexadecimal exato de marca.',
      },
      {
        question: 'Enviar uma mistura de fotos HEIC de iPhone, PNG e JPG em uma mesma colagem funciona?',
        answer:
          'Sim. Cada arquivo enviado, incluindo JPG, PNG, WebP, HEIC/HEIF, GIF, BMP e SVG de até 20 MB, é decodificado em particular no seu navegador e desenhado em um único HTML5 Canvas unificado.',
      },
      {
        question: 'Se eu colocar adesivos PNG transparentes dentro das células, o que aparece atrás deles?',
        answer:
          'Cada célula é renderizada sobre a cor de fundo selecionada antes de compor a imagem em primeiro plano. Isso mantém os logotipos PNG transparentes e os recortes limpos contra branco, azul-escuro ou tons personalizados.',
      },
      {
        question: 'Devo salvar a minha colagem finalizada como JPG ou PNG (sem perda)?',
        answer:
          'Escolha JPG com qualidade de 85% a 95% para grades de fotografia leves destinadas a Instagram, WhatsApp ou e-mail. Escolha PNG (sem perda) ao combinar capturas de interface nítidas, diagramas ou gráficos de texto, onde os halos de compressão JPEG seriam incômodos.',
      },
      {
        question: 'Como o nome do arquivo exportado indica quais ajustes de colagem eu usei?',
        answer:
          'Cada exportação baixada incorpora automaticamente o layout e as dimensões em pixels, produzindo nomes como collage_2x2_1200x1200.jpg. Esse padrão de nomes ajuda você a organizar várias variações de proporção sem renomear manualmente.',
      },
      {
        question: 'As minhas fotos de família ou fotos de antes e depois são enviadas para algum lugar?',
        answer:
          'Não. A decodificação de imagens, a composição do layout de grade e a exportação de Canvas em alta resolução acontecem estritamente dentro da aba do seu navegador, então nenhuma foto sai do seu celular ou computador.',
      },
      {
        question: 'A pré-visualização da colagem corresponde à exportação exata em pixels a 4000 px?',
        answer:
          'Sim. Tanto o cenário ao vivo quanto a exportação final compartilham exatamente a mesma matemática de proporção e cantos, dimensionando o espaçamento e o raio da célula suavemente em relação ao tamanho de saída escolhido, então as juntas exportadas correspondem ao que você vê.',
      },
      {
        question: 'Quantas fotos uma faixa vertical ou horizontal pode conter de uma vez?',
        answer:
          'As faixas verticais e horizontais aceitam de 2 a 6 espaços dinâmicos, conforme quantas imagens você carrega. Isso facilita criar comparações de dois painéis ou faixas de história de vários quadros.',
      },
      {
        question: 'Posso remover uma única foto de uma colagem sem começar de novo?',
        answer:
          'Sim. Clique no botão de lixeira de qualquer cartão de espaço em Reordenar células para remover aquela foto mantendo intactas todas as suas outras imagens enviadas, os ajustes de layout e as divisões personalizadas.',
      },
      {
        question: 'Qual é a resolução máxima em que posso exportar para imprimir uma colagem de fotos?',
        answer:
          'Tanto a largura quanto a altura de saída chegam a 4000×4000 pixels, entregando 16 megapixels de detalhe nítido. Essa resolução atende bem impressões de fotos de mesa, catálogos e slides de alta densidade de pixels.',
      },
      {
        question: 'Existe algum limite de quantas colagens posso criar ou exportar?',
        answer:
          'Não. Você pode mudar layouts, ajustar cores e exportar colagens ilimitadas grátis, sem contas, marcas d\'água nem limites diários de exportação.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: 'Comprimir imagem para 50 KB',
    shortDescription: 'Reduza fotos JPG, PNG e WebP para menos de 50 KB estritos para formulários.',
    category: 'compress',
    seoTitle: 'Comprimir imagem para 50 KB grátis online',
    seoDescription:
      'Comprima imagens para 50 KB grátis online para portais de passaporte, formulários e avatares. Busca binária de qualidade e redimensionamento inteligente.',
    h1: 'Comprimir imagem para 50 KB online',
    subtitle:
      'Prepare fotos de passaporte, escaneamentos de visto, assinaturas manuscritas e avatares compactos de perfil para limites estritos de portais quando você precisa comprimir uma imagem para 50 KB de forma confiável. Funciona 100% localmente no seu navegador com arquivos de até 25 MB, combinando busca binária de qualidade com redimensionamento opcional de pixels para que os documentos sensíveis nunca toquem servidores externos.',
    howToSteps: [
      {
        title: 'Solte a sua imagem ou escaneamento de documento',
        description:
          'Envie um ou vários arquivos JPG, PNG, WebP ou HEIC de até 25 MB (ou cole fotos copiadas com Ctrl+V).',
      },
      {
        title: 'Selecione o formato de saída (Original, JPG, WebP ou PNG)',
        description:
          'Escolha JPG ou WebP para limites estritos de fotos de 50 KB, ou mantenha Original com a conversão automática de PNG ativada para capturas pesadas.',
      },
      {
        title: 'Confira os controles de redimensionamento e conversão automática',
        description:
          'Mantenha ativado o redimensionamento inteligente de dimensões para fotos de muitos megapixels, ou desative-o para conservar as dimensões exatas em pixels quando um portal exigir.',
      },
      {
        title: 'Confira os selos de bytes verificados e a visualização de comparação',
        description:
          'Confira cada cartão para ver o selo verde «Menos de 50 KB» e abra a visualização Comparar para verificar se os traços faciais ou as linhas da assinatura continuam legíveis.',
      },
      {
        title: 'Baixe arquivos individuais ou Baixar tudo (ZIP)',
        description:
          'Salve cada arquivo <nome>_50kb individualmente, use Manter original se o arquivo já era menor, ou empacote lotes em compressmypic_50kb.zip.',
      },
    ],
    features: [
      {
        title: 'Busca binária de qualidade + redimensionamento de dimensões',
        description:
          'Encontra primeiro a maior qualidade visual abaixo de 50 KB com os pixels originais, e depois reduz a resolução suavemente se preciso.',
      },
      {
        title: 'Relato honesto de resultados',
        description:
          'Nunca finge o tamanho de saída: se um PNG sem perda ou uma resolução travada não cabe em 50 KB, ele explica claramente.',
      },
      {
        title: 'Alternativa inteligente de PNG para WebP/JPG',
        description:
          'Converte opcionalmente PNGs pesados sem perda para WebP ou JPG para que as fotos fiquem nítidas ao chegar a 50 KB.',
      },
      {
        title: 'Processamento privado no navegador',
        description: 'Passaportes, fotos de identidade e formulários pessoais nunca saem do seu dispositivo.',
      },
    ],
    faqs: [
      {
        question: 'Quais portais comuns exigem o envio de uma imagem de menos de 50 KB?',
        answer:
          'Solicitações de visto do governo, renovações de passaporte, registros de exames de serviço público, formulários de admissão universitária e campos de escaneamento de assinatura frequentemente impõem limites estritos de envio de 20 KB a 50 KB. Manter o seu arquivo confortavelmente abaixo de 50 KB evita tempos de espera no envio de formulários e erros de rejeição.',
      },
      {
        question: 'Por que as fotos de passaporte e os escaneamentos de identidade são seguros de reduzir para 50 KB aqui?',
        answer:
          'Cada operação de pixels, da decodificação HEIC à busca binária de compressão e ao empacotamento ZIP, é executada localmente dentro da sua própria aba do navegador. As fotos de identidade sensíveis, as assinaturas e os registros pessoais nunca são enviados pela internet.',
      },
      {
        question: 'Por que reduzir para 50 KB uma foto de 12 megapixels costuma exigir redimensionamento de dimensões?',
        answer:
          'Uma foto completa de 4000×3000 pixels contém 12 milhões de pixels, cujos dados Huffman JPEG de base costumam passar de 200 KB mesmo com compressão forte. Com o redimensionamento inteligente de dimensões ativado, o otimizador reduz as dimensões suavemente até que o detalhe facial nítido caiba limpo abaixo de 50 KB.',
      },
      {
        question: 'Devo escolher JPG ou WebP ao enviar uma imagem de menos de 50 KB para um portal de exames ou do governo?',
        answer:
          'Escolha sempre JPG para formulários antigos de governo, passaporte, bolsas ou bancos, porque muitos scripts de validação rejeitam envios .webp mesmo sendo menores. Escolha WebP para avatares web modernos ou sites pessoais, onde a nitidez máxima a 50 KB importa.',
      },
      {
        question: 'Como a ferramenta otimiza assinaturas manuscritas ou documentos escaneados para menos de 50 KB?',
        answer:
          'Os escaneamentos de tinta preta sobre papel branco brilhante são compactados agressivamente em JPG ou WebP depois que a resolução excedente é cortada. Conferir o modal Comparar garante que os traços de tinta fiquem limpos sem blocos de compressão borrados ao redor das bordas do texto.',
      },
      {
        question: 'Por que apareceu um aviso vermelho de «Cresceu» quando o meu arquivo já pesava 32 KB?',
        answer:
          'Se um JPG ou PNG já leve for recodificado com alta qualidade no Canvas, o novo fluxo de bytes às vezes pode ficar em 40 KB em vez de diminuir mais. Basta clicar em Manter original naquele cartão para manter o seu arquivo original exato de 32 KB.',
      },
      {
        question: 'Posso manter as dimensões exatas de 600×600 px se o meu portal de visto exige pixels fixos e um máximo de 50 KB?',
        answer:
          'Sim. Desative «Permitir redimensionamento inteligente de dimensões» para que as dimensões em pixels fiquem travadas em 100%, deixando a busca binária testar a qualidade JPEG ou WebP até 5% com as suas dimensões exatas. Se um retrato de 600×600 for razoavelmente limpo, ele cabe facilmente abaixo de 50 KB sem mudar de tamanho.',
      },
      {
        question: 'Por que fixar o formato de saída em PNG costuma ativar um aviso de objetivo não alcançado a 50 KB?',
        answer:
          'Como o PNG usa compressão DEFLATE sem perda, que ignora os controles de qualidade, só ícones planos ou miniaturas minúsculas se compactam para menos de 50 KB como PNG. Deixe o formato em Original com a conversão automática ativada, ou mude direto para JPG, para que as imagens fotográficas cheguem a 50 KB sem problemas.',
      },
      {
        question: 'O que acontece se eu enviar um PNG de assinatura transparente e convertê-lo para JPG para chegar a 50 KB?',
        answer:
          'Ao selecionar JPG, aparece a amostra de cor fosca para PNG transparente (branco puro #ffffff por padrão). Todas as regiões de fundo transparentes são preenchidas sobre branco sólido antes da codificação JPEG, então a tinta preta fica nítida em vez de virar preto sólido.',
      },
      {
        question: 'Posso soltar direto uma selfie HEIC de 15 MB do iPhone para reduzi-la para menos de 50 KB?',
        answer:
          'Sim. Arquivos de até 25 MB são aceitos, incluindo fotos HEIC/HEIF da Apple, que são decodificadas automaticamente no navegador via WebAssembly e compactadas para 50 KB em uma única passada.',
      },
      {
        question: 'Quais passos de escala o otimizador testa quando as dimensões a 100% passam de 50 KB?',
        answer:
          'Quando as dimensões completas não conseguem passar de 50 KB com qualidade aceitável, o motor testa fatores de redução progressivos que começam em 82% e descem até 10% (com um mínimo de 16 px). Em cada passo, ele executa uma busca binária de qualidade nova e para nas maiores dimensões legíveis abaixo de 50 KB.',
      },
      {
        question: 'Comprimir um retrato de fundo escuro para menos de 50 KB vai causar faixas de cor visíveis?',
        answer:
          'As sombras escuras suaves com objetivos agressivos de 50 KB podem mostrar um leve bloqueio se as dimensões forem mantidas enormes. Ao permitir o redimensionamento de dimensões, a ferramenta codifica dimensões um pouco menores com um fator de qualidade mais alto, de 70% a 85%, produzindo gradientes mais suaves do que dimensões enormes com qualidade de 10%.',
      },
      {
        question: 'O compressor para 50 KB remove as etiquetas ocultas de localização GPS da minha foto de identidade?',
        answer:
          'Sim. Ao desenhar a sua imagem no HTML5 Canvas, os metadados EXIF como números de série de câmera, miniaturas e coordenadas GPS são removidos, protegendo a sua privacidade e liberando kilobytes extras para o detalhe visível da imagem.',
      },
      {
        question: 'Como a ferramenta decide se mostra o selo «Menos de 50 KB»?',
        answer:
          'Depois de codificar o Blob final, ela verifica o tamanho exato em bytes contra 51.200 bytes (50 × 1024). Só os arquivos estritamente iguais ou abaixo desse limite exato em bytes recebem o selo verde de confirmação «Menos de 50 KB».',
      },
      {
        question: 'Posso processar juntos um retrato e um escaneamento de assinatura para menos de 50 KB?',
        answer:
          'Sim. Solte várias imagens de até 25 MB cada uma na fila, ajuste a sua preferência de formato e baixe cada arquivo individualmente ou empacote-os em compressmypic_50kb.zip.',
      },
      {
        question: 'O que fazer se um portal exige, na verdade, 20 KB ou 30 KB em vez de 50 KB?',
        answer:
          'Clique no link «Precisa de um objetivo diferente em KB?» dentro do cabeçalho do objetivo para ir direto ao compressor de tamanho de arquivo personalizado, onde você pode digitar qualquer limite personalizado, como 20 KB ou 30 KB.',
      },
      {
        question: 'Até que tamanho de arquivo o compressor para 50 KB aceita?',
        answer:
          'Arquivos de entrada individuais de até 25 MB são aceitos nos formatos JPG, PNG, WebP, HEIC/HEIF, GIF, BMP e SVG. As entradas de GIF animado exportam um quadro estático otimizado abaixo de 50 KB.',
      },
      {
        question: 'Por que a ferramenta mira logo abaixo de 50 KB (por volta de 48–49,9 KB) em vez de parar em 25 KB?',
        answer:
          'A sua busca binária otimiza até 7 iterações para ficar dentro de 96% a 100% do limite de 50 KB sempre que possível. Isso maximiza a nitidez visual usando quase cada kilobyte disponível abaixo do limite.',
      },
      {
        question: 'Os nomes dos arquivos baixados são marcados claramente para não confundi-los com os meus arquivos originais de alta resolução?',
        answer:
          'Sim. Cada arquivo de saída adiciona automaticamente _50kb antes da extensão, como portrait_50kb.jpg, deixando o seu arquivo original intacto no seu dispositivo.',
      },
      {
        question: 'Posso conferir a nitidez no celular antes de enviá-la para um portal de formulários?',
        answer:
          'Sim. A interface completa, incluindo o visualizador interativo Comparar, funciona sem problemas no Safari do iOS e no Chrome do Android, tornando rápidas e confiáveis as apresentações de formulários em movimento.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/image-resizer',
    ],
  },
  {
    slug: '/compress-image-to-100kb',
    name: 'Comprimir imagem para 100 KB',
    shortDescription: 'Reduza o tamanho da imagem para menos de 100 KB sem desfoque visível.',
    category: 'compress',
    seoTitle: 'Comprimir imagem para 100 KB grátis online',
    seoDescription:
      'Comprima imagens para 100 KB grátis online para portais de emprego, currículos e páginas web. Mantenha os detalhes nítidos com busca de qualidade e ZIP.',
    h1: 'Comprimir imagem para 100 KB online',
    subtitle:
      'Alcance o ponto ideal testado para web e portais quando você comprime uma imagem para 100 KB sem sacrificar nitidez. Feito para candidatos a emprego que anexam fotos de portfólio, blogueiros que preparam miniaturas rápidas de artigos e portais de recursos humanos com limites de anexo apertados, esta ferramenta local testa ajustes de qualidade e redimensionamento opcional dentro do seu navegador com entradas de até 25 MB.',
    howToSteps: [
      {
        title: 'Adicione a sua foto ou gráfico de artigo',
        description:
          'Arraste e solte uma ou várias imagens JPG, PNG, WebP ou HEIC de até 25 MB cada uma no espaço de trabalho.',
      },
      {
        title: 'Confirme o formato de saída e o comportamento de alternativa',
        description:
          'Mantenha Original (com alternativa automática para WebP/JPG para PNGs grandes demais) ou aponte explicitamente para JPG ou WebP para uma saída consistente.',
      },
      {
        title: 'Escolha se a redução de pixels é permitida',
        description:
          'Deixe ativado o redimensionamento inteligente de dimensões para resultados nítidos de 800 px a 1400 px, ou desative-o para conservar 100% da largura e altura originais em pixels.',
      },
      {
        title: 'Compare a nitidez visual com o original',
        description:
          'Confira a porcentagem economizada e o selo exato de KB de saída, e depois abra Comparar em qualquer cartão para conferir a nitidez das bordas lado a lado.',
      },
      {
        title: 'Baixe arquivos individuais ou um ZIP em lote',
        description:
          'Salve arquivos individuais <nome>_100kb na hora ou clique em Baixar tudo (ZIP) para baixar compressmypic_100kb.zip com um clique.',
      },
    ],
    features: [
      {
        title: 'Qualidade máxima abaixo de 100 KB',
        description:
          'Em vez de usar um controle de qualidade baixo arbitrário, a busca binária fixa a qualidade mais alta abaixo de 100 KB.',
      },
      {
        title: 'Conserva a resolução quando possível',
        description:
          'Mantém 100% da largura e altura originais em pixels sempre que o ajuste de qualidade por si só cumpre o limite de 100 KB.',
      },
      {
        title: 'Alertas transparentes de limitação',
        description:
          'Avisa claramente se um PNG travado ou ajustes 4K sem redimensionamento impedem chegar a 100 KB.',
      },
      {
        title: 'Privacidade 100% local',
        description: 'Sem envios, sem marcas d\'água e sem cadastro obrigatório.',
      },
    ],
    faqs: [
      {
        question: 'Por que 100 KB é considerado o ponto ideal para currículos, portais de emprego e sites?',
        answer:
          'Com cerca de 100 KB, uma foto típica de 1000 px a 1400 px carrega rápido mesmo em redes 3G de celular, mantendo intactos os detalhes faciais finos, a tipografia nítida e a profundidade natural de cor. A maioria dos sistemas de recrutamento e criadores de currículos em PDF aceita confortavelmente recursos de menos de 100 KB sem cortar nem bloquear.',
      },
      {
        question: 'Um banner web Full HD de 1920×1080 consegue manter as dimensões completas ao ser reduzido para 100 KB?',
        answer:
          'Sim, em muitos casos, especialmente fotos de produto limpas, ilustrações de interface ou fundos com desfoque suave compactados em WebP ou JPG. Se uma cena de paisagem movimentada ainda passar de 100 KB com qualidade de 35%, o redimensionamento opcional reduz a largura suavemente (como 82% ou 68%) para proteger a nitidez.',
      },
      {
        question: 'Como a busca binária de qualidade mantém o meu arquivo de 100 KB o mais nítido possível?',
        answer:
          'Em vez de adivinhar um nível baixo de compressão estático, como 40%, o motor testa limites de qualidade superior e inferior em até 7 passos binários. Ele para logo dentro da faixa de 96% a 100% abaixo de 102.400 bytes, maximizando a fidelidade de pixels para o orçamento exato de tamanho de arquivo.',
      },
      {
        question: 'Quando devo desativar a conversão automática de PNGs grandes ao mirar em 100 KB?',
        answer:
          'Se uma infografia plana, um ícone de interface ou um diagrama de duas cores precisa se manter estritamente como PNG sem perda e já cabe limpo abaixo de 100 KB, deixar Original ou escolher PNG funciona muito bem. No entanto, para PNGs fotográficos, manter a conversão automática ativada muda as fotos opacas para JPG ou as transparentes para WebP, para que você conserve pixels nítidos abaixo de 100 KB.',
      },
      {
        question: 'Os logotipos PNG transparentes perdem a transparência se forem convertidos automaticamente para menos de 100 KB?',
        answer:
          'Não. Antes de mudar de um PNG grande demais no modo Original, o compressor detecta a transparência alfa do seu arquivo e escolhe automaticamente WebP (conservando a transparência completa) em vez de JPG sempre que existirem pixels alfa.',
      },
      {
        question: 'Como comprimir para 100 KB afeta as métricas Core Web Vitals e o peso da página?',
        answer:
          'Cortar miniaturas de destaque de 2 MB ou cabeçalhos de artigo de 800 KB para 95 KB reduz drasticamente o carregamento da página sem degradar visualmente os cartões de layout. As imagens mais leves melhoram diretamente o Largest Contentful Paint (LCP) tanto em visitantes de celular quanto de computador.',
      },
      {
        question: 'Posso reduzir gráficos de boletins por e-mail para menos de 100 KB para carregarem mais rápido na caixa de entrada?',
        answer:
          'Sim. Escolher a saída JPG mantém amplo suporte de clientes de e-mail no Outlook, Apple Mail e Gmail, garantindo que os boletins de várias imagens fiquem rápidos e leves abaixo dos limites de peso dos filtros de spam.',
      },
      {
        question: 'O que acontece quando um arquivo que eu envio ao compressor para 100 KB já pesa 65 KB?',
        answer:
          'O compressor percebe que o seu arquivo já está abaixo de 100 KB e produz uma exportação limpa em resolução completa. Se a recodificação no HTML5 Canvas criar um arquivo levemente maior do que 65 KB, um aviso vermelho permite clicar em Manter original na hora.',
      },
      {
        question: 'Por que o modal Comparar ajuda ao ajustar imagens para 100 KB?',
        answer:
          'Ver uma cortina dividida de antes e depois permite verificar se o cabelo fino, o tecido textil ou o texto minúsculo de capturas se manteve limpo depois da compressão. Se aparecerem artefatos com a resolução travada, mudar de JPG para WebP costuma resolver dentro do mesmo orçamento de 100 KB.',
      },
      {
        question: 'Este redutor para 100 KB remove automaticamente as etiquetas EXIF da câmera?',
        answer:
          'Sim. Desenhar no HTML5 Canvas remove as miniaturas de câmera embutidas, os blocos XMP do Lightroom e as coordenadas GPS, o que muitas vezes economiza de 20 KB a 60 KB por si só antes de a compressão visual começar.',
      },
      {
        question: 'Posso arrastar uma pasta inteira de miniaturas de blog para comprimir todas para 100 KB?',
        answer:
          'Sim. Envie vários arquivos de até 25 MB cada um em uma fila, espere alguns segundos enquanto cada imagem é processada sequencialmente no seu navegador e salve tudo dentro de compressmypic_100kb.zip.',
      },
      {
        question: 'O que fazer se um portal de currículos aceita JPG de até 100 KB, mas rejeita arquivos WebP?',
        answer:
          'Selecione JPG em Formato de saída em vez de deixá-lo em Original, antes ou depois de enviar. O compressor vai reprocessar cada imagem estritamente como .jpg padrão abaixo de 100 KB e aplicar a sua cor fosca selecionada a qualquer área transparente.',
      },
      {
        question: 'Por que a minha captura PNG de 3000×2000 foi reduzida sem problemas ao ser dimensionada para 68% a 100 KB?',
        answer:
          'O tamanho de arquivo PNG sem perda se correlaciona de perto com a quantidade total de pixels e a entropia. Dimensionar uma captura enorme modestamente e combiná-la com WebP ou JPG reduz o peso em bytes de vários megabytes para menos de 100 KB enquanto o texto se mantém confortavelmente legível.',
      },
      {
        question: 'Os CVs confidenciais, as prévias de arquitetura ou os mockups sob NDA são enviados para algum lugar?',
        answer:
          'Nunca. Todos os passos de compressão, as iterações binárias e a geração de arquivos ZIP são executados estritamente em JavaScript e Canvas locais dentro da aba do seu navegador.',
      },
      {
        question: 'Quais tipos de arquivo posso carregar no compressor para 100 KB?',
        answer:
          'Você pode soltar arquivos JPG, PNG, WebP, HEIC/HEIF de iPhone, GIF, BMP e SVG de até 25 MB por arquivo. Lembre-se de que as entradas de GIF animado compactam o quadro inicial como saída estática.',
      },
      {
        question: 'Posso escolher um objetivo personalizado como 80 KB ou 120 KB a partir desta página?',
        answer:
          'Sim, toque no link «Precisa de um objetivo diferente em KB?» no painel de tamanho do objetivo para ir direto ao nosso compressor flexível de tamanho de arquivo personalizado com qualquer entrada personalizada em KB ou MB.',
      },
      {
        question: 'Por que um objetivo PNG travado pode falhar a 100 KB mesmo ao reduzir a escala?',
        answer:
          'Quando o PNG é forçado explicitamente e o redimensionamento está desativado, uma fotografia ruidosa conserva milhões de cores únicas que não podem ser empacotadas em 100 KB sem perda. Voltar a ativar o redimensionamento de dimensões ou mudar para WebP resolve isso na hora.',
      },
      {
        question: 'Mudar os ajustes depois de terminar o meu lote volta a comprimir os meus arquivos para 100 KB automaticamente?',
        answer:
          'Sim. Ao mudar o formato de saída, o redimensionamento de dimensões, a conversão automática de PNG ou a cor fosca de JPG, os seus itens em fila são reprocessados automaticamente para 100 KB, para você comparar os resultados sem esforço.',
      },
      {
        question: 'O Windows, o macOS e o iOS abrem nativamente os arquivos _100kb.jpg e _100kb.webp baixados?',
        answer:
          'Sim. O JPEG padrão abre universalmente em todos os lugares, e o WebP moderno abre nativamente em todos os navegadores de computador atuais, no Pré-Visualização do macOS, no Fotos do Windows, no Android e no iOS.',
      },
      {
        question: 'Existe alguma cota diária ou restrição de quantidade de arquivos na ferramenta para 100 KB?',
        answer:
          'Não. Comprima quantas imagens para menos de 100 KB a memória do seu navegador aguentar, sem marcas d\'água, avisos de conta nem barreiras de pagamento.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-200kb',
      '/web-image-optimizer',
      '/target-file-size-compressor',
    ],
  },
  {
    slug: '/compress-image-to-200kb',
    name: 'Comprimir imagem para 200 KB',
    shortDescription: 'Otimize fotos para menos de 200 KB para blogs, envios a CMS e portais.',
    category: 'compress',
    seoTitle: 'Comprimir imagem para 200 KB grátis online',
    seoDescription:
      'Comprima imagens para 200 KB grátis online para WordPress, Shopify e banners de blog. Conserve os detalhes nítidos com busca binária de qualidade e ZIP.',
    h1: 'Comprimir imagem para 200 KB online',
    subtitle:
      'Prepare fotografia nítida de produtos de loja, cabeçalhos em destaque de blog e fichas de negócios quando você comprime uma imagem para 200 KB sem sobrecarga. Feito para editores de WordPress, comerciantes de Shopify e profissionais de marketing digital, ele prioriza 100% das dimensões originais primeiro e funciona completamente local com arquivos de até 25 MB, sem transferências ao servidor.',
    howToSteps: [
      {
        title: 'Envie imagens de loja ou blog',
        description:
          'Solte arquivos individuais ou lotes inteiros de imagens JPG, PNG, WebP ou HEIC de até 25 MB cada um no espaço de trabalho.',
      },
      {
        title: 'Escolha saída WebP, JPG, Original ou PNG',
        description:
          'Escolha WebP para velocidade moderna de CMS, JPG para compatibilidade universal de marketplace, ou Original para converter só os PNGs pesados automaticamente.',
      },
      {
        title: 'Ative o redimensionamento de dimensões completas ou de alternativa',
        description:
          'Mantenha ativado o redimensionamento inteligente para fotos de câmera de 24 MP, ou desative-o quando os modelos de produto exigirem estritamente as dimensões originais em pixels.',
      },
      {
        title: 'Confira a economia e o detalhe lado a lado',
        description:
          'Verifique o indicador verde «Menos de 200 KB» e arraste o controle Comparar sobre etiquetas, grão de tecido ou bordas finas de interface.',
      },
      {
        title: 'Salve recursos individuais ou Baixar tudo (ZIP)',
        description:
          'Baixe imagens individuais <nome>_200kb diretamente ou empacote o seu catálogo de loja em compressmypic_200kb.zip.',
      },
    ],
    features: [
      {
        title: 'Pronto para CMS e marketplaces',
        description: 'Ideal para envios a Shopify, WooCommerce, WordPress e Perfil da Empresa no Google.',
      },
      {
        title: 'Redimensionamento de alternativa inteligente',
        description:
          'Se uma foto de câmera de 24 MP não cabe em 200 KB em tamanho completo, o redimensionamento de dimensões entra sem problemas.',
      },
      {
        title: 'Verificação exata de KB',
        description: 'Mostra os bytes de saída verificados junto com os bytes originais e a % de redução.',
      },
      {
        title: 'Zero envios ao servidor',
        description: 'Processamento rápido em HTML5 Canvas direto no seu computador ou celular.',
      },
    ],
    faqs: [
      {
        question: 'Por que as agências de WordPress e as lojas de Shopify padronizam as fotos de produto em torno de 200 KB?',
        answer:
          'Um limite de 200 KB deixa taxa de bits suficiente para costuras nítidas, brilho metálico e etiquetas de produto legíveis, mantendo rápidas as grades de coleção para compradores de celular. Ficar abaixo de 200 KB também satisfaz limites estritos de CMS e diretórios, como o Perfil da Empresa no Google ou as regras de mídia do WooCommerce.',
      },
      {
        question: 'Uma foto de câmera de 12 ou 24 megapixels consegue chegar a 200 KB sem problemas?',
        answer:
          'Sim. Se as dimensões completas de 4000×3000 px passarem de 200 KB mesmo com qualidade de 35%, o redimensionamento inteligente de dimensões diminui proporcionalmente, muitas vezes ficando em torno de 2200 px ou 1800 px de largura com qualidade nítida de 75% a 85%.',
      },
      {
        question: 'Quando devo travar as dimensões desativando o redimensionamento inteligente de dimensões a 200 KB?',
        answer:
          'Desative o redimensionamento sempre que um marketplace ou portal de impressão exigir larguras exatas em pixels (como espaços quadrados de produto de 1600×1600 px). O otimizador vai baixar a qualidade com perda até 5% com as dimensões completas e informar honestamente se 200 KB é inalcançável sem mudar o tamanho.',
      },
      {
        question: 'Como o WebP se compara ao JPG com um objetivo de 200 KB para fotos de comércio eletrônico?',
        answer:
          'Dentro do mesmo orçamento de 200 KB, o WebP geralmente entrega sombras de estúdio visivelmente mais limpas e texto pequeno de embalagem mais nítido do que o JPG, tipicamente equivalente a um fator de qualidade 10% a 15% maior. Escolha JPG só se um backend de marketplace antigo ainda rejeitar envios .webp.',
      },
      {
        question: 'O que acontece se eu enviar um recorte de produto PNG de estúdio com fundo transparente?',
        answer:
          'Com o formato em Original e a conversão automática ativada, qualquer PNG transparente grande demais muda para WebP transparente quando o PNG por si só não consegue chegar a 200 KB com ordem. Se você escolher JPG explicitamente, as regiões transparentes são mescladas com a sua cor fosca de PNG transparente escolhida.',
      },
      {
        question: 'Por que o otimizador prefere manter a resolução a 100% antes de reduzir as dimensões em pixels?',
        answer:
          'Reduzir as dimensões descarta permanentemente o detalhe da grade de pixels, enquanto o ajuste moderado de qualidade com perda conserva bordas nítidas em largura completa. Testar primeiro qualidade de 35% a 94% com dimensões completas garante que os gráficos de destaque de computador fiquem em tamanho completo sempre que possível.',
      },
      {
        question: 'Posso otimizar em lote todo um catálogo de temporada para menos de 200 KB de uma vez?',
        answer:
          'Sim. Solte dezenas de fotos de produto de até 25 MB cada uma na fila, deixe a ferramenta inspecionar cada imagem localmente e pegue cada recurso otimizado em compressmypic_200kb.zip.',
      },
      {
        question: 'Converter fundos transparentes para JPG com fundo branco fosco ajuda a cumprir 200 KB na Amazon ou na Etsy?',
        answer:
          'Sim. Os fundos brancos puros (#ffffff) se compactam extremamente bem em JPEG enquanto cumprem as diretrizes de fundo branco dos marketplaces, liberando bytes extras dentro de 200 KB para o produto real no centro.',
      },
      {
        question: 'Por que o meu envio WebP de 140 KB mostrou um alerta de «Cresceu» depois de reprocessado?',
        answer:
          'Se um arquivo já bem otimizado abaixo de 200 KB for recodificado com a alta qualidade padrão do Canvas, ele pode ficar perto de 165 KB em vez de diminuir. Ao clicar em Manter original, o arquivo original intacto de 140 KB é restaurado na hora.',
      },
      {
        question: 'Os protótipos de produto não lançados ou os banners de campanha de clientes são guardados em servidores externos?',
        answer:
          'Não. Cada decodificação de pixels, passada de redimensionamento e criação de ZIP acontece em particular dentro da sua sessão local do navegador, tornando a ferramenta segura para lançamentos embargados e trabalho de clientes sob NDA.',
      },
      {
        question: 'O compressor para 200 KB aceita fotos HEIC/HEIF da Apple tiradas com iPhones novos?',
        answer:
          'Sim. O WebAssembly do lado do cliente decodifica arquivos HEIC de iPhone direto na aba do seu navegador, então você não precisa convertê-los antes.',
      },
      {
        question: 'Por que 200 KB costuma ser melhor do que 50 KB para infografias detalhadas ou quadros de menu?',
        answer:
          'A tipografia pequena dentro de menus de restaurantes, plantas de imóveis ou capturas de interface de software desfoca rápido se for compactada para menos de 50 KB. Um objetivo de 200 KB dá ao WebP e ao JPG quatro vezes mais margem em bytes para que as etiquetas finas fiquem nítidas.',
      },
      {
        question: 'Quão perto de 200 KB a busca binária de qualidade normalmente chega?',
        answer:
          'Depois que uma faixa de qualidade viável é encontrada em uma dada escala, até 7 iterações de busca binária miram em 96% a 100% de 204.800 bytes. Os arquivos geralmente ficam entre 192 KB e 199 KB, para você obter a nitidez máxima dentro do limite.',
      },
      {
        question: 'Os perfis de cor de DSLR e as etiquetas GPS da câmera são removidos durante a compressão para 200 KB?',
        answer:
          'Sim. Escrever imagens pelo HTML5 Canvas remove os blocos de metadados EXIF e as miniaturas de pré-visualização embutidas, melhorando a privacidade e eliminando kilobytes desperdiçados no WordPress e em servidores CDN.',
      },
      {
        question: 'O que acontece se um PNG sem perda grande demais só descer para 35% de escala para se manter como PNG abaixo de 200 KB?',
        answer:
          'Com o formato em Original e a conversão automática de PNG ativada, qualquer PNG sem perda forçado abaixo de 65% de escala muda automaticamente para WebP ou JPG. Isso permite manter dimensões em pixels bem mais nítidas enquanto supera confortavelmente o limite de 200 KB.',
      },
      {
        question: 'Posso conferir detalhes finos de tecido ou joalheria antes de baixar o arquivo de 200 KB?',
        answer:
          'Sim. Ao clicar em Comparar em qualquer cartão de resultado finalizado, abre um controle interativo de tela dividida que compara os seus pixels originais sem compactar direto com a saída compactada.',
      },
      {
        question: 'O que acontece se eu soltar um banner vetorial SVG no compressor para 200 KB?',
        answer:
          'O seu navegador rasteriza o SVG no Canvas e o otimiza em um PNG, WebP ou JPG de menos de 200 KB conforme a sua escolha de formato. Isso é útil sempre que marketplaces ou portais CMS rejeitarem envios .svg sem processar.',
      },
      {
        question: 'Qual é o tamanho máximo de arquivo de origem que o compressor para 200 KB aceita por imagem?',
        answer:
          'Cada JPG, PNG, WebP, HEIC, GIF, BMP ou SVG enviado pode ter até 25 MB. Essa margem atende exportações pesadas de câmera direto do Lightroom ou de celulares modernos sem reduzi-las antes.',
      },
      {
        question: 'Como os arquivos de saída são nomeados para mantê-los separados da minha pasta principal de produtos?',
        answer:
          'Cada cópia salva conserva o seu nome base limpo e adiciona _200kb antes da extensão, produzindo nomes claros como sneaker_side_200kb.webp. O seu original principal de alta resolução fica completamente intacto no disco.',
      },
      {
        question: 'Posso pular para outro limite exato como 150 KB ou 300 KB se um portal mudar as regras?',
        answer:
          'Sim. Use o link «Precisa de um objetivo diferente em KB?» na parte superior dos controles para abrir o compressor de tamanho de arquivo personalizado e digitar qualquer valor exato em KB ou MB.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-500kb',
      '/web-image-optimizer',
      '/bulk-image-compressor',
    ],
  },
  {
    slug: '/compress-image-to-500kb',
    name: 'Comprimir imagem para 500 KB',
    shortDescription: 'Reduza fotos de vários megabytes para menos de 500 KB com qualidade ultra alta.',
    category: 'compress',
    seoTitle: 'Comprimir imagem para 500 KB grátis online',
    seoDescription:
      'Comprima imagens para 500 KB grátis online sem perder a nitidez de alta resolução. Transforme arquivos JPG, PNG, WebP e HEIC grandes em recursos de portfólio.',
    h1: 'Comprimir imagem para 500 KB online',
    subtitle:
      'Converta quadros DSLR volumosos de 5 MB a 18 MB, exportações RAW de celular e capturas de alta resolução em recursos nítidos quando você comprime uma imagem para 500 KB localmente no seu navegador. Ideal para fotógrafos que entregam provas a clientes, fundadores que criam apresentações leves e agências que enviam galerias de portfólio, ele conserva as dimensões completas em pixels de alta resolução sempre que possível, com até 25 MB por arquivo.',
    howToSteps: [
      {
        title: 'Solte arquivos de câmera ou design em resolução completa',
        description:
          'Envie uma ou várias imagens JPG, PNG, WebP ou HEIC de até 25 MB cada uma sem mudar o tamanho delas antes.',
      },
      {
        title: 'Escolha o formato de saída para entrega de alta resolução',
        description:
          'Mantenha Original para um manuseio fluido, escolha JPG para apresentações de clientes e provas de impressão, ou selecione WebP para galerias de portfólio ultra nítidas.',
      },
      {
        title: 'Verifique as preferências de redimensionamento e alternativa de PNG',
        description:
          'Deixe ativado o redimensionamento inteligente de dimensões para fotos de 40 MP ou mais, ou desative-o para conservar dimensões estritas de 4K ou mais com qualidade otimizada.',
      },
      {
        title: 'Confira o detalhe lado a lado no modo Comparar',
        description:
          'Confira cada selo de confirmação «Menos de 500 KB» e inspecione a folhagem, a textura da pele ou a tipografia no visualizador dividido de antes e depois.',
      },
      {
        title: 'Baixe arquivos individuais ou empacote um ZIP',
        description:
          'Salve cada saída <nome>_500kb na hora ou exporte grandes conjuntos de fotos em compressmypic_500kb.zip.',
      },
    ],
    features: [
      {
        title: 'Compressão quase sem perda para 500 KB',
        description:
          '500 KB dão muita margem para manter imagens grandes de 1920 px a 4000 px visualmente indistinguíveis do original.',
      },
      {
        title: 'Decodificação automática de HEIC',
        description: 'Aceita fotos HEIC/HEIF de iPhone localmente via WebAssembly do lado do cliente.',
      },
      {
        title: 'Sem adivinhação de qualidade',
        description: 'Pare de mover porcentagens manualmente: deixe a busca binária maximizar a qualidade abaixo de 500 KB.',
      },
      {
        title: 'Privacidade 100% no navegador',
        description: 'Nada é enviado para servidores remotos.',
      },
    ],
    faqs: [
      {
        question: 'Por que 500 KB conserva uma qualidade visual quase original em fotos 4K e de 12 MP?',
        answer:
          'Meio megabyte (512.000 bytes) oferece bastante espaço para microcontraste fino, grão de filme sutil e gradientes de céu suaves em fotografias completas de 1920 px a 4000 px. A maioria das imagens chega a 500 KB sem problemas com alta qualidade de 75% a 92% sem reduzir as dimensões.',
      },
      {
        question: 'Quão bem isto funciona para anexos de apresentações de Pitch Deck, Keynote e PowerPoint?',
        answer:
          'Reduzir capturas e mockups de estúdio de PNG de 6 MB para JPG ou WebP de menos de 500 KB diminui drasticamente a sobrecarga geral da apresentação. Uma apresentação de 30 slides fica rápida para enviar por e-mail e sincronizar na nuvem enquanto parece nítida em projetores de conferência.',
      },
      {
        question: 'Posso manter a resolução original a 100% em uma foto DSLR de 24 MP ao comprimir para 500 KB?',
        answer:
          'Desative «Permitir redimensionamento inteligente de dimensões» para forçar 100% das dimensões originais em pixels, permitindo que a busca binária de qualidade desça até 5% se preciso. Para a maioria dos JPEGs de câmera de 6000×4000 px, a qualidade JPG em torno de 40% a 65% já passa de 500 KB sem reduzir um único pixel.',
      },
      {
        question: 'Por que um retrato HEIC de 15 MB de iPhone pode se manter em resolução completa abaixo de 500 KB ao ser exportado como JPG ou WebP?',
        answer:
          'As fotos HEIC de celulares modernos carregam dados de cor profundos e altas contagens de megapixels, mas são recodificadas eficientemente em JPG ou WebP com qualidade de 80% ou mais em torno de 450 a 495 KB. O desfoque de retrato e os gradientes sutis de pele se mantêm suaves em toda a tela da imagem.',
      },
      {
        question: 'O que acontece se eu enviar um mockup de painel de software em PNG sem perda de 10 MB?',
        answer:
          'Um PNG de retina de tela cheia raramente cabe dentro de 500 KB sem perda sem uma grande redução de pixels. Deixar o formato em Original com a conversão automática de PNG ativada muda-o automaticamente para WebP de alta qualidade quase sem perda ou JPG nítido, para que o texto da interface fique legível em tamanho de tela cheia.',
      },
      {
        question: 'Por que 500 KB é popular para envios de portfólio no Behance, no Dribbble e em agências?',
        answer:
          'As plataformas de portfólio e os portais de fornecedores de RFP frequentemente limitam a mídia de estudos de caso a 500 KB por imagem para manter rápidas as páginas de vários projetos. Comprimir logo abaixo de 500 KB satisfaz os validadores de envio sem ativar uma recompressão pesada do lado do servidor.',
      },
      {
        question: 'Como a ferramenta se comporta se um arquivo do meu lote já pesa 320 KB?',
        answer:
          'O compressor detecta que 320 KB já cumpre o requisito de 500 KB e processa uma cópia limpa em resolução completa. Se a recodificação produzir um arquivo levemente mais pesado, aparece o aviso «Cresceu» para você clicar em Manter original e manter os 320 KB originais.',
      },
      {
        question: 'Os fotógrafos perdem o controle da propriedade intelectual ou vazam sessões de clientes aqui?',
        answer:
          'Nunca. Seja preparando prévias de casamento, fotos de arquitetura comercial ou protótipos não lançados, cada imagem é decodificada e compactada dentro da sua aba local do navegador sem transmissão ao servidor.',
      },
      {
        question: 'Qual formato conserva uma tipografia mais nítida e linhas vetoriais finas a 500 KB?',
        answer:
          'O WebP supera o JPG em tipografia nítida de escuro sobre branco, gráficos e esquemas dentro de um limite de 500 KB. A sua codificação preditiva de blocos minimiza os halos ruidosos ao redor de interfaces e diagramas de alto contraste.',
      },
      {
        question: 'Posso achatar um PNG de produto transparente sobre carvão escuro em vez de branco ao mirar em JPG de 500 KB?',
        answer:
          'Sim. Ao selecionar JPG, o seletor de cor fosca para PNG transparente é exibido, permitindo digitar branco, azul-escuro ou qualquer cor hexadecimal de marca personalizada para uma fusão suave de bordas transparentes.',
      },
      {
        question: 'A compressão em tela conserva o modelo da lente da câmera, a velocidade do obturador e as coordenadas GPS?',
        answer:
          'Não, o HTML5 Canvas remove os metadados EXIF automaticamente, o que tira as miniaturas de câmera embutidas e os dados de localização. Isso mantém privadas as provas de clientes e destina cada kilobyte aos pixels visíveis.',
      },
      {
        question: 'Qual limite exato em bytes ativa o selo de confirmação «Menos de 500 KB»?',
        answer:
          'A ferramenta verifica o arquivo codificado final contra 512.000 bytes (500 × 1024). Os arquivos estritamente iguais ou abaixo de 512.000 bytes mostram o selo verde de estado «Menos de 500 KB» e o espaço exato economizado.',
      },
      {
        question: 'Posso reduzir em lote vinte fotos de 10 MB para 500 KB em uma única passada?',
        answer:
          'Sim. Solte as vinte imagens (até 25 MB por arquivo) na fila, deixe o navegador percorrer cada foto sequencialmente e exporte tudo junto dentro de compressmypic_500kb.zip.',
      },
      {
        question: 'Por que um PNG sem perda forçado com o redimensionamento desativado mostrou «Objetivo não alcançado» a 500 KB?',
        answer:
          'A compressão PNG sem perda ignora os controles de qualidade, o que significa que uma cena complexa de alta resolução com formato PNG e dimensões completas travados não consegue descer do seu piso DEFLATE sem processar. Ative o redimensionamento de dimensões ou escolha WebP/JPG para superar os 500 KB sem problemas.',
      },
      {
        question: 'Posso ampliar e deslocar, ou comparar o original com o de 500 KB lado a lado antes de salvar?',
        answer:
          'Sim. Ao clicar em Comparar em qualquer cartão concluído, abre a cortina dividida de antes e depois em largura completa para você inspecionar olhos, mechas de cabelo ou etiquetas pequenas direto contra o arquivo original.',
      },
      {
        question: 'Se uma imagem precisa de um redimensionamento menor de dimensões para chegar a 500 KB, quão drástica é a mudança de tamanho?',
        answer:
          'O redimensionador começa em 82% das dimensões originais antes de testar passos mais fortes. Como 500 KB é generoso, as exportações gigantes de estúdio de 50 MP tipicamente superam o objetivo logo no passo de 82% ou 68% enquanto conservam nitidez de impressão de alta definição.',
      },
      {
        question: 'A ferramenta aceita bitmaps BMP antigos ou diagramas SVG de até 25 MB?',
        answer:
          'Sim. Os arquivos BMP sem compactação e as ilustrações vetoriais SVG de até 25 MB são carregados direto no Canvas e exportados abaixo de 500 KB no seu formato raster selecionado.',
      },
      {
        question: 'Como o nome do arquivo muda ao baixar cópias compactadas para 500 KB?',
        answer:
          'Cada imagem processada adiciona automaticamente _500kb antes da extensão, produzindo nomes claros como architectural_proof_500kb.jpg. Manter a etiqueta no nome do arquivo exportado garante que os seus entregáveis compactados nunca sobrescrevam os originais principais.',
      },
      {
        question: 'O que devo fazer se um portal de marketplace fixar um limite de 1 MB ou 250 KB?',
        answer:
          'Clique no atalho «Precisa de um objetivo diferente em KB?» acima dos botões de formato para abrir o compressor de tamanho de arquivo personalizado e digitar qualquer limite personalizado em KB ou MB.',
      },
      {
        question: 'Posso comprimir recursos para 500 KB direto de um iPad ou tablet Android?',
        answer:
          'Sim. Os controles de formato de toque, o controle de comparação e a exportação ZIP funcionam bem em navegadores modernos de tablet e celular sem software de computador.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/bulk-image-compressor',
      '/',
    ],
  },
  {
    slug: '/bulk-image-compressor',
    name: 'Compressor de imagens em lote',
    shortDescription: 'Comprima dezenas de imagens em lote de uma vez e exporte um único ZIP.',
    category: 'compress',
    seoTitle: 'Compressor de imagens em lote grátis online',
    seoDescription:
      'Reduza dezenas de arquivos com o compressor de imagens em lote. Aplique os perfis Web Rápido, E-mail ou Alta Fidelidade, veja os MB economizados e baixe um ZIP.',
    h1: 'Compressor de imagens em lote grátis',
    subtitle:
      'Reduza pastas inteiras de fotos de produto, cópias de segurança de rolo de câmera e recursos de sites ao mesmo tempo com o nosso compressor de imagens em lote grátis direto no seu navegador. Feito para equipes de comércio eletrônico, fotógrafos e desenvolvedores que lidam com lotes grandes, ele combina perfis rápidos de lote com um clique e controles de qualidade personalizados com acompanhamento de progresso ao vivo, comparações visuais por arquivo e downloads instantâneos de um único ZIP.',
    howToSteps: [
      {
        title: 'Solte todo o seu lote de imagens',
        description:
          'Selecione ou arraste várias imagens JPG, PNG, WebP ou HEIC de até 25 MB cada uma para a área de lote (mais podem ser adicionadas a qualquer momento).',
      },
      {
        title: 'Clique em um perfil rápido de lote ou personalize os ajustes',
        description:
          'Escolha Web Rápido (WebP 75%), E-mail / Compartilhar (JPG 65%) ou Alta Fidelidade (85%), ou ajuste o controle de qualidade, o formato de saída e a cor fosca.',
      },
      {
        title: 'Acompanhe o progresso ao vivo da compressão em lote',
        description:
          'Observe como a barra de progresso ao vivo termina arquivo por arquivo e confira o banner de resumo que mostra o total de arquivos, os MB economizados e a porcentagem geral de redução.',
      },
      {
        title: 'Confira cartões individuais e a qualidade de antes e depois',
        description:
          'Abra o modal Comparar em arquivos de amostra, clique em Manter original se algum recurso já minúsculo cresceu, ou reprocesse arquivos individuais com ajustes alterados.',
      },
      {
        title: 'Ajuste e volte a comprimir tudo se preciso',
        description:
          'Mude o seu perfil, a porcentagem de qualidade ou o formato de destino a qualquer momento e reprocesse toda a fila com um clique sem enviar de novo.',
      },
      {
        title: 'Baixe arquivos individuais ou Baixar tudo (ZIP)',
        description:
          'Salve imagens otimizadas individuais direto dos cartões ou clique em Baixar tudo (ZIP) para baixar bulk_compressed_compressmypic.zip.',
      },
    ],
    features: [
      {
        title: 'Progresso em lote e totais de economia',
        description:
          'Mostra o progresso ao vivo arquivo por arquivo, além dos MB totais agregados e da porcentagem economizada em todo o seu lote.',
      },
      {
        title: 'Perfis rápidos de lote com um clique',
        description: 'Aplique ajustes predefinidos WebP, E-mail/JPG ou Alta Fidelidade em cada arquivo na hora.',
      },
      {
        title: 'Modal de comparação por arquivo',
        description: 'Confira qualquer foto compactada individual contra o original antes de baixar.',
      },
      {
        title: 'Zero limites de lote',
        description: 'Comprima quantas imagens a memória do seu dispositivo permitir, sem nível pago nem filas de servidor.',
      },
    ],
    faqs: [
      {
        question: 'O que os três perfis rápidos de lote mudam nas minhas imagens em fila?',
        answer:
          'Web Rápido muda o formato de saída para WebP com qualidade de 75% para sites leves, E-mail / Compartilhar converte o lote para JPG de 65% para anexos menores, e Alta Fidelidade mantém os formatos originais com qualidade de 85%. Ao clicar em qualquer perfil, os ajustes são atualizados automaticamente e os arquivos já carregados são compactados de novo.',
      },
      {
        question: 'Posso comprimir imagens em lote em um notebook ou no celular sem uma conexão ativa de envio?',
        answer:
          'Depois que a página da ferramenta termina de carregar, toda a compressão em lote, decodificação e criação de ZIP acontece localmente no seu navegador com HTML5 Canvas e WebAssembly. As suas fotos nunca entram em uma fila de processamento remota nem saem do seu dispositivo.',
      },
      {
        question: 'Como o resumo agregado do lote informa a economia total?',
        answer:
          'À medida que os arquivos terminam de ser processados, a barra de resumo soma o tamanho original em bytes de cada item contra o resultado compactado, mostrando os megabytes agregados economizados e a porcentagem geral de redução. Se algum arquivo individual terminou maior, você pode clicar em Manter original naquele cartão antes de exportar o ZIP.',
      },
      {
        question: 'O que acontece quando misturo capturas PNG, HEIC de iPhone e fotos JPG em um mesmo lote?',
        answer:
          'Com o formato de saída em Original, cada imagem é codificada no seu formato web correspondente (decodificando HEIC para JPG/PNG sem problemas via WebAssembly). Como alternativa, escolher WebP ou JPG unifica toda a pasta mista em uma só extensão de saída uniforme.',
      },
      {
        question: 'Qual é o tamanho máximo permitido por arquivo no compressor de imagens em lote?',
        answer:
          'Arquivos individuais de até 25 MB são aceitos em entradas JPG, PNG, WebP, HEIC/HEIF, GIF, BMP e SVG. Não há um limite fixo de quantidade, só a memória disponível do navegador do seu dispositivo.',
      },
      {
        question: 'Por que a ferramenta processa os lotes com uma barra de progresso ao vivo em vez de travar a minha aba?',
        answer:
          'Os arquivos são executados em passadas controladas do navegador com atualizações de progresso («X / Y») mostradas em tempo real. Isso mantém a página responsiva para você acompanhar claramente a conclusão mesmo em lotes de 30 ou 50 fotos de alta resolução.',
      },
      {
        question: 'Como se chama o arquivo ZIP exportado ao clicar em Baixar tudo (ZIP)?',
        answer:
          'Ao clicar em Baixar tudo (ZIP), todas as saídas finalizadas são empacotadas em bulk_compressed_compressmypic.zip. Todo o arquivo ZIP é construído direto na memória do seu navegador sem passar por um servidor de armazenamento em nuvem.',
      },
      {
        question: 'Posso adicionar mais fotos à fila depois que o meu primeiro lote já terminou de ser compactado?',
        answer:
          'Sim. Soltar mais imagens as adiciona à sua lista de lote existente, para você empacotar arquivos antigos e recém-soltos juntos em um só ZIP final.',
      },
      {
        question: 'Qual é a diferença entre os ajustes predefinidos Equilibrada, Arquivo menor e Alta qualidade dentro dos controles de compressão?',
        answer:
          'Os perfis rápidos de lote configuram atalhos de formato mais qualidade para objetivos comuns, como velocidade web ou anexos de e-mail. Enquanto isso, as pílulas Equilibrada, Arquivo menor e Alta qualidade e o controle de qualidade de 10% a 100% dentro dos controles de compressão permitem ajustar com precisão a força exata com perda antes de clicar em Voltar a comprimir tudo.',
      },
      {
        question: 'Se eu converter ícones PNG transparentes para JPG em lote, como os fundos deles são coloridos?',
        answer:
          'Sempre que o formato de saída for JPG (incluindo via perfil E-mail / Compartilhar), o seletor de cor de fundo fosca aparece automaticamente. Ele preenche os canais alfa transparentes sobre branco puro (#ffffff) ou qualquer tom hexadecimal personalizado que você escolher, então os ícones nunca ficam pretos.',
      },
      {
        question: 'O compressor de imagens em lote muda as dimensões em pixels ou mantém a largura e altura originais?',
        answer:
          'O compressor de imagens em lote mantém cada arquivo com 100% da sua largura e altura originais em pixels enquanto reduz o tamanho em bytes via codificação de qualidade. Se você também precisar reduzir dimensões em dezenas de fotos, combine-o com o redimensionador de imagens em lote.',
      },
      {
        question: 'Por que um PNG já compactado dentro do meu lote mostrou um aviso de «A recodificação cresceu»?',
        answer:
          'Os arquivos PNG exportados por ferramentas que usam quantização de paleta agressiva podem expandir levemente ao serem salvos de novo como PNG completo de 24 bits sem perda no HTML5 Canvas. Ao clicar em Manter original naquele cartão, o original menor é conservado dentro do seu ZIP de lote, ou mudar o formato para WebP/JPG o reduz ainda mais.',
      },
      {
        question: 'Posso voltar a comprimir só uma imagem difícil em vez de reprocessar toda a pasta?',
        answer:
          'Sim. Cada cartão de resultado finalizado inclui os seus próprios botões Voltar a comprimir e Remover junto com Comparar e Baixar, para você ajustar ou descartar valores atípicos sem problemas.',
      },
      {
        question: 'A compressão em lote remove automaticamente as coordenadas GPS da câmera e as etiquetas EXIF dos álbuns de viagem?',
        answer:
          'Sim. Como cada imagem é desenhada no HTML5 Canvas durante a compressão, as etiquetas EXIF embutidas, os números de série de câmera e as localizações GPS são removidos de cada arquivo no ZIP.',
      },
      {
        question: 'Quando devo escolher o compressor de imagens em lote em vez do compressor de tamanho de objetivo ou do otimizador de imagens web?',
        answer:
          'Use o compressor de imagens em lote quando quiser economias rápidas e uniformes baseadas em qualidade, com dimensões completas em pixels, em dezenas de fotos. Escolha o compressor de tamanho de objetivo quando precisar que cada arquivo fique abaixo de um limite estrito em KB, ou o otimizador de imagens web para limites predefinidos de pixels web mais etiquetas HTML responsivas.',
      },
      {
        question: 'Posso inspecionar a qualidade visual de itens individuais do lote antes de baixar o ZIP completo?',
        answer:
          'Sim. Ao clicar em Comparar em qualquer cartão, abre o controle dividido lado a lado que compara as versões original e compactada com todo detalhe.',
      },
      {
        question: 'Como o ponto de partida padrão de qualidade de 70% se comporta em bibliotecas de fotos gerais?',
        answer:
          'A qualidade com perda de 70% tipicamente entrega reduções substanciais de bytes de 50% a 75% em JPEGs de alta resolução enquanto se mantém visualmente limpa em telas web típicas e ao compartilhar por e-mail. Suba para 85% com Alta Fidelidade para trabalho crítico de portfólio.',
      },
      {
        question: 'O que acontece se eu enviar uma pasta enorme de 100 fotos em um celular com pouca memória RAM?',
        answer:
          'Como a decodificação e os buffers de Canvas ficam na memória do dispositivo, as abas de celular podem ficar lentas com filas únicas extremas. Processar de 15 a 30 fotos de muitos megapixels por lote, e limpar as listas finalizadas entre conjuntos, mantém fluidos os navegadores de celular.',
      },
      {
        question: 'Marcas d\'água, limites diários de arquivos ou avisos de melhoria de plano pago são aplicados nas exportações ZIP em lote?',
        answer:
          'Nunca. Tanto os downloads individuais quanto os pacotes Baixar tudo (ZIP) são exportados sem marcas d\'água, registros de conta nem barreiras de pagamento por quantidade de arquivos.',
      },
      {
        question: 'Posso soltar GIFs animados em um lote de compressão em massa?',
        answer:
          'As entradas de GIF animado extraem e compactam só o quadro inicial como arquivo estático aqui. Se você precisar reduzir GIFs animados de vários quadros mantendo o movimento intacto, use a nossa ferramenta dedicada Compressor de GIF.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-resizer',
      '/bulk-image-converter',
      '/web-image-optimizer',
      '/',
    ],
  },
  {
    slug: '/target-file-size-compressor',
    name: 'Compressor de tamanho de arquivo alvo',
    shortDescription: 'Comprima qualquer imagem até o seu limite exato personalizado em KB ou MB.',
    category: 'compress',
    seoTitle: 'Compressor de tamanho exato grátis online – KB ou MB',
    seoDescription:
      'Comprima imagens grátis até um limite exato em KB ou MB, com busca binária de qualidade e redimensionamento inteligente, tudo no navegador, sem enviar nada.',
    h1: 'Compressor de imagens para tamanho de arquivo alvo',
    subtitle:
      'Digite qualquer limite exato de envio em KB ou MB — por exemplo, 35 KB para um crachá, 150 KB para um banner de site ou 2 MB para um anexo — com o nosso compressor de tamanho de arquivo alvo, que funciona direto no seu navegador. Feito para designers, desenvolvedores e candidatos que enfrentam regras incomuns de portais, ele combina busca binária de qualidade com redimensionamento opcional de pixels em arquivos de até 25 MB, tudo no seu próprio dispositivo.',
    howToSteps: [
      {
        title: 'Digite o seu limite personalizado em KB ou MB',
        description:
          'Digite qualquer número alvo de 1 KB a 10.240 KB (ou mude para MB até 20 MB), ou toque em um atalho rápido como 20 KB, 50 KB, 100 KB, 200 KB, 500 KB ou 1 MB.',
      },
      {
        title: 'Solte uma ou várias imagens de até 25 MB',
        description:
          'Envie arquivos JPG, PNG, WebP, HEIC, GIF, BMP ou SVG para a área de envio e a otimização automática para o seu alvo começa na hora.',
      },
      {
        title: 'Escolha o formato de saída e os controles de segurança',
        description:
          'Selecione Original, JPG, WebP ou PNG, mantenha ativo o redimensionamento inteligente de dimensões se os arquivos de alta resolução precisarem perder pixels, e ative a conversão automática de PNG para gráficos pesados.',
      },
      {
        title: 'Leia o diagnóstico do alvo e compare a qualidade',
        description:
          'Confira o Resumo da compressão alvo para ver os arquivos que atingiram o alvo e os que não atingiram, inspecione a nitidez lado a lado com Comparar, ou clique em Manter original se alguma imagem pequena cresceu.',
      },
      {
        title: 'Ajuste o alvo quando quiser ou baixe o ZIP',
        description:
          'Mude o seu limite personalizado e clique em Comprimir para [alvo] para processar a fila de novo, depois salve arquivos avulsos ou clique em Baixar tudo (ZIP).',
      },
    ],
    features: [
      {
        title: 'Alvos personalizados em KB e MB',
        description: 'Ajuste qualquer tamanho alvo, de avatares minúsculos de 10 KB até envios de vários megabytes para impressão.',
      },
      {
        title: 'Motor em duas etapas: qualidade e escala',
        description: 'Testa primeiro os níveis de qualidade em resolução total e só depois reduz as dimensões passo a passo quando é preciso.',
      },
      {
        title: 'Diagnóstico honesto de alvos não atingidos',
        description: 'Explica com clareza quando um PNG sem perda ou o redimensionamento desativado impede chegar a um limite rígido de tamanho.',
      },
      {
        title: 'Suporte a lote e ZIP',
        description: 'Comprima vários arquivos até o mesmo alvo em KB e baixe todos em um só ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a faixa de KB e MB que o compressor de tamanho de arquivo alvo aceita?',
        answer:
          'No modo KB, você pode digitar qualquer número inteiro de 1 KB até 10.240 KB (10 MB), com 150 KB como valor padrão ao abrir a página. Ao mudar a unidade para MB, você pode mirar em qualquer valor de 1 MB até 20 MB, com atalhos rápidos para 20 KB, 50 KB, 100 KB, 200 KB, 500 KB e 1 MB.',
      },
      {
        question: 'Como o compressor de tamanho alvo recalcula o meu número ao alternar entre KB e MB?',
        answer:
          'Ao tocar em MB, o seu alvo atual em KB é dividido por 1.024 e arredondado para no mínimo 1 MB, para que você nunca caia por acidente de kilobytes para um limite minúsculo em bytes. Ao voltar para KB, o valor é multiplicado por 1.024 sem problema até o limite de 10.240 KB.',
      },
      {
        question: 'Por que o compressor de tamanho alvo testa primeiro a qualidade com busca binária em resolução total?',
        answer:
          'Muitas imagens com limites moderados, como 150 KB, 300 KB ou 1,5 MB, podem atingir o alvo só cortando o excesso da compressão JPEG ou WebP, sem descartar pixels. Ao verificar primeiro a qualidade de 35% a 94% com as dimensões completas, a largura e a altura ficam intactas sempre que possível.',
      },
      {
        question: 'Quando entra em ação o redimensionamento inteligente de dimensões no compressor de tamanho alvo?',
        answer:
          'Se nem mesmo a qualidade de 35% com perda em largura total consegue colocar a imagem abaixo do seu limite em bytes e a caixa Permitir redimensionamento inteligente de dimensões estiver marcada, o motor desce por fatores de escala progressivos de 82% até 10%. Em cada passo, ele faz uma nova busca de qualidade e escolhe a maior resolução que cumpre o seu limite exato.',
      },
      {
        question: 'O que acontece no compressor de tamanho alvo se o portal exige um limite de KB muito apertado sem mudar o tamanho?',
        answer:
          'Desmarque Permitir redimensionamento inteligente de dimensões para travar a sua largura e altura em 100%. O compressor então baixa a qualidade JPG ou WebP com perda até 5% em dimensões completas e informa com honestidade se a complexidade da imagem não cabe fisicamente dentro dos KB que você pediu.',
      },
      {
        question: 'Por que limites impossíveis como 2 KB ou 3 KB mostram um aviso honesto de alvo não atingido?',
        answer:
          'Todo arquivo JPEG, WebP ou PNG válido contém cabeçalhos obrigatórios, tabelas de Huffman e blocos de quantização de cor que ocupam várias centenas de bytes mesmo em uma grade minúscula. Em vez de travar ou inventar números, o cartão mostra o menor tamanho codificado real que dá para alcançar, junto com sugestões úteis.',
      },
      {
        question: 'O que faz o interruptor de conversão automática de PNGs grandes no compressor de tamanho alvo?',
        answer:
          'Os arquivos PNG sem perda ignoram os controles de qualidade e só diminuem com a redução de escala, o que pode desfocar capturas de tela ou gráficos de produto se forem forçados para baixo de um limite de KB apertado. Com a conversão automática ativada, os PNGs opacos grandes demais passam para JPG, enquanto os PNGs transparentes passam para WebP quando o PNG sozinho não atinge o alvo ou cai abaixo de 65% de escala.',
      },
      {
        question: 'Posso comprimir em lote fotos misturadas até o mesmo limite personalizado de KB?',
        answer:
          'Sim. Solte qualquer mistura de imagens JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 25 MB cada uma na fila, e cada arquivo é otimizado de forma independente com base no seu alvo ativo em KB ou MB.',
      },
      {
        question: 'Como o Resumo da compressão alvo registra o sucesso parcial de um lote?',
        answer:
          'Ao comprimir um lote de vários arquivos com um limite personalizado rígido, o banner escuro de resumo conta exatamente quantos arquivos passaram do seu alvo e quantos não conseguiram caber com honestidade, junto com o total de bytes economizados. Cada cartão individual explica a sua porcentagem final de qualidade e o seu fator de escala exatos.',
      },
      {
        question: 'Que nome recebem os downloads avulsos e os ZIPs do compressor de tamanho alvo?',
        answer:
          'Os downloads avulsos recebem a etiqueta de kilobytes do seu alvo — com nomes como folheto_150kb.jpg — enquanto as exportações ZIP de vários arquivos são salvas como compressmypic_<valor><unidade>.zip. Os seus originais intactos ficam separados e seguros no disco.',
      },
      {
        question: 'Como o compressor de tamanho alvo lida com fundos transparentes se eu escolher JPG com um limite rígido?',
        answer:
          'Ao escolher JPG, aparece a amostra de cor de fundo para PNG transparente (branco puro #ffffff por padrão). Qualquer área transparente com canal alfa é preenchida com a cor de fundo que você escolher antes de a compressão JPEG rodar, evitando bordas pretas sólidas.',
      },
      {
        question: 'Por que um arquivo menor que o meu alvo personalizado mostrou um aviso de crescimento?',
        answer:
          'Se você pede um limite de 300 KB para uma imagem que já estava comprimida em 180 KB, decodificar no Canvas HTML5 e salvar de novo com alta qualidade pode expandir o arquivo para 240 KB. Clique em Manter original nesse cartão para ficar com o seu arquivo original mais leve, de 180 KB.',
      },
      {
        question: 'A compressão para tamanho alvo remove os metadados EXIF sensíveis de documentos ou fotos?',
        answer:
          'Sim. Ao desenhar os pixels no Canvas HTML5, as prévias de câmera embutidas, os metadados do obturador e as coordenadas GPS são removidos automaticamente, mantendo os seus arquivos pessoais privados e dedicando cada kilobyte à clareza visual.',
      },
      {
        question: 'Posso mudar o meu valor personalizado de KB depois que as imagens terminarem, sem enviar tudo de novo?',
        answer:
          'Sim. Edite o número do alvo ou toque em outro atalho a qualquer momento e clique no botão Comprimir para [alvo] para otimizar de novo toda a sua lista carregada na hora, direto na memória.',
      },
      {
        question: 'Qual é a precisão da contagem final de bytes em relação aos limites binários de kilobytes?',
        answer:
          'O motor converte KB em bytes binários exatos (KB × 1024) e trata a sua entrada como um limite superior rígido, nunca passando dele, a não ser que seja fisicamente impossível com as restrições travadas. A busca binária costuma parar entre 96% e 100% desse limite para preservar o máximo de detalhes.',
      },
      {
        question: 'Provas privadas de clientes, contratos ou exames médicos são enviados durante o cálculo do alvo?',
        answer:
          'Não. As iterações da busca binária, o redimensionamento de imagens, a decodificação HEIC com WebAssembly e o empacotamento ZIP rodam estritamente dentro da sua sessão do navegador, sem nenhuma transferência externa pela rede.',
      },
      {
        question: 'Posso ver o texto fino ou os detalhes no meu limite personalizado de KB antes de salvar?',
        answer:
          'Sim. Clique em Comparar em qualquer cartão de resultado pronto para abrir uma cortina interativa de antes e depois e inspecionar as bordas nítidas direto na imagem original enviada.',
      },
      {
        question: 'Quando vale a pena escolher uma ferramenta fixa de 50 KB ou 100 KB em vez do compressor de tamanho alvo?',
        answer:
          'Use as páginas fixas quando o seu fluxo de trabalho sempre mira em referências padrão de portais, como passaportes de 50 KB ou envios de 200 KB para a Shopify. Abra este compressor de tamanho de arquivo alvo quando os formulários pedirem limites incomuns como 30 KB, 75 KB, 250 KB ou 1,5 MB.',
      },
      {
        question: 'O que acontece se eu enviar um GIF animado e mirar em 400 KB no compressor de tamanho alvo?',
        answer:
          'Como a mira por KB baseada em Canvas processa quadros estáticos rasterizados, os GIFs animados são otimizados e exportados com o quadro inicial como imagem fixa. Use o nosso Compressor de GIF dedicado se você precisa diminuir animações em loop de vários quadros sem perder o movimento.',
      },
      {
        question: 'O que acontece se eu definir um alvo alto em MB, como 5 MB, para uma imagem de 1 MB?',
        answer:
          'Qualquer imagem que já esteja abaixo do seu limite personalizado em MB é aprovada na hora na passada de qualidade máxima em dimensões completas. Se a recodificação inflar o peso em bytes sem necessidade, você pode clicar em Manter original direto no cartão para ficar com o seu arquivo original mais leve.',
      },
    ],
    relatedSlugs: ['/compress-image-to-50kb', '/compress-image-to-100kb', '/compress-image-to-200kb', '/compress-image-to-500kb'],
  },
  {
    slug: '/bulk-image-resizer',
    name: 'Redimensionador de imagens em lote',
    shortDescription: 'Redimensione dezenas de imagens por dimensões máximas, largura ou porcentagem, com ZIP.',
    category: 'resize',
    seoTitle: 'Redimensionador de imagens em lote grátis online – ZIP',
    seoDescription:
      'Redimensione dezenas de fotos grátis com o redimensionador em lote, no seu navegador. Escolha Ajuste máximo, Largura uniforme, Exato ou % e baixe um só ZIP.',
    h1: 'Redimensionador de imagens em lote grátis online',
    subtitle:
      'Padronize as dimensões em pixels de sessões inteiras de produto, pastas de blog e álbuns de fotos com o nosso redimensionador de imagens em lote grátis, que roda localmente no seu navegador. Feito para vendedores de e-commerce, equipes de conteúdo e fotógrafos, ele lida com lotes mistos de retratos e paisagens com Ajuste máximo L × A, Largura uniforme, L × A exato ou escala por porcentagem, até 25 MB por arquivo, com exportação instantânea em ZIP.',
    howToSteps: [
      {
        title: 'Solte várias imagens na fila de lote',
        description:
          'Envie qualquer mistura de arquivos JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de até 25 MB cada um do seu computador ou celular.',
      },
      {
        title: 'Escolha uma estratégia de redimensionamento em lote',
        description:
          'Escolha Ajuste máximo L × A para orientações misturadas, Largura uniforme para layouts de coluna fixa, L × A exato para grades rígidas, ou Porcentagem (%) para escalar de forma uniforme.',
      },
      {
        title: 'Defina as dimensões alvo ou os atalhos de tamanho',
        description:
          'Digite pixels de 1 a 12.000 px (ou clique em Full HD 1920px, Blog 1200px, E-commerce 1000×1000 ou Miniatura 600px), ou deslize a escala de 10% a 200%.',
      },
      {
        title: 'Configure a proteção contra ampliação e o comportamento de ajuste',
        description:
          'Mantenha marcada a opção Não ampliar imagens menores para proteger os ícones minúsculos, ou escolha Conter, Cobrir ou Esticar quando selecionar L × A exato.',
      },
      {
        title: 'Escolha o formato de saída, a qualidade e o fundo fosco',
        description:
          'Mantenha Original ou converta as saídas para JPG, PNG ou WebP junto com um controle de qualidade de 10% a 100% e uma cor de fundo fosco personalizada para JPG.',
      },
      {
        title: 'Execute o redimensionamento em lote e baixe tudo em ZIP',
        description:
          'Revise as dimensões antigas e novas em pixels de cada cartão e clique em Baixar tudo (ZIP) para salvar bulk_resized_compressmypic.zip localmente.',
      },
    ],
    features: [
      {
        title: 'Modo de caixa delimitadora de ajuste máximo',
        description: 'Reduz com segurança paisagens largas e retratos altos dentro de, por exemplo, 1200×1200 px, sem cortar nem distorcer.',
      },
      {
        title: 'Proteção contra ampliação',
        description: 'Mantenha marcada a opção "Não ampliar imagens menores" para que os arquivos pequenos fiquem nítidos em vez de esticados.',
      },
      {
        title: 'Controles de formato e qualidade',
        description: 'Converta opcionalmente as saídas redimensionadas para WebP ou JPG ao mesmo tempo.',
      },
      {
        title: 'Empacotamento ZIP com um clique',
        description: 'Baixe dezenas de imagens redimensionadas com nomes limpos dentro de um só arquivo ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Como o Ajuste máximo L × A lida com uma pasta que mistura paisagens horizontais e retratos verticais?',
        answer:
          'O Ajuste máximo L × A trata as suas entradas de largura e altura (1200×1200 px por padrão) como uma caixa delimitadora invisível, preservando a proporção natural de cada foto. Uma paisagem de 4000×2000 vira 1200×600, enquanto um retrato de 2000×4000 vira 600×1200, sem nenhum corte ou esticamento.',
      },
      {
        question: 'Quando a Largura uniforme é melhor que o Ajuste máximo L × A no redimensionador em lote?',
        answer:
          'Escolha Largura uniforme quando estiver montando newsletters verticais, colunas de artigos de CMS ou galerias responsivas em que cada imagem precisa ter exatamente a mesma largura horizontal. Cada foto escala a altura em proporção, então nada fica esticado nem cortado.',
      },
      {
        question: 'O que fazem Conter, Cobrir e Esticar no modo L × A exato do redimensionador em lote?',
        answer:
          'Conter encaixa a imagem inteira dentro da sua caixa exata em pixels com margens limpas de preenchimento, enquanto Cobrir preenche cada borda de pixel cortando os lados excedentes a partir do centro. Esticar força as proporções que não batem a caber direto nos pixels alvo exatos.',
      },
      {
        question: 'Como funciona a escala por porcentagem (%) no redimensionamento em lote?',
        answer:
          'O modo Porcentagem multiplica a largura e a altura originais de cada imagem enviada pelo fator que você escolher no controle (de 10% a 200%, com botões rápidos de 25%, 50%, 75%, 100% e 150%). Escolher 50% transforma uma foto de 4000×3000 em 2000×1500 e um ícone de 1000×800 em 500×400 na mesma passada.',
      },
      {
        question: 'Por que devo deixar ativada a opção Não ampliar imagens menores em lotes mistos?',
        answer:
          'Se uma pasta contém fotos DSLR de 4000 px e selos de 400 px, forçar um selo pequeno até 1200 px estica os pixels e gera desfoque. Ao deixar marcada a opção Não ampliar, as fotos grandes são reduzidas de forma limpa enquanto os arquivos pequenos mantêm as suas dimensões originais nítidas.',
      },
      {
        question: 'O que definem os quatro botões rápidos de pixels do redimensionador em lote?',
        answer:
          'Ao tocar em Full HD 1920px, os campos são preenchidos com 1920×1080; Blog 1200px define 1200×1200; E-commerce 1000×1000 define 1000×1000; e Miniatura 600px define 600×600. Depois você ainda pode ajustar qualquer um dos dois campos de pixels manualmente até 12.000 px.',
      },
      {
        question: 'Posso converter uma pasta inteira para WebP ou JPG enquanto redimensiono em lote?',
        answer:
          'Sim. Mude o Formato de saída de Original para WebP, JPG ou PNG antes de clicar em Redimensionar em lote (N) para mudar as dimensões em pixels e modernizar os formatos de arquivo em uma só passada pelo Canvas.',
      },
      {
        question: 'O que acontece com os logotipos PNG transparentes se eu redimensioná-los em lote com o formato de saída JPG?',
        answer:
          'Ao escolher JPG, aparece o seletor de cor de Fundo fosco (branco #ffffff por padrão). Qualquer fundo transparente ou sombra suave é desenhado de forma limpa sobre a cor fosca escolhida antes da codificação JPEG.',
      },
      {
        question: 'Manter o formato de saída em PNG preserva a transparência alfa durante o redimensionamento em lote?',
        answer:
          'Sim, exportar como PNG mantém intactos os fundos transparentes e as bordas alfa suaves em cada item redimensionado. Manter o Formato de saída em Original também preserva a transparência para envios PNG e WebP.',
      },
      {
        question: 'Como verifico se as fotos redimensionadas continuam nítidas antes de baixar o ZIP em lote?',
        answer:
          'Clique em qualquer cartão em miniatura ou no botão Comparar de um item pronto para abrir o visualizador interativo de comparação de antes e depois. Você pode arrastar o divisor lado a lado para verificar as bordas nítidas antes de exportar o lote.',
      },
      {
        question: 'Quais são os limites de megabytes e pixels por arquivo no redimensionador de imagens em lote?',
        answer:
          'Cada imagem enviada pode ter até 25 MB, e as entradas de pixels vão de 1 px a 12.000 px por lado. Lembre-se de que exportar telas enormes de mais de 10.000 px em dezenas de imagens depende da memória RAM disponível no navegador do seu dispositivo.',
      },
      {
        question: 'Fotos HEIC de iPhone e arquivos vetoriais SVG são aceitos na mesma fila de redimensionamento?',
        answer:
          'Sim. As fotos HEIC/HEIF são decodificadas localmente com WebAssembly do lado do cliente e os gráficos SVG são rasterizados sem problema no Canvas HTML5 antes de escalar junto com os envios padrão JPG, PNG, WebP, GIF e BMP.',
      },
      {
        question: 'Posso ajustar as configurações e redimensionar todo o lote de novo sem soltar os arquivos outra vez?',
        answer:
          'Sim. Ajuste a estratégia, os limites de pixels, o formato ou o controle de qualidade de 10% a 100% a qualquer momento e clique em Redimensionar em lote (N) para reprocessar todas as imagens na fila na hora, na memória do navegador.',
      },
      {
        question: 'O contador de progresso ao vivo mostra o quanto as pastas grandes já avançaram?',
        answer:
          'Sim. Enquanto o processamento roda, o botão de ação mostra Redimensionando (X/Y)... junto com miniaturas girando, para que você sempre saiba o progresso exato do lote.',
      },
      {
        question: 'Os catálogos confidenciais de clientes ou os álbuns de família são enviados para servidores na nuvem para redimensionar?',
        answer:
          'Nunca. Cada cálculo de redimensionamento, cada passo de desenho no Canvas e cada pacote ZIP é executado localmente no seu dispositivo, mantendo a fotografia privada e a mercadoria inédita 100% no dispositivo.',
      },
      {
        question: 'O redimensionador de imagens em lote remove os detalhes EXIF da câmera e as coordenadas GPS?',
        answer:
          'Sim. Como o Canvas HTML5 redesenha os dados de pixels nas dimensões alvo sem copiar os cabeçalhos EXIF originais, as etiquetas de localização e os números de série da câmera são removidos automaticamente.',
      },
      {
        question: 'Qual é o nome do arquivo ZIP baixado do redimensionador em lote?',
        answer:
          'Ao clicar em Baixar tudo (ZIP), o arquivo bulk_resized_compressmypic.zip é gerado localmente no seu navegador. Ele empacota cada arquivo redimensionado com sucesso da sua fila de forma limpa em um só arquivo.',
      },
      {
        question: 'Posso remover um arquivo por engano de um lote de 20 imagens antes de exportar o ZIP?',
        answer:
          'Sim. Clique no ícone de lixeira de qualquer cartão individual para excluir só aquela imagem sem interromper os outros 19 resultados redimensionados.',
      },
      {
        question: 'Em que o redimensionador em lote difere do compressor de imagens em lote?',
        answer:
          'O compressor de imagens em lote mantém intactas a largura e a altura originais em pixels enquanto reduz o tamanho do arquivo com compressão com perda. Já este redimensionador em lote muda ativamente as dimensões em pixels e as caixas delimitadoras em lote, junto com ajustes opcionais de formato e qualidade.',
      },
      {
        question: 'Posso adicionar fotos extras a um lote de redimensionamento já pronto?',
        answer:
          'Sim. Arraste arquivos adicionais para a área de envio a qualquer momento e eles são processados automaticamente com a sua estratégia ativa de redimensionamento e entram no resumo final de Baixar tudo (ZIP).',
      },
    ],
    relatedSlugs: ['/image-resizer', '/bulk-image-compressor', '/bulk-image-converter', '/web-image-optimizer'],
  },
  {
    slug: '/bulk-image-converter',
    name: 'Conversor de imagens em lote',
    shortDescription: 'Converta vários arquivos JPG, PNG, HEIC, SVG e BMP de uma vez, com ZIP.',
    category: 'convert',
    seoTitle: 'Conversor de imagens em lote grátis – Troque o formato',
    seoDescription:
      'Troque pastas inteiras grátis online com o conversor em lote, no seu navegador. Converta lotes HEIC, PNG, SVG, AVIF e BMP para WebP, JPG ou PNG com ZIP.',
    h1: 'Conversor de imagens em lote grátis',
    subtitle:
      'Unifique em uma só passada pastas misturadas de fotos HEIC da Apple, downloads AVIF, ícones SVG, PNGs transparentes e bitmaps BMP antigos com o nosso conversor de imagens em lote grátis. Feito para desenvolvedores, gestores de conteúdo e usuários comuns que padronizam bibliotecas inteiras de arquivos, ele converte lotes de até 25 MB por arquivo de forma limpa para WebP, JPG ou PNG localmente, com sufixos de nome opcionais e download em um só ZIP.',
    howToSteps: [
      {
        title: 'Solte um lote de imagens em formatos misturados',
        description:
          'Envie qualquer combinação de arquivos JPG, PNG, WebP, HEIC, SVG, BMP, GIF ou AVIF de até 25 MB cada um para a área de envio.',
      },
      {
        title: 'Escolha o formato alvo: WebP, JPG ou PNG',
        description:
          'Escolha WebP (o mais leve para web) para a velocidade do site, JPG (universal) para compartilhar em qualquer lugar, ou PNG (sem perda e com transparência) para gráficos nítidos.',
      },
      {
        title: 'Sufixo de nome opcional e preenchimento transparente',
        description:
          'Digite um sufixo de nome opcional como _web (ou deixe em branco) e selecione uma cor fosca de Preenchimento transparente se for converter imagens com alfa para JPG.',
      },
      {
        title: 'Defina a porcentagem de qualidade de saída',
        description:
          'Ajuste o controle de qualidade de 10% a 100% para exportações WebP ou JPG (desativado automaticamente quando o PNG sem perda está ativo).',
      },
      {
        title: 'Revise os totais do lote e as comparações visuais',
        description:
          'Inspecione as mudanças de bytes por arquivo e o banner de Resumo da conversão em lote, e abra Comparar em itens de amostra para verificar a nitidez.',
      },
      {
        title: 'Salve arquivos avulsos ou Baixar tudo (ZIP)',
        description:
          'Clique em Baixar nos cartões avulsos ou em Baixar tudo (ZIP) para exportar bulk_converted_webp.zip, bulk_converted_jpg.zip ou bulk_converted_png.zip.',
      },
    ],
    features: [
      {
        title: 'Fluxo de lote com entradas misturadas',
        description: 'Solte HEIC, PNG, SVG e JPEG juntos em um lote e unifique tudo em um só formato.',
      },
      {
        title: 'Opções de fundo fosco de transparência e sufixo',
        description: 'Personalize fundos foscos brancos ou coloridos para JPG e adicione sufixos de nome opcionais de forma limpa.',
      },
      {
        title: 'Resumo de tamanho do lote',
        description: 'Veja o tamanho original total em comparação com o tamanho convertido total de todo o lote.',
      },
      {
        title: 'WebAssembly e Canvas 100% locais',
        description: 'Nenhum arquivo é enviado jamais: até a conversão HEIC de iPhone roda no seu dispositivo.',
      },
    ],
    faqs: [
      {
        question: 'Posso misturar tipos de arquivo diferentes na mesma fila do conversor de imagens em lote?',
        answer:
          'Sim. Você pode soltar fotos HEIC da Apple, AVIF modernos, PNGs transparentes, SVGs vetoriais, BMPs antigos, GIFs, WebP e JPGs na mesma passada de envio e exportar toda a coleção em um formato uniforme.',
      },
      {
        question: 'Por que o sufixo de nome opcional ajuda ao converter lotes de imagens?',
        answer:
          'Digitar uma etiqueta como _web ou _v2 adiciona esse sufixo logo antes da nova extensão, produzindo nomes limpos como hero_web.webp. Isso evita que os arquivos recém-convertidos entrem em conflito com arquivos de origem de nome parecido em pastas de projeto compartilhadas.',
      },
      {
        question: 'Como o Resumo da conversão em lote calcula o impacto total do lote?',
        answer:
          'Quando os arquivos terminam de processar, o banner escuro de resumo soma os bytes originais de cada arquivo convertido e mostra junto o total de bytes convertidos. Assim você confere na hora as mudanças de armazenamento ou de banda de toda uma pasta.',
      },
      {
        question: 'O que acontece se eu unificar PNGs e SVGs transparentes no formato JPG no conversor em lote?',
        answer:
          'Ao selecionar JPG (universal), aparece o seletor de cor de Preenchimento transparente (branco #ffffff por padrão). Qualquer área transparente com alfa nos seus PNGs ou SVGs se mistura suavemente com o tom de fundo escolhido, em vez de virar preto sólido.',
      },
      {
        question: 'Por que o controle de qualidade fica desativado ao escolher PNG sem perda no conversor em lote?',
        answer:
          'O PNG usa codificação DEFLATE sem perda, que preserva cada pixel decodificado de forma idêntica, sem níveis de qualidade com perda. Assim que você escolhe WebP ou JPG, o controle de qualidade de 10% a 100% é desbloqueado na hora.',
      },
      {
        question: 'Posso converter uma pasta de fotos misturadas duas vezes — uma para WebP e outra para JPG — sem enviar tudo de novo?',
        answer:
          'Sim. Mude Converter lote para o formato de WebP para JPG a qualquer momento, atualize opcionalmente o seu sufixo de nome e clique em Converter tudo (N) para reprocessar os arquivos em cache na memória e pegar um segundo ZIP.',
      },
      {
        question: 'Como o nome do ZIP identifica o formato alvo que eu exportei no conversor em lote?',
        answer:
          'Ao clicar em Baixar tudo (ZIP), o arquivo bulk_converted_webp.zip, bulk_converted_jpg.zip ou bulk_converted_png.zip é criado direto no seu navegador. Ter o formato no nome do arquivo facilita distinguir várias exportações de formato na sua pasta de Downloads.',
      },
      {
        question: 'Unificar tudo em WebP mantém a transparência alfa em logotipos PNG e ícones SVG?',
        answer:
          'Sim. Tanto o WebP (o mais leve para web) quanto o PNG (sem perda e com transparência) mantêm a transparência completa de 8 bits dos PNGs transparentes, dos WebPs e dos arquivos SVG avulsos de forma limpa.',
      },
      {
        question: 'O que acontece se um navegador antigo não conseguir decodificar um arquivo AVIF misturado dentro do meu lote?',
        answer:
          'Se um arquivo usa um codec que o seu navegador não tem suporte, como AVIF em um navegador desatualizado, só aquele cartão específico mostra um aviso explícito de erro. Todos os outros itens JPG, PNG ou HEIC do mesmo lote terminam normalmente.',
      },
      {
        question: 'Os lotes HEIC de iPhone são convertidos em um servidor remoto na nuvem?',
        answer:
          'Não. Até a decodificação HEIC e HEIF da Apple roda localmente dentro da aba do seu navegador com WebAssembly do lado do cliente, antes de o Canvas HTML5 codificar o formato de saída que você escolheu.',
      },
      {
        question: 'Qual é o tamanho máximo dos arquivos individuais dentro do conversor de imagens em lote?',
        answer:
          'Cada imagem individual da sua fila de lote pode ter até 25 MB. Essa margem cobre com folga fotos de câmera de muitos megapixels, exportações PNG em camadas e arquivos BMP sem compressão.',
      },
      {
        question: 'O que acontece quando GIFs animados são incluídos em uma pasta de conversão em lote?',
        answer:
          'O Canvas HTML5 rasteriza o quadro inicial de qualquer .gif enviado em um arquivo WebP, JPG ou PNG estático e nítido, mantendo a largura e a altura completas. Use o nosso Compressor de GIF se você quiser manter intacta a animação em loop.',
      },
      {
        question: 'A conversão de formato em lote muda a largura e a altura originais da imagem?',
        answer:
          'Não, cada saída mantém 100% da sua largura e altura originais em pixels, sem tocar nelas. Use o Redimensionador de imagens em lote quando precisar mudar o tamanho ou limitar as dimensões da imagem ao mesmo tempo.',
      },
      {
        question: 'Por que converter JPEGs comprimidos para PNG pode fazer o total do resumo do lote parecer maior?',
        answer:
          'O PNG sem perda guarda muito mais dados por pixel fotográfico que o JPEG com perda. A menos que um fluxo de trabalho exija estritamente .png, converter lotes web misturados para WebP a 85% costuma economizar bastante espaço mantendo uma qualidade nítida.',
      },
      {
        question: 'As etiquetas EXIF da câmera são mantidas depois de converter uma pasta misturada?',
        answer:
          'Não. Ao desenhar as imagens no Canvas HTML5, os blocos de metadados EXIF, os números de série da câmera e as etiquetas GPS de cada arquivo convertido são removidos de forma limpa.',
      },
      {
        question: 'Posso comparar os pixels originais e convertidos em cartões avulsos antes de exportar o ZIP?',
        answer:
          'Sim. Clique em Comparar em qualquer cartão de arquivo pronto para inspecionar as bordas finas e as cores lado a lado no visualizador de comparação dividida.',
      },
      {
        question: 'O que acontece se eu adicionar mais arquivos depois de converter o meu primeiro lote?',
        answer:
          'Os arquivos recém-soltos são convertidos automaticamente com o formato alvo, a qualidade, o sufixo e o preenchimento fosco selecionados no momento. Depois eles entram de forma limpa na sua fila ativa e no resumo ZIP compartilhado.',
      },
      {
        question: 'As fontes web externas ou as imagens remotas dentro de arquivos SVG são incluídas durante a conversão em lote?',
        answer:
          'Por segurança do navegador, o Canvas HTML5 isola os SVGs avulsos e bloqueia o download de URLs remotas ou fontes web externas. Os SVGs autocontidos com caminhos, gradientes e CSS embutido são convertidos de forma limpa.',
      },
      {
        question: 'Posso remover uma só imagem com falha ou indesejada da lista convertida em lote?',
        answer:
          'Sim. Clique no botão de lixeira de qualquer cartão para excluí-lo da lista e reconstruir o resumo e o download ZIP com os arquivos restantes.',
      },
      {
        question: 'Quando devo escolher este conversor em lote em vez de conversores de um só par como HEIC para JPG?',
        answer:
          'As ferramentas de um só par já vêm com filtros de arquivo rígidos e padrões para uma rota de migração específica. Abra este conversor de imagens em lote quando uma pasta tiver várias extensões diferentes que precisam virar WebP, JPG ou PNG de uma vez.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-compressor', '/bulk-image-resizer', '/web-image-optimizer'],
  },
  {
    slug: '/web-image-optimizer',
    name: 'Otimizador de imagens para web',
    shortDescription: 'Otimize imagens de banner, produto e cartão para a velocidade do Core Web Vitals.',
    category: 'compress',
    seoTitle: 'Otimizador de imagens web grátis – Core Web Vitals',
    seoDescription:
      'Diminua os arquivos pesados da página grátis online com o otimizador web, no seu navegador. Use modelos WebP, remova o EXIF e copie tags HTML img prontas.',
    h1: 'Otimizador de imagens para web (pronto para Core Web Vitals)',
    subtitle:
      'Prepare gráficos web de carregamento rápido feitos para o Core Web Vitals (LCP e CLS) com o nosso otimizador de imagens para web grátis, direto no seu navegador. Feito para desenvolvedores front-end, lojistas da Shopify e SEOs técnicos, ele combina modelos testados de WebP e JPG para espaços web, até 25 MB por arquivo, com remoção automática de EXIF, tags HTML <img> copiáveis e downloads em um só ZIP.',
    howToSteps: [
      {
        title: 'Selecione um dos 5 modelos de desempenho web',
        description:
          'Escolha Banner / Topo (1600 px WebP 80%), Produto de e-commerce (1200 px WebP 82%), Cartão / Miniatura (640 px WebP 75%), OG social / E-mail (1200 px JPG 82%) ou Gráfico Retina 2× (1920 px WebP 88%).',
      },
      {
        title: 'Personalize o formato web, a dimensão máxima ou a qualidade',
        description:
          'Alterne entre WebP, JPG ou PNG, ajuste a Dimensão máxima (lado maior) de 640 px a 1920 px (ou Manter dimensões originais) e ajuste a Qualidade de 20% a 95%.',
      },
      {
        title: 'Solte os arquivos web sem processar na área de envio',
        description:
          'Envie imagens JPG, PNG, WebP, HEIC, SVG, BMP, GIF ou AVIF de até 25 MB cada uma, com a opção Só reduzir imagens maiores marcada para evitar inflar os ícones pequenos.',
      },
      {
        title: 'Revise a economia de peso da página e compare a qualidade',
        description:
          'Confira o Resumo de desempenho web para ver o peso total de página economizado, verifique os selos Pronto para web por cartão e inspecione as bordas lado a lado com Comparar.',
      },
      {
        title: 'Copie trechos HTML <img> responsivos',
        description:
          'Clique em Copiar <img> em qualquer cartão pronto para obter o código pronto para colar, com largura, altura, loading="lazy" e decoding="async".',
      },
      {
        title: 'Baixe arquivos -web avulsos ou o pacote ZIP',
        description:
          'Salve arquivos avulsos <nome>-web ou clique em Baixar tudo (ZIP) para baixar web_optimized_compressmypic.zip de forma limpa.',
      },
    ],
    features: [
      {
        title: 'Modelos prontos para web',
        description: 'Limites de dimensão pré-configurados e pontos ideais de qualidade WebP/JPG pensados para LCP e PageSpeed Insights.',
      },
      {
        title: 'Trecho HTML <img> copiável',
        description: 'Gera atributos responsivos de largura, altura, loading="lazy" e decoding="async" para evitar a mudança de layout (CLS).',
      },
      {
        title: 'Remoção automática de EXIF e proteção contra ampliação',
        description: 'Remove os metadados inflados da câmera e evita ampliar sem necessidade os ícones menores.',
      },
      {
        title: 'Inspetor interativo de antes e depois',
        description: 'Verifique a clareza visual lado a lado antes de publicar os arquivos em produção.',
      },
    ],
    faqs: [
      {
        question: 'Como os cinco modelos de desempenho web se relacionam com os espaços reais do site?',
        answer:
          'Banner / Topo limita a 1600 px WebP (80%), Produto de e-commerce limita a 1200 px WebP (82%), Cartão / Miniatura limita a 640 px WebP (75%), OG social / E-mail gera JPG de 1200 px (82%) para compatibilidade com rastreadores, e Gráfico Retina 2× mantém até 1920 px WebP (88%). Ao clicar em qualquer modelo, os arquivos carregados também são otimizados de novo automaticamente.',
      },
      {
        question: 'Como o botão Copiar <img> ajuda a melhorar as notas do Core Web Vitals?',
        answer:
          'Ao clicar em Copiar <img>, uma tag HTML semântica é copiada com os atributos exatos de largura e altura de saída, além de loading="lazy" e decoding="async". As dimensões explícitas permitem que os navegadores reservem o espaço exato durante o layout da página para eliminar a mudança de layout acumulada (CLS).',
      },
      {
        question: 'Devo manter o loading="lazy" na minha imagem principal de banner depois de copiar a tag HTML?',
        answer:
          'Para os cartões e as imagens abaixo da dobra, o loading="lazy" é ideal. Para a sua única imagem principal de Banner / Topo LCP, visível na hora ao carregar, remova o loading="lazy" (ou defina fetchpriority="high") no seu código para que o navegador baixe a imagem imediatamente.',
      },
      {
        question: 'Por que o OG social / E-mail muda o formato web de WebP para JPG no otimizador web?',
        answer:
          'Alguns rastreadores de links sociais, versões antigas do Slack/Outlook e plataformas de newsletter ainda rejeitam ou não mostram de forma confiável as prévias OpenGraph em WebP. Escolher JPG de 1200 px a 82% oferece carregamento rápido junto com cartões de prévia sólidos em todos os lugares.',
      },
      {
        question: 'Por que a opção Só reduzir imagens maiores protege os ícones de interface e as miniaturas pequenas?',
        answer:
          'Com essa caixa ativada, ao enviar um avatar de autor de 400×400 px enquanto está selecionado Produto de e-commerce (máx. 1200 px), o avatar fica em 400×400 px em vez de desfocar para cima até 1200 px. Ao desmarcá-la, os arquivos menores são ampliados até o lado maior escolhido se for estritamente necessário.',
      },
      {
        question: 'Como a remoção de metadados EXIF e GPS corta o peso extra da página web?',
        answer:
          'As exportações de câmera costumam embutir de 30 KB a 150 KB de prévias em miniatura, históricos de edição do Lightroom e coordenadas GPS dentro de blocos EXIF. A recodificação no Canvas HTML5 remove todo esse excesso que não são pixels de forma limpa antes da publicação.',
      },
      {
        question: 'Por que os arquivos baixados terminam automaticamente em -web no nome?',
        answer:
          'Cada saída adiciona -web antes da sua extensão, produzindo nomes limpos como tenis-web.webp. Isso permite que os desenvolvedores soltem arquivos de produção em pastas públicas sem sobrescrever os originais mestres de alta resolução.',
      },
      {
        question: 'Como o atributo alt dentro de Copiar <img> é gerado no otimizador web?',
        answer:
          'O trecho remove automaticamente a extensão do nome do arquivo e converte os hifens e underlines do seu nome original em espaços legíveis dentro de alt="...". Lembre-se de refiná-lo em uma frase humana descritiva ao colá-lo no HTML de produção.',
      },
      {
        question: 'Por que o otimizador de imagens para web usa por padrão Produto de e-commerce (máx. 1200 px · WebP 82%)?',
        answer:
          '1200 px de largura com WebP a 82% oferece uma qualidade nítida de zoom de produto tanto em celulares Retina quanto em laptops padrão, enquanto reduz arquivos DSLR de vários megabytes entre 80% e 95%. Evita tanto os cortes suaves demais de 640 px quanto os originais inflados de 4000 px.',
      },
      {
        question: 'Por que um PNG pequeno já comprimido pode ficar vermelho com um aviso de crescimento quando o formato web é PNG?',
        answer:
          'Recodificar um PNG minúsculo com paleta indexada pelo Canvas HTML5 em cores totais, sem mudar as dimensões, pode produzir um PNG sem perda um pouco mais pesado. Mude o Formato web para WebP para manter a transparência com uma fração do peso em bytes.',
      },
      {
        question: 'Posso otimizar em lote 30 imagens sem processar de um blog para a velocidade do Lighthouse com um clique?',
        answer:
          'Sim. Solte até 25 MB por arquivo em todo o seu conjunto de mídias do blog, revise o Resumo de desempenho web que mostra o peso total de página economizado e pegue web_optimized_compressmypic.zip quando 2 ou mais arquivos terminarem.',
      },
      {
        question: 'Por que a qualidade do otimizador web fica limitada à faixa de 20% a 95%?',
        answer:
          'Salvar WebP ou JPG com qualidade de 100% dispara o peso em bytes de forma exponencial, com uma diferença visível praticamente nula em telas web, o que prejudica o Largest Contentful Paint (LCP). Limitar a 95% mantém os gráficos Retina 2× bem nítidos sem cargas acidentais de 10 MB.',
      },
      {
        question: 'A saída WebP mantém os fundos transparentes dos PNGs e SVGs enviados ao otimizador web?',
        answer:
          'Sim. Quando o Formato web está em WEBP ou PNG, a transparência alfa completa fica totalmente intacta, enquanto ao selecionar JPG as áreas transparentes são compostas sobre branco limpo (#ffffff).',
      },
      {
        question: 'As capturas do site em testes ou os lançamentos de produto inéditos são enviados para servidores externos?',
        answer:
          'Não. O redimensionamento por modelo, a codificação WebP, a remoção de EXIF e a geração de tags HTML rodam estritamente dentro da aba do seu navegador, mantendo privados os gráficos de marketing sob embargo.',
      },
      {
        question: 'Posso personalizar uma mistura de ajustes depois de clicar em um modelo de desempenho web?',
        answer:
          'Sim. Ao mudar manualmente o Formato web, a Dimensão máxima ou a Qualidade, o indicador de modelo ativo passa de forma limpa para personalizado, para que você possa clicar em Otimizar para web (N) com a sua receita exata sob medida.',
      },
      {
        question: 'O que acontece se eu enviar uma foto HEIC de iPhone direto para o meu blog no otimizador web?',
        answer:
          'O WebAssembly do lado do cliente decodifica fotos HEIC e HEIF de até 25 MB de forma nativa dentro da aba do seu navegador. Depois o seu navegador as redimensiona para a Dimensão máxima escolhida e codifica arquivos leves WebP ou JPG prontos para publicar.',
      },
      {
        question: 'Como o modelo Cartão / Miniatura se compara ao Gráfico Retina 2× no otimizador web?',
        answer:
          'Cartão / Miniatura limita os lados maiores a 640 px com WebP a 75% para manter ultra leves as grades de arquivo com vários cartões. Já o Gráfico Retina 2× permite até 1920 px com WebP a 88%, para que as capturas de vitrine de alta densidade de pixels fiquem bem nítidas.',
      },
      {
        question: 'Manter dimensões originais continua comprimindo e removendo metadados EXIF no otimizador web?',
        answer:
          'Sim. Ao selecionar Manter dimensões originais, a largura e a altura em pixels ficam intactas, enquanto o arquivo é convertido para o Formato web escolhido, o seu controle de qualidade é aplicado e as etiquetas EXIF ocultas são removidas.',
      },
      {
        question: 'Posso verificar visualmente o texto nítido da interface em capturas antes de publicá-las na minha documentação?',
        answer:
          'Sim. Ao clicar em Comparar em qualquer cartão, o visualizador de comparação lado a lado abre, para que você possa revisar a clareza do texto antes de publicar.',
      },
      {
        question: 'Quando devo usar este otimizador de imagens para web em vez do compressor de imagens em lote?',
        answer:
          'Use o compressor de imagens em lote quando quiser manter as dimensões originais em arquivos misturados. Escolha este otimizador de imagens para web quando estiver construindo páginas web de produção que se beneficiam de limites de dimensão responsivos, modelos WebP, remoção de EXIF e tags HTML <img> copiáveis.',
      },
    ],
    relatedSlugs: ['/bulk-image-compressor', '/compress-image-to-100kb', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/gif-compressor',
    name: 'Compressor de GIF',
    shortDescription: 'Comprima GIFs animados reduzindo as cores da paleta, a escala e os quadros.',
    category: 'compress',
    seoTitle: 'Compressor de GIF grátis online – Diminua GIFs animados',
    seoDescription:
      'Reduza animações em loop grátis online com o compressor de GIF, no navegador. Baixe a paleta de cores, reduza as dimensões ou elimine quadros repetidos.',
    h1: 'Compressor de GIF animado grátis online',
    subtitle:
      'Diminua GIF87a e GIF89a pesados em loop de forma limpa dentro do seu navegador com o nosso compressor de GIF animado grátis, sem transformá-los em imagens fixas. Feito para Slack, Discord, profissionais de e-mail e autores de documentação que lidam com arquivos de até 30 MB, ele combina três alavancas reais de compressão — Limite de cores da paleta, Escala de saída e Otimização da taxa de quadros — com reprodução animada ao vivo lado a lado.',
    howToSteps: [
      {
        title: 'Solte um GIF animado ou estático de até 30 MB',
        description:
          'Envie qualquer arquivo .gif (até 30 MB) para a área de envio para decodificar os seus quadros, dimensões, métodos de descarte e atrasos de tempo localmente.',
      },
      {
        title: 'Escolha um modelo rápido ou ajuste os valores manualmente',
        description:
          'Clique em Leve (192 cores, 100%), Equilibrado (96 cores, 85%) ou Redução máxima (64 cores, 75%, remover cada 2.º quadro), ou ajuste cada alavanca manualmente.',
      },
      {
        title: 'Baixe o limite de cores da paleta (16–256 cores)',
        description:
          'Arraste o controle de Limite de cores da paleta de 256 para 32 ou 16 cores (ou clique nos botões rápidos 256, 128, 64, 32) para diminuir as tabelas de cor LZW.',
      },
      {
        title: 'Ajuste a escala de saída e a otimização da taxa de quadros',
        description:
          'Escolha um modelo de Escala de saída (100%, 85%, 75%, 50% ou 25%) e remova opcionalmente cada 2.º quadro ou 2 de cada 3 quadros, mantendo automaticamente a velocidade real de reprodução.',
      },
      {
        title: 'Execute Comprimir GIF e compare as animações ao vivo',
        description:
          'Veja as prévias animadas ao vivo de Original e Comprimido lado a lado e revise os bytes exatos, a contagem de quadros e a porcentagem de economia.',
      },
      {
        title: 'Baixe o GIF comprimido',
        description:
          'Clique em Baixar GIF comprimido para salvar <nome>_compressed.gif localmente, sem idas ao servidor nem marcas d\'água.',
      },
    ],
    features: [
      {
        title: 'Recodificação GIF real no cliente',
        description: 'Decodifica os quadros, os métodos de descarte e as contagens de loop localmente, e depois recodifica com quantização de cor carregada sob demanda, sem envios ao servidor.',
      },
      {
        title: 'Três alavancas de compressão',
        description: 'Diminua o tamanho com a redução de cores da paleta (256 → 32 cores), o redimensionamento (100% → 25%) e a omissão inteligente de quadros.',
      },
      {
        title: 'Omissão de quadros que preserva o tempo',
        description: 'Ao remover cada 2.º ou 3.º quadro, os atrasos dos quadros mantidos são combinados automaticamente para que a velocidade de reprodução fique natural.',
      },
      {
        title: 'Comparação honesta de bytes',
        description: 'Mostra o tamanho exato de arquivo de antes e depois e a contagem de quadros, e diz com clareza quando é preciso uma redução mais forte de paleta ou escala.',
      },
    ],
    faqs: [
      {
        question: 'O compressor de GIF preserva o tempo completo da animação, as contagens de loop e o movimento?',
        answer:
          'Sim. Ele decodifica cada quadro individual do GIF, o atraso em milissegundos por quadro, o método de descarte e os metadados de loop localmente, e depois recodifica um arquivo GIF89a animado de verdade, em vez de achatá-lo em uma imagem fixa.',
      },
      {
        question: 'Como remover quadros mantém a velocidade da animação natural em vez de tocar em avanço rápido?',
        answer:
          'Ao escolher Remover cada 2.º quadro ou Manter 1 de cada 3 quadros, o compressor soma as durações em milissegundos dos quadros pulados aos quadros mantidos restantes. O tempo total do loop fica preciso enquanto os dados totais de quadros caem pela metade ou em dois terços.',
      },
      {
        question: 'Quais ajustes exatos o Leve, o Equilibrado e a Redução máxima aplicam no compressor de GIF?',
        answer:
          'Leve define 192 cores de paleta com escala de 100% mantendo todos os quadros, enquanto Equilibrado cai para 96 cores e escala de 85% mantendo todos os quadros. Redução máxima combina 64 cores, escala de 75% e Remover cada 2.º quadro para limites agressivos de arquivos do Discord ou do Slack.',
      },
      {
        question: 'Por que a minha primeira compressão Equilibrada ou de 128 cores saiu um pouco maior que um GIF minúsculo existente?',
        answer:
          'Os GIFs bem otimizados criados com ferramentas de desktop costumam depender de pequenos remendos de retângulo sujo entre quadros, enquanto a recodificação no Canvas constrói quadros completos quantizados e limpos. Se o aviso âmbar aparecer, baixe o Limite de cores da paleta para 64 ou 32 cores, reduza a Escala de saída para 75% ou 50%, ou remova cada 2.º quadro.',
      },
      {
        question: 'Qual alavanca reduz mais rápido o tamanho de um GIF animado sem estragar as gravações de tela?',
        answer:
          'Baixar a Escala de saída de 100% para 75% ou 50% corta a área de pixels entre 44% e 75% na hora, mantendo legível o texto da interface. Combinar a escala de 75% com 64–96 cores de paleta funciona especialmente bem para screencasts de documentação.',
      },
      {
        question: 'Por que os botões de otimização da taxa de quadros ficam desativados em um GIF de 1 ou 2 quadros?',
        answer:
          'Remover cada segundo ou terceiro quadro em um arquivo de 1 ou 2 quadros não deixaria nenhum movimento. Esses botões de omissão de quadros são travados automaticamente quando um GIF decodificado tem 2 quadros ou menos.',
      },
      {
        question: 'Qual é o tamanho máximo de arquivo GIF animado que o compressor de GIF aceita?',
        answer:
          'Você pode enviar animações GIF87a ou GIF89a de até 30 MB por arquivo. O progresso aparece de forma limpa como Comprimindo GIF (X%)... enquanto o seu navegador quantiza e recodifica cada quadro mantido.',
      },
      {
        question: 'Reduzir o limite de cores da paleta para menos de 64 cores afeta GIFs fotográficos de forma diferente dos screencasts de interface?',
        answer:
          'Sim. As animações planas de interface de software com poucas cores de marca continuam nítidas com 32 ou 64 cores, enquanto os clipes de vídeo de ação real com gradientes de pele mostram posterização com paletas muito baixas; por isso, baixar um pouco a escala ou a taxa de quadros costuma ser mais limpo para os clipes de filme.',
      },
      {
        question: 'Posso ver em prévia as animações original e comprimida lado a lado antes de baixar?',
        answer:
          'Sim. Logo abaixo da barra escura de resumo de bytes, dois players animados ao vivo mostram os GIFs Original e Comprimido ao mesmo tempo, com as dimensões exatas em pixels e os tamanhos de arquivo, para que você perceba qualquer engasgo ou banding na hora.',
      },
      {
        question: 'Qual é a resolução mínima de saída ao escolher Escala de saída de 25% em GIFs pequenos de figurinha?',
        answer:
          'As dimensões de saída são limitadas com segurança a um mínimo de 16×16 pixels por lado. Isso evita que os GIFs de reação minúsculos colapsem em arquivos inválidos de zero pixel mesmo com a opção de escala de 25%.',
      },
      {
        question: 'Posso rodar vários testes de compressão no mesmo GIF enviado sem atualizar a página?',
        answer:
          'Sim. O buffer de quadros decodificados fica em cache na memória, então você pode ajustar livremente o Limite de cores da paleta (16–256), a Escala de saída ou a Otimização da taxa de quadros e clicar em Comprimir GIF de novo em segundos.',
      },
      {
        question: 'Como o compressor de GIF roda dentro do meu navegador sem enviar animações grandes para um servidor?',
        answer:
          'Ele decodifica os quadros direto do ArrayBuffer enviado em JavaScript e carrega sob demanda um codificador GIF LZW leve e um quantizador de cor. Os screencasts privados do Slack, os relatórios de bugs e as demonstrações de produto nunca saem do seu dispositivo.',
      },
      {
        question: 'Por que os GIFs comprimem menos que os vídeos MP4 do mesmo clipe?',
        answer:
          'O GIF é um formato de quadros de 256 cores com compressão LZW sem perda de 1989, sem a compensação moderna de movimento temporal entre quadros. Combinar uma redução moderada (75%–50%), paletas mais baixas (64–96 cores) e a omissão de quadros 2× oferece a melhor economia de bytes possível dentro da especificação padrão .gif.',
      },
      {
        question: 'Comprimir um GIF animado com pixels transparentes preserva a transparência do fundo?',
        answer:
          'Sim. Os índices de transparência e os métodos de descarte de quadros decodificados do seu GIF original são acompanhados entre os quadros durante a recodificação no navegador.',
      },
      {
        question: 'Qual nome de arquivo é usado ao salvar a animação otimizada do compressor de GIF?',
        answer:
          'Ao clicar em Baixar GIF comprimido, um nome limpo terminado em _compressed.gif é exportado, como demo_walkthrough_compressed.gif. A sua animação mestre original fica completamente intacta no disco.',
      },
      {
        question: 'Posso diminuir um GIF para cumprir os limites de envio do Discord de 8 MB/10 MB ou do Slack?',
        answer:
          'Sim. Solte qualquer animação de até 30 MB, teste Equilibrado ou Redução máxima, confira a leitura ao vivo do tamanho Comprimido bem no topo do cartão de resumo e ajuste a Escala de saída para 50% se precisar de mais redução de peso.',
      },
      {
        question: 'O botão Redefinir limpa por completo a memória de quadros em cache do compressor de GIF?',
        answer:
          'Sim. Ao clicar em Redefinir, as URLs de blob ativas são revogadas e os buffers de quadros decodificados são apagados da memória do navegador, para que você possa carregar outro GIF pesado sem problema.',
      },
      {
        question: 'Em que o compressor de GIF difere do criador de GIF?',
        answer:
          'O criador de GIF constrói animações novas a partir de imagens fixas separadas em JPG, PNG ou WebP. Já este compressor de GIF pega uma animação .gif pesada existente e diminui o seu tamanho de arquivo com a redução de paleta, escala e quadros.',
      },
      {
        question: 'Também posso enviar arquivos .gif estáticos de um só quadro ao compressor de GIF?',
        answer:
          'Sim. Os GIFs estáticos de um só quadro são carregados como arquivos de 1 quadro, em que você pode diminuir as dimensões com a Escala de saída e baixar o Limite de cores da paleta até 16 cores de forma limpa.',
      },
      {
        question: 'Marcas d\'água, limites de quadros ou filas de servidor são aplicados aos GIFs comprimidos?',
        answer:
          'Não. A compressão é executada localmente em toda a velocidade do navegador, sem marcas d\'água, sem cadastros e com repetições ilimitadas.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },
  {
    slug: '/heic-to-jpg',
    name: 'HEIC para JPG',
    shortDescription: 'Converta fotos HEIC/HEIF de iPhone da Apple para JPG universal no navegador.',
    category: 'convert',
    seoTitle: 'Conversor de HEIC para JPG grátis – Fotos de iPhone',
    seoDescription:
      'Transforme fotos da Apple em arquivos universais grátis online com o conversor de HEIC para JPG. Decodificação local com WebAssembly em privado, com ZIP.',
    h1: 'Conversor de HEIC para JPG grátis online',
    subtitle:
      'Transforme as fotos HEIC ou HEIF da câmera do seu iPhone ou iPad da Apple em arquivos .jpg legíveis em qualquer lugar com o nosso conversor de HEIC para JPG grátis, que roda localmente no seu navegador. Ideal para usuários de Windows, candidatos a emprego e laboratórios de fotos que rejeitam o formato de alta eficiência da Apple, ele decodifica até 25 MB por arquivo com WebAssembly do lado do cliente, com qualidade ajustável e downloads em lote em um só ZIP.',
    howToSteps: [
      {
        title: 'Solte fotos HEIC ou HEIF da Apple',
        description:
          'Selecione ou arraste uma ou várias imagens .heic ou .heif (até 25 MB cada uma) direto do seu iPhone, Mac, backup na nuvem ou pasta do Windows.',
      },
      {
        title: 'Espere um pouco a decodificação local com WebAssembly',
        description:
          'A página carrega o WebAssembly do lado do cliente (heic2any) direto dentro da aba do seu navegador para decodificar em privado o contêiner de imagens HEVC da Apple.',
      },
      {
        title: 'Ajuste a qualidade de saída JPG (20%–100%)',
        description:
          'Mantenha o padrão de 90%, quase sem perda, para retratos de família e impressões, ou deslize para 75%–85% para anexos de e-mail mais leves, e depois clique em Converter tudo de novo.',
      },
      {
        title: 'Revise as dimensões em pixels e a comparação de tamanho',
        description:
          'Confira as contagens de bytes do HEIC original em comparação com o JPG de saída em cada cartão e abra o controle Comparar para verificar o detalhe nítido.',
      },
      {
        title: 'Baixe arquivos JPG ou Baixar tudo (ZIP)',
        description:
          'Salve fotos .jpg avulsas direto ou clique em Baixar tudo (ZIP) para baixar compressmypic_heic_to_jpg.zip com um clique.',
      },
    ],
    features: [
      {
        title: 'Decodificação HEIC com WebAssembly no cliente',
        description: 'Usa o heic2any dentro da aba do seu navegador, para que as fotos privadas da sua câmera nunca sejam enviadas para servidores externos.',
      },
      {
        title: 'Conversão em lote e exportação ZIP',
        description: 'Converta pastas inteiras de fotos HEIC de iPhone para JPG em uma só fila e pegue tudo em um ZIP.',
      },
      {
        title: 'Controle de qualidade JPG personalizado',
        description: 'Ajuste a compressão de saída de 20% a 100% conforme você prioriza o detalhe ou o tamanho minúsculo do arquivo.',
      },
      {
        title: 'Privacidade EXIF removida pelo Canvas',
        description: 'A recodificação no Canvas remove de forma natural as coordenadas GPS ocultas e os metadados de série da câmera.',
      },
    ],
    faqs: [
      {
        question: 'Por que os PCs com Windows, os softwares antigos e os formulários de envio rejeitam as fotos .heic de iPhone?',
        answer:
          'A Apple adotou o contêiner HEIC (baseado em compressão de vídeo HEVC) a partir do iOS 11 para economizar espaço de armazenamento em iPhones e iPads. Como muitas instalações de Windows, portais do governo, sistemas CMS e editores de desktop não têm codecs HEVC licenciados, converter HEIC para JPG padrão faz as suas fotos abrirem em qualquer lugar na hora.',
      },
      {
        question: 'Como este conversor de HEIC para JPG decodifica os arquivos da Apple dentro de um navegador web padrão?',
        answer:
          'A maioria dos navegadores não consegue mostrar pixels HEIC de forma nativa em tags de imagem padrão no Windows ou no Linux. Esta ferramenta executa o decodificador WebAssembly heic2any do lado do cliente dentro da sua própria aba, para que o seu navegador traduza os fluxos HEIC em pixels RGB de forma limpa, sem servidores remotos na nuvem.',
      },
      {
        question: 'As fotos pessoais da câmera, as selfies de documento ou as férias em família são enviadas para algum lugar durante a conversão?',
        answer:
          'Nunca. Tanto o passo de decodificação HEIC com WebAssembly quanto o passo de codificação JPEG no Canvas HTML5 acontecem localmente na memória do seu navegador, então as fotos pessoais nunca saem do seu computador ou celular.',
      },
      {
        question: 'Qual é a diferença entre os arquivos .heic e .heif aqui no conversor de HEIC para JPG?',
        answer:
          'HEIF é o padrão de arquivos de imagem de alta eficiência, enquanto HEIC é a extensão de nome de arquivo da Apple para contêineres HEIF codificados com HEVC. As duas extensões .heic e .heif (e os seus tipos MIME correspondentes) são aceitas e decodificadas sem problema para .jpg.',
      },
      {
        question: 'Por que o arquivo JPG convertido costuma sair maior em megabytes que o HEIC original?',
        answer:
          'A codificação HEVC da Apple empacota os dados de imagem com aproximadamente o dobro da densidade do JPEG clássico com uma qualidade visual parecida. Expandir um HEIC de 1,8 MB para um JPG de alta qualidade a 90% costuma produzir um arquivo de 2,5 MB a 3,5 MB — e baixar a qualidade de saída JPG para cerca de 80% ajuda a cortar esse tamanho de volta se for preciso. O ganho aqui é a compatibilidade, não um arquivo menor.',
      },
      {
        question: 'Por que 90% é a qualidade de saída JPG padrão para as fotos de iPhone?',
        answer:
          'Com 90%, o JPEG padrão mantém a textura fina da pele, o detalhe do cabelo e o desfoque de fundo do modo retrato sem blocos de compressão perceptíveis. Você pode deslizar entre 20% e 100% e clicar em Converter tudo de novo a qualquer momento.',
      },
      {
        question: 'Converter Live Photos de iPhone (.heic) mantém o movimento de vídeo ou exporta um JPG fixo?',
        answer:
          'Ao enviar o componente fixo .heic de uma Live Photo de iPhone, o decodificador extrai esse quadro de alta resolução e o exporta como uma fotografia .jpg universal. As faixas de vídeo de movimento dentro dos clipes MOV pareados não são incluídas no JPEG estático.',
      },
      {
        question: 'Posso soltar um álbum inteiro de férias em HEIC e baixar um só ZIP?',
        answer:
          'Sim. Selecione dezenas de arquivos .heic ou .heif (até 25 MB por arquivo) em uma só passada, espere enquanto o seu navegador decodifica cada foto localmente e clique em Baixar tudo (ZIP) para salvar compressmypic_heic_to_jpg.zip.',
      },
      {
        question: 'As coordenadas GPS de iPhone e as etiquetas de localização são mantidas no JPG exportado?',
        answer:
          'Não. A codificação pelo Canvas HTML5 remove automaticamente as localizações GPS EXIF embutidas, os números de série da câmera e as marcas de tempo, dando a você mais privacidade antes de publicar os JPGs convertidos online.',
      },
      {
        question: 'Por que decodificar uma foto de iPhone de 12 ou 48 megapixels pode levar um ou dois segundos por arquivo?',
        answer:
          'A descompressão HEVC em WebAssembly exige cálculos de CPU mais pesados que a decodificação JPEG padrão, especialmente em fotos Pro de iPhone de 24 MP ou 48 MP. Ao processar os lotes localmente, a velocidade de conversão depende do processador do seu dispositivo, não da banda de upload.',
      },
      {
        question: 'O que acontece com a orientação vertical ou horizontal da câmera de iPhone durante a conversão de HEIC para JPG?',
        answer:
          'Os navegadores modernos leem as marcas de orientação embutidas ao decodificar a imagem no Canvas. Isso garante que as selfies verticais e as fotos de paisagem sejam exportadas direitas, sem rotação lateral.',
      },
      {
        question: 'Por que um arquivo chamado imagem.heic falhou com um aviso de erro de HEIC inválido?',
        answer:
          'Às vezes os apps de mensagens de terceiros salvam contêineres corrompidos ou arquivos com etiqueta errada com extensão .heic, ou passam do limite de 25 MB. Tentar uma cópia original exportada com AirDrop, Fotos do iCloud ou Arquivos da Apple resolve os cabeçalhos de envelope danificados.',
      },
      {
        question: 'Qual é o tamanho máximo por foto HEIC ou HEIF que o conversor de HEIC para JPG aceita?',
        answer:
          'Na fila são aceitos arquivos individuais de até 25 MB. Esse limite cobre com folga as capturas HEIC padrão de câmera de iPhone de 12 MP, 24 MP e 48 MP.',
      },
      {
        question: 'Posso comparar visualmente o JPG decodificado com a prévia HEIC original antes de salvar?',
        answer:
          'Sim. Clique em qualquer miniatura de resultado ou no botão Comparar para verificar a nitidez lado a lado dentro do modal interativo de comparação.',
      },
      {
        question: 'As cores de ampla gama Display P3 de iPhone vão ficar precisas depois de converter para JPG?',
        answer:
          'Durante a renderização no Canvas do navegador, as cores de ampla gama são mapeadas de forma limpa para o espaço JPEG padrão sRGB. Como resultado, as cores aparecem de forma consistente em monitores de Windows, navegadores web e quiosques de impressão de fotos, sem mudanças desbotadas.',
      },
      {
        question: 'Como faço para as minhas próximas fotos de iPhone não serem salvas como HEIC em vez de JPG?',
        answer:
          'No seu iPhone, você pode abrir Ajustes, ir em Câmera, tocar em Formatos e escolher Mais compatível para as fotos novas. No entanto, manter Alta eficiência economiza aproximadamente metade do armazenamento do seu celular, e você pode converter lotes específicos de HEIC para JPG a qualquer momento aqui mesmo.',
      },
      {
        question: 'Perco resolução de pixels ao converter um HEIC de 4032×3024 para JPG?',
        answer:
          'Não. Os JPGs de saída mantêm 100% da largura e da altura em pixels decodificados, sem tocar nelas, a menos que você escolha mudar o tamanho delas separadamente depois.',
      },
      {
        question: 'Posso colar ou converter arquivos HEIC de navegadores de Android, Chromebook, Linux ou Windows?',
        answer:
          'Sim. Como o heic2any WebAssembly roda dentro do Chrome, Firefox, Edge e Safari independente do sistema operacional, você pode abrir e converter anexos .heic de iPhone de forma limpa mesmo em máquinas Linux ou Windows sem instalar extensões.',
      },
      {
        question: 'O que devo fazer se precisar diminuir o JPG recém-convertido para menos de 100 KB para um portal de emprego?',
        answer:
          'Baixe a qualidade de saída JPG aqui mesmo e clique em Converter tudo de novo para cortar o tamanho do arquivo rapidinho. Se você ainda precisar de uma mira rígida por bytes, vá direto para Comprimir imagem para 100KB nas nossas ferramentas relacionadas.',
      },
      {
        question: 'Este conversor aceita também arquivos JPG ou PNG, ou só estritamente HEIC e HEIF?',
        answer:
          'Esta página filtra intencionalmente só entradas .heic e .heif para que os lotes de fotos da Apple fiquem limpos. Use o nosso Conversor de imagens em lote se a sua pasta mistura HEIC com arquivos PNG, WebP e BMP.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },
  {
    slug: '/jpg-to-png',
    name: 'JPG para PNG',
    shortDescription: 'Converta fotos JPG/JPEG para imagens PNG sem perda no seu navegador.',
    category: 'convert',
    seoTitle: 'Conversor de JPG para PNG grátis – Sem perda de qualidade',
    seoDescription:
      'Transforme fotos JPEG em arquivos sem perda grátis online com o conversor de JPG para PNG. Converta imagens avulsas ou em lote no seu navegador, com ZIP.',
    h1: 'Conversor de JPG para PNG grátis online',
    subtitle:
      'Converta fotografias padrão .jpg e .jpeg de forma limpa em arquivos .png sem perda com o nosso conversor de JPG para PNG grátis, que roda direto dentro do seu navegador. Feito para gráficas, editores gráficos e formulários web que exigem estritamente envios PNG, ele fixa os pixels existentes sem dano extra de compressão com perda, em lotes de até 25 MB por imagem, com exportação instantânea em ZIP.',
    howToSteps: [
      {
        title: 'Solte fotos JPG ou JPEG de até 25 MB cada uma',
        description:
          'Envie uma ou várias imagens .jpg ou .jpeg do seu computador, celular ou cartão de câmera para a área de envio.',
      },
      {
        title: 'Confirme o modo de codificação PNG sem perda',
        description:
          'Note que o controle de qualidade é ocultado automaticamente e aparece o painel de Codificação PNG sem perda, já que o PNG nunca introduz artefatos de compressão com perda.',
      },
      {
        title: 'Revise os tamanhos do JPG original e do PNG convertido',
        description:
          'Revise as dimensões em pixels e as contagens de bytes por cartão de arquivo, e abra Comparar para verificar a fidelidade de pixels lado a lado.',
      },
      {
        title: 'Adicione mais arquivos JPEG a qualquer momento ou remova os fora do padrão',
        description:
          'Solte mais arquivos .jpg na sessão ativa ou remova cartões avulsos com o botão de lixeira antes de empacotar.',
      },
      {
        title: 'Baixe PNGs avulsos ou Baixar tudo (ZIP)',
        description:
          'Clique em Baixar PNG em qualquer cartão de resultado ou em Baixar tudo (ZIP) para salvar compressmypic_jpg_to_png.zip localmente.',
      },
    ],
    features: [
      {
        title: 'Saída PNG real sem perda',
        description: 'Evita dano adicional de geração com perda ao preparar imagens para mais edição ou arquivo.',
      },
      {
        title: 'Fila em lote e empacotamento ZIP',
        description: 'Converta vários JPEGs para PNG de uma vez e exporte tudo em um só ZIP organizado.',
      },
      {
        title: 'Zero marcas d\'água ou cadastros',
        description: 'Conversões ilimitadas direto no Chrome, Firefox, Safari ou Edge, sem criar uma conta.',
      },
      {
        title: 'Processamento 100% local',
        description: 'As imagens ficam dentro da aba do seu navegador: nada toca um servidor remoto.',
      },
    ],
    faqs: [
      {
        question: 'Por que nenhum controle de qualidade aparece no conversor de JPG para PNG?',
        answer:
          'Diferente do JPEG ou do WebP, o PNG usa compressão DEFLATE sem perda, em que cada pixel é codificado de forma idêntica, sem uma troca de porcentagem de qualidade. Substituir o controle pelo cartão de Codificação PNG sem perda evita suposições enganosas.',
      },
      {
        question: 'Se converter JPG para PNG é sem perda, por que ele não apaga os blocos JPEG borrados que já existem?',
        answer:
          'O PNG sem perda congela os pixels exatos que o seu JPEG guarda hoje, para que não ocorra perda adicional de geração ao editar, cortar ou salvar o arquivo de novo depois. No entanto, ele não consegue reconstruir por mágica as texturas finas que já foram descartadas quando a foto original de câmera foi salva como JPG.',
      },
      {
        question: 'Por que um JPG de 300 KB costuma expandir para um PNG de 1,5 MB–3 MB depois da conversão?',
        answer:
          'O JPEG descarta variações sutis de cor em blocos de 8×8 pixels para se manter pequeno, enquanto o PNG registra dados exatos de pixels RGB sem perda em todo o quadro. As fotografias de tom contínuo precisam naturalmente de muito mais bytes em PNG sem perda que em JPG comprimido.',
      },
      {
        question: 'Quando converter JPG para PNG é realmente útil apesar do tamanho de arquivo maior?',
        answer:
          'Converter para PNG é essencial quando os fornecedores de impressão, os importadores de interface de software, os portais de crachás ou os editores de pixel art exigem estritamente arquivos .png. Também protege as imagens quando você planeja sobrepor texto nítido e editar repetidamente sem acumular artefatos de recompressão JPEG.',
      },
      {
        question: 'Converter um JPG com fundo branco sólido para PNG deixa esse fundo transparente?',
        answer:
          'Não. Os arquivos JPEG padrão não guardam informação de transparência alfa, então converter JPG para PNG produz uma imagem .png totalmente opaca que preserva o fundo branco. Combine depois com o nosso Removedor de fundo se você precisar de um recorte alfa.',
      },
      {
        question: 'Por que não devo só mudar a extensão de um arquivo .jpg para .png manualmente?',
        answer:
          'Mudar só o sufixo do nome deixa os bytes binários JPEG originais dentro, o que faz os validadores rígidos de envio, os carregadores de Canvas HTML e o software de impressão rejeitarem o arquivo ou não conseguirem abri-lo. Executar uma decodificação real no Canvas e uma recodificação PNG escreve fragmentos e cabeçalhos PNG válidos.',
      },
      {
        question: 'Os arquivos PNG convertidos mantêm a largura e a altura exatas em pixels dos meus JPEGs originais?',
        answer:
          'Sim. Cada .png exportado mantém 100% da largura e da altura naturais do JPG de origem, sem cortes nem mudanças de tamanho automáticas.',
      },
      {
        question: 'Posso converter em lote 20 scans JPG em arquivos PNG e salvar um só ZIP?',
        answer:
          'Sim. Solte vários arquivos .jpg ou .jpeg (até 25 MB cada um) juntos, espere um pouco enquanto o seu navegador codifica cada PNG localmente e clique em Baixar tudo (ZIP) para baixar compressmypic_jpg_to_png.zip.',
      },
      {
        question: 'Converter JPG para PNG remove as etiquetas EXIF ocultas da câmera e os metadados GPS?',
        answer:
          'Sim. Decodificar um JPEG no Canvas HTML5 e escrever um PNG novo descarta automaticamente os cabeçalhos EXIF do JPEG, os modelos de câmera e as coordenadas GPS.',
      },
      {
        question: 'Documentos escaneados, recibos ou retratos pessoais são enviados para servidores externos durante a conversão para PNG?',
        answer:
          'Nunca. A decodificação JPEG, a renderização no Canvas, a codificação PNG DEFLATE e o arquivo ZIP rodam estritamente dentro da memória local do navegador no seu computador ou celular.',
      },
      {
        question: 'O que acontece se a minha entrada for um JPEG salvo com cores de impressão CMYK em vez de RGB?',
        answer:
          'Os navegadores modernos convertem os fluxos de pixels JPEG para o espaço de cor RGBA sRGB padrão de 8 bits ao desenhar no Canvas HTML5. Isso garante que o seu .png de saída apareça com precisão em navegadores web, slides e telas de celular.',
      },
      {
        question: 'Como a coluna Mudança mostra o crescimento de tamanho de arquivo no conversor de JPG para PNG?',
        answer:
          'Converter JPGs comprimidos em PNGs sem perda quase sempre aumenta o tamanho em bytes. Por isso, a célula Mudança de cada cartão informa com honestidade a diferença positiva exata +X% junto com os tamanhos em bytes do JPG original e do PNG final.',
      },
      {
        question: 'Posso usar o visualizador Comparar para confirmar que não há mudança de cor entre o JPG e o PNG?',
        answer:
          'Sim. Clique em qualquer miniatura de cartão ou no botão Comparar para revisar os pixels lado a lado na cortina dividida interativa antes de baixar.',
      },
      {
        question: 'Por que o PNG convertido ajuda antes de várias rodadas de anotações ou sobreposições de texto?',
        answer:
          'Salvar um JPEG de novo repetidamente degrada as bordas um pouco cada vez que a quantização com perda roda de novo. Converter um arquivo de origem para PNG uma vez cria um mestre intermediário sem perda que aguenta de forma limpa edições gráficas repetidas.',
      },
      {
        question: 'As duas extensões .jpg e .jpeg são aceitas sem problema?',
        answer:
          'Sim. A área de envio aceita as duas extensões .jpg e .jpeg e gera arquivos .png padronizados, mantendo o nome base original limpo.',
      },
      {
        question: 'Também posso converter imagens PNG, WebP ou HEIC nesta página específica de JPG para PNG?',
        answer:
          'Esta página aceita intencionalmente só entradas JPG/JPEG para uma conversão limpa em um só passo para PNG. Use o nosso Conversor de imagens ou o Conversor de imagens em lote se a sua pasta de origem inclui outros formatos de arquivo.',
      },
      {
        question: 'Qual é o tamanho máximo permitido por JPEG enviado ao conversor de JPG para PNG?',
        answer:
          'Cada arquivo .jpg ou .jpeg individual pode ter até 25 MB. Esse limite generoso cobre com folga exportações de câmera de alta resolução, fotografias DSLR e arte digital ampla.',
      },
      {
        question: 'Por que uma foto de retrato salva como .jpg pode ser exportada direita mesmo tendo sido tirada de lado com a câmera?',
        answer:
          'Os navegadores modernos leem automaticamente as etiquetas de orientação EXIF embutidas enquanto pintam o JPEG decodificado no Canvas HTML5. Isso fixa a orientação direita de forma permanente nos novos pixels PNG, para que ela apareça direita em cada aplicativo.',
      },
      {
        question: 'Os PNGs exportados vão abrir no Photoshop, Illustrator, Figma, Canva e PowerPoint?',
        answer:
          'Sim. Os arquivos .png RGBA padrão de 8 bits criados pelo Canvas HTML5 são universalmente compatíveis com cada aplicativo de design de desktop, suíte de escritório, navegador e sistema operacional móvel.',
      },
      {
        question: 'Qual é a velocidade da conversão de JPG para PNG no navegador comparada com os conversores na nuvem?',
        answer:
          'Como não há tempo de espera de envio ou download de arquivos para fotos de vários megabytes, a conversão local no Canvas é concluída em milissegundos por arquivo direto na sua própria CPU. Os lotes terminam rápido sem esperar em filas de servidores remotos.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },
  {
    slug: '/png-to-jpg',
    name: 'PNG para JPG',
    shortDescription: 'Converta PNGs pesados para JPGs leves com um fundo fosco personalizado.',
    category: 'convert',
    seoTitle: 'Conversor de PNG para JPG grátis – Arquivos menores',
    seoDescription:
      'Transforme PNGs pesados em fotos leves e rápidas grátis online com o conversor de PNG para JPG. Escolha a cor de fundo para áreas transparentes e baixe em ZIP.',
    h1: 'Conversor de PNG para JPG grátis online',
    subtitle:
      'Diminua capturas PNG volumosas, capturas Retina e exportações gráficas em arquivos .jpg rápidos e leves com o nosso conversor de PNG para JPG grátis no seu navegador. Feito para blogueiros, profissionais de marketing e remetentes de e-mail que lidam com anexos PNG grandes demais, de até 25 MB cada um, ele combina um controle de qualidade com um seletor de cor fosca para fundo transparente, para que as áreas alfa nunca virem pretas sólidas.',
    howToSteps: [
      {
        title: 'Solte imagens PNG de até 25 MB cada uma',
        description:
          'Envie uma ou várias capturas .png, renders de produto ou recortes transparentes para a área de envio.',
      },
      {
        title: 'Escolha uma cor fosca para o fundo transparente',
        description:
          'Clique em Branco (#ffffff), Preto (#000000), Cinza claro (#f8fafc) ou na amostra de cor nativa para controlar como os pixels transparentes são achatados atrás dos objetos opacos.',
      },
      {
        title: 'Defina a qualidade de saída JPG (20%–100%)',
        description:
          'Mantenha o padrão nítido de 88%, ou arraste entre 20% (arquivo minúsculo) e 100% (máximo detalhe), e depois clique em Converter tudo de novo.',
      },
      {
        title: 'Verifique a economia de bytes e as bordas nítidas com Comparar',
        description:
          'Revise a porcentagem economizada por cartão e inspecione o texto ou as bordas de produto no visualizador interativo de comparação de antes e depois.',
      },
      {
        title: 'Baixe arquivos JPG ou Baixar tudo (ZIP)',
        description:
          'Salve fotos .jpg convertidas avulsas na hora ou agrupe os lotes em compressmypic_png_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Preenchimento fosco de transparência personalizado',
        description: 'As áreas transparentes de PNG se misturam de forma limpa sobre branco, preto ou qualquer cor de fundo personalizada, em vez de virarem pretas sólidas.',
      },
      {
        title: 'Redução enorme do tamanho de arquivo',
        description: 'Converter PNGs fotográficos para JPG a 85% costuma diminuir o peso do arquivo entre 60% e 85% na hora.',
      },
      {
        title: 'Inspetor visual de antes e depois',
        description: 'Verifique a nitidez lado a lado antes de baixar, para que o texto e as bordas fiquem nítidos.',
      },
      {
        title: 'Execução privada no navegador',
        description: 'As capturas confidenciais e os documentos ficam seguros no seu próprio computador.',
      },
    ],
    faqs: [
      {
        question: 'Por que as capturas de macOS e Windows são salvas como PNGs de vários megabytes que diminuem muito como JPG?',
        answer:
          'Os sistemas operacionais de desktop usam por padrão o PNG sem perda para as capturas, que guarda fielmente milhões de pixels de tela Retina sem comprimir, muitas vezes passando de 3 MB a 8 MB por captura. Converter PNGs fotográficos ou de interface rica para JPG a 85%–90% costuma cortar entre 60% e 85% do peso do arquivo para compartilhar rápido por e-mail e Slack.',
      },
      {
        question: 'Como o seletor de cor fosca para fundo transparente evita as caixas pretas feias no PNG para JPG?',
        answer:
          'Como a especificação JPEG não tem canal de transparência alfa, os conversores simples costumam colocar por padrão os pixels alfa vazios em preto #000000, estragando logotipos escuros ou recortes com sombra. Pintar primeiro a cor fosca selecionada (branco por padrão, além de preto, cinza claro ou qualquer hexadecimal personalizado) sobre o canvas mistura de forma limpa as bordas semitransparentes.',
      },
      {
        question: 'Posso escolher um cinza escuro ou uma cor de marca específica de um site atrás de um logotipo PNG transparente antes de salvar o JPG?',
        answer:
          'Sim. Clique no quadrado de entrada de cor ao lado dos botões rápidos Branco, Preto e Cinza claro, abaixo de Cor fosca para fundo transparente, para escolher qualquer valor hexadecimal exato, e depois clique em Converter tudo de novo para ver a prévia e exportar.',
      },
      {
        question: 'Qual porcentagem de qualidade de saída JPG mantém nítida a tipografia de capturas sem arquivos inflados?',
        answer:
          'Manter a qualidade de saída JPG em torno de 88% (o padrão) a 95% mantém limpas as bordas nítidas do texto de interface de software e dos gráficos. Baixar de 70% pode introduzir um leve ruído de mosquito em torno de letras vermelhas ou azuis de alto contraste, por causa da subamostragem de croma JPEG.',
      },
      {
        question: 'Por que um ícone PNG monocromático plano minúsculo de 20 KB pode crescer um pouco ao ser convertido para JPG a 88%?',
        answer:
          'O PNG de paleta indexada se destaca em gráficos planos de duas cores com áreas sólidas nítidas, enquanto os blocos cosseno de 8×8 do JPEG adicionam sobrecarga em logotipos minúsculos. Confira sempre a coluna Mudança: para ícones planos transparentes destinados a sites, WebP ou manter PNG costuma ser menor que JPG.',
      },
      {
        question: 'Como decido entre PNG para JPG e PNG para WebP no conversor?',
        answer:
          'Escolha PNG para JPG quando os anexos precisarem abrir no Microsoft Word, em construtores de PDF, em programas de e-mail antigos, em laboratórios de impressão ou em portais que rejeitam WebP, ou quando você precisar intencionalmente de um fundo branco sólido. Escolha PNG para WebP quando for publicar arquivos em sites onde preservar a transparência e a máxima velocidade importam.',
      },
      {
        question: 'Converter recortes de produto transparentes sobre um fundo branco #ffffff ajuda nas listas de marketplaces?',
        answer:
          'Sim. Marketplaces como Amazon e eBay costumam preferir JPGs nítidos de fundo branco opaco para as miniaturas principais de produto, em vez de PNG alfa, e o branco é comprimido com muita eficiência dentro do JPEG.',
      },
      {
        question: 'Posso converter um lote inteiro de 25 capturas PNG Retina para JPG de uma vez?',
        answer:
          'Sim. Solte vários arquivos .png de até 25 MB cada um na fila, escolha a sua qualidade e a cor de preenchimento fosco, e baixe tudo junto em compressmypic_png_to_jpg.zip.',
      },
      {
        question: 'O que acontece com as sombras suaves em torno de uma captura de janela PNG transparente ao achatar para JPG?',
        answer:
          'As sombras com mistura alfa são compostas de forma natural sobre a cor fosca escolhida, em vez de serem cortadas em contornos duros e serrilhados. Isso produz um sombreamento suave e limpo sobre fundos brancos ou coloridos, pronto para slides e artigos.',
      },
      {
        question: 'Painéis confidenciais, recibos ou maquetes de design são enviados para uma API na nuvem durante PNG para JPG?',
        answer:
          'Não. A composição fosca no Canvas, a compressão JPEG e a geração ZIP rodam localmente dentro da aba do seu navegador, então as capturas sensíveis nunca saem do seu computador.',
      },
      {
        question: 'A conversão de PNG para JPG muda a largura ou a altura em pixels?',
        answer:
          'Não. Cada .jpg convertido mantém 100% da largura e da altura exatas do seu PNG original. Use o Redimensionador de imagens ou o Redimensionador de imagens em lote se você também quiser reduzir as capturas Retina para dimensões 1×.',
      },
      {
        question: 'Qual faixa o controle de qualidade cobre ao converter PNG para JPG?',
        answer:
          'Arrastar para 20% mostra como a compressão agressiva corta o tamanho quando arquivos ultra minúsculos são obrigatórios, enquanto 85%–90% atinge o ponto ideal visual para fotos nítidas e slides. Escolher 100% oferece o máximo detalhe JPEG quando o peso em bytes é secundário.',
      },
      {
        question: 'Posso mudar a cor fosca ou a qualidade depois de ver os primeiros resultados de conversão?',
        answer:
          'Sim. Escolha outra amostra fosca ou mova o controle a qualquer momento e clique em Converter tudo de novo para regenerar cada arquivo carregado sem enviar tudo de novo.',
      },
      {
        question: 'Converter PNG para JPG remove os fragmentos de texto PNG embutidos, como o software de criação ou os comentários?',
        answer:
          'Sim. Ao desenhar os pixels no Canvas HTML5, os blocos tEXt, iTXt e de perfil ICC embutidos são removidos, mantendo os JPGs de saída leves e limpos.',
      },
      {
        question: 'Posso verificar a nitidez de bordas de antes e depois em capturas de interface convertidas antes de baixar?',
        answer:
          'Sim. Clique em Comparar em qualquer cartão para arrastar o visualizador dividido pelas etiquetas de texto e os ícones contra o PNG original sem perda.',
      },
      {
        question: 'Que tipos de arquivo esta página dedicada de PNG para JPG aceita?',
        answer:
          'Ela filtra de forma limpa arquivos .png de até 25 MB por arquivo, para que você não achate por acidente entradas que não sejam PNG. Para lotes misturados com arquivos WebP ou BMP, teste o Conversor de imagens em lote.',
      },
      {
        question: 'O conversor aceita PNGs transparentes entrelaçados (Adam7)?',
        answer:
          'Sim. O decodificador de imagens nativo do seu navegador lê de forma limpa tanto os fluxos PNG padrão quanto os entrelaçados antes de pintá-los sobre o fundo fosco do Canvas.',
      },
      {
        question: 'O Fotos do Windows, o Pré-visualização do macOS, o WhatsApp e as impressoras antigas vão abrir o JPG exportado?',
        answer:
          'Sim. As saídas .jpg RGB de linha base padrão têm a compatibilidade mais ampla de qualquer formato de imagem digital em celulares, navegadores, suítes de escritório e quiosques de impressão.',
      },
      {
        question: 'Qual é o nome de arquivo avulso em comparação com o nome do ZIP em lote de PNG para JPG?',
        answer:
          'Os downloads avulsos mantêm o seu nome de arquivo original limpo com extensão .jpg. Os lotes de 2 ou mais são exportados agrupados de forma limpa dentro de compressmypic_png_to_jpg.zip.',
      },
      {
        question: 'Posso converter capturas PNG de navegadores móveis de iOS ou Android de forma limpa?',
        answer:
          'Sim. As amostras foscas, o controle de qualidade, o inspetor visual de comparação e a exportação ZIP funcionam direto no Safari no iOS e no Chrome no Android, sem baixar nenhum aplicativo.',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },
  {
    slug: '/jpg-to-webp',
    name: 'Conversor de JPG para WebP',
    shortDescription: 'Converta fotos JPG para WebP moderno e deixe seu site mais rápido, com melhor SEO.',
    category: 'convert',
    seoTitle: 'Conversor de JPG para WebP grátis online – Leve',
    seoDescription:
      'Converta fotos JPG para WebP grátis online no seu navegador. Arquivos menores, páginas mais rápidas e Core Web Vitals melhor, com controle de qualidade e ZIP.',
    h1: 'Conversor de JPG para WebP grátis online',
    subtitle:
      'Transforme fotos JPG do dia a dia em imagens WebP modernas e leves com nosso conversor grátis de JPG para WebP, que funciona por completo no seu navegador. Feito para blogueiros, donos de loja e desenvolvedores que precisam de páginas mais rápidas e Core Web Vitals melhores, ele converte arquivos JPG de até 25 MB cada um com a qualidade que você escolher — 82% por padrão —, com processamento em lote e downloads em ZIP em um clique, sem enviar nada.',
    howToSteps: [
      {
        title: 'Solte fotos JPG de até 25 MB cada uma',
        description:
          'Envie uma ou várias fotos .jpg ou .jpeg do seu blog, da sua loja ou do rolo da câmera para a área de envio.',
      },
      {
        title: 'Ajuste a qualidade de saída WebP (20%–100%)',
        description:
          'Mantenha os nítidos 82% padrão para fotos, ou arraste o controle para 20% para arquivos minúsculos e 100% para o máximo de detalhe, e depois clique em Converter tudo de novo.',
      },
      {
        title: 'Confira a economia de tamanho em cada cartão',
        description:
          'Cada resultado mostra o tamanho JPG original, o tamanho WebP convertido e a porcentagem economizada, para você ver o ganho na hora.',
      },
      {
        title: 'Compare a nitidez lado a lado',
        description:
          'Clique em Comparar em qualquer cartão para abrir o visualizador dividido e conferir se texto, rostos e bordas continuam nítidos com a qualidade escolhida.',
      },
      {
        title: 'Baixe arquivos WebP ou Baixar tudo (ZIP)',
        description:
          'Salve arquivos .webp individuais ou junte o lote inteiro em compressmypic_jpg_to_webp.zip em um clique.',
      },
    ],
    features: [
      {
        title: 'Pontuações de PageSpeed e LCP mais rápidas',
        description:
          'WebP é o formato web de última geração recomendado pelo Lighthouse e pelos navegadores modernos.',
      },
      {
        title: 'Controle de qualidade ajustável',
        description:
          'Ajuste a compressão de 20% a 100% e veja os resultados na hora.',
      },
      {
        title: 'Exportação em lote para ZIP',
        description:
          'Otimize pastas inteiras de imagens de blog ou de e-commerce localmente em segundos.',
      },
      {
        title: 'Sem idas ao servidor',
        description:
          'Usa o codificador WebP embutido do seu navegador: rápido, funciona offline e privado.',
      },
    ],
    faqs: [
      {
        question: 'Quanto menor fica um arquivo WebP do que a mesma foto salva em JPG?',
        answer:
          'Com qualidade visual parecida, os arquivos WebP costumam ficar de 25% a 35% menores do que a mesma foto salva em JPG, porque a compressão WebP prevê os pixels com mais eficiência. A economia exata depende da foto: paisagens detalhadas economizam menos, enquanto céus lisos e fotos de estúdio economizam mais.',
      },
      {
        question: 'Por que o Google recomenda WebP para sites mais rápidos e Core Web Vitals melhores?',
        answer:
          'As ferramentas Lighthouse e PageSpeed do Google apontam imagens pesadas como uma das principais causas de um Largest Contentful Paint (LCP) lento. Servir a mesma foto como um WebP mais leve reduz o tempo de download em conexões lentas, o que melhora diretamente o LCP e a pontuação de experiência que o Google usa como sinal de ranqueamento.',
      },
      {
        question: 'Quais navegadores abrem um arquivo WebP sem instalar nada?',
        answer:
          'Todos os navegadores modernos abrem WebP nativamente: Chrome, Edge, Firefox e Safari no computador, além do Chrome no Android e do Safari no iOS. Não é preciso nenhum plugin nem aplicativo de visualização, então as imagens WebP aparecem direto em páginas, chats e na maioria dos visualizadores modernos.',
      },
      {
        question: 'Qual qualidade devo usar para fotos de JPG para WebP em um site?',
        answer:
          'Para fotos de sites, de 80% a 85% é o ponto ideal: as imagens ficam praticamente idênticas ao JPG original e continuam bem menores. A ferramenta usa 82% como padrão por esse mesmo motivo, e você pode subir para 90% ou mais em imagens principais, onde cada detalhe importa.',
      },
      {
        question: 'Converter JPG para WebP muda as dimensões da foto?',
        answer:
          'Não. A conversão só muda o formato do arquivo e a compressão, então o WebP exportado mantém 100% da largura e da altura em pixels do JPG original. Se você também quiser dimensões menores, use o Redimensionador de Imagens depois, para tamanhos exatos em pixels.',
      },
      {
        question: 'Uma foto JPG pode manter a transparência ao virar WebP?',
        answer:
          'Não, porque os arquivos JPG comuns não têm canal de transparência para preservar: cada pixel de um JPG é totalmente opaco. Se o seu gráfico original tem fundo transparente, comece de um PNG e use nosso conversor de PNG para WebP, que preserva todo o canal alfa.',
      },
      {
        question: 'Minhas fotos JPG são enviadas para algum servidor durante a conversão para WebP?',
        answer:
          'Nunca. A conversão roda em HTML5 Canvas dentro da própria aba do seu navegador, então suas fotos são codificadas localmente e nunca saem do seu computador ou celular. Ao fechar a aba, elas somem da memória do navegador.',
      },
      {
        question: 'Posso converter uma pasta inteira de imagens JPG de um blog para WebP de uma vez?',
        answer:
          'Sim. Solte vários arquivos .jpg ou .jpeg de até 25 MB cada um na fila, escolha uma só qualidade para o lote inteiro e baixe tudo junto em compressmypic_jpg_to_webp.zip. Cada arquivo é convertido separadamente, então um arquivo danificado nunca trava os outros.',
      },
      {
        question: 'O que acontece com os dados EXIF e as tags de GPS de um JPG ao virar WebP?',
        answer:
          'Ao desenhar os pixels no HTML5 Canvas, os dados EXIF embutidos são removidos, incluindo coordenadas de GPS, modelo da câmera e carimbos de data e hora. Isso mantém os arquivos WebP resultantes leves e protege sua privacidade antes de publicar fotos online.',
      },
      {
        question: 'Por que o WebP convertido às vezes fica maior do que o JPG original?',
        answer:
          'JPGs muito pequenos ou já muito comprimidos podem crescer um pouco ao serem recodificados, principalmente com 100% de qualidade, porque o WebP adiciona seu próprio peso de formato. Se um arquivo crescer, baixe a qualidade para perto de 80% ou fique com o JPG original: a coluna Mudança de cada cartão mostra o resultado com honestidade.',
      },
      {
        question: 'Posso usar os arquivos WebP convertidos no WordPress, na Shopify ou no Wix?',
        answer:
          'Sim. WordPress, Shopify, Wix, Squarespace e a maioria dos criadores de sites modernos aceitam uploads WebP diretamente, e os navegadores os servem sem nenhuma configuração extra. Para temas ou plugins muito antigos que rejeitem WebP, converta de volta com nossa ferramenta de WebP para JPG.',
      },
      {
        question: 'Qual é o tamanho máximo de arquivo JPG que o conversor para WebP aceita?',
        answer:
          'Cada arquivo JPG ou JPEG pode ter até 25 MB, o que cobre fotos de câmera em alta resolução e capturas de tela grandes. Como a conversão acontece no seu dispositivo, os arquivos grandes são processados na velocidade do seu processador local, sem tempo de espera de upload.',
      },
      {
        question: 'A conversão de JPG para WebP funciona no navegador do celular?',
        answer:
          'Sim. O controle de qualidade, a fila em lote, o visualizador de comparação e o download em ZIP funcionam no Safari no iOS e no Chrome no Android, sem instalar nenhum aplicativo. No celular, lotes muito grandes só demoram um pouco mais porque o trabalho roda no processador do telefone.',
      },
      {
        question: 'Como confirmo que o WebP convertido continua nítido antes de baixar?',
        answer:
          'Clique em Comparar em qualquer cartão de resultado para abrir o visualizador dividido e arraste sobre a foto para inspecionar rostos, texto e bordas em relação ao JPG original. Se algo parecer suave, suba o controle de qualidade e clique em Converter tudo de novo.',
      },
      {
        question: 'Posso mudar a qualidade depois da primeira conversão de JPG para WebP sem enviar de novo?',
        answer:
          'Sim. Mova o controle de qualidade para um novo valor a qualquer momento e clique em Converter tudo de novo para regenerar cada arquivo carregado com o novo ajuste. Seus arquivos enviados continuam na fila, então não é preciso arrastá-los de novo.',
      },
      {
        question: 'WebP é melhor do que JPG para fotos de produto de uma loja online?',
        answer:
          'Para fotos de produto exibidas em um site, sim: WebP com 80% a 85% parece igual ao JPG e carrega bem mais rápido, o que ajuda tanto os compradores quanto o ranqueamento em buscadores. Fique com o JPG só quando um marketplace, um laboratório de impressão ou um comprador pedir isso explicitamente.',
      },
      {
        question: 'Qual nome de arquivo os WebPs baixados mantêm?',
        answer:
          'Os downloads individuais mantêm o nome original do arquivo, limpo, com a extensão .webp, então foto_01.jpg vira foto_01.webp. Lotes de dois ou mais arquivos são exportados juntos dentro de compressmypic_jpg_to_webp.zip.',
      },
      {
        question: 'Posso converter capturas de tela JPG com texto para WebP sem borrar as letras?',
        answer:
          'Sim, com 85% a 90% de qualidade, o texto das capturas fica nítido porque o WebP preserva bem as bordas nítidas de alto contraste. Abaixo de 70% as letras pequenas podem amolecer, então confira no visualizador Comparar e suba a qualidade se o texto parecer desfocado.',
      },
      {
        question: 'O conversor de JPG para WebP funciona offline depois que a página carrega?',
        answer:
          'Sim. Depois que a página carrega no seu navegador, a conversão roda por completo em JavaScript local e HTML5 Canvas, sem chamadas ao servidor. Você só vai precisar de internet de novo para carregar a própria página ou para baixar os arquivos prontos.',
      },
      {
        question: 'Quando vale a pena manter o JPG em vez de converter para WebP?',
        answer:
          'Mantenha o JPG quando o arquivo precisar abrir em software antigo, anexos de e-mail, laboratórios de impressão ou portais de upload que ainda rejeitam WebP. Para qualquer coisa publicada em um site moderno, WebP é a melhor opção — e você sempre pode converter de volta com WebP para JPG.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'Conversor de WebP para JPG',
    shortDescription: 'Converta downloads WebP de volta para arquivos JPG aceitos em todos os lugares.',
    category: 'convert',
    seoTitle: 'Conversor de WebP para JPG grátis online – Universal',
    seoDescription:
      'Converta imagens WebP para JPG universal grátis online no seu navegador. Escolha uma cor de fundo para áreas transparentes, ajuste a qualidade e baixe em ZIP.',
    h1: 'Conversor de WebP para JPG grátis online',
    subtitle:
      'Transforme imagens .webp baixadas em arquivos .jpg clássicos que abrem em qualquer aplicativo, portal ou impressora com nosso conversor grátis de WebP para JPG no seu navegador. Feito para quem recebe um arquivo WebP de um site ou de um chat e o editor, o pacote de escritório ou o formulário de envio o rejeita, ele converte arquivos WebP de até 25 MB cada um com 88% de qualidade por padrão, com seletor de cor de fundo para áreas transparentes e exportação em ZIP em lote.',
    howToSteps: [
      {
        title: 'Solte imagens WebP de até 25 MB cada uma',
        description:
          'Envie um ou vários arquivos .webp salvos de sites, chats ou downloads para a área de envio.',
      },
      {
        title: 'Escolha uma cor de fundo para as áreas transparentes',
        description:
          'Escolha Branco (#ffffff), Preto (#000000), Cinza claro (#f8fafc) ou qualquer cor hexadecimal personalizada, porque o JPG não consegue guardar transparência.',
      },
      {
        title: 'Ajuste a qualidade de saída JPG (20%–100%)',
        description:
          'Mantenha os nítidos 88% padrão ou arraste o controle para 20% para arquivos minúsculos e 100% para o máximo de detalhe, e depois clique em Converter tudo de novo.',
      },
      {
        title: 'Compare o JPG com o WebP original',
        description:
          'Clique em Comparar em qualquer cartão para inspecionar bordas e texto no visualizador dividido antes de salvar qualquer coisa.',
      },
      {
        title: 'Baixe arquivos JPG ou Baixar tudo (ZIP)',
        description:
          'Salve arquivos .jpg individuais ou junte o lote inteiro em compressmypic_webp_to_jpg.zip em um clique.',
      },
    ],
    features: [
      {
        title: 'Resolve rejeições de software antigo',
        description:
          'Converta imagens WebP com facilidade para portais, impressoras ou aplicativos antigos que só aceitam JPG.',
      },
      {
        title: 'Preenchimento de fundo seguro para transparência',
        description:
          'WebPs transparentes são achatados sem problemas sobre fundo branco, preto ou qualquer cor hexadecimal.',
      },
      {
        title: 'Recodificação de alta qualidade',
        description:
          'A qualidade padrão de 88% mantém os detalhes nítidos com um aumento mínimo no tamanho do arquivo.',
      },
      {
        title: 'Privacidade 100% no navegador',
        description:
          'Sem filas na nuvem nem uploads para o servidor: funciona na hora no seu dispositivo.',
      },
    ],
    faqs: [
      {
        question: 'Por que alguns aplicativos, impressoras e formulários recusam arquivos WebP?',
        answer:
          'WebP é um formato mais novo, e muitos programas antigos de computador, quiosques de impressão, versões do Microsoft Office e formulários oficiais de envio foram criados antes dele existir, então só reconhecem JPG e PNG. Converter WebP para JPG faz a imagem abrir em todos os lugares na hora, sem pedir para ninguém instalar nada.',
      },
      {
        question: 'O que acontece com as partes transparentes de um WebP ao virar JPG?',
        answer:
          'O JPG não tem canal alfa de transparência, então os pixels transparentes precisam ser preenchidos com uma cor sólida durante a conversão. Esta ferramenta os preenche com a cor de fundo que você escolher — branco por padrão —, então logotipos e adesivos ficam com um fundo sólido limpo em vez de um quadrado preto.',
      },
      {
        question: 'Posso escolher a cor de fundo atrás de um adesivo WebP transparente?',
        answer:
          'Sim. Em Cor de fundo para transparência, escolha Branco, Preto ou Cinza claro, ou clique na amostra de cor para digitar qualquer valor hexadecimal personalizado. A escolha vale quando você clicar em Converter tudo de novo, então dá para testar fundos diferentes antes de baixar.',
      },
      {
        question: 'Converter WebP para JPG perde qualidade?',
        answer:
          'Alguma perda é inevitável porque o JPG recodifica os pixels com compressão com perda, mas com os 88% padrão a diferença é praticamente invisível para fotos e capturas de tela. Se o WebP original já era de baixa qualidade, a conversão não consegue restaurar detalhe que nunca esteve lá.',
      },
      {
        question: 'O JPG mantém as mesmas dimensões em pixels do WebP original?',
        answer:
          'Sim. Cada .jpg convertido mantém 100% da largura e da altura exatas em pixels do WebP original, então nada é cortado nem redimensionado. Use o Redimensionador de Imagens depois se você também precisar de dimensões menores.',
      },
      {
        question: 'O que devo fazer com um arquivo WebP animado neste conversor para JPG?',
        answer:
          'Um WebP animado é exportado como um JPG parado, porque o formato JPG não consegue guardar movimento. Você recebe um só quadro nítido da animação, que funciona bem para miniaturas e documentos; para a versão em movimento, guarde o arquivo WebP original.',
      },
      {
        question: 'Meus arquivos WebP são enviados para algum servidor durante a conversão para JPG?',
        answer:
          'Não. Toda a conversão roda em HTML5 Canvas dentro da própria aba do seu navegador, então suas imagens nunca são enviadas para um servidor, nem guardadas, nem vistas por mais ninguém. Ao fechar a aba, elas somem da memória do navegador.',
      },
      {
        question: 'Posso converter muitos downloads WebP para JPG em um só lote?',
        answer:
          'Sim. Solte vários arquivos .webp de até 25 MB cada um na fila, escolha uma só cor de fundo e uma só qualidade para o lote inteiro, e baixe tudo junto em compressmypic_webp_to_jpg.zip. Cada arquivo é convertido separadamente.',
      },
      {
        question: 'Qual é o maior arquivo WebP que o conversor para JPG aceita?',
        answer:
          'Cada arquivo WebP pode ter até 25 MB, o que cobre downloads em alta resolução e capturas de tela grandes. A conversão roda no seu dispositivo, então os arquivos grandes são processados na velocidade do seu processador local, sem tempo de espera de upload.',
      },
      {
        question: 'Como consigo um fundo branco puro em vez de um quadrado preto atrás de um logotipo?',
        answer:
          'Escolha Branco (#ffffff) em Cor de fundo para transparência antes de converter: o branco é o valor padrão, então a maioria dos logotipos já sai limpa. Se um arquivo foi convertido com a cor errada, é só mudar a amostra e clicar em Converter tudo de novo para regenerá-lo.',
      },
      {
        question: 'Por que o arquivo JPG às vezes fica maior do que o WebP original?',
        answer:
          'O WebP comprime com mais eficiência do que o JPG, então um WebP pequeno recodificado como JPG com 88% pode acabar maior do que a fonte. Isso é normal: você está trocando um pouco de tamanho de arquivo por compatibilidade universal. Baixar a qualidade para perto de 75% costuma trazer o JPG de volta para baixo do tamanho original.',
      },
      {
        question: 'Posso abrir o JPG convertido no Microsoft Word, no PowerPoint ou no Photoshop?',
        answer:
          'Sim. Arquivos .jpg RGB padrão de linha de base abrem em praticamente todos os pacotes de escritório, editores, navegadores e fluxos de impressão, incluindo versões antigas que nunca aprenderam WebP. Essa compatibilidade universal é o principal motivo para converter.',
      },
      {
        question: 'O conversor de WebP para JPG remove os metadados dos arquivos WebP?',
        answer:
          'Sim. Ao desenhar os pixels no HTML5 Canvas, os dados EXIF, XMP e de perfil ICC embutidos são removidos, então os JPGs resultantes são leves e não têm dados ocultos de localização nem de câmera.',
      },
      {
        question: 'Como confirmo que o JPG ficou bom antes de baixar?',
        answer:
          'Clique em Comparar em qualquer cartão de resultado para abrir o visualizador dividido e arraste sobre a imagem para inspecionar bordas, texto e cores em relação ao WebP original. Cada cartão também mostra os tamanhos original e convertido, então as surpresas aparecem antes de salvar.',
      },
      {
        question: 'Posso mudar a cor de fundo ou a qualidade depois de converter WebP para JPG?',
        answer:
          'Sim. Escolha outra amostra de fundo ou mova o controle de qualidade a qualquer momento e clique em Converter tudo de novo para regenerar cada arquivo carregado sem enviar de novo. Seus arquivos WebP originais continuam na fila até você limpá-los.',
      },
      {
        question: 'Qual nome de arquivo o JPG baixado vai manter?',
        answer:
          'Os downloads individuais mantêm o nome original do arquivo, limpo, com a extensão .jpg, então banner.webp vira banner.jpg. Lotes de dois ou mais arquivos são exportados juntos dentro de compressmypic_webp_to_jpg.zip.',
      },
      {
        question: 'O conversor de WebP para JPG funciona nos navegadores de iPhone e Android?',
        answer:
          'Sim. O seletor de cor de fundo, o controle de qualidade, o visualizador de comparação e o download em ZIP funcionam no Safari no iOS e no Chrome no Android, sem instalar nenhum aplicativo. Lotes grandes só demoram um pouco mais nos processadores de celular.',
      },
      {
        question: 'Quando vale a pena converter WebP para JPG em vez de WebP para PNG?',
        answer:
          'Escolha JPG quando precisar do arquivo menor e compatível com tudo: anexos de e-mail, documentos do Office, portais de envio e impressoras. Escolha PNG quando precisar manter a transparência ou quiser qualidade sem perda e perfeita em pixels para editar.',
      },
      {
        question: 'Por que uma captura de tela WebP com texto nítido fica mais suave depois de virar JPG?',
        answer:
          'O JPEG usa subamostragem de croma, que suaviza levemente as bordas de alto contraste, como letras vermelhas ou azuis sobre branco. Subir a qualidade para 92% ou 95% mantém o texto das capturas nítido, e o visualizador Comparar permite verificar isso antes de baixar.',
      },
      {
        question: 'Posso converter uma imagem WebP que um site salvou sem extensão de arquivo?',
        answer:
          'Não diretamente: esta página filtra as entradas pela extensão .webp e pelo tipo MIME WebP, então primeiro renomeie o arquivo para terminar em .webp. Se o arquivo for na verdade um JPG ou PNG rotulado errado pelo site, use o conversor correspondente.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'Conversor de PNG para WebP',
    shortDescription: 'Converta gráficos PNG transparentes para WebP compacto e transparente.',
    category: 'convert',
    seoTitle: 'Conversor de PNG para WebP grátis online – Transparente',
    seoDescription:
      'Converta PNG para WebP grátis online mantendo toda a transparência. Reduza logotipos, ícones e capturas no seu navegador com controle de qualidade e ZIP.',
    h1: 'Conversor de PNG para WebP grátis online',
    subtitle:
      'Reduza logotipos PNG transparentes, ícones e capturas de tela pesados para arquivos WebP compactos com nosso conversor grátis de PNG para WebP, direto no seu navegador. Feito para desenvolvedores web e designers que precisam de gráficos transparentes de carregamento rápido, ele converte arquivos PNG de até 25 MB cada um com 85% de qualidade por padrão e preserva todo o canal alfa, com processamento em lote e downloads em ZIP.',
    howToSteps: [
      {
        title: 'Solte gráficos PNG de até 25 MB cada um',
        description:
          'Envie logotipos .png transparentes, ícones, capturas de tela ou recortes de produto para a área de envio.',
      },
      {
        title: 'Ajuste a qualidade de saída WebP (20%–100%)',
        description:
          'Mantenha os 85% padrão para gráficos transparentes nítidos, ou arraste para 20% para arquivos minúsculos e 100% para o máximo de detalhe, e depois clique em Converter tudo de novo.',
      },
      {
        title: 'Confira a transparência e a economia de tamanho',
        description:
          'Cada cartão mostra o tamanho PNG original, o novo tamanho WebP e a porcentagem economizada, com a transparência visível em uma pré-visualização quadriculada.',
      },
      {
        title: 'Compare bordas e sombras lado a lado',
        description:
          'Clique em Comparar em qualquer cartão para inspecionar bordas semitransparentes, gradientes e sombras no visualizador dividido.',
      },
      {
        title: 'Baixe arquivos WebP ou Baixar tudo (ZIP)',
        description:
          'Salve arquivos .webp individuais ou junte o lote em compressmypic_png_to_webp.zip em um clique.',
      },
    ],
    features: [
      {
        title: 'Transparência alfa completa preservada',
        description:
          'Diferente do JPG, o WebP mantém bordas semitransparentes limpas e sombras dos seus PNGs.',
      },
      {
        title: 'Recursos até 70% menores',
        description:
          'Substitua imagens principais PNG de vários megabytes e recortes por arquivos WebP elegantes para sites mais rápidos.',
      },
      {
        title: 'Visualização dividida de antes e depois',
        description:
          'Inspecione bordas suavizadas e gradientes lado a lado antes de baixar.',
      },
      {
        title: 'Processamento em lote e ZIP',
        description:
          'Converta conjuntos inteiros de ícones e produtos localmente, sem limites de upload.',
      },
    ],
    faqs: [
      {
        question: 'O conversor de PNG para WebP preserva mesmo os fundos transparentes?',
        answer:
          'Sim. A codificação WebP em HTML5 Canvas preserva todo o canal alfa de 8 bits, então os pixels totalmente transparentes continuam transparentes e as bordas semitransparentes, as sombras suaves e as curvas suavizadas mantêm sua mistura delicada. A pré-visualização do resultado mostra a transparência sobre um quadriculado para você verificar na hora.',
      },
      {
        question: 'Quanto menor é o WebP do que o PNG para a mesma imagem?',
        answer:
          'Dependendo da complexidade visual, converter um PNG para WebP com 85% costuma cortar o tamanho do arquivo de 50% a 80%. PNGs fotográficos e capturas de tela grandes economizam mais, enquanto ícones planos minúsculos com poucas cores podem economizar menos: a coluna Mudança de cada cartão mostra o resultado exato.',
      },
      {
        question: 'As sombras semitransparentes e as bordas suaves sobrevivem à conversão de PNG para WebP?',
        answer:
          'Sim. O WebP guarda os mesmos valores alfa de 8 bits do PNG, então sombras, brilhos e bordas suavizadas são compostos exatamente como no original. Use o visualizador Comparar para aproximar as bordas e confirmar que a suavidade parece idêntica antes de baixar.',
      },
      {
        question: 'Qual qualidade funciona melhor para logotipos PNG transparentes convertidos para WebP?',
        answer:
          'Os 85% padrão são ideais para a maioria dos logotipos e ícones: as bordas ficam nítidas enquanto os arquivos encolhem drasticamente. Para trabalho com qualidade de impressão ou arte de linhas muito finas, suba a qualidade para 90% ou 95%; abaixo de 70% as linhas finas e o texto pequeno podem ficar ásperos.',
      },
      {
        question: 'Como converto um conjunto completo de ícones de PNG para WebP de uma vez?',
        answer:
          'Solte vários arquivos .png de até 25 MB cada um na fila, escolha uma só qualidade para o lote inteiro e baixe tudo junto em compressmypic_png_to_webp.zip. Cada ícone é convertido separadamente, então um arquivo danificado nunca trava os outros.',
      },
      {
        question: 'Os arquivos PNG são enviados para um servidor ao converter para WebP?',
        answer:
          'Não. A conversão roda em HTML5 Canvas dentro da própria aba do seu navegador, então seus logotipos, capturas de tela e recursos de design nunca saem do seu computador. Ao fechar a aba, eles somem da memória do navegador.',
      },
      {
        question: 'A conversão de PNG para WebP muda as dimensões da imagem?',
        answer:
          'Não. O WebP exportado mantém 100% da largura e da altura em pixels do PNG original: só mudam o formato do arquivo e a compressão. Use o Redimensionador de Imagens depois se você também precisar de dimensões menores para a web.',
      },
      {
        question: 'Qual é o tamanho máximo de PNG que o conversor para WebP aceita?',
        answer:
          'Cada arquivo PNG pode ter até 25 MB, o que cobre capturas de tela grandes, capturas Retina e renders de produto em alta resolução. Como a conversão roda no seu dispositivo, os arquivos grandes são processados na velocidade do seu processador local, sem tempo de espera de upload.',
      },
      {
        question: 'Por que meu WebP convertido ficou maior do que o PNG original?',
        answer:
          'PNGs planos minúsculos com poucas cores, como um ícone de duas cores, já são extremamente eficientes, e a codificação WebP com perda pode adicionar peso sobre eles. Se um arquivo crescer, confira a coluna Mudança e fique com o PNG original para esse recurso; o WebP ganha em gráficos fotográficos e complexos.',
      },
      {
        question: 'Os sites podem usar diretamente os arquivos WebP convertidos de PNG?',
        answer:
          'Sim. Todos os navegadores modernos mostram WebP nativamente, e WordPress, Shopify, Wix e a maioria dos criadores de sites aceitam uploads WebP. Logotipos WebP transparentes funcionam exatamente como PNGs transparentes em cabeçalhos, botões e galerias de produto.',
      },
      {
        question: 'O que acontece com os metadados e os blocos de texto de um PNG durante a conversão para WebP?',
        answer:
          'Ao desenhar os pixels no HTML5 Canvas, os blocos de texto PNG embutidos, as notas de software de criação e os perfis ICC são removidos. Os arquivos WebP resultantes ficam leves e sem metadados ocultos, o que é ideal para publicar recursos online.',
      },
      {
        question: 'Como verifico se a transparência foi preservada antes de baixar o WebP?',
        answer:
          'A miniatura do resultado mostra as áreas transparentes sobre um padrão quadriculado, e o botão Comparar abre um visualizador dividido onde você pode arrastar sobre a imagem para confirmar que as bordas se fundem com suavidade. Se o fundo parecer sólido em vez de quadriculado, o PNG original não tinha transparência.',
      },
      {
        question: 'Dá para ajustar a qualidade depois de converter PNG para WebP sem enviar de novo?',
        answer:
          'Sim. Mova o controle de qualidade para um novo valor a qualquer momento e clique em Converter tudo de novo para regenerar cada arquivo carregado com o novo ajuste. Seus PNGs enviados continuam na fila, então não é preciso arrastá-los de novo.',
      },
      {
        question: 'WebP é melhor do que PNG para as imagens principais de um site?',
        answer:
          'Para imagens principais fotográficas ou complexas, sim: WebP com 85% parece igual ao PNG e carrega muito mais rápido. O PNG continua ganhando para ícones planos minúsculos, pixel art ou qualquer recurso em que a qualidade matematicamente sem perda seja um requisito rígido.',
      },
      {
        question: 'O conversor de PNG para WebP funciona no navegador do celular?',
        answer:
          'Sim. O controle de qualidade, a fila em lote, o visualizador de comparação e o download em ZIP funcionam no Safari no iOS e no Chrome no Android, sem instalar nenhum aplicativo. Lotes grandes só demoram um pouco mais nos processadores de celular.',
      },
      {
        question: 'Qual nome de arquivo os WebPs convertidos de PNG recebem?',
        answer:
          'Os downloads individuais mantêm o nome original do arquivo, limpo, com a extensão .webp, então logo.png vira logo.webp. Lotes de dois ou mais arquivos são exportados juntos dentro de compressmypic_png_to_webp.zip.',
      },
      {
        question: 'Posso converter uma captura de tela PNG com texto para WebP sem borrar as letras?',
        answer:
          'Sim, com 85% a 90% de qualidade, o texto das capturas fica nítido porque o WebP preserva bem as bordas de alto contraste. Abaixo de 70% as letras pequenas podem amolecer, então confira no visualizador Comparar e suba a qualidade se o texto parecer desfocado.',
      },
      {
        question: 'Esta ferramenta mantém o perfil de cor ICC do PNG no WebP?',
        answer:
          'Não. A recodificação no Canvas remove o perfil ICC embutido e representa as cores em sRGB padrão, que é o que os navegadores usam para exibir na web. Para a maioria dos gráficos de tela a diferença visível é insignificante, mas o trabalho de cor crítico para impressão deve ficar no formato original.',
      },
      {
        question: 'Quando vale a pena escolher PNG para WebP em vez de PNG para JPG?',
        answer:
          'Escolha WebP sempre que a imagem precisar continuar transparente ou carregar rápido em um site. Escolha JPG só quando o destino — um cliente de e-mail, um documento do Office ou um portal de upload antigo — não conseguir abrir WebP e você estiver disposto a abrir mão da transparência por um fundo sólido.',
      },
      {
        question: 'Dá para converter um PNG entrelaçado para WebP aqui?',
        answer:
          'Sim. O decodificador de imagens nativo do seu navegador lê com limpeza tanto os fluxos PNG padrão quanto os entrelaçados (Adam7) antes de pintá-los no Canvas, então os arquivos entrelaçados são convertidos exatamente como os PNGs normais.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'Conversor de WebP para PNG',
    shortDescription: 'Converta imagens WebP para PNG sem perda, com a transparência intacta.',
    category: 'convert',
    seoTitle: 'Conversor de WebP para PNG grátis online – Sem perda',
    seoDescription:
      'Converta WebP para PNG sem perda grátis online no seu navegador. A transparência é preservada, as dimensões não mudam e os lotes são exportados em ZIP.',
    h1: 'Conversor de WebP para PNG grátis online',
    subtitle:
      'Converta downloads WebP em arquivos PNG universais sem perda com nosso conversor grátis de WebP para PNG, por completo no seu navegador. Feito para designers, editores e qualquer pessoa cujo aplicativo ou gráfica rejeite WebP, ele converte arquivos WebP de até 25 MB cada um sem nenhuma perda de qualidade e com transparência alfa completa, além de processamento em lote e downloads em ZIP.',
    howToSteps: [
      {
        title: 'Solte arquivos WebP de até 25 MB cada um',
        description:
          'Envie uma ou várias imagens .webp de downloads, chats ou sites para a área de envio.',
      },
      {
        title: 'Espere a conversão PNG sem perda',
        description:
          'Cada WebP é representado sobre um canvas transparente e exportado como PNG sem perda automaticamente: não há controle de qualidade porque o PNG não tem perda.',
      },
      {
        title: 'Confira a transparência na pré-visualização',
        description:
          'As áreas transparentes aparecem sobre um fundo quadriculado, e cada cartão lista os tamanhos de arquivo original e convertido.',
      },
      {
        title: 'Compare o PNG com o WebP original',
        description:
          'Clique em Comparar em qualquer cartão para inspecionar bordas, texto e transparência no visualizador dividido.',
      },
      {
        title: 'Baixe arquivos PNG ou Baixar tudo (ZIP)',
        description:
          'Salve arquivos .png individuais ou junte o lote em compressmypic_webp_to_png.zip em um clique.',
      },
    ],
    features: [
      {
        title: 'Mantém a transparência alfa intacta',
        description:
          'Logotipos e adesivos WebP transparentes continuam transparentes no PNG resultante.',
      },
      {
        title: 'Compatibilidade universal com editores',
        description:
          'Abra os PNGs convertidos em qualquer ferramenta de design, apresentação ou portal de upload sem problemas de compatibilidade com WebP.',
      },
      {
        title: 'Suporte a fila em lote',
        description:
          'Converta vários downloads WebP para PNG em um clique e exporte um só ZIP.',
      },
      {
        title: 'Processamento privado no dispositivo',
        description:
          'Os arquivos nunca saem do seu dispositivo: a conversão acontece na memória local do navegador.',
      },
    ],
    faqs: [
      {
        question: 'A conversão de WebP para PNG é mesmo sem perda?',
        answer:
          'Sim. O PNG guarda cada pixel decodificado exatamente como o navegador o leu do WebP, sem mais perda por compressão. O único limite de qualidade é a compressão que o próprio WebP original já aplicou: esta ferramenta nunca adiciona uma segunda rodada de dano com perda.',
      },
      {
        question: 'Um logotipo WebP transparente continua transparente como PNG?',
        answer:
          'Sim. Todo o canal alfa é transferido, então os pixels transparentes continuam transparentes e as bordas semitransparentes mantêm sua mistura delicada. A miniatura do resultado mostra a transparência sobre um padrão quadriculado para você confirmar antes de baixar.',
      },
      {
        question: 'Por que o PNG resultante fica maior do que o WebP que eu enviei?',
        answer:
          'O PNG usa compressão DEFLATE sem perda, enquanto o WebP usa uma compressão moderna bem mais agressiva, então os mesmos pixels simplesmente precisam de mais bytes como PNG. O arquivo maior é o preço honesto da compatibilidade universal e de zero perda extra de qualidade.',
      },
      {
        question: 'Posso converter um WebP animado para PNG aqui?',
        answer:
          'Um WebP animado é exportado como um PNG parado do seu primeiro quadro, porque o PNG não consegue guardar movimento. Esse quadro parado funciona bem para miniaturas, documentos e adesivos; para a versão em movimento, guarde o arquivo WebP original.',
      },
      {
        question: 'O PNG mantém a mesma largura e altura do WebP?',
        answer:
          'Sim. Cada .png convertido mantém 100% das dimensões exatas em pixels do WebP original, então nada é cortado nem redimensionado. Use o Redimensionador de Imagens depois se você também precisar de dimensões menores.',
      },
      {
        question: 'Os arquivos WebP são enviados para um servidor durante a conversão para PNG?',
        answer:
          'Não. A conversão roda em HTML5 Canvas dentro da própria aba do seu navegador, então suas imagens nunca são enviadas para um servidor, nem guardadas, nem vistas por mais ninguém. Ao fechar a aba, elas somem da memória do navegador.',
      },
      {
        question: 'Posso converter um lote de imagens WebP para PNG de uma vez?',
        answer:
          'Sim. Solte vários arquivos .webp de até 25 MB cada um na fila e baixe tudo junto em compressmypic_webp_to_png.zip. Cada arquivo é convertido separadamente, então um arquivo danificado nunca trava os outros.',
      },
      {
        question: 'Qual é o tamanho máximo de um só arquivo WebP neste conversor para PNG?',
        answer:
          'Cada arquivo WebP pode ter até 25 MB, o que cobre downloads em alta resolução e capturas de tela grandes. Como a conversão roda no seu dispositivo, os arquivos grandes são processados na velocidade do seu processador local, sem tempo de espera de upload.',
      },
      {
        question: 'Existe um controle de qualidade para WebP para PNG?',
        answer:
          'Não, e não faz falta: o PNG é um formato sem perda, então não há compromisso entre qualidade e tamanho para ajustar. A ferramenta mostra uma nota de Codificação PNG sem perda em vez de um controle, e cada pixel é preservado com exatidão.',
      },
      {
        question: 'Onde posso usar os arquivos PNG convertidos de WebP?',
        answer:
          'Em qualquer lugar onde PNG seja aceito: Photoshop, Figma, Canva, PowerPoint, Word, gráficas e portais de upload que rejeitam WebP. O PNG é o formato de imagem rasterizada mais universalmente editável, e essa é exatamente a razão desta conversão.',
      },
      {
        question: 'O conversor de WebP para PNG mantém os metadados, como EXIF?',
        answer:
          'Não. Ao desenhar os pixels no HTML5 Canvas, os dados EXIF, XMP e de perfil ICC embutidos são removidos, então os PNGs resultantes são leves e não têm dados ocultos de localização nem de câmera.',
      },
      {
        question: 'Como confirmo que a transparência sobreviveu antes de baixar o PNG?',
        answer:
          'A miniatura do resultado mostra as áreas transparentes sobre um fundo quadriculado, e o botão Comparar abre um visualizador dividido onde você pode arrastar sobre a imagem para confirmar que as bordas se fundem com suavidade. Se o fundo parecer sólido, o WebP original não tinha transparência.',
      },
      {
        question: 'Posso converter capturas de tela WebP com texto para PNG sem perder qualidade?',
        answer:
          'Sim. Como o PNG não tem perda, o texto das capturas, os rótulos de interface e as linhas finas ficam perfeitos em pixels, mais nítidos do que qualquer recodificação JPG. Isso faz desta a opção certa quando uma captura precisa ser editada ou impressa depois.',
      },
      {
        question: 'Qual nome de arquivo o download PNG vai manter?',
        answer:
          'Os downloads individuais mantêm o nome original do arquivo, limpo, com a extensão .png, então sticker.webp vira sticker.png. Lotes de dois ou mais arquivos são exportados juntos dentro de compressmypic_webp_to_png.zip.',
      },
      {
        question: 'Posso converter WebP para PNG pelo celular?',
        answer:
          'Sim. A área de envio, a fila em lote, o visualizador de comparação e o download em ZIP funcionam no Safari no iOS e no Chrome no Android, sem instalar nenhum aplicativo. Lotes grandes só demoram um pouco mais nos processadores de celular.',
      },
      {
        question: 'Quando vale a pena escolher WebP para PNG em vez de WebP para JPG?',
        answer:
          'Escolha PNG quando precisar manter a transparência ou quiser qualidade sem perda e perfeita em pixels para editar, desenhar ou imprimir. Escolha JPG quando precisar do arquivo menor e compatível com tudo e puder viver com um fundo sólido e uma leve perda por compressão.',
      },
      {
        question: 'Dá para converter um arquivo WebP sem extensão?',
        answer:
          'Não diretamente: esta página filtra as entradas pela extensão .webp e pelo tipo MIME WebP, então primeiro renomeie o arquivo para terminar em .webp. Se o arquivo for na verdade um JPG ou PNG rotulado errado pelo site, use o conversor correspondente.',
      },
      {
        question: 'Por que um designer precisaria de PNG em vez de WebP?',
        answer:
          'Ferramentas de design, editores por camadas e fluxos de impressão muitas vezes precisam de PNG para máscaras, seleções e sobreposições transparentes que o WebP não consegue oferecer nos processos deles. O PNG também garante que cada edição futura comece de pixels exatos, não de uma decodificação com perda.',
      },
      {
        question: 'A ferramenta aceita arquivos WebP com codificação sem perda?',
        answer:
          'Sim. Arquivos WebP sem perda são decodificados com limpeza no navegador e recodificados como PNG sem perda, com cada pixel preservado. Não importa se o WebP original era com perda ou sem perda, a saída PNG não adiciona mais perda de qualidade.',
      },
      {
        question: 'O que acontece se um arquivo WebP estiver corrompido ou não for um WebP de verdade?',
        answer:
          'Esse arquivo mostra uma mensagem de erro clara por arquivo explicando que não foi possível decodificá-lo, enquanto os outros arquivos do seu lote continuam sendo convertidos normalmente. Baixar o WebP original de novo da fonte costuma resolver um arquivo truncado ou rotulado errado.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'Conversor de SVG para PNG',
    shortDescription: 'Transforme gráficos vetoriais SVG em PNGs nítidos de 1× a 4× com transparência.',
    category: 'convert',
    seoTitle: 'Conversor de SVG para PNG grátis online – 1x a 4x',
    seoDescription:
      'Converta vetores SVG para PNG transparente grátis online no seu navegador. Exporte PNGs nítidos 1x, 2x, 3x ou 4x, com limites claros sobre recursos externos.',
    h1: 'Conversor de SVG para PNG grátis online',
    subtitle:
      'Transforme logotipos, ícones e ilustrações SVG em PNGs transparentes e nítidos com nosso conversor grátis de SVG para PNG, por completo no seu navegador. Feito para designers e desenvolvedores que precisam de exportações em alta resolução para apresentações, documentos e lojas de aplicativos, ele renderiza SVGs autocontidos em escala 1×, 2×, 3× ou 4× (até 8000 px) com processamento em lote e downloads em ZIP.',
    howToSteps: [
      {
        title: 'Solte arquivos SVG de até 25 MB cada um',
        description:
          'Envie um ou vários arquivos vetoriais .svg com formas, caminhos, gradientes ou estilos embutidos.',
      },
      {
        title: 'Escolha uma escala de exportação de rasterização (1×–4×)',
        description:
          'Escolha 1× para o tamanho intrínseco do SVG, ou 2×–4× para exportações PNG nítidas de Retina e alta resolução.',
      },
      {
        title: 'Clique em Converter tudo de novo depois de mudar a escala',
        description:
          'As mudanças de escala valem quando você converte de novo, para que a pré-visualização e o download combinem com o tamanho que você escolheu.',
      },
      {
        title: 'Confira a nota sobre recursos externos',
        description:
          'Imagens externas, folhas de estilo e fontes da web dentro de um SVG são bloqueadas pela segurança do canvas do navegador e não vão aparecer no PNG.',
      },
      {
        title: 'Compare o PNG rasterizado',
        description:
          'Clique em Comparar em qualquer cartão para inspecionar bordas nítidas e transparência no visualizador dividido.',
      },
      {
        title: 'Baixe arquivos PNG ou Baixar tudo (ZIP)',
        description:
          'Salve arquivos .png individuais ou junte o lote em compressmypic_svg_to_png.zip em um clique.',
      },
    ],
    features: [
      {
        title: 'Exportação em alta resolução 1×, 2×, 3× e 4×',
        description:
          'Escale ícones pequenos de 24 px ou logotipos de 100 px com limpeza até 4× de resolução antes de rasterizar.',
      },
      {
        title: 'Fundo transparente preservado',
        description:
          'Exporta PNGs nítidos com canal alfa, prontos para apresentações, cabeçalhos web e portfólios de design.',
      },
      {
        title: 'Escopo honesto do canvas independente',
        description:
          'Documenta com clareza que as formas e os estilos vetoriais SVG embutidos são renderizados com limpeza, enquanto URLs de imagens externas ou fontes externas dentro de SVGs podem ser bloqueadas pelo ambiente isolado do Canvas do navegador.',
      },
      {
        title: 'Rasterização de SVG em lote',
        description:
          'Converta pacotes inteiros de ícones para PNG em uma só passada e baixe um ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Meu SVG usa uma foto vinculada: por que ela não aparece no PNG?',
        answer:
          'Por segurança, os navegadores isolam os arquivos SVG representados no HTML5 Canvas e bloqueiam a busca de URLs de <image> externas, então nenhuma foto vinculada da web consegue carregar durante a rasterização. Incorpore a imagem diretamente no arquivo SVG ou substitua-a por formas vetoriais embutidas, e o PNG será renderizado completo.',
      },
      {
        question: 'Posso usar uma fonte da web dentro de um SVG para exportar para PNG?',
        answer:
          'Fontes externas referenciadas por URL são bloqueadas pelo mesmo ambiente isolado do Canvas, então o texto em uma fonte remota volta para uma fonte do sistema ou desaparece. Use fontes do sistema, converta o texto em contornos no seu editor ou incorpore os dados da fonte diretamente no arquivo SVG.',
      },
      {
        question: 'Qual escala devo escolher para transformar um ícone de 24 px em um PNG nítido de 96 px?',
        answer:
          'Escolha 4× em Escala de exportação de rasterização e clique em Converter tudo de novo: um ícone de 24 px vira um PNG nítido de 96 px porque os vetores são renderizados de novo no tamanho maior em vez de esticar pixels. Use 2× para uma exportação de 48 px, e lembre-se de que a saída é limitada a 8000 px no lado mais longo.',
      },
      {
        question: 'Qual é o maior PNG que um SVG pode produzir aqui?',
        answer:
          'A escala de exportação é limitada a 8000 px no lado mais longo, então um SVG muito grande em 4× para nesse teto. Para a maioria dos ícones e logotipos o limite nunca importa: um logotipo de 100 px em 4× tem só 400 px, bem abaixo do limite.',
      },
      {
        question: 'O conversor de SVG para PNG mantém o fundo transparente?',
        answer:
          'Sim. A menos que o próprio SVG pinte um retângulo de fundo, o PNG exportado mantém um fundo limpo com transparência alfa, pronto para apresentações, cabeçalhos e portfólios de design. A pré-visualização mostra a transparência sobre um padrão quadriculado.',
      },
      {
        question: 'Os arquivos SVG são enviados para um servidor?',
        answer:
          'Não. A rasterização roda em HTML5 Canvas dentro da própria aba do seu navegador, então seus arquivos vetoriais nunca saem do seu computador. Ao fechar a aba, eles somem da memória do navegador.',
      },
      {
        question: 'Posso converter um pacote inteiro de ícones SVG para PNG de uma vez?',
        answer:
          'Sim. Solte vários arquivos .svg de até 25 MB cada um na fila, escolha uma só escala para o lote inteiro e baixe tudo junto em compressmypic_svg_to_png.zip. Cada ícone é rasterizado separadamente.',
      },
      {
        question: 'O que faz um SVG não conseguir ser rasterizado e dar erro?',
        answer:
          'A causa mais comum é XML inválido: tags sem fechar, atributos malformados ou um arquivo que na verdade não é marcação SVG. Abra o arquivo em um editor de texto ou de vetores, corrija o erro de sintaxe e tente de novo: a mensagem de erro aparece por arquivo, então os outros SVGs continuam sendo convertidos.',
      },
      {
        question: 'Gradientes e opacidade dentro de um SVG são renderizados corretamente no PNG?',
        answer:
          'Sim. Gradientes lineares e radiais embutidos, atributos de opacidade e preenchimentos com estilo definidos dentro do SVG são renderizados com limpeza no Canvas. Só ficam bloqueados os recursos buscados fora do arquivo: imagens externas, folhas de estilo e fontes.',
      },
      {
        question: 'O texto dentro do meu SVG vai ser exportado como texto PNG nítido?',
        answer:
          'Sim, quando o texto usa fontes do sistema instaladas no seu dispositivo, ele é rasterizado com nitidez em qualquer escala. O texto em uma fonte externa volta para uma fonte padrão, então converta o texto em contornos no Illustrator, no Figma ou no Inkscape para resultados garantidos.',
      },
      {
        question: 'Posso converter um SVG que faz referência a um arquivo CSS externo?',
        answer:
          'Não. Folhas de estilo externas são bloqueadas pela segurança do canvas do navegador, então as classes definidas em um arquivo .css vinculado não vão ser aplicadas e as formas podem ser renderizadas sem estilo. Leve os estilos para dentro com atributos de estilo ou um bloco <style> dentro do próprio SVG.',
      },
      {
        question: 'A saída PNG do conversor de SVG é sem perda?',
        answer:
          'Sim. Os pixels rasterizados são salvos como um PNG sem perda, então bordas, texto e cores planas ficam perfeitos em pixels no tamanho exportado. Exporte de novo em uma escala maior se precisar de mais detalhe: não há controle de qualidade porque o PNG não tem passo com perda.',
      },
      {
        question: 'Qual é o tamanho do PNG na escala 1×?',
        answer:
          'Em 1×, o PNG combina com as dimensões intrínsecas do SVG conforme seus atributos de largura e altura ou seu viewBox. Um ícone de 24×24 é exportado como 24×24 pixels, enquanto um SVG sem tamanho intrínseco usa as dimensões do seu viewBox.',
      },
      {
        question: 'Posso converter arquivos SVG no meu celular?',
        answer:
          'Sim. A área de envio, o seletor de escala, o visualizador de comparação e o download em ZIP funcionam no Safari no iOS e no Chrome no Android, sem instalar nenhum aplicativo. Pacotes de ícones grandes só demoram um pouco mais nos processadores de celular.',
      },
      {
        question: 'Com qual nome de arquivo o PNG exportado de SVG é baixado?',
        answer:
          'Os downloads individuais mantêm o nome original do arquivo, limpo, com a extensão .png, então logo.svg vira logo.png. Lotes de dois ou mais arquivos são exportados juntos dentro de compressmypic_svg_to_png.zip.',
      },
      {
        question: 'O conversor aceita animações SVG (SMIL ou CSS)?',
        answer:
          'Não. A rasterização captura um só quadro estático do SVG, então as animações SMIL e CSS não passam para o PNG. Para um resultado animado, exporte a animação como vídeo ou GIF da sua ferramenta de design.',
      },
      {
        question: 'Posso rasterizar um SVG com uma imagem incorporada como data URI?',
        answer:
          'Em geral, sim. Imagens incorporadas diretamente no arquivo como data URIs em base64 fazem parte do próprio SVG, então nada é buscado de fora e elas geralmente são renderizadas. As imagens vinculadas com URLs http são as que ficam bloqueadas pela segurança do Canvas.',
      },
      {
        question: 'Quando vale a pena usar SVG para PNG em vez de manter o SVG?',
        answer:
          'Use PNG quando o destino precisar de uma imagem rasterizada: PowerPoint, Word, publicações sociais, capturas de lojas de aplicativos ou qualquer ferramenta que não consiga abrir SVG. Mantenha o SVG quando o gráfico precisar continuar infinitamente escalável em um site.',
      },
      {
        question: 'A conversão de SVG para PNG muda as cores?',
        answer:
          'As cores são renderizadas como definidas no SVG, e a saída é um PNG sRGB padrão. O Canvas remove os perfis ICC embutidos, então a correspondência de cor crítica para impressão deve ficar no arquivo vetorial original; para telas, a diferença visível é insignificante.',
      },
      {
        question: 'Qual é o tamanho máximo de arquivo SVG aceito?',
        answer:
          'Cada arquivo SVG pode ter até 25 MB, o que cobre até arquivos ilustrados enormes com milhares de caminhos. SVGs muito complexos só demoram um ou dois segundos a mais para rasterizar no seu dispositivo.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'Conversor de AVIF para JPG',
    shortDescription: 'Converta imagens AVIF para JPG universal com o decodificador do seu navegador.',
    category: 'convert',
    seoTitle: 'Conversor de AVIF para JPG grátis online – Universal',
    seoDescription:
      'Converta imagens AVIF para JPG universal grátis online no seu navegador. Decodificação AVIF nativa, seletor de cor de fundo para transparência, qualidade e ZIP.',
    h1: 'Conversor de AVIF para JPG grátis online',
    subtitle:
      'Converta imagens .avif modernas em arquivos .jpg compatíveis com tudo com nosso conversor grátis de AVIF para JPG, que usa o decodificador AVIF embutido do seu navegador. Feito para quem baixa um arquivo AVIF que o editor, o aplicativo de escritório ou o formulário de envio não consegue abrir, ele converte arquivos AVIF de até 25 MB cada um com 88% de qualidade por padrão, com seletor de cor de fundo e exportação em ZIP em lote, sem enviar nada.',
    howToSteps: [
      {
        title: 'Solte imagens AVIF de até 25 MB cada uma',
        description:
          'Envie arquivos .avif em um navegador moderno com decodificação AVIF nativa: Chrome, Edge, Firefox ou Safari.',
      },
      {
        title: 'Escolha uma cor de fundo para as áreas transparentes',
        description:
          'Escolha Branco (#ffffff), Preto (#000000), Cinza claro (#f8fafc) ou qualquer cor hexadecimal personalizada, porque o JPG não consegue guardar transparência.',
      },
      {
        title: 'Ajuste a qualidade de saída JPG (20%–100%)',
        description:
          'Mantenha os nítidos 88% padrão ou arraste para 20% para arquivos minúsculos e 100% para o máximo de detalhe, e depois clique em Converter tudo de novo.',
      },
      {
        title: 'Compare o JPG com o AVIF original',
        description:
          'Clique em Comparar em qualquer cartão para conferir detalhe, cor e bordas no visualizador dividido antes de salvar.',
      },
      {
        title: 'Baixe arquivos JPG ou Baixar tudo (ZIP)',
        description:
          'Salve arquivos .jpg individuais ou junte o lote em compressmypic_avif_to_jpg.zip em um clique.',
      },
    ],
    features: [
      {
        title: 'Decodificação AVIF nativa do navegador',
        description:
          'Aproveita o decodificador AVIF por hardware ou software do seu navegador moderno localmente, sem idas ao servidor.',
      },
      {
        title: 'Compatibilidade de formato honesta',
        description:
          'Criado estritamente para decodificar AVIF para JPG universal (ou use as ferramentas de JPG, PNG e WebP para outros formatos; codificação e saída AVIF não são oferecidas).',
      },
      {
        title: 'Seletor de cor de fundo para transparência',
        description:
          'Áreas AVIF transparentes se fundem com limpeza sobre fundo branco ou a cor hexadecimal personalizada que você escolher.',
      },
      {
        title: 'Exportação em ZIP em lote',
        description:
          'Converta vários downloads AVIF para JPG em uma só sessão do navegador.',
      },
    ],
    faqs: [
      {
        question: 'O que é AVIF e por que alguns aplicativos não o abrem?',
        answer:
          'AVIF é um formato de imagem moderno baseado na compressão de vídeo AV1 que guarda fotos em tamanhos bem menores do que o JPG. Como é mais novo, muitos editores antigos, pacotes de escritório, impressoras e portais de upload nunca adicionaram um decodificador AVIF, então converter para JPG é a forma mais rápida de deixar a imagem utilizável em todos os lugares.',
      },
      {
        question: 'Quais navegadores conseguem decodificar AVIF para converter para JPG?',
        answer:
          'Chrome, Edge, Firefox e Safari modernos decodificam AVIF nativamente no navegador, e é isso que esta ferramenta usa. Se você abrir a página em um navegador muito antigo, cada arquivo mostra um erro claro em vez de converter; atualizar o navegador resolve.',
      },
      {
        question: 'O que acontece se meu navegador não conseguir decodificar um arquivo AVIF?',
        answer:
          'O arquivo mostra uma mensagem de erro explícita por arquivo explicando que seu navegador não conseguiu decodificá-lo, enquanto os outros arquivos do seu lote continuam sendo convertidos normalmente. Mudar para uma versão atual do Chrome, Firefox, Edge ou Safari resolve em quase todos os casos.',
      },
      {
        question: 'Converter AVIF para JPG perde qualidade?',
        answer:
          'Alguma perda é inevitável porque o JPG recodifica os pixels com compressão com perda, enquanto o AVIF é bem mais eficiente com a mesma qualidade. Com os 88% padrão, a diferença é praticamente invisível para fotos; só um exame extremo das texturas finas revela algum amolecimento.',
      },
      {
        question: 'As áreas transparentes de um AVIF vão ficar pretas no JPG?',
        answer:
          'Não. As áreas transparentes são preenchidas com a cor de fundo que você escolher — branco por padrão —, então logotipos e recortes ficam com um fundo sólido limpo em vez de um quadrado preto. Escolha Preto, Cinza claro ou qualquer cor hexadecimal personalizada antes de converter.',
      },
      {
        question: 'Posso converter imagens AVIF com transparência para JPG de forma limpa?',
        answer:
          'Sim. O seletor de cor de fundo funde as bordas semitransparentes com suavidade sobre o fundo escolhido, então as sombras suaves e as curvas suavizadas parecem naturais em vez de se cortarem em contornos duros. Confira no visualizador Comparar para confirmar a mistura.',
      },
      {
        question: 'Os arquivos AVIF são enviados para um servidor?',
        answer:
          'Não. A decodificação e a recodificação acontecem localmente com o decodificador AVIF nativo do seu navegador e o HTML5 Canvas, então suas imagens nunca saem do seu dispositivo. Ao fechar a aba, elas somem da memória do navegador.',
      },
      {
        question: 'Como converto vários downloads AVIF para JPG de uma só vez?',
        answer:
          'Solte vários arquivos .avif de até 25 MB cada um na fila, escolha uma só cor de fundo e uma só qualidade para o lote inteiro, e baixe tudo junto em compressmypic_avif_to_jpg.zip. Cada arquivo é convertido separadamente.',
      },
      {
        question: 'Qual é o maior arquivo AVIF aceito?',
        answer:
          'Cada arquivo AVIF pode ter até 25 MB, o que cobre downloads em alta resolução e capturas de câmera. Como a decodificação roda no seu dispositivo, os arquivos grandes são processados na velocidade do seu processador local, sem tempo de espera de upload.',
      },
      {
        question: 'Existe alguma forma de converter um JPG para AVIF aqui?',
        answer:
          'Não. O HTML5 Canvas não consegue codificar AVIF de forma universal em todos os navegadores, então este site só decodifica AVIF para saídas JPG, PNG e WebP confiáveis. Para saída AVIF você precisaria de um codificador de computador dedicado.',
      },
      {
        question: 'O JPG mantém as mesmas dimensões em pixels do AVIF?',
        answer:
          'Sim. Cada .jpg convertido mantém 100% da largura e da altura exatas em pixels do AVIF original, então nada é cortado nem redimensionado. Use o Redimensionador de Imagens depois se você também precisar de dimensões menores.',
      },
      {
        question: 'Qual porcentagem de qualidade combina mais com as fotos AVIF?',
        answer:
          'Os 88% padrão são ideais para a maioria das fotos: o detalhe fica nítido enquanto os arquivos continuam pequenos. Para fotos muito detalhadas ou imagens que você planeja editar depois, suba a qualidade para 92% ou 95%; para compartilhar rápido, 80% costuma bastar.',
      },
      {
        question: 'Como ficam as fotos AVIF HDR ou de gama ampla depois de virar JPG?',
        answer:
          'Elas são exportadas como um JPG sRGB padrão, então os brilhos HDR extremos são ajustados para a faixa normal de exibição e as cores de gama ampla muito saturadas mudam levemente para sRGB. Para fotos do dia a dia o resultado parece natural; para trabalho de cor crítico, guarde o AVIF original.',
      },
      {
        question: 'Posso conferir o JPG convertido antes de baixar?',
        answer:
          'Sim. Clique em Comparar em qualquer cartão de resultado para abrir o visualizador dividido e arraste sobre a imagem para inspecionar detalhe, cor e bordas em relação ao AVIF original. Cada cartão também mostra os tamanhos original e convertido.',
      },
      {
        question: 'Se o primeiro resultado ficar ruim, posso ajustar as configurações e tentar de novo?',
        answer:
          'Sim. Escolha outra amostra de fundo ou mova o controle de qualidade a qualquer momento e clique em Converter tudo de novo para regenerar cada arquivo carregado sem enviar de novo. Seus arquivos AVIF originais continuam na fila até você limpá-los.',
      },
      {
        question: 'Com qual nome o JPG baixado é salvo?',
        answer:
          'Os downloads individuais mantêm o nome original do arquivo, limpo, com a extensão .jpg, então foto.avif vira foto.jpg. Lotes de dois ou mais arquivos são exportados juntos dentro de compressmypic_avif_to_jpg.zip.',
      },
      {
        question: 'O conversor de AVIF para JPG funciona no navegador do celular?',
        answer:
          'Sim, em navegadores de celular modernos com decodificação AVIF nativa, como o Chrome atual no Android e o Safari no iOS. O seletor de cor de fundo, o controle de qualidade e o download em ZIP funcionam sem instalar nenhum aplicativo.',
      },
      {
        question: 'Quando vale a pena converter AVIF para JPG em vez de AVIF para PNG?',
        answer:
          'Escolha JPG quando precisar de um arquivo pequeno e universalmente compatível para e-mail, Office ou portais de envio. Escolha PNG quando precisar manter a transparência ou quiser qualidade sem perda e perfeita em pixels para editar, lembrando que os arquivos PNG serão bem maiores.',
      },
      {
        question: 'Por que o JPG às vezes fica maior do que o AVIF?',
        answer:
          'O AVIF comprime bem mais eficientemente do que o JPG, então um AVIF pequeno recodificado como JPG com 88% pode acabar maior do que a fonte. Isso é normal: você está trocando tamanho de arquivo por compatibilidade universal. Baixar a qualidade para perto de 75% costuma encolher o JPG de novo.',
      },
      {
        question: 'O conversor remove os metadados dos arquivos AVIF?',
        answer:
          'Sim. Ao desenhar os pixels no HTML5 Canvas, os dados EXIF, XMP e de perfil ICC embutidos são removidos, então os JPGs resultantes são leves e não têm dados ocultos de localização nem de câmera.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'Conversor de BMP para JPG',
    shortDescription: 'Converta bitmaps BMP enormes sem compressão em arquivos JPG compactos.',
    category: 'convert',
    seoTitle: 'Conversor de BMP para JPG grátis online – Menor',
    seoDescription:
      'Converta bitmaps BMP sem compressão para JPG compacto grátis online no seu navegador. Reduza o tamanho em 85% a 95% em privado, com qualidade, lote e ZIP.',
    h1: 'Conversor de BMP para JPG grátis online',
    subtitle:
      'Converta bitmaps BMP enormes do Windows sem compressão em arquivos JPG leves e fáceis de compartilhar com nosso conversor grátis de BMP para JPG, direto no seu navegador. Feito para quem limpa pastas de capturas .bmp, escaneamentos ou exportações do Paint, ele converte arquivos BMP de até 25 MB cada um com 88% de qualidade por padrão — e costuma reduzi-los em 85% a 95% — com processamento em lote e downloads em ZIP.',
    howToSteps: [
      {
        title: 'Solte bitmaps BMP de até 25 MB cada um',
        description:
          'Envie um ou vários arquivos .bmp de capturas de tela do Windows, escaneamentos ou pastas antigas para a área de envio.',
      },
      {
        title: 'Ajuste a qualidade de saída JPG (20%–100%)',
        description:
          'Mantenha os nítidos 88% padrão ou arraste para 20% para arquivos minúsculos e 100% para o máximo de detalhe, e depois clique em Converter tudo de novo.',
      },
      {
        title: 'Confira a economia de tamanho em cada cartão',
        description:
          'Cada resultado mostra o tamanho BMP original enorme, o tamanho JPG compacto e a porcentagem economizada.',
      },
      {
        title: 'Compare o JPG com o BMP original',
        description:
          'Clique em Comparar em qualquer cartão para verificar se o texto e o detalhe ficaram nítidos no visualizador dividido.',
      },
      {
        title: 'Baixe arquivos JPG ou Baixar tudo (ZIP)',
        description:
          'Salve arquivos .jpg individuais ou junte o lote em compressmypic_bmp_to_jpg.zip em um clique.',
      },
    ],
    features: [
      {
        title: 'Redução típica de tamanho de 90% ou mais',
        description:
          'Bitmaps BMP sem compressão guardam pixels brutos; a compressão JPG os reduz drasticamente para e-mail e web.',
      },
      {
        title: 'Preserva as dimensões em pixels',
        description:
          'Mantém a largura e a altura exatas do original enquanto moderniza o formato do arquivo.',
      },
      {
        title: 'Fila em lote e download em ZIP',
        description:
          'Limpe pastas de capturas .bmp ou escaneamentos antigos em uma só passada rápida.',
      },
      {
        title: 'Privacidade 100% no dispositivo',
        description:
          'Sem uploads: a conversão acontece localmente no seu computador.',
      },
    ],
    faqs: [
      {
        question: 'Por que os arquivos BMP são tão enormes comparados com JPG?',
        answer:
          'BMP é um formato sem compressão: ele guarda quase cada pixel como dados de cor brutos, com quase nenhuma compressão, então uma só captura de tela pode pesar dezenas de megabytes. O JPG usa compressão inteligente com perda que descarta dados que seus olhos mal notam, e é por isso que a mesma imagem encolhe drasticamente.',
      },
      {
        question: 'Quanto tamanho de arquivo posso economizar convertendo BMP para JPG?',
        answer:
          'Como os arquivos BMP costumam estar sem compressão, converter para JPG com 88% reduz o tamanho do arquivo rotineiramente de 85% a 95%: um bitmap de 10 MB muitas vezes vira um JPG de 500 KB a 1,5 MB. Escaneamentos fotográficos economizam mais, enquanto gráficos planos de uma só cor economizam um pouco menos.',
      },
      {
        question: 'A conversão de BMP para JPG muda as dimensões da imagem?',
        answer:
          'Não. Cada .jpg convertido mantém 100% da largura e da altura exatas em pixels do BMP original, então nada é cortado nem redimensionado. Use o Redimensionador de Imagens depois se você também precisar de dimensões menores.',
      },
      {
        question: 'Qual qualidade mantém as capturas de tela BMP legíveis?',
        answer:
          'Os 88% padrão mantêm nítidos o texto e os detalhes de interface das capturas e eliminam a maior parte do peso do bitmap. Para escaneamentos com letra fina ou fontes pequenas, suba a qualidade para 92% ou 95%; para compartilhar rápido, 80% costuma bastar.',
      },
      {
        question: 'Os arquivos BMP são enviados para um servidor?',
        answer:
          'Não. A conversão roda em HTML5 Canvas dentro da própria aba do seu navegador, então suas capturas de tela e escaneamentos nunca saem do seu computador. Ao fechar a aba, eles somem da memória do navegador.',
      },
      {
        question: 'Como converto em lote uma pasta cheia de escaneamentos BMP?',
        answer:
          'Solte vários arquivos .bmp de até 25 MB cada um na fila, escolha uma só qualidade para o lote inteiro e baixe tudo junto em compressmypic_bmp_to_jpg.zip. Cada arquivo é convertido separadamente.',
      },
      {
        question: 'Qual é o maior arquivo BMP aceito?',
        answer:
          'Cada arquivo BMP pode ter até 25 MB, o que cobre capturas de tela grandes e escaneamentos em alta resolução. Como a conversão roda no seu dispositivo, os arquivos grandes são processados na velocidade do seu processador local, sem tempo de espera de upload.',
      },
      {
        question: 'Posso converter arquivos BMP sem conexão com a internet depois que a página carrega?',
        answer:
          'Sim. Depois que a página carrega no seu navegador, a conversão roda por completo em JavaScript local e HTML5 Canvas, sem chamadas ao servidor. Você só vai precisar de internet de novo para carregar a própria página ou para baixar os arquivos prontos.',
      },
      {
        question: 'O JPG vai abrir em qualquer programa?',
        answer:
          'Sim. Arquivos .jpg RGB padrão de linha de base abrem em praticamente todos os visualizadores, editores, navegadores, clientes de e-mail e impressoras, muito mais amplamente do que o BMP, que muitos aplicativos e sites modernos já não aceitam.',
      },
      {
        question: 'O conversor mantém a transparência dos BMPs?',
        answer:
          'Os arquivos BMP raramente carregam um canal alfa utilizável, e o JPG não tem nenhum suporte a transparência, então os JPGs resultantes são sempre opacos. Se o seu gráfico precisar de transparência, converta para PNG ou WebP, que preservam o alfa.',
      },
      {
        question: 'O que acontece com a profundidade de cor de um BMP durante a conversão para JPG?',
        answer:
          'O navegador decodifica o BMP e o representa pela rota de cor padrão do Canvas, exportando um JPG sRGB normal. BMPs de alta profundidade de cor mantêm suas cores visíveis; só as variantes indexadas ou de 1 bit muito exóticas podem precisar ser salvas de novo em um editor primeiro.',
      },
      {
        question: 'Posso conferir a qualidade antes de baixar o JPG?',
        answer:
          'Sim. Clique em Comparar em qualquer cartão de resultado para abrir o visualizador dividido e arraste sobre a imagem para inspecionar texto, linhas e detalhe em relação ao BMP original. Cada cartão também mostra o tamanho exato economizado.',
      },
      {
        question: 'É possível ajustar o controle de qualidade depois da primeira conversão de BMP para JPG?',
        answer:
          'Sim. Mova o controle de qualidade para um novo valor a qualquer momento e clique em Converter tudo de novo para regenerar cada arquivo carregado sem enviar de novo. Seus arquivos BMP originais continuam na fila até você limpá-los.',
      },
      {
        question: 'Qual nome o JPG baixado recebe?',
        answer:
          'Os downloads individuais mantêm o nome original do arquivo, limpo, com a extensão .jpg, então scan.bmp vira scan.jpg. Lotes de dois ou mais arquivos são exportados juntos dentro de compressmypic_bmp_to_jpg.zip.',
      },
      {
        question: 'O conversor de BMP para JPG funciona no navegador do celular?',
        answer:
          'Sim. A área de envio, o controle de qualidade, o visualizador de comparação e o download em ZIP funcionam no Safari no iOS e no Chrome no Android, sem instalar nenhum aplicativo. Lotes grandes só demoram um pouco mais nos processadores de celular.',
      },
      {
        question: 'Quando BMP para JPG é melhor do que BMP para PNG?',
        answer:
          'Escolha JPG quando precisar do arquivo menor e fácil de compartilhar para e-mail, web ou mensagens. Escolha PNG quando precisar de qualidade de arquivo sem perda ou planejar editar a imagem depois, lembrando que os arquivos PNG continuarão bem maiores do que o JPG.',
      },
      {
        question: 'Dá para converter arquivos BMP antigos de 1 bit ou 8 bits?',
        answer:
          'A maioria dos arquivos BMP padrão de 1 bit, 8 bits, 24 bits e 32 bits é decodificada com limpeza nos navegadores modernos. Variantes muito incomuns, como BMPs com compressão RLE ou em formato OS/2, podem mostrar um erro por arquivo; salvá-los de novo como BMP de 24 bits no Paint ou em um editor resolve.',
      },
      {
        question: 'Por que os arquivos BMP escaneados comprimem tão bem como JPG?',
        answer:
          'Os escaneamentos contêm gradientes suaves, textura de papel e detalhe fotográfico que a compressão cosseno do JPEG lida com muita eficiência. As áreas planas de uma só cor comprimem ainda melhor, e é por isso que um escaneamento de 10 MB pode cair para menos de 1 MB com 88% de qualidade.',
      },
      {
        question: 'A conversão de BMP para JPG remove os metadados?',
        answer:
          'Sim. Ao desenhar os pixels no HTML5 Canvas, os blocos de metadados embutidos são removidos, então os JPGs resultantes são leves e não têm detalhes ocultos. Os arquivos BMP raramente carregam muitos metadados.',
      },
      {
        question: 'Posso converter arquivos BMP de uma câmera digital ou de um scanner diretamente?',
        answer:
          'Sim, se o arquivo estiver salvo como .bmp: a maioria dos scanners e das câmeras antigas oferece BMP como opção de exportação. As câmeras modernas costumam salvar JPG diretamente, então confira primeiro a extensão do arquivo e use o conversor correspondente se não for um bitmap.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
  {
    slug: '/remove-background',
    name: 'Removedor de Fundo com IA',
    shortDescription: 'Remova o fundo das suas imagens com IA no navegador e exporte PNGs transparentes.',
    category: 'ai-tools',
    seoTitle: 'Removedor de fundo grátis online – IA no navegador',
    seoDescription:
      'Remova o fundo das suas imagens grátis com IA no navegador. Baixe um PNG transparente ou com fundo branco, preto ou personalizado, em privado e sem cadastro.',
    h1: 'Removedor de Fundo com IA grátis online',
    subtitle:
      'Remova o fundo de retratos, fotos de produto, pets e logotipos com nosso removedor de fundo com IA grátis, que funciona por completo no seu navegador. Feito para vendedores, criadores e designers que precisam de recortes limpos com rapidez, ele carrega um modelo de IA compacto uma só vez (cerca de 35 MB, guardado em cache depois), processa uma foto por vez de até 20 MB e exporta um PNG transparente — ou coloca seu recorte sobre um fundo branco, preto ou personalizado.',
    howToSteps: [
      {
        title: 'Espere o modelo de IA carregar',
        description:
          'No primeiro uso, a página baixa o modelo compacto isnet_quint8 (cerca de 35 MB) uma só vez e o guarda no cache do seu navegador; as visitas seguintes começam na hora.',
      },
      {
        title: 'Solte uma foto de até 20 MB',
        description:
          'Envie uma só foto JPG, PNG, WebP, HEIC, BMP ou AVIF — um arquivo por vez — para a área de envio.',
      },
      {
        title: 'Deixe a IA recortar seu assunto',
        description:
          'O modelo isola seu assunto localmente no seu navegador e mostra o original ao lado do recorte transparente.',
      },
      {
        title: 'Compare o recorte com o original',
        description:
          'Clique em Comparação dividida para arrastar sobre a vista de antes e depois e conferir as bordas ao redor de cabelo, pelo e detalhes finos.',
      },
      {
        title: 'Escolha transparente, branco, preto ou personalizado',
        description:
          'Fique com o PNG transparente, ou mude para um fundo branco, preto ou de cor personalizada antes de baixar.',
      },
      {
        title: 'Baixe seu recorte',
        description:
          'Salve o PNG transparente (com o nome da sua foto mais _no_bg) ou a versão com fundo sólido, e depois clique em Nova imagem para a próxima foto.',
      },
    ],
    features: [
      {
        title: 'Segmentação de IA 100% no dispositivo',
        description:
          'Impulsionado pelo modelo ONNX leve isnet_quint8 que roda localmente no seu navegador: suas fotos nunca são enviadas para nenhum servidor.',
      },
      {
        title: 'Exportação instantânea de PNG transparente',
        description:
          'Baixe recortes PNG nítidos com transparência alfa, prontos para anúncios de e-commerce, miniaturas, apresentações e trabalho de design.',
      },
      {
        title: 'Trocador de fundo sólido embutido',
        description:
          'Veja uma prévia do seu recorte e exporte-o sobre fundo branco puro, preto intenso ou qualquer cor hexadecimal personalizada sem abrir outro aplicativo.',
      },
      {
        title: 'Grátis, sem cadastro e sem marca d’água',
        description:
          'Recortes em resolução completa sem limites diários, sem contas e sem marcas d’água.',
      },
    ],
    faqs: [
      {
        question: 'A remoção de fundo envia minha foto para um servidor?',
        answer:
          'Não. O modelo de IA é baixado para o seu navegador uma só vez e executa a inferência por completo no seu dispositivo, então sua foto nunca é enviada, nem guardada, nem vista por mais ninguém. Ao fechar a aba, tudo some da memória do navegador.',
      },
      {
        question: 'Por que o primeiro recorte é mais lento do que os seguintes?',
        answer:
          'Na primeira visita, seu navegador baixa o modelo compacto isnet_quint8 (cerca de 35 MB) e inicializa o mecanismo de IA WebAssembly, o que leva alguns segundos a mais. Depois o modelo fica em cache, então as fotos seguintes são processadas bem mais rápido.',
      },
      {
        question: 'Qual é o tamanho do modelo de IA que meu navegador baixa?',
        answer:
          'Cerca de 35 MB, baixado uma só vez no primeiro uso e depois guardado no cache do seu navegador. O pequeno modelo quantizado isnet_quint8 é o que torna a remoção no navegador possível sem servidor: modelos maiores na nuvem precisariam de um upload e de uma API paga.',
      },
      {
        question: 'Posso usar o removedor de fundo sem internet depois do primeiro carregamento?',
        answer:
          'Na maior parte, sim: depois que o modelo fica em cache, a remoção de fato roda totalmente offline no seu navegador. Você continua precisando de internet para carregar a própria página na primeira vez, e o modelo em cache pode ser apagado se o navegador limpar os dados do site.',
      },
      {
        question: 'Que tipos de foto produzem as bordas mais limpas ao remover o fundo?',
        answer:
          'Fotos com um assunto claro e bom contraste com o fundo funcionam melhor: retratos, fotos de produto, pets, carros e logotipos com contornos nítidos. Uma iluminação plana e um fundo simples dão ao modelo o trabalho mais fácil.',
      },
      {
        question: 'Posso remover o fundo de uma foto com uma paisagem bagunçada ou com muito movimento?',
        answer:
          'Sim, mas espere bordas mais suaves: quando o assunto se mistura com um fundo cheio, o pequeno modelo no dispositivo precisa adivinhar onde o assunto termina. Um fundo mais limpo, melhor iluminação ou um recorte mais próximo antes de enviar dão um recorte visivelmente melhor.',
      },
      {
        question: 'O que acontece com o cabelo fino, o pelo ou as bordas transparentes ao tirar o fundo?',
        answer:
          'Os fios finos e o pelo vaporoso são o caso mais difícil para um modelo compacto quantizado, então as bordas ali podem parecer levemente suaves ou perder alguns cabelos. Confira a vista Comparação dividida: para a maioria dos retratos e fotos de produto o resultado é limpo, mas a máscara de cabelo perfeita em pixels é uma limitação conhecida.',
      },
      {
        question: 'Como coloco meu recorte sobre um fundo branco puro para a Amazon ou o eBay?',
        answer:
          'Depois que o recorte estiver pronto, escolha Branco em Opção de preenchimento de fundo e clique em Baixar com fundo branco. Os marketplaces preferem JPGs e PNGs nítidos com fundo branco opaco para as miniaturas principais de produto, e isto exporta exatamente isso.',
      },
      {
        question: 'Quais formatos de arquivo posso enviar para o removedor de fundo?',
        answer:
          'JPG, PNG, WebP, HEIC, BMP e AVIF: a ferramenta aceita o mesmo conjunto estendido de imagens do resto do site. As fotos HEIC do iPhone são convertidas para uma imagem decodificável automaticamente antes de o modelo rodar.',
      },
      {
        question: 'Qual é o tamanho máximo de foto que o removedor de fundo aceita?',
        answer:
          'Cada foto pode ter até 20 MB, e a ferramenta processa uma foto por vez. Isso cobre fotos em alta resolução de celular e câmera; arquivos muito grandes só demoram um pouco mais porque o modelo roda no seu dispositivo.',
      },
      {
        question: 'Posso remover o fundo de várias fotos de uma vez?',
        answer:
          'Não, esta ferramenta lida com uma foto por vez para que o modelo de IA possa concentrar toda a memória do dispositivo em um só recorte limpo. Clique em Nova imagem depois de cada download para processar a próxima foto: não há limite diário.',
      },
      {
        question: 'O recorte mantém a resolução da foto original?',
        answer:
          'Sim. O PNG transparente exportado mantém 100% da largura e da altura em pixels da foto original, então uma foto de produto de 4000 px continua com 4000 px. Use o Redimensionador de Imagens depois se precisar de uma versão menor para a web.',
      },
      {
        question: 'Por que meu PNG transparente ficou maior do que a foto original?',
        answer:
          'O PNG guarda cada pixel do recorte sem perda, enquanto seu JPG original estava muito comprimido, então um recorte grande e detalhado pode pesar facilmente mais do que uma fonte JPG pequena. Isso é normal: você está trocando tamanho de arquivo por transparência e bordas perfeitas em pixels.',
      },
      {
        question: 'Posso executar a remoção de novo na mesma foto?',
        answer:
          'Sim. Clique em Executar a remoção de novo para processar a mesma foto outra vez: útil se a primeira passada pegou uma sombra como parte do assunto ou se você quiser comparar resultados. O modelo é determinístico, então o resultado costuma ser idêntico, a menos que a entrada tenha mudado.',
      },
      {
        question: 'O que devo fazer se faltar parte do assunto no recorte?',
        answer:
          'Primeiro confira a vista Comparação dividida para ver com exatidão o que foi cortado. Assuntos que se misturam com o fundo — roupa da mesma cor, vidro ou camuflagem — confundem o modelo; tente uma foto com maior contraste entre assunto e fundo ou recorte mais perto do assunto antes de enviar.',
      },
      {
        question: 'Existe alguma marca d’água no PNG baixado do removedor de fundo?',
        answer:
          'Não. Os downloads são recortes em resolução completa sem marca d’água, sem logotipo e sem marca adicionada. Também não há cadastro, nem conta, nem limite diário de quantas fotos você pode processar.',
      },
      {
        question: 'A remoção de fundo funciona no navegador do celular?',
        answer:
          'Sim. O modelo é baixado e roda no Safari no iOS e no Chrome no Android, com os mesmos controles de envio, comparação e download. No celular, as fotos grandes demoram mais porque a IA roda no processador do telefone: o Wi-Fi ajuda no primeiro download do modelo.',
      },
      {
        question: 'Em que isto é diferente de serviços pagos como o remove.bg?',
        answer:
          'Esta ferramenta é grátis, privada e roda por completo no seu navegador sem upload e sem conta, enquanto as ferramentas pagas na nuvem processam sua foto nos servidores delas. O compromisso é a qualidade em bordas difíceis: o pequeno modelo no dispositivo é excelente para assuntos claros, mas não consegue igualar os modelos grandes na nuvem em cabelo fino ou cenas cheias.',
      },
      {
        question: 'Posso usar o recorte no Canva, no Photoshop ou no PowerPoint?',
        answer:
          'Sim. O PNG transparente exportado abre diretamente no Canva, no Photoshop, no Figma, no PowerPoint e no Google Slides, onde você pode colocá-lo sobre qualquer fundo, slide ou design. O download com fundo sólido funciona da mesma forma para aplicativos que precisam de uma imagem opaca.',
      },
      {
        question: 'O que acontece com minha foto depois de fechar a aba do removedor de fundo?',
        answer:
          'Nada é guardado em lugar nenhum: o processamento acontece na memória do navegador, a foto nunca é enviada e, ao fechar a aba, a imagem e o recorte são apagados. Só o modelo de IA em cache permanece no navegador para um uso futuro mais rápido.',
      },
    ],
    relatedSlugs: ['/add-background-to-image', '/image-resizer', '/png-to-webp'],
  },
];

export const TOOL_BY_SLUG_PT: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_PT.map((t) => [t.slug, t])
);
