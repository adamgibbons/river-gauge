var SiteMeasurement = require('../services/db').models.siteMeasurement;
var getSiteMeasurement = require('../services/river-level');

module.exports = {
  show: function(req, res, next) {
    getSiteMeasurement(function (err, data) {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send(data);
    });
  }
};
