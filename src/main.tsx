import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ToytodoContextProvider from "./toyproject/ToytodoContextProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToytodoContextProvider>
      <App />
    </ToytodoContextProvider>
  </StrictMode>,
)
