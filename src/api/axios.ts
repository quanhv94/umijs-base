import Axios from 'axios';
import Cookies from 'js-cookie';
import { history } from 'umi';
import configs from '../config/config';

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.API_DOMAIN,
});
axiosInstance.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`;
    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`;
    config.headers.timezoneoffset = new Date().getTimezoneOffset();
    return config;
  },
  error => Promise.reject(error),
);
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalConfig = error.config;
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      Cookies.remove('token');
      history.push('/');
      return;
    }
    return Axios.post(`${configs.API_DOMAIN}/v1/web/auth/refresh`, {
      refreshToken,
    })
      .then(res => {
        if (res.status === 200) {
          const data = res.data;
          Cookies.set('token', data.token);
          Cookies.set('refreshToken', data.refreshToken);
          originalConfig.headers.Authorization = `Bearer ${data.token}`;
          return Axios(originalConfig);
        } else {
          Cookies.remove('token');
          Cookies.remove('refreshToken');
          history.push('/');
        }
      })
      .catch(() => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        history.push('/');
      });
  },
);

export const sendGet = (url: string, params?: any) =>
  axiosInstance.get(url, { params });
export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance.post(url, params, { params: queryParams });
export const sendPut = (url: string, params?: any) =>
  axiosInstance.put(url, params);
export const sendPatch = (url: string, params?: any) =>
  axiosInstance.patch(url, params);
export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { params });
