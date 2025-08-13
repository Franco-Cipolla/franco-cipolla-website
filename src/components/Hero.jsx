import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTA1 from './CTA1'
import CTA2 from './CTA2'
import HeroIllu from "../assets/Hero-Illustration.png"


gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)


  const headlineRef = useRef(null)
  const mobileText1Ref = useRef(null)
  const mobileText2Ref = useRef(null)
  const desktopText1Ref = useRef(null)
  const desktopText2Ref = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  const [isXL, setIsXL] = useState(false)

  useEffect(() => {
    const checkWidth = () => {
      setIsXL(window.innerWidth >= 1280) // Tailwind xl breakpoint: 1280px
    }
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  useLayoutEffect(() => {
  // Kreise-Animationen laufen immer
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom 5%',
        scrub: 0.5,
      },
    });

    tl.to(leftCircleRef.current, { y: -150 });
    tl.to(rightCircleRef.current, { y: 150 }, 0);
    tl.to(leftCircleRef.current, { x: '-105vw', opacity: 0 }, 0.5);
    tl.to(rightCircleRef.current, { x: '105vw', opacity: 0 }, 0.5);
  }, heroRef);

  return () => {
    ctx.revert();
    ScrollTrigger.killAll();
  };
}, []); // nur einmal beim Mounten

// Und getrennt die Inhaltsanimation mit Abhängigkeit von isXL:
useLayoutEffect(() => {
  if (!isXL) return;

  const ctx = gsap.context(() => {
    const animateContent = () => {
      gsap.from(
        [
          headlineRef.current,
          mobileText1Ref.current,
          mobileText2Ref.current,
          desktopText1Ref.current,
          desktopText2Ref.current,
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
      );
    };

    const img = imageRef.current;
    if (img && !img.complete) {
      img.onload = animateContent;
    } else {
      animateContent();
    }
  }, heroRef);

  return () => ctx.revert();
}, [isXL]);



  return (
    <>
      {/* Hintergrundkreise */}
      <div className="relative overflow-hidden">
        <span
          ref={leftCircleRef}
          className="fixed will-change-transform w-[300px] h-[300px] blur-[80px] opacity-50 sm:w-[350px] sm:h-[350px] sm:blur-[100px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 bottom-[-100px] left-[-35px] rounded-full bg-gradient-to-tr from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
        <span
          ref={rightCircleRef}
          className="fixed will-change-transform w-[250px] h-[250px] blur-[60px] opacity-50 sm:w-[300px] sm:h-[300px] sm:blur-[80px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 top-[40px] right-[-90px] rounded-full bg-gradient-to-bl from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
      </div>

      {/* Hero Section */}
      <main
        ref={heroRef}
        className="w-full mt-30 lg:mt-35 py-16 sm:py-24 md:py-32 px-4 sm:px-6 xl:px-0"
      >
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[1100px] flex flex-col lg:flex-row gap-4 lg:justify-start lg:items-start xl:text-left md:items-center md:text-center">
          <div>
            <h1
              ref={headlineRef}
              className="text-3xl md:text-5xl font-[800] text-black leading-tight mb-5"
            >
              Websites, die verkaufen <br /> statt nur zu existieren.
            </h1>

            <p
              ref={mobileText1Ref}
              className="text-lg text-[#000814] max-w-xl xl:hidden mb-4"
            >
              Individuelles Webdesign. Individuell programmiert. SEO-optimiert.
              Textlich stark. Für Unternehmen, die online wachsen wollen.
            </p>
            <p
              ref={mobileText2Ref}
              className="text-base text-[#000814]/85 max-w-xl xl:hidden mb-5"
            >
              Kein Baukasten. Kein Standard. Sondern echter Code – maßgeschneidert
              für dich.
            </p>

            <div className="hidden xl:flex flex-col gap-6 max-w-2xl">
              <p
                ref={desktopText1Ref}
                className="text-lg xltext-xl text-[#000814]"
              >
                Individuelles Webdesign, Individuell programmiert, SEO & Copywriting
                für Unternehmen, die online wachsen wollen. Persönlich. Schnell.
                Gewinnbringend.
              </p>
              <p
                ref={desktopText2Ref}
                className="text-base xl:text-[1.1rem] text-[#000814]"
              >
                Schluss mit veralteten Seiten, langsamen Ladezeiten und verlorenen
                Kunden. Deine neue Website wird nicht nur gut aussehen – sie wird
                verkaufen.
              </p>
            </div>

            <div
              ref={ctaRef}
              className="mt-20 flex gap-2 lg:gap-4 md:items-center md:justify-center xl:items-start xl:justify-start"
            >
              <CTA2 />
              <CTA1 />
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end pt-6 lg:pt-0">
            {isXL && (
              <img
                ref={imageRef}
                src={HeroIllu}
                alt="Hero Section Illustration"
                className="xl:w-full max-w-[500px] xl:max-w-[600px]"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
