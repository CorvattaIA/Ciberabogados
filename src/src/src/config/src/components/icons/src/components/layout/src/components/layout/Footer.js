import React from 'react';

// Footer Component: Displays bottom section with links and copyright.
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">ciberabogados</h4>
                        <p className="text-gray-400 text-sm">Tu aliado legal inteligente: soluciones legales, contables y de seguros, accesibles y eficientes.</p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h5 className="text-md font-semibold mb-4">Enlaces rápidos</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" onClick={(e)=>{e.preventDefault(); /* Potentially navigate home */}} className="text-gray-400 hover:text-white">Inicio</a></li>
                            <li><a href="#" onClick={(e)=>{e.preventDefault(); /* Potentially open help modal */}} className="text-gray-400 hover:text-white">Ayuda</a></li>
                        </ul>
                    </div>
                    {/* Legal Links */}
                    <div>
                        <h5 className="text-md font-semibold mb-4">Legal</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">Términos y condiciones</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Política de privacidad</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Política de cookies</a></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h5 className="text-md font-semibold mb-4">Contacto</h5>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Bogotá, Colombia</li>
                            <li><a href="mailto:ssolucionesdeia@gmail.com" className="hover:text-white break-all">ssolucionesdeia@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                {/* Copyright */}
                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} ciberabogados. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
