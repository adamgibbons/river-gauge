module.exports = function (sequelizeConn) {
  var Station = Stations = sequelizeConn.models.station;
  var Measurement = Measurements = sequelizeConn.models.measurement;

  Station.hasMany(Measurements, {foreignKey: 'station_id'});
};
