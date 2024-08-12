import React from 'react';

function About() {
  return (
    <div>
      <h1>About Scissor URL Shortener</h1>
      <p>
        Scissor is a powerful URL shortener designed to make sharing links
        easier and more efficient. Our service allows you to transform long,
        unwieldy URLs into short, manageable links that are perfect for
        sharing on social media, in emails, or anywhere else.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          At Scissor, our mission is to simplify the way people manage and share
          links. We believe that short, clean URLs not only improve the
          aesthetics of shared content but also make it easier to track and
          analyze link performance.
        </p>
      </section>
      <section>
        <h2>How It Works</h2>
        <p>
          Scissor works by taking your long URLs and converting them into short,
          unique links. These short links redirect users to the original URL.
          We also provide features such as QR code generation and link analytics
          to help you get the most out of your links.
        </p>
        <ul>
          <li><strong>URL Shortening:</strong> Transform long URLs into short links.</li>
          <li><strong>QR Code Generation:</strong> Create QR codes for your shortened URLs.</li>
          <li><strong>Link Analytics:</strong> Track the performance of your links.</li>
          <li><strong>Custom URLs:</strong> Customize your short links for better branding.</li>
        </ul>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback about Scissor, feel free to
          reach out to us. We are always here to help and would love to hear
          from you.
        </p>
        <p>
          Email: <a href="mailto:support@scissor.com">support@scissor.com</a>
        </p>
      </section>
    </div>
  );
}

export default About;
