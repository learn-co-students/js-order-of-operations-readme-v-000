// Functions here
function showJsLove() {
  console.log('I');
  const url = 'https://api.github.com/repos/rails/rails/commits';
  $.getJSON(url,console.log("JavaScript"));
    console.log("Love")
};

$(document).ready(function (){
  showJsLove();
});
