/********
Add Event Email Form
*********/
// $(document).ready(function() {
// $("#submit").click(function() {
// var name = $("#name").val();
// var email = $("#email").val();
// var message = $("#message").val();
// var contact = $("#contact").val();
// $("#returnmessage").empty(); // To empty previous error/success message.
// // Checking for blank fields.
// if (name == '' || email == '' || contact == '') {
// alert("Please Fill Required Fields");
// } else {
// // Returns successful data submission message when the entered information is stored in database.
// $.post("contact_form.php", {
// name1: name,
// email1: email,
// message1: message,
// contact1: contact
// }, function(data) {
// $("#returnmessage").append(data); // Append returned message to message paragraph.
// if (data == "Your Query has been received, We will contact you soon.") {
// $("#form")[0].reset(); // To reset form fields on success.
// }
// });
// }
// });
// });






// create an array relating the region buttons to the region on the SVG.
// make a function where all actions relate to eachother.

/*********************
Index stuff
**********************/



/*********************
Google API Code. UNUSED
**********************/

// function initialize() {
//             var mapCanvas = document.getElementById('regionMap');
//             var mapOptions = {
//               center: new google.maps.LatLng(0.2136715,16.9848501),
//               zoom: 4,
//               mapTypeId: google.maps.MapTypeId.ROADMAP
//               // fitBounds(true)
//               // google.maps.LatLngBounds(-31.920006, -19.489759, 37.470052, 52.580552)
//             }
//             var map = new google.maps.Map(mapCanvas, mapOptions);
//             map.set('styles', [
//               {
//                 "featureType": "water",
//                 "stylers": [
//                   { "color": "#555555" }
//                 ]
//               },{
//                 "featureType": "poi",
//                 "stylers": [
//                   { "visibility": "off" }
//                 ]
//               },{
//                 "featureType": "road",
//                 "stylers": [
//                   { "visibility": "off" }
//                 ]
//               },{
//                 "featureType": "landscape.natural",
//                 "stylers": [
//                   { "visibility": "off" }
//                 ]
//               },{
//                 "featureType": "landscape",
//                 "stylers": [
//                   { "visibility": "on" },
//                   { "color": "#cccccc" }
//                 ]
//               },{
//                 "featureType": "administrative.locality",
//                 "stylers": [
//                   { "visibility": "off" }
//                 ]
//               },{
//                 "featureType": "administrative.country",
//                 "elementType": "all",
//                 "stylers": [
//                   { "visibility": "simplified" }
//                 ]
//               },{
//               }
//             ]);
//         }
//         google.maps.event.addDomListener(window, 'load', initialize);