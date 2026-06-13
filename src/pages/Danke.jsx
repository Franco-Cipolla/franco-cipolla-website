import React, { useRef, useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp, FaChevronDown, FaApple, FaGoogle } from 'react-icons/fa'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const steps = [
  {
    num: 1,
    icon: '💬',
    label: 'WhatsApp checken',
    desc: 'Du bekommst gleich eine Bestätigung von mir per WhatsApp. Falls du in 30 Minuten nichts siehst, schreib mir kurz.',
  },
  {
    num: 2,
    icon: '📅',
    label: 'Termin in deinen Kalender eintragen',
    desc: 'Sobald wir einen Termin vereinbart haben, schicke ich dir direkt einen Link — für Apple Kalender oder Google Kalender. Ein Klick, fertig.',
    calLinks: true,
  },
  {
    num: 3,
    icon: '✅',
    label: 'Auf meine Nachricht antworten',
    desc: 'Ich schreibe dir zuerst eine kurze Bestätigung. Die Termindetails kommen dann ebenfalls per WhatsApp — alles an einem Ort.',
  },
]

const faqs = [
  {
    question: 'Was unterscheidet dich von anderen Webdesignern?',
    answer: 'Die meisten Webdesigner liefern eine schöne Website — die informiert, aber nicht überzeugt. Meine Websites sind auf eines ausgelegt: Besucher gezielt zur Anfrage zu führen. Struktur, Texte und Aufbau folgen einer klaren Logik, die Interessenten Schritt für Schritt in Kunden verwandelt. Das Ergebnis ist kein Designprojekt — es ist ein System, das für dich arbeitet.',
  },
  {
    question: 'Ich habe noch keine Website. Lohnt sich das Gespräch trotzdem?',
    answer: 'Ja — gerade dann. Wir klären gemeinsam, wie du messbar neue Anfragen gewinnen kannst, welchen Umfang deine Website dafür wirklich braucht und welche nächsten Schritte für dich sinnvoll sind. Du weißt danach genau, was zu tun ist — ohne Umwege.',
  },
  {
    question: 'Ich bin nicht sicher, ob ich überhaupt eine neue Website brauche.',
    answer: 'Das ist genau der richtige Zeitpunkt für das Gespräch. Die Analyse zeigt zuerst, ob deine bestehende Seite grundlegende Dinge besser machen könnte — manchmal reichen kleine Änderungen. Ob eine neue Website sinnvoll ist, besprechen wir erst danach und nur wenn du das möchtest. Du gehst in jedem Fall mit konkreten Erkenntnissen raus: ob deine Website gerade Kunden kostet, und wenn ja, warum.',
  },
  {
    question: 'Wie läuft das Gespräch genau ab?',
    answer: 'Bei der Website-Analyse telefonieren wir kurz, ich teile meinen Bildschirm und zeige dir direkt auf deiner Seite, wo du Anfragen verlierst — und was du dagegen tun könntest. Im Strategiegespräch (falls noch keine Website vorhanden) klären wir gemeinsam: wie du messbar neue Anfragen gewinnst, welchen Umfang du dafür brauchst und welche Schritte als nächstes sinnvoll sind.',
  },
  {
    question: 'Muss ich mich vorbereiten?',
    answer: 'Nein. Ich habe alle nötigen Informationen und bereite mich vollständig vor. Du musst nichts mitbringen — einfach zum vereinbarten Zeitpunkt da sein.',
  },
  {
    question: 'Was, wenn ich den Termin verschieben muss?',
    answer: 'Kein Problem. Schreib mir einfach per WhatsApp — so früh wie möglich, damit wir schnell einen neuen Termin finden. Ganz unkompliziert, kein Aufwand.',
  },
  {
    question: 'Ich habe noch eine offene Frage vor dem Gespräch.',
    answer: 'Einfach per WhatsApp schreiben. Ich antworte persönlich — kein Automatikantworter, in der Regel innerhalb eines Werktags.',
  },
]

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const answerRef = useRef(null)
  const isOpen = openIndex === index

  useEffect(() => {
    if (!answerRef.current) return
    if (isOpen) {
      gsap.fromTo(answerRef.current, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' })
    }
  }, [isOpen])

  return (
    <div className="faq-item border border-black/[0.08] rounded-xl bg-white overflow-hidden transition-shadow duration-200 hover:shadow-sm">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center text-left px-5 py-4 cursor-pointer gap-4"
      >
        <span className="font-black text-sm sm:text-base text-black leading-snug">{faq.question}</span>
        <FaChevronDown
          className={`text-[#003566]/40 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div ref={answerRef} className="px-5 pb-5 text-sm text-[#000814]/60 leading-relaxed border-t border-black/[0.06] pt-4">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

const Danke = () => {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const elements = sectionRef.current.querySelectorAll('.ca')
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12 }
    )
  }, [])

  return (
    <>
      <Helmet>
        <title>Anfrage erhalten – Nächste Schritte | Franco Cipolla</title>
        <meta
          name="description"
          content="Deine Anfrage ist angekommen. Ich melde mich persönlich per WhatsApp."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/danke" />
      </Helmet>

      <section
        ref={sectionRef}
        className="w-full min-h-screen flex flex-col items-center px-4 sm:px-6 xl:px-0 py-16 pt-24 bg-gray-50"
      >
        <div className="w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[900px] py-12 sm:py-16 lg:py-24">

          {/* Badge */}
          <div className="ca flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#003566]/10 via-[#001D3D]/5 to-[#00A6FB]/10 backdrop-blur-sm border border-[#003566]/15 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-[13px] md:text-sm font-medium text-[#003566] tracking-tight">
                🚀 Anfrage erfolgreich übermittelt
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="ca text-center mb-4">
            <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-tight">
              Moment — deine Anfrage<br className="hidden sm:block" /> ist noch nicht bestätigt.
            </h1>
            <p className="text-lg text-[#000814]/50 font-semibold mt-3">
              Ich melde mich persönlich. Versprochen.
            </p>
          </div>

          {/* Sub */}
          <p className="ca text-center text-base xl:text-lg text-[#000814]/60 leading-relaxed mb-5 max-w-md mx-auto">
            Du hast den ersten Schritt gemacht. Ich schaue mir deine Situation jetzt genau an und melde mich innerhalb von 24 Stunden per WhatsApp.
          </p>

          {/* Scarcity */}
          <div className="ca flex justify-center mb-8">
            <span className="text-sm text-black/50 text-center">
              ⚡ Hinweis: Ich nehme nur <strong className="text-black/70">2 Projekte pro Monat</strong> an, um die bestmöglichen Ergebnisse zu erzielen.
            </span>
          </div>

          {/* Next Steps */}
          <div className="ca bg-white border border-black/[0.08] rounded-2xl p-5 sm:p-6 mb-4">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#001D3D]/40 mb-5">
              Deine nächsten Schritte
            </p>
            <div className="flex flex-col divide-y divide-black/[0.06]">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-4 py-3.5 first:pt-0 last:pb-0">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#003566]/10 to-[#00A6FB]/10 border border-[#003566]/15 flex items-center justify-center text-sm font-black text-[#003566]">
                    {s.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-black mb-0.5">{s.label}</p>
                    <p className="text-sm text-[#000814]/55 leading-relaxed mb-0">{s.desc}</p>
                    {s.calLinks && (
                      <div className="flex gap-2 mt-2.5">
                        <a
                          href="#"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003566] bg-[#003566]/6 border border-[#003566]/15 rounded-lg px-3 py-1.5 hover:bg-[#003566]/10 transition-colors duration-150"
                        >
                          <FaApple className="text-sm" />
                          Apple Kalender
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003566] bg-[#003566]/6 border border-[#003566]/15 rounded-lg px-3 py-1.5 hover:bg-[#003566]/10 transition-colors duration-150"
                        >
                          <GoogleIcon />
                          Google Kalender
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="ca mb-4">
            <a
              href="https://share.google/YqweQocfV3ABWOjb1"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl bg-gradient-to-br from-[#001D3D] to-[#003566] px-6 py-7 sm:px-8 sm:py-8 border border-[#003566] hover:border-[#00A6FB]/40 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex flex-col gap-1.5 mb-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.06 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.287-3.957z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <GoogleIcon />
                  <span className="text-[11px] font-semibold text-white/40 tracking-tight whitespace-nowrap">
                    Verifizierte Bewertung
                  </span>
                </div>
              </div>

              <p className="text-[#00A6FB] text-xs font-black uppercase tracking-widest mb-1">
                "Spürbar mehr Anfragen nach der Website-Analyse"
              </p>
              <span className="block text-[64px] leading-none font-black text-[#00A6FB]/20 -mt-5 mb-3 select-none">„</span>
              <p className="text-white font-black text-lg sm:text-xl leading-snug tracking-tight">
                Franco hat mir gezeigt, wo meine Website Anfragen verliert —
                Stellen die sogar mein alter Webdesigner nicht gesehen hat.
                Durch Franco habe ich nun spürbar mehr Anfragen.
                Klare Empfehlung!
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#00A6FB]/20 border border-[#00A6FB]/30 flex items-center justify-center shrink-0">
                    <span className="text-[#00A6FB] text-[10px] font-black">KF</span>
                  </div>
                  <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                    Kevin Förster · Geschäftsführer
                  </span>
                </div>
                <span className="text-[#00A6FB]/50 text-xs font-bold uppercase tracking-widest group-hover:text-[#00A6FB] transition-colors duration-300 whitespace-nowrap">
                  Bewertung auf Google ansehen →
                </span>
              </div>
            </a>
          </div>

          {/* FAQ */}
          <div className="ca mb-5">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#001D3D]/40 mb-4">
              Häufige Fragen
            </p>
            <div className="flex flex-col gap-2">
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

            {/* Noch Fragen Box — aus FAQSectionHagen */}
            <div className="mt-3 rounded-xl border border-[#003566]/25 bg-gradient-to-r from-[#001D3D]/4 via-transparent to-[#00A6FB]/5 px-6 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-[3px] self-stretch rounded-full bg-[#003566] opacity-70 hidden sm:block" />
                  <div>
                    <p className="font-black text-base text-black">Noch eine offene Frage?</p>
                    <p className="mt-0.5 text-sm text-black/55 leading-relaxed">
                      Ich antworte persönlich — kein Automatikantworter.<br className="hidden sm:block" /> In der Regel innerhalb von 24 Stunden.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                  <a
                    href="https://wa.me/4917675398004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black text-white bg-green-500 rounded-lg shadow-sm hover:-translate-y-0.5 transition-transform duration-150 whitespace-nowrap"
                  >
                    <FaWhatsapp className="text-base" />
                    Per WhatsApp fragen
                  </a>
                  <span className="text-xs text-black/35">Unverbindlich · Schnelle Antwort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social CTAs nebeneinander */}
          <div className="ca flex gap-3">
            <a
              href="https://www.instagram.com/francocipolla.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#003566] via-[#001D3D] to-[#00A6FB] text-white font-semibold px-4 py-3.5 rounded-xl shadow-lg text-sm transition transform hover:-translate-y-1 hover:scale-105 duration-200"
            >
            <FaInstagram className="text-lg" />
              Instagram folgen
            </a>

          </div>

          <p className="ca text-center text-xs text-black/25 mt-8 leading-relaxed">
            Franco Cipolla · Webdesign &amp; Digitale Kundengewinnung · Ennepetal, NRW
          </p>

        </div>
      </section>
    </>
  )
}

export default Danke
