import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>About Scissor URL Shortener</h2>
        <p>Learn more about how Scissor helps you manage and shorten URLs.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
