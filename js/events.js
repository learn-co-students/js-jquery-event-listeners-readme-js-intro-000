//define functions here
function getIt(){
  $('p').on('click', function(){alert('Hey!');
    
  });
}

function frameIt() {
  $('img').on('load', function(){
  $('img').addClass('tasty');
});
}

function submitIt(){
  $('form').on('submit', function() { 
    alert('Your form is going to be submitted now.');
});
}

function pressIt() {
  $(document).on('keydown', function(e){
    const key = parseInt(e.detail || e.which);
    
    if(key === 71) {
      alert('The "g" key was pressed.');
    }
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  submitIt();
  pressIt();


});
