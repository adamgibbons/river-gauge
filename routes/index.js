var express = require('express');
var router = express.Router();
var gaugeService = require('../services/river-level');

/* GET home page. */
router.get('/', function (req, res, next) {
  gaugeService(function (err, data) {
    console.log(data);
    if (err) {
      res.send(400, err);
    }
    res.render('index', { sites: data });
  });
});

module.exports = router;