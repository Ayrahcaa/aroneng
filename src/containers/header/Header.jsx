import React from "react";
import landing from "../../assets/landing2.png";
import landing1 from "../../assets/landing.png";
import landing2 from "../../assets/project1.png";
import landing3 from "../../assets/project2.png";
import "./header.css";
import Carousel from "../../components/carousel/Carousel";
import { CTA } from "../../components";

const Header = () => {
  const images = [landing, landing1, landing2];
  return (
    <div>
      {Array.isArray(images) && images.length > 0 ? (
        <Carousel images={images} />
      ) : (
        <p>No images to display.</p>
      )}
      <CTA />
    </div>
  );
};

export default Header;
