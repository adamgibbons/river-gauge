var express = require('express');
var router = express.Router();

var SiteMeasurementResource = require('../resources/measurements');

router.get('/api', SiteMeasurementResource.show);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {});
});

module.exports = router;