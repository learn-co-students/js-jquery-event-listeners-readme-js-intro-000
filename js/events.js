//define functions here

function getIt(){
  $('p').on('click', ()=>{
    alert("Hey!");
  })
}
function frameIt(){
  $('img').on('load', ()=>{
    $('img').addClass('tasty');
  })
}
function pressIt(){
  $('#typing').on('keydown', (e)=>{
    if (e.which === 71){
      alert("the g key was pressed");
    }
  })
}
function submitIt(){
  $(document).on('submit', ()=>{
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){
  getIt(); frameIt(); pressIt(); SubmitIt();
// call functions here

});
