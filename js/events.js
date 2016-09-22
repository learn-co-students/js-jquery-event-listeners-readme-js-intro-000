//define functions here
function getIt() {
  $('p').on('click', () => {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', event => {
    $(event.currentTarget).addClass('tasty');
  })
}

function submitIt() {
  $('form').on('submit', () => {
    alert("Your form is going to be submitted now.");
  })
}

function pressIt() {
  $('input').on('keydown', e => {
    if ('G' === String.fromCharCode(e.which)) alert("Gee!!!");
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
  pressIt();
});
