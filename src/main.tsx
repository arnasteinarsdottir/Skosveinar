import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Testing from "./Components/testing.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
