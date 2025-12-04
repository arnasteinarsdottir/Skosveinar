import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./main.css";

import Search from "./Pages/Search.tsx";
import WishList from "./Pages/WishList.tsx";
import ProfilePage from "./Pages/ProfilePage.tsx";
import Organize from "./Pages/Organize.tsx";
import LoginPage from "./Pages/Login.tsx";
import AboutTradition from "./Pages/AboutTradition.tsx";
import Testing from "./Pages/Testing.tsx";

import { HashRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/AboutTradition" element={<AboutTradition />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
