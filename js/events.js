//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    let i = document.getElementsByTagName('img')[0];
    i.style.border = '2px solid #E8272C';
    console.log(i);
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert(key.value + ' was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function() {
  // call functions here
  getIt();
});
