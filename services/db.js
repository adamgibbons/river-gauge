var Sequelize = require('sequelize');

var database = 'river_gauge';
var username = 'gibber';
var password = '';

var sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

(require('../models/site-measurement')(sequelize));
(require('../models/station')(sequelize));

module.exports = sequelize;