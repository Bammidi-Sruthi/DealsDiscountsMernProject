import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dealsdiscountsmernproject.onrender.com/api', // Adjust if your backend is on a different origin
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;