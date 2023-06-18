import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './themes';
import { CategoryProvider } from './context/category/CategoryProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <CategoryProvider>
        <ThemeProvider theme={ lightTheme }>
          <CssBaseline/>
          <App />
        </ThemeProvider>
      </CategoryProvider>
    </HashRouter>
  </React.StrictMode>,
)
