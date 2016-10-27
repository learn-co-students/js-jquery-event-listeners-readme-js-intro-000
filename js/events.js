//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

// bind load event to add "tasty" class to the image (adding red outline)
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

// bind keydown event to input field and alerts user when they press 'g' key
function pressIt(key) {
  $('#typing').on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
})
}

// binds a submit event to form and alerts user when form will be submitted
function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
    return;
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
