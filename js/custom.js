// var App = {
//   attachHandlers: function(){
//     $("path").click(function(e){
//       e.preventDefault();
//       console.log($(this).attr("title"));

//     });
//   },
//   data: '',
//   fetch: function () {
//     $.getJSON("./data.json", function (response) {
//       App.data = response;
//     });
//   },
//   init: function(){
//     App.fetch();
//     App.attachHandlers();
//   }
// }

var App = {
    attachHandlers: function(){

        $('.regionMap').click(function(){

            var countryID = $(this).attr('title');

            $.each(App.data.events, function(i, event){

                if(event.regionMap == countryID){

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