//define functions here

$(document).ready(function(){
 getIt()
 frameIt()
 pressIt()
 submitIt()
// call functions here

});
function getIt() {
  $("p").on('click', function(click) {
    alert("Hey!");
    return;
  });
}

function frameIt() {
  $('img').on('load', function() {
    $("img").addClass("tasty");
    return;
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which == 71) {
      alert("You have pressed the g key.")
    }
    return;
  })
}

function submitIt() {
  $(document).on("submit", function() {
    alert("Your form is going to be submitted now.")
    return;
  })
}