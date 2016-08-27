// Functions here
function showJsLove() {
  console.log("Love");
  $.getJSON('https://api.github.com/repos/rails/rails/commits', function(response){
    console.log("JavaScript");
  })
};

$(document).ready(function (){
  console.log("I");
  showJsLove();
});
