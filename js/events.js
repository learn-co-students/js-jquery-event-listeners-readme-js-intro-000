function getIt() {
  $('p').on("click", () => alert('Hey!'));
}

function frameIt() {
  $(document).ready(function(){ $('img').addClass('tasty')});
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('s was pressed');
  }
});
}

function submitIt() {
  $("form").on("submit", () => alert('Your form is going to be submitted now.'));
}

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});
