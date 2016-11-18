






function showJsLove() {
  // / Will go first
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function() {
    // will console 2nd
    console.log("JavaScript");
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
