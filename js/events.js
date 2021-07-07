//define functions here
var getIt = () => {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

var frameIt = () => {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

var submitIt = () => {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
    return
  })
}

var pressIt = () => {
  $('form').on('keydown', function(key) {
    if(key.which == 71){
      alert('g was pressed')
    }
  })
}

$(document).ready(function(){

// call functions here

});
