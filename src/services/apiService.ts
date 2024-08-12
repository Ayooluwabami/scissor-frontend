import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003/api/urls';

export const shortenUrl = (url: string) => {
  return axios.post(`${API_URL}/shorten`, { url });
};
