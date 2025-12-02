import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./main.css"
import Search from "./Pages/Search.tsx"
import WishList from "./Pages/WishList.tsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfilePage from "./Pages/ProfilePage.tsx"
import Organize from "./Pages/Organize.tsx"
<<<<<<< HEAD
import LoginPage from './Pages/Login.tsx';
import AboutTradition from './Pages/AboutTradition.tsx';
import Testing from './Pages/Testing.tsx';
=======
import LoginPage from './Pages/Login.tsx'
import AboutTradition from './Pages/AboutTradition.tsx'
>>>>>>> 434697e548c018cdf132014c2061564282cfd4c0

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/AboutTradition" element={<AboutTradition />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/wishlist" element={<WishList />} />
<<<<<<< HEAD
        <Route path="/testing" element={<Testing />} />


=======
>>>>>>> 434697e548c018cdf132014c2061564282cfd4c0
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
