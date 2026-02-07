import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "/mes",
        description: "Para pequeños o independientes empezando su camino.",
        features: ["Hasta 15 alumnos", "Gestión de horarios", "Asistencia digital", "Pagos manuales"],
        cta: "Empezar Gratis",
        popular: false
    },
    {
        name: "Growth",
        price: "$19",
        period: "/mes",
        fee: "+ $1.50/alumno",
        description: "Para academias en crecimiento. Automatiza cobros y crece sin límites.",
        features: ["Alumnos ilimitados", "Integración con Pasarelas", "Facturación automática", "App para padres"],
        cta: "Prueba 14 Días Gratis",
        popular: true
    },
    {
        name: "Enterprise",
        price: "$49",
        period: "/mes",
        fee: "+ $1.00/alumno",
        description: "Funcionalidades a medida de grandes instituciones.",
        features: ["Todo lo de Growth", "Análisis con IA", "Multi-sede (Sincronizado)", "Soporte prioritario 24/7"],
        cta: "Contactar Ventas",
        popular: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Planes para cada etapa</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Escala tu academia sin complicaciones técnicas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5'} flex flex-col h-full`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Más Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                    <span className="text-gray-400 ml-1">{plan.period}</span>
                                </div>
                                {plan.fee && <p className="text-sm text-gray-400">{plan.fee}</p>}
                                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="flex-1 mb-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-blue-400'}`} />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${plan.popular
                                    ? 'bg-primary text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/30'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
