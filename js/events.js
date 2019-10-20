//define functions here
function getIt() {
  $('p').click(function() {
    //alert when 'p' is clicked
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    //adds 'tasty' class to img with red border
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('form #typing').on('keydown', function(key) {
    if(key.which == 71) {
        alert('g was pressed');
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
  // call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
