function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $(window).on("load", function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $(document).on("keydown", function(key) {
    if (key.which == 71) {
      alert('G key pressed!');
    }
  });
}

function submitIt() {
  $('form').on("submit", function() {
      alert('Your form is going to be submitted now.');
      return;
    })
}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

submitIt();

});
