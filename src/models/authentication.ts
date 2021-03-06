import Cookies from 'js-cookie';
import { message } from 'antd';
import * as authenticationApi from '../api/authentication';
import { LogInPayload } from '@/actions/authentication';
import { history } from 'umi';
import { handleErrorMessage } from '@/utils';

export default {
  namespace: 'authentication',
  state: {},
  reducers: {},
  effects: {
    *login(action: any, { call, put }: any) {
      try {
        const payload = action.payload as LogInPayload;
        const { username, password, remember } = payload;
        const { data } = yield call(authenticationApi.login, {
          username,
          password,
        });
        history.push('/');
        Cookies.set('token', data.data.token, {
          expires: remember ? 999999 : undefined,
        });
        Cookies.set('refreshToken', data.data.refreshToken, {
          expires: remember ? 999999 : undefined,
        });
      } catch (error) {
        handleErrorMessage(error);
      }
    },
    logout() {
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      history.push('/login');
    },
  },
};
