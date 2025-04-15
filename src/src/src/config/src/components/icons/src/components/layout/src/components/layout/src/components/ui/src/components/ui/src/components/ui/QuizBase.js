import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons/Icons'; // Adjust path as needed

// Base component for rendering interactive quizzes.
// Props:
// - questions: Array of question objects.
// - onSubmit: Function called with the final answers when the quiz is completed.
// - showMessage: Function to display temporary messages (optional).
const QuizBase = ({ questions = [], onSubmit, showMessage }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [error, setError] = useState(''); // State for validation errors

    // Effect to reset component state when the questions array changes.
    useEffect(() => {
        setAnswers({}); // Clear previous answers
        setError(''); // Clear previous errors
        setCurrentQuestionIndex(0); // Go back to the first question
    }, [questions]); // Dependency array ensures this runs only when questions change

    // Safely get the current question object based on the index.
    const currentQuestion = questions && questions.length > currentQuestionIndex ? questions[currentQuestionIndex] : null;

    // Handles changes in any input field within the quiz.
    const handleAnswerChange = (e) => {
        const { name, value, type, checked } = e.target;
        setError(''); // Clear validation error when user interacts
        // Update answers state, handling checkboxes specifically
        setAnswers(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handles moving to the next question or submitting the quiz.
    const handleNext = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (!currentQuestion) return; // Exit if no current question

        // Basic validation: Check if a required question has an answer.
        // Uses optional chaining and checks for empty string or null/undefined.
        if (currentQuestion.required && (!answers[currentQuestion.id] || answers[currentQuestion.id] === '')) {
             setError(`Por favor, responde esta pregunta para continuar.`);
             return; // Stop execution if validation fails
        }

        // If not the last question, move to the next one.
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // If it is the last question, call the onSubmit callback with the collected answers.
            onSubmit(answers);
        }
    };

    // Handles moving to the previous question.
    const handlePrevious = () => {
         setError(''); // Clear error when moving back
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    // Renders the appropriate HTML input element based on the question type.
    const renderInput = (question) => {
        const commonClasses = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-sm"; // Added text-sm
        const value = answers[question.id] || ''; // Get current answer or default to empty string

        switch (question.type) {
            case 'text':
                return <input type="text" name={question.id} id={question.id} value={value} onChange={handleAnswerChange} className={commonClasses} placeholder={question.placeholder || ''} />;
            case 'textarea':
                return <textarea name={question.id} id={question.id} rows="4" value={value} onChange={handleAnswerChange} className={commonClasses} placeholder={question.placeholder || ''}></textarea>;
            case 'select':
                return (
                    <select name={question.id} id={question.id} value={value} onChange={handleAnswerChange} className={commonClasses}>
                        <option value="">{question.placeholder || 'Selecciona una opción...'}</option>
                        {/* Use optional chaining for safety when mapping options */}
                        {question.options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                );
            case 'radio':
                 return (
                    <div className="space-y-2 mt-2">
                        {question.options?.map(opt => ( // Use optional chaining
                            <label key={opt.value} className="flex items-center p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name={question.id} value={opt.value} checked={value === opt.value} onChange={handleAnswerChange} className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"/>
                                <span className="ml-3 text-sm text-gray-700">{opt.label}</span>
                            </label>
                        ))}
                    </div>
                 );
             case 'date':
                 return <input type="date" name={question.id} id={question.id} value={value} onChange={handleAnswerChange} className={commonClasses} />;
             case 'number':
                 return <input type="number" name={question.id} id={question.id} value={value} onChange={handleAnswerChange} className={commonClasses} placeholder={question.placeholder || ''} />;
            default:
                // Log an error for unsupported question types during development
                console.error("Unsupported question type:", question.type);
                return <p className="text-red-500 text-sm">Error: Tipo de pregunta no soportado '{question.type}'</p>;
        }
    };

    // Render loading state if questions are not yet available.
    if (!currentQuestion) {
        return <p className="text-gray-500">Cargando pregunta...</p>;
    }

    // Render the main quiz form.
    return (
        <div>
            {/* Question Area */}
            <div className="mb-6">
                {/* Progress Indicator */}
                <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-emerald-600">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1.5 ml-4 overflow-hidden"> {/* Added overflow-hidden */}
                        <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300 ease-out" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
                    </div>
                </div>

                {/* Question Text */}
                <label htmlFor={currentQuestion.id} className="block text-lg font-semibold text-gray-800 mb-3">{currentQuestion.text}</label>

                {/* Input Field based on question type */}
                {renderInput(currentQuestion)}

                {/* Validation Error Message */}
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0} // Disable 'Previous' on first question
                    className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <ArrowLeftIcon /> Anterior
                </button>
                <button
                    onClick={handleNext}
                    className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    {/* Change button text on the last question */}
                    {currentQuestionIndex < questions.length - 1 ? 'Siguiente' : 'Ver resultados'}
                    {/* Show arrow only if not the last question */}
                    {currentQuestionIndex < questions.length - 1 && <ArrowRightIcon />}
                </button>
            </div>
        </div>
    );
};

export default QuizBase;
