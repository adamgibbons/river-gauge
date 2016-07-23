var Measurement = require('../services/db').models.measurement;
var getSiteMeasurement = require('../services/river-level');

module.exports = {
  show: function(req, res, next) {
    getSiteMeasurement(function (err, data) {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(data);
    });
  },

  list: function (req, res, next) {
    Measurement.findAll({where: { station_id: req.params.stationId }})
    .then(function (measurements) {
      res.status(200).send({measurements: measurements});
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
  }
};
