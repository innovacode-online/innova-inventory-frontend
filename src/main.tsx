import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './themes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline/>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
