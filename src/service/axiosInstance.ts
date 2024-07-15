import { removeAuthData } from '@/actions/auth';
import { IError } from '@/common/interfaces/axios';
import { Tools } from '@/lib/tools';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

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
    // Handle unauthorized error, e.g., redirect to login
    if (
      error.response &&
      error.response.status === 401 &&
      error.response?.data?.developerCode !== 401001
    ) {
      removeAuthData().then(() => {
        Tools.showMessage(
          {
            content: 'لطفا دوباره وارد حساب خود شوید',
            type: 'info',
            style: {
              fontFamily: '__Vazirmatn_9e5c11, __Vazirmatn_Fallback_9e5c11',
            },
            duration: 2,
          },
          () => {
            if (location) {
              location.reload();
            }
          }
        );
      });
      return Promise.reject(error);
    }

    // Show error toast
    if (error.response && error.response.data.message) {
      const errorRes = error.response.data as IError;
      Tools.showMessage({
        content: errorRes.message,
        type: 'error',
      });
    } else {
      Tools.showMessage({
        content: 'مشکل در ارتباط با سرور!',
        type: 'error',
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
