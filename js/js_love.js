// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(reponse) {
    console.log("Javascript");
  });
  console.log("love");
};

$(document).ready(function (){
  showJsLove();
});
