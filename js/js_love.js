// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){

    console.log("Love");
    // This is our success callback which is called automatically
  });
  console.log("Javascript");
};

$(document).ready(function (){

  showJsLove();


});
