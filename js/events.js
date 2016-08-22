//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
    return;
  })
}

function frameIt(){
  $('img').on('load', function(){
     $('img').addClass("tasty");
  });
}

function submitIt(){
    $("form").on("submit", function(){
      //var value = $("input:first").val();
      // if(value.length > 0){
      //   alert("Your form is going to be submitted now.");
      //   return;
      // }
      // alert("You haven't entered anything yet.");
      // return;
      alert("Your form is going to be submitted now.");
    });
}

function pressIt(){
  $(document).on('keydown', function(key){
    if(key.which === 71){
      alert("You pressed the 'g' key!");
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
