//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').attr('class', 'tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('body').on('keydown', function(key) {
    if (key.which === 71) {
      alert("'g was pressed'")
    }
  })
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  submitIt()
  pressIt()
});
