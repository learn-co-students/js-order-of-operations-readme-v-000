// Functions here
function showJsLove() {
  console.log("I");
  var url = 'https://api.github.com/repos/rails/rails/commits';
  $.getJSON(url, function(response) {
    console.log("JavaScript");
  }); //.get .fail
  console.log("Love");
}; //showJsLove

$(document).ready(function (){
  showJsLove();
});
