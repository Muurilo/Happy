const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  timeout: 5000,
});

export default instance;
