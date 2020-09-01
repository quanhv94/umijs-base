import { message } from 'antd';

export const handleServerMessage = (error: any) => {
  message.error(error?.response?.data?.errorMessage || 'Something wrong!');
};
