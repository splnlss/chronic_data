require('dotenv').config()
const app = require('express')()
const passport = require('passport')
const session = require('express-session')
const DropboxStrategy = require('passport-dropbox-oauth2').Strategy
const PORT = process.env.PORT || 3000

function authMiddleware(){
  return (req, res, next) => {
    if (req.isAuthenticated()) return next()
    return res.redirect("/login")
  }
}

passport.serializeUser(function (profile, next) {
  next(null, profile)
})

passport.deserializeUser(function (profile, next) {
  next(null, profile)
})

app.use(session({
  secret: 'shhhhhhh'
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new DropboxStrategy({
  apiVersion: '2',
  clientID: process.env.DROPBOX_APP_ID,
  clientSecret: process.env.DROPBOX_APP_SECRET,
  callbackURL: process.env.DROPBOX_CALLBACK_URL
}, function (token, tokenSecret, profile, next) {
  return next(null, profile)
}))

app.get("/", (req, res) => {
  debugger
  res.send("Hello World")
})

app.get("/login", (req, res) => {
  res.send('<a href="/auth/dropbox">Log in with Dropbox</a>')
})

app.get("/protected", authMiddleware(), (req, res) => {
  res.send("Authed!")
})

app.get('/auth/dropbox', passport.authenticate('dropbox-oauth2'))

app.get('/auth/dropbox/callback', passport.authenticate('dropbox-oauth2', {
  failureRedirect: '/login'
}), (req, res) => {
  res.redirect('/protected')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))