
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import NotFound from "./pages/NotFound"
import Datenschutzerklärung from "./pages/Datenschutzerklärung.jsx"
import Erstgespraech from "./pages/ErstGespraech.jsx"
import Impressum from "./pages/Impressum.jsx"

function App() {
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

  return <RouterProvider router={router} />
}

export default App
