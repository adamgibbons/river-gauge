var Sequelize = require('sequelize');

var database = 'river_gauge';
var username = 'gibber';
var password = '';

module.exports = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});