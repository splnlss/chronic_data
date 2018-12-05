module.exports = (app) => {
  const session = require('express-session')
  app.use(session({
    secret: 'shhhhhhh'
  }))
}