import React from 'react';
import { CloseIcon } from '../icons/Icons'; // Assuming Icons.js is in ../icons/

// MessageBox Component: Displays temporary messages (info, success, warning, error).
// Props:
// - message: The message text to display.
// - type: 'info', 'success', 'warning', 'error'.
// - clearMessage: Function to dismiss the message.
const MessageBox = ({ message, type, clearMessage }) => {
    if (!message) return null; // Don't render if no message

    // Determine colors based on message type
    let bgColor, textColor, borderColor;
    switch (type) {
        case 'success': bgColor = 'bg-green-100'; textColor = 'text-green-800'; borderColor = 'border-green-400'; break;
        case 'warning': bgColor = 'bg-yellow-100'; textColor = 'text-yellow-800'; borderColor = 'border-yellow-400'; break;
        case 'error': bgColor = 'bg-red-100'; textColor = 'text-red-800'; borderColor = 'border-red-400'; break;
        default: // 'info' or any other type
             bgColor = 'bg-blue-100'; textColor = 'text-blue-800'; borderColor = 'border-blue-400';
    }

    return (
        // Positioned fixed at top-right with high z-index
        <div className={`fixed top-5 right-5 max-w-sm p-4 border-l-4 ${borderColor} ${bgColor} rounded-md shadow-lg z-[150]`}>
            <div className="flex">
                {/* Message Text */}
                <div className="ml-3">
                    <p className={`text-sm font-medium ${textColor}`}>{message}</p>
                </div>
                {/* Dismiss Button */}
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            type="button"
                            onClick={clearMessage}
                            className={`inline-flex rounded-md p-1.5 ${textColor} hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 ${bgColor}`} // Added focus styles
                            aria-label="Cerrar mensaje" // Accessibility label
                        >
                            <span className="sr-only">Dismiss</span>
                            <CloseIcon /> {/* Use CloseIcon component */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageBox;
