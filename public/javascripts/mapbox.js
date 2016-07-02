mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbWdpYmJvbnMiLCJhIjoiY2lvcXJ1OTZ0MDAxaXR6bTUxOGFiOGVxdyJ9.qDPSchYrB1nIyO8J-PPjJQ';

var formatStation = function formatStation(station) {
  return {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [station.lat, station.lon]
    },
    "properties": {
      "title": station.name,
      "marker-symbol": "marker",
      "marker-size": "large",
      "marker-color": "#1087bf"
    }
  };
}


$.get('/api/stations')
.done(function (response) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-105.26, 40.03], // starting position
    zoom: 12 // starting zoom
  });
  map.on('load', function () {
    map.addSource("markers", {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": response.stations.map(formatStation)
      }
    });
    map.addLayer({
      "id": "markers",
      "type": "symbol",
      "source": "markers",
      "layout": {
        "icon-image": "{marker-symbol}-15",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
      }
    });
  });
})
.fail(function (err) {
  console.log('API call to GET stations failed', err);
});
