import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceMarquee from '../components/ServiceMarquee'
import Projects from '../components/Projects'
import Service from '../components/Service'

const HomePage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo)
      if (target) {
        const yOffset = -100 // Höhe deiner Navbar
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })

        navigate(location.pathname, { replace: true }) // Zustand zurücksetzen
      }
    } else {
      // 👇 Scroll to top bei normalem Seitenaufruf oder Refresh
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location, navigate])

  return (
    <main>
      <Hero />
      <ServiceMarquee />
      <Projects />
      <Service /> {/* Stelle sicher, dass diese Section das richtige ID hat */}
    </main>
  )
}

export default HomePage
