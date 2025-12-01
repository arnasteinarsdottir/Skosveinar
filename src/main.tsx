import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage.tsx"
import Organize from "./Organize.tsx"
import Testing from"./Testing.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
