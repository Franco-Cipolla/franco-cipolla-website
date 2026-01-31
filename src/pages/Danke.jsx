import React, { useEffect, useRef } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
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
      {/* SEO */}
      <Helmet>
        <title>Danke – Nachricht erfolgreich gesendet | Franco Cipolla</title>
        <meta
          name="description"
          content="Vielen Dank für Ihre Nachricht! Folgen Sie mir auf Instagram, um praxisnahe Tipps zu erhalten, wie Sie planbar mehr Kunden über Ihre Website gewinnen."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/danke" />
      </Helmet>

      <section
        ref={sectionRef}
        className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 xl:px-0 py-16 mt-10 md:mt-0 bg-gray-50 text-center"
      >
        {/* Badge */}
        <div className="cta-animate inline-flex items-center gap-2 bg-gradient-to-r from-[#003566]/10 via-[#001D3D]/5 to-[#00A6FB]/10 backdrop-blur-sm border border-[#003566]/15 rounded-full px-5 py-2.5 shadow-sm mb-6">
          <span className="text-[13px] md:text-sm font-medium text-[#003566] tracking-tight">
            ✅ Nachricht erfolgreich gesendet
          </span>
        </div>

        {/* Headline */}
        <h1 className="cta-animate text-3xl md:text-5xl font-black text-black tracking-tight mb-6">
          Perfekt! Ich habe ihre Nachricht erhalten.
        </h1>

        {/* Subtext */}
        <p className="cta-animate text-lg xl:text-xl text-[#000814]/90 mb-8 max-w-xl leading-relaxed">
          Ich melde mich innerhalb von 24–48 Stunden bei Ihnen.<br /><br />
          Folgen Sie mir auf Instagram für praxisnahe Tipps, Einblicke und konkrete Strategien, wie Sie mehr Kunden über Ihre Website gewinnen.
        </p>

        {/* Haupt-CTA Instagram */}
        <a
          href="https://www.instagram.com/francocipolla.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-animate inline-flex items-center gap-3 justify-center cursor-pointer bg-gradient-to-r from-[#003566] via-[#001D3D] to-[#00A6FB] text-white font-semibold px-8 py-4 rounded-xl shadow-lg text-lg transition transform hover:-translate-y-1 hover:scale-105 duration-200 mb-4 w-full sm:w-auto"
        >
          <FaInstagram className="text-2xl" />
          Jetzt auf Instagram folgen
        </a>

        {/* Sekundärer CTA WhatsApp */}
        <a
          href="https://wa.me/4917675398004"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-animate inline-flex items-center gap-2 justify-center cursor-pointer bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md text-base transition transform hover:-translate-y-1 hover:scale-105 duration-200 w-full sm:w-auto"
        >
          <FaWhatsapp className="text-lg" />
          Direkt WhatsApp schreiben
        </a>

        {/* Trust / Kapazität */}
        <p className="cta-animate text-sm text-black/50 mt-6 max-w-md text-center">
          ⚡ Hinweis: Ich nehme nur <strong>2 Projekte pro Monat</strong> an, um die bestmöglichen Ergebnisse zu erzielen.
        </p>
      </section>
    </>
  )
}

export default Danke
