import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <header className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 hero-gradient -z-10"></div>
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-container-dark border border-border-base text-slate-300 text-[11px] font-bold mb-8 uppercase tracking-widest"
                >
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary-blue animate-pulse"></span>
                    Versión 1.0.0 disponible
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black mb-8 max-w-5xl mx-auto leading-[0.95] text-white"
                >
                    La tecnología que hace <span className="text-transparent bg-primary-blue bg-clip-text">crecer</span> tu academia
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Automatiza pagos, gestiona alumnos y profesionaliza tu escuela de baile con la plataforma premium líder diseñada para el éxito operativo.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="w-full sm:w-auto bg-primary-blue text-white text-base font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary-blue/10">
                        Comenzar Ahora — Es gratis
                    </button>
                    <button className="w-full sm:w-auto bg-container-dark border border-border-base text-white text-base font-bold px-10 py-4 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">play_circle</span>
                        Ver Demo
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24 rounded-3xl border border-border-base bg-container-dark p-2 shadow-2xl relative group"
                >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary-blue/5 blur-[120px] -z-10"></div>
                    <img
                        alt="DanceFlow Dashboard Preview"
                        className="rounded-2xl w-full object-cover aspect-[21/9] grayscale-[0.2]"
                        src="/images/dashboard-laptop.png"
                    />
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
