//define functions here
function getIt() {
  $("p").on("click")
  alert("Hey!");
  return;
}


function frameIt() {
  $("img").on("load").addClass("tasty");
  return;
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71){
        alert('s was pressed');
    }
  });
}

function submitIt() {
  $("form input:first").on("submit");
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){

// call functions here

});
