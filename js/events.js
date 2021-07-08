
  function getIt(){
    $('p').on('click', function(){
      alert('Hey!');
    });
  }

  function frameIt(){
    $('img').on('load', function(){
      $(this).addClass('tasty');
    });
  }

  function pressIt(){
    $('input').on('keydown', function(e){
      if (e.which === 71) alert("G pressed.");
    });
  }

  function submitIt(){
    $('form').on('submit', function(){
      alert('Your form is going to be submitted now.');
    })
  }

$(document).ready(function(){
 
});
