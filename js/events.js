//define functions here

$(document).ready(function(){

// call functions here
getIt();

});

function getIt() {
	// body...
	$('p').on('click', function () {
		// body...
		alert("Hey!");
	});
};

function frameIt(argument) {
	// body...
	$('img').on('load', function() {
        $('img').addClass('tasty');
	});
};

function pressIt() {
	// body...
	$('input').on('keydown', function (e){
        var key = parseInt(e.which || e.detail);
        if (key == 71){
        	alert("WOW, you prassed g");
        };
	});
};

function submitIt() {
	// body...
    $('form').on('submit', function (){
        alert("Your form is going to be submitted now.");
    });
};

