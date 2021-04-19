
  var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6 + 1);
  var randomImageSource = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
  // All is attached with querSelector becaause we have more than one image .



  var randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2 * 6 + 1);
  var randomImageSource = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);
  //Here the [1] is because we have more than one src i.e more than one images

  if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 WON";
  }
  else if(randomNumber2 > randomNumber1)
  document.querySelector("h1").textContent = "Player 2 WON 🚩";
  else
  document.querySelector("h1").textContent = "🚩 Draw 🚩";

  function refreshPage() {
    window.location.reload();
  }
