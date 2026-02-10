import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = {
        free: { monthly: 0, annual: 0, extraStudent: 0 },
        growth: {
            monthly: 19,
            annual: 15,
            totalAnnual: 180,
            extraStudent: 1.50 // Actualizado a $1.5
        },
        enterprise: {
            monthly: 49,
            annual: 39,
            totalAnnual: 468,
            extraStudent: 1.00 // Actualizado a $1.0
        }
    };

    return (
        <section className="py-20 relative" id="pricing">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Planes para cada etapa</h2>
                    <p className="text-slate-400 text-lg mb-10">Escala tu academia sin complicaciones técnicas.</p>

                    {/* Switch Mensual/Anual */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-4">
                            <span className={`text-sm ${!isAnnual ? 'text-white font-bold' : 'text-slate-500'}`}>Mensual</span>
                            <button
                                onClick={() => setIsAnnual(!isAnnual)}
                                className="w-14 h-7 bg-container-dark border border-border-base rounded-full relative p-1 transition-colors hover:border-primary-blue"
                            >
                                <motion.div
                                    animate={{ x: isAnnual ? 28 : 0 }}
                                    className="w-5 h-5 bg-primary-blue rounded-full"
                                />
                            </button>
                            <span className={`text-sm ${isAnnual ? 'text-white font-bold' : 'text-slate-500'}`}>Anual</span>
                            <span className="bg-primary-blue/10 text-primary-blue text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                                Ahorra 20%
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Plan Free */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl glass-card flex flex-col border border-border-base shadow-lg"
                    >
                        <h3 className="text-xl font-bold mb-2 text-white">Free</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-black text-white">$0</span>
                            <span className="text-slate-500 text-sm">/mes</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-10 font-light">Ideal para instructores independientes. Controla tus clases y asistencia sin costo.</p>
                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Hasta 15 alumnos</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Gestión de horarios</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300 italic">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Asistencia vía Web</li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl border border-border-base hover:bg-white/5 transition-colors font-bold text-sm text-white">
                            Empezar Gratis
                        </button>
                    </motion.div>

                    {/* Plan Growth */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-container-dark border-2 border-primary-blue relative flex flex-col shadow-[0_0_40px_rgba(10,132,255,0.1)] transform md:scale-105 z-10"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-blue text-white text-[9px] font-black px-5 py-1.5 rounded-full tracking-widest uppercase">Más Popular</div>

                        <div className="text-primary-blue text-[11px] font-bold mb-2 flex items-center gap-1 justify-center">
                            <span className="material-symbols-outlined text-sm">bolt</span>
                            Ahorra hasta 10h semanales de gestión
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
                        <div className="flex flex-col mb-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black text-white">
                                    ${isAnnual ? plans.growth.annual : plans.growth.monthly}
                                </span>
                                <span className="text-slate-500 text-sm">/mes</span>
                            </div>
                            {isAnnual && (
                                <span className="text-primary-blue text-[10px] font-bold mt-1 uppercase">
                                    Pago único de ${plans.growth.totalAnnual}/año
                                </span>
                            )}
                        </div>

                        {/* Costo por alumno */}
                        <div className="bg-white/5 rounded-xl p-3 mb-8 border border-white/10 text-center">
                            <p className="text-white font-bold text-sm">+${plans.growth.extraStudent}</p>
                            <p className="text-slate-400 text-[10px]">por alumno adicional al mes</p>
                        </div>

                        <ul className="space-y-5 mb-10 flex-grow text-left">
                            <li className="flex items-center gap-3 text-sm text-slate-300 font-bold text-white">
                                <span className="material-symbols-outlined text-primary-blue text-lg">smartphone</span>
                                Acceso total App Mobile</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Alumnos ilimitados</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Gestión de pagos locales</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Notificaciones de cobro</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Personalización de marca</li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl bg-primary-blue hover:brightness-110 transition-all font-bold text-sm text-white shadow-lg shadow-primary-blue/20">
                            Prueba 14 Días Gratis
                        </button>
                    </motion.div>

                    {/* Plan Enterprise */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl glass-card flex flex-col border border-border-base"
                    >
                        <h3 className="text-xl font-bold mb-2 text-white">Enterprise</h3>
                        <div className="flex flex-col mb-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black text-white">
                                    ${isAnnual ? plans.enterprise.annual : plans.enterprise.monthly}
                                </span>
                                <span className="text-slate-500 text-sm">/mes</span>
                            </div>
                            {isAnnual && (
                                <span className="text-primary-blue text-[10px] font-bold mt-1 uppercase">
                                    Pago único de ${plans.enterprise.totalAnnual}/año
                                </span>
                            )}
                        </div>

                        <div className="bg-white/5 rounded-xl p-3 mb-8 border border-white/10 text-center">
                            <p className="text-white font-bold text-sm">+${plans.enterprise.extraStudent}</p>
                            <p className="text-slate-400 text-[10px]">por alumno adicional al mes</p>
                        </div>

                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-sm text-slate-300 font-bold">
                                <span className="material-symbols-outlined text-primary-blue text-lg">analytics</span>
                                Reportes de asistencia</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Todo lo de Growth</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Onboarding y migración</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Soporte prioritario WhatsApp</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300 font-bold">
                                <span className="material-symbols-outlined text-primary-blue text-lg">new_releases</span>
                                Acceso anticipado</li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl border border-border-base hover:bg-white/5 transition-colors font-bold text-sm text-white">
                            Contactar Ventas
                        </button>
                    </motion.div>
                </div>

                {/* Sello de Confianza y Notas */}
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    <p className="text-slate-500 text-[10px] leading-relaxed italic">
                        * Los alumnos adicionales se calculan mensualmente. En planes anuales,
                        la base de la plataforma se paga por adelantado y los excedentes de alumnos se facturan cada 30 días.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2 pt-4">
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="material-symbols-outlined text-primary-blue text-sm">verified_user</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Garantía de Satisfacción</span>
                        </div>
                        <p className="text-slate-500 text-[11px]">Sin contratos forzosos. Cancela o cambia de plan cuando quieras.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;