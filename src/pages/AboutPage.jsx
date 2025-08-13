import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutHead from '../components/AboutHead'
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
            ...textBlockRefs.current,
            ctaRef.current,
            imageRef.current,
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
      <AboutHead />

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
          Ihr Webentwickler & Webdesigner aus NRW
        </p>

        {/* 2-Col Grid mit Text und Bild */}
        <section className="my-6 sm:my-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              ref={(el) => (textBlockRefs.current[1] = el)}
              className="text-xl sm:text-2xl font-semibold mb-4"
            >
              Warum ich ihre Website als Webdesigner in Ennepetal erstellen sollte
            </h2>
            <p
              ref={(el) => (textBlockRefs.current[2] = el)}
              className="mb-4 text-sm sm:text-base leading-relaxed"
            >
              Hallo, ich bin <strong>Franco Cipolla</strong>, ein leidenschaftlicher Webentwickler und Webdesigner aus <strong>Ennepetal, NRW</strong>.
              Mit 17 Jahren bringe ich frische Ideen, Kreativität und technisches Know-how mit, um Ihre Website individuell und mit höchster Qualität zu gestalten.
              Ich entwickle moderne, individuell programmierte Websites mit React.js, die nicht nur optisch überzeugen, sondern auch durch gezieltes <strong>OnPage-SEO</strong> und strategisches Copywriting Kunden gewinnen und die Online-Präsenz nachhaltig stärken.
            </p>
            <p
              ref={(el) => (textBlockRefs.current[3] = el)}
              className="text-sm sm:text-base leading-relaxed"
            >
              Viele Unternehmen in und um Ennepetal haben noch keine moderne Website, eine veraltete Seite oder erhalten keine Anfragen über ihre Online-Präsenz.
              Genau hier setze ich an: Ich erstelle Ihnen, eine <strong>moderne Website in Ennepetal</strong>, die Kunden begeistert und <strong>echte Ergebnisse</strong> liefert.
            </p>
          </div>
          <div>
            <img
              ref={imageRef}
              src="/images/franco-cipolla.jpg"
              alt="Franco Cipolla – Webdesigner aus Ennepetal"
              width="300"
              height="350"
              className="w-full rounded-lg shadow-lg object-cover"
              loading="lazy"
              decoding="async"
            />

          </div>
        </section>

        <section className="my-6 sm:my-8">
          <h2
            ref={(el) => (textBlockRefs.current[4] = el)}
            className="text-xl sm:text-2xl font-semibold mb-4"
          >
            Meine Leistungen in Webentwicklung und Webdesign in Ennepetal
          </h2>
          <p
            ref={(el) => (textBlockRefs.current[5] = el)}
            className="mb-4 text-sm sm:text-base leading-relaxed"
          >
            Ich spezialisiere mich auf <strong>Webentwicklung mit React.js</strong>, individuelles Webdesign, <strong>Onpage-SEO</strong> und Copywriting für Websites.
            Jede Website wird von mir maßgeschneidert programmiert und gestaltet – keine Standardvorlagen, sondern eine digitale Lösung, die genau zu Ihrem Unternehmen passt.
          </p>
          <p
            ref={(el) => (textBlockRefs.current[6] = el)}
            className="text-sm sm:text-base leading-relaxed"
          >
            So erhalten Sie eine Website, die nicht nur optisch überzeugt, sondern technisch einwandfrei läuft, Kunden anspricht und bei Google besser gefunden wird. Ein echter Mehrwert für Ihr Unternehmen.
          </p>
        </section>

        <section className="my-6 sm:my-8">
          <h2
            ref={(el) => (textBlockRefs.current[7] = el)}
            className="text-xl sm:text-2xl font-semibold mb-4"
          >
            Meine Werte: Qualität, Vertrauen und Transparenz
          </h2>
          <p
            ref={(el) => (textBlockRefs.current[8] = el)}
            className="mb-4 text-sm sm:text-base leading-relaxed"
          >
            Was mich besonders macht, ist die Kombination aus <strong>Vertrauenswürdigkeit, Verlässlichkeit</strong> und <strong>meine Expertise als Webentwickler</strong> in Ennepetal.
            Ich kommuniziere offen und transparent, halte meine Versprechen und liefere pünktlich.
            Für mich steht Qualität vor Quantität. Sie werden stolz auf ihre neue Website sein und sie wird Ihnen echten Mehrwert bieten.
          </p>
          <p
            ref={(el) => (textBlockRefs.current[9] = el)}
            className="text-sm sm:text-base leading-relaxed"
          >
            Als junger Webentwickler habe ich den Vorteil, neueste Trends schnell umzusetzen und so Ihre Website modern und zukunftssicher zu gestalten.
          </p>
        </section>

        <section className="mt-6 sm:mt-8">
          <p
            ref={(el) => (textBlockRefs.current[10] = el)}
            className="text-base sm:text-lg font-semibold leading-relaxed"
          >
            <strong>
              Lassen Sie uns gemeinsam Ihre Website verwirklichen <br /> ich freue mich auf Ihre Nachricht!
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
