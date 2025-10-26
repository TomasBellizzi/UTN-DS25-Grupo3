import axios from 'axios';
import { getToken, clearToken } from '../helpers/auth';

export const api = axios.create({
  baseURL: (import.meta.env.VITE_API_URL || '').replace(/\/$/, ''),
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      clearToken();
      window.location.href = '/IniciarSesion';
    }
    return Promise.reject(err);
  }
);
