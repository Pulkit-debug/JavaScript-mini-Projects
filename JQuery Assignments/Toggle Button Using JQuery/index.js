$("#toggle").css({
  backgroundColor: "white",
  border: "2px solid black",
  height: "20%",
  width: "25%",
  position: "absolute",
  top: "30%",
  left: "37%",
  borderRadius: "100px",
});

$("#toggle-circle").css({
  backgroundColor: "black",
  border: "2px solid white",
  height: "96%",
  width: "37%",
  borderRadius: "100px",
  position: "relative",
  bottom: "-0.6%",
  left: "0.5%",
  transition: "all 1s ease-in-out",
});

$("h1").css({
  position: "absolute",
  top: "60%",
  left: "32%",
  fontSize: "3rem",
  transition: "all 1s ease-in-out",
});
var body = $("body");

body.css({
  transition: "all 1s ease-in-out",
});
var on = false;

$("#toggle").on("click", function () {
  if (!on) {
    body.css({
      backgroundColor: "black",
    });
    var ball = $("#toggle-circle");
    ball.css({
      left: "61.5%",
    });
    $("h1").css({
      color: "white",
    });
    on = true;
  } else {
    $("#toggle-circle").css({
      bottom: "-0.6%",
      left: "0.5%",
    });
    body.css({
      backgroundColor: "white",
    });
    $("h1").css({
      color: "black",
    });
    on = false;
  }
});
