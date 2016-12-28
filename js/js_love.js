// Functions here
function showJsLove() {
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
  // This is our success callback which is called automatically
    console.log("JavaScript");
  })
  
};

$(document).ready(function (){
  console.log("I");
  showJsLove();
  console.log("Love")
});
