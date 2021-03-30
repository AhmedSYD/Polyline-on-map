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

var map = L.map('map',{zoomControl: true, drawControl: true}).setView([-33.45, -70.62], 13);
map.addLayer(grayLayer);

map.zoomControl.setPosition('bottomright');


var geojson = turf.polygon([[
  [-70.603637, -33.399918],
  [-70.614624, -33.395332],
  [-70.639343, -33.392466],
  [-70.659942, -33.394759],
  [-70.683975, -33.404504],
  [-70.697021, -33.419406],
  [-70.701141, -33.434306],
  [-70.700454, -33.446339],
  [-70.694274, -33.458369],
  [-70.682601, -33.465816],
  [-70.668869, -33.472117],
  [-70.646209, -33.473835],
  [-70.624923, -33.472117],
  [-70.609817, -33.468107],
  [-70.595397, -33.458369],
  [-70.587158, -33.442901],
  [-70.587158, -33.426283],
  [-70.590591, -33.414248],
  [-70.594711, -33.406224],
  [-70.603637, -33.399918]
]]);
var options = {tolerance: 0.1, highQuality: false};

var simplified = turf.simplify(geojson, options);
var addToMap = [geojson, simplified]
L.geoJSON(simplified).addTo(map);
// FeatureGroup is to store editable layers
// Initialise the FeatureGroup to store editable layers
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var drawPluginOptions = {
  position: 'topright',
  draw: {
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
    // disable toolbar item by setting it to false
    polyline: false,
    circle: false, // Turns off this drawing tool
    rectangle: false,
    marker: false,
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

map.on('draw:created', function(e) {
  var type = e.layerType,
    layer = e.layer;
    drawControl.remove();
    drawControlEdit.addTo(map);
  if (type === 'marker') {
    layer.bindPopup('A popup!');
  }

  editableLayers.addLayer(layer);
});
map.on('draw:deleted', function (e) {
  self.drawControlEdit.remove();
  self.drawControl.addTo(map);
});



// function createCustomIconSchool (feature, latlng) {
//   let myIcon = L.icon({
//     iconSize: [27, 27],
//     iconAnchor: [13, 27],
//     popupAnchor:  [1, -24],
//     iconUrl: 'school.png'

//   })
//   return L.marker(latlng, { icon: myIcon })
// }
// function createCustomIconHospital(feature, latlng) {
//   let myIcon = L.icon({
//     iconSize: [27, 27],
//     iconAnchor: [13, 27],
//     popupAnchor:  [1, -24],
//     iconUrl: 'hospital.png'

//   })
//   return L.marker(latlng, { icon: myIcon })
// }
// function onEachFeature(feature, layer) {
//   // does this feature have a property named popupContent?
//   console.log("hello");
//   if(feature.properties.Name){
//     layer.bindPopup(feature.properties.Name);
//   }

// }

// // create an options object that specifies which function will called on each feature
// let myLayerOptionsSchool = {
//   pointToLayer: createCustomIconSchool,
//   onEachFeature: onEachFeature
// }
// let myLayerOptionsHospital = {
//   pointToLayer: createCustomIconHospital,
//   onEachFeature: onEachFeature
// }
// L.geoJSON(hospitals,myLayerOptionsHospital).addTo(map);
// L.geoJSON(libraries,myLayerOptionsSchool).addTo(map);





// }
// document.addEventListener("DOMContentLoaded",()=>{
//   mapboxgl.accessToken = "pk.eyJ1IjoiYWhtZWRzeWQiLCJhIjoiY2tsaWtvemlqMGE0czJ4cGxlaHMwZGUzNyJ9.ZqoUVoiuHS9LzOvahBnWKw"
//   var map = new mapboxgl.Map({
//       container: 'map', // container id
//       style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
//       center: [-114.066666, 51.049999], // starting position
//       zoom: 12 // starting zoom
//     });
//   // Add zoom and rotation controls to the map.
//   map.addControl(new mapboxgl.NavigationControl());
//   const request= new XMLHttpRequest();
//   request.open("POST",'/nearest');
//   //callback fucntion when request completes
//   request.onload=()=>{
//     data_json=JSON.parse(request.responseText);
//     var schools=data_json["schools"];
//     var hospitals_clinics=data_json["hospitals_clinics"];
//     console.log(schools);
//     console.log(hospitals_clinics);


//     map.on('load', function () {

//       map.addLayer({
//         id: 'hospitals_clinics',
//         type: 'symbol',
//         source: {
//           type: 'geojson',
//           data: hospitals_clinics, 
//         },
//         layout: {
//         'icon-image': 'hospital-15',
//         'icon-allow-overlap': true
//         },
//         paint: {}
//       });
       
//       map.addLayer({
//         id: 'schools',
//         type: 'symbol',
//         source: {
//         type: 'geojson',
//         data: schools
//         },
//         layout: {
//         'icon-image': 'school-15',
//         'icon-allow-overlap': true
//         },
//         paint: {}
//       });
       
//       map.addSource('nearest-hospital', {
//         type: 'geojson',
//         data: {
//         'type': 'FeatureCollection',
//         'features': []
//         }
//       });
 

    
//     });

//     var popup = new mapboxgl.Popup();
//     map.on('mousemove', function(e) {
//       var features = map.queryRenderedFeatures(e.point, { layers: ['hospitals_clinics', 'schools'] });
//       if (!features.length) {
//         popup.remove();
//         return;
//       }
//       var feature = features[0];
    
//       popup.setLngLat(feature.geometry.coordinates)
//         .setHTML(feature.properties.name)
//         .addTo(map);
    
//       map.getCanvas().style.cursor = features.length ? 'pointer' : '';
//     });


//     map.on('click', function (e) {
//       var schoolFeatures = map.queryRenderedFeatures(e.point, {
//         layers: ['schools']
//       });
//       if (!schoolFeatures.length) {
//         return;
//       }
      
//       var schoolFeature = schoolFeatures[0];
      
//       var nearestHospital = turf.nearest(schoolFeature, hospitals_clinics);
      
//       if (nearestHospital != null) {
//           map.getSource('nearest-hospital').setData({
//             'type': 'FeatureCollection',
//             'features': [nearestHospital]
//           });
          

//           map.addLayer(
//           {
//             id: 'nearest-hospital',
//             type: 'circle',
//             source: 'nearest-hospital',
//             paint: {
//               'circle-radius': 12,
//               'circle-color': '#486DE0'
//           }
//           },
//           'hospitals_clinics'
//           );
//       }
//     });



//   };

//     //send the request to flask 
//     request.send({"start":"Yes"});
// });