function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $(document).ready(function(){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $(document).on('keydown', function(g){
    if ((g.which | g.detail) === 71){
      alert("You've pressed the g key.")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
// call functions here
getIt()
pressIt()
frameIt()
submitIt()

});
