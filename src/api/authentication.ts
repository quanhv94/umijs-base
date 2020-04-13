import { sendGet } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const login = () => sendGet('/api/v1/login', null);
