import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../gsapSetup";
import { FaExclamationTriangle, FaCheckCircle, FaUserTimes, FaPhone, FaMobileAlt, FaClock } from "react-icons/fa";
import CTA1 from "../CTA1";

const ProblemSolutionSection = () => {
  const sectionRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Animation
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
          start: isMobile ? "top 90%" : "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  const problems = [
    { icon: <FaUserTimes className="text-red-600" />, title: "Unprofessioneller Eindruck", text: "Kunden denken bei Ihrer Website: 'Wenn die nicht mal eine ordentliche Website haben, wie soll dann ihr Service sein?'" },
    { icon: <FaPhone className="text-red-600" />, title: "Keine Kundenanfragen", text: "Null Anfragen trotz Website-Traffic. Ihre Konkurrenz kassiert Ihre Kunden" },
    { icon: <FaMobileAlt className="text-red-600" />, title: "Keine Website = verlorene Kunden", text: "Ohne Website sind Sie für 95% Ihrer potenziellen Kunden unsichtbar – die Konkurrenz kassiert alle Aufträge" },
  ];

  const solutions = [
    { icon: <FaCheckCircle className="text-green-600" />, title: "Höhere Umsätze durch Vertrauen", text: "Professionelles Design steigert Ihre Conversion-Rate erheblich" },
    { icon: <FaCheckCircle className="text-green-600" />, title: "Kunden finden Sie automatisch", text: "Top-Rankings bringen täglich neue Interessenten durch SEO-Optimierung" },
    { icon: <FaCheckCircle className="text-green-600" />, title: "Conversion-fokussierte Texte", text: "Überzeugende Inhalte, die Besucher zu Kunden machen" },
  ];

  return (
    <section ref={sectionRef} className="py-20 flex flex-col items-center px-6 max-w-[1100px] mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
            Veraltete Website? Keine Website? Ich löse Ihr Problem!
            </h2>
            <p className="text-[15px] text-gray-700 mt-6">
            Veraltete Websites, fehlende Anfragen, verlorene Kunden – ich zeige die Lösung.
            </p>
        </div>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Problems */}
        <div ref={problemRef} className="space-y-6">
          <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2"><FaExclamationTriangle /> Das Problem</h3>
          {problems.map((p, i) => (
            <div key={i} className="p-4 bg-red-50 rounded-xl flex gap-4 items-start">
              <div className="text-xl mt-1">{p.icon}</div>
              <div>
                <h4 className="font-bold text-red-800">{p.title}</h4>
                <p className="text-[15px] md:text-base">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div ref={solutionRef} className="space-y-6">
          <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2"><FaCheckCircle /> Das Ergebnis</h3>
          {solutions.map((s, i) => (
            <div key={i} className="p-4 bg-green-50 rounded-xl flex gap-4 items-start">
              <div className="text-xl mt-1">{s.icon}</div>
              <div>
                <h4 className="font-bold text-green-800">{s.title}</h4>
                <p  className="text-[15px] md:text-base">{s.text}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
       <div className="mt-10"><CTA1 /></div>

    </section>
  );
};

export default ProblemSolutionSection;
