import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Users, LayoutDashboard, ArrowRight } from 'lucide-react';

const features = [
    {
        title: "Fuga de Capital",
        description: "Controla cada centavo y evita cuentas 'traspapeladas'. Identifica a dónde va tu flujo de caja de forma silenciosa.",
        icon: Wallet,
    },
    {
        title: "Deserción de Alumnos",
        description: "Detecta la falta de asistencia a tiempo y mantén a tus estudiantes motivados con seguimiento personalizado.",
        icon: Users,
    },
    {
        title: "Caos Operativo",
        description: "Deja de usar planillas infinitas. Organiza horarios, profesores y salones en una interfaz simple y visual.",
        icon: LayoutDashboard,
    }
];

export default function FeaturesGrid() {
    return (
        <section id="features" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Adiós al caos administrativo
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Sabemos lo que cuesta mantener una academia en movimiento.
                        DanceFlow elimina los obstáculos que frenan tu crecimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:border-primary/30 transition-colors"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <feature.icon className="text-[#0A84FF] h-6 w-6" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors cursor-pointer">
                                    <span>Saber más</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
