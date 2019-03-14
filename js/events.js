function getIt()
{
  alert("Hey!")
}

function frameIt()
{
  $(`img`).addClass(`tasty`)
}

function pressIt(event){
$('#typing').on('keydown', function(key) {
  if (key.which === 71) {
    alert("You pressed 'g'!")
  }
})
  }

function submitIt()
{
  alert("Your form is going to be submitted now.")
}

$(document).ready(function(){
$(`p`).on("click", getit())
$(`img`).on("load", frameIt())
$("form").on("submit", submitIt())
});
