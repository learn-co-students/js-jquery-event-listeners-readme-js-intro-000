function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('input').on('keydown', function(keyboardkey){
    if(keyboardkey.which === 71){
      alert('You have pressed down on G!');
    }
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){

// call functions here

});
