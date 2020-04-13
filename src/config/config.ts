if (!process.env.API_DOMAIN) {
  // eslint-disable-next-line no-alert
  window.alert(
    'Please config .env! (copy .env.example to .env in root project folder!)',
  );
}

const configs = {
  API_DOMAIN: process.env.API_DOMAIN,
};

export default configs;
