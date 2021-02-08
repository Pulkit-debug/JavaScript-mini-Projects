var scrolled = document.getElementById("scrolled");

function getDocHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.body.clientHeight
  );
  //   return document.body.scrollHeight;
}

var docHeight = getDocHeight();

var windowHeight = window.innerHeight;

window.onresize = function (event) {
  docHeight = getDocHeight();
  windowHeight = windowHeight;
};

window.addEventListener("scroll", function () {
  var scrolledPercent = Math.floor(
    (window.scrollY / (docHeight - windowHeight)) * 100
  );
  scrolled.innerText = scrolledPercent;
});
