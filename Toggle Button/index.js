var circle = document.getElementById("circle");
var heading = document.getElementsByTagName("h1")[0];
var toggleButton = document.getElementById("toggle-button");
var buttonOff = true;
toggleButton.addEventListener("click", function () {
  if (buttonOff) {
    // circle.classList.add("color-white");
    document.getElementsByTagName("body")[0].classList.add("color-black");
    heading.classList.add("color-white");
    circle.style.marginLeft = "98px";
    circle.style.backgroundColor = "white";
    toggleButton.classList.add("white-border");
    toggleButton.style.backgroundColor = "black";
    buttonOff = false;
  } else {
    buttonOff = true;
    document.getElementsByTagName("body")[0].classList.remove("color-black");
    heading.classList.remove("color-white");
    circle.style.marginLeft = "2px";
    circle.style.backgroundColor = "black";
    toggleButton.classList.remove("white-border");
    toggleButton.style.backgroundColor = "white";
  }
});
