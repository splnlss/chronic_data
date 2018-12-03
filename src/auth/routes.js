module.exports = (app) => {
  app.get("/login", (req, res) => {
    res.send('<a href="/auth/dropbox">Log in with Dropbox</a>')
  })
}