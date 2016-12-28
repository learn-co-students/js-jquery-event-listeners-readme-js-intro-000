//define functions here
function getIt() {
    $('p').on('click', function() {
        alert('Hey!');
    })
}

function frameIt() {
    $('img').on('load', function() {
        document.getElementsByTagName('img')[0].setAttribute('class', 'tasty')
    });
}

function pressIt() {
    $('input').on('keydown', function(key) {
        if (key.which == 71) {
            alert('You pressed the letter "g".');
            return;
        }
        return;
    })
}

function submitIt() {
    $('form').on('submit', function() {
        alert('Your form is going to be submitted now.');
        return
    })
}

$(document).ready(function(){
// call functions here
    getIt();
    frameIt();
    pressIt();
    submitIt();
});
