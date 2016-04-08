// Functions here
function showJsLove() {
  $.getJSON('https://api.github.com/repos/rails/rails/commits', function(response){
    console.log('Javascript')
  });
  console.log('I');
  console.log('Love');

};

$(document).ready(function (){
  showJsLove();
});
