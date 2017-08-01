//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

function getIt(){
  $("p").on("click", function(e){
    alert("Hey!")
  });
}

function frameIt(){
  $("img").on("load", function(e){
    $("img").addClass("tasty")
  });
}

function pressIt(){
  $("#typing").on("keydown", function(e){
    if (e.which === 71){
      alert("You have pressed the 'G' key.")
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  });
}
