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

        // Zustand zurücksetzen, damit es nicht erneut scrollt
        navigate(location.pathname, { replace: true })
      }
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
