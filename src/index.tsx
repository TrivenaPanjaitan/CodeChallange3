import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Determine base path based on environment
const basename = process.env.PUBLIC_URL || '/';

// Create a root and render the application
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);

// Register service worker in production only
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`; 
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.error('Error registering Service Worker:', error);
      });
  });
}
