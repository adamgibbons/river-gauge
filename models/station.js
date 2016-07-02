var Sequelize = require('sequelize');

module.exports = function (sequelizeConn, options) {
  sequelizeConn.define('station', {
    name: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lon: Sequelize.FLOAT
  });
};