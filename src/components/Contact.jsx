import React, { useRef, useEffect, useState } from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { gsap, ScrollTrigger } from "./gsapSetup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { buildFormsparkUrl, submitToFormspark } from './formspark';

gsap.registerPlugin(ScrollTrigger);

// ── Branding (identisch zu CalendlyFallbackForm) ──────────────────────────────
const BTN_PRIMARY   = "bg-[#001D3D] hover:bg-[#003566] text-white font-semibold px-5 py-2.5 rounded-lg border-2 border-[#003566] hover:border-[#001D3D] transition-all cursor-pointer text-[14px] active:scale-95";
const BTN_SECONDARY = "text-[#000814]/50 hover:text-[#000814] text-[13px] underline underline-offset-2 cursor-pointer transition-colors";
const BTN_OPTION    = (active) =>
  `w-full py-3 px-4 border rounded-lg text-left cursor-pointer transition-all text-[13px] sm:text-[14px] leading-snug ${
    active
      ? "bg-[#003566]/[0.07] border-[#003566] font-semibold text-[#000814]"
      : "border-gray-200 hover:border-[#003566]/40 hover:bg-gray-50 text-[#000814]/75"
  }`;
const INPUT_BASE    = "border border-gray-200 focus:border-[#003566] focus:outline-none w-full px-3.5 py-2.5 rounded-lg mt-2 text-[14px] text-[#000814] transition-colors placeholder:text-[#000814]/30";

// 4 Schritte: Pain → Name → Telefon + Nachricht → Absenden
const TOTAL_STEPS = 4;

const Contact = () => {
  const sectionRef = useRef(null);
  const navigate   = useNavigate();

  const [formData, setFormData] = useState({
    pain:    [],
    name:    '',
    phone:   '',
    message: '',
    privacy: false,
    website: '', // Honeypot
  });

  const [errors,     setErrors]     = useState({});
  const [step,       setStep]       = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const formsparkURL = buildFormsparkUrl(import.meta.env.VITE_FORMSPARK_FORM_ID_CONTACT);

  const painOptions = [
    'Meine Website bringt kaum oder keine Anfragen',
    'Ich bin von Empfehlungen abhängig – das ist nicht planbar',
    'Neue Kunden kommen unregelmäßig',
    'Ich habe aktuell gar keine Website',
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.ca'),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    );
  }, []);

  const togglePain = (option) => {
    setFormData(prev => ({
      ...prev,
      pain: prev.pain.includes(option)
        ? prev.pain.filter(p => p !== option)
        : [...prev.pain, option],
    }));
    setErrors(prev => ({ ...prev, pain: '' }));
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = (s) => {
    const e = {};
    if (s === 1 && formData.pain.length === 0) e.pain    = 'Bitte mindestens eine Option auswählen.';
    if (s === 2 && !formData.name.trim())      e.name    = 'Bitte geben Sie Ihren Namen ein.';
    if (s === 3 && !formData.phone.trim())     e.phone   = 'Bitte geben Sie eine Telefonnummer ein.';
    if (s === 4 && !formData.privacy)          e.privacy = 'Bitte Datenschutzerklärung akzeptieren.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.trim() !== '') return; // Honeypot
    if (!validate(4)) return;
    setSubmitting(true);
    try {
      const payload = { ...formData, pain: formData.pain.join(', ') };
      const result  = await submitToFormspark(formsparkURL, payload);
      if (result.ok) navigate('/danke');
      else toast.error('Fehler beim Senden. Bitte erneut versuchen.');
    } catch {
      toast.error('Senden fehlgeschlagen. Bitte später erneut versuchen.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="w-full flex justify-center py-16 sm:py-20 px-5 sm:px-8 lg:px-0">
      <ToastContainer position="top-center" />

      {/* Honeypot */}
      <input type="text" name="website" value={formData.website}
        onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[1000px] lg:grid lg:grid-cols-2 gap-12 lg:gap-16">

        {/* ── LINKS ── */}
        <div className="mb-10 lg:mb-0">
          <h1 className="ca text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#000814] tracking-tight mb-4" id="contact">
            Kontaktieren Sie mich
          </h1>
          <p className="ca text-[14px] sm:text-[15px] text-[#000814]/70 leading-[1.7] mb-2">
            Kurze Anfrage – ehrliche Rückmeldung – keine Verpflichtung.
          </p>

          {/* Dringlichkeit – Loss Aversion */}
          <div className="ca flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <p className="text-[12px] sm:text-[13px] text-[#000814]/50">
              Noch Plätze verfügbar – ich antworte innerhalb von 24 Stunden
            </p>
          </div>

          {/* Kontakt-Links */}
          {[
            {
              icon: <HiOutlinePhone className="text-[#003566] text-[18px]" />,
              href: 'tel:+4917675398004',
              label: '+49 176 75398004',
              external: false,
            },
            {
              icon: <FaWhatsapp className="text-[#003566] text-[18px]" />,
              href: 'https://wa.me/4917675398004',
              label: 'WhatsApp schreiben',
              external: true,
            },
            {
              icon: <FiInstagram className="text-[#003566] text-[18px]" />,
              href: 'https://instagram.com/francocipolla.de',
              label: '@francocipolla.de',
              external: true,
            },
          ].map(({ icon, href, label, external }) => (
            <div key={label} className="ca flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[#003566]/20 bg-[#003566]/[0.04] rounded-lg">
                {icon}
              </span>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-[13px] sm:text-[14px] text-[#000814]/70 hover:text-[#003566] transition-colors"
              >
                {label}
              </a>
            </div>
          ))}
        </div>

        {/* ── RECHTS: Formular ── */}
        <form onSubmit={handleSubmit} noValidate className="w-full">

          {/* Progress Bar */}
          <div className="mb-6 sm:mb-7">
            <div className="flex justify-between text-[11px] sm:text-[12px] text-[#000814]/40 mb-2">
              <span>Schritt {step} von {TOTAL_STEPS}</span>
              <span>~30 Sekunden</span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#003566] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>

          {/* ── SCHRITT 1: Pain ── */}
          {step === 1 && (
            <div>
              <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
                Was trifft aktuell auf Sie zu?
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-4">
                Mehrfachauswahl möglich
              </p>
              <div className="flex flex-col gap-2.5">
                {painOptions.map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => togglePain(option)}
                    className={BTN_OPTION(formData.pain.includes(option))}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.pain && <p className="text-red-500 text-[12px] mt-2">{errors.pain}</p>}

              {/* Micro-commitment nach Auswahl */}
              {formData.pain.length > 0 && (
                <p className="text-[12px] text-[#003566] mt-3 flex items-center gap-1.5">
                  <span>✓</span>
                  <span>Gut – ich melde mich mit einer ehrlichen Einschätzung.</span>
                </p>
              )}

              <div className="mt-5">
                <button type="button" className={BTN_PRIMARY} onClick={() => validate(1) && setStep(2)}>
                  Weiter →
                </button>
              </div>
            </div>
          )}

          {/* ── SCHRITT 2: Name ── */}
          {step === 2 && (
            <div>
              <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
                Wie darf ich Sie ansprechen?
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-2">
                Damit ich Sie namentlich begrüßen kann
              </p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ihr Name oder Vorname"
                className={INPUT_BASE}
                autoFocus
              />
              {errors.name && <p className="text-red-500 text-[12px] mt-1.5">{errors.name}</p>}
              <div className="flex items-center gap-4 mt-5">
                <button type="button" className={BTN_PRIMARY} onClick={() => validate(2) && setStep(3)}>
                  Weiter →
                </button>
                <button type="button" className={BTN_SECONDARY} onClick={() => setStep(1)}>
                  Zurück
                </button>
              </div>
            </div>
          )}

          {/* ── SCHRITT 3: Telefon + optionale Nachricht ── */}
          {step === 3 && (
            <div>
              <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
                Unter welcher Nummer erreiche ich Sie?
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-2">
                Für eine kurze Rückmeldung – kein Spam
              </p>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^\d+\s\-()]/g, '');
                  setFormData(prev => ({ ...prev, phone: val }));
                  setErrors(prev => ({ ...prev, phone: '' }));
                }}
                placeholder="z.B. 0176 75398004"
                inputMode="tel"
                pattern="[0-9+\s\-()]+"
                className={INPUT_BASE}
                autoFocus
              />
              {errors.phone && <p className="text-red-500 text-[12px] mt-1.5">{errors.phone}</p>}

              {/* Nachricht direkt hier – kein eigener Schritt mehr */}
              <p className="font-semibold text-[13px] sm:text-[14px] text-[#000814] mt-5 mb-1">
                Ihre Nachricht <span className="font-normal text-[#000814]/40">(optional)</span>
              </p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Was läuft nicht so wie Sie möchten? Was haben Sie schon probiert? Was wäre ein gutes Ergebnis?"
                className="border border-gray-200 focus:border-[#003566] focus:outline-none w-full px-3.5 py-2.5 rounded-lg mt-1 text-[14px] text-[#000814] transition-colors placeholder:text-[#000814]/30 resize-none"
              />

              <div className="flex items-center gap-4 mt-5">
                <button type="button" className={BTN_PRIMARY} onClick={() => validate(3) && setStep(4)}>
                  Weiter →
                </button>
                <button type="button" className={BTN_SECONDARY} onClick={() => setStep(2)}>
                  Zurück
                </button>
              </div>
            </div>
          )}

          {/* ── SCHRITT 4: Datenschutz + Absenden ── */}
          {step === 4 && (
            <div>
              {/* Goal-Gradient */}
              <p className="text-[11px] sm:text-[12px] font-semibold text-[#003566] uppercase tracking-wide mb-3">
                ✦ Letzter Schritt
              </p>
              <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
                Fast geschafft.
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-5">
                Bestätigen Sie kurz Ihre Anfrage – ich melde mich innerhalb von 24 Stunden.
              </p>

              {/* Zusammenfassung */}
              <div className="border border-[#003566]/15 bg-[#003566]/[0.03] rounded-lg px-4 py-3 mb-5">
                <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wide text-[#003566] mb-1.5">
                  Ihre Anfrage
                </p>
                <p className="text-[12px] sm:text-[13px] text-[#000814]/65">
                  Name: <span className="font-semibold text-[#000814]">{formData.name}</span>
                </p>
                <p className="text-[12px] sm:text-[13px] text-[#000814]/65 mt-0.5">
                  Thema: <span className="font-semibold text-[#000814]">{formData.pain.join(', ')}</span>
                </p>
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="w-4 h-4 mt-0.5 cursor-pointer accent-[#003566] flex-shrink-0"
                />
                <span className="text-[12px] sm:text-[13px] text-[#000814]/60 leading-snug group-hover:text-[#000814]/80 transition-colors">
                  Ich akzeptiere die{' '}
                  <Link to="/datenschutz" className="underline hover:text-[#003566] transition-colors">
                    Datenschutzerklärung
                  </Link>
                </span>
              </label>
              {errors.privacy && <p className="text-red-500 text-[12px] mt-1.5">{errors.privacy}</p>}

              <div className="flex items-center gap-4 mt-5">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`${BTN_PRIMARY} ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {submitting ? 'Wird gesendet…' : 'Jetzt Anfrage senden'}
                </button>
                <button type="button" className={BTN_SECONDARY} onClick={() => setStep(3)}>
                  Zurück
                </button>
              </div>

              <p className="text-[11px] text-[#000814]/35 mt-4">
                🔒 Ihre Daten werden nicht weitergegeben.
              </p>
            </div>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;
