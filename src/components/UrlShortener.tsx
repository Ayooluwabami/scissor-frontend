import React, { useState } from 'react';
import { shortenUrl } from '../services/apiService';

const UrlShortener: React.FC = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
      const response = await shortenUrl(url);
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && <p>Short URL: {shortUrl}</p>}
    </div>
  );
};

export default UrlShortener;
