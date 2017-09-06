function getIt(){
  $('p').on('click', function(key) {
    alert('Hey!');
  });
}

function frameIt(){


  $(document).on('load', function() {
    $("img").addClass( "tasty" );
  });
}

function pressIt(){
  $(document).on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed');
    }
  });
}

function submitIt(){
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
