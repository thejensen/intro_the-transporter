

// BEGIN BUSINESS LOGIC
// sets the scenes with window background, console color and communications options when a player is in a certain state
var spaceProps = {
  background : "url('./img/empty-space.jpg')",
  consoleColor : ["blue", "black", "purple"],
  response : function(clickCounter, name) {
    $("#next").show();
    if (clickCounter === 1) {
      $("#creature").fadeIn(9000);
      return "Hello, " + name + ". I am Arithna'Jag. Deep space can be a lonely place. I am here for you.";
    } else if (clickCounter === 2) {
      return "You may attempt to command the ship. Trial and error is your only option. This pleases me."
    } else if (clickCounter === 3) {
      return "Stop pushing this button, " + name + ". There will be severe repercussions if you fail to comply. Try some of the other buttons."
    } else {
      $("#next").hide();
      return name + ". You have no friends."
    }
  },
  song : "audio/spaceship.mp3"
}
var prehistoricProps = {
  background : "url('./img/prehistoric background.jpg')",
  consoleColor : ["red", "yellow", "orange"],
  response : function(clickCounter, name) {
    $("#next").show();
    if (clickCounter === 1) {
      return "You seem to be in prehistoric times, " + name + ". Watch out, you are nowhere near the top of the food chain here."
    } else if (clickCounter === 2) {
      return "I know you are insecure about the void, but you are less adept at predicting what will happen to you here. My button will not save you."
    } else if (clickCounter === 3) {
      return "It is probably time to move along, " + name + ". There is not much more to do here. Press the teleport button and see where you end up next.  Maybe it will be better, maybe it will be worse."
    } else {
      $("#next").hide();
      return "Much worse."
    }
  },
  song : "audio/juicy.mp3"
}
var futureProps = {
  background : "url('./img/futureCity1.jpg')",
  consoleColor : ["#bbbb77", "#006600", "#178282"],
  response : function(clickCounter, name) {
    $("#next").show();
    if (clickCounter === 1) {
      return "You have arrived."
    } else if (clickCounter === 2) {
      return "Welcome to the future. Is it everything you hoped for, " + name + "? Don't worrry, the flying cars make up for the unbreatheable atmosphere.";
    } else if (clickCounter === 3) {
      return "If it were possible for you to evacuate this Teleporter, " + name + ", I would recommend it. There's a great coffee shop just down the street. But you can't, so..."
    } else {
      $("#next").hide();
      return "Keep on clicking if you want, but you are all alone now."
    }
  },
  song : "audio/daftpunk.mp3"
}
var inflateProps = {
  background : "url('./img/inflated-city.jpg')",
  consoleColor : ["red", "green", "gold"],
  response : function(clickCounter, name) {
    $("#next").show();
    if (clickCounter === 1) {
      return name + ", you have entered the airspace of Zarthyep, the Inflated City. The rarest spices collected from the depths of the galaxy can be found here."
    } else if (clickCounter === 2) {
      return "All human cargo must be submitted for organ harvesting. The spices must spice something, after all.";
    } else if (clickCounter === 3) {
      var hideCommunicationOutput = setTimeout(communicationOutputHide, 3000);
      function communicationOutputHide() {
        $("#merman").click(function () {
        });
        $("#communication-output").hide();
      }
      $("#merman").fadeIn(7000);
      return "You have failed to comply. The Zroto Kliger is released to destroy you and your vessel. Good work, " + name + ".";
      hideMerman;
    } else {
      $("#next").hide();
      return "Quit mashing buttons, " + name + ". You have no friends here. Leave, n00b."
    }
  },
  song : "audio/girltalk2.mp3"
}

var allProps = [spaceProps, prehistoricProps, futureProps, inflateProps];

// switches color of console from grey to red -- ******Will need to update with frontend changes to console layout*******
function switchColor(color) {
  var toSend = "25em solid " + color;
  $("#trapezoid2").css("border-bottom", toSend);
}

// BEGIN USER INTERFACE LOGIC
$(document).ready(function() {
  var clickCounter = 0;
  var location = 0;
  var colorCounter = 0;
  var userName = "";

  var goat = new Audio();
  goat.src = "audio/billygoat.mp3";

  var warpsound = new Audio();
  warpsound.src = "audio/warp1.mp3";

  var radioSong = new Audio();
  radioSong.loop = true;
  radioSong.src = allProps[0]["song"];

  var spaceOdd1 = new Audio();
  spaceOdd1.src = "audio/spaceoddity1.mp3";

  var spaceOdd2 = new Audio();
  spaceOdd2.src = "audio/spaceoddity2.mp3";


// plays and pauses sound
  function playSound(sound){
    if (!sound.paused) {
      sound.pause();
    } else {
      sound.play();
    }
  }

// changes color of the console
  $("#switchColor").click(function() {
    if (location === 0 || location === 3){
      if(colorCounter === 0){
        spaceOdd1.play();
      } else if (colorCounter === 1){
        spaceOdd2.play();
      }
    }

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
    radioSong.pause();
    warpsound.play();
    $("#communication-output").hide();
    $("#merman").hide();
    $("body").css("background-image", "url('./img/spiral-hyperspace.gif')");
    var hyperspeed = setTimeout(postHyperspeed, 2000);
    function postHyperspeed() {
      clickCounter = 0;
      if (location === allProps.length - 1) {
        location = 0;
      } else {
        location ++;
      }
      radioSong.src = allProps[location]["song"];
      $("body").css("background-image", allProps[location]["background"]);
     }
    hyperspeed;
  });

// let the alien communications begin
  $("#communicator").click(function() {
    $("#hologram-figure").children().remove();
    console.log("button clicked");
    if (userName === "") {
      $("#communication-output").slideDown();
      $("#communication-output-text").text("To whom am I speaking?");
      $("#next").hide();
      $("#name").show();
      $("#submit-name").show();
      $("#dismiss").hide();
    } else {
      clickCounter += 1;
      $("#communication-output").slideDown();
      $("#communication-output-text").text(allProps[location]["response"](clickCounter, userName));
    }
  });

  // submit name
    $("#submit-name").click(function(){
      userName = $("#name").val();
      if (userName !== "") {
        $("#submit-name").hide();
        $("#name").hide();
        $("#communication-output-text").text("Welcome to the Teleporter, " + userName + ". Your presence has been documented.");
        $("#next").show();
        $("#dismiss").show();
      }
    })

  // continue next inside communications
    $("#next").click(function() {
      clickCounter += 1;
      $("#communication-output-text").text(allProps[location]["response"](clickCounter, userName));
    });

  // dismiss inside communications
    $("#dismiss").click(function(){
      $("#communication-output").hide();
    });

// END communications

// pops up that goat
  $("#goat").click(function() {
    goat.play();
    $("#goatdiv").slideToggle();
  });

// hologram
  $("#hologram").click(function() {
    $("#communication-output").hide();
    if ($("#hologram-figure").html() === ("")) {
      $("#hologram-figure").append("<img src='./img/superman.png'>");
    } else {
      $("#hologram-figure").children().remove();
    }
  });

// plays radio
  $("#radio-station").click(function(){
    playSound(radioSong);
  })

});
