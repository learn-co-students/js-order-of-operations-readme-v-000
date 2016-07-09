// Functions here
function showJsLove() {
  var url = 'https://api.github.com/repos/rails/rails/commits';
  console.log("I");
  $.getJSON(url, function() {
    console.log("Success");
  })
  console.log("Love");
  console.log("JavaScript");
};

$(document).ready(function (){
  showJsLove();
});
