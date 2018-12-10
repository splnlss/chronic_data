module.exports = (app) => {
  const requireDropboxAuth = require('../middleware/auth')
  app.get('/dashboard', requireDropboxAuth(), (req, res) => {
    res.send("Welcome")
  })
}