import React from "react";
import Logo from "../../assets/AronLogo.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text"></h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="gpt3_logo" />
        <p>
          Kathmandu,Nepal <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wgpt3">About US</a>
        </p>
        <p>
          <a href="#possibility">Contact</a>
        </p>
        <p>
          <a href="#features">our services</a>
        </p>
        <p>
          <a href="#blog">Projects</a>
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Kathmandu,Nepal</p>
        <p>+977985412544</p>
        <p>aronengineering@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>Aron Engineering. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
