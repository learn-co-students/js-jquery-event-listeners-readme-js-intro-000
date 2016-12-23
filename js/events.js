function getIt(){
  $('p').on('click', alert('Hey!'))
}

function frameIt(){
  $('img').addClass('tasty')
}

function pressIt(){
   $('#typing').on('keydown', function(e){
    if(e.which === 71 || e.detail === 71){
      alert('You pressed g')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
 getIt();
 frameIt();
 pressIt();
 submitIt();
});
