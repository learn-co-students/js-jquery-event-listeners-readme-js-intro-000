function getIt() {
  $('p').on('click', () => alert("Hey!"));
}

function frameIt() {
  $('img').on('load', () => $('img').addClass('tasty'));
}

function pressIt() {
  $('form input').on('keydown', (key) => (key.which == 71) ? alert("G key was pressed!") : 0);
}

function submitIt() {
  $('form').on('submit', () => alert("Your form is going to be submitted now."));
}


$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
