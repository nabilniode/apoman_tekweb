import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import './index.css'; // Pastikan CSS Tailwind diimpor
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
=======
import ReactDOM from 'react-dom/client'; // Gunakan 'react-dom/client' di React 18
import './index.css'; // Pastikan file ini ada
import App from './App';

// Menggunakan createRoot untuk merender aplikasi
const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> 4dc7c72f8f7bab3fe9fccf09d924d66d45139bfd
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
