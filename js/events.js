//define functions here
function getIt() {
  $('p').on('click', () => {alert("you entered the wrong value")})
  return;
}

function frameIt() {
  $('img').on('load', () => {$('img').addClass('tasty')})

}

function pressItAlert(key) {
  if(key.which == 71){
    alert('g was pressed');
  }
}

function pressIt() {
  $('input#typing').on('keydown', pressItAlert)
}

function submitIt() {
  $('form').on('submit', () => {alert("Your form is going to be submitted now.")})
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
