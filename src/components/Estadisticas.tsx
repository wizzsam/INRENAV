import { useEffect, useRef, useState } from 'react'
import { CalendarDays, Ship, Handshake, CheckCircle2, Globe2, Lock, Medal } from 'lucide-react'

const stats = [
    { value: 15, suffix: '+', label: 'Años de Experiencia', icon: CalendarDays, desc: 'En el sector naval peruano e internacional' },
    { value: 200, suffix: '+', label: 'Proyectos Realizados', icon: Ship, desc: 'Entre reparaciones y mantenimientos especializados' },
    { value: 50, suffix: '+', label: 'Clientes Satisfechos', icon: Handshake, desc: 'Empresas navieras, pesqueras y marinas' },
    { value: 98, suffix: '%', label: 'Tasa de Éxito', icon: CheckCircle2, desc: 'Proyectos entregados en tiempo y forma' },
]

function StatCard({ value, suffix, label, icon: Icon, desc, run }: typeof stats[0] & { run: boolean }) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!run) return
        let cur = 0
        const step = value / (1800 / 16)
        const t = setInterval(() => {
            cur += step
            if (cur >= value) { setCount(value); clearInterval(t) }
            else setCount(Math.floor(cur))
        }, 16)
        return () => clearInterval(t)
    }, [run, value])

    return (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center
                    hover:-translate-y-2 hover:bg-white/15 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-blue-300" />
            </div>
            <div className="text-4xl font-black text-white leading-none mb-1">
                {count}<span className="text-xl text-blue-300">{suffix}</span>
            </div>
            <div className="font-bold text-white text-xs mb-0.5">{label}</div>
            <div className="text-blue-300/70 text-xs leading-relaxed">{desc}</div>
        </div>
    )
}

export default function Estadisticas() {
    const ref = useRef<HTMLDivElement>(null)
    const [run, setRun] = useState(false)

    useEffect(() => {
        const obs = new IntersectionObserver(e => { if (e[0].isIntersecting) setRun(true) }, { threshold: 0.3 })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    const features = [
        { icon: Globe2, title: 'Cobertura Nacional', desc: 'Atendemos puertos en todo el litoral peruano con base en el Callao.' },
        { icon: Lock, title: 'Respaldo Internacional', desc: 'Alianzas con fabricantes y proveedores de clase mundial en Europa y Asia.' },
        { icon: Medal, title: 'Garantía de Calidad', desc: 'Cada trabajo cuenta con garantía formal y documentación técnica completa.' },
    ]

    return (
        /* SECCIÓN OSCURA – contraste con la sección celeste anterior */
        <section id="estadisticas"
            className="py-24 relative overflow-hidden"
            style={{
                backgroundImage: 'url(/inerva_img1.jpg)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E]/93 via-[#0D1B3E]/88 to-[#1A2F5A]/90" />
            {/* Diagonal stripes */}
            <div className="absolute inset-0 opacity-40 pointer-events-none"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(77,166,255,.04) 0,rgba(77,166,255,.04) 1px,transparent 1px,transparent 56px)' }} />

            <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-blue-400 text-xs font-bold tracking-[.12em] uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-8 h-0.5 bg-blue-400 rounded" /> Nuestra trayectoria <span className="w-8 h-0.5 bg-blue-400 rounded" />
                    </p>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                        Números que hablan <span className="gradient-text">por sí solos</span>
                    </h2>
                    <p className="text-blue-300/70 text-base max-w-md mx-auto leading-relaxed">
                        Décadas comprometidos con la excelencia en el sector naval peruano e internacional.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    {stats.map(s => <StatCard key={s.label} {...s} run={run} />)}
                </div>

                {/* Features row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {features.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-4 bg-white/7 border border-white/12 rounded-2xl p-6
                                        hover:bg-white/12 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-blue-900/50 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                                <Icon size={22} className="text-blue-400" />
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm mb-1">{title}</div>
                                <p className="text-blue-300/65 text-xs leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
