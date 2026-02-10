import React from 'react';

const Students = () => {
    return (
        <section className="py-32" id="students">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-mint-green/20 text-primary-blue text-xs font-bold mb-6 uppercase tracking-wider">
                            <span className="material-symbols-outlined text-base">school</span>
                            Base de Datos Centralizada
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Conoce a tus <span className="text-primary-blue">estudiantes</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Accede a la información completa de cada alumno: historial de pagos, asistencia, nivel técnico y observaciones de los profesores.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Perfiles detallados con historial',
                                'Seguimiento de asistencia en tiempo real',
                                'Alertas de pagos pendientes',
                                'Comunicación integrada vía WhatsApp'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-300">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-blue/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary-blue text-sm">check</span>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary-blue/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative rounded-[2.5rem]">
                            <img
                                src="/images/students.png"
                                alt="Directorio de Estudiantes"
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Students;
