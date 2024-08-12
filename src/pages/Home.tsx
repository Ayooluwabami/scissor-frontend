import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to the Scissor URL Shortener</h1>
      <p>
        Scissor helps you shorten and manage your URLs effortlessly. Simply
        enter a long URL below to get a shortened version that you can easily
        share.
      </p>
      <div className="url-shortener-form">
        <input
          type="text"
          placeholder="Enter URL here..."
          aria-label="Enter URL"
        />
        <button>Shorten</button>
      </div>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Shorten long URLs into compact links.</li>
          <li>Generate QR codes for your shortened URLs.</li>
          <li>Track link analytics to see how many times your link has been clicked.</li>
          <li>Customize your shortened URLs for easier sharing.</li>
        </ul>
      </section>
      <section className="cta">
        <h2>Get Started Today!</h2>
        <p>
          Ready to simplify your links? Start using Scissor now and experience
          the power of easy URL management.
        </p>
        <button>Get Started</button>
      </section>
    </div>
  );
}

export default Home;
