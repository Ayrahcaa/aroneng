import React from "react";
import possibilityImage from "../../assets/contactus.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Contact US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum,
        tempore at et, minima doloremque quasi quae, odio eum hic maxime
        nesciunt libero asperiores dignissimos tempora iure ipsum? Iste, sed.
      </p>
    </div>
  </div>
);

export default Possibility;
