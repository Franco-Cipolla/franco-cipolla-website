import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTA2 from '../components/CTA2'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const heroRef = useRef(null)
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)

  const headlineRef = useRef(null)
  const textBlockRefs = useRef([])
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  // Kreise animieren
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

    return () => {
      ctx.revert()
      ScrollTrigger.killAll()
    }
  }, [])

  // Inhalte animieren (immer, unabhängig von Screen Size)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animateContent = () => {
        gsap.from(
          [
            headlineRef.current,
            textBlockRefs.current[0], // Subtitle
            textBlockRefs.current[1], // H2
            textBlockRefs.current[2], // Paragraph 1
            textBlockRefs.current[3], // Paragraph 2
            imageRef.current,         // Bild nach dem 3. Text-Paragraphen
            ...textBlockRefs.current.slice(4), // Restliche Text-Elemente
            ctaRef.current,
          ].filter(Boolean),
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
          }
        )
      }

      const img = imageRef.current
      if (img && !img.complete) {
        img.onload = animateContent
      } else {
        animateContent()
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
  {/* Hintergrundkreise */}
  <div className="relative overflow-hidden">
    <span
      ref={leftCircleRef}
      className="fixed will-change-transform w-[300px] h-[300px] blur-[80px] lg:opacity-50 opacity-50 sm:w-[350px] sm:h-[350px] sm:blur-[100px] sm:opacity-35 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-35 top-[20px]  right-[-60px] lg:left-[-60px] rounded-full bg-gradient-to-tr from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
    />
    <span
      ref={rightCircleRef}
      className="fixed will-change-transform w-[250px] h-[250px] blur-[60px] lg:opacity-50 opacity-50 sm:w-[300px] sm:h-[300px] sm:blur-[80px] sm:opacity-35 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-35 right-[-90px] bottom-[-100px] rounded-full bg-gradient-to-bl from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
    />
  </div>

  {/* Inhalt */}
  <main
    ref={heroRef}
    className="max-w-[1000px] xl:max-w-[1165px] mx-auto px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 lg:mt-20 py-28 text-black"
  >
    <h1 ref={headlineRef} className="text-3xl sm:text-4xl font-bold mb-3">
      Über mich
    </h1>
    <p
      ref={(el) => (textBlockRefs.current[0] = el)}
      className="text-base sm:text-lg font-bold text-[#003566] mb-12"
    >
      Dein Webdesigner aus Ennepetal & NRW
    </p>

    {/* 2-Col Grid mit Text und Bild */}
    <section className="my-6 sm:my-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h2
          ref={(el) => (textBlockRefs.current[1] = el)}
          className="text-xl sm:text-2xl font-semibold mb-8"
        >
          Warum ich der richtige Webdesigner für dein Unternehmen bin
        </h2>
        <p
          ref={(el) => (textBlockRefs.current[2] = el)}
          className="mb-8 text-base leading-relaxed"
        >
          Hey, ich bin <strong>Franco Cipolla</strong>. Webdesigner aus <strong>Ennepetal (NRW)</strong>.
          Ich helfe kleinen und mittleren Unternehmen, mit einer modernen Website
          mehr Sichtbarkeit, Vertrauen und Anfragen zu gewinnen. Jede Website entsteht
          bei mir mit einem klaren Ziel: <strong>Ergebnisse, statt nur Design</strong>.
          Ich designe deine Website in <strong>Figma</strong> und baue sie mit dem <strong>WordPress Bricks Builder</strong> auf.
          Flexibel, Onpage-SEO optimiert und perfekt auf dein Business zugeschnitten.
        </p>
        <p
          ref={(el) => (textBlockRefs.current[3] = el)}
          className="text-base leading-relaxed"
        >
          Viele lokale Unternehmen in Ennepetal und NRW haben zwar eine Website
          aber sie funktioniert nicht richtig: keine Anfragen, veraltetes Design, schlechte Auffindbarkeit bei Google.
          Genau hier setze ich an: Ich entwickle Websites, die modern aussehen, verkaufen und
          dir helfen, online wirklich zu wachsen.
        </p>
      </div>
      <div>
        <img
          ref={imageRef}
          src="/Franco2.jpeg"
          alt="Franco Cipolla – Webdesigner Ennepetal & NRW. Professionelle Websites mit Bricks Builder."
          width="300"
          height="350"
          className="w-full rounded-lg shadow-lg object-cover"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            console.error('Bild konnte nicht geladen werden:', e.target.src);
            e.target.style.display = 'none';
          }}
        />
      </div>
    </section>

    <section className="my-6 sm:my-8">
      <h2
        ref={(el) => (textBlockRefs.current[4] = el)}
        className="text-xl sm:text-2xl font-semibold mb-8"
      >
        Webdesign & Betreuung mit Strategie
      </h2>
      <p
        ref={(el) => (textBlockRefs.current[5] = el)}
        className="mb-4 text-base leading-relaxed"
      >
        Ich verbinde modernes Webdesign mit <strong>verkaufspsychologischem Aufbau</strong> und
        durchdachtem <strong>SEO</strong>, damit deine Website nicht nur schön aussieht, sondern auch
        Besucher in Kund:innen verwandelt.
        Mit Bricks Builder erstelle ich maßgeschneiderte Websites. Individuell,
        schnell und zukunftssicher.
      </p>
      <p
        ref={(el) => (textBlockRefs.current[6] = el)}
        className="text-base leading-relaxed"
      >
        Auf Wunsch betreue ich deine Website langfristig, übernehme Updates und optimiere Inhalte,
        damit du dich auf dein Kerngeschäft konzentrieren kannst.
        So bleibt deine Website technisch einwandfrei, aktuell und stark bei Google.
      </p>
    </section>

    <section className="my-6 sm:my-8 ">
      <h2
        ref={(el) => (textBlockRefs.current[7] = el)}
        className="text-xl sm:text-2xl font-semibold mb-8"
      >
        Meine Werte: Qualität, Vertrauen & Klarheit
      </h2>
      <p
        ref={(el) => (textBlockRefs.current[8] = el)}
        className="mb-4 text-base leading-relaxed"
      >
        Ich stehe für <strong>Transparenz, Zuverlässigkeit</strong> und <strong>ehrliche Zusammenarbeit</strong>.
        Du erhältst von mir klare Kommunikation, faire Preise und ein Ergebnis, das dich stolz macht.
        Qualität steht für mich immer vor Quantität. Deine Website wird sichtbar Ergebnisse liefern
        und dein Unternehmen digital wachsen lassen.
      </p>
      <p
        ref={(el) => (textBlockRefs.current[9] = el)}
        className="text-base leading-relaxed"
      >
        Als junger Webdesigner setze ich moderne Trends gezielt um, daher bleibt deine Website
        technisch top, optisch modern und strategisch stark positioniert.
      </p>
    </section>

    <section className="mt-6 sm:mt-8">
      <p
        ref={(el) => (textBlockRefs.current[10] = el)}
        className="text-base sm:text-lg  leading-relaxed"
      >
        <strong>
          Lass uns gemeinsam deine Website neu denken. Professionell, sichtbar und verkaufsstark.<br />
          Ich freue mich auf deine Nachricht!
        </strong>
      </p>
    </section>

    <section className="mt-5" ref={ctaRef}>
      <CTA2 />
    </section>
  </main>
</>

  )
}

export default AboutPage
