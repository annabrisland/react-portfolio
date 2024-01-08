import React from "react";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function PortfolioContainer() {
  return (
    <div>
      {/* Render Navbar component */}
      <NavBar />
      <Contact />
    </div>
  );
}

export default PortfolioContainer;
