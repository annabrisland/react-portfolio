import React from "react";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects"

function PortfolioContainer() {
  return (
    <div>
      {/* Render Navbar component */}
      <NavBar />
      <Projects />
    </div>
  );
}

export default PortfolioContainer;
