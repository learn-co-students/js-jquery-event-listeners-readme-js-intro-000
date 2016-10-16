//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $("input").on("keydown", function(e){
    let key = e.which;
    console.log(key);
    if ( key === 71 ) {
      alert("You pressed the right letter");
      return;
    }
    //return window.alert("you DIDNT press the right hey!");


  });
}
function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  });
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
