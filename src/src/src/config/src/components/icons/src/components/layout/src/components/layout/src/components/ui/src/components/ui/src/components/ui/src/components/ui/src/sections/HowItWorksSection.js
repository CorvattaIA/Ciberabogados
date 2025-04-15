import React from 'react';
import { CogIcon } from '../components/icons/Icons'; // Adjust path as needed

// HowItWorksSection: Displays the steps of the service flow.
const HowItWorksSection = () => {
    const steps = [
        { number: 1, title: "Diagnóstico inicial", description: "Responde nuestro test inteligente para identificar el área legal de tu necesidad.", icon: "❓" },
        { number: 2, title: "Selecciona tu servicio", description: "Basado en el diagnóstico, elige el servicio específico que necesitas (generar doc, análisis, etc.).", icon: "🎯" },
        { number: 3, title: "Activación del agente IA", description: "Tu solicitud se envía al agente de IA especializado para su procesamiento.", icon: <CogIcon className="animate-spin-slow"/> },
        { number: 4, title: "Recibe tu solución", description: "El agente procesa tu caso y te entrega el resultado (documento, análisis, conexión) según lo configurado.", icon: "✅" },
    ];
    return (
        <section id="how-it-works" className="py-16 bg-white border-t border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">¿Cómo funciona nuestro flujo inteligente?</h2>
                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" style={{ zIndex: 0 }}></div>
                    {/* Grid for steps */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
                        {steps.map((step) => (
                            <div key={step.number} className="text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                {/* Step Number Bubble */}
                                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mx-auto mb-4 text-xl font-bold">{step.number}</div>
                                {/* Icon */}
                                <div className="text-4xl mb-2 h-10 flex items-center justify-center">{step.icon}</div>
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 h-14 flex items-center justify-center">{step.title}</h3>
                                {/* Description */}
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
