var express = require('express');
var router = express.Router();

var StationsResource = require('../resources/stations');
var SiteMeasurementResource = require('../resources/site-measurement');

router.get('/', SiteMeasurementResource.show);
router.get('/stations', StationsResource.list);

module.exports = router;