//define functions here
function getIt(){

$('p').on('click', function(){
  alert('Hey!');
  })

}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
    $('.tasty').css('color', 'red')
  })
}

function pressIt(){
  $('form').on('keydown', function(e){
    var presse = parseInt(e.which);
    if(presse === 71){
      alert('G');
    }
  })
}

function submitIt(){
$('form').on('submit', function(){
  alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
