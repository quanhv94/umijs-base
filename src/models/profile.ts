import * as profileApi from '../api/profile';
import { loadProfileSuccess } from '@/actions/profile';
import { handleServerMessage } from '@/utils/response';

export default {
  namespace: 'profile',
  state: null,
  reducers: {
    loadProfileSuccess: (state: any, action: any) => action.payload,
  },
  effects: {
    *loadProfile(action: any, { call, put }: any) {
      try {
        const { data } = yield call(profileApi.loadProfile);
        yield put(loadProfileSuccess(data.data));
      } catch (error) {
        handleServerMessage(error);
      }
    },
    *updateProfile() {},
  },
};
