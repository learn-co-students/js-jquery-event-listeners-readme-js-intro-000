//define functions here

function getIt () {
  $("p").on("click", function () {
    alert('hey');
  })
}

function frameIt () {
  $("img").load("load", function() {
    $("img").attr("class", "tasty")
  })
}

function pressIt () {
  $("input").on("keydown", function (e) {
    if( e.which === 71 ) {
        alert('correct value')
    }
  })
}

function submitIt () {
  $("form").on("submit", function () {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

getIt();
frameIt();
pressIt();
submitIt();



});
