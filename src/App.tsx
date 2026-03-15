import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Estadisticas from './components/Estadisticas'
import Clientes from './components/Clientes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Estadisticas />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
