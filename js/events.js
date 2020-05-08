//define functions here

function getIt() {
  $( "p" ).click(function() {
    alert( "Handler for .click() called." );
  });
}

function frameIt() {
  $('img').on('load', function(){
    $("img").addClass("tasty");
    $("tasty").css('border', "solid 2px red");
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which == 71){
      alert('g was pressed');
    }
  });
}

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()
});
