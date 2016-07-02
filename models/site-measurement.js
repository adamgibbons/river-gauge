var Sequelize = require('sequelize');

module.exports = function (sequelizeConn, options) {
  sequelizeConn.define('siteMeasurement', {
    siteName: {
      type: Sequelize.STRING,
      field: 'site_name'
    },
    measurementName: {
      type: Sequelize.STRING,
      field: 'measurement_name'
    },
    measurementValue: {
      type: Sequelize.STRING,
      field: 'measurement_value'
    }
  });
};