import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>The Flag App</h1>
          <img src="src\assets\techover-logo.png" alt="TECHOVER" />
          <button className="dark-light-mode">
            <img src="src\assets\moon.svg" alt="Moon" />
            <p>Dark Mode</p>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
