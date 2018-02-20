//define functions here
function getIt() {
  $("p").on("click", () => {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $("#typing").on("keydown", (e) => {
    if (e.detail === 71 || e.location === 71 || e.which === 71) {
      alert("You pressed the G key");
    }
  });
}

function submitIt() {
  $("form").on("submit", (e) => {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
    frameIt();
    getIt();
    pressIt();
    submitIt();
});
