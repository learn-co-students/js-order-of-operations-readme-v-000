// Functions here

var url='https://api.github.com/repos/rails/rails/commits'
function showJsLove() {
  console.log('I');
  $.getJSON(url, function(){
    console.log('JavaScript');
  })
    console.log('Love');

};

$(document).ready(function (){
  showJsLove();
});
