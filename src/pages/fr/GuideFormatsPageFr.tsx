import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideFormatsPageFrProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Ouvrez CompressMyPic',
    text: 'Rendez-vous sur compressmypic.online dans votre navigateur. Rien à installer, aucun compte à créer et aucun fichier n’est jamais envoyé vers un serveur.',
  },
  {
    title: 'Envoyez votre image',
    text: 'Glissez-déposez votre image, ou touchez « Parcourir les fichiers » pour la choisir. Les fichiers JPG, PNG et WebP sont pris en charge, jusqu’à 20 Mo par image.',
  },
  {
    title: 'Décidez : conservez le format ou convertissez-le',
    text: 'Choisissez « Original » pour conserver le format que votre image possède déjà, ou choisissez JPG, PNG ou WebP en sortie. Utilisez le guide ci-dessous pour décider : JPG pour les photos, PNG lorsque vous avez besoin de transparence, WebP lorsque vous voulez le fichier le plus petit pour un site web.',
  },
  {
    title: 'Choisissez un préréglage de qualité',
    text: 'Commencez par le préréglage Équilibré (environ 70 %). Pour une photo que vous voulez parfaite, utilisez le préréglage Élevé ou une qualité de 85 à 90 %. Pour une petite image web, un réglage plus bas convient.',
  },
  {
    title: 'Vérifiez la taille en direct et comparez',
    text: 'Chaque image affiche sa taille d’origine et sa nouvelle taille compressée. Ouvrez la comparaison avant/après et zoomez : si vous ne voyez aucune différence, le réglage est le bon. Essayez de changer le format de sortie en WebP et observez de combien le fichier devient plus petit.',
  },
  {
    title: 'Téléchargez votre image',
    text: 'Téléchargez l’image individuellement, ou utilisez « Tout télécharger (ZIP) » lorsque vous avez converti plusieurs images à la fois. Votre fichier d’origine n’est jamais modifié : vous recevez une copie nouvelle et plus petite.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'Quelle est la différence entre JPG et PNG ?',
    answer: 'JPG est un format avec perte conçu pour les photos : il supprime certains détails pour créer des fichiers beaucoup plus petits et ne prend pas en charge la transparence. PNG est sans perte et prend en charge la transparence, donc il est parfait pour les logos et les graphiques, mais les photos en PNG sont plusieurs fois plus grandes que la même photo enregistrée en JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'WebP est-il meilleur que JPG ?',
    answer: 'En taille de fichier, oui : WebP est généralement 25 à 35 % plus petit que JPG à qualité similaire, et il prend aussi en charge la transparence. La seule raison de choisir JPG plutôt que WebP est la compatibilité : certains anciens logiciels et certaines applications gèrent encore mieux JPG, et WhatsApp affiche les photos JPG de façon plus fiable.',
  },
  {
    id: 'fmt-faq-3',
    question: 'WebP est-il meilleur que PNG ?',
    answer: 'En général, oui. WebP prend en charge la transparence comme PNG, mais crée des fichiers beaucoup plus petits, et il peut aussi faire de la compression avec perte comme JPG. PNG reste le choix le plus sûr lorsque vous avez besoin d’une qualité parfaite et sans perte pour un logo ou un graphique qui sera modifié de nouveau plus tard.',
  },
  {
    id: 'fmt-faq-4',
    question: 'PNG prend-il en charge la transparence et JPG non ?',
    answer: 'Exactement. PNG prend en charge un fond transparent (un canal alpha), c’est pourquoi les logos et les icônes sont souvent en PNG. JPG n’a aucune transparence : toute zone transparente d’un JPG devient une couleur unie, généralement du blanc, alors n’enregistrez jamais un logo à fond transparent en JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'Pourquoi les fichiers PNG sont-ils beaucoup plus grands que les JPG ?',
    answer: 'Parce que PNG est sans perte : il conserve chaque pixel de détail exactement, tandis que JPG supprime des détails que l’œil remarque à peine. Une photo d’appareil photo enregistrée en PNG peut être 5 à 10 fois plus grande que la même photo en JPG. C’est pourquoi les photos ne devraient presque jamais être en PNG.',
  },
  {
    id: 'fmt-faq-6',
    question: 'Quand dois-je utiliser JPG plutôt que WebP ?',
    answer: 'Utilisez JPG lorsque l’image s’ouvrira dans d’anciens logiciels, sera envoyée par WhatsApp ou par e-mail et que vous voulez un aperçu garanti, ou sera imprimée. WebP est meilleur pour les sites web, mais pour partager une photo avec quelqu’un, JPG reste le format le plus universel.',
  },
  {
    id: 'fmt-faq-7',
    question: 'Puis-je convertir un PNG en JPG ?',
    answer: 'Oui. Envoyez le PNG sur CompressMyPic, choisissez JPG comme format de sortie et téléchargez-le. N’oubliez pas que JPG n’a pas de transparence : si votre PNG a un fond transparent, choisissez d’abord une couleur de fond, car la zone transparente deviendra blanche et unie dans le cas contraire.',
  },
  {
    id: 'fmt-faq-8',
    question: 'Puis-je convertir un JPG en WebP ?',
    answer: 'Oui. Envoyez le JPG, choisissez WebP en sortie et téléchargez-le : le fichier est généralement 25 à 35 % plus petit à qualité visible égale. Vous pouvez convertir plusieurs JPG en WebP à la fois et les télécharger tous dans un ZIP.',
  },
  {
    id: 'fmt-faq-9',
    question: 'Convertir un JPG en PNG améliore-t-il la qualité ?',
    answer: 'Non. Convertir un JPG en PNG ne peut pas récupérer les détails que la compression JPG a déjà supprimés ; cela rend seulement le fichier beaucoup plus grand. La seule bonne raison de convertir un JPG en PNG est si vous devez modifier l’image de nouveau sans perdre davantage en qualité.',
  },
  {
    id: 'fmt-faq-10',
    question: 'Quel format utiliser pour un site web ?',
    answer: 'WebP d’abord et JPG en alternative. WebP vous donne les fichiers les plus petits, ce qui rend les pages plus rapides, et la vitesse des pages compte autant pour les visiteurs que pour Google. Utilisez PNG uniquement pour les images qui ont besoin de transparence, comme un logo, et JPG pour les photos si vous ne pouvez pas utiliser WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: 'Quel format est le meilleur pour un logo ?',
    answer: 'PNG si le logo a besoin d’un fond transparent, car JPG ne prend pas en charge la transparence. WebP prend aussi en charge la transparence et crée un fichier plus petit, donc c’est un bon choix pour un logo sur un site web. N’enregistrez jamais un logo en JPG si le fond doit rester transparent.',
  },
  {
    id: 'fmt-faq-12',
    question: 'Quel format est le meilleur pour les captures d’écran ?',
    answer: 'PNG ou WebP. Les captures d’écran ont des bords nets et des couleurs unies, que PNG et WebP gèrent bien. JPG rend flous les bords nets du texte. Pour obtenir le fichier de capture d’écran le plus petit, essayez la sortie WebP dans CompressMyPic : elle est généralement beaucoup plus petite que PNG sans aucune différence visible.',
  },
  {
    id: 'fmt-faq-13',
    question: 'Tous les navigateurs prennent-ils en charge WebP maintenant ?',
    answer: 'Oui, pratiquement tous. Chrome, Edge, Firefox, Safari et tous les navigateurs mobiles modernes prennent en charge WebP depuis des années. Seuls les navigateurs très anciens et certaines anciennes applications ne peuvent pas ouvrir WebP, et c’est la seule raison pour laquelle JPG reste utile.',
  },
  {
    id: 'fmt-faq-14',
    question: 'WhatsApp ou Instagram acceptent-ils WebP ?',
    answer: 'WhatsApp peut recevoir des fichiers WebP, mais ils peuvent ne pas s’afficher comme une photo normale, donc JPG est plus sûr pour partager des photos là-bas. Instagram accepte JPG et PNG pour les publications et convertit les envois de son côté. Pour partager sur les réseaux sociaux, restez avec JPG pour les photos.',
  },
  {
    id: 'fmt-faq-15',
    question: 'Convertir une photo en WebP perd-il en qualité ?',
    answer: 'Seulement autant que vous le choisissez. WebP utilise la même idée que JPG : un réglage de qualité qui échange un peu de détail contre un fichier plus petit. Avec une qualité de 80 à 90 %, une photo WebP paraît identique au JPG d’origine et le fichier est environ un tiers plus petit.',
  },
  {
    id: 'fmt-faq-16',
    question: 'JPG et JPEG sont-ils le même format ?',
    answer: 'Il n’y a aucune différence : JPG et JPEG sont le même format. JPEG est le nom complet (Joint Photographic Experts Group) et JPG est l’extension courte du fichier. Un fichier nommé photo.jpg et un fichier nommé photo.jpeg sont le même type d’image.',
  },
  {
    id: 'fmt-faq-17',
    question: 'Dois-je conserver le format d’origine ou le convertir ?',
    answer: 'Conservez l’original si la taille vous convient : c’est l’option la plus simple et rien n’est perdu. Convertissez lorsque vous avez une raison : de JPG à WebP pour réduire une photo de site web, de PNG à JPG pour réduire une photo qui n’a pas besoin de transparence, ou de PNG à WebP pour réduire un logo.',
  },
  {
    id: 'fmt-faq-18',
    question: 'Quel format donne le fichier le plus petit ?',
    answer: 'WebP, dans presque tous les cas. Pour les photos, WebP est généralement 25 à 35 % plus petit que JPG à qualité visible égale. Pour les graphiques avec transparence, WebP est généralement beaucoup plus petit que PNG. C’est pourquoi WebP est le meilleur format pour les sites web.',
  },
  {
    id: 'fmt-faq-19',
    question: 'CompressMyPic convertit-il entre JPG, PNG et WebP ?',
    answer: 'Oui. Envoyez une image JPG, PNG ou WebP, choisissez le format de sortie souhaité — original, JPG, PNG ou WebP — et téléchargez le fichier converti. Vous pouvez convertir plusieurs images à la fois avec les mêmes réglages et les télécharger toutes dans un ZIP.',
  },
  {
    id: 'fmt-faq-20',
    question: 'Que devient la transparence si je convertis un PNG en JPG ?',
    answer: 'Elle est perdue. JPG ne peut pas stocker la transparence, donc les parties transparentes de votre PNG deviennent une couleur unie. CompressMyPic vous permet de choisir une couleur de fond pour remplir ces zones, alors choisissez-en une qui s’accorde avec l’endroit où l’image sera utilisée ; le blanc est le choix habituel.',
  },
];

export const GuideFormatsPageFr: React.FC<GuideFormatsPageFrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP : quel format utiliser ?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP expliqués simplement : comparez la taille, la qualité et la transparence pour choisir le format adapté à vos photos, logos et sites web.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/fr/guides/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Comment choisir entre JPG, PNG et WebP et convertir des images',
          description: 'Comparez JPG, PNG et WebP, puis compressez ou convertissez votre image avec CompressMyPic.',
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
            onClick={() => onNavigate('/fr/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au compresseur d’images</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            JPG vs PNG vs WebP : quel format utiliser ?
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Choisir le mauvais format peut rendre votre image dix fois plus grande que nécessaire, ou ruiner un logo transparent. Voici la comparaison simple et honnête, et comment convertir entre les formats en quelques secondes.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>La réponse courte</span>
            </h2>
            <p>
              Si vous ne devez retenir qu’une chose, retenez ceci : utilisez JPG pour les photos, PNG pour les logos et tout ce qui a besoin de transparence, et WebP lorsque vous voulez le fichier le plus petit, surtout sur un site web. Le tableau ci-dessous montre pourquoi.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Format</th>
                    <th className="px-4 py-3 font-semibold">Taille de fichier</th>
                    <th className="px-4 py-3 font-semibold">Transparence</th>
                    <th className="px-4 py-3 font-semibold">Idéal pour</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">JPG</td>
                    <td className="px-4 py-3">Petite</td>
                    <td className="px-4 py-3">Non</td>
                    <td className="px-4 py-3">Photos, partage, impression</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">PNG</td>
                    <td className="px-4 py-3">Grande</td>
                    <td className="px-4 py-3">Oui</td>
                    <td className="px-4 py-3">Logos, icônes, captures d’écran</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">WebP</td>
                    <td className="px-4 py-3">La plus petite</td>
                    <td className="px-4 py-3">Oui</td>
                    <td className="px-4 py-3">Sites web, photos web</td>
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
              <span>JPG : le meilleur pour les photos</span>
            </h2>
            <p className="text-sm sm:text-base">
              JPG (aussi écrit JPEG) est le format classique pour les photos. Il utilise la compression avec perte : il supprime des détails fins que votre œil remarque à peine, ce qui rend les fichiers beaucoup plus petits. Une photo d’appareil photo de 5 Mo peut devenir 500 Ko en JPG et toujours paraître très bien. JPG ne prend pas en charge la transparence, donc c’est le mauvais choix pour les logos, mais pour toute photo normale, c’est le choix sûr et universel que tous les appareils et applications peuvent ouvrir.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG : le meilleur pour les logos et la transparence</span>
            </h2>
            <p className="text-sm sm:text-base">
              PNG est sans perte : il conserve chaque pixel exactement et prend en charge les fonds transparents. Cela en fait le format adapté aux logos, aux icônes et aux graphiques avec du texte. Le prix est la taille du fichier : une photo enregistrée en PNG peut être 5 à 10 fois plus grande que la même photo en JPG. N’enregistrez jamais une photo d’appareil photo en PNG sauf si vous avez une raison précise.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP : le meilleur pour les sites web</span>
            </h2>
            <p className="text-sm sm:text-base">
              WebP est le format moderne créé par Google. Il fait tout : compression avec perte comme JPG, transparence comme PNG, et des fichiers généralement 25 à 35 % plus petits que JPG à qualité visible égale. Tous les navigateurs modernes le prennent en charge, c’est pourquoi c’est le meilleur format pour les images de sites web. Sa seule faiblesse est la compatibilité avec les anciens logiciels, et avec les aperçus WhatsApp, où JPG reste plus sûr.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="Capture d’écran comparant la même photo enregistrée en JPG, PNG et WebP avec leurs tailles de fichier"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              La même photo en trois formats : WebP est le plus petit, PNG est le plus grand et JPG se situe au milieu.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>Étape par étape : compressez ou convertissez votre image</span>
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
              <span>Quel format pour chaque travail ?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Photos d’appareil photo : JPG ou WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  JPG pour partager et imprimer, WebP pour votre site web. Les deux gardent les photos très belles à une fraction de la taille d’origine.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Logos et icônes : PNG ou WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Vous avez besoin de transparence, donc JPG est exclu. PNG est le classique sûr ; WebP est plus petit et fonctionne partout où c’est moderne.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Captures d’écran : WebP ou PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Le texte net et les couleurs unies vont bien avec WebP et PNG. JPG rend flous les bords du texte, alors évitez-le pour les captures d’écran.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Images de sites web : WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Les fichiers les plus petits signifient des pages plus rapides. Convertissez les photos de votre site web en WebP et conservez JPG en alternative pour les navigateurs très anciens.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="Capture d’écran montrant comment choisir le format de sortie JPG, PNG ou WebP dans CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Choisissez votre format de sortie dans CompressMyPic : conservez l’original ou convertissez en JPG, PNG ou WebP.
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Questions fréquentes</span>
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">Guides connexes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/fr/guides/compresser-images-pour-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Comment compresser des images pour WhatsApp sans perdre en qualité</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Réduisez les photos vous-même d’abord, puis envoyez-les comme documents pour que WhatsApp ne puisse pas les rendre floues.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/fr/guides/reduire-image-a-100-ko')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Comment réduire la taille d’une image à 100 Ko pour le web et l’e-mail</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Guide étape par étape pour atteindre 100 Ko sans ruiner votre photo.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/fr/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Compresser des images gratuitement
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/fr/guides/compresser-images-pour-whatsapp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              Compresser pour WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
