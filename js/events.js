//define functions here

$(document).ready(function(){

// call functions here

});


function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  });
}


function frameIt() {
  $('img').on("load", function() {
    // $('img').css("border", "red 2px");
    $('img').addClass( "tasty" );
  });
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
    if (key.which == 71) {
      alert('you have pressed G');
    }
  });
}

function submitIt() {
  $('form').on("submit", function() {
    alert('Your form is going to be submitted now.');
  }
)};
