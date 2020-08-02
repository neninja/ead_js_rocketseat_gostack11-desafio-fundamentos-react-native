import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://10.0.2.2:3333',
  // THANKS: https://stackoverflow.com/a/59588664/9881278
});

export default api;
