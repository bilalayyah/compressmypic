import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageFrProps {
  onNavigate: (path: string) => void;
}

export const ContactPageFr: React.FC<ContactPageFrProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Contactez-nous - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bilalayyah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject || 'CompressMyPic Contact Inquiry',
          message: contactMessage,
          _subject: `New inquiry from ${contactName}: ${contactSubject || 'CompressMyPic'}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setContactName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Impossible d’envoyer le message. Veuillez réessayer.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Erreur réseau. Essayez de l’envoyer directement à bilalayyah@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/fr/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au compresseur d’images</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Contactez-nous
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            Vous avez des questions, des commentaires ou besoin d’aide ? Écrivez à notre équipe avec le formulaire ci-dessous ou contactez-nous directement par e-mail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>Demandes directes</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>Délai de réponse</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Nous répondons généralement sous 24 à 48 heures ouvrées.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>Engagement de confidentialité</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Votre e-mail et les données de votre message servent uniquement à répondre à votre demande et ne sont jamais partagés.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">Message envoyé avec succès</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  Merci de nous avoir écrit ! Votre message a été envoyé via FormSubmit à bilalayyah@gmail.com. Nous vous répondrons très vite.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
                {errorMessage && (
                  <div className="p-3 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-xs rounded-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Votre nom <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Marie Dupont"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Adresse e-mail <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="marie@exemple.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Sujet <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Commentaires, signalement d’un bug ou question générale"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Message <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Comment pouvons-nous vous aider ? Décrivez votre problème ou votre suggestion en détail..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 btn-purple-pill disabled:opacity-50 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>Envoi du message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Extra Information Sections */}
        <div className="mt-12 space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Qui gère CompressMyPic</span>
            </h2>
            <p>
              CompressMyPic est créé et maintenu par Bilal, un créateur indépendant qui voulait un compresseur d'images vraiment gratuit et respectueux de votre vie privée. Contrairement à la plupart des outils en ligne, CompressMyPic ne téléverse jamais vos photos vers un serveur : chaque image est compressée directement dans votre propre navigateur. Bilal lit chaque message personnellement et utilise vos retours pour corriger les bugs, améliorer la qualité et décider des prochains outils à créer.
            </p>
            <p>
              Parce qu'il s'agit d'un petit projet indépendant et non d'une grande entreprise, vous obtiendrez toujours une réponse directe et honnête — même quand la réponse est qu'une fonction n'est pas encore possible. Il n'y a ni file d'attente de support ni chatbot automatique entre vous et la personne qui a créé l'outil.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>À propos de quoi pouvez-vous nous écrire ?</span>
            </h2>
            <p>
              Le moyen le plus rapide d'obtenir de l'aide est de nous dire exactement ce qui s'est passé. Pour signaler un bug, indiquez le nom de l'outil utilisé, votre navigateur et le type de fichier image — par exemple, une photo HEIC d'un iPhone ou un PNG transparent. Pour suggérer une fonction, décrivez ce que vous essayiez de faire et pourquoi les outils actuels ne suffisent pas. Nous apprécions aussi les signalements de résultats incorrects, comme une image compressée qui semble moins bonne que prévu, ainsi que les corrections de nos guides ou de toute page traduite.
            </p>
            <p>
              Vous pouvez aussi nous écrire au sujet de partenariats, de demandes de presse et de suggestions de nouveaux outils. Si vous gérez un site web, un blog ou une salle de classe et souhaitez recommander CompressMyPic à vos lecteurs ou élèves, nous serions ravis de vous entendre — utilisez simplement le formulaire ci-dessus et choisissez un objet clair pour que votre message arrive rapidement au bon endroit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Autres moyens de joindre Bilal</span>
            </h2>
            <p>
              Si vous préférez un canal public, vous pouvez trouver Bilal et le projet CompressMyPic sur le web. Le code source est sur GitHub, où vous pouvez aussi signaler des problèmes techniques et suivre le développement. Des guides détaillés sur la compression d'images sont publiés sur Dev.to, et le produit est listé sur Indie Hackers, où vous pouvez suivre ses progrès et laisser des commentaires.
            </p>
            <ul className="list-disc ps-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— code source, signalements de bugs et actualités du développement.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— guides sur la compression JPG, PNG et WebP.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— page du produit, étapes et commentaires de la communauté.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Avant de nous écrire</span>
            </h2>
            <p>
              Quelques vérifications rapides résolvent la plupart des problèmes sans attendre une réponse. Le compresseur principal accepte des images jusqu'à 20 Mo chacune, tandis que les convertisseurs de format acceptent jusqu'à 25 Mo par fichier — un fichier plus volumineux sera rejeté avant même de démarrer. Les très vieux navigateurs peuvent ne pas prendre en charge les formats récents comme AVIF ou HEIC ; essayer une version récente de Chrome, Edge, Firefox ou Safari suffit souvent à réparer un outil qui semble cassé. Et comme vos images ne quittent jamais votre appareil, un problème avec une photo en particulier vient généralement du fichier lui-même, et non du site web.
            </p>
            <p>
              Lorsque vous nous écrivez, indiquez le nom et la version de votre navigateur, l'outil utilisé, ainsi que la taille et le format de l'image. Nous répondons en anglais, généralement sous 24 à 48 heures ouvrées. Si votre question concerne la façon dont vos données sont traitées, vous pouvez aussi lire d'abord notre 
              <button
                type="button"
                onClick={() => onNavigate('/fr/confidentialite')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                Politique de confidentialité
              </button>
               : elle y explique en langage simple que vos images ne sont jamais téléversées ni stockées.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Signaler un problème</span>
            </h2>
            <p>
              Vous avez trouvé quelque chose de cassé ? Dites-nous sur quelle page cela s'est produit, sur quoi vous avez cliqué et ce que vous attendiez à la place. Les captures d'écran aident beaucoup et, si le problème concerne une image précise, indiquez-nous son format et sa taille — mais ne nous envoyez jamais de photos privées ou sensibles. Nous corrigeons les bugs signalés aussi vite que possible et nous vous préviendrons par e-mail une fois le correctif en ligne.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
