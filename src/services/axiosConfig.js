import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5036',
  timeout: 60000,
  headers: {'Content-Type': 'application/json'}
});

export default axiosInstance