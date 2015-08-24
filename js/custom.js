<<<<<<< HEAD
// add all your code to this method, as this will ensure that page is loaded
    AmCharts.ready(function() {
        // create AmMap object
        var map = new AmCharts.AmMap();
        // set path to images
        map.pathToImages = "ammap/images/";

        /* create data provider object
         map property is usually the same as the name of the map file.

         getAreasFromMap indicates that amMap should read all the areas available
         in the map data and treat them as they are included in your data provider.
         in case you don't set it to true, all the areas except listed in data
         provider will be treated as unlisted.
        */
        var dataProvider = {
            mapURL: "ammap/maps/svg/worldLow.svg",
            getAreasFromMap:true                    
        }; 
        // pass data provider to the map object
        map.dataProvider = dataProvider;

        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map.areasSettings = {
            autoZoom: true,
            selectedColor: "#CC0000"
        };

        // let's say we want a small map to be displayed, so let's create it
        // map.smallMap = new AmCharts.SmallMap();

        // write the map to container div
        map.write("mapdiv");
    });
=======
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
>>>>>>> origin/master
