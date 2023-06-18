import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './themes';
import { CategoryProvider, ProductProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <CategoryProvider>
        <ProductProvider>
          <ThemeProvider theme={ lightTheme }>
            <CssBaseline/>
            <App />
          </ThemeProvider>
        </ProductProvider>
      </CategoryProvider>
    </HashRouter>
  </React.StrictMode>,
)
