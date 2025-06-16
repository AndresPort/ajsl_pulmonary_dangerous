import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/Home";
import LungsCancer from "./pages/lungs/lungs-cancer/LungsCancer";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Tuberculosis from "./pages/lungs/tuberculosis/Tuberculosis";
import Pneumonia from "./pages/lungs/pneumonia/Pneumonia";
import ECP from "./pages/lungs/e-c-p/e-c-p";
import About from "./pages/about/About";
import MaintenancePage from "./pages/e404/Mantenimiento";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Perfil from "./pages/profile/Profile";
import ScrollToTop from "../ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lungs-cancer" element={<LungsCancer />} />
          <Route path="/tuberculosis" element={<Tuberculosis />} />
          <Route path="/pneumonia" element={<Pneumonia />} />
          <Route path="/e-c-p" element={<ECP/>} />
          <Route path="/quiz" element={<MaintenancePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
