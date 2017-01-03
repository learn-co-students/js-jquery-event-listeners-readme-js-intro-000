function getIt () {
  $('p').on('click', function () {
    alert('Hey!');
  })
}

function pressIt () {
  $('input').on('keydown', function(key) {
    if (key.which == 71)
    {
   alert('You have pressed the g key');
   return;
 }
})
}

function submitIt () {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  })
}

function frameIt () {
  $('img').on('load', function () {
    $('img').addClass('tasty');
  })
}


$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
