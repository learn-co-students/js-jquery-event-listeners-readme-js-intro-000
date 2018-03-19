//define functions here

function getIt(){
  $('p').on('click', function(){alert("Hey!")})
  //bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".
}
function frameIt(){
  $('img').on('load',(function() {$('img').addClass('tasty')}))
  //bind the load event that adds the class tasty to the image to add a red frame to the image.
}

function pressIt(){
  $('#typing').on('keydown',function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
})
  //bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.
}

function submitIt(){
  $("form").on("submit", function() {
  // if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now.');
  //   return;
  // }
  // alert("you entered the wrong value");
  // return;
});
  //bind a submit event to the form that alerts "Your form is going to be submitted now."
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
