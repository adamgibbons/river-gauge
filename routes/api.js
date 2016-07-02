var express = require('express');
var router = express.Router();

var SiteMeasurementResource = require('../resources/site-measurement');

router.get('/', SiteMeasurementResource.show);

module.exports = router;