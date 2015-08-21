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

$("#northAmericaButton").hover(function() {
    (#north_america.land).blur();
});

// $( "a" ).mouseout(function( event ) {
//   alert( event.relatedTarget.nodeName ); // "DIV"
// });