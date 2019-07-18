var number1ip;
var number2ip;
var resulttxt = document.getElementById("resulttxt");
let addbtn = document.getElementById("add");
var subtractbtn = document.getElementById("subtract");
var multiplybtn = document.getElementById("mulitply");
var dividebtn = document.getElementById("divide");

(function () {
    add.disabled = true;
    subtract.disabled = true;
    multiply.disabled = true;
    divide.disabled = true;
})();

function outfocusnum() {
    number1ip = document.getElementById("number1").value;
    number2ip = document.getElementById("number2").value;
    verify(number1ip, number2ip);
}

function verify(number1ip, number2ip) {

    if (number1ip + "".length != 0 && number2ip + "".length != 0) {

        add.disabled = false;
        subtract.disabled = false;
        multiply.disabled = false;
        divide.disabled = false;
    }
    else {
        add.disabled = true;
        subtract.disabled = true;
        multiply.disabled = true;
        divide.disabled = true;
    }
}

function getresult(element) {
    var firstNumber = parseInt(number1ip);
    var secondNumber = parseInt(number2ip);
    console.log(element.value);
    switch (element.value) {
        case '1':
            console.log(firstNumber + secondNumber);
            resulttxt.innerHTML = "Result: " + (firstNumber + secondNumber);
            break;
        case '2':
            resulttxt.innerHTML = "Result: " + Math.abs(firstNumber - secondNumber);
            break;
        case '3':
            resulttxt.innerHTML = "Result: " + (firstNumber * secondNumber);
            break;
        case '4':
            resulttxt.innerHTML = "Result: " + (firstNumber / secondNumber);
            break;
        default:
    }
}

