// Functions here
function showJsLove() {
  $.getJSON('https://api.github.com/repos/rails/rails/commits', function(response) {
    console.log("JavaScript");
  });
}

$(document).ready(function (){
  console.log("I");
  console.log("Love");
  showJsLove();

});
