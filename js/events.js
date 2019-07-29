//define functions here
function getIt()
  {
    $("p").on("click", function()
      {
        window.alert("Hey!");
      });
  }

function frameIt()
  {
    $("img").on("load", function()
      {
      $("img").addClass("tasty");
      });
  }

function pressIt()
  {
    $("form").on("keydown", function(G)
      {
        if (G.which===71)
          {
            window.alert('G was pressed');
          }
      });
  }

function submitIt()
    {
      $("form").on("submit", function()
        {
          window.alert("Your form is going to be submitted now.");
        });
    }


// call functions here

getIt();
frameIt();
pressIt();
submitIt();
