//define functions here

$(document).ready(function(){

});

function getIt() {
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
    if (key.which == 71) {
      alert('You have pressed G.');
      return;
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
      alert('Your form is going to be submitted now.');
      return;
  });
}
