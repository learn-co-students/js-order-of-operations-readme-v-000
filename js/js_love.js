// Functions here
function showJsLove() {
  $.getJSON('https://api.github.com/repos/rails/rails/commits', function  (response) {
    console.log("JavaScript")
  })
};

$(document).ready(function (){
  showJsLove();

  console.log("I")
  showJsLove();
  console.log("Love")
});
