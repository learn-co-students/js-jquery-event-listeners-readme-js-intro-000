//define functions here
function getIt(){
  $("p").click(function(){
    alert("Hey!");
  })
}

function frameIt() {
  $('img').load(function(){
    $('img').addClass('tasty');
  })
}

function submitIt() {
  $('form').submit(function(){
    alert("Your form is going to be submitted now.");
  })
}

function pressIt() {
  $(document).on('keydown' , function(key){
    if (key.which == 71){
      alert("g was pressed");
    }
  })
}

$(document).ready(function(){
  getIt();
  frameIt();

  submitIt();
  pressIt();
// call functions here

});
