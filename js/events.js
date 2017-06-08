//define functions here
function getIt() {
  $("p").on("click", function() {
    window.alert("Hey!");
  })
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  })
}

function pressIt() {
  $("form").on("keydown", function(key) {
    if(key.which === 71) {
      window.alert("g was pressed!")
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    window.alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
