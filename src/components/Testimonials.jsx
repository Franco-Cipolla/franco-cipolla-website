import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from './gsapSetup';
import { useNavigate } from 'react-router-dom';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────────────────────
   Kundenstimme im Design der Seite: äußere Karte, innen weißes Feld
   mit weichem Farbschimmer. Links Bewertung + Person, rechts Zitat.
   Props bleiben kompatibel zur alten Komponente.
───────────────────────────────────────────────────────────── */

const REVIEW = {
  url: 'https://share.google/YqweQocfV3ABWOjb1',
  name: 'Kevin Förster',
  role: 'Geschäftsführer',
  initials: 'KF',
  // avatarSrc: '/img/kevin.webp', // sobald ein Foto vorhanden ist
  headline: 'Spürbar mehr Anfragen nach der Website-Analyse',
  short:
    'Franco hat mir gezeigt, warum meine Website Anfragen verliert. Seitdem bekomme ich spürbar mehr Anfragen. Klare Empfehlung.',
  long:
    'Franco hat mir gezeigt, wo meine Website Anfragen verliert. Stellen, die sogar mein alter Webdesigner nicht gesehen hat. Durch Franco habe ich nun spürbar mehr Anfragen. Einer der besten Webdesigner in Ennepetal und Umgebung. Klare Empfehlung!',
};

const GoogleIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const STAR = 'M12 2.8l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.7l-5.9 3.1 1.2-6.5L2.5 9.7l6.6-.9z';

const Stars = ({ size = 20 }) => (
  <span role="img" aria-label="5 von 5 Sternen" className="flex gap-0.5">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path d={STAR} fill="#F5A524" />
      </svg>
    ))}
  </span>
);

const Testimonials = ({
  showCta = true,
  hasPadding = true,
  showTitle = true,
  eyebrowStyle = false,
  className = '',
}) => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const labelRef = useRef(null);
  const ctaRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [labelRef.current, cardRef.current, ctaRef.current].filter(Boolean);
      if (elements.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(elements, { clearProps: 'all' });
        return;
      }

      gsap.from(elements, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full py-[clamp(4rem,9vw,6.5rem)] ${hasPadding ? 'px-[clamp(1rem,4vw,2.5rem)]' : 'px-0'} ${className}`}
    >
      <div className="mx-auto w-full max-w-[64rem]">
        {showTitle && (
          <div ref={labelRef} className={`mb-6 sm:mb-8 ${eyebrowStyle ? 'w-full' : 'text-center'}`}>
            {eyebrowStyle ? (
              <div className="flex items-center gap-4">
                <span className="text-[13px] font-semibold text-[#003566]/80 sm:text-sm">Kundenstimme</span>
                <div className="h-px flex-1 bg-black/10" />
              </div>
            ) : (
              <h2 className="text-[clamp(28px,4.2vw,48px)] font-semibold leading-[1.1] tracking-tight text-[#000814]">
                Kundenstimme
              </h2>
            )}
          </div>
        )}

        <a
          ref={cardRef}
          href={REVIEW.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Bewertung von ${REVIEW.name} auf Google ansehen`}
          className="group block rounded-[22px] border border-black/10 bg-[#F3F4F7] p-2.5 outline-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,37,64,0.35)] focus-visible:ring-2 focus-visible:ring-[#00A6FB]"
        >
          <div
            className="relative grid overflow-hidden rounded-2xl border border-black/[0.06] bg-white lg:grid-cols-[minmax(0,4.2fr)_minmax(0,7.8fr)]"
            style={{ background: 'radial-gradient(80% 60% at 20% 0%, rgba(47,123,255,.10), transparent 70%), #fff' }}
          >
            {/* Links: Bewertung + Person */}
            <div className="flex flex-row items-center justify-between gap-4 border-b border-black/[0.06] px-6 py-5 sm:px-9 lg:flex-col lg:items-start lg:justify-between lg:border-b-0 lg:border-r lg:py-10">
              <div>
                <Stars size={20} />
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="text-[clamp(40px,5vw,60px)] font-semibold leading-none tracking-tight text-[#0B2540]">5,0</span>
                  <span className="text-[13px] text-[#5B6B80]">von 5 Sternen</span>
                </p>
                <p className="mt-3 flex items-center gap-2 text-[13px] font-medium text-[#33435A]">
                  <GoogleIcon />
                  Verifizierte Google-Bewertung
                </p>
              </div>

              <div className="flex items-center gap-3 text-left">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#001D3D] text-[13px] font-semibold text-white"
                >
                  {REVIEW.initials}
                </span>
                <span className="leading-tight">
                  <b className="block text-[15px] font-semibold text-[#0B2540]">{REVIEW.name}</b>
                  <small className="block text-[13px] text-[#5B6B80]">{REVIEW.role}</small>
                </span>
              </div>
            </div>

            {/* Rechts: Zitat */}
            <div className="relative px-6 py-7 sm:px-10 sm:py-10 lg:py-12">
              <svg
                aria-hidden="true"
                width="96"
                height="96"
                viewBox="0 0 24 24"
                className="pointer-events-none absolute right-6 top-4 text-[#003566] opacity-[0.06] sm:right-10 sm:top-8"
              >
                <path fill="currentColor" d="M9.5 6C6.5 7 4.5 9.6 4.5 13v5h6v-6h-3c0-2 1-3.3 3-4L9.5 6zm9 0c-3 1-5 3.6-5 7v5h6v-6h-3c0-2 1-3.3 3-4L18.5 6z" />
              </svg>

              <p className="relative text-[15px] font-semibold text-[#2F7BFF] sm:text-base">{REVIEW.headline}</p>

              <blockquote className="relative mt-4">
                <p className="text-[19px] font-semibold leading-[1.4] tracking-tight text-[#0B2540] sm:hidden">
                  „{REVIEW.short}“
                </p>
                <p className="hidden text-[clamp(21px,2.2vw,28px)] font-semibold leading-[1.35] tracking-tight text-[#0B2540] sm:block">
                  „{REVIEW.long}“
                </p>
              </blockquote>

              <span className="relative mt-7 inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#2F7BFF]">
                Bewertung auf Google ansehen
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2F7BFF]/10 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </a>

        {showCta && (
          <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-3 sm:mt-14 sm:flex-row sm:gap-5">
            <p className="text-sm font-medium text-[#001D3D]/55">Auch mehr Anfragen durch Ihre Website?</p>
            <button
              type="button"
              onClick={() => navigate('/website-analyse')}
              className="cursor-pointer border-b-2 border-[#003566] pb-0.5 text-sm font-semibold text-[#001D3D] transition-colors duration-200 hover:border-[#00A6FB]"
            >
              Kostenlose Website-Analyse starten →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
