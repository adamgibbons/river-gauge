var request = require('request');
var endpoint = "http://waterservices.usgs.gov/nwis/iv/?format=json&sites=06730160,06730200,06727500&parameterCd=00060,00065,00061";

function getMeasurements(cb) {
  return request(endpoint, function (error, response, body) {
    if (error) {
      return cb(new Error(error));
    }

    function unpackTimeSeriesUnit(unit) {
      return {
        siteName: unit.sourceInfo.siteName,
        measurementName: unit.variable.variableName,
        measurementValue: unit.values[0].value[0].value,
        timeStamp: unit.values[0].value[0].dateTime
      };
    }

    var data = JSON.parse(response.body).value.timeSeries.map(unpackTimeSeriesUnit);

    return cb(null, data);
  });
}

module.exports = getMeasurements;