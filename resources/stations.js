var Station = require('../services/db').models.station;

module.exports = {
  list: function (req, res, next) {
    Station.findAll()
    .then(function (stations) {
      res.status(200).send({stations: stations})
    })
    .catch(function (err) {
      res.send(err);
    })
  },

  show: function(req, res, next) {
    Station.findById(req.params.stationId)
    .then(function (station) {
      res.status(200).send({station: station});
    })
    .catch(function (err) {
      res.send(err);
    })
  }
};
