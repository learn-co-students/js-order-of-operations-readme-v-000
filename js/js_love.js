// Functions here


$(document).ready(function (){
  showJsLove();
});

function showJsLove() {
console.log('I');
$.getJSON("https://api.github.com/repos/rails/rails/commits", function(){
  console.log("Javascript");
  });
    console.log("Love");

}