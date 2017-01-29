//define functions here
function getIt() {
  $('p').click(function() { alert("Hey!"); })
}

function pressIt() {
  $('form').keydown(function (event) {
    if(event.which === 71) {
    alert('Yo have pressed the G key')
  }
  })
}

function submitIt() {
  $('form').on('submit', function () {
    alert("Your form is going to be submitted now.")
  })
}

function frameIt() {
$('img').on('load', function () {
  $('img').addClass('tasty')
})
}
$(document).ready(function(){

// call functions here

});
