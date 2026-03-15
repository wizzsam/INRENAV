import { ArrowUp, ChevronRight } from 'lucide-react'
import logo from '/logo_inerva.jpg'

const cols = [
    {
        title: 'Servicios',
        links: ['Reparación de Maquinaria', 'Trabajos en Obra Viva', 'Sistemas Eléctricos', 'Tuberías y Casco', 'Representaciones Técnicas', 'Inspección y Certificación'],
    },
    {
        title: 'Empresa',
        links: ['Nosotros', 'Certificaciones', 'Clientes', 'Carreras'],
    },
    {
        title: 'Legal',
        links: ['Política de Privacidad', 'Términos de Servicio', 'Política MARPOL'],
    },
]

export default function Footer() {
    return (
        <footer className="bg-[#080F22]">
            {/* Top accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#1B4FD8]/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Main grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/6">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <img src={logo} alt="INRENAV"
                            className="h-10 object-contain bg-white rounded-lg px-3 py-1.5 mb-5" />
                        <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
                            Líderes en ingeniería y representaciones navales. 15+ años garantizando la
                            operatividad de flotas pesqueras, comerciales y de la marina.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['SOLAS', 'MARPOL', 'ISO 9001', 'DICAPI'].map(cert => (
                                <span key={cert}
                                    className="px-2.5 py-1 text-[11px] font-bold text-blue-400 border border-blue-400/25 rounded-md bg-blue-400/5 tracking-wide">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {cols.map(col => (
                        <div key={col.title}>
                            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">{col.title}</h4>
                            <ul className="flex flex-col gap-3">
                                {col.links.map(link => (
                                    <li key={link}>
                                        <a href="#"
                                            className="text-white/38 text-[13px] hover:text-blue-400 flex items-center gap-1.5 group transition-colors">
                                            <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-blue-400" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
                    <p className="text-white/25 text-xs text-center sm:text-left">
                        © {new Date().getFullYear()} INRENAV – Ingeniería y Representaciones Navales. Todos los derechos reservados.
                    </p>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-9 h-9 rounded-xl bg-blue-900/40 border border-blue-400/25 text-blue-400 flex items-center justify-center
                             hover:bg-blue-900/60 hover:-translate-y-1 transition-all flex-shrink-0"
                        aria-label="Subir al inicio">
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    )
}
