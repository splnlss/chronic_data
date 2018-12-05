module.exports = (app) => {
  const passport = require('passport')
  const DropboxStrategy = require('passport-dropbox-oauth2').Strategy

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function (profile, next) {
    next(null, profile)
  })
  
  passport.deserializeUser(function (profile, next) {
    next(null, profile)
  })

  passport.use(new DropboxStrategy({
    apiVersion: '2',
    clientID: process.env.DROPBOX_APP_ID,
    clientSecret: process.env.DROPBOX_APP_SECRET,
    callbackURL: process.env.DROPBOX_CALLBACK_URL
  }, function (token, tokenSecret, profile, next) {
    return next(null, profile)
  }))
}