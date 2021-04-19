var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0;i< numberOfDrums;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {
    var buttonInnerHTML = this.innerHTML;

    keyPress(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }

}
document.addEventListener("keydown", function(event) {
keyPress(event.key);
buttonAnimation(event.key);
});

function keyPress(key) {
  switch (key) {
    case "a":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "s":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "d":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "f":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "l":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();break;

    break;
    default:
          console.log(buttonInnerHTML);
  }

}

function buttonAnimation(currentButton) {

var activeButton = document.querySelector("." + currentButton);
activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed"); // To remove the animation that is applied
}, 100);

}
