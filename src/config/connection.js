const Sequelize = require('sequelize');
const connection = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  //path to dropbox folder!
  storage: 'path/to/database.sqlite'
});

// Or you can simply use a connection uri
const connection = new Sequelize('postgres://user:pass@example.com:5432/dbname');
