import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap, ScrollTrigger } from './gsapSetup';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HeroIllustration from '../assets/Hero-Illustration.webp';

const Hero = () => {
  const heroRef = useRef(null);
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);
  const navigate = useNavigate();

  const headlineRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const disclaimerRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  const [isXL, setIsXL] = useState(false);

  const handleClick = () => {
    navigate('/erstgespraech');
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
      const textRefs = [headlineRef, text1Ref, text2Ref, ctaRef, disclaimerRef];
      gsap.from(textRefs.map(ref => ref.current).filter(Boolean), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      const imgEl = imageRef.current;
      if (imgEl && !imgEl.complete) {
        const handleLoad = () => {
          gsap.from(imgEl, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });
        };
        imgEl.addEventListener('load', handleLoad);
        return () => imgEl.removeEventListener('load', handleLoad);
      } else if (imgEl) {
        gsap.from(imgEl, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });
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
        className="w-full mt-20 lg:mt-16 xl:mt-30 py-16 sm:py-24 md:py-32 px-4 sm:px-6 xl:px-0"
      >
        <div className="mx-auto w-full max-w-[700px] xl:max-w-[1100px] flex flex-col lg:flex-row gap-10 lg:justify-start lg:items-start xl:text-left md:items-center md:text-center">

          <div>
            {/* Badge */}
            <div className="flex justify-center xl:justify-start mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#003566]/8 via-[#001D3D]/5 to-[#00A6FB]/8 backdrop-blur-sm border border-[#003566]/15 rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#003566] rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-[#003566] rounded-full animate-ping opacity-40"></div>
                </div>
                <span className="text-[13px] md:text-sm font-medium text-[#003566] tracking-tight">
                  🚀 Websites für lokale Unternehmen in Ennepetal <span className='block md:inline-block'>& Umgebung</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-3xl md:text-5xl font-black text-black tracking-tight mb-6"
            >
              <span className="md:hidden">Websites, die neue Kunden bringen</span>
              <span className="hidden md:inline">Websites die <span className='text-[#003566]'>Kunden bringen</span>. <br/>Nicht nur schön, sondern  <br/> planbar neue Anfragen.</span>
            </h1>

            {/* Text */}
            <div className={`max-w-xl md:mx-auto xl:mx-0 xl:max-w-2xl ${isXL ? 'flex flex-col gap-6' : ''}`}>
              <p ref={text1Ref} className={`text-lg ${isXL ? 'xl:text-xl' : ''} text-[#000814] mb-4 font-bold`}>
                Während Sie arbeiten, schlafen oder Zeit mit Ihrer Familie verbringen, sorgt Ihre Website für neue Kundenanfragen. Automatisch.
              </p>
              <p ref={text2Ref} className={`text-[15px] ${isXL ? 'xl:text-[1.1rem]' : 'text-[#000814]/85'} text-[#000814] mb-5`}>
                Ohne eine Website, die Anfragen bringt, bleibt Ihr Wachstum dem Zufall überlassen.
              </p>
            </div>

            {/* CTA */}
            <div ref={ctaRef} className="mt-12.5 flex gap-2 lg:gap-4 md:items-center md:justify-center xl:items-start xl:justify-start">
              <button
                onClick={handleClick}
                className="px-4 py-2 text-white bg-[#001D3D] flex items-center gap-2 justify-center rounded shadow-md border-2 transform hover:-translate-y-1 ease-in border-[#003566] hover:border-[#001D3D] transition"
              >
                Erstgespräch vereinbaren <FaArrowRight />
              </button>
            </div>

            <p ref={disclaimerRef} className='text-[13px] md:text-sm mt-3 text-black/40'>
              Unverbindlich & kostenlos – ohne Risiko
            </p>
          </div>

          {/* Illustration */}
          <div className="flex-1 flex justify-center lg:justify-end pt-6 lg:pt-0">
            <img
              ref={imageRef}
              src={HeroIllustration}
              alt="Illustration einer modernen Website - Franco Cipolla – Webentwickler & Webdesigner aus Ennepetal. Individuelle Websites für KMUs."
              className={`xl:block w-full max-w-[600px] ${!isXL ? 'hidden' : ''}`}
            />
          </div>

        </div>
      </main>
    </>
  );
};

export default Hero;
