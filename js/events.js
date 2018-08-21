function getIt(){
  $('p').on('click', function(){
    alert ('Hey!')
  });
}

function frameIt(){
  $('img').on('load', function{
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $('input').on('keydown', function(){
    if(key.which == 70){
      alert("G was pressed");
    }
  });
}

function submitIt(){
  $("form").on("submit", function(){
    alert('your form is submitted now');
  });
}
});


$(document).ready(function(){
  getIt();
frameIt();
pressIt();
submitIt();
});
