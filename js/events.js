function getIt() {
    alert("Hey");
}
$("p").on("Click", getIt); 


function frameIt() {
  $('.tasty').css('background', 'red');
}
$(".tasty").on("load", frameIt);


function pressIt() {
  $("input").keydown(function() {
    if(key.which == 71) {
      alert("You pressed G key");
     }
  });
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}
$("form").on("submit", submitIt);

$(document).ready(function(){
  getIt();
  pressIt();
  submitIt();
});
