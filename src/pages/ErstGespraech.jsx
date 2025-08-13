import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import ErstgespreachHead from "../components/ErstgespreachHead";
import { buildFormsparkUrl, submitToFormspark } from '../components/formspark';

gsap.registerPlugin(ScrollTrigger);

const Erstgespraech = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
    privacy: false,
  });
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const recaptchaRef = useRef(null);

  const formsparkEnv = import.meta.env.VITE_FORMSPARK_FORM_ID_ERSTGESPRAECH;
  const formsparkURL = buildFormsparkUrl(formsparkEnv);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

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
        if (!value.trim()) error = 'Bitte gib deinen Namen ein';
        break;
      case 'email':
        if (!value.trim()) error = 'Bitte gib deine E-Mail ein';
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Bitte gib eine gültige E-Mail-Adresse ein';
        break;
      case 'message':
        if (!value.trim()) error = 'Bitte gib eine Nachricht ein';
        break;
      case 'date':
        if (!value) error = 'Bitte wähle einen Wunschtermin aus';
        break;
      case 'privacy':
        if (!value) error = 'Du musst die Datenschutzerklärung akzeptieren';
        break;
      case 'recaptcha':
        if (!value) error = 'Bitte bestätige das reCAPTCHA';
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, type, checked, value } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    const error = validateField(name, fieldValue);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setErrors((prev) => ({ ...prev, recaptcha: validateField('recaptcha', token) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Alle Felder + reCAPTCHA validieren
    const newErrors = {};
    Object.entries(formData).forEach(([key, val]) => {
      const error = validateField(key, val);
      if (error) newErrors[key] = error;
    });
    const recaptchaError = validateField('recaptcha', recaptchaToken);
    if (recaptchaError) newErrors.recaptcha = recaptchaError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.dismiss();
      toast.error('Bitte überprüfe die Eingaben und behebe die Fehler.');
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: formData.date,
        privacy: formData.privacy,
        'g-recaptcha-response': recaptchaToken,
      };

      // Optional: Timeout
      // const controller = new AbortController();
      // const t = setTimeout(() => controller.abort(), 10000);

      const result = await submitToFormspark(formsparkURL, payload /*, { signal: controller.signal }*/);

      // clearTimeout(t);
      toast.dismiss();

      if (result.ok) {
        toast.success('Danke für deine Anfrage!');
        setFormData({ name: '', email: '', message: '', date: '', privacy: false });
        setErrors({});
        setRecaptchaToken(null);
        if (recaptchaRef.current) recaptchaRef.current.reset();
      } else {
        toast.error(result.message || 'Fehler beim Senden. Bitte versuche es erneut.');
      }
    } catch (err) {
      // Echte Fehler: Abort, Offline, harte CORS-Blockade
      toast.dismiss();
      const offline = typeof navigator !== 'undefined' && navigator && navigator.onLine === false;
      if (offline) {
        toast.error('Du scheinst offline zu sein. Bitte prüfe deine Internetverbindung.');
      } else {
        toast.error('Senden fehlgeschlagen. Bitte versuche es später erneut.');
      }
      // Optional loggen
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ErstgespreachHead />
      <section ref={sectionRef} className="w-full flex items-center mt-20 justify-center">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="md:py-20 py-18 px-6 text-black max-w-[950px] xl:max-w-[1100px]">
          <h1 className="contact-animate text-3xl md:text-4xl font-bold mb-10">
            Erstgespräch vereinbaren
          </h1>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto" noValidate>
            {/* Name */}
            <div className="contact-animate my-8">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Dein Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 font-semibold text-[#000814] rounded ${errors.name ? 'border-red-500' : 'border-black'}`}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="contact-animate my-8">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Deine E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 font-semibold text-[#000814] rounded ${errors.email ? 'border-red-500' : 'border-black'}`}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Nachricht */}
            <div className="contact-animate my-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Deine Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 font-semibold text-[#000814] rounded ${errors.message ? 'border-red-500' : 'border-black'}`}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Wunschtermin */}
            <div className="contact-animate my-8">
              <label htmlFor="date" className="block text-lg font-semibold mb-2">
                Wunschtermin
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 font-semibold text-[#000814] rounded ${errors.date ? 'border-red-500' : 'border-black'}`}
              />
              {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
            </div>

            {/* Checkbox Datenschutzerklärung */}
            <div className="contact-animate flex items-center gap-2 mb-8">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-5 h-5 border accent-[#003566] rounded-none cursor-pointer ${errors.privacy ? 'border-red-500' : 'border-black'}`}
              />
              <label
                htmlFor="privacy"
                className="text-base text-[#000814] leading-snug cursor-pointer"
              >
                Ich akzeptiere die{' '}
                <Link
                  to="/datenschutz"
                  className="underline hover:text-[#001D3D] text-[#000814] transition-colors duration-200"
                >
                  Datenschutzerklärung
                </Link>
                .
              </label>
            </div>
            {errors.privacy && <p className="text-red-600 mb-4 text-sm">{errors.privacy}</p>}

            {/* reCAPTCHA */}
            <div className="contact-animate mb-8">
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={onRecaptchaChange}
                ref={recaptchaRef}
              />
              {errors.recaptcha && <p className="text-red-600 mt-1 text-sm">{errors.recaptcha}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`contact-animate py-3 px-6 text-white rounded transition transform ${
                submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-black hover:bg-[#000814] cursor-pointer'
              }`}
            >
              {submitting ? 'Wird gesendet…' : 'Anfrage senden'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Erstgespraech;
