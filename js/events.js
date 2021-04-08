/*

Define a function getIt that does not accept a parameter.
The function should bind a click event to the p tag.
When the paragraph is clicked, the function should alert "Hey!".

Define a function frameIt that does not accept a parameter.
The function should bind the load event that adds the class tasty
to the image to add a red frame to the image.

Define a function pressIt that does not accept a parameter.
The function should bind a keydown event to the input field of
the form that alerts a user when they have pressed the G key.

Define a function submitIt that does not accept a parameter.
The function should bind a submit event to the form that alerts
"Your form is going to be submitted now.".

*/

//define functions here
var getIt = () =>
  {
    $('p').on('click', ()=>{
      alert('Hey!');
    })
  }
var frameIt = () =>
  {
    $('img').on('load', ()=>
    {
      $('img').addClass('tasty');
    })
  }
var pressIt = () =>
  {
    $('#typing').on('keydown', (e)=>
    {
      if(e.which === 71)
        {
          alert('Yes!');
        }
    })
  }
var submitIt = () =>
  {
    $('form').on('submit', ()=>
    {
      alert("Your form is going to be submitted now.");
    })
  }

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
