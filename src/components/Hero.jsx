import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap, ScrollTrigger } from './gsapSetup';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HeroIllustration from '../assets/Untitled design.avif';

const Hero = () => {
  const heroRef = useRef(null);
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);
  const navigate = useNavigate();

  const headlineRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const disclaimerRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const mobileImageRef = useRef(null);

  const [, setIsXL] = useState(false);

  const handleClick = () => {
    navigate('/website-analyse');
  };

  useEffect(() => {
    const checkWidth = () => setIsXL(window.innerWidth >= 1280);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
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
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textRefs = [headlineRef, text1Ref, text2Ref, text3Ref, ctaRef, disclaimerRef];
      gsap.from(textRefs.map(ref => ref.current).filter(Boolean), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Desktop-Bild
      const imgEl = imageRef.current;
      if (imgEl) {
        if (!imgEl.complete) {
          const handleLoad = () => {
            gsap.from(imgEl, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });
          };
          imgEl.addEventListener('load', handleLoad);
          return () => imgEl.removeEventListener('load', handleLoad);
        } else {
          gsap.from(imgEl, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });
        }
      }

      // Mobile-Bild
      const mobileImg = mobileImageRef.current;
      if (mobileImg) {
        gsap.from(mobileImg, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });
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
          className="fixed will-change-transform w-[300px] h-[300px] blur-[80px] opacity-30 md:opacity-60 sm:w-[350px] sm:h-[350px] sm:blur-[100px] md:w-[400px] md:h-[400px] md:blur-[100px] bottom-[-100px] left-[-35px] rounded-full bg-gradient-to-tr from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
        <span
          ref={rightCircleRef}
          className="fixed will-change-transform w-[250px] h-[250px] blur-[60px] opacity-60 sm:w-[300px] sm:h-[300px] sm:blur-[80px] md:w-[400px] md:h-[400px] md:blur-[100px] top-[40px] right-[-90px] rounded-full bg-gradient-to-bl from-[#003566] via-[#001D3D] to-[#00A6FB] z-[-1]"
        />
      </div>

      {/* Hero Section */}
      <main
        ref={heroRef}
        className="w-full mt-12 lg:mt-16 xl:mt-30 py-16 sm:py-24 md:py-32 px-4 sm:px-6 xl:px-0"
      >
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[1100px] flex flex-col lg:flex-row gap-10 lg:justify-start lg:items-start xl:text-left md:items-center md:text-center">

          <div className='xl:max-w-[60%]'>

            {/* Badge */}
            <div className="flex justify-center xl:justify-start mb-5 md:mb-6">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-[#001D3D] rounded-xl px-4 py-2 shadow-[3px_3px_0px_#001D3D] rotate-[-1deg]">
                <span className="text-[13px] md:text-sm font-bold text-[#001D3D] tracking-tight">
                  🚀 Für lokale Unternehmen in Ennepetal & Umgebung
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-3xl md:text-5xl font-black text-black tracking-tight mb-6"
            >
              Websites, die gezielt
              <span className="text-[#003566]"> auf Kundenanfragen ausgelegt sind.</span>
            </h1>
           

            {/* Subtext */}
            <div className="max-w-xl md:mx-auto xl:mx-0 xl:max-w-2xl">

              {/* Mobile only – Outcome-fokussiert */}
              <p
                ref={text1Ref}
                className="md:hidden text-[15px] text-[#000814]/75 mb-5"
              >
                Ihre Website kann messbar mehr Anfragen bringen -
                ohne Werbebudget, ohne auf Empfehlungen warten.
              </p>

              {/* md+ only – ausführlich */}
              <p
                ref={text2Ref}
                className="hidden md:block text-lg xl:text-xl text-[#000814] mb-4 font-semibold"
              >
                Ihre Website soll keine Visitenkarte sein,
                sondern kontinuierlich Besucher zu Anfragen führen.
              </p>

              <p
                ref={text3Ref}
                className="hidden md:block text-[15px] xl:text-[1.05rem] text-[#000814]/85 mb-5"
              >
                Ohne ein System, das aktiv Anfragen erzeugt,
                bleiben Sie abhängig von Empfehlungen – und wissen nie,
                wie viele Anfragen nächsten Monat tatsächlich kommen.
              </p>

            </div>

            {/* CTA */}
            <div
              ref={ctaRef}
              className="mt-10 flex gap-2 md:items-center md:justify-center xl:items-start xl:justify-start"
            >
              <button
                onClick={handleClick}
                className="px-5 py-2.5 cursor-pointer text-white bg-[#001D3D] flex items-center gap-2 justify-center rounded shadow-md border-2 transform hover:-translate-y-1 transition border-[#003566] hover:border-[#001D3D]"
              >
                🔍 Kostenlose Website-Analyse <FaArrowRight />
              </button>
            </div>

            <p
              ref={disclaimerRef}
              className="text-[13px] md:text-sm mt-3 text-black/60"
            >
              Unverbindlich · 15 Minuten · Keine Vorbereitung nötig
            </p>

            {/* Bild + Badges – nur Mobile */}
           {/* Bild + Badges – nur Mobile */}
<div
  ref={mobileImageRef}
  className="block md:hidden mt-10 w-full"
>
  <div className="relative max-w-[420px] mx-auto">

    <img
      src={HeroIllustration}
      alt="Franco Cipolla – Webdesigner aus Ennepetal – Website für mehr Kundenanfragen"
      className="w-full rounded-2xl"
    />

    {/* Badge linke Schulter */}
    <div
      className="absolute"
      style={{ top: '80px', left: '-12px' }}
    >
      <div className="inline-flex items-center gap-1.5 bg-white border-2 border-[#001D3D] rounded-xl px-3 py-1.5 shadow-[2px_2px_0px_#001D3D] rotate-[-2deg]">
        <span className="text-[11px] font-bold text-[#001D3D] whitespace-nowrap">📈 Mehr Anfragen</span>
      </div>
    </div>

    {/* Badge rechte Schulter */}
    <div
      className="absolute"
      style={{ top: '80px', right: '-12px' }}
    >
      <div className="inline-flex items-center gap-1.5 bg-white border-2 border-[#001D3D] rounded-xl px-3 py-1.5 shadow-[2px_2px_0px_#001D3D] rotate-[2deg]">
        <span className="text-[11px] font-bold text-[#001D3D] whitespace-nowrap">📍 Lokal bei Google</span>
      </div>
    </div>

    {/* Badge unten mittig */}
    <div
      className="absolute"
      style={{ bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
    >
      <div className="inline-flex items-center gap-1.5 bg-white border-2 border-[#001D3D] rounded-xl px-3 py-1.5 shadow-[2px_2px_0px_#001D3D] rotate-[-1deg]">
        <span className="text-[11px] font-bold text-[#001D3D] whitespace-nowrap">🛡️ DSGVO-konform</span>
      </div>
    </div>

  </div>
</div>

          </div>

          {/* Illustration – nur Desktop (xl+) */}
          <div className="hidden xl:flex flex-1 justify-center lg:justify-end pt-6 lg:pt-0 relative">
            <img
              ref={imageRef}
              src={HeroIllustration}
              alt="Franco Cipolla – Webdesigner aus Ennepetal – Website für mehr Kundenanfragen"
              className="w-full rounded-2xl max-w-[600px]"
            />

            {/* Badge oben rechts */}
            <div className="absolute top-0 left-60">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-[#001D3D] rounded-xl px-4 py-2 shadow-[3px_3px_0px_#001D3D] rotate-[2deg]">
                <span className="text-[12px] font-bold text-[#001D3D] whitespace-nowrap">
                  📈 Mehr Anfragen
                </span>
              </div>
            </div>

            {/* Badge unten rechts */}
            <div className="absolute bottom-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-[#001D3D] rounded-xl px-4 py-2 shadow-[3px_3px_0px_#001D3D] rotate-[-2deg]">
                <span className="text-[12px] font-bold text-[#001D3D] whitespace-nowrap">
                  🛡️ DSGVO-konform
                </span>
              </div>
            </div>

            {/* Badge links mittig */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-[#001D3D] rounded-xl px-4 py-2 shadow-[3px_3px_0px_#001D3D] rotate-[1.5deg]">
                <span className="text-[12px] font-bold text-[#001D3D] whitespace-nowrap">
                  📍 Lokal bei Google auffindbar
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Hero;
