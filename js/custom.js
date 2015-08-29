// var App = {
//   attachHandlers: function(){
//     $("path").click(function(){
//       var countryID = $(this).attr("title");
//       console.log(countryID);
//     });
//   },
//   data: '',
//   fetch: function () {
//     $.getJSON("/data.json", function (response) {
//       App.data = response;
//     });
//   },
//   start: function(){
//     App.fetch();
//     App.attachHandlers();
//   }
// }

// My playing around

// var App = {
//   attachHandlers: function(){
//     $('path').click(function(){
//       var countryID = $(this).attr('title');
//       $.each(App.data.events, function(i, event){
//         if(event.path == countryID){
//           console.log(event);
//         } else {
//           console.log("Sumpn ain't raht")
//         }
//       });
//     });
//   },
//   data: '',
//   fetch: function(){
//     $.getJSON('/data.json', function(response){
//       App.data = response;
//     });
//   },
//   start: function(){
//     App.fetch();
//     App.attachHandlers();
//   }
// }


// Steven's original
var App = {
    attachHandlers: function(){

        $('.country').click(function(){

            var countryID = $(this).attr('id');

            $.each(App.data.events, function(i, event){

                if(event.country == countryID){

                    console.log(event);
                }
            });
        });
    },
    data: '',
    fetch: function(){
        $.getJSON('/data.json', function(response){

            App.data = response;
        });
    },
    start: function(){
        App.fetch();
        App.attachHandlers();
    }
}