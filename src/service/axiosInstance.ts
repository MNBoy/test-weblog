import { IError } from '@/common/interfaces/axios';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // We can set token here

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Show error toast
    if (error.response && error.response.data.message) {
      const errorRes = error.response.data as IError;
      console.error('Err: ', errorRes.message);
    } else {
      console.error('Something went wrong!');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
