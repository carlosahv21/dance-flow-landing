import React from 'react';

const Pricing = () => {
    return (
        <section className="py-32 relative" id="pricing">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Planes para cada etapa</h2>
                    <p className="text-slate-400 text-lg">Escala tu academia sin complicaciones técnicas.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-10 rounded-3xl glass-card flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-white">Free</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-black text-white">$0</span>
                            <span className="text-slate-500 text-sm">/mes</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-10 font-light">Para grupos pequeños o independientes empezando su camino.</p>
                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Hasta 15 alumnos</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Gestión de horarios</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Asistencia digital</li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl border border-border-base hover:bg-white/5 transition-colors font-bold text-sm text-white">
                            Empezar Gratis
                        </button>
                    </div>
                    <div className="p-10 rounded-3xl bg-container-dark border-2 border-primary-blue relative flex flex-col shadow-[0_0_40px_rgba(10,132,255,0.1)]">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-blue text-white text-[9px] font-black px-5 py-1.5 rounded-full tracking-widest">MÁS POPULAR</div>
                        <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-black text-white">$19</span>
                            <span className="text-slate-500 text-sm">/mes</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-10 font-light">Potencia tu crecimiento con automatización de cobros y portal dedicado.</p>
                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Alumnos ilimitados</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Integración PSE/Pagos</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Facturación electrónica</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Portal para padres</li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl bg-primary-blue hover:brightness-110 transition-all font-bold text-sm text-white shadow-lg shadow-primary-blue/20">
                            Prueba 14 Días Gratis
                        </button>
                    </div>
                    <div className="p-10 rounded-3xl glass-card flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-white">Enterprise</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-black text-white">$49</span>
                            <span className="text-slate-500 text-sm">/mes</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-10 font-light">Gestión multisede y análisis de datos avanzado para grandes corporaciones.</p>
                        <ul className="space-y-5 mb-10 flex-grow">
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Todo lo de Growth</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Analítica con IA</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Multi-sede (Sincronizado)</li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                Soporte prioritario 24/7</li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl border border-border-base hover:bg-white/5 transition-colors font-bold text-sm text-white">
                            Contactar Ventas
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
