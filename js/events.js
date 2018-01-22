//define functions here

function getIt() {
  $('p').on('click', function() {
    // action we want taken
    alert('hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    // load event handler
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    // Keypress 'G' is ascii 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
