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


/* GET home page. */
// router.get('/', function (req, res, next) {
//   gaugeService(function (err, data) {
//     console.log(data);
//     if (err) {
//       res.send(400, err);
//     }
//     res.render('index', { sites: data });
//   });
// });