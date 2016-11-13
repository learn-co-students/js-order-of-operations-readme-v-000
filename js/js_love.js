// Functions here
function showJsLove() {
};

$(document).ready(function (){
  showJsLove();
});

console.log("I");

function showJsLove() {
  console.log("Javascript");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
  });
}
console.log("love");
