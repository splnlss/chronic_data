module.exports = (app) => {
  require('./users/routes')(app)
  require('./documents/routes')(app)
}