var Station = require('../services/db').models.station;

module.exports = {
  list: function (req, res, next) {
    Station.findAll()
    .then(function (stations) {
      console.log(stations);
      res.status(200).send({stations: stations})
    })
    .catch(function (err) {
      console.log(err);
    })
  }
};
