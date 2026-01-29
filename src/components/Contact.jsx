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

const Contact = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pain: '',
    goal: '',
    name: '',
    phone: '',
    message: '',
    privacy: false,
    website: '' // Honeypot
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const formsparkEnv = import.meta.env.VITE_FORMSPARK_FORM_ID_CONTACT;
  const formsparkURL = buildFormsparkUrl(formsparkEnv);

  const painOptions = [
    'Ich habe noch keine Website',
    'Meine Website generiert keine Anfragen',
    'Ich bin abhängig von Empfehlungen',
    'Ich weiß nicht, wie ich online sichtbar werde',
    'Sonstiges'
  ];

  const goalOptions = [
    'Planbare neue Kundenanfragen',
    'Mehr Umsatz & Wachstum',
    'Mehr Sichtbarkeit online',
    'Professionelles Website-Design',
    'Sonstiges'
  ];

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

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handlePrevStep = () => setStep(prev => prev - 1);
  const handleNextStep = () => setStep(prev => prev + 1);

  const validateStep = () => {
    const stepErrors = {};
    if (step === 1 && !formData.pain) stepErrors.pain = 'Bitte wählen Sie ein Hindernis aus.';
    if (step === 2 && !formData.goal) stepErrors.goal = 'Bitte wählen Sie ein Ziel aus.';
    if (step === 3 && !formData.name.trim()) stepErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    if (step === 4 && !formData.phone.trim()) stepErrors.phone = 'Bitte geben Sie Ihre Telefonnummer ein.';
    if (step === 5 && !formData.message.trim()) stepErrors.message = 'Bitte geben Sie eine Nachricht ein.';
    if (!formData.privacy) stepErrors.privacy = 'Sie müssen die Datenschutzerklärung akzeptieren.';
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.trim() !== '') return; // Honeypot

    if (!validateStep()) return;

    setSubmitting(true);
    try {
      const payload = { ...formData };
      const result = await submitToFormspark(formsparkURL, payload);
      toast.dismiss();
      if (result.ok) navigate('/danke');
      else toast.error(result.message || 'Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } catch (err) {
      toast.dismiss();
      const offline = typeof navigator !== 'undefined' && navigator && navigator.onLine === false;
      toast.error(
        offline
          ? 'Sie scheinen offline zu sein. Bitte prüfen Sie Ihre Internetverbindung.'
          : 'Senden fehlgeschlagen. Bitte versuchen Sie es später erneut.'
      );
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="w-full flex items-center justify-center py-20" id="contact">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="px-6 text-black lg:grid lg:grid-cols-2 max-w-[950px] xl:max-w-[1100px]">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="mb-15">
          <h1 className="contact-animate text-3xl md:text-4xl font-bold mb-6 lg:mb-10">
            Kontaktieren Sie mich
          </h1>
          <p className="contact-animate text-lg text-[#000814] mb-6">
            Interesse an einer Website, die auf Anfragen ausgelegt ist? Schreiben Sie mir kurz!
          </p>
          <div className="contact-animate flex items-center gap-3 mt-8 cursor-pointer">
            <HiOutlinePhone className="text-2xl" />
            <a href="tel:+4917675398004" className='text-[#000814] hover:text-[#003566] transition-colors'>+49 176 75398004</a>
          </div>
          <div className="contact-animate flex items-center gap-3 mt-6 cursor-pointer">
            <FaWhatsapp className="text-2xl" />
            <a href="https://wa.me/4917675398004" target="_blank" rel="noopener noreferrer" className='text-[#000814] hover:text-[#003566] transition-colors'>WhatsApp schreiben</a>
          </div>
          <div className="contact-animate flex items-center gap-3 mt-6 cursor-pointer">
            <FiInstagram className="text-2xl" />
            <a href="https://instagram.com/francocipolla.de" target="_blank" rel="noopener noreferrer" className='text-[#000814] hover:text-[#003566] transition-colors duration-200 font-medium'>
              @francocipolla.de
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <form onSubmit={handleSubmit} noValidate>

            {/* Honeypot */}
            <input type="text" name="website" value={formData.website} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            {/* STEP 1: Pain */}
            {step === 1 && (
              <div className="contact-animate mb-6">
                <p className="mb-2 font-semibold text-lg">
                  Was hält Sie aktuell am meisten davon ab, mehr Kunden zu gewinnen?
                </p>
                <div className="flex flex-col gap-3 mt-3">
                  {painOptions.map(option => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setFormData(prev => ({ ...prev, pain: option }))}
                      className={`py-2 px-4 border rounded text-left cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${
                        formData.pain === option ? 'bg-gray-200 border-black font-semibold' : 'border-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                  {errors.pain && <p className="text-red-600 text-sm mt-1">{errors.pain}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.pain) {
                      setErrors({ ...errors, pain: 'Bitte wählen Sie ein Hindernis aus.' });
                      return;
                    }
                    handleNextStep();
                  }}
                  className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-[#000814] cursor-pointer"
                >
                  Weiter
                </button>
              </div>
            )}

            {/* STEP 2: Goal */}
            {step === 2 && (
              <div className="contact-animate mb-6">
                <p className="mb-2 font-semibold text-lg">Was möchten Sie mit Ihrer Website erreichen?</p>
                <div className="flex flex-col gap-3 mt-3">
                  {goalOptions.map(option => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setFormData(prev => ({ ...prev, goal: option }))}
                      className={`py-2 px-4 border rounded text-left cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${
                        formData.goal === option ? 'bg-gray-200 border-black font-semibold' : 'border-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                  {errors.goal && <p className="text-red-600 text-sm mt-1">{errors.goal}</p>}
                </div>
                <div className="flex mt-4">
                  <button type="button" onClick={handlePrevStep} className="mr-2 bg-gray-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-gray-400">Zurück</button>
                  <button type="button" onClick={() => { if(!formData.goal){setErrors({ ...errors, goal:'Bitte wählen Sie ein Ziel aus.'}); return;} handleNextStep(); }} className="bg-black text-white py-2 px-4 rounded hover:bg-[#000814] cursor-pointer">Weiter</button>
                </div>
              </div>
            )}

            {/* STEP 3: Name */}
            {step === 3 && (
              <div className="contact-animate mb-6">
                <label className="block mb-2 font-semibold">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={`border w-full p-2.5 rounded ${errors.name ? 'border-red-600' : 'border-black'}`} placeholder="Max Mustermann"/>
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                <div className="flex mt-4">
                  <button type="button" onClick={handlePrevStep} className="mr-2 bg-gray-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-gray-400">Zurück</button>
                  <button type="button" onClick={() => { if(!formData.name.trim()){setErrors({ ...errors, name:'Bitte geben Sie Ihren Namen ein.'}); return;} handleNextStep(); }} className="bg-black text-white py-2 px-4 rounded hover:bg-[#000814] cursor-pointer">Weiter</button>
                </div>
              </div>
            )}

            {/* STEP 4: Phone */}
            {step === 4 && (
              <div className="contact-animate mb-6">
                <label className="block mb-2 font-semibold">Telefonnummer</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`border w-full p-2.5 rounded ${errors.phone ? 'border-red-600' : 'border-black'}`} placeholder="+49 176 12345678"/>
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                <div className="flex mt-4">
                  <button type="button" onClick={handlePrevStep} className="mr-2 bg-gray-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-gray-400">Zurück</button>
                  <button type="button" onClick={() => { if(!formData.phone.trim()){setErrors({ ...errors, phone:'Bitte geben Sie Ihre Telefonnummer ein.'}); return;} handleNextStep(); }} className="bg-black text-white py-2 px-4 rounded hover:bg-[#000814] cursor-pointer">Weiter</button>
                </div>
              </div>
            )}

            {/* STEP 5: Message + Privacy + Submit */}
            {step === 5 && (
              <div className="contact-animate mb-6">
                <label className="block mb-2 font-semibold">Ihre Nachricht</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className={`border w-full p-2.5 rounded ${errors.message ? 'border-red-600' : 'border-black'}`} placeholder="Schreiben Sie mir kurz, wie ich Ihnen helfen kann…"/>
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}

                <div className="flex items-center gap-2 my-4">
                  <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange} className={`w-5 h-5 border ${errors.privacy ? 'border-red-600' : 'border-black'} accent-[#003566] rounded-none cursor-pointer`} />
                  <label htmlFor="privacy" className={`text-base text-[#000814] leading-snug ${errors.privacy ? 'text-red-600' : ''}`}>
                    Ich akzeptiere die <Link to="/datenschutz" className="underline hover:text-[#001D3D] transition-colors">Datenschutzerklärung</Link>.
                  </label>
                </div>

                <div className="flex mt-4">
                  <button type="button" onClick={handlePrevStep} className="mr-2 bg-gray-300 text-black py-2 px-4 rounded cursor-pointer hover:bg-gray-400">Zurück</button>
                  <button type="submit" disabled={submitting} className="bg-black text-white py-2 px-4 rounded hover:bg-[#000814] cursor-pointer">
                    {submitting ? 'Wird gesendet…' : 'Jetzt Anfrage senden'}
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
