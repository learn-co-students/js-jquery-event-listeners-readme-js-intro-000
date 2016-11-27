//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
});
}

function frameIt() {
  $('img').on("load", function(){
    console.warn("in frame it before tasty assignment");
    $('img').addClass('tasty')
});
}

function pressIt() {
  $('#typing').on("keydown", function(event){
    console.warn("in keydown key is " + (event.detail || event.which));
    //if(event.key==="g"){
    if((event.detail || event.which)===71){
      alert("You have pressed g")
    }
});
}

function submitIt() {
  $('form').on("submit", function(){
      alert("Your form is going to be submitted now.")
});
}
