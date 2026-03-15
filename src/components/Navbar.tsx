import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import logo from '/logo_inerva.jpg'

const links = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#estadisticas', label: 'Experiencia' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contacto', label: 'Contáctanos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = links.map(l => l.href.replace('#', ''))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  /* ── derived styles based on scroll position ── */
  const navBg = scrolled ? 'bg-white shadow-lg shadow-blue-900/10' : 'bg-transparent'
  const linkColor = scrolled ? 'text-[#1A2F5A]' : 'text-white'
  const hoverLink = scrolled ? 'hover:text-[#1B4FD8]' : 'hover:text-[#93C5FD]'

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg} animate-slideInNav`}
      style={{ animation: 'slideInNav .45s ease forwards' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: scrolled ? 64 : 80, transition: 'height .3s' }}>

        {/* Logo */}
        <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('#hero') }}
          className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="INRENAV"
            className="object-contain rounded-lg"
            style={{ height: 40, background: scrolled ? 'transparent' : 'white', padding: scrolled ? 0 : '3px 8px', transition: 'all .3s' }} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={e => { e.preventDefault(); scrollTo(l.href) }}
              className={`nav-link text-sm font-medium transition-colors ${linkColor} ${hoverLink} ${active === l.href.replace('#', '') ? (scrolled ? '!text-[#1B4FD8]' : '!text-[#93C5FD]') : ''}`}>
              {l.label}
            </a>
          ))}

          <a href="#contacto" onClick={e => { e.preventDefault(); scrollTo('#contacto') }}
            className="btn-primary text-sm flex items-center gap-1.5 px-5 py-2.5">
            Solicitar Cotización
            <ChevronRight size={15} />
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#1A2F5A] hover:bg-blue-50' : 'text-white hover:bg-white/10'}`}
          aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-blue-100 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={e => { e.preventDefault(); scrollTo(l.href) }}
              className="px-4 py-3 text-[#1A2F5A] font-medium rounded-xl hover:bg-blue-50 hover:text-[#1B4FD8] transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={e => { e.preventDefault(); scrollTo('#contacto') }}
            className="btn-primary mt-2 justify-center text-sm py-3">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </nav>
  )
}
