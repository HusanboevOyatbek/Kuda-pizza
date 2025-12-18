import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CartProvider from './context/CartContext.jsx';
import ChangLAnguaje from './context/ChangLAnguaje.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChangLAnguaje>
      <CartProvider>
        <App />
      </CartProvider>
    </ChangLAnguaje>
  </StrictMode>
);
