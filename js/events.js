//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').load(function() {
    $(this).addClass('tasty');
  });
}

function submitIt() {
  $('form').submit(function() {
    alert('Your form is going to be submitted now.');
  });
}

function pressIt() {
  $('#typing').keydown(function(event) {
    if(event.which === 71) {
      alert('You pressed the G!');
    }
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
  pressit();
});
