import React from 'react';
import ReactDOM from 'react-dom/client'; // Gunakan 'react-dom/client' di React 18
import './index.css'; // Pastikan file ini ada
import App from './App';

// Menggunakan createRoot untuk merender aplikasi
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
