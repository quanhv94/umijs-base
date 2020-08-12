if (!process.env.APP_ENV) {
  // eslint-disable-next-line no-alert
  window.alert(
    'Please config .env! (copy .env.example to .env in root project folder!)',
  );
}

const configDev = {
  API_DOMAIN: 'https://us-central1-quanhv94-69c78.cloudfunctions.net',
};
const configStaging = {
  API_DOMAIN: 'https://us-central1-quanhv94-69c78.cloudfunctions.net',
};
const configProd = {
  API_DOMAIN: 'https://us-central1-quanhv94-69c78.cloudfunctions.net',
};

const env = process.env.APP_ENV;
const configs =
  env === 'prd' ? configProd : env === 'stg' ? configStaging : configDev;

export default configs;
