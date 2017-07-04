function getIt() {
  $('p').click(function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').load(function() {
    $(this).attr('class', 'tasty');
  })
}

function pressIt() {
  $('#typing').keydown(function(key) {
    if(key.which === 71) {
      alert('You have pressed the g key');
    }
  })
}

function submitIt() {
  $('form').submit(function() {
    alert('Your form is going to be submitted now.');
  })
}
