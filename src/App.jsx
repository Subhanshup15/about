import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const Layout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {location.pathname === "/" && (
        <nav className="navbar">
          <div className="navbar-logo">SP</div>

          {/* Desktop Links */}
          

         
         
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">
        © {new Date().getFullYear()} SUBHANSHU PARDESHI. All rights reserved.
      </footer>
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;