import React from 'react';
import { motion } from 'framer-motion';

const SuccessFeatures = () => {
    return (
        <section className="py-20" id="features">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-xs font-bold mb-6 uppercase tracking-wider">
                            <span className="material-symbols-outlined text-base">auto_awesome</span>
                            Funcionalidad Completa
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Funciones diseñadas para el <span className="text-primary-blue">éxito</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Más que un CRM, somos tu copiloto tecnológico. Tú te enfocas en el arte, nosotros en los procesos.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Digitaliza tu cobranza y genera recibos automáticos. Mantén el historial de pagos organizado sin depender de cuadernos o WhatsApp.',
                                'Transforma el esfuerzo en métricas. Análisis de crecimiento técnico para que cada bailarín visualice su progreso y se mantenga motivado.',
                                'Tu propia App de comunicación y gestión. Centraliza recibos, avisos y seguimiento para proyectar una imagen profesional.',
                                'Gestiona desde cualquier lugar con nuestra App nativa para iOS y Android'
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-slate-300"
                                >
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-blue/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary-blue text-sm">check</span>
                                    </span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-primary-blue/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative rounded-[2.5rem]">
                            <img
                                src="/images/mobile-app-iso.png"
                                alt="Dance Performance"
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SuccessFeatures;
