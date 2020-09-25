import configs from '@/config/config';
import { message } from 'antd';

export const handleErrorMessage = (error: any) => {
  message.error(getErrorMessage(error));
  if (configs.APP_ENV !== 'prd') {
    console.log(error);
  }
};

export const getErrorMessage = (error: any) => {
  return error?.response?.data?.errorMessage || 'Something went wrong!';
};
