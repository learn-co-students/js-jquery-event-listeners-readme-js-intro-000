//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){

  $('p').on('click',function(event){ alert('Hey!')})
}

function frameIt(){
 $('img').on('load', function (){
   $('img').addClass('tasty')
 })
}

function pressIt(){
  $('input').on('keydown', function(key) {
  if (key.which === 71){
    alert('g was pressed');
  }
});
}

function submitIt(){
  $(document).on('submit',function(){ alert("Your form is going to be submitted now.")})
}
