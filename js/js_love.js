// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
    console.log("love");
    console.log("javascript");
  });
};

$(document).ready(function (){
  showJsLove();
});
