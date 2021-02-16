var rod1 = document.getElementById("rod1");
var rod2 = document.getElementById("rod2");
var ball = document.getElementById("ball");

// TODO: Resolve Two Bugs in this Game

var rodHeight = rod1.offsetHeight;
var rodWidth = rod1.offsetWidth;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var rod_1_fail = false;
var rod_2_fail = false;

var rod_1_gone = false;
var rod_2_gone = false;

var count = 700;
ball.style.top =
  parseInt(windowHeight - ball.getBoundingClientRect().bottom - rodHeight) +
  "px";
ball.style.left = 50 + "vw";

var divertBallFromTop = rod1.getBoundingClientRect().bottom;
var divertBallFromLeft = parseInt(Math.random() * (windowWidth - rodWidth / 2));

var divertBallFromBottom = rod2.getBoundingClientRect().top - rodHeight;
var bollOut = false;

window.addEventListener("keypress", async function (event) {
  if (event.key === "d") {
    console.log(windowWidth);
    if (count < windowWidth - rodWidth) {
      rod2.style.left = count + 100 + "px";
      rod1.style.left = count + 100 + "px";
      count = count + 100;
      console.log(count);
    }
  } else if (event.key === "a") {
    if (count > 0) {
      rod1.style.left = count - 100 + "px";
      rod2.style.left = count - 100 + "px";

      count = count - 100;
    }
  }
  //   console.log(event.key);
  else if (event.key === "Enter") {
    // calLeftAndRight();

    moveBall();

    // if (ball.style.top === divertBallFromTop + "px") {
    //   console.log("reached");
    // }
    // ball.style.top = 500 + "px";
  }
});

var maxCount = 0;
localStorage.setItem("maximumValue", maxCount);
var moveBall = async () => {
  var maxValueInLocalStorage = localStorage.getItem("maximumValue");
  while (!bollOut) {
    ball_animationToTop();

    await timeout();

    calLeftAndRight();

    if (leftFromBall >= leftFromRod1 && rightFromBall <= rightFromRod1) {
      rod_1_gone = true;
      maxCount++;
      if (maxCount > maxValueInLocalStorage) {
        localStorage.setItem("maximumValue", maxCount);
      }
    } else {
      alert("Your Maximum Score is: " + localStorage.getItem("maximumValue"));
      bollOut = true;
      ball.style.top =
        windowHeight - rod1.getBoundingClientRect().bottom + "px";
      ball.style.left = 50 + "vw";
      resetEverything();
    }

    if (rod_1_gone) {
      ball_animationToBottom();
      rod_1_gone = false;
      rod_2_gone = true;

      await timeout();
      calLeftAndRight();
      if (leftFromBall >= leftFromRod1 && rightFromBall <= rightFromRod1) {
        console.log("oK");
        maxCount++;
        if (maxCount > maxValueInLocalStorage) {
          localStorage.setItem("maximumValue", maxCount);
        }
      } else {
        bollOut = true;
        alert("Your Maximum Score is: " + localStorage.getItem("maximumValue"));
        resetEverything();
      }
    }
  }
  bollOut = false;
};

var resetEverything = () => {
  ball.style.top =
    parseInt(windowHeight - rod1.getBoundingClientRect().bottom - rodHeight) +
    "px";
  ball.style.left = 50 + "vw";
  rod1.style.left = 700 + "px";
  rod2.style.left = 700 + "px";
};

var ball_animationToTop = () => {
  ball.style.top = parseInt(divertBallFromTop) + "px";
  divertBallFromLeft = parseInt(Math.random() * (windowWidth - rodWidth / 2));
  ball.style.left = divertBallFromLeft + "px";
  console.log(divertBallFromLeft);
};

var ball_animationToBottom = () => {
  ball.style.top = parseInt(divertBallFromBottom) + "px";
  divertBallFromLeft = parseInt(Math.random() * (windowWidth - rodWidth / 2));
  ball.style.left = divertBallFromLeft + "px";
  console.log(divertBallFromLeft);
};

var timeout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });
};

var calLeftAndRight = () => {
  leftFromBall = ball.getBoundingClientRect().right;
  rightFromBall = ball.getBoundingClientRect().left;
  leftFromRod1 = rod1.getBoundingClientRect().left;
  rightFromRod1 = rod1.getBoundingClientRect().right;
};
