import NavBar from "./components/NavBar"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import NotFound from "./pages/NotFound"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
