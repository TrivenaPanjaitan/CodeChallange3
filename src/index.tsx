import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { getPublicUrl } from './helpers/getPublicUrl';

const basename = getPublicUrl();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${basename}/service-worker.js`; 
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
