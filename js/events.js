//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on("keydown", function(e) {
    if (e.which === 71) {
      alert('G was pressed');
    }
  });
}

//

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
  });
}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

/*

function pressIt() {
  $("form").on("keydown", function() {
    if ($("input").val() === 71) {
      alert('G was pressed');
      return;
    }
    return;
  });
}
*/
