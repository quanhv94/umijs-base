const env = (window as any).APP_ENV;
if (!env) {
  // eslint-disable-next-line no-alert
  window.alert(
    'Please config .env.js.example to .env.js in public folder and config env variable!',
  );
}

const configDev = {
  API_DOMAIN: 'http://training-api.test.amela.vn',
};
const configStaging = {
  API_DOMAIN: 'http://training-api.test.amela.vn',
};
const configProd = {
  API_DOMAIN: 'http://training-api.test.amela.vn',
};

const configs =
  env === 'prod' ? configProd : env === 'staging' ? configStaging : configDev;

export default configs;
