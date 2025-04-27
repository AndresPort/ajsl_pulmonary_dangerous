import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Tuberculosis from "./pages/lungs/tuberculosis/Tuberculosis";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuberculosis" element={<Tuberculosis />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  </StrictMode>
);
