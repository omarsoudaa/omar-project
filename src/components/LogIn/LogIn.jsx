import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="newsletter-container">
      <h3 className="newsletter-subtitle">SUBSCRIBE TO OUR NEWSLETTER</h3>
      <h2 className="newsletter-title">Get weekly updates</h2>
      <div className="newsletter-box">
        <p className="newsletter-text">Fill in your details to join the party!</p>
        <input type="text" placeholder="Your name" className="newsletter-input" />
        <input type="email" placeholder="Email address" className="newsletter-input" />
        <button className="newsletter-button">SUBMIT</button>
      </div>
    </div>
  );
};

export default LogIn;
