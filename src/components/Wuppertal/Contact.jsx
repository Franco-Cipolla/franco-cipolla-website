import React, { useRef, useEffect, useState } from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom'; // <--- useNavigate
import { gsap, ScrollTrigger } from "../gsapSetup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp } from "react-icons/fa";

// Utils
import { buildFormsparkUrl, submitToFormspark } from '.././formspark';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // <--- Navigator

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    privacy: false,
    website: '' // Honeypot
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const formsparkEnv = import.meta.env.VITE_FORMSPARK_FORM_ID_CONTACT;
  const formsparkURL = buildFormsparkUrl(formsparkEnv);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll('.contact-animate');
    gsap.fromTo(
      elements,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Bitte gib deinen Namen ein.';
        break;
      case 'phone':
        if (!value.trim()) error = 'Bitte gib deine Telefonnummer ein.';
        else if (!/^\+?\d{7,15}$/.test(value))
          error = 'Bitte gib eine gültige Telefonnummer ein.';
        break;
      case 'message':
        if (!value.trim()) error = 'Bitte gib eine Nachricht ein.';
        break;
      case 'privacy':
        if (!value) error = 'Du musst die Datenschutzerklärung akzeptieren.';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: fieldValue }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, fieldValue) }));
  };

  const handleBlur = (e) => {
    const { name, type, checked, value } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setErrors(prev => ({ ...prev, [name]: validateField(name, fieldValue) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.trim() !== '') return; // Honeypot

    const newErrors = {};
    Object.entries(formData).forEach(([key, val]) => {
      if (key !== 'website') {
        const error = validateField(key, val);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.dismiss();
      toast.error('Bitte überprüfe die Eingaben.');
      return;
    }

    if (submitting) return;
    setSubmitting(true);

    try {
      const payload = { ...formData };
      const result = await submitToFormspark(formsparkURL, payload);

      toast.dismiss();
      if (result.ok) {
        // ✅ Erfolgreich -> weiterleiten zur Danke-Seite
        navigate('/danke');
      } else {
        toast.error(result.message || 'Fehler beim Senden. Bitte versuche es erneut.');
      }
    } catch (err) {
      toast.dismiss();
      const offline = typeof navigator !== 'undefined' && navigator && navigator.onLine === false;
      toast.error(
        offline
          ? 'Du scheinst offline zu sein. Bitte prüfe deine Internetverbindung.'
          : 'Senden fehlgeschlagen. Bitte versuche es später erneut.'
      );
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="w-full flex items-center justify-center" id="contact">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="py-20 px-6 text-black lg:grid lg:grid-cols-2 max-w-[950px] xl:max-w-[1100px]">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="mb-15">
          <h1 className="contact-animate text-3xl md:text-4xl font-bold mb-6 lg:mb-10">
            Kontaktieren Sie mich
          </h1>

          {/* Conversion-Subline: mobil */}
          <p className="contact-animate lg:hidden text-lg text-[#000814] mx-auto my-6">
            Haben sie Interesse an einer Website, die wirklich auf Anfragen ausgerichtet ist? Schreiben Sie mir kurz!
          </p>

          {/* Desktop Subline */}
          <p className="contact-animate hidden lg:block text-[#000814] text-lg my-6 lg:pr-10">
            Interesse an einer Website, die wirklich auf Anfragen ausgerichtet ist? Dann lassen Sie uns unverbindlich sprechen oder schreiben Sie mir kurz!
          </p>

          {/* Contact Buttons */}
          <div className="contact-animate flex items-center gap-3 mt-8">
            <HiOutlinePhone className="text-black text-2xl" />
            <a href="tel:+4917675398004" className='text-[#000814] hover:text-[#003566] transition-colors'>+49 176 75398004</a>
          </div>

          <div className="contact-animate flex items-center gap-3 mt-6">
            <FaWhatsapp className="text-black text-2xl" />
            <a href="https://wa.me/4917675398004" target="_blank" rel="noopener noreferrer" className='text-[#000814] hover:text-[#003566] transition-colors'>WhatsApp schreiben</a>
          </div>

          <div className="contact-animate flex items-center gap-3 mt-6">
            <FiInstagram className="text-black text-2xl" />
            <a
              href="https://instagram.com/francocipolla.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000814] hover:text-[#003566] transition-colors duration-200 font-medium"
            >
              @francocipolla.de
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Name */}
            <div className="contact-animate my-6">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Max Mustermann"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 font-semibold text-[#000814] rounded placeholder:font-medium ${
                  errors.name ? 'border-red-600' : 'border-black'
                }`}
              />
              {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="contact-animate my-6">
              <label htmlFor="phone" className="block text-lg font-semibold mb-2">Telefonnummer</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+49 176 12345678"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 font-semibold text-[#000814] rounded placeholder:font-medium ${
                  errors.phone ? 'border-red-600' : 'border-black'
                }`}
              />
              {errors.phone && <p className="text-red-600 mt-1 text-sm">{errors.phone}</p>}
            </div>

            {/* Message */}
            <div className="contact-animate my-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Ihre Nachricht</label>
              <textarea
                id="message"
                name="message"
                placeholder="Schreiben Sie mir kurz, wie ich Ihnen helfen kann…"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 h-35 font-semibold text-[#000814] rounded placeholder:font-medium ${
                  errors.message ? 'border-red-600' : 'border-black'
                }`}
              />
              {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
            </div>

            {/* Privacy */}
            <div className="contact-animate flex items-center gap-2 my-4">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-5 h-5 border ${errors.privacy ? 'border-red-600' : 'border-black'} accent-[#003566] rounded-none cursor-pointer`}
              />
              <label htmlFor="privacy" className={`text-base text-[#000814] leading-snug ${errors.privacy ? 'text-red-600' : ''}`}>
                Ich akzeptiere die{' '}
                <Link to="/datenschutz" className="underline hover:text-[#001D3D] transition-colors duration-200">
                  Datenschutzerklärung
                </Link>.
              </label>
            </div>
            {errors.privacy && <p className="text-red-600 mt-1 text-sm">{errors.privacy}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className={`contact-animate my-6 py-3 px-4 rounded text-white transform transition ${
                submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-black hover:bg-[#000814] cursor-pointer'
              }`}
            >
              {submitting ? 'Wird gesendet…' : 'Jetzt Anfrage senden'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
