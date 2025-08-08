import React from 'react'
import Navbar from '../components/NavBar'
import ScrollToTop from '../components/ScrollToTop'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
const MainLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const scrollToTarget = () => {
        const target = document.getElementById(location.state.scrollTo)
        if (target) {
          const yOffset = -100
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        } else {
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

    </div>
  )
}

export default MainLayout
