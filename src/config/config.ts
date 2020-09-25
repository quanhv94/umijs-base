const APP_ENV = (window as any).APP_ENV;
if (!APP_ENV) {
  // eslint-disable-next-line no-alert
  window.alert(
    'Please config .env.js.example to .env.js in public folder and config env variable!',
  );
}

const configDev = {
  APP_ENV: 'dev',
  API_DOMAIN: 'http://training-api.test.amela.vn',
};
const configStaging = {
  APP_ENV: 'stg',
  API_DOMAIN: 'http://training-api.test.amela.vn',
};
const configTest = {
  APP_ENV: 'tst',
  API_DOMAIN: 'http://training-api.test.amela.vn',
};
const configProd = {
  APP_ENV: 'prd',
  API_DOMAIN: 'http://training-api.test.amela.vn',
};

const configs =
  APP_ENV === 'prd'
    ? configProd
    : APP_ENV === 'tst'
    ? configTest
    : APP_ENV === 'stg'
    ? configStaging
    : configDev;

export default configs;
