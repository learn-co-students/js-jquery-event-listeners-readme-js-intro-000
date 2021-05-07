//define functions here

$(document).ready(function(){

// call functions here

});


function getIt(){
  $("p").on("click", () =>{
    alert("Hey!");
  })
}

function frameIt(){
  $("img").on("load", () => {
    let img = document.getElementsByTagName('img')[0];
    img.className += "tasty"
  });
}

function pressIt(){
  $("#typing").on("keydown", (key) => key.which === 71 ? alert("G") : null);
}

function submitIt(){
  $("form").on("submit", () => alert("Your form is going to be submitted now."))
}
