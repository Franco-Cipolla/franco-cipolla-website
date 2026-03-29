import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { buildFormsparkUrl, submitToFormspark } from "./formspark";

// ── Branding-Konstanten ───────────────────────────────────────────────────────
const BTN_PRIMARY   = "bg-[#001D3D] hover:bg-[#003566] text-white font-semibold px-5 py-2.5 rounded-lg border-2 border-[#003566] hover:border-[#001D3D] transition-all cursor-pointer text-[14px] active:scale-95";
const BTN_SECONDARY = "text-[#000814]/50 hover:text-[#000814] text-[13px] underline underline-offset-2 cursor-pointer transition-colors";
const BTN_OPTION    = (active) =>
  `w-full py-3 px-4 border rounded-lg text-left cursor-pointer transition-all text-[13px] sm:text-[14px] leading-snug ${
    active
      ? "bg-[#003566]/[0.07] border-[#003566] font-semibold text-[#000814]"
      : "border-gray-200 hover:border-[#003566]/40 hover:bg-gray-50 text-[#000814]/75"
  }`;
const INPUT_BASE    = "border border-gray-200 focus:border-[#003566] focus:outline-none w-full px-3.5 py-2.5 rounded-lg mt-2 text-[14px] text-[#000814] transition-colors placeholder:text-[#000814]/30";

// ── Schritt-Indikatoren ───────────────────────────────────────────────────────
const TOTAL_STEPS = 5;

const StepIndicator = ({ step }) => (
  <div className="mb-6 sm:mb-7">
    <div className="flex justify-between text-[11px] sm:text-[12px] text-[#000814]/40 mb-2">
      <span>Schritt {step} von {TOTAL_STEPS}</span>
      <span>~30 Sekunden</span>
    </div>
    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#003566] rounded-full transition-all duration-400 ease-out"
        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
      />
    </div>
  </div>
);

// ── Haupt-Komponente ──────────────────────────────────────────────────────────
const CalendlyFallbackForm = () => {
  const navigate     = useNavigate();
  const formsparkURL = buildFormsparkUrl(import.meta.env.VITE_FORMSPARK_FORM_ID_CONTACT);

  const [step, setStep]           = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors]        = useState({});

  const [formData, setFormData] = useState({
    pain:        [],
    name:        "",
    siteUrl:     "",   // neu: Website-URL
    messageDate: "",
    messageTime: "",
    phone:       "",
    privacy:     false,
    website:     "",   // Honeypot
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedSlots]                   = useState([
    { date: "2026-02-06", time: "16:30" },
    { date: "2026-02-06", time: "18:00" },
  ]);

  // ── Pain-Optionen (auf Analyse zugeschnitten) ────────────────────────────
  const painOptions = [
    "Meine Website bringt kaum oder keine Anfragen",
    "Ich weiß nicht, warum Besucher nicht anrufen",
    "Ich bin von Empfehlungen abhängig – das ist nicht messbar und schwer skalierbar",
    "Ich hatte schon eine Agentur – hat nichts gebracht",
    "Ich habe noch keine Website",
  ];

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const togglePain = (option) => {
    setFormData((prev) => ({
      ...prev,
      pain: prev.pain.includes(option)
        ? prev.pain.filter((p) => p !== option)
        : [...prev.pain, option],
    }));
    setErrors((prev) => ({ ...prev, pain: "" }));
  };

  const validate = (s) => {
    const e = {};
    if (s === 1 && formData.pain.length === 0)
      e.pain = "Bitte mindestens eine Option auswählen.";
    if (s === 2 && !formData.name.trim())
      e.name = "Bitte geben Sie Ihren Namen ein.";
    if (s === 3 && formData.siteUrl.trim() && !isValidUrl(formData.siteUrl))
      e.siteUrl = "Bitte eine gültige Website-Adresse eingeben (z.B. www.meinbetrieb.de).";
    if (s === 4 && (!formData.messageDate || !formData.messageTime))
      e.message = "Bitte Datum und Uhrzeit auswählen.";
    if (s === 5 && !formData.phone.trim())
      e.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    if (s === 5 && !formData.privacy)
      e.privacy = "Bitte akzeptieren Sie die Datenschutzerklärung.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const isValidUrl = (val) => {
    const v = val.startsWith("http") ? val : `https://${val}`;
    try { new URL(v); return true; } catch { return false; }
  };

  const next = (s) => validate(s) && setStep(s + 1);
  const back = (s) => setStep(s - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.trim() !== "") return; // Honeypot
    if (!validate(5)) return;
    setSubmitting(true);
    try {
      const date = new Date(formData.messageDate);
      const payload = {
        ...formData,
        pain:    formData.pain.join(", "),
        siteUrl: formData.siteUrl.trim() || "Keine Website angegeben",
        message: `Wunschtermin: ${String(date.getDate()).padStart(2,"0")}.${String(date.getMonth()+1).padStart(2,"0")}.${date.getFullYear()} um ${formData.messageTime} Uhr`,
      };
      const result = await submitToFormspark(formsparkURL, payload);
      if (result.ok) {
        navigate("/danke");
      } else {
        toast.error("Fehler beim Senden. Bitte erneut versuchen.");
      }
    } catch {
      toast.error("Senden fehlgeschlagen. Bitte später erneut versuchen.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Kalender-Helfer ───────────────────────────────────────────────────────
  const generateTimes = () => {
    const times = [];
    for (let h = 15; h <= 20; h++) {
      if (h === 15) times.push("15:30");
      else {
        const fh = `${String(h).padStart(2,"0")}:00`;
        const hh = `${String(h).padStart(2,"0")}:30`;
        if (!times.includes(fh)) times.push(fh);
        if (!times.includes(hh)) times.push(hh);
      }
    }
    if (!times.includes("20:30")) times.push("20:30");
    return times;
  };

  const getAvailableTimes = () => {
    if (!formData.messageDate) return [];
    const booked = bookedSlots
      .filter((s) => s.date === formData.messageDate)
      .map((s) => s.time);
    return generateTimes().filter((t) => !booked.includes(t));
  };

  const handleMonthChange = (dir) => {
    const n = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + dir, 1);
    const now = new Date();
    if (n.getFullYear() < now.getFullYear() || (n.getFullYear() === now.getFullYear() && n.getMonth() < now.getMonth())) return;
    setCurrentMonth(n);
    setFormData((prev) => ({ ...prev, messageDate: "", messageTime: "" }));
  };

  const generateMonthDays = () => {
    const now   = new Date();
    const start = currentMonth.getFullYear() === now.getFullYear() && currentMonth.getMonth() === now.getMonth()
      ? now.getDate() : 1;
    const total = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    return Array.from({ length: total - start + 1 }, (_, i) => {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), start + i);
      return { date, dateString: date.toISOString().split("T")[0] };
    });
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section className="w-full flex justify-center py-8 sm:py-10 px-0">
      <ToastContainer position="top-center" />

      {/* Honeypot */}
      <input type="text" name="website" value={formData.website}
        onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <form onSubmit={handleSubmit} noValidate className="w-full max-w-[560px]">

        <StepIndicator step={step} />

        {/* ── SCHRITT 1: Situation ────────────────────────────────────────── */}
        {step === 1 && (
          <div>
            <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
              Was trifft auf Sie zu?
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-4">
              Mehrfachauswahl möglich
            </p>
            <div className="flex flex-col gap-2.5">
              {painOptions.map((option) => (
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
            {errors.pain && (
              <p className="text-red-500 text-[12px] mt-2">{errors.pain}</p>
            )}
            <div className="mt-5">
              <button type="button" className={BTN_PRIMARY} onClick={() => next(1)}>
                Weiter →
              </button>
            </div>
          </div>
        )}

        {/* ── SCHRITT 2: Name ─────────────────────────────────────────────── */}
        {step === 2 && (
          <div>
            <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
              Wie darf ich Sie ansprechen?
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-3">
              Damit ich Sie beim Gespräch namentlich begrüßen kann
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
            {errors.name && (
              <p className="text-red-500 text-[12px] mt-1.5">{errors.name}</p>
            )}
            <div className="flex items-center gap-4 mt-5">
              <button type="button" className={BTN_PRIMARY} onClick={() => next(2)}>
                Weiter →
              </button>
              <button type="button" className={BTN_SECONDARY} onClick={() => back(2)}>
                Zurück
              </button>
            </div>
          </div>
        )}

        {/* ── SCHRITT 3: Website-URL ───────────────────────────────────────── */}
        {step === 3 && (
          <div>
            <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
              Wie lautet Ihre Website-Adresse?
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-3">
              Ich schaue sie mir vor unserem Gespräch an – damit wir keine Zeit verlieren.
              <span className="block mt-2 text-[#000814]/35">
                Noch keine Website? Einfach freilassen – dann sprechen wir im Erstgespräch darüber, was Sie brauchen und wie ein Einstieg aussehen könnte.
              </span>
            </p>
            <input
              type="url"
              name="siteUrl"
              value={formData.siteUrl}
              onChange={handleChange}
              placeholder="www.meinbetrieb.de"
              className={INPUT_BASE}
              autoFocus
            />
            {errors.siteUrl && (
              <p className="text-red-500 text-[12px] mt-1.5">{errors.siteUrl}</p>
            )}

            {/* Micro-copy: warum das Sinn macht */}
            {formData.siteUrl.trim() && (
              <p className="text-[11px] sm:text-[12px] text-[#003566] mt-2 flex items-center gap-1.5">
                <span>✓</span>
                <span>Ich schaue mir die Seite vorher an – Sie müssen im Gespräch nichts erklären.</span>
              </p>
            )}

            <div className="flex items-center gap-4 mt-5">
              <button type="button" className={BTN_PRIMARY} onClick={() => next(3)}>
                Weiter →
              </button>
              <button type="button" className={BTN_SECONDARY} onClick={() => back(3)}>
                Zurück
              </button>
            </div>
          </div>
        )}

        {/* ── SCHRITT 4: Termin ────────────────────────────────────────────── */}
        {step === 4 && (
          <div>
            <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
              Wann passt es Ihnen?
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-4">
              Wählen Sie einen Wunschtermin – ich melde mich zur Bestätigung
            </p>

            {/* Monatsnavigation */}
            <div className="flex justify-between items-center mb-3">
              <button
                type="button"
                onClick={() => handleMonthChange(-1)}
                disabled={
                  currentMonth.getMonth() === new Date().getMonth() &&
                  currentMonth.getFullYear() === new Date().getFullYear()
                }
                className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg disabled:opacity-30 hover:border-[#003566] transition-colors cursor-pointer text-[#000814]/60"
              >
                ←
              </button>
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#000814]">
                {currentMonth.toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
              </span>
              <button
                type="button"
                onClick={() => handleMonthChange(1)}
                className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:border-[#003566] transition-colors cursor-pointer text-[#000814]/60"
              >
                →
              </button>
            </div>

            {/* Tage – horizontal scroll */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1">
              {generateMonthDays().map(({ date, dateString }) => {
                const selected = formData.messageDate === dateString;
                return (
                  <button
                    key={dateString}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, messageDate: dateString, messageTime: "" }))
                    }
                    className={`flex flex-col items-center px-3 py-2.5 min-w-[64px] sm:min-w-[72px] border rounded-lg cursor-pointer transition-all flex-shrink-0 ${
                      selected
                        ? "bg-[#001D3D] text-white border-[#001D3D]"
                        : "border-gray-200 hover:border-[#003566]/40 text-[#000814]/70"
                    }`}
                  >
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase">
                      {date.toLocaleDateString("de-DE", { weekday: "short" })}
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-bold mt-0.5">
                      {date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" })}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Uhrzeiten */}
            {formData.messageDate && (
              <>
                <p className="text-[11px] sm:text-[12px] text-[#000814]/40 mb-2">
                  Verfügbare Zeiten
                </p>
                <div className="flex flex-wrap gap-2">
                  {getAvailableTimes().map((time) => {
                    const selected = formData.messageTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, messageTime: time }))}
                        className={`px-3.5 sm:px-4 py-2 border rounded-lg cursor-pointer transition-all text-[13px] sm:text-[14px] ${
                          selected
                            ? "bg-[#001D3D] text-white border-[#001D3D]"
                            : "border-gray-200 hover:border-[#003566]/40 text-[#000814]/70"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {errors.message && (
              <p className="text-red-500 text-[12px] mt-2">{errors.message}</p>
            )}

            <div className="flex items-center gap-4 mt-5">
              <button type="button" className={BTN_PRIMARY} onClick={() => next(4)}>
                Weiter →
              </button>
              <button type="button" className={BTN_SECONDARY} onClick={() => back(4)}>
                Zurück
              </button>
            </div>
          </div>
        )}

        {/* ── SCHRITT 5: Telefon + Datenschutz ────────────────────────────── */}
        {step === 5 && (
          <div>
            <p className="font-bold text-[15px] sm:text-[16px] text-[#000814] mb-1">
              Unter welcher Nummer erreiche ich Sie?
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#000814]/45 mb-3">
              Ich schreibe Sie zur Terminbestätigung kurz an – kein Spam
            </p>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ihre Telefonnummer"
              className={INPUT_BASE}
              autoFocus
            />
            {errors.phone && (
              <p className="text-red-500 text-[12px] mt-1.5">{errors.phone}</p>
            )}

            {/* Datenschutz */}
            <label className="flex items-start gap-2.5 mt-5 cursor-pointer group">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="w-4 h-4 mt-0.5 cursor-pointer accent-[#003566] flex-shrink-0"
              />
              <span className="text-[12px] sm:text-[13px] text-[#000814]/60 leading-snug group-hover:text-[#000814]/80 transition-colors">
                Ich akzeptiere die{" "}
                <Link to="/datenschutz" className="underline hover:text-[#003566] transition-colors">
                  Datenschutzerklärung
                </Link>
              </span>
            </label>
            {errors.privacy && (
              <p className="text-red-500 text-[12px] mt-1.5">{errors.privacy}</p>
            )}

            {/* Zusammenfassung vor dem Absenden */}
            {formData.messageDate && formData.messageTime && (
              <div className="mt-4 border border-[#003566]/15 bg-[#003566]/[0.03] rounded-lg px-4 py-3">
                <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wide text-[#003566] mb-1">
                  Ihre Anfrage
                </p>
                <p className="text-[12px] sm:text-[13px] text-[#000814]/65 leading-relaxed">
                  Wunschtermin:{" "}
                  <span className="font-semibold text-[#000814]">
                    {new Date(formData.messageDate).toLocaleDateString("de-DE", {
                      weekday: "long", day: "2-digit", month: "long"
                    })} um {formData.messageTime} Uhr
                  </span>
                </p>
                {formData.siteUrl && (
                  <p className="text-[12px] sm:text-[13px] text-[#000814]/65 mt-0.5">
                    Website:{" "}
                    <span className="font-semibold text-[#000814]">{formData.siteUrl}</span>
                  </p>
                )}
              </div>
            )}

            <div className="flex items-center gap-4 mt-5">
              <button
                type="submit"
                disabled={submitting}
                className={`${BTN_PRIMARY} ${submitting ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {submitting ? "Wird gesendet…" : "🔍 Jetzt Analyse anfragen"}
              </button>
              <button type="button" className={BTN_SECONDARY} onClick={() => back(5)}>
                Zurück
              </button>
            </div>


          </div>
        )}

      </form>
    </section>
  );
};

export default CalendlyFallbackForm;
