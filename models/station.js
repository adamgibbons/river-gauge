var Sequelize = require('sequelize');

module.exports = function (sequelizeConn, options) {
  sequelizeConn.define('station', {
    name: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lon: Sequelize.FLOAT,
    createdAt: {
      type: Sequelize.TIME,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.TIME,
      field: 'updated_at'
    }
  });
};