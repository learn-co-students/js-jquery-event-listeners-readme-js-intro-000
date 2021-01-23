//define functions here

function getIt() {
    // $('p').on("click", function(){       
    //         alert("Hey!")
    // }) This is used for binding, check this out https://www.w3schools.com/jquery/event_on.asp
    $('p').click(function(){
        alert("Hey!")
    })
}

function frameIt() {
    $('img').load(function(){
        $('img').addClass("tasty")
    })
}

function submitIt() {
    $('form').submit(function(){
        alert("Your form is going to be submitted now.")
    })
}

function pressIt(){
    $('#typing').on("keydown", function(key){
        debugger;
        if (key.which === 71) {
            alert('g was pressed')
        }
    })
}

$(document).ready(function(){

// call functions here

getIt();
frameIt();
submitIt();
pressIt()
});
