import React from 'react';
import { CheckCircleIcon } from '../components/icons/Icons'; // Adjust path as needed

// Pricing Section Component: Displays the available service plans.
// Props:
// - showMessage: Function to display temporary messages (used for placeholder actions).
const PricingSectionServices = ({ showMessage }) => {
    // Helper function to format currency in Colombian Pesos (COP)
    const formatCOP = (amount) => `$${amount.toLocaleString('es-CO')} COP`;

    // Define the pricing tiers/service packages
    const tiers = [
        {
            id: 'diagnostico',
            name: "Diagnóstico inicial",
            price: 0,
            description: "Identifica tu necesidad y área legal.",
            features: [
                "Test interactivo guiado",
                "Identificación de área legal",
                "Recomendación de servicios",
            ],
            buttonText: "Iniciar diagnóstico",
            // Tries to find and click the main diagnostic button on the page
            buttonAction: () => {
                const button = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes('Iniciar diagnóstico'));
                button?.click();
            },
            bgColor: "bg-gray-100", // Style properties
            textColor: "text-gray-800",
            buttonClass: "bg-white text-emerald-700 border border-emerald-500 hover:bg-emerald-50"
        },
        {
            id: 'documentosIAConRevision',
            name: "Documentos IA + Revisión Experta",
            price: 99900, // Example price
            description: "Genera documentos estándar con validación humana.",
            features: [
                "Generación IA documentos estándar",
                "Revisión y ajuste por experto humano",
                "Entrega de versión final validada",
                "Activación de agente IA + Revisor",
            ],
            buttonText: "Requiere diagnóstico",
             buttonAction: () => { // Action navigates user to start the quiz
                const button = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes('Iniciar diagnóstico'));
                button?.click();
             },
            bgColor: "bg-emerald-600", // Style properties
            textColor: "text-white",
            buttonClass: "bg-white text-emerald-700 hover:bg-emerald-50",
            popular: true // Mark as popular
        },
         {
            id: 'analisisConsultaIA',
            name: "Análisis IA + Consulta Experta",
            price: 199900, // Example price
            description: "Análisis por IA complementado con asesoría humana.",
            features: [
                "Análisis predictivo / Inicio ODR / Gestión Trámite IA",
                "Videollamada con experto (30-45 min)",
                "Interpretación de resultados IA",
                "Asesoramiento estratégico",
                "Activación de agente IA + Experto",
            ],
            buttonText: "Requiere diagnóstico",
            buttonAction: () => { // Action navigates user to start the quiz
                const button = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes('Iniciar diagnóstico'));
                button?.click();
             },
            bgColor: "bg-gray-800", // Style properties
            textColor: "text-white",
            buttonClass: "bg-emerald-500 text-white hover:bg-emerald-600"
        },
         {
            id: 'casosComplejos',
            name: "Soluciones personalizadas",
            price: 0, // Custom pricing
            description: "Para casos complejos que requieren un equipo o enfoque a medida.",
            features: [
                "Análisis detallado del caso",
                "Propuesta de equipo experto (si aplica)",
                "Plan de acción y presupuesto a medida",
                "Activación de agentes IA avanzados/combinados",
            ],
            buttonText: "Contactar para cotización",
            // Action opens mail client to contact for quote
            buttonAction: () => { let mail = 'ssolucionesdeia@gmail.com'; window.location.href = `mailto:${mail}?subject=Cotizacion Caso Complejo`; },
            bgColor: "bg-yellow-100", // Style properties
            textColor: "text-yellow-800",
            buttonClass: "bg-yellow-500 text-white hover:bg-yellow-600"
        },
        // Removed separate "Revisión Experta" and "Consulta con Experto" tiers
    ];

    return (
        <section id="pricing-services" className="py-16 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Nuestros servicios y planes</h2>
                <p className="text-center text-gray-600 mb-12">Desde un diagnóstico gratuito hasta soluciones completas con IA y supervisión experta.</p>
                {/* Grid layout for pricing tiers */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch"> {/* Adjusted to 4 columns */}
                    {tiers.map((tier) => (
                        <div
                            key={tier.id} // Use unique id for key
                            className={`rounded-lg shadow-lg p-8 flex flex-col border ${tier.popular ? 'border-2 border-emerald-500' : 'border-gray-200'} ${tier.bgColor} ${tier.textColor}`}
                        >
                             {/* Popular Tier Badge */}
                             {tier.popular && <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full self-center mb-4 -mt-12">Recomendado</span>}
                            {/* Tier Name */}
                            <h3 className={`text-xl font-semibold text-center mb-2 ${tier.textColor === 'text-white' ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                            {/* Tier Description */}
                            <p className={`text-center mb-6 h-10 text-sm ${tier.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-500'}`}>{tier.description}</p>
                            {/* Tier Price */}
                            <div className="text-center mb-6">
                                <span className={`text-4xl font-extrabold ${tier.price === 0 ? 'text-emerald-500' : (tier.textColor === 'text-white' ? 'text-white' : 'text-gray-900')}`}>
                                    {tier.price === 0 ? 'Gratis' : formatCOP(tier.price)}
                                </span>
                                {/* Price Frequency/Details */}
                                {tier.price > 0 && <span className={`block text-sm ${tier.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-500'}`}> / por servicio</span>}
                                {tier.id === 'casosComplejos' && <span className="block text-sm text-yellow-600">Según cotización</span>}
                            </div>
                            {/* Tier Features List */}
                            <ul className={`space-y-3 mb-8 flex-grow text-sm ${tier.textColor === 'text-white' ? 'text-gray-100' : 'text-gray-600'}`}>
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircleIcon className={`flex-shrink-0 w-5 h-5 ${tier.textColor === 'text-white' ? 'text-emerald-300' : 'text-emerald-500'}`} />
                                        <span className="ml-3">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {/* Action Button */}
                            <button
                                onClick={tier.buttonAction}
                                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition duration-150 ease-in-out ${tier.buttonClass}`}
                            >
                                {tier.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
                 {/* Footer Note */}
                 <p className="text-center text-gray-500 mt-8 text-xs">* Los precios son indicativos y están en Pesos Colombianos (COP). IVA no incluido. Los servicios pagos requieren completar primero el diagnóstico gratuito.</p>
            </div>
        </section>
    );
};

export default PricingSectionServices; // Export the component
