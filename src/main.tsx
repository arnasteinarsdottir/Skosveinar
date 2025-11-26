import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router";
import Testing from "./Components/testing.tsx"
import ProfilePage from "./ProfilePage.tsx"
import Organize from "./Organize.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/organize" element={<Organize />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
