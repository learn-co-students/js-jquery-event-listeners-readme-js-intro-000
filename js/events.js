function getIt () {$('p').on('click', function(){
 alert("Hey!");
  return;
});
return;
                  }

function  frameIt () {$('*').on('load', function(){
 $('img').append(' class="tasty"');
  return;
});









$(document).ready(function(){
getIt ();
frameIt ();

// call functions here

});
