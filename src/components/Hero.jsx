import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap, ScrollTrigger } from './gsapSetup'; // ScrollTrigger ist bereits in gsapSetup registriert
import CTA1 from './CTA1';

import HeroIllustration from '../assets/Hero-Illustration.webp';

const Hero = () => {
  const heroRef = useRef(null);
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);

  const headlineRef = useRef(null);
  const mobileText1Ref = useRef(null);
  const mobileText2Ref = useRef(null);
  const desktopText1Ref = useRef(null);
  const desktopText2Ref = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsXL(window.innerWidth >= 1280);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Parallax/ScrollTrigger-Animationen für die Kreise
      useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        ScrollTrigger.matchMedia({
          // Mobile: nur sanftes Ausblenden
          '(max-width: 1023px)': () => {
            gsap.to([leftCircleRef.current, rightCircleRef.current], {
              opacity: 0,
              duration: 1,
              scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            });
          },

          // Desktop: volle Parallax-Animation
          '(min-width: 1024px)': () => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom 5%',
                scrub: 0.5,
              },
            });

            tl.fromTo(leftCircleRef.current, { y: 0 }, { y: -150 });
            tl.fromTo(rightCircleRef.current, { y: 0 }, { y: 150 }, 0);
            tl.fromTo(leftCircleRef.current, { x: 0, opacity: 1 }, { x: '-105vw', opacity: 0 }, 0.5);
            tl.fromTo(rightCircleRef.current, { x: 0, opacity: 1 }, { x: '105vw', opacity: 0 }, 0.5);
          }
        });
      }, heroRef);

      return () => ctx.revert();
    }, []);



  // Content-Fade-In (nur XL)
  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const textRefs = [
      headlineRef,
      mobileText1Ref,
      mobileText2Ref,
      desktopText1Ref,
      desktopText2Ref,
      ctaRef,
    ];

    // Starte Textanimation sofort
    gsap.from(textRefs.map(ref => ref.current).filter(Boolean), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Bildanimation separat nach Load
    const imgEl = imageRef.current;
    if (imgEl && !imgEl.complete) {
      const handleLoad = () => {
        gsap.from(imgEl, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      };
      imgEl.addEventListener('load', handleLoad);
      return () => imgEl.removeEventListener('load', handleLoad);
    } else if (imgEl) {
      gsap.from(imgEl, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, heroRef);

  return () => ctx.revert();
}, []);




  return (
    <>
      {/* Hintergrundkreise */}
      <div className="relative overflow-hidden">
        <span
          ref={leftCircleRef}
          className="fixed will-change-transform w-[300px] h-[300px] blur-[80px] opacity-30 md:opacity-60 sm:w-[350px] sm:h-[350px] sm:blur-[100px] md:w-[400px] md:h-[400px] md:blur-[100px]  bottom-[-100px] left-[-35px] rounded-full bg-gradient-to-tr from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
        <span
          ref={rightCircleRef}
          className="fixed will-change-transform w-[250px] h-[250px] blur-[60px] opacity-60 sm:w-[300px] sm:h-[300px] sm:blur-[80px] md:w-[400px] md:h-[400px] md:blur-[100px]  top-[40px] right-[-90px] rounded-full bg-gradient-to-bl from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
      </div>

      {/* Hero Section */}
      <main
        ref={heroRef}
        className="w-full mt-20 lg:mt-35 py-16 sm:py-24 md:py-32 px-4 sm:px-6 xl:px-0"
      >
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[1100px] flex flex-col lg:flex-row gap-10 lg:justify-start lg:items-start xl:text-left md:items-center md:text-center">

          <div>
            {/* Authenticity Badge */}
            <div className="flex justify-center xl:justify-start mb-4 md:mb-6">
              <div

                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#003566]/8 via-[#001D3D]/5 to-[#00A6FB]/8 backdrop-blur-sm border border-[#003566]/15 rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="w-2 h-2 bg-[#003566] rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-[#003566] rounded-full animate-ping opacity-40"></div>
                </div>
                <span className="text-sm font-medium text-[#003566] tracking-tight">
                  🚀 Ehrlich. Direkt. Ohne Marketing-Blabla.
                </span>
              </div>
            </div>

            <h1
              ref={headlineRef}
              className="text-3xl md:text-5xl font-black text-black leading-tight mb-5"
            >
              Ihre Website soll <span className='text-[#003566]'>Kunden bringen</span> <span className='md:hidden xl:inline-block'>-</span>  <span className='block'></span> nicht nur schön aussehen.
            </h1>

            <p ref={mobileText1Ref} className="text-lg text-[#000814] max-w-xl xl:hidden mb-4">
              Während Sie schlafen, arbeiten oder Zeit mit der Familie verbringen, sollte Ihre Website neue Kunden gewinnen. Ich sorge dafür, dass sie das endlich tut.
            </p>
            <p ref={mobileText2Ref} className="text-base text-[#000814]/85 max-w-xl xl:hidden mb-5">
               Jeder Tag ohne verkaufsstarke Website kostet Sie potenzielle Kunden.
            </p>

            <div className="hidden xl:flex flex-col gap-6 max-w-2xl">
              <p ref={desktopText1Ref} className="text-lg xltext-xl text-[#000814]">
                 Während Sie schlafen, arbeiten oder Zeit mit der Familie verbringen, sollte Ihre Website neue Kunden gewinnen. Ich sorge dafür, dass sie das endlich tut.
              </p>
              <p ref={desktopText2Ref} className="text-base xl:text-[1.1rem] text-[#000814]">
                    Jeder Tag ohne verkaufsstarke Website kostet Sie potenzielle Kunden.
              </p>
            </div>

            <div
              ref={ctaRef}
              className="mt-12.5 flex gap-2 lg:gap-4 md:items-center md:justify-center xl:items-start xl:justify-start"
            >
              <CTA1 bg="bg-white"/>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end pt-6 lg:pt-0">
            <img
                ref={imageRef}
                src={HeroIllustration}
                alt="Illustration einer modernen Website"
                className={`xl:block w-full max-w-[600px] ${!isXL ? 'hidden' : ''}`}
              />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
