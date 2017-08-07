//define functions here
function getIt(){
    $('p').on("click", alert("Hey!"))
}
function frameIt(){
  $("img").on("load",function (){
                      $("img").addClass("tasty")
                    })
}
function pressG(e){
  if (e.detail || e.which === 71){
    alert("You pressed G!");
  }
}
function pressIt(){
  $("#typing").on("keydown",pressG);
}
function submitIt(){
  $("form input:last").on("submit",alert("Your form is going to be submitted now."));
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
