//define functions here

$(document).ready(function(){

  getIt();
  frameIt();
  submitIt();
  pressIt();

});

function getIt() {
  $('p').on('click', () => {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', () => {
    $('img').attr('class', 'tasty');
  });
}

function submitIt() {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.');
  });
}

function pressIt() {
  $('#typing').on('keydown', (key) => {
    if(key.which === 71)
      alert('you pressed the right key!');
  });
}
