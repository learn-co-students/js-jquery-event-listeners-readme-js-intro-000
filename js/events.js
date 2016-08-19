//define functions here
function getIt(){
  $('p').on("click", function(){
  //action you want taken
    alert("hi!")
  })
}

function frameIt(){
  $('img').on("load", function(){
  //action you want taken
    $('img').addClass('tasty')
  })
}

function submitIt(){
  $('form').on("submit", function(){
  //action you want taken
    alert("Your form is going to be submitted now.")
  })
}

function pressIt(){
  $('#typing').on("keydown", function(key){
  //action you want taken
    if (key.which == 71){
      alert('g was pressed');
    }
  })
}


$(document).ready(function(){

// call functions here
getIt()

});
