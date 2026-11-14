import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageItProps {
  onNavigate: (path: string) => void;
}

export const ContactPageIt: React.FC<ContactPageItProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Contattaci - CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Contatta il team di CompressMyPic: domande, commenti o segnalazioni di problemi sul compressore di immagini online gratuito. Rispondiamo di solito entro 24-48 ore lavorative.');
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
        throw new Error(data?.message || 'Impossibile inviare il messaggio. Riprova.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Errore di rete. Prova a inviare direttamente a bilalayyah@gmail.com.'
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
            onClick={() => onNavigate('/it/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna al compressore di immagini</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Contattaci
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            Hai domande, commenti o hai bisogno di aiuto? Scrivi al nostro team con il modulo qui sotto, oppure contattaci direttamente via email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#7c3aed] dark:text-[#a78bfa]" />
                <span>Contatto diretto</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>Tempo di risposta</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Di solito rispondiamo entro 24-48 ore lavorative.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>Impegno per la privacy</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                La tua email e i dati del tuo messaggio vengono usati solo per rispondere alla tua richiesta e non vengono mai condivisi.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">Messaggio inviato con successo</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  Grazie per averci scritto! Il tuo messaggio è stato inviato tramite FormSubmit a bilalayyah@gmail.com. Ti risponderemo a breve.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    Invia un altro messaggio
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
                      Il tuo nome <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Maria Rossi"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Indirizzo email <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="maria@esempio.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Oggetto <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Commenti, segnalazione di un problema o domanda generale"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Messaggio <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Come possiamo aiutarti? Descrivi il tuo problema o il tuo suggerimento in dettaglio..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
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
                      <span>Invio del messaggio in corso...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Invia messaggio</span>
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
              <Mail className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Chi gestisce CompressMyPic</span>
            </h2>
            <p>
              CompressMyPic è creato e gestito da Bilal, un creatore indipendente che voleva un compressore di immagini davvero gratuito e rispettoso della vostra privacy. A differenza della maggior parte degli strumenti online, CompressMyPic non carica mai le vostre foto su un server: ogni immagine viene compressa direttamente nel vostro browser. Bilal legge ogni messaggio personalmente e usa i vostri feedback per correggere bug, migliorare la qualità e decidere quali nuovi strumenti creare.
            </p>
            <p>
              Poiché si tratta di un piccolo progetto indipendente e non di una grande azienda, riceverete sempre una risposta diretta e onesta — anche quando la risposta è che una certa funzione non è ancora possibile. Non c'è nessuna coda di assistenza né un chatbot automatico tra voi e la persona che ha creato lo strumento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Di cosa potete scriverci?</span>
            </h2>
            <p>
              Il modo più rapido per ricevere aiuto è dirci esattamente cosa è successo. Per segnalare un bug, indicate il nome dello strumento che stavate usando, il vostro browser e il tipo di file immagine — ad esempio, una foto HEIC di un iPhone o un PNG trasparente. Per richiedere una funzione, descrivete cosa stavate cercando di fare e perché gli strumenti attuali non sono sufficienti. Accogliamo anche segnalazioni di risultati errati, come un'immagine compressa che sembra peggiore del previsto, e correzioni alle nostre guide o a qualsiasi pagina tradotta.
            </p>
            <p>
              Potete scriverci anche per partnership, richieste stampa e suggerimenti di nuovi strumenti. Se gestite un sito web, un blog o una classe e volete consigliare CompressMyPic ai vostri lettori o studenti, ci farebbe molto piacere sentirvi — usate semplicemente il modulo qui sopra e scegliete un oggetto chiaro, così il vostro messaggio arriverà rapidamente nel posto giusto.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Altri modi per contattare Bilal</span>
            </h2>
            <p>
              Se preferite un canale pubblico, potete trovare Bilal e il progetto CompressMyPic sul web. Il codice sorgente è su GitHub, dove potete anche segnalare problemi tecnici e seguire lo sviluppo. Guide approfondite sulla compressione delle immagini sono pubblicate su Dev.to, e il prodotto è elencato su Indie Hackers, dove potete seguirne i progressi e lasciare feedback.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— codice sorgente, segnalazioni di bug e novità sullo sviluppo.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— guide sulla compressione JPG, PNG e WebP.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— pagina del prodotto, traguardi e feedback della community.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Prima di scriverci</span>
            </h2>
            <p>
              Alcuni controlli rapidi risolvono la maggior parte dei problemi senza attendere una risposta. Il compressore principale accetta immagini fino a 20 MB ciascuna, mentre i convertitori di formato accettano fino a 25 MB per file — un file più grande verrà rifiutato prima ancora di iniziare. I browser molto vecchi potrebbero non supportare formati recenti come AVIF o HEIC, quindi provare una versione recente di Chrome, Edge, Firefox o Safari spesso ripara uno strumento che sembra rotto. E poiché le vostre immagini non lasciano mai il vostro dispositivo, un problema con una foto in particolare è di solito causato dal file stesso, non dal sito web.
            </p>
            <p>
              Quando ci scrivete, indicate il nome e la versione del vostro browser, lo strumento utilizzato e le dimensioni e il formato dell’immagine. Rispondiamo in inglese, di solito entro 24–48 ore lavorative. Se la vostra domanda riguarda il modo in cui trattiamo i vostri dati, potete anche leggere prima la nostra 
              <button
                type="button"
                onClick={() => onNavigate('/it/privacy')}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold cursor-pointer"
              >
                Informativa sulla privacy
              </button>
              : spiega in parole semplici che le vostre immagini non vengono mai caricate né archiviate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Segnalare un problema</span>
            </h2>
            <p>
              Avete trovato qualcosa di rotto? Diteci in quale pagina è successo, su cosa avete cliccato e cosa vi aspettavate di vedere. Gli screenshot aiutano molto e, se il problema riguarda un’immagine specifica, indicateci formato e dimensioni — ma non inviateci mai foto private o sensibili. Correggiamo i bug segnalati il più rapidamente possibile e vi faremo sapere via email quando la correzione sarà online.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
