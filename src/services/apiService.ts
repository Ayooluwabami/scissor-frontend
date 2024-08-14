import axios from 'axios';

// Set API_URL to the new base URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/urls';

export const shortenUrl = (url: string) => {
  return axios.post(`${API_URL}/shorten`, { url });
};

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const fetchSomeData = async () => {
  const response = await fetch(`${apiUrl}/some-endpoint`);
  const data = await response.json();
  return data;
};
