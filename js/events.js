function getIt(){
  $('p').on("click", function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on("load", function(){
    $('img').addClass('tasty');
  });
}

function submitIt(){
  $('form').on("submit", function(){
    alert('Your form is going to be submitted now.');
  });
}

function pressIt(){
  $(document).on("keydown", function(key){
    if(key.which == 71){
      alert('G key was pressed')
    }
  });
}

$(document).ready(function(){

});
