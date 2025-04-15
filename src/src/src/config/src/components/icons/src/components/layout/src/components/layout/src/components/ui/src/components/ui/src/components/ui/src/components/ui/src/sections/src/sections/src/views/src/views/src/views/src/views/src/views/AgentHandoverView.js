import React, { useState, useEffect } from 'react';
import ServiceViewWrapper from '../components/ui/ServiceViewWrapper'; // Adjust path
import { AGENT_CONFIG } from '../config/AgentConfig'; // Adjust path
import { CogIcon, CheckCircleIcon } from '../components/icons/Icons'; // Adjust path

// AgentHandoverView: Simulates the handover to the specific AI agent after registration.
// Props:
// - navigateTo: Function to change the main application view.
// - selectedService: Object containing details of the service chosen by the user.
// - quizAnswers: Object containing the answers from the diagnostic quiz.
const AgentHandoverView = ({ navigateTo, selectedService, quizAnswers }) => {
    // Get the agent name safely, providing a default
    const agentName = AGENT_CONFIG[selectedService?.id]?.name || 'Agente de IA seleccionado';
    // State for the status message displayed to the user
    const [statusMessage, setStatusMessage] = useState(`Activando ${agentName}...`);
    // State to control the checkmark visibility in the loading icon
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // This effect runs when the component mounts or dependencies change.
        // It simulates the process of contacting the agent.
        if (selectedService && quizAnswers) {
            const agentConfig = AGENT_CONFIG[selectedService.id];
            const webhookUrl = agentConfig?.webhookUrl || 'MISSING_WEBHOOK_URL'; // Placeholder URL

            // Log simulation details to the console for debugging/info
            console.log(`--- SIMULATING AGENT HANDOVER (POST-REGISTRATION) ---`);
            console.log(`Service Selected: ${selectedService.title} (ID: ${selectedService.id})`);
            console.log(`Target Agent: ${agentName}`);
            console.log(`Target Webhook (Placeholder): ${webhookUrl}`);
            console.log(`Data to Send (Quiz Answers):`, quizAnswers);
            console.log(`--- END SIMULATION ---`);

            // --- !!! REAL IMPLEMENTATION REQUIRES BACKEND CALL !!! ---
            // Here you would typically make an asynchronous call (e.g., using fetch)
            // to your backend proxy, sending the webhookUrl and quizAnswers.
            // The backend would then securely trigger the n8n webhook.
            // Example conceptual call:
            // sendRequestToAgentBackend(webhookUrl, quizAnswers)
            //   .then(() => setStatusMessage(`El ${agentName} ha sido notificado.`))
            //   .catch((error) => setStatusMessage(`Error al activar ${agentName}.`));

            // Simulate processing time before showing completion message
             const timer = setTimeout(() => {
                setStatusMessage(`El ${agentName} ha sido notificado.`);
                setIsComplete(true); // Show checkmark
            }, 2500); // Simulate 2.5 seconds processing time

            // Cleanup function to clear timeout if the component unmounts early
            return () => clearTimeout(timer);
        }
    }, [selectedService, quizAnswers, agentName]); // Dependencies for the effect

    return (
        // Use the wrapper for consistent layout, hide the default back button
        <ServiceViewWrapper title="Activando Agente de IA" navigateTo={navigateTo} showBackButton={false}>
            <div className="text-center py-10">
                {/* Loading/Completion Indicator */}
                <div className="flex justify-center mb-6">
                     <div className="relative">
                         {/* Spinning cog icon */}
                         <CogIcon className={`w-16 h-16 text-emerald-500 ${!isComplete ? 'animate-spin' : ''}`} /> {/* Stop spin on complete */}
                         {/* Checkmark icon appears when complete */}
                         <CheckCircleIcon className={`w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-opacity duration-500 ${isComplete ? 'opacity-100' : 'opacity-0'}`} />
                     </div>
                </div>
                {/* Status Message */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{statusMessage}</h3>
                {/* Confirmation Text */}
                <p className="text-gray-600 mb-4">
                    Gracias por registrar tu solicitud para el servicio: <strong className="text-emerald-600">{selectedService?.title || 'Desconocido'}</strong>.
                </p>
                <p className="text-gray-600 mb-6">
                    El <strong className="text-emerald-600">{agentName}</strong> está procesando tu solicitud con la información del diagnóstico. Recibirás una notificación (probablemente por email) con los resultados o próximos pasos.
                </p>
                {/* Button to return to the intro screen */}
                <button
                    onClick={() => navigateTo('intro')}
                    className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    Entendido, volver al inicio
                </button>
                {/* Disclaimer */}
                <p className="text-xs text-gray-500 mt-6">*Esta es una simulación. La activación real y la notificación dependen de la configuración de tus agentes de IA.</p>
            </div>
        </ServiceViewWrapper>
    );
};

export default AgentHandoverView;

