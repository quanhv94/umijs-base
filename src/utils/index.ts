import { message } from 'antd';

export const handleErrorMessage = (error: any) => {
  message.error(getErrorMessage(error));
};

export const getErrorMessage = (error: any) => {
  return error?.response?.data?.errorMessage || 'Something wrong!';
};
