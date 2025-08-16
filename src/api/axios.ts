import axios from 'axios';
// import { getToken } from '../auth/tokenService';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

export default instance;