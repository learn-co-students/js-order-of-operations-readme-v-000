// Functions here
function showJsLove() {
  var github = "https://api.github.com/repos/rails/rails/commits";

  console.log("I");

  $.getJSON(github, function(){
    console.log("JavaScript");
  });

  console.log("Love");
};


$(document).ready(function (){
  showJsLove();
});
