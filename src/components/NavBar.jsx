import React, { useState, useEffect, useRef } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link, useNavigate } from 'react-router-dom'
import CTA1 from './CTA1'
import CTA2 from './CTA2'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const navigate = useNavigate()

  const goToService = () => {
  const scrollToService = () => {
    const target = document.getElementById('service-start') // 👈 neuer Anker
    if (target) {
      const yOffset = -100 // Höhe deiner Navbar
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  if (window.location.pathname === '/') {
    scrollToService()
  } else {
    navigate('/', { state: { scrollTo: 'service-start' } })
  }
}



  // Scroll-Lock bei geöffnetem Menü
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const mobileMenuItems = [
    { label: 'Über mich', to: '/about' },
  ]
  const deskMenuItems = [
    { label: 'Über mich', to: '/about' },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[1000]   backdrop-blur-[18px] transition-all duration-500"
    >
      <div className="mx-auto w-full xl:max-w-[1100px] px-4 sm:px-6 xl:px-0 flex justify-between items-center py-4">
        {/* Desktop Navigation */}
        <ul className="gap-10 hidden lg:flex">
          <li>
            <Link
              to="/"
              className="text-black text-lg hover:text-[#003566] transition"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Home
            </Link>
          </li>
          {deskMenuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="text-black text-lg hover:text-[#003566] transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={goToService}
              className="text-black cursor-pointer text-lg hover:text-[#003566] transition"
            >
              Service
            </button>
          </li>
        </ul>

        {/* Branding */}
        <h1 className="font-bold text-[1.3rem] lg:text-2xl">Franco Cipolla</h1>

        {/* Burger Button */}
        <button
          className="lg:hidden z-[80]"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          title={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} />
        </button>




        {/* Desktop CTA */}
        <div className="hidden lg:flex space-x-2 items-center">
          <CTA2 />
          <CTA1 />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white bg-opacity-90 z-[70] flex flex-col  transition-all duration-700 ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8"
            role="menu"
            aria-label="Mobile Navigation"
            id="mobile-menu"
        >
          <li role="none">
            <Link
              to="/"
              className="text-black text-2xl font-semibold hover:text-[#003566] transition"
              onClick={() => {
                setIsOpen(false)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              role="menuitem"
              tabIndex={0}
            >
              Home
            </Link>
          </li>

          {mobileMenuItems.map((item) => (
            <li role="none" key={item.label}>
              <Link
                to={item.to}
                className="text-black text-2xl font-semibold hover:text-[#003566] transition"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                tabIndex={0}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li role="none">
            <button
              onClick={() => {
                goToService()
                setIsOpen(false)
              }}
              className="text-black cursor-pointer text-2xl font-semibold hover:text-[#003566] transition"
              role="menuitem"
              tabIndex={0}
            >
              Service
            </button>
          </li>
            <li role="none">
            <button
              onClick={() => {
                setIsOpen(false)
                navigate('/', { state: { scrollTo: 'contact' } })
              }}
              className="text-black cursor-pointer text-2xl font-semibold hover:text-[#003566] transition"
              role="menuitem"
              tabIndex={0}
            >
              Kontakt
            </button>
          </li>
          <li role="none">
            <button role="menuitem"
               tabIndex={0}>
               <CTA1 onClick={() => setIsOpen(false)}  />
              </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
