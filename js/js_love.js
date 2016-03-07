// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits",function(response){
    console.log("JavaScript");
  }).fail(function(error){
    console.log("Oops, something went wrong: " + error.statusText);
  });
  console.log("love");
};

$(document).ready(function (){
  showJsLove();
});
