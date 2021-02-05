var catchBox = document.getElementById("catch-box");

catchBox.addEventListener("mouseover", function() {
    randomTop = Math.floor(Math.random() * 70);
    randomLeft = Math.floor(Math.random() * 70);
    // console.log(randomHeight + " " + randomWidth);
    catchBox.style.top = (randomTop + "%");
    catchBox.style.left = (randomLeft + "%");
});