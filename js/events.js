//define functions here
function getIt()
{
  $('p').on("click", function(){
    alert('Hey!')
  });
}

function frameIt()
{
  $('head').append('<style> .tasty {border: 3px solid #ff0000;} </style>')
  $('img').on("load", function(){
    $('img').addClass("tasty")
  });
}

function pressIt()
{
  $('input#typing').on("keydown", function(e){
    if(e.which === 71) {
      alert("You pressed 'g'")
    }
  });
}

function submitIt()
{
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.")
  });
}


$(document).ready(function()
{
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
