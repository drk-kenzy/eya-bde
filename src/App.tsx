/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IconContext } from "@phosphor-icons/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import Project from "./pages/Project";
import Clubs from "./pages/Clubs";
import Departments from "./pages/Departments";
import Media from "./pages/Media";
import WhyUs from "./pages/WhyUs";

export default function App() {
  return (
    <IconContext.Provider value={{ weight: "duotone" }}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/equipe" element={<Team />} />
              <Route path="/projet" element={<Project />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/poles" element={<Departments />} />
              <Route path="/media" element={<Media />} />
              <Route path="/pourquoi-nous" element={<WhyUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </IconContext.Provider>
  );
}

