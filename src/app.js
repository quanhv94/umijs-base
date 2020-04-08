import logger from 'dva-logger';
import './styles/global.less';

// eslint-disable-next-line import/prefer-default-export
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
  plugins: [logger({ collapsed: true })],
};
