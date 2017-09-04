function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $(document).on('load', function() {
    $('img').addClass('tasty');
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which === 71) {
      alert('the letter G has been pressed.');
      return;
    }
  });
}



$(document).ready(function(){
getIt();
frameIt();
submitIt();
pressIt();
});
