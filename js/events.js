//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $("input").on('keydown', function(key) {
    if (key.which === 71) {
      alert('You pressed the G key');
    }
  });
}

function submitIt() {
  $('form').on("submit", function() {
    $('input:first').val() === 'correct';
      alert('Your form is going to be submitted now.');
      return; //we can put if statement, but the lesson doesn't need it.
      alert("You entered the wrong value");
      return;
  });
}

$(document).ready(function(){
getIt();
// call functions here
frameIt();
pressIt();
submitIt();
});
