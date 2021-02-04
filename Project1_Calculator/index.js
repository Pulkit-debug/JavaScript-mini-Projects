var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

function isOperator(value) {
    if(value == "-" || value == "+" || value == "*" || value == "/") return true;
    return false;
}

var num1 = 0;
var num2 = null;
var operator = null;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    var text = display.textContent.trim();

    if(isOperator(value)) {
        operator = value;
        num1 = parseFloat(text);
        display.textContent = "";
    }
    else if(value == "ac") {
        display.textContent = "";
    }
    else if(value == "sign") {
        num1 = parseFloat(text);
        num1 = -1 * num1;
        display.textContent = num1;
    }
    else if(value == "%") {
        num1 = parseFloat(text);
        num1 = num1 / 100;
        display.textContent = num1;
    }
    else if(value == ".") {
        if(text.length && !text.includes("."))
        display.textContent = text + ".";
    }
    else if(value == "=") {
        num2 = parseFloat(text);
        var result = eval(num1 + " " + operator + " " + num2);
        if(result) {
            display.textContent = result;
            num1 = result;
            num2 = 0;
            operator = 0;
        }
    }
    else {
        display.textContent += value;
    }

  });
}
