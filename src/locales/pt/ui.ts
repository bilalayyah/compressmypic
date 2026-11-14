// Portuguese (pt-BR) UI strings — assembled for src/locales/pt/ui.ts
// = i18n-pt.ts (export PT) + tool-ui-pt.ts (export TOOL_UI_PT).
// Neither source has imports. HOME_ENTRY_PT from i18n-pt.ts is NOT
// included here: it is already merged as TOOLS_REGISTRY_PT[0] in
// src/locales/pt/tools.ts, mirroring the ES ui.ts (ES + TOOL_UI_ES only).

// Portuguese (Brazilian pt-BR) UI strings for CompressMyPic — natural Brazilian
// Portuguese, você form. Mirrors ~/workspace/compressmypic/spanish/i18n-es.ts
// exactly: same 15 sections, same keys within each section, same export shape.
// Source: i18n-es.ts + English originals in /tmp/cmpic-ptfr (Hero, FaqSection,
// EducationalContent, ToolsDirectorySection, ShareSection, Header, Footer,
// ToolPageLayout, UploadZone, ComparisonModal, home entry, index.html,
// App.tsx guides section, tools.ts categories). PT slugs from
// ~/workspace/compressmypic/pt-fr/slug-map-pt.ts.
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. "online" stays "online". Placeholders: {name} = tool/file name,
// {max} = max size in MB, {year} = current year, {count} = number of extra errors,
// {current} = current theme, {progress} = ZIP progress %, {bytes} = byte size,
// {formats} = supported format list.
// NOTE on footer links (coordinator merge): like ES, this dictionary keeps
// ENGLISH slugs in the footer (legal links /privacy, /terms, /about, /contact;
// directory links use English tool slugs); the app maps them to the current
// language via toLocalizedPath at render. (Batch files carried PT slugs here;
// converted to EN at merge to match the ES pattern exactly.)
// NOTE on guidesSection cards (coordinator merge): like ES, cards carry NO
// `link` key — the guide hrefs live in App.tsx. (Batch files carried a `link`
// with the PT guide slug; dropped at merge.)
// NOTE on header: the 11 language-switcher native names (English, Español,
// Português, Deutsch, Français, 日本語, Bahasa Indonesia, Italiano, Русский,
// 한국어, 简体中文) live in the app's SUPPORTED_LANGUAGES config, not in this
// dictionary — same as ES.

export const PT = {
  header: {
    home: 'Início',
    tools: 'Ferramentas',
    howItWorks: 'Como funciona',
    faq: 'Perguntas frequentes',
    about: 'Sobre nós',
    contact: 'Contato',
    compressImages: 'Comprimir imagens',
    themeLight: 'Modo claro',
    themeDark: 'Modo escuro',
    themeSystem: 'Padrão do sistema',
    languageLabel: 'Idioma',
    homeAriaLabel: 'CompressMyPic – Compressor de imagens online grátis',
    themeLightShort: 'Claro', // 'Light'
    themeDarkShort: 'Escuro', // 'Dark'
    themeSystemShort: 'Sistema', // 'System'
    themeHeading: 'Tema', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'Mostrar ou ocultar o menu de navegação', // 'Toggle navigation menu'
    themeAriaLabel: 'Alterar o tema de cores (atual: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'Tema: {current}', // 'Theme: {current}'
    aboutUs: 'Sobre nós', // 'About Us' (mobile drawer)
    contactUs: 'Contato', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'Compressão de imagens rápida, segura e privada, direto no seu navegador. Otimize imagens JPG, PNG e WebP sem enviar seus dados para nenhum servidor externo.',
    privacyNote: '100% de privacidade no seu dispositivo',
    toolsHeading: 'Ferramentas de imagem',
    legalHeading: 'Confiança e legal',
    guidesHeading: 'Guias',
    moreHeading: 'Mais utilidades',
    directoryHeading: 'Ferramentas avançadas de compressão, edição e desenvolvimento',
    processedLocally: 'Processado localmente com HTML5 Canvas',
    bottomRights:
      '© {year} CompressMyPic. Todos os direitos reservados. Utilitário gratuito de compressão de imagens no navegador.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: 'Contato: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'Comprimir imagens' },
      { slug: '/image-resizer', label: 'Redimensionar imagem' },
      { slug: '/image-converter', label: 'Conversor de imagens' },
      { slug: '/rotate-flip-image', label: 'Girar e inverter imagem' },
      { slug: '/image-to-pdf', label: 'Imagem para PDF' },
      { slug: '/remove-image-metadata', label: 'Remover metadados' },
      { slug: '/remove-background', label: 'Remover fundo' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'Política de privacidade' },
      { slug: '/terms', label: 'Termos de serviço' },
      { slug: '/about', label: 'Sobre nós' },
      { slug: '/contact', label: 'Falar com o suporte' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'Como comprimir imagens para WhatsApp sem perder qualidade',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP: qual formato você deve usar?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Como reduzir o tamanho de uma imagem para 100KB para web e e-mail',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'Visualizador de metadados e EXIF' },
      { slug: '/favicon-generator', label: 'Gerador de favicon' },
      { slug: '/image-color-picker', label: 'Seletor de cores da imagem' },
      { slug: '/image-dimensions-checker', label: 'Verificador de dimensões' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: 'Comprimir para 50KB' },
      { slug: '/compress-image-to-100kb', label: 'Comprimir para 100KB' },
      { slug: '/compress-image-to-200kb', label: 'Comprimir para 200KB' },
      { slug: '/compress-image-to-500kb', label: 'Comprimir para 500KB' },
      { slug: '/target-file-size-compressor', label: 'Compressor por tamanho de arquivo' },
      { slug: '/bulk-image-compressor', label: 'Compressor de imagens em lote' },
      { slug: '/bulk-image-resizer', label: 'Redimensionar imagens em lote' },
      { slug: '/bulk-image-converter', label: 'Conversor de imagens em lote' },
      { slug: '/web-image-optimizer', label: 'Otimizador de imagens para web' },
      { slug: '/gif-compressor', label: 'Compressor de GIF' },
      { slug: '/image-cropper', label: 'Cortador de imagens' },
      { slug: '/image-watermark', label: 'Marca d’água em imagem' },
      { slug: '/blur-pixelate-image', label: 'Desfocar e pixelar' },
      { slug: '/add-text-to-image', label: 'Adicionar texto à imagem' },
      { slug: '/image-border-generator', label: 'Gerador de bordas' },
      { slug: '/round-image-corners', label: 'Arredondar cantos' },
      { slug: '/image-brightness-editor', label: 'Editor de brilho' },
      { slug: '/image-contrast-editor', label: 'Editor de contraste' },
      { slug: '/image-saturation-editor', label: 'Editor de saturação' },
      { slug: '/image-filters', label: 'Filtros de imagem' },
      { slug: '/add-background-to-image', label: 'Adicionar fundo' },
      { slug: '/image-splitter', label: 'Divisor de imagens' },
      { slug: '/image-dpi-changer', label: 'Alterar DPI' },
      { slug: '/image-to-base64', label: 'Imagem para Base64' },
      { slug: '/base64-to-image', label: 'Base64 para imagem' },
      { slug: '/image-color-palette-extractor', label: 'Extrator de paleta de cores' },
      { slug: '/gif-maker', label: 'Criador de GIF' },
      { slug: '/image-collage-maker', label: 'Criador de colagens' },
      { slug: '/heic-to-jpg', label: 'HEIC para JPG' },
      { slug: '/jpg-to-png', label: 'JPG para PNG' },
      { slug: '/png-to-jpg', label: 'PNG para JPG' },
      { slug: '/jpg-to-webp', label: 'JPG para WebP' },
      { slug: '/webp-to-jpg', label: 'WebP para JPG' },
      { slug: '/png-to-webp', label: 'PNG para WebP' },
      { slug: '/webp-to-png', label: 'WebP para PNG' },
      { slug: '/svg-to-png', label: 'SVG para PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF para JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP para JPG' },
    ],
  },
  hero: {
    pill: 'Compressão 100% privada no seu dispositivo · Sem envio para servidores',
    h1: 'Compressor de imagens grátis – Comprima imagens online e reduza o tamanho sem perder qualidade',
    sub: 'Reduza o tamanho dos seus arquivos de imagem sem abrir mão da qualidade visível. Comprima imagens online grátis com nosso compressor de imagens e fotos: um otimizador de imagens online para JPG, PNG, WebP e HEIC. Rápido, seguro, sem cadastro, sem marca d’água e com compressão fácil direto no seu navegador.',
    badge1: 'Suas imagens nunca saem do seu dispositivo',
    badge2: 'Processamento instantâneo no navegador',
    badge3: 'Compatível com JPG, PNG, WebP e HEIC',
  },
  toolsDirectory: {
    heading: 'Mais ferramentas grátis para processar imagens',
    subheading:
      'Cada ferramenta funciona 100% no seu navegador: sem envio para servidores, sem cadastro e sem marca d’água.',
    eyebrow: 'Todas as ferramentas no seu navegador', // 'All Browser-Native Tools'
    allTools: 'Todas as ferramentas', // 'All Tools'
    openTool: 'Abrir ferramenta', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'O que é compressão de imagens?',
        body: 'A compressão de imagens é o processo de reduzir o tamanho em bytes de um arquivo gráfico sem prejudicar a qualidade visual da imagem além de um limite aceitável. Quando uma câmera ou um celular salva uma foto, ele armazena uma quantidade enorme de dados, e grande parte dessa informação não é percebida a olho nu quando é removida ou simplificada. O CompressMyPic é um otimizador de imagens online grátis e um redutor de tamanho de imagem que funciona como compressor de fotos e redutor de tamanho de foto para arquivos JPG, PNG e WebP.\n\nAo analisar esses padrões, os algoritmos de compressão de imagens reorganizam ou descartam de forma seletiva as informações redundantes. O arquivo resultante precisa de muito menos espaço de armazenamento e é transferido muito mais rápido pela internet. Este guia mostra como comprimir uma imagem sem perder qualidade, com o controle deslizante de qualidade, as predefinições e a escolha de formato do CompressMyPic.',
      },
      {
        heading: 'Por que você deve comprimir suas imagens?',
        body: 'As imagens sem otimização são um dos maiores obstáculos para o desempenho de um site, o espaço de armazenamento e o consumo de dados móveis. Comprimir suas imagens traz benefícios imediatos e concretos:',
        bullets: [
          'Carregamento mais rápido do site: as páginas com imagens comprimidas carregam até 70% mais rápido, o que melhora seus Core Web Vitals (Largest Contentful Paint) e seu posicionamento nos buscadores. Quando você reduz o tamanho das imagens do seu site, os visitantes ficam mais tempo e abandonam menos a página.',
          'Menos espaço de armazenamento: reduza os custos de hospedagem na nuvem, de disco do servidor e de backup guardando arquivos de imagem otimizados em vez dos originais pesados.',
          'Compartilhar imagens fica mais fácil: nunca mais você vai esbarrar nos limites rígidos de anexos de e-mail nem nas cotas de envio de mensagens. As fotos comprimidas são anexadas e enviadas na hora, mesmo com conexões móveis lentas ou planos de dados limitados.',
          'Menos consumo de banda: economize dinheiro dos seus usuários em planos de dados móveis e evite que os visitantes abandonem seu site. Os arquivos menores são baixados mais rápido, principalmente em conexões móveis lentas.',
        ],
      },
      {
        heading: 'Como funciona',
        body: 'Comprimir suas fotos leva só alguns segundos: sem conta, sem programas e sem envios. Veja como comprimir uma imagem sem perder qualidade em três passos simples.',
        bullets: [
          'Passo 1 — Envie suas imagens: arraste e solte suas imagens JPG, PNG, WebP ou HEIC na área de envio, clique em "Explorar arquivos" para escolhê-las ou cole uma imagem com Ctrl+V. Você pode enviar várias imagens de uma vez, até 20 MB por imagem.',
          'Passo 2 — Ajuste a qualidade e escolha o formato: escolha uma predefinição Baixa, Equilibrada ou Alta, ou mova o controle deslizante de qualidade de 10% a 100%, e decida se mantém o formato original ou converte para JPG, PNG ou WebP. Veja o tamanho antes e depois ao vivo para cada imagem e use o controle deslizante de comparação interativo para conferir o resultado visual.',
          'Passo 3 — Baixe suas imagens comprimidas: baixe cada imagem comprimida separadamente ou clique em "Baixar tudo (ZIP)" para baixar o lote inteiro em um só arquivo. Suas imagens são comprimidas direto no seu navegador, então não há nada para esperar nem nada para enviar.',
        ],
      },
      {
        heading: 'Por que usar este compressor de imagens grátis?',
        body: 'O CompressMyPic é um compressor de imagens grátis, sem cadastro e sem marca d’água, feito para fotos do dia a dia, imagens de sites e publicações em redes sociais.',
        bullets: [
          'Comprima JPG, PNG, WebP e HEIC: um só compressor de imagens para os formatos que você realmente usa. Comprima fotos JPG e JPEG, comprima gráficos PNG mantendo a transparência e comprima imagens WebP para obter os arquivos menores.',
          'Reduza o tamanho da imagem sem perder qualidade: a compressão inteligente remove os dados redundantes e os metadados, e a imagem continua praticamente igual à original. A predefinição Equilibrada é o melhor ponto de partida, e a comparação de antes e depois permite que você confira a qualidade por conta própria.',
          'Compressor de imagens em lote: comprima várias imagens de uma vez: este compressor de imagens em lote permite comprimir várias imagens de uma vez com as mesmas configurações e baixá-las todas juntas com o botão "Baixar tudo (ZIP)", em vez de salvar os arquivos um por um.',
          'Comprima imagens para WhatsApp, Instagram e Facebook: reduza o tamanho das fotos para que sejam enviadas rápido pelo WhatsApp e publicadas sem problemas no Instagram e no Facebook. Os arquivos menores consomem menos dados móveis e têm muito menos chance de serem recusados por serem grandes demais.',
          'Reduza o tamanho da imagem para 20KB, 50KB, 100KB ou 200KB: baixe o controle deslizante de qualidade passo a passo e observe o tamanho antes e depois ao vivo até chegar ao seu objetivo: 200KB, 100KB, 50KB ou até 20KB. Mudar o formato de saída para WebP normalmente ajuda a chegar lá com menos perda visível de qualidade.',
        ],
      },
      {
        heading: 'Comprimir JPG, PNG e WebP: qual formato você deve escolher?',
        body: 'JPG, PNG e WebP cumprem funções diferentes. Conhecer os pontos fortes de cada um ajuda você a escolher a melhor opção para o seu projeto.\n\nCompare a diferença visual: não sabe quanta compressão é aceitável? Use a opção de comparação de antes e depois da ferramenta. Nosso controle deslizante interativo permite ver a imagem original e a versão comprimida lado a lado para detectar artefatos visuais ou perda de qualidade antes de baixar.',
        bullets: [
          'Compressor de JPG — Comprima JPG online grátis: ideal para fotografias do seu site, blog ou portfólio. Comprima JPG online grátis e comprima JPEG para 100KB baixando o controle deslizante de qualidade enquanto observa o tamanho ao vivo. A compressão JPEG tem perdas: ela remove de forma permanente alguns dados visuais que o olho humano quase não percebe. Por isso é possível reduzir uma foto de megabytes para kilobytes sem perda visível de qualidade.',
          'Compressor de PNG — Comprima PNG online grátis: ideal para gráficos, capturas de tela, logotipos e imagens que precisam de transparência, como logotipos, ícones ou ilustrações. Comprima PNG online grátis aqui mantendo toda a transparência, para gráficos nítidos e perfeitos em cada pixel. Converter um PNG para WebP muitas vezes o deixa bem menor.',
          'Comprima imagens WebP — O formato moderno: ideal para otimizar a web. O WebP oferece uma excelente compressão com e sem perdas, que costuma ser de 25% a 35% menor que JPEG ou PNG. Comprima arquivos de imagem WebP para obter o menor tamanho com qualidade parecida, e use WebP quando quiser otimizar imagens para páginas web sem perda visível de qualidade. É a melhor opção para a maioria dos sites.',
        ],
      },
      {
        heading: 'Para que você pode usar este compressor de imagens?',
        body: 'Um só compressor de imagens grátis cobre os motivos mais comuns pelos quais as pessoas precisam reduzir o tamanho de uma imagem.',
        bullets: [
          'Otimize imagens para a web: otimize as imagens das suas páginas web para que carreguem mais rápido, melhorem os Core Web Vitals e tenham melhor posicionamento. Imagens menores significam páginas mais rápidas, visitantes mais satisfeitos e menos banda de hospedagem.',
          'Comprima imagens para anexar por e-mail: comprima imagens para anexar por e-mail reduzindo-as com o controle deslizante de qualidade até que cada arquivo caiba no limite de anexos do seu provedor de e-mail, e anexe os arquivos baixados à sua mensagem em vez dos originais grandes.',
          'Comprima uma foto para o seu site: comprima uma foto para o seu site, blog, portfólio ou loja online antes de publicá-la. As fotos de produtos, os banners e as imagens do blog continuam nítidas e ocupam muito menos espaço no seu servidor.',
          'Reduza o tamanho de arquivo de uma foto: reduza o tamanho de arquivo de uma foto do seu celular ou da sua câmera antes de compartilhar, guardar ou imprimir. As fotos grandes são enviadas rápido, guardadas com facilidade e gerenciadas sem complicação.',
        ],
      },
      {
        heading: 'Por que o tamanho da imagem importa',
        body: 'Os arquivos de imagem grandes e de alta resolução são resultado do rápido avanço da tecnologia das câmeras: as imagens hoje são de 2 a 3 vezes maiores que há apenas alguns anos. Quando você reduz o tamanho das imagens das suas páginas web e otimiza as imagens para a web, seu site carrega mais rápido, consome menos banda e tem melhor posicionamento nos resultados de busca.\n\nQuando procurar um bom compressor, observe se ele: 1) não sacrifica a qualidade, 2) mantém seus dados privados (processamento no seu dispositivo) e 3) processa as imagens rápido sem enviar seus arquivos para um servidor distante. É exatamente para isso que o CompressMyPic foi feito.',
      },
      {
        heading: 'Dicas de otimização: reduza o tamanho da imagem sem perder qualidade',
        body: '',
        bullets: [
          'Comece com a predefinição Equilibrada: a predefinição Equilibrada (70% de qualidade) oferece o melhor equilíbrio para a maioria das imagens: arquivos bem menores e uma grande semelhança visual com o original.',
          'Escolha o formato certo: para fotografias, JPG ou WebP sempre vão gerar arquivos menores que PNG. Para logotipos e gráficos de linhas com transparência, use PNG.',
          'Busque um tamanho-alvo: para uso em sites, procure imagens com menos de 200 KB. Para e-mails e mensagens, fique abaixo de 1 MB para que sejam entregues rápido. Use o controle deslizante de qualidade e o tamanho ao vivo para chegar ao seu tamanho-alvo.',
          'Encontre o ponto ideal: coloque o controle deslizante de qualidade em 85–90% para as imagens principais, onde a qualidade importa; 70–80% costuma ser o equilíbrio ideal para o uso geral em sites; 50–60% é melhor para miniaturas ou quando o tamanho é o mais importante.',
          'Teste o WebP para os arquivos menores: mudar o formato de saída para WebP costuma reduzir um JPG ou PNG de 25% a 35% a mais com qualidade parecida: uma forma simples de reduzir o tamanho da imagem sem perder qualidade.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'Perguntas frequentes',
    subheading:
      'Tudo o que você precisa saber sobre como comprimir imagens online grátis com o CompressMyPic.',
    faqs: [
      {
        id: 'faq-1',
        question: 'O que é o CompressMyPic?',
        answer:
          'O CompressMyPic é um compressor de imagens online e gratuito que reduz o tamanho de arquivos JPG, PNG, WebP e HEIC direto no seu navegador. Você não precisa instalar nada nem criar uma conta: é só enviar a imagem, ajustar a qualidade e baixar o resultado.',
      },
      {
        id: 'faq-2',
        question: 'Como faço para comprimir uma imagem online grátis?',
        answer:
          'Arraste suas imagens para a área de envio ou clique em "Explorar arquivos" para escolhê-las no seu computador ou celular. Depois escolha uma predefinição — Baixa, Equilibrada ou Alta — ou ajuste o controle de qualidade, e baixe as imagens comprimidas. Tudo grátis, sem cadastro.',
      },
      {
        id: 'faq-3',
        question: 'Minhas imagens são enviadas para algum servidor?',
        answer:
          'Não. Toda a compressão acontece dentro do seu navegador, no seu próprio dispositivo. Suas imagens nunca são enviadas, armazenadas ou vistas por ninguém. Quando você atualiza ou fecha a aba, os arquivos somem da memória do navegador.',
      },
      {
        id: 'faq-4',
        question: 'Preciso criar uma conta ou pagar alguma coisa?',
        answer:
          'Não. O CompressMyPic é 100% gratuito e não pede cadastro, e-mail ou senha. Não há limite de quantas imagens você pode comprimir nem planos pagos escondidos.',
      },
      {
        id: 'faq-5',
        question: 'As imagens comprimidas ficam com marca d’água?',
        answer:
          'Não. As imagens que você baixa saem limpas, sem logotipo, texto ou qualquer marca adicionada. O que você baixa é só a sua imagem, menor e pronta para usar.',
      },
      {
        id: 'faq-6',
        question: 'Quais formatos de imagem posso comprimir?',
        answer:
          'Você pode comprimir JPG (JPEG), PNG, WebP e HEIC — inclusive as fotos do iPhone, que são salvas em HEIC por padrão. Também é possível manter o formato original ou converter entre JPG, PNG e WebP na hora de baixar.',
      },
      {
        id: 'faq-7',
        question: 'Qual é o tamanho máximo de arquivo permitido?',
        answer:
          'O limite é de 20 MB por imagem, o que cobre fotos de câmera em alta resolução e capturas de tela grandes. Como tudo é processado no seu dispositivo, mesmo arquivos grandes são comprimidos rapidamente.',
      },
      {
        id: 'faq-8',
        question: 'Posso comprimir várias imagens ao mesmo tempo?',
        answer:
          'Sim. Você pode enviar várias imagens de uma vez, aplicar as mesmas configurações a todas elas e baixar tudo junto com o botão "Baixar tudo (ZIP)" — ou baixar cada imagem separadamente, se preferir.',
      },
      {
        id: 'faq-9',
        question: 'Como deixo uma imagem com 100KB?',
        answer:
          'Envie a imagem e vá baixando o controle deslizante de qualidade aos poucos, acompanhando o tamanho antes e depois que aparece para cada imagem. Quando o tamanho comprimido chegar perto de 100KB, é só baixar. Trocar o formato de saída para WebP ajuda a chegar lá com menos perda de qualidade.',
      },
      {
        id: 'faq-10',
        question: 'Comprimir a imagem muda as dimensões dela?',
        answer:
          'Não. A compressão só reduz o tamanho do arquivo; a largura, a altura e a proporção da imagem continuam exatamente iguais às da original. Se quiser mudar as dimensões, use a ferramenta Redimensionar imagem.',
      },
      {
        id: 'faq-11',
        question: 'Como funciona o controle deslizante de qualidade?',
        answer:
          'Ele define a qualidade da compressão de 10% a 100%. Valores altos mantêm mais detalhes e geram arquivos maiores; valores baixos deixam os arquivos bem menores. As predefinições Baixa, Equilibrada e Alta ajustam o controle para você, e o tamanho antes e depois ao vivo mostra o resultado de cada mudança.',
      },
      {
        id: 'faq-12',
        question: 'Qual formato de saída devo escolher: JPG, PNG ou WebP?',
        answer:
          'Para fotos, JPG ou WebP geram os menores arquivos; o WebP costuma ser de 25% a 35% menor que o JPEG com qualidade parecida, então é a melhor opção para sites. Use PNG quando precisar de transparência, como em logotipos e ícones.',
      },
      {
        id: 'faq-13',
        question: 'A transparência do PNG é mantida?',
        answer:
          'Sim. Ao comprimir um PNG e manter a saída em PNG ou WebP, a transparência é preservada. Só lembre que o formato JPEG não aceita transparência: se converter para JPG, as áreas transparentes viram um fundo sólido, branco por padrão.',
      },
      {
        id: 'faq-14',
        question: 'Como comprimo uma imagem para enviar no WhatsApp?',
        answer:
          'Envie a foto, escolha uma predefinição de qualidade menor ou a saída em WebP e baixe o arquivo menor antes de compartilhar no WhatsApp. Fotos menores são enviadas mais rápido, gastam menos dados móveis e dificilmente são recusadas por serem grandes demais.',
      },
      {
        id: 'faq-15',
        question: 'Dá para comprimir imagens para Instagram e Facebook?',
        answer:
          'Sim. Comprima a foto com a predefinição Equilibrada e baixe o arquivo JPG ou WebP menor. Ele é publicado mais rápido e mantém qualidade suficiente para posts, stories e foto de perfil.',
      },
      {
        id: 'faq-16',
        question: 'Posso usar no celular?',
        answer:
          'Sim. O CompressMyPic funciona nos navegadores de celular iOS e Android. Você pode escolher uma foto da galeria ou tirar uma foto nova e enviá-la para comprimir, tudo pelo celular.',
      },
      {
        id: 'faq-17',
        question: 'Como vejo a diferença de qualidade antes de baixar?',
        answer:
          'Use a comparação de antes e depois: o controle deslizante interativo mostra a imagem original e a versão comprimida lado a lado, para você conferir se há perda visível de qualidade antes de baixar.',
      },
      {
        id: 'faq-18',
        question: 'Por que o arquivo comprimido às vezes fica maior que o original?',
        answer:
          'Isso pode acontecer com PNGs, porque a recodificação PNG sem perdas ignora o controle de qualidade, e com imagens que já estavam muito comprimidas. Nesses casos, a ferramenta mostra o aviso e você pode manter o arquivo original ou trocar a saída para WebP ou JPG, que costumam ser bem menores.',
      },
      {
        id: 'faq-19',
        question: 'As imagens comprimidas servem para meu site ou loja online?',
        answer:
          'Sim. Imagens menores fazem suas páginas carregarem mais rápido, melhoram os Core Web Vitals e o posicionamento no Google, além de economizarem banda de hospedagem. Para uso em sites, tente manter cada imagem abaixo de 200 KB.',
      },
      {
        id: 'faq-20',
        question: 'O que mais posso fazer além de comprimir imagens?',
        answer:
          'O site tem 48 ferramentas gratuitas no total: redimensionar, converter formatos, cortar, girar, adicionar marca d’água, remover fundo e metadados, criar GIFs e colagens, gerar favicon e muito mais. Todas funcionam no navegador, sem cadastro e sem envio para servidores.',
      },
    ],
  },
  guidesSection: {
    heading: 'Guias',
    subheading:
      'Guias passo a passo para conseguir arquivos menores sem perder qualidade visível.',
    cards: [
      {
        title: 'Como comprimir imagens para WhatsApp sem perder qualidade',
        desc: 'Reduza o tamanho das fotos antes de enviar para que continuem nítidas e sejam enviadas rápido.',
        cta: 'Ler o guia →',
      },
      {
        title: 'JPG vs PNG vs WebP: qual formato você deve usar?',
        desc: 'Tamanho de arquivo, qualidade e transparência comparados, para você escolher o formato certo.',
        cta: 'Ler o guia →',
      },
      {
        title: 'Como reduzir o tamanho de uma imagem para 100KB para web e e-mail',
        desc: 'Passo a passo: chegue a 100KB sem perder qualidade visível.',
        cta: 'Ler o guia →',
      },
    ],
  },
  shareSection: {
    heading: 'Compartilhe o CompressMyPic com seus amigos',
    text: 'Esta ferramenta foi útil para você? Ajude um amigo a comprimir as imagens dele também: é só um toque.',
    shareText:
      'Comprima imagens online grátis — sem cadastro, sem marca d’água. Experimente o CompressMyPic:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: 'Compartilhar no {name}',
    copyLink: 'Copiar link',
    copied: 'Copiado!',
    share: 'Compartilhar',
    emailSubject: 'Compressor de imagens grátis – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – Compressor de imagens grátis', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'Início',
    privacyPill: 'Processamento 100% privado no navegador · Os arquivos nunca saem do seu dispositivo',
    noUploads: 'Sem envio para servidores',
    freeNote: 'Grátis · Sem cadastro · Sem marca d’água',
    howToTitle: 'Como usar {name}',
    howToIntro:
      'Siga estes passos simples para concluir sua tarefa, direto no seu navegador.',
    featuresTitle: 'Por que usar {name} do CompressMyPic?',
    faqTitle: '{name} — Perguntas frequentes',
    relatedTitle: 'Ferramentas de imagens grátis relacionadas',
    commentsTitle: 'Comentários',
    commentsNote: 'Compartilhe sua opinião sobre esta ferramenta: basta escrever seu nome e publicar. Não precisa de conta.',
    commentsNamePlaceholder: 'Seu nome',
    commentsTextPlaceholder: 'Escreva seu comentário…',
    commentsSubmit: 'Publicar comentário',
    commentsPosting: 'Publicando…',
    commentsEmpty: 'Seja o primeiro a comentar.',
    commentsPosted: 'Obrigado! Seu comentário já está no ar.',
    commentsLoadError: 'Não foi possível carregar os comentários. Tente novamente.',
    commentsPostError: 'Não foi possível publicar seu comentário. Tente novamente.',
    commentsRetry: 'Tentar novamente',
    commentsLoading: 'Carregando comentários…',
  },
  uploadZone: {
    dropText: 'Arraste e solte suas imagens aqui',
    browseButton: 'explorar arquivos',
    browsePrefix: 'ou',
    browseSuffix: 'do seu computador ou celular',
    orPaste: 'Colar (Ctrl+V) compatível',
    hint: 'Máx. {max} MB por imagem',
    errorTooBig: '"{name}" excede o limite máximo de {max} MB.',
    errorBadType: '"{name}" não tem um formato compatível ({formats}).',
    errorUnreadable: '"{name}" é um arquivo vazio (0 bytes).',
    errorMore: '(+{count} erros a mais)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'Área para enviar imagens. Arraste e solte ou clique para explorar arquivos.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'Arquivo corrompido ou ilegível.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'Comparação visual de qualidade',
    beforeLabel: 'Original (antes)',
    afterLabel: 'Comprimida (depois)',
    closeLabel: 'Fechar a visualização de comparação',
    instruction: 'Arraste o controle deslizante para a esquerda ou para a direita para conferir a qualidade de cada pixel.',
    sliderLabel: 'Controle deslizante',
    sideBySideLabel: 'Lado a lado',
    zoomInLabel: 'Aproximar',
    zoomOutLabel: 'Afastar',
    originalLabel: 'Original:',
    outputLabel: 'Resultado:',
    reductionLabel: 'Redução:',
    sizeChangeLabel: 'Mudança de tamanho:',
    qualityLabel: 'Ajuste de qualidade:',
    formatLabel: 'Formato:',
    modalAriaLabel: 'Janela de comparação de imagens', // 'Image comparison modal'
    altCompressed: 'Versão comprimida de {name}', // 'Compressed version of {name}'
    altOriginal: 'Versão original de {name}', // 'Original version of {name}'
    altProcessed: 'Versão processada de {name}', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'Compressor de imagens grátis online – Reduza para 100KB',
    seoDescription:
      'Comprima imagens online grátis: reduza o tamanho sem perder qualidade. Comprima JPG, PNG e WebP sem cadastro nem marca d’água, direto no seu navegador.',
    h1: 'Compressor de imagens grátis',
    subtitle: 'Reduza o tamanho de arquivos JPG, PNG, WebP e HEIC direto no seu navegador.',
  },
  categories: {
    compress: 'Comprimir',
    resize: 'Redimensionar',
    convert: 'Converter',
    'crop-edit': 'Recortar e editar',
    'ai-tools': 'Ferramentas de IA',
    create: 'Criar',
    privacy: 'Ferramentas de privacidade',
    developer: 'Ferramentas para desenvolvedores',
  },
  compressionControls: {
    modeLabel: 'Modo de compressão', // 'Compression Mode'
    presetLow: 'Compressão baixa (85%)', // 'Low Compression (85%)'
    presetBalanced: 'Equilibrada (70%)', // 'Balanced (70%)'
    presetHigh: 'Compressão alta (50%)', // 'High Compression (50%)'
    presetCustom: 'Personalizada', // 'Custom'
    formatLabel: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    qualityLabel: 'Qualidade desejada:', // 'Quality Target:'
    qualityHigh: 'Alta fidelidade', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'Equilíbrio ideal para web', // 'Optimal Web Balance' (60–79)
    qualityMax: 'Máxima economia de espaço', // 'Max Space Savings' (< 60)
    qualityAriaLabel: 'Controle deslizante de qualidade de 10 a 100 por cento', // 'Quality slider from 10 to 100 percent'
    compressAll: 'Comprimir tudo novamente', // 'Re-compress All'
    compressing: 'Comprimindo…', // 'Compressing...'
    clearAll: 'Limpar tudo', // 'Clear All'
    clearAllTitle: 'Limpar todas as imagens', // 'Clear all images'
    transparencyTitle: 'Aviso de transparência para conversão em JPEG', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'O formato JPEG não aceita transparência (canais alfa). Os fundos transparentes serão substituídos por um fundo sólido (branco por padrão). Selecione PNG ou WebP se quiser manter os fundos transparentes.',
    pngTip:
      'O PNG é um formato sem perdas e ignora o controle deslizante de qualidade, então recodificar um PNG às vezes pode igualar ou superar o tamanho original. Para PNGs com aparência de foto, escolher WebP ou JPG costuma gerar arquivos de 50% a 80% menores.',
  },
  resultsList: {
    summary: 'Resumo da compressão', // 'Compression Summary'
    image: 'Imagem', // 'Image' (count === 1)
    images: 'Imagens', // 'Images' (count !== 1)
    totalOriginal: 'Total original:', // 'Total Original:'
    totalCompressed: 'Total comprimido:', // 'Total Compressed:'
    totalSaved: 'Total economizado:', // 'Total Saved:'
    processing: 'Processando…', // 'Processing...'
    grewBy: '(aumentou {bytes})', // '(grew by {bytes})'
    reduction: 'Redução:', // 'Reduction:'
    sizeChange: 'Mudança de tamanho:', // 'Size Change:'
    downloadAll: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Criando ZIP ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'Comparar', // 'Compare'
    compareTitle: 'Clique para ver a comparação visual de qualidade', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'Comparar o antes e o depois', // 'Compare visual before/after'
    download: 'Baixar', // 'Download'
    retry: 'Tentar novamente', // 'Retry'
    removeTitle: 'Remover imagem', // 'Remove image'
    removeAriaLabel: 'Remover {name}', // 'Remove {name}'
    keptOriginal: 'O original foi mantido (a recodificação era maior)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'Aumentou {bytes}: a recodificação é maior que o original', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'Comprimido com sucesso', // 'Compressed successfully'
    optimizing: 'Otimizando pixels…', // 'Optimizing pixels...'
    compressionError: 'Erro de compressão', // 'Compression error'
    original: 'Original', // 'Original' (metric label)
    compressed: 'Comprimido', // 'Compressed' (metric label)
    output: 'Saída', // 'Output' (metric label when original kept)
    spaceSaved: 'Espaço economizado', // 'Space Saved'
    formatLabel: 'Formato:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alfa', // 'Alpha' badge
    largerTitle: 'A saída é {bytes} maior que o original.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'A recodificação PNG sem perdas ignora o controle deslizante de qualidade; WebP ou JPG costuma ser bem menor para PNGs com aparência de foto.',
    largerNote:
      'Esta imagem já estava muito comprimida para a qualidade selecionada.',
    keepOriginal: 'Manter original', // 'Keep original'
  },
} as const;

// Per-tool workspace UI strings in Portuguese (Brazilian pt-BR) — COMPLETE (all 48 tools).
// Assembled from tool-ui-pt-batch1.ts … tool-ui-pt-batch6.ts (coordinator merge).
// Target: merged into src/locales/pt/ui.ts as the TOOL_UI_PT export.
// Portuguese (Brazilian pt-BR), você forms. Keyed by English slug.
// English source is in a comment on each line. Placeholders in braces
// are filled at runtime and must be kept as-is.
// NOTE: the '/image-metadata-viewer' gpsWarning string is split across JSX
// lines in the page file with an inline "Remove Image Metadata" link button;
// gpsWarningLink carries that link's text. Target-size tables carry the
// formatWebp/formatPng keys and the full targetCompression.ts status
// templates (incl. statusAlreadyUnderGrew, absent from the Spanish table).

export const TOOL_UI_PT = {

  '/image-resizer': {
    comparisonTitlePrefix: 'Comparação de redimensionamento', // 'Resize Comparison'
    comparisonAfterLabel: 'Redimensionada (depois)', // 'Resized (After)'
    presetInstagramPost: 'Post do Instagram (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Story do Instagram (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'Miniatura do YouTube (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Capa do Facebook (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'Cabeçalho do X (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'Falha ao redimensionar a imagem.', // 'Resize failed.'
    errorCorruptedFile: 'Arquivo de imagem danificado ou ilegível.', // 'Corrupted or unreadable image file.'
    resizeMode: 'Modo de redimensionamento', // 'Resize Mode'
    modeByPixels: 'Por pixels (L × A)', // 'By Pixels (W × H)'
    modeByPercentage: 'Por porcentagem (%)', // 'By Percentage (%)'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'Largura (px)', // 'Width (px)'
    heightLabel: 'Altura (px)', // 'Height (px)'
    placeholderAuto: 'Automático', // placeholder 'Auto'
    aspectRatioLocked: 'Proporção travada', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'Destravada (personalizada)', // 'Unlocked (Custom)'
    fitModeLabel: 'Modo de ajuste:', // 'Fit Mode:'
    fitContain: 'Conter (sem corte)', // 'Contain (No Crop)'
    fitCover: 'Cobrir (corte central)', // 'Cover (Center Crop)'
    fitStretchExact: 'Esticar exato', // 'Stretch Exact'
    quickPresets: 'Modelos rápidos para redes sociais e web', // 'Quick Social & Web Presets'
    scalePercentage: 'Porcentagem de escala:', // 'Scale Percentage:'
    outputQuality: 'Qualidade de saída:', // 'Output Quality:'
    matteBg: 'Fundo fosco:', // 'Matte BG:'
    resizing: 'Redimensionando…', // 'Resizing...'
    resizeAll: 'Redimensionar tudo ({count})', // 'Resize All ({count})'
    clear: 'Limpar', // 'Clear'
    batchReady: 'Lote pronto', // 'Batch Ready'
    batchReadySingular: '{count} imagem redimensionada pronta para baixar', // '{count} resized image ready to download'
    batchReadyPlural: '{count} imagens redimensionadas prontas para baixar', // '{count} resized images ready to download'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'Redimensionada ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'Comparação de conversão de formato', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'Convertida (depois)', // 'Converted (After)'
    errorConversionFailed: 'Falha ao converter a imagem.', // 'Conversion failed.'
    errorUnsupportedFile: 'Arquivo de imagem incompatível ou danificado.', // 'Unsupported or corrupted image file.'
    convertToFormat: 'Converter para o formato', // 'Convert To Format'
    formatWebp: 'WebP (o mais leve para web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (universal)', // 'JPG (Universal)'
    formatPng: 'PNG (sem perdas e com transparência)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'Cor de preenchimento de transparência', // 'Transparency Fill Color'
    quality: 'Qualidade', // 'Quality'
    qualityLosslessPng: 'PNG sem perdas', // 'Lossless PNG'
    converting: 'Convertendo…', // 'Converting...'
    convertAll: 'Converter tudo ({count})', // 'Convert All ({count})'
    clear: 'Limpar', // 'Clear'
    conversionComplete: 'Conversão concluída', // 'Conversion Complete'
    filesConverted: '{count} arquivos convertidos para {format}', // '{count} files converted to {format}'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    convertedStatus: 'Convertido para {ext}', // 'Converted to {ext}'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'Girar e inverter rápido', // 'Quick Rotate & Flip'
    rotate90Left: 'Girar 90° para a esquerda', // 'Rotate 90° Left'
    rotate90Right: 'Girar 90° para a direita', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'Inverter na horizontal', // 'Flip Horizontal'
    flipVertical: 'Inverter na vertical', // 'Flip Vertical'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'Ângulo de rotação:', // 'Rotation Angle:'
    resetTo0: 'Redefinir para 0°', // 'Reset to 0°'
    applyAngle: 'Aplicar ângulo', // 'Apply Angle'
    clear: 'Limpar', // 'Clear'
    batchReady: 'Lote pronto', // 'Batch Ready'
    transformedImagesReady: '{count} imagens transformadas prontas', // '{count} transformed images ready'
    creatingZip: 'Criando ZIP...', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: 'Girada {angle}°', // 'Rotated {angle}°'
    flippedH: ' · Invertida H', // ' · Flipped H'
    flippedV: ' · Invertida V', // ' · Flipped V'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeItem: 'Remover {name}', // 'Remove {name}' (aria-label)
    transformFailed: 'Falha ao transformar a imagem.', // 'Transform failed.'
    corruptedImage: 'Imagem danificada ou ilegível.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'Comparação de girar e inverter', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'Editada (depois)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'Solte imagens para combiná-las em PDF', // 'Drop images to combine into PDF'
    couldNotRead: 'Não foi possível ler "{filename}". Certifique-se de que é uma imagem válida.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'Falha ao gerar o PDF.', // 'PDF generation failed.'
    encodingPage: 'Codificando página {current} de {total}...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'Gerando PDF...', // 'Generating PDF...'
    pageSize: 'Tamanho da página', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'Carta dos EUA (8,5 × 11 pol.)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'Ajustar ao tamanho da imagem', // 'Fit to Image Size'
    orientation: 'Orientação', // 'Orientation'
    orientationAuto: 'Automática (conforme a foto)', // 'Auto (Match Photo)'
    orientationPortrait: 'Vertical', // 'Portrait'
    orientationLandscape: 'Horizontal', // 'Landscape'
    margin: 'Margem', // 'Margin'
    marginNone: 'Sem margem (sangria total)', // 'No Margin (Full Bleed)'
    marginSmall: 'Margem pequena', // 'Small Margin'
    marginMedium: 'Margem média', // 'Medium Margin'
    imagePlacement: 'Posicionamento da imagem', // 'Image Placement'
    placementContain: 'Conter (imagem completa)', // 'Contain (Full Image)'
    placementCover: 'Cobrir (preencher a página)', // 'Cover (Fill Page)'
    pdfFilename: 'Nome do arquivo PDF', // 'PDF Filename'
    pdfImageQuality: 'Qualidade da imagem do PDF:', // 'PDF Image Quality:'
    createDownloadPdf: 'Criar e baixar PDF ({count} pág.)', // 'Create & Download PDF ({count}p)'
    clear: 'Limpar', // 'Clear'
    pdfReady: 'PDF pronto ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'página', // 'page'
    pagePlural: 'páginas', // 'pages'
    downloadPdfAgain: 'Baixar PDF novamente', // 'Download PDF Again'
    pageOrder: 'Ordem das páginas ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'Página', // 'Page' (in Page Order heading)
    pageOrderPlural: 'Páginas', // 'Pages' (in Page Order heading)
    movePageUp: 'Subir página', // 'Move page up' (title)
    movePageDown: 'Descer página', // 'Move page down' (title)
    removePage: 'Remover página', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'Solte uma imagem para inspecionar EXIF e metadados', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'Não foi possível analisar os metadados da imagem.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'Metadados embutidos encontrados ({count} tipos de tags)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'Nenhuma tag EXIF, GPS ou oculta da câmera detectada', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'Remover metadados', // 'Strip Metadata'
    copyJson: 'Copiar JSON', // 'Copy JSON'
    copiedJson: 'JSON copiado', // 'Copied JSON'
    exportJson: 'Exportar JSON', // 'Export JSON'
    clear: 'Limpar', // 'Clear' (title)
    gpsDetected: 'Coordenadas de localização GPS detectadas', // 'GPS Location Coordinates Detected'
    latitude: 'Latitude:', // 'Latitude:'
    longitude: 'Longitude:', // 'Longitude:'
    gpsWarning:
      'Compartilhar esta imagem como está pode revelar onde a foto foi tirada. Use Remover metadados da imagem antes de postar online.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.' — split across JSX lines in the page, with an inline link button
    gpsWarningLink: 'Remover metadados da imagem', // inline link text inside the GPS warning: 'Remove Image Metadata' — extra key, not in the Spanish table
    extractedMetadata: 'Metadados extraídos ({count} propriedades)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'Tag de privacidade', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'Solte fotos para remover EXIF, GPS e metadados', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'Falha ao remover os metadados.', // 'Failed to strip metadata.'
    strippingMethod: 'Método de remoção', // 'Stripping Method'
    losslessStrip: 'Remoção binária sem perdas (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'Recodificação completa no canvas', // 'Full Canvas Re-encode'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'Qualidade de recodificação (usada para WebP/HEIC ou recodificação completa):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'Limpando...', // 'Cleaning...'
    recleanAll: 'Limpar tudo novamente', // 'Re-clean All'
    clear: 'Limpar', // 'Clear'
    privacyVerified: 'Privacidade verificada', // 'Privacy Verified'
    cleanImagesReady: '{count} imagens limpas prontas, com metadados removidos', // '{count} clean images ready with metadata stripped'
    creatingZip: 'Criando ZIP...', // 'Creating ZIP...'
    downloadAllCleanZip: 'Baixar todas limpas (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: 'Removidas {before} tags de metadados → {after} restantes', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'Limpa verificada (0 tags EXIF/GPS)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'Remoção binária sem perdas', // 'Lossless binary strip'
    cleanCanvasExport: 'Exportação limpa no canvas', // 'Clean Canvas export'
    scrubbing: 'Removendo cabeçalhos EXIF e GPS...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'Baixar limpa', // 'Download Clean'
    removeItem: 'Remover {name}', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'Solte seu logotipo ou ícone aqui', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'PNG ou SVG quadrado recomendado · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'procurar arquivo', // 'browse file'
    errorGenerateFailed: 'Falha ao gerar o pacote de favicon.', // 'Failed to generate favicon package.'
    backgroundFill: 'Preenchimento de fundo', // 'Background Fill'
    transparent: 'Transparente', // 'Transparent'
    padding: 'Preenchimento', // 'Padding'
    cornerRadius: 'Raio de canto', // 'Corner Radius'
    tabPreviewAlt: 'Prévia de aba', // alt 'Tab preview'
    myWebsite: 'Meu site', // 'My Website'
    darkTabPreviewAlt: 'Prévia de aba escura', // alt 'Dark tab preview'
    darkModeTab: 'Aba em modo escuro', // 'Dark Mode Tab'
    packingZip: 'Empacotando ZIP…', // 'Packing ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    clear: 'Limpar', // title 'Clear'
    downloadFaviconIco: 'Baixar favicon.ico', // title 'Download favicon.ico'
    downloadFile: 'Baixar {filename}', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'Trecho HTML <head>', // 'HTML <head> Snippet'
    copied: 'Copiado!', // 'Copied!'
    copyHtml: 'Copiar HTML', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'Solte uma imagem ou cole uma captura (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    clickAnywhereToPin: 'Clique em qualquer lugar para fixar uma cor', // 'Click anywhere to pin a color'
    newImage: 'Nova imagem', // 'New Image'
    pixelInspector: 'Inspetor de pixels', // 'Pixel Inspector'
    copyLabel: 'Copiar {label}', // title `Copy ${row.label}`
    pickedSwatches: 'Amostras escolhidas ({count})', // 'Picked Swatches ({count})'
    exportCss: 'Exportar CSS', // 'Export CSS'
    clickPixelsHint: 'Clique em pixels da imagem para salvar cores na sua paleta.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'Clique para selecionar e copiar {hex}', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'Solte imagens para inspecionar dimensões e proporções exatas', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'Largura mínima (px)', // 'Min Width Check (px)'
    minHeightCheck: 'Altura mínima (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'ex.: 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'ex.: 630', // placeholder 'e.g. 630'
    exportCsv: 'Exportar CSV', // 'Export CSV'
    exportJson: 'Exportar JSON', // 'Export JSON'
    clear: 'Limpar', // 'Clear'
    headerImage: 'Imagem', // table header 'Image'
    headerDimensions: 'Dimensões', // table header 'Dimensions'
    headerAspectRatio: 'Proporção', // table header 'Aspect Ratio'
    headerOrientation: 'Orientação', // table header 'Orientation'
    headerSizeFormat: 'Tamanho / Formato', // table header 'Size / Format'
    headerPrint300Dpi: 'Impressão a 300 DPI', // table header 'Print @300 DPI'
    headerSpecCheck: 'Verificação de especificação', // table header 'Spec Check'
    orientationLandscape: 'Paisagem', // 'Landscape'
    orientationPortrait: 'Retrato', // 'Portrait'
    orientationSquare: 'Quadrada', // 'Square'
    alphaTag: ' · Alfa', // ' · Alpha'
    specPass: 'Aprovado', // 'Pass'
    specBelowMin: 'Abaixo do mínimo', // 'Below Min'
    csvYes: 'Sim', // CSV value 'Yes'
    csvNo: 'Não', // CSV value 'No'
  },
  '/image-cropper': {
    uploadTitle: 'Solte uma imagem para cortar interativamente', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorCanvasContext: 'Não foi possível inicializar o contexto do canvas.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'Falha ao exportar o corte.', // 'Crop export failed.'
    aspectFree: 'Livre', // aspect preset 'Free'
    selection: 'Seleção:', // 'Selection:'
    zoomOut: 'Reduzir zoom', // aria-label 'Zoom out'
    zoomIn: 'Aumentar zoom', // aria-label 'Zoom in'
    removeImage: 'Remover imagem', // aria-label 'Remove image'
    cropSourceAlt: 'Imagem de origem para corte', // alt 'Crop source'
    originalLabel: 'Original:', // 'Original:'
    cropOptions: 'Opções de corte', // 'Crop Options'
    selectFull: 'Selecionar tudo', // 'Select Full'
    aspectRatioPreset: 'Predefinição de proporção', // 'Aspect Ratio Preset'
    cropWidth: 'Largura do corte', // 'Crop Width'
    cropHeight: 'Altura do corte', // 'Crop Height'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualidade', // 'Quality'
    cropping: 'Cortando…', // 'Cropping...'
    cropAndDownload: 'Cortar e baixar', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: "Solte uma imagem para adicionar marca d'água de texto ou logotipo", // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorUnableToLoadLogo: 'Não foi possível carregar a imagem do logotipo.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: "Falha ao exportar a imagem com marca d'água.", // 'Watermark export failed.'
    fallbackWatermarkText: "Marca d'água", // canvas fallback text 'Watermark'
    tiledPreview: 'Prévia em mosaico', // 'Tiled Preview'
    dragToPosition: 'Arraste na imagem para posicionar', // 'Drag on Image to Position'
    changeImage: 'Trocar imagem', // 'Change Image'
    watermarkType: "Tipo de marca d'água", // 'Watermark Type'
    modeText: "Marca d'água de texto", // 'Text Watermark'
    modeLogo: 'Imagem de logotipo', // 'Logo Image'
    watermarkTextLabel: "Texto da marca d'água", // 'Watermark Text'
    placeholderBrand: '© Sua marca', // placeholder '© Your Brand'
    textColor: 'Cor do texto', // 'Text Color'
    size: 'Tamanho', // 'Size'
    uploadLogo: 'Enviar logotipo (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'Trocar imagem de logotipo', // 'Change Logo Image'
    logoWidth: 'Largura do logotipo', // 'Logo Width'
    opacity: 'Opacidade', // 'Opacity'
    rotation: 'Rotação', // 'Rotation'
    tiledRepeatPattern: 'Padrão repetido em mosaico', // 'Tiled Repeat Pattern'
    tileSpacing: 'Espaçamento do mosaico', // 'Tile Spacing'
    anchorPresets: 'Predefinições de âncora (ou arraste na imagem)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualidade', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadWatermarked: "Baixar imagem com marca d'água", // 'Download Watermarked Image'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'Solte uma imagem para desfocar ou pixelar áreas', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar.', // 'Export failed.'
    paintOverAreasBlur: 'Pinte áreas para desfocar', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'Pinte áreas para pixelar', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'Prévia da imagem inteira', // 'Whole-Image Preview'
    undo: 'Desfazer', // 'Undo'
    resetBrush: 'Redefinir pincel', // 'Reset Brush'
    removeImage: 'Remover imagem', // aria-label 'Remove image'
    targetArea: 'Área alvo', // 'Target Area'
    brushArea: 'Área de pincel', // 'Brush Area'
    wholeImage: 'Imagem inteira', // 'Whole Image'
    effectStyle: 'Estilo de efeito', // 'Effect Style'
    pixelateMosaic: 'Mosaico pixelado', // 'Pixelate Mosaic'
    smoothBlur: 'Desfoque suave', // 'Smooth Blur'
    blurRadius: 'Raio de desfoque', // 'Blur Radius'
    mosaicBlockSize: 'Tamanho do bloco de mosaico', // 'Mosaic Block Size'
    brushSize: 'Tamanho do pincel', // 'Brush Size'
    brushHint: 'Clique e arraste direto na foto para ocultar rostos, texto ou placas.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualidade', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadImage: 'Baixar imagem', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'Solte uma imagem para adicionar textos personalizados', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar.', // 'Export failed.'
    dragAnyText: 'Arraste qualquer texto direto na imagem', // 'Drag Any Text Directly on Image'
    changeImage: 'Trocar imagem', // 'Change Image'
    textLayer: 'Texto {index}', // tab `Text ${idx + 1}`
    add: 'Adicionar', // 'Add'
    deleteActiveTextLayer: 'Excluir camada de texto ativa', // aria-label 'Delete active text layer'
    textContent: 'Conteúdo do texto (várias linhas aceitas)', // 'Text Content (multi-line supported)'
    font: 'Fonte', // 'Font'
    fontInter: 'Inter / Sans limpa', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / Exibição de meme', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / Serif clássica', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / Monoespaçada', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / Sans arredondada', // font option 'Trebuchet / Rounded Sans'
    fill: 'Preenchimento', // 'Fill'
    toggleBold: 'Ativar/desativar negrito', // aria-label 'Toggle Bold'
    toggleItalic: 'Ativar/desativar itálico', // aria-label 'Toggle Italic'
    size: 'Tamanho', // 'Size'
    rotation: 'Rotação', // 'Rotation'
    textOutline: 'Contorno do texto', // 'Text Outline'
    dropShadow: 'Sombra projetada', // 'Drop Shadow'
    defaultLayerText: 'Toque duas vezes ou edite o texto', // default layer text 'Double-tap or edit text'
    defaultCaption: 'Legenda {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualidade', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadImageWithText: 'Baixar imagem com texto', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'Solte uma imagem para adicionar uma borda ou moldura personalizada', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar.', // 'Export failed.'
    framedPreview: 'Prévia emoldurada', // 'Framed Preview'
    changeImage: 'Trocar imagem', // 'Change Image'
    quickFramePresets: 'Predefinições rápidas de moldura', // 'Quick Frame Presets'
    presetClassicWhite: 'Branco clássico', // preset 'Classic White'
    presetPolaroidFrame: 'Moldura Polaroid', // preset 'Polaroid Frame'
    presetDarkStudio: 'Estúdio escuro', // preset 'Dark Studio'
    presetGradientGlow: 'Brilho em gradiente', // preset 'Gradient Glow'
    borderStyle: 'Estilo de borda', // 'Border Style'
    borderStyleSolid: 'Sólida', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'Gradiente', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'Polaroid', // border type 'polaroid' (rendered capitalized)
    borderColor: 'Cor da borda', // 'Border Color'
    startColor: 'Cor inicial', // 'Start Color'
    endColor: 'Cor final', // 'End Color'
    gradientAngle: 'Ângulo do gradiente', // 'Gradient Angle'
    borderSize: 'Tamanho da borda', // 'Border Size'
    frameRadius: 'Raio da moldura', // 'Frame Radius'
    photoRadius: 'Raio da foto', // 'Photo Radius'
    dropShadow: 'Sombra projetada', // 'Drop Shadow'
    shadowNone: 'nenhuma', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'suave', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'média', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'profunda', // shadow level 'deep' (rendered capitalized)
    exporting: 'Exportando…', // 'Exporting...'
    downloadFramedImage: 'Baixar imagem emoldurada', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'Solte uma imagem para arredondar seus cantos', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar a imagem arredondada.', // 'Failed to export rounded image.'
    liveCornerPreview: 'Prévia de cantos ao vivo', // 'Live Corner Preview'
    changeImage: 'Trocar imagem', // 'Change Image'
    cornerSettings: 'Configurações de canto', // 'Corner Settings'
    fullCirclePill: 'Círculo completo / Pílula', // 'Full Circle / Pill'
    individualPerCorner: 'Controle individual por canto', // 'Individual Per-Corner Control'
    allCornersRadius: 'Raio de todos os cantos', // 'All Corners Radius'
    cornerTopLeft: 'Superior esquerdo', // per-corner label 'Top Left'
    cornerTopRight: 'Superior direito', // per-corner label 'Top Right'
    cornerBottomLeft: 'Inferior esquerdo', // per-corner label 'Bottom Left'
    cornerBottomRight: 'Inferior direito', // per-corner label 'Bottom Right'
    outerCornerFill: 'Preenchimento de canto externo', // 'Outer Corner Fill'
    transparentPngWebp: 'Transparente (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'Cor sólida', // 'Solid Color'
    outputFormat: 'Formato de saída', // 'Output Format'
    exporting: 'Exportando…', // 'Exporting...'
    downloadRoundedImage: 'Baixar imagem arredondada', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'Solte uma imagem para ajustar o brilho', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar a imagem ajustada.', // 'Failed to export adjusted image.'
    viewAfter: 'Depois', // view tab 'after' (rendered capitalized)
    viewBefore: 'Antes', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'Comparação dividida', // view tab 'Split Compare'
    fullscreenCompare: 'Comparação em tela cheia', // 'Fullscreen Compare'
    removeImage: 'Remover imagem', // title/aria-label 'Remove image'
    beforeLabel: 'Antes', // split slider label 'Before'
    afterLabel: 'Depois', // split slider label 'After'
    originalPreviewAlt: 'Prévia original', // alt 'Original preview'
    originalComparisonAlt: 'Comparação original', // alt 'Original comparison'
    brightnessControls: 'Controles de brilho', // 'Brightness Controls'
    reset: 'Redefinir', // 'Reset'
    brightnessLevel: 'Nível de brilho', // 'Brightness Level'
    minLabel: '-100% Mais escuro', // min label '-100% Darker'
    maxLabel: '+100% Mais claro', // max label '+100% Brighter'
    quickPresets: 'Predefinições rápidas', // 'Quick Presets'
    presetDark: 'Escuro (-30%)', // preset 'Dark (-30%)'
    presetDim: 'Sombrio (-15%)', // preset 'Dim (-15%)'
    presetOriginal: 'Original (0%)', // preset 'Original (0%)'
    presetBright: 'Claro (+15%)', // preset 'Bright (+15%)'
    presetVibrant: 'Vibrante (+30%)', // preset 'Vibrant (+30%)'
    presetHighKey: 'Alta chave (+50%)', // preset 'High Key (+50%)'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualidade', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadEditedImage: 'Baixar imagem editada', // 'Download Edited Image'
    comparisonTitlePrefix: 'Comparação de brilho', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'Editada (depois)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'Solte uma imagem para ajustar o contraste', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'Comparação de contraste', // 'Contrast Comparison'
    comparisonAfterLabel: 'Editada (depois)', // 'Edited (After)'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar a imagem ajustada.', // 'Failed to export adjusted image.'
    tabAfter: 'Depois', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Antes', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Comparação dividida', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Comparar em tela cheia', // 'Fullscreen Compare'
    removeImage: 'Remover imagem', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Prévia original', // alt 'Original preview'
    originalComparisonAlt: 'Comparação original', // alt 'Original comparison'
    splitBeforeLabel: 'Antes', // split slider left label 'Before'
    splitAfterLabel: 'Depois', // split slider right label 'After'
    controlsHeading: 'Controles de contraste', // '{label} Controls' (contrast mode)
    reset: 'Redefinir', // 'Reset'
    levelLabel: 'Nível de contraste', // '{label} Level' (contrast mode)
    minLabel: '-100% Sem contraste', // minLabel '-100% Flat'
    maxLabel: '+100% Alto contraste', // maxLabel '+100% High Contrast'
    quickPresets: 'Predefinições rápidas', // 'Quick Presets'
    presetSoft: 'Suave (-25%)', // 'Soft (-25%)'
    presetMuted: 'Suavizado (-10%)', // 'Muted (-10%)'
    presetOriginal: 'Original (0%)', // 'Original (0%)'
    presetCrisp: 'Nítido (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'Marcante (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'Dramático (+70%)', // 'Dramatic (+70%)'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualidade', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadEditedImage: 'Baixar imagem editada', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'Solte uma imagem para ajustar a saturação', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'Comparação de saturação', // 'Saturation Comparison'
    comparisonAfterLabel: 'Editada (depois)', // 'Edited (After)'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar a imagem ajustada.', // 'Failed to export adjusted image.'
    tabAfter: 'Depois', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Antes', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Comparação dividida', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Comparar em tela cheia', // 'Fullscreen Compare'
    removeImage: 'Remover imagem', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Prévia original', // alt 'Original preview'
    originalComparisonAlt: 'Comparação original', // alt 'Original comparison'
    splitBeforeLabel: 'Antes', // split slider left label 'Before'
    splitAfterLabel: 'Depois', // split slider right label 'After'
    controlsHeading: 'Controles de saturação', // '{label} Controls' (saturation mode)
    reset: 'Redefinir', // 'Reset'
    levelLabel: 'Nível de saturação', // '{label} Level' (saturation mode)
    minLabel: '-100% Preto e branco', // minLabel '-100% Grayscale'
    maxLabel: '+100% Vívido', // maxLabel '+100% Vivid'
    quickPresets: 'Predefinições rápidas', // 'Quick Presets'
    presetGrayscale: 'Preto e branco (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'Suavizado (-40%)', // 'Muted (-40%)'
    presetOriginal: 'Original (0%)', // 'Original (0%)'
    presetRich: 'Intenso (+30%)', // 'Rich (+30%)'
    presetVivid: 'Vívido (+60%)', // 'Vivid (+60%)'
    presetHyper: 'Hiper (+90%)', // 'Hyper (+90%)'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualidade', // 'Quality'
    exporting: 'Exportando…', // 'Exporting...'
    downloadEditedImage: 'Baixar imagem editada', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'Solte uma imagem para aplicar filtros', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'Comparação de filtros', // 'Filter Comparison'
    comparisonAfterLabel: 'Filtrada', // 'Filtered'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar.', // 'Export failed.'
    filterPreview: 'Prévia de filtro', // 'Filter Preview'
    holdToViewOriginal: 'Segure para ver o original', // 'Hold to View Original'
    compare: 'Comparar', // 'Compare'
    removeImage: 'Remover imagem', // aria-label 'Remove image'
    originalBadge: 'Original', // 'Original' badge — same in Portuguese
    filterPresets: 'Predefinições de filtro', // 'Filter Presets'
    reset: 'Redefinir', // 'Reset'
    presetOriginal: 'Original', // preset 'Original' — same in Portuguese
    presetGrayscale: 'Preto e branco', // preset 'Grayscale'
    presetSepia: 'Sépia', // preset 'Sepia'
    presetVintage: 'Vintage', // preset 'Vintage' — same in Portuguese
    presetWarm: 'Quente', // preset 'Warm'
    presetCool: 'Frio', // preset 'Cool'
    presetHighContrast: 'Alto contraste', // preset 'High Contrast'
    presetMatteFade: 'Fosco suave', // preset 'Matte Fade'
    presetDramatic: 'Dramático', // preset 'Dramatic'
    presetNoir: 'Noir P&B', // preset 'B&W Noir'
    presetGoldenHour: 'Hora dourada', // preset 'Golden Hour'
    presetInvert: 'Inverter', // preset 'Invert'
    filterIntensity: 'Intensidade do filtro', // 'Filter Intensity'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualidade', // 'Quality'
    rendering: 'Processando…', // 'Rendering...'
    downloadFilteredImage: 'Baixar imagem com filtro', // 'Download Filtered Image'
    downloadEditedImage: 'Baixar imagem editada', // 'Download Edited Image'
    exporting: 'Exportando…', // 'Exporting...'
    fullscreenCompare: 'Comparar em tela cheia', // 'Fullscreen Compare'
    originalComparisonAlt: 'Comparação original', // alt 'Original comparison'
    originalPreviewAlt: 'Prévia original', // alt 'Original preview'
    quickPresets: 'Predefinições rápidas', // 'Quick Presets'
    tabSplitCompare: 'Comparação dividida', // tab 'split' renders 'Split Compare'
    tabAfter: 'Depois', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Antes', // tab 'before' (CSS-capitalized in code)
    splitBeforeLabel: 'Antes', // split slider left label 'Before'
    splitAfterLabel: 'Depois', // split slider right label 'After'
    controlsHeading: 'Controles de filtros', // 'Filters Controls'
    levelLabel: 'Nível de filtros', // 'Filters Level'
  },
  '/add-background-to-image': {
    uploadTitle: 'Solte uma imagem ou um PNG transparente para adicionar um fundo', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorExportFailed: 'Falha ao exportar.', // 'Export failed.'
    backgroundPreview: 'Prévia de fundo', // 'Background Preview'
    changeImage: 'Trocar imagem', // 'Change Image'
    outputDimensionsPrefix: 'Saída:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'Tipo de fundo', // 'Background Type'
    modeSolidColor: 'Cor sólida', // 'Solid Color'
    modeGradient: 'Degradê', // 'Gradient'
    modeBlurredPhoto: 'Foto desfocada', // 'Blurred Photo'
    selectColor: 'Selecionar cor {color}', // aria-label `Select color ${c}`
    color1: 'Cor 1', // 'Color 1' — same in Portuguese
    color2: 'Cor 2', // 'Color 2' — same in Portuguese
    angle: 'Ângulo', // 'Angle'
    backdropBlurRadius: 'Raio de desfoque do fundo', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'Proporção da tela', // 'Canvas Aspect Ratio'
    aspectOriginal: 'Orig', // 'Orig' — same abbreviation in Portuguese
    imageScale: 'Escala da imagem', // 'Image Scale'
    roundness: 'Arredondamento', // 'Roundness'
    dropShadowBehindImage: 'Sombra atrás da imagem', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'Exportando…', // 'Exporting...'
    downloadImage: 'Baixar imagem', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'Solte uma imagem para dividir em blocos de grade ou tiras', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorSplitFailed: 'Falha ao dividir a imagem.', // 'Failed to split image.'
    errorCanvasContext: 'Não foi possível inicializar o contexto do canvas.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'Prévia de linhas de corte ({rows} × {cols} = {tiles} peças)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'Trocar imagem', // 'Change Image'
    splitGuideAlt: 'Guia de divisão', // alt 'Split guide'
    splitLayout: 'Layout de divisão', // 'Split Layout'
    modeGrid: 'Grade (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'Tiras horizontais', // 'Horiz. Strips'
    modeVerticalStrips: 'Tiras verticais', // 'Vert. Strips'
    rowsLabel: 'Linhas (cortes horizontais)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'Colunas (cortes verticais)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 Carrossel', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 Tiras', // preset '4×1 Strips'
    formatOriginal: 'Orig', // 'Orig' — same abbreviation in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'Qualidade da peça', // 'Tile Quality'
    splittingImage: 'Dividindo imagem…', // 'Splitting Image...'
    splitIntoTiles: 'Dividir em {count} peças', // `Split into ${n} Tiles`
    splitComplete: 'Divisão concluída', // 'Split Complete'
    tilesGenerated: '{count} peças de imagem geradas em resolução total', // '{n} image tiles generated at full resolution'
    packagingZip: 'Empacotando ZIP…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'Baixar todas as peças (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'Baixar', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'Solte imagens JPG ou PNG para atualizar os metadados de DPI', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'Falha ao atualizar o DPI.', // 'Failed to update DPI.'
    targetDpiPresets: 'Predefinições de DPI de destino', // 'Target DPI Presets'
    preset72Screen: '72 DPI (Tela)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (Impressão de rascunho)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (Impressão de alta qualidade)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (Arquivo)', // '600 DPI (Archival)'
    customDpi: 'DPI personalizado', // 'Custom DPI'
    applyDpi: 'Aplicar {dpi} DPI', // 'Apply {dpi} DPI'
    clear: 'Limpar', // 'Clear'
    batchReady: 'Lote pronto', // 'Batch Ready'
    filesUpdatedToDpi: '{count} arquivos atualizados para {dpi} DPI', // '{n} files updated to {dpi} DPI'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'Antes: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'Antes: não definido', // 'Before: Not set'
    verifiedDpi: 'Verificado: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Atualização sem perdas do cabeçalho JPEG', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Atualização sem perdas do pHYs PNG', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'Convertido para PNG com DPI pHYs', // 'Converted to PNG with pHYs DPI'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Solte uma imagem para codificar como Base64', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'Não foi possível codificar o arquivo.', // 'Could not encode file.'
    errorFailedToRead: 'Falha ao ler o arquivo de imagem.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'Falha ao escrever na área de transferência — selecione e copie na caixa de texto.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'Arquivo:', // 'File:' (summary card)
    outputLabel: 'Saída:', // 'Output:' (summary card)
    charsLabel: 'caracteres', // 'chars' (summary card)
    encodeAnother: 'Codificar outra', // 'Encode Another'
    tabDataUrl: 'Data URL', // tab 'Data URL'
    tabRawBase64: 'Base64 puro', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'Copiado!', // 'Copied!'
    copyOutput: 'Copiar saída', // 'Copy Output'
    saveTxt: 'Salvar .TXT', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'Cole uma string Base64 ou Data URL', // 'Paste Base64 String or Data URL'
    clear: 'Limpar', // 'Clear'
    inputPlaceholder: 'Cole data:image/png;base64,iVBORw0KGgo... ou bytes Base64 puros aqui', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'Suporta cargas Base64 de PNG, JPG, WebP, GIF, SVG, BMP e ICO', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'Decodificando…', // 'Decoding...'
    decodeImage: 'Decodificar imagem', // 'Decode Image'
    decodingBytes: 'Decodificando bytes Base64…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'Codificação de Data URI não suportada. Era esperada uma carga Base64 (`;base64,`).', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'A entrada contém caracteres Base64 inválidos.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'Os bytes decodificados não formam uma imagem válida legível pelo navegador.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Não foi possível decodificar a string Base64.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'Prévia de Base64 decodificado', // alt 'Decoded Base64 preview'
    validImageDecoded: 'Imagem válida decodificada', // 'Valid Image Decoded'
    detectedFormat: 'Formato detectado', // 'Detected Format'
    binarySize: 'Tamanho binário', // 'Binary Size'
    dimensions: 'Dimensões', // 'Dimensions'
    downloadFormat: 'Formato de download', // 'Download Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'Baixar arquivo de imagem', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'Solte uma imagem para extrair a sua paleta de cores dominantes', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'Não foi possível carregar a imagem.', // 'Unable to load image.'
    errorClipboardDenied: 'Permissão da área de transferência negada.', // 'Clipboard permission denied.'
    extractedPalette: 'Paleta extraída ({count} cores)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'Origem', // alt 'Source'
    changeImage: 'Trocar', // 'Change'
    numberOfColors: 'Quantidade de cores', // 'Number of Colors'
    colorsCount: '{count} cores', // '{count} colors'
    copyCssVariables: 'Copiar variáveis CSS', // 'Copy CSS Variables'
    copiedCss: 'CSS copiado!', // 'Copied CSS!'
    copyJson: 'Copiar JSON', // 'Copy JSON'
    copiedJson: 'JSON copiado!', // 'Copied JSON!'
    downloadPalettePng: 'Baixar paleta PNG', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'Solte 2 ou mais imagens para criar um GIF animado', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'Não foi possível codificar o GIF animado.', // 'Failed to encode animated GIF.'
    skippedFile: 'Ignorado "{name}": {error}', // 'Skipped "{name}": {error}'
    skippedFileNoError: 'Ignorado "{name}".', // 'Skipped "{name}".'
    generatedGif: 'GIF gerado ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'Pré-visualização ao vivo · Quadro {current}/{total}', // 'Live Timing Preview · Frame {current}/{total}'
    generatedGifAlt: 'GIF animado gerado', // alt 'Generated animated GIF'
    pause: 'Pausar', // 'Pause'
    play: 'Reproduzir', // 'Play'
    backToFrameEditor: 'Voltar ao editor de quadros', // 'Back to Frame Editor'
    clearAllFrames: 'Limpar todos os quadros', // aria-label 'Clear all frames'
    largeGifWarning: 'Aviso de GIF grande ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      'GIFs acima de 5–15 MB podem ser enviados lentamente em aplicativos de mensagem ou não cumprir limites estritos de plataforma. Tente reduzir a largura/altura de saída (por ex., 480 px), baixar a qualidade ou remover quadros.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'Baixar GIF animado ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'Ajustes de animação', // 'Animation Settings'
    defaultFrameDuration: 'Duração padrão do quadro', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'Comportamento de repetição', // 'Loop Behavior'
    loopForever: 'Sempre', // 'Forever'
    loopSetLoops: 'Definir repetições', // 'Set Loops'
    loopPlayOnce: 'Reproduzir uma vez', // 'Play Once'
    totalPlays: 'Reproduções totais', // 'Total Plays'
    outputDimensions: 'Dimensões de saída (px)', // 'Output Dimensions (px)'
    ratioLocked: 'Proporção travada', // 'Ratio Locked'
    ratioUnlocked: 'Destravada', // 'Unlocked'
    widthLabel: 'Largura', // 'Width'
    heightLabel: 'Altura', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'Original', // 'Original' — same in Portuguese
    frameFit: 'Ajuste de quadros', // 'Frame Fit'
    fitContain: 'Conter', // 'contain'
    fitCover: 'Cobrir', // 'cover'
    backgroundMatte: 'Fundo fosco', // 'Background Matte'
    colorPaletteQuality: 'Qualidade da paleta de cores', // 'Color Palette Quality'
    encodingGif: 'Codificando GIF ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'Gerar GIF animado', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'Recodificar GIF animado', // 'Re-Encode Animated GIF'
    framesHeading: 'Quadros ({count}) — Arraste ou use as setas para reordenar', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'Deixe a duração por quadro em branco para herdar a duração global de quadro de {ms} ms.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'Adicionar quadros', // 'Add Frames'
    delayMsLabel: 'Duração (ms):', // 'Delay (ms):'
    moveEarlier: 'Mover para antes', // title 'Move earlier'
    moveLater: 'Mover para depois', // title 'Move later'
    duplicateFrame: 'Duplicar quadro', // title 'Duplicate frame'
    removeFrame: 'Remover quadro', // title 'Remove frame'
    moveFrameEarlierAria: 'Mover o quadro {n} para antes', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'Mover o quadro {n} para depois', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'Duplicar o quadro {n}', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'Remover o quadro {n}', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'Solte de 2 a 9 imagens para criar uma colagem de fotos', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'Não foi possível exportar a colagem.', // 'Failed to export collage.'
    couldNotLoadFile: 'Não foi possível carregar "{name}": {error}', // 'Could not load "{name}": {error}'
    couldNotLoadFileNoError: 'Não foi possível carregar "{name}".', // 'Could not load "{name}".'
    collagePreview: 'Pré-visualização da colagem ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'Limpar tudo', // 'Clear All'
    rearrangeCells: 'Reordenar células (arraste ou toque em duas células para trocar)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'Arraste qualquer cartão de célula sobre outro espaço para reordenar as fotos na hora.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'Adicionar fotos', // 'Add Photos'
    cellLabel: 'Célula {n}', // 'Cell {n}'
    slotLabel: 'Espaço {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'Mover a célula {n} para trás', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'Mover a célula {n} para frente', // aria-label `Move cell ${n} forward`
    clearCellAria: 'Limpar a célula {n}', // aria-label `Clear cell ${n}`
    addPhoto: 'Adicionar foto', // 'Add Photo'
    collageLayout: 'Layout da colagem', // 'Collage Layout'
    layout2x2: 'Grade 2×2', // '2×2 Grid'
    layout3x3: 'Grade 3×3', // '3×3 Grid'
    layoutVertical: 'Faixa vertical', // 'Vertical Strip'
    layoutHorizontal: 'Faixa horizontal', // 'Horizontal Strip'
    cellProportionsSpacing: 'Proporções e espaçamento de células', // 'Cell Proportions & Spacing'
    equalCells: 'Células iguais', // 'Equal Cells'
    colSplit: 'Divisão de colunas', // 'Col Split'
    centerCol: 'Coluna central', // 'Center Col'
    rowSplit: 'Divisão de linhas', // 'Row Split'
    centerRow: 'Linha central', // 'Center Row'
    leadCellEmphasis: 'Destaque da célula principal', // 'Lead Cell Emphasis'
    gapSpacing: 'Espaçamento', // 'Gap Spacing'
    cellRadius: 'Raio da célula', // 'Cell Radius'
    backgroundColor: 'Cor de fundo', // 'Background Color'
    backgroundSwatchAria: 'Fundo {color}', // aria-label `Background ${c}`
    imageFit: 'Ajuste de imagem', // 'Image Fit'
    fitCover: 'Cobrir', // 'cover'
    fitContain: 'Conter', // 'contain'
    outputSize: 'Tamanho de saída (px)', // 'Output Size (px)'
    widthLabel: 'Largura', // 'Width'
    heightLabel: 'Altura', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (sem perda)', // 'PNG (Lossless)'
    jpgQuality: 'Qualidade JPG', // 'JPG Quality'
    exportingCollage: 'Exportando colagem…', // 'Exporting Collage...'
    downloadCollage: 'Baixar colagem ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'Solte imagens para comprimir para menos de {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Solte imagens para comprimir para menos de {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Falha ao comprimir para o tamanho de objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Arquivo de imagem corrompido ou ilegível.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Tamanho máximo de arquivo de objetivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)'
    needDifferentTarget: 'Precisa de um objetivo diferente em KB?', // 'Need a different target KB?'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Permitir redimensionamento inteligente de dimensões se a redução de qualidade por si só não couber em {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não consegue chegar a {target} sem problemas', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não consegue chegar a {target} sem problemas', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimir para {target}', // 'Compress to {target}'
    optimizing: 'Otimizando…', // 'Optimizing...'
    clear: 'Limpar', // 'Clear'
    losslessPngSelected: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para chegar a limites estritos em KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para chegar a limites estritos em KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Resumo de compressão de objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} de {total} {images} cumpriram o objetivo de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'imagem', // 'image'
    imagePlural: 'imagens', // 'images'
    summaryMissed: ' · {missed} não couberam honestamente (detalhes abaixo)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total economizado: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total economizado: {bytes} (cresceu {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(cresceu {grew})', // '(grew by {grew})'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Saída', // 'Output' (metric label)
    metricSpaceSaved: 'Espaço economizado', // 'Space Saved' (metric label)
    metricReduction: 'Redução', // 'Reduction' (metric label)
    metricSizeChange: 'Mudança de tamanho', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Saída', // 'Output' (metric label)
    columnSpaceSaved: 'Espaço economizado', // 'Space Saved' (metric label)
    columnReduction: 'Redução', // 'Reduction' (metric label)
    columnSizeChange: 'Mudança de tamanho', // 'Size Change' (metric label)
    underTarget: 'Menos de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objetivo não alcançado — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Cresceu {bytes}: a recodificação é maior do que o original', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP ou JPG costuma ser menor para PNGs com aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP ou JPG costuma ser menor para PNGs com aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Manter original', // 'Keep original'
    keptOriginalNote: 'O arquivo original foi mantido porque a recodificação o deixou maior.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'O PNG sem perda foi convertido automaticamente para {format} para conservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'O PNG sem perda foi convertido automaticamente para {format} para conservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparência conservada)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'O arquivo original já estava abaixo de {target}, e a recodificação o fez crescer {bytes}. Use "Manter original" ou mude para WebP/JPG para uma saída menor.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'O arquivo original já estava abaixo de {target}; foi exportado sem problemas com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'O arquivo original já estava abaixo de {target}; foi exportado sem problemas com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objetivo cumprido com resolução completa de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objetivo cumprido ao dimensionar para {width}×{height} px ({percent}%) com {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sem perda', // 'lossless PNG'
    qualityPercent: 'qualidade de {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Não é possível chegar a {target} com PNG sem perda (mínimo alcançável: {bytes} a {width}×{height} px). Mude o formato de saída para JPG ou WebP para chegar a tamanhos menores.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Não é possível chegar a {target} com as dimensões completas de {width}×{height} px (o tamanho mínimo de qualidade é {bytes}). Ative "Permitir redimensionamento de dimensões" para reduzir mais as dimensões.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Não foi possível alcançar sem problemas o objetivo solicitado de {target}. A menor saída codificada honesta é {bytes} ({width}×{height} px, qualidade de {quality}%). Tente um tamanho de objetivo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Não foi possível alcançar sem problemas o objetivo solicitado de {target}. A menor saída codificada honesta é {bytes} ({width}×{height} px, qualidade de {quality}%). Tente um tamanho de objetivo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compressão de objetivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compactada ({bytes})', // afterLabel `Compressed ({bytes})`
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    maxSuffix: '({size} máx.)', // '({formatBytes(effectiveTargetBytes)} max)'
    targetNumberAria: 'Número do tamanho de arquivo alvo', // aria-label 'Target file size number'
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'Solte imagens para comprimir para menos de {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Solte imagens para comprimir para menos de {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Falha ao comprimir para o tamanho de objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Arquivo de imagem corrompido ou ilegível.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Tamanho máximo de arquivo de objetivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)'
    needDifferentTarget: 'Precisa de um objetivo diferente em KB?', // 'Need a different target KB?'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Permitir redimensionamento inteligente de dimensões se a redução de qualidade por si só não couber em {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não consegue chegar a {target} sem problemas', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não consegue chegar a {target} sem problemas', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimir para {target}', // 'Compress to {target}'
    optimizing: 'Otimizando…', // 'Optimizing...'
    clear: 'Limpar', // 'Clear'
    losslessPngSelected: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para chegar a limites estritos em KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para chegar a limites estritos em KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Resumo de compressão de objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} de {total} {images} cumpriram o objetivo de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'imagem', // 'image'
    imagePlural: 'imagens', // 'images'
    summaryMissed: ' · {missed} não couberam honestamente (detalhes abaixo)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total economizado: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total economizado: {bytes} (cresceu {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(cresceu {grew})', // '(grew by {grew})'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Saída', // 'Output' (metric label)
    metricSpaceSaved: 'Espaço economizado', // 'Space Saved' (metric label)
    metricReduction: 'Redução', // 'Reduction' (metric label)
    metricSizeChange: 'Mudança de tamanho', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Saída', // 'Output' (metric label)
    columnSpaceSaved: 'Espaço economizado', // 'Space Saved' (metric label)
    columnReduction: 'Redução', // 'Reduction' (metric label)
    columnSizeChange: 'Mudança de tamanho', // 'Size Change' (metric label)
    underTarget: 'Menos de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objetivo não alcançado — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Cresceu {bytes}: a recodificação é maior do que o original', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP ou JPG costuma ser menor para PNGs com aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP ou JPG costuma ser menor para PNGs com aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Manter original', // 'Keep original'
    keptOriginalNote: 'O arquivo original foi mantido porque a recodificação o deixou maior.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'O PNG sem perda foi convertido automaticamente para {format} para conservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'O PNG sem perda foi convertido automaticamente para {format} para conservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparência conservada)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'O arquivo original já estava abaixo de {target}, e a recodificação o fez crescer {bytes}. Use "Manter original" ou mude para WebP/JPG para uma saída menor.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'O arquivo original já estava abaixo de {target}; foi exportado sem problemas com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'O arquivo original já estava abaixo de {target}; foi exportado sem problemas com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objetivo cumprido com resolução completa de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objetivo cumprido ao dimensionar para {width}×{height} px ({percent}%) com {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sem perda', // 'lossless PNG'
    qualityPercent: 'qualidade de {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Não é possível chegar a {target} com PNG sem perda (mínimo alcançável: {bytes} a {width}×{height} px). Mude o formato de saída para JPG ou WebP para chegar a tamanhos menores.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Não é possível chegar a {target} com as dimensões completas de {width}×{height} px (o tamanho mínimo de qualidade é {bytes}). Ative "Permitir redimensionamento de dimensões" para reduzir mais as dimensões.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Não foi possível alcançar sem problemas o objetivo solicitado de {target}. A menor saída codificada honesta é {bytes} ({width}×{height} px, qualidade de {quality}%). Tente um tamanho de objetivo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Não foi possível alcançar sem problemas o objetivo solicitado de {target}. A menor saída codificada honesta é {bytes} ({width}×{height} px, qualidade de {quality}%). Tente um tamanho de objetivo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compressão de objetivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compactada ({bytes})', // afterLabel `Compressed ({bytes})`
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    maxSuffix: '({size} máx.)', // '({formatBytes(effectiveTargetBytes)} max)'
    targetNumberAria: 'Número do tamanho de arquivo alvo', // aria-label 'Target file size number'
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'Solte imagens para comprimir para menos de {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Solte imagens para comprimir para menos de {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Falha ao comprimir para o tamanho de objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Arquivo de imagem corrompido ou ilegível.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Tamanho máximo de arquivo de objetivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)'
    needDifferentTarget: 'Precisa de um objetivo diferente em KB?', // 'Need a different target KB?'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Permitir redimensionamento inteligente de dimensões se a redução de qualidade por si só não couber em {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não consegue chegar a {target} sem problemas', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não consegue chegar a {target} sem problemas', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimir para {target}', // 'Compress to {target}'
    optimizing: 'Otimizando…', // 'Optimizing...'
    clear: 'Limpar', // 'Clear'
    losslessPngSelected: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para chegar a limites estritos em KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para chegar a limites estritos em KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Resumo de compressão de objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} de {total} {images} cumpriram o objetivo de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'imagem', // 'image'
    imagePlural: 'imagens', // 'images'
    summaryMissed: ' · {missed} não couberam honestamente (detalhes abaixo)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total economizado: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total economizado: {bytes} (cresceu {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(cresceu {grew})', // '(grew by {grew})'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Saída', // 'Output' (metric label)
    metricSpaceSaved: 'Espaço economizado', // 'Space Saved' (metric label)
    metricReduction: 'Redução', // 'Reduction' (metric label)
    metricSizeChange: 'Mudança de tamanho', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Saída', // 'Output' (metric label)
    columnSpaceSaved: 'Espaço economizado', // 'Space Saved' (metric label)
    columnReduction: 'Redução', // 'Reduction' (metric label)
    columnSizeChange: 'Mudança de tamanho', // 'Size Change' (metric label)
    underTarget: 'Menos de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objetivo não alcançado — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Cresceu {bytes}: a recodificação é maior do que o original', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP ou JPG costuma ser menor para PNGs com aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP ou JPG costuma ser menor para PNGs com aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Manter original', // 'Keep original'
    keptOriginalNote: 'O arquivo original foi mantido porque a recodificação o deixou maior.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'O PNG sem perda foi convertido automaticamente para {format} para conservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'O PNG sem perda foi convertido automaticamente para {format} para conservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparência conservada)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'O arquivo original já estava abaixo de {target}, e a recodificação o fez crescer {bytes}. Use "Manter original" ou mude para WebP/JPG para uma saída menor.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'O arquivo original já estava abaixo de {target}; foi exportado sem problemas com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'O arquivo original já estava abaixo de {target}; foi exportado sem problemas com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objetivo cumprido com resolução completa de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objetivo cumprido ao dimensionar para {width}×{height} px ({percent}%) com {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sem perda', // 'lossless PNG'
    qualityPercent: 'qualidade de {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Não é possível chegar a {target} com PNG sem perda (mínimo alcançável: {bytes} a {width}×{height} px). Mude o formato de saída para JPG ou WebP para chegar a tamanhos menores.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Não é possível chegar a {target} com as dimensões completas de {width}×{height} px (o tamanho mínimo de qualidade é {bytes}). Ative "Permitir redimensionamento de dimensões" para reduzir mais as dimensões.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Não foi possível alcançar sem problemas o objetivo solicitado de {target}. A menor saída codificada honesta é {bytes} ({width}×{height} px, qualidade de {quality}%). Tente um tamanho de objetivo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Não foi possível alcançar sem problemas o objetivo solicitado de {target}. A menor saída codificada honesta é {bytes} ({width}×{height} px, qualidade de {quality}%). Tente um tamanho de objetivo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compressão de objetivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compactada ({bytes})', // afterLabel `Compressed ({bytes})`
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    maxSuffix: '({size} máx.)', // '({formatBytes(effectiveTargetBytes)} max)'
    targetNumberAria: 'Número do tamanho de arquivo alvo', // aria-label 'Target file size number'
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'Solte imagens para comprimir para menos de {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Solte imagens para comprimir para menos de {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Falha ao comprimir para o tamanho de objetivo.', // 'Target compression failed.'
    errorCorruptedFile: 'Arquivo de imagem corrompido ou ilegível.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Tamanho máximo de arquivo de objetivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)'
    needDifferentTarget: 'Precisa de um objetivo diferente em KB?', // 'Need a different target KB?'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Permitir redimensionamento inteligente de dimensões se a redução de qualidade por si só não couber em {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não consegue chegar a {target} sem problemas', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não consegue chegar a {target} sem problemas', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimir para {target}', // 'Compress to {target}'
    optimizing: 'Otimizando…', // 'Optimizing...'
    clear: 'Limpar', // 'Clear'
    losslessPngSelected: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para chegar a limites estritos em KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para chegar a limites estritos em KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Resumo de compressão de objetivo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} de {total} {images} cumpriram o objetivo de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'imagem', // 'image'
    imagePlural: 'imagens', // 'images'
    summaryMissed: ' · {missed} não couberam honestamente (detalhes abaixo)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Total economizado: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total economizado: {bytes} (cresceu {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(cresceu {grew})', // '(grew by {grew})'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Saída', // 'Output' (metric label)
    metricSpaceSaved: 'Espaço economizado', // 'Space Saved' (metric label)
    metricReduction: 'Redução', // 'Reduction' (metric label)
    metricSizeChange: 'Mudança de tamanho', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Saída', // 'Output' (metric label)
    columnSpaceSaved: 'Espaço economizado', // 'Space Saved' (metric label)
    columnReduction: 'Redução', // 'Reduction' (metric label)
    columnSizeChange: 'Mudança de tamanho', // 'Size Change' (metric label)
    underTarget: 'Menos de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objetivo não alcançado — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Cresceu {bytes}: a recodificação é maior do que o original', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP ou JPG costuma ser menor para PNGs com aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP ou JPG costuma ser menor para PNGs com aspecto de foto.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Manter original', // 'Keep original'
    keptOriginalNote: 'O arquivo original foi mantido porque a recodificação o deixou maior.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'O PNG sem perda foi convertido automaticamente para {format} para conservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'O PNG sem perda foi convertido automaticamente para {format} para conservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (transparência conservada)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'O arquivo original já estava abaixo de {target}, e a recodificação o fez crescer {bytes}. Use "Manter original" ou mude para WebP/JPG para uma saída menor.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'O arquivo original já estava abaixo de {target}; foi exportado sem problemas com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'O arquivo original já estava abaixo de {target}; foi exportado sem problemas com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objetivo cumprido com resolução completa de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objetivo cumprido ao dimensionar para {width}×{height} px ({percent}%) com {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sem perda', // 'lossless PNG'
    qualityPercent: 'qualidade de {quality}%', // '{quality}% quality'
    statusCannotPng:
      'Não é possível chegar a {target} com PNG sem perda (mínimo alcançável: {bytes} a {width}×{height} px). Mude o formato de saída para JPG ou WebP para chegar a tamanhos menores.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Não é possível chegar a {target} com as dimensões completas de {width}×{height} px (o tamanho mínimo de qualidade é {bytes}). Ative "Permitir redimensionamento de dimensões" para reduzir mais as dimensões.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Não foi possível alcançar sem problemas o objetivo solicitado de {target}. A menor saída codificada honesta é {bytes} ({width}×{height} px, qualidade de {quality}%). Tente um tamanho de objetivo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Não foi possível alcançar sem problemas o objetivo solicitado de {target}. A menor saída codificada honesta é {bytes} ({width}×{height} px, qualidade de {quality}%). Tente um tamanho de objetivo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compressão de objetivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compactada ({bytes})', // afterLabel `Compressed ({bytes})`
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    maxSuffix: '({size} máx.)', // '({formatBytes(effectiveTargetBytes)} max)'
    targetNumberAria: 'Número do tamanho de arquivo alvo', // aria-label 'Target file size number'
  },
  '/bulk-image-compressor': {
    uploadTitle: 'Solte dezenas de imagens para compressão em lote', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'Falha ao comprimir.', // 'Compression failed.'
    errorCorruptedFile: 'Arquivo de imagem corrompido ou ilegível.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'Perfis rápidos de lote:', // 'Quick Batch Profiles:'
    profileWebFast: 'Web Rápido (WebP 75%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'E-mail / Compartilhar (JPG 65%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'Alta Fidelidade (85%)', // 'High Fidelity (85%)'
    compressingBatch: 'Compactando lote localmente…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared i18n-pt.ts dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated in Batch 1.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: 'Solte imagens para comprimir abaixo de {target}', // `Drop images to compress under ${targetLabel}`
    uploadTitle: 'Solte imagens para comprimir abaixo de {target}', // 'Drop images to compress under {target}' — fallback key in TargetSizeCompressorTool
    targetMaxFileSize: 'Tamanho máximo de arquivo alvo', // 'Target Maximum File Size'
    targetNumberAria: 'Número do tamanho de arquivo alvo', // aria-label 'Target file size number'
    maxSuffix: '({size} máx.)', // '({formatBytes(effectiveTargetBytes)} max)'
    targetMaxSuffix: '({bytes} máx.)', // '({bytes} max)' — fallback key in TargetSizeCompressorTool
    needDifferentTarget: 'Precisa de outro alvo em KB?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged (format name)
    formatPng: 'PNG', // 'PNG' — unchanged (format name)
    allowDownscale: 'Permitir o redimensionamento inteligente de dimensões se só baixar a qualidade não couber em {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'Converter automaticamente PNGs grandes para WebP/JPG quando o PNG sem perda não chegar a {target} de forma limpa', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:'
    transparentPngMatte: 'Cor fosca para PNG transparente:', // 'Transparent PNG matte color:' — fallback key in TargetSizeCompressorTool
    losslessPngTitle: 'PNG sem perda selecionado:', // 'Lossless PNG selected:'
    losslessPngSelected: 'PNG sem perda selecionado:', // 'Lossless PNG selected:' — fallback key in TargetSizeCompressorTool
    losslessPngNote: 'O PNG ignora os controles de qualidade, então reduzir o tamanho depende estritamente de diminuir as dimensões em pixels. Para fotos grandes, escolha JPG ou WebP para atingir limites rígidos de KB mantendo a nitidez.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: 'Comprimir para {target}', // 'Compress to {targetLabel}'
    optimizing: 'Otimizando…', // 'Optimizing...'
    clear: 'Limpar', // 'Clear'
    targetSummary: 'Resumo da compressão alvo · Meta ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{achieved} de {total} {images} atingiram o alvo de {target}', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'imagem', // 'image'
    imagePlural: 'imagens', // 'images'
    summaryMissed: '· {missed} não conseguiram caber com honestidade (detalhes abaixo)', // '{missed} could not honestly fit (details below)'
    totalSaved: 'Total economizado: {saved}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(cresceu {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    underTarget: 'Abaixo de {target} ({size})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'Alvo não atingido — {size}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'Original', // 'Original'
    columnOutput: 'Saída', // 'Output'
    columnSpaceSaved: 'Espaço economizado', // 'Space Saved'
    columnReduction: 'Redução', // 'Reduction'
    columnSizeChange: 'Mudança de tamanho', // 'Size Change'
    metricOriginal: 'Original', // 'Original' — fallback key in TargetSizeCompressorTool
    metricOutput: 'Saída', // 'Output' — fallback key in TargetSizeCompressorTool
    metricSpaceSaved: 'Espaço economizado', // 'Space Saved' — fallback key in TargetSizeCompressorTool
    metricReduction: 'Redução', // 'Reduction' — fallback key in TargetSizeCompressorTool
    metricSizeChange: 'Mudança de tamanho', // 'Size Change' — fallback key in TargetSizeCompressorTool
    grewBy: 'Cresceu {amount}: a recodificação é maior que o original.', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'WebP ou JPG costuma ser menor para PNGs fotográficos.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngNote: 'WebP ou JPG costuma ser menor para PNGs fotográficos.', // 'WebP or JPG is usually smaller for photo-like PNGs.' — fallback key in TargetSizeCompressorTool
    keepOriginal: 'Manter original', // 'Keep original'
    keptOriginalNote: 'O arquivo original foi mantido porque a recodificação o deixou maior.', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'O arquivo original já estava abaixo de {target}; exportado de forma limpa com qualidade de {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnderGrew: 'O arquivo original já estava abaixo de {target}, e a recodificação o fez crescer {bytes}. Use "Manter original" ou mude para WebP/JPG para uma saída menor.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusMetFull: 'Alvo atingido em resolução total de {width}×{height} px ({quality}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: 'Alvo atingido ao redimensionar para {width}×{height} px (escala de {scale}%) com {quality}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    statusCannotPng: 'Não dá para chegar a {target} com PNG sem perda (mínimo alcançável: {size} em {width}×{height} px). Mude o formato de saída para JPG ou WebP para chegar a tamanhos menores.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'Não dá para chegar a {target} com dimensões completas de {width}×{height} px (o tamanho mínimo com qualidade é {size}). Ative "Permitir redimensionamento de dimensões" para reduzir mais as dimensões.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly: 'O alvo solicitado de {target} não pôde ser atingido de forma limpa. A menor saída codificada honesta é {size} ({width}×{height} px, qualidade de {quality}%). Tente um alvo maior.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    switchedFormatNote: 'PNG sem perda convertido automaticamente para {format} para preservar maior resolução abaixo de {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    errorTargetFailed: 'Falha na compressão alvo.', // 'Target compression failed.'
    errorCorruptedFile: 'Arquivo de imagem corrompido ou ilegível.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Compressão alvo ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'Comprimida ({size})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    qualityPercent: 'qualidade de {quality}%', // '{quality}% quality'
  },
  '/bulk-image-resizer': {
    uploadTitle: 'Solte várias imagens para redimensionar em lote', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'Estratégia de redimensionamento em lote', // 'Batch Resize Strategy'
    strategyBounding: 'Ajuste máximo L × A', // 'Fit Max W × H'
    strategyWidth: 'Largura uniforme', // 'Uniform Width'
    strategyExact: 'L × A exato', // 'Exact W × H'
    strategyPercentage: 'Porcentagem (%)', // 'Percentage (%)'
    outputFormat: 'Formato de saída', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'Redimensionar todas as imagens:', // 'Scale All Images:'
    maxWidth: 'Largura máx. (px)', // 'Max Width (px)'
    targetWidth: 'Largura alvo (px)', // 'Target Width (px)'
    exactWidth: 'Largura exata (px)', // 'Exact Width (px)'
    maxHeight: 'Altura máx. (px)', // 'Max Height (px)'
    exactHeight: 'Altura exata (px)', // 'Exact Height (px)'
    doNotEnlarge: 'Não ampliar imagens menores', // 'Do not enlarge smaller images'
    fitMode: 'Modo de ajuste', // 'Fit Mode'
    fitContain: 'Conter', // 'Contain'
    fitCover: 'Cobrir', // 'Cover'
    fitStretch: 'Esticar', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'Blog 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'E-commerce 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'Miniatura 600px', // 'Thumbnail 600px'
    quality: 'Qualidade:', // 'Quality:'
    matteBg: 'Fundo fosco:', // 'Matte BG:'
    resizingProgress: 'Redimensionando ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'Redimensionar em lote ({count})', // 'Bulk Resize ({items.length})'
    clear: 'Limpar', // 'Clear'
    bulkResizeComplete: 'Redimensionamento em lote concluído', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} imagem redimensionada e pronta', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} imagens redimensionadas e prontas', // '{count} images resized and ready'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'Falha no redimensionamento em lote.', // 'Batch resize failed.'
    errorCorruptedFile: 'Arquivo de imagem corrompido ou ilegível.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Comparação de redimensionamento em lote', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'Redimensionada (depois)', // 'Resized (After)'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'Solte várias imagens para converter formatos em lote', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'Converter lote para o formato', // 'Convert Batch To Format'
    formatWebp: 'WebP (o mais leve para web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (universal)', // 'JPG (Universal)'
    formatPng: 'PNG (sem perda e com transparência)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'Sufixo de nome de arquivo opcional', // 'Optional Filename Suffix'
    placeholderSuffix: 'ex.: _web', // placeholder 'e.g. _web'
    transparentFill: 'Preenchimento transparente', // 'Transparent Fill'
    qualityLosslessPng: 'Qualidade (PNG sem perda)', // 'Quality (Lossless PNG)'
    qualityPercent: 'Qualidade ({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: 'Convertendo ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'Converter tudo ({count})', // 'Convert All ({items.length})'
    clear: 'Limpar', // 'Clear'
    bulkConversionSummary: 'Resumo da conversão em lote', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} arquivos convertidos para {format} · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    convertedTo: 'Convertido para {ext}', // 'Converted to {ext}'
    errorConversionFailed: 'Falha na conversão em lote.', // 'Batch conversion failed.'
    errorUnsupportedFile: 'Arquivo de imagem não compatível ou corrompido.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'Conversão de formato em lote', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'Convertida (depois)', // 'Converted (After)'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Solte arquivos web para otimizar para Core Web Vitals', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'Modelos de desempenho web', // 'Web Performance Presets'
    presetHero: 'Banner / Topo', // 'Hero / Banner'
    presetHeroDesc: 'Máx. 1600 px · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: 'Produto de e-commerce', // 'E-Commerce Product'
    presetProductDesc: 'Máx. 1200 px · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: 'Cartão / Miniatura', // 'Card / Thumbnail'
    presetThumbDesc: 'Máx. 640 px · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: 'OG social / E-mail', // 'Social OG / Email'
    presetOgDesc: 'Máx. 1200 px · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'Gráfico Retina 2×', // 'Retina 2× Graphic'
    presetRetinaDesc: 'Máx. 1920 px · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: 'Formato web', // 'Web Format'
    maxDimension: 'Dimensão máxima (lado maior)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'Manter dimensões originais', // 'Keep Original Dimensions'
    max1920: 'Máx. 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'Máx. 1600 px (Banner / Topo)', // 'Max 1600px (Hero / Banner)'
    max1200: 'Máx. 1200 px (Blog / Produto)', // 'Max 1200px (Blog / Product)'
    max800: 'Máx. 800 px (dentro do conteúdo)', // 'Max 800px (In-Content)'
    max640: 'Máx. 640 px (miniaturas)', // 'Max 640px (Thumbnails)'
    quality: 'Qualidade:', // 'Quality:'
    onlyDownscale: 'Só reduzir imagens maiores (os metadados EXIF e GPS são removidos automaticamente)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'Otimizando…', // 'Optimizing...'
    optimizeForWeb: 'Otimizar para web ({count})', // 'Optimize for Web ({items.length})'
    clear: 'Limpar', // 'Clear'
    webPerformanceSummary: 'Resumo de desempenho web', // 'Web Performance Summary'
    pageWeightSaved: '({percent}% mais leve · {saved} de peso de página economizado)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · cresceu {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    webReady: 'Pronto para web ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: 'Cresceu {amount} ({percent})', // 'Grew by {amount} ({percent})'
    copyImg: 'Copiar <img>', // 'Copy <img>'
    copiedHtml: 'HTML copiado', // 'Copied HTML'
    copyImgTitle: 'Copiar tag HTML img responsiva com largura e altura explícitas', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'Falha na otimização web.', // 'Web optimization failed.'
    errorCorruptedFile: 'Imagem corrompida ou não compatível.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'Comparação de otimização web', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'Pronta para web (depois)', // 'Web-Ready (After)'
    compare: 'Comparar', // 'Compare'
    download: 'Baixar', // 'Download'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'Solte um GIF animado para comprimir', // 'Drop an animated GIF to compress'
    decodingGif: 'Decodificando quadros de GIF animado localmente no seu navegador…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'quadro', // 'frame'
    framePlural: 'quadros', // 'frames'
    presetLight: 'Leve', // 'Light'
    presetBalanced: 'Equilibrado', // 'Balanced'
    presetMaxShrink: 'Redução máxima', // 'Max Shrink'
    colorPaletteLimit: 'Limite de cores da paleta', // 'Color Palette Limit'
    colorsCount: '{count} cores', // '{maxColors} colors'
    outputScale: 'Escala de saída', // 'Output Scale'
    scaleWithDims: '{percent}% ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'Otimização da taxa de quadros', // 'Frame Rate Optimization'
    keepAllFrames: 'Manter todos os quadros', // 'Keep All Frames'
    dropEvery2nd: 'Remover cada 2.º quadro (~50% menor)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'Manter 1 de cada 3 quadros', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'Comprimindo GIF ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'Comprimir GIF', // 'Compress GIF'
    reset: 'Redefinir', // 'Reset'
    originalGif: 'GIF original', // 'Original GIF'
    compressedGif: 'GIF comprimido', // 'Compressed GIF'
    sizeChange: 'Mudança de tamanho', // 'Size Change'
    sizeAndFrames: '{size} · {frames}q', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'Baixar GIF comprimido', // 'Download Compressed GIF'
    notSmallerNotice: 'Este GIF original já estava bem otimizado ou usa uma paleta de quadro completo maior que a entrada. Para diminuí-lo para menos de {size}, reduza a cor da paleta para 32–64 cores, baixe a escala de saída para 75% ou 50%, ou remova cada 2.º quadro.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'Comprimido em {percent}% ({saved} economizados) de forma limpa no seu navegador.', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'Original ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'Comprimido ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'GIF original', // alt 'Original GIF'
    altCompressedGif: 'GIF comprimido', // alt 'Compressed GIF'
    errorGifFailed: 'Falha na compressão de GIF.', // 'GIF compression failed.'
    errorDecodeFrames: 'Não foi possível decodificar os quadros do GIF.', // 'Could not decode GIF frames.'
    errorTooSmall: 'O arquivo é pequeno demais para ser um GIF válido.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'O arquivo selecionado não é uma animação GIF87a ou GIF89a válida.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'O GIF tem dimensões de tela 0×0 inválidas.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'Tabela de cores global do GIF truncada.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'Não foi possível decodificar nenhum quadro de imagem deste arquivo GIF.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: 'Não foi possível inicializar o contexto de canvas 2D.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'Solte fotos HEIC ou HEIF de iPhone para converter para JPG', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Decodifica fotos HEIC e HEIF da Apple localmente dentro do seu navegador com WebAssembly do lado do cliente (heic2any): as suas fotos nunca saem do seu dispositivo.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    outputQuality: 'Qualidade de saída JPG', // 'JPG Output Quality'
    outputQualityLabel: 'Qualidade de saída JPG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'qualidade de saída JPG', // `${targetLabel} output quality`
    smallerFile: 'Arquivo menor (20%)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85%)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalhe (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Saída PNG sem perda', // 'Lossless PNG Output'
    losslessPngEncoding: 'Codificação PNG sem perda', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Codificação PNG sem perda', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'O PNG preserva as bordas nítidas, o texto e a transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'O PNG preserva as bordas nítidas, o texto e a transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Cor fosca para fundo transparente', // 'Transparent Background Matte Color'
    matteColorLabel: 'Cor fosca para fundo transparente', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Cor de fundo fosca', // 'Matte background color'
    matteWhite: 'Branco', // 'White'
    matteBlack: 'Preto', // 'Black'
    matteLightGray: 'Cinza claro', // 'Light Gray'
    rasterExportScale: 'Escala de exportação raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplicador aplicado às dimensões intrínsecas do SVG (limitado a 8000px). Clique em Converter tudo de novo depois de mudar a escala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    converting: 'Convertendo…', // 'Converting...'
    clear: 'Limpar', // 'Clear'
    batchSummary: 'Resumo de lote de HEIC → JPG', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} convertidos · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Mudança', // 'Change'
    changeLabel: 'Mudança', // 'Change' — primary key in FormatConverterTool
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar JPG', // 'Download JPG'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'Não foi possível decodificar este arquivo HEIC/HEIF. Verifique se é uma foto HEIC válida de iPhone ou Apple.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: 'Não foi possível decodificar "{filename}". Verifique se é uma imagem HEIC válida.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: 'Não foi possível converter {name} para JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'Solte imagens JPG ou JPEG para converter para PNG sem perda', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    outputQuality: 'Qualidade de saída PNG', // 'PNG Output Quality'
    outputQualityLabel: 'Qualidade de saída PNG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'qualidade de saída PNG', // `${targetLabel} output quality`
    smallerFile: 'Arquivo menor (20%)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85%)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalhe (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Saída PNG sem perda', // 'Lossless PNG Output'
    losslessPngEncoding: 'Codificação PNG sem perda', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Codificação PNG sem perda', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'O PNG preserva as bordas nítidas, o texto e a transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'O PNG preserva as bordas nítidas, o texto e a transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Cor fosca para fundo transparente', // 'Transparent Background Matte Color'
    matteColorLabel: 'Cor fosca para fundo transparente', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Cor de fundo fosca', // 'Matte background color'
    matteWhite: 'Branco', // 'White'
    matteBlack: 'Preto', // 'Black'
    matteLightGray: 'Cinza claro', // 'Light Gray'
    rasterExportScale: 'Escala de exportação raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplicador aplicado às dimensões intrínsecas do SVG (limitado a 8000px). Clique em Converter tudo de novo depois de mudar a escala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    converting: 'Convertendo…', // 'Converting...'
    clear: 'Limpar', // 'Clear'
    batchSummary: 'Resumo de lote de JPG → PNG', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} convertidos · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Mudança', // 'Change'
    changeLabel: 'Mudança', // 'Change' — primary key in FormatConverterTool
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar PNG', // 'Download PNG'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'Não foi possível decodificar "{filename}". Verifique se é uma imagem JPG válida.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: 'Não foi possível converter {name} para PNG.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'Solte arquivos PNG para converter para JPGs menores', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    outputQuality: 'Qualidade de saída JPG', // 'JPG Output Quality'
    outputQualityLabel: 'Qualidade de saída JPG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'qualidade de saída JPG', // `${targetLabel} output quality`
    smallerFile: 'Arquivo menor (20%)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85%)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalhe (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Saída PNG sem perda', // 'Lossless PNG Output'
    losslessPngEncoding: 'Codificação PNG sem perda', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Codificação PNG sem perda', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'O PNG preserva as bordas nítidas, o texto e a transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'O PNG preserva as bordas nítidas, o texto e a transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Cor fosca para fundo transparente', // 'Transparent Background Matte Color'
    matteColorLabel: 'Cor fosca para fundo transparente', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Cor de fundo fosca', // 'Matte background color'
    matteWhite: 'Branco', // 'White'
    matteBlack: 'Preto', // 'Black'
    matteLightGray: 'Cinza claro', // 'Light Gray'
    matteNote: 'O JPG não aceita transparência; as áreas transparentes são preenchidas de forma limpa com esta cor.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    rasterExportScale: 'Escala de exportação raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplicador aplicado às dimensões intrínsecas do SVG (limitado a 8000px). Clique em Converter tudo de novo depois de mudar a escala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    converting: 'Convertendo…', // 'Converting...'
    clear: 'Limpar', // 'Clear'
    batchSummary: 'Resumo de lote de PNG → JPG', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} convertidos · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Mudança', // 'Change'
    changeLabel: 'Mudança', // 'Change' — primary key in FormatConverterTool
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar JPG', // 'Download JPG'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'Não foi possível decodificar "{filename}". Verifique se é uma imagem PNG válida.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: 'Não foi possível converter {name} para JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'Solte imagens JPG para converter para WebP leve', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualidade de saída WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'qualidade de saída WebP', // aria-label 'WebP output quality'
    smallerFile: 'Arquivo menor (20%)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85%)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalhe (100%)', // 'Max detail (100%)'
    batchSummary: 'Resumo do lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Mudança', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar WebP', // 'Download WebP'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    converting: 'Convertendo…', // 'Converting...'
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    clear: 'Limpar', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Não foi possível converter {name} para WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Não foi possível decodificar "{name}". Verifique se é uma imagem JPG válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'Solte imagens WebP para converter para JPG universal', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualidade de saída JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualidade de saída JPG', // aria-label 'JPG output quality'
    smallerFile: 'Arquivo menor (20%)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85%)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalhe (100%)', // 'Max detail (100%)'
    matteColorLabel: 'Cor de fundo para transparência', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Cor de fundo', // aria-label 'Matte background color'
    matteWhite: 'Branco', // 'White'
    matteBlack: 'Preto', // 'Black'
    matteLightGray: 'Cinza claro', // 'Light Gray'
    matteHint: 'O JPG não suporta transparência; as áreas transparentes são preenchidas de forma limpa com esta cor.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Resumo do lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Mudança', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar JPG', // 'Download JPG'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    converting: 'Convertendo…', // 'Converting...'
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    clear: 'Limpar', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Não foi possível converter {name} para JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Não foi possível decodificar "{name}". Verifique se é uma imagem WebP válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
    matteNote: 'O JPG não aceita transparência; as áreas transparentes são preenchidas de forma limpa com esta cor.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
  },
  '/png-to-webp': {
    uploadTitle: 'Solte arquivos PNG para converter para WebP transparente', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualidade de saída WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'qualidade de saída WebP', // aria-label 'WebP output quality'
    smallerFile: 'Arquivo menor (20%)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85%)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalhe (100%)', // 'Max detail (100%)'
    batchSummary: 'Resumo do lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Mudança', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar WebP', // 'Download WebP'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    converting: 'Convertendo…', // 'Converting...'
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    clear: 'Limpar', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Não foi possível converter {name} para WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Não foi possível decodificar "{name}". Verifique se é uma imagem PNG válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'Solte arquivos WebP para converter para PNG sem perda', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Saída PNG sem perda', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Codificação PNG sem perda', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'O PNG preserva bordas nítidas, texto e transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: 'Resumo do lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Mudança', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar PNG', // 'Download PNG'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    converting: 'Convertendo…', // 'Converting...'
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    clear: 'Limpar', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Não foi possível converter {name} para PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Não foi possível decodificar "{name}". Verifique se é uma imagem WebP válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
    losslessPngEncoding: 'Codificação PNG sem perda', // 'Lossless PNG Encoding'
    losslessPngNote: 'O PNG preserva as bordas nítidas, o texto e a transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
  },
  '/svg-to-png': {
    uploadTitle: 'Solte arquivos vetoriais SVG para rasterizar para PNG', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'Rasteriza gráficos SVG embutidos localmente com HTML5 Canvas e preserva os fundos transparentes. Limitação: URLs de <image> externas, folhas de estilo CSS externas/fontes da web ou scripts referenciados dentro de um SVG podem não ser renderizados na exportação independente do Canvas.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Saída PNG sem perda', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Codificação PNG sem perda', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'O PNG preserva bordas nítidas, texto e transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'Escala de exportação de rasterização', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplicador aplicado às dimensões intrínsecas do SVG (limite de 8000 px). Clique em Converter tudo de novo depois de mudar a escala.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: 'Resumo do lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Mudança', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar PNG', // 'Download PNG'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    converting: 'Convertendo…', // 'Converting...'
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    clear: 'Limpar', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Não foi possível converter {name} para PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Não foi possível rasterizar este SVG. Verifique se o arquivo é uma marcação SVG XML válida, sem erros de sintaxe.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
    losslessPngEncoding: 'Codificação PNG sem perda', // 'Lossless PNG Encoding'
    losslessPngNote: 'O PNG preserva as bordas nítidas, o texto e a transparência alfa sem artefatos de compressão com perda.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'Solte imagens AVIF para converter para JPG universal', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'Decodifica imagens AVIF localmente usando o decodificador AVIF nativo do seu navegador (compatível com Chrome, Edge, Firefox e Safari modernos) e exporta arquivos JPG padrão.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualidade de saída JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualidade de saída JPG', // aria-label 'JPG output quality'
    smallerFile: 'Arquivo menor (20%)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85%)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalhe (100%)', // 'Max detail (100%)'
    matteColorLabel: 'Cor de fundo para transparência', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Cor de fundo', // aria-label 'Matte background color'
    matteWhite: 'Branco', // 'White'
    matteBlack: 'Preto', // 'Black'
    matteLightGray: 'Cinza claro', // 'Light Gray'
    matteHint: 'O JPG não suporta transparência; as áreas transparentes são preenchidas de forma limpa com esta cor.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Resumo do lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Mudança', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar JPG', // 'Download JPG'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    converting: 'Convertendo…', // 'Converting...'
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    clear: 'Limpar', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Não foi possível converter {name} para JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Seu navegador não conseguiu decodificar esta imagem AVIF. Verifique se o arquivo é uma imagem .avif válida e tente um navegador moderno Chrome, Firefox, Edge ou Safari.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
    matteNote: 'O JPG não aceita transparência; as áreas transparentes são preenchidas de forma limpa com esta cor.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'Solte bitmaps BMP sem compressão para converter para JPG compacto', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'Fluxo de conversão:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualidade de saída JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualidade de saída JPG', // aria-label 'JPG output quality'
    smallerFile: 'Arquivo menor (20%)', // 'Smaller file (20%)'
    balanced: 'Equilibrado (85%)', // 'Balanced (85%)'
    maxDetail: 'Máximo detalhe (100%)', // 'Max detail (100%)'
    batchSummary: 'Resumo do lote {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'arquivo', // 'file'
    filePlural: 'arquivos', // 'files'
    filesConvertedSuffix: 'convertidos', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Criando ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Baixar tudo (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Mudança', // 'Change'
    compare: 'Comparar', // 'Compare'
    downloadTarget: 'Baixar JPG', // 'Download JPG'
    removeImage: 'Remover {name}', // aria-label `Remove ${item.name}`
    converting: 'Convertendo…', // 'Converting...'
    reconvertAll: 'Converter tudo de novo', // 'Re-convert All'
    clear: 'Limpar', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Não foi possível converter {name} para JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Não foi possível decodificar "{name}". Verifique se é uma imagem BMP válida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: 'Solte uma foto para remover o fundo com IA', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: 'Carregando modelo de IA no navegador (isnet_quint8)', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: 'Cache do modelo', // 'Model Cache'
    progressWasm: 'Carregando o mecanismo de IA WebAssembly…', // 'Loading WebAssembly AI runtime...'
    progressModel: 'Baixando o modelo de IA de remoção de fundo (~35 MB, guardado em cache para uso futuro)…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: 'Removendo o fundo localmente no seu navegador…', // 'Removing background locally in your browser...'
    progressPreparing: 'Preparando o modelo de IA no navegador…', // 'Preparing in-browser AI model...'
    progressInitLibrary: 'Carregando a biblioteca de IA de remoção de fundo…', // 'Loading AI background removal library...'
    progressInitModule: 'Inicializando o módulo de IA de remoção de fundo…', // 'Initializing AI background removal module...'
    errorModelInit: 'Não foi possível inicializar o modelo de IA de fundo: {message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: 'Não foi possível inicializar o modelo de IA de fundo neste navegador.', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: 'Não foi possível decodificar a saída PNG transparente.', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: 'A remoção de fundo falhou neste navegador. Tente outra imagem ou recarregue a página.', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: 'Pré-visualização de antes e depois', // 'Before & After Preview'
    splitCompare: 'Comparação dividida', // 'Split Compare'
    newImage: 'Nova imagem', // 'New Image'
    originalLabel: 'Original', // 'Original'
    transparentCutout: 'Recorte transparente (PNG)', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: 'Pré-visualização de fundo sólido', // 'Solid Background Preview'
    waitingForResult: 'Aguardando o resultado…', // 'Waiting for result...'
    processingLocally: 'Processando localmente…', // 'Processing locally...'
    cutoutStatus: 'Status do recorte', // 'Cutout Status'
    ready: 'Pronto', // 'Ready'
    backgroundFillOption: 'Opção de preenchimento de fundo', // 'Background Fill Option'
    bgTransparent: 'Transparente', // 'Transparent'
    bgWhite: 'Branco', // 'White'
    bgBlack: 'Preto', // 'Black'
    bgCustom: 'Personalizado', // 'Custom'
    customBackgroundColor: 'Cor de fundo personalizada', // 'Custom Background Color'
    downloadTransparentPng: 'Baixar PNG transparente', // 'Download Transparent PNG'
    downloadWithWhite: 'Baixar com fundo branco', // 'Download with White Background'
    downloadWithBlack: 'Baixar com fundo preto', // 'Download with Black Background'
    downloadWithCustom: 'Baixar com fundo {color}', // 'Download with {color} Background'
    rerunRemoval: 'Executar a remoção de novo', // 'Re-run Removal'
    comparisonTitlePrefix: 'Comparação de remoção de fundo', // 'Background Removal Comparison'
    comparisonAfterTransparent: 'Recorte (PNG transparente)', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: 'Recorte (fundo sólido)', // 'Cutout (Solid BG)'
    altOriginal: 'Original {name}', // alt `Original ${sourceFile.name}`
    altCutout: 'Fundo removido {name}', // alt `Background removed ${sourceFile.name}`
  },
};
