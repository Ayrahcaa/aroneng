import React from "react";
import landing from "../../assets/landing2.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to Aron Engineering</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a et
        tempora, consequatur animi id ex eaque sapiente repudiandae voluptas,
        perspiciatis odio ipsum! Delectus dicta recusandae, deleniti neque quos
        atque?
      </p>
    </div>

    <div className="gpt3__header-image">
      <img src={landing} />
    </div>
  </div>
);

export default Header;
