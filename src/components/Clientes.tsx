import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const clients = [
    { name: 'TASA Perú', initial: 'T' },
    { name: 'EXALMAR', initial: 'E' },
    { name: 'COPEINCA', initial: 'C' },
    { name: 'Pacific Andes', initial: 'P' },
    { name: 'Marina de Guerra', initial: 'M' },
    { name: 'HAYDUK', initial: 'H' },
    { name: 'Austral Group', initial: 'A' },
    { name: 'Armadora Pacífico', initial: 'S' },
]

const testimonials = [
    {
        name: 'Capt. Ricardo Flores',
        role: 'Jefe de Flota – TASA Perú',
        text: 'INRENAV nos ha dado un respaldo técnico excepcional. Sus tiempos de respuesta y la calidad de sus trabajos son fundamentales para mantener nuestra flota operativa en temporada de pesca.',
        avatar: 'RF',
    },
    {
        name: 'Ing. María Santos',
        role: 'Gerente de Operaciones – EXALMAR',
        text: 'Llevamos más de 5 años trabajando con INRENAV. Su equipo siempre demuestra un alto nivel de profesionalismo. Son los aliados estratégicos que necesitábamos en mantenimiento naval.',
        avatar: 'MS',
    },
    {
        name: 'Ing. Carlos Mendoza',
        role: 'Director Técnico – Armadora Pacífico',
        text: 'La calidad en cada reparación de INRENAV es inigualable. Sus ingenieros conocen perfectamente los sistemas navales y entregan resultados que superan las expectativas.',
        avatar: 'CM',
    },
]

export default function Clientes() {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting)
                    e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) =>
                        setTimeout(() => el.classList.add('visible'), i * 100)
                    )
            })
        }, { threshold: 0.08 })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        /* SECCIÓN BLANCA */
        <section id="clientes" ref={ref} className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="reveal text-center mb-16">
                    <p className="text-[#1B4FD8] text-xs font-bold tracking-[.12em] uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-8 h-0.5 bg-[#1B4FD8] rounded" /> Nuestros clientes <span className="w-8 h-0.5 bg-[#1B4FD8] rounded" />
                    </p>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-[#0D1B3E] mb-4 tracking-tight leading-tight">
                        Empresas que confían{' '}
                        <span className="gradient-text">en nuestra experiencia</span>
                    </h2>
                    <p className="text-[#637BA8] text-base max-w-lg mx-auto leading-relaxed">
                        Trabajamos con las principales navieras y pesqueras del país,
                        construyendo relaciones de confianza a largo plazo.
                    </p>
                </div>

                {/* Marquee */}
                <div className="reveal overflow-hidden mb-16 border-y border-blue-100 py-8">
                    <div className="flex gap-5 animate-marquee" style={{ width: 'max-content' }}>
                        {[...clients, ...clients].map((c, i) => (
                            <div key={i}
                                className="flex items-center gap-3 px-6 py-3 bg-[#F4F8FF] border border-blue-100 rounded-full flex-shrink-0
                              hover:bg-[#EEF5FF] hover:border-blue-200 hover:shadow-md transition-all cursor-default">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B4FD8] to-[#4DA6FF] flex items-center justify-center
                                text-white font-bold text-sm flex-shrink-0">
                                    {c.initial}
                                </div>
                                <span className="text-[#2D4070] font-semibold text-sm whitespace-nowrap">{c.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <h3 className="reveal text-3xl font-extrabold text-[#0D1B3E] text-center mb-10 tracking-tight">
                    Lo que dicen nuestros clientes
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={t.name}
                            className="reveal bg-[#F4F8FF] border border-blue-100 rounded-2xl p-7 relative
                            hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300"
                            style={{ transitionDelay: `${i * 80}ms` }}>

                            <Quote size={32} className="text-blue-200 mb-4" />

                            <p className="text-[#637BA8] text-sm leading-relaxed mb-6 italic">{t.text}</p>

                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1B4FD8] to-[#4DA6FF] flex items-center justify-center
                                text-white font-bold text-sm flex-shrink-0">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-[#0D1B3E] text-sm">{t.name}</div>
                                    <div className="text-[#1B4FD8] text-xs">{t.role}</div>
                                </div>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mt-4">
                                {Array.from({ length: 5 }).map((_, k) => (
                                    <Star key={k} size={13} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
