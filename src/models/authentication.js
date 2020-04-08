import Cookies from 'js-cookie';
import { message } from 'antd';
import { login } from '../api/authentication';

export default {
  namespace: 'authentication',
  state: {},
  reducers: {},
  effects: {
    *login(action, { call }) {
      try {
        const { username, password } = action.payload;
        // TODO: call real api
        const response = yield call(login, { username, password });
        console.log(response);
        // END TODO
        if (username === 'admin' && password === '123456') {
          Cookies.set('token', password);
          action.history.push('/');
        } else {
          message.error('Username or password is invalid!');
        }
      } catch (e) {
        message.error('Cannot connect to server!');
        console.log(e);
      }
    },
    logout(action) {
      Cookies.remove('token');
      action.history.push('/login');
    },
  },
};
