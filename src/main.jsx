import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Pneumonia from "./pages/lungs/pneumonia/Pneumonia";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pneumonia" element={<Pneumonia />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  </StrictMode>
);
