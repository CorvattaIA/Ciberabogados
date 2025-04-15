import React, { useState } from 'react';
import ServiceViewWrapper from '../components/ui/ServiceViewWrapper'; // Adjust path
import { ArrowLeftIcon, SendIcon } from '../components/icons/Icons'; // Adjust path

// ServiceSelectionView: Displays available services after the initial quiz.
// Props:
// - navigateTo: Function to change the main application view.
// - identifiedArea: The area of law suggested by the quiz.
// - handleServiceSelection: Function called when a service card button is clicked.
const ServiceSelectionView = ({ navigateTo, identifiedArea, handleServiceSelection }) => {
    // Define the list of services offered by AI agents
     const services = [
        // Corrected case for titles
        { id: 'generateDoc', title: "Generador inteligente de documentos", description: "Crea contratos, estatutos, testamentos y más.", icon: "📄", action: "Generar documento" },
        { id: 'resolveDispute', title: "Resolución de disputas online (ODR)", description: "Soluciona conflictos (consumidor, vecinos, etc.).", icon: "⚖️", action: "Resolver disputa" },
        { id: 'predictiveAnalysis', title: "Análisis predictivo de viabilidad", description: "Estima probabilidades de éxito y riesgos.", icon: "📊", action: "Analizar caso" },
        { id: 'manageProcedure', title: "Gestión de trámites y registros", description: "Presentación automatizada de documentos.", icon: "➡️", action: "Gestionar trámite" },
        { id: 'multiDisciplinaryTeam', title: "Asesoría multidisciplinar", description: "Equipos coordinados para casos complejos.", icon: "👥", action: "Necesito un equipo" },
        { id: 'quickConsultation', title: "Consultas rápidas con expertos", description: "Agenda videollamadas cortas con profesionales.", icon: "💬", action: "Agendar consulta" },
    ];

    // State to manage button disabling feedback after click
    const [isSubmitting, setIsSubmitting] = useState(null); // Store the ID of the submitting service

    // Handles clicking the 'Activate AI Agent' button
    const handleButtonClick = (service) => {
        setIsSubmitting(service.id); // Disable the clicked button temporarily
        // Simulate a very short delay before navigating (allows UI to update)
        setTimeout(() => {
            handleServiceSelection(service); // Call the parent handler to proceed
            // No need to reset isSubmitting here as the component will unmount upon navigation
        }, 150); // 150ms delay
    };

    return (
         <ServiceViewWrapper title="Selecciona un servicio" navigateTo={navigateTo} showBackButton={true}>
            {/* Display the identified area based on quiz results */}
            <div className="bg-emerald-50 p-4 rounded-md border border-emerald-200 mb-6">
                <p className="text-sm text-emerald-800">
                    Basado en tus respuestas, parece que tu consulta se relaciona principalmente con el área **{identifiedArea || 'General'}**.
                    Selecciona el servicio que mejor se ajuste a tu necesidad actual para activar al agente de IA correspondiente:
                </p>
            </div>
            {/* Grid layout for service cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 flex flex-col">
                            <div className="text-3xl mb-3">{service.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600 flex-grow mb-4">{service.description}</p>
                            {/* Button to activate the AI agent */}
                            <button
                                onClick={() => handleButtonClick(service)}
                                disabled={isSubmitting === service.id} // Disable button if it's the one being submitted
                                className={`mt-auto w-full font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out self-start flex items-center justify-center ${
                                    isSubmitting === service.id
                                        ? 'bg-gray-400 cursor-not-allowed' // Disabled style
                                        : 'bg-emerald-600 hover:bg-emerald-700 text-white' // Active style
                                }`}
                            >
                                <SendIcon />
                                {/* Change button text while submitting */}
                                {isSubmitting === service.id ? 'Activando...' : 'Activar agente IA'}
                            </button>
                        </div>
                    ))}
                </div>
                {/* Button to go back and redo the quiz */}
                 <button onClick={() => navigateTo('quiz')} className="mt-6 text-sm text-emerald-600 hover:underline inline-flex items-center">
                    <ArrowLeftIcon /> Volver a realizar el diagnóstico
                 </button>
         </ServiceViewWrapper>
    );
};

export default ServiceSelectionView;
