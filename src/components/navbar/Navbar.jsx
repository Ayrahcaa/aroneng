import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/AronLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logo} alt="Aron" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about us</NavLink>
            </li>
            <li>
              <NavLink to="/service">our services</NavLink>
            </li>
            <li>
              <NavLink to="/project">projects</NavLink>
            </li>
            <li>
              <NavLink to="/meetus">meet us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact us</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Aron Engineering</h1>
      </section> */}
    </>
  );
};

export default Navbar;
