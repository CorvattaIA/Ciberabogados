import React from 'react';
import ServiceViewWrapper from '../components/ui/ServiceViewWrapper'; // Adjust path
import QuizBase from '../components/ui/QuizBase'; // Adjust path

// AreaLawQuiz: Component for the initial diagnostic quiz to determine the area of law.
// Props:
// - navigateTo: Function to change the main application view.
// - showMessage: Function to display temporary messages.
// - setQuizResult: Function to update the quiz result state in the parent (App).
const AreaLawQuiz = ({ navigateTo, showMessage, setQuizResult }) => {
    // Define the questions for this specific quiz
    const questions = [
        // Questions 1-10 as defined previously...
        { id: 'q1_empleo', text: '¿Tu consulta está relacionada con un contrato de trabajo, despido, salario o condiciones laborales?', type: 'radio', required: true, options: [{value: 'si', label: 'Sí'}, {value: 'no', label: 'No'}] },
        { id: 'q2_negocio', text: '¿Involucra la creación de una empresa, un contrato entre empresas, facturas, o temas de socios?', type: 'radio', required: true, options: [{value: 'si', label: 'Sí'}, {value: 'no', label: 'No'}] },
        { id: 'q3_familia', text: '¿Tiene que ver con matrimonio, divorcio, hijos (custodia, alimentos), o herencias?', type: 'radio', required: true, options: [{value: 'si', label: 'Sí'}, {value: 'no', label: 'No'}] },
        { id: 'q4_inmueble', text: '¿Está relacionado con la compra, venta o arriendo de una casa, apartamento o local?', type: 'radio', required: true, options: [{value: 'si', label: 'Sí'}, {value: 'no', label: 'No'}] },
        { id: 'q5_impuestos', text: '¿Tu consulta se refiere a impuestos (declaración de renta, IVA, impuestos de empresa)?', type: 'radio', required: true, options: [{value: 'si', label: 'Sí'}, {value: 'no', label: 'No'}] },
        { id: 'q6_consumidor', text: '¿Tuviste un problema con un producto o servicio que compraste como consumidor?', type: 'radio', required: true, options: [{value: 'si', label: 'Sí'}, {value: 'no', label: 'No'}] },
        { id: 'q7_peticion', text: '¿Necesitas solicitar información, presentar una queja o reclamo formal ante una entidad (pública o privada)?', type: 'radio', required: true, options: [{value: 'si', label: 'Sí'}, {value: 'no', label: 'No'}] },
        { id: 'q8_deuda', text: '¿El problema principal se relaciona con una deuda (tuya o que te deben)?', type: 'radio', required: true, options: [{value: 'si', label: 'Sí'}, {value: 'no', label: 'No'}] },
        { id: 'q9_empresaPropia', text: '¿Tienes una empresa o eres trabajador independiente?', type: 'radio', required: false, options: [{value: 'si_empresa', label: 'Sí, tengo empresa'}, {value: 'si_indep', label: 'Sí, soy independiente'}, {value: 'no', label: 'No'}] },
        { id: 'q10_descripcion', text: 'En una frase corta, ¿cuál es el problema o necesidad principal?', type: 'text', required: true, placeholder: 'Ej: Me despidieron sin justa causa' },
    ];

    // Handles the submission of the quiz answers.
    const handleQuizSubmit = (answers) => {
        console.log("Area Law Quiz Answers:", answers);

        // --- Simple Logic to Determine Area (Recommendation: Refine this logic) ---
        let identifiedArea = 'General / Civil'; // Default area
        if (answers.q1_empleo === 'si') identifiedArea = 'Laboral';
        else if (answers.q3_familia === 'si') identifiedArea = 'de Familia / Sucesiones';
        else if (answers.q2_negocio === 'si' || answers.q9_empresaPropia === 'si_empresa') identifiedArea = 'Comercial / Empresarial';
        else if (answers.q5_impuestos === 'si') identifiedArea = 'Tributario';
        else if (answers.q4_inmueble === 'si') identifiedArea = 'Inmobiliario / Civil';
        else if (answers.q6_consumidor === 'si') identifiedArea = 'del Consumidor';
        else if (answers.q7_peticion === 'si') identifiedArea = 'Administrativo / Peticiones';
        else if (answers.q8_deuda === 'si') identifiedArea = 'Civil / Comercial';
        // --- End Simple Logic ---

        // Update the parent component's state with the result
        setQuizResult({ completed: true, area: identifiedArea, answers: answers });
        // Navigate to the next step in the flow (service selection)
        navigateTo('serviceSelection');
    };

    return (
         <ServiceViewWrapper title="Diagnóstico inicial" navigateTo={navigateTo} showBackButton={true}>
             <p className="text-gray-600 mb-6 text-sm">Responde estas preguntas para ayudarnos a entender mejor en qué área podríamos ayudarte.</p>
             {/* Render the base quiz component with the defined questions */}
             <QuizBase questions={questions} onSubmit={handleQuizSubmit} showMessage={showMessage} />
         </ServiceViewWrapper>
    );
};

export default AreaLawQuiz;

