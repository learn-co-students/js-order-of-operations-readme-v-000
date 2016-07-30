// Functions here
function showJsLove() {
  $.getJSON("https://api.github.com/repos/rails/rails/commit", function(response) {
    console.log(Love);
  })
};

$(document).ready(function (){
  showJsLove();
});
