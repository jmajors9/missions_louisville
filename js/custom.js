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
                mapTypeId: google.maps.MapTypeId.ROADMAP               
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);
            map.set('styles', [
              {
                "featureType": "water",
                "stylers": [
                  { "color": "#555555" }
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

// $( "a" ).mouseout(function( event ) {
//   alert( event.relatedTarget.nodeName ); // "DIV"
// });