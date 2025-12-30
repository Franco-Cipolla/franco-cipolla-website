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
          Viele Websites sehen gut aus aber <strong>besucher wissen nicht, was sie tun sollen</strong>.
          Ergebnis: Keine Anfragen, verlorene Chancen.
        </p>
        <p>

          Ich erstelle Websites, die Besucher gezielt führen, Vertrauen aufbauen und Schritt für Schritt zu einer Anfrage bringen.
            <br></br>    <br></br>
          Inklusive <strong>Conversion-optimierter Struktur, Google Maps Integration und personalisierten Mini-Videos</strong>.
        </p>
      </div>
    ),
  },
  {
    question: 'Was bekomme ich konkret?',
    answer: (
      <div className="space-y-2">
        <p>
          Sie bekommen nicht nur eine „schöne Website“, sondern ein System, das <strong>direkt neue Kunden generiert</strong>.
        </p>
        <ul className="list-disc list-inside space-y-8">
          <li className='mt-8'>Conversion-optimierte Struktur & Texte → Besucher werden zu Anfragen</li>
          <li>Modernes Design & Branding → Vertrauen & Professionalität</li>
          <li>Mobile-optimiert & blitzschnell → kein Kunde geht verloren</li>
          <li>Google Maps & lokale Sichtbarkeit → Kunden finden Sie sofort</li>
          <li>Mini-Videos → direkt auf Social Media anwendbar</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Wie viel Zeitaufwand habe ich selbst?',
    answer: (
      <div className="space-y-2">
        <p>
          Minimal. Sie liefern Hosting, Zugänge, Logos, Fotos.  <strong>Alles andere erledige ich komplett</strong>.
        </p>
        <p>
          Struktur, Texte, Design, Technik und Livegang. Ihre Website entsteht, während Sie sich auf Ihr Business konzentrieren.
        </p>
      </div>
    ),
  },
  {
    question: 'Wie viel kostet eine Website?',
    answer: (
      <div className="space-y-2">
        <p>
          Für Selbstständige und kleine Unternehmen liegen Projekte meist zwischen <strong>800 € und 1.500 €</strong>.
        </p>
        <p>
          Im kostenlosen Erstgespräch klären wir, was Sie wirklich brauchen. Danach erhalten Sie ein <strong>transparentes Festpreis-Angebot</strong>. Ohne versteckte Kosten.
        </p>
      </div>
    ),
  },
  {
    question: 'Wie lange dauert die Umsetzung?',
    answer: (
      <div className="space-y-2">
        <p>
          Die meisten Websites sind innerhalb von <strong>2–4 Wochen</strong> live.
        </p>
        <p>
          Dank klarem Ablauf bleibt Ihr Zeitaufwand minimal. Kein Warten, kein Stress.
        </p>
      </div>
    ),
  },
  {
    question: 'Was, wenn die Website keine Anfragen bringt?',
    answer: (
      <div className="space-y-2">
        <p>
          Ich verspreche keine Wunder, sondern <strong>messbare Ergebnisse</strong> dank erprobter Methoden.
        </p>
        <p>
          Im Erstgespräch sage ich ehrlich, ob eine neue Website jetzt sinnvoll ist oder ob andere Maßnahmen wichtiger wären. Sie erhalten <strong>klar planbare Leads</strong>.
        </p>
      </div>
    ),
  },
  {
  question: 'Kann ich einzelne Elemente kaufen?',
  answer: 'Nein. Ich biete ausschließlich das komplette Paket an. So stellen ich sicher, dass Ihre Website optimal aufgebaut ist, um Besucher Schritt für Schritt zur Anfrage zu führen.'
}
,
  {
    question: 'Gehört mir die Website nach der Fertigstellung?',
answer: (
  <div className="space-y-2">
    <p>
      Ja. Die Website gehört <strong>vollständig Ihnen</strong>. Sie behalten volle Kontrolle über Hosting, Website und Inhalte.
    </p>
    <p>
      Ich erhalte lediglich die notwendigen Zugänge, um die Website aufzubauen.   <br></br>   <br></br>  Änderungen können Sie selbst vornehmen oder mich optional beauftragen. Ganz ohne Einschränkungen.
    </p>
  </div>
      )
  },
  {
    question: 'Kann ich später Änderungen vornehmen?',
answer: (
  <div className="space-y-2">
    <p>
      Kleinere Anpassungen lassen sich jederzeit unkompliziert umsetzen. Pofessionell und ohne Ihre laufenden Anfragen zu beeinträchtigen.
    </p>
    <p>
      Für regelmäßige Optimierung biete ich optionale Wartungspakete an, <strong>monatlich kündbar & ohne Verpflichtung</strong>.
    </p>
  </div>
      )
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
            className="faq-item border cursor-pointer border-gray-200 rounded-xl p-6 shadow-sm transition duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
          Noch unsicher, ob das für Sie Sinn macht? <br />
          Lassen Sie uns gemeinsam klären, wie Ihre Website direkt neue Kunden bringen kann.
        </p>
        <CTA2 />
      </div>
    </section>
  )
}

export default FAQSection
