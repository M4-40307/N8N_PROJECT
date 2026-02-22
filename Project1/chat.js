import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

const init = () => {
  console.log("chat work")

  createChat({
    webhookUrl: 'http://localhost:5678/webhook/ed02332c-6fac-4936-b0bb-981057d96254/chat',
    webhookConfig: {
      method: 'POST',
      headers: {}
    },
    target: '#n8n-chat',
    mode: 'fullscreen',
    chatInputKey: 'chatInput',
    chatSessionKey: 'sessionId',
    loadPreviousSession: true,
    metadata: {},
    showWelcomeScreen: false,
    defaultLanguage: 'he',
    initialMessages: [
      'היי, אני בוט שעוזר ללקוחות פיטנס יאנוח, במה אוכל לעזור'
    ],
    i18n: {
      he: {
        title: 'Yanouh Fitness',
        subtitle: "ask anythink about Yanouh Fitness",
        footer: '',
        getStarted: 'start a chat',
        inputPlaceholder: 'כתוב את השאלה שלך..',
      },
    },
    enableStreaming: false,
  });
}

init();

