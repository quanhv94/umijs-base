import { message } from 'antd';

export const handleErrorMessage = (error: any) => {
  message.error(error?.response?.data?.errorMessage || 'Something wrong!');
};
