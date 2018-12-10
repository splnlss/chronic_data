module.exports = (app) => {
  require('./auth/routes')(app)
  require('./dashboard/routes')(app)
}