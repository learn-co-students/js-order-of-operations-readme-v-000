// Functions here
function showJsLove() {
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(data) {
    console.log("Javascript");
  })

};

$(document).ready(function (){
  console.log("I");
  showJsLove();
  console.log("Love");
});
