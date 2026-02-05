import { useState } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyConsentEmbed = () => {
  const [open, setOpen] = useState(false);

  const openCalendly = () => {
    localStorage.setItem(
      "cookieConsent_v1",
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    setOpen(true);
  };

  return (
    <div className="text-center">
      {!open && (
        <>
          <p className="mb-4 text-black/70">
            Alternativ können Sie direkt einen Termin buchen:
          </p>
          <button
            onClick={openCalendly}
            className="bg-[#003566] text-white px-6 py-3 rounded font-semibold"
          >
            Termin direkt buchen
          </button>
        </>
      )}

      {open && (
        <div className="mt-10">
          <InlineWidget
            url="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach"
            styles={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      )}
    </div>
  );
};

export default CalendlyConsentEmbed;
