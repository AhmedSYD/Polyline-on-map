//defime global variables
var grayLayer=L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/light-v9',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiYWhtZWRzeWQiLCJhIjoiY2tsaWtvemlqMGE0czJ4cGxlaHMwZGUzNyJ9.ZqoUVoiuHS9LzOvahBnWKw'
});

var map = L.map('map',{zoomControl: true, drawControl: true}).setView([51.049999, -114.066666], 13);
map.addLayer(grayLayer);

map.zoomControl.setPosition('bottomright');


var polyline=[]
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var drawPluginOptions = {
  position: 'topright',
  draw: {
    // disable toolbar item by setting it to false
    polyline: false,
    circle: false, // Turns off this drawing tool
    rectangle: false,
    marker: false,
    polygon: {
      allowIntersection: false, // Restricts shapes to simple polygons
      drawError: {
        color: '#e1e100', // Color the shape will turn when intersects
        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
      },
      shapeOptions: {
        color: '#97009c'
      }
    },

    },
  edit: {
    featureGroup: editableLayers, //REQUIRED!!
    remove: false
  }
};

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw(drawPluginOptions);
map.addControl(drawControl);

drawControlEdit = new L.Control.Draw({
  edit: {
    featureGroup: editableLayers,
    edit: false
  },
  draw: false
});
var simplified;
var simplified_created=0; //flag to check if the samplified polygon is created or not
map.on('draw:created', function(e) {
  var type = e.layerType,
    layer = e.layer;
    drawControl.remove();
    drawControlEdit.addTo(map);
  if (type === 'marker') {
    layer.bindPopup('A popup!');
  }
   
  editableLayers.addLayer(layer);
  simplified_created=0;
  polyline=layer.getLatLngs()
});
map.on('draw:deleted', function (e) {
  drawControlEdit.remove();
  drawControl.addTo(map);
 
  
  // }
});

document.getElementById("simplify").addEventListener("click", function() {
  if(polyline.length==0){
    alert("No polygon is drawn!!");
    return;
  }
  if(simplified_created){// simplified is already created and no more polygon is drawn
    alert("Simplified polygon is already created and no more polygon is drawn!");
    return;   
  }
  console.log("outputlayers:");
  console.log(polyline);
  

  console.log(polyline[0].length);
  var first_loc;

  var results = polyline[0].map((item, index) => {
      if(index==0){
        first_loc=[item.lng, item.lat];
      }
      return [item.lng, item.lat];
      
  });
  // console.log("final array in the result:");
  // console.log(results[results.length-1]);

  if(results[results.length-1]!=first_loc){
    results.push(first_loc);
  }
  

  
  results=[results];
  console.log("results");
  console.log(results);
  var geojson = turf.polygon(results);
  console.log("geojson data:");
  console.log(geojson);
  var options = {tolerance: 0.01, highQuality: false};

  simplified = turf.simplify(geojson, options);
  console.log("simplified:")
  console.log(simplified)
  L.geoJSON(simplified).addTo(map);
  simplified_created=1;
  
});

