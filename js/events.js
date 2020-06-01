//define functions here

function getIt() {
    $('p').on('click', function() {
        alert('CLICK!');
    })
}

function frameIt() {
    $('img').on('load', function() {
        $('img').addClass('tasty')
    })
}

function submitIt() {

    $('form').on('submit', function() {
        alert("Your form is going to be submitted now.")
    })
}

// function pressIt() {
//     $(document).on('keydown', function(key) {
//         if(key.which === "G") {
//             alert("G was pressed")
//         }
//     })
// }

function pressIt() {
    $('#typing').on('keydown', function(e) {
      // g === 71
      if (e.which === 71) {
        alert("You pressed 'g'!")
      }
    })
  }




$(document).ready(function(){

// call functions here

    getIt()
    frameIt()
    submitIt()
    pressIt()

});

