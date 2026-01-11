import { useState } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyConsentEmbed = () => {
  const [enabled, setEnabled] = useState(false);

  if (!enabled) {
    return (
      <div className="border p-6 text-center bg-gray-50">
        <p className="mb-8">
          Die Terminbuchung wird über <strong>Calendly</strong> bereitgestellt.

        </p>

        <button
          onClick={() => { setEnabled(true); setTimeout(() => document.getElementById("calendly-widget")?.focus(), 100); }}

          aria-pressed={enabled}
          className="bg-[#003566] cursor-pointer hover:bg-[#001D3D] text-white px-6 py-3 rounded font-semibold"
        >
          Terminbuchung aktivieren
        </button>

        <p className="text-sm text-gray-500 mt-3">
         Dabei können Cookies gesetzt und Daten an Drittanbieter übertragen werden.
        </p>
      </div>
    );
  }

  return (
    <InlineWidget
      url="https://calendly.com/franco_cipolla/unverbindliche-website-analyse-erstgesprach"
      styles={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export default CalendlyConsentEmbed;
