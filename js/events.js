function getIt(){
  $('p').click(function(){
    alert("Hey!")
});

}


function frameIt(){
  $("img").on("load",(e)=>{
    var img1=document.querySelector('img');
     img1.className="tasty"
  })
}

function pressIt(){
  $('form > input').keydown(function(e){
    if(e.which == 71){
      alert("You have pressed G");
    }
  });
}

function submitIt(){
  $('form').submit(function(){
    alert("Your form is going to be submitted now.");
  });
}



$(document).ready(function(){


// call functions here

});
