module.exports = (app) => {
  const passport = require('passport')
  
  app.get("/login", (req, res) => {
    res.send('<a href="/auth/dropbox">Log in with Dropbox</a>')
  })

  app.get('/auth/dropbox', passport.authenticate('dropbox-oauth2'))

  app.get('/auth/dropbox/callback', passport.authenticate('dropbox-oauth2', {
    failureRedirect: '/login'
  }), (req, res) => {
    res.redirect('/dashboard')
  })
}
