import React, { useRef, useEffect, useState } from 'react';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from "./gsapSetup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

// Utils (siehe unten)
import { buildFormsparkUrl, submitToFormspark } from '../components/formspark';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacy: false,
  });
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const formsparkEnv = import.meta.env.VITE_FORMSPARK_FORM_ID_CONTACT;
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
        if (!value.trim()) error = 'Bitte gib deinen Namen ein.';
        break;
      case 'email':
        if (!value.trim()) error = 'Bitte gib deine E-Mail ein.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = 'Bitte gib eine gültige E-Mail-Adresse ein.';
        break;
      case 'message':
        if (!value.trim()) error = 'Bitte gib eine Nachricht ein.';
        break;
      case 'privacy':
        if (!value) error = 'Du musst die Datenschutzerklärung akzeptieren.';
        break;
      case 'recaptcha':
        if (!value) error = 'Bitte bestätige das reCAPTCHA.';
        break;
      default:
        break;
    }
    return error;
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

  const handleBlur = (e) => {
    const { name, type, checked, value } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setErrors((prev) => ({
      ...prev,
      recaptcha: validateField('recaptcha', token),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validierung
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

    if (submitting) return;
    setSubmitting(true);

    try {
      const payload = { ...formData, 'g-recaptcha-response': recaptchaToken };

      // Optional: Timeout via AbortController
      // const controller = new AbortController();
      // const t = setTimeout(() => controller.abort(), 10000);

      const result = await submitToFormspark(formsparkURL, payload /*, { signal: controller.signal }*/);
      // clearTimeout(t);

      toast.dismiss();

      if (result.ok) {
        toast.success('Danke für deine Anfrage!');
        setFormData({ name: '', email: '', message: '', privacy: false });
        setErrors({});
        setRecaptchaToken(null);
        if (recaptchaRef.current) recaptchaRef.current.reset();
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
    <section ref={sectionRef} className="w-full flex items-center justify-center">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="py-20 px-6 text-black lg:grid lg:grid-cols-2 max-w-[950px] xl:max-w-[1100px]">
        <div className="mb-15" id="contact">
          <h1 className="contact-animate text-3xl md:text-4xl font-bold mb-6 lg:mb-10">
            Kontaktiere mich
          </h1>
          <p className="contact-animate lg:hidden text-lg text-[#000814] mx-auto my-6">
            Ich helfe dir, deine Website nicht nur schön, sondern strategisch stark zu machen
          </p>
          <p className="contact-animate text-[#000814] text-lg my-6 hidden lg:block lg:pr-10">
            Du möchtest eine Website, die endlich Wirkung zeigt? Dann lass uns sprechen. Ich helfe dir, deine Website nicht nur schön, sondern strategisch stark zu machen.
          </p>
          <div className="contact-animate flex items-center gap-3 mt-8">
            <HiOutlineMail className="text-black text-2xl" />
            <a
              href="mailto:franco_cipolla@web.de"
              className="text-[#000814] hover:text-[#003566] transition-colors"
            >
              franco_cipolla@web.de
            </a>
          </div>
          <div className="contact-animate flex items-center gap-3 mt-8">
            <HiOutlinePhone className="text-black text-2xl" />
            <p>+49 176 75398004</p>
          </div>
          <div className="contact-animate flex items-center gap-3 mt-8">
            <FiInstagram className="text-black text-2xl" />
            <a
              href="https://instagram.com/francocipolla.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000814] hover:text-[#003566] transition-colors duration-200 font-medium"
            >
              @francocipolla.dev
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-animate my-8">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Dein Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 font-semibold text-[#000814] rounded ${
                  errors.name ? 'border-red-600' : 'border-black'
                }`}
              />
              {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
            </div>

            <div className="contact-animate my-8">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Deine E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 font-semibold text-[#000814] rounded ${
                  errors.email ? 'border-red-600' : 'border-black'
                }`}
              />
              {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
            </div>

            <div className="contact-animate my-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Deine Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border w-full p-2.5 h-35 font-semibold text-[#000814] rounded ${
                  errors.message ? 'border-red-600' : 'border-black'
                }`}
              />
              {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
            </div>

            <div className="contact-animate flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-5 h-5 border ${
                  errors.privacy ? 'border-red-600' : 'border-black'
                } accent-[#003566] rounded-none cursor-pointer`}
              />
              <label
                htmlFor="privacy"
                className={`text-base text-[#000814] leading-snug ${
                  errors.privacy ? 'text-red-600' : ''
                }`}
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
            {errors.privacy && <p className="text-red-600 mt-1 text-sm">{errors.privacy}</p>}

            <div className="contact-animate my-6">
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={onRecaptchaChange}
                ref={recaptchaRef}
              />
              {errors.recaptcha && (
                <p className="text-red-600 mt-1 text-sm">{errors.recaptcha}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`contact-animate my-8 py-3 px-4 rounded text-white transform transition ${
                submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-black hover:bg-[#000814] cursor-pointer'
              }`}
            >
              {submitting ? 'Wird gesendet…' : 'Einreichen'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
