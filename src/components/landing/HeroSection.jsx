import React, { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from '../gsapSetup';
import { FaChevronDown } from "react-icons/fa";
import CTA1 from "../CTA1";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const ctaRef = useRef(null);
  const arrowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Kreise sanft bewegen
      gsap.to(leftCircleRef.current, {
        y: 80,
        x: -30,
        rotate: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(rightCircleRef.current, {
        y: -80,
        x: 30,
        rotate: -10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text animiert einfliegen
      gsap.from([headlineRef.current, sublineRef.current, ctaRef.current], {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.out",
      });

      // Pfeil Animation: Auf und Ab (Loop)
      gsap.to(arrowRef.current, {
        y: 10,
        duration: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center h-screen text-center py-28 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Dynamische Hintergrundkreise */}
      <span
        ref={leftCircleRef}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#003566] via-[#6fb0f5] to-[#00A6FB] opacity-30 top-[350px] left-[-120px] z-0 blur-[100px]"
      />
      <span
        ref={rightCircleRef}
        className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-bl via-[#6fb0f5] to-[#00A6FB] from-[#003566] opacity-30 top-[40px] right-[-120px] z-0 blur-[90px]"
      />

      <div className="relative z-10 max-w-3xl">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl font-extrabold mb-6 "
        >
          Ihre Website als <span className="text-blue-600">Kundenmagnet</span> –
            gewinnt Anfragen, während Sie schlafen

        </h1>

        {/* Subline */}
        <p ref={sublineRef} className="text-base md:text-xl mb-10 text-gray-700">
        Schließen Sie sich den KMUs in NRW an,
die mit einer optimierten Website täglich neue Anfragen gewinnen.
     </p>

        {/* CTA */}
        <div ref={ctaRef}>
          <CTA1 bg="bg-white" />
          <p className='text-[13px] md:text-sm  mt-3 text-black/40'>
                 Unverbindlich & 100% kostenlos – ohne Risiko
              </p>
        </div>

      </div>

      {/* Scroll-Pfeil unten */}
      {/* Scroll-Pfeil unten */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" ref={arrowRef}>
           <FaChevronDown className="text-3xl text-blue-600" />
      </div>

    </section>
  );
};

export default HeroSection;
