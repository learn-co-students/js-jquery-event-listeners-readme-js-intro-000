//define functions here
var getIt = () => {$("p").on("click",n => alert("Hey!"))};
var frameIt = () => {$("img").on("load",function() {$("img").addClass("tasty")})};
var pressIt = () => {$("#typing").on("keydown",function(key){if (key.which == 71){alert("g was pressed")}})};
var submitIt = () => {$("form").on("submit",n => alert("Your form is going to be submitted now."))};
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
