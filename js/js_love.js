// Functions here
function showJsLove() {
  const url = "https://api.github.com/repos/rails/rails/commits";
  console.log("I");
  $.getJSON(url, function() {
    console.log("JavaScript");
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
