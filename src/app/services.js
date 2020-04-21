import Axios from 'axios';

const service = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    accept: 'application/json'
  }
});

export { service };
