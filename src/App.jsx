import { Suspense, useEffect, lazy } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx"
import Loader from "./components/Loader.jsx"

// Lazy Imports
const HomePage = lazy(() => import("./pages/HomePage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const Datenschutzerklärung = lazy(() => import("./pages/Datenschutzerklärung.jsx"))
const Erstgespraech = lazy(() => import("./pages/ErstGespraech.jsx"))
const Impressum = lazy(() => import("./pages/Impressum.jsx"))
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  useEffect(() => {
    window.addEventListener('scroll', () => {}, { passive: true })
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="datenschutz" element={<Datenschutzerklärung />} />
        <Route path="erstgespraech" element={<Erstgespraech />} />
        <Route path="impressum" element={<Impressum />} />
      </Route>
    )
  )

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
