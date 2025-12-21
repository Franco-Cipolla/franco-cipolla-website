import React, { useRef, useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from './gsapSetup'
import { FaChevronDown } from 'react-icons/fa'
import CTA2 from './CTA2'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'Warum bringt meine aktuelle Website keine Anfragen?',
    answer: (
      <div className="space-y-2">
        <p>
          Die meisten Websites scheitern nicht am Design,
          sondern daran, dass Besucher nicht wissen,
          <strong> was sie als Nächstes tun sollen</strong>.
        </p>
        <p>
          Eine strategisch aufgebaute Website führt Besucher gezielt,
          baut Vertrauen auf und lenkt sie zur Anfrage,
          statt sie zu verwirren oder zu verlieren.
        </p>
      </div>
    ),
  },
  {
    question: 'Was bekomme ich konkret?',
    answer: (
      <div className="space-y-2">
        <p>
          Sie bekommen keine „schöne Website“,
          sondern ein System, das darauf ausgelegt ist,
          <strong> aus Besuchern echte Anfragen zu machen</strong>.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Klare Struktur statt Verwirrung</li>
          <li>Texte, die Vertrauen aufbauen</li>
          <li>Mobile-optimierte Darstellung</li>
          <li>Schnelle Ladezeiten</li>
          <li>Suchmaschinenfreundliche Umsetzung</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Wie viel Zeitaufwand habe ich selbst mit der Website?',
    answer: (
      <div className="space-y-2">
        <p>
          So gut wie keinen.
        </p>
        <p>
          Sie stellen das Hosting bereit, geben mir die nötigen Zugänge
          sowie die wichtigsten Informationen zu Ihrem Unternehmen
          und vorhandenes Material wie Fotos oder Logos.

        </p>
        <p>
          <strong>Alles andere übernehme ich vollständig. </strong>
           Struktur, Texte, Design, Technik und Livegang.
          Die Website entsteht,
          während Sie sich um Ihr Tagesgeschäft kümmern.
        </p>
      </div>
    ),
  },
  {
    question: 'Wie viel kostet eine Website ungefähr?',
    answer: (
      <div className="space-y-2">
        <p>
          Die meisten Projekte für Selbstständige und Unternehmen
          liegen zwischen <strong>800 € und 1.500 €</strong>,
          abhängig vom Umfang und den Anforderungen.
        </p>
        <p>
          Im kostenlosen Erstgespräch klären wir,
          was für Sie sinnvoll ist – und was nicht.
          Danach erhalten Sie ein
          <strong> transparentes Festpreis-Angebot</strong>.
        </p>
      </div>
    ),
  },
  {
    question: 'Wie lange dauert die Umsetzung?',
    answer: (
      <div className="space-y-2">
        <p>
          Die meisten Websites sind innerhalb von
          <strong> 2–4 Wochen</strong> online.
        </p>
        <p>
          Durch einen klaren Ablauf bleibt der Zeitaufwand
          für Sie minimal und das Projekt verzögert sich nicht.
        </p>
      </div>
    ),
  },
  {
    question: 'Was, wenn die Website keine Anfragen bringt?',
    answer: (
      <div className="space-y-2">
        <p>
          Ich verspreche keine Wunder,
          sondern eine saubere, strategische Umsetzung
          nach bewährten Prinzipien.
        </p>
        <p>
          Im Erstgespräch sage ich Ihnen ehrlich,
          ob eine neue Website für Ihre Situation sinnvoll ist
          oder ob andere Maßnahmen aktuell wichtiger wären.
        </p>
      </div>
    ),
  },
  {
    question: 'Gehört mir die Website nach der Fertigstellung?',
    answer: (
      <div className="space-y-2">
        <p>
          Ja. Die Website gehört
          <strong> vollständig Ihnen</strong>.
        </p>
        <p>
          Sie erhalten alle Zugänge
          und entscheiden selbst,
          ob Sie später Änderungen eigenständig vornehmen
          oder mich weiter beauftragen möchten.
        </p>
      </div>
    ),
  },
  {
    question: 'Was passiert, wenn ich später etwas ändern möchte?',
    answer: (
      <div className="space-y-2">
        <p>
          Änderungen sind jederzeit möglich.
          Kleine Anpassungen lassen sich flexibel umsetzen.
        </p>
        <p>
          Für regelmäßige Betreuung oder SEO-Optimierung
          biete ich optionale Wartungspakete an –
          <strong> ohne Verpflichtung</strong>.
        </p>
      </div>
    ),
  },
]

const FAQSection = () => {
  const sectionRef = useRef(null)
  const ctaRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.faq-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    )

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="py-20 px-6 text-black">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Häufige Fragen
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item border cursor-pointer border-gray-200 rounded-xl p-5 shadow-sm transition duration-300"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full cursor-pointer flex justify-between items-center text-left"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="mt-4 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div ref={ctaRef} className="text-center mt-12 w-full">
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto my-6">
          Noch unsicher, ob das für Sie Sinn macht?
        </p>
        <CTA2 />
      </div>
    </section>
  )
}

export default FAQSection
