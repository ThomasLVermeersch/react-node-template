import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';

export { noAuthFunction, authFunction };

function noAuthFunction() {
  const url = `${BASE_URL}/api/test`;
  return axios.get(url).then(response => response.data);
}

function authFunction() {
  const url = `${BASE_URL}/api/authtest`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}