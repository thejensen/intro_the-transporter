// business logic

var spaceProps = {
  background : "url('../img/hyperspeed.gif')",
  consoleColor : "blue",
  response : "You are now in control of the spaceship. Pull the lever to choose where to go"
}

var prehistoricProps = {
  background : "url('../img/prehistoric background.jpg')",
  consoleColor : "red",
  response : "You have landed with the dinosaurs.  Watch out!"
}

var futureProps = {
  background : "url('../img/futureCity1.jpg')",
  consoleColor : "black",
  reponse : "You are now in the future."
}

function State() {
  this.consoleColor;
  this.textInput;
}

// handles input from textbox
function communicate(input) {
  return "Hello there " + input + ".";
}

// array of images that will show in the pilot window
var pictureArray = ["url('../img/hyperspeed.gif')", "url('../img/prehistoric background.jpg')", "url('../img/futureCity1.jpg')"];
var colorArray = ["brown", "blue", "red"];
function changeDisplay(DOMElement, pictureArray, i){
  $(DOMElement).css("background-image", pictureArray[i]); //change background-color to background-image once we have images
}

// switches color of console from grey to red
function switchColor(color) {
  $("#trapezoid").css("border-bottom", "25em solid red");
  $("#triangle-left ").css("border-right", "35em solid red");
  $("#triangle-right").css("border-left", "35em solid red");
}

$(document).ready(function() {
  var newState = new State();
  $("#switchColor").click(function(){
    switchColor();
  });
  $("#textSubmit").click(function(){
    var input = $("#textInput").val();
    newState.textInput = input;
    alert(communicate(input));
  });
});
