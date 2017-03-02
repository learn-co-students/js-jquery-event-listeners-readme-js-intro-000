//define functions here


$(document).ready(function(){

 $('img').addClass('tasty');

});
function getIt(){
 $("p").on('click', function() {
    alert('Hey!');
  });

}

function frameIt(){

  $("img").load(function() {

      $(this).css('border', "solid 2px red");
    });


}


function pressIt(){
$(document).on('keydown', function(key) {
  if (key.which == 71){
    alert('g was pressed');
  }
 });


}


function submitIt(){


  $(document).on('submit', function() {

      alert("Your form is going to be submitted now.");

   });


}
