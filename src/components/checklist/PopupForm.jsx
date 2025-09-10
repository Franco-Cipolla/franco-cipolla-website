import React, { useState } from "react";

export default function PopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Fehler zurücksetzen
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name ist erforderlich.";
    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Bitte eine gültige E-Mail eingeben.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Telefonnummer ist erforderlich.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // Falls Fehler vorhanden, Abbruch

    console.log("Form submitted:", formData);

    // TODO: Mailchimp/ActiveCampaign API Call hier integrieren

    // Weiterleitung zur Danke-Seite
    window.location.href = "/danke";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
     >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden">
        {/* Gradient Background Element */}
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-gradient-to-bl from-[#63b4ff] via-[#001D3D] to-[#00A6FB] rounded-full blur-[80px] opacity-30 z-0"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 z-50"
        >
          ✕
        </button>

        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-black text-[26px] text-[#428EFF] mb-4">
              Website-Checkliste sichern
            </h2>
            <p className="text-black/75 font-bold text-[14px]">
              Kostenlose Checkliste mit konkreten To-Do's für mehr Anfragen über deine Website.
            </p>
          </div>

          {/* Short Values */}
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-[16px]">✅</span>
              <span className="font-bold text-[13px] text-black/80">Sofort umsetzbare Schritte</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-[16px]">✅</span>
              <span className="font-bold text-[13px] text-black/80">100% kostenlos</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-[16px]">✅</span>
              <span className="font-bold text-[13px] text-black/80">Direkt per E-Mail</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 border-2 rounded-xl text-[15px] font-medium placeholder:text-gray-400 focus:outline-none transition-colors duration-200 ${
                  errors.name ? "border-red-500" : "border-gray-200 focus:border-[#428EFF]"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="E-Mail-Adresse"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 border-2 rounded-xl text-[15px] font-medium placeholder:text-gray-400 focus:outline-none transition-colors duration-200 ${
                  errors.email ? "border-red-500" : "border-gray-200 focus:border-[#428EFF]"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Telefonnummer"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-4 border-2 rounded-xl text-[15px] font-medium placeholder:text-gray-400 focus:outline-none transition-colors duration-200 ${
                  errors.phone ? "border-red-500" : "border-gray-200 focus:border-[#428EFF]"
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#428EFF] to-[#63b4ff] text-white py-4 rounded-xl font-black text-[16px] hover:from-[#3b7ee6] hover:to-[#5aa3f0] transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Checkliste jetzt sichern
            </button>
          </form>

          {/* Trust */}
          <div className="text-center mt-6">
            <p className="text-[12px] text-gray-500">✓ 100% kostenlos ✓ Jederzeit abmeldbar <span className="block md:hidden"> </span>✓ unverbindlich</p>
          </div>
        </div>
      </div>
    </div>
  );
}
