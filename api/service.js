import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
const service = axios.create({
  // baseURL: 'http://localhost:6010',
  baseURL: 'https://furion.io:6010',
  timeout: 6000000,
});

export const service_coinmarket = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  timeout: 6000000,
});

export const service_etherscan = axios.create({
  baseURL: 'https://api.etherscan.io/api',
  timeout: 6000000,
});

export default service;