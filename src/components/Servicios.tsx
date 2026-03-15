import { useEffect, useRef } from 'react'
import { Wrench, Anchor, Zap, PipetteIcon as Pipe, Package, ClipboardCheck, ArrowRight } from 'lucide-react'

const services = [
    {
        Icon: Wrench,
        title: 'Reparación de Maquinaria Naval',
        desc: 'Mantenimiento y reparación de motores principales, auxiliares, reductoras y sistemas de propulsión.',
        tags: ['Motores', 'Propulsión', 'Turboalimentadores'],
    },
    {
        Icon: Anchor,
        title: 'Trabajos en Obra Viva',
        desc: 'Inspección, limpieza y pintura de obra viva. Reparación de timones, hélices y sellos de embarcaciones.',
        tags: ['Varada', 'Hélices', 'Timones'],
    },
    {
        Icon: Zap,
        title: 'Sistemas Eléctricos y Electrónicos',
        desc: 'Instalación y reparación de sistemas eléctricos, paneles y equipos electrónicos de navegación.',
        tags: ['Electricidad', 'Automatización', 'Navegación'],
    },
    {
        Icon: Pipe,
        title: 'Sistemas de Tuberías y Casco',
        desc: 'Reparación de tuberías, válvulas, bombas y estructuras de casco con materiales certificados.',
        tags: ['Hidráulica', 'Casco', 'Válvulas'],
    },
    {
        Icon: Package,
        title: 'Representaciones Técnicas',
        desc: 'Representamos fabricantes internacionales líderes. Suministro de repuestos originales con garantía.',
        tags: ['Repuestos', 'Importación', 'Garantía'],
    },
    {
        Icon: ClipboardCheck,
        title: 'Inspección y Certificación',
        desc: 'Asistencia en inspecciones de clasificadoras. Gestión de certificados de navegabilidad.',
        tags: ['Clasificadora', 'DICAPI', 'Auditorías'],
    },
]

export default function Servicios() {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.srv-card').forEach((el, i) =>
                        setTimeout(() => {
                            (el as HTMLElement).style.opacity = '1';
                            (el as HTMLElement).style.transform = 'translateY(0)';
                        }, i * 90)
                    )
                }
            })
        }, { threshold: 0.05 })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        /* SECCIÓN CELESTE */
        <section id="servicios" ref={ref}
            className="py-24"
            style={{ background: 'linear-gradient(160deg,#EEF5FF 0%,#E0EEFF 100%)' }}>
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#1B4FD8] text-xs font-bold tracking-[.12em] uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-8 h-0.5 bg-[#1B4FD8] rounded" /> Lo que ofrecemos <span className="w-8 h-0.5 bg-[#1B4FD8] rounded" />
                    </p>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-[#0D1B3E] mb-4 tracking-tight leading-tight">
                        Servicios <span className="gradient-text">Especializados</span> en Ingeniería Naval
                    </h2>
                    <p className="text-[#637BA8] text-base max-w-lg mx-auto leading-relaxed">
                        Un portafolio completo de soluciones navales, desde reparaciones técnicas hasta representación de equipos de clase mundial.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map(({ Icon, title, desc, tags }) => (
                        <div key={title}
                            className="srv-card bg-white rounded-2xl p-7 border border-blue-100 group cursor-default
                            hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/12 hover:border-blue-200 transition-all duration-300"
                            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .6s ease, transform .6s ease, box-shadow .3s, border-color .3s' }}>

                            {/* Icon box */}
                            <div className="w-14 h-14 rounded-xl bg-[#EEF5FF] border border-blue-100 flex items-center justify-center mb-5
                              group-hover:bg-gradient-to-br group-hover:from-[#1B4FD8] group-hover:to-[#2A7FE8]
                              group-hover:border-[#1B4FD8] transition-all duration-300">
                                <Icon size={24} className="text-[#1B4FD8] group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="font-extrabold text-[#0D1B3E] text-lg mb-3 leading-snug tracking-tight">{title}</h3>
                            <p className="text-[#637BA8] text-sm leading-relaxed mb-5">{desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {tags.map(t => (
                                    <span key={t} className="text-xs font-semibold px-3 py-1 bg-[#EEF5FF] text-[#1B4FD8] border border-blue-200 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA banner */}
                <div className="bg-gradient-to-r from-[#1B4FD8] to-[#2A7FE8] rounded-2xl p-8 sm:p-10
                        flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden relative">
                    <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-1">¿Necesitas un servicio personalizado?</h3>
                        <p className="text-blue-200 text-sm">Evaluamos tu caso y preparamos una propuesta a medida.</p>
                    </div>
                    <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                        className="relative z-10 flex items-center gap-2 bg-white text-[#1B4FD8] font-bold px-6 py-3 rounded-full text-sm
                             hover:bg-blue-50 hover:shadow-lg transition-all flex-shrink-0">
                        Contáctanos <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    )
}
