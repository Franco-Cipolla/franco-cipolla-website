import { Helmet } from "react-helmet-async"
import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTA1 from '../components/CTA1'
import SEOJsonLD from '../components/SEOJsonLD';

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const heroRef = useRef(null)
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)

  const headlineRef = useRef(null)
  const sublineRef = useRef(null)
  const textBlockRefs = useRef([])
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 25%',
          scrub: 0.5,
        },
      })
      tl.to(leftCircleRef.current, { y: 150 })
      tl.to(rightCircleRef.current, { y: -150 }, 0)
      tl.to(leftCircleRef.current, { x: '-105vw', opacity: 0 }, 0.5)
      tl.to(rightCircleRef.current, { x: '105vw', opacity: 0 }, 0.5)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        headlineRef.current,
        sublineRef.current,
        imageRef.current,
        ...textBlockRefs.current.filter(Boolean),
        ctaRef.current,
      ]

      // Startzustand setzen (wichtig für Reloads / Strict Mode)
      gsap.set(elements, { opacity: 0, y: 50 })

      const animateContent = () => {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            overwrite: true,
          }
        )
      }

      if (imageRef.current && !imageRef.current.complete) {
        imageRef.current.addEventListener('load', animateContent)
      } else {
        animateContent()
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Helmet>
        <title>Über mich – Webdesigner aus Ennepetal | Franco Cipolla</title>
        <meta
          name="description"
          content="Ich baue Websites für Unternehmen aus Ennepetal & Umgebung, die nicht nur gut aussehen, sondern auch wirklich Anfragen bringen – strukturiert, conversion-orientiert und ohne Schnickschnack."
        />
        <link rel="canonical" href="https://www.franco-cipolla.de/about" />
        <meta property="og:title" content="Über mich – Webdesigner aus Ennepetal | Franco Cipolla" />
        <meta property="og:description" content="Websites, die wirklich Kunden bringen. Klar strukturiert, strategisch aufgebaut und auf Anfragen ausgelegt – für lokale Unternehmen." />
        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Über mich – Webdesigner aus Ennepetal | Franco Cipolla" />
        <meta name="twitter:description" content="Websites, die wirklich Kunden bringen. Klar strukturiert, strategisch aufgebaut und auf Anfragen ausgelegt – für lokale Unternehmen." />
        <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.png" />
      </Helmet>
      <SEOJsonLD page="about" />

      {/* Hintergrundkreise */}
      <div className="relative overflow-hidden">
        <span
          ref={leftCircleRef}
          className="fixed will-change-transform w-[300px] h-[300px] blur-[80px] lg:opacity-50 opacity-50 top-[20px] right-[-60px] lg:left-[-60px] rounded-full bg-gradient-to-tr from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
        <span
          ref={rightCircleRef}
          className="fixed will-change-transform w-[250px] h-[250px] blur-[60px] lg:opacity-50 opacity-50 right-[-90px] bottom-[-100px] rounded-full bg-gradient-to-bl from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
      </div>

      <main ref={heroRef} className="max-w-250 xl:max-w-291.25 mx-auto px-4 md:mt-10 py-28 text-black">
        {/* HERO */}
        <h1 ref={headlineRef} className="text-3xl sm:text-4xl font-bold mb-3">
          Websites sind kein Designprojekt. Sie sind ein Vertriebskanal.
        </h1>

        {/* Subline mobil-kurz / desktop-lang */}
        <p
          ref={sublineRef}
          className="text-base sm:text-lg font-bold text-[#003566] mb-6"
        >
          <span className="block md:hidden">
            Ich helfe Unternehmen aus <a href="/" className="cursor-pointer underline hover:text-[#001D3D] transition">Ennepetal</a>, <a href="/hagen" className="cursor-pointer underline hover:text-[#001D3D] transition">Hagen</a> & Umgebung, über ihre Website gezielt neue Kunden zu gewinnen.
          </span>
          <span className="hidden md:block">
            Ich helfe Unternehmen aus <a href="/" className="cursor-pointer underline hover:text-[#001D3D] transition">Ennepetal</a>, <a href="/hagen" className="cursor-pointer underline hover:text-[#001D3D] transition">Hagen</a> & Umgebung, mit ihrer Website strategisch für Anfragen und Wachstum zu arbeiten – statt auf Empfehlungen angewiesen zu sein.
          </span>
        </p>

        {/* Grid für Text + Bild */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Bild links auf Mobil (order-1), rechts auf Desktop (order-2) */}
          <div className="order-1 md:order-2 mb-6 md:mb-0">
            <img
              ref={imageRef}
              src="/Franco2.jpeg"
              alt="Franco Cipolla – Webdesigner aus Ennepetal & NRW"
              className="w-full rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-1">
            <h2 ref={(el) => (textBlockRefs.current[0] = el)} className="text-xl sm:text-2xl font-semibold mb-4">
              Die meisten Websites sehen gut aus und bringen nichts
            </h2>
            <p ref={(el) => (textBlockRefs.current[1] = el)} className="text-base leading-relaxed mb-4">
              Viele Unternehmen investieren Zeit und Geld in ihre Website und bekommen dafür… Stille. Keine Anfragen. Keine Messbarkeit. Keine Ahnung, woran es liegt.
            </p>
            <p ref={(el) => (textBlockRefs.current[2] = el)} className="text-base leading-relaxed mb-8">
              Das Problem ist selten das Design, sondern fehlende Struktur, fehlende Psychologie und kein klares Ziel.
            </p>

            <h2 ref={(el) => (textBlockRefs.current[3] = el)} className="text-xl sm:text-2xl font-semibold mb-4">
              Deshalb arbeite ich nicht nur „kreativ“, sondern systematisch
            </h2>
            <p ref={(el) => (textBlockRefs.current[4] = el)} className="text-base leading-relaxed mb-8">
              Jede Website folgt einer klaren Struktur: Problem erkennen, Lösung verständlich machen, Vertrauen aufbauen, Handlung auslösen. Ziel ist immer dasselbe: <strong>Besucher → Anfrage → Kunde</strong>.
            </p>

            <h2 ref={(el) => (textBlockRefs.current[5] = el)} className="text-xl sm:text-2xl font-semibold mb-4">
              Minimaler Aufwand für Sie. Klare Ergebnisse für Ihr Unternehmen
            </h2>
            <p ref={(el) => (textBlockRefs.current[6] = el)} className="text-base leading-relaxed mb-8">
              Sie liefern die Basisinfos. Ich übernehme Struktur, Texte, Design und Umsetzung. Klarer Prozess. Klare Kommunikation. Keine Agentur-Spielchen.
            </p>

            <h2 ref={(el) => (textBlockRefs.current[7] = el)} className="text-xl sm:text-2xl font-semibold mb-4">
              Für wen ich arbeite – und für wen nicht
            </h2>
            <p ref={(el) => (textBlockRefs.current[8] = el)} className="text-base leading-relaxed mb-4">
              Ich arbeite mit Unternehmen, die planbar wachsen wollen, Entscheidungen treffen und Ergebnisse wichtiger finden als Spielereien.
            </p>
            <p ref={(el) => (textBlockRefs.current[9] = el)} className="text-base leading-relaxed mb-8">
              Ich arbeite <strong>nicht</strong> mit reinen Preisvergleichen, endlosen Entscheidungsprozessen oder Projekten ohne klares Ziel.
            </p>

            <h2 ref={(el) => (textBlockRefs.current[10] = el)} className="text-xl sm:text-2xl font-semibold mb-4">
              Kurz zu mir
            </h2>
            <p ref={(el) => (textBlockRefs.current[11] = el)} className="text-base leading-relaxed mb-4">
              Ich bin <strong>Franco Cipolla</strong>. Ich mache Websites mit Fokus auf Conversion, Verkaufspsychologie und lokale Sichtbarkeit. Mein Anspruch ist simpel: Websites bauen, die wirklich etwas bringen – messbar, nicht nur schön.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10" ref={ctaRef}>
          <CTA1 />
          <p className='cta-animate text-[15px] mt-3 text-black/60'>Unverbindlich. Klar. Ohne Verkaufsdruck.</p>
        </section>
      </main>
    </>
  )
}

export default AboutPage
