import Axios from 'axios';
import Cookies from 'js-cookie';
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
axiosInstance.interceptors.response.use(
  response => {
    // invalid token
    // if (typeof (response.data) !== 'object') {
    //   Cookies.remove('token');
    //   history.push('/');
    // }
    return response;
  },
  error => Promise.reject(error),
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
