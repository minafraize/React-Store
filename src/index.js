import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import ThemeConfig from './theme';
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeConfig>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </ThemeConfig>
);
