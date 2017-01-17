//define functions here
function getIt() {
    alert('Hey!')
}

function frameIt() {
    $('img').attr( 'class', 'tasty' )
}

function pressIt(){
    $('#typing').on('keydown', function(key){
      if(key.which == 71){
          alert('G whiz.');
      }
    })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
//call functions here

 $('p').on('click', getIt)
 $('img').on('load', frameIt)
 $('form').on('keydown', pressIt)
 //when pressIt is called, the alert shows up in the window more than one time. Not sure how to fix this.
 $('form').on('submit', submitIt)

});
