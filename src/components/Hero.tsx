import { useEffect, useRef } from 'react'

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null)

    // Parallax suave en scroll
    useEffect(() => {
        const onScroll = () => {
            if (heroRef.current) {
                heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.4}px`
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url(/inerva_img1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
            }}
        >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E]/90 via-[#0D1B3E]/75 to-[#1A2F5A]/85" />

            {/* Grid lines */}
            <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'linear-gradient(rgba(77,166,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(77,166,255,.08) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

            {/* Blobs decorativos */}
            <div className="absolute top-1/4 right-12 w-72 h-72 rounded-full border border-blue-400/20 animate-pulse-slow hidden lg:block" />
            <div className="absolute top-1/4 right-16 w-48 h-48 rounded-full border border-blue-400/30 animate-pulse-slow hidden lg:block" style={{ animationDelay: '.4s' }} />

            {/* Contenido */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                {/* ── Texto ── */}
                <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-blue-400/30 rounded-full px-4 py-2 mb-7
                          text-blue-300 text-xs font-bold tracking-widest uppercase backdrop-blur-sm"
                        style={{ animation: 'fadeInUp .7s ease forwards' }}>
                        <span className="w-2 h-2 bg-blue-400 rounded-full" style={{ animation: 'pulse-slow 2s infinite' }} />
                        Ingeniería &amp; Representaciones Navales
                    </div>

                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight mb-4"
                        style={{ animation: 'fadeInUp .7s .1s ease both' }}>
                        Soluciones de{' '}
                        <span className="gradient-text">Ingeniería</span>
                        <br />Naval de{' '}
                        <span className="text-blue-400">Alta Precisión</span>
                    </h1>

                    <p className="text-white/70 text-base leading-relaxed mb-6 max-w-lg"
                        style={{ animation: 'fadeInUp .7s .2s ease both' }}>
                        Líderes en reparaciones, mantenimiento y representaciones navales.
                        Garantizamos la operatividad de su flota con los más altos estándares de calidad.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center sm:justify-start" style={{ animation: 'fadeInUp .7s .3s ease both' }}>
                        <button onClick={() => scrollTo('contacto')}
                            className="px-8 py-4 text-base font-bold text-white bg-[#1B4FD8] rounded-full hover:bg-[#1640b8] hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Solicitar Cotización
                        </button>
                        <button onClick={() => scrollTo('servicios')}
                            className="px-8 py-4 text-base font-bold text-white border-2 border-white rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Ver Servicios
                        </button>
                    </div>


                </div>

                {/* ── Imagen ── */}
                <div className="hidden lg:flex justify-center relative">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-3xl"
                        style={{ background: 'radial-gradient(circle,rgba(27,79,216,.3) 0%,transparent 70%)', filter: 'blur(30px)' }} />

                    <div className="relative w-full max-w-xl animate-float">
                        <div className="rounded-2xl overflow-hidden border border-blue-400/30 shadow-2xl">
                            <img src="/inerva_img2.jpg" alt="Reparación naval" className="w-full h-[500px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>



            <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes pulse-slow { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.06)} }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
        </section>
    )
}
