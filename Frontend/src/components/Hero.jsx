import React from "react";
const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>{title}</h1>
        <h2>Your Health, Our Priority - Always at Axon</h2>
      </div>
      <div className="hero-image">
        <img src={imageUrl} alt="hero" className="animated-image" />
      </div>
    </div>
  );
};

export default Hero;
