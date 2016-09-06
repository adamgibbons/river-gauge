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
      "icon": "circle",
      "marker-color": "#aaaaaa"
    }
  };
}

$.get('/api/stations')
.then(function (response) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/adamgibbons/ciorsxlby000lb3khbf02yrkn', //stylesheet location
    center: [-105.26, 40.03], // starting position
    zoom: 12 // starting zoom
  });
  map.on('load', function () {

    map.addSource("stations", {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": response.stations.map(formatStation)
      }
    });

    map.addLayer({
      "id": "stations",
      "type": "symbol",
      "source": "stations",
      "layout": {
        "icon-image": "{icon}-15",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
      }
    });

    map.on('click', function (e) {
        // Use queryRenderedFeatures to get features at a click event's point
        // Use layer option to avoid getting results from other layers
        var features = map.queryRenderedFeatures(e.point, { layers: ['stations'] });
        // if there are features within the given radius of the click event,
        // fly to the location of the click event
        if (features.length) {
          console.log(features);
            // Get coordinates from the symbol and center the map on those coordinates
            map.flyTo({center: features[0].geometry.coordinates});
        }
    });

    map.on('mousemove', function (e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['stations'] });
        map.getCanvas().style.cursor = features.length ? 'pointer' : '';
    });

  });
})
.fail(function (err) {
  console.log('API call to GET stations failed', err);
});
