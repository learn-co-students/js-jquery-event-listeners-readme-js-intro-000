//define functions here

$(document).ready(function(){

// call functions here

});
function getIt() {
$('p').on('click', function() {
  alert('Hey!');
})
}

function frameIt() {
  $('img').on('load', function() {
    $('img').attr('class', 'tasty');
  })
}

function pressIt() {
  $('body').on('keydown', function(key) {
    if(key.which == 71) {
      alert('the g key was pressed down!');
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  })
}
