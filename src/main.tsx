import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './themes';
import { CategoryProvider, ProductProvider, AuthProvider, SaleProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <CategoryProvider>
          <ProductProvider>
            <SaleProvider>
              <ThemeProvider theme={ lightTheme }>
                <CssBaseline/>
                <App />
              </ThemeProvider>
            </SaleProvider>
          </ProductProvider>
        </CategoryProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)
