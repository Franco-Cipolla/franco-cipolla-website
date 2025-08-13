import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>

    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 – Seite nicht gefunden</h1>
      <p className="text-lg mb-6">Die angeforderte Seite existiert nicht.</p>
      <Link to="/" className="text-blue-600 hover:underline">Zurück zur Startseite</Link>
    </div>
    </>
  )
}

export default NotFound
