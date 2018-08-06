//define functions here

$(document).ready(function(){

  function getIt() {
    $('p').on('click', function(){
      alert('Hey!')
    });
  }

  function frameIt() {
    $(document).on('load', function(){
      img.classList.add("tasty");
    });
  }

  function pressIt() {
    $(document).on('keydown', function(){
      if(key.which == 70){
        alert('g was pressed');
      }
    });
  }

  function submitIt() {
    $("form").on("submit", function() {
      alert('your form is going to be submitted now');
      return;
    });
  }
});
