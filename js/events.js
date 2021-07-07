


//define functions here
function getIt(){
  $('p').on('click', function(){
  alert ("Hey!");
  return;
});
}
function frameIt (){
  $("img").on("load", function(){
  $("img").addClass("tasty");
});
}
function pressIt (){
  $(document).on("keydown", function(key){
    if (key.which == 71)
    alert ("Stop pressing the G button on our keyboad");
  });
    return;
}
function submitIt(){
  $("form").on("submit",function() {
    alert ('Your form is going to be submitted now.');
  })
  return;
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
