# ciberabogados - Frontend

Este es el código fuente del frontend para la plataforma ciberabogados, construida con React y Tailwind CSS. La plataforma actúa como una puerta de entrada inteligente para diagnosticar necesidades legales y administrativas y conectar a los usuarios con agentes de IA especializados (simulados).

## Estructura de Carpetas Sugerida

ciberabogados-frontend/├── public/│   └── index.html        # Plantilla HTML principal├── src/│   ├── components/       # Componentes reutilizables de UI│   │   ├── icons/│   │   │   └── Icons.js  # Componentes de iconos SVG│   │   ├── layout/│   │   │   ├── Navbar.js│   │   │   └── Footer.js│   │   └── ui/│   │       ├── MessageBox.js│   │       ├── ChatModal.js│   │       └── QuizBase.js│   │       └── ServiceViewWrapper.js│   ├── views/            # Componentes que representan vistas/pantallas principales│   │   ├── IntroView.js│   │   ├── AreaLawQuiz.js│   │   ├── ServiceSelectionView.js│   │   ├── RegistrationView.js│   │   └── AgentHandoverView.js│   ├── sections/         # Componentes de secciones grandes (usados en vistas)│   │   ├── HowItWorksSection.js│   │   └── PricingSectionServices.js│   ├── config/           # Archivos de configuración (placeholders)│   │   └── AgentConfig.js│   ├── App.js            # Componente principal de la aplicación y enrutamiento│   ├── index.css         # Estilos globales y directivas de Tailwind│   └── index.js          # Punto de entrada de la aplicación React├── .gitignore            # Archivos ignorados por Git├── package.json          # Dependencias y scripts del proyecto├── tailwind.config.js    # Configuración de Tailwind CSS└── README.md             # Este archivo
## Pasos para Configurar y Ejecutar Localmente

1.  **Clonar/Descargar:** Obtén el código fuente. Si estás subiendo a GitHub, clona tu repositorio.
2.  **Crear Archivos/Carpetas:** Organiza el código proporcionado en la estructura de carpetas y archivos detallada arriba dentro de la carpeta `src/`.
3.  **Instalar Dependencias:** Abre una terminal en la carpeta raíz del proyecto y ejecuta:
    ```bash
    npm install
    ```
    o si usas Yarn:
    ```bash
    yarn install
    ```
4.  **Configurar Tailwind CSS:** Asegúrate de que Tailwind esté configurado correctamente. Si usas Create React App, sigue la [guía oficial de Tailwind](https://tailwindcss.com/docs/guides/create-react-app). Necesitarás `tailwind.config.js` y `src/index.css` (proporcionados aquí).
5.  **Ejecutar la Aplicación:** Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```
    o
    ```bash
    yarn start
    ```
    Esto debería abrir la aplicación en tu navegador (usualmente en `http://localhost:3000`).

## Construir para Producción (Ej: GitHub Pages)

1.  **Ejecutar el Build:** Crea una versión optimizada para producción:
    ```bash
    npm run build
    ```
    o
    ```bash
    yarn build
    ```
    Esto generará una carpeta `build/` con los archivos estáticos.
2.  **Desplegar:** Sube el contenido de la carpeta `build/` a tu servicio de hosting (como GitHub Pages, Netlify, Vercel, etc.). Para GitHub Pages, puedes usar herramientas como `gh-pages`.

## Notas Importantes

* **Simulación:** Muchas funcionalidades (autenticación, activación de agentes IA, chat de LexIA) están **simuladas** en este código frontend. Requieren un **backend** para funcionar realmente.
* **Configuración de Agentes:** Las URLs en `src/config/AgentConfig.js` son **placeholders**. Debes reemplazarlas con tus URLs reales de webhooks de n8n (o tu plataforma de agentes). Se recomienda gestionar esta configuración desde un backend.
* **Claves API:** **Nunca** incluyas claves API reales directamente en el código frontend. Deben manejarse de forma segura en el backend.

