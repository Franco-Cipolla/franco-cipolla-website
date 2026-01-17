import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from "../gsapSetup";
import { FaExclamationTriangle, FaCheckCircle, FaUserTimes, FaPhone, FaMobileAlt, FaClock } from 'react-icons/fa';
import CTA1 from "../CTA1";
gsap.registerPlugin(ScrollTrigger);

const ProblemSolution = () => {
  const sectionRef = useRef(null);
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: isMobile ? 'top 90%' : 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    tl.fromTo(leftCircleRef.current, { x: '-100vw', opacity: 0 }, { x: '0vw', opacity: 0.3, ease: 'power3.out' });
    tl.fromTo(rightCircleRef.current, { x: '100vw', opacity: 0 }, { x: '0vw', opacity: 0.3, ease: 'power3.out' }, 0);
    tl.to(leftCircleRef.current, { x: isMobile ? '100vw' : '-100vw', opacity: 0, ease: 'power3.inOut' }, '+=0.2');
    tl.to(rightCircleRef.current, { x: isMobile ? '200vw' : '100vw', opacity: 0, ease: 'power3.inOut' }, '<');

    gsap.fromTo([problemRef.current, solutionRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 20%' } });
  }, []);

  const problems = [
    { icon: <FaUserTimes className="text-red-600" />, title: "Besucher verstehen Ihr Angebot nicht", text: "Potenzielle Kunden wissen nicht sofort, was Sie anbieten – und klicken weg." },
    { icon: <FaPhone className="text-red-600" />, title: "Interessenten kommen – aber melden sich nicht", text: "Die Website erzeugt keine klare Handlungsaufforderung, deshalb bleibt der Kontakt aus." },
    { icon: <FaMobileAlt className="text-red-600" />, title: "Neue Kunden kommen nur zufällig", text: "Sie sind abhängig von Empfehlungen – statt planbar neue Anfragen zu bekommen." },
    { icon: <FaClock className="text-red-600" />, title: "Ihre Seite wirkt veraltet oder unübersichtlich", text: "Das schafft kein Vertrauen und Interessenten suchen sich schnell einen anderen Anbieter." }
  ];

  const solutions = [
    { icon: <FaCheckCircle className="text-green-600" />, title: "Sofortige Klarheit", text: "Besucher wissen in Sekunden, was Sie tun, für wen und wie sie Sie erreichen." },
    { icon: <FaCheckCircle className="text-green-600" />, title: "Mehr Anfragen – messbar", text: "Die Website wird zum aktiven Verkäufer – mit Tracking und klaren CTAs." },
    { icon: <FaCheckCircle className="text-green-600" />, title: "Unabhängig von Empfehlungen", text: "Sie gewinnen konstant neue Kunden auch ohne Mundpropaganda." },
    { icon: <FaCheckCircle className="text-green-600" />, title: "Schnell & mobil optimiert", text: "Keine verlorenen Anfragen mehr durch langsame oder schlecht lesbare Seiten." }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <span ref={leftCircleRef} className="fixed w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] blur-[80px] sm:blur-[100px] md:blur-[100px] bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-full opacity-0 z-[-1]" />
        <span ref={rightCircleRef} className="fixed w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] md:blur-[100px] blur-[60px] sm:blur-[80px] bg-gradient-to-tl from-green-600 via-green-700 to-green-800 rounded-full opacity-0 z-[-1]" />
      </div>

      <section ref={sectionRef} className="w-full mt-5 py-16 sm:py-20 md:py-24 xl:py-28 px-6 mx-auto max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Warum viele Websites in Wuppertal keine Anfragen liefern
          </h2>
          <p className="text-lg text-[#000814] max-w-2xl mx-auto">
            Viele lokale Websites sehen professionell aus, liefern aber keine planbaren Anfragen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Problem */}
          <div ref={problemRef} className="flex flex-col space-y-6">
            <div className="text-center lg:text-left mb-4">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <FaExclamationTriangle className="text-red-600 text-2xl mr-2" />
                <h3 className="text-2xl font-bold text-red-700">Die Herausforderungen</h3>
              </div>
              <p className="text-base text-[#000814]">
                Ohne gezielte Strategie verlieren Sie wertvolle Interessenten in Wuppertal.
              </p>
            </div>
            <div className="space-y-4 flex-grow">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start p-4 bg-red-50 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg mr-3">{p.icon}</div>
                  <div>
                    <h4 className="font-bold text-red-800 mb-1">{p.title}</h4>
                    <p className="text-[#000814] text-m">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 bg-red-100 rounded-2xl text-center shadow-md">
              <p className="text-red-800 font-bold text-base">
                Mit einer klaren Website-Struktur gewinnen Konkurrenten in Wuppertal planbar neue Kunden.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div ref={solutionRef} className="flex flex-col space-y-6">
            <div className="text-center lg:text-left mb-4">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <FaCheckCircle className="text-green-600 text-2xl mr-2" />
                <h3 className="text-2xl font-bold text-green-700">Meine Lösung</h3>
              </div>
              <p className="text-base text-[#000814]">
                Ein maßgeschneidertes Website-System, das Besucher aus Wuppertal gezielt zu Anfragen führt – einfach, messbar und zuverlässig.
              </p>
            </div>
            <div className="space-y-4 flex-grow">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start p-4 bg-green-50 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl mr-3">{s.icon}</div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-1">{s.title}</h4>
                    <p className="text-[#000814] text-m">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 bg-green-100 rounded-2xl text-center shadow-md">
              <p className="text-green-800 font-bold text-base">
                Eine Website, die Besucher aus Wuppertal & Umgebung gezielt zur Anfrage führt.
                <span className="block mt-1 text-sm font-normal text-green-700">
                  50% Anzahlung – Rest nach erfolgreichem Launch.
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="w-full mt-10 flex justify-center">
          <CTA1 bg="bg-white" />
        </div>

        <div className="text-center mt-8">
          <p className="text-[15px] text-[#000814] max-w-xl mx-auto">
            Lassen Sie uns Ihre Website zu einem echten Vertriebssystem machen.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
