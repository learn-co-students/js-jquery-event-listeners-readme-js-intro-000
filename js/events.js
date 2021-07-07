//define functions here

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
});

function getIt() {
  $('p').on("click", function(){
    alert(`"Hey!"`);
    //action you want taken
});
}

function frameIt() {
  $('img').on("load", function(){
    $("img").addClass("tasty");
});
}

function pressIt() {
  $('form input#typing').on("keydown", function(key){
    if(key.which == 71){
      alert('G was pressed');
  }
});
}

function submitIt() {
  $('form').on("submit", function(){
    alert(`Your form is going to be submitted now.`);
    //action you want taken
});
}
