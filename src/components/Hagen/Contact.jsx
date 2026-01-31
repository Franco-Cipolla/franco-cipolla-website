import React, { useRef, useEffect, useState } from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { gsap, ScrollTrigger } from "../gsapSetup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { buildFormsparkUrl, submitToFormspark } from '../formspark';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pain: [],
    goal: '',
    name: '',
    phone: '',
    message: '',
    privacy: false,
    website: ''
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const formsparkURL = buildFormsparkUrl(
    import.meta.env.VITE_FORMSPARK_FORM_ID_CONTACT
  );

  const painOptions = [
    'Ich bekomme keine messbaren Anfragen',
    'Meine Website bringt mir nichts',
    'Ich bin stark von Empfehlungen abhängig',
    'Neue Kunden kommen unregelmäßig',
    'Ich habe aktuell gar keine Website'
  ];

  const goalOptions = [
    'Regelmäßig neue Kundenanfragen erhalten',
    'Unabhängiger von Empfehlungen werden',
    'Online seriöser & professioneller wirken',
    'Mehr passende Kunden statt Zeitverschwender'
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.contact-animate'),
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const togglePain = (option) => {
    setFormData(prev => ({
      ...prev,
      pain: prev.pain.includes(option)
        ? prev.pain.filter(p => p !== option)
        : [...prev.pain, option]
    }));
    setErrors(prev => ({ ...prev, pain: '' }));
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1 && formData.pain.length === 0) newErrors.pain = 'Bitte mindestens eine Option auswählen.';
    if (currentStep === 2 && !formData.goal) newErrors.goal = 'Bitte ein Ziel auswählen.';
    if (currentStep === 3 && !formData.name.trim()) newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    if (currentStep === 4 && !formData.phone.trim()) newErrors.phone = 'Bitte geben Sie eine Telefonnummer ein.';
    if (currentStep === 5 && !formData.privacy) newErrors.privacy = 'Bitte Datenschutzerklärung akzeptieren.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website.trim() !== '') return; // Honeypot

    if (!validateStep(5)) return;

    setSubmitting(true);
    try {
      const payload = { ...formData, pain: formData.pain.join(', ') };
      const result = await submitToFormspark(formsparkURL, payload);
      if (result.ok) navigate('/danke');
      else toast.error('Fehler beim Senden. Bitte erneut versuchen.');
    } catch {
      toast.error('Senden fehlgeschlagen. Bitte später erneut versuchen.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="w-full flex justify-center py-20">
      <ToastContainer />
      <div className="px-6 lg:grid lg:grid-cols-2 max-w-[1000px] gap-12">

        {/* LEFT */}
        <div className="mb-15 lg:mb-0">
          <h1 className="contact-animate text-4xl font-bold mb-6" id="contact">
            Kontaktieren Sie mich
          </h1>
          <p className="contact-animate text-lg mb-3">
            Sie sind nur wenige Klicks davon entfernt, messbar Kunden zu gewinnen.
          </p>
          <p className='contact-animate mb-6 text-sm md:text-[16px] text-black/90'> Kurze Anfrage – ehrliche Rückmeldung – keine Verpflichtung.</p>

          {/* DIREKTE KONTAKT-LINKS INLINE */}
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

        {/* FORM */}
        <form onSubmit={handleSubmit} noValidate>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="contact-animate">
              <p className="font-semibold text-lg mb-3">
                Was trifft aktuell auf Sie zu? (Mehrfachauswahl)*
              </p>
              <div className="flex flex-col gap-3">
                {painOptions.map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => togglePain(option)}
                    className={`py-2 px-4 border rounded text-left cursor-pointer transition
                      ${formData.pain.includes(option) ? 'bg-gray-200 border-black font-semibold' : 'border-gray-300 hover:bg-gray-100'}
                    `}
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

          {/* STEP 2 */}
          {step === 2 && (
            <div className="contact-animate">
              <p className="font-semibold text-lg mb-3">Was ist aktuell Ihr wichtigstes Ziel?*</p>
              <div className="flex flex-col gap-3">
                {goalOptions.map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, goal: option }))}
                    className={`py-2 px-4 border rounded text-left cursor-pointer transition
                      ${formData.goal === option ? 'bg-gray-200 border-black font-semibold' : 'border-gray-300 hover:bg-gray-100'}
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.goal && <p className="text-red-600 mt-2">{errors.goal}</p>}
              <div className="flex gap-2 mt-4">
                <button type="button" onClick={() => setStep(1)} className="cursor-pointer">Zurück</button>
                <button type="button" className="bg-black text-white px-5 py-2 rounded cursor-pointer" onClick={() => validateStep(2) && setStep(3)}>Weiter</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="contact-animate">
              <label className="font-semibold">Wie darf ich Sie ansprechen?*</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="border w-full p-2 rounded mt-2" />
              {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
              <div className="flex gap-2 mt-4">
                <button type="button" onClick={() => setStep(2)} className="cursor-pointer">Zurück</button>
                <button type="button" className="bg-black text-white px-5 py-2 rounded cursor-pointer" onClick={() => validateStep(3) && setStep(4)}>Weiter</button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="contact-animate">
              <label className="font-semibold">Telefonnummer*
                <span className="block text-sm text-gray-600 mt-1">📞 Für eine kurze Rückmeldung zu Ihrer Anfrage (Kein Spam)</span>
              </label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border w-full p-2 rounded mt-2" />
              {errors.phone && <p className="text-red-600 mt-1">{errors.phone}</p>}
              <div className="flex gap-2 mt-4">
                <button type="button" onClick={() => setStep(3)} className="cursor-pointer">Zurück</button>
                <button type="button" className="bg-black text-white px-5 py-2 rounded cursor-pointer" onClick={() => validateStep(4) && setStep(5)}>Weiter</button>
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="contact-animate">
              <label className="font-semibold">Ihre Nachricht (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className={`border w-full p-2 rounded mt-2 min-h-[160px] cursor-pointer ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-black'}`}
                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
              />
              <ul className="mt-3 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Was läuft aktuell nicht so, wie Sie es möchten?</li>
                <li>Was haben Sie bisher ausprobiert?</li>
                <li>Was wäre für Sie ein gutes Ergebnis?</li>
              </ul>
              <div className="flex items-center gap-2 mt-5">
                <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} className="w-4 h-4 cursor-pointer" />
                <span className="text-sm">Ich akzeptiere die <Link to="/datenschutz" className="underline">Datenschutzerklärung</Link></span>
              </div>
              {errors.privacy && <p className="text-red-600 text-sm mt-1">{errors.privacy}</p>}
              <div className="flex gap-2 mt-5">
                <button type="button" onClick={() => setStep(4)} className="px-4 py-2 border rounded cursor-pointer hover:bg-gray-100">Zurück</button>
                <button type="submit" disabled={submitting} className="bg-black text-white px-5 py-2 rounded cursor-pointer hover:opacity-90">
                  {submitting ? 'Wird gesendet…' : 'Jetzt Anfrage senden'}
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;
