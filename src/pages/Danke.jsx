import React, { useEffect, useRef } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'

const Danke = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const elements = sectionRef.current.querySelectorAll('.cta-animate')
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
      }
    )
  }, [])

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Danke – Nachricht erfolgreich gesendet | Franco Cipolla</title>
        <meta
          name="description"
          content="Vielen Dank für deine Nachricht! Folge mir auf Instagram, um keine Tipps, Insights und Praxisbeispiele zu verpassen, wie du planbar mehr Kunden über deine Website bekommst."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/danke" />

        <meta property="og:title" content="Danke – Nachricht erfolgreich gesendet | Franco Cipolla" />
        <meta
          property="og:description"
          content="Vielen Dank für deine Nachricht! Folge mir auf Instagram, um keine Tipps, Insights und Praxisbeispiele zu verpassen, wie du planbar mehr Kunden über deine Website bekommst."
        />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/danke" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Danke-Section */}
      <section
        ref={sectionRef}
        className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 xl:px-0 py-16 mt-10 md:mt-0 bg-gray-50 text-center"
      >
        {/* Badge */}
        <div className="cta-animate inline-flex items-center gap-2 bg-gradient-to-r from-[#003566]/8 via-[#001D3D]/5 to-[#00A6FB]/8 backdrop-blur-sm border border-[#003566]/15 rounded-full px-4 py-2.5 shadow-sm mb-6">
          <span className="text-[13px] md:text-sm font-medium text-[#003566] tracking-tight">
            ✅ Nachricht erfolgreich gesendet
          </span>
        </div>

        {/* Headline */}
        <h1 className="cta-animate text-3xl md:text-5xl font-black text-black tracking-tight mb-6">
          Perfekt, ich habe ihre Nachricht erhalten!
        </h1>

        {/* Subtext */}
        <p className="cta-animate text-lg xl:text-xl text-[#000814]/90 mb-8 max-w-xl">
          Ich melde mich schnellstmöglich bei ihnen. <br />
          <br />
          Folgen sie mir auf Instagram für Tipps, Insights und praxisnahe Beispiele, wie sie planbar mehr Kunden über ihre Website bekommen.
        </p>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/francocipolla.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-animate inline-flex items-center gap-2 justify-center cursor-pointer bg-linear-to-r from-[#003566] via-[#001D3D] to-[#00A6FB] text-white font-semibold px-6 py-3 rounded shadow-md transition"
        >
          Folge mir auf Instagram <FaInstagram />
        </a>

        {/* Hinweis Kapazität */}
        <p className="cta-animate text-sm text-black/50 mt-6 max-w-sm">
          ⚡ Hinweis: Ich nehme nur <strong>2 Projekte pro Monat</strong> an, um für meine Kunden bestmögliche Ergebnisse zu erzielen.
        </p>
      </section>
    </>
  )
}

export default Danke
