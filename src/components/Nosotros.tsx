import { useEffect, useRef } from 'react'
import { Target, Telescope, ShieldCheck, Clock, Users, Leaf } from 'lucide-react'

const values = [
    { icon: ShieldCheck, title: 'Seguridad', desc: 'Cumplimiento estricto de normas SOLAS y reglamentos internacionales de seguridad marítima.' },
    { icon: Users, title: 'Excelencia Técnica', desc: 'Ingenieros navales calificados con experiencia en sistemas de propulsión y maquinaria naval.' },
    { icon: Clock, title: 'Puntualidad', desc: 'Entrega en tiempo y forma para minimizar el tiempo de inactividad de su flota.' },
    { icon: Leaf, title: 'Medio Ambiente', desc: 'Cumplimiento MARPOL y prácticas de ingeniería respetuosas con el ecosistema marino.' },
]

function useReveal(ref: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el, i) =>
                        setTimeout(() => el.classList.add('visible'), i * 110)
                    )
                }
            })
        }, { threshold: 0.08 })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [ref])
}

export default function Nosotros() {
    const ref = useRef<HTMLElement>(null)
    useReveal(ref)

    return (
        /* SECCIÓN BLANCA */
        <section id="nosotros" ref={ref} className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header centrado */}
                <div className="reveal text-center mb-16">
                    <p className="text-[#1B4FD8] text-xs font-bold tracking-[.12em] uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-8 h-0.5 bg-[#1B4FD8] rounded" /> Quiénes somos <span className="w-8 h-0.5 bg-[#1B4FD8] rounded" />
                    </p>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-[#0D1B3E] mb-4 tracking-tight leading-tight">
                        Más de una década de liderazgo{' '}
                        <span className="gradient-text">en ingeniería naval</span>
                    </h2>
                    <p className="text-[#637BA8] text-base leading-relaxed max-w-xl mx-auto">
                        En INRENAV somos especialistas en ingeniería y representaciones navales,
                        con estándares internacionales de calidad y seguridad.
                    </p>
                </div>

                {/* Grid imagen + texto */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">

                    {/* Imagen */}
                    <div className="reveal-left relative">
                        <div className="rounded-2xl overflow-hidden shadow-xl shadow-blue-900/10 border border-blue-100">
                            <img src="/inerva_img3.jpg" alt="Equipo INRENAV"
                                className="w-full h-[420px] object-cover" />
                        </div>
                        {/* floating badge */}
                        <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl shadow-blue-900/15 px-6 py-5 border border-blue-100">
                            <div className="text-4xl font-black text-[#1B4FD8] leading-none">15<span className="text-2xl">+</span></div>
                            <div className="text-xs text-[#637BA8] font-medium mt-1">Años de experiencia<br />en el sector naval</div>
                        </div>
                        <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg shadow-blue-900/10 px-4 py-3 border border-blue-100 flex items-center gap-2">
                            <ShieldCheck size={18} className="text-[#1B4FD8]" />
                            <div>
                                <div className="text-xs font-bold text-[#0D1B3E]">Calidad Certificada</div>
                                <div className="text-[11px] text-[#1B4FD8]">ISO 9001:2015</div>
                            </div>
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="reveal-right">
                        <div className="w-12 h-1 bg-gradient-to-r from-[#1B4FD8] to-[#4DA6FF] rounded mb-5" />
                        <h3 className="text-3xl font-extrabold text-[#0D1B3E] mb-4 leading-snug tracking-tight">
                            Precisión y confianza en cada proyecto naval
                        </h3>
                        <p className="text-[#637BA8] leading-relaxed mb-4 text-sm">
                            En <span className="font-semibold text-[#1B4FD8]">INRENAV</span> brindamos soluciones integrales para
                            la reparación, mantenimiento y modernización de embarcaciones, cumpliendo los más altos estándares internacionales.
                        </p>
                        <p className="text-[#637BA8] leading-relaxed mb-8 text-sm">
                            Contamos con ingenieros navales y técnicos especializados comprometidos con la seguridad,
                            eficiencia y operatividad de cada embarcación. Representamos a fabricantes líderes a nivel mundial.
                        </p>

                        {/* Misión / Visión */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { Icon: Target, title: 'Misión', text: 'Proveer soluciones de ingeniería naval con los más altos estándares de calidad y seguridad.' },
                                { Icon: Telescope, title: 'Visión', text: 'Ser la empresa líder en ingeniería naval y representaciones en la región.' },
                            ].map(({ Icon, title, text }) => (
                                <div key={title} className="bg-[#EEF5FF] rounded-2xl p-5 border border-blue-100">
                                    <Icon size={24} className="text-[#1B4FD8] mb-3" />
                                    <div className="font-bold text-[#0D1B3E] text-sm mb-1">{title}</div>
                                    <p className="text-[#637BA8] text-xs leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Valores */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {values.map(({ icon: Icon, title, desc }, i) => (
                        <div key={title} className="reveal bg-white border border-blue-100 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-200 transition-all duration-300"
                            style={{ transitionDelay: `${i * 80}ms` }}>
                            <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] border border-blue-100 flex items-center justify-center mx-auto mb-4">
                                <Icon size={22} className="text-[#1B4FD8]" />
                            </div>
                            <div className="font-bold text-[#0D1B3E] text-sm mb-2">{title}</div>
                            <p className="text-[#637BA8] text-xs leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
