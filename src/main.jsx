import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  </StrictMode>
);
