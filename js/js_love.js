// Functions here
function showJsLove() {
  console.log("I")
  console.log("Love")
  $.getJSON('https://api.github.com/repos/rails/rails/commits', function(response) {
    console.log("Javascript")
  })
};

$(document).ready(function (){
  showJsLove();
});
