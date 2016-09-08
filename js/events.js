//define functions here

$(document).ready(function(){
getIt()
frameIt()
pressIt()

// call functions here

});

function getIt() {
  $('p').on('click', function(){
    return window.alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form input:first-child').on('keydown', function(key) {
    if (key.which === 71) {
    return window.alert('You have pressed g!')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    return window.alert('Your form is going to be submitted now.')
  })
}
