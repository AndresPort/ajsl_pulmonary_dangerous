import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/Home";
import LungsCancer from "./pages/lungs/lungs-cancer/LungsCancer";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Tuberculosis from "./pages/lungs/tuberculosis/Tuberculosis";
import Pneumonia from "./pages/lungs/pneumonia/Pneumonia";
import ECP from "./pages/lungs/e-c-p/e-c-p";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lungs-cancer" element={<LungsCancer />} />
          <Route path="/tuberculosis" element={<Tuberculosis />} />
          <Route path="/pneumonia" element={<Pneumonia />} />
          <Route path="/e-c-p" element={<ECP/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
console.log(window.innerHeight)
