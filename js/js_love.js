// Functions here
function showJsLove() {
  console.log('I');
  var url = "https://api.github.com/repos/rails/rails/commits"
  $.getJSON(url, function() {
    console.log('JavaScript')
  });
  console.log('Love');
};

$(document).ready(function (){
  showJsLove();
});
