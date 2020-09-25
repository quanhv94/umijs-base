import localLanguage from '@/config/language';
import { handleErrorMessage } from '@/utils';
import i18n from 'i18next';
import _ from 'lodash';

export default {
  namespace: 'language',
  state: null,
  reducers: {
    loadLanguageSuccess: (state: any, action: any) => action.payload,
  },
  effects: {
    *loadLanguage(action: any, { call, put }: any) {
      try {
        // Server language should load from api
        const serverLanguage = {} as any;
        const mergedLanguage = _.merge({}, localLanguage, serverLanguage);
        Object.keys(mergedLanguage).forEach(key => {
          i18n.addResourceBundle(key, 'translation', mergedLanguage[key]);
        });
        yield put({ type: 'loadLanguageSuccess', payload: mergedLanguage });
      } catch (error) {
        handleErrorMessage(error);
      }
    },
  },
};
