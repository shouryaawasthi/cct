import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from "./components/ScrollTop.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <HelmetProvider>
  <ScrollToTop />
    <StrictMode>
     <App />
    </StrictMode>
    </HelmetProvider>
  </BrowserRouter>
 
)
