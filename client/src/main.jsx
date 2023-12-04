import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/fonts/fonts.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyle.jsx';
import ProductProvider from './providers/ProductProvider.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProductProvider>
          <App />
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
