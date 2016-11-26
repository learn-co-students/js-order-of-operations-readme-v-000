// Functions here
function showJsLove() {

  $.getJSON("https://api.github.com/repos/rails/rails/commits", function (data) {
      console.log("I Love JavaScript");
    }, function(error) {
      console.log("An error occured.");
    });
}

$(document).ready(function (){
  showJsLove();
});
