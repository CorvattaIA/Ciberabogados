import React from 'react';
import { ArrowLeftIcon } from '../icons/Icons'; // Adjust path as needed

// Wrapper component for consistent layout in different views (Quiz, Registration, etc.)
// Provides padding, background card, title, and optional back button.
// Props:
// - title: The title to display for the view.
// - children: The content specific to the view.
// - navigateTo: Function to handle navigation (used by back button).
// - showBackButton: Boolean to control visibility of the back button (default: true).
const ServiceViewWrapper = ({ title, children, navigateTo, showBackButton = true }) => {
    return (
        // Container with max-width, padding, and minimum height
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[70vh]">
            {/* Optional Back Button */}
            {showBackButton && (
                <button
                    onClick={() => navigateTo('intro')} // Navigates back to the intro screen
                    className="mb-6 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    <ArrowLeftIcon />
                    Volver al inicio
                </button>
            )}
            {/* Card container for the main content */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
                {/* View Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
                {/* Render children components passed to the wrapper */}
                {children}
            </div>
        </div>
    );
};

export default ServiceViewWrapper;
