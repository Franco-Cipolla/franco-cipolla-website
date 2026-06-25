import React, { useRef, useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp, FaChevronDown, FaApple } from 'react-icons/fa'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'

// ─── Icons ────────────────────────────────────────────────────────────────────

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const StarIcon = () => (
  <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.06 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.287-3.957z"/>
  </svg>
)

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    emoji: '📅',
    label: 'Termin eintragen',
    desc: 'Tragen Sie den Termin direkt in Ihren Kalender ein, für Apple oder Google.',
    tag: 'Zuerst',
    tagColor: 'text-[#003566] bg-[#003566]/6 border-[#003566]/20',
    calLinks: true,
  },
  {
    num: '02',
    emoji: '💬',
    label: 'WhatsApp prüfen',
    desc: 'Sie bekommen gleich eine kurze Bestätigung von mir. Falls innerhalb von 24 Stunden nichts ankommt, schreiben Sie mir einfach kurz.',
    tag: 'Kommt zeitnah',
    tagColor: 'text-green-700 bg-green-50 border-green-200',
  },
  {
    num: '03',
    emoji: '🎯',
    label: 'Bereit zum Termin erscheinen',
    desc: 'Sorgen Sie dafür, dass Sie zum Termin ungestört sind. Ein ruhiger, fokussierter Moment reicht, wir telefonieren kurz und ich teile meinen Bildschirm.',
    tag: 'Zum Termin',
    tagColor: 'text-[#003566] bg-[#003566]/6 border-[#003566]/20',
  },
]


const faqs = [
  {
    question: 'Was unterscheidet Sie von anderen Webdesignern?',
    answer: 'Die meisten Webdesigner bauen Seiten, die nur schön aussehen, aber keine Anfragen bringen.\n\n* **Fokus auf Anfragen:** Ihre Seite wird gezielt so aufgebaut, dass lokale Kunden direkt anrufen oder anfragen.\n* **Ihr Tagesgeschäft läuft weiter:** Sie bekommen eine professionelle, optimierte Website, ohne selbst Stunden investieren zu müssen.\n\n* **Ihr Vorteil:** Sie machen sich unabhängig von reiner Mundpropaganda durch einen digitalen Kanal, der darauf ausgelegt ist, neue Aufträge aus Ihrer Region anzuziehen.',
  },
  {
    question: 'Ich habe noch keine Website. Lohnt sich das Gespräch trotzdem?',
    answer: 'Ja, **gerade dann!** Während Sie sich auf Ihre Arbeit konzentrieren, plane ich Ihren digitalen Start:\n\n* **Umfang:** Was brauchen Sie wirklich für den Start (z. B. Homepage, Leistungsseiten, Team-Seite)?\n\n**Ihr Vorteil:** Sie bekommen ein Konzept, das von Grund auf dafür entwickelt wurde, Ihren Betrieb in der Region sichtbar zu machen und Anfragen zu generieren.',
  },
  {
    question: 'Ich bin nicht sicher, ob ich überhaupt eine neue Website brauche.',
    answer: 'Das finde ich in der Analyse sofort für Sie heraus, ehrlich und ohne Schönrednerei.\n\n* **Schwachstellen-Check:** Ich prüfe, ob Ihre aktuelle Seite potenzielle Kunden an die Konkurrenz verliert.\n* **Fokus auf Nutzen:** Wenn Ihre Seite gut läuft, sage ich Ihnen das. Ein Neubau kommt nur infrage, wenn er Ihnen mehr Umsatz bringt.\n\n* **Ihr Vorteil:** Sie erfahren schwarz auf weiß, ob Ihre Website aktuell Aufträge blockiert oder optimal darauf ausgelegt ist, Kunden zu gewinnen.',
  },
  {
    question: 'Wie läuft das Gespräch genau ab?',
    answer: 'Kurz, direkt und komplett ohne Verkaufsdruck oder Fachchinesisch:\n\n* **Live-Analyse:** Per Bildschirmübertragung zeige ich Ihnen konkrete Schwachstellen Ihrer Seite & was Sie tun können, um diese zu verbessern.\n* **Strategie-Check:** Falls keine Seite vorhanden ist, plane ich das Grundgerüst für Ihren Betrieb.\n\n* **Ihr Vorteil:** Sie nehmen sofort konkrete Hebel mit, die darauf ausgelegt sind, Ihre lokale Sichtbarkeit zu erhöhen.',
  },
  {
    question: 'Muss ich mich vorbereiten?',
    answer: 'Nein. Sie müssen weder Unterlagen heraussuchen noch wertvolle Zeit investieren.\n\n* **Meine Aufgabe:** Ich analysiere Ihren lokalen Markt und Ihren Auftritt vorab vollständig.\n* **Ihre Aufgabe:** Einfach zum vereinbarten Zeitpunkt kurz Zeit nehmen, das war’s.\n\n* **Ihr Vorteil:** Voller Fokus auf Ihr Tagesgeschäft, null zeitlicher Aufwand vorab für Sie.',
  },
  {
    question: 'Was kostet eine Website bei Ihnen?',
    answer: 'Ich halte meine Preise absolut transparent, kalkulierbar und ohne versteckte Kosten:\n\n* **Start-Deal:** Für die nächsten 2–3 Kunden liegt der Einstiegspreis bei **800 €**.\n* **Regulär:** Nach der Startphase kosten die Projekte je nach Umfang zwischen **1.500 € und 2.500 €**.\n\n* **Ihr Vorteil:** Ein faires Angebot ohne Risiko, entwickelt, um schnellen Umsetzern den besten Einstiegspreis zu sichern.',
  },
  {
    question: 'Was, wenn ich den Termin verschieben muss?',
    answer: 'Das ist absolut kein Problem. Auf dem Bau oder im Betrieb kommt immer etwas dazwischen.\n\n* **Kurze Nachricht:** Schreiben Sie mir einfach so früh wie möglich per WhatsApp.\n* **Neuer Termin:** Ich finde sofort und unkompliziert ein neues Zeitfenster.\n\n* **Ihr Vorteil:** Kein bürokratischer Aufwand, keine Rechtfertigungen.',
  },
  {
    question: 'Ich habe noch eine offene Frage.',
    answer: 'Lassen Sie uns das direkt und auf dem schnellsten Weg klären:\n\n* **Direkter Draht:** Schreiben Sie mir einfach ganz unkompliziert per WhatsApp.\n* **Echte Antwort:** Ich antworte Ihnen persönlich und ohne anonyme Bot-Nachrichten.\n\n* **Ihr Vorteil:** Sie haben meistens innerhalb eines Werktags Klarheit.',
  },
];



// ─── FAQ Accordion Item ───────────────────────────────────────────────────────

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const answerRef = useRef(null)
  const isOpen = openIndex === index

  useEffect(() => {
    if (!answerRef.current || !isOpen) return
    gsap.fromTo(
      answerRef.current,
      { opacity: 0, y: -4 },
      { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' }
    )
  }, [isOpen])

  // Hilfsfunktion: Wandelt Text-Absätze und Markdown-Formatierung (**text** und *) in HTML um
  const formatAnswer = (text) => {
    return text.split('\n\n').map((paragraph, pIdx) => {
      // Prüfen, ob der Absatz ein Listenpunkt ist
      if (paragraph.trim().startsWith('*')) {
        const listItems = paragraph.split('\n').map((item, lIdx) => {
          const cleanItem = item.replace(/^\*\s*/, '');
          return (
            <li key={lIdx} dangerouslySetInnerHTML={{
              __html: cleanItem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
          );
        });
        return <ul key={pIdx} className="list-disc pl-5 space-y-1 mb-2 last:mb-0">{listItems}</ul>;
      }

      // Normaler Textabsatz mit eventuellem Fettdruck
      const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return (
        <p
          key={pIdx}
          className="mb-3 last:mb-0"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  return (
    <div className={`border rounded-xl bg-white transition-all duration-200 overflow-hidden
      ${isOpen ? 'border-[#003566]/25 shadow-sm' : 'border-black/[0.07] hover:border-black/[0.12]'}`}>
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-start text-left px-5 py-4 gap-4 cursor-pointer"
      >
        <span className={`font-black text-sm sm:text-[15px] leading-snug transition-colors duration-150
          ${isOpen ? 'text-[#003566]' : 'text-black'}`}>
          {faq.question}
        </span>
        <FaChevronDown
          className={`mt-0.5 flex-shrink-0 text-xs transition-all duration-300
            ${isOpen ? 'rotate-180 text-[#003566]' : 'text-black/30'}`}
        />
      </button>
      {isOpen && (
        <div ref={answerRef} className="px-5 pb-5 pt-0">
          <div className="h-px bg-black/[0.05] mb-4" />
          <div className="text-[13px] sm:text-sm text-[#000814]/60 leading-relaxed">
            {formatAnswer(faq.answer)}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const Danke = () => {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const elements = sectionRef.current.querySelectorAll('.ca')
    gsap.fromTo(
      elements,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.1 }
    )
  }, [])

  return (
    <>
      <Helmet>
        <title>Anfrage erhalten, Nächste Schritte | Franco Cipolla</title>
        <meta
          name="description"
          content="Deine Anfrage ist angekommen. Ich melde mich persönlich per WhatsApp."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/danke" />
      </Helmet>

      <section
        ref={sectionRef}
        className="w-full min-h-screen mt-10 md:mt-20 flex flex-col items-center bg-gray-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-[600px] lg:max-w-[880px]">

          {/* ── HERO ───────────────────────────────────────────────────── */}
          <div className="ca flex flex-col items-center text-center pt-20 pb-10 sm:pt-20 sm:pb-20">

  {/* Badge */}
  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#003566]/10 via-[#001D3D]/5 to-[#00A6FB]/10 backdrop-blur-sm border border-[#003566]/15 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm mb-5 sm:mb-6">
    <span className="text-xs sm:text-[13px] font-semibold text-[#003566] tracking-tight">
      🚀 Anfrage erfolgreich übermittelt
    </span>
  </div>

  {/* Headline */}
  <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.18] mb-3 max-w-[90%] sm:max-w-none">
    Moment! Ihr Termin<br className="hidden sm:block" /> ist noch nicht bestätigt.
  </h1>

  <p className="text-[15px] sm:text-lg text-[#000814]/50 font-semibold mb-4">
    Ich melde mich persönlich. Versprochen.
  </p>

  <p className="text-[13px] sm:text-base text-[#000814]/55 leading-relaxed max-w-[90%] sm:max-w-[460px]">
    Sie haben den ersten Schritt gemacht. Ich schaue mir Ihre Situation jetzt genau an und melde mich innerhalb von 24 Stunden per WhatsApp.
  </p>


  {/* Scroll Hinweis */}
  <div className="mt-12 animate-bounce">
    <svg
      className="w-6 h-6 text-[#003566]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>

</div>

          {/* ── NEXT STEPS  flex row desktop, stacked mobile ─────────── */}
          <div className="ca py-10 pt-5 sm:py-20">
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#001D3D]/35 mb-4 sm:mb-6 text-center sm:text-left">
              Ihr kurzer Check vor dem Termin
            </p>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="flex-1 bg-white border border-black/[0.07] rounded-2xl p-5 sm:p-6 flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#003566]/10 to-[#00A6FB]/10 border border-[#003566]/15 flex items-center justify-center mb-4">
                    <span className="text-lg sm:text-xl">{s.emoji}</span>
                  </div>

                  {/* Tag row */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-[#003566]/40 tracking-widest">{s.num}</span>
                    <span className={`text-[10px] font-black uppercase tracking-wide border rounded-full px-2 py-0.5 ${s.tagColor}`}>
                      {s.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="font-black text-[15px] text-black mb-1.5 leading-snug">{s.label}</p>
                  <p className="text-[13px] sm:text-sm text-[#000814]/55 leading-relaxed flex-1">{s.desc}</p>

                  {s.calLinks && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#003566] bg-[#003566]/6  rounded-lg px-3 py-1.5  active:scale-95 transition-all duration-150"
                      >
                        <FaApple className="text-sm" />
                        Apple Kalender
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#003566] bg-[#003566]/6  rounded-lg px-3 py-1.5  active:scale-95 transition-all duration-150"
                      >
                        <GoogleIcon />
                        Google Kalender
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── TESTIMONIAL ────────────────────────────────────────────── */}
          <div className="ca py-10 sm:py-20">
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#001D3D]/35 mb-4 sm:mb-6">
              Kundenstimme
            </p>

            <a
              href="https://share.google/YqweQocfV3ABWOjb1"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-gradient-to-br from-[#001D3D] to-[#003566] p-6 sm:p-8 border border-[#003566] hover:border-[#00A6FB]/40 transition-colors duration-300 cursor-pointer"
            >
              {/* Stars */}
              <div className="flex flex-col gap-1.5 mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div className="flex items-center gap-1.5">
                  <GoogleIcon />
                  <span className="text-[11px] font-semibold text-white/40 tracking-tight">
                    Verifizierte Bewertung
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-[#00A6FB] text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">
                "Spürbar mehr Anfragen nach der Website-Analyse"
              </p>

              {/* Quote mark */}
              <span className="block text-[56px] sm:text-[64px] leading-none font-black text-[#00A6FB]/20 -mt-4 mb-2 select-none">„</span>

              {/* Quote */}
              <p className="text-white font-black text-base sm:text-xl leading-snug tracking-tight">
                Franco hat mir gezeigt, wo meine Website Anfragen verliert
                Stellen die sogar mein alter Webdesigner nicht gesehen hat.
                Durch Franco habe ich nun spürbar mehr Anfragen.
                Klare Empfehlung!
              </p>

              {/* Attribution */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#00A6FB]/20 border border-[#00A6FB]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00A6FB] text-[10px] font-black">KF</span>
                  </div>
                  <span className="text-white/40 text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
                    Kevin Förster · Geschäftsführer
                  </span>
                </div>
                <span className="text-[#00A6FB]/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest group-hover:text-[#00A6FB] transition-colors duration-300">
                  Bewertung ansehen →
                </span>
              </div>
            </a>
          </div>

          {/* ── FAQ ────────────────────────────────────────────────────── */}
          <div className="ca py-10 sm:py-20">
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#001D3D]/35 mb-4 sm:mb-6">
              Häufige Fragen
            </p>

            <div className="flex flex-col gap-2 mb-3">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  index={i}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>

            {/* Noch Fragen Box */}
            <div className="mt-2 rounded-2xl border border-[#003566]/20 bg-gradient-to-r from-[#001D3D]/4 via-transparent to-[#00A6FB]/5 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-[3px] self-stretch rounded-full bg-[#003566]/60 hidden sm:block flex-shrink-0" />
                  <div>
                    <p className="font-black text-[15px] text-black mb-1">Noch eine offene Frage?</p>
                    <p className="text-[13px] text-black/50 leading-relaxed">
                      Ich antworte persönlich  kein Automatikantworter. <br className="hidden sm:block" />
                       In der Regel innerhalb von 24 Stunden.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:flex-shrink-0">
                  <a
                    href="https://wa.me/4917675398004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-black text-white bg-green-500 rounded-xl shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-150 whitespace-nowrap"
                  >
                    <FaWhatsapp className="text-base" />
                    Per WhatsApp fragen
                  </a>
                  <span className="text-[11px] text-black/35 text-center sm:text-right">Unverbindlich · Schnelle Antwort</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── FINAL CTA  single, focused ───────────────────────────── */}
          <div className="ca py-10 sm:py-20 flex flex-col items-center text-center">
            <p className="text-[13px] sm:text-sm text-black/45 mb-3 max-w-[340px]">
              Bis zum Termin: praxisnahe Tipps & Einblicke, wie Sie mehr Kunden über Ihre Website gewinnen.

            </p>
            <a
              href="https://www.instagram.com/francocipolla.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#003566] via-[#001D3D] to-[#00A6FB] text-white font-black px-7 py-4 rounded-xl shadow-lg text-sm hover:-translate-y-1 hover:scale-[1.02] active:scale-95 transition-all duration-200 w-full sm:w-auto"
            >
              <FaInstagram className="text-lg flex-shrink-0" />
              Lernen Sie mich auf Instagram kennen
            </a>
          </div>

          {/* Footer */}
          <p className="ca text-center text-[11px] text-black/25 pb-10 sm:pb-16 leading-relaxed">
            Franco Cipolla · Webdesign &amp; Digitale Kundengewinnung · Ennepetal, NRW
          </p>

        </div>
      </section>
    </>
  )
}

export default Danke
