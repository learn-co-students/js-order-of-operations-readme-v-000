// Functions here
function showJsLove() {
	console.log("I");
	$.getJSON("https://api.github.com/repos/rails/rails/commits", function(response) {
		console.log("javaScript");
	});
	console.log("love");
};

$(document).ready(function (){
  showJsLove();
});
