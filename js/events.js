//define functions here
function getIt(){
	$('p').on("click", function(){
		alert("Hey!");

});}

function frameIt(){
	$('img').on('load', function(){
  	$('img').addClass("tasty");
});
}

function pressIt(){
	$('input').on('keydown', function(key){
		if(key.which == 71){
			alert("Yep, that's a g, G.")
		}
	})
}

function submitIt(){
	$('form').on('submit', function(){
		alert("yer form gonna submit now")
	})
}

$(document).ready(function(){
	getIt();
	frameIt();
	pressIt();
	submitIt();
// call functions here

});
