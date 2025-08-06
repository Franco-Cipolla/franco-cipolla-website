import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTA1 from './CTA1'
import CTA2 from './CTA2'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    tl.to(leftCircleRef.current, {
      y: -120,
      ease: 'power3.out',
    })

    tl.to(
      rightCircleRef.current,
      {
        y: 120,
        ease: 'power3.out',
      },
      0
    )
  }, [])

  return (
    <>
      {/* Hintergrundkreise */}
      <div className="relative overflow-hidden">
        <span
          ref={leftCircleRef}
          className="fixed w-[300px] h-[300px] blur-[80px] opacity-70 sm:w-[350px] sm:h-[350px]  sm:blur-[100px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 bottom-[-120px] left-[-80px] rounded-full bg-gradient-to-tr from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        ></span>

        <span
          ref={rightCircleRef}
          className="fixed w-[250px] h-[250px] blur-[60px] opacity-70 sm:w-[300px] sm:h-[300px] sm:blur-[80px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 top-[100px] right-[-90px] rounded-full bg-gradient-to-bl from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        ></span>
      </div>

      {/* Hero Section */}
      <main className="w-full mt-30 lg:mt-35 py-16 sm:py-24 md:py-32 px-4 sm:px-6 xl:px-0">
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[1100px] flex flex-col lg:flex-row gap-4 lg:justify-start lg:items-start xl:text-left md:items-center md:text-center">
          <div>
            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-5">
              Websites, die verkaufen <br /> statt nur zu existieren.
            </h1>

            {/* Mobile Text */}
            <p className="text-lg text-[#000814] max-w-xl xl:hidden mb-4">
              Individuelles Webdesign. Individuell programmiert. SEO-optimiert. Textlich stark. Für Unternehmen, die online wachsen wollen.
            </p>
            <p className="text-base text-[#000814]/85 max-w-xl xl:hidden mb-5">
              Kein Baukasten. Kein Standard. Sondern echter Code – maßgeschneidert für dich.
            </p>

            {/* Desktop Text */}
            <div className="hidden xl:flex flex-col gap-6 max-w-2xl">
              <p className="text-lg xltext-xl text-[#000814]">
                Individuelles Webdesign, Individuell programmiert, SEO & Copywriting für Unternehmen, die online wachsen wollen. Persönlich. Schnell. Gewinnbringend.
              </p>
              <p className="text-base xl:text-[1.1rem] text-[#000814]">
                Schluss mit veralteten Seiten, langsamen Ladezeiten und verlorenen Kunden. Deine neue Website wird nicht nur gut aussehen – sie wird verkaufen.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-20 flex gap-2 lg:gap-4 md:items-center md:justify-center xl:items-start xl:justify-start">
              <CTA2 />
              <CTA1 />
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end pt-6 lg:pt-0">
            <img src="/src/assets/Hero-Illustration.png"alt="Hero Section Illustration" className="xl:w-full max-w-[500px] xl:max-w-[600px] xl:block md:hidden w-[00px] h-auto" loading="lazy"/></div>
        </div>
      </main>
    </>
  )
}

export default Hero
