// Functions here
function showJsLove() {
  console.log("I");
  $.get('https://api.github.com/repos/rails/rails/commits', function(){
    console.log("JavaScript");
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
