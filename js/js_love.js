// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function() {
    console.log("Javascript");
  });
  console.log("love");
};

$(document).ready(function (){
  showJsLove();
});
