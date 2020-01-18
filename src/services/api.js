import axios from 'axios';

const api = axios.create({
  baseURL: `https://apinove.herokuapp.com/`,
});

export default api;
