//define functions here

$(document).ready(function(){
  $ ("p").on('click', getIt);
  $ ('img').on('load', frameIt);
   pressIt();
   $ ('form').on("submit", submitIt);
 });

function getIt(){
  alert ("Hey!")
}
function frameIt(){
  $("img").addClass("tasty")
}
function pressIt(){
  $("input").on("keydown", function(key){
    if(key.which == 71){
      alert("You have pressed G")
    }
  })
}
function submitIt(){
    alert('Your form is going to be submitted now.')
}
