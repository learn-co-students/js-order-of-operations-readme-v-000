// Functions here
function showJsLove() {
  url = "https://api.github.com/repos/rails/rails/commits"

  console.log("I")

  $.get(url, function(){
    console.log("JavaScript");
  }).fail(function(){
    console.log("JavaScript");
  });

  console.log("Love")
};

$(document).ready(function (){
  showJsLove();
});
