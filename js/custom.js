var App = {
  attachHandlers: function(){
    $("path").click(function(e){
      e.preventDefault();
      alert($(this).attr("title"));

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