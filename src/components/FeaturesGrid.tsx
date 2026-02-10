import React from 'react';

const FeaturesGrid = () => {
    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Adiós al caos administrativo</h2>
                    <p className="text-slate-400 text-lg">Sabemos lo que cuesta mantener una academia en movimiento.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-10 rounded-3xl glass-card">
                        <div className="w-12 h-12 rounded-2xl bg-bg-dark border border-border-base flex items-center justify-center mb-8">
                            <span className="material-symbols-outlined text-primary-blue text-2xl">trending_down</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Fuga de Capital</h3>
                        <p className="text-slate-400 leading-relaxed font-light">Controla cada centavo y evita que las mensualidades vencidas afecten tu flujo de caja de forma silenciosa.</p>
                    </div>
                    <div className="p-10 rounded-3xl glass-card">
                        <div className="w-12 h-12 rounded-2xl bg-bg-dark border border-border-base flex items-center justify-center mb-8">
                            <span className="material-symbols-outlined text-primary-blue text-2xl">person_off</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Deserción de Alumnos</h3>
                        <p className="text-slate-400 leading-relaxed font-light">Detecta la falta de asistencia a tiempo y mantén a tus estudiantes motivados con seguimiento personalizado.</p>
                    </div>
                    <div className="p-10 rounded-3xl glass-card">
                        <div className="w-12 h-12 rounded-2xl bg-bg-dark border border-border-base flex items-center justify-center mb-8">
                            <span className="material-symbols-outlined text-primary-blue text-2xl">layers</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Caos Operativo</h3>
                        <p className="text-slate-400 leading-relaxed font-light">Deja de usar planillas infinitas. Organiza horarios, profesores y salones en una interfaz simple y veloz.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
