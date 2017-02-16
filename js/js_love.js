function showJsLove() {
  var url = 'https://api.github.com/repos/rails/rails/commits';
  console.log("I");
  $.getJSON(url, function(){
console.log("Javascript");
  });
  console.log("Love");
};

$(document).ready(function (){
  showJsLove();
});
