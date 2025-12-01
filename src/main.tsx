import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./main.css"
import Leita from "./Pages/Search.tsx";
import WishList from "./Pages/WishList.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage.tsx"
import Organize from "./Pages/Organize.tsx"
import LoginPage from './Pages/Login.tsx';
import AboutTradition from './Pages/AboutTradition.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/Leita" element={<Leita />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="/AboutTradition" element={<AboutTradition />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/wishlist" element={<WishList />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
