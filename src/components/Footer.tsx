import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                                DanceFlow
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Redefiniendo la administración de las artes escénicas a través de datos y una experiencia de usuario premium.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Producto</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Funciones</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Precios</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Móvil App</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Compañía</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-center gap-2">
                                <Mail size={16} /> carfred18@gmail.com
                            </li>
                        </ul>

                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} DanceFlow Inc. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400">Términos</a>
                        <a href="#" className="hover:text-gray-400">Cookies</a>
                        <a href="#" className="hover:text-gray-400">Seguridad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
