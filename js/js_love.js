// Functions here
function showJsLove() {
  console.log('I');
  $.getJSON('https://api.github.com/repos/rails/rails/commits', function(d) {
    console.log('javascript');
  });
  console.log('love');
};

var jqxhr = $.get( "example.php", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })

$(document).ready(function (){
  showJsLove();
});
