const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'dev-155247-admin',
  token: '006cWFvTmCjffRKFmu8-GG2DD4xT04RDslW_pn32Tx'
});

module.exports = client;
