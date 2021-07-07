$(document).ready(function(){
 getIt();
 frameIt();
 pressIt();
 submitIt();
});

function getIt() {
  $("p").on('click', function() {
    alert ("Hey!");
  });
}

function frameIt() {
  function onLoad() {
    $("img").addClass("tasty");
  }
  $("img")
    .on('load', onLoad)
    .each(function() {
      if ($(this)[0].complete) {
        onLoad();
      }
    });
}

function pressIt() {
  $("#typing").on("keydown", function(key) {
    if (key.which == 71) {
      alert("You pressed G");
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}
