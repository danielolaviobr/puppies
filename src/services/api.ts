import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/',
  timeout: 3000,
});

export default api;
