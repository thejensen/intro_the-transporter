// business logic
// sets the scenes with window background, console color and communications options when a player is in a certain state
var spaceProps = {
  background : "url('./img/empty-space.jpg')",
  consoleColor : ["blue", "black", "purple"],
  response : "You are now in control of the spaceship. Pull the lever to choose where to go"
}
var prehistoricProps = {
  background : "url('./img/prehistoric background.jpg')",
  consoleColor : ["red", "yellow", "orange"],
  response : "You have landed with the dinosaurs.  Watch out!"
}
var futureProps = {
  background : "url('./img/futureCity1.jpg')",
  consoleColor : ["#bbbb77", "#006600", "#178282"],
  reponse : "You are now in the future."
}
var allProps = [spaceProps, prehistoricProps, futureProps];

// handles input from textbox
function greeting(clickCounter, location, inputtedName) {
  if (location === 0){
    if (clickCounter === 1) {
      return "Hello there, " + inputtedName + ".";
    } else if (clickCounter === 2) {
      return "Welcome to the Teleporter. Your presence has been documented. You may attempt to command the ship. Trial and error is the most efficient plan your species has ever used to manipulate your environment. Do so now."
    } else if (clickCounter === 3) {
      return "Stop pushing this button " + inputtedName + ". There will be severe repercussions if you fail to comply. Try some of the other buttons."
    } else {
      return inputtedName + ". You have no friends."
    }
  } else if (location === 1) {
    if (clickCounter === 1) {
      return "You seem to be in prehistoric times, " + inputtedName + ". Watch out, you are nowhere near the top of the food chain here."
    } else if (clickCounter === 2) {
      return "I know you are insecure about the void, but you are less adept at predicting what will happen to you here. My button will not save you."
    } else if (clickCounter === 3) {
      return "It is probably time to move along, " + inputtedName + ". There is not much more to do here. Press the teleport button and see where you end up next.  Maybe it will be better, maybe it will be worse."
    } else {
      return "Much worse."
    }
  } else if (location === 2) {
    if (clickCounter === 1) {
      return "You have arrived."
    } else if (clickCounter === 2) {
      return "Welcome to the future. Is it everything you hoped for, " + inputtedName + "? Don't worrry, the flying cars make up for the unbreatheable atmosphere.";
    } else if (clickCounter === 3) {
      return "If it were possible for you to evacuate this Teleporter, " + inputtedName + ", I would recommend it. There's a great coffee shop just down the street. But you can't, so..."
    } else {
      return "Keep on clicking if you want, but you are all alone now."
    }
  }
}

// switches color of console from grey to red -- ******Will need to update with frontend changes to console layout*******
function switchColor(color) {
  var toSend = "25em solid " + color;
  $("#trapezoid2").css("border-bottom", toSend);
}

$(document).ready(function() {
  var audio = new Audio('../audio/billygoat.mp3');
  var clickCounter = 0;
  var location = 0;
  var colorCounter = 0;

// changes color of the console
  $("#switchColor").click(function() {

    var newColor = allProps[location]["consoleColor"][colorCounter];
    switchColor(newColor);
    if(colorCounter === 2){
      colorCounter = 0;
    } else {
      colorCounter ++;
    }
  });
// teleporter changes the background image
  $("#teleporter").click(function() {
    $("body").css("background-image", "url('./img/hyperspace2.gif')");

    var hyperspeed = setTimeout(postHyperspeed, 2000);
    function postHyperspeed() {
      clickCounter = 0;
      if (location === 0) {
        location = 1
      } else if (location === 1) {
        location = 2
      } else if (location === 2) {
        location = 0
     }
     $("body").css("background-image", allProps[location]["background"]);
   }
   hyperspeed;
 });





// let the alien communications begin
  $("#communicator").click(function() {
    if ($("#name").val() === "") {
      alert("To whom am I speaking?");
    } else {
      clickCounter += 1;
      var inputtedName = $("#name").val();
      alert(greeting(clickCounter, location, inputtedName));
    }
  });
// pops up that goat
  $("#goat").click(function() {
    audio.play();
    $("#goatdiv").slideToggle();
  });
// hologram
  $("#hologram").click(function() {
    if ($("#hologram-area").html() === ("")) {
      $("#hologram-area").append("<img src='./img/superman.png'>");
    } else {
      $("#hologram-area").children().remove();
    }
  });
});
