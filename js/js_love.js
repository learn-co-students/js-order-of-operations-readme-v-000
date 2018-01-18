// Functions here
function showJsLove() {
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
  console.log(2);
});
console.log(3);
  };

$(document).ready(function (){
  showJsLove();
});
