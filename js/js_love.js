// Functions here
function showJsLove() {
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
    console.log("Love");
    console.log("Javascript");
  });
  console.log("I");
};

$(document).ready(function (){
  showJsLove();
});
