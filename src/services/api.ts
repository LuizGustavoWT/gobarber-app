import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.gobarber.luizgustavowt.com.br',
});

export default api;
