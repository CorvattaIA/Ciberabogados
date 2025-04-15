import React, { useState } from 'react';
import ServiceViewWrapper from '../components/ui/ServiceViewWrapper'; // Adjust path
import { AGENT_CONFIG } from '../config/AgentConfig'; // Adjust path

// RegistrationView: Simulated registration step before activating an AI agent.
// Props:
// - navigateTo: Function to change the main application view.
// - showMessage: Function to display temporary messages.
// - selectedService: Object containing details of the service chosen by the user.
// - handleRegistrationComplete: Function called after simulated registration succeeds.
const RegistrationView = ({ navigateTo, showMessage, selectedService, handleRegistrationComplete }) => {
    const [email, setEmail] = useState('');
    const [isProcessing, setIsProcessing] = useState(false); // State for loading indicator

    // Simulates the registration process (no actual user creation)
    const handleSimulatedRegistration = () => {
        // Basic email validation
        if (!email || !email.includes('@')) {
            showMessage('Por favor, ingresa un correo electrónico válido.', 'warning');
            return;
        }
        setIsProcessing(true); // Show loading state on button
        console.log(`Simulating Registration for user: ${email}`);

        // Simulate backend call delay
        setTimeout(() => {
            showMessage(`¡Registro simulado con éxito para ${email}! Redirigiendo al agente...`, 'success');
            // Proceed to the next step (agent handover) after a short delay
            setTimeout(() => {
                handleRegistrationComplete(); // Call the function from App to change viewState
            }, 1000); // Delay before navigation
        }, 1500); // Delay for simulated registration process
    };

    // Get the agent name safely, using optional chaining and providing a default
    const agentName = AGENT_CONFIG[selectedService?.id]?.name || 'agente de IA seleccionado';

    return (
        <ServiceViewWrapper title={`Registro para activar agente`} navigateTo={() => navigateTo('serviceSelection')} showBackButton={true}>
             {/* Explanation text clarifying the purpose of registration */}
             <p className="text-gray-600 mb-6 text-sm">
                 Necesitamos tu correo electrónico para activar el <strong className="text-emerald-600">{agentName}</strong> y poder contactarte
                 con el resultado. Este registro es solo para esta solicitud.
             </p>
             <div className="space-y-4">
                 {/* Email Input */}
                 <div>
                     <label htmlFor="email-reg" className="block text-sm font-medium text-gray-700">Correo electrónico de contacto</label>
                     <input
                        type="email" name="email-reg" id="email-reg" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="tu@ejemplo.com" disabled={isProcessing} // Disable while processing
                     />
                 </div>
                 {/* Registration Button */}
                 <div className="pt-4">
                     <button
                        onClick={handleSimulatedRegistration}
                        disabled={isProcessing} // Disable while processing
                        className={`w-full inline-flex justify-center items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white transition duration-150 ease-in-out ${
                            isProcessing
                                ? 'bg-gray-400 cursor-not-allowed' // Disabled style
                                : 'bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500' // Active style
                            }`}
                     >
                         {/* Change button text while processing */}
                         {isProcessing ? 'Procesando...' : 'Registrar y Activar Agente (Simulado)'}
                     </button>
                 </div>
                 {/* Disclaimer */}
                 <p className="text-xs text-gray-500 mt-4">*Este es un paso simulado. En la aplicación real, se guardaría tu correo para asociarlo a la solicitud.</p>
             </div>
        </ServiceViewWrapper>
    );
};

export default RegistrationView;

