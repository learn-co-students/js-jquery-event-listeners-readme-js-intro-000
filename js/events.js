//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function submitIt(){
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.') 
  });
}

function pressIt(){
  $('#typing').on('keydown', function(k){
    if(k.which == 71){
      alert("g was pressed down")
    }
  })
}


$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
  pressIt();

});
