import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-6 backdrop-blur-sm">
                        La plataforma #1 para academias de baile
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    La tecnología que hace <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                        crecer tu academia
                    </span>
                </motion.h1>

                <motion.p
                    className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Automatiza pagos, gestiona alumnos y profesionaliza tu escuela de baile con la plataforma premium líder diseñada para el éxito operativo.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(10,132,255,0.4)] transition-all duration-300"
                    >
                        Comenzar Ahora — Es gratis
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Play size={20} className="fill-white group-hover:scale-110 transition-transform" />
                        Ver Demo
                    </motion.button>
                </motion.div>

                {/* Dashboard Preview / Abstract Image */}
                <motion.div
                    className="mt-20 relative rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-primary/20"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-900 relative">
                        {/* Placeholder for dashboard image or generic gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-600">
                            <div className="text-center">
                                <div className="w-full h-full absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                                <span className="relative z-10 text-lg">Dashboard Preview Interface</span>
                            </div>
                        </div>
                    </div>
                    {/* Glow effect behind */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-20 -z-10"></div>
                </motion.div>

            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none opacity-50"></div>
        </section>
    );
}
