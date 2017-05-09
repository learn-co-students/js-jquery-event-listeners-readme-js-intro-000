//define functions here

$(document).ready(function(){
  //getIt();
  //frameIt();
  pressIt();
  //submitIt();

  $('p').on('click',getIt);
  $('img').on('load',frameIt);
  //$('input').on('keydown',pressIt);
  $('form').on('submit', submitIt);

});

function getIt(){
  alert("Hey!");
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71){
        alert('G was pressed');
    }
  });
}

function submitIt(){
  alert("Your form is going to be submitted now.");
}
