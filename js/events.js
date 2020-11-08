//define functions here
function getIt() {
  $('p').on('click', e => { alert('Hey!') });
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  $('input').on('keydown', e => {
    if (e.which === 71) {
      // e.preventDefault();
      alert('You have pressed the G key.')
    }
  });
}

function submitIt() {
  $("form").submit(e => { alert('Your form is going to be submitted now.'); });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt()

});
