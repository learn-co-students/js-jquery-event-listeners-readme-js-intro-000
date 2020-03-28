//define functions here
function getIt() {
  $('p').on('click', () => alert('Hey!'))
}

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt() {
  $('form').on('keydown', key => {
    if(key.which === 71) {
      alert('You pressed the G key')
    }
  })
}

function submitIt() {
  $('form').on('submit', () => alert('Your form is going to be submitted now.'))
}

$(document).ready(function(){

// call functions here

});
