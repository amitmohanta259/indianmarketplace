import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="/images/plate1.jpg" alt="watch strap" />
      </div>
      <div className="hero-text">
        <h2>CRAFTED FOR THE UNCOMMON JOURNEY</h2>
        <p>Experience unmatched elegance and enduring quality.</p>
        <button className="explore-btn">Explore Designs</button>
      </div>
    </section>
  );
};

export default Hero;
