// Functions here
function showJsLove() {
};

$(document).ready(function (){
  showJsLove();
});

function showJsLove(){
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", data=> {
    console.log("Javascript");
  });
  console.log("Love");
}
