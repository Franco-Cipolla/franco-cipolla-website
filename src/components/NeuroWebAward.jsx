import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from './gsapSetup';
import { useNavigate } from 'react-router-dom';
import "/public/neuroweb-award-logo.png"

const awardUrl = 'https://wirkungswerk.de/en/award/gewinner-2026/#:~:text=Franco%20Cipolla%20%E2%80%93%20Webdesign%20&%20Digitale%20Kundengewinnung';

const AwardBadge = () => (
  <a
    href={awardUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Neuro Web Award ansehen"
    className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[#00A6FB]/30 bg-gradient-to-br from-[#003566] to-[#001D3D] shadow-[0_0_0_1px_rgba(0,166,251,0.15),0_18px_45px_rgba(0,0,0,0.25)] sm:h-28 sm:w-28"
  >
    <div className="absolute inset-2 " />
    <img
      src="/neuroweb-award-logo.png"
      alt="Neuro Web Award Logo"
      className="w-42"
    />
  </a>
);

const NeuroWebAward = ({ showCta = true, hasPadding = true }) => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const cardRef = useRef(null);
  const ctaRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [labelRef.current, cardRef.current, ctaRef.current].filter(Boolean);

      if (elements.length > 0) {
        gsap.from(elements, {
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full py-12 sm:py-14 ${hasPadding ? 'px-4 sm:px-6 xl:px-0' : 'px-0'} xl:px-0`}
    >
      <div className="mx-auto w-full max-w-[700px] xl:max-w-[1100px]">
        <div ref={labelRef} className="mb-4 sm:mb-6 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#000814]">
            Auszeichnung
          </h2>
        </div>

        <div
          ref={cardRef}
          className="rounded-xl border border-[#003566] bg-gradient-to-br from-[#001D3D] to-[#003566] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8 xl:p-10"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex justify-center lg:justify-start">
              <AwardBadge />
            </div>

            <div className="flex-1">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#00A6FB]">
                Ausgezeichnetes Webdesign
              </p>
              <h3 className="text-[24px] font-black leading-tight tracking-tight text-white sm:text-[28px] xl:text-[32px]">
                Websites, die nicht nur schön wirken, sondern mehr Anfragen bringen.
              </h3>
              <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/70 sm:text-[16px]">
                Der <a
                  href={awardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#00A6FB] underline decoration-[#00A6FB]/40 underline-offset-4 transition-colors duration-200 hover:text-white"
                >
                  Neuro Web Award
                </a>{' '}
                bestätigt, dass hinter meiner Arbeit klare Strategie und ein starker Fokus auf Kundenanfragen stehen.
              </p>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <a
                    href={awardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white transition-colors duration-200 hover:text-[#00A6FB]"
                  >
                    Neuro Web Award
                  </a>
                  <p className="mt-1 text-sm text-white/45">
                    Auszeichnung für starkes Webdesign mit klarer Wirkung · 2026
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {showCta && (
          <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-4 sm:mt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-[#001D3D]/50 font-medium">
              Überzeugen Sie sich selbst
            </p>
            <button
              onClick={() => navigate('/website-analyse')}
              className="text-sm font-black text-[#001D3D] border-b-2 border-[#003566] hover:border-[#00A6FB] transition-colors duration-200 pb-0.5 cursor-pointer"
            >
              Kostenlose Website-Analyse starten →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NeuroWebAward;
