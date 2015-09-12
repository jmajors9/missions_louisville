var App = {
    attachHandlers: function(){

        $('.regionMap').click(function(){

            var countryID = $(this).attr('id');

            $.each(App.data.events, function(i, event){

                if(event.regionMap == countryID){

                    console.log(event);
                }
            });
        });
    },
    data: '',
    fetch: function(){
        $.getJSON('url', function(response){

            App.data = response;
        });
    },
    start: function(){
        App.fetch();
        App.attachHandlers();
    }
};