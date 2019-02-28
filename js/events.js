//define functions here
function getIt() {
  $("p").on("click", function() {
    alert('Hey!');
  })}

function frameIt() {
  $("img").load(function(){
    $("img").addClass("tasty");
    });
  $("tasty").load(function(){
    $(this).css("border","solid 15px red");
    })
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  })
}

function pressIt() {
  $("#typing").on("keydown", function(e) {
    if (e.which === 71) {
      alert("You have pressed the G key.");
    }
  })
 }



$(document).ready(function(){

// call functions here
getIt();

submitIt();

frameIt();

pressIt();

});
