function getIt() {
  $('p').on("click", function() {
    window.alert("Hey!")
  })
}


function frameIt() {
  $('img').addClass("tasty")
}

function pressIt() {
  $('input').on('keydown', function(e) {
      if (parseInt(e.which || e.details) === 71)
      {
        window.alert("G!")
      }
    })
}

function submitIt() {
  $('form').on('submit', function(e) {
    window.alert("Your form is going to be submitted now.")} )
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
