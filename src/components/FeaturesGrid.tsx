import React from 'react';
import { motion } from 'framer-motion';

const FeaturesGrid = () => {
    const features = [
        {
            icon: 'trending_down',
            title: 'Fuga de Capital',
            description: 'Controla cada centavo y evita que las mensualidades vencidas afecten tu flujo de caja de forma silenciosa. Evita que la morosidad invisible drene la rentabilidad de tu salón.'
        },
        {
            icon: 'person_off',
            title: 'Deserción de Alumnos',
            description: 'Anticípate al abandono. Identifica alumnos en riesgo y motívalos mostrando su progreso real, antes de que dejen de asistir.'
        },
        {
            icon: 'layers',
            title: 'Caos Operativo',
            description: 'Cambia el caos de los cuadernos y grupos de WhatsApp por un centro de mando digital. Gestiona horarios y salones en segundos.'
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Adiós al caos administrativo</h2>
                    <p className="text-slate-400 text-lg">Sabemos lo que cuesta mantener una academia en movimiento.</p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-3xl glass-card"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-bg-dark border border-border-base flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-primary-blue text-2xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-light">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
