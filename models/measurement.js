var Sequelize = require('sequelize');

module.exports = function (sequelizeConn, options) {
  sequelizeConn.define('measurement', {
    label: Sequelize.TEXT,
    unit: Sequelize.TEXT,
    value: Sequelize.FLOAT,
    station_id: Sequelize.INTEGER
  });
};
