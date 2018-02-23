function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    // 'G'.charCodeAt(0) is 71
    if (key.which == 'G'.charCodeAt(0)) alert(key.which);
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
