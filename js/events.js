//define functions here
function getIt() {
  $("p").on("click",function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img').on('load',function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $("input#typing").on('keydown', function(key) {
    if (key.which == 71) {
      alert('g was pressed');
      return;
    }
  });
}

function submitIt(){
  $( "form" ).submit(function() {
    alert('Your form is going to be submitted now.');
    return
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
