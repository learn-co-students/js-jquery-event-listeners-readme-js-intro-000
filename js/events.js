//define functions here
function getIt(){
	$('p').click(function(){
		alert("Hey!");
	});
}

function frameIt(){
	$('img').load(function(){
		$(this).addClass('tasty');
	});
}

function pressIt(){
	$('input').on('keydown', function(e){
		if(e.which == 71 || e.which == 103){
			alert("you pressed G");
		}
	});
}

function submitIt(){
	$("form").on('submit', function(){
		alert("Your form is going to be submitted now.");
	});
}
$(document).ready(function(){

// call functions here
pressIt();
submitIt();
frameIt();
getIt();
});
