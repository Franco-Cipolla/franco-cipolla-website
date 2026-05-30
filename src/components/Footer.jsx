import React, { useState } from 'react'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import CookieBanner from './CookieBanner'
import { FaWhatsapp } from "react-icons/fa"
import { RiGoogleLine } from "react-icons/ri"

const Footer = () => {
  const [showCookieSettings, setShowCookieSettings] = useState(false)

  const openCookieSettings = () => {
    setShowCookieSettings(true)
  }

  const closeCookieSettings = () => {
    setShowCookieSettings(false)
  }

  return (
    <footer className="px-2 py-12 border-t mx-2 border-black ">

      {/* Hauptbereich */}
      <div className="border-b border-black pb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Franco Cipolla
        </h2>

        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Adresse */}
          <div>
            <h3 className="font-semibold">Adresse</h3>
            <p className="text-[#000814] mt-2">
              Wuppermannstraße 14<br />
              58256 Ennepetal
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold">Kontakt</h3>

            <div className="flex items-center gap-3 mt-3">
              <HiOutlineMail className="text-black text-xl" />
              <a href="mailto:franco_cipolla@web.de"
                 className="text-[#000814] hover:text-[#003566]">
                E-Mail
              </a>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <HiOutlinePhone className="text-black text-xl" />
              <a href="tel:+4917675398004"
                 className="text-[#000814] hover:text-[#003566]">
                Anrufen
              </a>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FaWhatsapp className="text-black text-xl" />
              <a href="https://wa.me/4917675398004"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#000814] hover:text-[#003566]">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold">Social</h3>

            <div className="flex items-center gap-3 mt-3">
              <FiInstagram />
              <a href="https://instagram.com/francocipolla.de"
                 className="text-[#000814] hover:text-[#003566]">
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FiLinkedin />
              <a href="https://de.linkedin.com/in/franco-cipolla-00217a37a"
                 className="text-[#000814] hover:text-[#003566]">
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FiFacebook />
              <a href="https://www.facebook.com/people/Franco-Cipolla/61585491870754/#"
                 className="text-[#000814] hover:text-[#003566]">
                Facebook
              </a>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <RiGoogleLine />
              <a href="https://share.google/Ms10yJGkXK6sjmL57"
                 className="text-[#000814] hover:text-[#003566]">
                Google Profil
              </a>
            </div>
          </div>

          {/* 🔥 Standorte (NEU – SEO intern links) */}
          <div>
            <h3 className="font-semibold">Standorte</h3>

            <div className="mt-3 flex flex-col gap-2 text-[#000814]">
              <Link to="/" className="hover:text-[#003566]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Startseite / Ennepetal
              </Link>

              <Link to="/hagen" className="hover:text-[#003566]">
                Hagen
              </Link>

              <Link to="/wuppertal" className="hover:text-[#003566]">
                Wuppertal
              </Link>
            </div>
          </div>
        </div>



        {/* 🔥 SEO / Entity Signal (clean, minimal, kein Designbruch) */}
        <div className="mt-6 pt-4 border-t text-center border-black text-xs text-[#000814] leading-snug">
          Webdesign für lokale Unternehmen in <strong>Ennepetal, Wuppertal & Hagen</strong> ·
          Fokus auf SEO, Conversion-Optimierung & messbare Kundenanfragen
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
        <p className="text-[#000814] text-sm">2026 Franco Cipolla</p>



        <div className="flex items-center gap-4">
          <Link
            to="/datenschutz"

            className="underline text-sm hover:text-[#001D3D] text-[#000814] transition-colors"
          >
            Datenschutzerklärung
          </Link>

          <Link
            to="/impressum"
            className="underline text-sm hover:text-[#001D3D] text-[#000814] transition-colors"
          >
            Impressum
          </Link>

          <button
            onClick={openCookieSettings}
            className="underline z-9999999999 text-sm cursor-pointer bg-white hover:text-[#001D3D] text-[#000814] transition-colors"
          >
            Cookie-Einstellungen
          </button>

          {showCookieSettings && (
            <CookieBanner forceShow={true} onClose={closeCookieSettings} />
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
