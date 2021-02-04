var button = document.getElementById("btn");
var displayCount = document.getElementById("display-count");





function getInput() {
    
button.addEventListener("click", function () {
  var num = parseInt(document.getElementById("input-field").value);
  var count = 0;
  var currentNumber = document.querySelector(".current");
  var nextNumber = document.querySelector(".next");


  // if user again presses the button then reset everything
  
  resetNumbers(currentNumber, nextNumber);

let interval = setInterval(function() {
    if(count === num) {
        clearInterval(interval);
        alert("Time's up Buddy!!");
        // displayCount.textContent = "";
        return;
    }
    changeCount(currentNumber, nextNumber);
    count++;
}, 1000);
});
}

getInput();


function resetNumbers(currentNumber, nextNumber) {
    currentNumber.innerText = 0;
    nextNumber.innerText = 1;
}

function changeCount(currentNumber, nextNumber) {
    nextNumber.classList.add("animate");

    setTimeout(function() {
     currentNumber.innerText = nextNumber.innerText;
     nextNumber.classList.remove("animate");
     nextNumber.innerText = parseInt(nextNumber.innerText) + 1;
    }, 500)
}
