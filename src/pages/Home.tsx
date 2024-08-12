import React from 'react';
import Header from '../components/Header';
import UrlShortener from '../components/UrlShortener';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to the Scissor URL Shortener</h2>
        <UrlShortener />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
