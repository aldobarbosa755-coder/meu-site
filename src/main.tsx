import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress cross-origin iframe script errors from reporting to the parent window
window.addEventListener('error', (event) => {
  if (event.message && (event.message.includes('Script error') || event.message.includes('Script error.'))) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}, true);

window.onerror = function (message) {
  if (typeof message === 'string' && (message.includes('Script error') || message.includes('Script error.'))) {
    return true; // Suppress default browser error handling
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

