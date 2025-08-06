import React, { useState, useEffect, useRef } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import BurgerGesprächBtn from './BurgerGesprächBtn'
import CTA1 from './CTA1'
import CTA2 from './CTA2'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  // GSAP Blur Animation beim Scroll
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top+=10',
        end: '+=150',
        scrub: true,
      },
    })

    tl.fromTo(
      navRef.current,
      {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
      },
      {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(18px)',
        ease: 'power2.out',
        duration: 1.5,
      }
    )
  }, [])

  // Scroll-Lock bei geöffnetem Menü
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const mobileMenuItems = [
    { label: 'Home', to: '/home' },
    { label: 'About', to: '/about' },
    { label: 'Service', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ]
  const deskMenuItems = [
    { label: 'Home', to: '/home' },
    { label: 'About', to: '/about' },
    { label: 'Service', to: '/projects' },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[60] transition-all duration-500"
    >
      <div className="mx-auto w-full xl:max-w-[1100px] px-4 sm:px-6 xl:px-0 flex justify-between items-center py-4">
        {/* Desktop Navigation */}
        <ul className="gap-10 hidden lg:flex">
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
        </ul>

        {/* Branding */}
        <h1 className="font-semibold text-[1.3rem] lg:text-2xl">Franco Cipolla</h1>

        {/* Burger Button */}
        <div className="lg:hidden z-[80]">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex space-x-2 items-center">
          <CTA2 />
          <CTA1 />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white bg-opacity-90 z-[70] flex flex-col transition-all duration-700 ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {mobileMenuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="text-black text-2xl font-semibold hover:text-[#003566] transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <BurgerGesprächBtn />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
