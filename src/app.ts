// import logger from 'dva-logger';

import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import configs from './config/config';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'vi',
    debug: configs.APP_ENV === 'dev',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {},
  });

// // eslint-disable-next-line import/prefer-default-export
// export const dva = {
//   config: {
//     onError(err: any) {
//       err.preventDefault();
//       console.error(err.message);
//     },
//   },
//   plugins: [logger({ collapsed: true })],
// };
