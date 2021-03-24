//define functions here

//$(document).ready(function(){

function getIt(){$('p').on('click', function(){alert('Hey!')});}
//getIt();

function frameIt(){$('img[src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg"]').addClass('tasty');}
//frameIt();

function pressIt(){$('#typing').on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed');
      }
  });
}
//pressIt();

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  });
}
//submitIt();
//});
