import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("left");

  const nextImage = () => {
    setTransitionDirection("left");
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setTransitionDirection("right");
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(nextImage, 5000);
  };

  // Auto-change image every 5 seconds
  let interval;
  useEffect(() => {
    interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className={`image-box ${
          transitionDirection === "left"
            ? "left-transition"
            : "right-transition"
        }`}
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="image">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={prevImage}>&lt;</button>
        <button
          onClick={() => {
            nextImage();
            resetInterval();
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
