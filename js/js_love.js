// Functions here
function showJsLove() {
  console.log("I");
$.getJSON('https://api.github.com/repos/rails/rails/commits', function(response){
  console.log("here")
  console.log("JaveScript");

});
console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
