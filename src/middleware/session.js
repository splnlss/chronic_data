module.exports = (app) => {
  const session = require('express-session')
  app.use(session({
    secret: 'shhhhhhh',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
  }))
}