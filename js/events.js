// define functions here
// Selectors getIt() binds a click event to the paragraph
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

// Selectors frameIt() binds an event that frames the minion when the page loads
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

// Selectors submitIt() binds an event that alerts "Your form is going to be submitted now." when the form is submitted
function submitIt() {
  $(document).on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}

// Selectors pressIt() pressIt() binds an event that alerts the user when the g key was pressed down
// Selectors pressIt() does not alert if another key is pressed
function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71) {
      alert('g was pressed');
    }
  });
}

$(document).ready(function(){
  // call functions here
  getIt();
  frameIt();
  submitIt();
  pressIt();
});
