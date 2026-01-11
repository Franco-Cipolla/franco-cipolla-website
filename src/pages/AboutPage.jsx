import { Helmet } from "react-helmet-async"
import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTA2 from '../components/CTA2'
import CTA1 from '../components/CTA1'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const heroRef = useRef(null)
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)

  const headlineRef = useRef(null)
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

    return () => {
      ctx.revert()
      ScrollTrigger.killAll()
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animateContent = () => {
        gsap.from(
          [
            headlineRef.current,
            textBlockRefs.current[0],
            textBlockRefs.current[1],
            textBlockRefs.current[2],
            textBlockRefs.current[3],
            imageRef.current,
            ...textBlockRefs.current.slice(4),
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
    <Helmet>
        <title>Über mich – Franco Cipolla, Webdesigner aus Ennepetal</title>
        <meta name="description" content="Ich bin Franco Cipolla, Webdesigner aus Ennepetal. Ich erstelle Websites, die nicht nur modern aussehen, sondern auch neue Kunden bringen. Klar strukturiert und auf Conversion optimiert. Websites für Unternehmen in Ennepetal & Umgebung." />
        <link rel="canonical" href="https://www.franco-cipolla.de/about" />
        <meta property="og:title" content="Über mich – Franco Cipolla, Webdesigner aus Ennepetal" />
<meta property="og:description" content="Ich erstelle Websites, die nicht nur modern aussehen, sondern auch neue Kunden bringen. Klar strukturiert, strategisch aufgebaut und conversion-optimiert – Websites für Unternehmen in Ennepetal & Umgebung." />        <meta property="og:image" content="https://franco-cipolla.de/og-preview.png" />
        <meta property="og:url" content="https://www.franco-cipolla.de/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Über mich – Franco Cipolla, Webdesigner aus Ennepetal" />
        <meta name="twitter:description" content="Ich erstelle Websites, die nicht nur modern aussehen, sondern auch neue Kunden bringen. Klar strukturiert, strategisch aufgebaut und conversion-optimiert – Websites für Unternehmen in Ennepetal & Umgebung." />
        <meta name="twitter:image" content="https://franco-cipolla.de/og-preview.png" />
      </Helmet>
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

      <main
        ref={heroRef}
        className="max-w-250 xl:max-w-291.25 mx-auto px-4 mt-20 py-28 text-black"
      >
        <h1 ref={headlineRef} className="text-3xl sm:text-4xl font-bold mb-3">
          Über mich
        </h1>
        <p
          ref={(el) => (textBlockRefs.current[0] = el)}
          className="text-base sm:text-lg font-bold text-[#003566] mb-12"
        >
          Webdesigner für Unternehmen aus Ennepetal & NRW
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              ref={(el) => (textBlockRefs.current[1] = el)}
              className="text-xl sm:text-2xl font-semibold mb-8"
            >
              Websites, die nicht nur gut aussehen. Sondern Anfragen bringen.
            </h2>
            <p
              ref={(el) => (textBlockRefs.current[2] = el)}
              className="mb-8 text-base leading-relaxed"
            >
              Ich bin <strong>Franco Cipolla</strong>, Webdesigner aus <strong>Ennepetal</strong>.
              Ich habe zu viele Websites gesehen, die modern aussehen,
              aber <strong>keine Kunden gewinnen</strong>.
              Genau das ändere ich.
            </p>
            <p
              ref={(el) => (textBlockRefs.current[3] = el)}
              className="text-base leading-relaxed"
            >
              Ich entwickle Websites für Unternehmen, die vom digitalen Wandel
              profitieren möchten, statt von ihm überholt zu werden.
              Klar strukturiert, strategisch aufgebaut und mit einem Ziel:
              <strong> Besucher zu Kunden machen</strong>.
            </p>
          </div>

          <div>
            <img
              ref={imageRef}
              src="/Franco2.jpeg"
              alt="Franco Cipolla – Webdesigner aus Ennepetal & NRW"
              className="w-full rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section className="my-10">
          <h2
            ref={(el) => (textBlockRefs.current[4] = el)}
            className="text-xl sm:text-2xl font-semibold mb-8"
          >
            Klare Struktur statt Agentur-Chaos
          </h2>

          <p
            ref={(el) => (textBlockRefs.current[5] = el)}
            className="mb-4 text-base leading-relaxed"
          >
            Ich arbeite mit bewährten Methoden aus Webdesign,
            Verkaufspsychologie und SEO.
            Kein Rätselraten, kein unnötiger Aufwand,
            keine endlosen Abstimmungen.
          </p>

          <p
            ref={(el) => (textBlockRefs.current[6] = el)}
            className="mb-4 text-base leading-relaxed"
          >
            Für Sie bedeutet das vor allem eines:
            <strong> minimaler Zeitaufwand</strong>.
            Sie müssen keine Texte schreiben
            und sich nicht mit Technik beschäftigen.
          </p>

          <p
            ref={(el) => (textBlockRefs.current[7] = el)}
            className="text-base leading-relaxed"
          >
            Sie stellen das Hosting bereit, geben mir die nötigen Zugänge
            sowie die wichtigsten Informationen zu Ihrem Unternehmen
            und vorhandenes Material wie Fotos oder Logos.
            Um den Rest kümmere ich mich.
          </p>

          <p
            ref={(el) => (textBlockRefs.current[8] = el)}
            className="text-base leading-relaxed"
          >
            Aus diesen Informationen entwickle ich die komplette Struktur,
            Texte und Inhalte. Verständlich, vertrauensaufbauend
            und gezielt darauf ausgelegt, Anfragen zu generieren.
          </p>
        </section>

        <section className="my-10">
          <h2
            ref={(el) => (textBlockRefs.current[9] = el)}
            className="text-xl sm:text-2xl font-semibold mb-8"
          >
            Zusammenarbeit auf Augenhöhe
          </h2>
          <p
            ref={(el) => (textBlockRefs.current[10] = el)}
            className="mb-4 text-base leading-relaxed"
          >
            Ich arbeite schnell, direkt und ehrlich.
            Klare Entscheidungen und klare Kommunikation
            sind mir besonders wichtig.
          </p>
          <p
            ref={(el) => (textBlockRefs.current[11] = el)}
            className="text-base leading-relaxed"
          >
            Deshalb arbeite ich bewusst nicht mit Kunden,
            die ausschließlich den günstigsten Preis suchen
            oder Entscheidungen dauerhaft aufschieben.
            Dafür entstehen Projekte,
            hinter denen ich voll stehe –
            häufig als langfristige Zusammenarbeit.
          </p>
        </section>

        <section className="mt-10">
          <p
            ref={(el) => (textBlockRefs.current[12] = el)}
            className="text-base sm:text-lg leading-relaxed"
          >
            <strong>
              Wenn Sie eine Website möchten,
              die klar positioniert ist,
              Vertrauen aufbaut und Anfragen bringt,
              dann lassen Sie uns sprechen.
            </strong>
          </p>
        </section>

        <section className="mt-6" ref={ctaRef}>
          <CTA1 />
        </section>
      </main>
    </>
  )
}

export default AboutPage
