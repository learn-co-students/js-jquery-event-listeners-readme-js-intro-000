//define functions here
var getIt = function() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

var frameIt = function() {
  var tasty = ".tasty { border : '1px solid red'; }"
  $('img').on("load", function() {
    $('img').addClass("tasty");
  });
}

var pressIt = function() {
  $('form input').on("keydown", function(key) {
    if (key.which === 71) {
      alert("You have pressed g");
    }
  });
}

var submitIt = function() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
