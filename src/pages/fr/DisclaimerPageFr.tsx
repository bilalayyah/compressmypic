import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageFrProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageFr: React.FC<DisclaimerPageFrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Avertissement | CompressMyPic – Outils d’image gratuits';
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
            <span>Retour au compresseur d’images</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Avertissement
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Dernière mise à jour : 18 novembre 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Informations générales
            </h2>
            <p>
              CompressMyPic est un service gratuit de compression et d’édition d’images en ligne. Les outils, guides et articles de ce site sont fournis uniquement à titre d’information générale et pour un usage pratique. Ils ne constituent un conseil professionnel d’aucune sorte — ni juridique, ni médical, ni financier, ni technique — et ne créent aucune relation professionnelle entre vous et CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Absence de garantie
            </h2>
            <p>
              Le service est fourni « tel quel » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite. Nous ne garantissons pas que les outils seront toujours disponibles, ininterrompus, exempts d’erreurs ou de composants nuisibles, ni qu’une image donnée sera compressée à une taille ou une qualité précise. Les résultats dépendent de l’image d’origine, de son format et de votre navigateur : conservez toujours une copie de vos fichiers originaux avant d’utiliser un outil.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Exactitude du contenu
            </h2>
            <p>
              Nous nous efforçons de garder nos guides, articles et descriptions d’outils exacts et à jour, mais les formats d’image, les navigateurs et les normes du web évoluent avec le temps. Les informations de ce site peuvent devenir obsolètes ou contenir des erreurs malgré nos efforts. Vérifiez toujours les détails importants — comme les limites de taille d’une plateforme — dans la documentation officielle de cette plateforme avant de vous y fier.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Vos fichiers sont votre responsabilité
            </h2>
            <p>
              Les images sont traitées localement dans votre navigateur et ne sont jamais envoyées vers nos serveurs. Cela signifie aussi que nous ne pouvons pas récupérer un fichier pour vous : si vous écrasez, supprimez ou perdez une image originale en utilisant nos outils, nous ne pouvons pas la restaurer. Sauvegardez toute image importante et ne traitez que des copies de fichiers qui vous appartiennent ou que vous avez l’autorisation de modifier.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Services et liens tiers
            </h2>
            <p>
              Ce site utilise des services tiers — Google Analytics 4 pour les statistiques d’utilisation, FormSubmit pour le formulaire de contact et un Cloudflare Worker pour les commentaires anonymes — et contient des liens vers des sites externes. Nous ne contrôlons pas ces services ni ces sites, et nous ne sommes pas responsables de leur contenu, de leur disponibilité, de leurs pratiques de confidentialité ni de leur exactitude. Leurs propres conditions et politiques de confidentialité s’appliquent lorsque vous les utilisez.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Publicité
            </h2>
            <p>
              Ce site n'affiche actuellement aucune publicité.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitation de responsabilité
            </h2>
            <p>
              Dans toute la mesure permise par la loi, CompressMyPic et son exploitant ne seront pas responsables des pertes ou dommages directs, indirects, accessoires ou consécutifs résultant de votre utilisation — ou de votre incapacité à utiliser — ce site ou ses outils, y compris, sans s’y limiter, la perte de fichiers, de données ou de profits. Votre seul recours en cas d’insatisfaction à l’égard du service est de cesser de l’utiliser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Commentaires des utilisateurs
            </h2>
            <p>
              Les commentaires publiés sous nos outils sont rédigés par des visiteurs et reflètent leurs propres opinions, pas les nôtres. Nous modérons les commentaires et pouvons supprimer tout contenu indésirable, abusif ou hors sujet, mais nous n’approuvons ni n’assumons la responsabilité du contenu des commentaires des utilisateurs. Ne partagez jamais de mots de passe, de données de paiement ou d’informations personnelles sensibles dans un commentaire.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Contact
            </h2>
            <p>
              Si vous avez des questions sur cet avertissement, contactez-nous à 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
