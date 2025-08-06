import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projectsRef = useRef(null)
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)

  useEffect(() => {
  ScrollTrigger.matchMedia({
    // Mobile (bis 768px)
    '(max-width: 768px)': () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 90%',
          end: 'bottom top',
          scrub: 0.5,
        },
      })

      tl.fromTo(
        leftCircleRef.current,
        { x: '-100vw', opacity: 0 },
        { x: '0vw', opacity: 0.6, ease: 'power3.out' }
      )

      tl.fromTo(
        rightCircleRef.current,
        { x: '100vw', opacity: 0 },
        { x: '0vw', opacity: 0.6, ease: 'power3.out' },
        0
      )
    },

    // Desktop (ab 769px)
    '(min-width: 769px)': () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top bottom', // späterer Startpunkt
          end: 'bottom top',
          scrub: 0.5,
        },
      })

      tl.fromTo(
        leftCircleRef.current,
        { x: '-100vw', opacity: 0 },
        { x: '0vw', opacity: 0.6, ease: 'power3.out' }
      )

      tl.fromTo(
        rightCircleRef.current,
        { x: '100vw', opacity: 0 },
        { x: '0vw', opacity: 0.6, ease: 'power3.out' },
        0
      )
    },
  })
}, [])

  return (
    <>
      {/* Hintergrundkreise */}
      <div className="relative overflow-hidden">
        <span
          ref={leftCircleRef}
          className="fixed will-change-transform w-[300px] h-[300px] blur-[80px] opacity-50 sm:w-[350px] sm:h-[350px] sm:blur-[100px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 top-[120px] left-[60px] rounded-full bg-gradient-to-br from-[#3C096C] via-[#240046] to-[#3C096C] z-[-1]"
        ></span>

        <span
          ref={rightCircleRef}
          className="fixed will-change-transform w-[250px] h-[250px] blur-[60px] opacity-50 sm:w-[300px] sm:h-[300px] sm:blur-[80px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 bottom-[-100px] right-[60px] rounded-full bg-gradient-to-tl from-[#3C096C] via-[#240046] to-[#3C096C] z-[-1]"
        ></span>
      </div>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="w-full mt-5 lg:mt-35 py-16 sm:py-24 md:py-32 xl:py-20 px-4 sm:px-6 xl:px-0 mx-auto max-w-[700px] xl:max-w-[1100px] items-center gap-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black text-center leading-tight mb-13">
          Ein Projekt, das für sich spricht
        </h1>
        <div className="flex flex-col items-center justify-center">
          <ProjectCard
            image="/src/assets/my-site-preview.png"
            title="Meine eigene Website – Strategie trifft Design"
            challenge="Die Challenge: Ich wollte eine Website, die nicht nur gut aussieht, sondern Kunden überzeugt."
            solution="Die Lösung: Ich habe ein klares Designkonzept entwickelt, das Vertrauen schafft und gleichzeitig meine Leistungen auf den Punkt bringt. Mit gezielter Nutzerführung und responsivem Layout wirkt die Seite professionell und einladend."
          />
        </div>
      </section>
    </>
  )
}

export default Projects
