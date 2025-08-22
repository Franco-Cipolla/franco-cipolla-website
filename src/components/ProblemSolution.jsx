
import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from "./gsapSetup";
import { FaExclamationTriangle, FaCheckCircle, FaArrowRight, FaClock, FaMobileAlt, FaUserTimes, FaPhone, FaMoneyBillWave, FaBullseye } from 'react-icons/fa';
import CTA1 from "./CTA1"
gsap.registerPlugin(ScrollTrigger);

const ProblemSolution = () => {
  const sectionRef = useRef(null);
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Hintergrund-Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: isMobile ? 'top 90%' : 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    tl.fromTo(
      leftCircleRef.current,
      { x: '-100vw', opacity: 0 },
      { x: '0vw', opacity: 0.3, ease: 'power3.out' }
    );

    tl.fromTo(
      rightCircleRef.current,
      { x: '100vw', opacity: 0 },
      { x: '0vw', opacity: 0.3, ease: 'power3.out' },
      0
    );

    tl.to(leftCircleRef.current, { x: isMobile ? '100vw' : '-100vw', opacity: 0, ease: 'power3.inOut' }, '+=0.2');
    tl.to(rightCircleRef.current, { x: isMobile ? '200vw' : '100vw', opacity: 0, ease: 'power3.inOut' }, '<');

    // Content Animation
    gsap.fromTo(
      [problemRef.current, solutionRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      }
    );
  }, []);

  const problems = [
    {
      icon: <FaUserTimes className="text-red-600" />,
      title: "Unprofessioneller Eindruck",
      text: 'Kunden denken bei Ihrer Website: "Wenn die nicht mal eine ordentliche Website haben, wie soll dann ihr Service sein?"'
    },
    {
      icon: <FaPhone className="text-red-600" />,
      title: "Keine Kundenanfragen",
      text: "Null Anfragen trotz Website-Traffic. Ihre Konkurrenz kassiert Ihre Kunden"
    },
    {
      icon: <FaMobileAlt className="text-red-600" />,
      title: "Keine Website = Verlorene Kunden an die digitale Konkurrenz",
      text: "Ohne Website sind Sie für 95% Ihrer potenziellen Kunden unsichtbar – die Konkurrenz kassiert alle Aufträge"
    },
    {
      icon: <FaClock className="text-red-600" />,
      title: "Langsame Ladezeiten",
      text: "Ihre Website lädt zu langsam – Besucher springen nach 3 Sekunden ab"
    }

  ];

  const solutions = [
    {
      icon: <FaCheckCircle className="text-green-600" />,
      title: "Blitzschnelle Performance",
      text: "Optimierter Code für Ladezeiten unter 2 Sekunden"
    },
    {
      icon: <FaCheckCircle className="text-green-600" />,
      title: "Höhere Umsätze durch Vertrauen",
      text: "Professionelles Design steigert Ihre Conversion-Rate erheblich und macht Leads zu Kunden"
    },
    {
      icon: <FaCheckCircle className="text-green-600" />,
      title: "Kunden finden Sie automatisch",
      text: "Google liebt Ihre neue Website. Top-Rankings bringen täglich neue Interessenten durch SEO-optimierung"
    },
    {
      icon: <FaCheckCircle className="text-green-600" />,
      title: "Conversion-fokussierte Texte",
      text: "Überzeugende Inhalte, die Besucher zu Kunden machen"
    }
  ];

  return (
    <>
      {/* Hintergrundkreise */}
      <div className="relative overflow-hidden">
        <span
          ref={leftCircleRef}
          className="fixed will-change-transform opacity-0 w-[300px] h-[300px] blur-[80px] sm:w-[350px] sm:h-[350px] sm:blur-[100px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 top-[120px] left-[60px] rounded-full bg-gradient-to-br from-[#DC2626] via-[#991B1B] to-[#7F1D1D] z-[-1]"
        />
        <span
          ref={rightCircleRef}
          className="fixed will-change-transform opacity-0 w-[250px] h-[250px] blur-[60px] sm:w-[300px] sm:h-[300px] sm:blur-[80px] sm:opacity-70 md:w-[400px] md:h-[400px] md:blur-[100px] md:opacity-70 bottom-[-100px] right-[60px] rounded-full bg-gradient-to-tl from-[#059669] via-[#047857] to-[#065F46] z-[-1]"
        />
      </div>

      {/* Problem/Solution Section */}
      <section
        ref={sectionRef}
        className="w-full mt-5 lg:mt-35 py-16 sm:py-24 md:py-32 xl:py-20 px-6  mb-10 xl:px-0 mx-auto max-w-[1000px] xl:max-w-[1100px]"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
            Jeden Tag verlieren Sie Kunden an die Konkurrenz – und Sie wissen nicht warum
          </h2>
          <p className="text-lg text-[#000814] max-w-2xl mx-auto">
            Diese 4 Website-Probleme kosten Sie jeden Monat mehrere Kunden – und wie Sie sie in 30 Tagen beheben.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Problem Section */}
          <div ref={problemRef} className="flex flex-col space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <FaExclamationTriangle className="text-red-600 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-red-700">Das Problem</h3>
              </div>
              <p className="text-base text-[#000814] mb-8">
                Ihre Website arbeitet gegen Sie. Jeden Tag verlieren Sie potenzielle Kunden an die Konkurrenz:
              </p>
            </div>

            <div className="space-y-6 flex-grow">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center p-4 bg-red-50 rounded-2xl shadow-lg">
                  <div className="text-lg mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8">{problem.icon}</div>
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">{problem.title}</h4>
                    <p className="text-[#000814] font-medium">{problem.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-red-100 rounded-2xl text-center mt-auto shadow-lg">
              <p className="text-lg font-bold text-red-800 flex items-center justify-center gap-3">
                <FaMoneyBillWave className="text-red-700 text-lg w-11 h-11 md:w-8 md:h-8" />
                Das kostet Sie jeden Monat hunderte bis tausende von Euro an entgangenen Aufträgen!
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div ref={solutionRef} className="flex flex-col  space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <FaCheckCircle className="text-green-600 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-green-700">Die Lösung</h3>
              </div>
              <p className="text-base text-[#000814] mb-8">
                Eine professionelle Website, die für Sie arbeitet und neue Kunden bringt:
              </p>
            </div>

            <div className="space-y-6 flex-grow xl:mt-7">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center p-4 bg-green-50 rounded-2xl shadow-lg ">
                  <div className="mr-4 flex-shrink-0 text-xl flex items-center justify-center w-8 h-8">{solution.icon}</div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">{solution.title}</h4>
                    <p className="text-[#000814]">{solution.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-green-100 rounded-2xl text-center mt-auto shadow-lg">
              <p className="text-lg font-bold text-green-800 flex items-center justify-center gap-2.5">
                <FaBullseye className="text-green-700 text-lg w-8 h-8 md:w-5 md:h-5 " />
                Investieren Sie in eine Website, die Ihnen Kunden bringt!
              </p>

            </div>
          </div>
        </div>
        <div className='w-full my-10 flex items-center justify-center'>
         <CTA1 bg="bg-white"/>
         </div>

        {/* Transition zu nächster Section */}
        <div className="text-center ">
          <p className="text-[15px] text-[#000814] max-w-xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Website zum Kundenmagnet machen.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
