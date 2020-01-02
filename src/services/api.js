import axios from 'axios';

const api = axios.create({
  baseURL: `https://tranquil-coast-18680.herokuapp.com`,
});

export default api;
