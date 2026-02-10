import React from 'react';

const Footer = () => {
    return (
        <footer className="py-24 border-t border-border-base bg-[#0D0D0D]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-8">
                            <span className="material-symbols-outlined text-primary-blue text-3xl">electric_bolt</span>
                            <span className="text-2xl font-bold tracking-tighter text-white">DanceFlow</span>
                        </div>
                        <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-light">
                            El copiloto tecnológico de las artes escénicas. Ayudamos a directores a digitalizar su pasión con datos y simplicidad.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-11 h-11 rounded-full bg-container-dark border border-border-base flex items-center justify-center hover:border-primary-blue transition-colors" href="#">
                                <span className="material-symbols-outlined text-xl text-slate-400">public</span>
                            </a>
                            <a className="w-11 h-11 rounded-full bg-container-dark border border-border-base flex items-center justify-center hover:border-primary-blue transition-colors" href="#">
                                <span className="material-symbols-outlined text-xl text-slate-400">alternate_email</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-white mb-8 tracking-tight">Producto</h5>
                        <ul className="space-y-4 text-sm text-slate-500 font-light">
                            <li><a className="hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>Funciones</a></li>
                            <li><a className="hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>Precios</a></li>
                            <li><a className="hover:text-white transition-colors cursor-pointer" href="#">Próximamente</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-white mb-8 tracking-tight">Compañía</h5>
                        <ul className="space-y-4 text-sm text-slate-500 font-light">
                            <li><a className="hover:text-white transition-colors" href="#">Sobre Nosotros</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-10 border-t border-border-base flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-slate-600 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} DanceFlow. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a className="hover:text-slate-300 transition-colors" href="#">Términos</a>
                        <a className="hover:text-slate-300 transition-colors" href="#">Cookies</a>
                        <a className="hover:text-slate-300 transition-colors" href="#">Seguridad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
