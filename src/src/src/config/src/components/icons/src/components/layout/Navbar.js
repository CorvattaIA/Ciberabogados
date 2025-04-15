import React from 'react';

// Navbar Component: Displays top navigation bar.
// Props:
// - showMessage: Function to display temporary messages.
// - navigateTo: Function to change the application view.
const Navbar = ({ showMessage, navigateTo }) => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo/Brand Name - Clickable to navigate home */}
                        <button onClick={() => navigateTo('intro')} className="text-2xl font-bold text-emerald-600 focus:outline-none">
                            ciberabogados
                        </button>
                    </div>
                    {/* Desktop Navigation Links */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                        <button onClick={() => navigateTo('intro')} className="text-gray-700 hover:text-emerald-600 inline-flex items-center px-1 pt-1 text-sm font-medium">Inicio</button>
                        <button onClick={() => showMessage('Funcionalidad futura: Ayuda / FAQ', 'info')} className="text-gray-700 hover:text-emerald-600 inline-flex items-center px-1 pt-1 text-sm font-medium">Ayuda</button>
                         {/* Login/Register button removed */}
                    </div>
                    {/* Mobile Menu Button (Placeholder) */}
                    <div className="sm:hidden flex items-center">
                        <button className="text-gray-500 hover:text-gray-700">
                            {/* Simple Menu Icon */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                        {/* Mobile menu dropdown would be implemented here */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
