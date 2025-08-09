import React from 'react'
import Navbar from '../components/NavBar'
import ScrollToTop from '../components/ScrollToTop'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
const MainLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
  if (location.pathname === '/' && location.state?.scrollTo) {
      let attempts = 0
      const maxAttempts = 20

      const scrollToTarget = () => {
        const target = document.getElementById(location.state.scrollTo)
        if (target) {
          const yOffset = -100
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        } else if (attempts < maxAttempts) {
          attempts++
          requestAnimationFrame(scrollToTarget)
        }
      }

      scrollToTarget()
      navigate(location.pathname, { replace: true })
    }
  }, [location, navigate])

  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />

    </div>
  )
}

export default MainLayout
