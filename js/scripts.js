// business logic

var spaceProps = {
  background = "url('../img/')"
}

// handles input from textbox
function communicate(input) {
  return "Hello there " + input + ".";
}

// array of images that will show in the pilot window
var pictureArray = ["url('../img/picture1.jpg')", "url('../img/picture2.jpg')", "url('../img/picture3.jpg')"];
var colorArray = ["brown", "blue", "red"];
function changeDisplay(DOMElement, pictureArray, id){
  $(DOMElement).css("background-color", pictureArray[id]); //change background-color to background-image once we have images
}

// switches color of console from grey to red
function switchColor(color) {
  $("#trapezoid").css("border-bottom", "25em solid red");
  $("#triangle-left ").css("border-right", "35em solid red");
  $("#triangle-right").css("border-left", "35em solid red");
}

$(document).ready(function() {
  $("#switchColor").click(function(){
    switchColor();
  });
  $("#textSubmit").click(function(){
    var input = $("#textInput").val();
    alert(communicate(input));
  });
});
