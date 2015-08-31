// Steven's original
var App = {
  attachHandlers: function(){
    $('path').click(function(){
      var countryID = $(this).attr('title');
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
      console.log(response);
    });
  },
  start: function(){
    App.fetch();
    App.attachHandlers();
  }
};

//show or hide event or missions on about page.

function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if (document.getElementById(d).style.display == "none") {
    document.getElementById(d).style.display = "block";
  }
else {
  document.getElementById(d).style.display = "none";
  }
}


