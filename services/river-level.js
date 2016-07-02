var request = require('request');
var endpoint = "http://waterservices.usgs.gov/nwis/iv/?format=json&sites=06730160,06730200,06727500&parameterCd=00060,00065,00061";

// sites=06730160,06730200,06727500&parameterCd=00060,00065,00061

// sites
// parameterCodes

function getMeasurements(cb) {
  return request(endpoint, function (error, response, body) {

    if (error) {
      return cb(new Error(error));
    }

    function unpackTimeSeriesUnit(unit) {
      return {
        siteName:               unit.sourceInfo.siteName,
        geolocation:            unit.sourceInfo.geoLocation.geogLocation,
        measurementName:        unit.variable.variableName,
        measurementDescription: unit.variable.variableDescription,
        measurementUnit:        unit.variable.unit.unitCode,
        measurementValue:       unit.values[0].value[0].value,
        measurementDateTime:    unit.values[0].value[0].dateTime
      };
    }

    try {
      var data = JSON.parse(body).value.timeSeries.map(unpackTimeSeriesUnit);
      return cb(null, data);
    } catch (e) {
      console.log(e);
      return cb(new Error(e));
    }
  });
}

module.exports = getMeasurements;