//define functions here

$(document).ready(function(){

// call functions here

});
///// code underneath this/////

$('h1').on("click", function(){
  //action you want taken
});

$('img').on('load', function(){
  //actions you want to happen
});

$(document).on('keydown', function(key) {
  if(key.which == 83){
      alert('s was pressed');
  }
});
/*
$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
*/

function getIt () {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt () {
  $('img').first().on('load', function() {
    $('img').first().addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(e){
    // if (e.key === 'g') ==> this is recognized and works the same for the purposes of the test, but not by index-test.js
    if (e.which === 71) {
      alert('You pressed g, you awesome person!')
    }
  })
}

function submitIt () {
  $("form").last().on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

getIt();

frameIt();

pressIt();

submitIt();
/*
$("form").last().on('submit', function() {
  alert('Your form is going to be submitted now.')
})

console.log($("form").last())
*/
