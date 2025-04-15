import React from 'react';
import { BotIcon, ArrowRightIcon, PencilSquareIcon, ChatBubbleLeftRightIcon } from '../components/icons/Icons'; // Adjust path
import HowItWorksSection from '../sections/HowItWorksSection'; // Import section
import PricingSectionServices from '../sections/PricingSectionServices'; // Import section

// IntroView: The main landing/entry point for the application.
// Props:
// - navigateTo: Function to change the main application view.
// - openChat: Function to open the general LexIA chat modal.
const IntroView = ({ navigateTo, openChat }) => {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            {/* Main Welcome Section */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Soluciones legales impulsadas por <span className="text-emerald-600">Agentes de IA</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                    Accede a nuestro equipo de asistentes y agentes de IA especializados para resolver tus consultas y tareas legales de forma <strong className="font-semibold">rápida, eficiente y económica</strong>.
                </p>
                <p className="text-md text-gray-500 mb-10 max-w-3xl mx-auto">
                    Comienza conversando con nuestro asistente general o realiza un diagnóstico guiado para activar al agente especialista que necesitas.
                </p>
            </div>

             {/* Options Section: Chat vs. Quiz */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">

                 {/* Option 1: Chat with LexIA */}
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg shadow-md border border-emerald-200 text-center h-full flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center mb-3">
                            <BotIcon className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Tienes una duda rápida?</h2>
                        <p className="text-gray-600 mb-4 text-sm">
                            Charla con nuestro asistente LexIA. Ideal para preguntas generales, entender opciones o si no estás seguro por dónde empezar.
                        </p>
                    </div>
                    <button
                        onClick={() => openChat()} // Opens the ChatModal
                        className="mt-4 w-full inline-flex items-center justify-center px-6 py-2 border border-emerald-500 text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 transition duration-150 ease-in-out"
                    >
                       <ChatBubbleLeftRightIcon /> Chatear con LexIA
                    </button>
                </div>

                 {/* Option 2: Structured Diagnosis Quiz */}
                 <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center h-full flex flex-col justify-between">
                     <div>
                        <div className="flex justify-center mb-3">
                             <PencilSquareIcon className="w-8 h-8 text-emerald-600"/>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Necesitas una solución específica?</h2>
                        <p className="text-gray-600 mb-4 text-sm">
                            Realiza nuestro diagnóstico guiado. Identificaremos el área y te conectaremos con el agente de IA especialista para generar documentos, analizar casos y más.
                        </p>
                     </div>
                     <button
                        onClick={() => navigateTo('quiz')} // Navigates to the AreaLawQuiz view
                        className="mt-4 w-full inline-flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                        Iniciar diagnóstico <ArrowRightIcon />
                    </button>
                 </div>
            </div>

            {/* How it works section */}
            <HowItWorksSection />

            {/* Pricing Section */}
            {/* Assuming showMessage is not strictly needed here, passing a dummy function */}
            <PricingSectionServices showMessage={(msg, type) => console.log(`Pricing Message: ${type} - ${msg}`)} />

        </div>
    );
};

export default IntroView;

