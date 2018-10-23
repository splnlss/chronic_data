exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/chronic_data-LOCAL'

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
  'mongodb://localhost/chronic_data-TEST'
exports.PORT = process.env.PORT || 8080
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret'
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d'

console.log(`DATABASE_URL = ${exports.DATABASE_URL}`)
// should be in config heroku
