//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  // Issue: gets called in "learn" (tests) but does not called on browser!
  $('img').on('load', function() {
    this.classList.add('tasty');
    // $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    const strChar = 'g'.toUpperCase();      // which returns the ascii code of the capital letter
    if (key.which === strChar.charCodeAt(0)) {   // wanring: which is deprecated! use "key"
    // Issue: in browser is ok but in "learn" (tests) gives an error : 
    //        Cannot read property 'toUpperCase' of undefined
    // if (key.key.toUpperCase() === strChar) {   
      alert('You pressed the button: '+key.key);
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
// $(function() {
  console.log('DOM is loaded...');

  // call functions here
  
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

//  frameIt();
