var gamePattern = new Array();

var userClickedPattern = new Array();
var buttonColors = ["red", "blue", "green", "yellow"];


var level = 0;

$(".btn").click(function handler() {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length) {

          // console.log("Success");
          setTimeout(function() {
          nextSequence();
        }, 1000);


        }
          }

     else {
       $("body").addClass("game-over");

       $("h1").text("Game Over, Refresh Page to Restart Game");
       setTimeout(function() {
         $("body").removeClass("game-over");
       }, 200);


       var audio = new Audio("sounds/wrong.mp3");
       audio.play();

       // $(document).keypress(function(event) {
       //   startOver();
       // });
  }
}


function nextSequence() {

  userClickedPattern = [];

  level++;

  $("h1").text("Level " + level);
  var randomNumber = Math.floor((Math.random() * 4));

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColor);
animatePress(randomChosenColor);
}

var flag = false;
$(document).keypress(function(event) {

  if(!flag) {
    flag = true;
  nextSequence();
}
});


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   flag = false;
// }
