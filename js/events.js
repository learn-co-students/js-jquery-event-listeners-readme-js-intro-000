//define functions here
function getIt(){
  $('p').on("click", function(){
    alert ("Hey!");
  });
}

function frameIt(){
  $('img').attr("class","tasty");
}
function pressIt() {
  $('#typing').keydown(function (e){
    if (parseInt(e.which || e.detail) === 71) {
      alert("blaba");
    }
  });
}
function submitIt() {
  $('form').submit(function(){
    alert("Your form is going to be submitted now.")
  });
}




$(document).ready(function(){

// call functions here
});
