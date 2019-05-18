function getIt() {
  $('p').on('click', function () {alert('Hey!');});
}
function frameIt() {
  $('img').on('load', function () {$('img').addClass('tasty')});
}
function submitIt() {
  $('form').on('submit', function() {alert('Your form is going to be submitted now.')});
}
function pressIt() {
  $('input#typing').on('keydown', function(event) {
    if(event.which===71) {
      alert('You pressed G!');
    }
  });
}
$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
  pressIt();
});
