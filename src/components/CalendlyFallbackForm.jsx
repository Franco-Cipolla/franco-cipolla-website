import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { buildFormsparkUrl, submitToFormspark } from "./formspark";

const CalendlyFallBackForm = () => {
  const navigate = useNavigate();
  const formsparkURL = buildFormsparkUrl(
    import.meta.env.VITE_FORMSPARK_FORM_ID_CONTACT
  );

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pain: [],
    goal: "",
    name: "",
    message: "", // für Formspark Nachricht (Datum + Uhrzeit)
    messageDate: "",
    messageTime: "",
    phone: "",
    privacy: false,
    website: "", // Honeypot
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const painOptions = [
    "Ich bekomme keine messbaren Anfragen",
    "Meine Website generiert keine/wenige Kundenanfragen",
    "Ich bin von Empfehlungen abhängig",
    "Neue Kunden kommen unregelmäßig",
    "Ich habe aktuell gar keine Website",
  ];

  const goalOptions = [
    "Regelmäßig messbare Kundenanfragen erhalten",
    "Unabhängiger von Empfehlungen werden",
    "Online seriöser & professioneller wirken",
    "Mehr passende Kunden statt Zeitverschwender",
  ];

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1 && formData.pain.length === 0)
      newErrors.pain = "Bitte mindestens eine Option auswählen.";
    if (currentStep === 2 && !formData.goal)
      newErrors.goal = "Bitte ein Ziel auswählen.";
    if (currentStep === 3 && !formData.name.trim())
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    if (currentStep === 4 && (!formData.messageDate || !formData.messageTime))
      newErrors.message = "Bitte Datum und Uhrzeit auswählen.";
    if (currentStep === 5 && !formData.phone.trim())
      newErrors.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    if (currentStep === 5 && !formData.privacy)
      newErrors.privacy = "Bitte Datenschutzerklärung akzeptieren.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.trim() !== "") return; // Honeypot
    if (!validateStep(5)) return;

    setSubmitting(true);
    try {
      // Datum + Uhrzeit schön formatieren
      const date = new Date(formData.messageDate);
      const formattedMessage = `Ihr Wunschtermin: ${String(date.getDate()).padStart(
        2,
        "0"
      )}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()} um ${
        formData.messageTime
      } Uhr`;

      const payload = {
        ...formData,
        pain: formData.pain.join(", "),
        message: formattedMessage,
      };

      const result = await submitToFormspark(formsparkURL, payload);

      if (result.ok) {
        toast.success("Ihre Anfrage wurde erfolgreich gesendet!");
        navigate("/danke"); // Weiterleitung
      } else {
        toast.error("Fehler beim Senden. Bitte erneut versuchen.");
      }
    } catch {
      toast.error("Senden fehlgeschlagen. Bitte später erneut versuchen.");
    } finally {
      setSubmitting(false);
    }
  };

  // generiere Uhrzeiten 16:00–20:00 in 30-Minuten-Schritten
  // generiere Uhrzeiten 15:30–20:30 in 30-Minuten-Schritten
const generateTimes = () => {
  const times = [];
  for (let hour = 15; hour <= 20; hour++) {
    if (hour === 15) {
      times.push("15:30");
    } else {
      times.push(`${String(hour).padStart(2, "0")}:00`);
      if (hour !== 20) times.push(`${String(hour).padStart(2, "0")}:30`);
    }
  }
  times.push("20:30"); // letzte Option
  return times;
};


  return (
    <section className="w-full flex justify-center py-10 ">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        noValidate
        className="lg:max-w-[600px] w-full "
      >
        {/* STEP INDICATOR */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Schritt {step} von 5</span>
            <span>~40 Sekunden</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Pain */}
        {step === 1 && (
          <div>
            <p className="font-semibold text-lg mb-3">
              Was trifft aktuell auf Sie zu? (Mehrfachauswahl)*
            </p>
            <div className="flex flex-col gap-3">
              {painOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => togglePain(option)}
                  className={`py-2 px-4 border rounded text-left cursor-pointer transition ${
                    formData.pain.includes(option)
                      ? "bg-gray-200 border-black font-semibold"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.pain && <p className="text-red-600 mt-2">{errors.pain}</p>}
            <button
              type="button"
              className="mt-5 bg-black text-white px-5 py-2 rounded cursor-pointer"
              onClick={() => validateStep(1) && setStep(2)}
            >
              Weiter
            </button>
          </div>
        )}

        {/* STEP 2: Goal */}
        {step === 2 && (
          <div>
            <p className="font-semibold text-lg mb-3">
              Was ist aktuell Ihr wichtigstes Ziel?*
            </p>
            <div className="flex flex-col gap-3">
              {goalOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, goal: option }))
                  }
                  className={`py-2 px-4 border rounded text-left cursor-pointer transition ${
                    formData.goal === option
                      ? "bg-gray-200 border-black font-semibold"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.goal && <p className="text-red-600 mt-2">{errors.goal}</p>}
            <div className="flex gap-2 mt-4">
              <button type="button" className="cursor-pointer" onClick={() => setStep(1)}>
                Zurück
              </button>
              <button
                type="button"
                className="bg-black text-white px-5 py-2 rounded cursor-pointer"
                onClick={() => validateStep(2) && setStep(3)}
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Name */}
        {step === 3 && (
          <div>
            <label className="font-semibold">Wie darf ich Sie ansprechen?*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border w-full p-2 rounded mt-2"
            />
            {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
            <div className="flex gap-2 mt-4">
              <button type="button" className="cursor-pointer" onClick={() => setStep(2)}>
                Zurück
              </button>
              <button
                type="button"
                className="bg-black text-white px-5 py-2 rounded cursor-pointer"
                onClick={() => validateStep(3) && setStep(4)}
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Date + Uhrzeit */}
        {step === 4 && (
          <div>
            <label className="font-semibold">
              Wunschtermin*
              <span className="block text-sm text-gray-600 mt-1">
                Bitte wählen Sie Ihr Wunschdatum und Ihre Wunschzeit aus
              </span>
            </label>

            <input
              type="date"
              name="messageDate"
              value={formData.messageDate}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, messageDate: e.target.value }))
              }
              className="border w-full p-2 rounded mt-2 cursor-pointer text-gray-700"
            />

            <select
              name="messageTime"
              value={formData.messageTime}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, messageTime: e.target.value }))
              }
              className="border w-full p-2 rounded mt-2 cursor-pointer text-gray-700"
            >
              <option value="">Uhrzeit auswählen</option>
              {generateTimes().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {errors.message && <p className="text-red-600 mt-1">{errors.message}</p>}

            <div className="flex gap-2 mt-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="cursor-pointer"
              >
                Zurück
              </button>
              <button
                type="button"
                className="bg-black text-white px-5 py-2 rounded cursor-pointer"
                onClick={() => validateStep(4) && setStep(5)}
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Telefonnummer + Datenschutz */}
        {step === 5 && (
          <div>
            <label className="font-semibold">
              Telefonnummer* <span className="block text-sm text-gray-600 mt-1">📞 Für eine kurze Rückmeldung (Kein Spam)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border w-full p-2 rounded mt-2"
            />
            <div className="flex items-center gap-2 mt-5">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm">
                Ich akzeptiere die{" "}
                <Link to="/datenschutz" className="underline">
                  Datenschutzerklärung
                </Link>
              </span>
            </div>
            {errors.phone && <p className="text-red-600 mt-1">{errors.phone}</p>}
            {errors.privacy && <p className="text-red-600 mt-1">{errors.privacy}</p>}
            <div className="flex gap-2 mt-5">
              <button type="button" onClick={() => setStep(4)} className="cursor-pointer">
                Zurück
              </button>
              <button type="submit" disabled={submitting} className="bg-black text-white px-5 py-2 rounded cursor-pointer">
                {submitting ? "Wird gesendet…" : "Jetzt Anfrage senden"}
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default CalendlyFallBackForm;
