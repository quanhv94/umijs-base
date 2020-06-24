import Cookies from 'js-cookie';
import { message } from 'antd';
import { login } from '../api/authentication';
import { LogInPayload } from '@/actions/authentication';
import { history } from 'umi';

export default {
  namespace: 'authentication',
  state: {},
  reducers: {},
  effects: {
    *login(action: any, { call }: any) {
      try {
        const payload = action.payload as LogInPayload;
        const { username, password, remember } = payload;
        // TODO: call real api
        // const response = yield call(login, { username, password });
        // console.log(response);
        // END TODO
        if (username === 'admin' && password === '123456') {
          Cookies.set('token', password, {
            expires: remember ? 999999 : undefined,
          });
          history.push('/');
        } else {
          message.error('Username or password is invalid!');
        }
      } catch (e) {
        message.error('Cannot connect to server!');
        console.log(e);
      }
    },
    logout() {
      Cookies.remove('token');
      history.push('/login');
    },
  },
};
