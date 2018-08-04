//Define functions
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
    return;
  })
}

function frameIt(){
  $(window).on('load', function(){
    $('img').attr('class','tasty');
    return;
  })
}

function pressIt(){
  $('form').on('keydown', (e) => {
    if(e.which === 71){
      alert("G was pressed!");
      return;
    }
  })
}

function submitIt(){
  $('form').on('submit', ()=>{
    alert('Your form is going to be submitted now.');
    return;
  })
}

//call functions
$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
