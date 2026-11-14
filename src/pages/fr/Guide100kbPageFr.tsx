import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageFrProps {
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
    text: 'Rendez-vous sur compressmypic.online dans votre navigateur. Rien à installer, aucun compte à créer : l’outil est gratuit, sans inscription et sans filigrane.',
  },
  {
    title: 'Envoyez votre image',
    text: 'Glissez-déposez votre image sur la page, ou touchez « Parcourir les fichiers » pour la choisir sur votre appareil. Les formats JPG, PNG et WebP sont pris en charge, jusqu’à 20 Mo par image. Vous pouvez envoyer plusieurs images à la fois.',
  },
  {
    title: 'Commencez par le préréglage Équilibré',
    text: 'Le préréglage Équilibré règle la qualité à environ 70 %. Pour la plupart des photos, cela réduit déjà le fichier à une fraction de sa taille d’origine ; vérifiez la taille en direct affichée à côté de votre image pour voir où vous en êtes.',
  },
  {
    title: 'Descendez le curseur de qualité étape par étape',
    text: 'Il n’y a pas de champ où vous écrivez « 100 Ko » : descendez plutôt le curseur de qualité lentement et observez comment la taille avant et après se met à jour en direct après chaque changement. Avancez par petits pas (par exemple, de 70 % à 60 % puis à 50 %) pour ne pas aller trop loin et ne pas perdre plus de qualité que nécessaire.',
  },
  {
    title: 'Passez à WebP si vous êtes toujours au-dessus de 100 Ko',
    text: 'Si le fichier reste au-dessus de 100 Ko avec une qualité raisonnable, changez le format de sortie en WebP. WebP est généralement 25 à 35 % plus petit que JPG à qualité visible égale, et cela suffit souvent à combler l’écart jusqu’à 100 Ko sans baisser davantage la qualité.',
  },
  {
    title: 'Comparez l’avant et l’après',
    text: 'Ouvrez la comparaison avant/après et zoomez sur les visages, le texte et les détails fins. Si la photo a toujours l’air bien, vous avez terminé. Si elle paraît en blocs ou décolorée, remontez un peu la qualité et acceptez un fichier légèrement au-dessus de 100 Ko : une photo nette de 120 Ko vaut mieux qu’une photo floue de 100 Ko.',
  },
  {
    title: 'Téléchargez votre image',
    text: 'Touchez Télécharger pour enregistrer le fichier plus petit, ou utilisez « Tout télécharger (ZIP) » si vous avez réduit plusieurs images à la fois. Votre image d’origine n’est jamais modifiée : vous recevez toujours une copie nouvelle et plus petite.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'Comment réduire la taille de ma photo à environ 100 Ko ?',
    answer: 'Envoyez-la sur CompressMyPic, commencez par le préréglage Équilibré, puis descendez le curseur de qualité étape par étape en observant la taille avant et après en direct. Arrêtez-vous dès que la taille compressée est proche de 100 Ko. Si elle est toujours au-dessus, changez le format de sortie en WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'Pourquoi n’y a-t-il pas de champ pour écrire exactement 100 Ko ?',
    answer: 'Parce que chaque photo se compresse différemment : un ciel dégagé se réduit beaucoup plus qu’une scène chargée à qualité égale. Un champ fixe de « 100 Ko » devrait deviner. CompressMyPic vous montre plutôt la taille compressée en direct après chaque changement, pour que vous puissiez vous-même amener le fichier à 100 Ko en gardant un contrôle total sur la qualité.',
  },
  {
    id: 'kb-faq-3',
    question: 'Quel réglage de qualité me donne environ 100 Ko ?',
    answer: 'Cela dépend de la photo, mais pour une photo typique de téléphone, une qualité de 50 à 70 % se situe généralement près de 100 Ko. Une photo simple aux couleurs unies peut atteindre 100 Ko à 70 %, tandis qu’un paysage riche en détails peut nécessiter 40 à 50 %. Observez la taille en direct : ce chiffre est la vérité, pas un pourcentage fixe.',
  },
  {
    id: 'kb-faq-4',
    question: 'Ma photo pèse toujours plus de 100 Ko avec une qualité faible, que faire ?',
    answer: 'Changez d’abord le format de sortie en WebP, qui est généralement 25 à 35 % plus petit que JPG. Si elle est toujours au-dessus, baissez encore un peu la qualité et vérifiez la comparaison : souvent, une petite baisse supplémentaire est invisible. En dernier recours, une photo aux dimensions énormes peut nécessiter un réglage de qualité plus bas que prévu, car plus de pixels signifie plus de données.',
  },
  {
    id: 'kb-faq-5',
    question: 'Dois-je utiliser WebP pour atteindre 100 Ko ?',
    answer: 'Oui, chaque fois que c’est possible. WebP est le moyen le plus simple d’atteindre 100 Ko sans trop baisser la qualité, car il crée un fichier plus petit à qualité visible égale à JPG. Utilisez WebP pour les images de sites web et partout où des navigateurs modernes sont utilisés ; utilisez JPG uniquement lorsque l’image doit s’ouvrir dans d’anciens logiciels ou être partagée sur WhatsApp.',
  },
  {
    id: 'kb-faq-6',
    question: 'Réduire à 100 Ko rend-il la photo floue ?',
    answer: 'Non, si vous le faites avec soin. À 100 Ko, une photo normale de téléphone reste nette sur les écrans, car les écrans affichent beaucoup moins de pixels que ceux capturés par l’appareil photo. Elle ne paraît floue que si vous baissez trop la qualité (en dessous d’environ 40 %) ou si la photo est imprimée en grand. Vérifiez toujours la comparaison avant/après avant de télécharger.',
  },
  {
    id: 'kb-faq-7',
    question: 'Puis-je réduire un PNG à 100 Ko ?',
    answer: 'Oui, mais les photos PNG sont volumineuses dès le départ, donc cela demande plus de travail. Envoyez le PNG, baissez le curseur de qualité et changez la sortie en WebP ou JPG : cela seul réduit souvent la taille de plus de moitié. Conservez la sortie PNG uniquement si l’image a besoin de transparence, et acceptez qu’un PNG transparent ne puisse pas atteindre 100 Ko.',
  },
  {
    id: 'kb-faq-8',
    question: 'Comment mettre une image à 200 Ko ?',
    answer: 'Utilisez la même méthode : envoyez l’image, commencez par le préréglage Équilibré et baissez le curseur de qualité en observant la taille en direct jusqu’à ce qu’elle soit proche de 200 Ko. La plupart des photos atteignent facilement 200 Ko avec une qualité de 70 à 80 %, donc vous n’avez généralement pas besoin de baisser beaucoup.',
  },
  {
    id: 'kb-faq-9',
    question: 'Que dois-je faire pour qu’une image pèse 50 Ko ?',
    answer: 'Envoyez l’image, changez le format de sortie en WebP et baissez le curseur de qualité petit à petit jusqu’à ce que la taille en direct soit proche de 50 Ko, généralement avec une qualité d’environ 40 à 55 % pour une photo. Vérifiez attentivement la comparaison, car à 50 Ko, les détails fins commencent à souffrir ; c’est bien pour les miniatures et le chat, moins pour les photos que vous souhaitez conserver.',
  },
  {
    id: 'kb-faq-10',
    question: 'Est-il possible de descendre une image jusqu’à 20 Ko ?',
    answer: 'Utilisez la sortie WebP et un réglage de qualité faible, généralement de 25 à 40 %, et observez la taille en direct. 20 Ko, c’est très peu, alors attendez-vous à un adoucissement visible : cela convient aux icônes, aux miniatures et aux petites images d’aperçu, pas aux photos avec des visages. Si l’image n’atteint toujours pas 20 Ko, elle contient probablement trop de détails pour un fichier aussi petit.',
  },
  {
    id: 'kb-faq-11',
    question: 'Quelle est une bonne taille de fichier pour les images d’un site web ?',
    answer: 'Visez moins de 100 Ko par image pour les photos de contenu normales, et moins de 200 Ko pour les grandes images principales. Les petits fichiers font charger les pages plus vite, ce que les visiteurs remarquent et que Google récompense. Utilisez le format WebP et le préréglage Équilibré comme point de départ pour les images de sites web.',
  },
  {
    id: 'kb-faq-12',
    question: 'Quelle est la limite de taille des pièces jointes d’un e-mail ?',
    answer: 'La plupart des fournisseurs d’e-mail autorisent 20 à 25 Mo par message au total, pièces jointes comprises ; Gmail autorise 25 Mo. Une seule photo réduite à 100 Ko n’est jamais un problème ; même dix photos de 100 Ko chacune ne font que 1 Mo. Compresser d’abord, c’est ce qui rend l’envoi de plusieurs photos par e-mail sans complication.',
  },
  {
    id: 'kb-faq-13',
    question: 'Puis-je réduire plusieurs images à 100 Ko à la fois ?',
    answer: 'Oui. Envoyez toutes les images ensemble, appliquez le même préréglage et la même qualité à toutes et vérifiez la taille en direct de chacune. Si une image reste au-dessus de 100 Ko, ajustez-la séparément, puis téléchargez tout ensemble avec le bouton « Tout télécharger (ZIP) ».',
  },
  {
    id: 'kb-faq-14',
    question: 'L’outil change-t-il les dimensions de mon image ?',
    answer: 'Non. CompressMyPic conserve les dimensions de votre image exactement telles quelles : seule la taille du fichier est réduite. Votre photo garde la même largeur, la même hauteur et les mêmes proportions que l’originale, donc une photo de 4000×3000 reste en 4000×3000, simplement avec un fichier beaucoup plus petit.',
  },
  {
    id: 'kb-faq-15',
    question: 'Comment vérifier la taille de mon image compressée ?',
    answer: 'CompressMyPic affiche la taille d’origine et la taille compressée de chaque image, en direct, juste sous chaque photo ; par exemple, « 4,2 Mo → 98 Ko ». Vous pouvez aussi vérifier le fichier téléchargé sur votre appareil : sur un téléphone, regardez les détails du fichier dans votre galerie ou dans le gestionnaire de fichiers.',
  },
  {
    id: 'kb-faq-16',
    question: '100 Ko suffisent-ils en qualité pour un site web ?',
    answer: 'Oui, pour presque tous les usages web. Les photos de sites web s’affichent avec quelques centaines de pixels de large, donc une image de 100 Ko paraît nette à l’écran. Seules les images principales en plein écran ou les photos destinées à être imprimées ont besoin de fichiers plus volumineux. Compressez à 100 Ko, vérifiez la comparaison et vous verrez que la qualité est préservée.',
  },
  {
    id: 'kb-faq-17',
    question: 'Puis-je réduire une capture d’écran à 100 Ko ?',
    answer: 'Oui, et les captures d’écran sont le cas le plus facile. Elles ont de grandes zones de couleur unie, donc elles se compressent très bien : une capture d’écran qui commence à 1 Mo descend souvent sous 100 Ko avec le préréglage Équilibré. Essayez la sortie WebP pour obtenir le résultat le plus petit.',
  },
  {
    id: 'kb-faq-18',
    question: 'Mes images quittent-elles mon appareil lorsque je les compresse ?',
    answer: 'Non. Toute la compression a lieu dans votre propre navigateur sur votre appareil, donc vos images ne sont jamais envoyées vers un serveur, ni stockées, ni vues par quelqu’un d’autre. Elles restent dans la mémoire de votre navigateur et sont supprimées lorsque vous fermez ou actualisez l’onglet.',
  },
  {
    id: 'kb-faq-19',
    question: 'Y a-t-il une limite au nombre d’images que je peux réduire ?',
    answer: 'Non. Il n’y a aucune limite au nombre d’images que vous pouvez compresser, et vous n’avez besoin d’aucun compte ni d’aucune inscription. La seule limite est de 20 Mo par image, ce qui couvre les photos haute résolution d’appareil photo et les grandes captures d’écran.',
  },
  {
    id: 'kb-faq-20',
    question: 'Réduire des images à 100 Ko est-il gratuit ?',
    answer: 'Oui, entièrement gratuit. Aucun frais, aucun forfait payant, aucun crédit et aucun filigrane sur vos images compressées. Ouvrez le site, réduisez vos images à 100 Ko et téléchargez-les autant de fois que vous le souhaitez.',
  },
];

export const Guide100kbPageFr: React.FC<Guide100kbPageFrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Comment réduire une image à 100 Ko pour le web et l’e-mail';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Réduisez la taille d’une image à 100 Ko pour les sites web et les e-mails avec un compresseur online gratuit. Guide étape par étape, sans inscription ni filigrane.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/fr/guides/reduire-image-a-100-ko';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Comment réduire la taille d’une image à 100 Ko pour les sites web et les e-mails',
          description: 'Utilisez le curseur de qualité et la sortie WebP dans CompressMyPic pour réduire une image à environ 100 Ko.',
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
            Comment réduire la taille d’une image à 100 Ko pour le web et l’e-mail
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Une photo de 4 Mo ralentit votre site web et bloque un e-mail. La réduire à environ 100 Ko rend les pages rapides et les e-mails instantanés, et si vous le faites bien, personne ne peut voir la différence.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>Pourquoi 100 Ko est le chiffre magique</span>
            </h2>
            <p>
              100 Ko est la taille que la plupart des gens recherchent parce qu’elle se situe au point idéal : assez petite pour charger instantanément sur un site web ou entrer dans n’importe quel e-mail, mais assez grande pour rester nette à l’écran. Une photo typique de téléphone commence à 3 à 5 Mo, donc atteindre 100 Ko signifie supprimer environ 97 % du fichier, et la compression moderne y parvient surtout en supprimant des données que vos yeux ne peuvent pas voir.
            </p>
            <p>
              Une remarque honnête avant de commencer : CompressMyPic n’a pas de champ où vous écrivez « 100 Ko » et obtenez exactement cette taille. Aucun outil honnête ne peut promettre un chiffre exact, car chaque photo se compresse différemment. L’outil vous montre plutôt la taille compressée en direct après chaque changement, et vous l’amenez vous-même jusqu’à 100 Ko avec le curseur de qualité. Ce guide vous montre exactement comment faire.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>Étape par étape : réduisez une image à 100 Ko</span>
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
              alt="Capture d’écran montrant comment envoyer une grande photo sur CompressMyPic pour la réduire à 100 Ko"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Envoyez votre photo : la taille d’origine s’affiche immédiatement, pour que vous sachiez de combien vous devez réduire.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>Objectifs courants en un coup d’œil</span>
            </h2>
            <p>
              100 Ko n’est pas le seul objectif dont les gens ont besoin. La même méthode fonctionne pour n’importe quelle taille ; voici ce que vous pouvez attendre de chacune :
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Objectif</th>
                    <th className="px-4 py-3 font-semibold">Qualité typique</th>
                    <th className="px-4 py-3 font-semibold">Idéal pour</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">200 Ko</td>
                    <td className="px-4 py-3">70–80 %</td>
                    <td className="px-4 py-3">Photos de blog, grandes images web</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">100 Ko</td>
                    <td className="px-4 py-3">50–70 %</td>
                    <td className="px-4 py-3">Photos de sites web, pièces jointes d’e-mail</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">50 Ko</td>
                    <td className="px-4 py-3">40–55 % + WebP</td>
                    <td className="px-4 py-3">Miniatures, chat, pages rapides</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">20 Ko</td>
                    <td className="px-4 py-3">25–40 % + WebP</td>
                    <td className="px-4 py-3">Icônes, petits aperçus</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Ce sont des points de départ, pas des promesses. Une photo simple atteint facilement 100 Ko ; une photo riche en détails nécessite un réglage de qualité plus bas. Fiez-vous au chiffre de la taille en direct, pas au pourcentage.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>Conseils pour les sites web et les e-mails</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Pour les sites web, utilisez la sortie WebP : c’est le moyen le plus rapide d’atteindre 100 Ko et tous les navigateurs modernes la prennent en charge.</li>
              <li>Pour les e-mails, JPG est le format le plus sûr car toutes les applications d’e-mail l’ouvrent. Un JPG de 100 Ko se joint instantanément et ne rebondit jamais à cause de sa taille.</li>
              <li>Compressez toutes les photos d’une page ou d’un e-mail ensemble, puis téléchargez-les toutes avec le bouton Tout télécharger (ZIP).</li>
              <li>Ne cherchez pas un 100 Ko exact. Une photo nette de 115 Ko vaut mieux qu’une photo floue d’exactement 100 Ko : la différence de temps de chargement est nulle.</li>
              <li>Vérifiez toujours la comparaison avant/après en zoomant au maximum avant de publier ou d’envoyer la photo.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="Capture d’écran de la taille de fichier en direct, avant et après, montrant une image réduite à environ 100 Ko"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              La taille avant et après en direct montre votre progression : descendez le curseur jusqu’à ce que la taille compressée soit proche de 100 Ko.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Quand 100 Ko n’est pas possible</span>
            </h2>
            <p className="text-sm sm:text-base">
              Certaines images ne peuvent tout simplement pas atteindre 100 Ko sans paraître mauvaises : une photo très grande et riche en détails, ou un PNG avec transparence qui doit rester PNG. Dans ce cas, ne forcez pas. Une photo nette de 180 Ko vaut mieux qu’une photo ruinée de 100 Ko dans tous les cas : pour un site web, elle charge toujours vite et pour un e-mail, elle reste très en dessous de toute limite de pièce jointe. L’objectif est un petit fichier qui a toujours l’air bien, pas un chiffre magique.
            </p>
          </section>

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
                onClick={() => onNavigate('/fr/guides/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP : quel format utiliser ?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Taille de fichier, qualité et transparence comparées, pour que vous choisissiez le bon format à chaque fois.</p>
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
              onClick={() => onNavigate('/fr/guides/jpg-vs-png-vs-webp')}
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
