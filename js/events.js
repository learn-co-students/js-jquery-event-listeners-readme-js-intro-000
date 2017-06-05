//define functions here

$(document).ready(function(){

// call functions here

});


function getIt() {
    $('p').on('click', function() { 
        alert("Hey!");
    });
}

function frameIt() {
    $('img').on('load', function(){
        $('img').addClass('tasty');
    }); 
}

function pressIt() {
    $('#typing').on('keydown', function(key) {
        console.log(key.which)
        if(key.which === 71) {
            alert("You pressed the G key!")   
        }
    });
}


function submitIt () {
    $('form').on("submit", function() {
        if( $('input:first').val() ) {
          alert("Your form is going to be submitted now."); 
        } else {
          alert("Your form is going to be submitted now.");   
        }
    });
}




















