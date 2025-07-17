import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import NavLayout from "@/layouts/NavLayout.tsx";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Projects from "@/pages/Projects";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/page" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
