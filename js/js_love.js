// Functions here
function showJsLove() {
  console.log("I");
  var endpoint = "https://api.github.com/repos/rails/rails/commits"
  $.getJSON(endpoint, function(response) {
    console.log("Javascript");
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
