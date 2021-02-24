//define functions here
function getIt() {
  $('p').on("click", function(){
      alert("Hey!");
  });
}

function frameIt() { //bind the load event that adds the class tasty to the image to add a red frame to the image
  $('img').on("load", function(){
     $('img').addClass('tasty');
  });
}

function pressIt() {  //bind a keydown event to the input field of the form that alerts a user when they have pressed the G key
  $('input').on("keydown", function(key){
    if (key.which == 71) {
    	alert("You pressed G!");
    }
  });
}

function submitIt() { //function should bind a submit event to the form that alerts "Your form is going to be submitted now."
  $('form').on("submit", function(key){
  	alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){  //

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
