function getIt() {
  $("p").on("click", () => {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", () => {
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $("#typing").on("keydown", (e) => {
    if(e.which === 71){
      alert("G pressed");
    }
  });
}

function submitIt() {
  $("form").on("submit", () => {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
