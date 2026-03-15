import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, MessageCircle, Send, Lock } from 'lucide-react'

const contactItems = [
    { icon: MapPin, title: 'Dirección', info: 'Av. Gambetta 2150, Callao, Perú', sub: 'Puerto del Callao | Lima, Perú' },
    { icon: Phone, title: 'Teléfono', info: '+51 1 429-XXXX', sub: '+51 987 654 321 (WhatsApp)' },
    { icon: Mail, title: 'Correo', info: 'contacto@inrenav.com.pe', sub: 'operaciones@inrenav.com.pe' },
    { icon: Clock, title: 'Horario', info: 'Lun–Vie: 8:00am – 6:00pm', sub: 'Sáb: 8:00am – 1:00pm | Urgencias 24/7' },
]

const socials = [
    { icon: Linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: Facebook, label: 'Facebook', color: '#1877F2' },
    { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
]

export default function Contacto() {
    const ref = useRef<HTMLElement>(null)
    const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' })
    const [sent, setSent] = useState(false)

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

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    return (
        /* SECCIÓN CELESTE */
        <section id="contacto" ref={ref}
            className="py-24"
            style={{ background: 'linear-gradient(160deg,#EEF5FF 0%,#E0EEFF 100%)' }}>
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="reveal text-center mb-16">
                    <p className="text-[#1B4FD8] text-xs font-bold tracking-[.12em] uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-8 h-0.5 bg-[#1B4FD8] rounded" /> Contáctanos <span className="w-8 h-0.5 bg-[#1B4FD8] rounded" />
                    </p>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-[#0D1B3E] mb-4 tracking-tight leading-tight">
                        ¿Listo para trabajar{' '}
                        <span className="gradient-text">con nosotros?</span>
                    </h2>
                    <p className="text-[#637BA8] text-base max-w-md mx-auto leading-relaxed">
                        Cuéntanos sobre tu proyecto y nuestro equipo te preparará una propuesta personalizada.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

                    {/* Info column */}
                    <div className="reveal-left lg:col-span-2 flex flex-col gap-4">
                        {contactItems.map(({ icon: Icon, title, info, sub }) => (
                            <div key={title}
                                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                <div className="w-11 h-11 rounded-xl bg-[#EEF5FF] border border-blue-100 flex items-center justify-center flex-shrink-0">
                                    <Icon size={20} className="text-[#1B4FD8]" />
                                </div>
                                <div>
                                    <div className="text-[#1B4FD8] text-xs font-bold mb-0.5">{title}</div>
                                    <div className="text-[#0D1B3E] font-semibold text-sm">{info}</div>
                                    <div className="text-[#637BA8] text-xs mt-0.5">{sub}</div>
                                </div>
                            </div>
                        ))}

                        {/* Socials */}
                        <div className="flex gap-3 mt-2">
                            {socials.map(({ icon: Icon, label, color }) => (
                                <a key={label} href="#"
                                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:-translate-y-1 hover:shadow-md"
                                    style={{ background: `${color}15`, borderColor: `${color}30`, color }}
                                    aria-label={label}>
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form column */}
                    <div className="reveal-right lg:col-span-3">
                        <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg shadow-blue-900/8">
                            {sent ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send size={28} className="text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0D1B3E] mb-3">¡Mensaje enviado!</h3>
                                    <p className="text-[#637BA8] leading-relaxed text-sm mb-8">
                                        Gracias por contactarnos. Un especialista de INRENAV se comunicará contigo en las próximas horas.
                                    </p>
                                    <button onClick={() => setSent(false)}
                                        className="btn-primary px-8 py-3">
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-7">
                                        Solicita una cotización gratuita
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <Field label="Nombre completo *">
                                            <input required name="nombre" value={form.nombre} onChange={change}
                                                placeholder="Juan Pérez"
                                                className="w-full px-4 py-3.5 border border-[#D0DCF0] rounded-xl text-sm text-[#0D1B3E] outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all placeholder:text-[#A0B1C8]" />
                                        </Field>
                                        <Field label="Empresa">
                                            <input name="empresa" value={form.empresa} onChange={change}
                                                placeholder="Tu empresa"
                                                className="w-full px-4 py-3.5 border border-[#D0DCF0] rounded-xl text-sm text-[#0D1B3E] outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all placeholder:text-[#A0B1C8]" />
                                        </Field>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <Field label="Correo electrónico *">
                                            <input required type="email" name="email" value={form.email} onChange={change}
                                                placeholder="correo@empresa.com"
                                                className="w-full px-4 py-3.5 border border-[#D0DCF0] rounded-xl text-sm text-[#0D1B3E] outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all placeholder:text-[#A0B1C8]" />
                                        </Field>
                                        <Field label="Teléfono / WhatsApp">
                                            <input type="tel" name="telefono" value={form.telefono} onChange={change}
                                                placeholder="+51 987 654 321"
                                                className="w-full px-4 py-3.5 border border-[#D0DCF0] rounded-xl text-sm text-[#0D1B3E] outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all placeholder:text-[#A0B1C8]" />
                                        </Field>
                                    </div>

                                    <div className="mb-4">
                                        <Field label="Servicio de interés *">
                                            <select required name="servicio" value={form.servicio} onChange={change}
                                                className="w-full px-4 py-3.5 border border-[#D0DCF0] rounded-xl text-sm text-[#0D1B3E] outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all bg-white cursor-pointer">
                                                <option value="">Seleccione un servicio...</option>
                                                <option value="reparacion">Reparación de Maquinaria Naval</option>
                                                <option value="obra-viva">Trabajos en Obra Viva</option>
                                                <option value="electrico">Sistemas Eléctricos y Electrónicos</option>
                                                <option value="tuberias">Sistemas de Tuberías y Casco</option>
                                                <option value="repuestos">Representaciones Técnicas / Repuestos</option>
                                                <option value="inspeccion">Inspección y Certificación</option>
                                                <option value="otro">Otro servicio</option>
                                            </select>
                                        </Field>
                                    </div>

                                    <div className="mb-7">
                                        <Field label="Descripción del trabajo *">
                                            <textarea required name="mensaje" value={form.mensaje} onChange={change}
                                                placeholder="Describe brevemente el tipo de embarcación, el problema o trabajo requerido..."
                                                rows={4}
                                                className="w-full px-4 py-3.5 border border-[#D0DCF0] rounded-xl text-sm text-[#0D1B3E] outline-none focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/10 transition-all resize-none placeholder:text-[#A0B1C8] font-[Inter]" />
                                        </Field>
                                    </div>

                                    <button type="submit" className="btn-primary w-full justify-center py-4 text-base gap-2">
                                        <Send size={17} />
                                        Enviar solicitud
                                    </button>

                                    <p className="flex items-center justify-center gap-1.5 text-xs text-[#A0B1C8] mt-4">
                                        <Lock size={12} /> Tu información es confidencial y no será compartida con terceros.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <label className="block text-xs font-semibold text-[#637BA8] mb-2">{label}</label>
            {children}
        </div>
    )
}
