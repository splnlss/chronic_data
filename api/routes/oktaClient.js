const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: '{yourOktaOrgUrl}',
  token: '{yourApiToken}'
});

module.exports = client;
