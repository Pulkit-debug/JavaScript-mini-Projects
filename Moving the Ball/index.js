var ball = document.getElementById("ball");
// var ballContainer  = document.getElementById("ball-area");
var ballContainer  = document.getElementsByTagName("body")[0];
// container locations

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

// var top = parseInt(ballContainer.getBoundingClientRect().top) - parseInt(bottom) - ballWidth;
// var left = parseInt(ballContainer.getBoundingClientRect().left) - parseInt(right) - ballWidth ;
// var right = parseInt(ballContainer.getBoundingClientRect().right) - parseInt(left) - ballWidth ;
// var bottom = parseInt(ballContainer.getBoundingClientRect().bottom) - parseInt(top) - ballWidth;

window.addEventListener("keypress", function(event) {
    move(event.key);
}) ;

function move(keyPressed)  {
        // console.log(keyPressed);
        // everytime the key presses calculate the top and left
        var top  = parseInt(ball.style.top);
        var left = parseInt(ball.style.left);
        var count = 0;        
        if(keyPressed === "w") {
            if(top > 20) {
                ball.style.top = ((top - 20) + "px");
            }
        }
        else if(keyPressed === "a") {
            if(left > 20) {
                ball.style.left = ((left - 20) + "px");
            }
        }
        else if(keyPressed === "s") {
            if(top < (window.innerHeight - ballHeight) - 20) {
                ball.style.top = ((top + 20) + "px");
            }
        }
        else if(keyPressed === "d") {
            if(left < (window.innerWidth - ballWidth) - 20) {
                ball.style.left = ((left + 20) + "px");
            }
        }
        else {
            console.log("out of boundries");
        }
}