function getIt() {
  alert('Hey!')
}

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt() {
  $('#typing').on('keydown', e => {
    if(e.which == 71){
      alert('G was pressed')
    }
  })
}

function submitIt() {
  alert('Your form is going to be submitted now.')
}

$(document).ready(function(){
 $('p').on('click', getIt);
 $('img').on('load', frameIt);
 $('#typing').on('keydown', pressIt);
 $('form').on('submit', submitIt)
// call functions here
});
