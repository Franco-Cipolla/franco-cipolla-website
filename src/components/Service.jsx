import React, { useLayoutEffect, useRef } from 'react';

import { gsap } from './gsapSetup';

import strategyVideo from '../assets/strategy.mp4';
import webdesignVideo from '../assets/webdesign.mp4';
import leadsVideo from '../assets/leads.mp4';

const services = [
  {
    number: '01',
    title: 'Strategie & Texte',
    text: 'Positionierung und Texte, die auf den Punkt bringen, warum Kunden gerade bei Ihnen anfragen sollten. Aus Ihrem Angebot wird eine klare Entscheidung.',
    video: strategyVideo,
  },
  {
    number: '02',
    title: 'Webdesign & Entwicklung',
    text: 'Eine moderne, schnelle Website, die Ihr Unternehmen professionell präsentiert, Vertrauen schafft und Besucher sicher durch die Seite führt.',
    video: webdesignVideo,
  },
  {
    number: '03',
    title: 'Anfragen & Messung',
    text: 'Klare Handlungsaufforderungen, lokale Sichtbarkeit und Tracking machen sichtbar, was Ihre Website tatsächlich leistet.',
    video: leadsVideo,
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service-start"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden  px-4 py-[clamp(72px,10vw,112px)] text-black sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[100rem] text-center">
        {/* HEADER */}
        <div ref={headerRef} className="mb-[clamp(32px,5vw,56px)]">
          <h2 className="mb-5 text-[clamp(34px,5vw,56px)] font-semibold leading-[1.1] tracking-tight text-black">
            Eine Website ist mehr als gutes Design.
          </h2>
          <p className="mx-auto max-w-[40rem] text-[clamp(16px,1.6vw,18px)] leading-7 text-black/80">
            Von der Positionierung bis zur messbaren Anfrage: Jeder Teil
            Ihrer Website verfolgt ein klares Ziel.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <article
              key={service.number}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="mx-auto w-full max-w-[28rem]   overflow-hidden rounded-[20px] text-center md:max-w-none"
            >
              <div className="h-[clamp(200px,56vw,280px)]  w-full overflow-hidden rounded-[20px] bg-white/10 md:h-[clamp(220px,26vw,350px)]">
                <video
                  src={service.video}
                  autoPlay
                  muted
                  loop

                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="block h-full  w-full object-cover"
                />
              </div>

              <div className="px-4 pb-7 pt-6  lg:px-6 lg:pb-8 lg:pt-7">
                <h3 className="mb-3 text-[clamp(22px,2.2vw,28px)] font-semibold text-black">
                  {service.title}
                </h3>
                <p className="text-base leading-7 text-black/80">
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
