var pictureArray = ["url('../img/picture1.jpg')", "url('../img/picture2.jpg')", "url('../img/picture3.jpg')"];
var colorArray = ["brown", "blue", "red"];
function changeDisplay(DOMElement, pictureArray, id){
  $(DOMElement).css("background-color", pictureArray[id]); //change background-color to background-image once we have images
}

$(document).ready(function() {

});
