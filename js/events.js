//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();

});

var getIt = function(){
  $('p').on("click", function(){
    alert("Hey!");
  });
};

var frameIt = function(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
};

var submitIt = ()=>{
  $('form').on('submit', ()=>{
    alert("Your form is going to be submitted now.");
  });
};

var pressIt = ()=>{
  $(document).on('keydown', function(key){
    if (key.which === 71){
      alert("You pressed g!");
    }
  });
};
