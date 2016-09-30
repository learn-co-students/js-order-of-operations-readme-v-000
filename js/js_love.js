// Functions here
function showJsLove() {
  
  console.log("I");
  
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(data){
    console.log("JavaScript");
  }).fail(function(error){
    console.log("The request failed");
  });
  
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
