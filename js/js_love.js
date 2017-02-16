// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON('https://api.github.com/repos/rails/rails/commits', function(res){
    console.log("Javascript");
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
