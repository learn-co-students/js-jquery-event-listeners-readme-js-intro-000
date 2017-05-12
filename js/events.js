//define functions here

$(document).ready(function(){
});

function getIt() {
$( "p" ).click(function() {
  alert( "Hey!" );
});
}


function frameIt() {
  $('img').load(function() {
    $("img").addClass("tasty");
     })
}


function pressIt() {
  $('form').keydown(function(key) {
    if (key.which === 71) {
      alert( "Hey G!" );
         }
     })
}
/*function submitIt() {
  $('form').keydown(function(key) {
    if (key.which === 71) {
      alert( "Hey G!" );
         }
     })
}
*/

function submitIt(){
   $("form").on("submit", function(){
     alert("Your form is going to be submitted now.")
   })
 }
