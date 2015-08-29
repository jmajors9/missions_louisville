var App = {
  attachHandlers: function(){
    $("path").click(function(e){
      e.preventDefault();
      console.log($(this).attr("title"));

    });
  },
  data: '',
  fetch: function () {
    $.getJSON("./data.json", function (response) {
      App.data = response;
    });
  },
  init: function(){
    App.fetch();
    App.attachHandlers();
  }
}