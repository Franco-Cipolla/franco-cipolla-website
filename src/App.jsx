import { Suspense, useEffect, lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Loader from './components/Loader.jsx';
import CheckList from './pages/CheckList.jsx';

// Lazy Imports
const HomePage = lazy(() => import('./pages/HomePage'));
const Hagenlanding = lazy(() => import('./pages/Hagenlanding'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Datenschutzerklärung = lazy(() => import('./pages/Datenschutzerklärung'));
const Erstgespraech = lazy(() => import('/src/pages/Erstgespraech.jsx'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Danke = lazy(() => import('./pages/Danke'));

import NotFound from "./pages/NotFound"


function App() {
  useEffect(() => {
    window.addEventListener('scroll', () => {}, { passive: true });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Alle Seiten MIT MainLayout */}
        <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="datenschutz" element={<Datenschutzerklärung />} />
          <Route path="erstgespraech" element={<Erstgespraech />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="danke" element={<Danke />} />
          <Route path="websites-hagen" element={<Hagenlanding />} />

        </Route>

        {/* Landingpage OHNE MainLayout */}
        <Route path="checkliste" element={<CheckList />} />
      </>
    )
  );

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
