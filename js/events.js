//define functions here

$(document).ready(function(){

// call functions here

getIt()
submitIt()
pressIt()
frameIt()

});


function getIt() {
  $('p').on("click", function() {alert("Hey!") });
}

function submitIt() {
  
  $("form").on("submit", function() { 
    alert("Your form is going to be submitted now.")
  })
}




function pressIt() {  
  
  $(document).on('keydown', function(key) { 
    console.log(key.which)
    if (key.which == 71){   alert('You have pressed the G key.');}
    
  });
}

function frameIt() {
  
  $('img').on('load', function(){ 
    
    $("img").addClass("tasty")
  });
}