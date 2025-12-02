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
        {/* homepage */}
        <Route path="/" element={<App />} />

        {/* main pages */}
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/abouttradition" element={<AboutTradition />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/wishlist" element={<WishList />} />

        {/* dev/testing page */}
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
