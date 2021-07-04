//define functions here

function getIt() {
  $('p').on("click", function(click) {
    window.alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function(load) {
    $("img").addClass("tasty");
  })
}

function pressIt() {
  $(document).on("keydown", function(keydown) {
    if(keydown.which == 71) {
      alert('G was pressed');
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
    })
}

$(document).ready(function(){

// call functions here


});
