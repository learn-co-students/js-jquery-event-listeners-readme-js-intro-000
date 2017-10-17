//define functions here
function getIt(){
  $('p').on('click', (e) =>{
    alert('Hey!')
  })
}
function frameIt(){
  $('img').on('load', (e)=>{
    $('img').addClass("tasty");
  })
}
function pressIt(){
  $('input').on('keydown', (e)=>{
    if (parseInt(e.which || e.detail) === 71){
      alert('You have successfully found a G-spot!')
    }
  })
}
function submitIt(){
  $('form').on('submit', (e)=>{
    alert('Your form is going to be submitted now.');
  })
}
$(document).ready(function(){

// call functions here

});
