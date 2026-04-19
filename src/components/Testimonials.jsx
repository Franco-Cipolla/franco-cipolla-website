import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from './gsapSetup';
import { useNavigate } from 'react-router-dom';

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = () => (
  <div className="flex flex-col gap-1.5">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.06 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.287-3.957z" />
        </svg>
      ))}
    </div>
    <div className="flex items-center gap-1.5">
      <GoogleIcon />
      <span className="text-[11px] font-semibold text-white/40 tracking-tight whitespace-nowrap">
        Verifizierte Bewertung
      </span>
    </div>
  </div>
);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const labelRef = useRef(null);
  const ctaRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([labelRef.current, cardRef.current, ctaRef.current], {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 xl:px-0"
    >
      <div className="mx-auto w-full max-w-[700px] xl:max-w-[1100px]">

        {/* Abschnitts-Label */}
        <div ref={labelRef} className="flex items-center gap-3 mb-8">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#001D3D]/40">
            Kundenstimme
          </span>
          <div className="flex-1 h-px bg-[#001D3D]/10" />
        </div>

        {/* Card */}
        <a
          ref={cardRef}
          href="https://share.google/YqweQocfV3ABWOjb1"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl block bg-gradient-to-br from-[#001D3D] to-[#003566] px-8 py-10 sm:px-12 sm:py-12 border border-[#003566] hover:border-[#00A6FB]/40 transition-colors duration-300 cursor-pointer"
        >
          <div className="flex flex-col gap-8">

            {/* Sterne – nur Mobile oben als eigene Zeile */}
            <div className="xl:hidden">
              <Stars />
            </div>

            {/* Inhalt */}
            <div className="flex-1">

              {/* Sterne – nur Desktop, über Summary Header */}
              <div className="hidden xl:block mb-5">
                <Stars />
              </div>

              {/* Summary Header */}
              <p className="text-[#00A6FB] text-xs font-black uppercase tracking-widest ">
                "Spürbar mehr Anfragen nach der Website-Analyse"
              </p>

              {/* Öffnendes Anführungszeichen */}
              <span className="block text-[80px] leading-none font-black text-[#00A6FB]/20 -mt-8 lg:-mt-6 mb-4 select-none">
                „
              </span>

              {/* Zitat */}
              <p className="text-white font-black text-xl sm:text-2xl xl:text-3xl leading-snug tracking-tight">
                Franco hat mir gezeigt, wo meine Website Anfragen verliert —
                Stellen die sogar mein alter Webdesigner nicht gesehen hat.
                Durch Franco habe ich nun spürbar mehr Anfragen.
                Einer der besten Webdesigner in Ennepetal und Umgebung.
                Klare Empfehlung!"
              </p>



              {/* Trennlinie + Attribution + Link */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-6 border-t border-white/10">

                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="hidden lg:flex w-8 h-8 rounded-full bg-[#00A6FB]/20 border border-[#00A6FB]/30 items-center justify-center shrink-0">
                    <span className="text-[#00A6FB] text-xs font-black">KF</span>
                  </div>
                  {/*
                    Sobald Foto vorhanden:
                    <img src={KevinFoto} alt="Kevin Förster"
                      className="w-8 h-8 rounded-full object-cover border border-[#00A6FB]/30" />
                  */}
                  <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                    Kevin Förster · Geschäftsführer
                  </span>
                </div>

                <span className="text-[#00A6FB]/50 text-xs font-bold uppercase tracking-widest group-hover:text-[#00A6FB] transition-colors duration-300 whitespace-nowrap">
                  Bewertung auf Google ansehen →
                </span>

              </div>

            </div>

          </div>
        </a>

        {/* Sekundär-CTA */}
        <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <p className="text-sm text-[#001D3D]/50 font-medium">
            Auch mehr Anfragen durch Ihre Website?
          </p>
          <button
            onClick={() => navigate('/website-analyse')}
            className="text-sm font-black text-[#001D3D] border-b-2 border-[#003566] hover:border-[#00A6FB] transition-colors duration-200 pb-0.5 cursor-pointer"
          >
            Kostenlose Website-Analyse starten →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
