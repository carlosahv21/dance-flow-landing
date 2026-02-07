import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-background/60 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                            DanceFlow
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium">Funciones</button>
                            <button onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium">Precios</button>
                            <button onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium">Testimonios</button>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white font-medium text-sm">Log In</a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(10,132,255,0.5)] transition-shadow duration-300"
                        >
                            Comenzar Ahora
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button onClick={(e) => { e.preventDefault(); setIsOpen(false); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-left w-full">Funciones</button>
                            <button onClick={(e) => { e.preventDefault(); setIsOpen(false); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-left w-full">Precios</button>
                            <button onClick={(e) => { e.preventDefault(); setIsOpen(false); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-left w-full">Testimonios</button>
                            <div className="pt-4 flex flex-col space-y-3">
                                <a href="#" className="text-center text-gray-300 hover:text-white font-medium">Log In</a>
                                <button className="w-full bg-primary text-white px-4 py-2 rounded-full font-medium">
                                    Comenzar Ahora
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
