import ReactDOM from "react-dom/client";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop/scrollToTop";
import Layout from "./components/Layout/layout";
import Index from "./pages/index";
import Projet from "./pages/projet/projet";
import Contact from "./pages/contact/contact";

import "./style/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
