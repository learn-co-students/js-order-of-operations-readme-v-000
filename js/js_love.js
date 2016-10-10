("use strict");
// Functions here
function showJsLove() {
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
  console.log("I");
  console.log("Love");
  console.log("JavaScript");
  return response;
})
};

$(document).ready(function (){
  showJsLove();
});
