// --- Agent Configuration (Placeholders) ---
// IMPORTANT: Replace these placeholder URLs with your actual n8n Webhook URLs.
// Recommendation: This config should ideally be fetched from a backend API
// or managed via environment variables in a real deployment, not hardcoded here.
export const AGENT_CONFIG = {
    generateDoc: { webhookUrl: 'YOUR_N8N_WEBHOOK_URL_FOR_GENERATE_DOC', name: 'Agente generador de documentos' },
    resolveDispute: { webhookUrl: 'YOUR_N8N_WEBHOOK_URL_FOR_RESOLVE_DISPUTE', name: 'Agente de resolución de disputas (ODR)' },
    predictiveAnalysis: { webhookUrl: 'YOUR_N8N_WEBHOOK_URL_FOR_PREDICTIVE_ANALYSIS', name: 'Agente de análisis predictivo' },
    manageProcedure: { webhookUrl: 'YOUR_N8N_WEBHOOK_URL_FOR_MANAGE_PROCEDURE', name: 'Agente de gestión de trámites' },
    multiDisciplinaryTeam: { webhookUrl: 'YOUR_N8N_WEBHOOK_URL_FOR_MULTI_TEAM', name: 'Agente de asesoría multidisciplinar' },
    quickConsultation: { webhookUrl: 'YOUR_N8N_WEBHOOK_URL_FOR_QUICK_CONSULTATION', name: 'Agente de consultas rápidas' }
};

// Placeholder for API Key info (Not used directly)
export const API_KEY_PLACEHOLDER_INFO = "Your API key (like gsk_...) should be set as an environment variable on your backend server, NOT here.";

