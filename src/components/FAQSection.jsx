import React, { useRef, useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from './gsapSetup'
import { FaChevronDown } from 'react-icons/fa'
import CTA2 from './CTA2'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'Warum brauche ich überhaupt eine Website?',
    answer: (
      <div className="space-y-2">
        <p>
          Eine professionelle Website ist mehr als eine digitale Visitenkarte. Sie schafft Vertrauen,
          macht dich sichtbar und hilft dir, neue Kunden zu gewinnen.
        </p>
        <p>
          Egal ob Dienstleistung, Produkt oder Portfolio: Ohne Online-Präsenz verschenkst du
          Potenzial und Geld.
        </p>
      </div>
    ),
  },
  {
    question: 'Was bekomme ich konkret?',
    answer: (
      <div className="space-y-2">
        <p>
          Du bekommst eine maßgeschneiderte Website, die nicht nur gut aussieht,
          sondern auch Kunden gewinnt:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Modernes Design</li>
          <li>Klare Struktur</li>
          <li>Mobile Optimierung</li>
          <li>OnPage-SEO</li>
          <li>Starke Performance</li>
          <li>Texte die vertrauen schaffen</li>

        </ul>
        <p>Kein Baukasten – sondern echtes Handwerk.</p>
      </div>
    ),
  },
  {
    question: 'Wie viel kostet eine Website ungefähr?',
    answer: (
      <div className="space-y-2">
        <p>
          Jedes Projekt ist individuell. Deshalb gibt es keine Pauschalpreise.
          Der Ablauf sieht so aus:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            <strong>Erstgespräch</strong> – Wir sprechen über Ihre Vorstellungen, Ziele und Anforderungen.
          </li>
          <li>
            <strong>Analyse & Planung</strong> – Ich verschaffe mir ein klares Bild über den Aufwand und die benötigten Funktionen.
          </li>
          <li>
            <strong>Individuelles Angebot</strong> – Sie erhalten ein transparentes Angebot, das genau zu Ihrem Projekt passt.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: 'Wie lange dauert die Umsetzung einer Website?',
    answer: (
      <div className="space-y-2">
        <p>
          Das hängt stark vom Umfang ab:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Einfache Landingpage: ca. 1–2 Wochen</li>
          <li>Komplexere Projekte: entsprechend länger</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Bekomme ich die Website nach der Fertigstellung?',
    answer: (
      <div className="space-y-2">
        <p>
          Natürlich. Nach vollständiger Bezahlung erhältst du die Website über deinen Hosting/Wordpress zugang.
        </p>
      </div>
    ),
  },
  {
    question: 'Was passiert, wenn ich später etwas ändern will?',
    answer: (
      <div className="space-y-2">
        <p>Ich biete monatliche Wartung an um dein SEO aktiv zu verbessern, sowie begrenzt Änderungen vorzunehmen.</p>
        <p>
          Der monatliche Preis richtet sich nach dem Umfang der Webiste.
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
          Noch Fragen offen?
        </p>
        <CTA2 />
      </div>
    </section>
  )
}

export default FAQSection
