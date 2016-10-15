//define functions here
$(document).ready(function(){
 console.log("Document ReadY");
$('p').on('click',getIt);
$('img').on('click', frameIt);
$(document).on('submit', submitIt);
$('#typing').on('keydown', {'test':'7'}, pressIt);

});

function getIt(e) {
  alert('GET IT');
}

function frameIt () {
  $('img').addClass("tasty");
}

function pressIt () {
//  alert("g key has been pressed");
$('#typing').on('keydown', function(event){

  if ( event.which=== 71) {
  alert("g key has been pressed");}
 })



}

function submitIt () {
alert ("Your form is going to be submitted now.");

}
