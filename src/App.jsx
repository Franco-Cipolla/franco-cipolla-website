import NavBar from "./components/NavBar"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx"
import HomePage from "./pages/HomePage" 

function App() {
   const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
        </Route>
      )
    )
    return <RouterProvider router={router} />
}

export default App
