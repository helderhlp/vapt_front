import axios from 'axios';

const ApiClient = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}api/v1`,
  headers: {
    'Content-type': 'application/json',
    'Access-Token': import.meta.env.VITE_APP_ACCESS_TOKEN
  },
});

export default ApiClient;