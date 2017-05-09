function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
//  $('img')[0].addEventListener('load', function() { alert("HERE")});
  $('img').on('load', function() {
    $(this).addClass('tasty');
  });
//  $('img').on('load', () => { $(this).addClass('tasty')});
}

function pressIt() {
  $('form input').on('keydown', e => { if ((e.detail || e.which) === 71) alert("You pressed 'g'.") });
}

function submitIt() {
  $('form').on('submit', () => alert('Your form is going to be submitted now.'));
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
