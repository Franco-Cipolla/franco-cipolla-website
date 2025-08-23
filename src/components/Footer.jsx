import React, { useState } from 'react'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FiInstagram } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import CookieBanner from './CookieBanner'

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
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Franco Cipolla</h1>

        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Adresse */}
          <div>
            <h2 className="font-semibold">Adresse</h2>
            <p className="text-[#000814] mt-2">
              Wuppermannstraße 14<br />
              58256 Ennepetal
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="font-semibold">Kontakt</h2>
            <div className="flex items-center gap-3 mt-3">
              <HiOutlineMail className="text-black text-xl" />
              <a
                href="mailto:franco_cipolla@web.de"
                className="text-[#000814] hover:text-[#003566] transition-colors"
              >
                franco_cipolla@web.de
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <HiOutlinePhone className="text-black text-xl" />
              <p
                className="text-[#000814] hover:text-[#003566] transition-colors"

              >
                +49 176 75398004
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="font-semibold">Social Media</h2>
            <div className="flex items-center gap-3 mt-3">
              <FiInstagram className="text-black text-xl" />
              <a
                href="https://instagram.com/francocipolla.web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000814] hover:text-[#003566] transition-colors font-medium"
              >
                @francocipolla.web
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
        <p className="text-[#000814] text-sm">© 2025 Franco Cipolla</p>
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
            className="underline text-sm cursor-pointer hover:text-[#001D3D] text-[#000814] transition-colors"
          >
            Cookie-Einstellungen
          </button>

          {/* CookieBanner wird per Prop gesteuert */}
          {showCookieSettings && (
            <CookieBanner forceShow={true} onClose={closeCookieSettings} />
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
