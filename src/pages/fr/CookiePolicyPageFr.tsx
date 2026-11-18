import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageFrProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageFr: React.FC<CookiePolicyPageFrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Politique relative aux cookies | CompressMyPic – Comment les cookies sont utilisés';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Politique relative aux cookies
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Dernière mise à jour : 18 novembre 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Que sont les cookies ?
            </h2>
            <p>
              Les cookies sont de petits fichiers texte qu’un site demande à votre navigateur de stocker sur votre appareil. Ils peuvent mémoriser des informations sur votre visite — par exemple, si vous avez déjà vu un message — afin que le site ou un service puisse reconnaître votre navigateur lors d’une visite ultérieure. Cette politique explique quels cookies sont utilisés sur CompressMyPic, pourquoi ils sont utilisés et comment vous pouvez les contrôler.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookies que nous ne définissons pas
            </h2>
            <p>
              CompressMyPic ne définit aucun cookie. Nos outils d’image fonctionnent entièrement dans votre navigateur : la compression ne nécessite ni compte, ni connexion, ni cookie. Nous ne définissons pas de cookie pour vous reconnaître, vous suivre ou mémoriser vos préférences. Vos images ne quittent jamais votre navigateur, et rien à leur sujet n’est stocké dans un cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Cookies publicitaires de Google AdSense
            </h2>
            <p>
              Nous utilisons Google AdSense pour afficher des publicités sur ce site. AdSense et ses partenaires peuvent définir des cookies sur votre appareil pour diffuser des publicités en fonction de vos visites précédentes sur ce site ou sur d’autres sites. L’utilisation de cookies publicitaires par Google permet à Google et à ses partenaires de vous diffuser des publicités en fonction de votre visite sur ce site et/ou sur d’autres sites Internet, et de mesurer la fréquence d’affichage d’une publicité. Les emplacements publicitaires de ce site sont choisis manuellement ; nous n’utilisons pas l’insertion automatique d’annonces. Vous pouvez refuser la publicité personnalisée en visitant les Paramètres des annonces Google (
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://adssettings.google.com</a>
              ) ou 
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://www.aboutads.info/choices/</a>
              . Choisir des annonces non personnalisées n’arrête pas la publicité, mais cela signifie que les annonces ne sont plus basées sur votre historique de navigation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Cookies de Google Analytics 4
            </h2>
            <p>
              Nous utilisons Google Analytics 4 (GA4) pour comprendre, de manière agrégée, comment le site est utilisé — par exemple, quels outils sont populaires et quelles pages sont visitées. GA4 peut définir des cookies sur votre appareil, comme _ga, pour distinguer une visite d’une autre. Les données sont anonymisées et utilisées uniquement sous forme résumée ; nous n’utilisons pas GA4 pour vous identifier personnellement. Vous pouvez refuser Google Analytics à tout moment en installant le module complémentaire de désactivation de Google Analytics (https://tools.google.com/dlpage/gaoptout) ou en désactivant les cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Consentement (EEE, Royaume-Uni et Suisse)
            </h2>
            <p>
              Si vous visitez le site depuis l’Espace économique européen, le Royaume-Uni ou la Suisse, Google vous présente un message de consentement avant l’affichage de publicités personnalisées, conformément au RGPD et à la Politique de consentement des utilisateurs de l’UE de Google. Vous pouvez modifier ou retirer votre consentement à tout moment en utilisant le lien « Paramètres de confidentialité et de cookies » dans le pied de page de ce site, qui rouvre le message de consentement, ou en effaçant les cookies de votre navigateur. Retirer votre consentement n’affecte pas ce qui a été fait légalement avant le retrait.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Autres services tiers
            </h2>
            <p>
              Quelques autres services de ce site peuvent utiliser leurs propres cookies ou stockage similaire. Google reCAPTCHA, qui protège notre formulaire de contact contre le spam, peut définir des cookies pour distinguer les humains des robots ; son utilisation est régie par la 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Politique de confidentialité de Google</a>
               et les 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Conditions d’utilisation de Google</a>
               de Google. Cloudflare, qui héberge ce site, peut définir un cookie de sécurité pour protéger le site contre les abus. Les commentaires anonymes sous nos outils ne demandent qu’un nom, qui est stocké par le service de commentaires — et non dans un cookie de ce site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Stockage du navigateur qui n’est pas un cookie
            </h2>
            <p>
              Votre navigateur stocke aussi une petite quantité d’informations locales qui ne sont pas des cookies. Si vous publiez un commentaire, votre navigateur peut mémoriser le nom que vous avez saisi pour ne pas avoir à le saisir à nouveau, et si vous changez la langue du site, votre navigateur peut mémoriser ce choix pour votre prochaine visite. Ces informations restent sur votre propre appareil, ne sont jamais envoyées à nos serveurs, et vous pouvez les effacer à tout moment en effaçant les données du site dans votre navigateur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Comment contrôler les cookies
            </h2>
            <p>
              Vous pouvez supprimer les cookies déjà stockés sur votre appareil et empêcher l’installation de cookies à l’avenir dans les paramètres de votre navigateur — tous les principaux navigateurs (Chrome, Firefox, Safari, Edge) proposent cette option dans leurs paramètres de confidentialité ou de sécurité. Bloquer tous les cookies ne perturbera pas nos outils d’image, qui ne dépendent pas des cookies, mais cela peut affecter des fonctionnalités de services tiers comme les publicités et les statistiques. Vous pouvez aussi utiliser le mode privé ou de navigation incognito de votre navigateur, qui supprime les cookies à la fermeture de la fenêtre.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Modifications de cette politique
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique lorsque le site change — par exemple, si nous ajoutons un nouveau partenaire publicitaire ou un nouveau service d’analyse. Dans ce cas, nous modifierons la date de « Dernière mise à jour » en haut de cette page. Continuer à utiliser le site après une modification signifie que vous acceptez la politique mise à jour.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Contact
            </h2>
            <p>
              Si vous avez des questions sur cette politique, contactez-nous à 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
               ou lisez notre 
              <a href="/fr/confidentialite" onClick={(e) => { e.preventDefault(); onNavigate('/fr/confidentialite'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Politique de confidentialité</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
