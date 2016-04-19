// Functions here
function showJsLove() {
  $.get('https://api.github.com/repos/rails/rails/commits' function(data){

      $('body').append(data);

  });

};

$(document).ready(function (){
  showJsLove();
  alert('here');
});
