import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavBar'
import ScrollToTop from '../components/ScrollToTop'
const MainLayout = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Outlet />

    </div>
  )
}

export default MainLayout
