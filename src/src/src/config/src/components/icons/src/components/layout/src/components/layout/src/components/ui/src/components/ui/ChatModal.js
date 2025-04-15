import React, { useState, useRef, useEffect } from 'react';
import { BotIcon, CloseIcon, PaperAirplaneIcon } from '../icons/Icons'; // Adjust path as needed

// ChatModal: Handles general interaction with the LexIA assistant.
// Recommendation: Backend needed for real AI connection and Telegram integration.
// Props:
// - isOpen: Boolean controlling modal visibility.
// - closeChat: Function to close the modal.
// - initialMessage: Optional initial message from user.
const ChatModal = ({ isOpen, closeChat, initialMessage }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLexiaTyping, setIsLexiaTyping] = useState(false);
    const chatEndRef = useRef(null); // Ref to scroll to bottom of messages

    // Effect to initialize or clear messages when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            if (initialMessage) {
                const userMsg = { sender: 'user', text: initialMessage };
                setMessages([userMsg]);
                fetchLexiaResponse(initialMessage); // Simulate response to initial message
            } else {
                // Default welcome message
                setMessages([{ sender: 'lexia', text: 'Hola! Soy LexIA, tu asistente legal inteligente general. ¿En qué puedo ayudarte hoy?' }]);
            }
        } else {
            // Clear state when modal closes
            setMessages([]);
            setInput('');
            setIsLexiaTyping(false);
        }
    }, [isOpen, initialMessage]); // Rerun when modal visibility or initial message changes

    // Effect to scroll to the bottom of the chat on new messages or typing indicator change
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLexiaTyping]);

    // Simulates fetching a response from the backend/AI
    const fetchLexiaResponse = async (userInput) => {
        setIsLexiaTyping(true);
        console.log(`ChatModal: Simulating backend call for LexIA general assistant: "${userInput}"`);

        // --- !!! SIMULATION OF BACKEND CALL !!! ---
        // Replace this timeout with an actual fetch call to your backend endpoint
        // which handles the AI interaction and potentially Telegram connection.
        setTimeout(() => {
            const simulatedReply = `(Respuesta Simulada - Asistente General LexIA) He recibido tu consulta sobre "${userInput}". En una implementación real, procesaría tu pregunta y, si estuviera configurado, podría interactuar vía Telegram.`;
            setMessages(prev => [...prev, { sender: 'lexia', text: simulatedReply }]);
            setIsLexiaTyping(false);
        }, 1500); // Simulate network delay
        // --- End Simulation ---

        /* --- !!! REAL IMPLEMENTATION EXAMPLE (Requires Backend) !!! ---
        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001'; // Use env var
            const response = await fetch(`${backendUrl}/api/lexia-chat`, { // Specific endpoint for LexIA
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userInput })
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setMessages(prev => [...prev, { sender: 'lexia', text: data.reply || "No se recibió respuesta." }]);
        } catch (error) {
            console.error("Error calling LexIA backend API:", error);
            setMessages(prev => [...prev, { sender: 'lexia', text: 'Lo siento, hubo un error al conectar con el asistente.' }]);
        } finally {
            setIsLexiaTyping(false);
        }
        */
    };

    // Handles sending a user message via the form
    const handleSendMessage = (e) => {
        e.preventDefault(); // Prevent page reload
        const trimmedInput = input.trim();
        if (!trimmedInput || isLexiaTyping) return; // Prevent empty sends or sending while typing

        // Add user message to the chat display
        setMessages(prev => [...prev, { sender: 'user', text: trimmedInput }]);
        setInput(''); // Clear the input field
        fetchLexiaResponse(trimmedInput); // Trigger the (simulated) response fetch
    };

    // Don't render the modal if it's not open
    if (!isOpen) return null;

    return (
        // Modal container: Fixed position, overlay background
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
            {/* Modal Content Box */}
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg h-[70vh] flex flex-col">
                {/* Chat Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                        <BotIcon /> <span className="ml-2">LexIA Asistente</span>
                    </h3>
                    <button onClick={closeChat} className="text-gray-500 hover:text-gray-700" aria-label="Cerrar chat">
                        <CloseIcon />
                    </button>
                </div>
                {/* Message Display Area */}
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[75%] p-3 rounded-lg shadow-sm ${msg.sender === 'user' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {/* Typing Indicator */}
                    {isLexiaTyping && (
                        <div className="flex justify-start">
                            <div className="max-w-[75%] p-3 rounded-lg bg-gray-100 text-gray-500 italic">
                                LexIA está escribiendo...
                            </div>
                        </div>
                    )}
                    {/* Empty div used as an anchor to scroll to the bottom */}
                    <div ref={chatEndRef} />
                </div>
                {/* Message Input Area */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe tu mensaje aquí..."
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:ring-emerald-500 focus:border-emerald-500"
                            disabled={isLexiaTyping} // Disable input while LexIA is typing
                            autoFocus // Automatically focus the input when modal opens
                        />
                        <button
                            type="submit"
                            className={`p-3 rounded-full transition duration-150 ease-in-out ${isLexiaTyping ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
                            aria-label="Enviar mensaje"
                            disabled={isLexiaTyping} // Disable button while LexIA is typing
                        >
                            <PaperAirplaneIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatModal;

