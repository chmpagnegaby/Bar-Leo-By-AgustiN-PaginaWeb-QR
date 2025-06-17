import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ Importa esto
import App from './App.tsx';
import './index.css';

const container = document.getElementById("root");
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Bar-Leo-By-AgustiN-PaginaWeb-QR/"> {/* ⬅️ Esto es esencial */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
