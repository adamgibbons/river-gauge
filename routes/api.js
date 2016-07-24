var express = require('express');
var router = express.Router();

var StationsResource = require('../resources/stations');
var MeasurementsResource = require('../resources/measurements');

router.get('/', MeasurementsResource.show);
router.get('/stations', StationsResource.list);
router.get('/stations/:stationId', StationsResource.show);
router.get('/stations/:stationId/measurements', MeasurementsResource.listByStationId);

module.exports = router;