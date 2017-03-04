//define functions here
function getIt() {
  $('p').on("click", function() {
    alert ('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(){
    border = "red";
    //$('img').attr('id', "tasty")
    $('img').addClass("tasty");
})
}

function pressIt() {
  $('input').on("keydown", function(key){
    if (key.which===71) {
      alert('You pressed the g!')
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
