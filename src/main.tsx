import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router";

import Leita from "./Pages/Leita.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Leita" element={<Leita />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
