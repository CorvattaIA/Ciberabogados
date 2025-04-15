/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Analiza archivos JS/JSX en src
  ],
  theme: {
    extend: {
        // Example custom animation (add if needed)
        animation: {
            'spin-slow': 'spin 3s linear infinite',
        }
    },
  },
  plugins: [],
}
