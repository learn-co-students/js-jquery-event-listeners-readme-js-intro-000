function getIt() {
  $('p').on('click',function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').addClass('tasty').on('load', function() {
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert('You pressed G button');
    };
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
