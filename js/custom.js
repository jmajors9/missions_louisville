// SVGMap
// ====================
    // AmCharts.ready(function() {
    //     var map = new AmCharts.AmMap();
    //     map.pathToImages = "ammap/images/";
    //     var dataProvider = {
    //         map: "continentsLow",
    //         getAreasFromMap:true                    
    //     }; 
    //     // pass data provider to the map object
    //     map.dataProvider = dataProvider;

    //     map.areasSettings = {
    //         autoZoom: true,
    //         selectedColor: "#CC0000"
    //     };

    //     // write the map to container div
    //     map.write("mapdiv");
    // });

/********
Index stuff
*********/
// create an array relating the region buttons to the region on the SVG.
// make a function where all actions relate to eachother.

function initialize() {
            var mapCanvas = document.getElementById('regionMap');
            var swLatLng = "-36.056761, 54.403794";
            var neLatLng = "36.966439, -19.037801";
            var darkestHeart = "0.2136715,16.9848501";
            var mapOptions = {
                center: new google.maps.LatLng(0.2136715,16.9848501),
                zoom: 2,
                mapTypeId: google.maps.MapTypeId.ROAD               
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);
            map.set('styles', [
              {
                "featureType": "water",
                "stylers": [
                  { "color": "#808080" }
                ]
              },{
                "featureType": "poi",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "road",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "landscape.natural",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "landscape",
                "stylers": [
                  { "visibility": "on" },
                  { "color": "#cccccc" }
                ]
              },{
                "featureType": "administrative.locality",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [
                  { "visibility": "simplified" }
                ]
              },{
              }
            ]);
        }
        google.maps.event.addDomListener(window, 'load', initialize);

// regionMap.set ('styles', [
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [
//       { color: '#000000' },
//       { weight: 1.6 }
//     ]
//   }, {
//     featureType: 'road',
//     elementType: 'labels',
//     stylers: [
//       { saturation: -100 },
//       { invert_lightness: true }
//     ]
//   }, {
//     featureType: 'landscape',
//     elementType: 'geometry',
//     stylers: [
//       { hue: '#ffff00' },
//       { gamma: 1.4 },
//       { saturation: 82 },
//       { lightness: 96 }
//     ]
//   }, {
//     featureType: 'poi.school',
//     elementType: 'geometry',
//     stylers: [
//       { hue: '#fff700' },
//       { lightness: -15 },
//       { saturation: 99 }
//     ]
//   }
// ]);
// $( "a" ).mouseout(function( event ) {
//   alert( event.relatedTarget.nodeName ); // "DIV"
// });