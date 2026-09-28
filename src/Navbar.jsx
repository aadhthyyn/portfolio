import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="portfolio">
        <nav className="navbar">
          <h2>Adithyan</h2>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/skill">Skills</Link>
            <Link to="/project">Projects</Link>
            <Link to="/github">GitHub</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
