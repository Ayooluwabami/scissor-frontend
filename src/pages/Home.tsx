import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to the Scissor URL Shortener</h1>
      <p className="home-description">
        Scissor helps you shorten and manage your URLs effortlessly. Simply enter a long URL below to get a shortened version that you can easily share.
      </p>
      <div className="home-input-container">
        <input type="text" className="home-input" placeholder="Enter URL here..." />
        <button className="home-button">Shorten</button>
      </div>
      <div className="features">
        <div className="feature-item">Shorten long URLs into compact links.</div>
        <div className="feature-item">Generate QR codes for your shortened URLs.</div>
        <div className="feature-item">Track link analytics to see how many times your link has been clicked.</div>
        <div className="feature-item">Customize your shortened URLs for easier sharing.</div>
      </div>
      <div className="get-started">
        <button className="get-started-button">Get Started</button>
      </div>
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}

export default Home;
