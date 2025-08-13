import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaChevronDown } from 'react-icons/fa'
import CTA2 from './CTA2'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'Warum brauche ich überhaupt eine Website?',
    answer:
      'Eine professionelle Website ist deine digitale Visitenkarte – sie schafft Vertrauen, macht dich sichtbar und hilft dir, neue Kunden zu gewinnen. Egal ob Dienstleistung, Produkt oder Portfolio: Ohne Online-Präsenz verschenkst du Potenzial und Geld.',
  },
  {
    question: 'Was bekomme ich konkret?',
    answer:
      'Du bekommst eine maßgeschneiderte Website, die nicht nur gut aussieht, sondern auch Kunden gewinnt: modernes Design, klare Struktur, mobile Optimierung, OnPage-SEO und starke Performance. Kein Baukasten – sondern echtes Handwerk.',
  },
  {
    question: 'Wie viel kostet eine Website ungefähr?',
    answer:
      'Die Preise starten bei etwa 1.000 € für einfache Seiten. Komplexere Projekte können 2.000 € oder mehr kosten – je nach Anforderungen.',
  },
  {
    question: 'Wie lange dauert die Umsetzung einer Website?',
    answer:
      'Das hängt vom Umfang ab. Eine einfache Landingpage dauert ca. 1–2 Wochen, komplexere Projekte entsprechend länger.',
  },
  {
    question: 'Bekomme ich die Website nach der Fertigstellung?',
    answer:
      'Natürlich. Nach vollständiger Bezahlung erhältst du alle Dateien und Zugänge zur Website.',
  },
  {
    question: 'Was passiert, wenn ich später etwas ändern will?',
    answer:
      'Du kannst zwischen zwei Optionen wählen: monatliche Wartung oder Einzelanpassungen nach Bedarf. Die Preise richten sich nach dem Aufwand.',
  }
]

const FAQSection = () => {
  const sectionRef = useRef(null)
  const ctaRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // FAQ-Items einfliegen
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

    // CTA-Div einfliegen
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
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 px-6  text-black"
    >
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
              className="w-full flex justify-between items-center text-left"
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

      {/* CTA-Div mit Animation */}
      <div ref={ctaRef} className="text-center mt-12 w-full">
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto my-6">
          Noch Fragen offen? Oder direkt loslegen?
        </p>
        <CTA2 />
      </div>
    </section>
  )
}

export default FAQSection
