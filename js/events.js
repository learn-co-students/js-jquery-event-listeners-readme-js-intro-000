// define functions here

function getIt() {
  $('p').on('click');
  alert('hey');
}

function frameIt() {
  $('img').on('load');
  $('img').addClass('tasty');
}

function submitIt() {
  $('form').on('submit');
  alert('Your form is going to be submitted now.');
}

function pressIt() {
  $(document).on('keydown', (key) => {
    if (key.which === 71) {
      alert('The G was pressed');
    }
  });
}

$(document).ready(() => {
  getIt();
  frameIt();
  submitIt();
  pressIt();
});
