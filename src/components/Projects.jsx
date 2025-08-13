import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from "./gsapSetup";
import ProjectCard from './ProjectCard'
import WebImg from "../assets/my-site-preview.png"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projectsRef = useRef(null)
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)

  useEffect(() => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: projectsRef.current,
      start: isMobile ? 'top 90%' : 'top bottom',
      end: 'bottom top',
      scrub: 0.5,
    },
  })

  tl.fromTo(
    leftCircleRef.current,
    { x: isMobile ? '-100vw' : '-100vw', opacity: 0 },
    { x: '0vw', opacity: 0.6, ease: 'power3.out' }
  )

  tl.fromTo(
    rightCircleRef.current,
    { x: isMobile ? '100vw' : '100vw', opacity: 0 },
    { x: '0vw', opacity: 0.6, ease: 'power3.out' },
    0
  )

  tl.to(leftCircleRef.current, { x: isMobile ? '100vw' : '-100vw', opacity: 0, ease: 'power3.inOut' }, '+=0.2')
  tl.to(rightCircleRef.current, { x: isMobile ? '200vw' : '100vw', opacity: 0, ease: 'power3.inOut' }, '<')
}, [])



  return (
    <>
      {/* Hintergrundkreise */}
      <div className="relative overflow-hidden">
        <span
          ref={leftCircleRef}
          className="fixed will-change-transform opacity-0 w-[300px] h-[300px] blur-[80px]  sm:w-[350px] sm:h-[350px] sm:blur-[100px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 top-[120px] left-[60px] rounded-full bg-gradient-to-br from-[#3C096C] via-[#240046] to-[#3C096C] z-[-1]"
        ></span>

        <span
          ref={rightCircleRef}
          className="fixed will-change-transform opacity-0 w-[250px] h-[250px] blur-[60px]  sm:w-[300px] sm:h-[300px] sm:blur-[80px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 bottom-[-100px] right-[60px] rounded-full bg-gradient-to-tl from-[#3C096C] via-[#240046] to-[#3C096C] z-[-1]"
        ></span>
      </div>

      {/* Projects Section */}
      <section
        id='projects'
        ref={projectsRef}
        className="w-full mt-5 lg:mt-35 py-16 sm:py-24 md:py-32 xl:py-20 px-4 sm:px-6 mb-20 xl:px-0 mx-auto max-w-[700px] xl:max-w-[1100px] items-center gap-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black text-center leading-tight mb-13">
          Ein Projekt, das für sich spricht
        </h1>
        <div className="flex flex-col items-center justify-center">
          <ProjectCard
            image={WebImg}
            title="Meine eigene Website – Strategie trifft Design"
            challenge="Die Challenge: Ich wollte eine Website, die nicht nur gut aussieht, sondern Kunden überzeugt."
            solution="Die Lösung: Ich habe ein klares Designkonzept entwickelt, das Vertrauen schafft und gleichzeitig meine Leistungen auf den Punkt bringt. Mit gezielter Nutzerführung und responsivem Layout wirkt die Seite professionell und einladend."
            result="Das Ergebnis: Eine Website, die nicht nur meine Persönlichkeit widerspiegelt, sondern auch meine Dienstleistungen klar kommuniziert. Sie ist ein echter Blickfang und hat mir geholfen, neue Kunden zu gewinnen und mein Gewinn zu vervielfachen."
          />
        </div>
      </section>
    </>
  )
}

export default Projects
