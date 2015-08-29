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
        $('path').click(function(){
            var countryID = $(this).attr('title');
            $.each(App.data.events, function(i, event){

                if(event.path == countryID){

                    console.log(event);
                } else {
                  console.log("Sumpn ain't raht")
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