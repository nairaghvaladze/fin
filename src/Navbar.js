import React  from 'react';
import "./style.css"


function Navbar() {
 


  return (
    <div>
    <header className="header ">
          <a href="/" className="logo">
           Infinity
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="/" className="logo1">Home</a>
            </li>
            <li>
              <a href="/contact" className="logo1">Contact</a>
            </li>
            <li>
              <a href="/about" className="logo1">About</a>
            </li>
          </ul>
        </header>
        </div>
  );
};

export default Navbar;
