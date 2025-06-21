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
import Sitemap from "./pages/sitemap/Sitemap";
import Termsandconditions from "./pages/terms-and-conditions/Terms-and-conditions";

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
          <Route path="/about" element={<About />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/terms-and-conditions" element={<Termsandconditions />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
