import axios from 'axios';

const axiosMock = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default axiosMock;
